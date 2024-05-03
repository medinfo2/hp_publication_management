import tkinter as tk
from tkinter import ttk


import time
import os, sys, shutil

# import glob
import pandas as pd
from functools import partial
import json
import re
# import subprocess

import aggregate_one_file as a1
import main as mn
# import app_setting

app_ver = 0.1
print("app_ver:{}".format(app_ver))


from google.oauth2.service_account import Credentials
# from google.oauth2. import Credentials
import gspread

def d2jbib(d):
    bibtexText = "@article{}{},".format("{",d["tag"]) + "\n"
    bibtexText    += "  author   = {{{}}},".format(d["著者名"])     + "\n"
    bibtexText    += "  title    = {{{}}},".format(d["題目"])       + "\n"
    bibtexText    += "  journal  = {{{}}},".format(d["雑誌名_論文誌名"])         + "\n"
    bibtexText    += "  volume   = {{{}}},".format(d["巻_Volume_"])            + "\n"
    bibtexText    += "  number   = {{{}}},".format(d["号_No____Issue_"])             + "\n"
    bibtexText    += "  pages    = {{{}}},".format(d["開始_終了ページ"])             + "\n"
    bibtexText    += "  year     = {{{}}},".format(d["出版年"])              + "\n"
    if d["DOI"] != "":
        doi = d["DOI"].replace("https://doi.org/","")
        bibtexText    += "  doi      = {{{}}},".format(doi) + "\n";  
    bibtexText    += "}" + "\n";
    return bibtexText

def d2cbib(d):
    if "発表者" in d.keys():
        d["発表者名"] = d["発表者"]
    if "開始ページ_終了ページ" in d.keys():
        d["開始_終了ページ"] = d["開始ページ_終了ページ"]
    bibtexText = "@article{}{},".format("{",d["tag"]) + "\n"
    bibtexText    += "  author     = {{{}}},".format(d["発表者名"])     + "\n"
    bibtexText    += "  title      = {{{}}},".format(d["演題"])       + "\n"
    bibtexText    += "  booktitle  = {{{}}},".format(d["雑誌_論文誌_会議名_学会名_"])         + "\n"
    bibtexText    += "  pages      = {{{}}},".format(d["開始_終了ページ"])             + "\n"
    bibtexText    += "  year       = {{{}}},".format(d["発表年"])              + "\n"
    bibtexText    += "  location   = {{{}}},".format(d["開催地"])              + "\n"
    if d["DOI"] != "":
        doi = d["DOI"].replace("https://doi.org/","")
        bibtexText    += "  doi      = {{{}}},".format(doi) + "\n";  
    bibtexText    += "}" + "\n";
    return bibtexText

d_categ = {
    "英文学術論文":"journal-papers",
    "和文学術論文":"japanese-journal-papers",
    "国際会議発表":"international-conferences",
    "国内会議発表":"domestic-conferences"
}



# 作っておくこと
f_cred = os.path.expanduser("~")+ "\\hmp\\.cred\\rwd-phr-09db77e413de.json"
scopes = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive'
]

credentials = Credentials.from_service_account_file(
    f_cred,
    scopes=scopes
)

gc = gspread.authorize(credentials)



def opJdic(file):
    with open(file) as f:
        d = json.load(f)
    return d

def saveJdic(dic, file):
    with open(file, 'w') as fp:
        json.dump(dic, fp)


def echo():
    print("oisu!")

def quit():
    print("OK! I WILL QUIT!")



def dl_from_gsheet():
    global d_set
    global input_box1
    d_set['ym'] = input_box1.get()
    saveJdic(d_set, f_set)

    dic = d_set.copy()
    print(dic)

    get_ym = d_set['ym']
    get_ym = get_ym.split("/")

    get_y, get_m = get_ym[0], get_ym[1]
    get_y, get_m = int(get_y), int(get_m)
    print("get_ym:{}, {}".format(get_y, get_m))

    spreadsheet_url = "https://docs.google.com/spreadsheets/d/1t5EqbwwB1UQS5MTFS5nQu_47BzelIy0WfljicWuF1FY"

    spreadsheet = gc.open_by_url(spreadsheet_url)
    print(spreadsheet)

    for i in range(1,5):
        print(i)
        s_i = spreadsheet.get_worksheet(i)
        tit_i = s_i.title
        id_i = s_i.id
        head_i = d_categ[tit_i]
        print(tit_i, head_i)
        df_i = pd.DataFrame(s_i.get_all_values())
        
        c_cand = [c for c in df_i.loc[0,:].to_list()]
        c_cand = [c if c != "" else "c"+str(i)  for i, c in enumerate(c_cand)]
        c_cand = [re.sub(r"[ .\/\(\)（）・]", "_", c) for c in c_cand]
        df_i.columns = c_cand
        
        df_i = df_i\
            .query("DOI != 'DOI'")\
            .assign(n_of_sla = lambda df:df.HP登録年月.str.count("/"))\
            .query("n_of_sla >0")\
            .assign(hp_in_y = lambda df:df.HP登録年月.str.split("/").str.get(0).astype(int),
                    hp_in_m = lambda df:df.HP登録年月.str.split("/").str.get(1).astype(int))
        df_i.head()
        
        if "journal" in head_i:
            print("journal bib")
            fx = d2jbib
        elif "conference" in head_i:
            print("conf bib")
            fx = d2cbib
        else:
            print("non type!")
        
        bib = ""
        # save_d = "../data/{}-{}-{}".format(get_y, get_m, head_i)
        save_d = "./data/{}-{}-{}".format(get_y, get_m, head_i)
        out_f = save_d + "/cite.bib"
        for r in df_i\
            .query("hp_in_y == @get_y and hp_in_m == @get_m")\
            .reset_index()\
            .itertuples():
            print(r)
            d = r._asdict()
            tag = "{}-{}-{}-{}".format(get_y, get_m, head_i, d["Index"]+1)
            d["tag"] = tag
            b = fx(d)
            bib += b 

        print(bib)
        if bib != "":
            if not os.path.exists(save_d):
                print("create dir:{}".format(save_d))
                os.makedirs(save_d)

            print("save bib:{}".format(out_f))
            with open(out_f, "w",encoding="utf_8") as f:
                f.write(bib)
        
    
def comm_save():
    global d_set
    
    messe(d_set)
    d_set['yyyy/mm'] = input_box1.get()
    # d_set['Downloadfolder'] = input_box2.get()
    # d_set['DateofConf'] = input_box3.get()
    saveJdic(d_set, f_set)


# def comm_callC():
#     global d_set
    
#     cmd = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --user-data-dir="C:\\Users\\' +d_set["username"] + '\\AppData\\Local\\Google\\Chrome\\USER1"'
#     subprocess.call(cmd)

# def comm_callCX86():
#     global d_set
    
#     cmd = '"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" --user-data-dir="C:\\Users\\' +d_set["username"] + '\\AppData\\Local\\Google\\Chrome\\USER1"'
#     subprocess.call(cmd)

def app_do():
    print(os.getcwd())
    # mod_path = app.__file__
    global f_set

    #home / u2d2に設定ファイルが無いとコピーして作る。
    home = os.path.expanduser("~")
    confdir = home + "\\hmp\\"
    if not os.path.exists(confdir):
        os.makedirs(confdir)
    f0_set =  __file__.replace("app.py", "mod/appset.json")
    f_set = confdir + "appset.json"
    if not os.path.exists(f_set):
        shutil.copy2(f0_set, f_set)
    
    print(__file__)

    # f_set = "./mod/appset.json"
    global d_set
    d_set = opJdic(f_set)

    root = tk.Tk()
    root.title("hpm_ver.{}".format(app_ver))
    root.geometry("500x320")

    # set_c = df_setting.loc["current",:]

    frame1 = ttk.Frame(root, padding=(32))
    frame1.grid()

    label1 = ttk.Label(frame1, text='yyyy/mm/dd', padding=(5, 2))
    label1.grid(row=0, column=0, sticky=tk.E)

    # label2 = ttk.Label(frame1, text='agg_1', padding=(5, 2))
    # label2.grid(row=1, column=0, sticky=tk.E)

    # label3 = ttk.Label(frame1, text='Dateofconf', padding=(5, 2))
    # label3.grid(row=2, column=0, sticky=tk.E)

    # テキストボックス設置 <---追加するコード
    global input_box1
    input_box1 = ttk.Entry(frame1,text='yyyy/mm/dd')
    input_box1.insert(0, d_set["ym"])
    # input_box.place(x = 10, y = 10)
    input_box1.grid(row=0, column=1)

    # テキストボックス設置 <---追加するコード
    # global input_box2
    # input_box2 = ttk.Entry(frame1,text='Downloadfolder')
    # # input_box1.place(x = 10, y = 40)
    # input_box2.insert(0, d_set["Downloadfolder"])
    # input_box2.grid(row=1, column=1)

    # # テキストボックス設置 <---追加するコード
    # global input_box3
    # input_box3 = ttk.Entry(frame1,text='DateofConf')
    # # input_box2.place(x = 10, y = 70)
    # input_box3.insert(0, d_set["DateofConf"])
    # input_box3.grid(row=2, column=1)

    frame2 = ttk.Frame(frame1, padding=(0, 5))
    frame2.grid(row=4, column=1, sticky=tk.W)

    button1 = ttk.Button(
        frame2, text='DownFromGS',
        command=dl_from_gsheet)
    #     command=partial(getWhole_d, d_set))
    # button1.pack(side=tk.LEFT)
    button1.grid(row =1, column=1)

    button1_2 = ttk.Button(
        frame2, text='Agg1',
        command=a1.agg_1)
    #     command=partial(getWhole_d, d_set))
    # button1.pack(side=tk.LEFT)
    button1_2.grid(row =1, column=2)

    button2 = ttk.Button(
        frame2, text='bib2js',
        command=mn.main2)
    #     command=partial(getWhole_d, d_set))
    # button1.pack(side=tk.LEFT)
    button2.grid(row =2, column=1)

    # button2_2 = ttk.Button(
    #     frame2, text='UpToE',
    #     command=comm_UptoE)
    # #     command=partial(getWhole_d, d_set))
    # # button1.pack(side=tk.LEFT)
    # button2_2.grid(row =2, column=2)


    # # button2 = ttk.Button(frame2, text='Save', command=partial(saveJdic, d_set, f_set2))
    # button3 = ttk.Button(frame2, text='Save', command=comm_save)
    # button3.grid(row =3, column=1)

    # button3_1 = ttk.Button(frame2, text='Cancel', command=root.quit)
    # button3_1.grid(row =3, column=2)

    # # button3 = ttk.Button(frame2, text='Cancel', command=root.quit)
    # # button3.grid(row =3, column=2)

    # button4 = ttk.Button(frame2, text='callChrmX86', command=comm_callCX86)
    # button4.grid(row =4, column=1)

    # button4 = ttk.Button(frame2, text='callChrm', command=comm_callC)
    # button4.grid(row =4, column=2)






    # frame3 = ttk.Frame(frame2, padding=(0, 5))
    # frame3.grid(row=3, column=1, sticky=tk.W)


    # output_box1 = ttk.Entry(frame3,text='')
    # output_box1.pack(side=tk.BOTTOM)

    root.mainloop()


if __name__ == '__main__':
    app_do()
else:
    print("in module importing.")
    # print(d_set)
    # print(input_box1)