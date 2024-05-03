memo
GSからのDL作る


cred file:
 ~/hpm/.cred/

requirement:
 bibtexparser
 gspread
 google




aggregate_one_file.py

main.py

それぞれapp.pyから呼べるようにラップする。


手順

HP


1. G:\共有ドライブ\MEDINFO_lab\Publications\medinfo_lab_work_list.gsheet
 -> download
 -> out.bib


 2022から個数分割無し

 out.bibをタグに応じて分離

 なければフォルダ作成

 フォルダ内にはcite.bib

 そこにappend()

 read
  list
  drop dulicate
  write new

