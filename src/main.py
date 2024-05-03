import bibtexparser

TYPE = {
    "inproceedings": "conference",
    "article": "journal",
    "incollection": "book",
}


class Author:
    def __init__(self, prefix, authors, postfix):
        authors_remove_comma = authors.replace(",", "")
        formatted_authors = authors_remove_comma.replace(" and", ",")

        self.authors = f"{prefix}{formatted_authors}{postfix}"

    def __str__(self) -> str:
        return self.authors


class Title:
    def __init__(self, prefix, title, postfix) -> None:
        title = title.replace("'", "\\'")

        self.title = f"{prefix}{title}{postfix}"

    def __str__(self) -> str:
        return self.title


class Year:
    def __init__(self, prefix, year, postfix) -> None:
        self.year = f"{prefix}{year}{postfix}"

    def __str__(self) -> str:
        return self.year


class Book:
    def __init__(self, prefix, bib_entry, postfix) -> None:
        # journalかbooktitleかを振り分ける（それ以外ならエラー）
        if "journal" in bib_entry:
            book = bib_entry["journal"]
        elif "booktitle" in bib_entry:
            book = bib_entry["booktitle"]
        else:
            raise KeyError("not found proper key")

        book = book.replace("'", "\\'")

        self.book = f"{prefix}{book}{postfix}"

    def __str__(self) -> str:
        return self.book


class DOI:
    def __init__(self, prefix, bib_entry, postfix) -> None:
        doi = ""
        if "doi" in bib_entry:
            doi = f"https://doi.org/{bib_entry['doi']}"
            self.doi = doi
        else:
            self.doi = ""

        self.prefix = prefix
        self.postfix = postfix

    def set_a_tag(self, url=""):
        if url:
            self.prefix = f"<a href={url}>"
        else:
            self.prefix = f"<a href={self.doi}>"
        self.postfix = "</a>"
        return self

    def __str__(self) -> str:
        if self.doi:
            return f"{self.prefix}{self.doi}{self.postfix}"
        else:
            return ""


class BibtexEntry:
    def __init__(self, authors, title, year, book, doi):
        self.authors = authors
        self.title = title
        self.year = year
        self.book = book
        self.doi = doi

    def __str__(self) -> str:
        return f"{self.authors}({self.year}). {self.title}. {self.book}. {self.doi}"


class BibtexEntryFactoryForHTML:
    def __init__(self, bib_entry) -> None:
        authors = Author("", bib_entry["author"], "")
        title = Title("", bib_entry["title"], "")
        year = Year("", bib_entry["year"], "")
        book = Book("", bib_entry, "")
        doi = DOI("", bib_entry, "").set_a_tag()

        self.bibtex_entry = BibtexEntry(authors, title, year, book, doi)
        self.prefix = f"<li id={year}>"
        self.postfix = "</li>"

    def factory(self):
        return f"{self.prefix}{self.bibtex_entry}{self.postfix}"


class BibtexFactoryForHTML:
    def __init__(self, bibtex_entries):
        self.bibtex_entries = []
        for entry in bibtex_entries:
            self.bibtex_entries.append(BibtexEntryFactoryForHTML(entry).factory())

    def factory(self):
        html = """
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>

"""
        for bibtex_entry in self.bibtex_entries:
            html += "  " + bibtex_entry
            html += "\n\n"

        html += "</body>"

        return html


class BibtexEntryFactoryForJS:
    def __init__(self, bib_entry, raw_str) -> None:
        self.authors = Author("", bib_entry["author"], "")
        self.title = Title("", bib_entry["title"], "")
        self.year = Year("", bib_entry["year"], "")
        self.book = Book("", bib_entry, "")
        self.doi = DOI("", bib_entry, "")
        self.type = TYPE[bib_entry["ENTRYTYPE"]]
        self.raw_str = raw_str

        print(self.authors)

    def factory(self, id):
        if self.doi:
            result = (
                "{"
                + f"""
            'id': '{id}',
            'author': '{self.authors}',
            'title': '{self.title}',
            'year': '{self.year}',
            'book': '{self.book}',
            'doi': '{self.doi}',
            'type': '{self.type}',
            'bibtex': `{self.raw_str[1:]}`
            """
                + "}"
            )
        else:
            result = (
                "{"
                + f"""
            'author': {self.authors},
            'title': {self.title},
            'year': {self.year},
            'book': {self.book},
            'bibtex': `{self.raw_str[1:]}`
            """
                + "}"
            )
        return result


class BibtexFactoryForJS:
    def __init__(self, bibtex_database):
        self.bibtex_entries = []
        for entry, raw_str in zip(
            bibtex_database.entries, get_raw_str(bibtex_database)
        ):
            self.bibtex_entries.append(BibtexEntryFactoryForJS(entry, raw_str))

    def make_bibdatabase(self):
        html = "bibdatabase: [\n"
        for index, bibtex_entry in enumerate(reversed(self.bibtex_entries)):
            html += "  " + bibtex_entry.factory(index)
            html += ",\n\n"
        html += "],\n"
        return html

    def make_year_list(self):
        year_list = set()

        for bibtex_entry in self.bibtex_entries:
            year_list.add(str(bibtex_entry.year))
        year_list = sorted(year_list, reverse=True)

        html = "yearList: [\n"
        for year in year_list:
            html += f"{year},\n"
        html += "],\n"
        return html

    def factory(self):
        html = """
      new Vue({
        el: "#app",
        methods: {
          setYear: function (year) {
            this.year = year;
          },
          isSelect: function (year) {
            return year == this.year;
          },
          titleFilter: function (bibdatabase, title) {
            return bibdatabase.filter(function (bib) {
              if (title == "") {
                return true;
              }
              return bib.title.toLowerCase().match(title.toLowerCase());
            });
          },
          yearFilter: function (bibdatabase, year) {
            return bibdatabase.filter(function (bib) {
              if (year == "") {
                return true;
              }
              return bib.year == year;
            });
          },
          typeFilter: function (bibdatabase, type) {
            return bibdatabase.filter(function (bib) {
              if (type == "") {
                return true;
              }
              return bib.type == type;
            });
          },
          bibtexFilter: function (bibdatabase, year, title, type) {
            let titleFilteredDB = this.titleFilter(bibdatabase, title);
            let yearFilteredDB = this.yearFilter(titleFilteredDB, year);
            let typeFilteredDB = this.typeFilter(yearFilteredDB, type);

            return typeFilteredDB;
          },
        },
        data() {
          return {
            title: "",
            year: "",
            type: "",
"""
        html += self.make_year_list()
        html += self.make_bibdatabase()

        html += """
                }
            }
        })
        """
        return html


def bib_to_html():
    pass


def cite_str(bib_entry):
    factory = BibtexEntryFactoryForHTML(bib_entry)
    result = factory.factory()

    return result


def read_bibtex(filename):
    with open(filename, encoding="utf-8") as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)
    return bib_database


def get_raw_str(bib_database):
    bib_str_list = []
    item = []
    for line in bibtexparser.dumps(bib_database).split("\n"):
        if line == "":
            bib_str_list.append("\n".join(item))
            item = []
        item.append(line)
    return bib_str_list


def main():
    bib_database = read_bibtex("out.bib")
    html = BibtexFactoryForJS(bib_database).factory()

    with open("biblist.js", "w", encoding="utf-8") as f:
        f.write(html)


def main2():
    # "./src/out.bib"
    bib_database = read_bibtex("./src/out.bib")
    html = BibtexFactoryForJS(bib_database).factory()

    with open("./src/biblist.js", "w", encoding="utf-8") as f:
        f.write(html)


if __name__ == "__main__":
    main()
 