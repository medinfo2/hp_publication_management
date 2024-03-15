import glob
import os
from pprint import pprint

filelist = sorted(glob.glob("../data/*"))

# pprint(filelist)

with open("out.bib", "w") as f:
    for d in filelist:
        # ディレクトリでなければスキップ
        if not os.path.isdir(d):
            continue

        bibfile_path = glob.glob(f"{d}/*.bib")

        # 1個以上だとおかしいことになるのでチェック
        if len(bibfile_path) != 1:
            raise ValueError()
       	//for line in open(bibfile_path[0]):
	for line in open(bibfile_path[0], encoding='utf-8'):

            f.write(line)
        f.write("")
