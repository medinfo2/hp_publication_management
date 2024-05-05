## hp_management packages

業績関連の編集パッケージ

20240503
GoogleSheetからGAS→ローカル→マニュアル割り振り→python 2回→upload
これの工程数多すぎ
なので
GoogleSheet→python
ぐらいに詰めた


既存の
aggregate_one_file.py  
および
main.py  
については、主要機能はそのまま

app.pyから呼ぶための関数を追加

app.bat -> app.pyでGUIアプリとしている

requirement:
 bibtexparser
 gspread

また、GCP APIのクレデンシャルファイルが必要である。  
これは管理者からもらうこと。


Todo?
OSのpythonを呼ぶ想定になっている。
これは適当な名前の仮想環境で動かすようなクッションがあったほうが良いかも。

