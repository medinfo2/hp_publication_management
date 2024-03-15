
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
yearList: [
2015,
2014,
2013,
2012,
2011,
2010,
2009,
2008,
2007,
2006,
2005,
2004,
2003,
2002,
2001,
2000,
1999,
1998,
1997,
1996,
1995,
1994,
],
bibdatabase: [
  {
            'id': '0',
            'author': 'Risa Sakurai, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda',
            'title': 'Attempt to Mapping openEHR for Medical Action and Laboratory Test Results',
            'year': '2015',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-10,
 author = {Yu Maruyama and Yuki Uranishi and Chisako Naito and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {313-5},
 title = {Anatomical Structure Projection onto Simulator Arm for Injection Training},
 venue = {Osaka/Japan},
 year = {2015}
}`
            },

  {
            'id': '1',
            'author': 'Kenta Hori, Katsuya Takanashi, Chisako Naito, Tomohiro Kuroda',
            'title': 'Communication Analysis of a Simulated Tele-auscultation Experiment',
            'year': '2015',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-1,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Research Report of Health Labour Sciences Research Grant for Comprehensive Research on Lifestyle Related Diseases such as Cardiac Disease and Diabetes},
 pages = {75-78},
 title = {Developing Health Promotion Program based on Wearable ICT and Collective Responsibility},
 venue = {Tokyo/Japan},
 year = {2015}
}`
            },

  {
            'id': '2',
            'author': 'Yuki Uranishi, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Natural Color Pattern Matching for Light Direction Estimation',
            'year': '2015',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2014-journal-papers-6,
 author = {Kenta Hori and Yusuke Uchida and Maya Minami and Chisako Naito and Tomohiro Kuroda and Hideya Takahashi and Masahiko Ando and Takashi Kawamura and Naoto Kume and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 journal = {Medical Virtual Reality},
 number = {1},
 pages = {15-26},
 title = {Evaluation of Vision-based Remote Navigation System for Tele-auscultation},
 volume = {12},
 year = {2014}
}`
            },

  {
            'id': '3',
            'author': 'Yu Maruyama, Yuki Uranishi, Chisako Naito, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Anatomical Structure Projection onto Simulator Arm for Injection Training',
            'year': '2015',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2014-journal-papers-5,
 author = {Kazuya Okamoto and Hiroki Kayama and Minoru Yamada and Naoto Kume and Tomohiro Kuroda and Tomoki Aoyama},
 doi = {0.1515/ijdhd-2014-0324},
 journal = {The International Journal on Disability and Human Development},
 number = {3},
 pages = {333-336},
 title = {Development of a system for the assessment of a dual-task performance based on a motion-capture device},
 volume = {13},
 year = {2014}
}`
            },

  {
            'id': '4',
            'author': 'Tomohiro Kuroda',
            'title': 'Developing Health Promotion Program based on Wearable ICT and Collective Responsibility',
            'year': '2015',
            'book': 'Proceedings of Research Report of Health Labour Sciences Research Grant for Comprehensive Research on Lifestyle Related Diseases such as Cardiac Disease and Diabetes',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2014-journal-papers-4,
 author = {Tomohiro Kuroda and Nodoka Nakashima and Mayuko Kaneda and Kikue Sato and Naoki Ohboshi and Ayumu Okada and Kazuya Okamoto and Hiroyuki Yoshihara and Tomoya Akiyama},
 journal = {Advanced Biomedical Engineering},
 pages = {124-129},
 title = {Evaluating the Workload Reduction of Automatic Vital Data Transmission},
 volume = {2},
 year = {2014}
}`
            },

  {
            'id': '5',
            'author': 'Kenta Hori, Yusuke Uchida, Maya Minami, Chisako Naito, Tomohiro Kuroda, Hideya Takahashi, Masahiko Ando, Takashi Kawamura, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Evaluation of Vision-based Remote Navigation System for Tele-auscultation',
            'year': '2014',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2014-journal-papers-3,
 author = {Tatsuya Tokunaga and Naoto Kume and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {Mumps},
 pages = {37-48},
 title = {Electronic Health Record Application Development Framework of Clinical Information Statistics},
 volume = {27},
 year = {2014}
}`
            },

  {
            'id': '6',
            'author': 'Kazuya Okamoto, Hiroki Kayama, Minoru Yamada, Naoto Kume, Tomohiro Kuroda, Tomoki Aoyama',
            'title': 'Development of a system for the assessment of a dual-task performance based on a motion-capture device',
            'year': '2014',
            'book': 'The International Journal on Disability and Human Development',
            'doi': 'https://doi.org/0.1515/ijdhd-2014-0324',
            'type': 'journal',
            'bibtex': `@article{2014-journal-papers-2,
 author = {Hiroki Kayama and Kazuya Okamoto and Shu Nishiguchi and Minoru Yamada and Tomohiro Kuroda and Tomoki Aoyama},
 doi = {0.2196/jmir.3108},
 journal = {Journal of Medical Internet Research},
 number = {2},
 title = {Effect of a Kinect-based Exercise Game on Improving Executive Cognitive Performance in Community-dwelling Elderly: Case Control Study},
 volume = {16},
 year = {2014}
}`
            },

  {
            'id': '7',
            'author': 'Tomohiro Kuroda, Nodoka Nakashima, Mayuko Kaneda, Kikue Sato, Naoki Ohboshi, Ayumu Okada, Kazuya Okamoto, Hiroyuki Yoshihara, Tomoya Akiyama',
            'title': 'Evaluating the Workload Reduction of Automatic Vital Data Transmission',
            'year': '2014',
            'book': 'Advanced Biomedical Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2014-journal-papers-1,
 author = {Tatsuya Tokunaga and Naoto Kume and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Naoki Ohboshi and Hiroyuki Yoshihara},
 journal = {Journal of eHealth Technology and Application},
 number = {1},
 title = {An Application Framework for Enriching Electronic Health Records by Web Services Coordination},
 volume = {10},
 year = {2014}
}`
            },

  {
            'id': '8',
            'author': 'Tatsuya Tokunaga, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Electronic Health Record Application Development Framework of Clinical Information Statistics',
            'year': '2014',
            'book': 'Mumps',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2014-international-conferences-3,
 author = {Shinji Kobayashi and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of AMIA Annual Symposium},
 pages = {1469},
 title = {Designing clinical models of EHR (Electronic Health Records) for long-term care providers to elderly persons},
 venue = {Washington DC/USA},
 year = {2014}
}`
            },

  {
            'id': '9',
            'author': 'Hiroki Kayama, Kazuya Okamoto, Shu Nishiguchi, Minoru Yamada, Tomohiro Kuroda, Tomoki Aoyama',
            'title': 'Effect of a Kinect-based Exercise Game on Improving Executive Cognitive Performance in Community-dwelling Elderly: Case Control Study',
            'year': '2014',
            'book': 'Journal of Medical Internet Research',
            'doi': 'https://doi.org/0.2196/jmir.3108',
            'type': 'journal',
            'bibtex': `@inproceedings{2014-international-conferences-2,
 author = {Ryosuke Sawano and Masatoshi Yoshikawa and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics},
 title = {Assessment of Electronic Medical Records Highly Ranked by Scoring Algorithms using Access Logs},
 venue = {New Delhi / India},
 year = {2014}
}`
            },

  {
            'id': '10',
            'author': 'Tatsuya Tokunaga, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'An Application Framework for Enriching Electronic Health Records by Web Services Coordination',
            'year': '2014',
            'book': 'Journal of eHealth Technology and Application',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2014-international-conferences-1,
 author = {Goshiro Yamamoto and Zeeshan Asghar and Yuki Uranishi and Takashi Taketomi and Christian Sandor and Tomohiro Kuroda and Petri Pulli and Hirokazu Kato},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {405-408},
 title = {Grid-pattern Indicating Interface for Ambient Assisted Living},
 venue = {Gothenburg/Sweden},
 year = {2014}
}`
            },

  {
            'id': '11',
            'author': 'Shinji Kobayashi, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Designing clinical models of EHR (Electronic Health Records) for long-term care providers to elderly persons',
            'year': '2014',
            'book': 'Proceedings of AMIA Annual Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-9,
 author = {Naoto Kume and Shinji Kobayashi and Kenta Masuda and Tomohiro Kuroda and Kenji Araki and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Preparation of Common Test Item Master Table for Clinical Study between Plural Facilities},
 venue = {Chiba/Japan},
 year = {2014}
}`
            },

  {
            'id': '12',
            'author': 'Ryosuke Sawano, Masatoshi Yoshikawa, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Assessment of Electronic Medical Records Highly Ranked by Scoring Algorithms using Access Logs',
            'year': '2014',
            'book': 'Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-8,
 author = {Takashi Nakai and Tadamasa Takemura and Kenichiro Fujita and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {State definition for medical decision support system by machine learning},
 venue = {Chiba/Japan},
 year = {2014}
}`
            },

  {
            'id': '13',
            'author': 'Goshiro Yamamoto, Zeeshan Asghar, Yuki Uranishi, Takashi Taketomi, Christian Sandor, Tomohiro Kuroda, Petri Pulli, Hirokazu Kato',
            'title': 'Grid-pattern Indicating Interface for Ambient Assisted Living',
            'year': '2014',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-7,
 author = {Risa Sakurai and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Attempt to Mapping openEHR for DPC Data as Medical Record},
 venue = {Chiba/Japan},
 year = {2014}
}`
            },

  {
            'id': '14',
            'author': 'Naoto Kume, Shinji Kobayashi, Kenta Masuda, Tomohiro Kuroda, Kenji Araki, Hiroyuki Yoshihara',
            'title': 'Preparation of Common Test Item Master Table for Clinical Study between Plural Facilities',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-6,
 author = {Yu Uneno and Masashi Kanai and Keiko Tamon and Kei Taneishi and Kazuya Okamoto and Shigemi Matsumoto and Tomohiro Kuroda and Yasushi Okuno and Manabu Muto},
 booktitle = {Proceedings of Kyoto Workshop for Cancer Research},
 title = {Exploratory Research on predicting therapeutic effect and side effect of anticancer drug using Electronic Patient Record Database System (CyberOncology)},
 venue = {Kyoto/Japan},
 year = {2014}
}`
            },

  {
            'id': '15',
            'author': 'Takashi Nakai, Tadamasa Takemura, Kenichiro Fujita, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'State definition for medical decision support system by machine learning',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-5,
 author = {Tomohiro Nakano and Nao Onose and Kikue Sato and Tomoko Hikita and Reiko Houya and Kazuya Okamoto and Tomohiro Kuroda and Naoki Ohboshi},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {119-120},
 title = {Development of Situation Detection Part of Context-aware Nursing Support Mobile System},
 venue = {Okayama/Japan},
 year = {2014}
}`
            },

  {
            'id': '16',
            'author': 'Risa Sakurai, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda',
            'title': 'Attempt to Mapping openEHR for DPC Data as Medical Record',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-4,
 author = {Hitomi Yamada and Tadamasa Takemura and Takahiro Asai and Kazuya Okamoto and Tomohiro Kuroda and Shigeki Kuwata},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {83-84},
 title = {Consideration of Automatic Evaluation System for Written Informed Consent},
 venue = {Okayama/Japan},
 year = {2014}
}`
            },

  {
            'id': '17',
            'author': 'Yu Uneno, Masashi Kanai, Keiko Tamon, Kei Taneishi, Kazuya Okamoto, Shigemi Matsumoto, Tomohiro Kuroda, Yasushi Okuno, Manabu Muto',
            'title': 'Exploratory Research on predicting therapeutic effect and side effect of anticancer drug using Electronic Patient Record Database System (CyberOncology)',
            'year': '2014',
            'book': 'Proceedings of Kyoto Workshop for Cancer Research',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-3,
 author = {Tomohiro Kuroda and Atsushi Masuda and Tomoaki Harii and Hideya Takahashi and Eiji Shimizu},
 booktitle = {Proceedings of The Annual Conference of Textile Machinery Society of Japan},
 pages = {220-221},
 title = {Prototyping Pressure Ulcer Prevention Mattress Management System using RFID Fiber Woven Label},
 venue = {Osaka/Japan},
 year = {2014}
}`
            },

  {
            'id': '18',
            'author': 'Tomohiro Nakano, Nao Onose, Kikue Sato, Tomoko Hikita, Reiko Houya, Kazuya Okamoto, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Development of Situation Detection Part of Context-aware Nursing Support Mobile System',
            'year': '2014',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-2,
 author = {Yusuke Takeuchi and Hideya Takahashi and Tomohiro Kuroda and Atsushi Masuda and Tomoaki Harii and Eiji Shimizu},
 booktitle = {Proceedings of The Annual Conference of Textile Machinery Society of Japan},
 title = {RFID Sensor System for Detection of Volume of Urinary Incontinence},
 venue = {Osaka/Japan},
 year = {2014}
}`
            },

  {
            'id': '19',
            'author': 'Hitomi Yamada, Tadamasa Takemura, Takahiro Asai, Kazuya Okamoto, Tomohiro Kuroda, Shigeki Kuwata',
            'title': 'Consideration of Automatic Evaluation System for Written Informed Consent',
            'year': '2014',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-15,
 author = {Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Youhei Taniguchi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Adoption and Evaluation of Functions Enabling Templates to Connect Each Other and HIS DB},
 venue = {Chiba/Japan},
 year = {2014}
}`
            },

  {
            'id': '20',
            'author': 'Tomohiro Kuroda, Atsushi Masuda, Tomoaki Harii, Hideya Takahashi, Eiji Shimizu',
            'title': 'Prototyping Pressure Ulcer Prevention Mattress Management System using RFID Fiber Woven Label',
            'year': '2014',
            'book': 'Proceedings of The Annual Conference of Textile Machinery Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-14,
 author = {Naoki Mihara and Yasushi Matsumura and Eizen Kimura and Tomohiro Kuroda and Naoto Kume and Souichi Saishu and Atsushi Sato},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Development of Document Backup System for DACS (Document Archiving and Communication System) By Using Secret Sharing},
 venue = {Chiba/Japan},
 year = {2014}
}`
            },

  {
            'id': '21',
            'author': 'Yusuke Takeuchi, Hideya Takahashi, Tomohiro Kuroda, Atsushi Masuda, Tomoaki Harii, Eiji Shimizu',
            'title': 'RFID Sensor System for Detection of Volume of Urinary Incontinence',
            'year': '2014',
            'book': 'Proceedings of The Annual Conference of Textile Machinery Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-13,
 author = {Takahiro Asai and Hitomi Yamada and Tadamasa Takemura and Hiroshi Narazaki and Kazuya Okamoto and Tomohiro Kuroda and Shigeki Kuwata},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Building a consent described automated audit system in the electronic medical record system},
 venue = {Chiba/Japan},
 year = {2014}
}`
            },

  {
            'id': '22',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Youhei Taniguchi, Hiroyuki Yoshihara',
            'title': 'Adoption and Evaluation of Functions Enabling Templates to Connect Each Other and HIS DB',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-12,
 author = {Hitomi Yamada and Tadamasa Takemura and Takahiro Asai and Kazuya Okamoto and Tomohiro Kuroda and Hiroshi Narazaki and Shigeki Kuwata},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Development of Criteria for Medical Record Audits Focused on Informed Consent Descriptions},
 venue = {Chiba/Japan},
 year = {2014}
}`
            },

  {
            'id': '23',
            'author': 'Naoki Mihara, Yasushi Matsumura, Eizen Kimura, Tomohiro Kuroda, Naoto Kume, Souichi Saishu, Atsushi Sato',
            'title': 'Development of Document Backup System for DACS (Document Archiving and Communication System) By Using Secret Sharing',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-11,
 author = {Ayako Kajimura and Tadamasa Takemura and Kenichiro Fujita and Tomoko Hikita and Akane Taruya and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Analysis of the relationship of screen transition and the nursing service in Electric Medical Records},
 venue = {Chiba/Japan},
 year = {2014}
}`
            },

  {
            'id': '24',
            'author': 'Takahiro Asai, Hitomi Yamada, Tadamasa Takemura, Hiroshi Narazaki, Kazuya Okamoto, Tomohiro Kuroda, Shigeki Kuwata',
            'title': 'Building a consent described automated audit system in the electronic medical record system',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-10,
 author = {Kenichiro Fujita and Tadamasa Takemura and Tomoko Hikita and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Study of the evaluation criteria for the screen design of electronic medical records based on the user experience},
 venue = {Chiba/Japan},
 year = {2014}
}`
            },

  {
            'id': '25',
            'author': 'Hitomi Yamada, Tadamasa Takemura, Takahiro Asai, Kazuya Okamoto, Tomohiro Kuroda, Hiroshi Narazaki, Shigeki Kuwata',
            'title': 'Development of Criteria for Medical Record Audits Focused on Informed Consent Descriptions',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-domestic-conferences-1,
 author = {Ryosuke Sawano and Masatoshi Yoshikawa and Akihiro Hamasaki and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Forum on Data Engineering and Information Management},
 title = {Extracting Relation between Clinical Documents from Access Log},
 venue = {Awaji/Japan},
 year = {2014}
}`
            },

  {
            'id': '26',
            'author': 'Ayako Kajimura, Tadamasa Takemura, Kenichiro Fujita, Tomoko Hikita, Akane Taruya, Tomohiro Kuroda',
            'title': 'Analysis of the relationship of screen transition and the nursing service in Electric Medical Records',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2013-journal-papers-9,
 author = {Naoto Kume and Kana Eguchi and Koji Yoshimura and Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 journal = {Advanced Biomedical Engineering},
 pages = {38-46},
 title = {Soft Tissue Ablation Model for Surgical Simulation by Applying a Combination of Multiple Hypotheses},
 volume = {2},
 year = {2013}
}`
            },

  {
            'id': '27',
            'author': 'Kenichiro Fujita, Tadamasa Takemura, Tomoko Hikita, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Study of the evaluation criteria for the screen design of electronic medical records based on the user experience',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2013-journal-papers-8,
 author = {Seiko Tsuruoka and Kazuya Okamoto and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {Japan Journal of Medical Informatics},
 number = {3},
 pages = {151-159},
 title = {Medical Document Ranking Useful to Study Using External Information of the Documents},
 volume = {33},
 year = {2013}
}`
            },

  {
            'id': '28',
            'author': 'Ryosuke Sawano, Masatoshi Yoshikawa, Akihiro Hamasaki, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Extracting Relation between Clinical Documents from Access Log',
            'year': '2014',
            'book': 'Proceedings of Forum on Data Engineering and Information Management',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2013-journal-papers-7,
 author = {Tomohiro Kuroda and Eizen Kimura and Yasushi Matsumura and Yoshinori Yamashita and Haruhiko Hiramatsu and Naoto Kume},
 journal = {Studies in Health Technology and Informatics},
 pages = {171-174},
 title = {Simulating Cloud Environment for HIS backup using Secret Sharing},
 year = {2013}
}`
            },

  {
            'id': '29',
            'author': 'Naoto Kume, Kana Eguchi, Koji Yoshimura, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Soft Tissue Ablation Model for Surgical Simulation by Applying a Combination of Multiple Hypotheses',
            'year': '2013',
            'book': 'Advanced Biomedical Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2013-journal-papers-6,
 author = {Kazuya Okamoto and Toshio Uchiyama and Tadamasa Takemura and Naoto Kume and Takayuki Adachi and Tomohiro Kuroda and Tadasu Uchiyama and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {1031},
 title = {Qualitative Evaluation of the Supporting System for Diagnosis Procedure Combination Code Selection},
 year = {2013}
}`
            },

  {
            'id': '30',
            'author': 'Seiko Tsuruoka, Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Medical Document Ranking Useful to Study Using External Information of the Documents',
            'year': '2013',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2013-journal-papers-5,
 author = {Tadamasa Takemura and Toshiyuki Tanaka and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Masahiro Hirose and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {1212},
 title = {The Development of a Multiplayer Game for Education of Hospital Management},
 year = {2013}
}`
            },

  {
            'id': '31',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume',
            'title': 'Simulating Cloud Environment for HIS backup using Secret Sharing',
            'year': '2013',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2013-journal-papers-4,
 author = {Sachiko Okada and Keisuke Nagase and Akiko Ito and Masahiko Ando and Yoshiaki Nakagawa and Kazuya Okamoto and Naoto Kume and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {International Journal of Health Planning and Management},
 number = {3},
 title = {Development of a methodology for the detection of hospital financial outliers using information systems},
 volume = {29},
 year = {2013}
}`
            },

  {
            'id': '32',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Naoto Kume, Takayuki Adachi, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'Qualitative Evaluation of the Supporting System for Diagnosis Procedure Combination Code Selection',
            'year': '2013',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2013-journal-papers-3,
 author = {Tomohiro Kuroda and Haruo Noma and Chisako Naito and Masahiro Tada and Hiroe Yamanaka and Tadamasa Takemura and Kazuko Nin and Hiroyuki Yoshihara},
 journal = {Methods of Information in Medicine},
 number = {3},
 pages = {239-249},
 title = {Prototyping Sensor Network System for Automatic Vital Signs Collection -Evaluation of a Location Based Automated Assignment of Measured Vital Signs to Patients-},
 volume = {52},
 year = {2013}
}`
            },

  {
            'id': '33',
            'author': 'Tadamasa Takemura, Toshiyuki Tanaka, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'The Development of a Multiplayer Game for Education of Hospital Management',
            'year': '2013',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2013-journal-papers-2,
 author = {Naoto Kume and Kana Eguchi and Tomohiro Kuroda and Koji Yoshimura and Kazutoshi Okubo and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {242-246},
 title = {Rupture Progression Model of Stress Integration for Virtual Reality Ablation},
 volume = {184},
 year = {2013}
}`
            },

  {
            'id': '34',
            'author': 'Sachiko Okada, Keisuke Nagase, Akiko Ito, Masahiko Ando, Yoshiaki Nakagawa, Kazuya Okamoto, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of a methodology for the detection of hospital financial outliers using information systems',
            'year': '2013',
            'book': 'International Journal of Health Planning and Management',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2013-journal-papers-11,
 author = {Tomohiro Kuroda and Eizen Kimura and Yasushi Matsumura and Yoshinori Yamashita and Haruhiko Hiramatsu and Naoto Kume},
 journal = {Japan Journal of Medical Informatics},
 number = {4},
 pages = {225-233},
 title = {Feasibility Study of HIS Backup Cloud based on Secret Sharing},
 volume = {33},
 year = {2013}
}`
            },

  {
            'id': '35',
            'author': 'Tomohiro Kuroda, Haruo Noma, Chisako Naito, Masahiro Tada, Hiroe Yamanaka, Tadamasa Takemura, Kazuko Nin, Hiroyuki Yoshihara',
            'title': 'Prototyping Sensor Network System for Automatic Vital Signs Collection -Evaluation of a Location Based Automated Assignment of Measured Vital Signs to Patients-',
            'year': '2013',
            'book': 'Methods of Information in Medicine',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2013-journal-papers-10,
 author = {Tadamasa Takemura and Haruo Noma and Tomohiro Kuroda and Masahiro Tada and Naoto Kume and Kazuya Okamoto and Tomoko Hikita and Hiroyuki Yoshihara},
 journal = {Japanese Journal of Telemedicine and Telecare},
 number = {2},
 pages = {136-139},
 title = {Ubiquitous Sensor Network Environment in Hospital using BT-AP Antenna},
 volume = {9},
 year = {2013}
}`
            },

  {
            'id': '36',
            'author': 'Naoto Kume, Kana Eguchi, Tomohiro Kuroda, Koji Yoshimura, Kazutoshi Okubo, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Rupture Progression Model of Stress Integration for Virtual Reality Ablation',
            'year': '2013',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2013-journal-papers-1,
 author = {Masahiro Yakami and Tomohiro Kuroda and Takeshi Kubo and Yutaka Emoto and Hiroyuki Yoshihara and Kaori Togashi},
 journal = {Advanced Biomedical Engineering},
 pages = {47-53},
 title = {Development and Evaluation of an End-User System for Retrieving Case Data from a Hospital Information System Supporting Complex Search Conditions Involving Multiple Data Tables},
 volume = {1},
 year = {2013}
}`
            },

  {
            'id': '37',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume',
            'title': 'Feasibility Study of HIS Backup Cloud based on Secret Sharing',
            'year': '2013',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2013-international-conferences-9,
 author = {Hitomi Yamada and Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Shigeki Kuwata},
 booktitle = {IEEE EMBC Short Papers},
 number = {3352},
 title = {A Study of Automatic Evaluation System for Written Informed Consent using Machine Learning},
 venue = {Osaka/Japan},
 year = {2013}
}`
            },

  {
            'id': '38',
            'author': 'Tadamasa Takemura, Haruo Noma, Tomohiro Kuroda, Masahiro Tada, Naoto Kume, Kazuya Okamoto, Tomoko Hikita, Hiroyuki Yoshihara',
            'title': 'Ubiquitous Sensor Network Environment in Hospital using BT-AP Antenna',
            'year': '2013',
            'book': 'Japanese Journal of Telemedicine and Telecare',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2013-international-conferences-8,
 author = {Kikue Sato and Tomohiro Kuroda and Tadamasa Takemura and Akitoshi Seiyama},
 booktitle = {IEEE EMBC Short Papers},
 number = {3316},
 title = {Feasibility Assessment of Bluetooth Based Location System for Workflow Analysis of Nursing Staff},
 venue = {Osaka/Japan},
 year = {2013}
}`
            },

  {
            'id': '39',
            'author': 'Masahiro Yakami, Tomohiro Kuroda, Takeshi Kubo, Yutaka Emoto, Hiroyuki Yoshihara, Kaori Togashi',
            'title': 'Development and Evaluation of an End-User System for Retrieving Case Data from a Hospital Information System Supporting Complex Search Conditions Involving Multiple Data Tables',
            'year': '2013',
            'book': 'Advanced Biomedical Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2013-international-conferences-7,
 author = {Tuukka Karvonen and Tapio Seppanen and Suvi Tiinanen and Antti Kiviniemi and Kazuya Okamoto and Tomohiro Kuroda and Mikko Tulppo},
 booktitle = {IEEE EMBC Short Papers},
 number = {3379},
 title = {Ultrasound Image Analysis for Assessment of Flow-mediated Dilation of Human Arteries},
 venue = {Osaka/Japan},
 year = {2013}
}`
            },

  {
            'id': '40',
            'author': 'Hitomi Yamada, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Shigeki Kuwata',
            'title': 'A Study of Automatic Evaluation System for Written Informed Consent using Machine Learning',
            'year': '2013',
            'book': 'IEEE EMBC Short Papers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-6,
 author = {Kenta Hori and Yusuke Uchida and Tsukasa Kan and Maya Minami and Chisako Naito and Tomohiro Kuroda and Hideya Takahashi and Masahiko Ando and Takashi Kawamura and Naoto Kume and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 pages = {4646-9},
 title = {Tele-Auscultation Support System with Mixed Reality Navigation},
 venue = {Osaka/Japan},
 year = {2013}
}`
            },

  {
            'id': '41',
            'author': 'Kikue Sato, Tomohiro Kuroda, Tadamasa Takemura, Akitoshi Seiyama',
            'title': 'Feasibility Assessment of Bluetooth Based Location System for Workflow Analysis of Nursing Staff',
            'year': '2013',
            'book': 'IEEE EMBC Short Papers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-5,
 author = {Tomohiro Kuroda and Eizen Kimura and Yasushi Matsumura and Yoshinori Yamashita and Haruhiko Hiramatsu and Naoto Kume and Atsushi Sato},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 pages = {4179-82},
 title = {Applying Secret Sharing for HIS Backup Exchange},
 venue = {Osaka/Japan},
 year = {2013}
}`
            },

  {
            'id': '42',
            'author': 'Tuukka Karvonen, Tapio Seppanen, Suvi Tiinanen, Antti Kiviniemi, Kazuya Okamoto, Tomohiro Kuroda, Mikko Tulppo',
            'title': 'Ultrasound Image Analysis for Assessment of Flow-mediated Dilation of Human Arteries',
            'year': '2013',
            'book': 'IEEE EMBC Short Papers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-4,
 author = {Tomohiro Kuroda and Kikuo Hirano and Kazushige Sugimura and Satoshi Adachi and Hidetsugu Igarashi and Kazuo Ueshima and Hideo Nakamura and Masayuki Nambu and Takahiro Doi},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 pages = {1226-9},
 title = {Applying NISHIJIN Historical Textile Technique for e-Textile},
 venue = {Osaka/Japan},
 year = {2013}
}`
            },

  {
            'id': '43',
            'author': 'Kenta Hori, Yusuke Uchida, Tsukasa Kan, Maya Minami, Chisako Naito, Tomohiro Kuroda, Hideya Takahashi, Masahiko Ando, Takashi Kawamura, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Tele-Auscultation Support System with Mixed Reality Navigation',
            'year': '2013',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-3,
 author = {Hiroki Kayama and Kazuya Okamoto and Shu Nishiguchi and Minoru Yamada and Tomohiro Kuroda and Tomoki Aoyama},
 booktitle = {Proceedings of International Conference on Pervasive Computing Technologies for Healthcare, USB Proceedings},
 title = {Effect of a Kinect-based exercise game on improving executive cognitive performance in community-dwelling elderly},
 venue = {Venice/Italy},
 year = {2013}
}`
            },

  {
            'id': '44',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume, Atsushi Sato',
            'title': 'Applying Secret Sharing for HIS Backup Exchange',
            'year': '2013',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-2,
 author = {Tomohiro Kuroda and Yusuke Uchida and Tsukasa Kan and Maya Minami and Chisako Naito and Kenta Hori and Hideya Takahashi and Masahiko Ando and Takashi Kawamura and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Korea-Japan Workshop on Mixed Reality, USB Proceeding},
 title = {Mixed Reality Navigation for Tele-Auscultation},
 venue = {Onna/Japan},
 year = {2013}
}`
            },

  {
            'id': '45',
            'author': 'Tomohiro Kuroda, Kikuo Hirano, Kazushige Sugimura, Satoshi Adachi, Hidetsugu Igarashi, Kazuo Ueshima, Hideo Nakamura, Masayuki Nambu, Takahiro Doi',
            'title': 'Applying NISHIJIN Historical Textile Technique for e-Textile',
            'year': '2013',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-17,
 author = {Tomohiro Kuroda and Yoshihiro Kuroda and Kenta Hori and Naoki Ohboshi},
 booktitle = {Proceedings of International Display Workshops},
 pages = {1427-1429},
 title = {How AR Reforms Social Medical System?},
 venue = {Sapporo/Japan},
 volume = {20},
 year = {2013}
}`
            },

  {
            'id': '46',
            'author': 'Hiroki Kayama, Kazuya Okamoto, Shu Nishiguchi, Minoru Yamada, Tomohiro Kuroda, Tomoki Aoyama',
            'title': 'Effect of a Kinect-based exercise game on improving executive cognitive performance in community-dwelling elderly',
            'year': '2013',
            'book': 'Proceedings of International Conference on Pervasive Computing Technologies for Healthcare, USB Proceedings',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-16,
 author = {Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Joint Conference on Natural Language Processing},
 pages = {43-47},
 title = {The Electronic Health Record as a Clinical Study Information Hub},
 venue = {Nagoya/Japan},
 year = {2013}
}`
            },

  {
            'id': '47',
            'author': 'Tomohiro Kuroda, Yusuke Uchida, Tsukasa Kan, Maya Minami, Chisako Naito, Kenta Hori, Hideya Takahashi, Masahiko Ando, Takashi Kawamura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Mixed Reality Navigation for Tele-Auscultation',
            'year': '2013',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality, USB Proceeding',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-15,
 author = {Tomohiro Kuroda and Kenta Hori and Kazuya Okamoto},
 booktitle = {Proceedings of Internatonal Society for Telemedicine and eHealth International Conference},
 pages = {49},
 title = {Introducing Multi-media Communication for Regional Medicine: Nagahama Telemedicine Project},
 venue = {Takamatsu/Japan},
 year = {2013}
}`
            },

  {
            'id': '48',
            'author': 'Tomohiro Kuroda, Yoshihiro Kuroda, Kenta Hori, Naoki Ohboshi',
            'title': 'How AR Reforms Social Medical System?',
            'year': '2013',
            'book': 'Proceedings of International Display Workshops',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-14,
 author = {Tomohiro Kuroda and Eizen Kimura and Yasushi Matsumura and Yoshinori Yamashita and Haruhiko Hiramatsu and Naoto Kume},
 booktitle = {Proceedings of World Congress on Medical and Health Informatics},
 pages = {171-174},
 title = {Simulating Cloud Environment for HIS backup using Secret Sharing},
 venue = {Copenhagen/Denmark},
 year = {2013}
}`
            },

  {
            'id': '49',
            'author': 'Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'The Electronic Health Record as a Clinical Study Information Hub',
            'year': '2013',
            'book': 'Proceedings of International Joint Conference on Natural Language Processing',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-13,
 author = {Kazuya Okamoto and Toshio Uchiyama and Tadamasa Takemura and Naoto Kume and Takayuki Adachi and Tomohiro Kuroda and Tadasu Uchiyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of World Congress on Medical and Health Informatics},
 pages = {1031},
 title = {Qualitative Evaluation of the Supporting System for Diagnosis Procedure Combination Code Selection},
 venue = {Copenhagen/Denmark},
 year = {2013}
}`
            },

  {
            'id': '50',
            'author': 'Tomohiro Kuroda, Kenta Hori, Kazuya Okamoto',
            'title': 'Introducing Multi-media Communication for Regional Medicine: Nagahama Telemedicine Project',
            'year': '2013',
            'book': 'Proceedings of Internatonal Society for Telemedicine and eHealth International Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-12,
 author = {Tadamasa Takemura and Toshiyuki Tanaka and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Masahiro Hirose and Hiroyuki Yoshihara},
 booktitle = {Proceedings of World Congress on Medical and Health Informatics},
 pages = {1212},
 title = {The Development of a Multiplayer Game for Education of Hospital Management},
 venue = {Copenhagen/Denmark},
 year = {2013}
}`
            },

  {
            'id': '51',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume',
            'title': 'Simulating Cloud Environment for HIS backup using Secret Sharing',
            'year': '2013',
            'book': 'Proceedings of World Congress on Medical and Health Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-11,
 author = {Naoto Kume and Shirou Manabe and Yasushi Matsumura and Kenji Araki and Katsuhiko Takabayashi and Yoshinari Shima and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {IEEE EMBC Short Papers},
 number = {1686},
 title = {Distributed Clinical Study Database for Traversal Search of the Accounting Information and Laboratory Test Results},
 venue = {Osaka/Japan},
 year = {2013}
}`
            },

  {
            'id': '52',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Naoto Kume, Takayuki Adachi, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'Qualitative Evaluation of the Supporting System for Diagnosis Procedure Combination Code Selection',
            'year': '2013',
            'book': 'Proceedings of World Congress on Medical and Health Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-10,
 author = {Kazuya Okamoto and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {IEEE EMBC Short Papers},
 number = {1106},
 title = {Development of a Hypothesis-generating Support System using Medical Records for Clinical Knowledge Acquisition},
 venue = {Osaka/Japan},
 year = {2013}
}`
            },

  {
            'id': '53',
            'author': 'Tadamasa Takemura, Toshiyuki Tanaka, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'The Development of a Multiplayer Game for Education of Hospital Management',
            'year': '2013',
            'book': 'Proceedings of World Congress on Medical and Health Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-international-conferences-1,
 author = {Kana Eguchi and Naoto Kume and Tomohiro Kuroda and Koji Yoshimura and Kazutoshi Okubo and Kazuya Okamoto and Hiroyuki Yoshihara},
 booktitle = {Studies in Health Technology and Informatics},
 pages = {242-246},
 title = {Rupture progression model of stress integration for VR ablation},
 venue = {San Diego/USA},
 year = {2013}
}`
            },

  {
            'id': '54',
            'author': 'Naoto Kume, Shirou Manabe, Yasushi Matsumura, Kenji Araki, Katsuhiko Takabayashi, Yoshinari Shima, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Distributed Clinical Study Database for Traversal Search of the Accounting Information and Laboratory Test Results',
            'year': '2013',
            'book': 'IEEE EMBC Short Papers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-9,
 author = {Atsuo Sawada and Koji Yoshimura and Hiroki Murata and Naoto Kume and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {27},
 title = {Developing Explanation Support System based on Virtual Reality -Process Visualization of Pelvic Organ Prolapse-},
 venue = {Neyagawa/Japan},
 year = {2013}
}`
            },

  {
            'id': '55',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of a Hypothesis-generating Support System using Medical Records for Clinical Knowledge Acquisition',
            'year': '2013',
            'book': 'IEEE EMBC Short Papers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-8,
 author = {Seiko Tsuruoka and Kazuya Okamoto and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {88-89},
 title = {Medical Document Ranking Useful to Study using External Information of the Documents},
 venue = {Toyama/Japan},
 year = {2013}
}`
            },

  {
            'id': '56',
            'author': 'Kana Eguchi, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazutoshi Okubo, Kazuya Okamoto, Hiroyuki Yoshihara',
            'title': 'Rupture progression model of stress integration for VR ablation',
            'year': '2013',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-7,
 author = {Tomohiro Kuroda and Eizen Kimura and Yasushi Matsumura and Yoshinori Yamashita and Haruhiko Hiramatsu and Naoto Kume},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {84-85},
 title = {Feasibility Study of HIS Backup Cloud based on Secret Sharing},
 venue = {Toyama/Japan},
 year = {2013}
}`
            },

  {
            'id': '57',
            'author': 'Atsuo Sawada, Koji Yoshimura, Hiroki Murata, Naoto Kume, Tomohiro Kuroda',
            'title': 'Developing Explanation Support System based on Virtual Reality -Process Visualization of Pelvic Organ Prolapse-',
            'year': '2013',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-6,
 author = {Kikue Sato and Tomohiro Kuroda and Tadamasa Takemura},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {108-109},
 title = {Quantitative Analysis of Staff Trajectory based on Location System using Bluetooth},
 venue = {Toyama/Japan},
 year = {2013}
}`
            },

  {
            'id': '58',
            'author': 'Seiko Tsuruoka, Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Medical Document Ranking Useful to Study using External Information of the Documents',
            'year': '2013',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-5,
 author = {Tomohiro Kuroda and Kikuo Hirano and Kazushige Sugimura and Satoshi Adachi and Hidetsugu Igarashi and Kazuo Ueshima},
 booktitle = {Proceedings of The Annual Conference of Textile Machinery Society of Japan},
 pages = {112-113},
 title = {Prototyping e-Textile Underwear for 12-lead Electrocardiograph using Traditional Weaving Technique 2nd Report},
 venue = {Osaka/Japan},
 year = {2013}
}`
            },

  {
            'id': '59',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume',
            'title': 'Feasibility Study of HIS Backup Cloud based on Secret Sharing',
            'year': '2013',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-4,
 author = {Tomohiro Kuroda and Tadamasa Takemura and Haruo Noma},
 booktitle = {Proceedings of IEICE General Conference},
 title = {Implementing Ubiquitous Sensor Network into Clinical Environment},
 venue = {Gifu/Japan},
 year = {2013}
}`
            },

  {
            'id': '60',
            'author': 'Kikue Sato, Tomohiro Kuroda, Tadamasa Takemura',
            'title': 'Quantitative Analysis of Staff Trajectory based on Location System using Bluetooth',
            'year': '2013',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-3,
 author = {Masashi Kanai and Keiko Furukawa and Shigemi Matsumoto and Atsushi Yonezawa and Tomohiro Kuroda and Tatsuaki Yonezawa and Shuichi Shiga and Hironori Haga and Masashi Kosugi and Satoshi Ichiyama and Hiroyuki Yoshihara and Kazuo Matsubara and Tsutomu Chiba and Manabu Muto},
 booktitle = {Proceedings of Kyoto Workshop for Cancer Research},
 title = {Kyoto University Hospital Cancer Center, Bio-bank and -informatics for Cancer (BIC) Project},
 venue = {Kyoto/Japan},
 year = {2013}
}`
            },

  {
            'id': '61',
            'author': 'Tomohiro Kuroda, Kikuo Hirano, Kazushige Sugimura, Satoshi Adachi, Hidetsugu Igarashi, Kazuo Ueshima',
            'title': 'Prototyping e-Textile Underwear for 12-lead Electrocardiograph using Traditional Weaving Technique 2nd Report',
            'year': '2013',
            'book': 'Proceedings of The Annual Conference of Textile Machinery Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-20,
 author = {Yoshihiro Umehara and Masatoshi Yoshikawa and Tomohiro Kuroda and Kazuya Okamoto and Naoto Kume and Hiroyuki Yoshihara},
 booktitle = {Technical Reports of IPSJ},
 number = {29},
 pages = {1-8},
 title = {Study on platform for therapeutic value analysis of medicine based on electronic patient record},
 venue = {Kyoto/Japan},
 year = {2013}
}`
            },

  {
            'id': '62',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Haruo Noma',
            'title': 'Implementing Ubiquitous Sensor Network into Clinical Environment',
            'year': '2013',
            'book': 'Proceedings of IEICE General Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-2,
 author = {Naoto Kume and Yasutomo Kawata and Shirou Manabe and Yoshinari Shima and Yasushi Matsumura and Kenji Araki and Katsuhiko Takabayashi and Kazuya Okamoto and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {82-84},
 title = {Problems toward Sharing Laboratory Data Between Hospitals},
 venue = {Niigata/Japan},
 year = {2013}
}`
            },

  {
            'id': '63',
            'author': 'Masashi Kanai, Keiko Furukawa, Shigemi Matsumoto, Atsushi Yonezawa, Tomohiro Kuroda, Tatsuaki Yonezawa, Shuichi Shiga, Hironori Haga, Masashi Kosugi, Satoshi Ichiyama, Hiroyuki Yoshihara, Kazuo Matsubara, Tsutomu Chiba, Manabu Muto',
            'title': 'Kyoto University Hospital Cancer Center, Bio-bank and -informatics for Cancer (BIC) Project',
            'year': '2013',
            'book': 'Proceedings of Kyoto Workshop for Cancer Research',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-19,
 author = {Takuya Uwate and Tadamasa Takemura and Kazuya Okamoto and Tatsuya Tokunaga and Naoto Kume and Tomohiro Kuroda and Masumi Azuma and Naoki Ohboshi and Hiroyuki Yoshihara and Haruhiko Nishimura},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {906-907},
 title = {Development of Mediation Support System using EHR and Social Media System},
 venue = {Kobe/Japan},
 year = {2013}
}`
            },

  {
            'id': '64',
            'author': 'Yoshihiro Umehara, Masatoshi Yoshikawa, Tomohiro Kuroda, Kazuya Okamoto, Naoto Kume, Hiroyuki Yoshihara',
            'title': 'Study on platform for therapeutic value analysis of medicine based on electronic patient record',
            'year': '2013',
            'book': 'Technical Reports of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-18,
 author = {Tomohiro Nakano and Nao Onose and Kikue Sato and Tomoko Hikita and Reiko Houya and Kazuya Okamoto and Tomohiro Kuroda and Naoki Ohboshi},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1156-1157},
 title = {Development of Context-aware Nursing Support Mobile System},
 venue = {Kobe/Japan},
 year = {2013}
}`
            },

  {
            'id': '65',
            'author': 'Naoto Kume, Yasutomo Kawata, Shirou Manabe, Yoshinari Shima, Yasushi Matsumura, Kenji Araki, Katsuhiko Takabayashi, Kazuya Okamoto, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Problems toward Sharing Laboratory Data Between Hospitals',
            'year': '2013',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-17,
 author = {Tadamasa Takemura and Hitomi Yamada and Kazuya Okamoto and Tomohiro Kuroda and Kazuo Nakazawa and Shigeki Kuwata},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {684-685},
 title = {Development of Automatic Evaluation System for Written Informed Consent on Electronic Medical Record System},
 venue = {Kobe/Japan},
 year = {2013}
}`
            },

  {
            'id': '66',
            'author': 'Takuya Uwate, Tadamasa Takemura, Kazuya Okamoto, Tatsuya Tokunaga, Naoto Kume, Tomohiro Kuroda, Masumi Azuma, Naoki Ohboshi, Hiroyuki Yoshihara, Haruhiko Nishimura',
            'title': 'Development of Mediation Support System using EHR and Social Media System',
            'year': '2013',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-16,
 author = {Tomohiro Kuroda and Kenji Araki and Yoshiyau Okuhara and Eizen Kimura and Toru Kumai and Naoto Kume and Atsushi Sato and Tadahiro Shimogawa and Yutaka Hatakeyama and Haruhiko Hiramatsu and Yasushi Matsumura and Yoshinori Yamashita},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {98-99},
 title = {Basic Strategy of HIS data backup},
 venue = {Kobe/Japan},
 year = {2013}
}`
            },

  {
            'id': '67',
            'author': 'Tomohiro Nakano, Nao Onose, Kikue Sato, Tomoko Hikita, Reiko Houya, Kazuya Okamoto, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Development of Context-aware Nursing Support Mobile System',
            'year': '2013',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-15,
 author = {Tomohiro Kuroda and Hiroaki Iwamaru and Kenji Masaki and Kazuya Okamoto},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {226-227},
 title = {Study and Validation of the Cloud Print System under Virtual Desktop Infrastructure},
 venue = {Kobe/Japan},
 year = {2013}
}`
            },

  {
            'id': '68',
            'author': 'Tadamasa Takemura, Hitomi Yamada, Kazuya Okamoto, Tomohiro Kuroda, Kazuo Nakazawa, Shigeki Kuwata',
            'title': 'Development of Automatic Evaluation System for Written Informed Consent on Electronic Medical Record System',
            'year': '2013',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-14,
 author = {Atsushi Sato and Eizen Kimura and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {108-109},
 title = {Improving the Performance of Secret Sharing Backup System by Applying Compression and Differential Methods on HIS data},
 venue = {Kobe/Japan},
 year = {2013}
}`
            },

  {
            'id': '69',
            'author': 'Tomohiro Kuroda, Kenji Araki, Yoshiyau Okuhara, Eizen Kimura, Toru Kumai, Naoto Kume, Atsushi Sato, Tadahiro Shimogawa, Yutaka Hatakeyama, Haruhiko Hiramatsu, Yasushi Matsumura, Yoshinori Yamashita',
            'title': 'Basic Strategy of HIS data backup',
            'year': '2013',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-13,
 author = {Takashi Yamamoto and Kenichi Murakami and Yoji Okada and Tomohiro Miyasaka and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1288-1289},
 title = {Dynamic Control of Wireless Network Configuration Considering Priority of Medical Device Communication},
 venue = {Kobe/Japan},
 year = {2013}
}`
            },

  {
            'id': '70',
            'author': 'Tomohiro Kuroda, Hiroaki Iwamaru, Kenji Masaki, Kazuya Okamoto',
            'title': 'Study and Validation of the Cloud Print System under Virtual Desktop Infrastructure',
            'year': '2013',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-12,
 author = {Tomohiro Kuroda and Nodoka Nakashima and Mayuko Kaneda and Kikue Sato and Naoki Ohboshi and Ayumu Okada and Kazuya Okamoto and Hiroyuki Yoshihara and Tomoya Akiyama},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {171},
 title = {Evaluating the Workload Reduction from Automatic Vital Data Transmission},
 venue = {Fukuoka/Japan},
 year = {2013}
}`
            },

  {
            'id': '71',
            'author': 'Atsushi Sato, Eizen Kimura, Tomohiro Kuroda',
            'title': 'Improving the Performance of Secret Sharing Backup System by Applying Compression and Differential Methods on HIS data',
            'year': '2013',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-11,
 author = {Tomohiro Kuroda and Kikue Sato and Tadamasa Takemura and Kazuya Okamoto and Akitoshi Seiyama},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {181},
 title = {Visualization of nursing staff's workflow for management with location system},
 venue = {Fukuoka/Japan},
 year = {2013}
}`
            },

  {
            'id': '72',
            'author': 'Takashi Yamamoto, Kenichi Murakami, Yoji Okada, Tomohiro Miyasaka, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Dynamic Control of Wireless Network Configuration Considering Priority of Medical Device Communication',
            'year': '2013',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-10,
 author = {Risa Sakurai and Tadamasa Takemura and Hiroshi Tamura and Tomohiro Kuroda and Hideyuki Horio and Kazuhiko Yamashita},
 booktitle = {Proceedings of Annual Conference of M Technology Association Japan},
 pages = {46-47},
 title = {Developing Computerized Contrast-sensitivity Test for Early Diagnosis of Cataract},
 venue = {Kobe/Japan},
 year = {2013}
}`
            },

  {
            'id': '73',
            'author': 'Tomohiro Kuroda, Nodoka Nakashima, Mayuko Kaneda, Kikue Sato, Naoki Ohboshi, Ayumu Okada, Kazuya Okamoto, Hiroyuki Yoshihara, Tomoya Akiyama',
            'title': 'Evaluating the Workload Reduction from Automatic Vital Data Transmission',
            'year': '2013',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2013-domestic-conferences-1,
 author = {Hironobu Murano and Masashi Kotani and Kunihiro Terazawa and Tomohiro Kuroda and Nobuya Inagaki and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {268-270},
 title = {Publication for Administrative Improvement -Activities of Office for Hospital Strategic Planning-},
 venue = {Niigata/Japan},
 year = {2013}
}`
            },

  {
            'id': '74',
            'author': 'Tomohiro Kuroda, Kikue Sato, Tadamasa Takemura, Kazuya Okamoto, Akitoshi Seiyama',
            'title': 'Visualization of nursing staff\'s workflow for management with location system',
            'year': '2013',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2012-journal-papers-8,
 author = {Tomohiro Kuroda and Hiroshi Sasaki and Takatoshi Suenaga and Yasushi Masuda and Yoshihiro Yasumuro and Kenta Hori and Naoki Ohboshi and Tadamasa Takemura and Kunihiro Chihara and Hiroyuki Yoshihara},
 journal = {IEEE Transactions on Information Technology in Biomedicine},
 number = {6},
 pages = {1216-1223},
 title = {Embedded Ubiquitous Services on Hospital Information Systems},
 volume = {16},
 year = {2012}
}`
            },

  {
            'id': '75',
            'author': 'Risa Sakurai, Tadamasa Takemura, Hiroshi Tamura, Tomohiro Kuroda, Hideyuki Horio, Kazuhiko Yamashita',
            'title': 'Developing Computerized Contrast-sensitivity Test for Early Diagnosis of Cataract',
            'year': '2013',
            'book': 'Proceedings of Annual Conference of M Technology Association Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2012-journal-papers-7,
 author = {Tadamasa Takemura and Toshiyuki Tanaka and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Masahiro Hirose and Hiroyuki Yoshihara},
 journal = {Japanese Journal of Telemedicine and Telecare},
 number = {2},
 pages = {249-251},
 title = {The Development of a Multiplayer Game for Education of Hospital Management},
 volume = {8},
 year = {2012}
}`
            },

  {
            'id': '76',
            'author': 'Hironobu Murano, Masashi Kotani, Kunihiro Terazawa, Tomohiro Kuroda, Nobuya Inagaki, Hiroyuki Yoshihara',
            'title': 'Publication for Administrative Improvement -Activities of Office for Hospital Strategic Planning-',
            'year': '2013',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2012-journal-papers-6,
 author = {Yusuke Uchida and Tomohiro Kuroda and Tsukasa Kan and Hideya Takahashi and Kenta Hori and Naoto Kume and Masahiko Ando and Takashi Kawamura and Tadamasa Takemura and Hiroyuki Yoshihara},
 journal = {Japanese Journal of Telemedicine and Telecare},
 number = {2},
 pages = {235-237},
 title = {Constructing an Information Support System for Remote Ausculation},
 volume = {8},
 year = {2012}
}`
            },

  {
            'id': '77',
            'author': 'Tomohiro Kuroda, Hiroshi Sasaki, Takatoshi Suenaga, Yasushi Masuda, Yoshihiro Yasumuro, Kenta Hori, Naoki Ohboshi, Tadamasa Takemura, Kunihiro Chihara, Hiroyuki Yoshihara',
            'title': 'Embedded Ubiquitous Services on Hospital Information Systems',
            'year': '2012',
            'book': 'IEEE Transactions on Information Technology in Biomedicine',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2012-journal-papers-5,
 author = {Kenta Hori and Tomohiro Kuroda and Naoki Ohboshi},
 journal = {Japanese Journal of Telemedicine and Telecare},
 number = {2},
 pages = {212-215},
 title = {JPEG2000 Multi-scale Video Streaming System for Total Information Transmission Control in Telemedicine},
 volume = {8},
 year = {2012}
}`
            },

  {
            'id': '78',
            'author': 'Tadamasa Takemura, Toshiyuki Tanaka, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'The Development of a Multiplayer Game for Education of Hospital Management',
            'year': '2012',
            'book': 'Japanese Journal of Telemedicine and Telecare',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2012-journal-papers-4,
 author = {Tadamasa Takemura and Kenji Araki and Kenji Arita and Toshiaki Suzuki and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Akira Takada and Hiroyuki Yoshihara},
 journal = {Journal of Medical Systems},
 number = {4},
 pages = {2213-2218},
 title = {Development of Fundamental Infrastructure for Nationwide EHR in Japan},
 volume = {36},
 year = {2012}
}`
            },

  {
            'id': '79',
            'author': 'Yusuke Uchida, Tomohiro Kuroda, Tsukasa Kan, Hideya Takahashi, Kenta Hori, Naoto Kume, Masahiko Ando, Takashi Kawamura, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Constructing an Information Support System for Remote Ausculation',
            'year': '2012',
            'book': 'Japanese Journal of Telemedicine and Telecare',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2012-journal-papers-3,
 author = {Tomohiro Kuroda and Kenta Hori and Masahiko Ando and Takashi Kawamura and Tadamasa Takemura and Hiroyuki Yoshihara},
 journal = {Manabu Okumura(Ed.), Revised Selected Papers of International Workshop on Multimodality in Multispace Interation, JSAI International Symposia on AI},
 pages = {253-263},
 title = {Designing Smooth Communication Environment for Telemedicine for General Practitioner},
 volume = {7258},
 year = {2012}
}`
            },

  {
            'id': '80',
            'author': 'Kenta Hori, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'JPEG2000 Multi-scale Video Streaming System for Total Information Transmission Control in Telemedicine',
            'year': '2012',
            'book': 'Japanese Journal of Telemedicine and Telecare',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2012-journal-papers-2,
 author = {Kazuya Okamoto and Hiroko Tanaka and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {Japan Journal of Medical Informatics},
 number = {3},
 pages = {123-130},
 title = {Development of a Hypothesis-finding Support System using Medical Records for Clinical Knowledge Acquisition},
 volume = {32},
 year = {2012}
}`
            },

  {
            'id': '81',
            'author': 'Tadamasa Takemura, Kenji Araki, Kenji Arita, Toshiaki Suzuki, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Akira Takada, Hiroyuki Yoshihara',
            'title': 'Development of Fundamental Infrastructure for Nationwide EHR in Japan',
            'year': '2012',
            'book': 'Journal of Medical Systems',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2012-journal-papers-1,
 author = {Yuta Yamane and Kenta Hori and Tomohiro Kuroda and Naoki Ohboshi},
 journal = {Japan Journal of Medical Informatics},
 number = {1},
 pages = {19-25},
 title = {Multiscale Video Streaming System for Application Level Total QoS Control},
 volume = {32},
 year = {2012}
}`
            },

  {
            'id': '82',
            'author': 'Tomohiro Kuroda, Kenta Hori, Masahiko Ando, Takashi Kawamura, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Designing Smooth Communication Environment for Telemedicine for General Practitioner',
            'year': '2012',
            'book': 'Manabu Okumura(Ed.), Revised Selected Papers of International Workshop on Multimodality in Multispace Interation, JSAI International Symposia on AI',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2012-international-conferences-9,
 author = {Tadamasa Takemura and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of the International Conference on Soft Computing and Intelligent Systems and the International Symposium on Advanced Intelligent Systems},
 pages = {1384-1387},
 title = {Development of an environment for information reuse on a hospital information system},
 venue = {Kobe/Japan},
 year = {2012}
}`
            },

  {
            'id': '83',
            'author': 'Kazuya Okamoto, Hiroko Tanaka, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of a Hypothesis-finding Support System using Medical Records for Clinical Knowledge Acquisition',
            'year': '2012',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2012-international-conferences-8,
 author = {Hiroyuki Yoshihara and Naoto Kume and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference on Open Data and Information for a Changing Planet, Web Proceedings},
 title = {The History of MML (Medical Markup Language) and its Application for EHR (Dolphin Project) in Japan},
 venue = {Taipei/ROC},
 year = {2012}
}`
            },

  {
            'id': '84',
            'author': 'Yuta Yamane, Kenta Hori, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Multiscale Video Streaming System for Application Level Total QoS Control',
            'year': '2012',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2012-international-conferences-7,
 author = {Kazuya Okamoto and Toshio Uchiyama and Tadamasa Takemura and Takayuki Adachi and Naoto Kume and Tomohiro Kuroda and Tadasu Uchiyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics},
 title = {Automatic Selection of Diagnosis Procedure Combination Codes Based on Partial Treatment Data Relative to the Number of Hospitalization Days},
 venue = {Beijing/China},
 year = {2012}
}`
            },

  {
            'id': '85',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of an environment for information reuse on a hospital information system',
            'year': '2012',
            'book': 'Proceedings of the International Conference on Soft Computing and Intelligent Systems and the International Symposium on Advanced Intelligent Systems',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-international-conferences-6,
 author = {Yoshito Tabata and Tomohiro Kuroda and Kazuya Okamoto},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {305-310},
 title = {Development of a Glove-Type Input Device with the Minimum Number of Sensors for Japanese Finger Spelling},
 venue = {Laval/France},
 year = {2012}
}`
            },

  {
            'id': '86',
            'author': 'Hiroyuki Yoshihara, Naoto Kume, Tomohiro Kuroda',
            'title': 'The History of MML (Medical Markup Language) and its Application for EHR (Dolphin Project) in Japan',
            'year': '2012',
            'book': 'Proceedings of International Conference on Open Data and Information for a Changing Planet, Web Proceedings',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-international-conferences-5,
 author = {Kazuya Okamoto and Hiroki Kayama and Minoru Yamada and Naoto Kume and Tomohiro Kuroda and Tomoki Aoyama},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {483-486},
 title = {Development of a system for the assessment of a dual-task performance based on a motion-capture device},
 venue = {Laval/France},
 year = {2012}
}`
            },

  {
            'id': '87',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Takayuki Adachi, Naoto Kume, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'Automatic Selection of Diagnosis Procedure Combination Codes Based on Partial Treatment Data Relative to the Number of Hospitalization Days',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-international-conferences-4,
 author = {Tomohiro Kuroda and Tadamasa Takemura and Haruo Noma and Kazuya Okamoto and Naoto Kume and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 pages = {6104-6106},
 title = {Impact of Position Tracking on the Outpatient Navigation System},
 venue = {San Diego/USA},
 year = {2012}
}`
            },

  {
            'id': '88',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kazuya Okamoto',
            'title': 'Development of a Glove-Type Input Device with the Minimum Number of Sensors for Japanese Finger Spelling',
            'year': '2012',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-international-conferences-3,
 author = {Naoto Kume and Nobuhiro Mikuni and Megumi Nakao and Koji Sakai and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Susumu Miyamoto and Hiroyuki Yoshihara},
 booktitle = {International Journal of Computer Assisted Radiology and Surgery},
 title = {Brain-shift-Simulation using Hounsfield Numbers for Elasticity Parameter on Finite Element Method},
 venue = {Pisa/Italy},
 volume = {7},
 year = {2012}
}`
            },

  {
            'id': '89',
            'author': 'Kazuya Okamoto, Hiroki Kayama, Minoru Yamada, Naoto Kume, Tomohiro Kuroda, Tomoki Aoyama',
            'title': 'Development of a system for the assessment of a dual-task performance based on a motion-capture device',
            'year': '2012',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-international-conferences-2,
 author = {Tomohiro Kuroda and Tomoya Hioki and Naoto Kume and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Korea-Japan Workshop on Mixed Reality, USB Proceedings},
 title = {Prototyping Mixed Reality Endoscopic Surgery Trainer},
 venue = {Seoul/Korea},
 year = {2012}
}`
            },

  {
            'id': '90',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Haruo Noma, Kazuya Okamoto, Naoto Kume, Hiroyuki Yoshihara',
            'title': 'Impact of Position Tracking on the Outpatient Navigation System',
            'year': '2012',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-international-conferences-10,
 author = {Kazuya Okamoto and Hiroko Tanaka and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of the International Conference on Soft Computing and Intelligent Systems and the International Symposium on Advanced Intelligent Systems},
 pages = {1130-1133},
 title = {A Hypothesis-generating Support System Using Medical Records for Clinical Knowledge Acquisition},
 venue = {Kobe/Japan},
 year = {2012}
}`
            },

  {
            'id': '91',
            'author': 'Naoto Kume, Nobuhiro Mikuni, Megumi Nakao, Koji Sakai, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Susumu Miyamoto, Hiroyuki Yoshihara',
            'title': 'Brain-shift-Simulation using Hounsfield Numbers for Elasticity Parameter on Finite Element Method',
            'year': '2012',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-international-conferences-1,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Kyoto University - HKBU Joint Workshop on Field Informatics},
 pages = {16},
 title = {Ubiquitous Information Supports for Healthcare Service},
 venue = {Hong Kong/China},
 year = {2012}
}`
            },

  {
            'id': '92',
            'author': 'Tomohiro Kuroda, Tomoya Hioki, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Prototyping Mixed Reality Endoscopic Surgery Trainer',
            'year': '2012',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality, USB Proceedings',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-9,
 author = {Tomohiro Kuroda and Kikuo Hirano and Kazushige Sugimura and Satoshi Adachi and Hidetsugu Igarashi and Kazuo Ueshima and Hiroyuki Yoshihara},
 booktitle = {Proceedings of The Annual Conference of Textile Machinery Society of Japan},
 pages = {212-213},
 title = {Prototyping e-textile underwear for 12-lead electrocardiograph using traditional weaving technique},
 venue = {Osaka/Japan},
 year = {2012}
}`
            },

  {
            'id': '93',
            'author': 'Kazuya Okamoto, Hiroko Tanaka, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Hypothesis-generating Support System Using Medical Records for Clinical Knowledge Acquisition',
            'year': '2012',
            'book': 'Proceedings of the International Conference on Soft Computing and Intelligent Systems and the International Symposium on Advanced Intelligent Systems',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-8,
 author = {Hiroki Murata and Naoto Kume and Tomohiro Kuroda and Koji Yoshimura and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {193-194},
 title = {A Proposal of The Virtual Organ Model for Several Pelvic Organ Prolapse},
 venue = {Kyoto/Japan},
 year = {2012}
}`
            },

  {
            'id': '94',
            'author': 'Tomohiro Kuroda',
            'title': 'Ubiquitous Information Supports for Healthcare Service',
            'year': '2012',
            'book': 'Proceedings of Kyoto University - HKBU Joint Workshop on Field Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-7,
 author = {Yusuke Uchida and Tomohiro Kuroda and Kenta Hori and Naoto Kume and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {191-192},
 title = {A Proposal of Information Support System for Remote Auscultation},
 venue = {Kyoto/Japan},
 year = {2012}
}`
            },

  {
            'id': '95',
            'author': 'Tomohiro Kuroda, Kikuo Hirano, Kazushige Sugimura, Satoshi Adachi, Hidetsugu Igarashi, Kazuo Ueshima, Hiroyuki Yoshihara',
            'title': 'Prototyping e-textile underwear for 12-lead electrocardiograph using traditional weaving technique',
            'year': '2012',
            'book': 'Proceedings of The Annual Conference of Textile Machinery Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-6,
 author = {Seiko Tsuruoka and Kazuya Okamoto and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {197-198},
 title = {Medical Document Ranking using HITS Algorithm},
 venue = {Kyoto/Japan},
 year = {2012}
}`
            },

  {
            'id': '96',
            'author': 'Hiroki Murata, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'A Proposal of The Virtual Organ Model for Several Pelvic Organ Prolapse',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-5,
 author = {Naoki Ohboshi and Yosuke Hirayama and Naoto Kume and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Kenji Araki and Hiroyuki Yoshihara},
 booktitle = {Technical Reports of IPSJ},
 number = {3},
 pages = {1-6},
 title = {An asynchronous communication technique for retrieving electronic health record with tablet terminal},
 venue = {Chofu/Japan},
 year = {2012}
}`
            },

  {
            'id': '97',
            'author': 'Yusuke Uchida, Tomohiro Kuroda, Kenta Hori, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'A Proposal of Information Support System for Remote Auscultation',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-4,
 author = {Yosuke Hirayama and Naoto Kume and Naoki Ohboshi and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Kenji Araki and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Student Division of Kansai Branch of the Institute of Electronics, Information and Communication Engineers},
 pages = {67},
 title = {Development of the EHR browser on tablet},
 venue = {Kusatsu/Japan},
 volume = {17},
 year = {2012}
}`
            },

  {
            'id': '98',
            'author': 'Seiko Tsuruoka, Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Medical Document Ranking using HITS Algorithm',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-3,
 author = {Kentaro Nakayama and Kenta Hori and Tomohiro Kuroda and Naoki Ohboshi},
 booktitle = {Proceedings of Annual Conference of Student Division of Kansai Branch of the Institute of Electronics, Information and Communication Engineers},
 pages = {39},
 title = {Applying QoS Management Framework designed for Telemedicine on Multi-scaling Video Streaming},
 venue = {Kusatsu/Japan},
 volume = {17},
 year = {2012}
}`
            },

  {
            'id': '99',
            'author': 'Naoki Ohboshi, Yosuke Hirayama, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Kenji Araki, Hiroyuki Yoshihara',
            'title': 'An asynchronous communication technique for retrieving electronic health record with tablet terminal',
            'year': '2012',
            'book': 'Technical Reports of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-29,
 author = {Masahiro Tada and Haruo Noma and Tomohiro Kuroda and Tadamasa Takemura},
 booktitle = {Proceedings of Symposium on Information, System, and Technology of Special Interest Group on Information System Technologies of Architectural Institute of Japan},
 pages = {323-326},
 title = {Development of Information Service within Hospital using Sensor Network},
 venue = {Tokyo/Japan},
 year = {2012}
}`
            },

  {
            'id': '100',
            'author': 'Yosuke Hirayama, Naoto Kume, Naoki Ohboshi, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Kenji Araki, Hiroyuki Yoshihara',
            'title': 'Development of the EHR browser on tablet',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of Student Division of Kansai Branch of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-28,
 author = {Seiko Tsuruoka and Kazuya Okamoto and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Joint Research Meeting},
 title = {Proposal of Ranking Method of Clinical Documents Using External Data},
 venue = {Kyoto/Japan},
 year = {2012}
}`
            },

  {
            'id': '101',
            'author': 'Kentaro Nakayama, Kenta Hori, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Applying QoS Management Framework designed for Telemedicine on Multi-scaling Video Streaming',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of Student Division of Kansai Branch of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-27,
 author = {Hiroki Murata and Naoto Kume and Tomohiro Kuroda and Koji Yoshimura and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Joint Research Meeting},
 title = {Three Dimensional Model to Explain Pelvic Organ Prolapse},
 venue = {Kyoto/Japan},
 year = {2012}
}`
            },

  {
            'id': '102',
            'author': 'Masahiro Tada, Haruo Noma, Tomohiro Kuroda, Tadamasa Takemura',
            'title': 'Development of Information Service within Hospital using Sensor Network',
            'year': '2012',
            'book': 'Proceedings of Symposium on Information, System, and Technology of Special Interest Group on Information System Technologies of Architectural Institute of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-26,
 author = {Yusuke Uchida and Tomohiro Kuroda and Tsukasa Kan and Hideya Takahashi and Naoto Kume and Kenta Hori and Masahiko Ando and Takashi Kawamura and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Joint Research Meeting},
 title = {Development of Information System for Tele-auscultation support},
 venue = {Kyoto/Japan},
 year = {2012}
}`
            },

  {
            'id': '103',
            'author': 'Seiko Tsuruoka, Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Proposal of Ranking Method of Clinical Documents Using External Data',
            'year': '2012',
            'book': 'Joint Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-25,
 author = {Seiko Tsuruoka and Kazuya Okamoto and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1030-1033},
 title = {Medical Document Ranking using External Information of the Documents},
 venue = {Niigata/Japan},
 year = {2012}
}`
            },

  {
            'id': '104',
            'author': 'Hiroki Murata, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Three Dimensional Model to Explain Pelvic Organ Prolapse',
            'year': '2012',
            'book': 'Joint Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-24,
 author = {Satoki Hamaguchi and Toshihiko Osugi and Tomohiro Kuroda and Ken-ichiro Watanabe},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1410-1413},
 title = {ICT Support for Educational Activity at Special Needs Education School for Sick Children},
 venue = {Niigata/Japan},
 year = {2012}
}`
            },

  {
            'id': '105',
            'author': 'Yusuke Uchida, Tomohiro Kuroda, Tsukasa Kan, Hideya Takahashi, Naoto Kume, Kenta Hori, Masahiko Ando, Takashi Kawamura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Development of Information System for Tele-auscultation support',
            'year': '2012',
            'book': 'Joint Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-23,
 author = {Tomohiro Kuroda and Eizen Kimura and Yasushi Matsumura and Yoshinori Yamashita and Haruhiko Hiramatsu and Naoto Kume},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {474-477},
 title = {Simulating Cloud Environment for HIS backup using Secret Sharing},
 venue = {Niigata/Japan},
 year = {2012}
}`
            },

  {
            'id': '106',
            'author': 'Seiko Tsuruoka, Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Medical Document Ranking using External Information of the Documents',
            'year': '2012',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-22,
 author = {Yusuke Uchida and Tomohiro Kuroda and Tsukasa Suga and Hideya Takahashi and Kenta Hori and Naoto Kume and Masahiko Ando and Takashi Kawamura and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {562-564},
 title = {Information Support System for Tele-Auscultation using Mixed Reality},
 venue = {Niigata/Japan},
 year = {2012}
}`
            },

  {
            'id': '107',
            'author': 'Satoki Hamaguchi, Toshihiko Osugi, Tomohiro Kuroda, Ken-ichiro Watanabe',
            'title': 'ICT Support for Educational Activity at Special Needs Education School for Sick Children',
            'year': '2012',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-21,
 author = {Sachiko Okada and Keisuke Nagase and Akiko Ito and Fumihiko Ando and Yoshiaki Nakagawa and Kazuya Okamoto and Naoto Kume and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {505},
 title = {Development and Evaluation of Outlier Detector on Hospital Management using Hospital Information Systems},
 venue = {Toyonaka/Japan},
 year = {2012}
}`
            },

  {
            'id': '108',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume',
            'title': 'Simulating Cloud Environment for HIS backup using Secret Sharing',
            'year': '2012',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-20,
 author = {Tatsuya Tokunaga and Naoto Kume and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Naoki Ohboshi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {509},
 title = {An application framework providing medical information enriched by web service combination},
 venue = {Toyonaka/Japan},
 year = {2012}
}`
            },

  {
            'id': '109',
            'author': 'Yusuke Uchida, Tomohiro Kuroda, Tsukasa Suga, Hideya Takahashi, Kenta Hori, Naoto Kume, Masahiko Ando, Takashi Kawamura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Information Support System for Tele-Auscultation using Mixed Reality',
            'year': '2012',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-2,
 author = {Haruo Noma and Masahiro Tada and Tomohiro Kuroda and Tadamasa Takemura},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {446},
 pages = {29-34},
 title = {Development of Real-Time Location System Using Bluetooth},
 venue = {Tokyo/Japan},
 volume = {111},
 year = {2012}
}`
            },

  {
            'id': '110',
            'author': 'Sachiko Okada, Keisuke Nagase, Akiko Ito, Fumihiko Ando, Yoshiaki Nakagawa, Kazuya Okamoto, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development and Evaluation of Outlier Detector on Hospital Management using Hospital Information Systems',
            'year': '2012',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-19,
 author = {Masahiro Yakami and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {501},
 title = {Development and evaluation of a system for end-users to retrieve case data from a HIS supporting complex search conditions involving multiple data tables},
 venue = {Toyonaka/Japan},
 year = {2012}
}`
            },

  {
            'id': '111',
            'author': 'Tatsuya Tokunaga, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'An application framework providing medical information enriched by web service combination',
            'year': '2012',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-18,
 author = {Fumihiko Ando and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {519},
 title = {Hospital management simulation by the model to fill the sickbed with real patient data},
 venue = {Toyonaka/Japan},
 year = {2012}
}`
            },

  {
            'id': '112',
            'author': 'Haruo Noma, Masahiro Tada, Tomohiro Kuroda, Tadamasa Takemura',
            'title': 'Development of Real-Time Location System Using Bluetooth',
            'year': '2012',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-17,
 author = {Yusuke Uchida and Tomohiro Kuroda and Tsukasa Kan and Hideya Takahashi and Kenta Hori and Naoto Kume and Masahiko Ando and Takashi Kawamura and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {488-489},
 title = {Developing Tele-medicine Support Information System Which Integrates and Transmits Visual, Tactile, and Auditory information},
 venue = {Toyonaka/Japan},
 year = {2012}
}`
            },

  {
            'id': '113',
            'author': 'Masahiro Yakami, Tomohiro Kuroda',
            'title': 'Development and evaluation of a system for end-users to retrieve case data from a HIS supporting complex search conditions involving multiple data tables',
            'year': '2012',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-16,
 author = {Hiroki Murata and Naoto Kume and Tomohiro Kuroda and Koji Yoshimura and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {262-263},
 title = {Development of The Virtual Organ Model for Several Pelvic Organ Prolapse},
 venue = {Toyonaka/Japan},
 year = {2012}
}`
            },

  {
            'id': '114',
            'author': 'Fumihiko Ando, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Hospital management simulation by the model to fill the sickbed with real patient data',
            'year': '2012',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-15,
 author = {Naoto Kume and Kana Eguchi and Koji Yoshimura and Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {52},
 title = {Soft tissue ablation model by multiple manipulation for surgical simulation},
 venue = {Toyonaka/Japan},
 year = {2012}
}`
            },

  {
            'id': '115',
            'author': 'Yusuke Uchida, Tomohiro Kuroda, Tsukasa Kan, Hideya Takahashi, Kenta Hori, Naoto Kume, Masahiko Ando, Takashi Kawamura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Developing Tele-medicine Support Information System Which Integrates and Transmits Visual, Tactile, and Auditory information',
            'year': '2012',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-14,
 author = {Tatsuya Tokunaga and Kazuya Okamoto and Naoto Kume and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of M Technology Association Japan},
 pages = {42-44},
 title = {Prototyping statistical data provider based on EHR application framework},
 venue = {Nagasaki/Japan},
 year = {2012}
}`
            },

  {
            'id': '116',
            'author': 'Hiroki Murata, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Development of The Virtual Organ Model for Several Pelvic Organ Prolapse',
            'year': '2012',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-13,
 author = {Hiroki Murata and Naoto Kume and Tomohiro Kuroda and Koji Yoshimura and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {21},
 title = {Prototyping The Virtual Organ Model for Several Pelvic Organ Prolapse},
 venue = {Chiba/Japan},
 year = {2012}
}`
            },

  {
            'id': '117',
            'author': 'Naoto Kume, Kana Eguchi, Koji Yoshimura, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Soft tissue ablation model by multiple manipulation for surgical simulation',
            'year': '2012',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-12,
 author = {Kojiro Taura and Megumi Nakao and Etsuno Hatano and Takamichi Ishii and Tadahiro Narita and Hiromitsu Nagata and Tomohiro Kuroda and Kotaro Minato and Shinji Uemoto},
 booktitle = {Proceedings of The General Meeting of the Japanese Society of Gastroenterological Surgery},
 title = {Virtual Reality of Hepatectomy using Plissimo Era},
 venue = {Toyama/Japan},
 year = {2012}
}`
            },

  {
            'id': '118',
            'author': 'Tatsuya Tokunaga, Kazuya Okamoto, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Prototyping statistical data provider based on EHR application framework',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of M Technology Association Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-11,
 author = {Kenta Hori and Kentaro Nakayama and Yuta Yamane and Tomohiro Kuroda and Naoki Ohboshi},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {140-141},
 title = {A Multi-Scale Image Transmission on an Integrated Communication Control System for Telemedicine},
 venue = {Hakodate/Japan},
 year = {2012}
}`
            },

  {
            'id': '119',
            'author': 'Hiroki Murata, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Prototyping The Virtual Organ Model for Several Pelvic Organ Prolapse',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-10,
 author = {Masahiro Yakami and Tomohiro Kuroda and Takeshi Kubo and Yutaka Emoto and Hiroyuki Yoshihara and Kaori Togashi},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {132-133},
 title = {Developing Case Finding and Information Retrieval System for Non-informatics Specialists Enabling Complicated Query over Multiple EMR Tables},
 venue = {Hakodate/Japan},
 year = {2012}
}`
            },

  {
            'id': '120',
            'author': 'Kojiro Taura, Megumi Nakao, Etsuno Hatano, Takamichi Ishii, Tadahiro Narita, Hiromitsu Nagata, Tomohiro Kuroda, Kotaro Minato, Shinji Uemoto',
            'title': 'Virtual Reality of Hepatectomy using Plissimo Era',
            'year': '2012',
            'book': 'Proceedings of The General Meeting of the Japanese Society of Gastroenterological Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-domestic-conferences-1,
 author = {Yuya Yamamoto and Tomohiro Kuroda and Naoki Ohboshi and Osamu Oshiro},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {380},
 pages = {377-380},
 title = {Prototyping armrest-mounted context-aware electrocardiograph},
 venue = {Neyagawa/Japan},
 volume = {111},
 year = {2012}
}`
            },

  {
            'id': '121',
            'author': 'Kenta Hori, Kentaro Nakayama, Yuta Yamane, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'A Multi-Scale Image Transmission on an Integrated Communication Control System for Telemedicine',
            'year': '2012',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2011-journal-papers-6,
 author = {Goshiro Yamamoto and Tomohiro Kuroda and Daisuke Yoshitake and Seamus Hickey and Jaakko Hyry and Kunihiro Chihara and Petri Pulli},
 journal = {The International Journal on Disability and Human Development},
 number = {4},
 pages = {295-300},
 title = {PiTaSu: Wearable Interface for Assisting Senior Citizens with Memory Problems},
 volume = {10},
 year = {2011}
}`
            },

  {
            'id': '122',
            'author': 'Masahiro Yakami, Tomohiro Kuroda, Takeshi Kubo, Yutaka Emoto, Hiroyuki Yoshihara, Kaori Togashi',
            'title': 'Developing Case Finding and Information Retrieval System for Non-informatics Specialists Enabling Complicated Query over Multiple EMR Tables',
            'year': '2012',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2011-journal-papers-5,
 author = {Tomohiro Kuroda and Tetsuro Kaga and Hiroko Azuma and Masakazu Yagi and Yoshihiro Kuroda and Masataka Imura and Osamu Oshiro and Kenji Takada},
 journal = {Journal of Biocybernetics and Biomedical Engineering},
 number = {2},
 pages = {59-70},
 title = {Method to Develop Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '123',
            'author': 'Yuya Yamamoto, Tomohiro Kuroda, Naoki Ohboshi, Osamu Oshiro',
            'title': 'Prototyping armrest-mounted context-aware electrocardiograph',
            'year': '2012',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2011-journal-papers-4,
 author = {Eizen Kimura and Shinji Kobayashi and Tomohiro Kuroda and Ken Ishihara and Hiroyuki Yoshihara and Tsuneyo Mimori and Ryosuke Takahashi and Tsutomu Chiba},
 journal = {Japan Journal of Medical Informatics},
 number = {3},
 pages = {173-182},
 title = {Lessons Learned from Modeling Archetypes for Intractable Disease Surveys},
 volume = {30},
 year = {2011}
}`
            },

  {
            'id': '124',
            'author': 'Goshiro Yamamoto, Tomohiro Kuroda, Daisuke Yoshitake, Seamus Hickey, Jaakko Hyry, Kunihiro Chihara, Petri Pulli',
            'title': 'PiTaSu: Wearable Interface for Assisting Senior Citizens with Memory Problems',
            'year': '2011',
            'book': 'The International Journal on Disability and Human Development',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2011-journal-papers-3,
 author = {Tomohiro Kuroda and Junzo Sato and Harutoshi Yazaki and Tadamasa Takemura and Keisuke Nagase and Yasuyuki Kato and Hiroyuki Yoshihara},
 journal = {Japan Journal of Medical Informatics},
 number = {3},
 pages = {157-164},
 title = {Introduction of Template-based Database Framework for Prospective Study into Daily-using HIS},
 volume = {30},
 year = {2011}
}`
            },

  {
            'id': '125',
            'author': 'Tomohiro Kuroda, Tetsuro Kaga, Hiroko Azuma, Masakazu Yagi, Yoshihiro Kuroda, Masataka Imura, Osamu Oshiro, Kenji Takada',
            'title': 'Method to Develop Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph',
            'year': '2011',
            'book': 'Journal of Biocybernetics and Biomedical Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2011-journal-papers-2,
 author = {Tadamasa Takemura and Yoko Tanaka and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Masahiro Hirose and Hiroyuki Yoshihara},
 journal = {Japan Journal of Medical Informatics},
 number = {1},
 pages = {37-48},
 title = {Development of the Hospital Management Game for Education based on Role-Play},
 volume = {30},
 year = {2011}
}`
            },

  {
            'id': '126',
            'author': 'Eizen Kimura, Shinji Kobayashi, Tomohiro Kuroda, Ken Ishihara, Hiroyuki Yoshihara, Tsuneyo Mimori, Ryosuke Takahashi, Tsutomu Chiba',
            'title': 'Lessons Learned from Modeling Archetypes for Intractable Disease Surveys',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2011-journal-papers-1,
 author = {Kazuya Okamoto and Toshio Uchiyama and Tadamasa Takemura and Takayuki Adachi and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {1},
 pages = {40-47},
 title = {Automatic DPC Code Selection from Discharge Summaries using Several Machine Learning Methods},
 volume = {49},
 year = {2011}
}`
            },

  {
            'id': '127',
            'author': 'Tomohiro Kuroda, Junzo Sato, Harutoshi Yazaki, Tadamasa Takemura, Keisuke Nagase, Yasuyuki Kato, Hiroyuki Yoshihara',
            'title': 'Introduction of Template-based Database Framework for Prospective Study into Daily-using HIS',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2011-international-conferences-4,
 author = {Tomohiro Kuroda and Kenta Hori and Masahiko Ando and Takashi Kawamura and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Workshop on Multimodality in Multispace Interaction},
 pages = {69-79},
 title = {Designing Smooth Communication Environment for Telemedicine for General Practitioner},
 venue = {Takamatsu/Japan},
 year = {2011}
}`
            },

  {
            'id': '128',
            'author': 'Tadamasa Takemura, Yoko Tanaka, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'Development of the Hospital Management Game for Education based on Role-Play',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2011-international-conferences-3,
 author = {Shinji Kobayashi and Eizen Kimura and Takeki Yoshikawa and Hugh Leslie and Heather Lesie and Masaki Yasukawa and Ken Ishihara and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Conference of the European Federation for Medical Informatics},
 title = {Clinical Data Modeling Using ArchetypeTechnology for National Surveillance of Intractable Diseases in Japan},
 venue = {Oslo/Norway},
 year = {2011}
}`
            },

  {
            'id': '129',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Takayuki Adachi, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Automatic DPC Code Selection from Discharge Summaries using Several Machine Learning Methods',
            'year': '2011',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2011-international-conferences-2,
 author = {Kazuya Okamoto and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Naoki Ohboshi and Kenta Hori and Masahiro Hirose and Nobuaki Ito and Hiroyuki Yoshihara},
 booktitle = {International Journal of Computer Assisted Radiology and Surgery},
 title = {A Reporting System and a Similar Case Retrieval System Exploiting Meta-information of Image},
 venue = {Berlin/Germany},
 year = {2011}
}`
            },

  {
            'id': '130',
            'author': 'Tomohiro Kuroda, Kenta Hori, Masahiko Ando, Takashi Kawamura, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Designing Smooth Communication Environment for Telemedicine for General Practitioner',
            'year': '2011',
            'book': 'Proceedings of International Workshop on Multimodality in Multispace Interaction',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-international-conferences-1,
 author = {Tomohiro Kuroda and Atsushi Kitamura and Naoki Ohboshi and Hiroshi Sasaki and Hiroo Tamagawa and Mitsuhiko Obata and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Korea-Japan Workshop on Mixed Reality},
 title = {Prototyping MR Clinical Support System for Dentists},
 venue = {Suita/Japan},
 year = {2011}
}`
            },

  {
            'id': '131',
            'author': 'Shinji Kobayashi, Eizen Kimura, Takeki Yoshikawa, Hugh Leslie, Heather Lesie, Masaki Yasukawa, Ken Ishihara, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Clinical Data Modeling Using ArchetypeTechnology for National Surveillance of Intractable Diseases in Japan',
            'year': '2011',
            'book': 'Proceedings of International Conference of the European Federation for Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-9,
 author = {Tadamasa Takemura and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Masahiro Hirose and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {108},
 title = {Automatic Extraction of Medical Practices based on Accidents},
 venue = {Chiba/Japan},
 year = {2011}
}`
            },

  {
            'id': '132',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Naoki Ohboshi, Kenta Hori, Masahiro Hirose, Nobuaki Ito, Hiroyuki Yoshihara',
            'title': 'A Reporting System and a Similar Case Retrieval System Exploiting Meta-information of Image',
            'year': '2011',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-8,
 author = {Naoto Kume and Rei Yamaoka and Nobuhiro Mikuni and Koji Sakai and Tomohiro Kuroda and Megumi Nakao and Kazuya Okamoto and Tadamasa Takemura and Kotaro Minato and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {97},
 title = {VR-based Brain-shift Simulation for Neurosurgery},
 venue = {Chiba/Japan},
 year = {2011}
}`
            },

  {
            'id': '133',
            'author': 'Tomohiro Kuroda, Atsushi Kitamura, Naoki Ohboshi, Hiroshi Sasaki, Hiroo Tamagawa, Mitsuhiko Obata, Hiroyuki Yoshihara',
            'title': 'Prototyping MR Clinical Support System for Dentists',
            'year': '2011',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-7,
 author = {Toshiyuki Tanaka and Tadamasa Takemura and Kazuya Okamoto and Naoto Kume and Masahiro Hirose and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {459-460},
 title = {A Development of Multiplayer Game for Education of Hospital Management},
 venue = {Suita/Japan},
 year = {2011}
}`
            },

  {
            'id': '134',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'Automatic Extraction of Medical Practices based on Accidents',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-6,
 author = {Tomoya Hioki and Naoto Kume and Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {627-628},
 title = {A Proposal of Mixed Reality Training Simulator for Endoscopic Surgery},
 venue = {Suita/Japan},
 year = {2011}
}`
            },

  {
            'id': '135',
            'author': 'Naoto Kume, Rei Yamaoka, Nobuhiro Mikuni, Koji Sakai, Tomohiro Kuroda, Megumi Nakao, Kazuya Okamoto, Tadamasa Takemura, Kotaro Minato, Hiroyuki Yoshihara',
            'title': 'VR-based Brain-shift Simulation for Neurosurgery',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-5,
 author = {Kana Eguchi and Naoto Kume and Tomohiro Kuroda and Koji Yoshimura and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {329-330},
 title = {A Proposal of Virtual Reality-based Dissection Simulation of Layered Soft Tissue},
 venue = {Suita/Japan},
 year = {2011}
}`
            },

  {
            'id': '136',
            'author': 'Toshiyuki Tanaka, Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Masahiro Hirose, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Development of Multiplayer Game for Education of Hospital Management',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-4,
 author = {Naoki Ohboshi and Atsushi Kitamura and Hiroshi Sasaki and Tomohiro Kuroda and Hiroo Tamagawa and Mitsuhiko Obata and Hiroyuki Yoshihara},
 booktitle = {Technical Reports of IPSJ},
 number = {22},
 title = {Development of Medical Treatment Support System having NFC Device as Trigger},
 venue = {Kumamoto/Japan},
 year = {2011}
}`
            },

  {
            'id': '137',
            'author': 'Tomoya Hioki, Naoto Kume, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'A Proposal of Mixed Reality Training Simulator for Endoscopic Surgery',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-31,
 author = {Tomohiro Kuroda and Kazuya Okamoto and Naoto Kume and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {855-865},
 title = {Outpatient Guide System equipping Postion Tracking and Health Insurance Card Authentication},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '138',
            'author': 'Kana Eguchi, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'A Proposal of Virtual Reality-based Dissection Simulation of Layered Soft Tissue',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-30,
 author = {Naoto Kume and Yasutomo Kawata and Shirou Manabe and Yoshinari Shima and Yasushi Matsumura and Kenji Araki and Katsuhiko Takabayashi and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {750-751},
 title = {Traversal Search in Between Four University Hospitals on a Developed Distributed Database of Clinical Accounting Information and Clinical Information},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '139',
            'author': 'Naoki Ohboshi, Atsushi Kitamura, Hiroshi Sasaki, Tomohiro Kuroda, Hiroo Tamagawa, Mitsuhiko Obata, Hiroyuki Yoshihara',
            'title': 'Development of Medical Treatment Support System having NFC Device as Trigger',
            'year': '2011',
            'book': 'Technical Reports of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-3,
 author = {Kohei Kikuchi and Mayumi Bono and Hideyuki Nakanishi and Tomohiro Kuroda and Sumihiro Kawano},
 booktitle = {Technical Report of The Japanese Society for Artificial Intelligence},
 pages = {23-27},
 title = {An analysis of gaze agreement in sign language and phonetic language conversation using tele-presence system environment},
 venue = {Tokyo/Japan},
 volume = {61},
 year = {2011}
}`
            },

  {
            'id': '140',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Naoto Kume, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Outpatient Guide System equipping Postion Tracking and Health Insurance Card Authentication',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-29,
 author = {Tadamasa Takemura and Haruo Noma and Tomohiro Kuroda and Masahiro Tada and Naoto Kume and Kazuya Okamoto and Hiroyuki Yoshihara},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {986-987},
 title = {Development of Bluetooth Barcode System to Ordering Check under Wi-Fi Network},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '141',
            'author': 'Naoto Kume, Yasutomo Kawata, Shirou Manabe, Yoshinari Shima, Yasushi Matsumura, Kenji Araki, Katsuhiko Takabayashi, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Traversal Search in Between Four University Hospitals on a Developed Distributed Database of Clinical Accounting Information and Clinical Information',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-28,
 author = {Toshiyuki Tanaka and Tadamasa Takemura and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Masahiro Hirose and Hiroyuki Yoshihara},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {604-605},
 title = {A Development of Multiplayer Fame for Education of Hospital Management},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '142',
            'author': 'Kohei Kikuchi, Mayumi Bono, Hideyuki Nakanishi, Tomohiro Kuroda, Sumihiro Kawano',
            'title': 'An analysis of gaze agreement in sign language and phonetic language conversation using tele-presence system environment',
            'year': '2011',
            'book': 'Technical Report of The Japanese Society for Artificial Intelligence',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-27,
 author = {Naoki Mihara and Kosuke Sasai and Noriyuki Tomiyama and Tomohiro Kuroda and Toshinari Nakano and Masaki Miyamoto and Keunsik Park and Hiroo Tamagawa and Yasushi Matsumura},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {576-579},
 title = {The Prototype of the Self-learning System of the Chest X-ray Images},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '143',
            'author': 'Tadamasa Takemura, Haruo Noma, Tomohiro Kuroda, Masahiro Tada, Naoto Kume, Kazuya Okamoto, Hiroyuki Yoshihara',
            'title': 'Development of Bluetooth Barcode System to Ordering Check under Wi-Fi Network',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-26,
 author = {Kazuya Okamoto and Toshio Uchiyama and Tadamasa Takemura and Takayuki Adachi and Naoto Kume and Tomohiro Kuroda and Tadasu Uchiyama and Hiroyuki Yoshihara},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {529-532},
 title = {Automatic DPC Code Selection from Treatment Data Corresponding to Length of a Hospitalization},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '144',
            'author': 'Toshiyuki Tanaka, Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'A Development of Multiplayer Fame for Education of Hospital Management',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-25,
 author = {Tatsuya Tokunaga and Tadamasa Takemura and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Naoki Ohboshi and Hiroyuki Yoshihara},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {428-429},
 title = {A Construction of a Web Service Providing Clinical Data n Maiko-net},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '145',
            'author': 'Naoki Mihara, Kosuke Sasai, Noriyuki Tomiyama, Tomohiro Kuroda, Toshinari Nakano, Masaki Miyamoto, Keunsik Park, Hiroo Tamagawa, Yasushi Matsumura',
            'title': 'The Prototype of the Self-learning System of the Chest X-ray Images',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-24,
 author = {Kazuya Okamoto and Tadamasa Takemura and Setsuko Murata and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {1045-1046},
 title = {The Development of a System Storing Life Logs and Utilization of the Life Logs in Medical Care},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '146',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Takayuki Adachi, Naoto Kume, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'Automatic DPC Code Selection from Treatment Data Corresponding to Length of a Hospitalization',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-23,
 author = {Etsuyo Kaneko and Namiko Hattori and Mikako Ohi and Noriko Hashimoto and Kenichiro Fujita and Kazuhiro Yanagihara and Tomohiro Kuroda and Osamu Ogawa and Hiroyuki Yoshihara},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {926-927},
 title = {Design and Operation of the Case Finding},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '147',
            'author': 'Tatsuya Tokunaga, Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'A Construction of a Web Service Providing Clinical Data n Maiko-net',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-22,
 author = {Tadamasa Takemura and Naoto Kume and Kazuya Okamoto and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {936-937},
 title = {Development of an Environment for Information Reuse on a Hospital Information System},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '148',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Setsuko Murata, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'The Development of a System Storing Life Logs and Utilization of the Life Logs in Medical Care',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-21,
 author = {Tomohiro Kuroda and Tadamasa Takemura and Naoto Kume and Kazuya Okamoto and Hiroyuki Yoshihara},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {319-320},
 title = {Developing Networked Digital Camera System for Clinical Use based on Commercial Ready Sybsystems},
 venue = {Kagoshima/Japan},
 volume = {31},
 year = {2011}
}`
            },

  {
            'id': '149',
            'author': 'Etsuyo Kaneko, Namiko Hattori, Mikako Ohi, Noriko Hashimoto, Kenichiro Fujita, Kazuhiro Yanagihara, Tomohiro Kuroda, Osamu Ogawa, Hiroyuki Yoshihara',
            'title': 'Design and Operation of the Case Finding',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-20,
 author = {Kana Eguchi and Naoto Kume and Tomohiro Kuroda and Koji Yoshimura and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {261-264},
 title = {A Method to Solve the Direction of Rupture Progression on a VR-based Dissection Simulation},
 venue = {Hakodate/Japan},
 year = {2011}
}`
            },

  {
            'id': '150',
            'author': 'Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of an Environment for Information Reuse on a Hospital Information System',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-2,
 author = {Masayuki Kadono and Naoki Ohboshi and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Correspondences on Human Interface},
 number = {1},
 pages = {29-32},
 title = {Developing Context-aware Unconstraint Cardiograph},
 venue = {Kyoto/Japan},
 volume = {13},
 year = {2011}
}`
            },

  {
            'id': '151',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Hiroyuki Yoshihara',
            'title': 'Developing Networked Digital Camera System for Clinical Use based on Commercial Ready Sybsystems',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-19,
 author = {Tomoya Hioki and Naoto Kume and Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {358-361},
 title = {Prototyping Mixed Reality Training Simulator for Endoscopic Surgery},
 venue = {Hakodate/Japan},
 year = {2011}
}`
            },

  {
            'id': '152',
            'author': 'Kana Eguchi, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'A Method to Solve the Direction of Rupture Progression on a VR-based Dissection Simulation',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-18,
 author = {Naoto Kume and Rei Yamaoka and Megumi Nakao and Nobuhiro Mikuni and Koji Sakai and Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Susumu Miyamoto and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {257-260},
 title = {Self-wright Deformation Simulation of Soft Tissue for Brain Surgery},
 venue = {Hakodate/Japan},
 year = {2011}
}`
            },

  {
            'id': '153',
            'author': 'Masayuki Kadono, Naoki Ohboshi, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Developing Context-aware Unconstraint Cardiograph',
            'year': '2011',
            'book': 'Correspondences on Human Interface',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-17,
 author = {Kojiro Taura and Megumi Nakao and Tomohiro Kuroda and Kotaro Minato and Etsuno Hatano and Shinji Uemoto},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {25},
 title = {Virtual Reality in Hepatectomy -Using Plissimo Era-},
 venue = {Ikoma/Japan},
 year = {2011}
}`
            },

  {
            'id': '154',
            'author': 'Tomoya Hioki, Naoto Kume, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Prototyping Mixed Reality Training Simulator for Endoscopic Surgery',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-16,
 author = {Tomoya Hioki and Naoto Kume and Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {15},
 title = {Designing Mixed Reality Simulator for Endoscopic Surgery Training},
 venue = {Ikoma/Japan},
 year = {2011}
}`
            },

  {
            'id': '155',
            'author': 'Naoto Kume, Rei Yamaoka, Megumi Nakao, Nobuhiro Mikuni, Koji Sakai, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Susumu Miyamoto, Hiroyuki Yoshihara',
            'title': 'Self-wright Deformation Simulation of Soft Tissue for Brain Surgery',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-15,
 author = {Kana Eguchi and Naoto Kume and Tomohiro Kuroda and Koji Yoshimura and Kazuya Okamoto and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {12},
 title = {Defining Direction of Fracture Propagation in Multi-point Operational Soft-tissue Dissection},
 venue = {Ikoma/Japan},
 year = {2011}
}`
            },

  {
            'id': '156',
            'author': 'Kojiro Taura, Megumi Nakao, Tomohiro Kuroda, Kotaro Minato, Etsuno Hatano, Shinji Uemoto',
            'title': 'Virtual Reality in Hepatectomy -Using Plissimo Era-',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-14,
 author = {Naoto Kume and Rei Yamaoka and Nobuhiro Mikuni and Koji Sakai and Tomohiro Kuroda and Megumi Nakao and Kazuya Okamoto and Tadamasa Takemura and Susumu Miyamoto and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {28},
 title = {Inner Brain Deformation Simulation for Brain Surgery Support},
 venue = {Ikoma/Japan},
 year = {2011}
}`
            },

  {
            'id': '157',
            'author': 'Tomoya Hioki, Naoto Kume, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Designing Mixed Reality Simulator for Endoscopic Surgery Training',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-13,
 author = {Tadamasa Takemura and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {74},
 title = {Information Retrieval System on Hospital Information Systems},
 venue = {Chiba/Japan},
 year = {2011}
}`
            },

  {
            'id': '158',
            'author': 'Kana Eguchi, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Defining Direction of Fracture Propagation in Multi-point Operational Soft-tissue Dissection',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-12,
 author = {Yuta Yamane and Kenta Hori and Tomohiro Kuroda and Naoki Ohboshi},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {140},
 title = {Multiscale Video Streaming System for Application Level QoS Control},
 venue = {Chiba/Japan},
 year = {2011}
}`
            },

  {
            'id': '159',
            'author': 'Naoto Kume, Rei Yamaoka, Nobuhiro Mikuni, Koji Sakai, Tomohiro Kuroda, Megumi Nakao, Kazuya Okamoto, Tadamasa Takemura, Susumu Miyamoto, Hiroyuki Yoshihara',
            'title': 'Inner Brain Deformation Simulation for Brain Surgery Support',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-11,
 author = {Kazuya Okamoto and Hiroko Tanaka and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {129},
 title = {A Development of Clinical Knowledge Acquisitions Support System Using Medical Records},
 venue = {Chiba/Japan},
 year = {2011}
}`
            },

  {
            'id': '160',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Information Retrieval System on Hospital Information Systems',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-10,
 author = {Tomohiro Kuroda and Haruo Noma and Chisako Naito and Masahiro Tada and Hiroe Yamanaka and Tadamasa Takemura and Kazuko Nin and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {101},
 title = {Prototyping Sensor Networking System for Automatic Vital Data Collection},
 venue = {Chiba/Japan},
 year = {2011}
}`
            },

  {
            'id': '161',
            'author': 'Yuta Yamane, Kenta Hori, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Multiscale Video Streaming System for Application Level QoS Control',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-domestic-conferences-1,
 author = {Tadamasa Takemura and Toshiharu Teramae and Kenichiro Fujita and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {26-29},
 title = {Developing Unified Data Repository of Clinical Research Data and Electoric Patient Record in Kyoto University Hospital},
 venue = {Tsukuba/Japan},
 year = {2011}
}`
            },

  {
            'id': '162',
            'author': 'Kazuya Okamoto, Hiroko Tanaka, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Development of Clinical Knowledge Acquisitions Support System Using Medical Records',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2010-journal-papers-4,
 author = {Tomohiro Kuroda and Tetsuro Kaga and Hiroko Azuma and Masakazu Yagi and Yoshihiro Kuroda and Masataka Imura and Osamu Oshiro and Kenji Takada},
 journal = {Lecture Notes of the ICB Seminar -New Trends in Biomedical and Clinical Engineering-},
 pages = {51-63},
 title = {Method to Develop Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph},
 volume = {84},
 year = {2010}
}`
            },

  {
            'id': '163',
            'author': 'Tomohiro Kuroda, Haruo Noma, Chisako Naito, Masahiro Tada, Hiroe Yamanaka, Tadamasa Takemura, Kazuko Nin, Hiroyuki Yoshihara',
            'title': 'Prototyping Sensor Networking System for Automatic Vital Data Collection',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2010-journal-papers-3,
 author = {Yoshihiro Kuroda and Shunji Kamei and Tomohiro Kuroda and Genta Kawahara and Osamu Oshiro},
 journal = {Journal of Human Interface Society},
 number = {2},
 pages = {139-146},
 title = {Flow Field Haptization System focused on Asymmetric Drag Distribution},
 volume = {12},
 year = {2010}
}`
            },

  {
            'id': '164',
            'author': 'Tadamasa Takemura, Toshiharu Teramae, Kenichiro Fujita, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Developing Unified Data Repository of Clinical Research Data and Electoric Patient Record in Kyoto University Hospital',
            'year': '2011',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2010-journal-papers-2,
 author = {Ryosuke Arai and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Tomohiro Kuroda and Osamu Oshiro},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {1},
 pages = {93-100},
 title = {Real-time Calculation Mothod of Topological Change by Localization and Recording and Playing Approaches},
 volume = {15},
 year = {2010}
}`
            },

  {
            'id': '165',
            'author': 'Tomohiro Kuroda, Tetsuro Kaga, Hiroko Azuma, Masakazu Yagi, Yoshihiro Kuroda, Masataka Imura, Osamu Oshiro, Kenji Takada',
            'title': 'Method to Develop Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph',
            'year': '2010',
            'book': 'Lecture Notes of the ICB Seminar -New Trends in Biomedical and Clinical Engineering-',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2010-journal-papers-1,
 author = {Masataka Imura and Tomohiro Kuroda and Yoshiyuki Kagiyama and Yoshihiro Kuroda and Osamu Oshiro and Hiroko Azuma and Masakazu Yagi and Kenji Takada},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {1},
 pages = {75-82},
 title = {Reconstruction of Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph at Tooth Surface Shape},
 volume = {48},
 year = {2010}
}`
            },

  {
            'id': '166',
            'author': 'Yoshihiro Kuroda, Shunji Kamei, Tomohiro Kuroda, Genta Kawahara, Osamu Oshiro',
            'title': 'Flow Field Haptization System focused on Asymmetric Drag Distribution',
            'year': '2010',
            'book': 'Journal of Human Interface Society',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2010-international-conferences-4,
 author = {Matti Pouke and Seamus Hickey and Tomohiro Kuroda and Haruo Noma},
 booktitle = {Proceedings of ACM International Workshop on Context-Awareness for Self-Managing Systems},
 pages = {46-52},
 title = {Activity Recognition of the Elderly},
 venue = {Copenhagen/Denmark},
 year = {2010}
}`
            },

  {
            'id': '167',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Real-time Calculation Mothod of Topological Change by Localization and Recording and Playing Approaches',
            'year': '2010',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2010-international-conferences-3,
 author = {Yoshito Tabata and Tomohiro Kuroda and Kazuya Okamoto},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {283-289},
 title = {Basic Study toward Automatic Generation of Glove-type Command Input Device with Optimal Number of Sensors},
 venue = {Vina del Mar/Chile},
 year = {2010}
}`
            },

  {
            'id': '168',
            'author': 'Masataka Imura, Tomohiro Kuroda, Yoshiyuki Kagiyama, Yoshihiro Kuroda, Osamu Oshiro, Hiroko Azuma, Masakazu Yagi, Kenji Takada',
            'title': 'Reconstruction of Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph at Tooth Surface Shape',
            'year': '2010',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2010-international-conferences-2,
 author = {Tomohiro Kuroda and Goshiro Yamamoto and Daisuke Yoshitake and Seamus Hickey and Jaakko Hyry and Kunihiro Chihara and Petri Pulli},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {61-69},
 title = {PiTaSu: Wearable Interface for Assisting Senior Citizens with Memory Problems},
 venue = {Vina del Mar/Chile},
 year = {2010}
}`
            },

  {
            'id': '169',
            'author': 'Matti Pouke, Seamus Hickey, Tomohiro Kuroda, Haruo Noma',
            'title': 'Activity Recognition of the Elderly',
            'year': '2010',
            'book': 'Proceedings of ACM International Workshop on Context-Awareness for Self-Managing Systems',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-international-conferences-1,
 author = {Tomohiro Kuroda and Daisuke Yoshitake and Goshiro Yamamoto and Seamus Hickey and Jaakko Hyry and Kunihiro Chihara and Petri Pulli},
 booktitle = {Proceedings of Korea-Japan Workshop on Mixed Reality},
 pages = {182-184},
 title = {PiTaSu: Mobile Mixed Reality Interface among Ubiquitous Information Support Environment},
 venue = {Gyeongju/Korea},
 year = {2010}
}`
            },

  {
            'id': '170',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kazuya Okamoto',
            'title': 'Basic Study toward Automatic Generation of Glove-type Command Input Device with Optimal Number of Sensors',
            'year': '2010',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-domestic-conferences-9,
 author = {Rei Yamaoka and Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Kotaro Minato and Hiroyuki Yoshihara and Nobuhiro Mikuni},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {552-555},
 title = {FEB-Based Soft Tissue Deformation by Gravity Modeling for Brain-shift Simulation},
 venue = {kanazawa/Japan},
 year = {2010}
}`
            },

  {
            'id': '171',
            'author': 'Tomohiro Kuroda, Goshiro Yamamoto, Daisuke Yoshitake, Seamus Hickey, Jaakko Hyry, Kunihiro Chihara, Petri Pulli',
            'title': 'PiTaSu: Wearable Interface for Assisting Senior Citizens with Memory Problems',
            'year': '2010',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-domestic-conferences-8,
 author = {Kazuya Okamoto and Toshio Uchiyama and Tadamasa Takemura and Takayuki Adachi and Naoto Kume and Tomohiro Kuroda and Tadasu Uchiyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {460-461},
 title = {Automatic DPC Coding from Discharge Summary using Multiple Machine Learning Method},
 venue = {Sapporo/Japan},
 year = {2010}
}`
            },

  {
            'id': '172',
            'author': 'Tomohiro Kuroda, Daisuke Yoshitake, Goshiro Yamamoto, Seamus Hickey, Jaakko Hyry, Kunihiro Chihara, Petri Pulli',
            'title': 'PiTaSu: Mobile Mixed Reality Interface among Ubiquitous Information Support Environment',
            'year': '2010',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-domestic-conferences-7,
 author = {Rei Yamaoka and Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Kotaro Minato and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {15},
 title = {Introduction of Deformation by Gravity into Finite Element Deformation Model for Visualization of Brain Shift Phenomena},
 venue = {Kyoto/Japan},
 year = {2010}
}`
            },

  {
            'id': '173',
            'author': 'Rei Yamaoka, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Kotaro Minato, Hiroyuki Yoshihara, Nobuhiro Mikuni',
            'title': 'FEB-Based Soft Tissue Deformation by Gravity Modeling for Brain-shift Simulation',
            'year': '2010',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-domestic-conferences-6,
 author = {Juha-Pekka Hamina and Tomohiro Kuroda and Hideo Nakamura and Masayuki Nambu and Timo Rahkonen and Kazuya Okamoto and Naoto Kume and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Bio-Medical Engineering},
 title = {Cloth with Embedded Electrode Matrix for Continuous Monitoring of Six Lead Electrocardiogram},
 venue = {Osaka/Japan},
 volume = {48},
 year = {2010}
}`
            },

  {
            'id': '174',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Takayuki Adachi, Naoto Kume, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'Automatic DPC Coding from Discharge Summary using Multiple Machine Learning Method',
            'year': '2010',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-domestic-conferences-5,
 author = {Tomohiro Kuroda},
 booktitle = {Research Colloquium of Human Interface Society of Japan},
 title = {Basic Structure of Hospital Information System},
 venue = {Kyoto/Japan},
 year = {2010}
}`
            },

  {
            'id': '175',
            'author': 'Rei Yamaoka, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Kotaro Minato, Hiroyuki Yoshihara',
            'title': 'Introduction of Deformation by Gravity into Finite Element Deformation Model for Visualization of Brain Shift Phenomena',
            'year': '2010',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-domestic-conferences-4,
 author = {Toshio Uchiyama and Kazuya Okamoto and Tadamasa Takemura and Takayuki Adachi and Naoto Kume and Tomohiro Kuroda and Tadasu Uchiyama and Hiroyuki Yoshihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 title = {DPC Coding using Concept base Specialized in Medical Field},
 venue = {Kasugai/Japan},
 year = {2010}
}`
            },

  {
            'id': '176',
            'author': 'Juha-Pekka Hamina, Tomohiro Kuroda, Hideo Nakamura, Masayuki Nambu, Timo Rahkonen, Kazuya Okamoto, Naoto Kume, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Cloth with Embedded Electrode Matrix for Continuous Monitoring of Six Lead Electrocardiogram',
            'year': '2010',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-domestic-conferences-3,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Seagaia Meeting},
 title = {Application of OpenEHR - Way of composing referral system - European way and States way -},
 venue = {Onnna/Japan},
 year = {2010}
}`
            },

  {
            'id': '177',
            'author': 'Tomohiro Kuroda',
            'title': 'Basic Structure of Hospital Information System',
            'year': '2010',
            'book': 'Research Colloquium of Human Interface Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-domestic-conferences-2,
 author = {Daisuke Yoshitake and Goshiro Yamamoto and Seamus Hickey and Tomohiro Kuroda and Jaakko Hyry and Kunihiro Chihara and Petri Pulli},
 booktitle = {Correspondences on Human Interface},
 number = {2},
 pages = {53-60},
 title = {PuTaSu: A Tapping User Interface on Wall Surfaces for Senior Citizens with Memory Problem},
 venue = {Kyoto/Japan},
 volume = {12},
 year = {2010}
}`
            },

  {
            'id': '178',
            'author': 'Toshio Uchiyama, Kazuya Okamoto, Tadamasa Takemura, Takayuki Adachi, Naoto Kume, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'DPC Coding using Concept base Specialized in Medical Field',
            'year': '2010',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-domestic-conferences-10,
 author = {Tadamasa Takemura and Naoto Kume and Kazuya Okamoto and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {84-85},
 title = {Developing a seamless environment between a hospital information system and a campus network with Server Based Computing and Cloud Computing},
 venue = {Hamamatsu/Japan},
 year = {2010}
}`
            },

  {
            'id': '179',
            'author': 'Tomohiro Kuroda',
            'title': 'Application of OpenEHR - Way of composing referral system - European way and States way -',
            'year': '2010',
            'book': 'Proceedings of Seagaia Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2010-domestic-conferences-1,
 author = {Masahiko Kitamura and Takahiro Murooka and Tomoko Sawabe and Atsushi Takahara and Tetsuro Fujii and Mayumi Bono and Tomohiro Kuroda},
 booktitle = {Proceedings of IEICE General Conference},
 title = {Evaluation of the Video Quality with High Resolution and High Framerate Images for Sign Lnguage},
 venue = {Sendai/Japan},
 year = {2010}
}`
            },

  {
            'id': '180',
            'author': 'Daisuke Yoshitake, Goshiro Yamamoto, Seamus Hickey, Tomohiro Kuroda, Jaakko Hyry, Kunihiro Chihara, Petri Pulli',
            'title': 'PuTaSu: A Tapping User Interface on Wall Surfaces for Senior Citizens with Memory Problem',
            'year': '2010',
            'book': 'Correspondences on Human Interface',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2009-journal-papers-5,
 author = {Yoshihiro Kuroda and Hisashi Kanamori and Hidekazu Takiuchi and Masao Tanooka and Masataka Imura and Tomohiro Kuroda and Osamu Oshiro},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {4},
 pages = {435-444},
 title = {Inside-body Registration with Pair-line Matching for AR Surgical Navigation},
 volume = {4},
 year = {2009}
}`
            },

  {
            'id': '181',
            'author': 'Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Developing a seamless environment between a hospital information system and a campus network with Server Based Computing and Cloud Computing',
            'year': '2010',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2009-journal-papers-4,
 author = {Toshiaki Tanimoto and Hiroshi Watabe and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 journal = {Medical Imaging Technology},
 number = {4},
 pages = {237-242},
 title = {Statistical Dynamic Imaging of RI Tracer from List-mode PET Data},
 volume = {27},
 year = {2009}
}`
            },

  {
            'id': '182',
            'author': 'Masahiko Kitamura, Takahiro Murooka, Tomoko Sawabe, Atsushi Takahara, Tetsuro Fujii, Mayumi Bono, Tomohiro Kuroda',
            'title': 'Evaluation of the Video Quality with High Resolution and High Framerate Images for Sign Lnguage',
            'year': '2010',
            'book': 'Proceedings of IEICE General Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2009-journal-papers-3,
 author = {Tomohiro Kuroda and Tsuyoshi Nagashima and Antti Alasalmi and Naoto Kume and Tadamasa Takemura and Olli Martikainen and Naoki Ohboshi and Kenta Hori and Hiroyuki Yoshihara and Yoshihiro Kuroda and Osamu Oshiro},
 journal = {Japan Journal of Medical Informatics},
 number = {3},
 pages = {139-146},
 title = {Effectiveness of WLAN Location Services Medical Equipment Logistics},
 volume = {28},
 year = {2009}
}`
            },

  {
            'id': '183',
            'author': 'Yoshihiro Kuroda, Hisashi Kanamori, Hidekazu Takiuchi, Masao Tanooka, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Inside-body Registration with Pair-line Matching for AR Surgical Navigation',
            'year': '2009',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2009-journal-papers-2,
 author = {Naoto Kume and Mikko Rissanen and Yoshihiro Kuroda and Megumi Nakao and Tadamasa Takemura and Hiroyuki Yoshihara and Tomohiro Kuroda and Shinichiro Mori and Shinji Tomita and Koji Yoshimura},
 journal = {Medical Virtual Reality},
 number = {1},
 pages = {24-36},
 title = {Evaluation of Teaching Digital Rectal Examination on Annotated Haptic VR Simulator},
 volume = {7},
 year = {2009}
}`
            },

  {
            'id': '184',
            'author': 'Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Statistical Dynamic Imaging of RI Tracer from List-mode PET Data',
            'year': '2009',
            'book': 'Medical Imaging Technology',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2009-journal-papers-1,
 author = {Takafumi Terada and Norihito Wada and Tomohiro Kuroda},
 journal = {Medical Virtual Reality},
 number = {1},
 pages = {6-17},
 title = {Research of the Simulation Based Medical Education},
 volume = {7},
 year = {2009}
}`
            },

  {
            'id': '185',
            'author': 'Tomohiro Kuroda, Tsuyoshi Nagashima, Antti Alasalmi, Naoto Kume, Tadamasa Takemura, Olli Martikainen, Naoki Ohboshi, Kenta Hori, Hiroyuki Yoshihara, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Effectiveness of WLAN Location Services Medical Equipment Logistics',
            'year': '2009',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2009-international-conferences-9,
 author = {Osamu Oshiro and Tomohiro Kuroda and Masataka Imura and Hiroko Azuma and Masakazu Yagi and Kenji Takada},
 booktitle = {Proceedings of ICB Seminar -New Trends in Biomedical and Clinical Engineering-},
 pages = {37-38},
 title = {Physiome Image Fusion -Multi Modal Image Integration for Dental Clinic},
 venue = {Warsaw/Poland},
 volume = {104},
 year = {2009}
}`
            },

  {
            'id': '186',
            'author': 'Naoto Kume, Mikko Rissanen, Yoshihiro Kuroda, Megumi Nakao, Tadamasa Takemura, Hiroyuki Yoshihara, Tomohiro Kuroda, Shinichiro Mori, Shinji Tomita, Koji Yoshimura',
            'title': 'Evaluation of Teaching Digital Rectal Examination on Annotated Haptic VR Simulator',
            'year': '2009',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2009-international-conferences-8,
 author = {Hideyuki Horio and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro and Shigeo Wada and Toru Haraguchi and Kazuo Nakazawa},
 booktitle = {IFMBE Proceedings of World Congress},
 pages = {304-307},
 title = {Analysis of Cardiac Torsion with Strain Tensor},
 venue = {Munich/Germany},
 year = {2009}
}`
            },

  {
            'id': '187',
            'author': 'Takafumi Terada, Norihito Wada, Tomohiro Kuroda',
            'title': 'Research of the Simulation Based Medical Education',
            'year': '2009',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2009-international-conferences-7,
 author = {Yoshihiro Kuroda and Yuta Morishita and Tomohiro Kuroda and Yasushi Masuda and Osamu Oshiro},
 booktitle = {IFMBE Proceedings of World Congress},
 pages = {2117-2119},
 title = {Error Reduction in 3D Gaze Point Estimation for Advanced Medical Annotations},
 venue = {Munich/Germany},
 year = {2009}
}`
            },

  {
            'id': '188',
            'author': 'Osamu Oshiro, Tomohiro Kuroda, Masataka Imura, Hiroko Azuma, Masakazu Yagi, Kenji Takada',
            'title': 'Physiome Image Fusion -Multi Modal Image Integration for Dental Clinic',
            'year': '2009',
            'book': 'Proceedings of ICB Seminar -New Trends in Biomedical and Clinical Engineering-',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-international-conferences-6,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of International Symposium on Electromagnetic Compatibility},
 pages = {557-558},
 title = {Toward Wireless Hospital -Snapshot of Trials around the World},
 venue = {Kyoto/Japan},
 year = {2009}
}`
            },

  {
            'id': '189',
            'author': 'Hideyuki Horio, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro, Shigeo Wada, Toru Haraguchi, Kazuo Nakazawa',
            'title': 'Analysis of Cardiac Torsion with Strain Tensor',
            'year': '2009',
            'book': 'IFMBE Proceedings of World Congress',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-international-conferences-5,
 author = {Daisuke Fukutsuka and Yoshiyuki Kagiyama and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Korea-Japan Workshop on Mixed Reality},
 pages = {97-99},
 title = {Designing Multi-Touch Interface for Human Body Shaped Display},
 venue = {Hakodate/Japan},
 year = {2009}
}`
            },

  {
            'id': '190',
            'author': 'Yoshihiro Kuroda, Yuta Morishita, Tomohiro Kuroda, Yasushi Masuda, Osamu Oshiro',
            'title': 'Error Reduction in 3D Gaze Point Estimation for Advanced Medical Annotations',
            'year': '2009',
            'book': 'IFMBE Proceedings of World Congress',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-international-conferences-4,
 author = {Takahiro Tokui and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of ACM International Workshop on Context-Awareness for Self-Managing Systems},
 pages = {43-47},
 title = {Context-based Filtering for Unconstrained Electrocardiograph},
 venue = {Nara/Japan},
 year = {2009}
}`
            },

  {
            'id': '191',
            'author': 'Tomohiro Kuroda',
            'title': 'Toward Wireless Hospital -Snapshot of Trials around the World',
            'year': '2009',
            'book': 'Proceedings of International Symposium on Electromagnetic Compatibility',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-international-conferences-3,
 author = {Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tadamasa Takemura and Hiroyuki Yoshihara and Tomohiro Kuroda and Shinichiro Mori and Shinji Tomita},
 booktitle = {Proceedings of International Forum on Medical Imaging in Asia},
 pages = {617-621},
 title = {Virtual Organ Modeling by Reflecting the Tone Fit of Multiple Attributes},
 venue = {Taipei/ROC},
 year = {2009}
}`
            },

  {
            'id': '192',
            'author': 'Daisuke Fukutsuka, Yoshiyuki Kagiyama, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Designing Multi-Touch Interface for Human Body Shaped Display',
            'year': '2009',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-international-conferences-2,
 author = {Hideyuki Horio and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro and Shigeo Wada and Toru Haraguchi and Kazuo Nakazawa},
 booktitle = {Proceedings of International Forum on Medical Imaging in Asia},
 pages = {337-342},
 title = {Analysis of Cardiac Torsion from MR Phase-Contrast Image},
 venue = {Taipei/ROC},
 year = {2009}
}`
            },

  {
            'id': '193',
            'author': 'Takahiro Tokui, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Context-based Filtering for Unconstrained Electrocardiograph',
            'year': '2009',
            'book': 'Proceedings of ACM International Workshop on Context-Awareness for Self-Managing Systems',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-international-conferences-12,
 author = {Shunsuke Yoshimoto and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of IEEE International Symposium on Robot and Human Interactive Communication},
 pages = {460-465},
 title = {Tactile Mapping Approach using Electrical Stimulus Pattern},
 venue = {Toyama/Japan},
 year = {2009}
}`
            },

  {
            'id': '194',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tadamasa Takemura, Hiroyuki Yoshihara, Tomohiro Kuroda, Shinichiro Mori, Shinji Tomita',
            'title': 'Virtual Organ Modeling by Reflecting the Tone Fit of Multiple Attributes',
            'year': '2009',
            'book': 'Proceedings of International Forum on Medical Imaging in Asia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-international-conferences-11,
 author = {Yoshihiro Kuroda and Yoshiyuki Kagiyama and Masataka Imura and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of ICB Seminar -New Trends in Biomedical and Clinical Engineering-},
 pages = {58-59},
 title = {Virtual Reality-based Surgical Systems -Surgical Training and Navigation with VR Technologies},
 venue = {Warsaw/Poland},
 volume = {104},
 year = {2009}
}`
            },

  {
            'id': '195',
            'author': 'Hideyuki Horio, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro, Shigeo Wada, Toru Haraguchi, Kazuo Nakazawa',
            'title': 'Analysis of Cardiac Torsion from MR Phase-Contrast Image',
            'year': '2009',
            'book': 'Proceedings of International Forum on Medical Imaging in Asia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-international-conferences-10,
 author = {Tomohiro Kuroda and Daisuke Fukutsuka and Yoshiyuki Kagiyama and Yoshihiro Kuroda and Masataka Imura and Osamu Oshiro},
 booktitle = {Proceedings of ICB Seminar -New Trends in Biomedical and Clinical Engineering-},
 pages = {44},
 title = {Human-body Shaped Display System aiming Clinical Training},
 venue = {Warsaw/Poland},
 volume = {104},
 year = {2009}
}`
            },

  {
            'id': '196',
            'author': 'Shunsuke Yoshimoto, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Tactile Mapping Approach using Electrical Stimulus Pattern',
            'year': '2009',
            'book': 'Proceedings of IEEE International Symposium on Robot and Human Interactive Communication',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-international-conferences-1,
 author = {Yoshihiro Kuroda and Hisashi Kanamori and Hidekazu Takiuchi and Masao Tanooka and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of International Forum on Medical Imaging in Asia},
 number = {385},
 pages = {495-498},
 title = {Dynamic Transparency Control of Augmented Surgical View for Interoperative Navigation},
 venue = {Taipei/ROC},
 volume = {108},
 year = {2009}
}`
            },

  {
            'id': '197',
            'author': 'Yoshihiro Kuroda, Yoshiyuki Kagiyama, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Virtual Reality-based Surgical Systems -Surgical Training and Navigation with VR Technologies',
            'year': '2009',
            'book': 'Proceedings of ICB Seminar -New Trends in Biomedical and Clinical Engineering-',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-9,
 author = {Tatsuya Tokunaga and Naoto Kume and Tadamasa Takemura and Tomohiro Kuroda and Naoki Ohboshi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {189-190},
 title = {A proposal of service oriented framework of medical information presentation},
 venue = {Kobe/Japan},
 year = {2009}
}`
            },

  {
            'id': '198',
            'author': 'Tomohiro Kuroda, Daisuke Fukutsuka, Yoshiyuki Kagiyama, Yoshihiro Kuroda, Masataka Imura, Osamu Oshiro',
            'title': 'Human-body Shaped Display System aiming Clinical Training',
            'year': '2009',
            'book': 'Proceedings of ICB Seminar -New Trends in Biomedical and Clinical Engineering-',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-8,
 author = {Daisuke Fukutsuka and Yoshiyuki Kagiyama and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {193-194},
 title = {Designing Multi-Touch Interface for Human Body Shaped Display},
 venue = {Kobe/Japan},
 year = {2009}
}`
            },

  {
            'id': '199',
            'author': 'Yoshihiro Kuroda, Hisashi Kanamori, Hidekazu Takiuchi, Masao Tanooka, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Dynamic Transparency Control of Augmented Surgical View for Interoperative Navigation',
            'year': '2009',
            'book': 'Proceedings of International Forum on Medical Imaging in Asia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-7,
 author = {Yoko Tanaka and Tadamasa Takemura and Naoto Kume and Sachiko Okada and Tomohiro Kuroda and Masahiro Hirose and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {191-192},
 title = {The Simulation of Hospital Management with Role-playing},
 venue = {Kobe/Japan},
 year = {2009}
}`
            },

  {
            'id': '200',
            'author': 'Tatsuya Tokunaga, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'A proposal of service oriented framework of medical information presentation',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-6,
 author = {Hirotoshi Ashida and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {613-614},
 title = {Fluid-Solid Interaction Simulation with Phase Transition Modeling},
 venue = {Kobe/Japan},
 year = {2009}
}`
            },

  {
            'id': '201',
            'author': 'Daisuke Fukutsuka, Yoshiyuki Kagiyama, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Designing Multi-Touch Interface for Human Body Shaped Display',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-5,
 author = {Shinichiro Mori and Tomohiro Kuroda and Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Hajime Shimada and Shinji Tomita and Yasuhiko Nakashima},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {26},
 pages = {43-48},
 title = {Development of Interactive Supercomputing Environment},
 venue = {Fukui/Japan},
 volume = {109},
 year = {2009}
}`
            },

  {
            'id': '202',
            'author': 'Yoko Tanaka, Tadamasa Takemura, Naoto Kume, Sachiko Okada, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'The Simulation of Hospital Management with Role-playing',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-4,
 author = {Takeshi Yoshida and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Tomohiro Kuroda and Hidefumi Kinoshita and Tadashi Matsuda and Osamu Oshiro},
 booktitle = {Bio-Medical Engineering},
 pages = {544},
 title = {Pressure measurement in three axial directions on the tip of the laparoscopic forceps and skill analysis in a detachment procedure},
 venue = {Tokyo/Japan},
 volume = {47},
 year = {2009}
}`
            },

  {
            'id': '203',
            'author': 'Hirotoshi Ashida, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Fluid-Solid Interaction Simulation with Phase Transition Modeling',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-32,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Does Hospital Still Needs Department of Medical Informatics?},
 venue = {Hiroshima/Japan},
 year = {2009}
}`
            },

  {
            'id': '204',
            'author': 'Shinichiro Mori, Tomohiro Kuroda, Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Hajime Shimada, Shinji Tomita, Yasuhiko Nakashima',
            'title': 'Development of Interactive Supercomputing Environment',
            'year': '2009',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-31,
 author = {Naoto Kume and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {874-875},
 title = {Migration of Mail Server to Google Apps at Kyoto University Hospital},
 venue = {Hiroshima/Japan},
 year = {2009}
}`
            },

  {
            'id': '205',
            'author': 'Takeshi Yoshida, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Hidefumi Kinoshita, Tadashi Matsuda, Osamu Oshiro',
            'title': 'Pressure measurement in three axial directions on the tip of the laparoscopic forceps and skill analysis in a detachment procedure',
            'year': '2009',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-30,
 author = {Tomohiro Kuroda and Naoto Kume and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {375-376},
 title = {Next-generation Medical Equipments Embedded into Hospital Information Systems},
 venue = {Hiroshima/Japan},
 year = {2009}
}`
            },

  {
            'id': '206',
            'author': 'Tomohiro Kuroda',
            'title': 'Does Hospital Still Needs Department of Medical Informatics?',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-3,
 author = {Yoshiyuki Kagiyama and Daisuke Fukutsuka and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Bio-Medical Engineering},
 pages = {558},
 title = {Multi-scale model viewer system of human body},
 venue = {Tokyo/Japan},
 volume = {47},
 year = {2009}
}`
            },

  {
            'id': '207',
            'author': 'Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Migration of Mail Server to Google Apps at Kyoto University Hospital',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-29,
 author = {Tadamasa Takemura and Masahiro Hirose and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {766-777},
 title = {A Development of Automatic Analysis System for Incident / Accident Reports},
 venue = {Hiroshima/Japan},
 year = {2009}
}`
            },

  {
            'id': '208',
            'author': 'Tomohiro Kuroda, Naoto Kume, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Next-generation Medical Equipments Embedded into Hospital Information Systems',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-28,
 author = {Yoko Tanaka and Tadamasa Takemura and Naoto Kume and Sachiko Okada and Tomohiro Kuroda and Masahiro Hirose and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {706-707},
 title = {The Simulation of Hospital Management with Role-playing},
 venue = {Hiroshima/Japan},
 year = {2009}
}`
            },

  {
            'id': '209',
            'author': 'Yoshiyuki Kagiyama, Daisuke Fukutsuka, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Multi-scale model viewer system of human body',
            'year': '2009',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-27,
 author = {Tatsuya Tokunaga and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Naoki Ohboshi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {470-471},
 title = {A Construction of Service Oriented Framework of Medical Information Presentation},
 venue = {Hiroshima/Japan},
 year = {2009}
}`
            },

  {
            'id': '210',
            'author': 'Tadamasa Takemura, Masahiro Hirose, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Development of Automatic Analysis System for Incident / Accident Reports',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-26,
 author = {Kosuke Sasai and Yoichi Kawakami and Naoki Mihara and Tomohiro Kuroda and Toshinari Nakano and Yasushi Matsumura and Masaki Miyamoto},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1195-1196},
 title = {Development of Image Diagnosis Support System based on Case Ontology},
 venue = {Hiroshima/Japan},
 year = {2009}
}`
            },

  {
            'id': '211',
            'author': 'Yoko Tanaka, Tadamasa Takemura, Naoto Kume, Sachiko Okada, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'The Simulation of Hospital Management with Role-playing',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-25,
 author = {Hisashi Kanamori and Yoshihiro Kuroda and Hidekazu Takiuchi and Masao Tanooka and Masataka Imura and Tomohiro Kuroda and Shingo Yamamoto and Osamu Oshiro},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {270},
 pages = {7-12},
 title = {Trial of Clinical Evaluation of Registration Method based on Intraoperative Measurement in the Body},
 venue = {Suita/Japan},
 volume = {109},
 year = {2009}
}`
            },

  {
            'id': '212',
            'author': 'Tatsuya Tokunaga, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'A Construction of Service Oriented Framework of Medical Information Presentation',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-24,
 author = {Daisuke Fukutsuka and Tomohiro Kuroda and Yoshiyuki Kagiyama and Masataka Imura and Yoshihiro Kuroda and Osamu Oshiro},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {270},
 pages = {29-32},
 title = {Decision of Tomograhic Plane with Human Body Shaped Display},
 venue = {Suita/Japan},
 volume = {109},
 year = {2009}
}`
            },

  {
            'id': '213',
            'author': 'Kosuke Sasai, Yoichi Kawakami, Naoki Mihara, Tomohiro Kuroda, Toshinari Nakano, Yasushi Matsumura, Masaki Miyamoto',
            'title': 'Development of Image Diagnosis Support System based on Case Ontology',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-23,
 author = {Hisashi Kanamori and Yoshihiro Kuroda and Hidekazu Takiuchi and Masao Tanooka and Masataka Imura and Tomohiro Kuroda and Shingo Yamamoto and Osamu Oshiro},
 booktitle = {Joint Research Meeting},
 title = {Clinical Application of Registration Method based on In-vivo Measurement during Surgery},
 venue = {Toyonaka/Japan},
 year = {2009}
}`
            },

  {
            'id': '214',
            'author': 'Hisashi Kanamori, Yoshihiro Kuroda, Hidekazu Takiuchi, Masao Tanooka, Masataka Imura, Tomohiro Kuroda, Shingo Yamamoto, Osamu Oshiro',
            'title': 'Trial of Clinical Evaluation of Registration Method based on Intraoperative Measurement in the Body',
            'year': '2009',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-22,
 author = {Kazuhiro Yamada and Tomohiro Kuroda and Masataka Imura and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Katsumi Murakami and Chizu Habukawa and Shigeo Wada and Osamu Oshiro},
 booktitle = {Joint Research Meeting},
 title = {Method to Unnormal Respiratory Sound based on Auto-Regressive Model},
 venue = {Toyonaka/Japan},
 year = {2009}
}`
            },

  {
            'id': '215',
            'author': 'Daisuke Fukutsuka, Tomohiro Kuroda, Yoshiyuki Kagiyama, Masataka Imura, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Decision of Tomograhic Plane with Human Body Shaped Display',
            'year': '2009',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-21,
 author = {Kazuhiro Yamada and Tomohiro Kuroda and Masataka Imura and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Katsumi Murakami and Chizu Habukawa and Shigeo Wada and Osamu Oshiro},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {54},
 pages = {5-8},
 title = {Respiratory Sound Analyzing System based on Auto-Regressive Model},
 venue = {Shijonawate/Japan},
 year = {2009}
}`
            },

  {
            'id': '216',
            'author': 'Hisashi Kanamori, Yoshihiro Kuroda, Hidekazu Takiuchi, Masao Tanooka, Masataka Imura, Tomohiro Kuroda, Shingo Yamamoto, Osamu Oshiro',
            'title': 'Clinical Application of Registration Method based on In-vivo Measurement during Surgery',
            'year': '2009',
            'book': 'Joint Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-20,
 author = {Shunsuke Yoshimoto and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Tomohiro Kuroda and Masataka Imura and Osamu Oshiro},
 booktitle = {Technical Reports of Virtual Reality Society of Japan},
 pages = {3-6},
 title = {*** No English title in DB***},
 venue = {Suita/Japan},
 volume = {14},
 year = {2009}
}`
            },

  {
            'id': '217',
            'author': 'Kazuhiro Yamada, Tomohiro Kuroda, Masataka Imura, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Katsumi Murakami, Chizu Habukawa, Shigeo Wada, Osamu Oshiro',
            'title': 'Method to Unnormal Respiratory Sound based on Auto-Regressive Model',
            'year': '2009',
            'book': 'Joint Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-2,
 author = {Kazuhiro Yamada and Tomohiro Kuroda and Eisuke Hanada and Yoshiyuki Kagiyama and Yoshihiro Kuroda and Osamu Oshiro and Shigeo Wada},
 booktitle = {Bio-Medical Engineering},
 pages = {173},
 title = {Measurement of frequency response of electronic stethoscope},
 venue = {Tokyo/Japan},
 volume = {47},
 year = {2009}
}`
            },

  {
            'id': '218',
            'author': 'Kazuhiro Yamada, Tomohiro Kuroda, Masataka Imura, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Katsumi Murakami, Chizu Habukawa, Shigeo Wada, Osamu Oshiro',
            'title': 'Respiratory Sound Analyzing System based on Auto-Regressive Model',
            'year': '2009',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-19,
 author = {Masataka Imura and Tomohiro Kuroda and Yoshihiro Kuroda and Osamu Oshiro and Hiroko Azuma and Masakazu Yagi and Kenji Takada},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {319},
 title = {Reconstruction of Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph and Tooth Surface Shape},
 venue = {Chiba/Japan},
 year = {2009}
}`
            },

  {
            'id': '219',
            'author': 'Shunsuke Yoshimoto, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Masataka Imura, Osamu Oshiro',
            'title': '*** No English title in DB***',
            'year': '2009',
            'book': 'Technical Reports of Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-18,
 author = {Hideyuki Horio and Yoshihiro Kuroda and Masataka Imura and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {278-279},
 title = {Measurement of Magnetic Permeability using Phase Image},
 venue = {Chiba/Japan},
 year = {2009}
}`
            },

  {
            'id': '220',
            'author': 'Kazuhiro Yamada, Tomohiro Kuroda, Eisuke Hanada, Yoshiyuki Kagiyama, Yoshihiro Kuroda, Osamu Oshiro, Shigeo Wada',
            'title': 'Measurement of frequency response of electronic stethoscope',
            'year': '2009',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-17,
 author = {Tatsuya Tokunaga and Naoto Kume and Tadamasa Takemura and Tomohiro Kuroda and Naoki Ohboshi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {153-154},
 title = {Proposing Service Orientation Medical Information Presentation Framework},
 venue = {Chiba/Japan},
 year = {2009}
}`
            },

  {
            'id': '221',
            'author': 'Masataka Imura, Tomohiro Kuroda, Yoshihiro Kuroda, Osamu Oshiro, Hiroko Azuma, Masakazu Yagi, Kenji Takada',
            'title': 'Reconstruction of Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph and Tooth Surface Shape',
            'year': '2009',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-16,
 author = {Tomohiro Kuroda and Hideo Nakamura and Masayuki Nambu and Kikuo Hirano and Hidetsugu Igarashi and Hiroki Ikuta and Yoshihiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {82-83},
 title = {Development of Bio-measurement Circuit using Traditional Weaving Technique of NISHIJIN},
 venue = {Chiba/Japan},
 year = {2009}
}`
            },

  {
            'id': '222',
            'author': 'Hideyuki Horio, Yoshihiro Kuroda, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Measurement of Magnetic Permeability using Phase Image',
            'year': '2009',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-15,
 author = {Yoko Tanaka and Tadamasa Takemura and Naoto Kume and Sachiko Okada and Tomohiro Kuroda and Masahiro Hirose and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {151-152},
 title = {Hospital Management Simulation using Role Playing},
 venue = {Chiba/Japan},
 year = {2009}
}`
            },

  {
            'id': '223',
            'author': 'Tatsuya Tokunaga, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'Proposing Service Orientation Medical Information Presentation Framework',
            'year': '2009',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-14,
 author = {Tadamasa Takemura and Tomohiro Kuroda and Kazuya Okamoto and Naoto Kume and Hiroyuki Yoshihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {206},
 pages = {87-90},
 title = {Informatization of Medicine and Life Log},
 venue = {Hiroshima/Japan},
 volume = {109},
 year = {2009}
}`
            },

  {
            'id': '224',
            'author': 'Tomohiro Kuroda, Hideo Nakamura, Masayuki Nambu, Kikuo Hirano, Hidetsugu Igarashi, Hiroki Ikuta, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Development of Bio-measurement Circuit using Traditional Weaving Technique of NISHIJIN',
            'year': '2009',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-13,
 author = {Hisashi Kanamori and Yoshihiro Kuroda and Hidekazu Takiuchi and Masao Tanooka and Masataka Imura and Tomohiro Kuroda and Shingo Yamashiro and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {15},
 title = {Assessment of Registration Method based on Intraoperative Measurement in the Body},
 venue = {Tokyo/Japan},
 year = {2009}
}`
            },

  {
            'id': '225',
            'author': 'Yoko Tanaka, Tadamasa Takemura, Naoto Kume, Sachiko Okada, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'Hospital Management Simulation using Role Playing',
            'year': '2009',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-12,
 author = {Hideyuki Horio and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology},
 title = {Static magnetic field correction consideraing permeability},
 venue = {Nagoya/Japan},
 year = {2009}
}`
            },

  {
            'id': '226',
            'author': 'Tadamasa Takemura, Tomohiro Kuroda, Kazuya Okamoto, Naoto Kume, Hiroyuki Yoshihara',
            'title': 'Informatization of Medicine and Life Log',
            'year': '2009',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-11,
 author = {Hisashi Kanamori and Yoshihiro Kuroda and Hidekazu Takiuchi and Masao Tanooka and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Correspondences on Human Interface},
 number = {3},
 pages = {113-118},
 title = {A registration method using intraoperative measurement of the internal body},
 venue = {Tokyo/Japan},
 volume = {11},
 year = {2009}
}`
            },

  {
            'id': '227',
            'author': 'Hisashi Kanamori, Yoshihiro Kuroda, Hidekazu Takiuchi, Masao Tanooka, Masataka Imura, Tomohiro Kuroda, Shingo Yamashiro, Osamu Oshiro',
            'title': 'Assessment of Registration Method based on Intraoperative Measurement in the Body',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-10,
 author = {Ryosuke Arai and Yoshihiro Kuroda and Tomohiro Kuroda and Yoshiyuki Kagiyama and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {581-582},
 title = {Real-time haptic and visual rendering of topological change},
 venue = {Kobe/Japan},
 year = {2009}
}`
            },

  {
            'id': '228',
            'author': 'Hideyuki Horio, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Static magnetic field correction consideraing permeability',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2009-domestic-conferences-1,
 author = {Sachiko Okada and Keisuke Nagase and Akiko Ito and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {150-151},
 title = {Development of Hospital Financial Status Analysis System Using Rule-Based Engine},
 venue = {Matsumoto/Japan},
 year = {2009}
}`
            },

  {
            'id': '229',
            'author': 'Hisashi Kanamori, Yoshihiro Kuroda, Hidekazu Takiuchi, Masao Tanooka, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'A registration method using intraoperative measurement of the internal body',
            'year': '2009',
            'book': 'Correspondences on Human Interface',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2008-journal-papers-9,
 author = {Kazuhiro Yamada and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {6},
 pages = {621-628},
 title = {Improvement of Bone-Conductred Speech Based on Bodebook Mapping},
 volume = {46},
 year = {2008}
}`
            },

  {
            'id': '230',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Tomohiro Kuroda, Yoshiyuki Kagiyama, Osamu Oshiro',
            'title': 'Real-time haptic and visual rendering of topological change',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2008-journal-papers-8,
 author = {Tadamasa Takemura and Tomohiro Kuroda and Naoto Kume and Kazuya Okamoto and Kenta Hori and Naoki Ohboshi and Nobuyuki Ashida and Antti Alasalmi and Olli Martikainen and Hiroyuki Yoshihara},
 journal = {Journal of eHealth Technology and Application},
 number = {2},
 pages = {124-127},
 title = {System Value Analysis of Multipoint Distribution of Realtime Locating System (RTLS) in Hospital},
 volume = {6},
 year = {2008}
}`
            },

  {
            'id': '231',
            'author': 'Sachiko Okada, Keisuke Nagase, Akiko Ito, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of Hospital Financial Status Analysis System Using Rule-Based Engine',
            'year': '2009',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2008-journal-papers-7,
 author = {Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Naoki Ohboshi and Yoshihiro Kuroda and Osamu Oshiro},
 journal = {Japanese Journal of Sign Linguistics},
 pages = {85-92},
 title = {Analysis of Japanese-Japanese Sign Language Dictionary using Natural Language Processing},
 venue = {Research notes},
 volume = {17},
 year = {2008}
}`
            },

  {
            'id': '232',
            'author': 'Kazuhiro Yamada, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Improvement of Bone-Conductred Speech Based on Bodebook Mapping',
            'year': '2008',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2008-journal-papers-6,
 author = {Toru Haraguchi and Hideyuki Horio and Yoshihiro Kuroda and Yasushi Masuda and Tomohiro Kuroda and Osamu Oshiro},
 journal = {Transactions of the Institute of Electronics, Information and Communication Engineers},
 number = {7},
 pages = {1818-1828},
 title = {Analysis of the Regional Strain Rate in the Left Ventricular Myocardium by MR Phase-Contrast Imaging},
 year = {2008}
}`
            },

  {
            'id': '233',
            'author': 'Tadamasa Takemura, Tomohiro Kuroda, Naoto Kume, Kazuya Okamoto, Kenta Hori, Naoki Ohboshi, Nobuyuki Ashida, Antti Alasalmi, Olli Martikainen, Hiroyuki Yoshihara',
            'title': 'System Value Analysis of Multipoint Distribution of Realtime Locating System (RTLS) in Hospital',
            'year': '2008',
            'book': 'Journal of eHealth Technology and Application',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2008-journal-papers-5,
 author = {Yoshihiro Kuroda and Yuta Morishita and Yasushi Masuda and Tomohiro Kuroda and Osamu Oshiro},
 journal = {Journal of Human Interface Society},
 number = {2},
 pages = {161-168},
 title = {Depth Estimation of Gaze Point and Annotation Display using Distance of Purkinje Images},
 volume = {10},
 year = {2008}
}`
            },

  {
            'id': '234',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Naoki Ohboshi, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Analysis of Japanese-Japanese Sign Language Dictionary using Natural Language Processing',
            'year': '2008',
            'book': 'Japanese Journal of Sign Linguistics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2008-journal-papers-4,
 author = {Takashi Nakai and Takashi Tsukasa and Kenta Hori and Tadamasa Takemura and Tomohiro Kuroda and Masahiko Ando and Takashi Kawamura and Hiroyuki Yoshihara},
 journal = {Japanese Journal of Telemedicine and Telecare},
 number = {1},
 pages = {35-40},
 title = {Application of Real-Time Multimedia Communication Technology into Health Care Service},
 volume = {4},
 year = {2008}
}`
            },

  {
            'id': '235',
            'author': 'Toru Haraguchi, Hideyuki Horio, Yoshihiro Kuroda, Yasushi Masuda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Analysis of the Regional Strain Rate in the Left Ventricular Myocardium by MR Phase-Contrast Imaging',
            'year': '2008',
            'book': 'Transactions of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2008-journal-papers-3,
 author = {Yoshihiro Kuroda and Hideyuki Horio and Yasushi Masuda and Tomohiro Kuroda and Osamu Oshiro and Shigeo Wada and Toru Haraguchi and Kazuo Nakazawa},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {2},
 pages = {246-253},
 title = {Analysis of Cardiac Torsion by Strain Calculation with MR Phase-contrast Image},
 volume = {46},
 year = {2008}
}`
            },

  {
            'id': '236',
            'author': 'Yoshihiro Kuroda, Yuta Morishita, Yasushi Masuda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Depth Estimation of Gaze Point and Annotation Display using Distance of Purkinje Images',
            'year': '2008',
            'book': 'Journal of Human Interface Society',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2008-journal-papers-2,
 author = {Mikko Rissanen and Naoto Kume and Yoshihiro Kuroda and Tomohiro Kuroda and Koji Yoshimura and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {411-416},
 title = {Asynchronous Teaching of Psychomotor Skills Through VR Annotations: Evaluation in Digital Rectal Examination},
 volume = {132},
 year = {2008}
}`
            },

  {
            'id': '237',
            'author': 'Takashi Nakai, Takashi Tsukasa, Kenta Hori, Tadamasa Takemura, Tomohiro Kuroda, Masahiko Ando, Takashi Kawamura, Hiroyuki Yoshihara',
            'title': 'Application of Real-Time Multimedia Communication Technology into Health Care Service',
            'year': '2008',
            'book': 'Japanese Journal of Telemedicine and Telecare',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2008-journal-papers-1,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Osamu Oshiro},
 journal = {Studies in Health Technology and Informatics},
 pages = {230-232},
 title = {Haptic Rate for Surgical Manipulations with Fingers and Instruments},
 volume = {132},
 year = {2008}
}`
            },

  {
            'id': '238',
            'author': 'Yoshihiro Kuroda, Hideyuki Horio, Yasushi Masuda, Tomohiro Kuroda, Osamu Oshiro, Shigeo Wada, Toru Haraguchi, Kazuo Nakazawa',
            'title': 'Analysis of Cardiac Torsion by Strain Calculation with MR Phase-contrast Image',
            'year': '2008',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2008-international-conferences-7,
 author = {Antti Alasalmi and Olli Martikainen and Tomohiro Kuroda and Naoto Kume and Tadamasa Takemura and Hiroyuki Yoshihara and Tsuyoshi Nagashima and Naoki Ohboshi},
 booktitle = {Proceedings of IFIP Wireless Days Conference},
 title = {Core Nursing Process Improvement enabled by Wireless Services},
 venue = {Dubai/UAE},
 year = {2008}
}`
            },

  {
            'id': '239',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Tomohiro Kuroda, Koji Yoshimura, Hiroyuki Yoshihara',
            'title': 'Asynchronous Teaching of Psychomotor Skills Through VR Annotations: Evaluation in Digital Rectal Examination',
            'year': '2008',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2008-international-conferences-6,
 author = {Yoshito Tabata and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {287-292},
 title = {Finger Spelling Recognition using Distinctive Features of Hand Shape},
 venue = {Maia/Portugal},
 year = {2008}
}`
            },

  {
            'id': '240',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Haptic Rate for Surgical Manipulations with Fingers and Instruments',
            'year': '2008',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2008-international-conferences-5,
 author = {Naoto Kume and Tsuyoshi Nagashima and Tadamasa Takemura and Tomohiro Kuroda and Naoki Ohboshi and Kenta Hori and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Symposium on Wireless Personal Multimedia Communications},
 title = {Problem Clarification on Installation of Tracking System using WIFI-RFID in Hospital},
 venue = {Saariselka/Finland},
 year = {2008}
}`
            },

  {
            'id': '241',
            'author': 'Antti Alasalmi, Olli Martikainen, Tomohiro Kuroda, Naoto Kume, Tadamasa Takemura, Hiroyuki Yoshihara, Tsuyoshi Nagashima, Naoki Ohboshi',
            'title': 'Core Nursing Process Improvement enabled by Wireless Services',
            'year': '2008',
            'book': 'Proceedings of IFIP Wireless Days Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-international-conferences-4,
 author = {Petri Pulli and Xiasong Zheng and Peter Antoniac and Seamus Hickey and Tony Manninen and Olli Martikainen and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference on Concurrent Enterprising},
 pages = {293-300},
 title = {Design and Development of Mobile Services Platform for Senior Citizens},
 venue = {Lisbon/Portugal},
 year = {2008}
}`
            },

  {
            'id': '242',
            'author': 'Yoshito Tabata, Tomohiro Kuroda',
            'title': 'Finger Spelling Recognition using Distinctive Features of Hand Shape',
            'year': '2008',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-international-conferences-3,
 author = {Daisuke Fukutsuka and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Korea-Japan Workshop on Mixed Reality},
 title = {Proposal of Push-in Tangible Display},
 venue = {Jeju/Korea},
 year = {2008}
}`
            },

  {
            'id': '243',
            'author': 'Naoto Kume, Tsuyoshi Nagashima, Tadamasa Takemura, Tomohiro Kuroda, Naoki Ohboshi, Kenta Hori, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Problem Clarification on Installation of Tracking System using WIFI-RFID in Hospital',
            'year': '2008',
            'book': 'Proceedings of International Symposium on Wireless Personal Multimedia Communications',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-international-conferences-2,
 author = {Mikko Rissanen and Naoto Kume and Yoshihiro Kuroda and Tomohiro Kuroda and Koji Yoshimura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {411-416},
 title = {Asynchronous Teaching of Psychomotor Skills Through VR Annotations: Evaluation in Digital Rectal Examination},
 venue = {Long Beach/USA},
 year = {2008}
}`
            },

  {
            'id': '244',
            'author': 'Petri Pulli, Xiasong Zheng, Peter Antoniac, Seamus Hickey, Tony Manninen, Olli Martikainen, Tomohiro Kuroda',
            'title': 'Design and Development of Mobile Services Platform for Senior Citizens',
            'year': '2008',
            'book': 'Proceedings of International Conference on Concurrent Enterprising',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-international-conferences-1,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {230-232},
 title = {Haptic Rate for Surgical Manipulations with Fingers and Instruments},
 venue = {Long Beach/USA},
 year = {2008}
}`
            },

  {
            'id': '245',
            'author': 'Daisuke Fukutsuka, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Proposal of Push-in Tangible Display',
            'year': '2008',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-9,
 author = {Ryosuke Arai and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Bio-Medical Engineering},
 pages = {552},
 title = {Fracture Simulation of Biological Soft Tissue with Fracture Mechanics Approach},
 venue = {Kobe/Japan},
 volume = {46},
 year = {2008}
}`
            },

  {
            'id': '246',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Tomohiro Kuroda, Koji Yoshimura, Hiroyuki Yoshihara',
            'title': 'Asynchronous Teaching of Psychomotor Skills Through VR Annotations: Evaluation in Digital Rectal Examination',
            'year': '2008',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-8,
 author = {Toshiaki Tanimoto and Hiroshi Watabe and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Bio-Medical Engineering},
 pages = {394-395},
 title = {Spatio-Temporal Analysis Based Visualization of RI-Tracer Dynamics from List-Mode Data},
 venue = {Kobe/Japan},
 volume = {46},
 year = {2008}
}`
            },

  {
            'id': '247',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Haptic Rate for Surgical Manipulations with Fingers and Instruments',
            'year': '2008',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-7,
 author = {Takatoshi Suenaga and Hiroshi Sasaki and Yasushi Masuda and Tomohiro Kuroda and Yoshitsugu Manabe and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {50},
 title = {Ubiquitous Echo Project -Telemedicine Anywhere-},
 venue = {Kobe/Japan},
 volume = {46},
 year = {2008}
}`
            },

  {
            'id': '248',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Fracture Simulation of Biological Soft Tissue with Fracture Mechanics Approach',
            'year': '2008',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-6,
 author = {Kenta Hori and Naoto Kume and Tadamasa Takemura and Tomohiro Kuroda and Takashi Nakai and Takashi Tsukasa},
 booktitle = {Bio-Medical Engineering},
 pages = {48-49},
 title = {Information Support for Telemedicine},
 venue = {Kobe/Japan},
 volume = {46},
 year = {2008}
}`
            },

  {
            'id': '249',
            'author': 'Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Spatio-Temporal Analysis Based Visualization of RI-Tracer Dynamics from List-Mode Data',
            'year': '2008',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-5,
 author = {Tomohiro Kuroda and Yoshihiro Kuroda and Osamu Oshiro},
 booktitle = {G-COE in Silico-Medicine Spring School 2008},
 title = {Toward Physiome Database -Multi-scale Image Browser-},
 venue = {Awaji/Japan},
 year = {2008}
}`
            },

  {
            'id': '250',
            'author': 'Takatoshi Suenaga, Hiroshi Sasaki, Yasushi Masuda, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Ubiquitous Echo Project -Telemedicine Anywhere-',
            'year': '2008',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-4,
 author = {Tadamasa Takemura and Junzo Sato and Tomohiro Kuroda and Keisuke Nagase and Harutoshi Yazaki and Yasuyuki Kato and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {90-93},
 title = {Developing End-user Computing Environment within Hospital Information System},
 venue = {Matsumoto/Japan},
 year = {2008}
}`
            },

  {
            'id': '251',
            'author': 'Kenta Hori, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Takashi Nakai, Takashi Tsukasa',
            'title': 'Information Support for Telemedicine',
            'year': '2008',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-3,
 author = {Haruo Takemura and Hirokazu Kato and Kiyohide Sato and Tomohiro Kuroda and Takashi Okuma and Yoshinari Kameda},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {427},
 pages = {261-268},
 title = {A Report on ISMAR2007},
 volume = {107},
 year = {2008}
}`
            },

  {
            'id': '252',
            'author': 'Tomohiro Kuroda, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Toward Physiome Database -Multi-scale Image Browser-',
            'year': '2008',
            'book': 'G-COE in Silico-Medicine Spring School 2008',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-26,
 author = {Ryosuke Arai and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 title = {Constructing Finite Element Model Applicable for Breaking Operation reflecting Realistic Stress Responce},
 venue = {Shijonawate/Japan},
 year = {2008}
}`
            },

  {
            'id': '253',
            'author': 'Tadamasa Takemura, Junzo Sato, Tomohiro Kuroda, Keisuke Nagase, Harutoshi Yazaki, Yasuyuki Kato, Hiroyuki Yoshihara',
            'title': 'Developing End-user Computing Environment within Hospital Information System',
            'year': '2008',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-25,
 author = {Ryosuke Arai and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {73-76},
 title = {Construction of Finite Element Model considering Crack Propagation based on Stress State},
 venue = {Ikoma/Japan},
 year = {2008}
}`
            },

  {
            'id': '254',
            'author': 'Haruo Takemura, Hirokazu Kato, Kiyohide Sato, Tomohiro Kuroda, Takashi Okuma, Yoshinari Kameda',
            'title': 'A Report on ISMAR2007',
            'year': '2008',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-24,
 author = {Hirotoshi Ashida and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Ken Masutani and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {29-30},
 title = {Registration Method for Visuo-Haptic VR Environment},
 venue = {Ikoma/Japan},
 year = {2008}
}`
            },

  {
            'id': '255',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Constructing Finite Element Model Applicable for Breaking Operation reflecting Realistic Stress Responce',
            'year': '2008',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-23,
 author = {Takeshi Yoshida and Yoshihiro Kuroda and Yoshiyuki Kagiyama and Tomohiro Kuroda and Hidefumi Kinoshita and Tadashi Matsuda and Osamu Oshiro},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {205-212},
 title = {Trial Development of Forceps with Three Dimensional Pressure Sensor},
 venue = {Toyonaka/Japan},
 year = {2008}
}`
            },

  {
            'id': '256',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Construction of Finite Element Model considering Crack Propagation based on Stress State',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-22,
 author = {Takashi Tsukasa and Tadamasa Takemura and Kenta Hori and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {469},
 title = {Proposing Intuitive Interface for Information Browsing during Tele-medicine},
 venue = {Toyonaka/Japan},
 year = {2008}
}`
            },

  {
            'id': '257',
            'author': 'Hirotoshi Ashida, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Ken Masutani, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Registration Method for Visuo-Haptic VR Environment',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-21,
 author = {Kazuhiro Yamada and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {72-73},
 title = {Quality Improvement of Bone-conducted Voice using Code-book Mapping},
 venue = {Toyonaka/Japan},
 year = {2008}
}`
            },

  {
            'id': '258',
            'author': 'Takeshi Yoshida, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Hidefumi Kinoshita, Tadashi Matsuda, Osamu Oshiro',
            'title': 'Trial Development of Forceps with Three Dimensional Pressure Sensor',
            'year': '2008',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-20,
 author = {Naoto Kume and Tadamasa Takemura and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Shinichiro Mori and Shinji Tomita},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {475},
 title = {VR Anatomy Modeling along Multi-dimensional Modality Distribution for Levels-of-Details control under VR Surgery Simulation},
 venue = {Toyonaka/Japan},
 year = {2008}
}`
            },

  {
            'id': '259',
            'author': 'Takashi Tsukasa, Tadamasa Takemura, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Proposing Intuitive Interface for Information Browsing during Tele-medicine',
            'year': '2008',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-2,
 author = {Tomohiro Kuroda and Yoshito Tabata and Atsutoshi Goto and Hiroki Ikuta and Eiji Tsushima and Yoshihiro Kuroda and Osamu Oshiro},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {427},
 pages = {123-124},
 title = {StrinGlove - a Dataglove to Obtain Hand Posture},
 venue = {Otsu/Japan},
 volume = {107},
 year = {2008}
}`
            },

  {
            'id': '260',
            'author': 'Kazuhiro Yamada, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Quality Improvement of Bone-conducted Voice using Code-book Mapping',
            'year': '2008',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-19,
 author = {Tadamasa Takemura and Yasuhiro Nasu and Tomohiro Kuroda and Naoto Kume and Nobuyuki Ashida and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {470},
 title = {Study on Digitize Paper-based Information on Hospital Information Systems},
 venue = {Toyonaka/Japan},
 year = {2008}
}`
            },

  {
            'id': '261',
            'author': 'Naoto Kume, Tadamasa Takemura, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Shinichiro Mori, Shinji Tomita',
            'title': 'VR Anatomy Modeling along Multi-dimensional Modality Distribution for Levels-of-Details control under VR Surgery Simulation',
            'year': '2008',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-18,
 author = {Yoshito Tabata and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Sign Linguistics},
 pages = {5-6},
 title = {Trial to Increase FInger Spelling Recognition using Distinctive Features},
 venue = {Kobe/Japan},
 year = {2008}
}`
            },

  {
            'id': '262',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Atsutoshi Goto, Hiroki Ikuta, Eiji Tsushima, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'StrinGlove - a Dataglove to Obtain Hand Posture',
            'year': '2008',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-17,
 author = {Yoshito Tabata and Tomohiro Kuroda},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {923-926},
 title = {Finger Spelling Recognition using Distinctive Features of Hand Shape of Japanese Sign},
 venue = {Suita/Japan},
 year = {2008}
}`
            },

  {
            'id': '263',
            'author': 'Tadamasa Takemura, Yasuhiro Nasu, Tomohiro Kuroda, Naoto Kume, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Study on Digitize Paper-based Information on Hospital Information Systems',
            'year': '2008',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-16,
 author = {Daisuke Fukutsuka and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {32},
 title = {Proposing Push-in Tangible Display},
 venue = {Nagoya/Japan},
 year = {2008}
}`
            },

  {
            'id': '264',
            'author': 'Yoshito Tabata, Tomohiro Kuroda',
            'title': 'Trial to Increase FInger Spelling Recognition using Distinctive Features',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-15,
 author = {Daisuke Fukutsuka and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {50},
 title = {Propsing Push-in Type Tangible Display},
 venue = {Nagoya/Japan},
 year = {2008}
}`
            },

  {
            'id': '265',
            'author': 'Yoshito Tabata, Tomohiro Kuroda',
            'title': 'Finger Spelling Recognition using Distinctive Features of Hand Shape of Japanese Sign',
            'year': '2008',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-14,
 author = {Tomohiro Kuroda and Toshiaki Tanimoto and Hiroshi Watabe and Yoshihiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology},
 title = {Spacio-Temporal Visualization of RI Tracer from List-Mode Data},
 venue = {Koganei/Japan},
 year = {2008}
}`
            },

  {
            'id': '266',
            'author': 'Daisuke Fukutsuka, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Proposing Push-in Tangible Display',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-13,
 author = {Hisashi Kanamori and Yoshihiro Kuroda and Hidekazu Takiuchi and Masao Tanooka and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology},
 title = {Producing Dynamically-Fused Endoscopic View depending on Position of Endoscopy},
 venue = {Koganei/Japan},
 year = {2008}
}`
            },

  {
            'id': '267',
            'author': 'Daisuke Fukutsuka, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Propsing Push-in Type Tangible Display',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-12,
 author = {Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Naoto Kume and Naoki Ohboshi and Kenta Hori and Masahiro Hirose and Tsutomu Fujita and Tetsutarou Takano and Nobuaki Ito and Keisuke Nagase and Nobuyuki Ashida and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {24},
 title = {Development of Reporting and Similar Case Retrieving System Using Meta Information of Image Media},
 venue = {Akita/Japan},
 year = {2008}
}`
            },

  {
            'id': '268',
            'author': 'Tomohiro Kuroda, Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Spacio-Temporal Visualization of RI Tracer from List-Mode Data',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-11,
 author = {Tomohiro Kuroda and Tsuyoshi Nagashima and Antti Alasalmi and Naoto Kume and Tadamasa Takemura and Olli Martikainen and Naoki Ohboshi and Kenta Hori and Hiroyuki Yoshihara and Yoshihiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {28},
 title = {Effectiveness of WLAN Location Service on Medical Equipment Logistics},
 venue = {Akita/Japan},
 year = {2008}
}`
            },

  {
            'id': '269',
            'author': 'Hisashi Kanamori, Yoshihiro Kuroda, Hidekazu Takiuchi, Masao Tanooka, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Producing Dynamically-Fused Endoscopic View depending on Position of Endoscopy',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-10,
 author = {Shunji Kamei and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Bio-Medical Engineering},
 pages = {874-875},
 title = {Haptization of Flow Field Focused on the Asymmetric Drag Distribution},
 venue = {Kobe/Japan},
 volume = {46},
 year = {2008}
}`
            },

  {
            'id': '270',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Naoto Kume, Naoki Ohboshi, Kenta Hori, Masahiro Hirose, Tsutomu Fujita, Tetsutarou Takano, Nobuaki Ito, Keisuke Nagase, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Development of Reporting and Similar Case Retrieving System Using Meta Information of Image Media',
            'year': '2008',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-domestic-conferences-1,
 author = {Megumi Nakao and Tomohiro Kuroda and Kotaro Minato},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Model and Simulation for Medical Education},
 title = {Sharing Surgical Knowledge using Physics-based Simulation and Volume Visualization},
 venue = {Tokyo/Japan},
 year = {2008}
}`
            },

  {
            'id': '271',
            'author': 'Tomohiro Kuroda, Tsuyoshi Nagashima, Antti Alasalmi, Naoto Kume, Tadamasa Takemura, Olli Martikainen, Naoki Ohboshi, Kenta Hori, Hiroyuki Yoshihara, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Effectiveness of WLAN Location Service on Medical Equipment Logistics',
            'year': '2008',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2007-journal-papers-9,
 author = {Tomohiro Kuroda and Tadamasa Takemura and Kyoichi Takano and Yasuaki Inoue and Hiroki Miura and Hiroyuki Yoshihara},
 journal = {Japan Journal of Medical Informatics},
 number = {4},
 pages = {355-363},
 title = {Networked Digital Camera for Clinical Use},
 venue = {Technical Note},
 volume = {27},
 year = {2007}
}`
            },

  {
            'id': '272',
            'author': 'Shunji Kamei, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Haptization of Flow Field Focused on the Asymmetric Drag Distribution',
            'year': '2008',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2007-journal-papers-8,
 author = {Sachiko Okada and Keisuke Nagase and Akiko Ito and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {Japan Journal of Medical Informatics},
 number = {2},
 pages = {199-203},
 title = {Consideration of Appropriate Method of Knowledge Representation and Reasoning for a Hospital},
 venue = {Technical Note},
 volume = {27},
 year = {2007}
}`
            },

  {
            'id': '273',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Sharing Surgical Knowledge using Physics-based Simulation and Volume Visualization',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of Japanese Association of Model and Simulation for Medical Education',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2007-journal-papers-7,
 author = {Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Nobuyuki Ashida and Hiroyuki Yoshihara},
 journal = {Journal of eHealth Technology and Application},
 number = {2},
 pages = {150-154},
 title = {Automatic Extraction of Domain Specific Terms using World Wide Web Knowledge in Medicine},
 volume = {5},
 year = {2007}
}`
            },

  {
            'id': '274',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Kyoichi Takano, Yasuaki Inoue, Hiroki Miura, Hiroyuki Yoshihara',
            'title': 'Networked Digital Camera for Clinical Use',
            'year': '2007',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2007-journal-papers-6,
 author = {Atsunobu Kimura and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {Journal of Japan Society for Educational Technology},
 number = {4},
 pages = {293-303},
 title = {A Study of Display of Visualization of Motion Instruction Supporting},
 volume = {30},
 year = {2007}
}`
            },

  {
            'id': '275',
            'author': 'Sachiko Okada, Keisuke Nagase, Akiko Ito, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Consideration of Appropriate Method of Knowledge Representation and Reasoning for a Hospital',
            'year': '2007',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2007-journal-papers-5,
 author = {Yoshihiro Kuroda and Megumi Nakao and Naoto Kume and Mikko Rissanen and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 title = {VRASS Simulation Platform},
 volume = {125},
 year = {2007}
}`
            },

  {
            'id': '276',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Automatic Extraction of Domain Specific Terms using World Wide Web Knowledge in Medicine',
            'year': '2007',
            'book': 'Journal of eHealth Technology and Application',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2007-journal-papers-4,
 author = {Yoshihiro Kuroda and Makoto Hirai and Megumi Nakao and Toshihiko Sato and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {244-249},
 title = {Organ Exclusion Simulation with Multi-finger Haptic Interaction for Open Surgery Simulator},
 volume = {132},
 year = {2007}
}`
            },

  {
            'id': '277',
            'author': 'Atsunobu Kimura, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Study of Display of Visualization of Motion Instruction Supporting',
            'year': '2007',
            'book': 'Journal of Japan Society for Educational Technology',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2007-journal-papers-3,
 author = {Yoshihiro Kuroda and Tadamasa Takemura and Naoto Kume and Kazuya Okamoto and Kenta Hori and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {250-255},
 title = {Semi-automatic Development of Optimized Surgical Simulator with Surgical Manuals},
 volume = {125},
 year = {2007}
}`
            },

  {
            'id': '278',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Mikko Rissanen, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'VRASS Simulation Platform',
            'year': '2007',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2007-journal-papers-2,
 author = {Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 journal = {Studies in Health Technology and Informatics},
 pages = {238-240},
 title = {A Proposal of Speculative Operation on Distributed System for FEM-Based Ablation Simulator},
 volume = {125},
 year = {2007}
}`
            },

  {
            'id': '279',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Toshihiko Sato, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Organ Exclusion Simulation with Multi-finger Haptic Interaction for Open Surgery Simulator',
            'year': '2007',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2007-journal-papers-1,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Megumi Nakao and Naoto Kume and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {388-393},
 title = {A Novel Approach for Training of Surgical Procedures Based on Visualization and Annotation of Behavioural Parameters in Simulators},
 volume = {125},
 year = {2007}
}`
            },

  {
            'id': '280',
            'author': 'Yoshihiro Kuroda, Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Kenta Hori, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Semi-automatic Development of Optimized Surgical Simulator with Surgical Manuals',
            'year': '2007',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2007-international-conferences-9,
 author = {Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Nobuyuki Ashida and Hiroyuki Yoshihara},
 booktitle = {Abstracts of 21st Pacific Science Congress},
 pages = {143},
 title = {Automatic Extraction of Domain Specific Terms using World Wide Web Knowledge in Medicine},
 venue = {Ginowan/Japan},
 year = {2007}
}`
            },

  {
            'id': '281',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'A Proposal of Speculative Operation on Distributed System for FEM-Based Ablation Simulator',
            'year': '2007',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2007-international-conferences-8,
 author = {Osamu Oshiro and Shunji Kamei and Yasushi Masuda and Yoshihiro Kuroda and Tomohiro Kuroda},
 booktitle = {Acoustical Imaging},
 pages = {101-106},
 title = {Cross-Sampling Measurement of Vocal-Field Vibration using Ultrasound},
 venue = {Shonan/Japan},
 volume = {29},
 year = {2007}
}`
            },

  {
            'id': '282',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'A Novel Approach for Training of Surgical Procedures Based on Visualization and Annotation of Behavioural Parameters in Simulators',
            'year': '2007',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2007-international-conferences-7,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Megumi Nakao and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of World HAPTICS},
 pages = {324-329},
 title = {Toward Visualization of Skill in VR: Adaptive Real-time Guidance for Learning Force Exertion through the 'Shaping' Strategy},
 venue = {Tsukuba/Japan},
 year = {2007}
}`
            },

  {
            'id': '283',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Automatic Extraction of Domain Specific Terms using World Wide Web Knowledge in Medicine',
            'year': '2007',
            'book': 'Abstracts of 21st Pacific Science Congress',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-6,
 author = {Yoshihiro Kuroda and Makoto Hirai and Megumi Nakao and Toshihiko Sato and Tomohiro Kuroda and Yasushi Masuda and Osamu Oshiro},
 booktitle = {Proceedings of World HAPTICS},
 pages = {525-530},
 title = {Construction of Training Environment for Surgical Exclusion with a Basic Study of Multi-finger Haptic Interaction},
 venue = {Tsukuba/Japan},
 year = {2007}
}`
            },

  {
            'id': '284',
            'author': 'Osamu Oshiro, Shunji Kamei, Yasushi Masuda, Yoshihiro Kuroda, Tomohiro Kuroda',
            'title': 'Cross-Sampling Measurement of Vocal-Field Vibration using Ultrasound',
            'year': '2007',
            'book': 'Acoustical Imaging',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-5,
 author = {Yoshihiro Kuroda and Megumi Nakao and Naoto Kume and Mikko Rissanen and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Medicine Meets Virtual Reality, },
 title = {VRASS Simulation Platform},
 venue = {Long Beach/USA},
 year = {2007}
}`
            },

  {
            'id': '285',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Toward Visualization of Skill in VR: Adaptive Real-time Guidance for Learning Force Exertion through the \'Shaping\' Strategy',
            'year': '2007',
            'book': 'Proceedings of World HAPTICS',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-4,
 author = {Yoshihiro Kuroda and Makoto Hirai and Megumi Nakao and Toshihiko Sato and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {244-249},
 title = {Organ Exclusion Simulation with Multi-finger Haptic Interaction for Open Surgery Simulator},
 venue = {Newport Beach/USA},
 year = {2007}
}`
            },

  {
            'id': '286',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Toshihiko Sato, Tomohiro Kuroda, Yasushi Masuda, Osamu Oshiro',
            'title': 'Construction of Training Environment for Surgical Exclusion with a Basic Study of Multi-finger Haptic Interaction',
            'year': '2007',
            'book': 'Proceedings of World HAPTICS',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-3,
 author = {Yoshihiro Kuroda and Tadamasa Takemura and Naoto Kume and Kazuya Okamoto and Kenta Hori and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {250-255},
 title = {Semi-automatic Development of Optimized Surgical Simulator with Surgical Manuals},
 venue = {Newport Beach/USA},
 year = {2007}
}`
            },

  {
            'id': '287',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Mikko Rissanen, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'VRASS Simulation Platform',
            'year': '2007',
            'book': 'Proceedings of Medicine Meets Virtual Reality, ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-2,
 author = {Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {238-240},
 title = {A Proposal of Speculative Operation on Distributed System for FEM-Based Ablation Simulator},
 venue = {Newport Beach/USA},
 year = {2007}
}`
            },

  {
            'id': '288',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Toshihiko Sato, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Organ Exclusion Simulation with Multi-finger Haptic Interaction for Open Surgery Simulator',
            'year': '2007',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-15,
 author = {Tomohiro Kuroda and Antti Alasalmi and Olli Martikainen and Tadamasa Takemura and Naoto Kume and Yoshihiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of International Symposium on Medical Information and Communication Technology},
 title = {Medical Equipment Logistics Improvement based on Location Data},
 venue = {Oulu/Finland},
 year = {2007}
}`
            },

  {
            'id': '289',
            'author': 'Yoshihiro Kuroda, Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Kenta Hori, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Semi-automatic Development of Optimized Surgical Simulator with Surgical Manuals',
            'year': '2007',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-14,
 author = {Tomohiro Kuroda and Kazuya Okamoto and Ryo Kitauchi and Tadamasa Takemura and Naoki Ohboshi and Hiroyuki Yoshihara},
 booktitle = {Lecture Notes in Computer Science},
 title = {Finding Origin Points for New Coordinate System Suitable for Sign Animation},
 venue = {Beijing/China},
 year = {2007}
}`
            },

  {
            'id': '290',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'A Proposal of Speculative Operation on Distributed System for FEM-Based Ablation Simulator',
            'year': '2007',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-13,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Lecture Notes in Computer Science},
 title = {A Novel Interface for Simulator Training: Describing and Presenting Manipulation Skill through VR Annotations},
 venue = {Beijing/China},
 year = {2007}
}`
            },

  {
            'id': '291',
            'author': 'Tomohiro Kuroda, Antti Alasalmi, Olli Martikainen, Tadamasa Takemura, Naoto Kume, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Medical Equipment Logistics Improvement based on Location Data',
            'year': '2007',
            'book': 'Proceedings of International Symposium on Medical Information and Communication Technology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-12,
 author = {Tadamasa Takemura and Kazuya Okamoto and Hyongyong Kim and Masahiro Hirose and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Lecture Notes in Computer Science},
 title = {Context-based Loose Information Structure for Medical Free Text Document},
 venue = {Beijing/China},
 year = {2007}
}`
            },

  {
            'id': '292',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Ryo Kitauchi, Tadamasa Takemura, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'Finding Origin Points for New Coordinate System Suitable for Sign Animation',
            'year': '2007',
            'book': 'Lecture Notes in Computer Science',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-11,
 author = {Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Shinichiro Mori and Shinji Tomita},
 booktitle = {International Journal of Computer Assisted Radiology and Surgery},
 number = {1},
 title = {Estimation of Application Level Speculative Operation on Distributed System for Haptic VR Simulatio of Invasive Operation},
 venue = {Berlin/Germany},
 volume = {2},
 year = {2007}
}`
            },

  {
            'id': '293',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Novel Interface for Simulator Training: Describing and Presenting Manipulation Skill through VR Annotations',
            'year': '2007',
            'book': 'Lecture Notes in Computer Science',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-10,
 author = {Tomohiro Kuroda and Tadamasa Takemura and Hiroyuki Yoshihara},
 booktitle = {International Journal of Computer Assisted Radiology and Surgery},
 number = {1},
 title = {Unified Image Repository for Hospital Information System},
 venue = {Berlin/Germany},
 volume = {2},
 year = {2007}
}`
            },

  {
            'id': '294',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Hyongyong Kim, Masahiro Hirose, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Context-based Loose Information Structure for Medical Free Text Document',
            'year': '2007',
            'book': 'Lecture Notes in Computer Science',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-international-conferences-1,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Megumi Nakao and Naoto Kume and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {388-393},
 title = {A Novel Approach for Training of Surgical Procedures Based on Visualization and Annotation of Behavioural Parameters in Simulators},
 venue = {Newport Beach/USA},
 year = {2007}
}`
            },

  {
            'id': '295',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Shinichiro Mori, Shinji Tomita',
            'title': 'Estimation of Application Level Speculative Operation on Distributed System for Haptic VR Simulatio of Invasive Operation',
            'year': '2007',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-9,
 author = {Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Naoki Ohboshi and Yoshihiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Human Interface Symposium},
 title = {A Study on Coordinate System for Sign Animation},
 venue = {Tokyo/Japan},
 year = {2007}
}`
            },

  {
            'id': '296',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Unified Image Repository for Hospital Information System',
            'year': '2007',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-8,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Osamu Oshiro and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {44},
 title = {*** No English title in DB***},
 venue = {Tokyo/Japan},
 year = {2007}
}`
            },

  {
            'id': '297',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'A Novel Approach for Training of Surgical Procedures Based on Visualization and Annotation of Behavioural Parameters in Simulators',
            'year': '2007',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-7,
 author = {Mikko Rissanen and Naoto Kume and Yoshihiro Kuroda and Tomohiro Kuroda and Koji Yoshimura and Toshiyuki Kamoto and Osamu Ogawa and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {33},
 title = {Evaluation of VR Annotation Based Teaching using a Digital Rectal Examination Simulator},
 venue = {Tokyo/Japan},
 year = {2007}
}`
            },

  {
            'id': '298',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Naoki Ohboshi, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'A Study on Coordinate System for Sign Animation',
            'year': '2007',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-6,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {25},
 title = {Experimental Study on Refresh Rate of Haptic Feedback for VR Training System on Finger Handling Skill},
 venue = {Tokyo/Japan},
 year = {2007}
}`
            },

  {
            'id': '299',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-5,
 author = {Naotsugu Yamasaki and Koji Yoshimura and Yoshihiro Kuroda and Megumi Nakao and Tetsuyuki Ito and Tomohiro Kuroda and Osamu Oshiro and Toshiyuki Kamoto and Osamu Ogawa},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {32},
 title = {Preoperative Planning Support System for Partial Kidney Resection Surgery},
 venue = {Tokyo/Japan},
 year = {2007}
}`
            },

  {
            'id': '300',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Tomohiro Kuroda, Koji Yoshimura, Toshiyuki Kamoto, Osamu Ogawa, Hiroyuki Yoshihara',
            'title': 'Evaluation of VR Annotation Based Teaching using a Digital Rectal Examination Simulator',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-4,
 author = {Toshiaki Tanimoto and Hiroshi Watabe and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Joint Research Meeting},
 title = {Visualization of RI Tracer using List-mode Data},
 venue = {Toyonaka/Japan},
 year = {2007}
}`
            },

  {
            'id': '301',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Experimental Study on Refresh Rate of Haptic Feedback for VR Training System on Finger Handling Skill',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-3,
 author = {Shunji Kamei and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {***No English Book Name in DB***},
 title = {*** No English title in DB***},
 venue = {Toyonaka/Japan},
 year = {2007}
}`
            },

  {
            'id': '302',
            'author': 'Naotsugu Yamasaki, Koji Yoshimura, Yoshihiro Kuroda, Megumi Nakao, Tetsuyuki Ito, Tomohiro Kuroda, Osamu Oshiro, Toshiyuki Kamoto, Osamu Ogawa',
            'title': 'Preoperative Planning Support System for Partial Kidney Resection Surgery',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-27,
 author = {Shunji Kamei and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Joint Research Meeting},
 title = {Haptic Display to Support Understanding of Flow Field},
 venue = {Toyonaka/Japan},
 year = {2007}
}`
            },

  {
            'id': '303',
            'author': 'Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Visualization of RI Tracer using List-mode Data',
            'year': '2007',
            'book': 'Joint Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-26,
 author = {Toshiaki Tanimoto and Hiroshi Watabe and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Joint Research Meeting},
 title = {Spacio-Temporal Analysis of RI Tracer using List-mode data},
 venue = {Toyonaka/Japan},
 year = {2007}
}`
            },

  {
            'id': '304',
            'author': 'Shunji Kamei, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': '*** No English title in DB***',
            'year': '2007',
            'book': '***No English Book Name in DB***',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-25,
 author = {Ryosuke Arai and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Joint Research Meeting},
 title = {Simulation of Growing Crack of Virtual Tissue},
 venue = {Toyonaka/Japan},
 year = {2007}
}`
            },

  {
            'id': '305',
            'author': 'Shunji Kamei, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Haptic Display to Support Understanding of Flow Field',
            'year': '2007',
            'book': 'Joint Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-24,
 author = {Masayuki Kawasaki and Naoto Kume and Yoshihiro Kuroda and Tadamasa Takemura and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Method of Calculation Reduction for Haptic Interaction in Medical Virtual Reality},
 venue = {Kobe/Japan},
 year = {2007}
}`
            },

  {
            'id': '306',
            'author': 'Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Spacio-Temporal Analysis of RI Tracer using List-mode data',
            'year': '2007',
            'book': 'Joint Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-23,
 author = {Tadamasa Takemura and Hyongyong Kim and Masahiro Hirose and Kazuya Okamoto and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Development of Incident Report Navigation System based on Context-based Loose Information Structure},
 venue = {Kobe/Japan},
 year = {2007}
}`
            },

  {
            'id': '307',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Simulation of Growing Crack of Virtual Tissue',
            'year': '2007',
            'book': 'Joint Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-22,
 author = {Kazuya Okamoto and Tatsuro Ishida and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Web Search Engine for Clinical Use - MANDARA},
 venue = {Kobe/Japan},
 year = {2007}
}`
            },

  {
            'id': '308',
            'author': 'Masayuki Kawasaki, Naoto Kume, Yoshihiro Kuroda, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Method of Calculation Reduction for Haptic Interaction in Medical Virtual Reality',
            'year': '2007',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-21,
 author = {Naoto Kume and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Hospital Asset Management under MAC-Address Based Network},
 venue = {Kobe/Japan},
 year = {2007}
}`
            },

  {
            'id': '309',
            'author': 'Tadamasa Takemura, Hyongyong Kim, Masahiro Hirose, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of Incident Report Navigation System based on Context-based Loose Information Structure',
            'year': '2007',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-20,
 author = {Tomohiro Kuroda and Tadamasa Takemura and Kyoichi Takano and Yasuaki Inoue and Hiroki Miura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Networked Digital Camera for Clinical Use},
 venue = {Kobe/Japan},
 year = {2007}
}`
            },

  {
            'id': '310',
            'author': 'Kazuya Okamoto, Tatsuro Ishida, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Web Search Engine for Clinical Use - MANDARA',
            'year': '2007',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-2,
 author = {Masayuki Kawasaki and Naoto Kume and Yoshihiro Kuroda and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {593-594},
 title = {Encouragement Prize of Human Interface Society of Japan},
 venue = {Kyoto/Japan},
 year = {2007}
}`
            },

  {
            'id': '311',
            'author': 'Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Hospital Asset Management under MAC-Address Based Network',
            'year': '2007',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-19,
 author = {Takashi Tsukasa and Takashi Nakai and Tomohiro Kuroda and Tadamasa Takemura and Takashi Kawamura and Masahiko Ando and Kenta Hori and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Application of Real-Time Multimedia Communication Technology into Health Care Service},
 venue = {Kobe/Japan},
 year = {2007}
}`
            },

  {
            'id': '312',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Kyoichi Takano, Yasuaki Inoue, Hiroki Miura, Hiroyuki Yoshihara',
            'title': 'Networked Digital Camera for Clinical Use',
            'year': '2007',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-18,
 author = {Ryosuke Arai and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the Institute of Electrical Engineers of Japan, Kansai Branch},
 title = {Simulation of Growing Crack of Virtual Tissue},
 venue = {Hyoto/Japan},
 year = {2007}
}`
            },

  {
            'id': '313',
            'author': 'Masayuki Kawasaki, Naoto Kume, Yoshihiro Kuroda, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Encouragement Prize of Human Interface Society of Japan',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-17,
 author = {Toshiaki Tanimoto and Hiroshi Watabe and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {248},
 pages = {39-42},
 title = {Extraction of RI-Tracer Dynamics from List-Mode Data},
 venue = {Osaka/Japan},
 volume = {107},
 year = {2007}
}`
            },

  {
            'id': '314',
            'author': 'Takashi Tsukasa, Takashi Nakai, Tomohiro Kuroda, Tadamasa Takemura, Takashi Kawamura, Masahiko Ando, Kenta Hori, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Application of Real-Time Multimedia Communication Technology into Health Care Service',
            'year': '2007',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-16,
 author = {Yoshihiro Kuroda and Hideyuki Horio and Yasushi Masuda and Tomohiro Kuroda and Osamu Oshiro and Shigeo Wada and Toru Haraguchi and Kazuo Nakazawa},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 title = {*** No English title in DB***},
 year = {2007}
}`
            },

  {
            'id': '315',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Simulation of Growing Crack of Virtual Tissue',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the Institute of Electrical Engineers of Japan, Kansai Branch',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-15,
 author = {Toru Haraguchi and Hideyuki Horio and Yoshihiro Kuroda and Yasushi Masuda and Tomohiro Kuroda and Osamu Oshiro and Hiroaki Naito and Masahiro Higashi and Kazuo Nakazawa},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {1-6},
 title = {Visualization and Evaluation of Ventricular Wall Contraction and Extension Velocity based on MR Phase Contrast Method},
 venue = {Sapporo/Japan},
 year = {2007}
}`
            },

  {
            'id': '316',
            'author': 'Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Extraction of RI-Tracer Dynamics from List-Mode Data',
            'year': '2007',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-14,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 title = {*** No English title in DB***},
 year = {2007}
}`
            },

  {
            'id': '317',
            'author': 'Yoshihiro Kuroda, Hideyuki Horio, Yasushi Masuda, Tomohiro Kuroda, Osamu Oshiro, Shigeo Wada, Toru Haraguchi, Kazuo Nakazawa',
            'title': '*** No English title in DB***',
            'year': '2007',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-13,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 title = {Construction of Organ Exclusion SImulator with Multi-finger Force Feedback Device},
 venue = {Fukuoka/Japan},
 year = {2007}
}`
            },

  {
            'id': '318',
            'author': 'Toru Haraguchi, Hideyuki Horio, Yoshihiro Kuroda, Yasushi Masuda, Tomohiro Kuroda, Osamu Oshiro, Hiroaki Naito, Masahiro Higashi, Kazuo Nakazawa',
            'title': 'Visualization and Evaluation of Ventricular Wall Contraction and Extension Velocity based on MR Phase Contrast Method',
            'year': '2007',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-12,
 author = {Shunji Kamei and Yoshihiro Kuroda and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {151-154},
 title = {Haptic Navigation System for Understanding in Three-Dimensional Flow Fields},
 venue = {Fukuoka/Japan},
 year = {2007}
}`
            },

  {
            'id': '319',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro',
            'title': '*** No English title in DB***',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-11,
 author = {Masayuki Kawasaki and Naoto Kume and Yoshihiro Kuroda and Tadamasa Takemura and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 title = {Elasticity Distribution-based Mesh Generation for Finite Element Model},
 venue = {Fukuoka/Japan},
 year = {2007}
}`
            },

  {
            'id': '320',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Construction of Organ Exclusion SImulator with Multi-finger Force Feedback Device',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-10,
 author = {Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Naoki Ohboshi and Yoshihiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Sign Linguistics},
 pages = {47-48},
 title = {Morpholozical Analysis of  Japanese-Japanese Sign Language Dictionary},
 venue = {Kiyose/Japan},
 year = {2007}
}`
            },

  {
            'id': '321',
            'author': 'Shunji Kamei, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Haptic Navigation System for Understanding in Three-Dimensional Flow Fields',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2007-domestic-conferences-1,
 author = {Yoshihiro Kuroda and Makoto Hirai and Megumi Nakao and Toshihiko Sato and Tomohiro Kuroda and Yasushi Masuda and Osamu Oshiro},
 booktitle = {Bio-Medical Engineering},
 title = {Construction and Evaluation of Prototype VR Simulator for Training of Liver Exclusion},
 venue = {Sendai/Japan},
 volume = {45},
 year = {2007}
}`
            },

  {
            'id': '322',
            'author': 'Masayuki Kawasaki, Naoto Kume, Yoshihiro Kuroda, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Elasticity Distribution-based Mesh Generation for Finite Element Model',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2006-journal-papers-9,
 author = {Ryo Shikata and Tomohiro Kuroda and Yoshito Tabata and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {The International Journal on Disability and Human Development},
 number = {2},
 pages = {173-178},
 title = {Development of Vision Based Meeting Support System for Hearing Impaired},
 volume = {5},
 year = {2006}
}`
            },

  {
            'id': '323',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Naoki Ohboshi, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Morpholozical Analysis of  Japanese-Japanese Sign Language Dictionary',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2006-journal-papers-8,
 author = {Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Keisuke Nagase and Hiroyuki Yoshihara},
 journal = {The International Journal on Disability and Human Development},
 number = {2},
 pages = {113-117},
 title = {Constructing a New Coordinate System Suitable for Sign Animation},
 volume = {5},
 year = {2006}
}`
            },

  {
            'id': '324',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Toshihiko Sato, Tomohiro Kuroda, Yasushi Masuda, Osamu Oshiro',
            'title': 'Construction and Evaluation of Prototype VR Simulator for Training of Liver Exclusion',
            'year': '2007',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2006-journal-papers-7,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Genichi Sakaguchi and Masashi Komeda},
 journal = {Journal of Medical Systems},
 number = {5},
 pages = {371-380},
 title = {Physics-Based Simulation of Surgical Fields for Preoperative Strategic Planning},
 volume = {30},
 year = {2006}
}`
            },

  {
            'id': '325',
            'author': 'Ryo Shikata, Tomohiro Kuroda, Yoshito Tabata, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Development of Vision Based Meeting Support System for Hearing Impaired',
            'year': '2006',
            'book': 'The International Journal on Disability and Human Development',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2006-journal-papers-6,
 author = {Megumi Nakao and Tomohiro Kuroda and Masaru Komori and Hiroshi Oyama and Kotaro Minato and Takashi Takahashi},
 journal = {IEEE Multimedia},
 number = {3},
 pages = {50-60},
 title = {Transferring Bioelasticity Knowledge through Haptic Interaction},
 volume = {13},
 year = {2006}
}`
            },

  {
            'id': '326',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Constructing a New Coordinate System Suitable for Sign Animation',
            'year': '2006',
            'book': 'The International Journal on Disability and Human Development',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2006-journal-papers-5,
 author = {Yoichi Kawakami and Yasushi Matsumura and Kosuke Sasai and Shin Anei and Hiroshi Inada and Takahiro Kuchi and Tomohiro Kuroda and Norihiro Sakamoto and Tadamasa Takemura and Hiroshi Tanaka and Hiroo Tamagawa and Toshinari Nakano and Keunsik Park and Haruhiko Hiramatsu and Masaki Miyamoto},
 journal = {Japan Journal of Medical Informatics},
 number = {6},
 pages = {421-429},
 title = {Application of RDF in Reporting System},
 venue = {Technical Note},
 volume = {25},
 year = {2006}
}`
            },

  {
            'id': '327',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Genichi Sakaguchi, Masashi Komeda',
            'title': 'Physics-Based Simulation of Surgical Fields for Preoperative Strategic Planning',
            'year': '2006',
            'book': 'Journal of Medical Systems',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2006-journal-papers-4,
 author = {Tadamasa Takemura and Yoshihiro Kuroda and Naoto Kume and Kazuya Okamoto and Kenta Hori and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {Japan Journal of Medical Informatics},
 number = {6},
 pages = {457-462},
 title = {Requirement Extraction from Surgical Textbook using Natural Language Processing for Educational Virtual Reality Simulator},
 volume = {25},
 year = {2006}
}`
            },

  {
            'id': '328',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Hiroshi Oyama, Kotaro Minato, Takashi Takahashi',
            'title': 'Transferring Bioelasticity Knowledge through Haptic Interaction',
            'year': '2006',
            'book': 'IEEE Multimedia',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2006-journal-papers-3,
 author = {Naomi Sakihana and Yasue Kuwabara and Tomohiro Kuroda and Tadamasa Takemura and Keisuke Nagase and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {978},
 title = {Transfusion Checkup System using Mobile Terminals},
 volume = {122},
 year = {2006}
}`
            },

  {
            'id': '329',
            'author': 'Yoichi Kawakami, Yasushi Matsumura, Kosuke Sasai, Shin Anei, Hiroshi Inada, Takahiro Kuchi, Tomohiro Kuroda, Norihiro Sakamoto, Tadamasa Takemura, Hiroshi Tanaka, Hiroo Tamagawa, Toshinari Nakano, Keunsik Park, Haruhiko Hiramatsu, Masaki Miyamoto',
            'title': 'Application of RDF in Reporting System',
            'year': '2006',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2006-journal-papers-2,
 author = {Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {1},
 pages = {199-206},
 title = {Context-based Retrieval System for Similar Medical Practice Documents},
 volume = {44},
 year = {2006}
}`
            },

  {
            'id': '330',
            'author': 'Tadamasa Takemura, Yoshihiro Kuroda, Naoto Kume, Kazuya Okamoto, Kenta Hori, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Requirement Extraction from Surgical Textbook using Natural Language Processing for Educational Virtual Reality Simulator',
            'year': '2006',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2006-journal-papers-13,
 author = {Yoshihiro Kuroda and Makoto Hirai and Megumi Nakao and Toshihiko Sato and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {4},
 pages = {515-525},
 title = {A Study on Organ Exclusion Simulator with Multi-finger Force Feedback Device},
 volume = {11},
 year = {2006}
}`
            },

  {
            'id': '331',
            'author': 'Naomi Sakihana, Yasue Kuwabara, Tomohiro Kuroda, Tadamasa Takemura, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Transfusion Checkup System using Mobile Terminals',
            'year': '2006',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2006-journal-papers-12,
 author = {Tomohiro Kuroda and Mikako Murakami and Yoshito Tabata and Kunihiro Chihara},
 journal = {CEAI Journal - Control Engineering and Applied Informatics},
 number = {2},
 pages = {13-17},
 title = {On-Demand Expansion of Avatar's Hand for Legible Sign Animation},
 volume = {8},
 year = {2006}
}`
            },

  {
            'id': '332',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Context-based Retrieval System for Similar Medical Practice Documents',
            'year': '2006',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2006-journal-papers-11,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Megumi Nakao and Naoto Kume and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {4},
 pages = {527-536},
 title = {Annotated VR Simulation Records for Surgical Education -Evaluating the Benefits of Real-Time Visualization of Force Exertion-},
 volume = {11},
 year = {2006}
}`
            },

  {
            'id': '333',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Toshihiko Sato, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'A Study on Organ Exclusion Simulator with Multi-finger Force Feedback Device',
            'year': '2006',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2006-journal-papers-10,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Peter Antoniac and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {CEAI Journal - Control Engineering and Applied Informatics},
 number = {2},
 pages = {24-33},
 title = {Hand-Menu System: A Deviceless Virtual Imput Interface for Wearable Computers},
 volume = {8},
 year = {2006}
}`
            },

  {
            'id': '334',
            'author': 'Tomohiro Kuroda, Mikako Murakami, Yoshito Tabata, Kunihiro Chihara',
            'title': 'On-Demand Expansion of Avatar\'s Hand for Legible Sign Animation',
            'year': '2006',
            'book': 'CEAI Journal - Control Engineering and Applied Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2006-journal-papers-1,
 author = {Tadamasa Takemura and Akiko Hagimoto and Kazuya Okamoto and Tomohiro Kuroda and Keisuke Nagase and Nobuyuki Ashida and Hiroyuki Yoshihara},
 journal = {Journal of eHealth Technology and Application},
 number = {1},
 pages = {210-214},
 title = {Development of Discharge Summary Retrieval system for Nursing written in Medical Markup Language (MML)},
 volume = {4},
 year = {2006}
}`
            },

  {
            'id': '335',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Annotated VR Simulation Records for Surgical Education -Evaluating the Benefits of Real-Time Visualization of Force Exertion-',
            'year': '2006',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2006-international-conferences-9,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Eurohaptics},
 pages = {263-268},
 title = {Performance of Position Detection Tasks under Restriction of Finger's Movement},
 venue = {Paris/France},
 year = {2006}
}`
            },

  {
            'id': '336',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Peter Antoniac, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Hand-Menu System: A Deviceless Virtual Imput Interface for Wearable Computers',
            'year': '2006',
            'book': 'CEAI Journal - Control Engineering and Applied Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2006-international-conferences-8,
 author = {Tomohiro Kuroda and Mikko Rissanen and Takafumi Terada and Masayuki Harada and Hiroshi Oyama},
 booktitle = {Proceedings of Annual Meetings of the Society in Europe for Simulation Applied to Medicine},
 title = {Haptized Shared VR based Surgical Simulator},
 venue = {Porto/Portugal},
 year = {2006}
}`
            },

  {
            'id': '337',
            'author': 'Tadamasa Takemura, Akiko Hagimoto, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Development of Discharge Summary Retrieval system for Nursing written in Medical Markup Language (MML)',
            'year': '2006',
            'book': 'Journal of eHealth Technology and Application',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2006-international-conferences-7,
 author = {Megumi Nakao and Yoshihiro Kuroda and Tetsuo Sato and Tomohiro Kuroda and Kotaro Minato},
 booktitle = {International Journal of Computer Assisted Radiology and Surgery},
 pages = {156-158},
 title = {Volume Interaction Framework for Preoperative Surgical Simulation on Volumetric Images},
 venue = {Osaka/Japan},
 volume = {1},
 year = {2006}
}`
            },

  {
            'id': '338',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Performance of Position Detection Tasks under Restriction of Finger\'s Movement',
            'year': '2006',
            'book': 'Proceedings of Eurohaptics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-6,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {International Journal of Computer Assisted Radiology and Surgery},
 pages = {154-156},
 title = {Interactive Authoring of Example Surgical Procedures from Recorded Physics-based Simulation},
 venue = {Osaka/Japan},
 volume = {1},
 year = {2006}
}`
            },

  {
            'id': '339',
            'author': 'Tomohiro Kuroda, Mikko Rissanen, Takafumi Terada, Masayuki Harada, Hiroshi Oyama',
            'title': 'Haptized Shared VR based Surgical Simulator',
            'year': '2006',
            'book': 'Proceedings of Annual Meetings of the Society in Europe for Simulation Applied to Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-5,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {International Journal of Computer Assisted Radiology and Surgery},
 pages = {483-484},
 title = {Telemedicine Cockpit with Intuitive Interface for Integrated Control of Communication and Presentation},
 venue = {Osaka/Japan},
 volume = {1},
 year = {2006}
}`
            },

  {
            'id': '340',
            'author': 'Megumi Nakao, Yoshihiro Kuroda, Tetsuo Sato, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Volume Interaction Framework for Preoperative Surgical Simulation on Volumetric Images',
            'year': '2006',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-4,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {International Journal of Computer Assisted Radiology and Surgery},
 pages = {495},
 title = {Study of Spatial Anisotropy in Finger's Haptic Perception for Advanced Palpation Training},
 venue = {Osaka/Japan},
 year = {2006}
}`
            },

  {
            'id': '341',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Interactive Authoring of Example Surgical Procedures from Recorded Physics-based Simulation',
            'year': '2006',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-3,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of ACM International Conference on Virtual Reality Continuum and Its Applications},
 pages = {365-368},
 title = {Audiovisual Guidance for Simulated One Point Force Exertion Tasks},
 venue = {Hong Kong/China},
 year = {2006}
}`
            },

  {
            'id': '342',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Telemedicine Cockpit with Intuitive Interface for Integrated Control of Communication and Presentation',
            'year': '2006',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-24,
 author = {Megumi Nakao and Tomotaka Matsuyuki and Tomohiro Kuroda and Kotaro Minato},
 booktitle = {Proceedings of Asian Simulation Conference},
 pages = {377-380},
 title = {Physics-based Manipulation of Volumetric Images for Preoperative Surgical Simulation},
 venue = {Tokyo/Japan},
 year = {2006}
}`
            },

  {
            'id': '343',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Study of Spatial Anisotropy in Finger\'s Haptic Perception for Advanced Palpation Training',
            'year': '2006',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-23,
 author = {Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of Asian Simulation Conference},
 pages = {372-376},
 title = {Speculative FEM Simulation System for Invasive Surgical Operation with Haptic Interaction},
 venue = {Tokyo/Japan},
 year = {2006}
}`
            },

  {
            'id': '344',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Audiovisual Guidance for Simulated One Point Force Exertion Tasks',
            'year': '2006',
            'book': 'Proceedings of ACM International Conference on Virtual Reality Continuum and Its Applications',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-22,
 author = {Yoshihiro Kuroda and Makoto Hirai and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Asian Simulation Conference},
 pages = {367-371},
 title = {Interactive Manipulation and Stress Visualization with Multi-finger Haptic Device},
 venue = {Tokyo/Japan},
 year = {2006}
}`
            },

  {
            'id': '345',
            'author': 'Megumi Nakao, Tomotaka Matsuyuki, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Physics-based Manipulation of Volumetric Images for Preoperative Surgical Simulation',
            'year': '2006',
            'book': 'Proceedings of Asian Simulation Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-21,
 author = {Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics},
 pages = {177-183},
 title = {Context-Based Retrieval System for Similar Medical Documents},
 venue = {Taipei/ROC},
 year = {2006}
}`
            },

  {
            'id': '346',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'Speculative FEM Simulation System for Invasive Surgical Operation with Haptic Interaction',
            'year': '2006',
            'book': 'Proceedings of Asian Simulation Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-20,
 author = {Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics},
 pages = {208-213},
 title = {MAC Address-Based Position Detection of Illegal Access Terminals on Private Network for Hospital Asset Management},
 venue = {Taipei/ROC},
 year = {2006}
}`
            },

  {
            'id': '347',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Interactive Manipulation and Stress Visualization with Multi-finger Haptic Device',
            'year': '2006',
            'book': 'Proceedings of Asian Simulation Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-2,
 author = {Naomi Sakihana and Yasue Kuwabara and Tomohiro Kuroda and Tadamasa Takemura and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Congress on Nursing Informatics},
 pages = {978},
 title = {Transfusion Checkup System using Mobile Terminals},
 venue = {Seoul/Korea},
 year = {2006}
}`
            },

  {
            'id': '348',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Context-Based Retrieval System for Similar Medical Documents',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-19,
 author = {Tadamasa Takemura and Masahiro Hirose and Kazuya Okamoto and Tomohiro Kuroda and Tatsuro Ishizaki and Yuichi Imanaka and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Conference on Quality in Health Care},
 pages = {60},
 title = {Automatic Classification of Incident reports based on Examples of Words: Using Machine Learning Technique of Natural Language Processing},
 venue = {London/UK},
 year = {2006}
}`
            },

  {
            'id': '349',
            'author': 'Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'MAC Address-Based Position Detection of Illegal Access Terminals on Private Network for Hospital Asset Management',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-18,
 author = {Tadamasa Takemura and Kazuya Okamoto and Tatsuro Ishida and Tomohiro Kuroda and Keisuke Nagase and Kiyoko Makimoto and Nobuyuki Ashida and Hiroyuki Yoshihara},
 booktitle = {Proceedings of The World Congress on Internet in Medicine},
 pages = {113},
 title = {Development of a numeric data extracting and analysis system using dependency analysis on Nosocomial Outbreak Investigation database},
 venue = {Tronto/Canada},
 year = {2006}
}`
            },

  {
            'id': '350',
            'author': 'Naomi Sakihana, Yasue Kuwabara, Tomohiro Kuroda, Tadamasa Takemura, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Transfusion Checkup System using Mobile Terminals',
            'year': '2006',
            'book': 'Proceedings of International Congress on Nursing Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-17,
 author = {Ryo Shikata and Tomohiro Kuroda and Yoshito Tabata and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {53-58},
 title = {Development of Vision Based Meeting Support System for Hearing Impaired},
 venue = {Esbjerg/Denmark},
 year = {2006}
}`
            },

  {
            'id': '351',
            'author': 'Tadamasa Takemura, Masahiro Hirose, Kazuya Okamoto, Tomohiro Kuroda, Tatsuro Ishizaki, Yuichi Imanaka, Hiroyuki Yoshihara',
            'title': 'Automatic Classification of Incident reports based on Examples of Words: Using Machine Learning Technique of Natural Language Processing',
            'year': '2006',
            'book': 'Proceedings of International Conference on Quality in Health Care',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-16,
 author = {Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Keisuke Nagase},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {75-80},
 title = {Constructing New Coordinate System Suitable for Sign Animation},
 venue = {Esbjerg/Denmark},
 year = {2006}
}`
            },

  {
            'id': '352',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tatsuro Ishida, Tomohiro Kuroda, Keisuke Nagase, Kiyoko Makimoto, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Development of a numeric data extracting and analysis system using dependency analysis on Nosocomial Outbreak Investigation database',
            'year': '2006',
            'book': 'Proceedings of The World Congress on Internet in Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-15,
 author = {Masahiro Hirose and Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Nordic Conference on eHealth and Telemedicine},
 pages = {85-88},
 title = {Application of Textmining Based Clinical Documents in Integrated HIS, Co-occurrence Structure of Terms Among Incident/Accident Reports},
 venue = {Helsinki/Finland},
 year = {2006}
}`
            },

  {
            'id': '353',
            'author': 'Ryo Shikata, Tomohiro Kuroda, Yoshito Tabata, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Development of Vision Based Meeting Support System for Hearing Impaired',
            'year': '2006',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-14,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Nordic Conference on eHealth and Telemedicine},
 pages = {251-253},
 title = {Telemedicine Cockpit for 'Plug & Play' Telemedicine with Single Action Control of Presentation and Communication},
 venue = {Helsinki/Finland},
 year = {2006}
}`
            },

  {
            'id': '354',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Keisuke Nagase',
            'title': 'Constructing New Coordinate System Suitable for Sign Animation',
            'year': '2006',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-13,
 author = {Tadamasa Takemura and Nobuyuki Ashida and Kazuya Okamoto and Tatsuro Ishida and Tomohiro Kuroda and Kiyoko Makimoto and Hiroyuki Yoshihara},
 booktitle = {Proceedings of IEEE Healthcom},
 pages = {157-159},
 title = {Development of Information Retrieval and Web Information Integration System for Nosocomial Infection Anecdotal Research Papers},
 venue = {New Delhi/India},
 year = {2006}
}`
            },

  {
            'id': '355',
            'author': 'Masahiro Hirose, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Application of Textmining Based Clinical Documents in Integrated HIS, Co-occurrence Structure of Terms Among Incident/Accident Reports',
            'year': '2006',
            'book': 'Proceedings of Nordic Conference on eHealth and Telemedicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-12,
 author = {Yoshihiro Kuroda and Makoto Hirai and Megumi Nakao and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {ACM SIGGRAPH Poster},
 title = {Multi-finger Haptic Interaction for Soft Tissue Exclusion Manipulation},
 venue = {Boston/USA},
 year = {2006}
}`
            },

  {
            'id': '356',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Telemedicine Cockpit for \'Plug & Play\' Telemedicine with Single Action Control of Presentation and Communication',
            'year': '2006',
            'book': 'Proceedings of Nordic Conference on eHealth and Telemedicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-11,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Biomedical Simulation, Lecture Notes in Computer Science},
 pages = {122-131},
 title = {Annotated Surgical Manipulation for Simulator-based Surgical Skill-transfer using SiRE - Simulation Record Editor},
 venue = {Zurich/Switzerland},
 volume = {4072},
 year = {2006}
}`
            },

  {
            'id': '357',
            'author': 'Tadamasa Takemura, Nobuyuki Ashida, Kazuya Okamoto, Tatsuro Ishida, Tomohiro Kuroda, Kiyoko Makimoto, Hiroyuki Yoshihara',
            'title': 'Development of Information Retrieval and Web Information Integration System for Nosocomial Infection Anecdotal Research Papers',
            'year': '2006',
            'book': 'Proceedings of IEEE Healthcom',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-10,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Naoto Kume and Megumi Nakao and Tomohiro Kuroda},
 booktitle = {Proceedings of Eurohaptics},
 pages = {543-546},
 title = {Editing Recorded Haptic Data with SiRE - Simulation Record Editor},
 venue = {Paris/France},
 year = {2006}
}`
            },

  {
            'id': '358',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Multi-finger Haptic Interaction for Soft Tissue Exclusion Manipulation',
            'year': '2006',
            'book': 'ACM SIGGRAPH Poster',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-1,
 author = {Tadamasa Takemura and Akiko Hagimoto and Kazuya Okamoto and Tomohiro Kuroda and Keisuke Nagase and Nobuyuki Ashida and Hiroyuki Yoshihara},
 booktitle = {Proceedings of APT Telemedicine Workshop},
 pages = {210-214},
 title = {Development of Discharge Summary Retrieval system for Nursing written in Medical Markup Language (MML)},
 venue = {Islamabad/Turkey},
 year = {2006}
}`
            },

  {
            'id': '359',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Annotated Surgical Manipulation for Simulator-based Surgical Skill-transfer using SiRE - Simulation Record Editor',
            'year': '2006',
            'book': 'Biomedical Simulation, Lecture Notes in Computer Science',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-9,
 author = {Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {41},
 title = {*** No English title in DB***},
 year = {2006}
}`
            },

  {
            'id': '360',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda',
            'title': 'Editing Recorded Haptic Data with SiRE - Simulation Record Editor',
            'year': '2006',
            'book': 'Proceedings of Eurohaptics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-8,
 author = {Yoshihiro Kuroda and Mikko Rissanen and Koji Yoshimura and Megumi Nakao and Tomohiro Kuroda and Toshiyuki Kamoto and Hiroshi Oyama and Osamu Ogawa and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {42},
 title = {*** No English title in DB***},
 year = {2006}
}`
            },

  {
            'id': '361',
            'author': 'Tadamasa Takemura, Akiko Hagimoto, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Development of Discharge Summary Retrieval system for Nursing written in Medical Markup Language (MML)',
            'year': '2006',
            'book': 'Proceedings of APT Telemedicine Workshop',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-7,
 author = {Yoshihiro Kuroda and Mikko Rissanen and Koji Yoshimura and Megumi Nakao and Tomohiro Kuroda and Toshiyuki Kamoto and Hiroshi Oyama and Osamu Ogawa and Hiroyuki Yoshihara},
 booktitle = {Proceedings of JAMIT Frontier},
 title = {*** No English title in DB***},
 venue = {Kyoto/Japan},
 year = {2006}
}`
            },

  {
            'id': '362',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-6,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {661-662},
 title = {*** No English title in DB***},
 year = {2006}
}`
            },

  {
            'id': '363',
            'author': 'Yoshihiro Kuroda, Mikko Rissanen, Koji Yoshimura, Megumi Nakao, Tomohiro Kuroda, Toshiyuki Kamoto, Hiroshi Oyama, Osamu Ogawa, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-5,
 author = {Takashi Nakai and Takashi Tsukasa and Kenta Hori and Tomohiro Kuroda and Keisuke Nagase and Takashi Kawamura and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {651-652},
 title = {*** No English title in DB***},
 year = {2006}
}`
            },

  {
            'id': '364',
            'author': 'Yoshihiro Kuroda, Mikko Rissanen, Koji Yoshimura, Megumi Nakao, Tomohiro Kuroda, Toshiyuki Kamoto, Hiroshi Oyama, Osamu Ogawa, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of JAMIT Frontier',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-4,
 author = {Tatsuro Ishida and Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {185-186},
 title = {*** No English title in DB***},
 year = {2006}
}`
            },

  {
            'id': '365',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-30,
 author = {Takashi Nakai and Takashi Tsukasa and Tomohiro Kuroda and Tadamasa Takemura and Takashi Kawamura and Masahiko Ando and Kenta Hori and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {1034-1035},
 title = {Construction Trial of Tele-medicine Integration System using Campus Network},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '366',
            'author': 'Takashi Nakai, Takashi Tsukasa, Kenta Hori, Tomohiro Kuroda, Keisuke Nagase, Takashi Kawamura, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-3,
 author = {Hyongyong Kim and Tadamasa Takemura and Masahiro Hirose and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {181-182},
 title = {*** No English title in DB***},
 year = {2006}
}`
            },

  {
            'id': '367',
            'author': 'Tatsuro Ishida, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-29,
 author = {Tadamasa Takemura and Masahiro Hirose and Kazuya Okamoto and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {1030-1031},
 title = {Analysis of Adverse Effects using Medical Term Co-occurrence Structure from Incident Reports},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '368',
            'author': 'Takashi Nakai, Takashi Tsukasa, Tomohiro Kuroda, Tadamasa Takemura, Takashi Kawamura, Masahiko Ando, Kenta Hori, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Construction Trial of Tele-medicine Integration System using Campus Network',
            'year': '2006',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-28,
 author = {Yoshihiro Kuroda and Makoto Hirai and Megumi Nakao and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Design and Systems Division Conference of Japan Society of Mechanical Engineers},
 pages = {333-334},
 title = {Evaluation of Organ Exclusion Simulator with Force Feedback Device},
 venue = {Nagoya/Japan},
 year = {2006}
}`
            },

  {
            'id': '369',
            'author': 'Hyongyong Kim, Tadamasa Takemura, Masahiro Hirose, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-27,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1243-1244},
 title = {A Way of Integrated Control QoS and Presentation of Transmission Data in Telemedicine Cockpit},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '370',
            'author': 'Tadamasa Takemura, Masahiro Hirose, Kazuya Okamoto, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Analysis of Adverse Effects using Medical Term Co-occurrence Structure from Incident Reports',
            'year': '2006',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-26,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1157-1160},
 title = {Preserving Evaluation-critical Features of Demonstrative Haptic Manipulation in Surgical VR},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '371',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Evaluation of Organ Exclusion Simulator with Force Feedback Device',
            'year': '2006',
            'book': 'Proceedings of Design and Systems Division Conference of Japan Society of Mechanical Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-25,
 author = {Yoshihiro Kuroda and Tadamasa Takemura and Naoto Kume and Kazuya Okamoto and Megumi Nakao and Kenta Hori and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1154-1155},
 title = {Design of Constructing System of Surgical Simulator from Meta Language Data Extracted from Surgical Manuals},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '372',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Way of Integrated Control QoS and Presentation of Transmission Data in Telemedicine Cockpit',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-24,
 author = {Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1151-1152},
 title = {Proposal of Speculative Operation for Haptic Interaction in Soft Tissue Rupture Simulator},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '373',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Preserving Evaluation-critical Features of Demonstrative Haptic Manipulation in Surgical VR',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-23,
 author = {Takashi Nakai and Takashi Tsukasa and Kenta Hori and Takashi Kawamura and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1245-1246},
 title = {Trial Analysis of Effect of Synchronization of Video and Sound on Tele-ausculation},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '374',
            'author': 'Yoshihiro Kuroda, Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Megumi Nakao, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Design of Constructing System of Surgical Simulator from Meta Language Data Extracted from Surgical Manuals',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-22,
 author = {Hiroyuki Yoshihara and Tomohiro Kuroda and Kinya Sakai and Kenji Arita and Toshiaki Suzuki and Katsuhiro Ohashi and Kenji Araki},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1069-1072},
 title = {A National Level Site Which Can Merge the Domestic Clinical Data Sites},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '375',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'Proposal of Speculative Operation for Haptic Interaction in Soft Tissue Rupture Simulator',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-21,
 author = {Hyongyong Kim and Tadamasa Takemura and Masahiro Hirose and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1269-1270},
 title = {Influence Evaluation to Hospital Management by Automatic Extraction of Medical Examination and Treatment Act Related to Medical Accident},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '376',
            'author': 'Takashi Nakai, Takashi Tsukasa, Kenta Hori, Takashi Kawamura, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Trial Analysis of Effect of Synchronization of Video and Sound on Tele-ausculation',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-20,
 author = {Sachiko Okada and Keisuke Nagase and Akiko Ito and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {370-371},
 title = {Development of Hospital Financial Status Analysis System Using Rile-Based Engine},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '377',
            'author': 'Hiroyuki Yoshihara, Tomohiro Kuroda, Kinya Sakai, Kenji Arita, Toshiaki Suzuki, Katsuhiro Ohashi, Kenji Araki',
            'title': 'A National Level Site Which Can Merge the Domestic Clinical Data Sites',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-2,
 author = {Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {653-654},
 title = {*** No English title in DB***},
 year = {2006}
}`
            },

  {
            'id': '378',
            'author': 'Hyongyong Kim, Tadamasa Takemura, Masahiro Hirose, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Influence Evaluation to Hospital Management by Automatic Extraction of Medical Examination and Treatment Act Related to Medical Accident',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-19,
 author = {Hiroyuki Yoshihara and Tomohiro Kuroda and Tadamasa Takemura and Keisuke Nagase and Junzo Sato and Harutoshi Yazaki and Yasuyuki Kato},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {337-338},
 title = {Approach of Electronic Clinical Record Data Recycling by End User Development Organization},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '379',
            'author': 'Sachiko Okada, Keisuke Nagase, Akiko Ito, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of Hospital Financial Status Analysis System Using Rile-Based Engine',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-18,
 author = {Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Keisuke Nagase and Nobuyuki Ashida and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {843-844},
 title = {Extraction of Numeric Information from Medical Documents},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '380',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-17,
 author = {Tatsuro Ishida and Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {303-304},
 title = {Development of Web Information Retrieval System Specialized for Medicine},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '381',
            'author': 'Hiroyuki Yoshihara, Tomohiro Kuroda, Tadamasa Takemura, Keisuke Nagase, Junzo Sato, Harutoshi Yazaki, Yasuyuki Kato',
            'title': 'Approach of Electronic Clinical Record Data Recycling by End User Development Organization',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-16,
 author = {Naoki Ohboshi and Hiroo Tamagawa and Yoshinobu Maeda and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {575-576},
 title = {Development of Treatment Support System with Wearable Computer},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '382',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Extraction of Numeric Information from Medical Documents',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-15,
 author = {Tomohiro Kuroda and Kazuya Okamoto and Tadamasa Takemura and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {583-584},
 title = {Trial Approach for New Coordinate System Suitable for Sign Information System},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '383',
            'author': 'Tatsuro Ishida, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Development of Web Information Retrieval System Specialized for Medicine',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-14,
 author = {Kenta Hori and Takashi Tsukasa and Takashi Nakai and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {61-62},
 title = {Development of Information Support Environment for Telemedicine},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '384',
            'author': 'Naoki Ohboshi, Hiroo Tamagawa, Yoshinobu Maeda, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of Treatment Support System with Wearable Computer',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-13,
 author = {Takatoshi Suenaga and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {51-52},
 title = {A Tele-ultrasound Diagnosis Supporting Environment - Tele-echo System},
 venue = {Sapporo/Japan},
 year = {2006}
}`
            },

  {
            'id': '385',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Trial Approach for New Coordinate System Suitable for Sign Information System',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-12,
 author = {Mikko Rissanen and Yoshihiro Kuroda and Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {205-206},
 title = {*** No English title in DB***},
 year = {2006}
}`
            },

  {
            'id': '386',
            'author': 'Kenta Hori, Takashi Tsukasa, Takashi Nakai, Tomohiro Kuroda',
            'title': 'Development of Information Support Environment for Telemedicine',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-11,
 author = {Yoshihiro Kuroda and Makoto Hirai and Megumi Nakao and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {364-365},
 title = {*** No English title in DB***},
 year = {2006}
}`
            },

  {
            'id': '387',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Tele-ultrasound Diagnosis Supporting Environment - Tele-echo System',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-10,
 author = {Tatsuro Ishida and Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {247-250},
 title = {*** No English title in DB***},
 year = {2006}
}`
            },

  {
            'id': '388',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-domestic-conferences-1,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {579},
 pages = {117-120},
 title = {Image Transmission System for Telemedicine},
 venue = {Miyako/Japan},
 volume = {105},
 year = {2006}
}`
            },

  {
            'id': '389',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2005-journal-papers-9,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori},
 journal = {Computer Methods and Programs in Biomedicine},
 number = {1},
 pages = {216-224},
 title = {Interaction Model between Elastic Objects for Haptic Feedback Considering Collisions of Soft Tissue},
 volume = {81},
 year = {2005}
}`
            },

  {
            'id': '390',
            'author': 'Tatsuro Ishida, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2005-journal-papers-8,
 author = {Kenta Hori and Tomohiro Kuroda and Hiroshi Oyama and Yasuhiko Ozaki and Takehiko Nakamura and Takashi Takahashi},
 journal = {Journal of Medical Systems},
 number = {6},
 pages = {661-670},
 title = {Improving Precise Positioning of Surgical Robotic Instruments by a Three-Side-View Presentation System on Telesurgery},
 volume = {29},
 year = {2005}
}`
            },

  {
            'id': '391',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Image Transmission System for Telemedicine',
            'year': '2006',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2005-journal-papers-7,
 author = {Osamu Okada and Naoki Ohboshi and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 journal = {Journal of Medical Systems},
 number = {4},
 pages = {379-389},
 title = {Electrinic Clinical Path System Based on Semistructured Data Model Using Personal Digital Assistant for Onsite Access},
 volume = {29},
 year = {2005}
}`
            },

  {
            'id': '392',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori',
            'title': 'Interaction Model between Elastic Objects for Haptic Feedback Considering Collisions of Soft Tissue',
            'year': '2005',
            'book': 'Computer Methods and Programs in Biomedicine',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2005-journal-papers-6,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {1},
 pages = {76-84},
 title = {Simulation of Soft Tissue Ablation for a VR Simulator},
 volume = {43},
 year = {2005}
}`
            },

  {
            'id': '393',
            'author': 'Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Yasuhiko Ozaki, Takehiko Nakamura, Takashi Takahashi',
            'title': 'Improving Precise Positioning of Surgical Robotic Instruments by a Three-Side-View Presentation System on Telesurgery',
            'year': '2005',
            'book': 'Journal of Medical Systems',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2005-journal-papers-5,
 author = {Ryuya Nadayoshi and Yoko Mitomi and Naoki Ohboshi and Tomohiro Kuroda and Naomi Sakihana and Takao Tachibana and Yoshiki Miyachi},
 journal = {Journal of Japanese Society of Pressure Ulcers},
 number = {1},
 pages = {76-84},
 title = {Development and Introduction of a Clinical Activity Supporting System for Pressure Ulcers based on a Web Application},
 volume = {7},
 year = {2005}
}`
            },

  {
            'id': '394',
            'author': 'Osamu Okada, Naoki Ohboshi, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Electrinic Clinical Path System Based on Semistructured Data Model Using Personal Digital Assistant for Onsite Access',
            'year': '2005',
            'book': 'Journal of Medical Systems',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2005-journal-papers-4,
 author = {Tadamasa Takemura and Shirou Manabe and Nobuhiro Nishiura and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara and Nobuyuki Ashida},
 journal = {Journal of eHealth Technology and Application},
 number = {1},
 pages = {171-175},
 title = {Development of a Psychiatric Care Information System based on Patient-Centered Concept},
 volume = {3},
 year = {2005}
}`
            },

  {
            'id': '395',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'Simulation of Soft Tissue Ablation for a VR Simulator',
            'year': '2005',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2005-journal-papers-3,
 author = {Megumi Nakao and Takakazu Watanabe and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {349-352},
 title = {Interactive 3D Region Extraction of Volume Data Using Deformable Boundary Object},
 volume = {111},
 year = {2005}
}`
            },

  {
            'id': '396',
            'author': 'Ryuya Nadayoshi, Yoko Mitomi, Naoki Ohboshi, Tomohiro Kuroda, Naomi Sakihana, Takao Tachibana, Yoshiki Miyachi',
            'title': 'Development and Introduction of a Clinical Activity Supporting System for Pressure Ulcers based on a Web Application',
            'year': '2005',
            'book': 'Journal of Japanese Society of Pressure Ulcers',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2005-journal-papers-2,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {273-276},
 title = {MVL: Medical VR Simulation Library},
 volume = {111},
 year = {2005}
}`
            },

  {
            'id': '397',
            'author': 'Tadamasa Takemura, Shirou Manabe, Nobuhiro Nishiura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara, Nobuyuki Ashida',
            'title': 'Development of a Psychiatric Care Information System based on Patient-Centered Concept',
            'year': '2005',
            'book': 'Journal of eHealth Technology and Application',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2005-journal-papers-10,
 author = {Megumi Nakao and Tomohiro Kuroda and Kotaro Minato},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {4},
 pages = {591-598},
 title = {Volumetric Mask and its Real-time Processing for Volume Interaction},
 volume = {10},
 year = {2005}
}`
            },

  {
            'id': '398',
            'author': 'Megumi Nakao, Takakazu Watanabe, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Interactive 3D Region Extraction of Volume Data Using Deformable Boundary Object',
            'year': '2005',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2005-journal-papers-1,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 journal = {Studies in Health Technology and Informatics},
 pages = {263-269},
 title = {FEM-Based Soft Tissue Destruction Model for Ablation Simulator},
 volume = {111},
 year = {2005}
}`
            },

  {
            'id': '399',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'MVL: Medical VR Simulation Library',
            'year': '2005',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2005-international-conferences-9,
 author = {Tadamasa Takemura and Nobuyuki Ashida and Kiyoko Makimoto and Teruo Kirikae and Kazuya Okamoto and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of IEEE Healthcom},
 doi = {10.1109/HEALTH.2005.1500503},
 pages = {456-459},
 title = {A Development of an Efficient Information Collecting and Retrieval System Using an Agent Technology to Specialized Area on World Wide Web for Infectious Disease},
 venue = {Busan/Korea},
 year = {2005}
}`
            },

  {
            'id': '400',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Volumetric Mask and its Real-time Processing for Volume Interaction',
            'year': '2005',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2005-international-conferences-8,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of International Conference on Complex Medical Engineering},
 pages = {283-286},
 title = {Ablation Simulator Based on FEM Soft Tissue Destruction Model},
 venue = {Takamatsu/Japan},
 year = {2005}
}`
            },

  {
            'id': '401',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'FEM-Based Soft Tissue Destruction Model for Ablation Simulator',
            'year': '2005',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2005-international-conferences-7,
 author = {Megumi Nakao and Tomohiro Kuroda and Kotaro Minato},
 booktitle = {Proceedings of International Conference on Complex Medical Engineering},
 pages = {277-282},
 title = {Advanced Volume Visualization for Interactive Extraction and Physics-based Modeling of Volume Data},
 venue = {Takamatsu/Japan},
 year = {2005}
}`
            },

  {
            'id': '402',
            'author': 'Tadamasa Takemura, Nobuyuki Ashida, Kiyoko Makimoto, Teruo Kirikae, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'A Development of an Efficient Information Collecting and Retrieval System Using an Agent Technology to Specialized Area on World Wide Web for Infectious Disease',
            'year': '2005',
            'book': 'Proceedings of IEEE Healthcom',
            'doi': 'https://doi.org/10.1109/HEALTH.2005.1500503',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-international-conferences-6,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of World HAPTICS},
 pages = {571-572},
 title = {Shape Perception with Friction Model for Indirect Touch},
 venue = {Pisa/Italy},
 year = {2005}
}`
            },

  {
            'id': '403',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'Ablation Simulator Based on FEM Soft Tissue Destruction Model',
            'year': '2005',
            'book': 'Proceedings of International Conference on Complex Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-international-conferences-5,
 author = {Tomohiro Kuroda and Yoshihiro Kuroda and Yoshito Tabata},
 booktitle = {Proceedings of IEEE Virtual Reality},
 title = {StrinGlove:a new VR-glove with hand posture recognition & Medical VR Simulator},
 venue = {Bonn/Germany},
 year = {2005}
}`
            },

  {
            'id': '404',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Advanced Volume Visualization for Interactive Extraction and Physics-based Modeling of Volume Data',
            'year': '2005',
            'book': 'Proceedings of International Conference on Complex Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-international-conferences-4,
 author = {Tadamasa Takemura and Shirou Manabe and Nobuhiro Nishiura and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara and Nobuyuki Ashida},
 booktitle = {Proceedings of APT Telemedicine Workshop},
 pages = {171-175},
 title = {Development of a Psychiatric Care Information System based on Patient-Centered Concept},
 venue = {Kuala Lumpur/Malaysia},
 year = {2005}
}`
            },

  {
            'id': '405',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Shape Perception with Friction Model for Indirect Touch',
            'year': '2005',
            'book': 'Proceedings of World HAPTICS',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-international-conferences-3,
 author = {Megumi Nakao and Takakazu Watanabe and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {349-352},
 title = {Interactive 3D Region Extraction of Volume Data Using Deformable Boundary Object},
 venue = {Newport Beach/USA},
 year = {2005}
}`
            },

  {
            'id': '406',
            'author': 'Tomohiro Kuroda, Yoshihiro Kuroda, Yoshito Tabata',
            'title': 'StrinGlove:a new VR-glove with hand posture recognition & Medical VR Simulator',
            'year': '2005',
            'book': 'Proceedings of IEEE Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-international-conferences-2,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {273-276},
 title = {MVL: Medical VR Simulation Library},
 venue = {Newport Beach/USA},
 year = {2005}
}`
            },

  {
            'id': '407',
            'author': 'Tadamasa Takemura, Shirou Manabe, Nobuhiro Nishiura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara, Nobuyuki Ashida',
            'title': 'Development of a Psychiatric Care Information System based on Patient-Centered Concept',
            'year': '2005',
            'book': 'Proceedings of APT Telemedicine Workshop',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-international-conferences-13,
 author = {Masahiro Hirose and Tadamasa Takemura and Yuko Adachi and Yasue Kuwabara and Yuichi Imanaka and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Conference on Quality in Health Care},
 title = {Extracting 'Drug Name' from Incident Reports about Medication Errors by Profession at a National University Hospital in Japan},
 venue = {Vancouber/Canada},
 year = {2005}
}`
            },

  {
            'id': '408',
            'author': 'Megumi Nakao, Takakazu Watanabe, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Interactive 3D Region Extraction of Volume Data Using Deformable Boundary Object',
            'year': '2005',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-international-conferences-12,
 author = {Mikko Rissanen and Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {647-656},
 title = {Framework for Annotation of Haptic Data in Simulated Surgical Procedures},
 venue = {Ghent/Belgium},
 year = {2005}
}`
            },

  {
            'id': '409',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'MVL: Medical VR Simulation Library',
            'year': '2005',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-international-conferences-11,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {ACM SIGGRAPH Poster},
 title = {Design and Implementation of MVL: Medical VR Simulation Library},
 venue = {Los Angels/California/USA},
 year = {2005}
}`
            },

  {
            'id': '410',
            'author': 'Masahiro Hirose, Tadamasa Takemura, Yuko Adachi, Yasue Kuwabara, Yuichi Imanaka, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Extracting \'Drug Name\' from Incident Reports about Medication Errors by Profession at a National University Hospital in Japan',
            'year': '2005',
            'book': 'Proceedings of International Conference on Quality in Health Care',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-international-conferences-10,
 author = {Megumi Nakao and Tomohiro Kuroda and Kotaro Minato},
 booktitle = {ACM SIGGRAPH Poster},
 title = {Volume Interaction with Voxels by Manipulating 3D Voxels},
 venue = {Los Angels/California/USA},
 year = {2005}
}`
            },

  {
            'id': '411',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Framework for Annotation of Haptic Data in Simulated Surgical Procedures',
            'year': '2005',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-international-conferences-1,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {263-269},
 title = {FEM-Based Soft Tissue Destruction Model for Ablation Simulator},
 venue = {Newport Beach/USA},
 year = {2005}
}`
            },

  {
            'id': '412',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Design and Implementation of MVL: Medical VR Simulation Library',
            'year': '2005',
            'book': 'ACM SIGGRAPH Poster',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-9,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {653-654},
 title = {Friction Force Display in Virtual Environment for Experiments of Indirect Shape Perception},
 venue = {Kyoto/Japan},
 year = {2005}
}`
            },

  {
            'id': '413',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Volume Interaction with Voxels by Manipulating 3D Voxels',
            'year': '2005',
            'book': 'ACM SIGGRAPH Poster',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-8,
 author = {Makoto Hirai and Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {651-652},
 title = {Prototyping of Palpation VR Simulator with a Glove-shaped Force Feedback Device},
 venue = {Kyoto/Japan},
 year = {2005}
}`
            },

  {
            'id': '414',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'FEM-Based Soft Tissue Destruction Model for Ablation Simulator',
            'year': '2005',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-7,
 author = {Yuong-Shin Chon and Tadamasa Takemura and Yoshiaki Nakagawa and Sachiko Okada and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {7-8},
 title = {Development of Hospital Cost Accounting Simulator},
 venue = {Kyoto/Japan},
 year = {2005}
}`
            },

  {
            'id': '415',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Friction Force Display in Virtual Environment for Experiments of Indirect Shape Perception',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-6,
 author = {Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Keisuke Nagase and Akira Takada and Koji Tanaka and Jingiu Guo and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {5-6},
 title = {Automatic Clustering of Medical Records in Semi-Structured Data},
 venue = {Kyoto/Japan},
 year = {2005}
}`
            },

  {
            'id': '416',
            'author': 'Makoto Hirai, Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Prototyping of Palpation VR Simulator with a Glove-shaped Force Feedback Device',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-5,
 author = {Kotaro Minato and Ken Toyoda and Akira Takada and Yukinori Itao and Tomohiro Kuroda and Yoshiaki Nose},
 booktitle = {Bio-Medical Engineering},
 pages = {153},
 title = {Panel Discussion: Seven Problems about Electronic Medical Record -The Secret of Success from Bitter Experience-},
 venue = {Tsukuba/Japan},
 volume = {43},
 year = {2005}
}`
            },

  {
            'id': '417',
            'author': 'Yuong-Shin Chon, Tadamasa Takemura, Yoshiaki Nakagawa, Sachiko Okada, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Development of Hospital Cost Accounting Simulator',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-4,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Katsuya Tanaka and Tomohiro Kuroda and Mamoru Mitsuishi and Takashi Takahashi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Ubiquitous Medical Symposium},
 pages = {70},
 title = {Interactive QoS Control of Video Stream for Telemedicine},
 venue = {Tokyo/Japan},
 year = {2005}
}`
            },

  {
            'id': '418',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Akira Takada, Koji Tanaka, Jingiu Guo, Hiroyuki Yoshihara',
            'title': 'Automatic Clustering of Medical Records in Semi-Structured Data',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-35,
 author = {Megumi Nakao and Tomohiro Kuroda and Kotaro Minato},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {238},
 title = {Volume Mask based Interactive Volume Deformation and Modeling System},
 venue = {Kumamoto/Japan},
 year = {2005}
}`
            },

  {
            'id': '419',
            'author': 'Kotaro Minato, Ken Toyoda, Akira Takada, Yukinori Itao, Tomohiro Kuroda, Yoshiaki Nose',
            'title': 'Panel Discussion: Seven Problems about Electronic Medical Record -The Secret of Success from Bitter Experience-',
            'year': '2005',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-34,
 author = {Mikko Rissanen and Naoto Kume and Yoshihiro Kuroda and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {237},
 title = {Annotation Framework for Simulated Surgical Manipulation},
 venue = {Kumamoto/Japan},
 year = {2005}
}`
            },

  {
            'id': '420',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': 'Interactive QoS Control of Video Stream for Telemedicine',
            'year': '2005',
            'book': 'Proceedings of Ubiquitous Medical Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-33,
 author = {Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {184},
 title = {Development Ubiquitous Hospital Information System using Networked Digital Camera and Mobile Terminal},
 venue = {Kumamoto/Japan},
 year = {2005}
}`
            },

  {
            'id': '421',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Volume Mask based Interactive Volume Deformation and Modeling System',
            'year': '2005',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-32,
 author = {Tadamasa Takemura and Masahiro Hirose and Kazuya Okamoto and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {184},
 title = {Automatic Classification of Incident/Accident Reports using Natural Language Processing},
 venue = {Kumamoto/Japan},
 year = {2005}
}`
            },

  {
            'id': '422',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Annotation Framework for Simulated Surgical Manipulation',
            'year': '2005',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-31,
 author = {Yoichi Kawakami and Shin Anei and Kosuke Sasai and Hiroshi Inada and Takahiro Kuchi and Tomohiro Kuroda and Norihiro Sakamoto and Tadamasa Takemura and Hiroshi Tanaka and Hiroo Tamagawa and Toshinari Nakano and Keunsik Park and Haruhiko Hiramatsu and Yasushi Matsumura and Masaki Miyamoto},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {962-965},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '423',
            'author': 'Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Development Ubiquitous Hospital Information System using Networked Digital Camera and Mobile Terminal',
            'year': '2005',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-30,
 author = {Yuong-Shin Chon and Tadamasa Takemura and Yoshiaki Nakagawa and Sachiko Okada and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {324-325},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '424',
            'author': 'Tadamasa Takemura, Masahiro Hirose, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Automatic Classification of Incident/Accident Reports using Natural Language Processing',
            'year': '2005',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-3,
 author = {Naoki Ohboshi and Tomohiro Kuroda and Ryuya Nadayoshi and Yoko Mitomi and Naomi Sakihana and Takao Tachibana and Yoshiki Miyachi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Ubiquitous Medical Symposium},
 pages = {69},
 title = {Development and Introduction of Web-based Ulcer Care Management System using PDA as Terminal},
 venue = {Tokyo/Japan},
 year = {2005}
}`
            },

  {
            'id': '425',
            'author': 'Yoichi Kawakami, Shin Anei, Kosuke Sasai, Hiroshi Inada, Takahiro Kuchi, Tomohiro Kuroda, Norihiro Sakamoto, Tadamasa Takemura, Hiroshi Tanaka, Hiroo Tamagawa, Toshinari Nakano, Keunsik Park, Haruhiko Hiramatsu, Yasushi Matsumura, Masaki Miyamoto',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-29,
 author = {Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {516-517},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '426',
            'author': 'Yuong-Shin Chon, Tadamasa Takemura, Yoshiaki Nakagawa, Sachiko Okada, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-28,
 author = {Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {684-685},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '427',
            'author': 'Naoki Ohboshi, Tomohiro Kuroda, Ryuya Nadayoshi, Yoko Mitomi, Naomi Sakihana, Takao Tachibana, Yoshiki Miyachi, Hiroyuki Yoshihara',
            'title': 'Development and Introduction of Web-based Ulcer Care Management System using PDA as Terminal',
            'year': '2005',
            'book': 'Proceedings of Ubiquitous Medical Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-27,
 author = {Naoki Ohboshi and Hiroo Tamagawa and Chigusa Katada and Yuko Shima and Masayuki Kawamoto and Tomohiro Kuroda and Taiji Sohmura and Yoshinobu Maeda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {672-675},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '428',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-26,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {13},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '429',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-25,
 author = {Mikko Rissanen and Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {14},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '430',
            'author': 'Naoki Ohboshi, Hiroo Tamagawa, Chigusa Katada, Yuko Shima, Masayuki Kawamoto, Tomohiro Kuroda, Taiji Sohmura, Yoshinobu Maeda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-24,
 author = {Megumi Nakao and Tomohiro Kuroda and Kotaro Minato},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {24},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '431',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-23,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {18},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '432',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-22,
 author = {Megumi Nakao and Tomohiro Kuroda and Kotaro Minato},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {437-440},
 title = {LiveVolume: A Volume Interaction Framework},
 venue = {Tokyo/Japan},
 year = {2005}
}`
            },

  {
            'id': '433',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-21,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {478},
 title = {Emerging Intuitive Interface based on Multi-Modal Interface for Surgical Cockpit},
 venue = {Osaka/Japan},
 year = {2005}
}`
            },

  {
            'id': '434',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-20,
 author = {Makoto Hirai and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {391-392},
 title = {A Learning Environment of Hand-based Manipulation of Elastic Bodies for Medical Procedure},
 venue = {Tokyo/Japan},
 year = {2005}
}`
            },

  {
            'id': '435',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'LiveVolume: A Volume Interaction Framework',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-2,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Kotaro Minato},
 booktitle = {Proceedings of Symposium of Tokyo University VR Laboratory},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '436',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Emerging Intuitive Interface based on Multi-Modal Interface for Surgical Cockpit',
            'year': '2005',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-19,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 title = {Developing Simulator on Medical VR Simulation Library MVL},
 venue = {Tokyo/Japan},
 year = {2005}
}`
            },

  {
            'id': '437',
            'author': 'Makoto Hirai, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Learning Environment of Hand-based Manipulation of Elastic Bodies for Medical Procedure',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-18,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {536-537},
 title = {Construction of Simulators with Medical VR Simulation Library: MVL},
 venue = {Tokyo/Japan},
 year = {2005}
}`
            },

  {
            'id': '438',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Kotaro Minato',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Symposium of Tokyo University VR Laboratory',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-17,
 author = {Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {229},
 title = {Extracting Technical Terms from Clinical Document Corpus using Knowledge obtained from Web},
 venue = {Osaka/Japan},
 year = {2005}
}`
            },

  {
            'id': '439',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Developing Simulator on Medical VR Simulation Library MVL',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-16,
 author = {Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {221-222},
 title = {Design of Distributed VR Simulation System with Physics-based Haptic Interaction},
 venue = {Tokyo/Japan},
 year = {2005}
}`
            },

  {
            'id': '440',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Construction of Simulators with Medical VR Simulation Library: MVL',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-15,
 author = {Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {230},
 title = {Context-Based Retrieval System for Similar Medical Practice Documents},
 year = {2005}
}`
            },

  {
            'id': '441',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Extracting Technical Terms from Clinical Document Corpus using Knowledge obtained from Web',
            'year': '2005',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-14,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {959-962},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '442',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'Design of Distributed VR Simulation System with Physics-based Haptic Interaction',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-13,
 author = {Tadamasa Takemura and Yuong-Shin Chon and Sachiko Okada and Yoshiaki Nakagawa and Kazuya Okamoto and Makoto Hirai and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {325-328},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '443',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Context-Based Retrieval System for Similar Medical Practice Documents',
            'year': '2005',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-12,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {202-104},
 title = {*** No English title in DB***},
 year = {2005}
}`
            },

  {
            'id': '444',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-11,
 author = {Yoshihiro Kuroda and Takakazu Watanabe and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology},
 title = {*** No English title in DB***},
 venue = {Tokyo/Japan},
 year = {2005}
}`
            },

  {
            'id': '445',
            'author': 'Tadamasa Takemura, Yuong-Shin Chon, Sachiko Okada, Yoshiaki Nakagawa, Kazuya Okamoto, Makoto Hirai, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-10,
 author = {Mikko Rissanen and Naoto Kume and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Ergonomics Society},
 pages = {110-111},
 title = {Dynamic Pressure Visualization for Mimicking Simulated Palpation of the Aorta},
 year = {2005}
}`
            },

  {
            'id': '446',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2005-domestic-conferences-1,
 author = {Tadamasa Takemura and Junzo Sato and Tomohiro Kuroda and Akiko Ito and Hisao Saijo and Yasuo Shitanishi and Sadao Nonaka and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {134-137},
 title = {Development of Web-based Hospital Management Information Viewer for Hospital Staffs based on Cost Accounting},
 venue = {Maebashi/Japan},
 year = {2005}
}`
            },

  {
            'id': '447',
            'author': 'Yoshihiro Kuroda, Takakazu Watanabe, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2004-journal-papers-8,
 author = {Masato Mori and Takashi Tsukasa and Kenta Hori and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {4},
 pages = {340-346},
 title = {Network QoS Control System Application for Telemedicine},
 volume = {42},
 year = {2004}
}`
            },

  {
            'id': '448',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Dynamic Pressure Visualization for Mimicking Simulated Palpation of the Aorta',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of Japanese Ergonomics Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2004-journal-papers-7,
 author = {Tomohiro Kuroda and Masayuki Harada and Takafumi Terada and Hiroshi Oyama},
 journal = {Medical Virtual Reality},
 number = {1},
 pages = {38-43},
 title = {Applying Shared-VR based Surgical Simulator for Medical Trial Study},
 volume = {3},
 year = {2004}
}`
            },

  {
            'id': '449',
            'author': 'Tadamasa Takemura, Junzo Sato, Tomohiro Kuroda, Akiko Ito, Hisao Saijo, Yasuo Shitanishi, Sadao Nonaka, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Development of Web-based Hospital Management Information Viewer for Hospital Staffs based on Cost Accounting',
            'year': '2005',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2004-journal-papers-6,
 author = {Katsuya Tanaka and Kenta Hori and Tomohiro Kuroda and Mamoru Mitsuishi},
 journal = {Japan Journal of Medical Informatics},
 number = {1},
 pages = {45-53},
 title = {Integrated Control of Tele-surgery Robot System using CORBA Middleware},
 volume = {24},
 year = {2004}
}`
            },

  {
            'id': '450',
            'author': 'Masato Mori, Takashi Tsukasa, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Network QoS Control System Application for Telemedicine',
            'year': '2004',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2004-journal-papers-5,
 author = {Naoki Ohboshi and Ryuya Nadayoshi and Yoko Mitomi and Tomohiro Kuroda and Naomi Sakihana and Takao Tachibana and Yoshiki Miyachi and Hiroyuki Yoshihara},
 journal = {Japan Journal of Medical Informatics},
 number = {1},
 pages = {99-109},
 title = {A Study of Electronic Treatment Planning System for Pressure Ulcers using Personal Digital Assistant},
 venue = {Research Paper},
 volume = {24},
 year = {2004}
}`
            },

  {
            'id': '451',
            'author': 'Tomohiro Kuroda, Masayuki Harada, Takafumi Terada, Hiroshi Oyama',
            'title': 'Applying Shared-VR based Surgical Simulator for Medical Trial Study',
            'year': '2004',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2004-journal-papers-4,
 author = {Megumi Nakao and Keiho Imanishi and Tomohiro Kuroda and Hiroshi Oyama},
 journal = {Studies in Health Technology and Informatics},
 pages = {265-271},
 title = {Practical Haptic Navigation with Clickable 3D Region Input Interface for Supporting Master-Slave Type Robotic Surgery},
 volume = {98},
 year = {2004}
}`
            },

  {
            'id': '452',
            'author': 'Katsuya Tanaka, Kenta Hori, Tomohiro Kuroda, Mamoru Mitsuishi',
            'title': 'Integrated Control of Tele-surgery Robot System using CORBA Middleware',
            'year': '2004',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2004-journal-papers-3,
 author = {Megumi Nakao and Tomohiro Kuroda and Masaru Komori and Hiroshi Oyama and Masashi Komeda},
 journal = {Studies in Health Technology and Informatics},
 pages = {262-264},
 title = {Physics-Based Preoperative Approach Planning Using Hybrid Virtual Bodies},
 volume = {98},
 year = {2004}
}`
            },

  {
            'id': '453',
            'author': 'Naoki Ohboshi, Ryuya Nadayoshi, Yoko Mitomi, Tomohiro Kuroda, Naomi Sakihana, Takao Tachibana, Yoshiki Miyachi, Hiroyuki Yoshihara',
            'title': 'A Study of Electronic Treatment Planning System for Pressure Ulcers using Personal Digital Assistant',
            'year': '2004',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2004-journal-papers-2,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 journal = {Studies in Health Technology and Informatics},
 pages = {183-189},
 title = {FEM-Based Interaction Model Between Elastic Objects for Indirect Palpation Simulator},
 volume = {98},
 year = {2004}
}`
            },

  {
            'id': '454',
            'author': 'Megumi Nakao, Keiho Imanishi, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'Practical Haptic Navigation with Clickable 3D Region Input Interface for Supporting Master-Slave Type Robotic Surgery',
            'year': '2004',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2004-journal-papers-1,
 author = {Eisuke Hanada and Mitsuru Mori and Hitoshi Onishi and Tomohiro Kuroda and Yuji Inoue and Kimio Kondo},
 journal = {Journal of Multimedia Aided Education Research},
 pages = {9-16},
 title = {Connection of Two-way Satellite Communication Systems for Broader-based Education Network Construction},
 venue = {Research Note},
 volume = {12},
 year = {2004}
}`
            },

  {
            'id': '455',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Hiroshi Oyama, Masashi Komeda',
            'title': 'Physics-Based Preoperative Approach Planning Using Hybrid Virtual Bodies',
            'year': '2004',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2004-international-conferences-8,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {670-677},
 title = {FEM-Based Soft Tissue Destruction Model for Ablation Training Simulator},
 venue = {Gifu/Japan},
 year = {2004}
}`
            },

  {
            'id': '456',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'FEM-Based Interaction Model Between Elastic Objects for Indirect Palpation Simulator',
            'year': '2004',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2004-international-conferences-7,
 author = {Megumi Nakao and Takakazu Watanabe and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {225-231},
 title = {3D Interactive Clipping for Flexible Visualization and Extraction of Volume Data},
 venue = {Gifu/Japan},
 year = {2004}
}`
            },

  {
            'id': '457',
            'author': 'Eisuke Hanada, Mitsuru Mori, Hitoshi Onishi, Tomohiro Kuroda, Yuji Inoue, Kimio Kondo',
            'title': 'Connection of Two-way Satellite Communication Systems for Broader-based Education Network Construction',
            'year': '2004',
            'book': 'Journal of Multimedia Aided Education Research',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2004-international-conferences-6,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {232-238},
 title = {Haptic Rendering Method of Friction Forces for Indirect Shape Perception},
 venue = {Gifu/Japan},
 year = {2004}
}`
            },

  {
            'id': '458',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'FEM-Based Soft Tissue Destruction Model for Ablation Training Simulator',
            'year': '2004',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-international-conferences-5,
 author = {Tomohiro Kuroda and Yoshito Tabata and Atsutoshi Goto and Hiroki Ikuta and Eiji Tsushima},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {324-331},
 title = {Consumer Price VR-glove possesses Hand Posture Recognition},
 venue = {Gifu/Japan},
 year = {2004}
}`
            },

  {
            'id': '459',
            'author': 'Megumi Nakao, Takakazu Watanabe, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '3D Interactive Clipping for Flexible Visualization and Extraction of Volume Data',
            'year': '2004',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-international-conferences-4,
 author = {Tomohiro Kuroda and Yoshito Tabata and Atsutoshi Goto and Hiroki Ikuta and Mikako Murakami},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {253-258},
 title = {Consumer price data-glove for sign language recognition},
 venue = {Oxford/UK},
 year = {2004}
}`
            },

  {
            'id': '460',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Haptic Rendering Method of Friction Forces for Indirect Shape Perception',
            'year': '2004',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-international-conferences-3,
 author = {Megumi Nakao and Keiho Imanishi and Tomohiro Kuroda and Hiroshi Oyama},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {265-271},
 title = {Practical Haptic Navigation with Clickable 3D Region Input Interface for Supporting Master-Slave Type Robotic Surgery},
 venue = {Newport Beach/USA},
 year = {2004}
}`
            },

  {
            'id': '461',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Atsutoshi Goto, Hiroki Ikuta, Eiji Tsushima',
            'title': 'Consumer Price VR-glove possesses Hand Posture Recognition',
            'year': '2004',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-international-conferences-2,
 author = {Megumi Nakao and Tomohiro Kuroda and Masaru Komori and Hiroshi Oyama and Masashi Komeda},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {262-264},
 title = {Physics-Based Preoperative Approach Planning Using Hybrid Virtual Bodies},
 venue = {Newport Beach/USA},
 year = {2004}
}`
            },

  {
            'id': '462',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Atsutoshi Goto, Hiroki Ikuta, Mikako Murakami',
            'title': 'Consumer price data-glove for sign language recognition',
            'year': '2004',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-international-conferences-1,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 booktitle = {Proceedings of Medicine Meets Virtual Reality},
 pages = {183-189},
 title = {FEM-Based Interaction Model Between Elastic Objects for Indirect Palpation Simulator},
 venue = {Newport Beach/USA},
 year = {2004}
}`
            },

  {
            'id': '463',
            'author': 'Megumi Nakao, Keiho Imanishi, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'Practical Haptic Navigation with Clickable 3D Region Input Interface for Supporting Master-Slave Type Robotic Surgery',
            'year': '2004',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-9,
 author = {Tomohiro Kuroda and Yoshito Tabata},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Sign Linguistics},
 pages = {40-41},
 title = {Development of Mpeg-4 Face & Body Animation Player for Sign Animation using Java 3D},
 venue = {Nakoya/Japan},
 year = {2004}
}`
            },

  {
            'id': '464',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Hiroshi Oyama, Masashi Komeda',
            'title': 'Physics-Based Preoperative Approach Planning Using Hybrid Virtual Bodies',
            'year': '2004',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-8,
 author = {Yoshito Tabata and Tomohiro Kuroda and Atsutoshi Goto},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Sign Linguistics},
 title = {Development of Data-glove equips Hand Gesture Recognizing Function},
 venue = {Nagoya/Japan},
 year = {2004}
}`
            },

  {
            'id': '465',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'FEM-Based Interaction Model Between Elastic Objects for Indirect Palpation Simulator',
            'year': '2004',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-7,
 author = {Takakazu Watanabe and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {365-366},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '466',
            'author': 'Tomohiro Kuroda, Yoshito Tabata',
            'title': 'Development of Mpeg-4 Face & Body Animation Player for Sign Animation using Java 3D',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-6,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Katsuya Tanaka and Tomohiro Kuroda and Mamoru Mitsuishi and Takashi Takahashi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {369-370},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '467',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Atsutoshi Goto',
            'title': 'Development of Data-glove equips Hand Gesture Recognizing Function',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-5,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Katsuya Tanaka and Tomohiro Kuroda and Mamoru Mitsuishi and Takashi Takahashi},
 booktitle = {Bio-Medical Engineering},
 pages = {667},
 title = {*** No English title in DB***},
 volume = {42},
 year = {2004}
}`
            },

  {
            'id': '468',
            'author': 'Takakazu Watanabe, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-4,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {371-372},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '469',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-33,
 author = {Takakazu Watanabe and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {981-982},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '470',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-32,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {370-371},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '471',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-31,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {372-373},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '472',
            'author': 'Takakazu Watanabe, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-30,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Katsuya Tanaka and Tomohiro Kuroda and Mamoru Mitsuishi and Takashi Takahashi and Hiroyuki Yoshihara},
 booktitle = {Jounal of Japan Society of Computer Aided Surgery},
 pages = {161-162},
 title = {*** No English title in DB***},
 venue = {Tokyo/Japan},
 year = {2004}
}`
            },

  {
            'id': '473',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-3,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {367-368},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '474',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-29,
 author = {Chie Kiyomitsu and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '475',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Jounal of Japan Society of Computer Aided Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-28,
 author = {Chie Kiyomitsu and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '476',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-27,
 author = {Yoichi Kawakami and Kosuke Sasai and Tomohiro Kuroda and Tadamasa Takemura and Hiroo Tamagawa and Toshinari Nakano and Keunsik Park and Haruhiko Hiramatsu and Yasushi Matsumura and Masaki Miyamoto},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '477',
            'author': 'Chie Kiyomitsu, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-26,
 author = {Tadamasa Takemura and Junzo Sato and Tomohiro Kuroda and Keisuke Nagase and Akira Takada and Koji Tanaka and Jingiu Guo and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '478',
            'author': 'Chie Kiyomitsu, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-25,
 author = {Yoichi Kawakami and Kosuke Sasai and Tomohiro Kuroda and Tadamasa Takemura and Hiroo Tamagawa and Toshinari Nakano and Keunsik Park and Haruhiko Hiramatsu and Yasushi Matsumura and Masaki Miyamoto},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '479',
            'author': 'Yoichi Kawakami, Kosuke Sasai, Tomohiro Kuroda, Tadamasa Takemura, Hiroo Tamagawa, Toshinari Nakano, Keunsik Park, Haruhiko Hiramatsu, Yasushi Matsumura, Masaki Miyamoto',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-24,
 author = {Chie Kiyomitsu and Tadamasa Takemura and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Technical Reports of IPSJ},
 number = {113},
 pages = {77-82},
 title = {Trial of Automatic Assessment of Pressure Ulcers using Image Processing},
 venue = {Yokohama/Japan},
 volume = {2004},
 year = {2004}
}`
            },

  {
            'id': '480',
            'author': 'Tadamasa Takemura, Junzo Sato, Tomohiro Kuroda, Keisuke Nagase, Akira Takada, Koji Tanaka, Jingiu Guo, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-23,
 author = {Takakazu Watanabe and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {949-952},
 title = {A Support Environment for Shape and Stiffness Modeling from 3D CT/MRI data},
 year = {2004}
}`
            },

  {
            'id': '481',
            'author': 'Yoichi Kawakami, Kosuke Sasai, Tomohiro Kuroda, Tadamasa Takemura, Hiroo Tamagawa, Toshinari Nakano, Keunsik Park, Haruhiko Hiramatsu, Yasushi Matsumura, Masaki Miyamoto',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-22,
 author = {Tomohiro Kuroda and Yoshito Tabata and Atsutoshi Goto and Hiroki Ikuta and Eiji Tsushima},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {969-972},
 title = {VR Glove Possessing Hand Posture Recognition},
 year = {2004}
}`
            },

  {
            'id': '482',
            'author': 'Chie Kiyomitsu, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Trial of Automatic Assessment of Pressure Ulcers using Image Processing',
            'year': '2004',
            'book': 'Technical Reports of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-21,
 author = {Takakazu Watanabe and Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {50-51},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '483',
            'author': 'Takakazu Watanabe, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Support Environment for Shape and Stiffness Modeling from 3D CT/MRI data',
            'year': '2004',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-20,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroyuki Yoshihara and Masaru Komori},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {48},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '484',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Atsutoshi Goto, Hiroki Ikuta, Eiji Tsushima',
            'title': 'VR Glove Possessing Hand Posture Recognition',
            'year': '2004',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-2,
 author = {Hirotsugu Minowa and Tetsuo Sato and Mikio Suga and Tadao Sugiura and Kotaro Minato and Tomohiro Kuroda},
 booktitle = {Bio-Medical Engineering},
 pages = {365},
 title = {*** No English title in DB***},
 volume = {42},
 year = {2004}
}`
            },

  {
            'id': '485',
            'author': 'Takakazu Watanabe, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-19,
 author = {Masato Mori and Takashi Tsukasa and Kenta Hori and Tomohiro Kuroda and Mamoru Mitsuishi and Kotaro Minato and Takashi Takahashi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {2},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '486',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-18,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Tetsuya Matsuda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {533-536},
 title = {MVL: Real-time Medical Virtual Reality Simulation Library},
 venue = {Kyoto/Japan},
 year = {2004}
}`
            },

  {
            'id': '487',
            'author': 'Hirotsugu Minowa, Tetsuo Sato, Mikio Suga, Tadao Sugiura, Kotaro Minato, Tomohiro Kuroda',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-17,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {10-11},
 title = {Toward Clinical Application of Distributed Mixed Reality},
 venue = {Kyoto/Japan},
 year = {2004}
}`
            },

  {
            'id': '488',
            'author': 'Masato Mori, Takashi Tsukasa, Kenta Hori, Tomohiro Kuroda, Mamoru Mitsuishi, Kotaro Minato, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-16,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Katsuya Tanaka and Tomohiro Kuroda and Mamoru Mitsuishi and Takashi Takahashi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {15},
 title = {QoS Control of Supporting Information for Robotic Tele-surgery},
 venue = {Kyoto/Japan},
 year = {2004}
}`
            },

  {
            'id': '489',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Tetsuya Matsuda, Hiroyuki Yoshihara',
            'title': 'MVL: Real-time Medical Virtual Reality Simulation Library',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-15,
 author = {Yoshito Tabata and Tomohiro Kuroda and Atsutoshi Goto and Hiroki Ikuta and Eiji Tsushima},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {137-138},
 title = {Consumer Price Glove-based Input Device with Hand Posture Recognition},
 venue = {Kyoto/Japan},
 year = {2004}
}`
            },

  {
            'id': '490',
            'author': 'Tomohiro Kuroda',
            'title': 'Toward Clinical Application of Distributed Mixed Reality',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-14,
 author = {Yoshito Tabata and Tomohiro Kuroda and Atsutoshi Goto and Hiroki Ikuta and Eiji Tsushima},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {137-138},
 title = {Consumer Price Glove-based Input Device with Hand Posture Recognition},
 venue = {Kyoto/Japan},
 year = {2004}
}`
            },

  {
            'id': '491',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': 'QoS Control of Supporting Information for Robotic Tele-surgery',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-13,
 author = {Megumi Nakao and Takakazu Watanabe and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {249-252},
 title = {Interactive Extraction of 3D Region for Volume Data},
 venue = {Kyoto/Japan},
 year = {2004}
}`
            },

  {
            'id': '492',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Atsutoshi Goto, Hiroki Ikuta, Eiji Tsushima',
            'title': 'Consumer Price Glove-based Input Device with Hand Posture Recognition',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-12,
 author = {Masayuki Harada and Shuichi Takahashi and Takafumi Terada and Tomohiro Kuroda and Hiroshi Oyama},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {525-528},
 title = {The development of a Shared-VR based Surgery Simulator for Educational Purposes},
 venue = {Kyoto/Japan},
 year = {2004}
}`
            },

  {
            'id': '493',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Atsutoshi Goto, Hiroki Ikuta, Eiji Tsushima',
            'title': 'Consumer Price Glove-based Input Device with Hand Posture Recognition',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-11,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Tetsuya Matsuda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {373-376},
 title = {Haptic Rendering of Friction with Elastic Objects for Shape Recognition},
 venue = {Kyoto/Japan},
 year = {2004}
}`
            },

  {
            'id': '494',
            'author': 'Megumi Nakao, Takakazu Watanabe, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Interactive Extraction of 3D Region for Volume Data',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-10,
 author = {Takashi Tsukasa and Masato Mori and Kenta Hori and Katsuya Tanaka and Tomohiro Kuroda and Mamoru Mitsuishi and Takashi Takahashi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of JAMI Telemedicine Research Meeting},
 pages = {82-83},
 title = {*** No English title in DB***},
 year = {2004}
}`
            },

  {
            'id': '495',
            'author': 'Masayuki Harada, Shuichi Takahashi, Takafumi Terada, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'The development of a Shared-VR based Surgery Simulator for Educational Purposes',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2004-domestic-conferences-1,
 author = {Naomi Sakihana and Yoko Mitomi and Ryuya Nadayoshi and Naoki Ohboshi and Kazumi Hara and Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {15-18},
 title = {Computerization of Ulcer Care Plan Sheet for Supporting Ulcer Care},
 venue = {Tsu/Japan},
 year = {2004}
}`
            },

  {
            'id': '496',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Tetsuya Matsuda, Hiroyuki Yoshihara',
            'title': 'Haptic Rendering of Friction with Elastic Objects for Shape Recognition',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2003-journal-papers-9,
 author = {Keiho Imanishi and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {3},
 pages = {321-328},
 title = {Haptic Navigation Method for Improving Safety of Master-Slave Type Robotic Surgery},
 volume = {8},
 year = {2003}
}`
            },

  {
            'id': '497',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of JAMI Telemedicine Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2003-journal-papers-8,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Takashi Takahashi},
 journal = {IPSJ Journal},
 number = {8},
 pages = {2255-2265},
 title = {Physically Based Fine and Interactive Soft Tissue Cutting},
 volume = {44},
 year = {2003}
}`
            },

  {
            'id': '498',
            'author': 'Naomi Sakihana, Yoko Mitomi, Ryuya Nadayoshi, Naoki Ohboshi, Kazumi Hara, Tomohiro Kuroda',
            'title': 'Computerization of Ulcer Care Plan Sheet for Supporting Ulcer Care',
            'year': '2004',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2003-journal-papers-7,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {2},
 pages = {155-162},
 title = {Interaction Model between Elastic Objects for Organ-organ Contact Simulation},
 venue = {Best paper Award of VRSJ},
 volume = {8},
 year = {2003}
}`
            },

  {
            'id': '499',
            'author': 'Keiho Imanishi, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'Haptic Navigation Method for Improving Safety of Master-Slave Type Robotic Surgery',
            'year': '2003',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2003-journal-papers-6,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Genichi Sakaguchi and Masashi Komeda},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {2},
 pages = {163-170},
 title = {Supporting Surgical Planning with Simulation of Tissue Cutting and Opening Incision},
 volume = {8},
 year = {2003}
}`
            },

  {
            'id': '500',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Physically Based Fine and Interactive Soft Tissue Cutting',
            'year': '2003',
            'book': 'IPSJ Journal',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2003-journal-papers-5,
 author = {Mikako Murakami and Toshitaka Tateishi and Masataka Imura and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {Systems, Control and Information},
 number = {6},
 pages = {287-294},
 title = {E-cane with Situation Presumption for the Blind},
 volume = {16},
 year = {2003}
}`
            },

  {
            'id': '501',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'Interaction Model between Elastic Objects for Organ-organ Contact Simulation',
            'year': '2003',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2003-journal-papers-4,
 author = {Koichi Minami and Tomi Korpipaa and Masataka Imura and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {Entertainment Computing: Technologies and Applications},
 pages = {495-502},
 title = {A Distributed MR Transporter for Networked Collaboration},
 year = {2003}
}`
            },

  {
            'id': '502',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Genichi Sakaguchi, Masashi Komeda',
            'title': 'Supporting Surgical Planning with Simulation of Tissue Cutting and Opening Incision',
            'year': '2003',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2003-journal-papers-3,
 author = {Yasuhiro Yamamoto and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Genichi Sakaguchi and Masashi Komeda and Takashi Takahashi},
 journal = {Transactions on the Institute of Electrical Engineers of Japan E},
 number = {3},
 pages = {85-92},
 title = {Palpation Simulator of Beating Aorta for Cardiovascular Surgery Training},
 volume = {123},
 year = {2003}
}`
            },

  {
            'id': '503',
            'author': 'Mikako Murakami, Toshitaka Tateishi, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'E-cane with Situation Presumption for the Blind',
            'year': '2003',
            'book': 'Systems, Control and Information',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2003-journal-papers-2,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 journal = {Medical Virtual Reality},
 number = {1},
 pages = {43-49},
 title = {Framework of VR Palpation Simulation based on Force Display},
 volume = {2},
 year = {2003}
}`
            },

  {
            'id': '504',
            'author': 'Koichi Minami, Tomi Korpipaa, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Distributed MR Transporter for Networked Collaboration',
            'year': '2003',
            'book': 'Entertainment Computing: Technologies and Applications',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2003-journal-papers-1,
 author = {Yoshihiro Yasumuro and Mikako Murakami and Masataka Imura and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {Biomedical Simulation},
 pages = {409-421},
 title = {E-Cane with Situation Presumption for the Visually Impaired},
 volume = {2615},
 year = {2003}
}`
            },

  {
            'id': '505',
            'author': 'Yasuhiro Yamamoto, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Genichi Sakaguchi, Masashi Komeda, Takashi Takahashi',
            'title': 'Palpation Simulator of Beating Aorta for Cardiovascular Surgery Training',
            'year': '2003',
            'book': 'Transactions on the Institute of Electrical Engineers of Japan E',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2003-international-conferences-9,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama},
 booktitle = {Proceedings of International Conference on Artificial Reality and Tele-existence},
 pages = {209-214},
 title = {A Haptic Navigation System for Supporting Master-Slave Robotic Surgery},
 venue = {Tokyo/Japan},
 year = {2003}
}`
            },

  {
            'id': '506',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'Framework of VR Palpation Simulation based on Force Display',
            'year': '2003',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2003-international-conferences-8,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 booktitle = {Proceedings of International Conference on Artificial Reality and Tele-existence},
 pages = {148-153},
 title = {Interaction Model between Elastic Objects for Accurate Haptic Display},
 venue = {Tokyo/Japan},
 year = {2003}
}`
            },

  {
            'id': '507',
            'author': 'Yoshihiro Yasumuro, Mikako Murakami, Masataka Imura, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'E-Cane with Situation Presumption for the Visually Impaired',
            'year': '2003',
            'book': 'Biomedical Simulation',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2003-international-conferences-7,
 author = {Megumi Nakao and Tomohiro Kuroda and Masaru Komori and Hiroshi Oyama},
 booktitle = {Proceedings of International Conference on Artificial Reality and Tele-existence},
 pages = {203-208},
 title = {Evaluation and User Study of Haptic Simulator for Learning Palpation in Cardiovascular Surgery},
 venue = {Tokyo/Japan},
 year = {2003}
}`
            },

  {
            'id': '508',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'A Haptic Navigation System for Supporting Master-Slave Robotic Surgery',
            'year': '2003',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-international-conferences-6,
 author = {Yoshito Tabata and Tomohiro Kuroda and Atsutoshi Goto and Kunihiro Chihara},
 booktitle = {Proceedings of Polish-Japanese Symposium on Bio-Medical Engineering},
 pages = {16-17},
 title = {Development of Intelligent Glove-based Input Device Measuring Both Flexion and Touch},
 venue = {Kyoto/Japan},
 year = {2003}
}`
            },

  {
            'id': '509',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'Interaction Model between Elastic Objects for Accurate Haptic Display',
            'year': '2003',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-international-conferences-5,
 author = {Mikako Murakami and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Concurrent Engineering: Advanced Design, Production and Management Systems},
 pages = {989-994},
 title = {Modifier Representation in Sign Animation},
 venue = {Madeira/Portugal},
 year = {2003}
}`
            },

  {
            'id': '510',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Hiroshi Oyama',
            'title': 'Evaluation and User Study of Haptic Simulator for Learning Palpation in Cardiovascular Surgery',
            'year': '2003',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-international-conferences-4,
 author = {Yoshihiro Yasumuro and Mikako Murakami and Masataka Imura and Yoshitsugu Manabe and Kunihiro Chihara and Tomohiro Kuroda},
 booktitle = {Lecture Notes in Computer Science},
 pages = {257-258},
 title = {E-Cane: Look before You Step},
 venue = {Crete/Greece},
 year = {2003}
}`
            },

  {
            'id': '511',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Atsutoshi Goto, Kunihiro Chihara',
            'title': 'Development of Intelligent Glove-based Input Device Measuring Both Flexion and Touch',
            'year': '2003',
            'book': 'Proceedings of Polish-Japanese Symposium on Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-international-conferences-3,
 author = {Mikako Murakami and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Lecture Notes in Computer Science},
 pages = {249-250},
 title = {Merchandise Information Service for Visually Impaired People Using Barcode},
 venue = {Crete/Greece},
 year = {2003}
}`
            },

  {
            'id': '512',
            'author': 'Mikako Murakami, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Modifier Representation in Sign Animation',
            'year': '2003',
            'book': 'Proceedings of Concurrent Engineering: Advanced Design, Production and Management Systems',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-international-conferences-2,
 author = {Kaori Fujiwara and Tomohiro Kuroda},
 booktitle = {Lecture Notes in Computer Science},
 pages = {217-258},
 title = {Description Method of Surgical Operation for Intra-operative Support},
 venue = {Crete/Greece},
 year = {2003}
}`
            },

  {
            'id': '513',
            'author': 'Yoshihiro Yasumuro, Mikako Murakami, Masataka Imura, Yoshitsugu Manabe, Kunihiro Chihara, Tomohiro Kuroda',
            'title': 'E-Cane: Look before You Step',
            'year': '2003',
            'book': 'Lecture Notes in Computer Science',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-international-conferences-1,
 author = {Koichi Minami and Yoshihiro Yasumuro and Masataka Imura and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of CREST Workshop on Advanced Computing and Communicating Techniques for Wearable Information Playing},
 pages = {66-71},
 title = {Shared MR Space Construction with Wearable PC Users},
 venue = {Ikoma/Japan},
 year = {2003}
}`
            },

  {
            'id': '514',
            'author': 'Mikako Murakami, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Merchandise Information Service for Visually Impaired People Using Barcode',
            'year': '2003',
            'book': 'Lecture Notes in Computer Science',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-9,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Masaru Komori and Tetsuya Matsuda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {537-538},
 title = {Evaluation of Physics-based Interaction Model between Elastic Objects Representing Collisions of Multiple Organs},
 venue = {Kyoto/Japan},
 year = {2003}
}`
            },

  {
            'id': '515',
            'author': 'Kaori Fujiwara, Tomohiro Kuroda',
            'title': 'Description Method of Surgical Operation for Intra-operative Support',
            'year': '2003',
            'book': 'Lecture Notes in Computer Science',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-8,
 author = {Koichi Minami and Masataka Imura and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {291-292},
 title = {Punch3D - An Interactive Environment Modeling Method for In-door Callaboration},
 venue = {Kyoto/Japan},
 year = {2003}
}`
            },

  {
            'id': '516',
            'author': 'Koichi Minami, Yoshihiro Yasumuro, Masataka Imura, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Shared MR Space Construction with Wearable PC Users',
            'year': '2003',
            'book': 'Proceedings of CREST Workshop on Advanced Computing and Communicating Techniques for Wearable Information Playing',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-7,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {297-298},
 title = {Usability Evaluation of the Hand-Pointing System for Wearable Computers},
 venue = {Kyoto/Japan},
 year = {2003}
}`
            },

  {
            'id': '517',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Tetsuya Matsuda',
            'title': 'Evaluation of Physics-based Interaction Model between Elastic Objects Representing Collisions of Multiple Organs',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-6,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Masaru Komori},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {533-534},
 title = {A Proposal of Soft Tissue Model of Ablation},
 venue = {Kyoto/Japan},
 year = {2003}
}`
            },

  {
            'id': '518',
            'author': 'Koichi Minami, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Punch3D - An Interactive Environment Modeling Method for In-door Callaboration',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-5,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori},
 booktitle = {Proceedings of Annual Conference of IPSJ},
 number = {5},
 pages = {371-374},
 title = {*** No English title in DB***},
 year = {2003}
}`
            },

  {
            'id': '519',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Usability Evaluation of the Hand-Pointing System for Wearable Computers',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-4,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 booktitle = {Proceedings of Annual Conference of IPSJ},
 number = {5},
 pages = {379-382},
 title = {*** No English title in DB***},
 year = {2003}
}`
            },

  {
            'id': '520',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Masaru Komori',
            'title': 'A Proposal of Soft Tissue Model of Ablation',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-3,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 booktitle = {Proceedings of Annual Conference of IPSJ},
 number = {5},
 pages = {375-378},
 title = {*** No English title in DB***},
 year = {2003}
}`
            },

  {
            'id': '521',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-28,
 author = {Yoshitsugu Manabe and Koichi Minami and Muneyuki Sakata and Hiroshi Sasaki and Masataka Imura and Yoshihiro Yasumuro and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {1058-1059},
 title = {*** No English title in DB***},
 year = {2003}
}`
            },

  {
            'id': '522',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-27,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Masaru Komori},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {954-955},
 title = {*** No English title in DB***},
 year = {2003}
}`
            },

  {
            'id': '523',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-26,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {958-959},
 title = {*** No English title in DB***},
 year = {2003}
}`
            },

  {
            'id': '524',
            'author': 'Yoshitsugu Manabe, Koichi Minami, Muneyuki Sakata, Hiroshi Sasaki, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-25,
 author = {Megumi Nakao and Tomohiro Kuroda and Masaru Komori and Hiroshi Oyama},
 booktitle = {Proceedings of System Integration Division of Society of Instruments and Control Engineers},
 pages = {960-961},
 title = {*** No English title in DB***},
 year = {2003}
}`
            },

  {
            'id': '525',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-24,
 author = {Tomohiro Kuroda and Masayuki Harada and Takafumi Terada and Hiroshi Oyama},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {18},
 title = {Applying Shared VR Simulator for Surgery Education from Remote Site},
 venue = {Tokyo/Japan},
 year = {2003}
}`
            },

  {
            'id': '526',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-23,
 author = {Takashi Tsukasa and Kenta Hori and Katsuya Tanaka and Tomohiro Kuroda and Mamoru Mitsuishi and Takashi Takahashi},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {13},
 title = {Integrated Application Level QoS Control for Tele-medicine},
 venue = {Tokyo/Japan},
 year = {2003}
}`
            },

  {
            'id': '527',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Hiroshi Oyama',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-22,
 author = {Tadamasa Takemura and Koji Tanaka and Jingiu Guo and Junzo Sato and Akira Takada and Tomohiro Kuroda and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {437-438},
 title = {*** No English title in DB***},
 volume = {23},
 year = {2003}
}`
            },

  {
            'id': '528',
            'author': 'Tomohiro Kuroda, Masayuki Harada, Takafumi Terada, Hiroshi Oyama',
            'title': 'Applying Shared VR Simulator for Surgery Education from Remote Site',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-21,
 author = {Ryuya Nadayoshi and Yoko Mitomi and Naoki Ohboshi and Tomohiro Kuroda and Naomi Sakihana and Takao Tachibana and Yoshiki Miyachi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {41-43},
 title = {*** No English title in DB***},
 volume = {23},
 year = {2003}
}`
            },

  {
            'id': '529',
            'author': 'Takashi Tsukasa, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi',
            'title': 'Integrated Application Level QoS Control for Tele-medicine',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-20,
 author = {Osamu Okada and Naoki Ohboshi and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Technical Reports of IPSJ},
 number = {49},
 pages = {145-150},
 title = {Development of Electronic Clinical Path System using PDA as Inputting Device},
 venue = {Tokushima/Japan},
 year = {2003}
}`
            },

  {
            'id': '530',
            'author': 'Tadamasa Takemura, Koji Tanaka, Jingiu Guo, Junzo Sato, Akira Takada, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-2,
 author = {Keiho Imanishi and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama},
 booktitle = {Proceedings of Annual Conference of IPSJ},
 number = {4},
 pages = {179-180},
 title = {*** No English title in DB***},
 year = {2003}
}`
            },

  {
            'id': '531',
            'author': 'Ryuya Nadayoshi, Yoko Mitomi, Naoki Ohboshi, Tomohiro Kuroda, Naomi Sakihana, Takao Tachibana, Yoshiki Miyachi, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-19,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 booktitle = {Bio-Medical Engineering},
 pages = {118},
 title = {Rectal Palpation Simulator based on Virtual Reality in Urology},
 venue = {Seika/Japan},
 volume = {41},
 year = {2003}
}`
            },

  {
            'id': '532',
            'author': 'Osamu Okada, Naoki Ohboshi, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of Electronic Clinical Path System using PDA as Inputting Device',
            'year': '2003',
            'book': 'Technical Reports of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-18,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Masaru Komori},
 booktitle = {Bio-Medical Engineering},
 pages = {119},
 title = {Development of Soft Tissue Model of Ablation},
 venue = {Seika/Japan},
 volume = {41},
 year = {2003}
}`
            },

  {
            'id': '533',
            'author': 'Keiho Imanishi, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-17,
 author = {Megumi Nakao and Tomohiro Kuroda and Tetsuya Matsuda and Masashi Komeda},
 booktitle = {Bio-Medical Engineering},
 pages = {149},
 title = {Supporting Planning of Surgical Approach in Cardiovascular Surgery},
 venue = {Encouraging Award of JSMBE},
 volume = {41},
 year = {2003}
}`
            },

  {
            'id': '534',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'Rectal Palpation Simulator based on Virtual Reality in Urology',
            'year': '2003',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-16,
 author = {Kenta Hori and Katsuya Tanaka and Yasunari Suzuki and Tomohiro Kuroda and Yoshiki Arakawa and Mamoru Mitsuishi and Takashi Takahashi},
 booktitle = {Bio-Medical Engineering},
 pages = {150},
 title = {Information Transfer and Display for Surgical Cockpit System},
 venue = {Seika/Japan},
 volume = {41},
 year = {2003}
}`
            },

  {
            'id': '535',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Masaru Komori',
            'title': 'Development of Soft Tissue Model of Ablation',
            'year': '2003',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-15,
 author = {Ryuya Nadayoshi and Yoko Mitomi and Naoki Ohboshi and Tomohiro Kuroda and Naomi Sakihana and Takao Tachibana and Yoshiki Miyachi and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Human Interface Symposium},
 title = {Development of Electronic Treatment Planning System using Mobile Computer},
 venue = {Tokyo/Japan},
 year = {2003}
}`
            },

  {
            'id': '536',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Tetsuya Matsuda, Masashi Komeda',
            'title': 'Supporting Planning of Surgical Approach in Cardiovascular Surgery',
            'year': '2003',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-14,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {559-562},
 title = {Development of Rectal Palpation Simulator based on an Interaction Model between Elastic Objects},
 venue = {Gifu/Japan},
 year = {2003}
}`
            },

  {
            'id': '537',
            'author': 'Kenta Hori, Katsuya Tanaka, Yasunari Suzuki, Tomohiro Kuroda, Yoshiki Arakawa, Mamoru Mitsuishi, Takashi Takahashi',
            'title': 'Information Transfer and Display for Surgical Cockpit System',
            'year': '2003',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-13,
 author = {Naoto Kume and Megumi Nakao and Tomohiro Kuroda and Masaru Komori},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {195-198},
 title = {VR-based Simulation of Ablation using Deformable Soft Tissue Destruction Model},
 venue = {Gifu/Japan},
 year = {2003}
}`
            },

  {
            'id': '538',
            'author': 'Ryuya Nadayoshi, Yoko Mitomi, Naoki Ohboshi, Tomohiro Kuroda, Naomi Sakihana, Takao Tachibana, Yoshiki Miyachi, Hiroyuki Yoshihara',
            'title': 'Development of Electronic Treatment Planning System using Mobile Computer',
            'year': '2003',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-12,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masashi Komeda},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {205-208},
 title = {VR Simulation for Preoperative Planning using Hybrid Mesh and Volume based Virtual Human},
 venue = {Gifu/Japan},
 year = {2003}
}`
            },

  {
            'id': '539',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'Development of Rectal Palpation Simulator based on an Interaction Model between Elastic Objects',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-11,
 author = {Yoshihiro Kuroda and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {241},
 title = {*** No English title in DB***},
 year = {2003}
}`
            },

  {
            'id': '540',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Masaru Komori',
            'title': 'VR-based Simulation of Ablation using Deformable Soft Tissue Destruction Model',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-10,
 author = {Kenta Hori and Katsuya Tanaka and Tomohiro Kuroda and Yasunari Suzuki and Yoshiki Arakawa and Mamoru Mitsuishi and Takashi Takahashi},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {212},
 title = {Surgical Cockpit System for Information Suport in Telemedicine},
 year = {2003}
}`
            },

  {
            'id': '541',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masashi Komeda',
            'title': 'VR Simulation for Preoperative Planning using Hybrid Mesh and Volume based Virtual Human',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2003-domestic-conferences-1,
 author = {Kaori Fujiwara and Tomohiro Kuroda and Hiroshi Oyama},
 booktitle = {Proceedings of Annual Conference of IPSJ},
 number = {4},
 pages = {299-300},
 title = {*** No English title in DB***},
 year = {2003}
}`
            },

  {
            'id': '542',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2002-journal-papers-9,
 author = {Tomohiro Kuroda and Kenta Hori and Hiroshi Oyama},
 journal = {Jounal of Japan Society of Computer Aided Surgery},
 number = {4},
 pages = {339-343},
 title = {Toward Information Supported Telemedicine; Development of Collaborative Communication and Supporting System for Telesurgery},
 volume = {4},
 year = {2002}
}`
            },

  {
            'id': '543',
            'author': 'Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Yasunari Suzuki, Yoshiki Arakawa, Mamoru Mitsuishi, Takashi Takahashi',
            'title': 'Surgical Cockpit System for Information Suport in Telemedicine',
            'year': '2003',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2002-journal-papers-8,
 author = {Kenta Hori and Yasuhiko Ozaki and Tomohiro Kuroda and Hiroshi Oyama and Takashi Takahashi},
 journal = {Medical Virtual Reality},
 number = {1},
 pages = {58-63},
 title = {Factor of Skill Difference on Tele-robotic Surgery},
 volume = {1},
 year = {2002}
}`
            },

  {
            'id': '544',
            'author': 'Kaori Fujiwara, Tomohiro Kuroda, Hiroshi Oyama',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2002-journal-papers-7,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Genichi Sakaguchi and Masashi Komeda and Takashi Takahashi},
 journal = {Medical Virtual Reality},
 number = {1},
 pages = {49-57},
 title = {Decision Support System of Surgical Approaches with an Adaptive Physics-Based Model},
 volume = {1},
 year = {2002}
}`
            },

  {
            'id': '545',
            'author': 'Tomohiro Kuroda, Kenta Hori, Hiroshi Oyama',
            'title': 'Toward Information Supported Telemedicine; Development of Collaborative Communication and Supporting System for Telesurgery',
            'year': '2002',
            'book': 'Jounal of Japan Society of Computer Aided Surgery',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2002-journal-papers-6,
 author = {Peter Antoniac and Petri Pulli and Tomohiro Kuroda and Dan Bendas and Seamus Hickey and Hiroshi Sasaki},
 journal = {Wireless Personal Communications},
 pages = {161-174},
 title = {Wireless User Perspectives in Europe-HandSmart Mediaphone Interface},
 volume = {22},
 year = {2002}
}`
            },

  {
            'id': '546',
            'author': 'Kenta Hori, Yasuhiko Ozaki, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'Factor of Skill Difference on Tele-robotic Surgery',
            'year': '2002',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2002-journal-papers-5,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {3},
 pages = {393-401},
 title = {Hand-menu System: A Deviceless Virtual Input Interface for Wearable Computer},
 volume = {7},
 year = {2002}
}`
            },

  {
            'id': '547',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Genichi Sakaguchi, Masashi Komeda, Takashi Takahashi',
            'title': 'Decision Support System of Surgical Approaches with an Adaptive Physics-Based Model',
            'year': '2002',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2002-journal-papers-4,
 author = {Yoshiyuki Kojima and Yoshihiro Yasumuro and Tomohiro Kuroda and Masataka Imura and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {3},
 pages = {313-322},
 title = {Clip-Interface: A Human Interface for a 3D Workspace with Wearable PC},
 volume = {7},
 year = {2002}
}`
            },

  {
            'id': '548',
            'author': 'Peter Antoniac, Petri Pulli, Tomohiro Kuroda, Dan Bendas, Seamus Hickey, Hiroshi Sasaki',
            'title': 'Wireless User Perspectives in Europe-HandSmart Mediaphone Interface',
            'year': '2002',
            'book': 'Wireless Personal Communications',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2002-journal-papers-3,
 author = {Koichi Minami and Tomi Korpipaa and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {Journal of Human Interface Society},
 number = {3},
 pages = {159-165},
 title = {A Network Protocol for Distributed Design Work Support},
 volume = {4},
 year = {2002}
}`
            },

  {
            'id': '549',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Hand-menu System: A Deviceless Virtual Input Interface for Wearable Computer',
            'year': '2002',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2002-journal-papers-2,
 author = {Kenta Hori and Yasuhiko Ozaki and Takehiko Nakamura and Tomohiro Kuroda and Hiroshi Oyama and Takashi Takahashi},
 journal = {Japan Journal of Medical Informatics},
 number = {3},
 pages = {259-266},
 title = {Introducing Elevation View of Operating Field to Tele-robotic Surgery},
 volume = {22},
 year = {2002}
}`
            },

  {
            'id': '550',
            'author': 'Yoshiyuki Kojima, Yoshihiro Yasumuro, Tomohiro Kuroda, Masataka Imura, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Clip-Interface: A Human Interface for a 3D Workspace with Wearable PC',
            'year': '2002',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2002-journal-papers-1,
 author = {Hiroshi Oyama and Kenta Hori and Tomohiro Kuroda and Takashi Takahashi},
 journal = {IPSJ Magazine},
 number = {5},
 pages = {493-498},
 title = {Medicine and Virtual Reality},
 volume = {43},
 year = {2002}
}`
            },

  {
            'id': '551',
            'author': 'Koichi Minami, Tomi Korpipaa, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Network Protocol for Distributed Design Work Support',
            'year': '2002',
            'book': 'Journal of Human Interface Society',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2002-international-conferences-9,
 author = {Kenta Hori and Tomohiro Kuroda and Hiroshi Oyama and Yasuhiko Ozaki and Takehiko Nakamura and Takashi Takahashi},
 booktitle = {Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery},
 pages = {224-229},
 title = {Effect of Video Streaming Delay on Telemedicine based on the Surgical Cockpit System},
 venue = {Paris/France},
 year = {2002}
}`
            },

  {
            'id': '552',
            'author': 'Kenta Hori, Yasuhiko Ozaki, Takehiko Nakamura, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'Introducing Elevation View of Operating Field to Tele-robotic Surgery',
            'year': '2002',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2002-international-conferences-8,
 author = {Yoshihiro Kuroda and Megumi Nakao and Silke Hacker and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Takashi Takahashi},
 booktitle = {Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery},
 pages = {55-59},
 title = {An Interaction Model between Multiple Deformable Objects for Realistic Haptic Force Feedback in Surgical Simulations},
 venue = {Paris/France},
 year = {2002}
}`
            },

  {
            'id': '553',
            'author': 'Hiroshi Oyama, Kenta Hori, Tomohiro Kuroda, Takashi Takahashi',
            'title': 'Medicine and Virtual Reality',
            'year': '2002',
            'book': 'IPSJ Magazine',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2002-international-conferences-7,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Takashi Takahashi},
 booktitle = {Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery},
 pages = {13-18},
 title = {Planning and Training of Minimally Invasive Surgery by Integrating Soft Tissue Cuts with Surgical Views Reproduction},
 venue = {Paris/France},
 year = {2002}
}`
            },

  {
            'id': '554',
            'author': 'Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Yasuhiko Ozaki, Takehiko Nakamura, Takashi Takahashi',
            'title': 'Effect of Video Streaming Delay on Telemedicine based on the Surgical Cockpit System',
            'year': '2002',
            'book': 'Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-6,
 author = {Petri Pulli and Xiasong Zheng and Tony Manninen and Tomohiro Kuroda},
 booktitle = {Proceedings of World Wireless Research Forum},
 title = {Quality Function Deployment in Mobile Service Analysis, Design and Development},
 venue = {London/UK},
 year = {2002}
}`
            },

  {
            'id': '555',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Silke Hacker, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'An Interaction Model between Multiple Deformable Objects for Realistic Haptic Force Feedback in Surgical Simulations',
            'year': '2002',
            'book': 'Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-5,
 author = {Koichi Minami and Tomi Korpipaa and Masataka Imura and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {International Workshop on Entertainment Computing Workshop Note},
 pages = {487-494},
 title = {A Distributed MR Transporter for Networked Collaboration},
 venue = {Makuhari/Japan},
 year = {2002}
}`
            },

  {
            'id': '556',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Planning and Training of Minimally Invasive Surgery by Integrating Soft Tissue Cuts with Surgical Views Reproduction',
            'year': '2002',
            'book': 'Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-4,
 author = {Masataka Imura and Kumi Kamada and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara and Eiji Toyota and Yasuo Ogasawara and Fumihiko Kajiya},
 booktitle = {Proceedings of the IEEE-EMBS Special Topic Conference on Molecular, Cellular and Tissue Engineering},
 pages = {128-129},
 title = {Interactive Observation of Kidney Glomeruli using Immersive Projection System},
 venue = {Genoa/Italy},
 year = {2002}
}`
            },

  {
            'id': '557',
            'author': 'Petri Pulli, Xiasong Zheng, Tony Manninen, Tomohiro Kuroda',
            'title': 'Quality Function Deployment in Mobile Service Analysis, Design and Development',
            'year': '2002',
            'book': 'Proceedings of World Wireless Research Forum',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-3,
 author = {Nobuyuki Ishibashi and Yoshitsugu Manabe and Osamu Oshiro and Motonori Doi and Tomohiro Kuroda and Ichiro Kanaya and Yoshihiro Yasumuro and Kunihiro Chihara},
 booktitle = {Proceedings of CSUN's Annual International Conference, Technology and Persons with Disabilities, Web Proceeings},
 title = {Checking Daily Health and Safty on The Internet},
 venue = {Los Angeles/USA},
 year = {2002}
}`
            },

  {
            'id': '558',
            'author': 'Koichi Minami, Tomi Korpipaa, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Distributed MR Transporter for Networked Collaboration',
            'year': '2002',
            'book': 'International Workshop on Entertainment Computing Workshop Note',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-2,
 author = {Yoshihiro Yasumuro and Masataka Imura and Hiroshi Sasaki and Koichi Minami and Yoshiyuki Kojima and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of CREST Workshop on Advanced Computing and Communicating Techniques for Wearable Information Playing},
 pages = {11-15},
 title = {Computer Vision-Based Interfaces for Wearable Computers -A Wearable Shared Mixed Reality Environment},
 venue = {Ikoma/Japan},
 year = {2002}
}`
            },

  {
            'id': '559',
            'author': 'Masataka Imura, Kumi Kamada, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Eiji Toyota, Yasuo Ogasawara, Fumihiko Kajiya',
            'title': 'Interactive Observation of Kidney Glomeruli using Immersive Projection System',
            'year': '2002',
            'book': 'Proceedings of the IEEE-EMBS Special Topic Conference on Molecular, Cellular and Tissue Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-16,
 author = {Yoshihiro Yasumuro and Mikako Murakami and Masataka Imura and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of ERICIM Workshop - User Interfaces for All},
 pages = {55-66},
 title = {E-Cane with Situation Presumption for the Visually Impaired},
 venue = {Paris/France},
 year = {2002}
}`
            },

  {
            'id': '560',
            'author': 'Nobuyuki Ishibashi, Yoshitsugu Manabe, Osamu Oshiro, Motonori Doi, Tomohiro Kuroda, Ichiro Kanaya, Yoshihiro Yasumuro, Kunihiro Chihara',
            'title': 'Checking Daily Health and Safty on The Internet',
            'year': '2002',
            'book': 'Proceedings of CSUN\'s Annual International Conference, Technology and Persons with Disabilities, Web Proceeings',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-15,
 author = {Mikako Murakami and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of ERICIM Workshop - User Interfaces for All},
 pages = {207-208},
 title = {Shopping Support System for the Blind Using Barcode},
 venue = {Chantilly/France},
 year = {2002}
}`
            },

  {
            'id': '561',
            'author': 'Yoshihiro Yasumuro, Masataka Imura, Hiroshi Sasaki, Koichi Minami, Yoshiyuki Kojima, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Computer Vision-Based Interfaces for Wearable Computers -A Wearable Shared Mixed Reality Environment',
            'year': '2002',
            'book': 'Proceedings of CREST Workshop on Advanced Computing and Communicating Techniques for Wearable Information Playing',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-14,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Takashi Takahashi},
 booktitle = {Proceedings of Medical Image Computing and Computer Assisted Intervention},
 pages = {178-185},
 title = {Combining Volumetric Soft Tissue Cuts for Interventional Surgery Simulation},
 venue = {Tokyo/Japan},
 year = {2002}
}`
            },

  {
            'id': '562',
            'author': 'Yoshihiro Yasumuro, Mikako Murakami, Masataka Imura, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'E-Cane with Situation Presumption for the Visually Impaired',
            'year': '2002',
            'book': 'Proceedings of ERICIM Workshop - User Interfaces for All',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-13,
 author = {Kumi Kamada and Koichi Minami and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {714-718},
 title = {Visual Consistent Presentation Between a Real and Virtual Object},
 venue = {Gyeongju/Korea},
 year = {2002}
}`
            },

  {
            'id': '563',
            'author': 'Mikako Murakami, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Shopping Support System for the Blind Using Barcode',
            'year': '2002',
            'book': 'Proceedings of ERICIM Workshop - User Interfaces for All',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-12,
 author = {Tomohiro Kuroda and Hiroshi Sasaki and Toshitaka Tateishi and Kouji Maeda and Yoshihiro Yasumuro and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {117-122},
 title = {Walking Aids based on Wearable/Ubiquitous Computing - Aiming At Pedestrian's Intelligent Transport Systems -},
 venue = {Veszprem/Hungary},
 year = {2002}
}`
            },

  {
            'id': '564',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Combining Volumetric Soft Tissue Cuts for Interventional Surgery Simulation',
            'year': '2002',
            'book': 'Proceedings of Medical Image Computing and Computer Assisted Intervention',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-11,
 author = {Mikako Murakami and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {27-32},
 title = {Generation of Modifier Representation in Sign Animation},
 venue = {Veszprem/Hungary},
 year = {2002}
}`
            },

  {
            'id': '565',
            'author': 'Kumi Kamada, Koichi Minami, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Visual Consistent Presentation Between a Real and Virtual Object',
            'year': '2002',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-10,
 author = {Yoshihiro Kuroda and Megumi Nakao and Silke Hacker and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Takashi Takahashi},
 booktitle = {Proceedings of Eurohaptics},
 pages = {116-121},
 title = {Haptic Force Feedback with an Interaction Model between Multiple Deformable Objects for Surgical Simulation},
 venue = {Edinburgh/UK},
 year = {2002}
}`
            },

  {
            'id': '566',
            'author': 'Tomohiro Kuroda, Hiroshi Sasaki, Toshitaka Tateishi, Kouji Maeda, Yoshihiro Yasumuro, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Walking Aids based on Wearable/Ubiquitous Computing - Aiming At Pedestrian\'s Intelligent Transport Systems -',
            'year': '2002',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-international-conferences-1,
 author = {Kunihiro Chihara and Tomohiro Kuroda and Masataka Imura and Yoshiyuki Kojima and Muneyuki Sakata and Yu Ishikawa},
 booktitle = {Proceedings of The International Symposium on Highly Efficient Use of Energy and Education of its Environmental Impact},
 title = {Ubiquitous Visualization System of Energy Consumption},
 venue = {Suita/Japan},
 year = {2002}
}`
            },

  {
            'id': '567',
            'author': 'Mikako Murakami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Generation of Modifier Representation in Sign Animation',
            'year': '2002',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-9,
 author = {Tomohiro Kuroda and Mikako Murakami and Yoshito Tabata and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {150},
 title = {A Method to Produce Legible Sign Animation},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '568',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Silke Hacker, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Haptic Force Feedback with an Interaction Model between Multiple Deformable Objects for Surgical Simulation',
            'year': '2002',
            'book': 'Proceedings of Eurohaptics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-8,
 author = {Mikako Murakami and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {155},
 title = {Merchandise Information Service for Blind People Using Barcode},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '569',
            'author': 'Kunihiro Chihara, Tomohiro Kuroda, Masataka Imura, Yoshiyuki Kojima, Muneyuki Sakata, Yu Ishikawa',
            'title': 'Ubiquitous Visualization System of Energy Consumption',
            'year': '2002',
            'book': 'Proceedings of The International Symposium on Highly Efficient Use of Energy and Education of its Environmental Impact',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-7,
 author = {Yoshito Tabata and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {69},
 title = {A Study on Finger Character Learning System},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '570',
            'author': 'Tomohiro Kuroda, Mikako Murakami, Yoshito Tabata, Kunihiro Chihara',
            'title': 'A Method to Produce Legible Sign Animation',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-6,
 author = {Kenta Hori and Tomohiro Kuroda and Hiroshi Oyama and Yasuhiko Ozaki and Takehiko Nakamura and Takashi Takahashi},
 booktitle = {Bio-Medical Engineering},
 pages = {215},
 title = {Effectiveness of Video Streaming Delay on Tele-robotic Surgery},
 venue = {Kyoto},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '571',
            'author': 'Mikako Murakami, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'Merchandise Information Service for Blind People Using Barcode',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-5,
 author = {Yasuhiko Ozaki and Kenta Hori and Tomohiro Kuroda and Hiroshi Oyama and Takehiko Nakamura and Takashi Takahashi},
 booktitle = {Bio-Medical Engineering},
 pages = {198},
 title = {Introducing Elevation View of Operating Field on Tele-robotic Surgery},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '572',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'A Study on Finger Character Learning System',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-4,
 author = {Takehiko Nakamura and Kenta Hori and Tomohiro Kuroda and Hiroshi Oyama and Takashi Takahashi},
 booktitle = {Bio-Medical Engineering},
 pages = {95},
 title = {Possibility to Evaluat Personal Skill to Surgical Procedures Using Result from Surgical Simulator and Telerobotic Manipulation},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '573',
            'author': 'Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Yasuhiko Ozaki, Takehiko Nakamura, Takashi Takahashi',
            'title': 'Effectiveness of Video Streaming Delay on Tele-robotic Surgery',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-3,
 author = {Yasuhiro Yamamoto and Megumi Nakao and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Takashi Takahashi},
 booktitle = {Bio-Medical Engineering},
 pages = {100},
 title = {Palpable Simulation System of an Aorta in Cardiovascular Surgery},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '574',
            'author': 'Yasuhiko Ozaki, Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Takehiko Nakamura, Takashi Takahashi',
            'title': 'Introducing Elevation View of Operating Field on Tele-robotic Surgery',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-28,
 author = {Kenta Hori and Yasuhiko Ozaki and Tomohiro Kuroda and Hiroshi Oyama and Takashi Takahashi},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {11},
 title = {Factor of Skill Difference on Tele-robotic Surgery},
 venue = {Tokyo/Japan},
 year = {2002}
}`
            },

  {
            'id': '575',
            'author': 'Takehiko Nakamura, Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'Possibility to Evaluat Personal Skill to Surgical Procedures Using Result from Surgical Simulator and Telerobotic Manipulation',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-27,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Genichi Sakaguchi and Masashi Komeda and Takashi Takahashi},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {8},
 title = {Decision Support System of Surgical Approaches with an Adaptive Physics-Based Model},
 venue = {Tokyo/Japan},
 year = {2002}
}`
            },

  {
            'id': '576',
            'author': 'Yasuhiro Yamamoto, Megumi Nakao, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Palpable Simulation System of an Aorta in Cardiovascular Surgery',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-26,
 author = {Tomohiro Kuroda and Yoshihiro Yasumuro and Mikako Murakami and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {137},
 title = {Development of E-Cane Aiming at Pedestrian's Intelligent Transport System},
 venue = {Fukuoka/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '577',
            'author': 'Kenta Hori, Yasuhiko Ozaki, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'Factor of Skill Difference on Tele-robotic Surgery',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-25,
 author = {Keiho Imanishi and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {279-280},
 title = {Development of a Haptic Navigation Interface for Improving Safety of Master-Slave Type Robotic Surgery},
 venue = {Tokyo/Japan},
 year = {2002}
}`
            },

  {
            'id': '578',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Genichi Sakaguchi, Masashi Komeda, Takashi Takahashi',
            'title': 'Decision Support System of Surgical Approaches with an Adaptive Physics-Based Model',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-24,
 author = {Masataka Imura and Kumi Kamada and Tomohiro Kuroda and Osamu Oshiro and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {253-256},
 title = {GRAPE: Measurement Support System for Cluster-shaped Object in Immersive Environment},
 venue = {Tokyo/Japan},
 year = {2002}
}`
            },

  {
            'id': '579',
            'author': 'Tomohiro Kuroda, Yoshihiro Yasumuro, Mikako Murakami, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Development of E-Cane Aiming at Pedestrian\'s Intelligent Transport System',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-23,
 author = {Kenta Hori and Katsuya Tanaka and Tomohiro Kuroda and Hiroshi Oyama and Shinichi Warisawa and Mamoru Mitsuishi},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {661-668},
 title = {Catalog Interface of Multi View for Medical Support on Network},
 venue = {Sapporo/Japan},
 year = {2002}
}`
            },

  {
            'id': '580',
            'author': 'Keiho Imanishi, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'Development of a Haptic Navigation Interface for Improving Safety of Master-Slave Type Robotic Surgery',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-22,
 author = {Kaori Fujiwara and Tomohiro Kuroda and Hiroshi Oyama and Takashi Takahashi},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {755-758},
 title = {An Interoperative Supporting System for Nurses},
 venue = {Sapporo/Japan},
 year = {2002}
}`
            },

  {
            'id': '581',
            'author': 'Masataka Imura, Kumi Kamada, Tomohiro Kuroda, Osamu Oshiro, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'GRAPE: Measurement Support System for Cluster-shaped Object in Immersive Environment',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-21,
 author = {Mikako Murakami and Yoshito Tabata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {219-220},
 title = {Sign Animation System Introduced Modifier Representation},
 venue = {Sapporo/Japan},
 year = {2002}
}`
            },

  {
            'id': '582',
            'author': 'Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Hiroshi Oyama, Shinichi Warisawa, Mamoru Mitsuishi',
            'title': 'Catalog Interface of Multi View for Medical Support on Network',
            'year': '2002',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-20,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {301-304},
 title = {An Input Method of Surgical Plans by Mouse Manipulation},
 venue = {Sapporo/Japan},
 year = {2002}
}`
            },

  {
            'id': '583',
            'author': 'Kaori Fujiwara, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'An Interoperative Supporting System for Nurses',
            'year': '2002',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-2,
 author = {Toshitaka Tateishi and Mikako Murakami and Masataka Imura and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Correspondences on Human Interface},
 number = {1},
 pages = {61-64},
 title = {E-cane System with Situation Presumption for the Blind},
 venue = {Naha/Japan},
 volume = {4},
 year = {2002}
}`
            },

  {
            'id': '584',
            'author': 'Mikako Murakami, Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Sign Animation System Introduced Modifier Representation',
            'year': '2002',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-19,
 author = {Yoshito Tabata and Mikako Murakami and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of Japanese Society for Information and Systems in Education},
 pages = {311-312},
 title = {*** No English title in DB***},
 year = {2002}
}`
            },

  {
            'id': '585',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'An Input Method of Surgical Plans by Mouse Manipulation',
            'year': '2002',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-18,
 author = {Kumi Kamada and Tomohiro Kuroda and Yoshitsugu Manabe and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {397-398},
 title = {*** No English title in DB***},
 year = {2002}
}`
            },

  {
            'id': '586',
            'author': 'Toshitaka Tateishi, Mikako Murakami, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'E-cane System with Situation Presumption for the Blind',
            'year': '2002',
            'book': 'Correspondences on Human Interface',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-17,
 author = {Koichi Minami and Masataka Imura and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {349-350},
 title = {*** No English title in DB***},
 year = {2002}
}`
            },

  {
            'id': '587',
            'author': 'Yoshito Tabata, Mikako Murakami, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of Japanese Society for Information and Systems in Education',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-16,
 author = {Masataka Imura and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {238},
 title = {3-D Blood Flow Visualization in Immersive Environment based on Color Doppler Images},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '588',
            'author': 'Kumi Kamada, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-15,
 author = {Kaori Fujiwara and Takehiko Nakamura and Kazumi Hara and Tomohiro Kuroda and Hiroshi Oyama and Takashi Takahashi},
 booktitle = {Bio-Medical Engineering},
 pages = {200},
 title = {An Interoperative Supporting System for Nurses},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '589',
            'author': 'Koichi Minami, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-14,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Takashi Takahashi},
 booktitle = {Bio-Medical Engineering},
 pages = {100},
 title = {Preoperative Planning and Procedural Training of Minimally Invasive Surgery Using Tissue Cutting and Surgical View Reconstruction},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '590',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '3-D Blood Flow Visualization in Immersive Environment based on Color Doppler Images',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-13,
 author = {Keiho Imanishi and Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Takashi Takahashi},
 booktitle = {Bio-Medical Engineering},
 pages = {97},
 title = {Substitution of Haptic Display for Distance Visualization for Endoscopic Surgery},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '591',
            'author': 'Kaori Fujiwara, Takehiko Nakamura, Kazumi Hara, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'An Interoperative Supporting System for Nurses',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-12,
 author = {Kouji Maeda and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {123},
 title = {Real-Time Observation and the Map Creation of Information about Pedestrians Distribution},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '592',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Preoperative Planning and Procedural Training of Minimally Invasive Surgery Using Tissue Cutting and Surgical View Reconstruction',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-11,
 author = {Tomohiro Kuroda},
 booktitle = {Bio-Medical Engineering},
 pages = {25},
 title = {Medical Cockpit for Telemedicine},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '593',
            'author': 'Keiho Imanishi, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Takashi Takahashi',
            'title': 'Substitution of Haptic Display for Distance Visualization for Endoscopic Surgery',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-10,
 author = {Tomohiro Kuroda and Toshitaka Tateishi and Yoshihiro Yasumuro and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {151},
 title = {E-cane with Situation Presumption for the Blind},
 venue = {Kyoto/Japan},
 volume = {40},
 year = {2002}
}`
            },

  {
            'id': '594',
            'author': 'Kouji Maeda, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Real-Time Observation and the Map Creation of Information about Pedestrians Distribution',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2002-domestic-conferences-1,
 author = {Kouji Maeda and Mikako Murakami and Masataka Imura and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Correspondences on Human Interface},
 number = {1},
 pages = {87-90},
 title = {*** No English title in DB***},
 venue = {Naha/Japan},
 volume = {4},
 year = {2002}
}`
            },

  {
            'id': '595',
            'author': 'Tomohiro Kuroda',
            'title': 'Medical Cockpit for Telemedicine',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2001-journal-papers-7,
 author = {Hiroshi Oyama and Tomohiro Kuroda and Kenta Hori and Takehiko Nakamura and Takashi Takahashi},
 journal = {General Medicine},
 number = {1},
 pages = {17-23},
 title = {Efficacy of a Virtual Reality Simulator for Evaluating the Aptitude of Medical Students},
 volume = {2},
 year = {2001}
}`
            },

  {
            'id': '596',
            'author': 'Tomohiro Kuroda, Toshitaka Tateishi, Yoshihiro Yasumuro, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'E-cane with Situation Presumption for the Blind',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2001-journal-papers-6,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Genichi Sakaguchi and Masashi Komeda and Takashi Takahashi},
 journal = {Japan Journal of Medical Informatics},
 number = {5},
 pages = {315-323},
 title = {Virtual Reality Based Simulation System for Cardiovascular Surgery},
 volume = {21},
 year = {2001}
}`
            },

  {
            'id': '597',
            'author': 'Kouji Maeda, Mikako Murakami, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2002',
            'book': 'Correspondences on Human Interface',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2001-journal-papers-5,
 author = {Kenta Hori and Tomohiro Kuroda and Hiroshi Oyama and Takashi Takahashi},
 journal = {Japan Journal of Medical Informatics},
 number = {5},
 pages = {333-340},
 title = {Surgical Cockpit System -Standarization of Integrated Information Support for Telesurgery-},
 volume = {21},
 year = {2001}
}`
            },

  {
            'id': '598',
            'author': 'Hiroshi Oyama, Tomohiro Kuroda, Kenta Hori, Takehiko Nakamura, Takashi Takahashi',
            'title': 'Efficacy of a Virtual Reality Simulator for Evaluating the Aptitude of Medical Students',
            'year': '2001',
            'book': 'General Medicine',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2001-journal-papers-4,
 author = {Tomohiro Kuroda and Wakako Makari and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {Moroccan Journal of Control Computer Science And Signal Processing},
 number = {1},
 title = {Transformation Of Signing Avatar To Fit User's Figure},
 volume = {3},
 year = {2001}
}`
            },

  {
            'id': '599',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Genichi Sakaguchi, Masashi Komeda, Takashi Takahashi',
            'title': 'Virtual Reality Based Simulation System for Cardiovascular Surgery',
            'year': '2001',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2001-journal-papers-3,
 author = {Tomohiro Kuroda and Mikako Murakami and Yoshito Tabata},
 journal = {Japan Journal of Medical Informatics},
 number = {5},
 pages = {341-347},
 title = {Current Trend of VR Application for Assistive Technology},
 volume = {21},
 year = {2001}
}`
            },

  {
            'id': '600',
            'author': 'Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'Surgical Cockpit System -Standarization of Integrated Information Support for Telesurgery-',
            'year': '2001',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2001-journal-papers-2,
 author = {Masataka Imura and Yoshito Tabata and Ichiro Kanaya and Tomohiro Kuroda and Yoshitsugu Manabe and Osamu Oshiro and Kunihiro Chihara},
 journal = {Asian Journal of Geoinformatics},
 number = {1},
 pages = {49-54},
 title = {Digital Archiving of Kamegata-Ishi (Turtle-shaped Stone)},
 volume = {2},
 year = {2001}
}`
            },

  {
            'id': '601',
            'author': 'Tomohiro Kuroda, Wakako Makari, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Transformation Of Signing Avatar To Fit User\'s Figure',
            'year': '2001',
            'book': 'Moroccan Journal of Control Computer Science And Signal Processing',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2001-journal-papers-1,
 author = {Yoshito Tabata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {Journal of Information and Systems in Education},
 number = {2},
 pages = {172-178},
 title = {A Study on Finger Character Education System based on Hand Posture Recognition},
 volume = {18},
 year = {2001}
}`
            },

  {
            'id': '602',
            'author': 'Tomohiro Kuroda, Mikako Murakami, Yoshito Tabata',
            'title': 'Current Trend of VR Application for Assistive Technology',
            'year': '2001',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2001-international-conferences-9,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Scandinavian Conference on Image Analysis},
 pages = {779-784},
 title = {Hand-Area Extraction By Sensor Fusion Using Two Cameras For Input Interface Of Wearable Computers},
 venue = {Bergen/Norway},
 year = {2001}
}`
            },

  {
            'id': '603',
            'author': 'Masataka Imura, Yoshito Tabata, Ichiro Kanaya, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Digital Archiving of Kamegata-Ishi (Turtle-shaped Stone)',
            'year': '2001',
            'book': 'Asian Journal of Geoinformatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2001-international-conferences-8,
 author = {Hiroshi Oyama and Kenta Hori and Yasuhiko Ozaki and Megumi Nakao and Takatoshi Suenaga and Tomohiro Kuroda and Mikio Suga and Masaru Komori and Osamu Oshiro and Kotaro Minato and Kunihiro Chihara and Takashi Takahashi},
 booktitle = {Proceedings of Korea-Japan ME Joint Symposium},
 title = {Innovative Evolution of Medical Education and Treatment using Virtual Reality Technology},
 venue = {Kyongju/Korea},
 year = {2001}
}`
            },

  {
            'id': '604',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Study on Finger Character Education System based on Hand Posture Recognition',
            'year': '2001',
            'book': 'Journal of Information and Systems in Education',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2001-international-conferences-7,
 author = {Peter Antoniac and Tomohiro Kuroda and Petri Pulli},
 booktitle = {Proceedings of World Wireless Research Forum},
 title = {User Interface Appliance for Mobile Devices},
 venue = {Helsinki/Finland},
 year = {2001}
}`
            },

  {
            'id': '605',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Hand-Area Extraction By Sensor Fusion Using Two Cameras For Input Interface Of Wearable Computers',
            'year': '2001',
            'book': 'Proceedings of Scandinavian Conference on Image Analysis',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-6,
 author = {Tomohiro Kuroda and Wakako Makari and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Image and Signal Processing},
 pages = {161-167},
 title = {Transformation of Signing Avatar to Fit User's Figure},
 venue = {Agadir/Morrocco},
 year = {2001}
}`
            },

  {
            'id': '606',
            'author': 'Hiroshi Oyama, Kenta Hori, Yasuhiko Ozaki, Megumi Nakao, Takatoshi Suenaga, Tomohiro Kuroda, Mikio Suga, Masaru Komori, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Takashi Takahashi',
            'title': 'Innovative Evolution of Medical Education and Treatment using Virtual Reality Technology',
            'year': '2001',
            'book': 'Proceedings of Korea-Japan ME Joint Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-3,
 author = {Masataka Imura and Yoshito Tabata and Ichiro Kanaya and Tomohiro Kuroda and Yoshitsugu Manabe and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {International Archives of Photogrammetry, Remote Sensing and Spatial Information Sciences},
 pages = {75-80},
 title = {Digital Archiving Of Kamegata-Ishi (Turtle Shape Stone) Using Data Fusion Of Heterogeneous Measurements},
 venue = {Ayutthaya/Thailand},
 volume = {34},
 year = {2001}
}`
            },

  {
            'id': '607',
            'author': 'Peter Antoniac, Tomohiro Kuroda, Petri Pulli',
            'title': 'User Interface Appliance for Mobile Devices',
            'year': '2001',
            'book': 'Proceedings of World Wireless Research Forum',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-2,
 author = {Tomohiro Kuroda and Atsushi Nakamura and Yoshiyuki Kojima and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Technical Summary Digest of IS&T/SPIE's Electronics Imaging: Science and Technology},
 pages = {260},
 title = {Interactive Visualization of Energy Consumption using VRML},
 venue = {San Jose/USA},
 year = {2001}
}`
            },

  {
            'id': '608',
            'author': 'Tomohiro Kuroda, Wakako Makari, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Transformation of Signing Avatar to Fit User\'s Figure',
            'year': '2001',
            'book': 'Proceedings of International Conference on Image and Signal Processing',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-17,
 author = {Masataka Imura and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara and Joakim Brandberg and Per Ask},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 title = {Blood Flow Visualization In Immersive Environment Based on Color Doppler Images},
 venue = {Istanbul/Turkey},
 year = {2001}
}`
            },

  {
            'id': '609',
            'author': 'Masataka Imura, Yoshito Tabata, Ichiro Kanaya, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Digital Archiving Of Kamegata-Ishi (Turtle Shape Stone) Using Data Fusion Of Heterogeneous Measurements',
            'year': '2001',
            'book': 'International Archives of Photogrammetry, Remote Sensing and Spatial Information Sciences',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-16,
 author = {Takatoshi Suenaga and Masayuki Nambu and Tomohiro Kuroda and Osamu Oshiro and Toshiyo Tamura and Kunihiro Chihara},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 title = {A Tele-Instruction System For Ultrasound Probe Operation Based on Shared AR Technology},
 venue = {Istanbul/Turkey},
 year = {2001}
}`
            },

  {
            'id': '610',
            'author': 'Tomohiro Kuroda, Atsushi Nakamura, Yoshiyuki Kojima, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Interactive Visualization of Energy Consumption using VRML',
            'year': '2001',
            'book': 'Technical Summary Digest of IS&T/SPIE\'s Electronics Imaging: Science and Technology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-15,
 author = {Yoshiyuki Kojima and Yoshihiro Yasumuro and Hiroshi Sasaki and Ichiro Kanaya and Osamu Oshiro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {463-469},
 title = {Hand Manipulation of Virtual Objects in Wearable Augmented Reality},
 venue = {Berkeley/USA},
 year = {2001}
}`
            },

  {
            'id': '611',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Joakim Brandberg, Per Ask',
            'title': 'Blood Flow Visualization In Immersive Environment Based on Color Doppler Images',
            'year': '2001',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-14,
 author = {Peter Antoniac and Tomohiro Kuroda and Petri Pulli},
 booktitle = {Proceedings of World Wireless Research Forum},
 title = {User Interface Appliance for Mobile Devices},
 venue = {Stockholm/Sweden},
 year = {2001}
}`
            },

  {
            'id': '612',
            'author': 'Takatoshi Suenaga, Masayuki Nambu, Tomohiro Kuroda, Osamu Oshiro, Toshiyo Tamura, Kunihiro Chihara',
            'title': 'A Tele-Instruction System For Ultrasound Probe Operation Based on Shared AR Technology',
            'year': '2001',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-12,
 author = {Tomohiro Kuroda and Yoshito Tabata and Mikako Murakami and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Lecture Notes in Computer Science},
 pages = {363-366},
 title = {Sign Language Digitization and Animation},
 venue = {New Orleans/USA},
 volume = {3},
 year = {2001}
}`
            },

  {
            'id': '613',
            'author': 'Yoshiyuki Kojima, Yoshihiro Yasumuro, Hiroshi Sasaki, Ichiro Kanaya, Osamu Oshiro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Hand Manipulation of Virtual Objects in Wearable Augmented Reality',
            'year': '2001',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-11,
 author = {Peter Antoniac and Petri Pulli and Tomohiro Kuroda and Dan Bendas and Seamus Hickey and Hiroshi Sasaki},
 booktitle = {Advanced Interface for Mobile Services, Proceedings of World Multi-Conference on Systemics, Cybernetics and Informatics},
 title = {HandSmart Mediaphone},
 venue = {Orlando/USA},
 year = {2001}
}`
            },

  {
            'id': '614',
            'author': 'Peter Antoniac, Tomohiro Kuroda, Petri Pulli',
            'title': 'User Interface Appliance for Mobile Devices',
            'year': '2001',
            'book': 'Proceedings of World Wireless Research Forum',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-10,
 author = {Kenta Hori and Hiroshi Oyama and Yasuhiko Ozaki and Takeshi Tsuda and Takatoshi Suenaga and Tomohiro Kuroda and Mikio Suga and Masaru Komori and Osamu Oshiro and Kotaro Minato and Kunihiro Chihara and Takashi Takahashi},
 booktitle = {Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery},
 pages = {1160},
 title = {Surgical Cockpit System and Effectiveness of its Immersive Environment},
 venue = {Berlin/Germany},
 year = {2001}
}`
            },

  {
            'id': '615',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Mikako Murakami, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Sign Language Digitization and Animation',
            'year': '2001',
            'book': 'Lecture Notes in Computer Science',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-1,
 author = {Tomohiro Kuroda and Atsushi Nakamura and Yoshiyuki Kojima and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of SPIE},
 pages = {218-225},
 title = {Interactive Visualization of Energy Consumption using VRML},
 venue = {San Jose/USA},
 volume = {4311},
 year = {2001}
}`
            },

  {
            'id': '616',
            'author': 'Peter Antoniac, Petri Pulli, Tomohiro Kuroda, Dan Bendas, Seamus Hickey, Hiroshi Sasaki',
            'title': 'HandSmart Mediaphone',
            'year': '2001',
            'book': 'Advanced Interface for Mobile Services, Proceedings of World Multi-Conference on Systemics, Cybernetics and Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-9,
 author = {Yoshito Tabata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {559-560},
 title = {*** No English title in DB***},
 year = {2001}
}`
            },

  {
            'id': '617',
            'author': 'Kenta Hori, Hiroshi Oyama, Yasuhiko Ozaki, Takeshi Tsuda, Takatoshi Suenaga, Tomohiro Kuroda, Mikio Suga, Masaru Komori, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Takashi Takahashi',
            'title': 'Surgical Cockpit System and Effectiveness of its Immersive Environment',
            'year': '2001',
            'book': 'Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-8,
 author = {Yoshiyuki Kojima and Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {555-556},
 title = {Direct Handling for Wearable Augmented Reality},
 venue = {Osaka/Japan},
 year = {2001}
}`
            },

  {
            'id': '618',
            'author': 'Tomohiro Kuroda, Atsushi Nakamura, Yoshiyuki Kojima, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Interactive Visualization of Energy Consumption using VRML',
            'year': '2001',
            'book': 'Proceedings of SPIE',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-7,
 author = {Masataka Imura and Tomohiro Kuroda and Yoshitsugu Manabe and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {205-206},
 title = {*** No English title in DB***},
 year = {2001}
}`
            },

  {
            'id': '619',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-6,
 author = {Koichi Minami and Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {291-292},
 title = {*** No English title in DB***},
 year = {2001}
}`
            },

  {
            'id': '620',
            'author': 'Yoshiyuki Kojima, Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Direct Handling for Wearable Augmented Reality',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-5,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {165-166},
 title = {*** No English title in DB***},
 year = {2001}
}`
            },

  {
            'id': '621',
            'author': 'Masataka Imura, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-4,
 author = {Atsunobu Kimura and Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {161-162},
 title = {*** No English title in DB***},
 year = {2001}
}`
            },

  {
            'id': '622',
            'author': 'Koichi Minami, Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-3,
 author = {Mikako Murakami and Yoshito Tabata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {583-584},
 title = {*** No English title in DB***},
 year = {2001}
}`
            },

  {
            'id': '623',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-21,
 author = {Megumi Nakao and Tomohiro Kuroda and Hiroshi Oyama and Masaru Komori and Tetsuya Matsuda and Takashi Takahashi},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {*** No English title in DB***},
 year = {2001}
}`
            },

  {
            'id': '624',
            'author': 'Atsunobu Kimura, Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-20,
 author = {Mikako Murakami and Yoshito Tabata and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Kansai Division Conference of Japan Ergonomics Society},
 pages = {37-38},
 title = {A Method to Improve Legibility of Sign Animation},
 venue = {Osaka/Japan},
 year = {2001}
}`
            },

  {
            'id': '625',
            'author': 'Mikako Murakami, Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-2,
 author = {Yasuhiko Ozaki and Takeshi Tsuda and Kenta Hori and Hiroshi Oyama and Takatoshi Suenaga and Mikio Suga and Tomohiro Kuroda and Masaru Komori and Osamu Oshiro and Kotaro Minato and Kunihiro Chihara and Takashi Takahashi},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 pages = {81-86},
 title = {Efficiency of the Immersive Projection System for Telesurgery},
 venue = {Naha/Japan},
 year = {2001}
}`
            },

  {
            'id': '626',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-19,
 author = {Toshitaka Tateishi and Hiroshi Sasaki and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Japan Joint Automatic Control Conference},
 pages = {196-199},
 title = {*** No English title in DB***},
 year = {2001}
}`
            },

  {
            'id': '627',
            'author': 'Mikako Murakami, Yoshito Tabata, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'A Method to Improve Legibility of Sign Animation',
            'year': '2001',
            'book': 'Proceedings of Kansai Division Conference of Japan Ergonomics Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-18,
 author = {Toshitaka Tateishi and Hiroshi Sasaki and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {471-472},
 title = {A Study on Walking Support of the Visually Impaired with Situation Presumption},
 venue = {Suita/Japan},
 year = {2001}
}`
            },

  {
            'id': '628',
            'author': 'Yasuhiko Ozaki, Takeshi Tsuda, Kenta Hori, Hiroshi Oyama, Takatoshi Suenaga, Mikio Suga, Tomohiro Kuroda, Masaru Komori, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Takashi Takahashi',
            'title': 'Efficiency of the Immersive Projection System for Telesurgery',
            'year': '2001',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-17,
 author = {Kouji Maeda and Yoshihiro Yasumuro and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {509-510},
 title = {Detection and Integration onto Map of Information about Pedestrians Congestion},
 venue = {Suita/Japan},
 year = {2001}
}`
            },

  {
            'id': '629',
            'author': 'Toshitaka Tateishi, Hiroshi Sasaki, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Japan Joint Automatic Control Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-16,
 author = {Mikako Murakami and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {97-98},
 title = {Shopping Support System for Blind People using Barcode},
 venue = {Suita/Japan},
 year = {2001}
}`
            },

  {
            'id': '630',
            'author': 'Toshitaka Tateishi, Hiroshi Sasaki, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Study on Walking Support of the Visually Impaired with Situation Presumption',
            'year': '2001',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-15,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {463-464},
 title = {Wearables and Deviceless Interface},
 venue = {Nagasaki/Japan},
 year = {2001}
}`
            },

  {
            'id': '631',
            'author': 'Kouji Maeda, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Detection and Integration onto Map of Information about Pedestrians Congestion',
            'year': '2001',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-14,
 author = {Yoshiyuki Kojima and Hiroshi Sasaki and Yoshihiro Yasumuro and Ichiro Kanaya and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {461-462},
 title = {Visual Synthesis for Hand Manipulation in Wearable Augmented Reality},
 venue = {Nagoya/Japan},
 year = {2001}
}`
            },

  {
            'id': '632',
            'author': 'Mikako Murakami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Shopping Support System for Blind People using Barcode',
            'year': '2001',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-13,
 author = {Yoshito Tabata and Tomohiro Kuroda and Mikako Murakami and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Sign Linguistics},
 pages = {34-35},
 title = {Development of Sign Language Education System},
 venue = {Kanazawa/Japan},
 year = {2001}
}`
            },

  {
            'id': '633',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Wearables and Deviceless Interface',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-12,
 author = {Yasuhiko Ozaki and Kenta Hori and Hiroshi Oyama and Takeshi Tsuda and Naohiro Mitsutake and Takatoshi Suenaga and Mikio Suga and Tomohiro Kuroda and Masaru Komori and Osamu Oshiro and Kotaro Minato and Kunihiro Chihara and Takashi Takahashi},
 booktitle = {Proceedings of JAMI Telemedicine Research Meeting},
 pages = {8-9},
 title = {The Effectiveness of Immersed Operation Environment for Telerobotic Surgery},
 venue = {Tokyo/Japan},
 year = {2001}
}`
            },

  {
            'id': '634',
            'author': 'Yoshiyuki Kojima, Hiroshi Sasaki, Yoshihiro Yasumuro, Ichiro Kanaya, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Visual Synthesis for Hand Manipulation in Wearable Augmented Reality',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-11,
 author = {Takatoshi Suenaga and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {368},
 title = {A Tele-Instruction System for Ultrasound Diagnosis based on Shared AR Technology},
 venue = {Nagoya/Japan},
 volume = {39},
 year = {2001}
}`
            },

  {
            'id': '635',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Mikako Murakami, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Development of Sign Language Education System',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-10,
 author = {Kumi Kamada and Masataka Imura and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara and Yasuo Ogasawara and Eiji Toyota and Fumihiko Kajiya},
 booktitle = {Bio-Medical Engineering},
 pages = {362},
 title = {*** No English title in DB***},
 volume = {39},
 year = {2001}
}`
            },

  {
            'id': '636',
            'author': 'Yasuhiko Ozaki, Kenta Hori, Hiroshi Oyama, Takeshi Tsuda, Naohiro Mitsutake, Takatoshi Suenaga, Mikio Suga, Tomohiro Kuroda, Masaru Komori, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Takashi Takahashi',
            'title': 'The Effectiveness of Immersed Operation Environment for Telerobotic Surgery',
            'year': '2001',
            'book': 'Proceedings of JAMI Telemedicine Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-domestic-conferences-1,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {565},
 pages = {77-84},
 title = {Dial-Menu System: An Input Interface using a Human-Hand for Wearable Computers},
 venue = {Kyoto/Japan},
 volume = {100},
 year = {2001}
}`
            },

  {
            'id': '637',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Tele-Instruction System for Ultrasound Diagnosis based on Shared AR Technology',
            'year': '2001',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2000-journal-papers-4,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 journal = {Jean-Claude Heudin(Ed.), Lecture Notes in Artificial Intelligence},
 pages = {294-302},
 title = {Augmented Reality Based Input Interface for Wearable Computers},
 volume = {1834},
 year = {2000}
}`
            },

  {
            'id': '638',
            'author': 'Kumi Kamada, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Yasuo Ogasawara, Eiji Toyota, Fumihiko Kajiya',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2000-journal-papers-3,
 author = {Masataka Imura and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara and Joakim Brandberg and Per Ask},
 journal = {Japanese Journal of Applied Physics},
 pages = {3246-3252},
 title = {3-D Flow Visualization for Construction of the Model of the Blood Flow in the Heart},
 volume = {39},
 year = {2000}
}`
            },

  {
            'id': '639',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Dial-Menu System: An Input Interface using a Human-Hand for Wearable Computers',
            'year': '2001',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2000-journal-papers-2,
 author = {Toshiyuki Umeda and Takatoshi Suenaga and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 journal = {Japanese Journal of Applied Physics},
 pages = {3236-3241},
 title = {A Real-Time Telemedicine System using a Medical Ultrasound Image Sequence on a Low Bit-Rate Network},
 volume = {39},
 year = {2000}
}`
            },

  {
            'id': '640',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Augmented Reality Based Input Interface for Wearable Computers',
            'year': '2000',
            'book': 'Jean-Claude Heudin(Ed.), Lecture Notes in Artificial Intelligence',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2000-journal-papers-1,
 author = {Takatoshi Suenaga and Shigetoki Iino and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 journal = {Transactions of the Institute of Electronics, Information and Communication Engineers},
 number = {1},
 pages = {324-334},
 title = {An Instruction System of Manipulating Probe for Ultrasound Tele-Diagnosis},
 year = {2000}
}`
            },

  {
            'id': '641',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Joakim Brandberg, Per Ask',
            'title': '3-D Flow Visualization for Construction of the Model of the Blood Flow in the Heart',
            'year': '2000',
            'book': 'Japanese Journal of Applied Physics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2000-international-conferences-9,
 author = {Tomohiro Kuroda and Hiroshi Sasaki and Masaaki Nakano and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Workshop on Real-Time Image Sequence Analysis},
 pages = {116-121},
 title = {A Method to Generate Side View from Frontal Image Sequence for Tele-Existence},
 venue = {Oulu/Finland},
 year = {2000}
}`
            },

  {
            'id': '642',
            'author': 'Toshiyuki Umeda, Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Real-Time Telemedicine System using a Medical Ultrasound Image Sequence on a Low Bit-Rate Network',
            'year': '2000',
            'book': 'Japanese Journal of Applied Physics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2000-international-conferences-8,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Workshop on Real-Time Image Sequence Analysis},
 pages = {50-55},
 title = {Real-Time Hand Motion Recognition for Input Interface based on Augmented Reality},
 venue = {Oulu/Finland},
 year = {2000}
}`
            },

  {
            'id': '643',
            'author': 'Takatoshi Suenaga, Shigetoki Iino, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'An Instruction System of Manipulating Probe for Ultrasound Tele-Diagnosis',
            'year': '2000',
            'book': 'Transactions of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2000-international-conferences-7,
 author = {Masataka Imura and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara and Joakim Brandberg and Per Ask},
 booktitle = {Proceedings of International Conference on Image and Graphics},
 pages = {496-499},
 title = {In-vivo Blood Flow Visualization Using 3-D Reconstruction of Color Doppler Images},
 venue = {Tianjin/China},
 year = {2000}
}`
            },

  {
            'id': '644',
            'author': 'Tomohiro Kuroda, Hiroshi Sasaki, Masaaki Nakano, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Method to Generate Side View from Frontal Image Sequence for Tele-Existence',
            'year': '2000',
            'book': 'Proceedings of Workshop on Real-Time Image Sequence Analysis',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-6,
 author = {Takatoshi Suenaga and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Computers Helping People with Special Needs},
 pages = {703-710},
 title = {A Tele-Instruction System for Real-time Telemedicine},
 venue = {Karlsruhe/Germany},
 year = {2000}
}`
            },

  {
            'id': '645',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Real-Time Hand Motion Recognition for Input Interface based on Augmented Reality',
            'year': '2000',
            'book': 'Proceedings of Workshop on Real-Time Image Sequence Analysis',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-5,
 author = {Tomohiro Kuroda and Takatoshi Suenaga and Koichi Minami and Tomi Korpipaa and Hiroshi Sasaki and Yoshitsugu Manabe and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of IFAC-MIM Symposium on Manufacturing, Modeling, Management and Control},
 pages = {357-361},
 title = {Shared Augmented Reality for Remote Work Support},
 venue = {Patras/Greece},
 year = {2000}
}`
            },

  {
            'id': '646',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Joakim Brandberg, Per Ask',
            'title': 'In-vivo Blood Flow Visualization Using 3-D Reconstruction of Color Doppler Images',
            'year': '2000',
            'book': 'Proceedings of International Conference on Image and Graphics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-4,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Jean-Claude Heudin(Ed.), Virtual Worlds, Lecture Notes in Artificial Intelligence},
 pages = {294-302},
 title = {Augmented Reality Based Input Interface for Wearable Computers},
 venue = {Paris/France},
 volume = {1834},
 year = {2000}
}`
            },

  {
            'id': '647',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Tele-Instruction System for Real-time Telemedicine',
            'year': '2000',
            'book': 'Proceedings of International Conference on Computers Helping People with Special Needs',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-3,
 author = {Takatoshi Suenaga and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery},
 pages = {498-503},
 title = {A Tele-Instruction System for Real-Time Telemedicine},
 venue = {San Francisco/USA},
 year = {2000}
}`
            },

  {
            'id': '648',
            'author': 'Tomohiro Kuroda, Takatoshi Suenaga, Koichi Minami, Tomi Korpipaa, Hiroshi Sasaki, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Shared Augmented Reality for Remote Work Support',
            'year': '2000',
            'book': 'Proceedings of IFAC-MIM Symposium on Manufacturing, Modeling, Management and Control',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-2,
 author = {Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Conference on Gestures: Meaning and Use},
 title = {Motion Capture and Transmisstion Techniques for Sign Language},
 venue = {Oporto/Portugal},
 year = {2000}
}`
            },

  {
            'id': '649',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Augmented Reality Based Input Interface for Wearable Computers',
            'year': '2000',
            'book': 'Jean-Claude Heudin(Ed.), Virtual Worlds, Lecture Notes in Artificial Intelligence',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-15,
 author = {Tomi Korpipaa and Koichi Minami and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Artificial Reality and Tele-existence},
 pages = {124-131},
 title = {Shared Virtual Reality Interior Design System},
 venue = {Taipei/Taiwan},
 year = {2000}
}`
            },

  {
            'id': '650',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Tele-Instruction System for Real-Time Telemedicine',
            'year': '2000',
            'book': 'Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-14,
 author = {Masataka Imura and Yoshito Tabata and Ichiro Kanaya and Tomohiro Kuroda and Yoshitsugu Manabe and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {89-96},
 title = {Digital Archiving of Kamegata-Ishi (Turtle Shape Stone) using Heterogeneous Measurement Methods},
 venue = {Ogaki/Japan},
 year = {2000}
}`
            },

  {
            'id': '651',
            'author': 'Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'Motion Capture and Transmisstion Techniques for Sign Language',
            'year': '2000',
            'book': 'Proceedings of Conference on Gestures: Meaning and Use',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-13,
 author = {Tomohiro Kuroda and Wakako Makari and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {387-392},
 title = {Automatic Generation of VRML Avatar Inheriting User's Figure},
 venue = {Ogaki/Japan},
 year = {2000}
}`
            },

  {
            'id': '652',
            'author': 'Tomi Korpipaa, Koichi Minami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Shared Virtual Reality Interior Design System',
            'year': '2000',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-12,
 author = {Takatoshi Suenaga and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Workshop Telemedicine: Present and Future},
 title = {NAIST Tele-echo Project},
 venue = {Hannover/Germany},
 year = {2000}
}`
            },

  {
            'id': '653',
            'author': 'Masataka Imura, Yoshito Tabata, Ichiro Kanaya, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Digital Archiving of Kamegata-Ishi (Turtle Shape Stone) using Heterogeneous Measurement Methods',
            'year': '2000',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-11,
 author = {Hiroshi Sasaki and Toshitaka Tateishi and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {235-241},
 title = {Wearable Computer for the Blind - Aiming at a Pedestrian's Intelligent Transport System},
 venue = {Algehero/Italy},
 year = {2000}
}`
            },

  {
            'id': '654',
            'author': 'Tomohiro Kuroda, Wakako Makari, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Automatic Generation of VRML Avatar Inheriting User\'s Figure',
            'year': '2000',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-10,
 author = {Yoshito Tabata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {219-224},
 title = {Finger Character Learning System with Visual Feedback},
 venue = {Alghero/Italy},
 year = {2000}
}`
            },

  {
            'id': '655',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'NAIST Tele-echo Project',
            'year': '2000',
            'book': 'Proceedings of Workshop Telemedicine: Present and Future',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-international-conferences-1,
 author = {Yoshito Tabata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Conference on Gestures: Meaning and Use},
 title = {A Study on Hand Posture Recognition for Finger Character Learning System},
 venue = {Oporto/Portugal},
 year = {2000}
}`
            },

  {
            'id': '656',
            'author': 'Hiroshi Sasaki, Toshitaka Tateishi, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Wearable Computer for the Blind - Aiming at a Pedestrian\'s Intelligent Transport System',
            'year': '2000',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-9,
 author = {Koichi Minami and Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {435-436},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '657',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Finger Character Learning System with Visual Feedback',
            'year': '2000',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-8,
 author = {Mikako Murakami and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {663-664},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '658',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Study on Hand Posture Recognition for Finger Character Learning System',
            'year': '2000',
            'book': 'Proceedings of Conference on Gestures: Meaning and Use',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-7,
 author = {Yoshito Tabata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {399-400},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '659',
            'author': 'Koichi Minami, Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-6,
 author = {Toshitaka Tateishi and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {93-94},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '660',
            'author': 'Mikako Murakami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-5,
 author = {Ryo Shikata and Tomohiro Kuroda and Hiroyuki Seki and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {95-96},
 title = {*** No English title in DB***},
 venue = {Kyoto/Japan},
 year = {2000}
}`
            },

  {
            'id': '661',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-4,
 author = {Mikako Murakami and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 pages = {137-140},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '662',
            'author': 'Toshitaka Tateishi, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-3,
 author = {Toshitaka Tateishi and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 pages = {47-52},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '663',
            'author': 'Ryo Shikata, Tomohiro Kuroda, Hiroyuki Seki, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-26,
 author = {Kenta Hori and Takeshi Tsuda and Takatoshi Suenaga and Tomohiro Kuroda and Mikio Suga and Hiroshi Oyama and Osamu Oshiro and Kotaro Minato and Kunihiro Chihara and Masaru Komori and Takashi Takahashi},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {816-817},
 title = {Collaborative Communication System for Telesurgey},
 venue = {Hamamatsu/Japan},
 year = {2000}
}`
            },

  {
            'id': '664',
            'author': 'Mikako Murakami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-25,
 author = {Takeshi Tsuda and Kenta Hori and Takatoshi Suenaga and Tomohiro Kuroda and Mikio Suga and Hiroshi Oyama and Osamu Oshiro and Kotaro Minato and Kunihiro Chihara and Masaru Komori and Takashi Takahashi},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {712-713},
 title = {An Immersive Communication Support System for Telesurgery},
 venue = {Hamamatsu/Japan},
 year = {2000}
}`
            },

  {
            'id': '665',
            'author': 'Toshitaka Tateishi, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-24,
 author = {Kumi Kamada and Masataka Imura and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara and Yasuo Ogasawara and Eiji Toyota and Fumihiko Kajiya},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 pages = {17-21},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '666',
            'author': 'Kenta Hori, Takeshi Tsuda, Takatoshi Suenaga, Tomohiro Kuroda, Mikio Suga, Hiroshi Oyama, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Masaru Komori, Takashi Takahashi',
            'title': 'Collaborative Communication System for Telesurgey',
            'year': '2000',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-23,
 author = {Yoshito Tabata and Mikako Murakami and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Seminar on Sign Linguistic Engineering},
 title = {A Study on Glove Type Sensor Structure for Hand Posture Measurement among Sign Language},
 venue = {Kyoto/Japan},
 year = {2000}
}`
            },

  {
            'id': '667',
            'author': 'Takeshi Tsuda, Kenta Hori, Takatoshi Suenaga, Tomohiro Kuroda, Mikio Suga, Hiroshi Oyama, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Masaru Komori, Takashi Takahashi',
            'title': 'An Immersive Communication Support System for Telesurgery',
            'year': '2000',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-22,
 author = {Osamu Oshiro and Takatoshi Suenaga and Masataka Imura and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Autumn Conference of Japan Medical and Biological Engineers},
 pages = {85},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '668',
            'author': 'Kumi Kamada, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Yasuo Ogasawara, Eiji Toyota, Fumihiko Kajiya',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-21,
 author = {Takatoshi Suenaga and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 pages = {115-120},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '669',
            'author': 'Yoshito Tabata, Mikako Murakami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Study on Glove Type Sensor Structure for Hand Posture Measurement among Sign Language',
            'year': '2000',
            'book': 'Proceedings of Seminar on Sign Linguistic Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-20,
 author = {Tomohiro Kuroda and Atsushi Nakamura and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference on Visualization Sosiety of Japan},
 pages = {55-56},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '670',
            'author': 'Osamu Oshiro, Takatoshi Suenaga, Masataka Imura, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Autumn Conference of Japan Medical and Biological Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-2,
 author = {Masaaki Nakano and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 pages = {57-62},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '671',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-19,
 author = {Masataka Imura and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference on Visualization Sosiety of Japan},
 pages = {33-36},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '672',
            'author': 'Tomohiro Kuroda, Atsushi Nakamura, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference on Visualization Sosiety of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-18,
 author = {Ryo Shikata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {197-198},
 title = {Meeting Support System for the Hearing Impaired},
 venue = {Tsukuba/Japan},
 year = {2000}
}`
            },

  {
            'id': '673',
            'author': 'Masaaki Nakano, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-17,
 author = {Tatsuya Shuzui and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {265-266},
 title = {Data Structure of 3D Models for Heterogeneous Shared VR},
 venue = {Tsukuba/Japan},
 year = {2000}
}`
            },

  {
            'id': '674',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference on Visualization Sosiety of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-16,
 author = {Koichi Minami and Tomi Korpipaa and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {323-326},
 title = {Distributed Collaborative Work Support using Shared AR Environment - Shared Augmented Interior Design Space -},
 venue = {Tsukuba/Japan},
 year = {2000}
}`
            },

  {
            'id': '675',
            'author': 'Ryo Shikata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Meeting Support System for the Hearing Impaired',
            'year': '2000',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-15,
 author = {Mikako Murakami and Yoshito Tabata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Sign Linguistics},
 pages = {18-19},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '676',
            'author': 'Tatsuya Shuzui, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Data Structure of 3D Models for Heterogeneous Shared VR',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-14,
 author = {Takatoshi Suenaga and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {437-438},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '677',
            'author': 'Koichi Minami, Tomi Korpipaa, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Distributed Collaborative Work Support using Shared AR Environment - Shared Augmented Interior Design Space -',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-13,
 author = {Tomi Korpipaa and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {429-430},
 title = {Interior Design System using Two Heterogeneous Virtual Reality Platforms},
 year = {2000}
}`
            },

  {
            'id': '678',
            'author': 'Mikako Murakami, Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-12,
 author = {Tatsuya Shuzui and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {427-428},
 title = {*** No English title in DB***},
 venue = {Kyoto/Japan},
 year = {2000}
}`
            },

  {
            'id': '679',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-11,
 author = {Masataka Imura and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {165-166},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '680',
            'author': 'Tomi Korpipaa, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Interior Design System using Two Heterogeneous Virtual Reality Platforms',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-10,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {439-440},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '681',
            'author': 'Tatsuya Shuzui, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2000-domestic-conferences-1,
 author = {Atsushi Nakamura and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 pages = {45-50},
 title = {*** No English title in DB***},
 year = {2000}
}`
            },

  {
            'id': '682',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{1999-journal-papers-1,
 author = {Toshiyuki Umeda and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 journal = {Japanese Journal of Applied Physics},
 pages = {3409-3411},
 title = {A Real-Time Medical Ultrasound Image Sequence Transmission System with Narrow Integrated Service Digital Network},
 volume = {38},
 year = {1999}
}`
            },

  {
            'id': '683',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-international-conferences-5,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Artificial Reality and Tele-existence},
 pages = {146-153},
 title = {HIT-Wear: A Menu System Superimposing on a Human Hand for Wearable Computers},
 venue = {Tokyo/Japan},
 year = {1999}
}`
            },

  {
            'id': '684',
            'author': 'Atsushi Nakamura, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-international-conferences-4,
 author = {Takatoshi Suenaga and Toshiyuki Umeda and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Artificial Reality and Tele-existence},
 pages = {84-91},
 title = {A Tele-Instruction System for Ultrasound Tele-diagnosis},
 venue = {Tokyo/Japan},
 year = {1999}
}`
            },

  {
            'id': '685',
            'author': 'Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Real-Time Medical Ultrasound Image Sequence Transmission System with Narrow Integrated Service Digital Network',
            'year': '1999',
            'book': 'Japanese Journal of Applied Physics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{1999-international-conferences-3,
 author = {Osamu Oshiro and Shigetoki Iino and Takatoshi Suenaga and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Joint BMES/EMBS Conference},
 pages = {1223},
 title = {An Instruction System to Manipulate US Probe in Tele-Echo},
 venue = {Atlanta/USA},
 year = {1999}
}`
            },

  {
            'id': '686',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'HIT-Wear: A Menu System Superimposing on a Human Hand for Wearable Computers',
            'year': '1999',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-international-conferences-2,
 author = {Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {46-52},
 title = {A Research on Visualization of Finger Spelling in Sign Animation},
 venue = {Dundee/UK},
 year = {1999}
}`
            },

  {
            'id': '687',
            'author': 'Takatoshi Suenaga, Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Tele-Instruction System for Ultrasound Tele-diagnosis',
            'year': '1999',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-international-conferences-1,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of CSUN's Annual International Conference, Technology and Persons with Disabilities, Web Proceedings},
 title = {A Study on Facial Action Visualization on S-TEL: An Avatar Based Sign Language Telecommunication System},
 venue = {Los Angels/USA},
 year = {1999}
}`
            },

  {
            'id': '688',
            'author': 'Osamu Oshiro, Shigetoki Iino, Takatoshi Suenaga, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'An Instruction System to Manipulate US Probe in Tele-Echo',
            'year': '1999',
            'book': 'Proceedings of Joint BMES/EMBS Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-9,
 author = {Wakako Makari and Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {465-466},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '689',
            'author': 'Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'A Research on Visualization of Finger Spelling in Sign Animation',
            'year': '1999',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-8,
 author = {Yoshito Tabata and Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {461-462},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '690',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'A Study on Facial Action Visualization on S-TEL: An Avatar Based Sign Language Telecommunication System',
            'year': '1999',
            'book': 'Proceedings of CSUN\'s Annual International Conference, Technology and Persons with Disabilities, Web Proceedings',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-7,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {457-458},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '691',
            'author': 'Wakako Makari, Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-6,
 author = {Atsushi Nakamura and Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {455-456},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '692',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-5,
 author = {Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {459-460},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '693',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-4,
 author = {Masao Kitade and Toshiyuki Umeda and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {483},
 title = {*** No English title in DB***},
 volume = {37},
 year = {1999}
}`
            },

  {
            'id': '694',
            'author': 'Atsushi Nakamura, Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-3,
 author = {Toshiyuki Umeda and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {482},
 title = {*** No English title in DB***},
 volume = {37},
 year = {1999}
}`
            },

  {
            'id': '695',
            'author': 'Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-26,
 author = {Yoshito Tabata and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Technical Report of Japan Society of Educational Technology},
 pages = {39-44},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '696',
            'author': 'Masao Kitade, Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-25,
 author = {Tomohiro Kuroda and Takatoshi Suenaga and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {40-41},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '697',
            'author': 'Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-24,
 author = {Masataka Imura and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara and Joakim Brandberg and Per Ask},
 booktitle = {Proceedings of Symposium on Ultrasonic Electronics},
 pages = {171-172},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '698',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Technical Report of Japan Society of Educational Technology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-23,
 author = {Toshiyuki Umeda and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Symposium on Ultrasonic Electronics},
 pages = {163-164},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '699',
            'author': 'Tomohiro Kuroda, Takatoshi Suenaga, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-22,
 author = {Masaaki Nakano and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Japan Joint Automatic Control Conference},
 pages = {261-262},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '700',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Joakim Brandberg, Per Ask',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Symposium on Ultrasonic Electronics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-21,
 author = {Tomohiro Kuroda and Yoshito Tabata and Kunihiro Chihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 pages = {43-46},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '701',
            'author': 'Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Symposium on Ultrasonic Electronics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-20,
 author = {Toshiyuki Umeda and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 pages = {1-6},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '702',
            'author': 'Masaaki Nakano, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Japan Joint Automatic Control Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-2,
 author = {Shigetoki Iino and Takatoshi Suenaga and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {481},
 title = {*** No English title in DB***},
 volume = {37},
 year = {1999}
}`
            },

  {
            'id': '703',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-19,
 author = {Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {721-724},
 title = {A Method for Legible Sign Animation by On-demand Expansion of Avatar's Hand},
 venue = {Osaka/Japan},
 year = {1999}
}`
            },

  {
            'id': '704',
            'author': 'Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-18,
 author = {Yoshito Tabata and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {717-720},
 title = {A Method to Evaluate Finger Characters for Finger Spelling Learning System},
 venue = {Osaka/Japan},
 year = {1999}
}`
            },

  {
            'id': '705',
            'author': 'Shigetoki Iino, Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-17,
 author = {Atsushi Nakamura and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {99-102},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '706',
            'author': 'Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'A Method for Legible Sign Animation by On-demand Expansion of Avatar\'s Hand',
            'year': '1999',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-16,
 author = {Wakako Makari and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {367-368},
 title = {Automatic Generation of Avatar Inheriting User's Figure},
 venue = {Nara/Japan},
 year = {1999}
}`
            },

  {
            'id': '707',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'A Method to Evaluate Finger Characters for Finger Spelling Learning System',
            'year': '1999',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-15,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {415-416},
 title = {Hit-Wear: A Menu System Superimposing on a Human Hand for Wearable Computer},
 venue = {Nara/Japan},
 year = {1999}
}`
            },

  {
            'id': '708',
            'author': 'Atsushi Nakamura, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-14,
 author = {Takatoshi Suenaga and Toshiyuki Umeda and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {129-130},
 title = {A Tele-instruction System for Ultrasound Telediagnosis},
 venue = {Nara/Japan},
 year = {1999}
}`
            },

  {
            'id': '709',
            'author': 'Wakako Makari, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'Automatic Generation of Avatar Inheriting User\'s Figure',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-13,
 author = {Hiroshi Sasaki and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Correspondences on Human Interface},
 number = {4},
 pages = {21-24},
 title = {'Hit-Wear': a Input Interface for Wearable Computers utilizing Visual Feedback and Physical Sense},
 venue = {Kanazawa/Japan},
 volume = {1},
 year = {1999}
}`
            },

  {
            'id': '710',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'Hit-Wear: A Menu System Superimposing on a Human Hand for Wearable Computer',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-12,
 author = {Yoshito Tabata and Tomohiro Kuroda and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Sign Linguistics},
 pages = {60-63},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '711',
            'author': 'Takatoshi Suenaga, Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Tele-instruction System for Ultrasound Telediagnosis',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-11,
 author = {Takatoshi Suenaga and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {497-498},
 title = {*** No English title in DB***},
 venue = {Osaka/Japan},
 year = {1999}
}`
            },

  {
            'id': '712',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '\'Hit-Wear\': a Input Interface for Wearable Computers utilizing Visual Feedback and Physical Sense',
            'year': '1999',
            'book': 'Correspondences on Human Interface',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-10,
 author = {Toshiyuki Umeda and Tomohiro Kuroda and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {495-496},
 title = {*** No English title in DB***},
 year = {1999}
}`
            },

  {
            'id': '713',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1999-domestic-conferences-1,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Bio-Medical Engineering},
 pages = {142},
 title = {*** No English title in DB***},
 volume = {37},
 year = {1999}
}`
            },

  {
            'id': '714',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{1998-journal-papers-3,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 journal = {International Journal of Virtual Reality},
 number = {4},
 pages = {21-27},
 title = {S-TEL: An Avatar Based Sign Language Telecommunication System},
 volume = {3},
 year = {1998}
}`
            },

  {
            'id': '715',
            'author': 'Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{1998-journal-papers-2,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {2},
 pages = {41-46},
 title = {S-TEL: An Avatar Based Sign Language Telephone},
 volume = {3},
 year = {1998}
}`
            },

  {
            'id': '716',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{1998-journal-papers-1,
 author = {Tomohiro Kuroda},
 journal = {Doctoral Thesis, Nara Institute of Science and Technology},
 title = {A Study on Avatar Based Sign Communication -S-TEL : a Sign Language Telephone-},
 year = {1998}
}`
            },

  {
            'id': '717',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: An Avatar Based Sign Language Telecommunication System',
            'year': '1998',
            'book': 'International Journal of Virtual Reality',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{1998-international-conferences-3,
 author = {Tomohiro Kuroda and Ayumu Matani and Kunihiro Chihara},
 booktitle = {Proceedings of International Symposium on Computational Medicine III},
 pages = {31-35},
 title = {A Method to Support Tele-Diagnosis using Augmented Reality},
 venue = {Tokyo/Japan},
 year = {1998}
}`
            },

  {
            'id': '718',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: An Avatar Based Sign Language Telephone',
            'year': '1998',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{1998-international-conferences-2,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of European Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {159-167},
 title = {S-TEL: An Avatar Based Sign Language Telecommunication System},
 venue = {Linkoeping/Sweden},
 year = {1998}
}`
            },

  {
            'id': '719',
            'author': 'Tomohiro Kuroda',
            'title': 'A Study on Avatar Based Sign Communication -S-TEL : a Sign Language Telephone-',
            'year': '1998',
            'book': 'Doctoral Thesis, Nara Institute of Science and Technology',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{1998-international-conferences-1,
 author = {Tomohiro Kuroda},
 booktitle = {Lecture Notes of ICB Seminars -Ultrasound in Biomeasurements, Diagnostics and Therapy-},
 pages = {27-33},
 title = {New Image Compression Technique for Sector Scan Ultrasound Image},
 venue = {Warsaw/Poland},
 year = {1998}
}`
            },

  {
            'id': '720',
            'author': 'Tomohiro Kuroda, Ayumu Matani, Kunihiro Chihara',
            'title': 'A Method to Support Tele-Diagnosis using Augmented Reality',
            'year': '1998',
            'book': 'Proceedings of International Symposium on Computational Medicine III',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1998-domestic-conferences-6,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Human Interface News and Report},
 number = {4},
 pages = {559-562},
 title = {A Study on Facia Action Handling on Avatar Based Sign Language Telecommunication},
 venue = {Tokyo/Japan},
 volume = {13},
 year = {1998}
}`
            },

  {
            'id': '721',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: An Avatar Based Sign Language Telecommunication System',
            'year': '1998',
            'book': 'Proceedings of European Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1998-domestic-conferences-5,
 author = {Masao Kitade and Tomohiro Kuroda and Ayumu Matani and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {356-357},
 title = {A Method for Compressing and Transmitting Ultrasound B-mode Image in Telediagnosis},
 venue = {Kyotanabe/Japan},
 year = {1998}
}`
            },

  {
            'id': '722',
            'author': 'Tomohiro Kuroda',
            'title': 'New Image Compression Technique for Sector Scan Ultrasound Image',
            'year': '1998',
            'book': 'Lecture Notes of ICB Seminars -Ultrasound in Biomeasurements, Diagnostics and Therapy-',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1998-domestic-conferences-4,
 author = {Shigetoki Iino and Tomohiro Kuroda and Ayumu Matani and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {338-339},
 title = {An Instruction System for Ultrasound Tele Diagnosis using Augmented Reality},
 venue = {Kyotanabe/Japan},
 year = {1998}
}`
            },

  {
            'id': '723',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'A Study on Facia Action Handling on Avatar Based Sign Language Telecommunication',
            'year': '1998',
            'book': 'Human Interface News and Report',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1998-domestic-conferences-3,
 author = {Shigetoki Iino and Tomohiro Kuroda and Ayumu Matani and Osamu Oshiro and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {237-238},
 title = {An Instruction System for Ultrasound Tele Diagnosis using Augmented Reality},
 venue = {Sapporo/Japan},
 year = {1998}
}`
            },

  {
            'id': '724',
            'author': 'Masao Kitade, Tomohiro Kuroda, Ayumu Matani, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Method for Compressing and Transmitting Ultrasound B-mode Image in Telediagnosis',
            'year': '1998',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1998-domestic-conferences-2,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Sign Linguistics},
 pages = {14-15},
 title = {Analysis on Facial Expression Parameters suitable for Avatar-based Sign Language Communication},
 venue = {Tokorozawa/Japan},
 year = {1998}
}`
            },

  {
            'id': '725',
            'author': 'Shigetoki Iino, Tomohiro Kuroda, Ayumu Matani, Osamu Oshiro, Kunihiro Chihara',
            'title': 'An Instruction System for Ultrasound Tele Diagnosis using Augmented Reality',
            'year': '1998',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1998-domestic-conferences-1,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {439-440},
 title = {Basic Research on Display of Facial Expression on Avatar Based Sign Language Telecommunication System},
 venue = {Kyoto/Japan},
 year = {1998}
}`
            },

  {
            'id': '726',
            'author': 'Shigetoki Iino, Tomohiro Kuroda, Ayumu Matani, Osamu Oshiro, Kunihiro Chihara',
            'title': 'An Instruction System for Ultrasound Tele Diagnosis using Augmented Reality',
            'year': '1998',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{1997-journal-papers-1,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 journal = {Japanese Journal of Sign Linguistics},
 number = {1},
 pages = {1-11},
 title = {A Study on Readability of Computer-Graphics Signs in Sign Language Telecommunication System: S-TEL},
 volume = {14},
 year = {1997}
}`
            },

  {
            'id': '727',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Analysis on Facial Expression Parameters suitable for Avatar-based Sign Language Communication',
            'year': '1998',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1997-international-conferences-2,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Abridged Proceedings of  International Conference on Human-Computer Interaction},
 pages = {1-4},
 title = {S-TEL: VR-based Sign Language Telecommunication System},
 venue = {San Francisco/USA},
 year = {1997}
}`
            },

  {
            'id': '728',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Basic Research on Display of Facial Expression on Avatar Based Sign Language Telecommunication System',
            'year': '1998',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1997-international-conferences-1,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of CSUN's Annual International Conference, Technology and Persons with Disabilities},
 title = {S-TEL: A Sign Language Telephone using Virtual Reality Technologies},
 venue = {Los Angels/USA},
 year = {1997}
}`
            },

  {
            'id': '729',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'A Study on Readability of Computer-Graphics Signs in Sign Language Telecommunication System: S-TEL',
            'year': '1997',
            'book': 'Japanese Journal of Sign Linguistics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{1997-domestic-conferences-4,
 author = {Kosuke Sato and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on MEXT Virtual Reality Project},
 pages = {21-11},
 title = {Research of Facial Expression Transmission on Avatar-based Sign Language Telecommunication S-TEL},
 venue = {Ikoma/Japan},
 year = {1997}
}`
            },

  {
            'id': '730',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: VR-based Sign Language Telecommunication System',
            'year': '1997',
            'book': 'Abridged Proceedings of  International Conference on Human-Computer Interaction',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1997-domestic-conferences-3,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {228-229},
 title = {An Estimation of Upper Body Motion with Three Magnetic Sensors},
 venue = {Nagoya/Japan},
 volume = {2},
 year = {1997}
}`
            },

  {
            'id': '731',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: A Sign Language Telephone using Virtual Reality Technologies',
            'year': '1997',
            'book': 'Proceedings of CSUN\'s Annual International Conference, Technology and Persons with Disabilities',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1997-domestic-conferences-2,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Sign Linguistics},
 pages = {50-51},
 title = {Basic Analysis of Facial Expression Transmission on S-TEL A Sign Language Telephone},
 venue = {Naha/Japan},
 year = {1997}
}`
            },

  {
            'id': '732',
            'author': 'Kosuke Sato, Tomohiro Kuroda',
            'title': 'Research of Facial Expression Transmission on Avatar-based Sign Language Telecommunication S-TEL',
            'year': '1997',
            'book': 'Proceedings of Symposium on MEXT Virtual Reality Project',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1997-domestic-conferences-1,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {309-310},
 title = {Sign Language Telephone using Virtual Avatar and Facial Image},
 venue = {Osaka/Japan},
 year = {1997}
}`
            },

  {
            'id': '733',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'An Estimation of Upper Body Motion with Three Magnetic Sensors',
            'year': '1997',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{1996-journal-papers-1,
 author = {Tomohiro Kuroda},
 journal = {Master's Thesis, Nara Institute of Science and Technology},
 title = {S-TEL : A Telecommunication System for Sign Language},
 year = {1996}
}`
            },

  {
            'id': '734',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Basic Analysis of Facial Expression Transmission on S-TEL A Sign Language Telephone',
            'year': '1997',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1996-international-conferences-2,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Virtual Systems and Multimedia},
 pages = {429-432},
 title = {Reconstruction of Signer's Action in a VR Telecommunication System for Sign Language},
 venue = {Gifu/Japan},
 year = {1996}
}`
            },

  {
            'id': '735',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Sign Language Telephone using Virtual Avatar and Facial Image',
            'year': '1997',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1996-international-conferences-1,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Conference Companion of Asia Pacific Computer Human Interaction},
 pages = {82-91},
 title = {S-TEL: A Telecommunication System for Sign Language},
 venue = {Singapore/Singapore},
 year = {1996}
}`
            },

  {
            'id': '736',
            'author': 'Tomohiro Kuroda',
            'title': 'S-TEL : A Telecommunication System for Sign Language',
            'year': '1996',
            'book': 'Master\'s Thesis, Nara Institute of Science and Technology',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{1996-domestic-conferences-3,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 pages = {65-71},
 title = {S-TEL : A Sign Language Telephone},
 venue = {Nagano/Japan},
 year = {1996}
}`
            },

  {
            'id': '737',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Reconstruction of Signer\'s Action in a VR Telecommunication System for Sign Language',
            'year': '1996',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1996-domestic-conferences-2,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the Virtual Reality Society of Japan},
 pages = {189-190},
 title = {Reconstructing Upper-body Motion of Signers in S-TEL : A Tele-communication System for Sign Language},
 venue = {Tokyo/Japan},
 volume = {1},
 year = {1996}
}`
            },

  {
            'id': '738',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: A Telecommunication System for Sign Language',
            'year': '1996',
            'book': 'Conference Companion of Asia Pacific Computer Human Interaction',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1996-domestic-conferences-1,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of Japanese Association of Sign Linguistics},
 pages = {53-54},
 title = {Basic Analysis on Communication Bandwidth of S-TEL A Sign Language Telephone},
 venue = {Tsukuba/Japan},
 year = {1996}
}`
            },

  {
            'id': '739',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL : A Sign Language Telephone',
            'year': '1996',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1995-domestic-conferences-2,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {309-310},
 title = {A VR Telecommunication System in Sign Language},
 venue = {Kyoto/Japan},
 year = {1995}
}`
            },

  {
            'id': '740',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Reconstructing Upper-body Motion of Signers in S-TEL : A Tele-communication System for Sign Language',
            'year': '1996',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1995-domestic-conferences-1,
 author = {Tomohiro Kuroda and Kosuke Sato and Kunihiro Chihara},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {439-443},
 title = {System Configuration of 3D Visual Telecommunication in Sign Language},
 venue = {Osaka/Japan},
 year = {1995}
}`
            },

  {
            'id': '741',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Basic Analysis on Communication Bandwidth of S-TEL A Sign Language Telephone',
            'year': '1996',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{1994-domestic-conferences-1,
 author = {Yuji Tsuhima and Hideya Akashi and Jin Xi Du and Masahiro Susukita and Tomohiro Kuroda and Shinichiro Mori and Hiroshi Nakashima and Shinji Tomita},
 booktitle = {Proceedings of Joint Symposium on Parallel Processing},
 pages = {89-96},
 title = {A Parallel Computer Architecture for Volume Rendering},
 venue = {Tsukuba/Japan},
 year = {1994}
}`
            },

  {
            'id': '742',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'A VR Telecommunication System in Sign Language',
            'year': '1995',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@comment{@inproceedings{2001-international-conferences-5,
 author = {Yoshito Tabata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Image and Signal Processing},
 pages = {168-175},
 title = {Virtual DeerBack Riding −Walk through Virtual ancient NARA−},
 venue = {Agadir/Morrocco},
 year = {2001}
}}`
            },

  {
            'id': '743',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'System Configuration of 3D Visual Telecommunication in Sign Language',
            'year': '1995',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@comment{@inproceedings{2001-international-conferences-4,
 author = {Koichi Minami and Tomi Korpipaa and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Symposium on Mixed Reality},
 pages = {137-138},
 title = {An Interior Design System on Shared AR Space −A lock-free Communication Protocol for Smooth Interaction−},
 venue = {Yokohama/Japan},
 year = {2001}
}}`
            },

  {
            'id': '744',
            'author': 'Yuji Tsuhima, Hideya Akashi, Jin Xi Du, Masahiro Susukita, Tomohiro Kuroda, Shinichiro Mori, Hiroshi Nakashima, Shinji Tomita',
            'title': 'A Parallel Computer Architecture for Volume Rendering',
            'year': '1994',
            'book': 'Proceedings of Joint Symposium on Parallel Processing',
            'doi': '',
            'type': 'conference',
            'bibtex': `comment{@inproceedings{2001-international-conferences-13,
 author = {Koichi Minami and Tomi Korpipaa and Tatsuya Shuzui and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Lecture Notes in Computer Science},
 pages = {524-527},
 title = {Collaborative Work Support on Networked Heterogeneous Platforms −Shared Augmented Interior Design Space−},
 venue = {New Orleans/USA},
 volume = {1},
 year = {2001}
}}`
            },

],

                }
            }
        })
        