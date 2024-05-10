
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
2024,
2023,
2022,
2021,
2020,
2019,
2018,
2017,
2016,
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
            'author': 'Yuki Kuroda Goshiro Yamamoto Tomohiro Kuroda',
            'title': 'Identifying undefined risks: A risk model and a privacy risk identification measure in the privacy impact assessment process',
            'year': '2024',
            'book': 'The Information Society',
            'doi': 'https://doi.org/10.1080/01972243.2024.2332319',
            'type': 'journal',
            'bibtex': `@incollection{Santos2019e,
 abstract = {We present the design process and evaluation of a pervasive, location-based mobile game created to act as an experiment system and allow evaluation of how different design elements can influence player behaviour, using social interaction as a study case. A feasibility study with a group of community dwelling elderly volunteers from the city of Kyoto, Japan, was performed to evaluate the system. Results showed that the choice of theme and overall design of game was adequate, and that elderly people could understand the game rules and their goals while playing. Points of improvement included reducing the complexity of game controls and changing social interaction mechanics to account for situations when there are only a few players active or players are too far apart.},
 author = {Santos, Luciano Henrique Oliveira and Okamoto, Kazuya and Hiragi, Shusuke and Yamamoto, Goshiro and Sugiyama, Osamu and Aoyama, Tomoki and Kuroda, Tomohiro},
 booktitle = {Human Aspects of IT for the Aged Population. Applications in Health, Assistance, and Entertainment},
 doi = {10.1007/978-3-030-22015-0_16},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2019 - Santos et al. - Design Elements of Pervasive Games for Elderly Players A Social Interaction Study Case.pdf:pdf},
 pages = {204--215},
 title = {Design Elements of Pervasive Games for Elderly Players: A Social Interaction Study Case},
 url = {http://link.springer.com/10.1007/978-3-030-22015-0_16},
 year = {2019}
}`
            },

  {
            'id': '1',
            'author': '田中良樹 御手洗彰 劉暢 江口佳那 植嶋大晃 森由希子 山本豪志朗 黒田知宏',
            'title': '表面筋電測定を用いた筋力の定量評価方法の検討',
            'year': '2023',
            'book': '第43回 医療情報学連合大会',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{Santos2019d,
 author = {Santos, Luciano HO and Okamoto, Kazuya and Hiragi, Shusuke and Yamamoto, Goshiro and Sugiyama, Osamu and Aoyama, Tomoki and Kuroda, Tomohiro},
 doi = {10.1177/2055668319844443},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2019 - Santos et al. - Pervasive game design to evaluate social interaction effects on levels of physical activity among older adults.pdf:pdf},
 issn = {2055-6683},
 journal = {Journal of Rehabilitation and Assistive Technologies Engineering},
 month = {jan},
 pages = {205566831984444},
 title = {Pervasive game design to evaluate social interaction effects on levels of physical activity among older adults},
 url = {http://journals.sagepub.com/doi/10.1177/2055668319844443},
 volume = {6},
 year = {2019}
}`
            },

  {
            'id': '2',
            'author': '福山 啓太 森 由希子 植嶋 大晃 黒田 知宏',
            'title': '経時的な薬価と処置料改定に対応したマスター作成',
            'year': '2023',
            'book': '第43回 医療情報学連合大会',
            'doi': '',
            'type': 'journal',
            'bibtex': `@incollection{Santos2019c,
 abstract = {We present the design process and evaluation of a set of new social interaction mechanics in a mobile, location-based game, developed to explore the effect of variations in design elements in elderly people's levels of physical activity. The game had previously been evaluated in Kyoto, Japan, and new social interaction mechanics were proposed and evaluated in a different cultural context, Brazil, with a group of elderly volunteers in the Brazilian city of Pelotas. The cultural adaptation was made in a way to preserve the core design principles of the game and allow for evaluation of the new proposed social interactions, which were found to create a more enjoyable and engaging experience for the players.},
 address = {Singapore},
 author = {Santos, Luciano H O and Okamoto, Kazuya and Cavalli, Adriana S and Hiragi, Shusuke and Yamamoto, Goshiro and Sugiyama, Osamu and Castanho, Carla D and Aoyama, Tomoki and Kuroda, Tomohiro},
 booktitle = {Innovation in Medicine and Healthcare Systems, and Multimedia},
 doi = {10.1007/978-981-13-8566-7_29},
 editor = {Chen, Yen-Wei and Zimmermann, Alfred and Howlett, Robert J and Jain, Lakhmi C},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2019 - Santos et al. - Designing Pervasive Social Interaction Mechanics for Elderly Players A Multicultural Study Case(2).pdf:pdf},
 isbn = {978-981-13-8566-7},
 pages = {293--303},
 publisher = {Springer Singapore},
 title = {Designing Pervasive Social Interaction Mechanics for Elderly Players: A Multicultural Study Case},
 url = {http://link.springer.com/10.1007/978-981-13-8566-7_29},
 year = {2019}
}`
            },

  {
            'id': '3',
            'author': '植嶋大晃, 森由希子, 加藤源太, 中山健夫, 今村知明, 康永秀生, 田宮菜奈子, 杉山雄大, 大寺祥佑, 山本喜一, 松岡歩, 岩渕菜穂子, 黒田知宏',
            'title': '介護DBを用いた基礎的集計および「介護DBコードブック」の作成',
            'year': '2023',
            'book': '第82回 日本公衆衛生学会総会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{Santos2019b,
 abstract = {Background: The novel genre of pervasive games, which aim to create more fun and engaging experiences by promoting deeper immersion, could be a powerful strategy to stimulate physical activity among older adults. To use these games more effectively, it is necessary to understand how different design elements affect player behavior. Objective: The aim was to vary a specific design element of pervasive games for older adults, namely social interaction, to test the effect on levels of physical activity. Methods: Over 4 weeks, two variations of the same pervasive game were compared: social interaction for the test group and no social interaction for the control group. In both versions, players had to walk to physical locations and collect virtual cards, but the social interaction version allowed people to collaborate to obtain more cards. Weekly step counts were used to evaluate the effect on each group, and the number of places visited was used as an indicator of play activity. Results: A total of 32 participants were recruited (no social interaction=15, social interaction=17); 18 remained until the end of the study (no social interaction=7, social interaction=11). Step counts during the first week were used as the baseline (no social interaction: mean 17,099.4, SE 3906.5; social interaction: mean 17,981.9, SE 2171.1). For the following weeks, changes to individual baseline were as follows for no social interaction (absolute/proportional): 383.8 (SE 563.8)/1.1% (SE 4.3%), 435.9 (SE 574.5)/2.2% (SE 4.6%), and −106.1 (SE 979.9)/−2.6% (SE 8.1%) for weeks 2, 3, and 4, respectively. For social interaction they were 3841.9 (SE 1425.4)/21.7% (SE 5.1%), 2270.6 (SE 947.1)/16.5% (SE 4.4%), and 2443.4 (SE 982.6)/17.9% (SE 4.7%) for weeks 2, 3, and 4, respectively. Analysis of group effect was significant (absolute change: $η$2=.19, P=.01; proportional change: $η$2=.27, P=.009). Correlation between the proportional change and the play activity was significant (r=.34, 95% CI 0.08 to 0.56), whereas for absolute change it was not. Conclusions: Social interaction design elements of the pervasive game may have some positive effects on the promotion of physical activity, although other factors might also have influenced this effect. http://games.jmir.org/2019/3/e13962/},
 author = {Santos, Luciano HO and Okamoto, Kazuya and Funghetto, Silvana Schwerz and Cavalli, Adriana Schüler and Hiragi, Shusuke and Yamamoto, Goshiro and Sugiyama, Osamu and Castanho, Carla Denise and Aoyama, Tomoki and Kuroda, Tomohiro},
 doi = {10.2196/13962},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2019 - Santos et al. - Effects of Social Interaction Mechanics in Pervasive Games on the Physical Activity Levels of Older Adults Quasi-.pdf:pdf},
 issn = {2291-9279},
 journal = {JMIR Serious Games},
 keywords = {aged,pervasive games,physical activity,social interaction Introduction},
 month = {jul},
 number = {3},
 pages = {e13962},
 title = {Effects of Social Interaction Mechanics in Pervasive Games on the Physical Activity Levels of Older Adults: Quasi-Experimental Study},
 url = {http://games.jmir.org/2019/3/e13962/},
 volume = {7},
 year = {2019}
}`
            },

  {
            'id': '4',
            'author': '山﨑一幸, 加藤源太, 栗山明, 本間健太郎, 松川香菜, 石黒雅代, 小谷将司, 森由希子, 黒田知宏, 大鶴繁, 妹尾浩',
            'title': '救急外来からの入院が病院稼働額に及ぼす影響',
            'year': '2023',
            'book': '第51回 日本救急医学会総会・学術集会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{Santos2019a,
 address = {Fukuoka, Japan},
 author = {Santos, Luciano H O and Okamoto, Kazuya and Otsuki, Ryo and Hiragi, Shusuke and Yamamoto, Goshiro and Sugiyama, Osamu and Aoyama, Tomoki and Kuroda, Tomohiro},
 booktitle = {Entertainment Computing 2019},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2019 - Santos et al. - Evaluating the Effect of Social Interaction in a Pervasive Game to Promote Physical Activity of Older Adults.pdf:pdf},
 keywords = {aged,pervasive games,physical activity,social interaction},
 pages = {289--293},
 publisher = {Information Processing Society of Japan},
 title = {Evaluating the Effect of Social Interaction in a Pervasive Game to Promote Physical Activity of Older Adults},
 year = {2019}
}`
            },

  {
            'id': '5',
            'author': '山下晃平, 門野勇介, 粂川雅子, 阪本恭子, 山本剛, 中井隆史, 岸本和昌, 竹村匡正',
            'title': 'オンプレミス型大規模LLMモデルを用いた自動サマリ生成の可能性の検討',
            'year': '2023',
            'book': '第43回 医療情報学連合大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{Santos2018a,
 abstract = {Pervasive electronic games use innovative mechanics to create immersion and promote user engagement, thus being a potentially powerful tool to promote active lifestyles among the elderly. We describe a pervasive game developed to test how design elements can affect older adults' levels of physical activity, using social interaction as case study. Two variations of the game were developed – including or not social interaction – and a feasibility study was performed to evaluate the proposed design and its potential to affect the levels of physical activity of players.},
 author = {Santos, Luciano Henrique Oliveira and Okamoto, Kazuya and Hiragi, Shusuke and Yamamoto, Goshiro and Sugiyama, Osamu and Aoyama, Tomoki and Kuroda, Tomohiro},
 booktitle = {International Conference on Disability, Virtual Reality and Associated Technologies},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2018 - Santos et al. - Pervasive Game Design to Evaluate Social Interaction Effects on Levels of Physical Activity among Older Adults.pdf:pdf},
 isbn = {9780704915480},
 number = {12th},
 pages = {157--164},
 title = {Pervasive Game Design to Evaluate Social Interaction Effects on Levels of Physical Activity among Older Adults},
 year = {2018}
}`
            },

  {
            'id': '6',
            'author': '黒田知宏, 小林慎治',
            'title': '北欧諸国のデジタルヘルス戦略とEHDSの関係に関する調査報告',
            'year': '2023',
            'book': '第43回 医療情報学連合大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{Santos2018,
 address = {Kyoto},
 author = {Santos, Luciano H O and Okamoto, Kazuya and Hiragi, Shusuke and Yamamoto, Goshiro and Sugiyama, Osamu and Aoyama, Tomoki and Kuroda, Tomohiro},
 booktitle = {第153回ヒューマンインタフェース学会研究会 高齢者、障がい者支援技術および一般},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2018 - Santos et al. - Pervasive Game Design to Promote an Active Lifestyle among Older Adults Using Social Interaction.pdf:pdf},
 keywords = {older adults,pervasive games,physical activity,social interaction},
 pages = {9--12},
 publisher = {ヒューマンインタフェース学会},
 title = {Pervasive Game Design to Promote an Active Lifestyle among Older Adults Using Social Interaction},
 year = {2018}
}`
            },

  {
            'id': '7',
            'author': '須藤 英隼, 中原 孝洋, 黒田 知宏',
            'title': 'パニック障害の架空症例を用いた対話型AI ChatGPTの精神科領域における臨床的有用性の検討',
            'year': '2023',
            'book': '第43回 医療情報学連合大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{Santos2017,
 abstract = {In this paper, we describe the design of a pervasive game that uses social interaction to increase daily activity among elderly people. We propose an experiment in which the game design is analyzed with respect to how social interaction affects player's daily activity levels. In order to allow comparison between test and control groups, different variations of the game were designed, including one with no social interaction and two others including presential and remote social interaction.},
 author = {Santos, Luciano Henrique Oliveira and Okamoto, Kazuya and Yamamoto, Goshiro and Sugiyama, Osamu and Aoyama, Tomoki and Kuroda, Tomohiro},
 booktitle = {Entertainment Computing Symposium 2017},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2017 - Santos et al. - A Pervasive Game to Evaluate the Effectiveness of Social Interaction to Increase Daily Activity of Older Adults.pdf:pdf},
 keywords = {Older Adults,Pervasive Games,Physical Activity,Social Interaction},
 pages = {232--236},
 publisher = {Information Processing Society of Japan},
 title = {A Pervasive Game to Evaluate the Effectiveness of Social Interaction to Increase Daily Activity of Older Adults},
 url = {http://id.nii.ac.jp/1001/00183408/},
 volume = {2017},
 year = {2017}
}`
            },

  {
            'id': '8',
            'author': '加藤源太, 植嶋大晃, 森由希子, 中山健夫, 山本喜一, 岩渕菜穂子, 浜口まどか, 今村知明, 康永秀生, 田宮菜奈子, 杉山雄大, 大寺祥佑, 黒田知宏',
            'title': 'NDB と介護 DB の連結解析に際しての、要介護認定情報の活用方法に関する考察',
            'year': '2023',
            'book': '第82回 日本公衆衛生学会総会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{Otsuki2020,
 author = {Otsuki, Ryo and Sugiyama, Osamu and Mori, Yuki and Miyake, Masahiro and Hiragi, Shusuke and Yamamoto, Goshiro and Santos, Luciano and Nakanishi, Yuta and Hosoda, Yoshikatsu and Tamura, Hiroshi and Matsumoto, Shigemi and Tsujikawa, Akitaka and Kuroda, Tomohiro},
 doi = {10.14326/abe.9.241},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2020 - Otsuki et al. - Deep Learning Model to Predict Postoperative Visual Acuity from Preoperative Multimedia Ophthalmic Data.pdf:pdf},
 issn = {2187-5219},
 journal = {Advanced Biomedical Engineering},
 keywords = {AMD,deep neural network,visual acuity prediction},
 pages = {241--248},
 title = {Deep Learning Model to Predict Postoperative Visual Acuity from Preoperative Multimedia Ophthalmic Data},
 url = {https://www.jstage.jst.go.jp/article/abe/9/0/9_9_241/_article},
 volume = {9},
 year = {2020}
}`
            },

  {
            'id': '9',
            'author': '伊東寛敏, 藤井清孝, 海老根智代, 岸本和昌, 古平聡',
            'title': 'メルスペクトログラムを用いた医療機器アラームの定量評価に向けた基礎的検討',
            'year': '2023',
            'book': '第6回神奈川県臨床工学会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{Okamoto2020,
 abstract = {The goal of this research was to design a solution to detect non-reported incidents, especially severe incidents. To achieve this goal, we proposed a method to process electronic medical records and automatically extract clinical notes describing severe incidents. To evaluate the proposed method, we implemented a system and used the system. The system successfully detected a non-reported incident to the safety management department.},
 author = {Okamoto, Kazuya and Yamamoto, Takashi and Santos, Luciano H. O. and Hiragi, Shusuke and Sugiyama, Osamu and Yamamoto, Goshiro and Hirose, Masahiro and Kuroda, Tomohiro},
 doi = {10.24105/ejbi.2020.16.1.2},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2020 - Okamoto et al. - Detecting Severe Incidents from Electronic Medical Records Using Machine Learning Methods.pdf:pdf},
 journal = {European Journal for Biomedical Informatics},
 keywords = {Safety management,medical records,supervised machine learning},
 number = {1},
 pages = {3},
 title = {Detecting Severe Incidents from Electronic Medical Records Using Machine Learning Methods},
 volume = {16},
 year = {2020}
}`
            },

  {
            'id': '10',
            'author': '植嶋大晃, 森由希子, 加藤源太, 中山健夫, 今村知明, 康永秀生, 田宮菜奈子, 杉山雄大, 大寺祥佑, 山本喜一, 松岡歩, 岩渕菜穂子, 黒田知宏',
            'title': '介護DBを用いた基礎的集計および「介護DBコードブック」の作成',
            'year': '2023',
            'book': '第82回 日本公衆衛生学会総会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{Morris2020,
 abstract = {Objectives: Emergency Physicians utilize multiple patient information (PI) sources within Emergency Departments. Access to a centralized health record system is ideal but not always available to physicians. A technological gap exists in the context of PI sharing regarding patients' representative and their in-situ involvement as an alternative PI source. The purpose of this study is to understand emergency physicians' perceptions about patients' representative and our design concept for improvement of PI sharing to physicians. Methods: Observations focused on physician's interaction with representatives were used to understand the emergency setting which led to a mobile PI sharing application design. Semi-structured interviews were conducted with three experienced physicians to obtain their perceptions about the usefulness of our proposed design. Results: Physicians shared their experiences about interactions with patient representatives and perceptions about potential use our proposed design concept. Physicians' main problems during interaction with representatives were insufficient PI and occasional unfavorable attitudes. Regarding our design concept, physicians' perceived benefits were reduced information-seeking time, reduced PI search actions, and reduced stress. Physicians' perceived shortcomings were related inter-department PI sharing features and insufficient PI relating patients' daily activities prior to admission and a do not resuscitate policy. Conclusion: Physicians are willing to use our design concept in the future if concerns about security, upto- date PI and PI reliability are addressed. Although our current design concept focuses on the point of interaction between physicians and representatives, our scope will be widened to consider inter-ED PI sharing features and event-based PI.},
 author = {Morris, Kensuke and Yamamoto, Goshiro and Sugiyama, Osamu and Santos, Luciano H. O. and Tsutsumi, Takahiko and Ohtsuki, Ryo and Kato, Genta and Hiragi, Shusuke and Okamoto, Kazuya and Nambu, Masayuki and Kuroda, Tomohiro},
 doi = {10.24105/ejbi.2020.16.3.1},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2020 - Morris et al. - Designing a Mobile Patient Information Sharing System using Patient's Community Members Perceptions of Emergency.pdf:pdf},
 issn = {1801-5603},
 journal = {European Journal for Biomedical Informatics},
 keywords = {Emergency Department,Genta Kato,Goshiro Yamamoto,Information Sharing,Kazuya Okamoto,Kensuke Morris*,Luciano H.O Santos,Masayuki Nambu,Osamu Sugiyama,Patient Preferences,Representative Involvement,Ryo Ohtsuki,Shusuke Hiragi,Takahiko Tsutsumi,Tomohiro Kuroda,mHealth},
 number = {3},
 publisher = {International Journal of Medical Research & Health Sciences},
 title = {Designing a Mobile Patient Information Sharing System using Patient's Community Members: Perceptions of Emergency Physicians},
 url = {https://www.ejbi.org/abstract/designing-a-mobile-patient-information-sharing-system-using-patients-community-members-perceptions-of-emergency-physicia-5881.html},
 volume = {16},
 year = {2020}
}`
            },

  {
            'id': '11',
            'author': '山﨑一幸, 加藤源太, 栗山明, 本間健太郎, 松川香菜, 石黒雅代, 小谷将司, 森由希子, 黒田知宏, 大鶴繁, 妹尾浩',
            'title': '救急外来からの入院が病院稼働額に及ぼす影響',
            'year': '2023',
            'book': '第51回 日本救急医学会総会・学術集会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{Heryawan2020a,
 abstract = {Subjective, objective, assessment, and plan (SOAP) notes are widely used by physicians to docu-ment clinical reasoning in assessing, diagnosing, and treating patients. SOAP notes are also used in medical coding tasks for reimbursement of insurance claims. In Indonesia, medical coders who are independent from physicians assess SOAP notes to assign diagnostic codes and medical procedure codes based on the corre-sponding International Classification of Diseases standards. Discrepancies between physicians who write the SOAP notes and coders who assign diagnoses and treatments, may occur. These discrepancies were assessed by performing a video-based survey to understand the coder's perspective, allowing the development of a writing support system to achieve unproblematic SOAP notes. This survey found that problematic SOAP notes were not caused by a single problem but by multiple problems. Abbreviations used by physicians are the major problem in assigning diagnostic codes, whereas incomplete data are the major problem in determining plan-ning. This survey also showed that problematic SOAP notes may contain helpful keywords for coders that can help in determining diagnosis and treatment. The findings show that the system should be able to recognize sep-arate sections of the SOAP note to provide writing support features and identify helpful keywords to encourage physicians to write unproblematic SOAP notes.},
 author = {Heryawan, Lukman and Khotimah, Purnomo Husnul and Sugiyama, Osamu and Yamamoto, Goshiro and Santos, Luciano Henrique de Oliveira and Pramono, Angga Eko and Okamoto, Kazuya and Kuroda, Tomohiro},
 doi = {10.14326/abe.9.146},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2020 - Heryawan et al. - Toward Design of an Agent-based Writing Support System for the SOAP Note A Content Analysis of the Video-based.pdf:pdf},
 issn = {2187-5219},
 journal = {Advanced Biomedical Engineering},
 keywords = {Agent,Coder's perspective,Indonesia,Medical coding,SOAP note,Writing support system},
 pages = {146--153},
 title = {Toward Design of an Agent-based Writing Support System for the SOAP Note: A Content Analysis of the Video-based Survey},
 url = {https://www.jstage.jst.go.jp/article/abe/9/0/9_9_146/_article},
 volume = {9},
 year = {2020}
}`
            },

  {
            'id': '12',
            'author': '山下晃平, 門野勇介, 粂川雅子, 阪本恭子, 山本剛, 中井隆史, 岸本和昌, 竹村匡正',
            'title': 'オンプレミス型大規模LLMモデルを用いた自動サマリ生成の可能性の検討',
            'year': '2023',
            'book': '第43回 医療情報学連合大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{Heryawan2020,
 abstract = {Background: To parse free text medical notes into structured data such as disease names, drugs, procedures, and other important medical information first, it is necessary to detect medical entities. It is important for an Electronic Medical Record (EMR) to have structured data with semantic interoperability to serve as a seamless communication platform whenever a patient migrates from one physician to another. However, in free text notes, medical entities are often expressed using informal abbreviations. An informal abbreviation is a non-standard or undetermined abbreviation, made in diverse writing styles, which may burden the semantic interoperability between EMR systems. Therefore, a detection of informal abbreviations is required to tackle this issue. Objectives: We attempt to achieve highly reliable detection of informal abbreviations made in diverse writing styles. Methods: In this study, we apply the Long Short-Term Memory (LSTM) model to detect informal abbreviations in free text medical notes. Additionally, we use sliding windows to tackle the limited data issue and sample generator for the imbalance class issue, while introducing additional pre-trained features (bag of words and word2vec vectors) to the model. Results: The LSTM model was able to detect informal abbreviations with precision of 93.6%, recall of 57.6%, and F1-score of 68.9%. Conclusion: Our method was able to recognize informal abbreviations using small data set with high precision. The detection can be used to recognize informal abbreviations in real-time while the physician is typing it and raise appropriate indicators for the informal abbreviation meaning confirmation, thus increase the semantic interoperability.},
 author = {Heryawan, Lukman and Sugiyama, Osamu and Yamamoto, Goshiro and Khotimah, Purnomo Husnul and Santos, Luciano H O and Okamoto, Kazuya and Kuroda, Tomohiro},
 doi = {10.24105/ejbi.2020.16.1.29},
 file = {:C\:/Dropbox/Estudos/Artigos/mendeley-org/2020 - Heryawan et al. - A Detection of Informal Abbreviations from Free Text Medical Notes Using Deep Learning(2).pdf:pdf},
 journal = {European Journal for Biomedical Informatics},
 keywords = {EMR,Free text medical notes,Informal abbreviations,LSTM,Structured data},
 number = {1},
 publisher = {International Journal of Medical Research & Health Sciences},
 title = {A Detection of Informal Abbreviations from Free Text Medical Notes Using Deep Learning},
 url = {https://www.ejbi.org/abstract/a-detection-of-informal-abbreviations-from-free-text-medical-notes-using-deep-learning-5680.html},
 volume = {16},
 year = {2020}
}`
            },

  {
            'id': '13',
            'author': '大前 裕輝, 山本 豪志朗, 油谷 曉, 黒田 知宏',
            'title': '患者基本情報を用いた認証連携による迅速な患者情報収集システムの設計',
            'year': '2023',
            'book': '第43回 医療情報学連合大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2024-5-journal-papers-1,
 author = {Yuki Kuroda, Goshiro Yamamoto, Tomohiro Kuroda},
 doi = {10.1080/01972243.2024.2332319},
 journal = {The Information Society},
 number = {3},
 pages = {202-214},
 title = {Identifying undefined risks: A risk model and a privacy risk identification measure in the privacy impact assessment process},
 volume = {40},
 year = {2024}
}`
            },

  {
            'id': '14',
            'author': '田中良樹, 御手洗彰, 劉暢, 江口佳那, 植嶋大晃, 森由希子, 山本豪志朗, 黒田知宏',
            'title': '表面筋電測定を用いた筋力の定量評価方法の検討',
            'year': '2023',
            'book': '第43回 医療情報学連合大会',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-international-conferences-4,
 author = {Koji Yokoyama and Goshiro Yamamoto and Chang Liu and Kazumasa Kishimoto and Yukiko Mori and Tomohiro Kuroda},
 booktitle = {MEDINFO},
 month = {Jul},
 title = {Individual Activity Anomaly Estimation in Operating Rooms Based on Time-Sequential Prediction},
 year = {2023}
}`
            },

  {
            'id': '15',
            'author': '福山 啓太, 森 由希子, 植嶋 大晃, 黒田 知宏',
            'title': '経時的な薬価と処置料改定に対応したマスター作成',
            'year': '2023',
            'book': '第43回 医療情報学連合大会',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-international-conferences-3,
 address = {New York, NY, USA},
 author = {Tao Tao and Ratsamee Photchara and Liu Chang and Uranishi Yuki and Takemura Haruo},
 booktitle = {Proceedings of the 2023 5th International Conference on Image, Video and Signal Processing},
 doi = {10.1145/3591156.3591171},
 isbn = {9781450398381},
 keywords = {neural networks, viewpoint selection, virtual reality, boxing},
 location = {Singapore, Singapore},
 month = {Jun},
 numpages = {10},
 pages = {101-110},
 publisher = {Association for Computing Machinery},
 series = {IVSP '23},
 title = {SmartVP: Viewpoint Optimization Based on Individual Preference for Watching 3D Boxing Punch Videos},
 url = {https://doi.org/10.1145/3591156.3591171},
 year = {2023}
}`
            },

  {
            'id': '16',
            'author': 'Hiroyuki Uematsu, Chieko Saito, Jumpei Kondo, Kunishige Onuma, Roberto Coppo, Yukiko Mori, Manabu Muto, Yuichiro Kikawa, Manami Tada, Tomoharu Sugie, Masahiro Inoue',
            'title': 'De-differentiation in cultures of organoids from luminal-type breast cancer is restored by inhibition of NOTCH signaling',
            'year': '2023',
            'book': 'Human Cell',
            'doi': 'https://doi.org/10.1007/s13577-023-00975-7',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-international-conferences-2,
 author = {Hiroto Hada and Shusuke Hiragi and Yukiko Mori and Kenichi Saito and Masumi Ai and Tomohiro Kuroda},
 booktitle = {Studies in Health Technology and Informatics},
 doi = {10.3233/SHTI230183},
 month = {May},
 pages = {486-487},
 title = {Reducing in X-Ray Retake Rate using the Token Economy Method},
 volume = {302},
 year = {2023}
}`
            },

  {
            'id': '17',
            'author': 'Hiroto Hada, Shusuke Hiragi, Yukiko Mori, Kenichi Saito, Masumi Ai, Tomohiro Kuroda',
            'title': 'Reduction in X-ray Retake Rate Using the Token Economy Method',
            'year': '2023',
            'book': 'Studies in Health Technology and Informatics',
            'doi': 'https://doi.org/10.3233/SHTI230183',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-international-conferences-1,
 author = {Nuraini Naim and Shahabuddin Ibrahim and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference on Healthcare Service Management},
 month = {May},
 title = {PKRC MAEPS 2.0: Malaysian Experience in Setting up a Web-based EMR in an Emergency Makeshift Medical Facility during COVID-19 Pandemic},
 year = {2023}
}`
            },

  {
            'id': '18',
            'author': 'Jun Komiyama, Takehiro Sugiyama , Masao Iwagami, Miho Ishimaru, Yu Sun, Hiroki Matsui, Keitaro Kume, Masaru Sanuki, Teruyuki Koyama, Genta Kato, Yukiko Mori, Hiroaki Ueshima, Nanako Tamiya',
            'title': 'Hospital-Level Variation in Cardiac Rehabilitation After Myocardial Infarction in Japan During Fiscal Years 2014–2015 Using the National Database',
            'year': '2023',
            'book': 'Circulation Reports',
            'doi': 'https://doi.org/10.1253/circrep.CR-22-0113',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-9-domestic-conferences-7,
 author = {中村建海 and 岸本和昌 and 本谷崇之 and 竹村匡正},
 booktitle = {生体医工学シンポジウム2023},
 doi = {},
 location = {熊本},
 pages = {F-31},
 title = {BERT を用いた電子カルテ上に出現する薬品名の予測に関する研究},
 year = {2023}
}`
            },

  {
            'id': '19',
            'author': 'Yu Sun, Masao Iwagami, Jun Komiyama, Takehiro Sugiyama, Ryota Inokuchi, Nobuo Sakata, Tomoko Ito, Satoru Yoshie, Hiroki Matsui, Keitaro Kume, Masaru Sanuki, Genta Kato, Yukiko Mori, Hiroaki Ueshima, Nanako Tamiya',
            'title': 'Association between types of home healthcare and emergency house calls, hospitalization, and end-of-life care in Japan',
            'year': '2023',
            'book': 'Journal of the American Geriatrics Society',
            'doi': 'https://doi.org/10.1111/jgs.18268',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-9-domestic-conferences-6,
 author = {宇鷹岳伸 and 細見亮太 and 岸本和昌 and 竹村匡正},
 booktitle = {生体医工学シンポジウム2023},
 doi = {},
 location = {熊本},
 pages = {D-23},
 title = {姿勢推定ライブラリを用いた歩容データによるリハビリテーション患者と健常者の判別モデルの構築},
 year = {2023}
}`
            },

  {
            'id': '20',
            'author': 'Yu Sun, Masao Iwagami, Jun Komiyama, Takehiro Sugiyama, Ryota Inokuchi, Nobuo Sakata, Tomoko Ito, Satoru Yoshie, Hiroki Matsui, Keitaro Kume, Masaru Sanuki, Genta Kato, Yukiko Mori, Hiroaki Ueshima, Nanako Tamiya',
            'title': 'The Effect of Home Care Support Clinics on Hospital Readmission in Heart Failure Patients in Japan',
            'year': '2023',
            'book': 'Journal of General Internal Medicine',
            'doi': 'https://doi.org/10.1007/s11606-023-08030-9',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-9-domestic-conferences-5,
 author = {岸本和昌 and 上妻憲尚 and 永野和哉 and 上崎勝生 and 黒田知宏},
 booktitle = {生体医工学シンポジウム2023},
 doi = {},
 location = {熊本},
 pages = {B-13},
 title = {医療用密閉型吸引器の導入における排液測定量の検討},
 year = {2023}
}`
            },

  {
            'id': '21',
            'author': 'Kazuna Kawabata, Makoto Hosono, Yukiko Mori, Suzune Tsukamoto, Shunsuke Ito, Saya Ando, Mitsunori Kanagaki',
            'title': 'Steroids May Be Associated With Extensive Skeletal Muscle Uptake of 18F-FDG',
            'year': '2023',
            'book': 'Clinical Nuclear Medicine',
            'doi': 'https://doi.org/10.1097/rlu.0000000000004856',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-9-domestic-conferences-4,
 author = {黒田知宏 and 佐藤晋 and 岡本和也 and 涌嶋賢二 and 陳和夫},
 booktitle = {第53回 日本神経精神薬理学会年会},
 doi = {},
 location = {東京},
 pages = {S6-2},
 title = {遠隔睡眠医療とデータ活用},
 year = {2023}
}`
            },

  {
            'id': '22',
            'author': 'Masaki Goda, Goshiro Yamamoto, Chang Liu, Kazumasa Kishimoto, Sho Mitarai, Yukiko Mori, Tomohiro Kuroda',
            'title': 'Dynamic Embedment of Artificial Kidney Stones into Real Ultrasound Images',
            'year': '2023',
            'book': '予稿・抄録集 生体医工学シンポジウム2023',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-9-domestic-conferences-3,
 author = {高森康平 and 染谷真紀 and 黒田知宏 and 荒船龍彦},
 booktitle = {日本機械学会 福祉工学シンポジウム2023・第38回ライフサポート学会大会・第22回日本生活支援工学会大会},
 doi = {},
 location = {柏崎},
 pages = {1P2G GS-3 5},
 title = {小児救急における小児用人工呼吸トレーニングシステム},
 year = {2023}
}`
            },

  {
            'id': '23',
            'author': '西田 晴香, 岸本 和昌, 杉山 治, 植嶋 大晃, 亀井 拓郎, 山本 豪志朗, 黒田 知宏, 三宅 正裕, 田村 寛',
            'title': 'Time-Series Image Analysis for Prognosis Prediction after Treatment for Age-Related Macular Degeneration',
            'year': '2023',
            'book': '予稿・抄録集 生体医工学シンポジウム2023',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-9-domestic-conferences-2,
 author = {鎌滝智哉 and 染谷真紀 and 黒田知宏 and 荒船龍彦},
 booktitle = {日本機械学会 福祉工学シンポジウム2023・第38回ライフサポート学会大会・第22回日本生活支援工学会大会},
 doi = {},
 location = {柏崎},
 pages = {1P2G GS-3 4},
 title = {骨髄路確保のための小児救急用骨髄穿刺トレーニングシステム},
 year = {2023}
}`
            },

  {
            'id': '24',
            'author': '中村建海, 岸本和昌, 本谷崇之, 竹村匡正',
            'title': 'BERT を用いた電子カルテ上に出現する薬品名の予測に関する研究',
            'year': '2023',
            'book': '生体医工学シンポジウム2023',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-9-domestic-conferences-1,
 author = {黒田知宏 and 佐藤晋 and 岡本和也 and 涌嶋賢二 and 陳和夫},
 booktitle = {日本睡眠学会第45回定期学術集会},
 doi = {},
 location = {横浜},
 pages = {JSSR-S36-1},
 title = {CPAPデータベース開発と次世代医療基盤法},
 year = {2023}
}`
            },

  {
            'id': '25',
            'author': '宇鷹岳伸, 細見亮太, 岸本和昌, 竹村匡正',
            'title': '姿勢推定ライブラリを用いた歩容データによるリハビリテーション患者と健常者の判別モデルの構築',
            'year': '2023',
            'book': '生体医工学シンポジウム2023',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-7-domestic-conferences-1,
 author = {Kazumasa Kishimoto and Masahiro Yakami and Osamu Sugiyama and Tomohiro Kuroda},
 booktitle = {45th Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 doi = {},
 location = {Sydney/Australia},
 pages = {},
 title = {Investigation on Classifiers for Semi-Structured Data using Deep Metric Learning: Multimodal Deep Metric Classifier},
 year = {2023}
}`
            },

  {
            'id': '26',
            'author': '岸本和昌, 上妻憲尚, 永野和哉, 上崎勝生, 黒田知宏',
            'title': '医療用密閉型吸引器の導入における排液測定量の検討',
            'year': '2023',
            'book': '生体医工学シンポジウム2023',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-6-domestic-conferences-1,
 author = {黒田知宏 and 長尾美紀 and 佐々木崇剛 and 井上ひろみ and 結城崇 and 宮城島英希 and 大槻俊知 and 吉川正俊},
 booktitle = {第27回 日本医療情報学会春季学術大会},
 doi = {},
 location = {宜野湾},
 pages = {PAO4-1},
 title = {チャットボットを用いた感染症自己報告システムの開発},
 year = {2023}
}`
            },

  {
            'id': '27',
            'author': '黒田知宏, 佐藤晋, 岡本和也, 涌嶋賢二, 陳和夫',
            'title': '遠隔睡眠医療とデータ活用',
            'year': '2023',
            'book': '第53回 日本神経精神薬理学会年会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-5-domestic-conferences-4,
 author = {高森康平 and 染谷真紀 and 黒田知宏 and 荒船龍彦},
 booktitle = {第62回 日本生体医工学会大会},
 doi = {},
 location = {名古屋},
 pages = {O1-3-1-5},
 title = {小児救急における人工呼吸トレーニング},
 year = {2023}
}`
            },

  {
            'id': '28',
            'author': '高森康平, 染谷真紀, 黒田知宏, 荒船龍彦',
            'title': '小児救急における小児用人工呼吸トレーニングシステム',
            'year': '2023',
            'book': '日本機械学会 福祉工学シンポジウム2023・第38回ライフサポート学会大会・第22回日本生活支援工学会大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-5-domestic-conferences-3,
 author = {鎌滝智哉 and 染谷真紀 and 黒田知宏 and 荒船龍彦},
 booktitle = {第62回 日本生体医工学会大会},
 doi = {},
 location = {名古屋},
 pages = {O1-3-1-2},
 title = {小児救急における骨髄路確保のための骨髄穿刺トレーニングシステム},
 year = {2023}
}`
            },

  {
            'id': '29',
            'author': '鎌滝智哉, 染谷真紀, 黒田知宏, 荒船龍彦',
            'title': '骨髄路確保のための小児救急用骨髄穿刺トレーニングシステム',
            'year': '2023',
            'book': '日本機械学会 福祉工学シンポジウム2023・第38回ライフサポート学会大会・第22回日本生活支援工学会大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-5-domestic-conferences-2,
 author = {大前 裕輝 and 山本 豪志朗 and 油谷 曉 and 黒田 知宏},
 booktitle = {第67回 システム制御情報学会 研究発表講演会},
 doi = {},
 location = {京都},
 pages = {215-5},
 title = {迅速な患者情報収集に向けた患者基本情報提供層を有する認証連携の設計},
 year = {2023}
}`
            },

  {
            'id': '30',
            'author': '黒田知宏, 佐藤晋, 岡本和也, 涌嶋賢二, 陳和夫',
            'title': 'CPAPデータベース開発と次世代医療基盤法',
            'year': '2023',
            'book': '日本睡眠学会第45回定期学術集会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-5-domestic-conferences-1,
 author = {合田真規 and 山本豪志朗 and 劉暢 and 岸本和昌 and 黒田知宏},
 booktitle = {第67回 システム制御情報学会 研究発表講演会},
 doi = {},
 location = {京都},
 pages = {126-6},
 title = {超音波画像撮影実習のための拡張現実感を用いた擬似病変表現},
 year = {2023}
}`
            },

  {
            'id': '31',
            'author': 'Yuki Kuroda, Goshiro Yamamoto, Tomohiro Kuroda',
            'title': 'Identifying unidentifiable risks: A risk model and a privacy risk identification measure in a privacy impact assessment',
            'year': '2023',
            'book': 'The Information Society',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-3-domestic-conferences-3,
 author = {嶋田敏 and 岸本裕大 and 阿部将和 and 小東茂夫 and 小林恭 and 黒田知宏},
 booktitle = {サービス学会　国内大会予稿集},
 doi = {},
 location = {京都},
 pages = {E-2-1-2},
 title = {カルテ情報の要約機能による医師事務作業の改善効果の分析},
 year = {2023}
}`
            },

  {
            'id': '32',
            'author': 'Maria Chiara Munisso, Chang Liu, Goshiro Yamamoto, Tomoko Kosaka, Itaru Tsuge, Susumu Saito, Naoki Morimoto',
            'title': 'PreFlap: From Photoacoustic Tomography Images to Vascular Mapping Sheets for Improved Preoperative Flap Evaluation',
            'year': '2023',
            'book': 'IEEE Transactions on Biomedical Engineering',
            'doi': 'https://doi.org/10.1109/TBME.2023.3293812',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-3-domestic-conferences-2,
 author = {鎌滝智哉 and 染谷真紀 and 黒田知宏 and 荒船龍彦},
 booktitle = {ライフサポート学会フロンティア講演会予稿集},
 doi = {},
 location = {東京},
 pages = {G17-3},
 title = {小児救急における骨髄穿刺トレーニングシステム},
 year = {2023}
}`
            },

  {
            'id': '33',
            'author': 'Itaru Tsuge, Maria Chiara Munisso, Tomoko Kosaka, Ayako Takaya, Yoshihiro Sowa, Chang Liu, Goshiro Yamamoto, Susumu Saito, Naoki Morimoto',
            'title': 'Preoperative visualization of midline-crossing subcutaneous arteries in transverse abdominal flaps using photoacoustic tomography',
            'year': '2023',
            'book': 'Journal of Plastic, Reconstructive & Aesthetic Surgery',
            'doi': 'https://doi.org/10.1016/j.bjps.2023.05.009',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-3-domestic-conferences-1,
 author = {高森康平 and 染谷真紀 and 黒田知宏 and 荒船龍彦},
 booktitle = {ライフサポート学会フロンティア講演会予稿集},
 doi = {},
 location = {東京},
 pages = {G4-2},
 title = {小児救急における乳児用人工呼吸トレーニングシステム},
 year = {2023}
}`
            },

  {
            'id': '34',
            'author': 'Koji Yokoyama, Goshiro Yamamoto, Chang Liu, Kazumasa Kishimoto, Tomohiro Kuroda',
            'title': 'Operating Room Surveillance Video Analysis for Group Activity Recognition',
            'year': '2023',
            'book': 'Advanced Biomedical Engineering',
            'doi': 'https://doi.org/10.14326/abe.12.171',
            'type': 'journal',
            'bibtex': `@article{2023-12-domestic-conferences-2,
 author = {田中良樹, 御手洗彰, 劉暢, 江口佳那, 植嶋大晃, 森由希子, 山本豪志朗, 黒田知宏},
 booktitle = {第43回 医療情報学連合大会},
 location = {神戸},
 pages = {4-J-1-04},
 title = {表面筋電測定を用いた筋力の定量評価方法の検討},
 year = {2023}
}`
            },

  {
            'id': '35',
            'author': 'Liu Chang, 渡邊 勇輝, 山本 豪志朗, 岡橋 さやか',
            'title': '遂行機能・注意リハビリテーションを目的とする没入型バーチャルリアリティ認知課題に関する検討',
            'year': '2023',
            'book': 'ヒューマンインタフェース学会論文誌',
            'doi': 'https://doi.org/10.11184/his.25.1_29',
            'type': 'journal',
            'bibtex': `@article{2023-12-domestic-conferences-1,
 author = {福山 啓太, 森 由希子, 植嶋 大晃, 黒田 知宏},
 booktitle = {第43回 医療情報学連合大会},
 location = {神戸},
 pages = {3-G-1-03},
 title = {経時的な薬価と処置料改定に対応したマスター作成},
 year = {2023}
}`
            },

  {
            'id': '36',
            'author': '黒田 佑輝, 山本 豪志朗, 黒田 知宏',
            'title': '米国における医療情報交換（HIE）の利用状況と患者の同意及び医療機関の責任に関する法制度からみた日本への示唆',
            'year': '2023',
            'book': '医療情報学',
            'doi': 'https://doi.org/',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-9,
 author = {須藤 英隼 and 中原 孝洋 and 黒田 知宏},
 booktitle = {第43回 医療情報学連合大会},
 doi = {},
 location = {神戸},
 pages = {2-J-3-01},
 title = {パニック障害の架空症例を用いた対話型AI ChatGPTの精神科領域における臨床的有用性の検討},
 year = {2023}
}`
            },

  {
            'id': '37',
            'author': 'Koji Yokoyama, Goshiro Yamamoto, Chang Liu, Kazumasa Kishimoto, Yukiko Mori, Tomohiro Kuroda',
            'title': 'Individual Activity Anomaly Estimation in Operating Rooms Based on Time-Sequential Prediction',
            'year': '2023',
            'book': 'MEDINFO',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-8,
 author = {加藤源太 and 植嶋大晃 and 森由希子 and 中山健夫 and 山本喜一 and 岩渕菜穂子 and 浜口まどか and 今村知明 and 康永秀生 and 田宮菜奈子 and 杉山雄大 and 大寺祥佑 and 黒田知宏},
 booktitle = {第82回 日本公衆衛生学会総会},
 doi = {},
 location = {つくば},
 pages = {P-0106-6},
 title = {NDB と介護 DB の連結解析に際しての、要介護認定情報の活用方法に関する考察},
 year = {2023}
}`
            },

  {
            'id': '38',
            'author': 'Tao Tao, Ratsamee Photchara, Liu Chang, Uranishi Yuki, Takemura Haruo',
            'title': 'SmartVP: Viewpoint Optimization Based on Individual Preference for Watching 3D Boxing Punch Videos',
            'year': '2023',
            'book': 'Proceedings of the 2023 5th International Conference on Image, Video and Signal Processing',
            'doi': 'https://doi.org/10.1145/3591156.3591171',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-7,
 author = {伊東寛敏 and 藤井清孝 and 海老根智代 and 岸本和昌 and 古平聡},
 booktitle = {第6回神奈川県臨床工学会},
 doi = {},
 location = {横浜},
 pages = {BPA-9},
 title = {メルスペクトログラムを用いた医療機器アラームの定量評価に向けた基礎的検討},
 year = {2023}
}`
            },

  {
            'id': '39',
            'author': 'Hiroto Hada, Shusuke Hiragi, Yukiko Mori, Kenichi Saito, Masumi Ai, Tomohiro Kuroda',
            'title': 'Reducing in X-Ray Retake Rate using the Token Economy Method',
            'year': '2023',
            'book': 'Studies in Health Technology and Informatics',
            'doi': 'https://doi.org/10.3233/SHTI230183',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-6,
 author = {植嶋大晃 and 森由希子 and 加藤源太 and 中山健夫 and 今村知明 and 康永秀生 and 田宮菜奈子 and 杉山雄大 and 大寺祥佑 and 山本喜一 and 松岡歩 and 岩渕菜穂子 and 黒田知宏},
 booktitle = {第82回 日本公衆衛生学会総会},
 doi = {},
 location = {つくば},
 pages = {P-2303-3},
 title = {介護DBを用いた基礎的集計および「介護DBコードブック」の作成},
 year = {2023}
}`
            },

  {
            'id': '40',
            'author': 'Nuraini Naim, Shahabuddin Ibrahim, Tomohiro Kuroda',
            'title': 'PKRC MAEPS 2.0: Malaysian Experience in Setting up a Web-based EMR in an Emergency Makeshift Medical Facility during COVID-19 Pandemic',
            'year': '2023',
            'book': 'Proceedings of International Conference on Healthcare Service Management',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-5,
 author = {山﨑一幸 and 加藤源太 and 栗山明 and 本間健太郎 and 松川香菜 and 石黒雅代 and 小谷将司 and 森由希子 and 黒田知宏 and 大鶴繁 and 妹尾浩},
 booktitle = {第51回 日本救急医学会総会・学術集会},
 doi = {},
 location = {東京},
 pages = {P2-324},
 title = {救急外来からの入院が病院稼働額に及ぼす影響},
 year = {2023}
}`
            },

  {
            'id': '41',
            'author': 'Kazumasa Kishimoto, Masahiro Yakami, Osamu Sugiyama, Tomohiro Kuroda',
            'title': 'Investigation on Classifiers for Semi-Structured Data using Deep Metric Learning: Multimodal Deep Metric Classifier',
            'year': '2023',
            'book': '45th Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-4,
 author = {山下晃平 and 門野勇介 and 粂川雅子 and 阪本恭子 and 山本剛 and 中井隆史 and 岸本和昌 and 竹村匡正},
 booktitle = {第43回 医療情報学連合大会},
 doi = {},
 location = {神戸},
 pages = {3-G-4-01},
 title = {オンプレミス型大規模LLMモデルを用いた自動サマリ生成の可能性の検討},
 year = {2023}
}`
            },

  {
            'id': '42',
            'author': '黒田知宏, 長尾美紀, 佐々木崇剛, 井上ひろみ, 結城崇, 宮城島英希, 大槻俊知, 吉川正俊',
            'title': 'チャットボットを用いた感染症自己報告システムの開発',
            'year': '2023',
            'book': '第27回 日本医療情報学会春季学術大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-3,
 author = {大前 裕輝 and 山本 豪志朗 and 油谷 曉 and 黒田 知宏},
 booktitle = {第43回 医療情報学連合大会},
 doi = {},
 location = {神戸},
 pages = {3-J-6-02},
 title = {患者基本情報を用いた認証連携による迅速な患者情報収集システムの設計},
 year = {2023}
}`
            },

  {
            'id': '43',
            'author': '高森康平, 染谷真紀, 黒田知宏, 荒船龍彦',
            'title': '小児救急における人工呼吸トレーニング',
            'year': '2023',
            'book': '第62回 日本生体医工学会大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-2,
 author = {田中良樹 and 御手洗彰 and 劉暢 and 江口佳那 and 植嶋大晃 and 森由希子 and 山本豪志朗 and 黒田知宏},
 booktitle = {第43回 医療情報学連合大会},
 pages = {4-J-1-04},
 title = {表面筋電測定を用いた筋力の定量評価方法の検討},
 venue = {Kobe/Japan},
 year = {2023}
}`
            },

  {
            'id': '44',
            'author': '鎌滝智哉, 染谷真紀, 黒田知宏, 荒船龍彦',
            'title': '小児救急における骨髄路確保のための骨髄穿刺トレーニングシステム',
            'year': '2023',
            'book': '第62回 日本生体医工学会大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-14,
 author = {植嶋大晃 and 森由希子 and 加藤源太 and 中山健夫 and 今村知明 and 康永秀生 and 田宮菜奈子 and 杉山雄大 and 大寺祥佑 and 山本喜一 and 松岡歩 and 岩渕菜穂子 and 黒田知宏},
 booktitle = {第82回 日本公衆衛生学会総会},
 doi = {},
 location = {つくば},
 pages = {P-2303-3},
 title = {介護DBを用いた基礎的集計および「介護DBコードブック」の作成},
 year = {2023}
}`
            },

  {
            'id': '45',
            'author': '大前 裕輝, 山本 豪志朗, 油谷 曉, 黒田 知宏',
            'title': '迅速な患者情報収集に向けた患者基本情報提供層を有する認証連携の設計',
            'year': '2023',
            'book': '第67回 システム制御情報学会 研究発表講演会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-13,
 author = {山﨑一幸 and 加藤源太 and 栗山明 and 本間健太郎 and 松川香菜 and 石黒雅代 and 小谷将司 and 森由希子 and 黒田知宏 and 大鶴繁 and 妹尾浩},
 booktitle = {第51回 日本救急医学会総会・学術集会},
 doi = {},
 location = {東京},
 pages = {P2-324},
 title = {救急外来からの入院が病院稼働額に及ぼす影響},
 year = {2023}
}`
            },

  {
            'id': '46',
            'author': '合田真規, 山本豪志朗, 劉暢, 岸本和昌, 黒田知宏',
            'title': '超音波画像撮影実習のための拡張現実感を用いた擬似病変表現',
            'year': '2023',
            'book': '第67回 システム制御情報学会 研究発表講演会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-12,
 author = {山下晃平 and 門野勇介 and 粂川雅子 and 阪本恭子 and 山本剛 and 中井隆史 and 岸本和昌 and 竹村匡正},
 booktitle = {第43回 医療情報学連合大会},
 doi = {},
 location = {神戸},
 pages = {3-G-4-01},
 title = {オンプレミス型大規模LLMモデルを用いた自動サマリ生成の可能性の検討},
 year = {2023}
}`
            },

  {
            'id': '47',
            'author': '嶋田敏, 岸本裕大, 阿部将和, 小東茂夫, 小林恭, 黒田知宏',
            'title': 'カルテ情報の要約機能による医師事務作業の改善効果の分析',
            'year': '2023',
            'book': 'サービス学会　国内大会予稿集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-10,
 author = {黒田知宏 and 小林慎治},
 booktitle = {第43回 医療情報学連合大会},
 doi = {},
 location = {神戸},
 pages = {2-H-5-03},
 title = {北欧諸国のデジタルヘルス戦略とEHDSの関係に関する調査報告},
 year = {2023}
}`
            },

  {
            'id': '48',
            'author': '鎌滝智哉, 染谷真紀, 黒田知宏, 荒船龍彦',
            'title': '小児救急における骨髄穿刺トレーニングシステム',
            'year': '2023',
            'book': 'ライフサポート学会フロンティア講演会予稿集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2023-11-domestic-conferences-1,
 author = {福山 啓太 and 森 由希子 and 植嶋 大晃 and 黒田 知宏},
 booktitle = {第43回 医療情報学連合大会},
 pages = {3-G-1-03},
 title = {経時的な薬価と処置料改定に対応したマスター作成},
 venue = {Kobe/Japan},
 year = {2023}
}`
            },

  {
            'id': '49',
            'author': '高森康平, 染谷真紀, 黒田知宏, 荒船龍彦',
            'title': '小児救急における乳児用人工呼吸トレーニングシステム',
            'year': '2023',
            'book': 'ライフサポート学会フロンティア講演会予稿集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2023-10-journal-papers-5,
 author = {Hiroyuki Uematsu and Chieko Saito and Jumpei Kondo and Kunishige Onuma and Roberto Coppo and Yukiko Mori and Manabu Muto and Yuichiro Kikawa and Manami Tada and Tomoharu Sugie and Masahiro Inoue},
 doi = {10.1007/s13577-023-00975-7},
 journal = {Human Cell},
 month = {Aug},
 number = {6},
 pages = {2099–2112},
 title = {De-differentiation in cultures of organoids from luminal-type breast cancer is restored by inhibition of NOTCH signaling},
 volume = {36},
 year = {2023}
}`
            },

  {
            'id': '50',
            'author': '疋田智子, 黒田知宏, 杉山治, 竹村匡正',
            'title': 'バイタルデータターミナル（VDT）導入効果の検討　ーVDT利用率と看護師へのアンケート調査ー',
            'year': '2023',
            'book': '医療情報学',
            'doi': 'https://doi.org/',
            'type': 'journal',
            'bibtex': `@article{2023-10-journal-papers-4,
 author = {Hiroto Hada and Shusuke Hiragi and Yukiko Mori and Kenichi Saito and Masumi Ai and Tomohiro Kuroda},
 doi = {10.3233/SHTI230183},
 journal = {Studies in Health Technology and Informatics},
 month = {May},
 number = {},
 pages = {486-487},
 title = {Reduction in X-ray Retake Rate Using the Token Economy Method},
 volume = {302},
 year = {2023}
}`
            },

  {
            'id': '51',
            'author': 'Takahiro Mori, Jun Komiyama, Tomoko Fujii, Masaru Sanuki, Keitaro Kume, Genta Kato, Yukiko Mori, Hiroaki Ueshima, Hiroki Matsui, Nanako Tamiya, Takehiro Sugiyama',
            'title': 'Medical expenditures for fragility hip fracture in Japan: a study using the nationwide health insurance claims database',
            'year': '2022',
            'book': 'Archives of Osteoporosis',
            'doi': 'https://doi.org/10.1007/s11657-022-01096-8',
            'type': 'journal',
            'bibtex': `@article{2023-10-journal-papers-3,
 author = {Jun Komiyama and Takehiro Sugiyama  and Masao Iwagami and Miho Ishimaru and Yu Sun and Hiroki Matsui and Keitaro Kume and Masaru Sanuki and Teruyuki Koyama and Genta Kato and Yukiko Mori and Hiroaki Ueshima and Nanako Tamiya},
 doi = {10.1253/circrep.CR-22-0113},
 journal = {Circulation Reports},
 month = {May},
 number = {5},
 pages = {177-186},
 title = {Hospital-Level Variation in Cardiac Rehabilitation After Myocardial Infarction in Japan During Fiscal Years 2014–2015 Using the National Database},
 volume = {5},
 year = {2023}
}`
            },

  {
            'id': '52',
            'author': 'Yukiko Mori, Osamu Kikuchi, Takahiro Horimatsu, Hiroki Hara, Shuichi Hironaka, Takashi Kojima, Ken Kato, Takahiro Tsushima, Ryu Ishihara, Kumi Mukai, Ryuji Uozumi, Harue Tada, Hiroi Kasai, Atsushi Kawaguchi, Manabu Muto',
            'title': 'Multicenter phase II study of trifluridine/tipiracil for esophageal squamous carcinoma refractory/intolerant to 5-fluorouracil, platinum compounds, and taxanes: the ECTAS study',
            'year': '2022',
            'book': 'Esophagus',
            'doi': 'https://doi.org/10.1007/s10388-021-00905-2',
            'type': 'journal',
            'bibtex': `@article{2023-10-journal-papers-2,
 author = {Yu Sun and Masao Iwagami and Jun Komiyama and Takehiro Sugiyama and Ryota Inokuchi and Nobuo Sakata and Tomoko Ito and Satoru Yoshie and Hiroki Matsui and Keitaro Kume and Masaru Sanuki and Genta Kato and Yukiko Mori and Hiroaki Ueshima and Nanako Tamiya},
 doi = {10.1111/jgs.18268},
 journal = {Journal of the American Geriatrics Society},
 month = {Feb},
 number = {6},
 pages = {1795-1805},
 title = {Association between types of home healthcare and emergency house calls, hospitalization, and end-of-life care in Japan},
 volume = {71},
 year = {2023}
}`
            },

  {
            'id': '53',
            'author': 'Kana Eguchi, Tsutomu Yabuuchi, Masayuki Nambu, Hirofumi Takeyama, Shozo Azuma, Kazuo Chin, Tomohiro Kuroda',
            'title': 'Investication on Factors Related to Poor CPAP Adherence using Machine Learning : A Pilot Study',
            'year': '2022',
            'book': 'Scientific Reports',
            'doi': 'https://doi.org/10.1038/s41598-022-21932-8',
            'type': 'journal',
            'bibtex': `@article{2023-10-journal-papers-1,
 author = {Yu Sun and Masao Iwagami and Jun Komiyama and Takehiro Sugiyama and Ryota Inokuchi and Nobuo Sakata and Tomoko Ito and Satoru Yoshie and Hiroki Matsui and Keitaro Kume and Masaru Sanuki and Genta Kato and Yukiko Mori and Hiroaki Ueshima and Nanako Tamiya},
 doi = {10.1007/s11606-023-08030-9},
 journal = {Journal of General Internal Medicine},
 month = {Jan},
 number = { },
 pages = {2156-2163},
 title = {The Effect of Home Care Support Clinics on Hospital Readmission in Heart Failure Patients in Japan},
 volume = {38},
 year = {2023}
}`
            },

  {
            'id': '54',
            'author': 'Kimihiko Murase, Takuma Minami, Satoshi Hamada, David Gozal, Naomi Takahashi, Yoshinari Nakatsuka, Hirofumi Takeyama, Kiminobu Tanizawa, Daisuke Endo, Toshiki Akahoshi, Yasutaka Moritsuchi, Toru Tsuda, Yoshiro Toyama, Motoharu Ohi, Yasuhiro Tomita, Koji Narui, , Tetsuro Ohdaira, Takatoshi Kasai, Tomomasa Tsuboi, Yasuhiro Gon, Yoshihiro Yamashiro, Shinichi Ando, Hiroyuki Yoshimine, Yoshifumi Takata, Akiomi Yoshihisa, Koichiro Tatsumi, Tomohiro Kuroda, Satoshi Morita, Shinichi Momomura, Takeo Nakayama, Toyohiro Hirai, Kazuo Chin',
            'title': 'Multimodal Telemonitoring for Weight Reduction in Sleep Apnea Patients: A Randomized Controlled Trial',
            'year': '2022',
            'book': 'Chest',
            'doi': 'https://doi.org/10.1016/j.chest.2022.07.032',
            'type': 'journal',
            'bibtex': `@article{2023-1-japanese-journal-papers-1,
 author = {疋田智子 and 黒田知宏 and 杉山治 and 竹村匡正},
 doi = {},
 journal = {医療情報学},
 number = {4},
 pages = {161-171},
 title = {バイタルデータターミナル（VDT）導入効果の検討　ーVDT利用率と看護師へのアンケート調査ー},
 volume = {42},
 year = {2023}
}`
            },

  {
            'id': '55',
            'author': 'Michikazu Nakai, Yoshitaka Iwanaga, Yoko Sumita, Shinichi Wada, Haruhiko Hiramatsu, Koji Iihara, Takahide Kohro, Issei Komuro, Tomohiro Kuroda, Tetsuya Matoba, Masaharu Nakayama, Kunihiro Nishimura, Teruo Noguchi, Tadamasa Takemura, Teiji Tominaga, Kazunori Toyoda, Kenichi Tsujita, Satoshi Yasuda, Yoshihiro Miyamoto, Hisao Ogawa',
            'title': 'Associations among cardiovascular and cerebrovascular diseases: Analysis of the nationwide claims-based JROAD-DPC dataset',
            'year': '2022',
            'book': 'PLOS ONE',
            'doi': 'https://doi.org/10.1371/journal.pone.0264390',
            'type': 'journal',
            'bibtex': `@article{2023-09-journal-papers-1,
 author = {Kazuna Kawabata and Makoto Hosono and Yukiko Mori and Suzune Tsukamoto and Shunsuke Ito and Saya Ando and Mitsunori Kanagaki},
 doi = {10.1097/rlu.0000000000004856},
 journal = {Clinical Nuclear Medicine},
 month = {Sep},
 number = { },
 pages = {},
 title = {Steroids May Be Associated With Extensive Skeletal Muscle Uptake of 18F-FDG},
 volume = {},
 year = {2023}
}`
            },

  {
            'id': '56',
            'author': 'Shusuke Hiragi, Jun Hatanaka, Osamu Sugiyama, Kenichi Saito, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Token Economy--Based Hospital Bed Allocation to Mitigate Information Asymmetry: Proof-of-Concept Study Through Simulation Implementation',
            'year': '2022',
            'book': 'JMIR Form Res',
            'doi': 'https://doi.org/10.2196/28877',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-09-domestic-conferences-9,
 author = {Masaki Goda and Goshiro Yamamoto and Chang Liu and Kazumasa Kishimoto and Sho Mitarai and Yukiko Mori and Tomohiro Kuroda},
 booktitle = {予稿・抄録集 生体医工学シンポジウム2023},
 pages = {E-38 (p.194)},
 title = {Dynamic Embedment of Artificial Kidney Stones into Real Ultrasound Images},
 venue = {Kumamoto/Japan},
 year = {2023}
}`
            },

  {
            'id': '57',
            'author': 'Ai Kido, Masahiro Miyake, Hiroshi Tamura, Shusuke Hiragi, Takeshi Kimura, Satomi Yoshida, Masato Takeuchi, Shosuke Ohtera, Ayako Takahashi, Sotaro Ooto, Koji Kawakami, Tomohiro Kuroda, Akitaka Tsujikawa',
            'title': 'Incidence and Clinical Practice of Exudative Age-related Macular Degeneration: A Nationwide Population-Based Cohort Study',
            'year': '2022',
            'book': 'Opthalmology Science',
            'doi': 'https://doi.org/10.1016/j.xops.2022.100125',
            'type': 'journal',
            'bibtex': `@inproceedings{2023-09-domestic-conferences-8,
 author = {西田 晴香 and 岸本 和昌 and 杉山 治 and 植嶋 大晃 and 亀井 拓郎 and 山本 豪志朗 and 黒田 知宏 and 三宅 正裕 and 田村 寛},
 booktitle = {予稿・抄録集 生体医工学シンポジウム2023},
 pages = {A-04 (p.28)},
 title = {Time-Series Image Analysis for Prognosis Prediction after Treatment for Age-Related Macular Degeneration},
 venue = {Kumamoto/Japan},
 year = {2023}
}`
            },

  {
            'id': '58',
            'author': 'Yuki Kuroda, Goshiro Yamamoto, Tomohiro Kuroda',
            'title': 'Data Processing Model for Compliance with International Medical Research Data Processing Rules',
            'year': '2022',
            'book': 'Advanced Biomedical Engineering',
            'doi': 'https://doi.org/10.14326/abe.11.48',
            'type': 'journal',
            'bibtex': `@article{2023-07-journal-papers-4,
 author = {Yuki Kuroda and Goshiro Yamamoto and Tomohiro Kuroda},
 journal = {The Information Society},
 month = {},
 number = {},
 pages = {},
 title = {Identifying unidentifiable risks: A risk model and a privacy risk identification measure in a privacy impact assessment},
 volume = {},
 year = {2023}
}`
            },

  {
            'id': '59',
            'author': 'Koji Yokoyama, Goshiro Yamamoto, Chang Liu, Osamu Sugiyama, Luciano HO Santos, Tomohiro Kuroda',
            'title': 'Recognition of Instrument Passing and Group Attention for Understanding Intraoperative State of Surgical Team',
            'year': '2022',
            'book': 'Advanced Biomedical Engineering',
            'doi': 'https://doi.org/10.14326/abe.11.37',
            'type': 'journal',
            'bibtex': `@article{2023-07-journal-papers-3,
 author = {Maria Chiara Munisso and Chang Liu and Goshiro Yamamoto and Tomoko Kosaka and Itaru Tsuge and Susumu Saito and Naoki Morimoto},
 doi = {10.1109/TBME.2023.3293812},
 journal = {IEEE Transactions on Biomedical Engineering},
 month = {Jul},
 number = {},
 pages = {1-11},
 title = {PreFlap: From Photoacoustic Tomography Images to Vascular Mapping Sheets for Improved Preoperative Flap Evaluation},
 volume = {},
 year = {2023}
}`
            },

  {
            'id': '60',
            'author': 'Ryo Otsuki, Osamu Sugiyama, Yuki Mori, Masahiro Miyake, Shusuke Hiragi, Goshiro Yamamoto, Luciano Santos, Yuta Nakanishi, Yoshikatsu Hosoda, Hiroshi Tamura, Shigemi Matsumoto, Akitaka Tsujikawa, Tomohiro Kuroda',
            'title': 'Integrating Preprocessing Operations into Deep Learning Model: Case Study of Posttreatment Visual Acuity Prediction',
            'year': '2022',
            'book': 'Advanced Biomedical Engineering',
            'doi': 'https://doi.org/10.14326/abe.11.16',
            'type': 'journal',
            'bibtex': `@article{2023-07-journal-papers-2,
 author = {Itaru Tsuge and Maria Chiara Munisso and Tomoko Kosaka and Ayako Takaya and Yoshihiro Sowa and Chang Liu and Goshiro Yamamoto and Susumu Saito and Naoki Morimoto},
 doi = {10.1016/j.bjps.2023.05.009},
 journal = {Journal of Plastic, Reconstructive & Aesthetic Surgery},
 month = {May},
 pages = {165-175},
 title = {Preoperative visualization of midline-crossing subcutaneous arteries in transverse abdominal flaps using photoacoustic tomography},
 volume = {84},
 year = {2023}
}`
            },

  {
            'id': '61',
            'author': '阪本恭子, 岸本和昌, 山本剛, 竹村匡正',
            'title': 'BERTを用いた看護記録における自動監査の試み：カルテ記載における自己抜去を対象として',
            'year': '2022',
            'book': '生体医工学',
            'doi': 'https://doi.org/10.11239/jsmbe.60.95',
            'type': 'journal',
            'bibtex': `@article{2023-07-journal-papers-1,
 author = {Koji Yokoyama and Goshiro Yamamoto and Chang Liu and Kazumasa Kishimoto and Tomohiro Kuroda},
 doi = {10.14326/abe.12.171},
 journal = {Advanced Biomedical Engineering},
 month = {Feb},
 number = { },
 pages = {171-181},
 title = {Operating Room Surveillance Video Analysis for Group Activity Recognition},
 volume = {12},
 year = {2023}
}`
            },

  {
            'id': '62',
            'author': '大西 和歩, 浦西 友樹, 劉 暢, Photchara Ratsamee, 東田 学, 山本 豪志朗, 竹村 治雄',
            'title': 'ホールド難度と配置を考慮したボルダリング課題の自動難度推定',
            'year': '2022',
            'book': '日本バーチャルリアリティ学会論文誌',
            'doi': 'https://doi.org/10.18974/tvrsj.27.4_331',
            'type': 'journal',
            'bibtex': `@article{2023-07-japanese-journal-papers-2,
 author = {Liu Chang and 渡邊 勇輝 and 山本 豪志朗 and 岡橋 さやか},
 doi = {10.11184/his.25.1_29},
 journal = {ヒューマンインタフェース学会論文誌},
 month = {Feb},
 number = {1},
 pages = {29-34},
 title = {遂行機能・注意リハビリテーションを目的とする没入型バーチャルリアリティ認知課題に関する検討},
 volume = {25},
 year = {2023}
}`
            },

  {
            'id': '63',
            'author': '庭瀬 尚武, 山本 喜一, 大寺 祥佑, 加藤 源太, 下垣 徹, 黒田 知宏',
            'title': 'レセプト情報・特定健診等データベース（NDB）のための並列分散処理を用いた次世代分析基盤の提案',
            'year': '2022',
            'book': '電子情報通信学会論文誌 D',
            'doi': 'https://doi.org/10.14923/transinfj.2021jdp7040',
            'type': 'journal',
            'bibtex': `@article{2023-07-japanese-journal-papers-1,
 author = {黒田 佑輝 and 山本 豪志朗 and 黒田 知宏},
 doi = {},
 journal = {医療情報学},
 month = {},
 number = {},
 pages = {},
 title = {米国における医療情報交換（HIE）の利用状況と患者の同意及び医療機関の責任に関する法制度からみた日本への示唆},
 volume = {},
 year = {2023}
}`
            },

  {
            'id': '64',
            'author': '岸本 和昌, 竹村 匡正, 杉山 治, 小島 諒介, 八上 全弘, 南部 雅幸, 藤井 清孝, 黒田 知宏',
            'title': '深層ニューラルネットワークを用いた重複アラーム音識別システムの検討',
            'year': '2022',
            'book': '生体医工学',
            'doi': 'https://doi.org/10.11239/jsmbe.60.8',
            'type': 'journal',
            'bibtex': `@article{2022-journal-papers-9,
 author = {Yukiko Mori and Osamu Kikuchi and Takahiro Horimatsu and Hiroki Hara and Shuichi Hironaka and Takashi Kojima and Ken Kato and Takahiro Tsushima and Ryu Ishihara and Kumi Mukai and Ryuji Uozumi and Harue Tada and Hiroi Kasai and Atsushi Kawaguchi and Manabu Muto},
 doi = {10.1007/s10388-021-00905-2},
 journal = {Esophagus},
 month = {Jan},
 number = {},
 pages = {444-451},
 title = {Multicenter phase II study of trifluridine/tipiracil for esophageal squamous carcinoma refractory/intolerant to 5-fluorouracil, platinum compounds, and taxanes: the ECTAS study},
 volume = {19},
 year = {2022}
}`
            },

  {
            'id': '65',
            'author': 'Luciano Santos, Chang Liu, Goshiro Yamamoto, Tomohiro Kuroda, Sayaka Okahashi',
            'title': 'RehaBricks - A Modular Electronics Peg Board for Exercise Adaptability in Upper Limb Rehabilitation',
            'year': '2022',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2022-journal-papers-8,
 author = {Kana Eguchi and Tsutomu Yabuuchi and Masayuki Nambu and Hirofumi Takeyama and Shozo Azuma and Kazuo Chin and Tomohiro Kuroda},
 doi = {10.1038/s41598-022-21932-8},
 journal = {Scientific Reports},
 pages = {19563},
 title = {Investication on Factors Related to Poor CPAP Adherence using Machine Learning : A Pilot Study},
 volume = {12},
 year = {2022}
}`
            },

  {
            'id': '66',
            'author': 'Shimizu Juko, Kishimoto Kazumasa, Nakai Takashi, Takemura Tadamasa',
            'title': 'Prediction of Pharmaceuticals Groups using Compound Similarity',
            'year': '2022',
            'book': '2022 Joint 12th International Conference on Soft Computing and Intelligent Systems and 23rd International Symposium on Advanced Intelligent Systems (SCIS&ISIS)',
            'doi': 'https://doi.org/10.1109/SCISISIS55246.2022.10002064',
            'type': 'conference',
            'bibtex': `@article{2022-journal-papers-7,
 author = {Kimihiko Murase and Takuma Minami and Satoshi Hamada and David Gozal and Naomi Takahashi and Yoshinari Nakatsuka and Hirofumi Takeyama and Kiminobu Tanizawa and Daisuke Endo and Toshiki Akahoshi and Yasutaka Moritsuchi and Toru Tsuda and Yoshiro Toyama and Motoharu Ohi and Yasuhiro Tomita and Koji Narui and  and Tetsuro Ohdaira and Takatoshi Kasai and Tomomasa Tsuboi and Yasuhiro Gon and Yoshihiro Yamashiro and Shinichi Ando and Hiroyuki Yoshimine and Yoshifumi Takata and Akiomi Yoshihisa and Koichiro Tatsumi and Tomohiro Kuroda and Satoshi Morita and Shinichi Momomura and Takeo Nakayama and Toyohiro Hirai and Kazuo Chin},
 doi = {10.1016/j.chest.2022.07.032},
 journal = {Chest},
 number = {6},
 pages = {1373-1383},
 title = {Multimodal Telemonitoring for Weight Reduction in Sleep Apnea Patients: A Randomized Controlled Trial},
 volume = {162},
 year = {2022}
}`
            },

  {
            'id': '67',
            'author': '市川花菜, 藤本晃司, 杉山治, 岸本和昌, 西尾瑞穂, 山本豪志朗, 黒田知宏',
            'title': '症例報告を対象とした固有表現抽出手法の比較',
            'year': '2022',
            'book': '第42回 医療情報学連合大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-journal-papers-6,
 author = {Michikazu Nakai and Yoshitaka Iwanaga and Yoko Sumita and Shinichi Wada and Haruhiko Hiramatsu and Koji Iihara and Takahide Kohro and Issei Komuro and Tomohiro Kuroda and Tetsuya Matoba and Masaharu Nakayama and Kunihiro Nishimura and Teruo Noguchi and Tadamasa Takemura and Teiji Tominaga and Kazunori Toyoda and Kenichi Tsujita and Satoshi Yasuda and Yoshihiro Miyamoto and Hisao Ogawa},
 doi = {10.1371/journal.pone.0264390},
 journal = {PLOS ONE},
 month = {03},
 number = {3},
 pages = {1-13},
 publisher = {Public Library of Science},
 title = {Associations among cardiovascular and cerebrovascular diseases: Analysis of the nationwide claims-based JROAD-DPC dataset},
 url = {https://doi.org/10.1371/journal.pone.0264390},
 volume = {17},
 year = {2022}
}`
            },

  {
            'id': '68',
            'author': '伊藤彰仁, 森由希子, 岸本和昌, 劉暢, 山本豪志朗, 黒田知宏, 江木盛時',
            'title': '手術室監視映像の分析に基づく医療者の行動と手術開始時刻の関連性調査',
            'year': '2022',
            'book': '医療情報学連合大会論文集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-journal-papers-5,
 author = {Shusuke Hiragi and Jun Hatanaka and Osamu Sugiyama and Kenichi Saito and Masayuki Nambu and Tomohiro Kuroda},
 day = {4},
 doi = {10.2196/28877},
 issn = {2561-326X},
 journal = {JMIR Form Res},
 keywords = {hospital administration; resource allocation; token economy; bed occupancy; hospital management; simulation; decision-making; organization},
 month = {Mar},
 number = {3},
 pages = {e28877},
 title = {Token Economy--Based Hospital Bed Allocation to Mitigate Information Asymmetry: Proof-of-Concept Study Through Simulation Implementation},
 url = {https://formative.jmir.org/2022/3/e28877},
 volume = {6},
 year = {2022}
}`
            },

  {
            'id': '69',
            'author': '西田菜都子, 劉暢, 杉山治, 山本豪志朗, 黒田知宏',
            'title': '看護記録の自動構造化に向けた音声入力インタフェースの提案',
            'year': '2022',
            'book': '医療情報学連合大会論文集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-journal-papers-4,
 author = {Ai Kido and Masahiro Miyake and Hiroshi Tamura and Shusuke Hiragi and Takeshi Kimura and Satomi Yoshida and Masato Takeuchi and Shosuke Ohtera and Ayako Takahashi and Sotaro Ooto and Koji Kawakami and Tomohiro Kuroda and Akitaka Tsujikawa},
 doi = {10.1016/j.xops.2022.100125},
 journal = {Opthalmology Science},
 number = {2},
 pages = {100125},
 title = {Incidence and Clinical Practice of Exudative Age-related Macular Degeneration: A Nationwide Population-Based Cohort Study},
 volume = {2},
 year = {2022}
}`
            },

  {
            'id': '70',
            'author': '金山聡美, 細見亮太, 平原匠, 宮平亜紀子, 岸本和昌, 竹村匡正',
            'title': 'モーションキャプチャを用いた患者状態把握システムの構築',
            'year': '2022',
            'book': '第42回 医療情報学連合大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-journal-papers-3,
 author = {Yuki Kuroda and Goshiro Yamamoto and Tomohiro Kuroda},
 doi = {10.14326/abe.11.48},
 journal = {Advanced Biomedical Engineering},
 number = { },
 pages = {48-57},
 title = {Data Processing Model for Compliance with International Medical Research Data Processing Rules},
 volume = {11},
 year = {2022}
}`
            },

  {
            'id': '71',
            'author': '横山晃士, 山本豪志朗, 劉暢, 岸本和昌, 黒田知宏',
            'title': '手術室監視映像を用いたグループ行動認識の有効性調査',
            'year': '2022',
            'book': '第42回 医療情報学連合大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-journal-papers-2,
 author = {Koji Yokoyama and Goshiro Yamamoto and Chang Liu and Osamu Sugiyama and Luciano HO Santos and Tomohiro Kuroda},
 doi = {10.14326/abe.11.37},
 journal = {Advanced Biomedical Engineering},
 number = { },
 pages = {37-47},
 title = {Recognition of Instrument Passing and Group Attention for Understanding Intraoperative State of Surgical Team},
 volume = {11},
 year = {2022}
}`
            },

  {
            'id': '72',
            'author': '岸本和昌, 竹村匡正, 山本豪志朗, 杉山治, 小島諒介, 黒田知宏',
            'title': 'アラーム音自動検出システムに適したマイクロホン下限性能の検討',
            'year': '2022',
            'book': '第42回 医療情報学連合大会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-journal-papers-10,
 author = {Takahiro Mori and Jun Komiyama and Tomoko Fujii and Masaru Sanuki and Keitaro Kume and Genta Kato and Yukiko Mori and Hiroaki Ueshima and Hiroki Matsui and Nanako Tamiya and Takehiro Sugiyama},
 doi = {10.1007/s11657-022-01096-8},
 journal = {Archives of Osteoporosis},
 month = {Apr},
 number = {},
 pages = {61},
 title = {Medical expenditures for fragility hip fracture in Japan: a study using the nationwide health insurance claims database},
 volume = {17},
 year = {2022}
}`
            },

  {
            'id': '73',
            'author': '杉山治, 疋田智子, 岸本和昌, 西田菜都子, 竹村匡正, 黒田知宏',
            'title': 'ベッドサイド端末で計測されたBLE接近情報を用いた看護行動追跡',
            'year': '2022',
            'book': '生体医工学シンポジウム2022',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-journal-papers-1,
 author = {Ryo Otsuki and Osamu Sugiyama and Yuki Mori and Masahiro Miyake and Shusuke Hiragi and Goshiro Yamamoto and Luciano Santos and Yuta Nakanishi and Yoshikatsu Hosoda and Hiroshi Tamura and Shigemi Matsumoto and Akitaka Tsujikawa and Tomohiro Kuroda},
 doi = {10.14326/abe.11.16},
 journal = {Advanced Biomedical Engineering},
 number = { },
 pages = {16-24},
 title = {Integrating Preprocessing Operations into Deep Learning Model: Case Study of Posttreatment Visual Acuity Prediction},
 volume = {11},
 year = {2022}
}`
            },

  {
            'id': '74',
            'author': '横山晃士, 山本豪志朗, 劉暢, 岸本和昌, 黒田知宏',
            'title': '手術室内のグループ行動認識に向けた手術室監視映像解析',
            'year': '2022',
            'book': '生体医工学シンポジウム2022',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-japanese-journal-papers-3,
 author = {大西 和歩 and 浦西 友樹 and 劉 暢 and Photchara Ratsamee and 東田 学 and 山本 豪志朗 and 竹村 治雄},
 doi = {10.18974/tvrsj.27.4_331},
 journal = {日本バーチャルリアリティ学会論文誌},
 number = {4},
 pages = {331-340},
 title = {ホールド難度と配置を考慮したボルダリング課題の自動難度推定},
 volume = {27},
 year = {2022}
}`
            },

  {
            'id': '75',
            'author': '鈴本潤, 森由希子, 黒田知宏',
            'title': 'Health Information Exchange を研究対象とする過去の量的研究における検討項目及び検討結果のReview',
            'year': '2022',
            'book': '医療情報学会春季学術大会予稿集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-japanese-journal-papers-2,
 author = {庭瀬 尚武 and 山本 喜一 and 大寺 祥佑 and 加藤 源太 and 下垣 徹 and 黒田 知宏},
 doi = {10.14923/transinfj.2021jdp7040},
 issn = {1880-4535},
 journal = {電子情報通信学会論文誌 D},
 month = {05},
 number = {5},
 pages = {427-435},
 title = {レセプト情報・特定健診等データベース（NDB）のための並列分散処理を用いた次世代分析基盤の提案},
 url = {https://cir.nii.ac.jp/crid/1390854882617846016},
 volume = {J105-D},
 year = {2022}
}`
            },

  {
            'id': '76',
            'author': '黒田知宏, 佐藤晋, 岡本和也, 涌嶋賢二, 陳和夫',
            'title': 'CPAP遠隔医療とBIG DATA化の現状と展望',
            'year': '2022',
            'book': '日本睡眠学会定期学術集会予稿集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-japanese-journal-papers-1,
 author = {岸本 和昌 and 竹村 匡正 and 杉山 治 and 小島 諒介 and 八上 全弘 and 南部 雅幸 and 藤井 清孝 and 黒田 知宏},
 doi = {10.11239/jsmbe.60.8},
 journal = {生体医工学},
 number = {1},
 pages = {8-15},
 title = {深層ニューラルネットワークを用いた重複アラーム音識別システムの検討},
 volume = {60},
 year = {2022}
}`
            },

  {
            'id': '77',
            'author': '黒田知宏, 杉町勝, 木村裕一, 大城理, 村垣善浩, 佐久間一郎, 鈴木孝司, 鎮西清行, 吉元俊輔, 櫻井理紗, 中村英夫',
            'title': '臨床研究法が医療機器開発研究に与えた影響の実態把握に向けた調査研究報告',
            'year': '2022',
            'book': '日本生体医工学会大会 プログラム・抄録集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-international-conferences-1,
 author = {Luciano Santos and Chang Liu and Goshiro Yamamoto and Tomohiro Kuroda and Sayaka Okahashi},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 title = {RehaBricks - A Modular Electronics Peg Board for Exercise Adaptability in Upper Limb Rehabilitation},
 year = {2022}
}`
            },

  {
            'id': '78',
            'author': '堤貴彦, 森由希子, 山本豪志朗, 杉山治, 齊藤健一, 岸本和昌, 倉田真宏, 大鶴繁, 黒田知宏',
            'title': '振動台実験装置を用いた地震時の手術台の安全性の検証',
            'year': '2022',
            'book': 'システム制御情報学会研究発表講演会講演論文集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2022-9-japanese-journal-papers-4,
 author = {阪本恭子 and 岸本和昌 and 山本剛 and 竹村匡正},
 doi = {10.11239/jsmbe.60.95},
 journal = {生体医工学},
 number = {4-5},
 pages = {95-101},
 title = {BERTを用いた看護記録における自動監査の試み：カルテ記載における自己抜去を対象として},
 volume = {60},
 year = {2022}
}`
            },

  {
            'id': '79',
            'author': 'Israa Sameer, Luciano Henrique de Oliveiria Santos, Yukiko Mori, Osamu Sugiyama, Tomohiro Kuroda',
            'title': 'Increasing the Applicability of Brest Cancer Recurrence Risk Prediction',
            'year': '2022',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-9-domestic-conferences-13,
 author = {杉山治 and 疋田智子 and 岸本和昌 and 西田菜都子 and 竹村匡正 and 黒田知宏},
 booktitle = {生体医工学シンポジウム2022},
 doi = {},
 location = {オンライン},
 pages = {1E-08},
 title = {ベッドサイド端末で計測されたBLE接近情報を用いた看護行動追跡},
 year = {2022}
}`
            },

  {
            'id': '80',
            'author': '岸本和昌, 竹村匡正, 杉山治, 小島諒介, 山本豪志朗, 黒田知宏',
            'title': 'エッジデバイス上における医療機器アラーム音分類機の実行可能性の検討',
            'year': '2022',
            'book': 'システム制御情報学会研究発表講演会講演論文集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-9-domestic-conferences-12,
 author = {横山晃士 and 山本豪志朗 and 劉暢 and 岸本和昌 and 黒田知宏},
 booktitle = {生体医工学シンポジウム2022},
 doi = {},
 location = {オンライン},
 pages = {1E-05},
 title = {手術室内のグループ行動認識に向けた手術室監視映像解析},
 year = {2022}
}`
            },

  {
            'id': '81',
            'author': '齊藤 健一, 小林 慎治, 堤 貴彦, 山本 豪志朗, 高木 俊介, 橋本 悟',
            'title': 'ICUビッグデータの利活用を見据えた人工呼吸器の標準的データモデルの設計',
            'year': '2022',
            'book': '第66回システム制御情報学会研究発表講演会',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-7-domestic-conferences-11,
 author = {鈴本潤 and 森由希子 and 黒田知宏},
 booktitle = {医療情報学会春季学術大会予稿集},
 doi = {},
 location = {岡山},
 pages = {110-111},
 title = {Health Information Exchange を研究対象とする過去の量的研究における検討項目及び検討結果のReview},
 year = {2022}
}`
            },

  {
            'id': '82',
            'author': '櫻井理紗, 杉町勝, 木村裕一, 鈴木孝司, 黒田知宏',
            'title': '臨床研究法の該当性判断に関するガイドライン作成の経緯',
            'year': '2022',
            'book': '日本生体医工学会大会 プログラム・抄録集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-7-domestic-conferences-10,
 author = {黒田知宏 and 佐藤晋 and 岡本和也 and 涌嶋賢二 and 陳和夫},
 booktitle = {日本睡眠学会定期学術集会予稿集},
 doi = {},
 location = {京都},
 pages = {131},
 title = {CPAP遠隔医療とBIG DATA化の現状と展望},
 year = {2022}
}`
            },

  {
            'id': '83',
            'author': '笠井宏委, 森由希子, 渡邉卓也, 森拓也, 藤田健一郎, 谷口陽平, 唐木範子, 竹本ひかり, 宮平守彦, 涌嶋賢二, 永井洋士, 黒田知宏, 松田秀一',
            'title': '倫理審査システムと電子カルテ文書管理システムの自動連携による臨床研究同意取得プロセスの適正化にかかる取組み',
            'year': '2022',
            'book': '日本臨床試験学会学術集会総会予稿集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-6-domestic-conferences-9,
 author = {黒田知宏 and 杉町勝 and 木村裕一 and 大城理 and 村垣善浩 and 佐久間一郎 and 鈴木孝司 and 鎮西清行 and 吉元俊輔 and 櫻井理紗 and 中村英夫},
 booktitle = {日本生体医工学会大会 プログラム・抄録集},
 doi = {},
 location = {新潟},
 pages = {265-266},
 title = {臨床研究法が医療機器開発研究に与えた影響の実態把握に向けた調査研究報告},
 year = {2022}
}`
            },

  {
            'id': '84',
            'author': 'Ayane Yamaguchi, Maya Honda, Hiroshi Ishiguro, Masako Kataoka, Tatsuki R. Kataoka, Hanako Shimizu, Masae Torii, Yukiko Mori, Nobuko Kawaguchi-Sakita, Kentaro Ueno, Masahiro Kawashima, Masahiro Takada, Eiji Suzuki, Yuji Nakamoto, Kosuke Kawaguchi, Masakazu Toi',
            'title': 'Kinetic information from dynamic contrast-enhanced MRI enables prediction of residual cancer burden and prognosis in triple-negative breast cancer: a retrospective study',
            'year': '2021',
            'book': 'Scientific Reports',
            'doi': 'https://doi.org/10.1038/s41598-021-89380-4',
            'type': 'journal',
            'bibtex': `@inproceedings{2022-5-domestic-conferences-8,
 author = {堤貴彦 and 森由希子 and 山本豪志朗 and 杉山治 and 齊藤健一 and 岸本和昌 and 倉田真宏 and 大鶴繁 and 黒田知宏},
 booktitle = {システム制御情報学会研究発表講演会講演論文集},
 doi = {},
 location = {京都},
 pages = {706-709},
 title = {振動台実験装置を用いた地震時の手術台の安全性の検証},
 year = {2022}
}`
            },

  {
            'id': '85',
            'author': 'Shosuke Ohtera, Genta Kato, Hiroaki Ueshima, Yukiko Mori, Yuka Nakatani, Neiko Ozasa, Takeo Nakayama, Tomohiro Kuroda',
            'title': 'A nationwide survey on participation in cardiac rehabilitation among patients with coronary heart disease using health claims data in Japan',
            'year': '2021',
            'book': 'Scientific Reports',
            'doi': 'https://doi.org/10.1038/s41598-021-99516-1',
            'type': 'journal',
            'bibtex': `@inproceedings{2022-5-domestic-conferences-7,
 author = {Israa Sameer and Luciano Henrique de Oliveiria Santos and Yukiko Mori and Osamu Sugiyama and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 doi = {},
 location = {Kyoto},
 pages = {1126-1128},
 title = {Increasing the Applicability of Brest Cancer Recurrence Risk Prediction},
 year = {2022}
}`
            },

  {
            'id': '86',
            'author': 'Ai Kido, Masahiro Miyake, Hiroshi Tamura, Shusuke Hiragi, Takeshi Kimura, Shosuke Ohtera, Ayako Takahashi, Sotaro Ooto, Koji Kawakami, Tomohiro Kuroda, Akitaka Tsujikawa',
            'title': 'Incidence of central serous chorioretinopathy (2011–2018): a nationwide population-based cohort study of Japan',
            'year': '2021',
            'book': 'British Journal of Ophthalmology',
            'doi': 'https://doi.org/10.1136/bjophthalmol-2021-319403',
            'type': 'journal',
            'bibtex': `@inproceedings{2022-5-domestic-conferences-6,
 author = {岸本和昌 and 竹村匡正 and 杉山治 and 小島諒介 and 山本豪志朗 and 黒田知宏},
 booktitle = {システム制御情報学会研究発表講演会講演論文集},
 doi = {},
 location = {京都},
 pages = {702-705},
 title = {エッジデバイス上における医療機器アラーム音分類機の実行可能性の検討},
 year = {2022}
}`
            },

  {
            'id': '87',
            'author': 'Miho Asano, Tomohiro Kuroda, Satoshi Numata, Tuneo Jozen, Tomoki Yoshikawa, Hiroshi Noborio',
            'title': 'Convergence Stability of Depth–Depth- Matching-Based Steepest Descent Method in Simulated Liver Surgery',
            'year': '2021',
            'book': 'International Journal of Pharma Medicine and Biological Sciences',
            'doi': 'https://doi.org/10.18178/ijpmbs.10.2.60-67',
            'type': 'journal',
            'bibtex': `@inproceedings{2022-5-domestic-conferences-5,
 author = {齊藤 健一 and 小林 慎治 and 堤 貴彦 and 山本 豪志朗 and 高木 俊介 and 橋本 悟},
 booktitle = {第66回システム制御情報学会研究発表講演会},
 doi = {},
 location = {京都},
 pages = {699-701},
 title = {ICUビッグデータの利活用を見据えた人工呼吸器の標準的データモデルの設計},
 year = {2022}
}`
            },

  {
            'id': '88',
            'author': 'Michi Sakai, Shosuke Ohtera, Tomohide Iwao, Yukiko Neff, Tomoe Uchida, Yoshimitsu Takahashi, Genta Kato, Tomohiro Kuroda, Shuzo Nishimura, Takeo Nakayama',
            'title': 'Decreased Administration of Life-Sustaining Treatment just before Death among Older Inpatients in Japan: A Time-Trend Analysis from 2012 through 2014 Based on a Nationally Representative Sample',
            'year': '2021',
            'book': 'International Journal of Environmental Research and Public Health',
            'doi': 'https://doi.org/10.3390/ijerph18063135',
            'type': 'journal',
            'bibtex': `@inproceedings{2022-5-domestic-conferences-3,
 author = {櫻井理紗 and 杉町勝 and 木村裕一 and 鈴木孝司 and 黒田知宏},
 booktitle = {日本生体医工学会大会 プログラム・抄録集},
 doi = {},
 location = {名古屋},
 pages = {79},
 title = {臨床研究法の該当性判断に関するガイドライン作成の経緯},
 year = {2022}
}`
            },

  {
            'id': '89',
            'author': 'Luciano Santos, Kazuya Okamoto, Ryo Otsuki, Shusuke Hiragi, Goshiro Yamamoto, Osamu Sugiyama, Tomoki Aoyama, Tomohiro Kuroda',
            'title': 'Promoting Physical Activity in Japanese Older Adults Using a Social Pervasive Game: Randomized Controlled Trial',
            'year': '2021',
            'book': 'Journal of Medical Internet Research Serious Games',
            'doi': 'https://doi.org/10.2196/16458',
            'type': 'journal',
            'bibtex': `@inproceedings{2022-2-domestic-conferences-1,
 author = {笠井宏委 and 森由希子 and 渡邉卓也 and 森拓也 and 藤田健一郎 and 谷口陽平 and 唐木範子 and 竹本ひかり and 宮平守彦 and 涌嶋賢二 and 永井洋士 and 黒田知宏 and 松田秀一},
 booktitle = {日本臨床試験学会学術集会総会予稿集},
 doi = {},
 location = {東京},
 pages = {},
 title = {倫理審査システムと電子カルテ文書管理システムの自動連携による臨床研究同意取得プロセスの適正化にかかる取組み},
 year = {2022}
}`
            },

  {
            'id': '90',
            'author': 'Qi Ye Tomohiro Kuroda Tong Ruan Wenlong Zhang Xiaoling Ge',
            'title': 'An Integrated Resampling Methods for Imbalanced Sporadic Temporal Data in EHRs',
            'year': '2021',
            'book': '2021 IEEE International Conference on Bioinformatics and Biomedicine (BIBM)',
            'doi': 'https://doi.org/10.1109/BIBM52615.2021.9669865',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-12-domestic-conferences-21,
 author = {Shimizu Juko and Kishimoto Kazumasa and Nakai Takashi and Takemura Tadamasa},
 booktitle = {2022 Joint 12th International Conference on Soft Computing and Intelligent Systems and 23rd International Symposium on Advanced Intelligent Systems (SCIS&ISIS)},
 doi = {10.1109/SCISISIS55246.2022.10002064},
 location = {Ise-Shima/Japan},
 pages = {},
 title = {Prediction of Pharmaceuticals Groups using Compound Similarity},
 year = {2022}
}`
            },

  {
            'id': '91',
            'author': 'Natsuko Nishida, Tomoko Hikita, Megumi Iida, Goshiro Yamamoto, Tomohiro Kuroda',
            'title': 'Study of Sharing Patient Information by Nurses between Inpatient and Outpatient Wards in Japan',
            'year': '2021',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-11-domestic-conferences-20,
 author = {市川花菜 and 藤本晃司 and 杉山治 and 岸本和昌 and 西尾瑞穂 and 山本豪志朗 and 黒田知宏},
 booktitle = {第42回 医療情報学連合大会},
 doi = {},
 location = {札幌},
 pages = {4-F-2-06},
 title = {症例報告を対象とした固有表現抽出手法の比較},
 year = {2022}
}`
            },

  {
            'id': '92',
            'author': 'Luciano Santos, Kazuya Okamoto, Silvana Funghetto, Adriana Cavalli, Ryo Otsuki, Shusuke Hiragi, Goshiro Yamamoto, Osamu Sugiyama, Carla Castanho, Tomoki Aoyama, Tomohiro Kuroda',
            'title': 'Promoting physical activity using pervasive social games: case studies with elderly people in Brazil and Japan',
            'year': '2021',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-11-domestic-conferences-19,
 author = {伊藤彰仁 and 森由希子 and 岸本和昌 and 劉暢 and 山本豪志朗 and 黒田知宏 and 江木盛時},
 booktitle = {医療情報学連合大会論文集},
 doi = {},
 location = {札幌},
 pages = {844-846},
 title = {手術室監視映像の分析に基づく医療者の行動と手術開始時刻の関連性調査},
 year = {2022}
}`
            },

  {
            'id': '93',
            'author': 'Ryo Otsuki, Osamu Sugiyama, Yukiko Mori, Masahiro Miyake, Shusuke Hiragi, Goshiro Yamamoto, Luciano Santos, Yuta Nakanishi, Yoshikatsu Hosoda, Toshiyo Tamura, Shigemi Matsumoto, Akitaka Tsujikawa, Tomohiro Kuroda',
            'title': 'Integrating Preprocessing Operations into Deep Learning Model Case study with Postoperative Visual Acuity Prediction',
            'year': '2021',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-11-domestic-conferences-18,
 author = {西田菜都子 and 劉暢 and 杉山治 and 山本豪志朗 and 黒田知宏},
 booktitle = {医療情報学連合大会論文集},
 doi = {},
 location = {札幌},
 pages = {866-869},
 title = {看護記録の自動構造化に向けた音声入力インタフェースの提案},
 year = {2022}
}`
            },

  {
            'id': '94',
            'author': 'Kento Suzuki, Luciano Santos, Chang Liu, Hiroaki Ueshima, Goshiro Yamamoto, Sayaka Okahashi, Shusuke Hiragi, Osamu Sugiyama, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Evaluating Upper Limb Functions Based on Motion Analysis',
            'year': '2021',
            'book': 'Program and Proceedings of Annual Conference of Japanese Society of Medical and Biomedical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-11-domestic-conferences-17,
 author = {金山聡美 and 細見亮太 and 平原匠 and 宮平亜紀子 and 岸本和昌 and 竹村匡正},
 booktitle = {第42回 医療情報学連合大会},
 doi = {},
 location = {札幌},
 pages = {3-I-1-05},
 title = {モーションキャプチャを用いた患者状態把握システムの構築},
 year = {2022}
}`
            },

  {
            'id': '95',
            'author': 'Tomohiro Kuroda, Kazuhiko Ohe, Naoki Nakajima, Makoto Ohara',
            'title': 'Prototyping and Evaluation of a Data Collection Platform along -The JAMI Guideline for Medical Image Data Collection Platform-',
            'year': '2021',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-11-domestic-conferences-16,
 author = {横山晃士 and 山本豪志朗 and 劉暢 and 岸本和昌 and 黒田知宏},
 booktitle = {第42回 医療情報学連合大会},
 doi = {},
 location = {札幌},
 pages = {3-I-1-04},
 title = {手術室監視映像を用いたグループ行動認識の有効性調査},
 year = {2022}
}`
            },

  {
            'id': '96',
            'author': 'Roberto Espinoza, Shusuke Hiragi, Luciano Santos, Kensuke Morris, Hiroaki Ueshima, Goshiro Yamamoto, Tomohiro Kuroda',
            'title': 'Blood Donation and Deferral Awareness in Japan: Issues and Opportunities for Information and Communication Technology Interventions',
            'year': '2021',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2022-11-domestic-conferences-14,
 author = {岸本和昌 and 竹村匡正 and 山本豪志朗 and 杉山治 and 小島諒介 and 黒田知宏},
 booktitle = {第42回 医療情報学連合大会},
 doi = {},
 location = {札幌},
 pages = {3-I-1-02},
 title = {アラーム音自動検出システムに適したマイクロホン下限性能の検討},
 year = {2022}
}`
            },

  {
            'id': '97',
            'author': 'Koji Yokoyama, Goshiro Yamamoto, Hiroshi Sasaki, Osamu Sugiyama, Luciano Santos, Chang Liu, Shusuke Hiragi, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Understanding an Operating Room Situation based on Multi-person Motion Analysis',
            'year': '2021',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2021-journal-papers-6,
 author = {Ayane Yamaguchi and Maya Honda and Hiroshi Ishiguro and Masako Kataoka and Tatsuki R. Kataoka and Hanako Shimizu and Masae Torii and Yukiko Mori and Nobuko Kawaguchi-Sakita and Kentaro Ueno and Masahiro Kawashima and Masahiro Takada and Eiji Suzuki and Yuji Nakamoto and Kosuke Kawaguchi and Masakazu Toi},
 doi = {10.1038/s41598-021-89380-4},
 journal = {Scientific Reports},
 pages = {10112},
 title = {Kinetic information from dynamic contrast-enhanced MRI enables prediction of residual cancer burden and prognosis in triple-negative breast cancer: a retrospective study},
 volume = {11},
 year = {2021}
}`
            },

  {
            'id': '98',
            'author': 'Kahoru Tochigi, Noriko Matsuyama, Yo Sameshima, Yasuyo Kusunoki, Akiko Kuroda, Natsuko Oimoto, Tomohiro Kuroda, Kenji Ueshima, Yoshihiro Kuwabara, Masayo Ishiguro, Chisa Yasukawa, Chikako Toyooka, Yoji Nagai, Takayuki Nakagawa, Atsushi Takahashi, Ryosuke Takahashi',
            'title': 'Kyoto Trial of iPSC Transplant for Parkinson\'s Disease under COVID-19 Pandemic: The Role of CRC',
            'year': '2021',
            'book': 'Proceedings of Annual Meeting of the Japanese Society of Neurology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2021-journal-papers-5,
 author = {Shosuke Ohtera and Genta Kato and Hiroaki Ueshima and Yukiko Mori and Yuka Nakatani and Neiko Ozasa and Takeo Nakayama and Tomohiro Kuroda},
 doi = {10.1038/s41598-021-99516-1},
 journal = {Scientific Reports},
 pages = {20096},
 title = {A nationwide survey on participation in cardiac rehabilitation among patients with coronary heart disease using health claims data in Japan},
 volume = {11},
 year = {2021}
}`
            },

  {
            'id': '99',
            'author': 'Tomohiro Kuroda',
            'title': 'About Utilization of Next Generation Medical Platform Act',
            'year': '2021',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2021-journal-papers-4,
 author = {Ai Kido and Masahiro Miyake and Hiroshi Tamura and Shusuke Hiragi and Takeshi Kimura and Shosuke Ohtera and Ayako Takahashi and Sotaro Ooto and Koji Kawakami and Tomohiro Kuroda and Akitaka Tsujikawa},
 doi = {10.1136/bjophthalmol-2021-319403},
 journal = {British Journal of Ophthalmology},
 title = {Incidence of central serous chorioretinopathy (2011–2018): a nationwide population-based cohort study of Japan},
 year = {2021}
}`
            },

  {
            'id': '100',
            'author': 'Kazuya Okamoto, Tomoko Sekiya, Satoshi Kato, Kenji Suzuki, Tomohiro Kuroda',
            'title': 'Verification of Consistency of Assessment Rules for Specimen Test',
            'year': '2021',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2021-journal-papers-3,
 author = {Miho Asano and Tomohiro Kuroda and Satoshi Numata and Tuneo Jozen and Tomoki Yoshikawa and Hiroshi Noborio},
 doi = {10.18178/ijpmbs.10.2.60-67},
 journal = {International Journal of Pharma Medicine and Biological Sciences},
 number = {2},
 pages = {60-67},
 title = {Convergence Stability of Depth–Depth- Matching-Based Steepest Descent Method in Simulated Liver Surgery},
 volume = {10},
 year = {2021}
}`
            },

  {
            'id': '101',
            'author': '清水充子, 岸本和昌, 中井隆史, 山下晃平, 佐藤瑞月, 梶田朝佳, 竹村匡正',
            'title': '化合物の類似性を用いた医薬品グループ予測',
            'year': '2021',
            'book': '第41回医療情報学連合大会論文集',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@article{2021-journal-papers-2,
 author = {Michi Sakai and Shosuke Ohtera and Tomohide Iwao and Yukiko Neff and Tomoe Uchida and Yoshimitsu Takahashi and Genta Kato and Tomohiro Kuroda and Shuzo Nishimura and Takeo Nakayama},
 doi = {10.3390/ijerph18063135},
 journal = {International Journal of Environmental Research and Public Health},
 number = {6},
 pages = {3735},
 title = {Decreased Administration of Life-Sustaining Treatment just before Death among Older Inpatients in Japan: A Time-Trend Analysis from 2012 through 2014 Based on a Nationally Representative Sample},
 volume = {18},
 year = {2021}
}`
            },

  {
            'id': '102',
            'author': 'Yuki Kuroda, Goshiro Yamamoto, Tomohiro Kuroda',
            'title': 'A model of patient data flows and corresponding legal and ethical analysis for international medical research',
            'year': '2021',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2021-journal-papers-1,
 author = {Luciano Santos and Kazuya Okamoto and Ryo Otsuki and Shusuke Hiragi and Goshiro Yamamoto and Osamu Sugiyama and Tomoki Aoyama and Tomohiro Kuroda},
 doi = {10.2196/16458},
 journal = {Journal of Medical Internet Research Serious Games},
 number = {1},
 title = {Promoting Physical Activity in Japanese Older Adults Using a Social Pervasive Game: Randomized Controlled Trial},
 volume = {9},
 year = {2021}
}`
            },

  {
            'id': '103',
            'author': 'Koji Yokoyama, Goshiro Yamamoto, Chang Liu, Osamu Sugiyama, Luciano Santos, Tomohiro Kuroda',
            'title': 'Recognition of Instrument Passing and Group Attention for Understanding Intraoperative Team States',
            'year': '2021',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2021-international-conferences-3,
 author = {Qi Ye, Tomohiro Kuroda, Tong Ruan, Wenlong Zhang, Xiaoling Ge},
 booktitle = {2021 IEEE International Conference on Bioinformatics and Biomedicine (BIBM)},
 doi = {10.1109/BIBM52615.2021.9669865},
 number = {},
 pages = {3129-3136},
 title = {An Integrated Resampling Methods for Imbalanced Sporadic Temporal Data in EHRs},
 volume = {},
 year = {2021}
}`
            },

  {
            'id': '104',
            'author': 'Satoshi Yoshida, Osamu Sugiyama, Yukiko Mori, Yohei Yamasaki, Shusuke Hiragi, Goshiro Yamamoto, Shigemi Matsumoto, Tomohiro Kuroda',
            'title': 'Nephrosis Prediction with Sparse Clinical Time-Series Data',
            'year': '2021',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2021-international-conferences-2,
 author = {Natsuko Nishida and Tomoko Hikita and Megumi Iida and Goshiro Yamamoto and Tomohiro Kuroda},
 booktitle = {Studies in Health Technology and Informatics},
 pages = {pp.447-449},
 title = {Study of Sharing Patient Information by Nurses between Inpatient and Outpatient Wards in Japan},
 venue = {Online},
 volume = {284},
 year = {2021}
}`
            },

  {
            'id': '105',
            'author': 'Kazumasa Kishimoto, Tadamasa Takemura, Osamu Sugiyama, Ryosuke Kojima, Masahiro Yakami, Masayuki Nambu, Kiyotaka Fujii, Tomohiro Kuroda',
            'title': 'Prediction of Polyphonic Alarm Sound by Deep Neural Networks',
            'year': '2021',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2021-international-conferences-1,
 author = {Luciano Santos and Kazuya Okamoto and Silvana Funghetto and Adriana Cavalli and Ryo Otsuki and Shusuke Hiragi and Goshiro Yamamoto and Osamu Sugiyama and Carla Castanho and Tomoki Aoyama and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {15-22},
 title = {Promoting physical activity using pervasive social games: case studies with elderly people in Brazil and Japan},
 venue = {Serpa/Portugal},
 year = {2021}
}`
            },

  {
            'id': '106',
            'author': 'Yoshihiro Kinoshita, Kenichiro Fujita, Yasuaki Ikemi, Sachio Fukatsu, Yohei Ishida, Hiromichi Kamakari, Hironobu Murano, Masahiro Ashida, Tomohiro Kuroda',
            'title': 'Utilizing GS-1 Codes for Medicine in Hospital Information System -Targeting Recording Medicine used for Surgery-',
            'year': '2021',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2021-domestic-conferences-9,
 author = {Ryo Otsuki and Osamu Sugiyama and Yukiko Mori and Masahiro Miyake and Shusuke Hiragi and Goshiro Yamamoto and Luciano Santos and Yuta Nakanishi and Yoshikatsu Hosoda and Toshiyo Tamura and Shigemi Matsumoto and Akitaka Tsujikawa and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {14},
 title = {Integrating Preprocessing Operations into Deep Learning Model Case study with Postoperative Visual Acuity Prediction},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '107',
            'author': 'Otsuki Ryo, Sugiyama Osamu, Mori Yuki, Miyake Masahiro, Hiragi Shusuke, Yamamoto Goshiro, Santos Luciano, Nakanishi Yuta, Hosoda Yoshikatsu, Tamura Hiroshi, Matsumoto Shigemi, Tsujikawa Akitaka, Kuroda Tomohiro',
            'title': 'Deep Learning Model to Predict Postoperative Visual Acuity from Preoperative Multimedia Ophthalmic Data',
            'year': '2020',
            'book': 'Advanced Biomedical Engineering',
            'doi': 'https://doi.org/10.14326/abe.9.241',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-8,
 author = {Kento Suzuki and Luciano Santos and Chang Liu and Hiroaki Ueshima and Goshiro Yamamoto and Sayaka Okahashi and Shusuke Hiragi and Osamu Sugiyama and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Program and Proceedings of Annual Conference of Japanese Society of Medical and Biomedical Engineering},
 pages = {800-802},
 title = {Evaluating Upper Limb Functions Based on Motion Analysis},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '108',
            'author': 'Okamoto Kazuya, Yamamoto Takashi, Santos Luciano H. O., Hiragi Shusuke, Sugiyama Osamu, Yamamoto Goshiro, Hirose Masahiro, Kuroda Tomohiro',
            'title': 'Detecting Severe Incidents from Electronic Medical Records Using Machine Learning Methods',
            'year': '2020',
            'book': 'European Journal for Biomedical Informatics',
            'doi': 'https://doi.org/10.24105/ejbi.2020.16.1.2',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-7,
 author = {Tomohiro Kuroda and Kazuhiko Ohe and Naoki Nakajima and Makoto Ohara},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 pages = {144-145},
 title = {Prototyping and Evaluation of a Data Collection Platform along -The JAMI Guideline for Medical Image Data Collection Platform-},
 venue = {Yonago/Japan},
 year = {2021}
}`
            },

  {
            'id': '109',
            'author': 'Morris Kensuke, Yamamoto Goshiro, Sugiyama Osamu, Santos Luciano H. O., Tsutsumi Takahiko, Ohtsuki Ryo, Kato Genta, Hiragi Shusuke, Okamoto Kazuya, Nambu Masayuki, Kuroda Tomohiro',
            'title': 'Designing a Mobile Patient Information Sharing System using Patient\'s Community Members: Perceptions of Emergency Physicians',
            'year': '2020',
            'book': 'European Journal for Biomedical Informatics',
            'doi': 'https://doi.org/10.24105/ejbi.2020.16.3.1',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-6,
 author = {Roberto Espinoza and Shusuke Hiragi and Luciano Santos and Kensuke Morris and Hiroaki Ueshima and Goshiro Yamamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {1112-1116},
 title = {Blood Donation and Deferral Awareness in Japan: Issues and Opportunities for Information and Communication Technology Interventions},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '110',
            'author': 'Kenta Takahashi, Eri Ishibashi, Toshio Kubo, Yohei Harada, Hideyuki Hayashi, Masayuki Kano, Yasushi Shimizu, Hidekazu Shirota, Yukiko Mori, Manabu Muto, Chikashi Ishioka, Hirotoshi Dosaka-Akita, Hisahiro Matsubara, Hiroshi Nishihara, Naoko Sueoka-Aragane, Shinichi Toyooka, Akihiro Hirakawa, Ukihide Tateishi, Satoshi Miyake, Sadakatsu Ikeda',
            'title': 'A phase 2 basket trial of combination therapy with trastuzumab and pertuzumab in patients with solid cancers harboring human epidermal growth factor receptor 2 amplification (JUPITER trial)',
            'year': '2020',
            'book': 'Medicine (Baltimore)',
            'doi': 'https://doi.org/10.1097/MD.0000000000021457',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-5,
 author = {Koji Yokoyama and Goshiro Yamamoto and Hiroshi Sasaki and Osamu Sugiyama and Luciano Santos and Chang Liu and Shusuke Hiragi and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {280-286},
 title = {Understanding an Operating Room Situation based on Multi-person Motion Analysis},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '111',
            'author': 'Ryo Otsuki, Osamu Sugiyama, Yuki Mori, Masahiro Miyake, Shusuke Hiragi, Goshiro Yamamoto, Luciano Santos, Yuta Nakanishi, Yoshikatsu Hosoda, Hiroshi Tamura, Shigemi Matsumoto, Akitaka Tsujikawa, Tomohiro Kuroda',
            'title': 'Deep Learning Model to Predict Postoperative Visual Acuity from Preoperative Multimedia Ophthalmic Data',
            'year': '2020',
            'book': 'Advanced Biomedical Engineering',
            'doi': 'https://doi.org/10.14326/abe.9.241',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-4,
 author = {Kahoru Tochigi and Noriko Matsuyama and Yo Sameshima and Yasuyo Kusunoki and Akiko Kuroda and Natsuko Oimoto and Tomohiro Kuroda and Kenji Ueshima and Yoshihiro Kuwabara and Masayo Ishiguro and Chisa Yasukawa and Chikako Toyooka and Yoji Nagai and Takayuki Nakagawa and Atsushi Takahashi and Ryosuke Takahashi},
 booktitle = {Proceedings of Annual Meeting of the Japanese Society of Neurology},
 title = {Kyoto Trial of iPSC Transplant for Parkinson's Disease under COVID-19 Pandemic: The Role of CRC},
 venue = {Kyoto/Japan},
 year = {2021}
}`
            },

  {
            'id': '112',
            'author': 'Eizen Kimura, Shosuke Ohtera, Kaori Sasaki, Tomohiro Kuroda',
            'title': 'Status of Health Sector Registers and Data Provision in Finland',
            'year': '2020',
            'book': 'Journal of the Japan Statistical Society',
            'doi': '',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-3,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {18},
 title = {About Utilization of Next Generation Medical Platform Act},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '113',
            'author': 'Risa Sakurai, Tomohiro Kuroda, Hideo Nakamura, Masaru Sugimachi, Yuichi Kimura',
            'title': 'Principle to Decide the Applicability of BME Researches to Clinical Trials Act of Japan',
            'year': '2020',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': 'https://doi.org/10.11239/jsmbe.58.134',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-2,
 author = {Kazuya Okamoto and Tomoko Sekiya and Satoshi Kato and Kenji Suzuki and Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {176-177},
 title = {Verification of Consistency of Assessment Rules for Specimen Test},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '114',
            'author': 'Kazuya Okamoto, Takashi Yamamoto, Luciano Santos, Shusuke Hiragi, Osamu Sugiyama, Goshiro Yamamoto, Masahiro Hirose, Tomohiro Kuroda',
            'title': 'Detecting Severe Incidents from Electronic Medical Records Using Machine Learning Methods',
            'year': '2020',
            'book': 'European Journal for Biomedical Informatics',
            'doi': 'https://doi.org/10.24105/ejbi.2020.16.1.26',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-13,
 author = {Yuki Kuroda and Goshiro Yamamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {27},
 title = {A model of patient data flows and corresponding legal and ethical analysis for international medical research},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '115',
            'author': 'Kimihiko Murase, Kiminobu Tanizawa, Takuma Minami, Takeshi Matsumoto, Ryo Tachikawa, Naomi Takahashi, Toru Tsuda, Yoshiro Toyama, Motoharu Ohi, Toshiki Akahoshi, Yasuhiro Tomita, Koji Narui, Hiroshi Nakamura, Tetsuro Ohdaira, Hiroyuki Yoshimine, Tomomasa Tsuboi, Yoshihiro Yamashiro, Shinichi Ando, Takatoshi Kasai, Hideo Kita, Koichiro Tatsumi, Naoto Burioka, Keisuke Tomii, Yasuhiro Kondoh, Hirofumi Takeyama, Tomohiro Handa, Satoshi Hamada, Toru Oga, Takeo Nakayama, Tetsuo Sakamaki, Satoshi Morita, Tomohiro Kuroda, Toyohiro Hirai, Kazuo Chin',
            'title': 'A Randomized Controlled Trial of Telemedicine for Long-Term Sleep Apnea Continuous Positive Airway Pressure Management',
            'year': '2020',
            'book': 'Annals of the American Thoracic Society',
            'doi': 'https://doi.org/10.1513/AnnalsATS.201907-494OC',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-12,
 author = {Koji Yokoyama and Goshiro Yamamoto and Chang Liu and Osamu Sugiyama and Luciano Santos and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {26},
 title = {Recognition of Instrument Passing and Group Attention for Understanding Intraoperative Team States},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '116',
            'author': 'Kensuke Morris, Osamu Sugiyama, Goshiro Yamamoto, Manabu Shimoto, Genta Kato, Shigeru Ohtsuru, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Towards a Medical Oriented Social Network Service: Analysis of Instant Messaging Communication among Emergency Physicians',
            'year': '2020',
            'book': 'Advanced Biomedical Engineering',
            'doi': 'https://doi.org/10.14326/abe.9.35',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-11,
 author = {Satoshi Yoshida and Osamu Sugiyama and Yukiko Mori and Yohei Yamasaki and Shusuke Hiragi and Goshiro Yamamoto and Shigemi Matsumoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {29},
 title = {Nephrosis Prediction with Sparse Clinical Time-Series Data},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '117',
            'author': 'Tomohide Iwao, Genta Kato, Isao Ito, Toyohiro Hirai, Tomohiro Kuroda',
            'title': 'Treatment of Mycobacterium avium-intracellulare complex 82lung disease in the real world: a retrospective big data analysis',
            'year': '2020',
            'book': 'Drugs & Therapy Perspectives',
            'doi': 'https://doi.org/10.1007/s40267-019-00687-9',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-domestic-conferences-10,
 author = {Kazumasa Kishimoto and Tadamasa Takemura and Osamu Sugiyama and Ryosuke Kojima and Masahiro Yakami and Masayuki Nambu and Kiyotaka Fujii and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {25},
 title = {Prediction of Polyphonic Alarm Sound by Deep Neural Networks},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '118',
            'author': 'Miho Asano, Tomohiro Kuroda, Satoshi Numata, Tuneo Jozen, Tomoki Yoshikawa, Hiroshi Noborio',
            'title': 'Stability Maintenance of Depth-Depth Matching of Steepest Descent Method Using an Incision Shape of an Occluded Organ',
            'year': '2020',
            'book': 'Lecture Notes in Computer Science',
            'doi': 'https://doi.org/10.1007/978-3-030-49065-2_38',
            'type': 'conference',
            'bibtex': `@inproceedings{2021-domestic-conferences-1,
 author = {Yoshihiro Kinoshita and Kenichiro Fujita and Yasuaki Ikemi and Sachio Fukatsu and Yohei Ishida and Hiromichi Kamakari and Hironobu Murano and Masahiro Ashida and Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {132-33},
 title = {Utilizing GS-1 Codes for Medicine in Hospital Information System -Targeting Recording Medicine used for Surgery-},
 venue = {Online},
 year = {2021}
}`
            },

  {
            'id': '119',
            'author': 'Heryawan Lukman, Khotimah Purnomo Husnul, Sugiyama Osamu, Yamamoto Goshiro, Santos Luciano Henrique de Oliveira, Pramono Angga Eko, Okamoto Kazuya, Kuroda Tomohiro',
            'title': 'Toward Design of an Agent-based Writing Support System for the SOAP Note: A Content Analysis of the Video-based Survey',
            'year': '2020',
            'book': 'Advanced Biomedical Engineering',
            'doi': 'https://doi.org/10.14326/abe.9.146',
            'type': 'journal',
            'bibtex': `@inproceedings{2021-11-domestic-conferences-14,
 author = {清水充子 and 岸本和昌 and 中井隆史 and 山下晃平 and 佐藤瑞月 and 梶田朝佳 and 竹村匡正},
 booktitle = {第41回医療情報学連合大会論文集},
 doi = {},
 location = {福岡},
 pages = {795-796},
 title = {化合物の類似性を用いた医薬品グループ予測},
 year = {2021}
}`
            },

  {
            'id': '120',
            'author': 'Heryawan Lukman, Sugiyama Osamu, Yamamoto Goshiro, Khotimah Purnomo Husnul, Santos Luciano H O, Okamoto Kazuya, Kuroda Tomohiro',
            'title': 'A Detection of Informal Abbreviations from Free Text Medical Notes Using Deep Learning',
            'year': '2020',
            'book': 'European Journal for Biomedical Informatics',
            'doi': 'https://doi.org/10.24105/ejbi.2020.16.1.29',
            'type': 'journal',
            'bibtex': `@article{2020-journal-papers-8,
 author = {Kenta Takahashi and Eri Ishibashi and Toshio Kubo and Yohei Harada and Hideyuki Hayashi and Masayuki Kano and Yasushi Shimizu and Hidekazu Shirota and Yukiko Mori and Manabu Muto and Chikashi Ishioka and Hirotoshi Dosaka-Akita and Hisahiro Matsubara and Hiroshi Nishihara and Naoko Sueoka-Aragane and Shinichi Toyooka and Akihiro Hirakawa and Ukihide Tateishi and Satoshi Miyake and Sadakatsu Ikeda},
 doi = {10.1097/MD.0000000000021457},
 journal = {Medicine (Baltimore)},
 pages = {e21457},
 title = {A phase 2 basket trial of combination therapy with trastuzumab and pertuzumab in patients with solid cancers harboring human epidermal growth factor receptor 2 amplification (JUPITER trial)},
 volume = {99},
 year = {2020}
}`
            },

  {
            'id': '121',
            'author': 'Naoto Kume, Shinji Kobayashi, Hiroyuki Yoshihara, Tomohiro Kuroda, Kenji Araki',
            'title': 'Social Implementation of Medical Information Circulation Model with Electronic Health Record under The Next Generation Medical Infrastructure Law',
            'year': '2020',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2020-journal-papers-7,
 author = {Ryo Otsuki and Osamu Sugiyama and Yuki Mori and Masahiro Miyake and Shusuke Hiragi and Goshiro Yamamoto and Luciano Santos and Yuta Nakanishi and Yoshikatsu Hosoda and Hiroshi Tamura and Shigemi Matsumoto and Akitaka Tsujikawa and Tomohiro Kuroda},
 doi = {10.14326/abe.9.241},
 journal = {Advanced Biomedical Engineering},
 pages = {241-248},
 title = {Deep Learning Model to Predict Postoperative Visual Acuity from Preoperative Multimedia Ophthalmic Data},
 volume = {9},
 year = {2020}
}`
            },

  {
            'id': '122',
            'author': 'Yunwei Ma, Kazuya Okamoto, Osamu Sugiyama, Goshiro Yamamoto, Hiroshi Sasaki, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Proposal for Federated Learning Based on Medical Data Features',
            'year': '2020',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2020-journal-papers-6,
 author = {Eizen Kimura and Shosuke Ohtera and Kaori Sasaki and Tomohiro Kuroda},
 journal = {Journal of the Japan Statistical Society},
 number = {1},
 pages = {47-80},
 title = {Status of Health Sector Registers and Data Provision in Finland},
 volume = {50},
 year = {2020}
}`
            },

  {
            'id': '123',
            'author': 'Tomohiro Kuroda, Risa Sakurai, Shunsuke Yoshimoto, Hideo Nakamura, Masaru Sugimachi, Yuichi Kimura',
            'title': 'Toward Clarification of Guideline to Classify Biomedical Engineering Researches under Clinical Trials Act of Japan',
            'year': '2020',
            'book': 'Program and Proceedings of Annual Conference of Japanese Society of Medical and Biomedical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2020-journal-papers-5,
 author = {Risa Sakurai and Tomohiro Kuroda and Hideo Nakamura and Masaru Sugimachi and Yuichi Kimura},
 doi = {10.11239/jsmbe.58.134},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 pages = {134-146},
 title = {Principle to Decide the Applicability of BME Researches to Clinical Trials Act of Japan},
 volume = {58},
 year = {2020}
}`
            },

  {
            'id': '124',
            'author': 'Tomoya Watanabe, Chiaki Uema, Mika Inoue, Koji Oogari, Koji Koizumi, Kazuo Ueshima, Tomohiro Kuroda',
            'title': 'Investigation of Ghost Shadow for Wearable ECG Textile on the Use of Chest Radiograph',
            'year': '2020',
            'book': 'Program and Proceedings of Annual Conference of Japanese Society of Medical and Biomedical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2020-journal-papers-4,
 author = {Kazuya Okamoto and Takashi Yamamoto and Luciano Santos and Shusuke Hiragi and Osamu Sugiyama and Goshiro Yamamoto and Masahiro Hirose and Tomohiro Kuroda},
 doi = {10.24105/ejbi.2020.16.1.26},
 journal = {European Journal for Biomedical Informatics},
 number = {1},
 pages = {26-28},
 title = {Detecting Severe Incidents from Electronic Medical Records Using Machine Learning Methods},
 volume = {16},
 year = {2020}
}`
            },

  {
            'id': '125',
            'author': 'Yuta Nakanishi, Masahiro Miyake, Ryo Otsuki, Yuki Mori, Yoshikatsu Hosoda, Akio Oishi, Sotaro Ooto, Shusuke Hiragi, Osamu Sugiyama, Hiroshi Tamura, Tomohiro Kuroda, Akitaka Tsujikawa',
            'title': 'Transition of Diagnostic Accuracy for Each Number of Data in Fundus Photodiagnosis using Deep Learning Model',
            'year': '2020',
            'book': 'Journal of Japanese Ophthalmological Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2020-journal-papers-3,
 author = {Kimihiko Murase and Kiminobu Tanizawa and Takuma Minami and Takeshi Matsumoto and Ryo Tachikawa and Naomi Takahashi and Toru Tsuda and Yoshiro Toyama and Motoharu Ohi and Toshiki Akahoshi and Yasuhiro Tomita and Koji Narui and Hiroshi Nakamura and Tetsuro Ohdaira and Hiroyuki Yoshimine and Tomomasa Tsuboi and Yoshihiro Yamashiro and Shinichi Ando and Takatoshi Kasai and Hideo Kita and Koichiro Tatsumi and Naoto Burioka and Keisuke Tomii and Yasuhiro Kondoh and Hirofumi Takeyama and Tomohiro Handa and Satoshi Hamada and Toru Oga and Takeo Nakayama and Tetsuo Sakamaki and Satoshi Morita and Tomohiro Kuroda and Toyohiro Hirai and Kazuo Chin},
 doi = {10.1513/AnnalsATS.201907-494OC},
 journal = {Annals of the American Thoracic Society},
 number = {3},
 pages = {329-337},
 title = {A Randomized Controlled Trial of Telemedicine for Long-Term Sleep Apnea Continuous Positive Airway Pressure Management},
 volume = {17},
 year = {2020}
}`
            },

  {
            'id': '126',
            'author': 'Hiroki Chino, Haruo Noma, Osamu Sugiyama, Manabu Shimoto, Shigeru Ohtsuru, Tomohiro Kuroda',
            'title': 'Quantitative Analysis of Disaster Countermeasure Training and Development',
            'year': '2020',
            'book': 'Japanese Journal of Disaster Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2020-journal-papers-2,
 author = {Kensuke Morris and Osamu Sugiyama and Goshiro Yamamoto and Manabu Shimoto and Genta Kato and Shigeru Ohtsuru and Masayuki Nambu and Tomohiro Kuroda},
 doi = {10.14326/abe.9.35},
 journal = {Advanced Biomedical Engineering},
 pages = {35-42},
 title = {Towards a Medical Oriented Social Network Service: Analysis of Instant Messaging Communication among Emergency Physicians},
 volume = {9},
 year = {2020}
}`
            },

  {
            'id': '127',
            'author': 'Takeshi Sugino, Miho Nishii, Masashi Kotani, Kentaro Honma, Shusuke Hiragi, Tomohiro Kuroda',
            'title': 'Statistical Analysis of Management Indicator - Creating a Regression Model for Newly Hospitalized Patients by Multiple Regression Analysis-',
            'year': '2020',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2020-journal-papers-1,
 author = {Tomohide Iwao and Genta Kato and Isao Ito and Toyohiro Hirai and Tomohiro Kuroda},
 doi = {10.1007/s40267-019-00687-9},
 journal = {Drugs & Therapy Perspectives},
 title = {Treatment of Mycobacterium avium-intracellulare complex 82lung disease in the real world: a retrospective big data analysis},
 year = {2020}
}`
            },

  {
            'id': '128',
            'author': 'Kazuya Okamoto, Tadashi Ogi, Eiji Kobayasi, Tomoko Hikita, Natsuko Nishida, Shinichi Kai, Makoto Fujisawa, Yusuke Shiga, Katsuyuki Sugimura, Takashi Yamamoto, Chikamune Takeda, Yuya Matsuda, Youhei Taniguchi, Kenichiro Fujita, Osamu Sugiyama, Goshiro Yamamoto, Kohei Takai, Tomoharu Tanaka, Tomohiro Kuroda',
            'title': 'Suspension of using Special Purpose Information System for Intensive Care and Introduction of Core Hospital Information System at Intensive Care Unit',
            'year': '2020',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2020-international-conferences-1,
 author = {Miho Asano and Tomohiro Kuroda and Satoshi Numata and Tuneo Jozen and Tomoki Yoshikawa and Hiroshi Noborio},
 booktitle = {Lecture Notes in Computer Science},
 doi = {10.1007/978-3-030-49065-2_38},
 pages = {539-555},
 title = {Stability Maintenance of Depth-Depth Matching of Steepest Descent Method Using an Incision Shape of an Occluded Organ},
 venue = {Copenhagen/Denmark},
 volume = {12183},
 year = {2020}
}`
            },

  {
            'id': '129',
            'author': '山本豪志朗, 岡本和也, 黒田知宏',
            'title': '新型コロナウイルス対策のための「触らずに繋げる」6フィートの遠隔医療の実現',
            'year': '2020',
            'book': '人工知能学会研究会資料',
            'doi': 'https://doi.org/',
            'type': 'conference',
            'bibtex': `@inproceedings{2020-domestic-conferences-9,
 author = {Naoto Kume and Shinji Kobayashi and Hiroyuki Yoshihara and Tomohiro Kuroda and Kenji Araki},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 title = {Social Implementation of Medical Information Circulation Model with Electronic Health Record under The Next Generation Medical Infrastructure Law},
 venue = {Online},
 year = {2020}
}`
            },

  {
            'id': '130',
            'author': 'Tomohide Iwao, Genta Kato, Shigeru Ohtsuru, Tomohiro Kuroda',
            'title': 'Survey on Cases of Child Abuse with Trauma using Receipt Data',
            'year': '2020',
            'book': 'Proceedings of Annual Conference of Japanese Society for Prevention of Child Abuse and Neglect',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2020-domestic-conferences-8,
 author = {Yunwei Ma and Kazuya Okamoto and Osamu Sugiyama and Goshiro Yamamoto and Hiroshi Sasaki and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 title = {Proposal for Federated Learning Based on Medical Data Features},
 venue = {Online},
 year = {2020}
}`
            },

  {
            'id': '131',
            'author': 'Kazuhiko Ohe, Tomohiro Kuroda',
            'title': 'Electronic Medical Record Systems and Healthcare Information Systems after 10 years or 20 years',
            'year': '2020',
            'book': 'Japan Journal of Medical Informatics, Suppl.',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2020-domestic-conferences-7,
 author = {Tomohiro Kuroda and Risa Sakurai and Shunsuke Yoshimoto and Hideo Nakamura and Masaru Sugimachi and Yuichi Kimura},
 booktitle = {Program and Proceedings of Annual Conference of Japanese Society of Medical and Biomedical Engineering},
 pages = {550-552},
 title = {Toward Clarification of Guideline to Classify Biomedical Engineering Researches under Clinical Trials Act of Japan},
 venue = {Online},
 year = {2020}
}`
            },

  {
            'id': '132',
            'author': 'Yunwei Ma, Kazuya Okamoto, Osamu Sugiyama, Goshiro Yamamoto, Hiroshi Sasaki, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Design of Multi-institutional Federated Learning Considering Medical Data Characteristics',
            'year': '2020',
            'book': 'Japan Journal of Medical Informatics, Suppl.',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2020-domestic-conferences-6,
 author = {Tomoya Watanabe and Chiaki Uema and Mika Inoue and Koji Oogari and Koji Koizumi and Kazuo Ueshima and Tomohiro Kuroda},
 booktitle = {Program and Proceedings of Annual Conference of Japanese Society of Medical and Biomedical Engineering},
 pages = {289},
 title = {Investigation of Ghost Shadow for Wearable ECG Textile on the Use of Chest Radiograph},
 venue = {On-line},
 year = {2020}
}`
            },

  {
            'id': '133',
            'author': 'Tomohiro Kuroda, Yuki Kuroda, Risa Sakurai, Yuichi Kimura',
            'title': 'Legislations on Personal Data Protection surrounding Home Medical Care',
            'year': '2020',
            'book': 'Proceedings of Annual Meeting of the Japanese Society for Artificial Organs',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2020-domestic-conferences-5,
 author = {Yuta Nakanishi and Masahiro Miyake and Ryo Otsuki and Yuki Mori and Yoshikatsu Hosoda and Akio Oishi and Sotaro Ooto and Shusuke Hiragi and Osamu Sugiyama and Hiroshi Tamura and Tomohiro Kuroda and Akitaka Tsujikawa},
 booktitle = {Journal of Japanese Ophthalmological Society},
 pages = {262},
 title = {Transition of Diagnostic Accuracy for Each Number of Data in Fundus Photodiagnosis using Deep Learning Model},
 venue = {Online},
 volume = {124},
 year = {2020}
}`
            },

  {
            'id': '134',
            'author': 'Kenichiro Fujita, Yoshihiro Takimoto, Satoshi Nakao, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Evaluating Cooling Potential of Server Room -From Viewpoint of Optimization of Power Consumption and Investment-',
            'year': '2020',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2020-domestic-conferences-4,
 author = {Hiroki Chino and Haruo Noma and Osamu Sugiyama and Manabu Shimoto and Shigeru Ohtsuru and Tomohiro Kuroda},
 booktitle = {Japanese Journal of Disaster Medicine},
 number = {3},
 pages = {283},
 title = {Quantitative Analysis of Disaster Countermeasure Training and Development},
 venue = {Kobe/Japan},
 volume = {24},
 year = {2020}
}`
            },

  {
            'id': '135',
            'author': 'Santos Luciano Henrique Oliveira, Okamoto Kazuya, Hiragi Shusuke, Yamamoto Goshiro, Sugiyama Osamu, Aoyama Tomoki, Kuroda Tomohiro',
            'title': 'Design Elements of Pervasive Games for Elderly Players: A Social Interaction Study Case',
            'year': '2019',
            'book': 'Human Aspects of IT for the Aged Population. Applications in Health, Assistance, and Entertainment',
            'doi': 'https://doi.org/10.1007/978-3-030-22015-0_16',
            'type': 'book',
            'bibtex': `@inproceedings{2020-domestic-conferences-3,
 author = {Takeshi Sugino and Miho Nishii and Masashi Kotani and Kentaro Honma and Shusuke Hiragi and Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {251-252},
 title = {Statistical Analysis of Management Indicator - Creating a Regression Model for Newly Hospitalized Patients by Multiple Regression Analysis-},
 venue = {Akita/Japan},
 year = {2020}
}`
            },

  {
            'id': '136',
            'author': 'Santos Luciano HO, Okamoto Kazuya, Hiragi Shusuke, Yamamoto Goshiro, Sugiyama Osamu, Aoyama Tomoki, Kuroda Tomohiro',
            'title': 'Pervasive game design to evaluate social interaction effects on levels of physical activity among older adults',
            'year': '2019',
            'book': 'Journal of Rehabilitation and Assistive Technologies Engineering',
            'doi': 'https://doi.org/10.1177/2055668319844443',
            'type': 'journal',
            'bibtex': `@inproceedings{2020-domestic-conferences-2,
 author = {Kazuya Okamoto and Tadashi Ogi and Eiji Kobayasi and Tomoko Hikita and Natsuko Nishida and Shinichi Kai and Makoto Fujisawa and Yusuke Shiga and Katsuyuki Sugimura and Takashi Yamamoto and Chikamune Takeda and Yuya Matsuda and Youhei Taniguchi and Kenichiro Fujita and Osamu Sugiyama and Goshiro Yamamoto and Kohei Takai and Tomoharu Tanaka and Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {100-101},
 title = {Suspension of using Special Purpose Information System for Intensive Care and Introduction of Core Hospital Information System at Intensive Care Unit},
 venue = {Akita/Japan},
 year = {2020}
}`
            },

  {
            'id': '137',
            'author': 'Santos Luciano H O, Okamoto Kazuya, Cavalli Adriana S, Hiragi Shusuke, Yamamoto Goshiro, Sugiyama Osamu, Castanho Carla D, Aoyama Tomoki, Kuroda Tomohiro',
            'title': 'Designing Pervasive Social Interaction Mechanics for Elderly Players: A Multicultural Study Case',
            'year': '2019',
            'book': 'Innovation in Medicine and Healthcare Systems, and Multimedia',
            'doi': 'https://doi.org/10.1007/978-981-13-8566-7_29',
            'type': 'book',
            'bibtex': `@inproceedings{2020-domestic-conferences-13,
 author = {Tomohide Iwao and Genta Kato and Shigeru Ohtsuru and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of Japanese Society for Prevention of Child Abuse and Neglect},
 pages = {150},
 title = {Survey on Cases of Child Abuse with Trauma using Receipt Data},
 venue = {Online},
 year = {2020}
}`
            },

  {
            'id': '138',
            'author': 'Santos Luciano HO, Okamoto Kazuya, Funghetto Silvana Schwerz, Cavalli Adriana Schüler, Hiragi Shusuke, Yamamoto Goshiro, Sugiyama Osamu, Castanho Carla Denise, Aoyama Tomoki, Kuroda Tomohiro',
            'title': 'Effects of Social Interaction Mechanics in Pervasive Games on the Physical Activity Levels of Older Adults: Quasi-Experimental Study',
            'year': '2019',
            'book': 'JMIR Serious Games',
            'doi': 'https://doi.org/10.2196/13962',
            'type': 'journal',
            'bibtex': `@inproceedings{2020-domestic-conferences-12,
 author = {Kazuhiko Ohe and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics, Suppl.},
 title = {Electronic Medical Record Systems and Healthcare Information Systems after 10 years or 20 years},
 venue = {Hamamatsu/Japan},
 year = {2020}
}`
            },

  {
            'id': '139',
            'author': 'Santos Luciano H O, Okamoto Kazuya, Otsuki Ryo, Hiragi Shusuke, Yamamoto Goshiro, Sugiyama Osamu, Aoyama Tomoki, Kuroda Tomohiro',
            'title': 'Evaluating the Effect of Social Interaction in a Pervasive Game to Promote Physical Activity of Older Adults',
            'year': '2019',
            'book': 'Entertainment Computing 2019',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2020-domestic-conferences-11,
 author = {Yunwei Ma and Kazuya Okamoto and Osamu Sugiyama and Goshiro Yamamoto and Hiroshi Sasaki and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics, Suppl.},
 title = {Design of Multi-institutional Federated Learning Considering Medical Data Characteristics},
 venue = {Hamamatsu/Japan},
 year = {2020}
}`
            },

  {
            'id': '140',
            'author': 'Samar El Helou, Victoria Abou-Khalil, Goshiro Yamamoto, Eiji Kondo, Hiroshi Tamura, Shusuke Hiragi, Osamu Sugiyama, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Prioritizing Features to Redesign in an EMR System',
            'year': '2019',
            'book': 'Studies in Health Technology and Informatics',
            'doi': 'https://doi.org/10.3233/SHTI190419',
            'type': 'journal',
            'bibtex': `@inproceedings{2020-domestic-conferences-10,
 author = {Tomohiro Kuroda and Yuki Kuroda and Risa Sakurai and Yuichi Kimura},
 booktitle = {Proceedings of Annual Meeting of the Japanese Society for Artificial Organs},
 number = {2},
 title = {Legislations on Personal Data Protection surrounding Home Medical Care},
 venue = {Kochi/Japan},
 volume = {49},
 year = {2020}
}`
            },

  {
            'id': '141',
            'author': 'Kenichiro Fujita, Osamu Sugiyama, Shusuke Hiragi, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda',
            'title': 'Analysis for the Annual Text Amount of Electronic Medical Records',
            'year': '2019',
            'book': 'Studies in Health Technology and Informatics',
            'doi': 'https://doi.org/10.3233/SHTI190585',
            'type': 'journal',
            'bibtex': `@inproceedings{2020-domestic-conferences-1,
 author = {Kenichiro Fujita and Yoshihiro Takimoto and Satoshi Nakao and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {201-202},
 title = {Evaluating Cooling Potential of Server Room -From Viewpoint of Optimization of Power Consumption and Investment-},
 venue = {Akita/Japan},
 year = {2020}
}`
            },

  {
            'id': '142',
            'author': 'Yohei Yamasaki, Osamu Sugiyama, Shusuke Hiragi, Shosuke Ohtera, Goshiro Yamamoto, Hiroshi Sasaki, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Early Nephrosis Detection Based on Deep Learning with Clinical Time-Series Data',
            'year': '2019',
            'book': 'Studies in Health Technology and Informatics',
            'doi': 'https://doi.org/10.3233/SHTI190552',
            'type': 'journal',
            'bibtex': `@inproceedings{2020-9-domestic-conferences-14,
 author = {山本豪志朗 and 岡本和也 and 黒田知宏},
 booktitle = {人工知能学会研究会資料},
 doi = {},
 location = {オンライン},
 pages = {22-23},
 title = {新型コロナウイルス対策のための「触らずに繋げる」6フィートの遠隔医療の実現},
 year = {2020}
}`
            },

  {
            'id': '143',
            'author': 'Luciano Santos, Kazuya Okamoto, Silvana Funghetto, Adriana Cavalli, Shusuke Hiragi, Goshiro Yamamoto, Osamu Sugiyama, Carla Castanho, Tomoki Aoyama, Tomohiro Kuroda',
            'title': 'Effects of Social Interaction Mechanics in Pervasive Games on the Physical Activity Levels of Older Adults: Quasi-Experimental Study',
            'year': '2019',
            'book': 'Journal of Medical Internet Research Serious Games',
            'doi': 'https://doi.org/0.2196/13962',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-9,
 author = {Samar El Helou and Victoria Abou-Khalil and Goshiro Yamamoto and Eiji Kondo and Hiroshi Tamura and Shusuke Hiragi and Osamu Sugiyama and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 doi = {10.3233/SHTI190419},
 journal = {Studies in Health Technology and Informatics},
 pages = {1213-1217},
 title = {Prioritizing Features to Redesign in an EMR System},
 volume = {264},
 year = {2019}
}`
            },

  {
            'id': '144',
            'author': 'Samar El Helou, Victoria Abou-Khalil, Goshiro Yamamoto, Hiroshi Tamura, Shusuke Hiragi, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Understanding the Situated Roles of Electronic Medical Record Systems to Enable Redesign: Mixed Methods Study',
            'year': '2019',
            'book': 'Journal of Medical Internet Research Human Factors',
            'doi': 'https://doi.org/0.2196/13812',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-8,
 author = {Kenichiro Fujita and Osamu Sugiyama and Shusuke Hiragi and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda},
 doi = {10.3233/SHTI190585},
 journal = {Studies in Health Technology and Informatics},
 pages = {1662-1665},
 title = {Analysis for the Annual Text Amount of Electronic Medical Records},
 volume = {264},
 year = {2019}
}`
            },

  {
            'id': '145',
            'author': 'Samar El Helou, Victoria Abou-Khalil, Goshiro Yamamoto, Eiji Kondo, Hiroshi Tamura, Shusuke Hiragi, Osamu Sugiyama, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Understanding the EMR-Related Experiences of Pregnant Japanese Women to Redesign Antenatal Care EMR Systems',
            'year': '2019',
            'book': 'Informatics',
            'doi': 'https://doi.org/10.3390/informatics6020015',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-7,
 author = {Yohei Yamasaki and Osamu Sugiyama and Shusuke Hiragi and Shosuke Ohtera and Goshiro Yamamoto and Hiroshi Sasaki and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 doi = {10.3233/SHTI190552},
 journal = {Studies in Health Technology and Informatics},
 pages = {1596-1597},
 title = {Early Nephrosis Detection Based on Deep Learning with Clinical Time-Series Data},
 volume = {264},
 year = {2019}
}`
            },

  {
            'id': '146',
            'author': 'Tadao Nagasaki, Keiko Sato, Naoto Kume, Tsuyoshi Oguma, Hironobu Sunadome, Isao Ito, Yumi Izuhara, Kazuya Okamoto, Shinji Kobayashi, Tomoya Ohno, Akiko Mizukami, Akihiro Kobayashi, Toshihiko Kaise, Tomohiro Kuroda, Michiaki Mishima, Hisako Matsumoto',
            'title': 'The Prevalence and Disease Burden of Severe Eosinophilic Asthma in Japan',
            'year': '2019',
            'book': 'Journal of Asthma',
            'doi': 'https://doi.org/10.1080/02770903.2018.1534967',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-6,
 author = {Luciano Santos and Kazuya Okamoto and Silvana Funghetto and Adriana Cavalli and Shusuke Hiragi and Goshiro Yamamoto and Osamu Sugiyama and Carla Castanho and Tomoki Aoyama and Tomohiro Kuroda},
 doi = {0.2196/13962},
 journal = {Journal of Medical Internet Research Serious Games},
 number = {3},
 title = {Effects of Social Interaction Mechanics in Pervasive Games on the Physical Activity Levels of Older Adults: Quasi-Experimental Study},
 volume = {7},
 year = {2019}
}`
            },

  {
            'id': '147',
            'author': 'Tomohiro Kuroda',
            'title': 'Clinical Medicine of Infomation Age',
            'year': '2019',
            'book': 'Nextcom',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-5,
 author = {Samar El Helou and Victoria Abou-Khalil and Goshiro Yamamoto and Hiroshi Tamura and Shusuke Hiragi and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 doi = {0.2196/13812},
 journal = {Journal of Medical Internet Research Human Factors},
 number = {3},
 title = {Understanding the Situated Roles of Electronic Medical Record Systems to Enable Redesign: Mixed Methods Study},
 volume = {6},
 year = {2019}
}`
            },

  {
            'id': '148',
            'author': 'Tomohide Iwao, Genta Kato, Eiji Aramaki, Tomohiro Kuroda',
            'title': 'A survey of clarithromycin monotherapy and long‐term administration of ethambutol for patients with MAC lung disease in Japan: A retrospective cohort study using the database of health insurance claims',
            'year': '2019',
            'book': 'Pharmacoepidemiology and Drug Safety',
            'doi': 'https://doi.org/10.1002/pds.4951',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-4,
 author = {Samar El Helou and Victoria Abou-Khalil and Goshiro Yamamoto and Eiji Kondo and Hiroshi Tamura and Shusuke Hiragi and Osamu Sugiyama and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 doi = {10.3390/informatics6020015},
 journal = {Informatics},
 number = {2},
 pages = {15},
 title = {Understanding the EMR-Related Experiences of Pregnant Japanese Women to Redesign Antenatal Care EMR Systems},
 volume = {6},
 year = {2019}
}`
            },

  {
            'id': '149',
            'author': 'Kenichiro Fujita, Katsumi Onishi, Tadamasa Takemura, Tomohiro Kuroda',
            'title': 'The Improvement of the Electronic Health Record User Experience by Screen Design Principles',
            'year': '2019',
            'book': 'Journal of Medical Systems',
            'doi': 'https://doi.org//10.1007/s10916-019-1505-0',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-3,
 author = {Tadao Nagasaki and Keiko Sato and Naoto Kume and Tsuyoshi Oguma and Hironobu Sunadome and Isao Ito and Yumi Izuhara and Kazuya Okamoto and Shinji Kobayashi and Tomoya Ohno and Akiko Mizukami and Akihiro Kobayashi and Toshihiko Kaise and Tomohiro Kuroda and Michiaki Mishima and Hisako Matsumoto},
 doi = {10.1080/02770903.2018.1534967},
 journal = {Journal of Asthma},
 title = {The Prevalence and Disease Burden of Severe Eosinophilic Asthma in Japan},
 year = {2019}
}`
            },

  {
            'id': '150',
            'author': 'Samar El Helou, Shinji Kobayashi, Goshiro Yamamoto, Naoto Kume, Eiji Kondo, Shusuke Hiragi, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Graph databases for openEHR clinical repositories',
            'year': '2019',
            'book': 'International Journal of Computational Science and Engineering',
            'doi': 'https://doi.org/10.1504/IJCSE.2019.103955',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-2,
 author = {Tomohiro Kuroda},
 journal = {Nextcom},
 pages = {4-11},
 title = {Clinical Medicine of Infomation Age},
 volume = {37},
 year = {2019}
}`
            },

  {
            'id': '151',
            'author': 'Kana Eguchi, Masayuki Nambu, Takahiro Kamikawa, Kazuo Ueshima, Tomohiro Kuroda',
            'title': 'Smart Textile Device with Embedded Fabric Electrodes Targeting Periodic Limb Movements Monitoring at Home: A Case Report',
            'year': '2019',
            'book': 'Journal of Fiber Science and Technology',
            'doi': 'https://doi.org/10.2115/fiberst.2019-0020',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-15,
 author = {Tomohide Iwao and Genta Kato and Eiji Aramaki and Tomohiro Kuroda},
 doi = {10.1002/pds.4951},
 journal = {Pharmacoepidemiology and Drug Safety},
 number = {4},
 pages = {427-432},
 title = {A survey of clarithromycin monotherapy and long‐term administration of ethambutol for patients with MAC lung disease in Japan: A retrospective cohort study using the database of health insurance claims},
 volume = {29},
 year = {2019}
}`
            },

  {
            'id': '152',
            'author': 'Yuichi Nishioka, Sadanori Okada, Tatsuya Noda, Tomoya Myojin, Shinichiro Kubo, Shosuke Ohtera, Genta Kato, Tomohiro Kuroda, Hitoshi Ishii, Tomoaki Imamura',
            'title': 'Absolute Risk of Acute Coronary Syndrome after Severe Hypoglycemia: A Population-Based 11 2-year Cohort Study Using the National Database in Japan',
            'year': '2019',
            'book': 'Journal of Diabetes Investigation',
            'doi': 'https://doi.org/10.1111/JDI.13153',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-14,
 author = {Kenichiro Fujita and Katsumi Onishi and Tadamasa Takemura and Tomohiro Kuroda},
 doi = {/10.1007/s10916-019-1505-0},
 journal = {Journal of Medical Systems},
 number = {21},
 title = {The Improvement of the Electronic Health Record User Experience by Screen Design Principles},
 volume = {44},
 year = {2019}
}`
            },

  {
            'id': '153',
            'author': 'Tomohide Iwao, Genta Kato, Shigeru Ohtsuru, Eiji Kondo, Takeo Nakayama, Tomohiro Kuroda',
            'title': 'An Optimum Data Warehouse for Epidemiological Analysis using the National Database of Health Insurance Claims of Japan',
            'year': '2019',
            'book': 'European Journal for Biomedical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-13,
 author = {Samar El Helou and Shinji Kobayashi and Goshiro Yamamoto and Naoto Kume and Eiji Kondo and Shusuke Hiragi and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 doi = {10.1504/IJCSE.2019.103955},
 journal = {International Journal of Computational Science and Engineering},
 number = {3},
 pages = {281-298},
 title = {Graph databases for openEHR clinical repositories},
 volume = {20},
 year = {2019}
}`
            },

  {
            'id': '154',
            'author': 'Shusuke Hiragi, Rei Goto, Yukari Tanaka, Yoko Matsuyama, Atsuo Sawada, Kaoru Sakai, Hitomi Miyata, Hiroshi Tamura, Motoko Yanagita, Tomohiro Kuroda, Osamu Ogawa, Takashi Kobayashi',
            'title': 'Estimating the Net Utility Gains among Donors and Recipients of Adult Living Donor Kidney Transplantation',
            'year': '2019',
            'book': 'Transplantation Processings',
            'doi': 'https://doi.org/10.1016/j.transproceed.2019.01.049',
            'type': 'journal',
            'bibtex': `@article{2019-journal-papers-12,
 author = {Kana Eguchi and Masayuki Nambu and Takahiro Kamikawa and Kazuo Ueshima and Tomohiro Kuroda},
 doi = {10.2115/fiberst.2019-0020},
 journal = {Journal of Fiber Science and Technology},
 number = {11},
 pages = {164-180},
 title = {Smart Textile Device with Embedded Fabric Electrodes Targeting Periodic Limb Movements Monitoring at Home: A Case Report},
 volume = {75},
 year = {2019}
}`
            },

  {
            'id': '155',
            'author': 'Miho Asano, Genta Kato, Shosuke Ohtera, Yukiko Mori, Hiroaki Ueshima, Tomohiro Kuroda',
            'title': 'Introduction of healthcare big data in Japan: National Database of Health Insurance Claims and Specific Health Checkups of Japan (NDB)',
            'year': '2019',
            'book': 'Proceedings of Miyako Island Conference on Neuroscience',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2019-journal-papers-11,
 author = {Yuichi Nishioka and Sadanori Okada and Tatsuya Noda and Tomoya Myojin and Shinichiro Kubo and Shosuke Ohtera and Genta Kato and Tomohiro Kuroda and Hitoshi Ishii and Tomoaki Imamura},
 doi = {10.1111/JDI.13153},
 journal = {Journal of Diabetes Investigation},
 title = {Absolute Risk of Acute Coronary Syndrome after Severe Hypoglycemia: A Population-Based 11 2-year Cohort Study Using the National Database in Japan},
 year = {2019}
}`
            },

  {
            'id': '156',
            'author': 'Tomohiro Kuroda',
            'title': 'Next Generation Hospital Information Systems',
            'year': '2019',
            'book': 'ERLEP Trans-Disciplinary Forum',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2019-journal-papers-10,
 author = {Tomohide Iwao and Genta Kato and Shigeru Ohtsuru and Eiji Kondo and Takeo Nakayama and Tomohiro Kuroda},
 journal = {European Journal for Biomedical Informatics},
 number = {3},
 pages = {31-42},
 title = {An Optimum Data Warehouse for Epidemiological Analysis using the National Database of Health Insurance Claims of Japan},
 volume = {15},
 year = {2019}
}`
            },

  {
            'id': '157',
            'author': 'Kenichiro Fujita, Osamu Sugiyama, Shusuke Hiragi, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda',
            'title': 'Analysis for the Annual Text Amount of Electronic Medical Records',
            'year': '2019',
            'book': 'Proceedings of World Congress on Medical and Health Informatics',
            'doi': 'https://doi.org/10.3233/SHTI190585',
            'type': 'conference',
            'bibtex': `@article{2019-journal-papers-1,
 author = {Shusuke Hiragi and Rei Goto and Yukari Tanaka and Yoko Matsuyama and Atsuo Sawada and Kaoru Sakai and Hitomi Miyata and Hiroshi Tamura and Motoko Yanagita and Tomohiro Kuroda and Osamu Ogawa and Takashi Kobayashi},
 doi = {10.1016/j.transproceed.2019.01.049},
 journal = {Transplantation Processings},
 title = {Estimating the Net Utility Gains among Donors and Recipients of Adult Living Donor Kidney Transplantation},
 year = {2019}
}`
            },

  {
            'id': '158',
            'author': 'Samar El Helou, Victoria Abou-Khalil, Goshiro Yamamoto, Eiji Kondo, Hiroshi Tamura, Shusuke Hiragi, Osamu Sugiyama, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Prioritizing Features to Redesign in an EMR System',
            'year': '2019',
            'book': 'Proceedings of World Congress on Medical and Health Informatics',
            'doi': 'https://doi.org/10.3233/SHTI190419',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-international-conferences-7,
 author = {Miho Asano and Genta Kato and Shosuke Ohtera and Yukiko Mori and Hiroaki Ueshima and Tomohiro Kuroda},
 booktitle = {Proceedings of Miyako Island Conference on Neuroscience},
 title = {Introduction of healthcare big data in Japan: National Database of Health Insurance Claims and Specific Health Checkups of Japan (NDB)},
 venue = {Miyako/Japan},
 year = {2019}
}`
            },

  {
            'id': '159',
            'author': 'Yohei Yamasaki, Osamu Sugiyama, Shusuke Hiragi, Shosuke Ohtera, Goshiro Yamamoto, Hiroshi Sasaki, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Early Nephrosis Detection Based on Deep Learning with Clinical Time-Series Data',
            'year': '2019',
            'book': 'Proceedings of World Congress on Medical and Health Informatics',
            'doi': 'https://doi.org/10.3233/SHTI190552',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-international-conferences-6,
 author = {Tomohiro Kuroda},
 booktitle = {ERLEP Trans-Disciplinary Forum},
 title = {Next Generation Hospital Information Systems},
 venue = {Sapporo/Japan},
 year = {2019}
}`
            },

  {
            'id': '160',
            'author': 'Luciano Santos, Kazuya Okamoto, Goshiro Yamamoto, Osamu Sugiyama, Tomoki Aoyama, Tomohiro Kuroda',
            'title': 'Design Elements of Pervasive Games for Elderly Players: A Social Interaction Study Case',
            'year': '2019',
            'book': 'Lecture Notes in Computer Science',
            'doi': 'https://doi.org/10.1007/978-3-030-22015-0_16',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-international-conferences-5,
 author = {Kenichiro Fujita and Osamu Sugiyama and Shusuke Hiragi and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda},
 booktitle = {Proceedings of World Congress on Medical and Health Informatics},
 doi = {10.3233/SHTI190585},
 pages = {1662-1665},
 title = {Analysis for the Annual Text Amount of Electronic Medical Records},
 venue = {Lyon/France},
 year = {2019}
}`
            },

  {
            'id': '161',
            'author': 'Koji Shimizu, Gakuto Aoyama, Mizuho Nishio, Masahiro Yakami, Takeshi Kubo, Yutaka Emoto, Tatsuya Ito, Tomohiro Kuroda, Hiroyoshi Isoda',
            'title': 'A case study regarding clinical performance evaluation method of medical device software for approval',
            'year': '2019',
            'book': 'Proceedings of SPIE Medical Imaging',
            'doi': 'https://doi.org/0.1117/12.2511936',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-international-conferences-4,
 author = {Samar El Helou and Victoria Abou-Khalil and Goshiro Yamamoto and Eiji Kondo and Hiroshi Tamura and Shusuke Hiragi and Osamu Sugiyama and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of World Congress on Medical and Health Informatics},
 doi = {10.3233/SHTI190419},
 pages = {1213-1217},
 title = {Prioritizing Features to Redesign in an EMR System},
 venue = {Lyon/France},
 year = {2019}
}`
            },

  {
            'id': '162',
            'author': 'Tomohiro Kuroda',
            'title': 'In order to Nurture Genuine Medical : Guideline for Medical Data Collection and Utilization',
            'year': '2019',
            'book': 'Proceedings of AMED Project Result Report Meeting on Clinical ICT Platform and Artificial Intelligent Development Project',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-international-conferences-3,
 author = {Yohei Yamasaki and Osamu Sugiyama and Shusuke Hiragi and Shosuke Ohtera and Goshiro Yamamoto and Hiroshi Sasaki and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of World Congress on Medical and Health Informatics},
 doi = {10.3233/SHTI190552},
 pages = {1596-1597},
 title = {Early Nephrosis Detection Based on Deep Learning with Clinical Time-Series Data},
 venue = {Lyon/France},
 year = {2019}
}`
            },

  {
            'id': '163',
            'author': 'Osamu Sugiyama, Yoshikatsu Hosoda, Masahiro Miyake, Ryo Otsuki, Shusuke Hiragi, Goshiro Yamamoto, Hiroshi Tamura, Akitaka Tsujikawa, Tomohiro Kuroda',
            'title': 'Applying GoogLeNet for Classifying Exudative Lesions with AMD based on Fundus Images',
            'year': '2019',
            'book': 'Proceedings of Japanese Association for Medical Informatics and Japanese Society for Artificial Intelligence Joint Research Meeting of Special Interest Group on Artificial Intelligence in Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-international-conferences-2,
 author = {Luciano Santos and Kazuya Okamoto and Goshiro Yamamoto and Osamu Sugiyama and Tomoki Aoyama and Tomohiro Kuroda},
 booktitle = {Lecture Notes in Computer Science},
 doi = {10.1007/978-3-030-22015-0_16},
 pages = {204-215},
 title = {Design Elements of Pervasive Games for Elderly Players: A Social Interaction Study Case},
 venue = {Orlando/USA},
 year = {2019}
}`
            },

  {
            'id': '164',
            'author': 'Ryo Otsuki, Osamu Sugiyama, Shuji Yano, Kohei Matsumura, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'Development of Digital Symbol Understanding System (DSUS) for understand Numerical Values from Healthcare Device Pictures',
            'year': '2019',
            'book': 'Proceedings of Japanese Association for Medical Informatics and Japanese Society for Artificial Intelligence Joint Research Meeting of Special Interest Group on Artificial Intelligence in Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-international-conferences-1,
 author = {Koji Shimizu and Gakuto Aoyama and Mizuho Nishio and Masahiro Yakami and Takeshi Kubo and Yutaka Emoto and Tatsuya Ito and Tomohiro Kuroda and Hiroyoshi Isoda},
 booktitle = {Proceedings of SPIE Medical Imaging},
 doi = {0.1117/12.2511936},
 title = {A case study regarding clinical performance evaluation method of medical device software for approval},
 venue = {San Diego/USA},
 year = {2019}
}`
            },

  {
            'id': '165',
            'author': 'Tomohiro Kuroda',
            'title': 'Research on Ideal Health Big-data Utilization Model using NDB',
            'year': '2019',
            'book': 'Proceedings of AMED  ICT-related Projects Outcome Report Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-9,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of AMED Project Result Report Meeting on Clinical ICT Platform and Artificial Intelligent Development Project},
 title = {In order to Nurture Genuine Medical : Guideline for Medical Data Collection and Utilization},
 venue = {Tokyo/Japan},
 year = {2019}
}`
            },

  {
            'id': '166',
            'author': 'Youhei Taniguchi, Kenichiro Fujita, Yoshihiro Kinoshita, Kentaro Honma, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Formulation and Application of Regulation for Medical Devices to be Connected HIS Network',
            'year': '2019',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-8,
 author = {Osamu Sugiyama and Yoshikatsu Hosoda and Masahiro Miyake and Ryo Otsuki and Shusuke Hiragi and Goshiro Yamamoto and Hiroshi Tamura and Akitaka Tsujikawa and Tomohiro Kuroda},
 booktitle = {Proceedings of Japanese Association for Medical Informatics and Japanese Society for Artificial Intelligence Joint Research Meeting of Special Interest Group on Artificial Intelligence in Medicine},
 number = {2},
 title = {Applying GoogLeNet for Classifying Exudative Lesions with AMD based on Fundus Images},
 venue = {Miura/Japan},
 volume = {7},
 year = {2019}
}`
            },

  {
            'id': '167',
            'author': 'Kazuya Matsuura, Goshiro Yamamoto, Koshiro Katsuki, Masayoshi Sudo, Junzo Sasaki, Keiko Kitayama, Kana Tsuji, Yasuhiro Kusano, Matsuko Mimoto, Masashi Kotani, Kenichiro Fujita, Masahiro Ashida, Kimihiro Furusawa, Mototsugu Takemoto, Mikako Ohno, Shusuke Hiragi, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Development of License Management System for Kyoto University Hospital',
            'year': '2019',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-7,
 author = {Ryo Otsuki and Osamu Sugiyama and Shuji Yano and Kohei Matsumura and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Japanese Association for Medical Informatics and Japanese Society for Artificial Intelligence Joint Research Meeting of Special Interest Group on Artificial Intelligence in Medicine},
 number = {3},
 title = {Development of Digital Symbol Understanding System (DSUS) for understand Numerical Values from Healthcare Device Pictures},
 venue = {Miura/Japn},
 volume = {7},
 year = {2019}
}`
            },

  {
            'id': '168',
            'author': 'Masashi Kotani, Masaru Watanabe, Jun Isejima, Takeshi Sugino, Tsukasa Mishiro, Rikako Sato, Ayako Nakamura, Toshiharu Teramae, Genta Kato, Junko Igawa, Tomohiro Kuroda, Akifumi Takaori',
            'title': 'Switching to Medical-Nursing Requirement 2 -Utilization of HOMAS2 for Decision Making of Board of Hospital-',
            'year': '2019',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-6,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of AMED  ICT-related Projects Outcome Report Symposium},
 title = {Research on Ideal Health Big-data Utilization Model using NDB},
 venue = {Tokyo/Japan},
 year = {2019}
}`
            },

  {
            'id': '169',
            'author': 'Tomoko Hikita, Osamu Sugiyama, Tomohiro Kuroda, Tadamasa Takemura',
            'title': 'Analysis of Nurses Location Information from the Log Data of the Vital Data  Terminal',
            'year': '2019',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-5,
 author = {Youhei Taniguchi and Kenichiro Fujita and Yoshihiro Kinoshita and Kentaro Honma and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {43-44},
 title = {Formulation and Application of Regulation for Medical Devices to be Connected HIS Network},
 venue = {Kumamoto/Japan},
 year = {2019}
}`
            },

  {
            'id': '170',
            'author': 'Shosuke Ohtera, Eizen Kimura, Kaori Sasaki, Tomohiro Kuroda',
            'title': 'What Japan can Learn from Actual Situation of Secondary Usage of Medical Information in Finland',
            'year': '2019',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-4,
 author = {Kazuya Matsuura and Goshiro Yamamoto and Koshiro Katsuki and Masayoshi Sudo and Junzo Sasaki and Keiko Kitayama and Kana Tsuji and Yasuhiro Kusano and Matsuko Mimoto and Masashi Kotani and Kenichiro Fujita and Masahiro Ashida and Kimihiro Furusawa and Mototsugu Takemoto and Mikako Ohno and Shusuke Hiragi and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {3-4},
 title = {Development of License Management System for Kyoto University Hospital},
 venue = {Kumamoto/Japan},
 year = {2019}
}`
            },

  {
            'id': '171',
            'author': 'Naoto Kume, Hiroyuki Yoshihara, Tomohiro Kuroda, Kenji Araki',
            'title': 'Construction of A Centralized Database System of Electronic Health Record As A Medical Information Distribution Infrastructure',
            'year': '2019',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-3,
 author = {Masashi Kotani and Masaru Watanabe and Jun Isejima and Takeshi Sugino and Tsukasa Mishiro and Rikako Sato and Ayako Nakamura and Toshiharu Teramae and Genta Kato and Junko Igawa and Tomohiro Kuroda and Akifumi Takaori},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {36-37},
 title = {Switching to Medical-Nursing Requirement 2 -Utilization of HOMAS2 for Decision Making of Board of Hospital-},
 venue = {Kumamoto/Japan},
 year = {2019}
}`
            },

  {
            'id': '172',
            'author': 'Shota Yamauchi, Kazuya Okamoto, Shusuke Hiragi, Osamu Sugiyama, Goshiro Yamamoto, Hiroshi Sasaki, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'User evaluation of interactive decision support systems for potential patients in terms of willingness of seeing a doctor and usability',
            'year': '2019',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-26,
 author = {Tomoko Hikita and Osamu Sugiyama and Tomohiro Kuroda and Tadamasa Takemura},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {545-547},
 title = {Analysis of Nurses Location Information from the Log Data of the Vital Data  Terminal},
 venue = {Chiba/Japan},
 volume = {39},
 year = {2019}
}`
            },

  {
            'id': '173',
            'author': 'Andri Malfian Labiro, Kazuya Okamoto, Purnomo Husnul Khotimah, Shusuke Hiragi, Osamu Sugiyama, Goshiro Yamamoto, Tomohiro Kuroda',
            'title': 'Predicting risk of Complication in T2DM: A Temporal Phenotyping Approach to detect risk of diabetic Nephropathy',
            'year': '2019',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-25,
 author = {Shosuke Ohtera and Eizen Kimura and Kaori Sasaki and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {605-607},
 title = {What Japan can Learn from Actual Situation of Secondary Usage of Medical Information in Finland},
 venue = {Chiba/Japan},
 volume = {39},
 year = {2019}
}`
            },

  {
            'id': '174',
            'author': 'Shusuke Hiragi, Tomohiro Kuroda, Masahiro Ihara, Genta Kato',
            'title': 'KUMAHOPE Project -Fostering Young Clinicians with Management Mind',
            'year': '2019',
            'book': 'Journal of the Japan Society for Healthcare Administration',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-24,
 author = {Naoto Kume and Hiroyuki Yoshihara and Tomohiro Kuroda and Kenji Araki},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {608-611},
 title = {Construction of A Centralized Database System of Electronic Health Record As A Medical Information Distribution Infrastructure},
 venue = {Chiba/Japan},
 volume = {39},
 year = {2019}
}`
            },

  {
            'id': '175',
            'author': 'Yuki Mori, Masahiro Miyake, Ryo Otsuki, Yoshikatsu Hosoda, Shusuke Hiragi, Osamu Sugiyama, Hiroshi Tamura, Tomohiro Kuroda, Akitaka Tsujikawa',
            'title': 'Effect of Transfer Learning in Automatic Diagnosis of Age-related Macular Degeneration from Fundus Photography using Deep Learning',
            'year': '2019',
            'book': 'Proceedings of Annual Congress of Japan Clinical Ophthalmology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-23,
 author = {Shota Yamauchi and Kazuya Okamoto and Shusuke Hiragi and Osamu Sugiyama and Goshiro Yamamoto and Hiroshi Sasaki and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {721-724},
 title = {User evaluation of interactive decision support systems for potential patients in terms of willingness of seeing a doctor and usability},
 venue = {Chiba/Japan},
 volume = {39},
 year = {2019}
}`
            },

  {
            'id': '176',
            'author': 'Chikako Toyooka, Yasuyo Kusunoki, Kaoru Tochinoki, Yoshihiro Kuwabara, Ai Kawakami, Hiroshi Sasaki, Kiyohiko Matsutake, Masayo Ishiguro, Chisa Yasukawa, Akiko Kuroda, Kaori Kikumoto, Hiromichi Kamakari, Miho Nishii, Masahiro Hashi, Minoru Fukushima, Tomohiro Kuroda, Kenji Ueshima, Atsushi Takahashi, Ryosuke Takahashi',
            'title': 'Report on Management System for Public Recruitment of Eye-catching and Highly-applicable Doctor-initiated Clinical Trials using iPS Cells -Preparing Special Web Site and Call Center-',
            'year': '2019',
            'book': 'Proceedings of General Academic Assembly of Japan Society of Clinical Trials and Research',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-22,
 author = {Andri Malfian Labiro and Kazuya Okamoto and Purnomo Husnul Khotimah and Shusuke Hiragi and Osamu Sugiyama and Goshiro Yamamoto and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {679-683},
 title = {Predicting risk of Complication in T2DM: A Temporal Phenotyping Approach to detect risk of diabetic Nephropathy},
 venue = {Chiba/Japan},
 volume = {39},
 year = {2019}
}`
            },

  {
            'id': '177',
            'author': 'Yuta Nakanishi, Masahiro Miyake, Ryo Otsuki, Yuki Mori, Yoshikatsu Hosoda, Shusuke Hiragi, Osamu Sugiyama, Hiroshi Tamura, Tomohiro Kuroda, Akitaka Tsujikawa',
            'title': 'Performance Comparison of Deep Learning Models in Fundus Photographic Diagnosis of Wet Age-related Macular Degeneration',
            'year': '2019',
            'book': 'Proceedings of Annual Congress of Japan Clinical Ophthalmology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-21,
 author = {Shusuke Hiragi and Tomohiro Kuroda and Masahiro Ihara and Genta Kato},
 booktitle = {Journal of the Japan Society for Healthcare Administration},
 pages = {149},
 title = {KUMAHOPE Project -Fostering Young Clinicians with Management Mind},
 venue = {Niigata/Japan},
 volume = {56},
 year = {2019}
}`
            },

  {
            'id': '178',
            'author': 'Yuta Nakanishi, Masahiro Miyake, Ryo Otsuki, Yoshikatsu Hosoda, Shusuke Hiragi, Osamu Sugiyama, Hiroshi Tamura, Tomohiro Kuroda, Akitaka Tsujikawa',
            'title': 'Performance Comparison of Deep Learning Models in Fundus Photographic Diagnosis of Wet Age-related Macular Degeneration',
            'year': '2019',
            'book': 'Proceedings of Kyoto University Department of Ophthalmology and Visual Science Annual Alumni Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-20,
 author = {Yuki Mori and Masahiro Miyake and Ryo Otsuki and Yoshikatsu Hosoda and Shusuke Hiragi and Osamu Sugiyama and Hiroshi Tamura and Tomohiro Kuroda and Akitaka Tsujikawa},
 booktitle = {Proceedings of Annual Congress of Japan Clinical Ophthalmology},
 pages = {17},
 title = {Effect of Transfer Learning in Automatic Diagnosis of Age-related Macular Degeneration from Fundus Photography using Deep Learning},
 venue = {Kyoto/Japan},
 year = {2019}
}`
            },

  {
            'id': '179',
            'author': 'Kensuke Morris, Osamu Sugiyama, Goshiro Yamamoto, Manabu Shimoto, Genta Kato, Shigeru Ohtsuru, Tomohiro Kuroda',
            'title': 'Analyzing Instant Messaging Communication of Emergency Physicians',
            'year': '2019',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-2,
 author = {Chikako Toyooka and Yasuyo Kusunoki and Kaoru Tochinoki and Yoshihiro Kuwabara and Ai Kawakami and Hiroshi Sasaki and Kiyohiko Matsutake and Masayo Ishiguro and Chisa Yasukawa and Akiko Kuroda and Kaori Kikumoto and Hiromichi Kamakari and Miho Nishii and Masahiro Hashi and Minoru Fukushima and Tomohiro Kuroda and Kenji Ueshima and Atsushi Takahashi and Ryosuke Takahashi},
 booktitle = {Proceedings of General Academic Assembly of Japan Society of Clinical Trials and Research},
 title = {Report on Management System for Public Recruitment of Eye-catching and Highly-applicable Doctor-initiated Clinical Trials using iPS Cells -Preparing Special Web Site and Call Center-},
 venue = {Tokyo/Japan},
 year = {2019}
}`
            },

  {
            'id': '180',
            'author': 'Tomohiro Kuroda',
            'title': 'History and Snapshot of JSMBE Guideline for Clinical Research Act Development',
            'year': '2019',
            'book': 'Program and Proceedings of Annual Conference of Japanese Society of Medical and Biomedical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-19,
 author = {Yuta Nakanishi and Masahiro Miyake and Ryo Otsuki and Yuki Mori and Yoshikatsu Hosoda and Shusuke Hiragi and Osamu Sugiyama and Hiroshi Tamura and Tomohiro Kuroda and Akitaka Tsujikawa},
 booktitle = {Proceedings of Annual Congress of Japan Clinical Ophthalmology},
 pages = {28},
 title = {Performance Comparison of Deep Learning Models in Fundus Photographic Diagnosis of Wet Age-related Macular Degeneration},
 venue = {Kyoto/Japan},
 year = {2019}
}`
            },

  {
            'id': '181',
            'author': 'Tomohiro Kuroda, Kazuo Ueshima',
            'title': 'Needs for Smart Textiles and Solutions',
            'year': '2019',
            'book': 'Proceedings of Seminar of the Textile Machinery Society of Japan "New Trend of eTextiles"',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-18,
 author = {Yuta Nakanishi and Masahiro Miyake and Ryo Otsuki and Yoshikatsu Hosoda and Shusuke Hiragi and Osamu Sugiyama and Hiroshi Tamura and Tomohiro Kuroda and Akitaka Tsujikawa},
 booktitle = {Proceedings of Kyoto University Department of Ophthalmology and Visual Science Annual Alumni Research Meeting},
 title = {Performance Comparison of Deep Learning Models in Fundus Photographic Diagnosis of Wet Age-related Macular Degeneration},
 venue = {Kyoto/Japan},
 year = {2019}
}`
            },

  {
            'id': '182',
            'author': 'Kana Eguchi, Masayuki Nambu, Kazuo Ueshima, Tomohiro Kuroda',
            'title': 'Primary Evaluation of Wearable Surface Electromyogram Measurement Textile Targeting Periodic Limb Movements Detection at Home',
            'year': '2019',
            'book': 'Proceedings of Seminar of the Textile Machinery Society of Japan "New Trend of eTextiles"',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-17,
 author = {Kensuke Morris and Osamu Sugiyama and Goshiro Yamamoto and Manabu Shimoto and Genta Kato and Shigeru Ohtsuru and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 title = {Analyzing Instant Messaging Communication of Emergency Physicians},
 venue = {Tokushima/Japan},
 year = {2019}
}`
            },

  {
            'id': '183',
            'author': 'Shusuke Hiragi, Osamu Sugiyama, Shosuke Ohtera, Goshiro Yamamoto, Hiroshi Sasaki, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Efficiency of token-based hospital bed allocation system',
            'year': '2019',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-16,
 author = {Tomohiro Kuroda},
 booktitle = {Program and Proceedings of Annual Conference of Japanese Society of Medical and Biomedical Engineering},
 title = {History and Snapshot of JSMBE Guideline for Clinical Research Act Development},
 venue = {Ginowan/Jaapn},
 year = {2019}
}`
            },

  {
            'id': '184',
            'author': 'Shota Yamauchi, Kazuya Okamoto, Shusuke Hiragi, Osamu Sugiyama, Goshiro Yamamoto, Hiroshi Sasaki, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'An attempt at interview optimization for an interactive decision support system for potential patients',
            'year': '2019',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-15,
 author = {Tomohiro Kuroda and Kazuo Ueshima},
 booktitle = {Proceedings of Seminar of the Textile Machinery Society of Japan "New Trend of eTextiles"},
 pages = {118},
 title = {Needs for Smart Textiles and Solutions},
 venue = {Osaka/Japan},
 year = {2019}
}`
            },

  {
            'id': '185',
            'author': 'Yohei Yamasaki, Osamu Sugiyama, Shusuke Hiragi, Shosuke Ohtera, Goshiro Yamamoto, Hiroshi Sasaki, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Nephrosis onset prediction with clinical time-series data for clinical support system',
            'year': '2019',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-14,
 author = {Kana Eguchi and Masayuki Nambu and Kazuo Ueshima and Tomohiro Kuroda},
 booktitle = {Proceedings of Seminar of the Textile Machinery Society of Japan "New Trend of eTextiles"},
 pages = {119-120},
 title = {Primary Evaluation of Wearable Surface Electromyogram Measurement Textile Targeting Periodic Limb Movements Detection at Home},
 venue = {Osaka/Japan},
 year = {2019}
}`
            },

  {
            'id': '186',
            'author': 'Shuji Yano, Ryo Otsuki, Osamu Sugiyama, Kohei Matsumura, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'Analyzing the relationship between page views toward visualization application and activities in health promotion event',
            'year': '2019',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-13,
 author = {Shusuke Hiragi and Osamu Sugiyama and Shosuke Ohtera and Goshiro Yamamoto and Hiroshi Sasaki and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {1128-1130},
 title = {Efficiency of token-based hospital bed allocation system},
 venue = {Osaka/Japan},
 year = {2019}
}`
            },

  {
            'id': '187',
            'author': 'Tomohiro Kuroda',
            'title': 'Evaluating 12-lead ECG e-Textile TECHOSENSOR ER (First Report)',
            'year': '2019',
            'book': 'Proceedings of Research Meeting for 12-lead ECG transmission',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-12,
 author = {Shota Yamauchi and Kazuya Okamoto and Shusuke Hiragi and Osamu Sugiyama and Goshiro Yamamoto and Hiroshi Sasaki and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {1357-1360},
 title = {An attempt at interview optimization for an interactive decision support system for potential patients},
 venue = {Osaka/Japan},
 year = {2019}
}`
            },

  {
            'id': '188',
            'author': 'Santos Luciano Henrique Oliveira, Okamoto Kazuya, Hiragi Shusuke, Yamamoto Goshiro, Sugiyama Osamu, Aoyama Tomoki, Kuroda Tomohiro',
            'title': 'Pervasive Game Design to Evaluate Social Interaction Effects on Levels of Physical Activity among Older Adults',
            'year': '2018',
            'book': 'International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-11,
 author = {Yohei Yamasaki and Osamu Sugiyama and Shusuke Hiragi and Shosuke Ohtera and Goshiro Yamamoto and Hiroshi Sasaki and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {1355-1356},
 title = {Nephrosis onset prediction with clinical time-series data for clinical support system},
 venue = {Osaka/Japan},
 year = {2019}
}`
            },

  {
            'id': '189',
            'author': 'Santos Luciano H O, Okamoto Kazuya, Hiragi Shusuke, Yamamoto Goshiro, Sugiyama Osamu, Aoyama Tomoki, Kuroda Tomohiro',
            'title': 'Pervasive Game Design to Promote an Active Lifestyle among Older Adults Using Social Interaction',
            'year': '2018',
            'book': '第153回ヒューマンインタフェース学会研究会 高齢者、障がい者支援技術および一般',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2019-domestic-conferences-10,
 author = {Shuji Yano and Ryo Otsuki and Osamu Sugiyama and Kohei Matsumura and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {1134-1138},
 title = {Analyzing the relationship between page views toward visualization application and activities in health promotion event},
 venue = {Osaka/Japan},
 year = {2019}
}`
            },

  {
            'id': '190',
            'author': 'Mizuho Nishio, Osamu Sugiyama, Masahiro Yakami, Shoko Ueno, Takeshi Kubo, Tomohiro Kuroda, Kaori Togashi',
            'title': 'Computer-aided diagnosis of lung nodule classification between benign nodule, primary lung cancer, and metastatic lung cancer at different image size using deep convolutional neural network with transfer learning',
            'year': '2018',
            'book': 'PLOS One',
            'doi': 'https://doi.org/10.1371/journal.pone.0200721',
            'type': 'journal',
            'bibtex': `@inproceedings{2019-domestic-conferences-1,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Research Meeting for 12-lead ECG transmission},
 title = {Evaluating 12-lead ECG e-Textile TECHOSENSOR ER (First Report)},
 venue = {Tokyo/Japan},
 year = {2019}
}`
            },

  {
            'id': '191',
            'author': 'Samar El Helou, Goshiro Yamamoto, Eiji Kondo, Hiroshi Tamura, Shusuke Hiragi, Osamu Sugiyama, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Understanding the Roles of EMR Systems in Japanese Antenatal Care Settings',
            'year': '2018',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-9,
 author = {Mizuho Nishio and Osamu Sugiyama and Masahiro Yakami and Shoko Ueno and Takeshi Kubo and Tomohiro Kuroda and Kaori Togashi},
 doi = {10.1371/journal.pone.0200721},
 journal = {PLOS One},
 title = {Computer-aided diagnosis of lung nodule classification between benign nodule, primary lung cancer, and metastatic lung cancer at different image size using deep convolutional neural network with transfer learning},
 year = {2018}
}`
            },

  {
            'id': '192',
            'author': 'Mai Sato, Eiji Kondo, Tomohide Iwao, Shusuke Hiragi, Kazuya Okamoto, Hiroshi Tamura, Haruta Mogami, Yoshitsugu Chigusa, Tomohiro Kuroda, Masaki Mandai, Ikuo Konishi, Genta Kato',
            'title': 'Nationwide Survey of Severe Postpartum Haemorrhage in Japan: an Exploratory Study using the National Database of Health Insurance Claims',
            'year': '2018',
            'book': 'The Journal of Maternal-Fetal and Neonatal Medicine',
            'doi': 'https://doi.org/10.1080/14767058.2018.1465921',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-8,
 author = {Samar El Helou and Goshiro Yamamoto and Eiji Kondo and Hiroshi Tamura and Shusuke Hiragi and Osamu Sugiyama and Masayuki Nambu and Tomohiro Kuroda},
 journal = {Studies in Health Technology and Informatics},
 pages = {257-260},
 title = {Understanding the Roles of EMR Systems in Japanese Antenatal Care Settings},
 volume = {251},
 year = {2018}
}`
            },

  {
            'id': '193',
            'author': 'Kensuke Morris, Goshiro Yamamoto, Shusuke Hiragi, Shosuke Ohtera, Michi Sakai, Osamu Sugiyama, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Designing an Authorization System Based on Patient Privacy Preferences in Japan',
            'year': '2018',
            'book': 'Studies in Health Technology and Informatics',
            'doi': 'https://doi.org/10.3233/978-1-61499-852-5-71',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-7,
 author = {Mai Sato and Eiji Kondo and Tomohide Iwao and Shusuke Hiragi and Kazuya Okamoto and Hiroshi Tamura and Haruta Mogami and Yoshitsugu Chigusa and Tomohiro Kuroda and Masaki Mandai and Ikuo Konishi and Genta Kato},
 doi = {10.1080/14767058.2018.1465921},
 journal = {The Journal of Maternal-Fetal and Neonatal Medicine},
 title = {Nationwide Survey of Severe Postpartum Haemorrhage in Japan: an Exploratory Study using the National Database of Health Insurance Claims},
 year = {2018}
}`
            },

  {
            'id': '194',
            'author': 'Mizuho Nishio, Mitsuo Nishizawa, Osamu Sugiyama, Ryosuke Kojima, Masahiro Yakami, Tomohiro Kuroda, Kaori Togashi',
            'title': 'Computer-aided diagnosis of lung nodule using gradient tree boosting and Bayesian optimization',
            'year': '2018',
            'book': 'PLOS One',
            'doi': 'https://doi.org/10.1371/journal.pone.0195875',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-6,
 author = {Kensuke Morris and Goshiro Yamamoto and Shusuke Hiragi and Shosuke Ohtera and Michi Sakai and Osamu Sugiyama and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 doi = {10.3233/978-1-61499-852-5-71},
 journal = {Studies in Health Technology and Informatics},
 pages = {71-75},
 title = {Designing an Authorization System Based on Patient Privacy Preferences in Japan},
 volume = {247},
 year = {2018}
}`
            },

  {
            'id': '195',
            'author': 'Shusuke Hiragi, Hiroyuki Yamada, Tatsuo Tsukamoto, Kazuki Yoshida, Naoya Kondo, Takeshi Matsubara, Motoko Yanagita, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Acetaminophen Administration and the Risk of Acute Kidney Injury: a Self-Controlled Case Series Study',
            'year': '2018',
            'book': 'Clinical  Epidemiology',
            'doi': 'https://doi.org/10.2147/CLEP.S158110',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-5,
 author = {Mizuho Nishio and Mitsuo Nishizawa and Osamu Sugiyama and Ryosuke Kojima and Masahiro Yakami and Tomohiro Kuroda and Kaori Togashi},
 doi = {10.1371/journal.pone.0195875},
 journal = {PLOS One},
 number = {4},
 title = {Computer-aided diagnosis of lung nodule using gradient tree boosting and Bayesian optimization},
 volume = {13},
 year = {2018}
}`
            },

  {
            'id': '196',
            'author': 'Kenichiro Fujita, Youhei Taniguchi, Yoshihiro Kinoshita, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda',
            'title': 'Developing a Conference Support Information System with Inter-System Extraction and Display Function',
            'year': '2018',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-4,
 author = {Shusuke Hiragi and Hiroyuki Yamada and Tatsuo Tsukamoto and Kazuki Yoshida and Naoya Kondo and Takeshi Matsubara and Motoko Yanagita and Hiroshi Tamura and Tomohiro Kuroda},
 doi = {10.2147/CLEP.S158110},
 journal = {Clinical  Epidemiology},
 pages = {265-276},
 title = {Acetaminophen Administration and the Risk of Acute Kidney Injury: a Self-Controlled Case Series Study},
 volume = {10},
 year = {2018}
}`
            },

  {
            'id': '197',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Automatic Selection of Diagnosis Procedure Combination Codes Based on Partial Treatment Data Relative to the Number of Hospitalization Days',
            'year': '2018',
            'book': 'European Journal for Biomedical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-3,
 author = {Kenichiro Fujita and Youhei Taniguchi and Yoshihiro Kinoshita and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {1},
 pages = {1-7},
 title = {Developing a Conference Support Information System with Inter-System Extraction and Display Function},
 volume = {56},
 year = {2018}
}`
            },

  {
            'id': '198',
            'author': 'Tomohiro Kuroda',
            'title': 'Year in Review - Viewpoint of Engineering',
            'year': '2018',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-2,
 author = {Kazuya Okamoto and Toshio Uchiyama and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Hiroyuki Yoshihara},
 journal = {European Journal for Biomedical Informatics},
 number = {1},
 pages = {34-40},
 title = {Automatic Selection of Diagnosis Procedure Combination Codes Based on Partial Treatment Data Relative to the Number of Hospitalization Days},
 volume = {14},
 year = {2018}
}`
            },

  {
            'id': '199',
            'author': 'Shusuke Hiragi, Hiroshi Tamura, Rei Goto, Tomohiro Kuroda',
            'title': 'The Effect of Model Selection on Cost-effectiveness Research: a Comparison of Kidney Function-based Microsimulation and Disease Grade-based Microsimulation in Chronic Kidney Disease Modeling',
            'year': '2018',
            'book': 'BMC Medical Informatics and Decision Making',
            'doi': 'https://doi.org/10.1186/s12911-018-0678-7',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-14,
 author = {Tomohiro Kuroda},
 journal = {Japan Journal of Medical Informatics},
 number = {5},
 pages = {273-278},
 title = {Year in Review - Viewpoint of Engineering},
 volume = {38},
 year = {2018}
}`
            },

  {
            'id': '200',
            'author': 'Tomohiro Kuroda, Yuki Kuroda, Kazuo Chin',
            'title': 'Structure of Information System for Remote Monitoring',
            'year': '2018',
            'book': 'Japanese Journal of Telemedicine and Telecare',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-13,
 author = {Shusuke Hiragi and Hiroshi Tamura and Rei Goto and Tomohiro Kuroda},
 doi = {10.1186/s12911-018-0678-7},
 journal = {BMC Medical Informatics and Decision Making},
 number = {94},
 title = {The Effect of Model Selection on Cost-effectiveness Research: a Comparison of Kidney Function-based Microsimulation and Disease Grade-based Microsimulation in Chronic Kidney Disease Modeling},
 volume = {18},
 year = {2018}
}`
            },

  {
            'id': '201',
            'author': 'Kenichiro Fujita, Youhei Taniguchi, Masashi Kotani, Masahiro Yakami, Mizuho Nishio, Kazuya Okamoto, Tadamasa Takemura, Hiroyoshi Isoda, Tomohiro Kuroda',
            'title': 'Construction and Evaluation of Clinical Information Export Environment Complying with the Amended Act on the Protection of Personal Information',
            'year': '2018',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': 'https://doi.org/10.11239/jsmbe56.149',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-12,
 author = {Tomohiro Kuroda and Yuki Kuroda and Kazuo Chin},
 journal = {Japanese Journal of Telemedicine and Telecare},
 number = {2},
 pages = {98-100},
 title = {Structure of Information System for Remote Monitoring},
 volume = {14},
 year = {2018}
}`
            },

  {
            'id': '202',
            'author': 'Tomohide Iwao, Ken Yano, Tomohiro Kuroda',
            'title': 'Survey of drug prescription patterns among patients with nontuberculous mycobacterial disease using the database of health insurance claims',
            'year': '2018',
            'book': 'Japanese Journal of Pharmacoepidemiology',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-11,
 author = {Kenichiro Fujita and Youhei Taniguchi and Masashi Kotani and Masahiro Yakami and Mizuho Nishio and Kazuya Okamoto and Tadamasa Takemura and Hiroyoshi Isoda and Tomohiro Kuroda},
 doi = {10.11239/jsmbe56.149},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {4},
 pages = {149-156},
 title = {Construction and Evaluation of Clinical Information Export Environment Complying with the Amended Act on the Protection of Personal Information},
 volume = {56},
 year = {2018}
}`
            },

  {
            'id': '203',
            'author': 'Yuji Morita, Masatoshi Yoshikawa, Noboru Kada, Akihiro Hamasaki, Osamu Sugiyama, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Medication Pattern Mining Considering Unbiased Frequent Use by Doctors',
            'year': '2018',
            'book': 'European Journal for Biomedical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2018-journal-papers-10,
 author = {Tomohide Iwao and Ken Yano and Tomohiro Kuroda},
 journal = {Japanese Journal of Pharmacoepidemiology},
 number = {2},
 pages = {89-94},
 title = {Survey of drug prescription patterns among patients with nontuberculous mycobacterial disease using the database of health insurance claims},
 volume = {32},
 year = {2018}
}`
            },

  {
            'id': '204',
            'author': 'Samar El Helou, Goshiro Yamamoto, Tomohiro Kuroda',
            'title': 'A Socio-Temporal Approach to Understanding Electronic Medical Record System in their Context of Use',
            'year': '2018',
            'book': 'Proceedings of International Conference of u-Healthcare',
            'doi': '',
            'type': 'conference',
            'bibtex': `@article{2018-journal-papers-1,
 author = {Yuji Morita and Masatoshi Yoshikawa and Noboru Kada and Akihiro Hamasaki and Osamu Sugiyama and Kazuya Okamoto and Tomohiro Kuroda},
 journal = {European Journal for Biomedical Informatics},
 number = {1},
 pages = {26-33},
 title = {Medication Pattern Mining Considering Unbiased Frequent Use by Doctors},
 volume = {14},
 year = {2018}
}`
            },

  {
            'id': '205',
            'author': 'Ryo Otsuki, Osamu Sugiyama, Kohei Matsumura, Shuji Yano, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'Walking Record Analysis in the Health Promotion Event with State Transition Diagram',
            'year': '2018',
            'book': 'Proceedings of International Conference of u-Healthcare',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-international-conferences-7,
 author = {Samar El Helou and Goshiro Yamamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference of u-Healthcare},
 title = {A Socio-Temporal Approach to Understanding Electronic Medical Record System in their Context of Use},
 venue = {Kyoto/Japan},
 year = {2018}
}`
            },

  {
            'id': '206',
            'author': 'Kazuya Okamoto, Karin Goka, Masahiro Hirose, Goshiro Yamamoto, Shusuke Hiragi, Osamu Sugiyama, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Detecting Incidents of Injection from Electronic Medical Records using Machine Learning Methods',
            'year': '2018',
            'book': 'Proceedings of ISPOR Europe',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-international-conferences-6,
 author = {Ryo Otsuki and Osamu Sugiyama and Kohei Matsumura and Shuji Yano and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference of u-Healthcare},
 title = {Walking Record Analysis in the Health Promotion Event with State Transition Diagram},
 venue = {Kyoto/Japan},
 year = {2018}
}`
            },

  {
            'id': '207',
            'author': 'Shosuke Ohtera, Michi Sakai, Tomohide Iwao, Yukiko Neff, Yoshimitsu Takahashi, Genta Kato, Tomohiro Kuroda, Takeo Nakayama',
            'title': 'Health Care Utilization and Hospital Expenditures Among Inpatients Dying of Cancer in Japan',
            'year': '2018',
            'book': 'Value in Health',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-international-conferences-5,
 author = {Kazuya Okamoto and Karin Goka and Masahiro Hirose and Goshiro Yamamoto and Shusuke Hiragi and Osamu Sugiyama and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of ISPOR Europe},
 title = {Detecting Incidents of Injection from Electronic Medical Records using Machine Learning Methods},
 venue = {Barcelona/Spain},
 year = {2018}
}`
            },

  {
            'id': '208',
            'author': 'Luciano Santos, Kazuya Okamoto, Goshiro Yamamoto, Shusuke Hiragi, Osamu Sugiyama, Tomoki Aoyama, Tomohiro Kuroda',
            'title': 'Pervasive Game Design to Evaluate Social Interaction Effects on Levels of Physical Activity Among Older Adults',
            'year': '2018',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-international-conferences-4,
 author = {Shosuke Ohtera and Michi Sakai and Tomohide Iwao and Yukiko Neff and Yoshimitsu Takahashi and Genta Kato and Tomohiro Kuroda and Takeo Nakayama},
 booktitle = {Value in Health},
 title = {Health Care Utilization and Hospital Expenditures Among Inpatients Dying of Cancer in Japan},
 venue = {Tokyo/Japan},
 volume = {21},
 year = {2018}
}`
            },

  {
            'id': '209',
            'author': 'Kana Eguchi, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Investigation of Two Channel Surface Electromyogram Measurement in Lower Extremities for Wearable Devices Targeting Periodic Limb Movements Detection at Home',
            'year': '2018',
            'book': 'the XXII congress of the International Society of Electrophysiology and Kinesiology 2018 (ISEK 2018)',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-international-conferences-3,
 author = {Luciano Santos and Kazuya Okamoto and Goshiro Yamamoto and Shusuke Hiragi and Osamu Sugiyama and Tomoki Aoyama and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies},
 pages = {157-164},
 title = {Pervasive Game Design to Evaluate Social Interaction Effects on Levels of Physical Activity Among Older Adults},
 venue = {Nottingham/UK},
 year = {2018}
}`
            },

  {
            'id': '210',
            'author': 'Samar El Helou, Goshiro Yamamoto, Eiji Kondo, Hiroshi Tamura, Shusuke Hiragi, Osamu Sugiyama, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Understanding the Roles of EMR Systems in Japanese Antenatal Care Settings',
            'year': '2018',
            'book': 'Proceedings of International Conference on Informatics, Management and Technology in Healthcare',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-international-conferences-2-1,
 author = {Kana Eguchi and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {the XXII congress of the International Society of Electrophysiology and Kinesiology 2018 (ISEK 2018)},
 location = {Dublin, Ireland},
 pages = {},
 title = {Investigation of Two Channel Surface Electromyogram Measurement in Lower Extremities for Wearable Devices Targeting Periodic Limb Movements Detection at Home},
 year = {2018}
}`
            },

  {
            'id': '211',
            'author': 'Kensuke Morris, Goshiro Yamamoto, Shusuke Hiragi, Shosuke Ohtera, Michi Sakai, Osamu Sugiyama, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Designing an Authorization System Based on Patient Privacy Preferences in Japan',
            'year': '2018',
            'book': 'Proceedings of Medical Informatics Europe',
            'doi': 'https://doi.org/10.3233/978-1-61499-852-5-71',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-international-conferences-2,
 author = {Samar El Helou and Goshiro Yamamoto and Eiji Kondo and Hiroshi Tamura and Shusuke Hiragi and Osamu Sugiyama and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference on Informatics, Management and Technology in Healthcare},
 pages = {257-260},
 title = {Understanding the Roles of EMR Systems in Japanese Antenatal Care Settings},
 venue = {Athens/Greece},
 year = {2018}
}`
            },

  {
            'id': '212',
            'author': 'Tomohiro Kuroda, Tomohiro Sawa',
            'title': 'Year in Review',
            'year': '2018',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-international-conferences-1,
 author = {Kensuke Morris and Goshiro Yamamoto and Shusuke Hiragi and Shosuke Ohtera and Michi Sakai and Osamu Sugiyama and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Medical Informatics Europe},
 doi = {10.3233/978-1-61499-852-5-71},
 pages = {71-75},
 title = {Designing an Authorization System Based on Patient Privacy Preferences in Japan},
 venue = {Gothenburg/Sweden},
 year = {2018}
}`
            },

  {
            'id': '213',
            'author': 'Kana Eguchi, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Overnight Investigation of Periodic Limb Movements by Two Channel Surface EMG in Lower',
            'year': '2018',
            'book': '03-4−1−5',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-9,
 author = {Tomohiro Kuroda and Tomohiro Sawa},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 title = {Year in Review},
 year = {2018}
}`
            },

  {
            'id': '214',
            'author': 'Kana Eguchi, Masayuki Nambu, Kazuo Ueshima, Tomohiro Kuroda',
            'title': 'Periodic Limb Movements Detection at Daily Life Environment using Wearable Surface Electromyogram Measurement Textile',
            'year': '2018',
            'book': 'Proceedings of The Annual Conference of Textile Machinery Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-8,
 author = {Kana Eguchi and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {03-4−1−5},
 title = {Overnight Investigation of Periodic Limb Movements by Two Channel Surface EMG in Lower},
 venue = {Sapporo/Japan},
 year = {2018}
}`
            },

  {
            'id': '215',
            'author': 'Tomohiro Kuroda, Toshikazu Shiga',
            'title': 'Data Management for Home Health Monitoring',
            'year': '2018',
            'book': 'Proceedings of Annual Scientific Meeting on the Japanese Circulation Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-7,
 author = {Kana Eguchi and Masayuki Nambu and Kazuo Ueshima and Tomohiro Kuroda},
 booktitle = {Proceedings of The Annual Conference of Textile Machinery Society of Japan},
 pages = {126-127},
 title = {Periodic Limb Movements Detection at Daily Life Environment using Wearable Surface Electromyogram Measurement Textile},
 venue = {Osaka/Japan},
 year = {2018}
}`
            },

  {
            'id': '216',
            'author': 'Ryo Otsuki, Osamu Sugiyama, Kohei Matsumura, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'Medical Numerical Record Recognition using Deep Learning',
            'year': '2018',
            'book': 'Proceedings of Japanese Association for Medical Informatics and Japanese Society for Artificial Intelligence Joint Research Meeting of Special Interest Group on Artificial Intelligence in Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-6,
 author = {Tomohiro Kuroda and Toshikazu Shiga},
 booktitle = {Proceedings of Annual Scientific Meeting on the Japanese Circulation Society},
 pages = {650},
 title = {Data Management for Home Health Monitoring},
 venue = {Osaka/Japan},
 year = {2018}
}`
            },

  {
            'id': '217',
            'author': 'Ryo Otsuki, Osamu Sugiyama, Kohei Matsumura, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'An Attempt to Develop a Pedometer reading Booth for Health Promotion Event Management',
            'year': '2018',
            'book': 'Proceedings of Annual Conference of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-5,
 author = {Ryo Otsuki and Osamu Sugiyama and Kohei Matsumura and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Japanese Association for Medical Informatics and Japanese Society for Artificial Intelligence Joint Research Meeting of Special Interest Group on Artificial Intelligence in Medicine},
 number = {1},
 pages = {1-6},
 title = {Medical Numerical Record Recognition using Deep Learning},
 venue = {Miura/Japan},
 volume = {5},
 year = {2018}
}`
            },

  {
            'id': '218',
            'author': 'Kenya Murata, Noboru Nishimoto, Kohei Matsumura, Takahiro Adachi, Haruo Noma, Kougoro Iwanaga, Tomohiro Kuroda',
            'title': 'A Proposal of an Attachment Device of Stethoscope for the Neonatal Cardio-Pulmonary Resuscitation Training Workshop',
            'year': '2018',
            'book': 'Proceedings of Interaction',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-4,
 author = {Ryo Otsuki and Osamu Sugiyama and Kohei Matsumura and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of IPSJ},
 title = {An Attempt to Develop a Pedometer reading Booth for Health Promotion Event Management},
 venue = {Tokyo/Japan},
 year = {2018}
}`
            },

  {
            'id': '219',
            'author': 'Osamu Sugiyama, Shigeto Sasaki, Hiroaki Kobayashi, Takumi Ishida, Kazuhiko Takase, Tomohiro Kuroda',
            'title': 'Development of Zero-Step Checkup System with IoT Equipment Data Collection Platform',
            'year': '2018',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-3,
 author = {Kenya Murata and Noboru Nishimoto and Kohei Matsumura and Takahiro Adachi and Haruo Noma and Kougoro Iwanaga and Tomohiro Kuroda},
 booktitle = {Proceedings of Interaction},
 pages = {917-919},
 title = {A Proposal of an Attachment Device of Stethoscope for the Neonatal Cardio-Pulmonary Resuscitation Training Workshop},
 venue = {Tokyo/Japan},
 year = {2018}
}`
            },

  {
            'id': '220',
            'author': 'Toshiki Kawai, Hiroki Chino, Haruka Kanbara, Kohei Matsumura, Osamu Sugiyama, Manabu Shimoto, Shigeru Ohtsuru, Haruo Noma, Tomohiro Kuroda',
            'title': 'Proposal and Development of Information Management System based on SNS for Disaster Medical Assistant Team',
            'year': '2018',
            'book': 'Proceedings of Interaction',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-20,
 author = {Osamu Sugiyama and Shigeto Sasaki and Hiroaki Kobayashi and Takumi Ishida and Kazuhiko Takase and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {830-833},
 title = {Development of Zero-Step Checkup System with IoT Equipment Data Collection Platform},
 venue = {Fukuoka/Japan},
 year = {2018}
}`
            },

  {
            'id': '221',
            'author': 'Yohei Yamasaki, Shusuke Hiragi, Osamu Sugiyama, Shosuke Ohtera, Hiroshi Sasaki, Goshiro Yamamoto, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Interpretation Trial of Nephrosis Prediction Model based on Deep Learning with Clinical Time-series Data',
            'year': '2018',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-2,
 author = {Toshiki Kawai and Hiroki Chino and Haruka Kanbara and Kohei Matsumura and Osamu Sugiyama and Manabu Shimoto and Shigeru Ohtsuru and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Interaction},
 title = {Proposal and Development of Information Management System based on SNS for Disaster Medical Assistant Team},
 venue = {Tokyo/Japan},
 year = {2018}
}`
            },

  {
            'id': '222',
            'author': 'Tomohiro Kuroda, Yuki Kuroda, Kazuo Chin',
            'title': 'Favorable Configuration of Information System to Support Remote Monitoring',
            'year': '2018',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-19,
 author = {Yohei Yamasaki and Shusuke Hiragi and Osamu Sugiyama and Shosuke Ohtera and Hiroshi Sasaki and Goshiro Yamamoto and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {774-777},
 title = {Interpretation Trial of Nephrosis Prediction Model based on Deep Learning with Clinical Time-series Data},
 venue = {Fukuoka/Japan},
 year = {2018}
}`
            },

  {
            'id': '223',
            'author': 'Jun Hatanaka, Shusuke Hiragi, Osamu Sugiyama, Shosuke Ohtera, Goshiro Yamamoto, Hiroshi Sasaki, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Attempt for Effective Bed Control by Market Mechanism-based Approach',
            'year': '2018',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-18,
 author = {Tomohiro Kuroda and Yuki Kuroda and Kazuo Chin},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {626-627},
 title = {Favorable Configuration of Information System to Support Remote Monitoring},
 venue = {Fukuoka/Japan},
 year = {2018}
}`
            },

  {
            'id': '224',
            'author': 'Yasushi Matsumura, Katsuyuki Miura, Hiroyasu Iso, Isao Muraki, Takeo Okada, Tomohiro Kuroda, Genta Kato, Toshihiro Takeda, Katsuki Okada',
            'title': 'The Possibility of Unified Management of Medical Checkup Data as PHR',
            'year': '2018',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-17,
 author = {Jun Hatanaka and Shusuke Hiragi and Osamu Sugiyama and Shosuke Ohtera and Goshiro Yamamoto and Hiroshi Sasaki and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {618-621},
 title = {Attempt for Effective Bed Control by Market Mechanism-based Approach},
 venue = {Fukuoka/Japan},
 year = {2018}
}`
            },

  {
            'id': '225',
            'author': 'Kenichiro Fujita, Osamu Sugiyama, Shusuke Hiragi, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda',
            'title': 'Analysis for a Predictive Model for an Annual Quantity of Description of Electronic Medical Records',
            'year': '2018',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-16,
 author = {Yasushi Matsumura and Katsuyuki Miura and Hiroyasu Iso and Isao Muraki and Takeo Okada and Tomohiro Kuroda and Genta Kato and Toshihiro Takeda and Katsuki Okada},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {580-585},
 title = {The Possibility of Unified Management of Medical Checkup Data as PHR},
 venue = {Fukuoka/Japan},
 year = {2018}
}`
            },

  {
            'id': '226',
            'author': 'Kazuya Okamoto, Masahiro Hirose, Tomohiro Kuroda',
            'title': 'Finding Incidents from Electronic Medical Records using Machine Learning Technique',
            'year': '2018',
            'book': 'Journal of the Japan Society for Healthcare Administration',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-15,
 author = {Kenichiro Fujita and Osamu Sugiyama and Shusuke Hiragi and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {278-281},
 title = {Analysis for a Predictive Model for an Annual Quantity of Description of Electronic Medical Records},
 venue = {Fukuoka/Japan},
 year = {2018}
}`
            },

  {
            'id': '227',
            'author': 'Jun Hatanaka, Shusuke Hiragi, Osamu Sugiyama, Goshiro Yamamoto, Hiroshi Sasaki, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Evaluating Bed-Control based on Market Mechanism',
            'year': '2018',
            'book': 'Journal of the Japan Society for Healthcare Administration',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-14,
 author = {Kazuya Okamoto and Masahiro Hirose and Tomohiro Kuroda},
 booktitle = {Journal of the Japan Society for Healthcare Administration},
 pages = {63 (2018/10/27) Koriyama/Japan},
 title = {Finding Incidents from Electronic Medical Records using Machine Learning Technique},
 volume = {55},
 year = {2018}
}`
            },

  {
            'id': '228',
            'author': 'Ryo Otsuki, Osamu Sugiyama, Kohei Matsumura, Shuji Yano, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'Analyzing Change of Steps using Step Counter Record during a Walking Event',
            'year': '2018',
            'book': 'Proceedings of Hyper Interdisciplinary Conference Osaka Forum',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-13,
 author = {Jun Hatanaka and Shusuke Hiragi and Osamu Sugiyama and Goshiro Yamamoto and Hiroshi Sasaki and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Journal of the Japan Society for Healthcare Administration},
 pages = {95},
 title = {Evaluating Bed-Control based on Market Mechanism},
 venue = {Koriyama/Japan},
 volume = {55},
 year = {2018}
}`
            },

  {
            'id': '229',
            'author': 'Kenichiro Fujita, Youhei Taniguchi, Masahiro Yakami, Mizuho Nishio, Kazuya Okamoto, Tadamasa Takemura, Hiroyoshi Isoda, Tomohiro Kuroda',
            'title': 'Developing Clinical Data Output Platform along the Act on Privacy Data Protection',
            'year': '2018',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-12,
 author = {Ryo Otsuki and Osamu Sugiyama and Kohei Matsumura and Shuji Yano and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Hyper Interdisciplinary Conference Osaka Forum},
 title = {Analyzing Change of Steps using Step Counter Record during a Walking Event},
 venue = {Osaka/Japan},
 year = {2018}
}`
            },

  {
            'id': '230',
            'author': 'Tomohiro Kuroda',
            'title': 'Basic Strategy to Generate Machine Readable Data',
            'year': '2018',
            'book': 'Proceedings of Symposium of Society of Clinical Biobank',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-11,
 author = {Kenichiro Fujita and Youhei Taniguchi and Masahiro Yakami and Mizuho Nishio and Kazuya Okamoto and Tadamasa Takemura and Hiroyoshi Isoda and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 title = {Developing Clinical Data Output Platform along the Act on Privacy Data Protection},
 venue = {Nagoya/Japan},
 year = {2018}
}`
            },

  {
            'id': '231',
            'author': 'Takeshi Sugino, Masayoshi Sudo, Kenichiro Fujita, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Cost Reduction of Expendables by Replacement of Printer',
            'year': '2018',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-10,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium of Society of Clinical Biobank},
 pages = {32},
 title = {Basic Strategy to Generate Machine Readable Data},
 venue = {Kyoto/Japan},
 year = {2018}
}`
            },

  {
            'id': '232',
            'author': 'Santos Luciano Henrique Oliveira, Okamoto Kazuya, Yamamoto Goshiro, Sugiyama Osamu, Aoyama Tomoki, Kuroda Tomohiro',
            'title': 'A Pervasive Game to Evaluate the Effectiveness of Social Interaction to Increase Daily Activity of Older Adults',
            'year': '2017',
            'book': 'Entertainment Computing Symposium 2017',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2018-domestic-conferences-1,
 author = {Takeshi Sugino and Masayoshi Sudo and Kenichiro Fujita and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 title = {Cost Reduction of Expendables by Replacement of Printer},
 venue = {Asahikawa/Japan},
 year = {2018}
}`
            },

  {
            'id': '233',
            'author': 'Purnomo Husnul Khotimah, Yuichi Sugiyama, Masatoshi Yoshikawa, Akihiro Hamasaki, Osamu Sugiyama, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Medication Episode Construction Framework for Retrospective Database Analyses of Patients with Chronic Diseases',
            'year': '2017',
            'book': 'The IEEE Journal of Biomedical and Health Informatics',
            'doi': 'https://doi.org/0.1109/JBHI.2017.2786741',
            'type': 'journal',
            'bibtex': `@article{2017-journal-papers-7,
 author = {Purnomo Husnul Khotimah and Yuichi Sugiyama and Masatoshi Yoshikawa and Akihiro Hamasaki and Osamu Sugiyama and Kazuya Okamoto and Tomohiro Kuroda},
 doi = {0.1109/JBHI.2017.2786741},
 journal = {The IEEE Journal of Biomedical and Health Informatics},
 title = {Medication Episode Construction Framework for Retrospective Database Analyses of Patients with Chronic Diseases},
 year = {2017}
}`
            },

  {
            'id': '234',
            'author': 'Kana Eguchi, Masayuki Nambu, Kazuo Ueshima, Tomohiro Kuroda',
            'title': 'Prototyping of Smart Wearable Socks for Periodic Limb Movement Home Monitoring System',
            'year': '2017',
            'book': 'Journal of Fiber Science and Technology',
            'doi': 'https://doi.org/10.2115/fiberst.2017-0043',
            'type': 'journal',
            'bibtex': `@article{2017-journal-papers-6,
 author = {Kana Eguchi and Masayuki Nambu and Kazuo Ueshima and Tomohiro Kuroda},
 doi = {10.2115/fiberst.2017-0043},
 journal = {Journal of Fiber Science and Technology},
 number = {11},
 pages = {284-293},
 title = {Prototyping of Smart Wearable Socks for Periodic Limb Movement Home Monitoring System},
 volume = {73},
 year = {2017}
}`
            },

  {
            'id': '235',
            'author': 'Yuki Uranishi, Yu Maruyama, Chisako Naito, Kazuya Okamoto, Hiroshi Tamura, Genta Kato, Tomohiro Kuroda',
            'title': 'Blood Collection Trainer with Visualization of Failure',
            'year': '2017',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': 'https://doi.org/10.18974/tvrsj.22.2_217',
            'type': 'journal',
            'bibtex': `@article{2017-journal-papers-5,
 author = {Yuki Uranishi and Yu Maruyama and Chisako Naito and Kazuya Okamoto and Hiroshi Tamura and Genta Kato and Tomohiro Kuroda},
 doi = {10.18974/tvrsj.22.2_217},
 journal = {Transactions of the Virtual Reality Society of Japan},
 number = {2},
 pages = {217-227},
 title = {Blood Collection Trainer with Visualization of Failure},
 volume = {22},
 year = {2017}
}`
            },

  {
            'id': '236',
            'author': 'Tuukka Karvonen, Yusuke Muranishi, Goshiro Yamamoto, Tomohiro Kuroda, Toshihiko Sato',
            'title': 'Evaluation of a novel multi-articulated endoscope: proof of concept through a virtual simulation',
            'year': '2017',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': 'https://doi.org/10.1007/s11548-017-1599-0',
            'type': 'journal',
            'bibtex': `@article{2017-journal-papers-4,
 author = {Tuukka Karvonen and Yusuke Muranishi and Goshiro Yamamoto and Tomohiro Kuroda and Toshihiko Sato},
 doi = {10.1007/s11548-017-1599-0},
 journal = {International Journal of Computer Assisted Radiology and Surgery},
 number = {7},
 pages = {1123-1130},
 title = {Evaluation of a novel multi-articulated endoscope: proof of concept through a virtual simulation},
 volume = {12},
 year = {2017}
}`
            },

  {
            'id': '237',
            'author': 'Hitomi Yamada, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Shigeki Kuwata',
            'title': 'Consideration of Automatic Evaluation System for Description of Informed Consent in Medical Records',
            'year': '2017',
            'book': 'Health Information Management',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2017-journal-papers-3,
 author = {Hitomi Yamada and Tadamasa Takemura and Kazuya Okamoto and Tomohiro Kuroda and Shigeki Kuwata},
 journal = {Health Information Management},
 number = {1},
 pages = {53-61},
 title = {Consideration of Automatic Evaluation System for Description of Informed Consent in Medical Records},
 volume = {29},
 year = {2017}
}`
            },

  {
            'id': '238',
            'author': 'Goshiro Yamamoto, Luiz Sampaio, Takashi Taketomi, Hirokazu Kato, Christian Sandor, Tomohiro Kuroda',
            'title': 'Imperceptible On-Screen Markers for Mobile Interaction on Public Large Displays',
            'year': '2017',
            'book': 'Transactions of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2017-journal-papers-2,
 author = {Goshiro Yamamoto and Luiz Sampaio and Takashi Taketomi and Hirokazu Kato and Christian Sandor and Tomohiro Kuroda},
 journal = {Transactions of the Institute of Electronics, Information and Communication Engineers},
 number = {9},
 pages = {2027-2036},
 title = {Imperceptible On-Screen Markers for Mobile Interaction on Public Large Displays},
 year = {2017}
}`
            },

  {
            'id': '239',
            'author': 'Takeo Nakayama, Yuichi Imanaka, Yasushi Okuno, Genta Kato, Tomohiro Kuroda, Rei Goto, Shiro Tanaka, Hiroshi Tamura, Shunichi Fukuhara, Shingo Fukuma, Manabu Muto, Motoko Yanagita, Yosuke Yamamoto',
            'title': 'Analysis of the Evidence-practice Gap to Facilitate Proper Medical Care for the Elderly: Investigation, using Databases, of Utilization Measures for National Database of Health Insurance Claims and Specific Health Checkups of Japan (NDB)',
            'year': '2017',
            'book': 'Environmental Health and Preventive Medicine',
            'doi': 'https://doi.org/10.1186/s12199-017-0644-5',
            'type': 'journal',
            'bibtex': `@article{2017-journal-papers-1,
 author = {Takeo Nakayama and Yuichi Imanaka and Yasushi Okuno and Genta Kato and Tomohiro Kuroda and Rei Goto and Shiro Tanaka and Hiroshi Tamura and Shunichi Fukuhara and Shingo Fukuma and Manabu Muto and Motoko Yanagita and Yosuke Yamamoto},
 doi = {10.1186/s12199-017-0644-5},
 journal = {Environmental Health and Preventive Medicine},
 title = {Analysis of the Evidence-practice Gap to Facilitate Proper Medical Care for the Elderly: Investigation, using Databases, of Utilization Measures for National Database of Health Insurance Claims and Specific Health Checkups of Japan (NDB)},
 year = {2017}
}`
            },

  {
            'id': '240',
            'author': 'Kana Eguchi, Masayuki Nambu, Kimihiko Murase, Kazuo Chin, Tomohiro Kuroda',
            'title': 'Surface Electromyogram Measurement e-Textile for the Wearable Periodic Limb Movement Home Monitoring System',
            'year': '2017',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-9,
 author = {Kana Eguchi and Masayuki Nambu and Kimihiko Murase and Kazuo Chin and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 title = {Surface Electromyogram Measurement e-Textile for the Wearable Periodic Limb Movement Home Monitoring System},
 venue = {Jeju/Korea},
 year = {2017}
}`
            },

  {
            'id': '241',
            'author': 'Tomohiro Kuroda, Kenichiro Fujita, Goshiro Yamamoto, Kazuya Okamoto, Masahiro Yakami, Mizuho Nishio, Hiroyoshi Isoda',
            'title': 'A Medical Image De-identifier Bridging a Hospital Information Systems and Cloud Services',
            'year': '2017',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-8,
 author = {Tomohiro Kuroda and Kenichiro Fujita and Goshiro Yamamoto and Kazuya Okamoto and Masahiro Yakami and Mizuho Nishio and Hiroyoshi Isoda},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 title = {A Medical Image De-identifier Bridging a Hospital Information Systems and Cloud Services},
 venue = {Jeju/Korea},
 year = {2017}
}`
            },

  {
            'id': '242',
            'author': 'Tomohiro Kuroda, Hiroki Shiomi, Eri Minamino-Muta, Yugo Yamashita, Tomohide Iwao, Hiroshi Tamura, Kazuo Ueshima, Takeshi Kimura',
            'title': 'Evaluation of NISHIJIN e-Textile for 12-lead ECG measurement through Automatic ECG Analyzer',
            'year': '2017',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-7,
 author = {Tomohiro Kuroda and Hiroki Shiomi and Eri Minamino-Muta and Yugo Yamashita and Tomohide Iwao and Hiroshi Tamura and Kazuo Ueshima and Takeshi Kimura},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 pages = {1234-1237},
 title = {Evaluation of NISHIJIN e-Textile for 12-lead ECG measurement through Automatic ECG Analyzer},
 venue = {Jeju/Korea},
 year = {2017}
}`
            },

  {
            'id': '243',
            'author': 'Noboru Nishimoto, Wei Yaguang, Kohei Matsumura, Roberto Lopez-Gulliver, Haruo Noma, Kougoro Iwanaga, Tomohiro Kuroda',
            'title': 'Training Simulator for Resuscitation of Neonate with High Effectiveness and Low Introduction Cost',
            'year': '2017',
            'book': 'Innovation in Medicine and Healthcare',
            'doi': 'https://doi.org/10.1007/978-3-319-59397-5_29',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-6,
 author = {Noboru Nishimoto and Wei Yaguang and Kohei Matsumura and Roberto Lopez-Gulliver and Haruo Noma and Kougoro Iwanaga and Tomohiro Kuroda},
 booktitle = {Innovation in Medicine and Healthcare},
 doi = {10.1007/978-3-319-59397-5_29},
 title = {Training Simulator for Resuscitation of Neonate with High Effectiveness and Low Introduction Cost},
 venue = {Vilamoura/Portugal},
 year = {2017}
}`
            },

  {
            'id': '244',
            'author': 'Toshiki Kawai, Haruka Kanbara, Kohei Matsumura, Haruo Noma, Osamu Sugiyama, Manabu Shimoto, Shigeru Ohtsuru, Tomohiro Kuroda',
            'title': 'Design and Implementation of a Social Networking Service-Based Application for Supporting Disaster Medical Assistance Teams',
            'year': '2017',
            'book': 'Innovation in Medicine and Healthcare',
            'doi': 'https://doi.org/0.1007/978-3-319-59397-5_18',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-5,
 author = {Toshiki Kawai and Haruka Kanbara and Kohei Matsumura and Haruo Noma and Osamu Sugiyama and Manabu Shimoto and Shigeru Ohtsuru and Tomohiro Kuroda},
 booktitle = {Innovation in Medicine and Healthcare},
 doi = {0.1007/978-3-319-59397-5_18},
 title = {Design and Implementation of a Social Networking Service-Based Application for Supporting Disaster Medical Assistance Teams},
 venue = {Vilamoura/Portugal},
 year = {2017}
}`
            },

  {
            'id': '245',
            'author': 'Tuukka Karvonen, Yusuke Muranishi, Goshiro Yamamoto, Tomohiro Kuroda, Toshihiko Sato',
            'title': 'Evaluation of a novel multi-articulated endoscope: proof of concept through a virtual simulation',
            'year': '2017',
            'book': 'Proceedings of International Congress and Exhibition Computer Aided Radiology and Surgery',
            'doi': 'https://doi.org/10.1007/s11548-017-1599-0',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-4,
 author = {Tuukka Karvonen and Yusuke Muranishi and Goshiro Yamamoto and Tomohiro Kuroda and Toshihiko Sato},
 booktitle = {Proceedings of International Congress and Exhibition Computer Aided Radiology and Surgery},
 doi = {10.1007/s11548-017-1599-0},
 pages = {1123-1130},
 title = {Evaluation of a novel multi-articulated endoscope: proof of concept through a virtual simulation},
 venue = {Barcelona/Spain},
 year = {2017}
}`
            },

  {
            'id': '246',
            'author': 'Tomohiro Kuroda',
            'title': 'Snapshot of Medical Informatics Research in Japan',
            'year': '2017',
            'book': 'Abstract Book at EMBEC and NBC',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-3,
 author = {Tomohiro Kuroda},
 booktitle = {Abstract Book at EMBEC and NBC},
 pages = {51},
 title = {Snapshot of Medical Informatics Research in Japan},
 venue = {Tampere/Finland},
 year = {2017}
}`
            },

  {
            'id': '247',
            'author': 'Tuukka Karvonen, Goshiro Yamamoto, Yusuke Muranishi, Toshihiko Sato, Tomohiro Kuroda',
            'title': 'Augmented Virtuality Platform for Usability Evaluation of a Novel Endoscope Concept',
            'year': '2017',
            'book': 'IFMBE Proceedings',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-2,
 author = {Tuukka Karvonen and Goshiro Yamamoto and Yusuke Muranishi and Toshihiko Sato and Tomohiro Kuroda},
 booktitle = {IFMBE Proceedings},
 pages = {575-578},
 title = {Augmented Virtuality Platform for Usability Evaluation of a Novel Endoscope Concept},
 venue = {Tampere/Finland},
 volume = {65},
 year = {2017}
}`
            },

  {
            'id': '248',
            'author': 'Ryo Otsuki, Osamu Sugiyama, Kohei Matsumura, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'When should the Health Promotion Agent Recommend the User to Walk? - Approach for Searching an Appropriate Walking Pattern for the User',
            'year': '2017',
            'book': 'Proceedings of Human Agent Interaction',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-14,
 author = {Ryo Otsuki and Osamu Sugiyama and Kohei Matsumura and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Human Agent Interaction},
 pages = {469-472},
 title = {When should the Health Promotion Agent Recommend the User to Walk? - Approach for Searching an Appropriate Walking Pattern for the User},
 venue = {Bielefeld/Germany},
 year = {2017}
}`
            },

  {
            'id': '249',
            'author': 'Tomohiro Kuroda',
            'title': 'New Japanese Legislations on Privacy Protection and Health Data Utilization',
            'year': '2017',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-13,
 author = {Tomohiro Kuroda},
 booktitle = {Studies in Health Technology and Informatics},
 title = {New Japanese Legislations on Privacy Protection and Health Data Utilization},
 venue = {Hangzhou/China},
 year = {2017}
}`
            },

  {
            'id': '250',
            'author': 'Samar El Helou, Tuukka Karvonen, Goshiro Yamamoto, Naoto Kume, Shinji Kobayashi, Eiji Kondo, Shusuke Hiragi, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Generation of OpenEHR Test Datasets for Benchmarking',
            'year': '2017',
            'book': 'Studies in Health Technology and Informatics',
            'doi': 'https://doi.org/10.3233/978-1-61499-830-3-1266',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-12,
 author = {Samar El Helou and Tuukka Karvonen and Goshiro Yamamoto and Naoto Kume and Shinji Kobayashi and Eiji Kondo and Shusuke Hiragi and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Studies in Health Technology and Informatics},
 doi = {10.3233/978-1-61499-830-3-1266},
 pages = {1266},
 title = {Generation of OpenEHR Test Datasets for Benchmarking},
 venue = {Hangzhou/China},
 volume = {245},
 year = {2017}
}`
            },

  {
            'id': '251',
            'author': 'Kensuke Morris, Naoto Kume, Goshiro Yamamoto, Shinji Kobayashi, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Authenticating Unknown Doctors for Access to EHRs based on Societal Trust',
            'year': '2017',
            'book': 'Studies in Health Technology and Informatics',
            'doi': 'https://doi.org/10.3233/978-1-61499-830-3-1308',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-11,
 author = {Kensuke Morris and Naoto Kume and Goshiro Yamamoto and Shinji Kobayashi and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Studies in Health Technology and Informatics},
 doi = {10.3233/978-1-61499-830-3-1308},
 pages = {1308},
 title = {Authenticating Unknown Doctors for Access to EHRs based on Societal Trust},
 venue = {Hangzhou/China},
 volume = {245},
 year = {2017}
}`
            },

  {
            'id': '252',
            'author': 'Tomohiro Kuroda, Tomoko Hikita, Kenichiro Fujita, Osamu Sugiyama, Kazuya Okamoto',
            'title': 'Bedside Vital Data Terminal reducing Nursing Tasks',
            'year': '2017',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-10,
 author = {Tomohiro Kuroda and Tomoko Hikita and Kenichiro Fujita and Osamu Sugiyama and Kazuya Okamoto},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 title = {Bedside Vital Data Terminal reducing Nursing Tasks},
 venue = {Jeju/Korea},
 year = {2017}
}`
            },

  {
            'id': '253',
            'author': 'Masayuki Nambu, Osamu Sugiyama, Miho Asano, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Data Warehouse System Conjunction with Cohort Data and Clinical Data',
            'year': '2017',
            'book': 'Abstract Book at EMBEC and NBC',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-international-conferences-1,
 author = {Masayuki Nambu and Osamu Sugiyama and Miho Asano and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Abstract Book at EMBEC and NBC},
 pages = {53},
 title = {Data Warehouse System Conjunction with Cohort Data and Clinical Data},
 venue = {Tampere/Finland},
 year = {2017}
}`
            },

  {
            'id': '254',
            'author': 'Kana Eguchi, Masayuki Nambu, Kimihiko Murase, Kazuo Chin, Tomohiro Kuroda',
            'title': 'Wearable Electromyogram Measurement Textile for Periodic Limb Movement Monitoring in Daily Life',
            'year': '2017',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-9,
 author = {Kana Eguchi and Masayuki Nambu and Kimihiko Murase and Kazuo Chin and Tomohiro Kuroda},
 booktitle = {Technical Report of the Institute of Electronics, Information and Communication Engineers},
 number = {520},
 pages = {33-36},
 title = {Wearable Electromyogram Measurement Textile for Periodic Limb Movement Monitoring in Daily Life},
 venue = {Tokyo/Japan},
 volume = {116},
 year = {2017}
}`
            },

  {
            'id': '255',
            'author': 'Osamu Sugiyama, Mao Suzuki, Ryo Otsuki, Kohei Matsumura, Asuka Wakao, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'Development of PHR Platform to Collect Activity Record within Health Promotion Event and Analysis of the Activity to Make People Obtain Walking Habit',
            'year': '2017',
            'book': 'Proceedings of Hyper Interdisciplinary Conference Osaka Forum',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-8,
 author = {Osamu Sugiyama and Mao Suzuki and Ryo Otsuki and Kohei Matsumura and Asuka Wakao and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Hyper Interdisciplinary Conference Osaka Forum},
 title = {Development of PHR Platform to Collect Activity Record within Health Promotion Event and Analysis of the Activity to Make People Obtain Walking Habit},
 venue = {Iabaraki/Japan},
 year = {2017}
}`
            },

  {
            'id': '256',
            'author': 'Noboru Kada, Masatoshi Yoshikawa, Akihiro Hamasaki, Osamu Sugiyama, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'User Interface of CDSS for Drug Therapy of Thyroid Disease',
            'year': '2017',
            'book': 'Proceedings of Forum on Data Engineering and Information Management',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-7,
 author = {Noboru Kada and Masatoshi Yoshikawa and Akihiro Hamasaki and Osamu Sugiyama and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Forum on Data Engineering and Information Management},
 title = {User Interface of CDSS for Drug Therapy of Thyroid Disease},
 venue = {Takayama/Japan},
 year = {2017}
}`
            },

  {
            'id': '257',
            'author': 'Yuji Morita, Masatoshi Yoshikawa, Akihiro Hamasaki, Osamu Sugiyama, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Reconstruction of Medication History and Pattern Mining considering Medical Doctors\' Diversity',
            'year': '2017',
            'book': 'Proceedings of Forum on Data Engineering and Information Management',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-6,
 author = {Yuji Morita and Masatoshi Yoshikawa and Akihiro Hamasaki and Osamu Sugiyama and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Forum on Data Engineering and Information Management},
 title = {Reconstruction of Medication History and Pattern Mining considering Medical Doctors' Diversity},
 venue = {Takayama/Japan},
 year = {2017}
}`
            },

  {
            'id': '258',
            'author': 'Shusuke Hiragi, Yasushi Kobayashi, Hiroshi Tamura, Rei Goto, Yukari Tanaka, Atsuo Sawada, Kaoru Sakai, Hitomi Miyata, Motoko Yanagita, Tomohiro Kuroda',
            'title': 'Evaluation of QoL after Renal Transplantation using EQ5D5L',
            'year': '2017',
            'book': '日本腎臓移植学会抄録集',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-5,
 author = {Shusuke Hiragi and Yasushi Kobayashi and Hiroshi Tamura and Rei Goto and Yukari Tanaka and Atsuo Sawada and Kaoru Sakai and Hitomi Miyata and Motoko Yanagita and Tomohiro Kuroda},
 booktitle = {日本腎臓移植学会抄録集},
 pages = {233},
 title = {Evaluation of QoL after Renal Transplantation using EQ5D5L},
 venue = {Kobe/Japan},
 year = {2017}
}`
            },

  {
            'id': '259',
            'author': 'Tomohiro Kuroda',
            'title': 'Ideal Data Flow of Clinical Medicine of the Information Age and Laws',
            'year': '2017',
            'book': 'Proceedings of General Meeting of Japanese Association of Medical Law',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-41,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of General Meeting of Japanese Association of Medical Law},
 title = {Ideal Data Flow of Clinical Medicine of the Information Age and Laws},
 venue = {Kyoto/Japan},
 year = {2017}
}`
            },

  {
            'id': '260',
            'author': 'Osamu Sugiyama, Ryo Otsuki, Mao Suzuki, Kohei Matsumura, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'Analysis of Health Behavior based on Users\' Activities in the Health Promotion Event',
            'year': '2017',
            'book': 'Proceedings of Japanese Association for Medical Informatics and Japanese Society for Artificial Intelligence Joint Research Meeting of Special Interest Group on Artificial Intelligence in Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-40,
 author = {Osamu Sugiyama and Ryo Otsuki and Mao Suzuki and Kohei Matsumura and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Japanese Association for Medical Informatics and Japanese Society for Artificial Intelligence Joint Research Meeting of Special Interest Group on Artificial Intelligence in Medicine},
 number = {14},
 pages = {14-1-14-4},
 title = {Analysis of Health Behavior based on Users' Activities in the Health Promotion Event},
 venue = {Yokohama/Japan},
 year = {2017}
}`
            },

  {
            'id': '261',
            'author': 'Kazuya Okamoto, Masahiro Yakami, Akira Yamamoto, Hiroyoshi Isoda, Kenichiro Fujita, Masayoshi Sudo, Kaori Togashi, Tomohiro Kuroda',
            'title': 'How to secure data continuation in PACS update',
            'year': '2017',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-4,
 author = {Kazuya Okamoto and Masahiro Yakami and Akira Yamamoto and Hiroyoshi Isoda and Kenichiro Fujita and Masayoshi Sudo and Kaori Togashi and Tomohiro Kuroda},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {70-71},
 title = {How to secure data continuation in PACS update},
 venue = {Otsu/Japan},
 year = {2017}
}`
            },

  {
            'id': '262',
            'author': 'Shoko Ueno, Osamu Sugiyama, Mizuho Nishio, Masahiro Yakami, Goshiro Yamamoto, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Attempts of Computer-Aided Diagnosis for Pulmanory Nodule Classification with Patient Information',
            'year': '2017',
            'book': 'Proceedings of Japanese Association for Medical Informatics and Japanese Society for Artificial Intelligence Joint Research Meeting of Special Interest Group on Artificial Intelligence in Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-39,
 author = {Shoko Ueno and Osamu Sugiyama and Mizuho Nishio and Masahiro Yakami and Goshiro Yamamoto and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Japanese Association for Medical Informatics and Japanese Society for Artificial Intelligence Joint Research Meeting of Special Interest Group on Artificial Intelligence in Medicine},
 number = {04},
 pages = {04-1-04-4},
 title = {Attempts of Computer-Aided Diagnosis for Pulmanory Nodule Classification with Patient Information},
 venue = {Yokohama/Japan},
 year = {2017}
}`
            },

  {
            'id': '263',
            'author': 'Karin Goka, Kazuya Okamoto, Masahiro Hirose, Shusuke Hiragi, Goshiro Yamamoto, Osamu Sugiyama, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Attempt to Detect Incidents from Electronic Medical Records using Data Mining Technology',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-38,
 author = {Karin Goka and Kazuya Okamoto and Masahiro Hirose and Shusuke Hiragi and Goshiro Yamamoto and Osamu Sugiyama and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {814-817},
 title = {Attempt to Detect Incidents from Electronic Medical Records using Data Mining Technology},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '264',
            'author': 'Tomohiro Kuroda',
            'title': 'Ideal Data Flow of Medicine of Information Age',
            'year': '2017',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-37,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {Ideal Data Flow of Medicine of Information Age},
 venue = {Osaka/Japan},
 year = {2017}
}`
            },

  {
            'id': '265',
            'author': 'Kenichiro Fujita, Minoru Fukushima, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Efforts to Improve Regional Healthcare Collaboration by Connecting FAX and Hospital Information System',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-36,
 author = {Kenichiro Fujita and Minoru Fukushima and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {1179-1180},
 title = {Efforts to Improve Regional Healthcare Collaboration by Connecting FAX and Hospital Information System},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '266',
            'author': 'Osamu Sugiyama, Hiroaki Kobayashi, Takumi Ishida, Kazuhiko Takase, Tomohiro Kuroda',
            'title': 'Attempt to Develop Medical Device Data Collection Platform for IoT based Hospital Information System',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-35,
 author = {Osamu Sugiyama and Hiroaki Kobayashi and Takumi Ishida and Kazuhiko Takase and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {901-902},
 title = {Attempt to Develop Medical Device Data Collection Platform for IoT based Hospital Information System},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '267',
            'author': 'Tomohiro Kuroda, Hisashi Saito, Shinsuke Muto, Shigeto Yonemura, Takashi Suzuki',
            'title': 'Challenges on Legal Systems for Computerization of Clinical Medicine - Toward Accumulation and Utilization of Clinical Big Data -',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-34,
 author = {Tomohiro Kuroda and Hisashi Saito and Shinsuke Muto and Shigeto Yonemura and Takashi Suzuki},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {277-278},
 title = {Challenges on Legal Systems for Computerization of Clinical Medicine - Toward Accumulation and Utilization of Clinical Big Data -},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '268',
            'author': 'Tomoko Hikita, Hiroe Yamanaka, Kenichiro Fujita, Tadamasa Takemura, Tomohiro Kuroda',
            'title': 'Evaluation on Usage Situation of Vital Data Terminal',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-33,
 author = {Tomoko Hikita and Hiroe Yamanaka and Kenichiro Fujita and Tadamasa Takemura and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {682-684},
 title = {Evaluation on Usage Situation of Vital Data Terminal},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '269',
            'author': 'Shosuke Ohtera, Michi Sakai, Genta Kato, Tomohiro Kuroda',
            'title': 'Progress in Usage of National Insurance Claims Database (NDB) On-site Research Center in Kyoto',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-32,
 author = {Shosuke Ohtera and Michi Sakai and Genta Kato and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {145-147},
 title = {Progress in Usage of National Insurance Claims Database (NDB) On-site Research Center in Kyoto},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '270',
            'author': 'Tomohiro Kuroda',
            'title': 'Future with Next Generation Medical Platform Act',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-31,
 author = {Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {78-79},
 title = {Future with Next Generation Medical Platform Act},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '271',
            'author': 'Kosuke Sasai, Yuko Shimoe, Naoki Mihara, Sawako Uchida, Shinya Nakajima, Toshinari Nakano, Tomohiro Kuroda, Hiroo Tamagawa, Keunsik Park, Masaki Miyamoto',
            'title': 'Development of the Diagnostic Imaging Navigation using the Knowledge Base',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-30,
 author = {Kosuke Sasai and Yuko Shimoe and Naoki Mihara and Sawako Uchida and Shinya Nakajima and Toshinari Nakano and Tomohiro Kuroda and Hiroo Tamagawa and Keunsik Park and Masaki Miyamoto},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {1232-1235},
 title = {Development of the Diagnostic Imaging Navigation using the Knowledge Base},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '272',
            'author': 'Kazuko Komai, Toshiharu Teramae, Masayoshi Sudo, Atsushi Hattori, Youhei Taniguchi, Daisuke Suto, Ayako Nakamura, Rikako Sato, Kazuo Matsubara, Sachio Fukatsu, Junko Ozaki, Hiroshi Tamura, Genta Kato, Tomohiro Kuroda, Toshio Heike',
            'title': 'Switching to Generic Drug based on HOMAS2 data -Utilize Benchmark Data-',
            'year': '2017',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-3,
 author = {Kazuko Komai and Toshiharu Teramae and Masayoshi Sudo and Atsushi Hattori and Youhei Taniguchi and Daisuke Suto and Ayako Nakamura and Rikako Sato and Kazuo Matsubara and Sachio Fukatsu and Junko Ozaki and Hiroshi Tamura and Genta Kato and Tomohiro Kuroda and Toshio Heike},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 title = {Switching to Generic Drug based on HOMAS2 data -Utilize Benchmark Data-},
 venue = {Otsu/Japan},
 year = {2017}
}`
            },

  {
            'id': '273',
            'author': 'Shusuke Hiragi, Naoya Kondo, Youhei Taniguchi, Midori Higashiura, Kumiko Uno, Yuki Nakajima, Eiji Kobayasi, Kenichiro Fujita, Tomohiro Kuroda',
            'title': 'Development of Hospital Information Module for Dialysis Department - For Better Information Sharing -',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-29,
 author = {Shusuke Hiragi and Naoya Kondo and Youhei Taniguchi and Midori Higashiura and Kumiko Uno and Yuki Nakajima and Eiji Kobayasi and Kenichiro Fujita and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {469-471},
 title = {Development of Hospital Information Module for Dialysis Department - For Better Information Sharing -},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '274',
            'author': 'Kenichiro Fujita, Youhei Taniguchi, Masashi Kotani, Masahiro Yakami, Mizuho Nishio, Kazuya Okamoto, Tadamasa Takemura, Hiroyoshi Isoda, Tomohiro Kuroda',
            'title': 'Construction of Clinical Information Export Environment Complying with the Amended Act on the Protection of Personal Information',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-28,
 author = {Kenichiro Fujita and Youhei Taniguchi and Masashi Kotani and Masahiro Yakami and Mizuho Nishio and Kazuya Okamoto and Tadamasa Takemura and Hiroyoshi Isoda and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {458-461},
 title = {Construction of Clinical Information Export Environment Complying with the Amended Act on the Protection of Personal Information},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '275',
            'author': 'Manabu Muto, Osamu Kato, Shinnichi Usami, Eizaburo Sueoka, Tomohiro Kuroda',
            'title': 'Medical Information to Save Lives -Real-World Data toward Precision Medicine-',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-27,
 author = {Manabu Muto and Osamu Kato and Shinnichi Usami and Eizaburo Sueoka and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {73},
 title = {Medical Information to Save Lives -Real-World Data toward Precision Medicine-},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '276',
            'author': 'Tomohiro Kuroda',
            'title': 'To Emerge Medical Information Database to Save Lives',
            'year': '2017',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-26,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 title = {To Emerge Medical Information Database to Save Lives},
 venue = {Osaka/Japan},
 year = {2017}
}`
            },

  {
            'id': '277',
            'author': 'Kensuke Morris, Goshiro Yamamoto, Shosuke Ohtera, Michi Sakai, Shusuke Hiragi, Kazuya Okamoto, Osamu Sugiyama, Naoto Kume, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Reducing Patient Privacy Concerns via Access Control to EHRs',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-25,
 author = {Kensuke Morris and Goshiro Yamamoto and Shosuke Ohtera and Michi Sakai and Shusuke Hiragi and Kazuya Okamoto and Osamu Sugiyama and Naoto Kume and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {512-517},
 title = {Reducing Patient Privacy Concerns via Access Control to EHRs},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '278',
            'author': 'Eizen Kimura, Koki Hamada, Gembu Morohashi, Koji Chida, Kazuya Okamoto, Shirou Manabe, Toshihiro Takeda, Naoki Mihara, Tomohiro Kuroda, Yasushi Matsumura',
            'title': 'Feasibility Study of Applying Secure Multiparty Computation on Distributed Medical Information Analysis System',
            'year': '2017',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-24,
 author = {Eizen Kimura and Koki Hamada and Gembu Morohashi and Koji Chida and Kazuya Okamoto and Shirou Manabe and Toshihiro Takeda and Naoki Mihara and Tomohiro Kuroda and Yasushi Matsumura},
 booktitle = {Japan Journal of Medical Informatics},
 pages = {518-522},
 title = {Feasibility Study of Applying Secure Multiparty Computation on Distributed Medical Information Analysis System},
 venue = {Osaka/Japan},
 volume = {37},
 year = {2017}
}`
            },

  {
            'id': '279',
            'author': 'Genta Kato, Michi Sakai, Shosuke Ohtera, Toru Shimogaki, Hiroki Matsui, Tatsuya Noda, Hideo Yasunaga, Tomoaki Imamura, Tomohiro Kuroda',
            'title': 'Abstract Report : Next Generation NDB Research Platform for New Medical Evidences',
            'year': '2017',
            'book': 'Proceedings of General Assembly of Japan Society of Public Health',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-23,
 author = {Genta Kato and Michi Sakai and Shosuke Ohtera and Toru Shimogaki and Hiroki Matsui and Tatsuya Noda and Hideo Yasunaga and Tomoaki Imamura and Tomohiro Kuroda},
 booktitle = {Proceedings of General Assembly of Japan Society of Public Health},
 title = {Abstract Report : Next Generation NDB Research Platform for New Medical Evidences},
 venue = {Kagoshima/Japan},
 year = {2017}
}`
            },

  {
            'id': '280',
            'author': 'Genta Kato, Michi Sakai, Shosuke Ohtera, Toru Shimogaki, Hiroki Matsui, Tatsuya Noda, Hideo Yasunaga, Tomoaki Imamura, Tomohiro Kuroda',
            'title': 'Research on Next Generation NDB platform Generation for New Medical Evidences : Potential for Epidemiology',
            'year': '2017',
            'book': 'Proceedings of Annual Meeting of the Society for Clinical Epidemiology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-22,
 author = {Genta Kato and Michi Sakai and Shosuke Ohtera and Toru Shimogaki and Hiroki Matsui and Tatsuya Noda and Hideo Yasunaga and Tomoaki Imamura and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Meeting of the Society for Clinical Epidemiology},
 title = {Research on Next Generation NDB platform Generation for New Medical Evidences : Potential for Epidemiology},
 venue = {Tokyo/Japan},
 year = {2017}
}`
            },

  {
            'id': '281',
            'author': 'Yusuke Yokota, Goshiro Yamamoto, Shusuke Hiragi, Naoki Ohboshi, Tomohiro Kuroda',
            'title': 'Development of',
            'year': '2017',
            'book': 'Proceedings of JAMI Telemedicine Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-21,
 author = {Yusuke Yokota and Goshiro Yamamoto and Shusuke Hiragi and Naoki Ohboshi and Tomohiro Kuroda},
 booktitle = {Proceedings of JAMI Telemedicine Research Meeting},
 pages = {106},
 title = {Development of},
 venue = {Utsunomiya/Japan},
 year = {2017}
}`
            },

  {
            'id': '282',
            'author': 'Kenichiro Fujita, Youhei Taniguchi, Yoshihiro Kinoshita, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda',
            'title': 'Developing Conference Support Information System with Inter-system Extraction / Display Function',
            'year': '2017',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-20,
 author = {Kenichiro Fujita and Youhei Taniguchi and Yoshihiro Kinoshita and Kazuya Okamoto and Tadamasa Takemura and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {22},
 title = {Developing Conference Support Information System with Inter-system Extraction / Display Function},
 venue = {Ueda/Japan},
 year = {2017}
}`
            },

  {
            'id': '283',
            'author': 'Atsushi Hattori, Toshiharu Teramae, Masayoshi Sudo, Kazuko Komai, Takeshi Sugino, Genta Kato, Hiroshi Tamura, Tomohiro Kuroda, Toshio Heike, Susumu Miyamoto',
            'title': 'An Example of Hospital Management Improvement utilizing Data -Activity of Office for Hospital Strategic Planning-',
            'year': '2017',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-2,
 author = {Atsushi Hattori and Toshiharu Teramae and Masayoshi Sudo and Kazuko Komai and Takeshi Sugino and Genta Kato and Hiroshi Tamura and Tomohiro Kuroda and Toshio Heike and Susumu Miyamoto},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 title = {An Example of Hospital Management Improvement utilizing Data -Activity of Office for Hospital Strategic Planning-},
 venue = {Otsu/Japan},
 year = {2017}
}`
            },

  {
            'id': '284',
            'author': 'Kana Eguchi, Masayuki Nambu, Kimihiko Murase, Kazuo Chin, Tomohiro Kuroda',
            'title': 'Measurement Points Optimization for Wearable Surface Electromyogram Devices Targeting Periodic Limb Movements Screening at Home',
            'year': '2017',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-19,
 author = {Kana Eguchi and Masayuki Nambu and Kimihiko Murase and Kazuo Chin and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {131},
 title = {Measurement Points Optimization for Wearable Surface Electromyogram Devices Targeting Periodic Limb Movements Screening at Home},
 venue = {Ueda/Japan},
 year = {2017}
}`
            },

  {
            'id': '285',
            'author': 'Tomohide Iwao, Shosuke Ohtera, Michi Sakai, Shusuke Hiragi, Shigeru Ohtsuru, Eiji Kondo, Hiroshi Tamura, Genta Kato, Tomohiro Kuroda',
            'title': 'Research on the reconstruction method of health insurance claims database suitable for secondary use for epidemiological analysis',
            'year': '2017',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-18,
 author = {Tomohide Iwao and Shosuke Ohtera and Michi Sakai and Shusuke Hiragi and Shigeru Ohtsuru and Eiji Kondo and Hiroshi Tamura and Genta Kato and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {23},
 title = {Research on the reconstruction method of health insurance claims database suitable for secondary use for epidemiological analysis},
 venue = {Ueda/Japan},
 year = {2017}
}`
            },

  {
            'id': '286',
            'author': 'Michi Sakai, Shosuke Ohtera, Tomohide Iwao, Yukiko Neff, Hirokazu Kato, Tomohiro Kuroda, Yoshimitsu Takahashi, Takeo Nakayama',
            'title': 'Clarification of Terminal Care using National Database of Health Insurance Claims and Specific Health Checkups of Japan',
            'year': '2017',
            'book': 'Proceedings of Annual Meeting of Japan Health Economics Association',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-17,
 author = {Michi Sakai and Shosuke Ohtera and Tomohide Iwao and Yukiko Neff and Hirokazu Kato and Tomohiro Kuroda and Yoshimitsu Takahashi and Takeo Nakayama},
 booktitle = {Proceedings of Annual Meeting of Japan Health Economics Association},
 title = {Clarification of Terminal Care using National Database of Health Insurance Claims and Specific Health Checkups of Japan},
 venue = {Tokyo/Japan},
 year = {2017}
}`
            },

  {
            'id': '287',
            'author': 'Tomohiro Kuroda',
            'title': 'Regulations around Medical Image Database -Including Next Generation Medical Platform Act-',
            'year': '2017',
            'book': 'Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-16,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology},
 pages = {43},
 title = {Regulations around Medical Image Database -Including Next Generation Medical Platform Act-},
 venue = {Gifu/Japan},
 year = {2017}
}`
            },

  {
            'id': '288',
            'author': 'Tomohide Iwao, Shusuke Hiragi, Shosuke Ohtera, Michi Sakai, Genta Kato, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Development of Analytical Database on National Database of Health Insurance Claims and Specific Health Checkups of Japan (NDB) for Epidemiology Research',
            'year': '2017',
            'book': 'IT Healthcare',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-15,
 author = {Tomohide Iwao and Shusuke Hiragi and Shosuke Ohtera and Michi Sakai and Genta Kato and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {IT Healthcare},
 number = {1},
 title = {Development of Analytical Database on National Database of Health Insurance Claims and Specific Health Checkups of Japan (NDB) for Epidemiology Research},
 venue = {Nagoya/Japan},
 volume = {12},
 year = {2017}
}`
            },

  {
            'id': '289',
            'author': 'Ryo Otsuki, Osamu Sugiyama, Mao Suzuki, Kohei Matsumura, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'Activity Recognition from Many Types of Media for Constructing Personal Health Record System',
            'year': '2017',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-14,
 author = {Ryo Otsuki and Osamu Sugiyama and Mao Suzuki and Kohei Matsumura and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 title = {Activity Recognition from Many Types of Media for Constructing Personal Health Record System},
 venue = {Kyoto/Japan},
 year = {2017}
}`
            },

  {
            'id': '290',
            'author': 'Shoko Ueno, Osamu Sugiyama, Mizuho Nishio, Masahiro Yakami, Goshiro Yamamoto, Kazuya Okamoto, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Design of Computer-Aided Diagnosis for Pulmonary Nodule Classification with 3D Convolutional Neural Network',
            'year': '2017',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-13,
 author = {Shoko Ueno and Osamu Sugiyama and Mizuho Nishio and Masahiro Yakami and Goshiro Yamamoto and Kazuya Okamoto and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 title = {Design of Computer-Aided Diagnosis for Pulmonary Nodule Classification with 3D Convolutional Neural Network},
 venue = {Kyoto/Japan},
 year = {2017}
}`
            },

  {
            'id': '291',
            'author': 'Karin Goka, Kazuya Okamoto, Masahiro Hirose, Shusuke Hiragi, Goshiro Yamamoto, Osamu Sugiyama, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Attempt at Automatic Incident Detection from Electronic Medical Records using Natural Language Processing',
            'year': '2017',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-12,
 author = {Karin Goka and Kazuya Okamoto and Masahiro Hirose and Shusuke Hiragi and Goshiro Yamamoto and Osamu Sugiyama and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 title = {Attempt at Automatic Incident Detection from Electronic Medical Records using Natural Language Processing},
 venue = {Kyoto/Japan},
 year = {2017}
}`
            },

  {
            'id': '292',
            'author': 'Hisashi Yoshida, Saki Konaka, Satoshi Adachi, Kikuo Hirano, Kazushige Sugimura, Kazuo Ueshima, Tomohiro Kuroda, Masaki Yoshida, Toshiyuki Sado, Hiroshi Kobayashi',
            'title': 'Potential distribution of fetal electrocardiogram on maternal abdomen and development of e-Textile',
            'year': '2017',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-11,
 author = {Hisashi Yoshida and Saki Konaka and Satoshi Adachi and Kikuo Hirano and Kazushige Sugimura and Kazuo Ueshima and Tomohiro Kuroda and Masaki Yoshida and Toshiyuki Sado and Hiroshi Kobayashi},
 booktitle = {Bio-Medical Engineering},
 pages = {207},
 title = {Potential distribution of fetal electrocardiogram on maternal abdomen and development of e-Textile},
 venue = {東北大学星陵キャンパス},
 year = {2017}
}`
            },

  {
            'id': '293',
            'author': 'Goshiro Yamamoto, Tomohiro Kuroda, Naoki Ohboshi, Kenta Ogushi',
            'title': 'A Study on Doctor-Patient Communication in Telemedicine using Hand Gesture',
            'year': '2017',
            'book': 'Proceedings of Annual Conference of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-10,
 author = {Goshiro Yamamoto and Tomohiro Kuroda and Naoki Ohboshi and Kenta Ogushi},
 booktitle = {Proceedings of Annual Conference of IPSJ},
 number = {4},
 pages = {393-394},
 title = {A Study on Doctor-Patient Communication in Telemedicine using Hand Gesture},
 venue = {Nagoya/Japan},
 year = {2017}
}`
            },

  {
            'id': '294',
            'author': 'Mao Suzuki, Ryo Otsuki, Asuka Wakao, Kohei Matsumura, Osamu Sugiyama, Haruo Noma, Tomohiro Kuroda',
            'title': 'Analyzing Relations between Number of Steps and External Factors for Walking Habituation',
            'year': '2017',
            'book': 'Technical Reports of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2017-domestic-conferences-1,
 author = {Mao Suzuki and Ryo Otsuki and Asuka Wakao and Kohei Matsumura and Osamu Sugiyama and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Technical Reports of IPSJ},
 number = {3},
 title = {Analyzing Relations between Number of Steps and External Factors for Walking Habituation},
 venue = {Ishigaki/Japan},
 year = {2017}
}`
            },

  {
            'id': '295',
            'author': 'Eizen Kimura, Koki Hamada, Ryo Kikuchi, Koji Chida, Kazuya Okamoto, Shirou Manabe, Tomohiro Kuroda, Yasushi Matsumura, Toshihiro Takeda, Naoki Mihara',
            'title': 'Evaluation of Secure Computation in a Distributed Healthcare Setting',
            'year': '2016',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2016-journal-papers-7,
 author = {Eizen Kimura and Koki Hamada and Ryo Kikuchi and Koji Chida and Kazuya Okamoto and Shirou Manabe and Tomohiro Kuroda and Yasushi Matsumura and Toshihiro Takeda and Naoki Mihara},
 journal = {Studies in Health Technology and Informatics},
 pages = {152-156},
 title = {Evaluation of Secure Computation in a Distributed Healthcare Setting},
 volume = {228},
 year = {2016}
}`
            },

  {
            'id': '296',
            'author': 'Ayako Kajimura, Tadamasa Takemura, Tomoko Hikita, Kenichiro Fujita, Waon Yoshihara, Akane Hashiya, Tomohiro Kuroda',
            'title': 'Nurses’ Actual Usage of EMRs: An Access Log-Based Analysis',
            'year': '2016',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2016-journal-papers-6,
 author = {Ayako Kajimura and Tadamasa Takemura and Tomoko Hikita and Kenichiro Fujita and Waon Yoshihara and Akane Hashiya and Tomohiro Kuroda},
 journal = {Studies in Health Technology and Informatics},
 pages = {858-859},
 title = {Nurses’ Actual Usage of EMRs: An Access Log-Based Analysis},
 volume = {255},
 year = {2016}
}`
            },

  {
            'id': '297',
            'author': 'Kikue Sato, Koji Yamashita, Mitsuko Goshima, Tomohiro Kuroda, Yasutomi Kinosada, Akitoshi Seiyama',
            'title': 'An Analysis of the Factor Model on the Workload of Nursing Staff Using a Hospital Management Tool',
            'year': '2016',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2016-journal-papers-5,
 author = {Kikue Sato and Koji Yamashita and Mitsuko Goshima and Tomohiro Kuroda and Yasutomi Kinosada and Akitoshi Seiyama},
 journal = {Studies in Health Technology and Informatics},
 pages = {58-62},
 title = {An Analysis of the Factor Model on the Workload of Nursing Staff Using a Hospital Management Tool},
 volume = {225},
 year = {2016}
}`
            },

  {
            'id': '298',
            'author': 'Eizen Kimura, Yasushi Matsumura, Naoki Mihara, Tomohiro Kuroda, Yoshinori Yamashita, Haruhiko Hiramatsu, Shirou Manabe, Daisuke Tanaka, Atsushi Sato, Tadashi Yamakura',
            'title': 'Applying Secret Sharing for Backup Exchange and Reference of Medical Information',
            'year': '2016',
            'book': 'Transactions of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2016-journal-papers-4,
 author = {Eizen Kimura and Yasushi Matsumura and Naoki Mihara and Tomohiro Kuroda and Yoshinori Yamashita and Haruhiko Hiramatsu and Shirou Manabe and Daisuke Tanaka and Atsushi Sato and Tadashi Yamakura},
 journal = {Transactions of the Institute of Electronics, Information and Communication Engineers},
 number = {5},
 pages = {526-538},
 title = {Applying Secret Sharing for Backup Exchange and Reference of Medical Information},
 year = {2016}
}`
            },

  {
            'id': '299',
            'author': 'Mao Suzuki, Asuka Wakao, Kohei Matsumura, Haruo Noma, Masahiro Tada, Tomohiro Kuroda',
            'title': 'Working as a Team Promotes Daily Walking Habit - An Exploratory Study -',
            'year': '2016',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2016-journal-papers-3,
 author = {Mao Suzuki and Asuka Wakao and Kohei Matsumura and Haruo Noma and Masahiro Tada and Tomohiro Kuroda},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {2},
 pages = {58-65},
 title = {Working as a Team Promotes Daily Walking Habit - An Exploratory Study -},
 volume = {54},
 year = {2016}
}`
            },

  {
            'id': '300',
            'author': 'Kenta Hori, Katsuya Takanashi, Chisako Naito, Tomohiro Kuroda',
            'title': 'Communication Analysis of a Simulated Tele-auscultation Experiment',
            'year': '2016',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2016-journal-papers-2,
 author = {Kenta Hori and Katsuya Takanashi and Chisako Naito and Tomohiro Kuroda},
 journal = {Japan Journal of Medical Informatics},
 number = {6},
 pages = {297-304},
 title = {Communication Analysis of a Simulated Tele-auscultation Experiment},
 volume = {35},
 year = {2016}
}`
            },

  {
            'id': '301',
            'author': 'Tuukka Karvonen, Yuki Uranishi, Tatsunori Sakamoto, Yosuke Tona, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Estimation of the Degree of Endolymphatic Hydrops Using Optical Coherence Tomography',
            'year': '2016',
            'book': 'Advanced Biomedical Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2016-journal-papers-1,
 author = {Tuukka Karvonen and Yuki Uranishi and Tatsunori Sakamoto and Yosuke Tona and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 journal = {Advanced Biomedical Engineering},
 pages = {19-25},
 title = {Estimation of the Degree of Endolymphatic Hydrops Using Optical Coherence Tomography},
 volume = {5},
 year = {2016}
}`
            },

  {
            'id': '302',
            'author': 'Eizen Kimura, Koki Hamada, Ryo Kikuchi, Koji Chida, Kazuya Okamoto, Shirou Manabe, Tomohiro Kuroda, Yasushi Matsumura, Toshihiro Takeda, Naoki Mihara',
            'title': 'Evaluation of Secure Computation in a Distributed Healthcare Setting',
            'year': '2016',
            'book': 'Proceedings of Medical Informatics Europe',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-9,
 author = {Eizen Kimura and Koki Hamada and Ryo Kikuchi and Koji Chida and Kazuya Okamoto and Shirou Manabe and Tomohiro Kuroda and Yasushi Matsumura and Toshihiro Takeda and Naoki Mihara},
 booktitle = {Proceedings of Medical Informatics Europe},
 pages = {152-156},
 title = {Evaluation of Secure Computation in a Distributed Healthcare Setting},
 venue = {Munich/Germany},
 year = {2016}
}`
            },

  {
            'id': '303',
            'author': 'Tuukka Karvonen, Tatsunori Sakamoto, Yosuke Tona, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': '3D Reconstruction of Cochlea Using Optical Coherence Tomography',
            'year': '2016',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-8,
 author = {Tuukka Karvonen and Tatsunori Sakamoto and Yosuke Tona and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 pages = {5905-5908},
 title = {3D Reconstruction of Cochlea Using Optical Coherence Tomography},
 venue = {Orlando/USA},
 year = {2016}
}`
            },

  {
            'id': '304',
            'author': 'Purnomo Husnul Khotimah, Yuichi Sugiyama, Masatoshi Yoshikawa, Akihiro Hamasaki, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Revealing Oral Medication Patterns from Reconstructed Long-Term Medication History of Type 2 Diabetes',
            'year': '2016',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-7,
 author = {Purnomo Husnul Khotimah and Yuichi Sugiyama and Masatoshi Yoshikawa and Akihiro Hamasaki and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 pages = {5599-5603},
 title = {Revealing Oral Medication Patterns from Reconstructed Long-Term Medication History of Type 2 Diabetes},
 venue = {Orlando/USA},
 year = {2016}
}`
            },

  {
            'id': '305',
            'author': 'Misa Esashi, Tomohiro Nakano, Nao Onose, Kikue Sato, Tomoko Hikita, Reiko Houya, Kazuya Okamoto, Naoki Ohboshi, Tomohiro Kuroda',
            'title': 'Prototyping Context-aware Nursing Support Mobile System',
            'year': '2016',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-6,
 author = {Misa Esashi and Tomohiro Nakano and Nao Onose and Kikue Sato and Tomoko Hikita and Reiko Houya and Kazuya Okamoto and Naoki Ohboshi and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society},
 pages = {5397-5400},
 title = {Prototyping Context-aware Nursing Support Mobile System},
 venue = {Orlando/USA},
 year = {2016}
}`
            },

  {
            'id': '306',
            'author': 'Ayako Kajimura, Tadamasa Takemura, Tomoko Hikita, Kenichiro Fujita, Waon Yoshihara, Akane Hashiya, Tomohiro Kuroda',
            'title': 'Nurses’ Actual Usage of EMRs: An Access Log-Based Analysis',
            'year': '2016',
            'book': 'Proceedings of International Congress on Nursing Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-5,
 author = {Ayako Kajimura and Tadamasa Takemura and Tomoko Hikita and Kenichiro Fujita and Waon Yoshihara and Akane Hashiya and Tomohiro Kuroda},
 booktitle = {Proceedings of International Congress on Nursing Informatics},
 pages = {858-859},
 title = {Nurses’ Actual Usage of EMRs: An Access Log-Based Analysis},
 venue = {Geneva/Switzerland},
 year = {2016}
}`
            },

  {
            'id': '307',
            'author': 'Kikue Sato, Koji Yamashita, Mitsuko Goshima, Tomohiro Kuroda, Yasutomi Kinosada, Akitoshi Seiyama',
            'title': 'An Analysis of the Factor Model on the Workload of Nursing Staff Using a Hospital Management Tool',
            'year': '2016',
            'book': 'Proceedings of International Congress on Nursing Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-4,
 author = {Kikue Sato and Koji Yamashita and Mitsuko Goshima and Tomohiro Kuroda and Yasutomi Kinosada and Akitoshi Seiyama},
 booktitle = {Proceedings of International Congress on Nursing Informatics},
 pages = {58-62},
 title = {An Analysis of the Factor Model on the Workload of Nursing Staff Using a Hospital Management Tool},
 venue = {Geneva/Switzeland},
 year = {2016}
}`
            },

  {
            'id': '308',
            'author': 'Shusuke Hiragi, Hiroshi Tamura, Rei Goto, Tomohiro Kuroda',
            'title': 'The Validity of Markov Model for the Prognostic Estimation of Chronic Kidney Disease',
            'year': '2016',
            'book': 'Value in Health',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-3,
 author = {Shusuke Hiragi and Hiroshi Tamura and Rei Goto and Tomohiro Kuroda},
 booktitle = {Value in Health},
 number = {7},
 title = {The Validity of Markov Model for the Prognostic Estimation of Chronic Kidney Disease},
 venue = {Singapore/Singapore},
 volume = {19},
 year = {2016}
}`
            },

  {
            'id': '309',
            'author': 'Genta Kato, Shusuke Hiragi, Tomohide Iwao, Kazuya Okamoto, Hisashi Saito, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'An Introduction of the Database of Health Insurance Claims in Japan',
            'year': '2016',
            'book': 'Proceedings of Asian Researcher Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-2,
 author = {Genta Kato and Shusuke Hiragi and Tomohide Iwao and Kazuya Okamoto and Hisashi Saito and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Proceedings of Asian Researcher Symposium},
 title = {An Introduction of the Database of Health Insurance Claims in Japan},
 venue = {Depok/Indonesia},
 year = {2016}
}`
            },

  {
            'id': '310',
            'author': 'Purnomo Husnul Khotimah, Masatoshi Yoshikawa, Akihiro Hamasaki, Osamu Sugiyama, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Comparing Frequent Patterns: A Study Case of Apriori and Singleton Implementations in a Diabetes Type 2 Data set',
            'year': '2016',
            'book': 'Proceedings of International Conference on Computer, Control, Informatics, and its Applications',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-11,
 author = {Purnomo Husnul Khotimah and Masatoshi Yoshikawa and Akihiro Hamasaki and Osamu Sugiyama and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference on Computer, Control, Informatics, and its Applications},
 pages = {163-168},
 title = {Comparing Frequent Patterns: A Study Case of Apriori and Singleton Implementations in a Diabetes Type 2 Data set},
 venue = {Jakarta/Indonesia},
 year = {2016}
}`
            },

  {
            'id': '311',
            'author': 'Samar El Helou, Naoto Kume, Shinji Kobayashi, Eiji Kondo, Yuki Uranishi, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Graph databases for openEHR repositories',
            'year': '2016',
            'book': 'European Journal of Epidemiology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-10,
 author = {Samar El Helou and Naoto Kume and Shinji Kobayashi and Eiji Kondo and Yuki Uranishi and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {European Journal of Epidemiology},
 title = {Graph databases for openEHR repositories},
 venue = {Munich/Germany},
 volume = {31},
 year = {2016}
}`
            },

  {
            'id': '312',
            'author': 'Yuki Uranishi, Masataka Imura, Tomohiro Kuroda',
            'title': 'The Rainbow Marker: An AR Marker with Planar Light Probe based on Structural Color Pattern Matching',
            'year': '2016',
            'book': 'Proceedings of IEEE Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-international-conferences-1,
 author = {Yuki Uranishi and Masataka Imura and Tomohiro Kuroda},
 booktitle = {Proceedings of IEEE Virtual Reality},
 pages = {303-304},
 title = {The Rainbow Marker: An AR Marker with Planar Light Probe based on Structural Color Pattern Matching},
 venue = {Greenville/USA},
 year = {2016}
}`
            },

  {
            'id': '313',
            'author': 'Takeshi Imanaka, Kazuya Okamoto, Tomoko Hikita, Tomohide Iwao, Yuki Uranishi, Hiroshi Tamura, Hisashi Saito, Genta Kato, Tomohiro Kuroda',
            'title': 'Implementation of nursing scheduling extracted constraints from past roster treatment',
            'year': '2016',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-9,
 author = {Takeshi Imanaka and Kazuya Okamoto and Tomoko Hikita and Tomohide Iwao and Yuki Uranishi and Hiroshi Tamura and Hisashi Saito and Genta Kato and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 title = {Implementation of nursing scheduling extracted constraints from past roster treatment},
 venue = {Kyoto/Japan},
 year = {2016}
}`
            },

  {
            'id': '314',
            'author': 'Yuta Fukushi, Tomohide Iwao, Kazuya Okamoto, Yuki Uranishi, Hiroshi Tamura, Hisashi Saito, Genta Kato, Tomohiro Kuroda',
            'title': 'Analysis of waiting time of patients using position tracking data and clinical order data in an outpatient ward',
            'year': '2016',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-8,
 author = {Yuta Fukushi and Tomohide Iwao and Kazuya Okamoto and Yuki Uranishi and Hiroshi Tamura and Hisashi Saito and Genta Kato and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 title = {Analysis of waiting time of patients using position tracking data and clinical order data in an outpatient ward},
 venue = {Kyoto/Japan},
 year = {2016}
}`
            },

  {
            'id': '315',
            'author': 'Misa Esashi, Tomohiro Nakano, Tomohide Iwao, Yuki Uranishi, Kazuya Okamoto, Genta Kato, Hisashi Saito, Hiroshi Tamura, Haruo Noma, Tomohiro Kuroda',
            'title': 'An attempt to connect medical instruments to hospital information system',
            'year': '2016',
            'book': 'Bio-Medical Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-7,
 author = {Misa Esashi and Tomohiro Nakano and Tomohide Iwao and Yuki Uranishi and Kazuya Okamoto and Genta Kato and Hisashi Saito and Hiroshi Tamura and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Bio-Medical Engineering},
 pages = {140},
 title = {An attempt to connect medical instruments to hospital information system},
 venue = {Toyama/Japan},
 volume = {54},
 year = {2016}
}`
            },

  {
            'id': '316',
            'author': 'Tomohiro Nakano, Misa Esashi, Kikue Sato, Tomoko Hikita, Reiko Houya, Kazuya Okamoto, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Development of Context-aware Nursing Support Mobile System',
            'year': '2016',
            'book': 'Proceedings of Annual Conference of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-6,
 author = {Tomohiro Nakano and Misa Esashi and Kikue Sato and Tomoko Hikita and Reiko Houya and Kazuya Okamoto and Tomohiro Kuroda and Naoki Ohboshi},
 booktitle = {Proceedings of Annual Conference of IPSJ},
 pages = {467-468},
 title = {Development of Context-aware Nursing Support Mobile System},
 venue = {Yokohama/Japan},
 volume = {3},
 year = {2016}
}`
            },

  {
            'id': '317',
            'author': 'Mika Nishihara, Wei Yaguang, Kohei Matsumura, Haruo Noma, Kazuko Nishizawa, Tomohiro Kuroda',
            'title': 'A Proposal of Training Simulator for Neonatal Resuscitation Using the Stethoscope with Sensor',
            'year': '2016',
            'book': 'Proceedings of Interaction',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-5,
 author = {Mika Nishihara and Wei Yaguang and Kohei Matsumura and Haruo Noma and Kazuko Nishizawa and Tomohiro Kuroda},
 booktitle = {Proceedings of Interaction},
 pages = {504-505},
 title = {A Proposal of Training Simulator for Neonatal Resuscitation Using the Stethoscope with Sensor},
 venue = {Tokyo/Japan},
 year = {2016}
}`
            },

  {
            'id': '318',
            'author': 'Yuji Morita, Masatoshi Yoshikawa, Akihiro Hamasaki, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Toward Clinical Decision Support System for Pharmacotherapy of Thyroid Disease',
            'year': '2016',
            'book': 'Proceedings of Forum on Data Engineering and Information Management',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-4,
 author = {Yuji Morita and Masatoshi Yoshikawa and Akihiro Hamasaki and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Forum on Data Engineering and Information Management},
 title = {Toward Clinical Decision Support System for Pharmacotherapy of Thyroid Disease},
 venue = {Fukuoka/Japan},
 year = {2016}
}`
            },

  {
            'id': '319',
            'author': 'Mai Sato, Eiji Kondo, Genta Kato, Shusuke Hiragi, Hiroshi Tamura, Kazuya Okamoto, Hiroshi Takai, Kaoru Kawasaki, Tomohiro Kuroda, Ikuo Konishi',
            'title': 'A Study on the Actual Conditions of Relaxed Bleeding Cases using the National Claims Database',
            'year': '2016',
            'book': 'Acta Obstetrica et Gynecologia Japonica',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-3,
 author = {Mai Sato and Eiji Kondo and Genta Kato and Shusuke Hiragi and Hiroshi Tamura and Kazuya Okamoto and Hiroshi Takai and Kaoru Kawasaki and Tomohiro Kuroda and Ikuo Konishi},
 booktitle = {Acta Obstetrica et Gynecologia Japonica},
 number = {2},
 pages = {743},
 title = {A Study on the Actual Conditions of Relaxed Bleeding Cases using the National Claims Database},
 venue = {Tokyo/Japan},
 volume = {68},
 year = {2016}
}`
            },

  {
            'id': '320',
            'author': 'Ryo Otsuki, Mao Suzuki, Kohei Matsumura, Osamu Sugiyama, Masahiro Tada, Haruo Noma, Tomohiro Kuroda',
            'title': 'Analyzing Attendants Behavior to Design Information System to Support Walking Habit',
            'year': '2016',
            'book': 'Proceedings of Workshop on Interactive Systems and Software',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-27,
 author = {Ryo Otsuki and Mao Suzuki and Kohei Matsumura and Osamu Sugiyama and Masahiro Tada and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Workshop on Interactive Systems and Software},
 title = {Analyzing Attendants Behavior to Design Information System to Support Walking Habit},
 venue = {Nagahama/Japan},
 year = {2016}
}`
            },

  {
            'id': '321',
            'author': 'Michi Sakai, Shosuke Ohtera, Tomohide Iwao, Kazuya Okamoto, Genta Kato, Takeo Nakayama, Tomohiro Kuroda',
            'title': 'Validation for Future Utilization of NDB Onsite Research Center',
            'year': '2016',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-26,
 author = {Michi Sakai and Shosuke Ohtera and Tomohide Iwao and Kazuya Okamoto and Genta Kato and Takeo Nakayama and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {142-145},
 title = {Validation for Future Utilization of NDB Onsite Research Center},
 venue = {Yokohama/Japan},
 year = {2016}
}`
            },

  {
            'id': '322',
            'author': 'Misa Esashi, Osamu Sugiyama, Shusuke Hiragi, Kazuya Okamoto, Hiroshi Tamura, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Integration of Infusion Pumps and Syringe Drivers with Hospital Information System to Avoid Human Errors',
            'year': '2016',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-25,
 author = {Misa Esashi and Osamu Sugiyama and Shusuke Hiragi and Kazuya Okamoto and Hiroshi Tamura and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1194-1197},
 title = {Integration of Infusion Pumps and Syringe Drivers with Hospital Information System to Avoid Human Errors},
 venue = {Yokohama/Japan},
 year = {2016}
}`
            },

  {
            'id': '323',
            'author': 'Yuta Fukushi, Kazuya Okamoto, Osamu Sugiyama, Hiroshi Tamura, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'An Attempt to Obtain Patients Waiting Time from Position Tracking Data and Clinical Order Data in a General Hospital',
            'year': '2016',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-24,
 author = {Yuta Fukushi and Kazuya Okamoto and Osamu Sugiyama and Hiroshi Tamura and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {566-569},
 title = {An Attempt to Obtain Patients Waiting Time from Position Tracking Data and Clinical Order Data in a General Hospital},
 venue = {Yokohama/Japan},
 year = {2016}
}`
            },

  {
            'id': '324',
            'author': 'Tomohiro Kuroda, Ryuichi Yamamoto, Kazuhiro Oshima, Mariko Kuriyama, Takayuki Fujita, Yoshiteru Yano, Shigeto Yonemura',
            'title': 'Ongoing Activities between Medicine and New Act on the Protection of Personal Information',
            'year': '2016',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-23,
 author = {Tomohiro Kuroda and Ryuichi Yamamoto and Kazuhiro Oshima and Mariko Kuriyama and Takayuki Fujita and Yoshiteru Yano and Shigeto Yonemura},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {88-89},
 title = {Ongoing Activities between Medicine and New Act on the Protection of Personal Information},
 venue = {Yokohama/Japan},
 year = {2016}
}`
            },

  {
            'id': '325',
            'author': 'Ayako Kajimura, Tadamasa Takemura, Waon Yoshihara, Kenichiro Fujita, Tomoko Hikita, Akane Hashiya, Tomohiro Kuroda',
            'title': 'Analysis of Screen Transition Patterns of Electric Heath Records through Access Logs of Nurses',
            'year': '2016',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-22,
 author = {Ayako Kajimura and Tadamasa Takemura and Waon Yoshihara and Kenichiro Fujita and Tomoko Hikita and Akane Hashiya and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {338-339},
 title = {Analysis of Screen Transition Patterns of Electric Heath Records through Access Logs of Nurses},
 venue = {Yokohama/Japan},
 year = {2016}
}`
            },

  {
            'id': '326',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Masayoshi Sudo, Keisuke Teranishi, Toshimizu Yamane, Masanobu Nakachi, Takahiro Kurosawa',
            'title': 'Developing Conference Support Information System',
            'year': '2016',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-21,
 author = {Tomohiro Kuroda and Kazuya Okamoto and Masayoshi Sudo and Keisuke Teranishi and Toshimizu Yamane and Masanobu Nakachi and Takahiro Kurosawa},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {310-313},
 title = {Developing Conference Support Information System},
 venue = {Yokohama/Japan},
 year = {2016}
}`
            },

  {
            'id': '327',
            'author': 'Hiroshi Tamura, Kentaro Honma, Genta Kato, Yohei Ishida, Shusuke Hiragi, Toshiharu Teramae, Tomohiro Kuroda',
            'title': 'Estimation of Automated Drug Recognizing System in the Operation Theater, Looking over Eliminating Work Loads and Improving Health Insurance Claims',
            'year': '2016',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-20,
 author = {Hiroshi Tamura and Kentaro Honma and Genta Kato and Yohei Ishida and Shusuke Hiragi and Toshiharu Teramae and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {308-309},
 title = {Estimation of Automated Drug Recognizing System in the Operation Theater, Looking over Eliminating Work Loads and Improving Health Insurance Claims},
 venue = {Yokohama/Japan},
 year = {2016}
}`
            },

  {
            'id': '328',
            'author': 'Hironobu Murano, Genta Kato, Hiroshi Tamura, Tomohiro Kuroda, Toshio Heike',
            'title': 'Activity of Office for Hospital Strategic Planning',
            'year': '2016',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-2,
 author = {Hironobu Murano and Genta Kato and Hiroshi Tamura and Tomohiro Kuroda and Toshio Heike},
 booktitle = {Proceedings of Meeting of Information Management Divisions of University Hospitals},
 pages = {216-217},
 title = {Activity of Office for Hospital Strategic Planning},
 venue = {Nagasaki/Japan},
 year = {2016}
}`
            },

  {
            'id': '329',
            'author': 'Yusuke Yokota, Tomohiro Kuroda',
            'title': 'Developing Integrated Information System for Tele-medicine Support',
            'year': '2016',
            'book': 'Japanese Journal of Telemedicine and Telecare',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-19,
 author = {Yusuke Yokota and Tomohiro Kuroda},
 booktitle = {Japanese Journal of Telemedicine and Telecare},
 pages = {80},
 title = {Developing Integrated Information System for Tele-medicine Support},
 venue = {Yonago/Japan},
 year = {2016}
}`
            },

  {
            'id': '330',
            'author': 'Tomohiro Kuroda, Satoshi Adachi, Kikuo Hirano, Kazushige Sugimura, Hisashi Yoshida, Masaki Yoshida, Hiroshi Kobayashi',
            'title': 'Prototyping e-Textile for Fetal Electrocardiogram',
            'year': '2016',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-18,
 author = {Tomohiro Kuroda and Satoshi Adachi and Kikuo Hirano and Kazushige Sugimura and Hisashi Yoshida and Masaki Yoshida and Hiroshi Kobayashi},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {93},
 title = {Prototyping e-Textile for Fetal Electrocardiogram},
 venue = {Asahikawa/Japan},
 year = {2016}
}`
            },

  {
            'id': '331',
            'author': 'Takeshi Imanaka, Kazuya Okamoto, Tomoko Hikita, Shusuke Hiragi, Genta Kato, Hiroshi Tamura, Masayuki Nambu, Tomohiro Kuroda',
            'title': 'Developing Nurse Scheduling System to Reduce Workloads of Nurses',
            'year': '2016',
            'book': 'Proceedings of Annual Autumn Research Meeting of the Operations Research Society of Japan',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-17,
 author = {Takeshi Imanaka and Kazuya Okamoto and Tomoko Hikita and Shusuke Hiragi and Genta Kato and Hiroshi Tamura and Masayuki Nambu and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Autumn Research Meeting of the Operations Research Society of Japan},
 title = {Developing Nurse Scheduling System to Reduce Workloads of Nurses},
 venue = {Yamagata/Japan},
 year = {2016}
}`
            },

  {
            'id': '332',
            'author': 'Noboru Kada, Masatoshi Yoshikawa, Akihiro Hamasaki, Kazuya Okamoto, Tomohiro Kuroda, Osamu Sugiyama',
            'title': 'Designing Computer Aided Clinical Decision Sport System for Pharmacotherapy of Hypothyroidism',
            'year': '2016',
            'book': 'Proceedings of Kansai Database Workshop',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-16,
 author = {Noboru Kada and Masatoshi Yoshikawa and Akihiro Hamasaki and Kazuya Okamoto and Tomohiro Kuroda and Osamu Sugiyama},
 booktitle = {Proceedings of Kansai Database Workshop},
 title = {Designing Computer Aided Clinical Decision Sport System for Pharmacotherapy of Hypothyroidism},
 venue = {Kobe/Japan},
 year = {2016}
}`
            },

  {
            'id': '333',
            'author': 'Yuji Morita, Masatoshi Yoshikawa, Akihiro Hamasaki, Kazuya Okamoto, Tomohiro Kuroda, Osamu Sugiyama',
            'title': 'Toward Computer Aided Clinical Decision Support for Hypothyroidism : Medication Adherence Estimation and Prescription Data Mining',
            'year': '2016',
            'book': 'Proceedings of Kansai Database Workshop',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-15,
 author = {Yuji Morita and Masatoshi Yoshikawa and Akihiro Hamasaki and Kazuya Okamoto and Tomohiro Kuroda and Osamu Sugiyama},
 booktitle = {Proceedings of Kansai Database Workshop},
 title = {Toward Computer Aided Clinical Decision Support for Hypothyroidism : Medication Adherence Estimation and Prescription Data Mining},
 venue = {Kobe/Japan},
 year = {2016}
}`
            },

  {
            'id': '334',
            'author': 'Yusuke Yokota, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Prototyping Integrated Telemedicine Support Information System',
            'year': '2016',
            'book': 'Proceedings of Forum on Information Technology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-14,
 author = {Yusuke Yokota and Tomohiro Kuroda and Naoki Ohboshi},
 booktitle = {Proceedings of Forum on Information Technology},
 pages = {371-373},
 title = {Prototyping Integrated Telemedicine Support Information System},
 venue = {Toyama/Japan},
 year = {2016}
}`
            },

  {
            'id': '335',
            'author': 'Tomohiro Kuroda, Kazuo Ueshima',
            'title': 'E-textile design, prototype, and production service based using NISHIJIN Technology',
            'year': '2016',
            'book': 'Proceedings of Japan Analytical Scientific Instrument Show',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-13,
 author = {Tomohiro Kuroda and Kazuo Ueshima},
 booktitle = {Proceedings of Japan Analytical Scientific Instrument Show},
 title = {E-textile design, prototype, and production service based using NISHIJIN Technology},
 venue = {Chiba/Japan},
 year = {2016}
}`
            },

  {
            'id': '336',
            'author': 'Tomohiro Kuroda, Satoshi Adachi, Kikuo Hirano, Kazushige Sugimura, Kazuo Ueshima, Hisashi Yoshida, Masaki Yoshida, Hiroshi Kobayashi',
            'title': 'NISHIJIN e-Textile to for Maternal and Fatal Electrocardiogram -Overview of the Project-',
            'year': '2016',
            'book': 'Proceedings of Joint Symposium on NISHIJIN e-Textile for Maternal and Fatal Electrocardiogram',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-12,
 author = {Tomohiro Kuroda and Satoshi Adachi and Kikuo Hirano and Kazushige Sugimura and Kazuo Ueshima and Hisashi Yoshida and Masaki Yoshida and Hiroshi Kobayashi},
 booktitle = {Proceedings of Joint Symposium on NISHIJIN e-Textile for Maternal and Fatal Electrocardiogram},
 title = {NISHIJIN e-Textile to for Maternal and Fatal Electrocardiogram -Overview of the Project-},
 venue = {Seika/Japan},
 year = {2016}
}`
            },

  {
            'id': '337',
            'author': 'Hisashi Yoshida, Tomohiro Kuroda, Masaki Yoshida, Hiroshi Kobayashi',
            'title': 'Developing Antenatal Monitoring System using e-Textile based Fatal Electrocardiogram',
            'year': '2016',
            'book': 'Proceedings of Joint Symposium on NISHIJIN e-Textile for Maternal and Fatal Electrocardiogram',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-11,
 author = {Hisashi Yoshida and Tomohiro Kuroda and Masaki Yoshida and Hiroshi Kobayashi},
 booktitle = {Proceedings of Joint Symposium on NISHIJIN e-Textile for Maternal and Fatal Electrocardiogram},
 title = {Developing Antenatal Monitoring System using e-Textile based Fatal Electrocardiogram},
 venue = {Seika/Japan},
 year = {2016}
}`
            },

  {
            'id': '338',
            'author': 'Wei Yaguang, Haruo Noma, Kazuko Nishizawa, Kougoro Iwanaga, Tomohiro Kuroda',
            'title': 'Developing Neonatal Cardio-Pulmonary Resuscitation Trainer to Promote Trainers Discovery',
            'year': '2016',
            'book': 'Proceedings of Annual Conference of Japan Society of Perinatal and Neonatal Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-10,
 author = {Wei Yaguang and Haruo Noma and Kazuko Nishizawa and Kougoro Iwanaga and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of Japan Society of Perinatal and Neonatal Medicine},
 title = {Developing Neonatal Cardio-Pulmonary Resuscitation Trainer to Promote Trainers Discovery},
 venue = {Toyama/Japan},
 year = {2016}
}`
            },

  {
            'id': '339',
            'author': 'Yu Maruyama, Yuki Uranishi, Chisako Naito, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Feedback Projecting Blood Collection Simulator for Risk Management Learning',
            'year': '2016',
            'book': 'Proceedings of The Society of Instrument and Control Engineers Kansai Division and The Institute of Systems, Control and Information Engineers Co-organized Young Researchers Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2016-domestic-conferences-1,
 author = {Yu Maruyama and Yuki Uranishi and Chisako Naito and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Proceedings of The Society of Instrument and Control Engineers Kansai Division and The Institute of Systems, Control and Information Engineers Co-organized Young Researchers Conference},
 pages = {175-180},
 title = {Feedback Projecting Blood Collection Simulator for Risk Management Learning},
 venue = {Suita/Japan},
 year = {2016}
}`
            },

  {
            'id': '340',
            'author': 'Tomohiro Kuroda, Haruo Noma, Kazuhiko Takase, Shigeto Sasaki, Tadamasa Takemura',
            'title': 'Bluetooth Roaming for Sensor Network System in Clinical Environment',
            'year': '2015',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2015-journal-papers-2,
 author = {Tomohiro Kuroda and Haruo Noma and Kazuhiko Takase and Shigeto Sasaki and Tadamasa Takemura},
 journal = {Studies in Health Technology and Informatics},
 pages = {198-201},
 title = {Bluetooth Roaming for Sensor Network System in Clinical Environment},
 volume = {216},
 year = {2015}
}`
            },

  {
            'id': '341',
            'author': 'Risa Sakurai, Tadamasa Takemura, Hiroshi Tamura, Tomohiro Kuroda, Hiroyuki Horio',
            'title': 'Visual Function Evaluation System using Blue Contract Sensitivity',
            'year': '2015',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2015-journal-papers-1,
 author = {Risa Sakurai and Tadamasa Takemura and Hiroshi Tamura and Tomohiro Kuroda and Hiroyuki Horio},
 journal = {Transactions of the Japanese Society for Medical and Biological Engineering},
 number = {3},
 pages = {187-192},
 title = {Visual Function Evaluation System using Blue Contract Sensitivity},
 volume = {53},
 year = {2015}
}`
            },

  {
            'id': '342',
            'author': 'Samar El Helou, Naoto Kume, Shinji Kobayashi, Eiji Kondo, Yuki Uranishi, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Exploring Graph Databases with openEHR in Antenatal Care Settings',
            'year': '2015',
            'book': 'Proceedings of Symposium on Big Data Analytics in Science and Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-international-conferences-8,
 author = {Samar El Helou and Naoto Kume and Shinji Kobayashi and Eiji Kondo and Yuki Uranishi and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Big Data Analytics in Science and Engineering},
 title = {Exploring Graph Databases with openEHR in Antenatal Care Settings},
 venue = {Aizu Wakamatsu/Japan},
 year = {2015}
}`
            },

  {
            'id': '343',
            'author': 'Niina S Keränen, Mia Hautala, Adesh Chimariya, Maarit Kangas, Timo Jämsä, Tomohiro Kuroda',
            'title': 'Validation of signal quality in NISHIJIN e-Textile ECG vest',
            'year': '2015',
            'book': 'Proceedings of International Conference of u-Healthcare',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-international-conferences-7,
 author = {Niina S Keränen and Mia Hautala and Adesh Chimariya and Maarit Kangas and Timo Jämsä and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference of u-Healthcare},
 pages = {93-96},
 title = {Validation of signal quality in NISHIJIN e-Textile ECG vest},
 venue = {Higashi-Osaka/Japan},
 year = {2015}
}`
            },

  {
            'id': '344',
            'author': 'Misa Esashi, Haruo Noma, Tomohiro Kuroda',
            'title': 'Supporting Nurses Work and Improving Medical Safety Using a Sensor Network System in Hospitals',
            'year': '2015',
            'book': 'Innovation in Medicine and Healthcare, Smart Innovation, Systems and Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-international-conferences-6,
 author = {Misa Esashi and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Innovation in Medicine and Healthcare, Smart Innovation, Systems and Technologies},
 pages = {225-236},
 title = {Supporting Nurses Work and Improving Medical Safety Using a Sensor Network System in Hospitals},
 venue = {Kyoto/Japan},
 volume = {45},
 year = {2015}
}`
            },

  {
            'id': '345',
            'author': 'Kikue Sato, Tomohiro Kuroda, Akitoshi Seiyama',
            'title': 'Visualization and Quantitative Analysis of Nursing Staff Trajectories Based on a Location System',
            'year': '2015',
            'book': 'Innovation in Medicine and Healthcare, Smart Innovation, Systems and Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-international-conferences-5,
 author = {Kikue Sato and Tomohiro Kuroda and Akitoshi Seiyama},
 booktitle = {Innovation in Medicine and Healthcare, Smart Innovation, Systems and Technologies},
 pages = {25-35},
 title = {Visualization and Quantitative Analysis of Nursing Staff Trajectories Based on a Location System},
 venue = {Kyoto/Japan},
 volume = {45},
 year = {2015}
}`
            },

  {
            'id': '346',
            'author': 'Takashi Nakai, Tadamasa Takemura, Risa Sakurai, Kenichiro Fujita, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Prediction of Clinical Practices by Clinical Data of the Previous Day Using Linear Support Vector Machine',
            'year': '2015',
            'book': 'Innovation in Medicine and Healthcare, Smart Innovation, Systems and Technologies',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-international-conferences-4,
 author = {Takashi Nakai and Tadamasa Takemura and Risa Sakurai and Kenichiro Fujita and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Innovation in Medicine and Healthcare, Smart Innovation, Systems and Technologies},
 pages = {3-14},
 title = {Prediction of Clinical Practices by Clinical Data of the Previous Day Using Linear Support Vector Machine},
 venue = {Kyoto/Japan},
 volume = {45},
 year = {2015}
}`
            },

  {
            'id': '347',
            'author': 'Hitomi Yamada, Tadamasa Takemura, Takahiro Asai, Kazuya Okamoto, Tomohiro Kuroda, Shigeki Kuwata',
            'title': 'A Development of Automatic Audit System for Written Informed Consent using Machine Learning',
            'year': '2015',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-international-conferences-3,
 author = {Hitomi Yamada and Tadamasa Takemura and Takahiro Asai and Kazuya Okamoto and Tomohiro Kuroda and Shigeki Kuwata},
 booktitle = {Studies in Health Technology and Informatics},
 pages = {926},
 title = {A Development of Automatic Audit System for Written Informed Consent using Machine Learning},
 venue = {Sao Paulo/Brazil},
 volume = {216},
 year = {2015}
}`
            },

  {
            'id': '348',
            'author': 'Kenichiro Fujita, Tadamasa Takemura, Tomohiro Kuroda',
            'title': 'Study of Screen Design Principles for Visualizing Medical Records',
            'year': '2015',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-international-conferences-2,
 author = {Kenichiro Fujita and Tadamasa Takemura and Tomohiro Kuroda},
 booktitle = {Studies in Health Technology and Informatics},
 pages = {966},
 title = {Study of Screen Design Principles for Visualizing Medical Records},
 venue = {Sao Paulo/Brazil},
 volume = {216},
 year = {2015}
}`
            },

  {
            'id': '349',
            'author': 'Tomohiro Kuroda, Haruo Noma, Kazuhiko Takase, Shigeto Sasaki, Tadamasa Takemura',
            'title': 'Bluetooth Roaming for Sensor Network System in Clinical Environment',
            'year': '2015',
            'book': 'Proceedings of World Congress on Medical and Health Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-international-conferences-1,
 author = {Tomohiro Kuroda and Haruo Noma and Kazuhiko Takase and Shigeto Sasaki and Tadamasa Takemura},
 booktitle = {Proceedings of World Congress on Medical and Health Informatics},
 pages = {198-201},
 title = {Bluetooth Roaming for Sensor Network System in Clinical Environment},
 venue = {Sao Paulo/Brazil},
 year = {2015}
}`
            },

  {
            'id': '350',
            'author': 'Genta Kato, Hiroshi Tamura, Rei Goto, Kazuya Okamoto, Kazuki Yoshida, Shusuke Hiragi, Tomohiro Kuroda.',
            'title': 'An Introduction of the Database of Health Insurance Claims and Health Checkups of Japan',
            'year': '2015',
            'book': 'Academyhealth 2015 Annual Research Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-international-conferences-0,
 author = {Genta Kato and Hiroshi Tamura and Rei Goto and Kazuya Okamoto and Kazuki Yoshida and Shusuke Hiragi and Tomohiro Kuroda.},
 booktitle = {Academyhealth 2015 Annual Research Meeting},
 location = {Minneapolis, USA},
 pages = {},
 title = {An Introduction of the Database of Health Insurance Claims and Health Checkups of Japan},
 year = {2015}
}`
            },

  {
            'id': '351',
            'author': 'Tomohiro Kuroda',
            'title': 'Considering technical challenges to use EHR as EDC platform',
            'year': '2015',
            'book': 'Proceedings of Seagaia Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-9,
 author = {Tomohiro Kuroda},
 booktitle = {Proceedings of Seagaia Meeting},
 title = {Considering technical challenges to use EHR as EDC platform},
 venue = {Miyazaki/Japan},
 year = {2015}
}`
            },

  {
            'id': '352',
            'author': 'Eriko Sumi, Masayoshi Sudo, Masayuki Yokode, Masashi Kosugi, Tomohiro Kuroda',
            'title': 'Unitary management of signed letter of consent for clinical study',
            'year': '2015',
            'book': 'Proceedings of Annual Scientific Meeting of the Japanese Society of Internal Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-8,
 author = {Eriko Sumi and Masayoshi Sudo and Masayuki Yokode and Masashi Kosugi and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Scientific Meeting of the Japanese Society of Internal Medicine},
 title = {Unitary management of signed letter of consent for clinical study},
 venue = {Kyoto/Japan},
 year = {2015}
}`
            },

  {
            'id': '353',
            'author': 'Yuichi Sugiyama, Masatoshi Yoshikawa, Kazuya Okamoto, Tomohiro Kuroda, Akihiro Hamasaki',
            'title': 'Medication Pattern Mining with Time Interval',
            'year': '2015',
            'book': 'Proceedings of Annual Conference of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-7,
 author = {Yuichi Sugiyama and Masatoshi Yoshikawa and Kazuya Okamoto and Tomohiro Kuroda and Akihiro Hamasaki},
 booktitle = {Proceedings of Annual Conference of IPSJ},
 pages = {673-674},
 title = {Medication Pattern Mining with Time Interval},
 venue = {Kyoto/Japan},
 volume = {1},
 year = {2015}
}`
            },

  {
            'id': '354',
            'author': 'Tomohiro Nakano, Masahito Sugano, Kikue Sato, Tomoko Hikita, Reiko Houya, Kazuya Okamoto, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Development of Data Communication Part of Context-aware Nursing Support Mobile System',
            'year': '2015',
            'book': 'Technical Reports of IPSJ',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-6,
 author = {Tomohiro Nakano and Masahito Sugano and Kikue Sato and Tomoko Hikita and Reiko Houya and Kazuya Okamoto and Tomohiro Kuroda and Naoki Ohboshi},
 booktitle = {Technical Reports of IPSJ},
 number = {1},
 pages = {1-4},
 title = {Development of Data Communication Part of Context-aware Nursing Support Mobile System},
 venue = {Tokyo/Japan},
 year = {2015}
}`
            },

  {
            'id': '355',
            'author': 'Katsuya Takanashi, Kenta Hori, Chisako Naito, Tomohiro Kuroda',
            'title': 'Multimodal and Multichannel Sequential Analysis of Interactional Patterns in a Simulated Tele-auscultation Experiment',
            'year': '2015',
            'book': 'Technical Report of The Japanese Society for Artificial Intelligence',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-5,
 author = {Katsuya Takanashi and Kenta Hori and Chisako Naito and Tomohiro Kuroda},
 booktitle = {Technical Report of The Japanese Society for Artificial Intelligence},
 number = {05},
 pages = {29-34},
 title = {Multimodal and Multichannel Sequential Analysis of Interactional Patterns in a Simulated Tele-auscultation Experiment},
 venue = {Tokyo/Japan},
 year = {2015}
}`
            },

  {
            'id': '356',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Haruo Noma',
            'title': 'Utilize Location Data in Hospital Information System',
            'year': '2015',
            'book': 'Proceedings of The Institute of Electronics, Information and Communication Engineers Human Communication Group Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-42,
 author = {Tomohiro Kuroda and Tadamasa Takemura and Haruo Noma},
 booktitle = {Proceedings of The Institute of Electronics, Information and Communication Engineers Human Communication Group Symposium},
 pages = {170-173},
 title = {Utilize Location Data in Hospital Information System},
 venue = {Toyama/Japan},
 year = {2015}
}`
            },

  {
            'id': '357',
            'author': 'Mika Nishihara, Kohei Matsumura, Haruo Noma, Kazuko Nishizawa, Tomohiro Kuroda',
            'title': 'Development of Training Simulator for Neonatal Resuscitation',
            'year': '2015',
            'book': 'Correspondences on Human Interface',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-41,
 author = {Mika Nishihara and Kohei Matsumura and Haruo Noma and Kazuko Nishizawa and Tomohiro Kuroda},
 booktitle = {Correspondences on Human Interface},
 number = {9},
 pages = {11-14},
 title = {Development of Training Simulator for Neonatal Resuscitation},
 venue = {Kyoto/Japan},
 volume = {17},
 year = {2015}
}`
            },

  {
            'id': '358',
            'author': 'Hitomi Yamada, Tadamasa Takemura, Takahiro Asai, Kazuya Okamoto, Tomohiro Kuroda, Hiroshi Narazaki, Shigeki Kuwata',
            'title': 'Speculation about relationship between improper informed consent and medical record description from trends of factual finding in recent precedent',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-40,
 author = {Hitomi Yamada and Tadamasa Takemura and Takahiro Asai and Kazuya Okamoto and Tomohiro Kuroda and Hiroshi Narazaki and Shigeki Kuwata},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {844-845},
 title = {Speculation about relationship between improper informed consent and medical record description from trends of factual finding in recent precedent},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '359',
            'author': 'Ryosuke Sawano, Masatoshi Yoshikawa, Akihiro Hamasaki, Kazuya Okamoto, Yoshihiro Kuroda',
            'title': 'Evaluating Importance of EMR Articles based on Access Logs and Writing Clinical Staffs',
            'year': '2015',
            'book': 'Proceedings of Forum on Data Engineering and Information Management',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-4,
 author = {Ryosuke Sawano and Masatoshi Yoshikawa and Akihiro Hamasaki and Kazuya Okamoto and Yoshihiro Kuroda},
 booktitle = {Proceedings of Forum on Data Engineering and Information Management},
 title = {Evaluating Importance of EMR Articles based on Access Logs and Writing Clinical Staffs},
 venue = {Koriyama/Japan},
 year = {2015}
}`
            },

  {
            'id': '360',
            'author': 'Naoki Mihara, Shirou Manabe, Eizen Kimura, Tomohiro Kuroda, Yasushi Matsumura',
            'title': 'Assessment of the safe backup and disaster recovery of medical documents in the DACS (Document Archiving and Communication System) with secret sharing',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-39,
 author = {Naoki Mihara and Shirou Manabe and Eizen Kimura and Tomohiro Kuroda and Yasushi Matsumura},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {780-782},
 title = {Assessment of the safe backup and disaster recovery of medical documents in the DACS (Document Archiving and Communication System) with secret sharing},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '361',
            'author': 'Kenichiro Fujita, Tadamasa Takemura, Takashi Nakai, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Analysis of EMR Usage from the Informal Terminal toward Context Awareness in EMR',
            'year': '2015',
            'book': 'pp.494-497',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-38,
 author = {Kenichiro Fujita and Tadamasa Takemura and Takashi Nakai and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {pp.494-497},
 title = {Analysis of EMR Usage from the Informal Terminal toward Context Awareness in EMR},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '362',
            'author': 'Kazuya Okamoto, Yukiko Mori, Genta Kato, Tomohiro Kuroda, Manabu Muto',
            'title': 'Reconstruction of Japanese Receipt Data to Investigate Actual Treatments for Stomach Cancer',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-37,
 author = {Kazuya Okamoto and Yukiko Mori and Genta Kato and Tomohiro Kuroda and Manabu Muto},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {606-608},
 title = {Reconstruction of Japanese Receipt Data to Investigate Actual Treatments for Stomach Cancer},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '363',
            'author': 'Kosuke Sasai, Mika Ishii, Nobuyoshi Abe, Naoki Mihara, Toshinari Nakano, Sawako Uchida, Shinya Nakajima, Haruhiko Hiramatsu, Tomohiro Kuroda, Hiroo Tamagawa, Keunsik Park, Yasushi Matsumura, Masaki Miyamoto',
            'title': 'Development of the diagnostic imaging support system using the knowledge base',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-36,
 author = {Kosuke Sasai and Mika Ishii and Nobuyoshi Abe and Naoki Mihara and Toshinari Nakano and Sawako Uchida and Shinya Nakajima and Haruhiko Hiramatsu and Tomohiro Kuroda and Hiroo Tamagawa and Keunsik Park and Yasushi Matsumura and Masaki Miyamoto},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {1292-1295},
 title = {Development of the diagnostic imaging support system using the knowledge base},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '364',
            'author': 'Waon Yoshihara, Tadamasa Takemura, Kenichiro Fujita, Tomoko Hikita, Ayako Kajimura, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Current analysis of a GUI and consideration of usability in an electronic medical record system',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-35,
 author = {Waon Yoshihara and Tadamasa Takemura and Kenichiro Fujita and Tomoko Hikita and Ayako Kajimura and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {506-507},
 title = {Current analysis of a GUI and consideration of usability in an electronic medical record system},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '365',
            'author': 'Genta Kato, Tomohiro Kuroda',
            'title': 'An introduction of the process of launching national insurance claims database (NDB) on-site research center',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-34,
 author = {Genta Kato and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {96-97},
 title = {An introduction of the process of launching national insurance claims database (NDB) on-site research center},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '366',
            'author': 'Takashi Nakai, Tadamasa Takemura, Risa Sakurai, Kenichiro Fujita, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'A study of prediction using Clinical Practices of the Previous Day and Linear Support Vector Machine',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-33,
 author = {Takashi Nakai and Tadamasa Takemura and Risa Sakurai and Kenichiro Fujita and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {268-269},
 title = {A study of prediction using Clinical Practices of the Previous Day and Linear Support Vector Machine},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '367',
            'author': 'Risa Sakurai, Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Attempt to Mapper From DPC data to openEHR/Archetype',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-32,
 author = {Risa Sakurai and Tadamasa Takemura and Naoto Kume and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {254-255},
 title = {Attempt to Mapper From DPC data to openEHR/Archetype},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '368',
            'author': 'Samar El Helou, Naoto Kume, Yuki Uranishi, Shinji Kobayashi, Eiji Kondo, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Design of Archetype-based Clinical Concept Models: Towards Interoperable Antenatal Care EHR Systems',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-31,
 author = {Samar El Helou and Naoto Kume and Yuki Uranishi and Shinji Kobayashi and Eiji Kondo and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {250-253},
 title = {Design of Archetype-based Clinical Concept Models: Towards Interoperable Antenatal Care EHR Systems},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '369',
            'author': 'Mao Suzuki, Asuka Wakao, Kohei Matsumura, Haruo Noma, Masahiro Tada, Tomohiro Kuroda',
            'title': 'A Method to Motivate and Keep the Habit of Daily Exercise',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-30,
 author = {Mao Suzuki and Asuka Wakao and Kohei Matsumura and Haruo Noma and Masahiro Tada and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {208-209},
 title = {A Method to Motivate and Keep the Habit of Daily Exercise},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '370',
            'author': 'Misa Esashi, Haruo Noma, Tomohiro Kuroda',
            'title': 'Development of Sensor Network for Collecting Information from the Real-world at the Hospital',
            'year': '2015',
            'book': 'Proceedings of Interaction',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-3,
 author = {Misa Esashi and Haruo Noma and Tomohiro Kuroda},
 booktitle = {Proceedings of Interaction},
 pages = {248-249},
 title = {Development of Sensor Network for Collecting Information from the Real-world at the Hospital},
 venue = {Tokyo/Japan},
 year = {2015}
}`
            },

  {
            'id': '371',
            'author': 'Ayako Kajimura, Tadamasa Takemura, Tomoko Hikita, Kenichiro Fujita, Waon Yoshihara, Akane Hashiya, Tomohiro Kuroda',
            'title': 'Analysis of actual electronic-medical-record-use before nurses start day-shifts',
            'year': '2015',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-29,
 author = {Ayako Kajimura and Tadamasa Takemura and Tomoko Hikita and Kenichiro Fujita and Waon Yoshihara and Akane Hashiya and Tomohiro Kuroda},
 booktitle = {Proceedings of Joint Conference on Medical Informatics},
 pages = {438-439},
 title = {Analysis of actual electronic-medical-record-use before nurses start day-shifts},
 venue = {Ginowan/Japan},
 year = {2015}
}`
            },

  {
            'id': '372',
            'author': 'Kazuya Okamoto, Yukiko Mori, Genta Kato, Tomohiro Kuroda, Manabu Muto',
            'title': 'The Construction of Data Mart to Analyze Japanese Receipt Information of Stomach Cancer Cases',
            'year': '2015',
            'book': 'Proceedings of Annual Meeting of Japan Society of Clinical Oncology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-28,
 author = {Kazuya Okamoto and Yukiko Mori and Genta Kato and Tomohiro Kuroda and Manabu Muto},
 booktitle = {Proceedings of Annual Meeting of Japan Society of Clinical Oncology},
 title = {The Construction of Data Mart to Analyze Japanese Receipt Information of Stomach Cancer Cases},
 venue = {Kyoto/Japan},
 year = {2015}
}`
            },

  {
            'id': '373',
            'author': 'Manabu Muto, Yukiko Mori, Masashi Kanai, Shigemi Matsumoto, Tomohiro Sakuma, Tomoyoshi Koyanagi, Kazuya Okamoto, Genta Kato, Tomohiro Kuroda, Satoshi Morita, Masashi Kosugi, Keiko Tamon, Kei Taneishi, Yasushi Okuno, Akifumi Takaori',
            'title': 'Clinical Bio-bank, Clinical Sequencing, and Big-data Analysis in Kyoto University Hospital',
            'year': '2015',
            'book': 'Proceedings of Annual Meeting of Japan Society of Clinical Oncology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-27,
 author = {Manabu Muto and Yukiko Mori and Masashi Kanai and Shigemi Matsumoto and Tomohiro Sakuma and Tomoyoshi Koyanagi and Kazuya Okamoto and Genta Kato and Tomohiro Kuroda and Satoshi Morita and Masashi Kosugi and Keiko Tamon and Kei Taneishi and Yasushi Okuno and Akifumi Takaori},
 booktitle = {Proceedings of Annual Meeting of Japan Society of Clinical Oncology},
 title = {Clinical Bio-bank, Clinical Sequencing, and Big-data Analysis in Kyoto University Hospital},
 venue = {Kyoto/Japan},
 year = {2015}
}`
            },

  {
            'id': '374',
            'author': 'Masashi Kanai, Tomohiro Sakuma, Koji Yanagisawa, Kentaro Matsushima, Tomoyoshi Koyanagi, Shigemi Matsumoto, Tomohiro Kuroda, Satoshi Morita, Masashi Kosugi, Yasushi Okuno, Manabu Muto',
            'title': 'The Frist Introduction of Clinical Sequence using Exhaustive Gene Mutation Panel in Japan',
            'year': '2015',
            'book': 'Proceedings of Annual Meeting of Japan Society of Clinical Oncology',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-26,
 author = {Masashi Kanai and Tomohiro Sakuma and Koji Yanagisawa and Kentaro Matsushima and Tomoyoshi Koyanagi and Shigemi Matsumoto and Tomohiro Kuroda and Satoshi Morita and Masashi Kosugi and Yasushi Okuno and Manabu Muto},
 booktitle = {Proceedings of Annual Meeting of Japan Society of Clinical Oncology},
 title = {The Frist Introduction of Clinical Sequence using Exhaustive Gene Mutation Panel in Japan},
 venue = {Kyoto/Japan},
 year = {2015}
}`
            },

  {
            'id': '375',
            'author': 'Genta Kato, Toshihiko Masui, Shintaro Yagi, Miho Nishii, Hiroshi Tamura, Toshimi Kaido, Hideaki Okajima, Tomohiro Kuroda, Toshio Heike, Shinji Uemoto',
            'title': 'How to make transplantation sustainable ?',
            'year': '2015',
            'book': 'Proceedings of Annual Congress of the Japanese Society for Transplantation',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-25,
 author = {Genta Kato and Toshihiko Masui and Shintaro Yagi and Miho Nishii and Hiroshi Tamura and Toshimi Kaido and Hideaki Okajima and Tomohiro Kuroda and Toshio Heike and Shinji Uemoto},
 booktitle = {Proceedings of Annual Congress of the Japanese Society for Transplantation},
 pages = {287},
 title = {How to make transplantation sustainable ?},
 venue = {Kumamoto/Japan},
 year = {2015}
}`
            },

  {
            'id': '376',
            'author': 'Tuukka Karvonen, Yuki Uranishi, Tatsunori Sakamoto, Yosuke Tona, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Estimation of the degree of endolymphatic hydrops using optical coherence tomography',
            'year': '2015',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-24,
 author = {Tuukka Karvonen and Yuki Uranishi and Tatsunori Sakamoto and Yosuke Tona and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {134},
 title = {Estimation of the degree of endolymphatic hydrops using optical coherence tomography},
 venue = {Okayama/Japan},
 year = {2015}
}`
            },

  {
            'id': '377',
            'author': 'Kenichiro Fujita, Tadamasa Takemura, Katsumi Onishi, Tomohiro Kuroda',
            'title': 'The Improvement of EHR User Experience by Screen Design Principles',
            'year': '2015',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-23,
 author = {Kenichiro Fujita and Tadamasa Takemura and Katsumi Onishi and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {148},
 title = {The Improvement of EHR User Experience by Screen Design Principles},
 venue = {Okayama/Japan},
 year = {2015}
}`
            },

  {
            'id': '378',
            'author': 'Mao Suzuki, Asuka Wakao, Kohei Matsumura, Haruo Noma, Masahiro Tada, Tomohiro Kuroda',
            'title': 'Working as a Team Makes Walking Daily Habit - an Exploratory Study',
            'year': '2015',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-22,
 author = {Mao Suzuki and Asuka Wakao and Kohei Matsumura and Haruo Noma and Masahiro Tada and Tomohiro Kuroda},
 booktitle = {Proceedings of Symposium on Medical and Biological Engineering},
 pages = {91},
 title = {Working as a Team Makes Walking Daily Habit - an Exploratory Study},
 venue = {Okayama/Japan},
 year = {2015}
}`
            },

  {
            'id': '379',
            'author': 'Tuukka Karvonen, Yuki Uranishi, Tatsunori Sakamoto, Yosuke Tona, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Segmentation of Cochlear Structure in Optical Coherence Tomography Images',
            'year': '2015',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-21,
 author = {Tuukka Karvonen and Yuki Uranishi and Tatsunori Sakamoto and Yosuke Tona and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {39-40},
 title = {Segmentation of Cochlear Structure in Optical Coherence Tomography Images},
 venue = {Kyoto/Japan},
 year = {2015}
}`
            },

  {
            'id': '380',
            'author': 'Yu Maruyama, Yuki Uranishi, Chisako Naito, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Estimating Angle and Depth of Needle for Blood Collection Training',
            'year': '2015',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-20,
 author = {Yu Maruyama and Yuki Uranishi and Chisako Naito and Kazuya Okamoto and Hiroshi Tamura and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality},
 pages = {13},
 title = {Estimating Angle and Depth of Needle for Blood Collection Training},
 venue = {Kyoto/Japan},
 year = {2015}
}`
            },

  {
            'id': '381',
            'author': 'Tomohiro Kuroda, Kikuo Hirano, Kazushige Sugimura, Satoshi Adachi, Hidetsugu Igarashi, Kazuo Ueshima',
            'title': 'Developing 12-lead ECG textile -Project NISHIJIN-',
            'year': '2015',
            'book': 'Proceedings of Research Meeting for 12-lead ECG transmission',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-2,
 author = {Tomohiro Kuroda and Kikuo Hirano and Kazushige Sugimura and Satoshi Adachi and Hidetsugu Igarashi and Kazuo Ueshima},
 booktitle = {Proceedings of Research Meeting for 12-lead ECG transmission},
 pages = {5},
 title = {Developing 12-lead ECG textile -Project NISHIJIN-},
 venue = {Tokyo/Japan},
 volume = {2},
 year = {2015}
}`
            },

  {
            'id': '382',
            'author': 'Mao Suzuki, Asuka Wakao, Kohei Matsumura, Haruo Noma, Osamu Sugiyama, Masahiro Tada, Tomohiro Kuroda',
            'title': 'Tekupeko : a System Promotes Users to Acquire Daily Walking Habit',
            'year': '2015',
            'book': 'Proceedings of Human Interface Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-19,
 author = {Mao Suzuki and Asuka Wakao and Kohei Matsumura and Haruo Noma and Osamu Sugiyama and Masahiro Tada and Tomohiro Kuroda},
 booktitle = {Proceedings of Human Interface Symposium},
 pages = {583-588},
 title = {Tekupeko : a System Promotes Users to Acquire Daily Walking Habit},
 venue = {Hakodate/Japan},
 year = {2015}
}`
            },

  {
            'id': '383',
            'author': 'Shusuke Hiragi, Hiroshi Tamura, Genta Kato, Rei Goto, Kazuya Okamoto, Kiyoshi Suzuma, Nagahisa Yoshimura, Tomohiro Kuroda',
            'title': 'Survey on Laser Treatment for Diabetic Retinopathy using Sampling Dataset from Healthcare Insurance Claim and Specific Health Checkup Database (NDB)',
            'year': '2015',
            'book': 'Proceedings of Annual Meeting of Kansai Society for Laser Surgery and Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-18,
 author = {Shusuke Hiragi and Hiroshi Tamura and Genta Kato and Rei Goto and Kazuya Okamoto and Kiyoshi Suzuma and Nagahisa Yoshimura and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Meeting of Kansai Society for Laser Surgery and Medicine},
 pages = {19},
 title = {Survey on Laser Treatment for Diabetic Retinopathy using Sampling Dataset from Healthcare Insurance Claim and Specific Health Checkup Database (NDB)},
 venue = {Kyoto/Japan},
 year = {2015}
}`
            },

  {
            'id': '384',
            'author': 'Yu Uneno, Kei Taneishi, Masashi Kanai, Keiko Tamon, Kazuya Okamoto, Akira Nozaki, Daisuke Yamaguchi, Yoshitaka Nishikawa, Teruko Tomono, Masatoshi Hamanaka, J.B. Brown, Shigemi Matsumoto, Tomohiro Kuroda, Yasushi Okuno, Manabu Muto',
            'title': 'Establishment of a Terminal Prognosis Prediction Model by applying Time Series Analysis to Real-World Data',
            'year': '2015',
            'book': 'Proceedings of The Japanese Society of Medical Oncology Annual Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-17,
 author = {Yu Uneno and Kei Taneishi and Masashi Kanai and Keiko Tamon and Kazuya Okamoto and Akira Nozaki and Daisuke Yamaguchi and Yoshitaka Nishikawa and Teruko Tomono and Masatoshi Hamanaka and J.B. Brown and Shigemi Matsumoto and Tomohiro Kuroda and Yasushi Okuno and Manabu Muto},
 booktitle = {Proceedings of The Japanese Society of Medical Oncology Annual Meeting},
 title = {Establishment of a Terminal Prognosis Prediction Model by applying Time Series Analysis to Real-World Data},
 venue = {Sapporo/Japan},
 year = {2015}
}`
            },

  {
            'id': '385',
            'author': 'Yukiko Mori, Kazuya Okamoto, Genta Kato, Takeshi Sugino, Masayoshi Sudo, Tomohiro Kuroda, Manabu Muto',
            'title': 'Survey of gastric cancer treatment in Japan using real world data obtained from health insurance claims',
            'year': '2015',
            'book': 'Proceedings of The Japanese Society of Medical Oncology Annual Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-16,
 author = {Yukiko Mori and Kazuya Okamoto and Genta Kato and Takeshi Sugino and Masayoshi Sudo and Tomohiro Kuroda and Manabu Muto},
 booktitle = {Proceedings of The Japanese Society of Medical Oncology Annual Meeting},
 title = {Survey of gastric cancer treatment in Japan using real world data obtained from health insurance claims},
 venue = {Sapporo/Japan},
 year = {2015}
}`
            },

  {
            'id': '386',
            'author': 'Shigemi Matsumoto, Masahiro Yakami, Kazuya Okamoto, Masashi Kanai, Kaori Togashi, Tomohiro Kuroda, Manabu Muto',
            'title': 'Setting up of a new therapeutic evaluation workflow deploying LMS（Lesion Management Solution） in oncology practice',
            'year': '2015',
            'book': 'Proceedings of The Japanese Society of Medical Oncology Annual Meeting',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-15,
 author = {Shigemi Matsumoto and Masahiro Yakami and Kazuya Okamoto and Masashi Kanai and Kaori Togashi and Tomohiro Kuroda and Manabu Muto},
 booktitle = {Proceedings of The Japanese Society of Medical Oncology Annual Meeting},
 title = {Setting up of a new therapeutic evaluation workflow deploying LMS（Lesion Management Solution） in oncology practice},
 venue = {Sapporo/Japan},
 year = {2015}
}`
            },

  {
            'id': '387',
            'author': 'Ayako Kajimura, Tadamasa Takemura, Kenichiro Fujita, Tomoko Hikita, Akane Hashiya, Tomohiro Kuroda',
            'title': 'The access log analysis of nurses’ using of electronic medical records',
            'year': '2015',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-14,
 author = {Ayako Kajimura and Tadamasa Takemura and Kenichiro Fujita and Tomoko Hikita and Akane Hashiya and Tomohiro Kuroda},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 title = {The access log analysis of nurses’ using of electronic medical records},
 venue = {Sendai/Japan},
 year = {2015}
}`
            },

  {
            'id': '388',
            'author': 'Risa Sakurai, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda',
            'title': 'Attempt to Mapping openEHR for Medical Action and Laboratory Test Results',
            'year': '2015',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-13,
 author = {Risa Sakurai and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 title = {Attempt to Mapping openEHR for Medical Action and Laboratory Test Results},
 venue = {Sendai/Japan},
 year = {2015}
}`
            },

  {
            'id': '389',
            'author': 'Kenta Hori, Katsuya Takanashi, Chisako Naito, Tomohiro Kuroda',
            'title': 'Communication Analysis of a Simulated Tele-auscultation Experiment',
            'year': '2015',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-12,
 author = {Kenta Hori and Katsuya Takanashi and Chisako Naito and Tomohiro Kuroda},
 booktitle = {Proceedings of Japan Association of Medical Infomatics Spring Conference},
 title = {Communication Analysis of a Simulated Tele-auscultation Experiment},
 venue = {Sendai/Japan},
 year = {2015}
}`
            },

  {
            'id': '390',
            'author': 'Yuki Uranishi, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Natural Color Pattern Matching for Light Direction Estimation',
            'year': '2015',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2015-domestic-conferences-11,
 author = {Yuki Uranishi and Masataka Imura and Tomohiro Kuroda and Osamu Oshiro},
 booktitle = {Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers},
 pages = {343-4},
 title = {Natural Color Pattern Matching for Light Direction Estimation},
 venue = {Osaka/Japan},
 year = {2015}
}`
            },

  {
            'id': '391',
            'author': 'Yu Maruyama, Yuki Uranishi, Chisako Naito, Kazuya Okamoto, Hiroshi Tamura, Tomohiro Kuroda',
            'title': 'Anatomical Structure Projection onto Simulator Arm for Injection Training',
            'year': '2015',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '392',
            'author': 'Tomohiro Kuroda',
            'title': 'Developing Health Promotion Program based on Wearable ICT and Collective Responsibility',
            'year': '2015',
            'book': 'Proceedings of Research Report of Health Labour Sciences Research Grant for Comprehensive Research on Lifestyle Related Diseases such as Cardiac Disease and Diabetes',
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
            'id': '393',
            'author': 'Kenta Hori, Yusuke Uchida, Maya Minami, Chisako Naito, Tomohiro Kuroda, Hideya Takahashi, Masahiko Ando, Takashi Kawamura, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Evaluation of Vision-based Remote Navigation System for Tele-auscultation',
            'year': '2014',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
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
            'id': '394',
            'author': 'Kazuya Okamoto, Hiroki Kayama, Minoru Yamada, Naoto Kume, Tomohiro Kuroda, Tomoki Aoyama',
            'title': 'Development of a system for the assessment of a dual-task performance based on a motion-capture device',
            'year': '2014',
            'book': 'The International Journal on Disability and Human Development',
            'doi': 'https://doi.org/0.1515/ijdhd-2014-0324',
            'type': 'journal',
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
            'id': '395',
            'author': 'Tomohiro Kuroda, Nodoka Nakashima, Mayuko Kaneda, Kikue Sato, Naoki Ohboshi, Ayumu Okada, Kazuya Okamoto, Hiroyuki Yoshihara, Tomoya Akiyama',
            'title': 'Evaluating the Workload Reduction of Automatic Vital Data Transmission',
            'year': '2014',
            'book': 'Advanced Biomedical Engineering',
            'doi': '',
            'type': 'journal',
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
            'id': '396',
            'author': 'Tatsuya Tokunaga, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Electronic Health Record Application Development Framework of Clinical Information Statistics',
            'year': '2014',
            'book': 'Mumps',
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
            'id': '397',
            'author': 'Hiroki Kayama, Kazuya Okamoto, Shu Nishiguchi, Minoru Yamada, Tomohiro Kuroda, Tomoki Aoyama',
            'title': 'Effect of a Kinect-based Exercise Game on Improving Executive Cognitive Performance in Community-dwelling Elderly: Case Control Study',
            'year': '2014',
            'book': 'Journal of Medical Internet Research',
            'doi': 'https://doi.org/0.2196/jmir.3108',
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
            'id': '398',
            'author': 'Tatsuya Tokunaga, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'An Application Framework for Enriching Electronic Health Records by Web Services Coordination',
            'year': '2014',
            'book': 'Journal of eHealth Technology and Application',
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
            'id': '399',
            'author': 'Shinji Kobayashi, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Designing clinical models of EHR (Electronic Health Records) for long-term care providers to elderly persons',
            'year': '2014',
            'book': 'Proceedings of AMIA Annual Symposium',
            'doi': '',
            'type': 'conference',
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
            'id': '400',
            'author': 'Ryosuke Sawano, Masatoshi Yoshikawa, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Assessment of Electronic Medical Records Highly Ranked by Scoring Algorithms using Access Logs',
            'year': '2014',
            'book': 'Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2014-international-conferences-2,
 author = {Ryosuke Sawano and Masatoshi Yoshikawa and Kazuya Okamoto and Tomohiro Kuroda},
 booktitle = {Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics},
 title = {Assessment of Electronic Medical Records Highly Ranked by Scoring Algorithms using Access Logs},
 venue = {New Delhi / India},
 year = {2014}
}`
            },

  {
            'id': '401',
            'author': 'Goshiro Yamamoto, Zeeshan Asghar, Yuki Uranishi, Takashi Taketomi, Christian Sandor, Tomohiro Kuroda, Petri Pulli, Hirokazu Kato',
            'title': 'Grid-pattern Indicating Interface for Ambient Assisted Living',
            'year': '2014',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
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
            'id': '402',
            'author': 'Naoto Kume, Shinji Kobayashi, Kenta Masuda, Tomohiro Kuroda, Kenji Araki, Hiroyuki Yoshihara',
            'title': 'Preparation of Common Test Item Master Table for Clinical Study between Plural Facilities',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '403',
            'author': 'Takashi Nakai, Tadamasa Takemura, Kenichiro Fujita, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'State definition for medical decision support system by machine learning',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '404',
            'author': 'Risa Sakurai, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda',
            'title': 'Attempt to Mapping openEHR for DPC Data as Medical Record',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '405',
            'author': 'Yu Uneno, Masashi Kanai, Keiko Tamon, Kei Taneishi, Kazuya Okamoto, Shigemi Matsumoto, Tomohiro Kuroda, Yasushi Okuno, Manabu Muto',
            'title': 'Exploratory Research on predicting therapeutic effect and side effect of anticancer drug using Electronic Patient Record Database System (CyberOncology)',
            'year': '2014',
            'book': 'Proceedings of Kyoto Workshop for Cancer Research',
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
            'id': '406',
            'author': 'Tomohiro Nakano, Nao Onose, Kikue Sato, Tomoko Hikita, Reiko Houya, Kazuya Okamoto, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Development of Situation Detection Part of Context-aware Nursing Support Mobile System',
            'year': '2014',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '407',
            'author': 'Hitomi Yamada, Tadamasa Takemura, Takahiro Asai, Kazuya Okamoto, Tomohiro Kuroda, Shigeki Kuwata',
            'title': 'Consideration of Automatic Evaluation System for Written Informed Consent',
            'year': '2014',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '408',
            'author': 'Tomohiro Kuroda, Atsushi Masuda, Tomoaki Harii, Hideya Takahashi, Eiji Shimizu',
            'title': 'Prototyping Pressure Ulcer Prevention Mattress Management System using RFID Fiber Woven Label',
            'year': '2014',
            'book': 'Proceedings of The Annual Conference of Textile Machinery Society of Japan',
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
            'id': '409',
            'author': 'Yusuke Takeuchi, Hideya Takahashi, Tomohiro Kuroda, Atsushi Masuda, Tomoaki Harii, Eiji Shimizu',
            'title': 'RFID Sensor System for Detection of Volume of Urinary Incontinence',
            'year': '2014',
            'book': 'Proceedings of The Annual Conference of Textile Machinery Society of Japan',
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
            'id': '410',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Youhei Taniguchi, Hiroyuki Yoshihara',
            'title': 'Adoption and Evaluation of Functions Enabling Templates to Connect Each Other and HIS DB',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '411',
            'author': 'Naoki Mihara, Yasushi Matsumura, Eizen Kimura, Tomohiro Kuroda, Naoto Kume, Souichi Saishu, Atsushi Sato',
            'title': 'Development of Document Backup System for DACS (Document Archiving and Communication System) By Using Secret Sharing',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '412',
            'author': 'Takahiro Asai, Hitomi Yamada, Tadamasa Takemura, Hiroshi Narazaki, Kazuya Okamoto, Tomohiro Kuroda, Shigeki Kuwata',
            'title': 'Building a consent described automated audit system in the electronic medical record system',
            'year': '2014',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '413',
            'author': 'Hitomi Yamada, Tadamasa Takemura, Takahiro Asai, Kazuya Okamoto, Tomohiro Kuroda, Hiroshi Narazaki, Shigeki Kuwata',
            'title': 'Development of Criteria for Medical Record Audits Focused on Informed Consent Descriptions',
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
            'id': '414',
            'author': 'Ayako Kajimura, Tadamasa Takemura, Kenichiro Fujita, Tomoko Hikita, Akane Taruya, Tomohiro Kuroda',
            'title': 'Analysis of the relationship of screen transition and the nursing service in Electric Medical Records',
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
            'id': '415',
            'author': 'Kenichiro Fujita, Tadamasa Takemura, Tomoko Hikita, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Study of the evaluation criteria for the screen design of electronic medical records based on the user experience',
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
            'id': '416',
            'author': 'Ryosuke Sawano, Masatoshi Yoshikawa, Akihiro Hamasaki, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Extracting Relation between Clinical Documents from Access Log',
            'year': '2014',
            'book': 'Proceedings of Forum on Data Engineering and Information Management',
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
            'id': '417',
            'author': 'Naoto Kume, Kana Eguchi, Koji Yoshimura, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Soft Tissue Ablation Model for Surgical Simulation by Applying a Combination of Multiple Hypotheses',
            'year': '2013',
            'book': 'Advanced Biomedical Engineering',
            'doi': '',
            'type': 'journal',
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
            'id': '418',
            'author': 'Seiko Tsuruoka, Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Medical Document Ranking Useful to Study Using External Information of the Documents',
            'year': '2013',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
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
            'id': '419',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume',
            'title': 'Simulating Cloud Environment for HIS backup using Secret Sharing',
            'year': '2013',
            'book': 'Studies in Health Technology and Informatics',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{2013-journal-papers-7,
 author = {Tomohiro Kuroda and Eizen Kimura and Yasushi Matsumura and Yoshinori Yamashita and Haruhiko Hiramatsu and Naoto Kume},
 journal = {Studies in Health Technology and Informatics},
 pages = {171-174},
 title = {Simulating Cloud Environment for HIS backup using Secret Sharing},
 year = {2013}
}`
            },

  {
            'id': '420',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Naoto Kume, Takayuki Adachi, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'Qualitative Evaluation of the Supporting System for Diagnosis Procedure Combination Code Selection',
            'year': '2013',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '421',
            'author': 'Tadamasa Takemura, Toshiyuki Tanaka, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'The Development of a Multiplayer Game for Education of Hospital Management',
            'year': '2013',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '422',
            'author': 'Sachiko Okada, Keisuke Nagase, Akiko Ito, Masahiko Ando, Yoshiaki Nakagawa, Kazuya Okamoto, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of a methodology for the detection of hospital financial outliers using information systems',
            'year': '2013',
            'book': 'International Journal of Health Planning and Management',
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
            'id': '423',
            'author': 'Tomohiro Kuroda, Haruo Noma, Chisako Naito, Masahiro Tada, Hiroe Yamanaka, Tadamasa Takemura, Kazuko Nin, Hiroyuki Yoshihara',
            'title': 'Prototyping Sensor Network System for Automatic Vital Signs Collection -Evaluation of a Location Based Automated Assignment of Measured Vital Signs to Patients-',
            'year': '2013',
            'book': 'Methods of Information in Medicine',
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
            'id': '424',
            'author': 'Naoto Kume, Kana Eguchi, Tomohiro Kuroda, Koji Yoshimura, Kazutoshi Okubo, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Rupture Progression Model of Stress Integration for Virtual Reality Ablation',
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
            'id': '425',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume',
            'title': 'Feasibility Study of HIS Backup Cloud based on Secret Sharing',
            'year': '2013',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '426',
            'author': 'Tadamasa Takemura, Haruo Noma, Tomohiro Kuroda, Masahiro Tada, Naoto Kume, Kazuya Okamoto, Tomoko Hikita, Hiroyuki Yoshihara',
            'title': 'Ubiquitous Sensor Network Environment in Hospital using BT-AP Antenna',
            'year': '2013',
            'book': 'Japanese Journal of Telemedicine and Telecare',
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
            'id': '427',
            'author': 'Masahiro Yakami, Tomohiro Kuroda, Takeshi Kubo, Yutaka Emoto, Hiroyuki Yoshihara, Kaori Togashi',
            'title': 'Development and Evaluation of an End-User System for Retrieving Case Data from a Hospital Information System Supporting Complex Search Conditions Involving Multiple Data Tables',
            'year': '2013',
            'book': 'Advanced Biomedical Engineering',
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
            'id': '428',
            'author': 'Hitomi Yamada, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Shigeki Kuwata',
            'title': 'A Study of Automatic Evaluation System for Written Informed Consent using Machine Learning',
            'year': '2013',
            'book': 'IEEE EMBC Short Papers',
            'doi': '',
            'type': 'conference',
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
            'id': '429',
            'author': 'Kikue Sato, Tomohiro Kuroda, Tadamasa Takemura, Akitoshi Seiyama',
            'title': 'Feasibility Assessment of Bluetooth Based Location System for Workflow Analysis of Nursing Staff',
            'year': '2013',
            'book': 'IEEE EMBC Short Papers',
            'doi': '',
            'type': 'conference',
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
            'id': '430',
            'author': 'Tuukka Karvonen, Tapio Seppanen, Suvi Tiinanen, Antti Kiviniemi, Kazuya Okamoto, Tomohiro Kuroda, Mikko Tulppo',
            'title': 'Ultrasound Image Analysis for Assessment of Flow-mediated Dilation of Human Arteries',
            'year': '2013',
            'book': 'IEEE EMBC Short Papers',
            'doi': '',
            'type': 'conference',
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
            'id': '431',
            'author': 'Kenta Hori, Yusuke Uchida, Tsukasa Kan, Maya Minami, Chisako Naito, Tomohiro Kuroda, Hideya Takahashi, Masahiko Ando, Takashi Kawamura, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Tele-Auscultation Support System with Mixed Reality Navigation',
            'year': '2013',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
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
            'id': '432',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume, Atsushi Sato',
            'title': 'Applying Secret Sharing for HIS Backup Exchange',
            'year': '2013',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
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
            'id': '433',
            'author': 'Tomohiro Kuroda, Kikuo Hirano, Kazushige Sugimura, Satoshi Adachi, Hidetsugu Igarashi, Kazuo Ueshima, Hideo Nakamura, Masayuki Nambu, Takahiro Doi',
            'title': 'Applying NISHIJIN Historical Textile Technique for e-Textile',
            'year': '2013',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
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
            'id': '434',
            'author': 'Hiroki Kayama, Kazuya Okamoto, Shu Nishiguchi, Minoru Yamada, Tomohiro Kuroda, Tomoki Aoyama',
            'title': 'Effect of a Kinect-based exercise game on improving executive cognitive performance in community-dwelling elderly',
            'year': '2013',
            'book': 'Proceedings of International Conference on Pervasive Computing Technologies for Healthcare, USB Proceedings',
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
            'id': '435',
            'author': 'Tomohiro Kuroda, Yusuke Uchida, Tsukasa Kan, Maya Minami, Chisako Naito, Kenta Hori, Hideya Takahashi, Masahiko Ando, Takashi Kawamura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Mixed Reality Navigation for Tele-Auscultation',
            'year': '2013',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality, USB Proceeding',
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
            'id': '436',
            'author': 'Tomohiro Kuroda, Yoshihiro Kuroda, Kenta Hori, Naoki Ohboshi',
            'title': 'How AR Reforms Social Medical System?',
            'year': '2013',
            'book': 'Proceedings of International Display Workshops',
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
            'id': '437',
            'author': 'Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'The Electronic Health Record as a Clinical Study Information Hub',
            'year': '2013',
            'book': 'Proceedings of International Joint Conference on Natural Language Processing',
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
            'id': '438',
            'author': 'Tomohiro Kuroda, Kenta Hori, Kazuya Okamoto',
            'title': 'Introducing Multi-media Communication for Regional Medicine: Nagahama Telemedicine Project',
            'year': '2013',
            'book': 'Proceedings of Internatonal Society for Telemedicine and eHealth International Conference',
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
            'id': '439',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume',
            'title': 'Simulating Cloud Environment for HIS backup using Secret Sharing',
            'year': '2013',
            'book': 'Proceedings of World Congress on Medical and Health Informatics',
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
            'id': '440',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Naoto Kume, Takayuki Adachi, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'Qualitative Evaluation of the Supporting System for Diagnosis Procedure Combination Code Selection',
            'year': '2013',
            'book': 'Proceedings of World Congress on Medical and Health Informatics',
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
            'id': '441',
            'author': 'Tadamasa Takemura, Toshiyuki Tanaka, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'The Development of a Multiplayer Game for Education of Hospital Management',
            'year': '2013',
            'book': 'Proceedings of World Congress on Medical and Health Informatics',
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
            'id': '442',
            'author': 'Naoto Kume, Shirou Manabe, Yasushi Matsumura, Kenji Araki, Katsuhiko Takabayashi, Yoshinari Shima, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Distributed Clinical Study Database for Traversal Search of the Accounting Information and Laboratory Test Results',
            'year': '2013',
            'book': 'IEEE EMBC Short Papers',
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
            'id': '443',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of a Hypothesis-generating Support System using Medical Records for Clinical Knowledge Acquisition',
            'year': '2013',
            'book': 'IEEE EMBC Short Papers',
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
            'id': '444',
            'author': 'Kana Eguchi, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazutoshi Okubo, Kazuya Okamoto, Hiroyuki Yoshihara',
            'title': 'Rupture progression model of stress integration for VR ablation',
            'year': '2013',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '445',
            'author': 'Atsuo Sawada, Koji Yoshimura, Hiroki Murata, Naoto Kume, Tomohiro Kuroda',
            'title': 'Developing Explanation Support System based on Virtual Reality -Process Visualization of Pelvic Organ Prolapse-',
            'year': '2013',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '446',
            'author': 'Seiko Tsuruoka, Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Medical Document Ranking Useful to Study using External Information of the Documents',
            'year': '2013',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '447',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume',
            'title': 'Feasibility Study of HIS Backup Cloud based on Secret Sharing',
            'year': '2013',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '448',
            'author': 'Kikue Sato, Tomohiro Kuroda, Tadamasa Takemura',
            'title': 'Quantitative Analysis of Staff Trajectory based on Location System using Bluetooth',
            'year': '2013',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '449',
            'author': 'Tomohiro Kuroda, Kikuo Hirano, Kazushige Sugimura, Satoshi Adachi, Hidetsugu Igarashi, Kazuo Ueshima',
            'title': 'Prototyping e-Textile Underwear for 12-lead Electrocardiograph using Traditional Weaving Technique 2nd Report',
            'year': '2013',
            'book': 'Proceedings of The Annual Conference of Textile Machinery Society of Japan',
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
            'id': '450',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Haruo Noma',
            'title': 'Implementing Ubiquitous Sensor Network into Clinical Environment',
            'year': '2013',
            'book': 'Proceedings of IEICE General Conference',
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
            'id': '451',
            'author': 'Masashi Kanai, Keiko Furukawa, Shigemi Matsumoto, Atsushi Yonezawa, Tomohiro Kuroda, Tatsuaki Yonezawa, Shuichi Shiga, Hironori Haga, Masashi Kosugi, Satoshi Ichiyama, Hiroyuki Yoshihara, Kazuo Matsubara, Tsutomu Chiba, Manabu Muto',
            'title': 'Kyoto University Hospital Cancer Center, Bio-bank and -informatics for Cancer (BIC) Project',
            'year': '2013',
            'book': 'Proceedings of Kyoto Workshop for Cancer Research',
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
            'id': '452',
            'author': 'Yoshihiro Umehara, Masatoshi Yoshikawa, Tomohiro Kuroda, Kazuya Okamoto, Naoto Kume, Hiroyuki Yoshihara',
            'title': 'Study on platform for therapeutic value analysis of medicine based on electronic patient record',
            'year': '2013',
            'book': 'Technical Reports of IPSJ',
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
            'id': '453',
            'author': 'Naoto Kume, Yasutomo Kawata, Shirou Manabe, Yoshinari Shima, Yasushi Matsumura, Kenji Araki, Katsuhiko Takabayashi, Kazuya Okamoto, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Problems toward Sharing Laboratory Data Between Hospitals',
            'year': '2013',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
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
            'id': '454',
            'author': 'Takuya Uwate, Tadamasa Takemura, Kazuya Okamoto, Tatsuya Tokunaga, Naoto Kume, Tomohiro Kuroda, Masumi Azuma, Naoki Ohboshi, Hiroyuki Yoshihara, Haruhiko Nishimura',
            'title': 'Development of Mediation Support System using EHR and Social Media System',
            'year': '2013',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '455',
            'author': 'Tomohiro Nakano, Nao Onose, Kikue Sato, Tomoko Hikita, Reiko Houya, Kazuya Okamoto, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Development of Context-aware Nursing Support Mobile System',
            'year': '2013',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '456',
            'author': 'Tadamasa Takemura, Hitomi Yamada, Kazuya Okamoto, Tomohiro Kuroda, Kazuo Nakazawa, Shigeki Kuwata',
            'title': 'Development of Automatic Evaluation System for Written Informed Consent on Electronic Medical Record System',
            'year': '2013',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '457',
            'author': 'Tomohiro Kuroda, Kenji Araki, Yoshiyau Okuhara, Eizen Kimura, Toru Kumai, Naoto Kume, Atsushi Sato, Tadahiro Shimogawa, Yutaka Hatakeyama, Haruhiko Hiramatsu, Yasushi Matsumura, Yoshinori Yamashita',
            'title': 'Basic Strategy of HIS data backup',
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
            'id': '458',
            'author': 'Tomohiro Kuroda, Hiroaki Iwamaru, Kenji Masaki, Kazuya Okamoto',
            'title': 'Study and Validation of the Cloud Print System under Virtual Desktop Infrastructure',
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
            'id': '459',
            'author': 'Atsushi Sato, Eizen Kimura, Tomohiro Kuroda',
            'title': 'Improving the Performance of Secret Sharing Backup System by Applying Compression and Differential Methods on HIS data',
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
            'id': '460',
            'author': 'Takashi Yamamoto, Kenichi Murakami, Yoji Okada, Tomohiro Miyasaka, Kazuya Okamoto, Tomohiro Kuroda',
            'title': 'Dynamic Control of Wireless Network Configuration Considering Priority of Medical Device Communication',
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
            'id': '461',
            'author': 'Tomohiro Kuroda, Nodoka Nakashima, Mayuko Kaneda, Kikue Sato, Naoki Ohboshi, Ayumu Okada, Kazuya Okamoto, Hiroyuki Yoshihara, Tomoya Akiyama',
            'title': 'Evaluating the Workload Reduction from Automatic Vital Data Transmission',
            'year': '2013',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '462',
            'author': 'Tomohiro Kuroda, Kikue Sato, Tadamasa Takemura, Kazuya Okamoto, Akitoshi Seiyama',
            'title': 'Visualization of nursing staff\'s workflow for management with location system',
            'year': '2013',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '463',
            'author': 'Risa Sakurai, Tadamasa Takemura, Hiroshi Tamura, Tomohiro Kuroda, Hideyuki Horio, Kazuhiko Yamashita',
            'title': 'Developing Computerized Contrast-sensitivity Test for Early Diagnosis of Cataract',
            'year': '2013',
            'book': 'Proceedings of Annual Conference of M Technology Association Japan',
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
            'id': '464',
            'author': 'Hironobu Murano, Masashi Kotani, Kunihiro Terazawa, Tomohiro Kuroda, Nobuya Inagaki, Hiroyuki Yoshihara',
            'title': 'Publication for Administrative Improvement -Activities of Office for Hospital Strategic Planning-',
            'year': '2013',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
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
            'id': '465',
            'author': 'Tomohiro Kuroda, Hiroshi Sasaki, Takatoshi Suenaga, Yasushi Masuda, Yoshihiro Yasumuro, Kenta Hori, Naoki Ohboshi, Tadamasa Takemura, Kunihiro Chihara, Hiroyuki Yoshihara',
            'title': 'Embedded Ubiquitous Services on Hospital Information Systems',
            'year': '2012',
            'book': 'IEEE Transactions on Information Technology in Biomedicine',
            'doi': '',
            'type': 'journal',
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
            'id': '466',
            'author': 'Tadamasa Takemura, Toshiyuki Tanaka, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'The Development of a Multiplayer Game for Education of Hospital Management',
            'year': '2012',
            'book': 'Japanese Journal of Telemedicine and Telecare',
            'doi': '',
            'type': 'journal',
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
            'id': '467',
            'author': 'Yusuke Uchida, Tomohiro Kuroda, Tsukasa Kan, Hideya Takahashi, Kenta Hori, Naoto Kume, Masahiko Ando, Takashi Kawamura, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Constructing an Information Support System for Remote Ausculation',
            'year': '2012',
            'book': 'Japanese Journal of Telemedicine and Telecare',
            'doi': '',
            'type': 'journal',
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
            'id': '468',
            'author': 'Kenta Hori, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'JPEG2000 Multi-scale Video Streaming System for Total Information Transmission Control in Telemedicine',
            'year': '2012',
            'book': 'Japanese Journal of Telemedicine and Telecare',
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
            'id': '469',
            'author': 'Tadamasa Takemura, Kenji Araki, Kenji Arita, Toshiaki Suzuki, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Akira Takada, Hiroyuki Yoshihara',
            'title': 'Development of Fundamental Infrastructure for Nationwide EHR in Japan',
            'year': '2012',
            'book': 'Journal of Medical Systems',
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
            'id': '470',
            'author': 'Tomohiro Kuroda, Kenta Hori, Masahiko Ando, Takashi Kawamura, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Designing Smooth Communication Environment for Telemedicine for General Practitioner',
            'year': '2012',
            'book': 'Manabu Okumura(Ed.), Revised Selected Papers of International Workshop on Multimodality in Multispace Interation, JSAI International Symposia on AI',
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
            'id': '471',
            'author': 'Kazuya Okamoto, Hiroko Tanaka, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of a Hypothesis-finding Support System using Medical Records for Clinical Knowledge Acquisition',
            'year': '2012',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '472',
            'author': 'Yuta Yamane, Kenta Hori, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Multiscale Video Streaming System for Application Level Total QoS Control',
            'year': '2012',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '473',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of an environment for information reuse on a hospital information system',
            'year': '2012',
            'book': 'Proceedings of the International Conference on Soft Computing and Intelligent Systems and the International Symposium on Advanced Intelligent Systems',
            'doi': '',
            'type': 'conference',
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
            'id': '474',
            'author': 'Hiroyuki Yoshihara, Naoto Kume, Tomohiro Kuroda',
            'title': 'The History of MML (Medical Markup Language) and its Application for EHR (Dolphin Project) in Japan',
            'year': '2012',
            'book': 'Proceedings of International Conference on Open Data and Information for a Changing Planet, Web Proceedings',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-international-conferences-8,
 author = {Hiroyuki Yoshihara and Naoto Kume and Tomohiro Kuroda},
 booktitle = {Proceedings of International Conference on Open Data and Information for a Changing Planet, Web Proceedings},
 title = {The History of MML (Medical Markup Language) and its Application for EHR (Dolphin Project) in Japan},
 venue = {Taipei/ROC},
 year = {2012}
}`
            },

  {
            'id': '475',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Takayuki Adachi, Naoto Kume, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'Automatic Selection of Diagnosis Procedure Combination Codes Based on Partial Treatment Data Relative to the Number of Hospitalization Days',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2012-international-conferences-7,
 author = {Kazuya Okamoto and Toshio Uchiyama and Tadamasa Takemura and Takayuki Adachi and Naoto Kume and Tomohiro Kuroda and Tadasu Uchiyama and Hiroyuki Yoshihara},
 booktitle = {Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics},
 title = {Automatic Selection of Diagnosis Procedure Combination Codes Based on Partial Treatment Data Relative to the Number of Hospitalization Days},
 venue = {Beijing/China},
 year = {2012}
}`
            },

  {
            'id': '476',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kazuya Okamoto',
            'title': 'Development of a Glove-Type Input Device with the Minimum Number of Sensors for Japanese Finger Spelling',
            'year': '2012',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
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
            'id': '477',
            'author': 'Kazuya Okamoto, Hiroki Kayama, Minoru Yamada, Naoto Kume, Tomohiro Kuroda, Tomoki Aoyama',
            'title': 'Development of a system for the assessment of a dual-task performance based on a motion-capture device',
            'year': '2012',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
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
            'id': '478',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Haruo Noma, Kazuya Okamoto, Naoto Kume, Hiroyuki Yoshihara',
            'title': 'Impact of Position Tracking on the Outpatient Navigation System',
            'year': '2012',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
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
            'id': '479',
            'author': 'Naoto Kume, Nobuhiro Mikuni, Megumi Nakao, Koji Sakai, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Susumu Miyamoto, Hiroyuki Yoshihara',
            'title': 'Brain-shift-Simulation using Hounsfield Numbers for Elasticity Parameter on Finite Element Method',
            'year': '2012',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
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
            'id': '480',
            'author': 'Tomohiro Kuroda, Tomoya Hioki, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Prototyping Mixed Reality Endoscopic Surgery Trainer',
            'year': '2012',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality, USB Proceedings',
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
            'id': '481',
            'author': 'Kazuya Okamoto, Hiroko Tanaka, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Hypothesis-generating Support System Using Medical Records for Clinical Knowledge Acquisition',
            'year': '2012',
            'book': 'Proceedings of the International Conference on Soft Computing and Intelligent Systems and the International Symposium on Advanced Intelligent Systems',
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
            'id': '482',
            'author': 'Tomohiro Kuroda',
            'title': 'Ubiquitous Information Supports for Healthcare Service',
            'year': '2012',
            'book': 'Proceedings of Kyoto University - HKBU Joint Workshop on Field Informatics',
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
            'id': '483',
            'author': 'Tomohiro Kuroda, Kikuo Hirano, Kazushige Sugimura, Satoshi Adachi, Hidetsugu Igarashi, Kazuo Ueshima, Hiroyuki Yoshihara',
            'title': 'Prototyping e-textile underwear for 12-lead electrocardiograph using traditional weaving technique',
            'year': '2012',
            'book': 'Proceedings of The Annual Conference of Textile Machinery Society of Japan',
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
            'id': '484',
            'author': 'Hiroki Murata, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'A Proposal of The Virtual Organ Model for Several Pelvic Organ Prolapse',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '485',
            'author': 'Yusuke Uchida, Tomohiro Kuroda, Kenta Hori, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'A Proposal of Information Support System for Remote Auscultation',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '486',
            'author': 'Seiko Tsuruoka, Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Medical Document Ranking using HITS Algorithm',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '487',
            'author': 'Naoki Ohboshi, Yosuke Hirayama, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Kenji Araki, Hiroyuki Yoshihara',
            'title': 'An asynchronous communication technique for retrieving electronic health record with tablet terminal',
            'year': '2012',
            'book': 'Technical Reports of IPSJ',
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
            'id': '488',
            'author': 'Yosuke Hirayama, Naoto Kume, Naoki Ohboshi, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Kenji Araki, Hiroyuki Yoshihara',
            'title': 'Development of the EHR browser on tablet',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of Student Division of Kansai Branch of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '489',
            'author': 'Kentaro Nakayama, Kenta Hori, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Applying QoS Management Framework designed for Telemedicine on Multi-scaling Video Streaming',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of Student Division of Kansai Branch of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '490',
            'author': 'Masahiro Tada, Haruo Noma, Tomohiro Kuroda, Tadamasa Takemura',
            'title': 'Development of Information Service within Hospital using Sensor Network',
            'year': '2012',
            'book': 'Proceedings of Symposium on Information, System, and Technology of Special Interest Group on Information System Technologies of Architectural Institute of Japan',
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
            'id': '491',
            'author': 'Seiko Tsuruoka, Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Proposal of Ranking Method of Clinical Documents Using External Data',
            'year': '2012',
            'book': 'Joint Research Meeting',
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
            'id': '492',
            'author': 'Hiroki Murata, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Three Dimensional Model to Explain Pelvic Organ Prolapse',
            'year': '2012',
            'book': 'Joint Research Meeting',
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
            'id': '493',
            'author': 'Yusuke Uchida, Tomohiro Kuroda, Tsukasa Kan, Hideya Takahashi, Naoto Kume, Kenta Hori, Masahiko Ando, Takashi Kawamura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Development of Information System for Tele-auscultation support',
            'year': '2012',
            'book': 'Joint Research Meeting',
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
            'id': '494',
            'author': 'Seiko Tsuruoka, Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Medical Document Ranking using External Information of the Documents',
            'year': '2012',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '495',
            'author': 'Satoki Hamaguchi, Toshihiko Osugi, Tomohiro Kuroda, Ken-ichiro Watanabe',
            'title': 'ICT Support for Educational Activity at Special Needs Education School for Sick Children',
            'year': '2012',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '496',
            'author': 'Tomohiro Kuroda, Eizen Kimura, Yasushi Matsumura, Yoshinori Yamashita, Haruhiko Hiramatsu, Naoto Kume',
            'title': 'Simulating Cloud Environment for HIS backup using Secret Sharing',
            'year': '2012',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '497',
            'author': 'Yusuke Uchida, Tomohiro Kuroda, Tsukasa Suga, Hideya Takahashi, Kenta Hori, Naoto Kume, Masahiko Ando, Takashi Kawamura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Information Support System for Tele-Auscultation using Mixed Reality',
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
            'id': '498',
            'author': 'Sachiko Okada, Keisuke Nagase, Akiko Ito, Fumihiko Ando, Yoshiaki Nakagawa, Kazuya Okamoto, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development and Evaluation of Outlier Detector on Hospital Management using Hospital Information Systems',
            'year': '2012',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '499',
            'author': 'Tatsuya Tokunaga, Naoto Kume, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'An application framework providing medical information enriched by web service combination',
            'year': '2012',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '500',
            'author': 'Haruo Noma, Masahiro Tada, Tomohiro Kuroda, Tadamasa Takemura',
            'title': 'Development of Real-Time Location System Using Bluetooth',
            'year': '2012',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '501',
            'author': 'Masahiro Yakami, Tomohiro Kuroda',
            'title': 'Development and evaluation of a system for end-users to retrieve case data from a HIS supporting complex search conditions involving multiple data tables',
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
            'id': '502',
            'author': 'Fumihiko Ando, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Hospital management simulation by the model to fill the sickbed with real patient data',
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
            'id': '503',
            'author': 'Yusuke Uchida, Tomohiro Kuroda, Tsukasa Kan, Hideya Takahashi, Kenta Hori, Naoto Kume, Masahiko Ando, Takashi Kawamura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Developing Tele-medicine Support Information System Which Integrates and Transmits Visual, Tactile, and Auditory information',
            'year': '2012',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '504',
            'author': 'Hiroki Murata, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Development of The Virtual Organ Model for Several Pelvic Organ Prolapse',
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
            'id': '505',
            'author': 'Naoto Kume, Kana Eguchi, Koji Yoshimura, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Soft tissue ablation model by multiple manipulation for surgical simulation',
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
            'id': '506',
            'author': 'Tatsuya Tokunaga, Kazuya Okamoto, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Prototyping statistical data provider based on EHR application framework',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of M Technology Association Japan',
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
            'id': '507',
            'author': 'Hiroki Murata, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Prototyping The Virtual Organ Model for Several Pelvic Organ Prolapse',
            'year': '2012',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '508',
            'author': 'Kojiro Taura, Megumi Nakao, Etsuno Hatano, Takamichi Ishii, Tadahiro Narita, Hiromitsu Nagata, Tomohiro Kuroda, Kotaro Minato, Shinji Uemoto',
            'title': 'Virtual Reality of Hepatectomy using Plissimo Era',
            'year': '2012',
            'book': 'Proceedings of The General Meeting of the Japanese Society of Gastroenterological Surgery',
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
            'id': '509',
            'author': 'Kenta Hori, Kentaro Nakayama, Yuta Yamane, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'A Multi-Scale Image Transmission on an Integrated Communication Control System for Telemedicine',
            'year': '2012',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '510',
            'author': 'Masahiro Yakami, Tomohiro Kuroda, Takeshi Kubo, Yutaka Emoto, Hiroyuki Yoshihara, Kaori Togashi',
            'title': 'Developing Case Finding and Information Retrieval System for Non-informatics Specialists Enabling Complicated Query over Multiple EMR Tables',
            'year': '2012',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '511',
            'author': 'Yuya Yamamoto, Tomohiro Kuroda, Naoki Ohboshi, Osamu Oshiro',
            'title': 'Prototyping armrest-mounted context-aware electrocardiograph',
            'year': '2012',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '512',
            'author': 'Goshiro Yamamoto, Tomohiro Kuroda, Daisuke Yoshitake, Seamus Hickey, Jaakko Hyry, Kunihiro Chihara, Petri Pulli',
            'title': 'PiTaSu: Wearable Interface for Assisting Senior Citizens with Memory Problems',
            'year': '2011',
            'book': 'The International Journal on Disability and Human Development',
            'doi': '',
            'type': 'journal',
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
            'id': '513',
            'author': 'Tomohiro Kuroda, Tetsuro Kaga, Hiroko Azuma, Masakazu Yagi, Yoshihiro Kuroda, Masataka Imura, Osamu Oshiro, Kenji Takada',
            'title': 'Method to Develop Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph',
            'year': '2011',
            'book': 'Journal of Biocybernetics and Biomedical Engineering',
            'doi': '',
            'type': 'journal',
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
            'id': '514',
            'author': 'Eizen Kimura, Shinji Kobayashi, Tomohiro Kuroda, Ken Ishihara, Hiroyuki Yoshihara, Tsuneyo Mimori, Ryosuke Takahashi, Tsutomu Chiba',
            'title': 'Lessons Learned from Modeling Archetypes for Intractable Disease Surveys',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
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
            'id': '515',
            'author': 'Tomohiro Kuroda, Junzo Sato, Harutoshi Yazaki, Tadamasa Takemura, Keisuke Nagase, Yasuyuki Kato, Hiroyuki Yoshihara',
            'title': 'Introduction of Template-based Database Framework for Prospective Study into Daily-using HIS',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '516',
            'author': 'Tadamasa Takemura, Yoko Tanaka, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'Development of the Hospital Management Game for Education based on Role-Play',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '517',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Takayuki Adachi, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Automatic DPC Code Selection from Discharge Summaries using Several Machine Learning Methods',
            'year': '2011',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
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
            'id': '518',
            'author': 'Tomohiro Kuroda, Kenta Hori, Masahiko Ando, Takashi Kawamura, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Designing Smooth Communication Environment for Telemedicine for General Practitioner',
            'year': '2011',
            'book': 'Proceedings of International Workshop on Multimodality in Multispace Interaction',
            'doi': '',
            'type': 'conference',
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
            'id': '519',
            'author': 'Shinji Kobayashi, Eizen Kimura, Takeki Yoshikawa, Hugh Leslie, Heather Lesie, Masaki Yasukawa, Ken Ishihara, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Clinical Data Modeling Using ArchetypeTechnology for National Surveillance of Intractable Diseases in Japan',
            'year': '2011',
            'book': 'Proceedings of International Conference of the European Federation for Medical Informatics',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-international-conferences-3,
 author = {Shinji Kobayashi and Eizen Kimura and Takeki Yoshikawa and Hugh Leslie and Heather Lesie and Masaki Yasukawa and Ken Ishihara and Tomohiro Kuroda and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Conference of the European Federation for Medical Informatics},
 title = {Clinical Data Modeling Using ArchetypeTechnology for National Surveillance of Intractable Diseases in Japan},
 venue = {Oslo/Norway},
 year = {2011}
}`
            },

  {
            'id': '520',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Naoki Ohboshi, Kenta Hori, Masahiro Hirose, Nobuaki Ito, Hiroyuki Yoshihara',
            'title': 'A Reporting System and a Similar Case Retrieval System Exploiting Meta-information of Image',
            'year': '2011',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2011-international-conferences-2,
 author = {Kazuya Okamoto and Tadamasa Takemura and Naoto Kume and Tomohiro Kuroda and Naoki Ohboshi and Kenta Hori and Masahiro Hirose and Nobuaki Ito and Hiroyuki Yoshihara},
 booktitle = {International Journal of Computer Assisted Radiology and Surgery},
 title = {A Reporting System and a Similar Case Retrieval System Exploiting Meta-information of Image},
 venue = {Berlin/Germany},
 year = {2011}
}`
            },

  {
            'id': '521',
            'author': 'Tomohiro Kuroda, Atsushi Kitamura, Naoki Ohboshi, Hiroshi Sasaki, Hiroo Tamagawa, Mitsuhiko Obata, Hiroyuki Yoshihara',
            'title': 'Prototyping MR Clinical Support System for Dentists',
            'year': '2011',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality',
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
            'id': '522',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'Automatic Extraction of Medical Practices based on Accidents',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '523',
            'author': 'Naoto Kume, Rei Yamaoka, Nobuhiro Mikuni, Koji Sakai, Tomohiro Kuroda, Megumi Nakao, Kazuya Okamoto, Tadamasa Takemura, Kotaro Minato, Hiroyuki Yoshihara',
            'title': 'VR-based Brain-shift Simulation for Neurosurgery',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '524',
            'author': 'Toshiyuki Tanaka, Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Masahiro Hirose, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Development of Multiplayer Game for Education of Hospital Management',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '525',
            'author': 'Tomoya Hioki, Naoto Kume, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'A Proposal of Mixed Reality Training Simulator for Endoscopic Surgery',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '526',
            'author': 'Kana Eguchi, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'A Proposal of Virtual Reality-based Dissection Simulation of Layered Soft Tissue',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '527',
            'author': 'Naoki Ohboshi, Atsushi Kitamura, Hiroshi Sasaki, Tomohiro Kuroda, Hiroo Tamagawa, Mitsuhiko Obata, Hiroyuki Yoshihara',
            'title': 'Development of Medical Treatment Support System having NFC Device as Trigger',
            'year': '2011',
            'book': 'Technical Reports of IPSJ',
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
            'id': '528',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Naoto Kume, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Outpatient Guide System equipping Postion Tracking and Health Insurance Card Authentication',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '529',
            'author': 'Naoto Kume, Yasutomo Kawata, Shirou Manabe, Yoshinari Shima, Yasushi Matsumura, Kenji Araki, Katsuhiko Takabayashi, Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Traversal Search in Between Four University Hospitals on a Developed Distributed Database of Clinical Accounting Information and Clinical Information',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '530',
            'author': 'Kohei Kikuchi, Mayumi Bono, Hideyuki Nakanishi, Tomohiro Kuroda, Sumihiro Kawano',
            'title': 'An analysis of gaze agreement in sign language and phonetic language conversation using tele-presence system environment',
            'year': '2011',
            'book': 'Technical Report of The Japanese Society for Artificial Intelligence',
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
            'id': '531',
            'author': 'Tadamasa Takemura, Haruo Noma, Tomohiro Kuroda, Masahiro Tada, Naoto Kume, Kazuya Okamoto, Hiroyuki Yoshihara',
            'title': 'Development of Bluetooth Barcode System to Ordering Check under Wi-Fi Network',
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
            'id': '532',
            'author': 'Toshiyuki Tanaka, Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'A Development of Multiplayer Fame for Education of Hospital Management',
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
            'id': '533',
            'author': 'Naoki Mihara, Kosuke Sasai, Noriyuki Tomiyama, Tomohiro Kuroda, Toshinari Nakano, Masaki Miyamoto, Keunsik Park, Hiroo Tamagawa, Yasushi Matsumura',
            'title': 'The Prototype of the Self-learning System of the Chest X-ray Images',
            'year': '2011',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '534',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Takayuki Adachi, Naoto Kume, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'Automatic DPC Code Selection from Treatment Data Corresponding to Length of a Hospitalization',
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
            'id': '535',
            'author': 'Tatsuya Tokunaga, Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'A Construction of a Web Service Providing Clinical Data n Maiko-net',
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
            'id': '536',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Setsuko Murata, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'The Development of a System Storing Life Logs and Utilization of the Life Logs in Medical Care',
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
            'id': '537',
            'author': 'Etsuyo Kaneko, Namiko Hattori, Mikako Ohi, Noriko Hashimoto, Kenichiro Fujita, Kazuhiro Yanagihara, Tomohiro Kuroda, Osamu Ogawa, Hiroyuki Yoshihara',
            'title': 'Design and Operation of the Case Finding',
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
            'id': '538',
            'author': 'Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of an Environment for Information Reuse on a Hospital Information System',
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
            'id': '539',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Hiroyuki Yoshihara',
            'title': 'Developing Networked Digital Camera System for Clinical Use based on Commercial Ready Sybsystems',
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
            'id': '540',
            'author': 'Kana Eguchi, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'A Method to Solve the Direction of Rupture Progression on a VR-based Dissection Simulation',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '541',
            'author': 'Masayuki Kadono, Naoki Ohboshi, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Developing Context-aware Unconstraint Cardiograph',
            'year': '2011',
            'book': 'Correspondences on Human Interface',
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
            'id': '542',
            'author': 'Tomoya Hioki, Naoto Kume, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Prototyping Mixed Reality Training Simulator for Endoscopic Surgery',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '543',
            'author': 'Naoto Kume, Rei Yamaoka, Megumi Nakao, Nobuhiro Mikuni, Koji Sakai, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Susumu Miyamoto, Hiroyuki Yoshihara',
            'title': 'Self-wright Deformation Simulation of Soft Tissue for Brain Surgery',
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
            'id': '544',
            'author': 'Kojiro Taura, Megumi Nakao, Tomohiro Kuroda, Kotaro Minato, Etsuno Hatano, Shinji Uemoto',
            'title': 'Virtual Reality in Hepatectomy -Using Plissimo Era-',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '545',
            'author': 'Tomoya Hioki, Naoto Kume, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Designing Mixed Reality Simulator for Endoscopic Surgery Training',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '546',
            'author': 'Kana Eguchi, Naoto Kume, Tomohiro Kuroda, Koji Yoshimura, Kazuya Okamoto, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Defining Direction of Fracture Propagation in Multi-point Operational Soft-tissue Dissection',
            'year': '2011',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '547',
            'author': 'Naoto Kume, Rei Yamaoka, Nobuhiro Mikuni, Koji Sakai, Tomohiro Kuroda, Megumi Nakao, Kazuya Okamoto, Tadamasa Takemura, Susumu Miyamoto, Hiroyuki Yoshihara',
            'title': 'Inner Brain Deformation Simulation for Brain Surgery Support',
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
            'id': '548',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Information Retrieval System on Hospital Information Systems',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '549',
            'author': 'Yuta Yamane, Kenta Hori, Tomohiro Kuroda, Naoki Ohboshi',
            'title': 'Multiscale Video Streaming System for Application Level QoS Control',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '550',
            'author': 'Kazuya Okamoto, Hiroko Tanaka, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Development of Clinical Knowledge Acquisitions Support System Using Medical Records',
            'year': '2011',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '551',
            'author': 'Tomohiro Kuroda, Haruo Noma, Chisako Naito, Masahiro Tada, Hiroe Yamanaka, Tadamasa Takemura, Kazuko Nin, Hiroyuki Yoshihara',
            'title': 'Prototyping Sensor Networking System for Automatic Vital Data Collection',
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
            'id': '552',
            'author': 'Tadamasa Takemura, Toshiharu Teramae, Kenichiro Fujita, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Developing Unified Data Repository of Clinical Research Data and Electoric Patient Record in Kyoto University Hospital',
            'year': '2011',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
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
            'id': '553',
            'author': 'Tomohiro Kuroda, Tetsuro Kaga, Hiroko Azuma, Masakazu Yagi, Yoshihiro Kuroda, Masataka Imura, Osamu Oshiro, Kenji Takada',
            'title': 'Method to Develop Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph',
            'year': '2010',
            'book': 'Lecture Notes of the ICB Seminar -New Trends in Biomedical and Clinical Engineering-',
            'doi': '',
            'type': 'journal',
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
            'id': '554',
            'author': 'Yoshihiro Kuroda, Shunji Kamei, Tomohiro Kuroda, Genta Kawahara, Osamu Oshiro',
            'title': 'Flow Field Haptization System focused on Asymmetric Drag Distribution',
            'year': '2010',
            'book': 'Journal of Human Interface Society',
            'doi': '',
            'type': 'journal',
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
            'id': '555',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Real-time Calculation Mothod of Topological Change by Localization and Recording and Playing Approaches',
            'year': '2010',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
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
            'id': '556',
            'author': 'Masataka Imura, Tomohiro Kuroda, Yoshiyuki Kagiyama, Yoshihiro Kuroda, Osamu Oshiro, Hiroko Azuma, Masakazu Yagi, Kenji Takada',
            'title': 'Reconstruction of Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph at Tooth Surface Shape',
            'year': '2010',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
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
            'id': '557',
            'author': 'Matti Pouke, Seamus Hickey, Tomohiro Kuroda, Haruo Noma',
            'title': 'Activity Recognition of the Elderly',
            'year': '2010',
            'book': 'Proceedings of ACM International Workshop on Context-Awareness for Self-Managing Systems',
            'doi': '',
            'type': 'conference',
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
            'id': '558',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kazuya Okamoto',
            'title': 'Basic Study toward Automatic Generation of Glove-type Command Input Device with Optimal Number of Sensors',
            'year': '2010',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
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
            'id': '559',
            'author': 'Tomohiro Kuroda, Goshiro Yamamoto, Daisuke Yoshitake, Seamus Hickey, Jaakko Hyry, Kunihiro Chihara, Petri Pulli',
            'title': 'PiTaSu: Wearable Interface for Assisting Senior Citizens with Memory Problems',
            'year': '2010',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
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
            'id': '560',
            'author': 'Tomohiro Kuroda, Daisuke Yoshitake, Goshiro Yamamoto, Seamus Hickey, Jaakko Hyry, Kunihiro Chihara, Petri Pulli',
            'title': 'PiTaSu: Mobile Mixed Reality Interface among Ubiquitous Information Support Environment',
            'year': '2010',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality',
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
            'id': '561',
            'author': 'Rei Yamaoka, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Kotaro Minato, Hiroyuki Yoshihara, Nobuhiro Mikuni',
            'title': 'FEB-Based Soft Tissue Deformation by Gravity Modeling for Brain-shift Simulation',
            'year': '2010',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '562',
            'author': 'Kazuya Okamoto, Toshio Uchiyama, Tadamasa Takemura, Takayuki Adachi, Naoto Kume, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'Automatic DPC Coding from Discharge Summary using Multiple Machine Learning Method',
            'year': '2010',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '563',
            'author': 'Rei Yamaoka, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Kotaro Minato, Hiroyuki Yoshihara',
            'title': 'Introduction of Deformation by Gravity into Finite Element Deformation Model for Visualization of Brain Shift Phenomena',
            'year': '2010',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '564',
            'author': 'Juha-Pekka Hamina, Tomohiro Kuroda, Hideo Nakamura, Masayuki Nambu, Timo Rahkonen, Kazuya Okamoto, Naoto Kume, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Cloth with Embedded Electrode Matrix for Continuous Monitoring of Six Lead Electrocardiogram',
            'year': '2010',
            'book': 'Bio-Medical Engineering',
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
            'id': '565',
            'author': 'Tomohiro Kuroda',
            'title': 'Basic Structure of Hospital Information System',
            'year': '2010',
            'book': 'Research Colloquium of Human Interface Society of Japan',
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
            'id': '566',
            'author': 'Toshio Uchiyama, Kazuya Okamoto, Tadamasa Takemura, Takayuki Adachi, Naoto Kume, Tomohiro Kuroda, Tadasu Uchiyama, Hiroyuki Yoshihara',
            'title': 'DPC Coding using Concept base Specialized in Medical Field',
            'year': '2010',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '567',
            'author': 'Tomohiro Kuroda',
            'title': 'Application of OpenEHR - Way of composing referral system - European way and States way -',
            'year': '2010',
            'book': 'Proceedings of Seagaia Meeting',
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
            'id': '568',
            'author': 'Daisuke Yoshitake, Goshiro Yamamoto, Seamus Hickey, Tomohiro Kuroda, Jaakko Hyry, Kunihiro Chihara, Petri Pulli',
            'title': 'PuTaSu: A Tapping User Interface on Wall Surfaces for Senior Citizens with Memory Problem',
            'year': '2010',
            'book': 'Correspondences on Human Interface',
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
            'id': '569',
            'author': 'Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Developing a seamless environment between a hospital information system and a campus network with Server Based Computing and Cloud Computing',
            'year': '2010',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '570',
            'author': 'Masahiko Kitamura, Takahiro Murooka, Tomoko Sawabe, Atsushi Takahara, Tetsuro Fujii, Mayumi Bono, Tomohiro Kuroda',
            'title': 'Evaluation of the Video Quality with High Resolution and High Framerate Images for Sign Lnguage',
            'year': '2010',
            'book': 'Proceedings of IEICE General Conference',
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
            'id': '571',
            'author': 'Yoshihiro Kuroda, Hisashi Kanamori, Hidekazu Takiuchi, Masao Tanooka, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Inside-body Registration with Pair-line Matching for AR Surgical Navigation',
            'year': '2009',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
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
            'id': '572',
            'author': 'Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Statistical Dynamic Imaging of RI Tracer from List-mode PET Data',
            'year': '2009',
            'book': 'Medical Imaging Technology',
            'doi': '',
            'type': 'journal',
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
            'id': '573',
            'author': 'Tomohiro Kuroda, Tsuyoshi Nagashima, Antti Alasalmi, Naoto Kume, Tadamasa Takemura, Olli Martikainen, Naoki Ohboshi, Kenta Hori, Hiroyuki Yoshihara, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Effectiveness of WLAN Location Services Medical Equipment Logistics',
            'year': '2009',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
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
            'id': '574',
            'author': 'Naoto Kume, Mikko Rissanen, Yoshihiro Kuroda, Megumi Nakao, Tadamasa Takemura, Hiroyuki Yoshihara, Tomohiro Kuroda, Shinichiro Mori, Shinji Tomita, Koji Yoshimura',
            'title': 'Evaluation of Teaching Digital Rectal Examination on Annotated Haptic VR Simulator',
            'year': '2009',
            'book': 'Medical Virtual Reality',
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
            'id': '575',
            'author': 'Takafumi Terada, Norihito Wada, Tomohiro Kuroda',
            'title': 'Research of the Simulation Based Medical Education',
            'year': '2009',
            'book': 'Medical Virtual Reality',
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
            'id': '576',
            'author': 'Osamu Oshiro, Tomohiro Kuroda, Masataka Imura, Hiroko Azuma, Masakazu Yagi, Kenji Takada',
            'title': 'Physiome Image Fusion -Multi Modal Image Integration for Dental Clinic',
            'year': '2009',
            'book': 'Proceedings of ICB Seminar -New Trends in Biomedical and Clinical Engineering-',
            'doi': '',
            'type': 'conference',
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
            'id': '577',
            'author': 'Hideyuki Horio, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro, Shigeo Wada, Toru Haraguchi, Kazuo Nakazawa',
            'title': 'Analysis of Cardiac Torsion with Strain Tensor',
            'year': '2009',
            'book': 'IFMBE Proceedings of World Congress',
            'doi': '',
            'type': 'conference',
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
            'id': '578',
            'author': 'Yoshihiro Kuroda, Yuta Morishita, Tomohiro Kuroda, Yasushi Masuda, Osamu Oshiro',
            'title': 'Error Reduction in 3D Gaze Point Estimation for Advanced Medical Annotations',
            'year': '2009',
            'book': 'IFMBE Proceedings of World Congress',
            'doi': '',
            'type': 'conference',
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
            'id': '579',
            'author': 'Tomohiro Kuroda',
            'title': 'Toward Wireless Hospital -Snapshot of Trials around the World',
            'year': '2009',
            'book': 'Proceedings of International Symposium on Electromagnetic Compatibility',
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
            'id': '580',
            'author': 'Daisuke Fukutsuka, Yoshiyuki Kagiyama, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Designing Multi-Touch Interface for Human Body Shaped Display',
            'year': '2009',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality',
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
            'id': '581',
            'author': 'Takahiro Tokui, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Context-based Filtering for Unconstrained Electrocardiograph',
            'year': '2009',
            'book': 'Proceedings of ACM International Workshop on Context-Awareness for Self-Managing Systems',
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
            'id': '582',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tadamasa Takemura, Hiroyuki Yoshihara, Tomohiro Kuroda, Shinichiro Mori, Shinji Tomita',
            'title': 'Virtual Organ Modeling by Reflecting the Tone Fit of Multiple Attributes',
            'year': '2009',
            'book': 'Proceedings of International Forum on Medical Imaging in Asia',
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
            'id': '583',
            'author': 'Hideyuki Horio, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro, Shigeo Wada, Toru Haraguchi, Kazuo Nakazawa',
            'title': 'Analysis of Cardiac Torsion from MR Phase-Contrast Image',
            'year': '2009',
            'book': 'Proceedings of International Forum on Medical Imaging in Asia',
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
            'id': '584',
            'author': 'Shunsuke Yoshimoto, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Tactile Mapping Approach using Electrical Stimulus Pattern',
            'year': '2009',
            'book': 'Proceedings of IEEE International Symposium on Robot and Human Interactive Communication',
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
            'id': '585',
            'author': 'Yoshihiro Kuroda, Yoshiyuki Kagiyama, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Virtual Reality-based Surgical Systems -Surgical Training and Navigation with VR Technologies',
            'year': '2009',
            'book': 'Proceedings of ICB Seminar -New Trends in Biomedical and Clinical Engineering-',
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
            'id': '586',
            'author': 'Tomohiro Kuroda, Daisuke Fukutsuka, Yoshiyuki Kagiyama, Yoshihiro Kuroda, Masataka Imura, Osamu Oshiro',
            'title': 'Human-body Shaped Display System aiming Clinical Training',
            'year': '2009',
            'book': 'Proceedings of ICB Seminar -New Trends in Biomedical and Clinical Engineering-',
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
            'id': '587',
            'author': 'Yoshihiro Kuroda, Hisashi Kanamori, Hidekazu Takiuchi, Masao Tanooka, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Dynamic Transparency Control of Augmented Surgical View for Interoperative Navigation',
            'year': '2009',
            'book': 'Proceedings of International Forum on Medical Imaging in Asia',
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
            'id': '588',
            'author': 'Tatsuya Tokunaga, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'A proposal of service oriented framework of medical information presentation',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '589',
            'author': 'Daisuke Fukutsuka, Yoshiyuki Kagiyama, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Designing Multi-Touch Interface for Human Body Shaped Display',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '590',
            'author': 'Yoko Tanaka, Tadamasa Takemura, Naoto Kume, Sachiko Okada, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'The Simulation of Hospital Management with Role-playing',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '591',
            'author': 'Hirotoshi Ashida, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Fluid-Solid Interaction Simulation with Phase Transition Modeling',
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
            'id': '592',
            'author': 'Shinichiro Mori, Tomohiro Kuroda, Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Hajime Shimada, Shinji Tomita, Yasuhiko Nakashima',
            'title': 'Development of Interactive Supercomputing Environment',
            'year': '2009',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '593',
            'author': 'Takeshi Yoshida, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Hidefumi Kinoshita, Tadashi Matsuda, Osamu Oshiro',
            'title': 'Pressure measurement in three axial directions on the tip of the laparoscopic forceps and skill analysis in a detachment procedure',
            'year': '2009',
            'book': 'Bio-Medical Engineering',
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
            'id': '594',
            'author': 'Tomohiro Kuroda',
            'title': 'Does Hospital Still Needs Department of Medical Informatics?',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '595',
            'author': 'Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Migration of Mail Server to Google Apps at Kyoto University Hospital',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '596',
            'author': 'Tomohiro Kuroda, Naoto Kume, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Next-generation Medical Equipments Embedded into Hospital Information Systems',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '597',
            'author': 'Yoshiyuki Kagiyama, Daisuke Fukutsuka, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Multi-scale model viewer system of human body',
            'year': '2009',
            'book': 'Bio-Medical Engineering',
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
            'id': '598',
            'author': 'Tadamasa Takemura, Masahiro Hirose, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Development of Automatic Analysis System for Incident / Accident Reports',
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
            'id': '599',
            'author': 'Yoko Tanaka, Tadamasa Takemura, Naoto Kume, Sachiko Okada, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'The Simulation of Hospital Management with Role-playing',
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
            'id': '600',
            'author': 'Tatsuya Tokunaga, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'A Construction of Service Oriented Framework of Medical Information Presentation',
            'year': '2009',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '601',
            'author': 'Kosuke Sasai, Yoichi Kawakami, Naoki Mihara, Tomohiro Kuroda, Toshinari Nakano, Yasushi Matsumura, Masaki Miyamoto',
            'title': 'Development of Image Diagnosis Support System based on Case Ontology',
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
            'id': '602',
            'author': 'Hisashi Kanamori, Yoshihiro Kuroda, Hidekazu Takiuchi, Masao Tanooka, Masataka Imura, Tomohiro Kuroda, Shingo Yamamoto, Osamu Oshiro',
            'title': 'Trial of Clinical Evaluation of Registration Method based on Intraoperative Measurement in the Body',
            'year': '2009',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '603',
            'author': 'Daisuke Fukutsuka, Tomohiro Kuroda, Yoshiyuki Kagiyama, Masataka Imura, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Decision of Tomograhic Plane with Human Body Shaped Display',
            'year': '2009',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '604',
            'author': 'Hisashi Kanamori, Yoshihiro Kuroda, Hidekazu Takiuchi, Masao Tanooka, Masataka Imura, Tomohiro Kuroda, Shingo Yamamoto, Osamu Oshiro',
            'title': 'Clinical Application of Registration Method based on In-vivo Measurement during Surgery',
            'year': '2009',
            'book': 'Joint Research Meeting',
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
            'id': '605',
            'author': 'Kazuhiro Yamada, Tomohiro Kuroda, Masataka Imura, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Katsumi Murakami, Chizu Habukawa, Shigeo Wada, Osamu Oshiro',
            'title': 'Method to Unnormal Respiratory Sound based on Auto-Regressive Model',
            'year': '2009',
            'book': 'Joint Research Meeting',
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
            'id': '606',
            'author': 'Kazuhiro Yamada, Tomohiro Kuroda, Masataka Imura, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Katsumi Murakami, Chizu Habukawa, Shigeo Wada, Osamu Oshiro',
            'title': 'Respiratory Sound Analyzing System based on Auto-Regressive Model',
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
            'id': '607',
            'author': 'Shunsuke Yoshimoto, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Masataka Imura, Osamu Oshiro',
            'title': '*** No English title in DB***',
            'year': '2009',
            'book': 'Technical Reports of Virtual Reality Society of Japan',
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
            'id': '608',
            'author': 'Kazuhiro Yamada, Tomohiro Kuroda, Eisuke Hanada, Yoshiyuki Kagiyama, Yoshihiro Kuroda, Osamu Oshiro, Shigeo Wada',
            'title': 'Measurement of frequency response of electronic stethoscope',
            'year': '2009',
            'book': 'Bio-Medical Engineering',
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
            'id': '609',
            'author': 'Masataka Imura, Tomohiro Kuroda, Yoshihiro Kuroda, Osamu Oshiro, Hiroko Azuma, Masakazu Yagi, Kenji Takada',
            'title': 'Reconstruction of Pseudo Three-Dimensional Dental Image from Dental Panoramic Radiograph and Tooth Surface Shape',
            'year': '2009',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '610',
            'author': 'Hideyuki Horio, Yoshihiro Kuroda, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Measurement of Magnetic Permeability using Phase Image',
            'year': '2009',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '611',
            'author': 'Tatsuya Tokunaga, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'Proposing Service Orientation Medical Information Presentation Framework',
            'year': '2009',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '612',
            'author': 'Tomohiro Kuroda, Hideo Nakamura, Masayuki Nambu, Kikuo Hirano, Hidetsugu Igarashi, Hiroki Ikuta, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Development of Bio-measurement Circuit using Traditional Weaving Technique of NISHIJIN',
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
            'id': '613',
            'author': 'Yoko Tanaka, Tadamasa Takemura, Naoto Kume, Sachiko Okada, Tomohiro Kuroda, Masahiro Hirose, Hiroyuki Yoshihara',
            'title': 'Hospital Management Simulation using Role Playing',
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
            'id': '614',
            'author': 'Tadamasa Takemura, Tomohiro Kuroda, Kazuya Okamoto, Naoto Kume, Hiroyuki Yoshihara',
            'title': 'Informatization of Medicine and Life Log',
            'year': '2009',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '615',
            'author': 'Hisashi Kanamori, Yoshihiro Kuroda, Hidekazu Takiuchi, Masao Tanooka, Masataka Imura, Tomohiro Kuroda, Shingo Yamashiro, Osamu Oshiro',
            'title': 'Assessment of Registration Method based on Intraoperative Measurement in the Body',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '616',
            'author': 'Hideyuki Horio, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Static magnetic field correction consideraing permeability',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology',
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
            'id': '617',
            'author': 'Hisashi Kanamori, Yoshihiro Kuroda, Hidekazu Takiuchi, Masao Tanooka, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'A registration method using intraoperative measurement of the internal body',
            'year': '2009',
            'book': 'Correspondences on Human Interface',
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
            'id': '618',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Tomohiro Kuroda, Yoshiyuki Kagiyama, Osamu Oshiro',
            'title': 'Real-time haptic and visual rendering of topological change',
            'year': '2009',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '619',
            'author': 'Sachiko Okada, Keisuke Nagase, Akiko Ito, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of Hospital Financial Status Analysis System Using Rule-Based Engine',
            'year': '2009',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
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
            'id': '620',
            'author': 'Kazuhiro Yamada, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Improvement of Bone-Conductred Speech Based on Bodebook Mapping',
            'year': '2008',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
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
            'id': '621',
            'author': 'Tadamasa Takemura, Tomohiro Kuroda, Naoto Kume, Kazuya Okamoto, Kenta Hori, Naoki Ohboshi, Nobuyuki Ashida, Antti Alasalmi, Olli Martikainen, Hiroyuki Yoshihara',
            'title': 'System Value Analysis of Multipoint Distribution of Realtime Locating System (RTLS) in Hospital',
            'year': '2008',
            'book': 'Journal of eHealth Technology and Application',
            'doi': '',
            'type': 'journal',
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
            'id': '622',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Naoki Ohboshi, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Analysis of Japanese-Japanese Sign Language Dictionary using Natural Language Processing',
            'year': '2008',
            'book': 'Japanese Journal of Sign Linguistics',
            'doi': '',
            'type': 'journal',
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
            'id': '623',
            'author': 'Toru Haraguchi, Hideyuki Horio, Yoshihiro Kuroda, Yasushi Masuda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Analysis of the Regional Strain Rate in the Left Ventricular Myocardium by MR Phase-Contrast Imaging',
            'year': '2008',
            'book': 'Transactions of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '624',
            'author': 'Yoshihiro Kuroda, Yuta Morishita, Yasushi Masuda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Depth Estimation of Gaze Point and Annotation Display using Distance of Purkinje Images',
            'year': '2008',
            'book': 'Journal of Human Interface Society',
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
            'id': '625',
            'author': 'Takashi Nakai, Takashi Tsukasa, Kenta Hori, Tadamasa Takemura, Tomohiro Kuroda, Masahiko Ando, Takashi Kawamura, Hiroyuki Yoshihara',
            'title': 'Application of Real-Time Multimedia Communication Technology into Health Care Service',
            'year': '2008',
            'book': 'Japanese Journal of Telemedicine and Telecare',
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
            'id': '626',
            'author': 'Yoshihiro Kuroda, Hideyuki Horio, Yasushi Masuda, Tomohiro Kuroda, Osamu Oshiro, Shigeo Wada, Toru Haraguchi, Kazuo Nakazawa',
            'title': 'Analysis of Cardiac Torsion by Strain Calculation with MR Phase-contrast Image',
            'year': '2008',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
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
            'id': '627',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Tomohiro Kuroda, Koji Yoshimura, Hiroyuki Yoshihara',
            'title': 'Asynchronous Teaching of Psychomotor Skills Through VR Annotations: Evaluation in Digital Rectal Examination',
            'year': '2008',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '628',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Haptic Rate for Surgical Manipulations with Fingers and Instruments',
            'year': '2008',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '629',
            'author': 'Antti Alasalmi, Olli Martikainen, Tomohiro Kuroda, Naoto Kume, Tadamasa Takemura, Hiroyuki Yoshihara, Tsuyoshi Nagashima, Naoki Ohboshi',
            'title': 'Core Nursing Process Improvement enabled by Wireless Services',
            'year': '2008',
            'book': 'Proceedings of IFIP Wireless Days Conference',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-international-conferences-7,
 author = {Antti Alasalmi and Olli Martikainen and Tomohiro Kuroda and Naoto Kume and Tadamasa Takemura and Hiroyuki Yoshihara and Tsuyoshi Nagashima and Naoki Ohboshi},
 booktitle = {Proceedings of IFIP Wireless Days Conference},
 title = {Core Nursing Process Improvement enabled by Wireless Services},
 venue = {Dubai/UAE},
 year = {2008}
}`
            },

  {
            'id': '630',
            'author': 'Yoshito Tabata, Tomohiro Kuroda',
            'title': 'Finger Spelling Recognition using Distinctive Features of Hand Shape',
            'year': '2008',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
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
            'id': '631',
            'author': 'Naoto Kume, Tsuyoshi Nagashima, Tadamasa Takemura, Tomohiro Kuroda, Naoki Ohboshi, Kenta Hori, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Problem Clarification on Installation of Tracking System using WIFI-RFID in Hospital',
            'year': '2008',
            'book': 'Proceedings of International Symposium on Wireless Personal Multimedia Communications',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2008-international-conferences-5,
 author = {Naoto Kume and Tsuyoshi Nagashima and Tadamasa Takemura and Tomohiro Kuroda and Naoki Ohboshi and Kenta Hori and Keisuke Nagase and Hiroyuki Yoshihara},
 booktitle = {Proceedings of International Symposium on Wireless Personal Multimedia Communications},
 title = {Problem Clarification on Installation of Tracking System using WIFI-RFID in Hospital},
 venue = {Saariselka/Finland},
 year = {2008}
}`
            },

  {
            'id': '632',
            'author': 'Petri Pulli, Xiasong Zheng, Peter Antoniac, Seamus Hickey, Tony Manninen, Olli Martikainen, Tomohiro Kuroda',
            'title': 'Design and Development of Mobile Services Platform for Senior Citizens',
            'year': '2008',
            'book': 'Proceedings of International Conference on Concurrent Enterprising',
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
            'id': '633',
            'author': 'Daisuke Fukutsuka, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Proposal of Push-in Tangible Display',
            'year': '2008',
            'book': 'Proceedings of Korea-Japan Workshop on Mixed Reality',
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
            'id': '634',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Tomohiro Kuroda, Koji Yoshimura, Hiroyuki Yoshihara',
            'title': 'Asynchronous Teaching of Psychomotor Skills Through VR Annotations: Evaluation in Digital Rectal Examination',
            'year': '2008',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '635',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Haptic Rate for Surgical Manipulations with Fingers and Instruments',
            'year': '2008',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '636',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Fracture Simulation of Biological Soft Tissue with Fracture Mechanics Approach',
            'year': '2008',
            'book': 'Bio-Medical Engineering',
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
            'id': '637',
            'author': 'Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Spatio-Temporal Analysis Based Visualization of RI-Tracer Dynamics from List-Mode Data',
            'year': '2008',
            'book': 'Bio-Medical Engineering',
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
            'id': '638',
            'author': 'Takatoshi Suenaga, Hiroshi Sasaki, Yasushi Masuda, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Ubiquitous Echo Project -Telemedicine Anywhere-',
            'year': '2008',
            'book': 'Bio-Medical Engineering',
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
            'id': '639',
            'author': 'Kenta Hori, Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Takashi Nakai, Takashi Tsukasa',
            'title': 'Information Support for Telemedicine',
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
            'id': '640',
            'author': 'Tomohiro Kuroda, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Toward Physiome Database -Multi-scale Image Browser-',
            'year': '2008',
            'book': 'G-COE in Silico-Medicine Spring School 2008',
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
            'id': '641',
            'author': 'Tadamasa Takemura, Junzo Sato, Tomohiro Kuroda, Keisuke Nagase, Harutoshi Yazaki, Yasuyuki Kato, Hiroyuki Yoshihara',
            'title': 'Developing End-user Computing Environment within Hospital Information System',
            'year': '2008',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
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
            'id': '642',
            'author': 'Haruo Takemura, Hirokazu Kato, Kiyohide Sato, Tomohiro Kuroda, Takashi Okuma, Yoshinari Kameda',
            'title': 'A Report on ISMAR2007',
            'year': '2008',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '643',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Constructing Finite Element Model Applicable for Breaking Operation reflecting Realistic Stress Responce',
            'year': '2008',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '644',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Construction of Finite Element Model considering Crack Propagation based on Stress State',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '645',
            'author': 'Hirotoshi Ashida, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Ken Masutani, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Registration Method for Visuo-Haptic VR Environment',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '646',
            'author': 'Takeshi Yoshida, Yoshihiro Kuroda, Yoshiyuki Kagiyama, Tomohiro Kuroda, Hidefumi Kinoshita, Tadashi Matsuda, Osamu Oshiro',
            'title': 'Trial Development of Forceps with Three Dimensional Pressure Sensor',
            'year': '2008',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '647',
            'author': 'Takashi Tsukasa, Tadamasa Takemura, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Proposing Intuitive Interface for Information Browsing during Tele-medicine',
            'year': '2008',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '648',
            'author': 'Kazuhiro Yamada, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Quality Improvement of Bone-conducted Voice using Code-book Mapping',
            'year': '2008',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '649',
            'author': 'Naoto Kume, Tadamasa Takemura, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Shinichiro Mori, Shinji Tomita',
            'title': 'VR Anatomy Modeling along Multi-dimensional Modality Distribution for Levels-of-Details control under VR Surgery Simulation',
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
            'id': '650',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Atsutoshi Goto, Hiroki Ikuta, Eiji Tsushima, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'StrinGlove - a Dataglove to Obtain Hand Posture',
            'year': '2008',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '651',
            'author': 'Tadamasa Takemura, Yasuhiro Nasu, Tomohiro Kuroda, Naoto Kume, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Study on Digitize Paper-based Information on Hospital Information Systems',
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
            'id': '652',
            'author': 'Yoshito Tabata, Tomohiro Kuroda',
            'title': 'Trial to Increase FInger Spelling Recognition using Distinctive Features',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
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
            'id': '653',
            'author': 'Yoshito Tabata, Tomohiro Kuroda',
            'title': 'Finger Spelling Recognition using Distinctive Features of Hand Shape of Japanese Sign',
            'year': '2008',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '654',
            'author': 'Daisuke Fukutsuka, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Proposing Push-in Tangible Display',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '655',
            'author': 'Daisuke Fukutsuka, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Propsing Push-in Type Tangible Display',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '656',
            'author': 'Tomohiro Kuroda, Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Spacio-Temporal Visualization of RI Tracer from List-Mode Data',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology',
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
            'id': '657',
            'author': 'Hisashi Kanamori, Yoshihiro Kuroda, Hidekazu Takiuchi, Masao Tanooka, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Producing Dynamically-Fused Endoscopic View depending on Position of Endoscopy',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology',
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
            'id': '658',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Naoto Kume, Naoki Ohboshi, Kenta Hori, Masahiro Hirose, Tsutomu Fujita, Tetsutarou Takano, Nobuaki Ito, Keisuke Nagase, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Development of Reporting and Similar Case Retrieving System Using Meta Information of Image Media',
            'year': '2008',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '659',
            'author': 'Tomohiro Kuroda, Tsuyoshi Nagashima, Antti Alasalmi, Naoto Kume, Tadamasa Takemura, Olli Martikainen, Naoki Ohboshi, Kenta Hori, Hiroyuki Yoshihara, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Effectiveness of WLAN Location Service on Medical Equipment Logistics',
            'year': '2008',
            'book': 'Proceedings of Japan Association of Medical Infomatics Spring Conference',
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
            'id': '660',
            'author': 'Shunji Kamei, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Haptization of Flow Field Focused on the Asymmetric Drag Distribution',
            'year': '2008',
            'book': 'Bio-Medical Engineering',
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
            'id': '661',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Sharing Surgical Knowledge using Physics-based Simulation and Volume Visualization',
            'year': '2008',
            'book': 'Proceedings of Annual Conference of Japanese Association of Model and Simulation for Medical Education',
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
            'id': '662',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Kyoichi Takano, Yasuaki Inoue, Hiroki Miura, Hiroyuki Yoshihara',
            'title': 'Networked Digital Camera for Clinical Use',
            'year': '2007',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
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
            'id': '663',
            'author': 'Sachiko Okada, Keisuke Nagase, Akiko Ito, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Consideration of Appropriate Method of Knowledge Representation and Reasoning for a Hospital',
            'year': '2007',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
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
            'id': '664',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Automatic Extraction of Domain Specific Terms using World Wide Web Knowledge in Medicine',
            'year': '2007',
            'book': 'Journal of eHealth Technology and Application',
            'doi': '',
            'type': 'journal',
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
            'id': '665',
            'author': 'Atsunobu Kimura, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Study of Display of Visualization of Motion Instruction Supporting',
            'year': '2007',
            'book': 'Journal of Japan Society for Educational Technology',
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
            'id': '666',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Mikko Rissanen, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'VRASS Simulation Platform',
            'year': '2007',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '667',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Toshihiko Sato, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Organ Exclusion Simulation with Multi-finger Haptic Interaction for Open Surgery Simulator',
            'year': '2007',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '668',
            'author': 'Yoshihiro Kuroda, Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Kenta Hori, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Semi-automatic Development of Optimized Surgical Simulator with Surgical Manuals',
            'year': '2007',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '669',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'A Proposal of Speculative Operation on Distributed System for FEM-Based Ablation Simulator',
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
            'id': '670',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'A Novel Approach for Training of Surgical Procedures Based on Visualization and Annotation of Behavioural Parameters in Simulators',
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
            'id': '671',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Automatic Extraction of Domain Specific Terms using World Wide Web Knowledge in Medicine',
            'year': '2007',
            'book': 'Abstracts of 21st Pacific Science Congress',
            'doi': '',
            'type': 'conference',
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
            'id': '672',
            'author': 'Osamu Oshiro, Shunji Kamei, Yasushi Masuda, Yoshihiro Kuroda, Tomohiro Kuroda',
            'title': 'Cross-Sampling Measurement of Vocal-Field Vibration using Ultrasound',
            'year': '2007',
            'book': 'Acoustical Imaging',
            'doi': '',
            'type': 'conference',
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
            'id': '673',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Toward Visualization of Skill in VR: Adaptive Real-time Guidance for Learning Force Exertion through the \'Shaping\' Strategy',
            'year': '2007',
            'book': 'Proceedings of World HAPTICS',
            'doi': '',
            'type': 'conference',
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
            'id': '674',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Toshihiko Sato, Tomohiro Kuroda, Yasushi Masuda, Osamu Oshiro',
            'title': 'Construction of Training Environment for Surgical Exclusion with a Basic Study of Multi-finger Haptic Interaction',
            'year': '2007',
            'book': 'Proceedings of World HAPTICS',
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
            'id': '675',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Mikko Rissanen, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'VRASS Simulation Platform',
            'year': '2007',
            'book': 'Proceedings of Medicine Meets Virtual Reality, ',
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
            'id': '676',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Toshihiko Sato, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Organ Exclusion Simulation with Multi-finger Haptic Interaction for Open Surgery Simulator',
            'year': '2007',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '677',
            'author': 'Yoshihiro Kuroda, Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Kenta Hori, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Semi-automatic Development of Optimized Surgical Simulator with Surgical Manuals',
            'year': '2007',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '678',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'A Proposal of Speculative Operation on Distributed System for FEM-Based Ablation Simulator',
            'year': '2007',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '679',
            'author': 'Tomohiro Kuroda, Antti Alasalmi, Olli Martikainen, Tadamasa Takemura, Naoto Kume, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Medical Equipment Logistics Improvement based on Location Data',
            'year': '2007',
            'book': 'Proceedings of International Symposium on Medical Information and Communication Technology',
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
            'id': '680',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Ryo Kitauchi, Tadamasa Takemura, Naoki Ohboshi, Hiroyuki Yoshihara',
            'title': 'Finding Origin Points for New Coordinate System Suitable for Sign Animation',
            'year': '2007',
            'book': 'Lecture Notes in Computer Science',
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
            'id': '681',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Novel Interface for Simulator Training: Describing and Presenting Manipulation Skill through VR Annotations',
            'year': '2007',
            'book': 'Lecture Notes in Computer Science',
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
            'id': '682',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Hyongyong Kim, Masahiro Hirose, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Context-based Loose Information Structure for Medical Free Text Document',
            'year': '2007',
            'book': 'Lecture Notes in Computer Science',
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
            'id': '683',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Shinichiro Mori, Shinji Tomita',
            'title': 'Estimation of Application Level Speculative Operation on Distributed System for Haptic VR Simulatio of Invasive Operation',
            'year': '2007',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
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
            'id': '684',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Hiroyuki Yoshihara',
            'title': 'Unified Image Repository for Hospital Information System',
            'year': '2007',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
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
            'id': '685',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'A Novel Approach for Training of Surgical Procedures Based on Visualization and Annotation of Behavioural Parameters in Simulators',
            'year': '2007',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '686',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Naoki Ohboshi, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'A Study on Coordinate System for Sign Animation',
            'year': '2007',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '687',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '688',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Tomohiro Kuroda, Koji Yoshimura, Toshiyuki Kamoto, Osamu Ogawa, Hiroyuki Yoshihara',
            'title': 'Evaluation of VR Annotation Based Teaching using a Digital Rectal Examination Simulator',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '689',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Experimental Study on Refresh Rate of Haptic Feedback for VR Training System on Finger Handling Skill',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '690',
            'author': 'Naotsugu Yamasaki, Koji Yoshimura, Yoshihiro Kuroda, Megumi Nakao, Tetsuyuki Ito, Tomohiro Kuroda, Osamu Oshiro, Toshiyuki Kamoto, Osamu Ogawa',
            'title': 'Preoperative Planning Support System for Partial Kidney Resection Surgery',
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
            'id': '691',
            'author': 'Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Visualization of RI Tracer using List-mode Data',
            'year': '2007',
            'book': 'Joint Research Meeting',
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
            'id': '692',
            'author': 'Shunji Kamei, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': '*** No English title in DB***',
            'year': '2007',
            'book': '***No English Book Name in DB***',
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
            'id': '693',
            'author': 'Shunji Kamei, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Haptic Display to Support Understanding of Flow Field',
            'year': '2007',
            'book': 'Joint Research Meeting',
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
            'id': '694',
            'author': 'Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Spacio-Temporal Analysis of RI Tracer using List-mode data',
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
            'id': '695',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Simulation of Growing Crack of Virtual Tissue',
            'year': '2007',
            'book': 'Joint Research Meeting',
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
            'id': '696',
            'author': 'Masayuki Kawasaki, Naoto Kume, Yoshihiro Kuroda, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Method of Calculation Reduction for Haptic Interaction in Medical Virtual Reality',
            'year': '2007',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '697',
            'author': 'Tadamasa Takemura, Hyongyong Kim, Masahiro Hirose, Kazuya Okamoto, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of Incident Report Navigation System based on Context-based Loose Information Structure',
            'year': '2007',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '698',
            'author': 'Kazuya Okamoto, Tatsuro Ishida, Tadamasa Takemura, Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Web Search Engine for Clinical Use - MANDARA',
            'year': '2007',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '699',
            'author': 'Naoto Kume, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Hospital Asset Management under MAC-Address Based Network',
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
            'id': '700',
            'author': 'Tomohiro Kuroda, Tadamasa Takemura, Kyoichi Takano, Yasuaki Inoue, Hiroki Miura, Hiroyuki Yoshihara',
            'title': 'Networked Digital Camera for Clinical Use',
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
            'id': '701',
            'author': 'Masayuki Kawasaki, Naoto Kume, Yoshihiro Kuroda, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Encouragement Prize of Human Interface Society of Japan',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '702',
            'author': 'Takashi Tsukasa, Takashi Nakai, Tomohiro Kuroda, Tadamasa Takemura, Takashi Kawamura, Masahiko Ando, Kenta Hori, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Application of Real-Time Multimedia Communication Technology into Health Care Service',
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
            'id': '703',
            'author': 'Ryosuke Arai, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Simulation of Growing Crack of Virtual Tissue',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the Institute of Electrical Engineers of Japan, Kansai Branch',
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
            'id': '704',
            'author': 'Toshiaki Tanimoto, Hiroshi Watabe, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Extraction of RI-Tracer Dynamics from List-Mode Data',
            'year': '2007',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '705',
            'author': 'Yoshihiro Kuroda, Hideyuki Horio, Yasushi Masuda, Tomohiro Kuroda, Osamu Oshiro, Shigeo Wada, Toru Haraguchi, Kazuo Nakazawa',
            'title': '*** No English title in DB***',
            'year': '2007',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '706',
            'author': 'Toru Haraguchi, Hideyuki Horio, Yoshihiro Kuroda, Yasushi Masuda, Tomohiro Kuroda, Osamu Oshiro, Hiroaki Naito, Masahiro Higashi, Kazuo Nakazawa',
            'title': 'Visualization and Evaluation of Ventricular Wall Contraction and Extension Velocity based on MR Phase Contrast Method',
            'year': '2007',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '707',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro',
            'title': '*** No English title in DB***',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '708',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Construction of Organ Exclusion SImulator with Multi-finger Force Feedback Device',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '709',
            'author': 'Shunji Kamei, Yoshihiro Kuroda, Tomohiro Kuroda, Osamu Oshiro',
            'title': 'Haptic Navigation System for Understanding in Three-Dimensional Flow Fields',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '710',
            'author': 'Masayuki Kawasaki, Naoto Kume, Yoshihiro Kuroda, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Elasticity Distribution-based Mesh Generation for Finite Element Model',
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
            'id': '711',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Naoki Ohboshi, Yoshihiro Kuroda, Osamu Oshiro',
            'title': 'Morpholozical Analysis of  Japanese-Japanese Sign Language Dictionary',
            'year': '2007',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
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
            'id': '712',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Toshihiko Sato, Tomohiro Kuroda, Yasushi Masuda, Osamu Oshiro',
            'title': 'Construction and Evaluation of Prototype VR Simulator for Training of Liver Exclusion',
            'year': '2007',
            'book': 'Bio-Medical Engineering',
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
            'id': '713',
            'author': 'Ryo Shikata, Tomohiro Kuroda, Yoshito Tabata, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Development of Vision Based Meeting Support System for Hearing Impaired',
            'year': '2006',
            'book': 'The International Journal on Disability and Human Development',
            'doi': '',
            'type': 'journal',
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
            'id': '714',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Constructing a New Coordinate System Suitable for Sign Animation',
            'year': '2006',
            'book': 'The International Journal on Disability and Human Development',
            'doi': '',
            'type': 'journal',
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
            'id': '715',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Genichi Sakaguchi, Masashi Komeda',
            'title': 'Physics-Based Simulation of Surgical Fields for Preoperative Strategic Planning',
            'year': '2006',
            'book': 'Journal of Medical Systems',
            'doi': '',
            'type': 'journal',
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
            'id': '716',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Hiroshi Oyama, Kotaro Minato, Takashi Takahashi',
            'title': 'Transferring Bioelasticity Knowledge through Haptic Interaction',
            'year': '2006',
            'book': 'IEEE Multimedia',
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
            'id': '717',
            'author': 'Yoichi Kawakami, Yasushi Matsumura, Kosuke Sasai, Shin Anei, Hiroshi Inada, Takahiro Kuchi, Tomohiro Kuroda, Norihiro Sakamoto, Tadamasa Takemura, Hiroshi Tanaka, Hiroo Tamagawa, Toshinari Nakano, Keunsik Park, Haruhiko Hiramatsu, Masaki Miyamoto',
            'title': 'Application of RDF in Reporting System',
            'year': '2006',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '718',
            'author': 'Tadamasa Takemura, Yoshihiro Kuroda, Naoto Kume, Kazuya Okamoto, Kenta Hori, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Requirement Extraction from Surgical Textbook using Natural Language Processing for Educational Virtual Reality Simulator',
            'year': '2006',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '719',
            'author': 'Naomi Sakihana, Yasue Kuwabara, Tomohiro Kuroda, Tadamasa Takemura, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Transfusion Checkup System using Mobile Terminals',
            'year': '2006',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '720',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Context-based Retrieval System for Similar Medical Practice Documents',
            'year': '2006',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
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
            'id': '721',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Toshihiko Sato, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'A Study on Organ Exclusion Simulator with Multi-finger Force Feedback Device',
            'year': '2006',
            'book': 'Transactions of the Virtual Reality Society of Japan',
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
            'id': '722',
            'author': 'Tomohiro Kuroda, Mikako Murakami, Yoshito Tabata, Kunihiro Chihara',
            'title': 'On-Demand Expansion of Avatar\'s Hand for Legible Sign Animation',
            'year': '2006',
            'book': 'CEAI Journal - Control Engineering and Applied Informatics',
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
            'id': '723',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Megumi Nakao, Naoto Kume, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Annotated VR Simulation Records for Surgical Education -Evaluating the Benefits of Real-Time Visualization of Force Exertion-',
            'year': '2006',
            'book': 'Transactions of the Virtual Reality Society of Japan',
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
            'id': '724',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Peter Antoniac, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Hand-Menu System: A Deviceless Virtual Imput Interface for Wearable Computers',
            'year': '2006',
            'book': 'CEAI Journal - Control Engineering and Applied Informatics',
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
            'id': '725',
            'author': 'Tadamasa Takemura, Akiko Hagimoto, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Development of Discharge Summary Retrieval system for Nursing written in Medical Markup Language (MML)',
            'year': '2006',
            'book': 'Journal of eHealth Technology and Application',
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
            'id': '726',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Performance of Position Detection Tasks under Restriction of Finger\'s Movement',
            'year': '2006',
            'book': 'Proceedings of Eurohaptics',
            'doi': '',
            'type': 'conference',
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
            'id': '727',
            'author': 'Tomohiro Kuroda, Mikko Rissanen, Takafumi Terada, Masayuki Harada, Hiroshi Oyama',
            'title': 'Haptized Shared VR based Surgical Simulator',
            'year': '2006',
            'book': 'Proceedings of Annual Meetings of the Society in Europe for Simulation Applied to Medicine',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2006-international-conferences-8,
 author = {Tomohiro Kuroda and Mikko Rissanen and Takafumi Terada and Masayuki Harada and Hiroshi Oyama},
 booktitle = {Proceedings of Annual Meetings of the Society in Europe for Simulation Applied to Medicine},
 title = {Haptized Shared VR based Surgical Simulator},
 venue = {Porto/Portugal},
 year = {2006}
}`
            },

  {
            'id': '728',
            'author': 'Megumi Nakao, Yoshihiro Kuroda, Tetsuo Sato, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Volume Interaction Framework for Preoperative Surgical Simulation on Volumetric Images',
            'year': '2006',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
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
            'id': '729',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Interactive Authoring of Example Surgical Procedures from Recorded Physics-based Simulation',
            'year': '2006',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
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
            'id': '730',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Telemedicine Cockpit with Intuitive Interface for Integrated Control of Communication and Presentation',
            'year': '2006',
            'book': 'International Journal of Computer Assisted Radiology and Surgery',
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
            'id': '731',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Study of Spatial Anisotropy in Finger\'s Haptic Perception for Advanced Palpation Training',
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
            'id': '732',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Audiovisual Guidance for Simulated One Point Force Exertion Tasks',
            'year': '2006',
            'book': 'Proceedings of ACM International Conference on Virtual Reality Continuum and Its Applications',
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
            'id': '733',
            'author': 'Megumi Nakao, Tomotaka Matsuyuki, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Physics-based Manipulation of Volumetric Images for Preoperative Surgical Simulation',
            'year': '2006',
            'book': 'Proceedings of Asian Simulation Conference',
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
            'id': '734',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'Speculative FEM Simulation System for Invasive Surgical Operation with Haptic Interaction',
            'year': '2006',
            'book': 'Proceedings of Asian Simulation Conference',
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
            'id': '735',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Interactive Manipulation and Stress Visualization with Multi-finger Haptic Device',
            'year': '2006',
            'book': 'Proceedings of Asian Simulation Conference',
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
            'id': '736',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Context-Based Retrieval System for Similar Medical Documents',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics',
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
            'id': '737',
            'author': 'Naoto Kume, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'MAC Address-Based Position Detection of Illegal Access Terminals on Private Network for Hospital Asset Management',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of Asia Pacific Association for Medical Informatics',
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
            'id': '738',
            'author': 'Naomi Sakihana, Yasue Kuwabara, Tomohiro Kuroda, Tadamasa Takemura, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Transfusion Checkup System using Mobile Terminals',
            'year': '2006',
            'book': 'Proceedings of International Congress on Nursing Informatics',
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
            'id': '739',
            'author': 'Tadamasa Takemura, Masahiro Hirose, Kazuya Okamoto, Tomohiro Kuroda, Tatsuro Ishizaki, Yuichi Imanaka, Hiroyuki Yoshihara',
            'title': 'Automatic Classification of Incident reports based on Examples of Words: Using Machine Learning Technique of Natural Language Processing',
            'year': '2006',
            'book': 'Proceedings of International Conference on Quality in Health Care',
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
            'id': '740',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tatsuro Ishida, Tomohiro Kuroda, Keisuke Nagase, Kiyoko Makimoto, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Development of a numeric data extracting and analysis system using dependency analysis on Nosocomial Outbreak Investigation database',
            'year': '2006',
            'book': 'Proceedings of The World Congress on Internet in Medicine',
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
            'id': '741',
            'author': 'Ryo Shikata, Tomohiro Kuroda, Yoshito Tabata, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Development of Vision Based Meeting Support System for Hearing Impaired',
            'year': '2006',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
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
            'id': '742',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Keisuke Nagase',
            'title': 'Constructing New Coordinate System Suitable for Sign Animation',
            'year': '2006',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
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
            'id': '743',
            'author': 'Masahiro Hirose, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Application of Textmining Based Clinical Documents in Integrated HIS, Co-occurrence Structure of Terms Among Incident/Accident Reports',
            'year': '2006',
            'book': 'Proceedings of Nordic Conference on eHealth and Telemedicine',
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
            'id': '744',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Telemedicine Cockpit for \'Plug & Play\' Telemedicine with Single Action Control of Presentation and Communication',
            'year': '2006',
            'book': 'Proceedings of Nordic Conference on eHealth and Telemedicine',
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
            'id': '745',
            'author': 'Tadamasa Takemura, Nobuyuki Ashida, Kazuya Okamoto, Tatsuro Ishida, Tomohiro Kuroda, Kiyoko Makimoto, Hiroyuki Yoshihara',
            'title': 'Development of Information Retrieval and Web Information Integration System for Nosocomial Infection Anecdotal Research Papers',
            'year': '2006',
            'book': 'Proceedings of IEEE Healthcom',
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
            'id': '746',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Multi-finger Haptic Interaction for Soft Tissue Exclusion Manipulation',
            'year': '2006',
            'book': 'ACM SIGGRAPH Poster',
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
            'id': '747',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Annotated Surgical Manipulation for Simulator-based Surgical Skill-transfer using SiRE - Simulation Record Editor',
            'year': '2006',
            'book': 'Biomedical Simulation, Lecture Notes in Computer Science',
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
            'id': '748',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda',
            'title': 'Editing Recorded Haptic Data with SiRE - Simulation Record Editor',
            'year': '2006',
            'book': 'Proceedings of Eurohaptics',
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
            'id': '749',
            'author': 'Tadamasa Takemura, Akiko Hagimoto, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Development of Discharge Summary Retrieval system for Nursing written in Medical Markup Language (MML)',
            'year': '2006',
            'book': 'Proceedings of APT Telemedicine Workshop',
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
            'id': '750',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '751',
            'author': 'Yoshihiro Kuroda, Mikko Rissanen, Koji Yoshimura, Megumi Nakao, Tomohiro Kuroda, Toshiyuki Kamoto, Hiroshi Oyama, Osamu Ogawa, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '752',
            'author': 'Yoshihiro Kuroda, Mikko Rissanen, Koji Yoshimura, Megumi Nakao, Tomohiro Kuroda, Toshiyuki Kamoto, Hiroshi Oyama, Osamu Ogawa, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of JAMIT Frontier',
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
            'id': '753',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '754',
            'author': 'Takashi Nakai, Takashi Tsukasa, Kenta Hori, Tomohiro Kuroda, Keisuke Nagase, Takashi Kawamura, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '755',
            'author': 'Tatsuro Ishida, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '756',
            'author': 'Takashi Nakai, Takashi Tsukasa, Tomohiro Kuroda, Tadamasa Takemura, Takashi Kawamura, Masahiko Ando, Kenta Hori, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Construction Trial of Tele-medicine Integration System using Campus Network',
            'year': '2006',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '757',
            'author': 'Hyongyong Kim, Tadamasa Takemura, Masahiro Hirose, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
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
            'id': '758',
            'author': 'Tadamasa Takemura, Masahiro Hirose, Kazuya Okamoto, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Analysis of Adverse Effects using Medical Term Co-occurrence Structure from Incident Reports',
            'year': '2006',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '759',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Evaluation of Organ Exclusion Simulator with Force Feedback Device',
            'year': '2006',
            'book': 'Proceedings of Design and Systems Division Conference of Japan Society of Mechanical Engineers',
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
            'id': '760',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Way of Integrated Control QoS and Presentation of Transmission Data in Telemedicine Cockpit',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '761',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Preserving Evaluation-critical Features of Demonstrative Haptic Manipulation in Surgical VR',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '762',
            'author': 'Yoshihiro Kuroda, Tadamasa Takemura, Naoto Kume, Kazuya Okamoto, Megumi Nakao, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Design of Constructing System of Surgical Simulator from Meta Language Data Extracted from Surgical Manuals',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '763',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'Proposal of Speculative Operation for Haptic Interaction in Soft Tissue Rupture Simulator',
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
            'id': '764',
            'author': 'Takashi Nakai, Takashi Tsukasa, Kenta Hori, Takashi Kawamura, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Trial Analysis of Effect of Synchronization of Video and Sound on Tele-ausculation',
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
            'id': '765',
            'author': 'Hiroyuki Yoshihara, Tomohiro Kuroda, Kinya Sakai, Kenji Arita, Toshiaki Suzuki, Katsuhiro Ohashi, Kenji Araki',
            'title': 'A National Level Site Which Can Merge the Domestic Clinical Data Sites',
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
            'id': '766',
            'author': 'Hyongyong Kim, Tadamasa Takemura, Masahiro Hirose, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Influence Evaluation to Hospital Management by Automatic Extraction of Medical Examination and Treatment Act Related to Medical Accident',
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
            'id': '767',
            'author': 'Sachiko Okada, Keisuke Nagase, Akiko Ito, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of Hospital Financial Status Analysis System Using Rile-Based Engine',
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
            'id': '768',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '769',
            'author': 'Hiroyuki Yoshihara, Tomohiro Kuroda, Tadamasa Takemura, Keisuke Nagase, Junzo Sato, Harutoshi Yazaki, Yasuyuki Kato',
            'title': 'Approach of Electronic Clinical Record Data Recycling by End User Development Organization',
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
            'id': '770',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Nobuyuki Ashida, Hiroyuki Yoshihara',
            'title': 'Extraction of Numeric Information from Medical Documents',
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
            'id': '771',
            'author': 'Tatsuro Ishida, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Development of Web Information Retrieval System Specialized for Medicine',
            'year': '2006',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '772',
            'author': 'Naoki Ohboshi, Hiroo Tamagawa, Yoshinobu Maeda, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of Treatment Support System with Wearable Computer',
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
            'id': '773',
            'author': 'Tomohiro Kuroda, Kazuya Okamoto, Tadamasa Takemura, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Trial Approach for New Coordinate System Suitable for Sign Information System',
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
            'id': '774',
            'author': 'Kenta Hori, Takashi Tsukasa, Takashi Nakai, Tomohiro Kuroda',
            'title': 'Development of Information Support Environment for Telemedicine',
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
            'id': '775',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Tele-ultrasound Diagnosis Supporting Environment - Tele-echo System',
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
            'id': '776',
            'author': 'Mikko Rissanen, Yoshihiro Kuroda, Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '777',
            'author': 'Yoshihiro Kuroda, Makoto Hirai, Megumi Nakao, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '778',
            'author': 'Tatsuro Ishida, Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2006',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '779',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Image Transmission System for Telemedicine',
            'year': '2006',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '780',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori',
            'title': 'Interaction Model between Elastic Objects for Haptic Feedback Considering Collisions of Soft Tissue',
            'year': '2005',
            'book': 'Computer Methods and Programs in Biomedicine',
            'doi': '',
            'type': 'journal',
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
            'id': '781',
            'author': 'Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Yasuhiko Ozaki, Takehiko Nakamura, Takashi Takahashi',
            'title': 'Improving Precise Positioning of Surgical Robotic Instruments by a Three-Side-View Presentation System on Telesurgery',
            'year': '2005',
            'book': 'Journal of Medical Systems',
            'doi': '',
            'type': 'journal',
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
            'id': '782',
            'author': 'Osamu Okada, Naoki Ohboshi, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Electrinic Clinical Path System Based on Semistructured Data Model Using Personal Digital Assistant for Onsite Access',
            'year': '2005',
            'book': 'Journal of Medical Systems',
            'doi': '',
            'type': 'journal',
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
            'id': '783',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'Simulation of Soft Tissue Ablation for a VR Simulator',
            'year': '2005',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
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
            'id': '784',
            'author': 'Ryuya Nadayoshi, Yoko Mitomi, Naoki Ohboshi, Tomohiro Kuroda, Naomi Sakihana, Takao Tachibana, Yoshiki Miyachi',
            'title': 'Development and Introduction of a Clinical Activity Supporting System for Pressure Ulcers based on a Web Application',
            'year': '2005',
            'book': 'Journal of Japanese Society of Pressure Ulcers',
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
            'id': '785',
            'author': 'Tadamasa Takemura, Shirou Manabe, Nobuhiro Nishiura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara, Nobuyuki Ashida',
            'title': 'Development of a Psychiatric Care Information System based on Patient-Centered Concept',
            'year': '2005',
            'book': 'Journal of eHealth Technology and Application',
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
            'id': '786',
            'author': 'Megumi Nakao, Takakazu Watanabe, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Interactive 3D Region Extraction of Volume Data Using Deformable Boundary Object',
            'year': '2005',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '787',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'MVL: Medical VR Simulation Library',
            'year': '2005',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '788',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Volumetric Mask and its Real-time Processing for Volume Interaction',
            'year': '2005',
            'book': 'Transactions of the Virtual Reality Society of Japan',
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
            'id': '789',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'FEM-Based Soft Tissue Destruction Model for Ablation Simulator',
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
            'id': '790',
            'author': 'Tadamasa Takemura, Nobuyuki Ashida, Kiyoko Makimoto, Teruo Kirikae, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'A Development of an Efficient Information Collecting and Retrieval System Using an Agent Technology to Specialized Area on World Wide Web for Infectious Disease',
            'year': '2005',
            'book': 'Proceedings of IEEE Healthcom',
            'doi': 'https://doi.org/10.1109/HEALTH.2005.1500503',
            'type': 'conference',
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
            'id': '791',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'Ablation Simulator Based on FEM Soft Tissue Destruction Model',
            'year': '2005',
            'book': 'Proceedings of International Conference on Complex Medical Engineering',
            'doi': '',
            'type': 'conference',
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
            'id': '792',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Advanced Volume Visualization for Interactive Extraction and Physics-based Modeling of Volume Data',
            'year': '2005',
            'book': 'Proceedings of International Conference on Complex Medical Engineering',
            'doi': '',
            'type': 'conference',
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
            'id': '793',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Shape Perception with Friction Model for Indirect Touch',
            'year': '2005',
            'book': 'Proceedings of World HAPTICS',
            'doi': '',
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
            'id': '794',
            'author': 'Tomohiro Kuroda, Yoshihiro Kuroda, Yoshito Tabata',
            'title': 'StrinGlove:a new VR-glove with hand posture recognition & Medical VR Simulator',
            'year': '2005',
            'book': 'Proceedings of IEEE Virtual Reality',
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
            'id': '795',
            'author': 'Tadamasa Takemura, Shirou Manabe, Nobuhiro Nishiura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara, Nobuyuki Ashida',
            'title': 'Development of a Psychiatric Care Information System based on Patient-Centered Concept',
            'year': '2005',
            'book': 'Proceedings of APT Telemedicine Workshop',
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
            'id': '796',
            'author': 'Megumi Nakao, Takakazu Watanabe, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Interactive 3D Region Extraction of Volume Data Using Deformable Boundary Object',
            'year': '2005',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '797',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'MVL: Medical VR Simulation Library',
            'year': '2005',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '798',
            'author': 'Masahiro Hirose, Tadamasa Takemura, Yuko Adachi, Yasue Kuwabara, Yuichi Imanaka, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Extracting \'Drug Name\' from Incident Reports about Medication Errors by Profession at a National University Hospital in Japan',
            'year': '2005',
            'book': 'Proceedings of International Conference on Quality in Health Care',
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
            'id': '799',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Framework for Annotation of Haptic Data in Simulated Surgical Procedures',
            'year': '2005',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
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
            'id': '800',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Design and Implementation of MVL: Medical VR Simulation Library',
            'year': '2005',
            'book': 'ACM SIGGRAPH Poster',
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
            'id': '801',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Volume Interaction with Voxels by Manipulating 3D Voxels',
            'year': '2005',
            'book': 'ACM SIGGRAPH Poster',
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
            'id': '802',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'FEM-Based Soft Tissue Destruction Model for Ablation Simulator',
            'year': '2005',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '803',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Friction Force Display in Virtual Environment for Experiments of Indirect Shape Perception',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '804',
            'author': 'Makoto Hirai, Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Prototyping of Palpation VR Simulator with a Glove-shaped Force Feedback Device',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '805',
            'author': 'Yuong-Shin Chon, Tadamasa Takemura, Yoshiaki Nakagawa, Sachiko Okada, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Development of Hospital Cost Accounting Simulator',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '806',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Akira Takada, Koji Tanaka, Jingiu Guo, Hiroyuki Yoshihara',
            'title': 'Automatic Clustering of Medical Records in Semi-Structured Data',
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
            'id': '807',
            'author': 'Kotaro Minato, Ken Toyoda, Akira Takada, Yukinori Itao, Tomohiro Kuroda, Yoshiaki Nose',
            'title': 'Panel Discussion: Seven Problems about Electronic Medical Record -The Secret of Success from Bitter Experience-',
            'year': '2005',
            'book': 'Bio-Medical Engineering',
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
            'id': '808',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': 'Interactive QoS Control of Video Stream for Telemedicine',
            'year': '2005',
            'book': 'Proceedings of Ubiquitous Medical Symposium',
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
            'id': '809',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'Volume Mask based Interactive Volume Deformation and Modeling System',
            'year': '2005',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '810',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Annotation Framework for Simulated Surgical Manipulation',
            'year': '2005',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '811',
            'author': 'Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Development Ubiquitous Hospital Information System using Networked Digital Camera and Mobile Terminal',
            'year': '2005',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '812',
            'author': 'Tadamasa Takemura, Masahiro Hirose, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Automatic Classification of Incident/Accident Reports using Natural Language Processing',
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
            'id': '813',
            'author': 'Yoichi Kawakami, Shin Anei, Kosuke Sasai, Hiroshi Inada, Takahiro Kuchi, Tomohiro Kuroda, Norihiro Sakamoto, Tadamasa Takemura, Hiroshi Tanaka, Hiroo Tamagawa, Toshinari Nakano, Keunsik Park, Haruhiko Hiramatsu, Yasushi Matsumura, Masaki Miyamoto',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '814',
            'author': 'Yuong-Shin Chon, Tadamasa Takemura, Yoshiaki Nakagawa, Sachiko Okada, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '815',
            'author': 'Naoki Ohboshi, Tomohiro Kuroda, Ryuya Nadayoshi, Yoko Mitomi, Naomi Sakihana, Takao Tachibana, Yoshiki Miyachi, Hiroyuki Yoshihara',
            'title': 'Development and Introduction of Web-based Ulcer Care Management System using PDA as Terminal',
            'year': '2005',
            'book': 'Proceedings of Ubiquitous Medical Symposium',
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
            'id': '816',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
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
            'id': '817',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
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
            'id': '818',
            'author': 'Naoki Ohboshi, Hiroo Tamagawa, Chigusa Katada, Yuko Shima, Masayuki Kawamoto, Tomohiro Kuroda, Taiji Sohmura, Yoshinobu Maeda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '819',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '820',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '821',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '822',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
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
            'id': '823',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Kotaro Minato',
            'title': 'LiveVolume: A Volume Interaction Framework',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '824',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Emerging Intuitive Interface based on Multi-Modal Interface for Surgical Cockpit',
            'year': '2005',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '825',
            'author': 'Makoto Hirai, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Learning Environment of Hand-based Manipulation of Elastic Bodies for Medical Procedure',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '826',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Kotaro Minato',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Symposium of Tokyo University VR Laboratory',
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
            'id': '827',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Developing Simulator on Medical VR Simulation Library MVL',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '828',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Construction of Simulators with Medical VR Simulation Library: MVL',
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
            'id': '829',
            'author': 'Tadamasa Takemura, Kazuya Okamoto, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Extracting Technical Terms from Clinical Document Corpus using Knowledge obtained from Web',
            'year': '2005',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '830',
            'author': 'Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'Design of Distributed VR Simulation System with Physics-based Haptic Interaction',
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
            'id': '831',
            'author': 'Kazuya Okamoto, Tadamasa Takemura, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Context-Based Retrieval System for Similar Medical Practice Documents',
            'year': '2005',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '832',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '833',
            'author': 'Tadamasa Takemura, Yuong-Shin Chon, Sachiko Okada, Yoshiaki Nakagawa, Kazuya Okamoto, Makoto Hirai, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '834',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '835',
            'author': 'Yoshihiro Kuroda, Takakazu Watanabe, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of the Japanese Society of Medical Imaging Technology',
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
            'id': '836',
            'author': 'Mikko Rissanen, Naoto Kume, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Dynamic Pressure Visualization for Mimicking Simulated Palpation of the Aorta',
            'year': '2005',
            'book': 'Proceedings of Annual Conference of Japanese Ergonomics Society',
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
            'id': '837',
            'author': 'Tadamasa Takemura, Junzo Sato, Tomohiro Kuroda, Akiko Ito, Hisao Saijo, Yasuo Shitanishi, Sadao Nonaka, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': 'Development of Web-based Hospital Management Information Viewer for Hospital Staffs based on Cost Accounting',
            'year': '2005',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
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
            'id': '838',
            'author': 'Masato Mori, Takashi Tsukasa, Kenta Hori, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Network QoS Control System Application for Telemedicine',
            'year': '2004',
            'book': 'Transactions of the Japanese Society for Medical and Biological Engineering',
            'doi': '',
            'type': 'journal',
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
            'id': '839',
            'author': 'Tomohiro Kuroda, Masayuki Harada, Takafumi Terada, Hiroshi Oyama',
            'title': 'Applying Shared-VR based Surgical Simulator for Medical Trial Study',
            'year': '2004',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
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
            'id': '840',
            'author': 'Katsuya Tanaka, Kenta Hori, Tomohiro Kuroda, Mamoru Mitsuishi',
            'title': 'Integrated Control of Tele-surgery Robot System using CORBA Middleware',
            'year': '2004',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
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
            'id': '841',
            'author': 'Naoki Ohboshi, Ryuya Nadayoshi, Yoko Mitomi, Tomohiro Kuroda, Naomi Sakihana, Takao Tachibana, Yoshiki Miyachi, Hiroyuki Yoshihara',
            'title': 'A Study of Electronic Treatment Planning System for Pressure Ulcers using Personal Digital Assistant',
            'year': '2004',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '842',
            'author': 'Megumi Nakao, Keiho Imanishi, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'Practical Haptic Navigation with Clickable 3D Region Input Interface for Supporting Master-Slave Type Robotic Surgery',
            'year': '2004',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '843',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Hiroshi Oyama, Masashi Komeda',
            'title': 'Physics-Based Preoperative Approach Planning Using Hybrid Virtual Bodies',
            'year': '2004',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '844',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'FEM-Based Interaction Model Between Elastic Objects for Indirect Palpation Simulator',
            'year': '2004',
            'book': 'Studies in Health Technology and Informatics',
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
            'id': '845',
            'author': 'Eisuke Hanada, Mitsuru Mori, Hitoshi Onishi, Tomohiro Kuroda, Yuji Inoue, Kimio Kondo',
            'title': 'Connection of Two-way Satellite Communication Systems for Broader-based Education Network Construction',
            'year': '2004',
            'book': 'Journal of Multimedia Aided Education Research',
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
            'id': '846',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': 'FEM-Based Soft Tissue Destruction Model for Ablation Training Simulator',
            'year': '2004',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
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
            'id': '847',
            'author': 'Megumi Nakao, Takakazu Watanabe, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '3D Interactive Clipping for Flexible Visualization and Extraction of Volume Data',
            'year': '2004',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
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
            'id': '848',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': 'Haptic Rendering Method of Friction Forces for Indirect Shape Perception',
            'year': '2004',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
            'doi': '',
            'type': 'conference',
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
            'id': '849',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Atsutoshi Goto, Hiroki Ikuta, Eiji Tsushima',
            'title': 'Consumer Price VR-glove possesses Hand Posture Recognition',
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
            'id': '850',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Atsutoshi Goto, Hiroki Ikuta, Mikako Murakami',
            'title': 'Consumer price data-glove for sign language recognition',
            'year': '2004',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
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
            'id': '851',
            'author': 'Megumi Nakao, Keiho Imanishi, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'Practical Haptic Navigation with Clickable 3D Region Input Interface for Supporting Master-Slave Type Robotic Surgery',
            'year': '2004',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '852',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Hiroshi Oyama, Masashi Komeda',
            'title': 'Physics-Based Preoperative Approach Planning Using Hybrid Virtual Bodies',
            'year': '2004',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '853',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'FEM-Based Interaction Model Between Elastic Objects for Indirect Palpation Simulator',
            'year': '2004',
            'book': 'Proceedings of Medicine Meets Virtual Reality',
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
            'id': '854',
            'author': 'Tomohiro Kuroda, Yoshito Tabata',
            'title': 'Development of Mpeg-4 Face & Body Animation Player for Sign Animation using Java 3D',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
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
            'id': '855',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Atsutoshi Goto',
            'title': 'Development of Data-glove equips Hand Gesture Recognizing Function',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
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
            'id': '856',
            'author': 'Takakazu Watanabe, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '857',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '858',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Bio-Medical Engineering',
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
            'id': '859',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
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
            'id': '860',
            'author': 'Takakazu Watanabe, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '861',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '862',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '863',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Jounal of Japan Society of Computer Aided Surgery',
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
            'id': '864',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '865',
            'author': 'Chie Kiyomitsu, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '866',
            'author': 'Chie Kiyomitsu, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '867',
            'author': 'Yoichi Kawakami, Kosuke Sasai, Tomohiro Kuroda, Tadamasa Takemura, Hiroo Tamagawa, Toshinari Nakano, Keunsik Park, Haruhiko Hiramatsu, Yasushi Matsumura, Masaki Miyamoto',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '868',
            'author': 'Tadamasa Takemura, Junzo Sato, Tomohiro Kuroda, Keisuke Nagase, Akira Takada, Koji Tanaka, Jingiu Guo, Hiroyuki Yoshihara',
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
            'id': '869',
            'author': 'Yoichi Kawakami, Kosuke Sasai, Tomohiro Kuroda, Tadamasa Takemura, Hiroo Tamagawa, Toshinari Nakano, Keunsik Park, Haruhiko Hiramatsu, Yasushi Matsumura, Masaki Miyamoto',
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
            'id': '870',
            'author': 'Chie Kiyomitsu, Tadamasa Takemura, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Trial of Automatic Assessment of Pressure Ulcers using Image Processing',
            'year': '2004',
            'book': 'Technical Reports of IPSJ',
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
            'id': '871',
            'author': 'Takakazu Watanabe, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'A Support Environment for Shape and Stiffness Modeling from 3D CT/MRI data',
            'year': '2004',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '872',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Atsutoshi Goto, Hiroki Ikuta, Eiji Tsushima',
            'title': 'VR Glove Possessing Hand Posture Recognition',
            'year': '2004',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '873',
            'author': 'Takakazu Watanabe, Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '874',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroyuki Yoshihara, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '875',
            'author': 'Hirotsugu Minowa, Tetsuo Sato, Mikio Suga, Tadao Sugiura, Kotaro Minato, Tomohiro Kuroda',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Bio-Medical Engineering',
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
            'id': '876',
            'author': 'Masato Mori, Takashi Tsukasa, Kenta Hori, Tomohiro Kuroda, Mamoru Mitsuishi, Kotaro Minato, Takashi Takahashi, Hiroyuki Yoshihara',
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
            'id': '877',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Tetsuya Matsuda, Hiroyuki Yoshihara',
            'title': 'MVL: Real-time Medical Virtual Reality Simulation Library',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '878',
            'author': 'Tomohiro Kuroda',
            'title': 'Toward Clinical Application of Distributed Mixed Reality',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '879',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': 'QoS Control of Supporting Information for Robotic Tele-surgery',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '880',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Atsutoshi Goto, Hiroki Ikuta, Eiji Tsushima',
            'title': 'Consumer Price Glove-based Input Device with Hand Posture Recognition',
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
            'id': '881',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Atsutoshi Goto, Hiroki Ikuta, Eiji Tsushima',
            'title': 'Consumer Price Glove-based Input Device with Hand Posture Recognition',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '882',
            'author': 'Megumi Nakao, Takakazu Watanabe, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Interactive Extraction of 3D Region for Volume Data',
            'year': '2004',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '883',
            'author': 'Masayuki Harada, Shuichi Takahashi, Takafumi Terada, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'The development of a Shared-VR based Surgery Simulator for Educational Purposes',
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
            'id': '884',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Tetsuya Matsuda, Hiroyuki Yoshihara',
            'title': 'Haptic Rendering of Friction with Elastic Objects for Shape Recognition',
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
            'id': '885',
            'author': 'Takashi Tsukasa, Masato Mori, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2004',
            'book': 'Proceedings of JAMI Telemedicine Research Meeting',
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
            'id': '886',
            'author': 'Naomi Sakihana, Yoko Mitomi, Ryuya Nadayoshi, Naoki Ohboshi, Kazumi Hara, Tomohiro Kuroda',
            'title': 'Computerization of Ulcer Care Plan Sheet for Supporting Ulcer Care',
            'year': '2004',
            'book': 'Proceedings of Meeting of Information Management Divisions of University Hospitals',
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
            'id': '887',
            'author': 'Keiho Imanishi, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'Haptic Navigation Method for Improving Safety of Master-Slave Type Robotic Surgery',
            'year': '2003',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
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
            'id': '888',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Physically Based Fine and Interactive Soft Tissue Cutting',
            'year': '2003',
            'book': 'IPSJ Journal',
            'doi': '',
            'type': 'journal',
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
            'id': '889',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'Interaction Model between Elastic Objects for Organ-organ Contact Simulation',
            'year': '2003',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
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
            'id': '890',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Genichi Sakaguchi, Masashi Komeda',
            'title': 'Supporting Surgical Planning with Simulation of Tissue Cutting and Opening Incision',
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
            'id': '891',
            'author': 'Mikako Murakami, Toshitaka Tateishi, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'E-cane with Situation Presumption for the Blind',
            'year': '2003',
            'book': 'Systems, Control and Information',
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
            'id': '892',
            'author': 'Koichi Minami, Tomi Korpipaa, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Distributed MR Transporter for Networked Collaboration',
            'year': '2003',
            'book': 'Entertainment Computing: Technologies and Applications',
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
            'id': '893',
            'author': 'Yasuhiro Yamamoto, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Genichi Sakaguchi, Masashi Komeda, Takashi Takahashi',
            'title': 'Palpation Simulator of Beating Aorta for Cardiovascular Surgery Training',
            'year': '2003',
            'book': 'Transactions on the Institute of Electrical Engineers of Japan E',
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
            'id': '894',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'Framework of VR Palpation Simulation based on Force Display',
            'year': '2003',
            'book': 'Medical Virtual Reality',
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
            'id': '895',
            'author': 'Yoshihiro Yasumuro, Mikako Murakami, Masataka Imura, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'E-Cane with Situation Presumption for the Visually Impaired',
            'year': '2003',
            'book': 'Biomedical Simulation',
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
            'id': '896',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'A Haptic Navigation System for Supporting Master-Slave Robotic Surgery',
            'year': '2003',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
            'doi': '',
            'type': 'conference',
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
            'id': '897',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'Interaction Model between Elastic Objects for Accurate Haptic Display',
            'year': '2003',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
            'doi': '',
            'type': 'conference',
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
            'id': '898',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Hiroshi Oyama',
            'title': 'Evaluation and User Study of Haptic Simulator for Learning Palpation in Cardiovascular Surgery',
            'year': '2003',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
            'doi': '',
            'type': 'conference',
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
            'id': '899',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Atsutoshi Goto, Kunihiro Chihara',
            'title': 'Development of Intelligent Glove-based Input Device Measuring Both Flexion and Touch',
            'year': '2003',
            'book': 'Proceedings of Polish-Japanese Symposium on Bio-Medical Engineering',
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
            'id': '900',
            'author': 'Mikako Murakami, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Modifier Representation in Sign Animation',
            'year': '2003',
            'book': 'Proceedings of Concurrent Engineering: Advanced Design, Production and Management Systems',
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
            'id': '901',
            'author': 'Yoshihiro Yasumuro, Mikako Murakami, Masataka Imura, Yoshitsugu Manabe, Kunihiro Chihara, Tomohiro Kuroda',
            'title': 'E-Cane: Look before You Step',
            'year': '2003',
            'book': 'Lecture Notes in Computer Science',
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
            'id': '902',
            'author': 'Mikako Murakami, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Merchandise Information Service for Visually Impaired People Using Barcode',
            'year': '2003',
            'book': 'Lecture Notes in Computer Science',
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
            'id': '903',
            'author': 'Kaori Fujiwara, Tomohiro Kuroda',
            'title': 'Description Method of Surgical Operation for Intra-operative Support',
            'year': '2003',
            'book': 'Lecture Notes in Computer Science',
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
            'id': '904',
            'author': 'Koichi Minami, Yoshihiro Yasumuro, Masataka Imura, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Shared MR Space Construction with Wearable PC Users',
            'year': '2003',
            'book': 'Proceedings of CREST Workshop on Advanced Computing and Communicating Techniques for Wearable Information Playing',
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
            'id': '905',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Tetsuya Matsuda',
            'title': 'Evaluation of Physics-based Interaction Model between Elastic Objects Representing Collisions of Multiple Organs',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '906',
            'author': 'Koichi Minami, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Punch3D - An Interactive Environment Modeling Method for In-door Callaboration',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '907',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Usability Evaluation of the Hand-Pointing System for Wearable Computers',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '908',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Masaru Komori',
            'title': 'A Proposal of Soft Tissue Model of Ablation',
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
            'id': '909',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of IPSJ',
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
            'id': '910',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of IPSJ',
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
            'id': '911',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of IPSJ',
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
            'id': '912',
            'author': 'Yoshitsugu Manabe, Koichi Minami, Muneyuki Sakata, Hiroshi Sasaki, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '913',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Masaru Komori',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '914',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of System Integration Division of Society of Instruments and Control Engineers',
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
            'id': '915',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Masaru Komori, Hiroshi Oyama',
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
            'id': '916',
            'author': 'Tomohiro Kuroda, Masayuki Harada, Takafumi Terada, Hiroshi Oyama',
            'title': 'Applying Shared VR Simulator for Surgery Education from Remote Site',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '917',
            'author': 'Takashi Tsukasa, Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Mamoru Mitsuishi, Takashi Takahashi',
            'title': 'Integrated Application Level QoS Control for Tele-medicine',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '918',
            'author': 'Tadamasa Takemura, Koji Tanaka, Jingiu Guo, Junzo Sato, Akira Takada, Tomohiro Kuroda, Keisuke Nagase, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '919',
            'author': 'Ryuya Nadayoshi, Yoko Mitomi, Naoki Ohboshi, Tomohiro Kuroda, Naomi Sakihana, Takao Tachibana, Yoshiki Miyachi, Hiroyuki Yoshihara',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '920',
            'author': 'Osamu Okada, Naoki Ohboshi, Tomohiro Kuroda, Hiroyuki Yoshihara',
            'title': 'Development of Electronic Clinical Path System using PDA as Inputting Device',
            'year': '2003',
            'book': 'Technical Reports of IPSJ',
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
            'id': '921',
            'author': 'Keiho Imanishi, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of IPSJ',
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
            'id': '922',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'Rectal Palpation Simulator based on Virtual Reality in Urology',
            'year': '2003',
            'book': 'Bio-Medical Engineering',
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
            'id': '923',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Masaru Komori',
            'title': 'Development of Soft Tissue Model of Ablation',
            'year': '2003',
            'book': 'Bio-Medical Engineering',
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
            'id': '924',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Tetsuya Matsuda, Masashi Komeda',
            'title': 'Supporting Planning of Surgical Approach in Cardiovascular Surgery',
            'year': '2003',
            'book': 'Bio-Medical Engineering',
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
            'id': '925',
            'author': 'Kenta Hori, Katsuya Tanaka, Yasunari Suzuki, Tomohiro Kuroda, Yoshiki Arakawa, Mamoru Mitsuishi, Takashi Takahashi',
            'title': 'Information Transfer and Display for Surgical Cockpit System',
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
            'id': '926',
            'author': 'Ryuya Nadayoshi, Yoko Mitomi, Naoki Ohboshi, Tomohiro Kuroda, Naomi Sakihana, Takao Tachibana, Yoshiki Miyachi, Hiroyuki Yoshihara',
            'title': 'Development of Electronic Treatment Planning System using Mobile Computer',
            'year': '2003',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '927',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': 'Development of Rectal Palpation Simulator based on an Interaction Model between Elastic Objects',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '928',
            'author': 'Naoto Kume, Megumi Nakao, Tomohiro Kuroda, Masaru Komori',
            'title': 'VR-based Simulation of Ablation using Deformable Soft Tissue Destruction Model',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '929',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masashi Komeda',
            'title': 'VR Simulation for Preoperative Planning using Hybrid Mesh and Volume based Virtual Human',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '930',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '931',
            'author': 'Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Yasunari Suzuki, Yoshiki Arakawa, Mamoru Mitsuishi, Takashi Takahashi',
            'title': 'Surgical Cockpit System for Information Suport in Telemedicine',
            'year': '2003',
            'book': 'Proceedings of Symposium on Medical and Biological Engineering',
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
            'id': '932',
            'author': 'Kaori Fujiwara, Tomohiro Kuroda, Hiroshi Oyama',
            'title': '*** No English title in DB***',
            'year': '2003',
            'book': 'Proceedings of Annual Conference of IPSJ',
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
            'id': '933',
            'author': 'Tomohiro Kuroda, Kenta Hori, Hiroshi Oyama',
            'title': 'Toward Information Supported Telemedicine; Development of Collaborative Communication and Supporting System for Telesurgery',
            'year': '2002',
            'book': 'Jounal of Japan Society of Computer Aided Surgery',
            'doi': '',
            'type': 'journal',
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
            'id': '934',
            'author': 'Kenta Hori, Yasuhiko Ozaki, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'Factor of Skill Difference on Tele-robotic Surgery',
            'year': '2002',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
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
            'id': '935',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Genichi Sakaguchi, Masashi Komeda, Takashi Takahashi',
            'title': 'Decision Support System of Surgical Approaches with an Adaptive Physics-Based Model',
            'year': '2002',
            'book': 'Medical Virtual Reality',
            'doi': '',
            'type': 'journal',
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
            'id': '936',
            'author': 'Peter Antoniac, Petri Pulli, Tomohiro Kuroda, Dan Bendas, Seamus Hickey, Hiroshi Sasaki',
            'title': 'Wireless User Perspectives in Europe-HandSmart Mediaphone Interface',
            'year': '2002',
            'book': 'Wireless Personal Communications',
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
            'id': '937',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Hand-menu System: A Deviceless Virtual Input Interface for Wearable Computer',
            'year': '2002',
            'book': 'Transactions of the Virtual Reality Society of Japan',
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
            'id': '938',
            'author': 'Yoshiyuki Kojima, Yoshihiro Yasumuro, Tomohiro Kuroda, Masataka Imura, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Clip-Interface: A Human Interface for a 3D Workspace with Wearable PC',
            'year': '2002',
            'book': 'Transactions of the Virtual Reality Society of Japan',
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
            'id': '939',
            'author': 'Koichi Minami, Tomi Korpipaa, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Network Protocol for Distributed Design Work Support',
            'year': '2002',
            'book': 'Journal of Human Interface Society',
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
            'id': '940',
            'author': 'Kenta Hori, Yasuhiko Ozaki, Takehiko Nakamura, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'Introducing Elevation View of Operating Field to Tele-robotic Surgery',
            'year': '2002',
            'book': 'Japan Journal of Medical Informatics',
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
            'id': '941',
            'author': 'Hiroshi Oyama, Kenta Hori, Tomohiro Kuroda, Takashi Takahashi',
            'title': 'Medicine and Virtual Reality',
            'year': '2002',
            'book': 'IPSJ Magazine',
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
            'id': '942',
            'author': 'Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Yasuhiko Ozaki, Takehiko Nakamura, Takashi Takahashi',
            'title': 'Effect of Video Streaming Delay on Telemedicine based on the Surgical Cockpit System',
            'year': '2002',
            'book': 'Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
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
            'id': '943',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Silke Hacker, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'An Interaction Model between Multiple Deformable Objects for Realistic Haptic Force Feedback in Surgical Simulations',
            'year': '2002',
            'book': 'Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
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
            'id': '944',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Planning and Training of Minimally Invasive Surgery by Integrating Soft Tissue Cuts with Surgical Views Reproduction',
            'year': '2002',
            'book': 'Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery',
            'doi': '',
            'type': 'conference',
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
            'id': '945',
            'author': 'Petri Pulli, Xiasong Zheng, Tony Manninen, Tomohiro Kuroda',
            'title': 'Quality Function Deployment in Mobile Service Analysis, Design and Development',
            'year': '2002',
            'book': 'Proceedings of World Wireless Research Forum',
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
            'id': '946',
            'author': 'Koichi Minami, Tomi Korpipaa, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Distributed MR Transporter for Networked Collaboration',
            'year': '2002',
            'book': 'International Workshop on Entertainment Computing Workshop Note',
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
            'id': '947',
            'author': 'Masataka Imura, Kumi Kamada, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Eiji Toyota, Yasuo Ogasawara, Fumihiko Kajiya',
            'title': 'Interactive Observation of Kidney Glomeruli using Immersive Projection System',
            'year': '2002',
            'book': 'Proceedings of the IEEE-EMBS Special Topic Conference on Molecular, Cellular and Tissue Engineering',
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
            'id': '948',
            'author': 'Nobuyuki Ishibashi, Yoshitsugu Manabe, Osamu Oshiro, Motonori Doi, Tomohiro Kuroda, Ichiro Kanaya, Yoshihiro Yasumuro, Kunihiro Chihara',
            'title': 'Checking Daily Health and Safty on The Internet',
            'year': '2002',
            'book': 'Proceedings of CSUN\'s Annual International Conference, Technology and Persons with Disabilities, Web Proceeings',
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
            'id': '949',
            'author': 'Yoshihiro Yasumuro, Masataka Imura, Hiroshi Sasaki, Koichi Minami, Yoshiyuki Kojima, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Computer Vision-Based Interfaces for Wearable Computers -A Wearable Shared Mixed Reality Environment',
            'year': '2002',
            'book': 'Proceedings of CREST Workshop on Advanced Computing and Communicating Techniques for Wearable Information Playing',
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
            'id': '950',
            'author': 'Yoshihiro Yasumuro, Mikako Murakami, Masataka Imura, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'E-Cane with Situation Presumption for the Visually Impaired',
            'year': '2002',
            'book': 'Proceedings of ERICIM Workshop - User Interfaces for All',
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
            'id': '951',
            'author': 'Mikako Murakami, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Shopping Support System for the Blind Using Barcode',
            'year': '2002',
            'book': 'Proceedings of ERICIM Workshop - User Interfaces for All',
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
            'id': '952',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Combining Volumetric Soft Tissue Cuts for Interventional Surgery Simulation',
            'year': '2002',
            'book': 'Proceedings of Medical Image Computing and Computer Assisted Intervention',
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
            'id': '953',
            'author': 'Kumi Kamada, Koichi Minami, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Visual Consistent Presentation Between a Real and Virtual Object',
            'year': '2002',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
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
            'id': '954',
            'author': 'Tomohiro Kuroda, Hiroshi Sasaki, Toshitaka Tateishi, Kouji Maeda, Yoshihiro Yasumuro, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Walking Aids based on Wearable/Ubiquitous Computing - Aiming At Pedestrian\'s Intelligent Transport Systems -',
            'year': '2002',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
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
            'id': '955',
            'author': 'Mikako Murakami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Generation of Modifier Representation in Sign Animation',
            'year': '2002',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
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
            'id': '956',
            'author': 'Yoshihiro Kuroda, Megumi Nakao, Silke Hacker, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Haptic Force Feedback with an Interaction Model between Multiple Deformable Objects for Surgical Simulation',
            'year': '2002',
            'book': 'Proceedings of Eurohaptics',
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
            'id': '957',
            'author': 'Kunihiro Chihara, Tomohiro Kuroda, Masataka Imura, Yoshiyuki Kojima, Muneyuki Sakata, Yu Ishikawa',
            'title': 'Ubiquitous Visualization System of Energy Consumption',
            'year': '2002',
            'book': 'Proceedings of The International Symposium on Highly Efficient Use of Energy and Education of its Environmental Impact',
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
            'id': '958',
            'author': 'Tomohiro Kuroda, Mikako Murakami, Yoshito Tabata, Kunihiro Chihara',
            'title': 'A Method to Produce Legible Sign Animation',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
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
            'id': '959',
            'author': 'Mikako Murakami, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'Merchandise Information Service for Blind People Using Barcode',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
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
            'id': '960',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'A Study on Finger Character Learning System',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
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
            'id': '961',
            'author': 'Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Yasuhiko Ozaki, Takehiko Nakamura, Takashi Takahashi',
            'title': 'Effectiveness of Video Streaming Delay on Tele-robotic Surgery',
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
            'id': '962',
            'author': 'Yasuhiko Ozaki, Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Takehiko Nakamura, Takashi Takahashi',
            'title': 'Introducing Elevation View of Operating Field on Tele-robotic Surgery',
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
            'id': '963',
            'author': 'Takehiko Nakamura, Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'Possibility to Evaluat Personal Skill to Surgical Procedures Using Result from Surgical Simulator and Telerobotic Manipulation',
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
            'id': '964',
            'author': 'Yasuhiro Yamamoto, Megumi Nakao, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Palpable Simulation System of an Aorta in Cardiovascular Surgery',
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
            'id': '965',
            'author': 'Kenta Hori, Yasuhiko Ozaki, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'Factor of Skill Difference on Tele-robotic Surgery',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '966',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Genichi Sakaguchi, Masashi Komeda, Takashi Takahashi',
            'title': 'Decision Support System of Surgical Approaches with an Adaptive Physics-Based Model',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of Japanese Society of Medical Virtual Reality',
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
            'id': '967',
            'author': 'Tomohiro Kuroda, Yoshihiro Yasumuro, Mikako Murakami, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Development of E-Cane Aiming at Pedestrian\'s Intelligent Transport System',
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
            'id': '968',
            'author': 'Keiho Imanishi, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'Development of a Haptic Navigation Interface for Improving Safety of Master-Slave Type Robotic Surgery',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '969',
            'author': 'Masataka Imura, Kumi Kamada, Tomohiro Kuroda, Osamu Oshiro, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'GRAPE: Measurement Support System for Cluster-shaped Object in Immersive Environment',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '970',
            'author': 'Kenta Hori, Katsuya Tanaka, Tomohiro Kuroda, Hiroshi Oyama, Shinichi Warisawa, Mamoru Mitsuishi',
            'title': 'Catalog Interface of Multi View for Medical Support on Network',
            'year': '2002',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '971',
            'author': 'Kaori Fujiwara, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'An Interoperative Supporting System for Nurses',
            'year': '2002',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '972',
            'author': 'Mikako Murakami, Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Sign Animation System Introduced Modifier Representation',
            'year': '2002',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '973',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama',
            'title': 'An Input Method of Surgical Plans by Mouse Manipulation',
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
            'id': '974',
            'author': 'Toshitaka Tateishi, Mikako Murakami, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'E-cane System with Situation Presumption for the Blind',
            'year': '2002',
            'book': 'Correspondences on Human Interface',
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
            'id': '975',
            'author': 'Yoshito Tabata, Mikako Murakami, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of Japanese Society for Information and Systems in Education',
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
            'id': '976',
            'author': 'Kumi Kamada, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '977',
            'author': 'Koichi Minami, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2002',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '978',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '3-D Blood Flow Visualization in Immersive Environment based on Color Doppler Images',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
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
            'id': '979',
            'author': 'Kaori Fujiwara, Takehiko Nakamura, Kazumi Hara, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'An Interoperative Supporting System for Nurses',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
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
            'id': '980',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': 'Preoperative Planning and Procedural Training of Minimally Invasive Surgery Using Tissue Cutting and Surgical View Reconstruction',
            'year': '2002',
            'book': 'Bio-Medical Engineering',
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
            'id': '981',
            'author': 'Keiho Imanishi, Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Takashi Takahashi',
            'title': 'Substitution of Haptic Display for Distance Visualization for Endoscopic Surgery',
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
            'id': '982',
            'author': 'Kouji Maeda, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Real-Time Observation and the Map Creation of Information about Pedestrians Distribution',
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
            'id': '983',
            'author': 'Tomohiro Kuroda',
            'title': 'Medical Cockpit for Telemedicine',
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
            'id': '984',
            'author': 'Tomohiro Kuroda, Toshitaka Tateishi, Yoshihiro Yasumuro, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'E-cane with Situation Presumption for the Blind',
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
            'id': '985',
            'author': 'Kouji Maeda, Mikako Murakami, Masataka Imura, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2002',
            'book': 'Correspondences on Human Interface',
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
            'id': '986',
            'author': 'Hiroshi Oyama, Tomohiro Kuroda, Kenta Hori, Takehiko Nakamura, Takashi Takahashi',
            'title': 'Efficacy of a Virtual Reality Simulator for Evaluating the Aptitude of Medical Students',
            'year': '2001',
            'book': 'General Medicine',
            'doi': '',
            'type': 'journal',
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
            'id': '987',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Genichi Sakaguchi, Masashi Komeda, Takashi Takahashi',
            'title': 'Virtual Reality Based Simulation System for Cardiovascular Surgery',
            'year': '2001',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
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
            'id': '988',
            'author': 'Kenta Hori, Tomohiro Kuroda, Hiroshi Oyama, Takashi Takahashi',
            'title': 'Surgical Cockpit System -Standarization of Integrated Information Support for Telesurgery-',
            'year': '2001',
            'book': 'Japan Journal of Medical Informatics',
            'doi': '',
            'type': 'journal',
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
            'id': '989',
            'author': 'Tomohiro Kuroda, Wakako Makari, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Transformation Of Signing Avatar To Fit User\'s Figure',
            'year': '2001',
            'book': 'Moroccan Journal of Control Computer Science And Signal Processing',
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
            'id': '990',
            'author': 'Tomohiro Kuroda, Mikako Murakami, Yoshito Tabata',
            'title': 'Current Trend of VR Application for Assistive Technology',
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
            'id': '991',
            'author': 'Masataka Imura, Yoshito Tabata, Ichiro Kanaya, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Digital Archiving of Kamegata-Ishi (Turtle-shaped Stone)',
            'year': '2001',
            'book': 'Asian Journal of Geoinformatics',
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
            'id': '992',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Study on Finger Character Education System based on Hand Posture Recognition',
            'year': '2001',
            'book': 'Journal of Information and Systems in Education',
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
            'id': '993',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Hand-Area Extraction By Sensor Fusion Using Two Cameras For Input Interface Of Wearable Computers',
            'year': '2001',
            'book': 'Proceedings of Scandinavian Conference on Image Analysis',
            'doi': '',
            'type': 'conference',
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
            'id': '994',
            'author': 'Hiroshi Oyama, Kenta Hori, Yasuhiko Ozaki, Megumi Nakao, Takatoshi Suenaga, Tomohiro Kuroda, Mikio Suga, Masaru Komori, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Takashi Takahashi',
            'title': 'Innovative Evolution of Medical Education and Treatment using Virtual Reality Technology',
            'year': '2001',
            'book': 'Proceedings of Korea-Japan ME Joint Symposium',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-8,
 author = {Hiroshi Oyama and Kenta Hori and Yasuhiko Ozaki and Megumi Nakao and Takatoshi Suenaga and Tomohiro Kuroda and Mikio Suga and Masaru Komori and Osamu Oshiro and Kotaro Minato and Kunihiro Chihara and Takashi Takahashi},
 booktitle = {Proceedings of Korea-Japan ME Joint Symposium},
 title = {Innovative Evolution of Medical Education and Treatment using Virtual Reality Technology},
 venue = {Kyongju/Korea},
 year = {2001}
}`
            },

  {
            'id': '995',
            'author': 'Peter Antoniac, Tomohiro Kuroda, Petri Pulli',
            'title': 'User Interface Appliance for Mobile Devices',
            'year': '2001',
            'book': 'Proceedings of World Wireless Research Forum',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-7,
 author = {Peter Antoniac and Tomohiro Kuroda and Petri Pulli},
 booktitle = {Proceedings of World Wireless Research Forum},
 title = {User Interface Appliance for Mobile Devices},
 venue = {Helsinki/Finland},
 year = {2001}
}`
            },

  {
            'id': '996',
            'author': 'Tomohiro Kuroda, Wakako Makari, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Transformation of Signing Avatar to Fit User\'s Figure',
            'year': '2001',
            'book': 'Proceedings of International Conference on Image and Signal Processing',
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
            'id': '997',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Virtual DeerBack Riding −Walk through Virtual ancient NARA−',
            'year': '2001',
            'book': 'Proceedings of International Conference on Image and Signal Processing',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-5,
 author = {Yoshito Tabata and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Conference on Image and Signal Processing},
 pages = {168-175},
 title = {Virtual DeerBack Riding −Walk through Virtual ancient NARA−},
 venue = {Agadir/Morrocco},
 year = {2001}
}`
            },

  {
            'id': '998',
            'author': 'Koichi Minami, Tomi Korpipaa, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'An Interior Design System on Shared AR Space −A lock-free Communication Protocol for Smooth Interaction−',
            'year': '2001',
            'book': 'Proceedings of International Symposium on Mixed Reality',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-4,
 author = {Koichi Minami and Tomi Korpipaa and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Proceedings of International Symposium on Mixed Reality},
 pages = {137-138},
 title = {An Interior Design System on Shared AR Space −A lock-free Communication Protocol for Smooth Interaction−},
 venue = {Yokohama/Japan},
 year = {2001}
}`
            },

  {
            'id': '999',
            'author': 'Masataka Imura, Yoshito Tabata, Ichiro Kanaya, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Digital Archiving Of Kamegata-Ishi (Turtle Shape Stone) Using Data Fusion Of Heterogeneous Measurements',
            'year': '2001',
            'book': 'International Archives of Photogrammetry, Remote Sensing and Spatial Information Sciences',
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
            'id': '1000',
            'author': 'Tomohiro Kuroda, Atsushi Nakamura, Yoshiyuki Kojima, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Interactive Visualization of Energy Consumption using VRML',
            'year': '2001',
            'book': 'Technical Summary Digest of IS&T/SPIE\'s Electronics Imaging: Science and Technology',
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
            'id': '1001',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Joakim Brandberg, Per Ask',
            'title': 'Blood Flow Visualization In Immersive Environment Based on Color Doppler Images',
            'year': '2001',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
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
            'id': '1002',
            'author': 'Takatoshi Suenaga, Masayuki Nambu, Tomohiro Kuroda, Osamu Oshiro, Toshiyo Tamura, Kunihiro Chihara',
            'title': 'A Tele-Instruction System For Ultrasound Probe Operation Based on Shared AR Technology',
            'year': '2001',
            'book': 'Proceedings of Annual International Conference of the IEEE Engineering in Medicine and Biology Society',
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
            'id': '1003',
            'author': 'Yoshiyuki Kojima, Yoshihiro Yasumuro, Hiroshi Sasaki, Ichiro Kanaya, Osamu Oshiro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Hand Manipulation of Virtual Objects in Wearable Augmented Reality',
            'year': '2001',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
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
            'id': '1004',
            'author': 'Peter Antoniac, Tomohiro Kuroda, Petri Pulli',
            'title': 'User Interface Appliance for Mobile Devices',
            'year': '2001',
            'book': 'Proceedings of World Wireless Research Forum',
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
            'id': '1005',
            'author': 'Koichi Minami, Tomi Korpipaa, Tatsuya Shuzui, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Collaborative Work Support on Networked Heterogeneous Platforms −Shared Augmented Interior Design Space−',
            'year': '2001',
            'book': 'Lecture Notes in Computer Science',
            'doi': '',
            'type': 'conference',
            'bibtex': `@inproceedings{2001-international-conferences-13,
 author = {Koichi Minami and Tomi Korpipaa and Tatsuya Shuzui and Tomohiro Kuroda and Yoshitsugu Manabe and Kunihiro Chihara},
 booktitle = {Lecture Notes in Computer Science},
 pages = {524-527},
 title = {Collaborative Work Support on Networked Heterogeneous Platforms −Shared Augmented Interior Design Space−},
 venue = {New Orleans/USA},
 volume = {1},
 year = {2001}
}`
            },

  {
            'id': '1006',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Mikako Murakami, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Sign Language Digitization and Animation',
            'year': '2001',
            'book': 'Lecture Notes in Computer Science',
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
            'id': '1007',
            'author': 'Peter Antoniac, Petri Pulli, Tomohiro Kuroda, Dan Bendas, Seamus Hickey, Hiroshi Sasaki',
            'title': 'HandSmart Mediaphone',
            'year': '2001',
            'book': 'Advanced Interface for Mobile Services, Proceedings of World Multi-Conference on Systemics, Cybernetics and Informatics',
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
            'id': '1008',
            'author': 'Kenta Hori, Hiroshi Oyama, Yasuhiko Ozaki, Takeshi Tsuda, Takatoshi Suenaga, Tomohiro Kuroda, Mikio Suga, Masaru Komori, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Takashi Takahashi',
            'title': 'Surgical Cockpit System and Effectiveness of its Immersive Environment',
            'year': '2001',
            'book': 'Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery',
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
            'id': '1009',
            'author': 'Tomohiro Kuroda, Atsushi Nakamura, Yoshiyuki Kojima, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Interactive Visualization of Energy Consumption using VRML',
            'year': '2001',
            'book': 'Proceedings of SPIE',
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
            'id': '1010',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1011',
            'author': 'Yoshiyuki Kojima, Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Direct Handling for Wearable Augmented Reality',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1012',
            'author': 'Masataka Imura, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1013',
            'author': 'Koichi Minami, Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
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
            'id': '1014',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
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
            'id': '1015',
            'author': 'Atsunobu Kimura, Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
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
            'id': '1016',
            'author': 'Mikako Murakami, Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
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
            'id': '1017',
            'author': 'Megumi Nakao, Tomohiro Kuroda, Hiroshi Oyama, Masaru Komori, Tetsuya Matsuda, Takashi Takahashi',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '1018',
            'author': 'Mikako Murakami, Yoshito Tabata, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'A Method to Improve Legibility of Sign Animation',
            'year': '2001',
            'book': 'Proceedings of Kansai Division Conference of Japan Ergonomics Society',
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
            'id': '1019',
            'author': 'Yasuhiko Ozaki, Takeshi Tsuda, Kenta Hori, Hiroshi Oyama, Takatoshi Suenaga, Mikio Suga, Tomohiro Kuroda, Masaru Komori, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Takashi Takahashi',
            'title': 'Efficiency of the Immersive Projection System for Telesurgery',
            'year': '2001',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '1020',
            'author': 'Toshitaka Tateishi, Hiroshi Sasaki, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Proceedings of Japan Joint Automatic Control Conference',
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
            'id': '1021',
            'author': 'Toshitaka Tateishi, Hiroshi Sasaki, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Study on Walking Support of the Visually Impaired with Situation Presumption',
            'year': '2001',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '1022',
            'author': 'Kouji Maeda, Yoshihiro Yasumuro, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Detection and Integration onto Map of Information about Pedestrians Congestion',
            'year': '2001',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '1023',
            'author': 'Mikako Murakami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Shopping Support System for Blind People using Barcode',
            'year': '2001',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '1024',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Wearables and Deviceless Interface',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '1025',
            'author': 'Yoshiyuki Kojima, Hiroshi Sasaki, Yoshihiro Yasumuro, Ichiro Kanaya, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Visual Synthesis for Hand Manipulation in Wearable Augmented Reality',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '1026',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Mikako Murakami, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Development of Sign Language Education System',
            'year': '2001',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
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
            'id': '1027',
            'author': 'Yasuhiko Ozaki, Kenta Hori, Hiroshi Oyama, Takeshi Tsuda, Naohiro Mitsutake, Takatoshi Suenaga, Mikio Suga, Tomohiro Kuroda, Masaru Komori, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Takashi Takahashi',
            'title': 'The Effectiveness of Immersed Operation Environment for Telerobotic Surgery',
            'year': '2001',
            'book': 'Proceedings of JAMI Telemedicine Research Meeting',
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
            'id': '1028',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Tele-Instruction System for Ultrasound Diagnosis based on Shared AR Technology',
            'year': '2001',
            'book': 'Bio-Medical Engineering',
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
            'id': '1029',
            'author': 'Kumi Kamada, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Yasuo Ogasawara, Eiji Toyota, Fumihiko Kajiya',
            'title': '*** No English title in DB***',
            'year': '2001',
            'book': 'Bio-Medical Engineering',
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
            'id': '1030',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Dial-Menu System: An Input Interface using a Human-Hand for Wearable Computers',
            'year': '2001',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '1031',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Augmented Reality Based Input Interface for Wearable Computers',
            'year': '2000',
            'book': 'Jean-Claude Heudin(Ed.), Lecture Notes in Artificial Intelligence',
            'doi': '',
            'type': 'journal',
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
            'id': '1032',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Joakim Brandberg, Per Ask',
            'title': '3-D Flow Visualization for Construction of the Model of the Blood Flow in the Heart',
            'year': '2000',
            'book': 'Japanese Journal of Applied Physics',
            'doi': '',
            'type': 'journal',
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
            'id': '1033',
            'author': 'Toshiyuki Umeda, Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Real-Time Telemedicine System using a Medical Ultrasound Image Sequence on a Low Bit-Rate Network',
            'year': '2000',
            'book': 'Japanese Journal of Applied Physics',
            'doi': '',
            'type': 'journal',
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
            'id': '1034',
            'author': 'Takatoshi Suenaga, Shigetoki Iino, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'An Instruction System of Manipulating Probe for Ultrasound Tele-Diagnosis',
            'year': '2000',
            'book': 'Transactions of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '1035',
            'author': 'Tomohiro Kuroda, Hiroshi Sasaki, Masaaki Nakano, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Method to Generate Side View from Frontal Image Sequence for Tele-Existence',
            'year': '2000',
            'book': 'Proceedings of Workshop on Real-Time Image Sequence Analysis',
            'doi': '',
            'type': 'conference',
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
            'id': '1036',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Real-Time Hand Motion Recognition for Input Interface based on Augmented Reality',
            'year': '2000',
            'book': 'Proceedings of Workshop on Real-Time Image Sequence Analysis',
            'doi': '',
            'type': 'conference',
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
            'id': '1037',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Joakim Brandberg, Per Ask',
            'title': 'In-vivo Blood Flow Visualization Using 3-D Reconstruction of Color Doppler Images',
            'year': '2000',
            'book': 'Proceedings of International Conference on Image and Graphics',
            'doi': '',
            'type': 'conference',
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
            'id': '1038',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Tele-Instruction System for Real-time Telemedicine',
            'year': '2000',
            'book': 'Proceedings of International Conference on Computers Helping People with Special Needs',
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
            'id': '1039',
            'author': 'Tomohiro Kuroda, Takatoshi Suenaga, Koichi Minami, Tomi Korpipaa, Hiroshi Sasaki, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Shared Augmented Reality for Remote Work Support',
            'year': '2000',
            'book': 'Proceedings of IFAC-MIM Symposium on Manufacturing, Modeling, Management and Control',
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
            'id': '1040',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Augmented Reality Based Input Interface for Wearable Computers',
            'year': '2000',
            'book': 'Jean-Claude Heudin(Ed.), Virtual Worlds, Lecture Notes in Artificial Intelligence',
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
            'id': '1041',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Tele-Instruction System for Real-Time Telemedicine',
            'year': '2000',
            'book': 'Proceedings of International Congress and Exhibition Computer Assisted Radiology and Surgery',
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
            'id': '1042',
            'author': 'Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'Motion Capture and Transmisstion Techniques for Sign Language',
            'year': '2000',
            'book': 'Proceedings of Conference on Gestures: Meaning and Use',
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
            'id': '1043',
            'author': 'Tomi Korpipaa, Koichi Minami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Shared Virtual Reality Interior Design System',
            'year': '2000',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
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
            'id': '1044',
            'author': 'Masataka Imura, Yoshito Tabata, Ichiro Kanaya, Tomohiro Kuroda, Yoshitsugu Manabe, Osamu Oshiro, Kunihiro Chihara',
            'title': 'Digital Archiving of Kamegata-Ishi (Turtle Shape Stone) using Heterogeneous Measurement Methods',
            'year': '2000',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
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
            'id': '1045',
            'author': 'Tomohiro Kuroda, Wakako Makari, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Automatic Generation of VRML Avatar Inheriting User\'s Figure',
            'year': '2000',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
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
            'id': '1046',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'NAIST Tele-echo Project',
            'year': '2000',
            'book': 'Proceedings of Workshop Telemedicine: Present and Future',
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
            'id': '1047',
            'author': 'Hiroshi Sasaki, Toshitaka Tateishi, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Wearable Computer for the Blind - Aiming at a Pedestrian\'s Intelligent Transport System',
            'year': '2000',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
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
            'id': '1048',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Finger Character Learning System with Visual Feedback',
            'year': '2000',
            'book': 'Proceedings of International Conference on Disability, Virtual Reality and Associated Technologies',
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
            'id': '1049',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Study on Hand Posture Recognition for Finger Character Learning System',
            'year': '2000',
            'book': 'Proceedings of Conference on Gestures: Meaning and Use',
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
            'id': '1050',
            'author': 'Koichi Minami, Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1051',
            'author': 'Mikako Murakami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1052',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1053',
            'author': 'Toshitaka Tateishi, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
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
            'id': '1054',
            'author': 'Ryo Shikata, Tomohiro Kuroda, Hiroyuki Seki, Kunihiro Chihara',
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
            'id': '1055',
            'author': 'Mikako Murakami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '1056',
            'author': 'Toshitaka Tateishi, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '1057',
            'author': 'Kenta Hori, Takeshi Tsuda, Takatoshi Suenaga, Tomohiro Kuroda, Mikio Suga, Hiroshi Oyama, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Masaru Komori, Takashi Takahashi',
            'title': 'Collaborative Communication System for Telesurgey',
            'year': '2000',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '1058',
            'author': 'Takeshi Tsuda, Kenta Hori, Takatoshi Suenaga, Tomohiro Kuroda, Mikio Suga, Hiroshi Oyama, Osamu Oshiro, Kotaro Minato, Kunihiro Chihara, Masaru Komori, Takashi Takahashi',
            'title': 'An Immersive Communication Support System for Telesurgery',
            'year': '2000',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '1059',
            'author': 'Kumi Kamada, Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Yasuo Ogasawara, Eiji Toyota, Fumihiko Kajiya',
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
            'id': '1060',
            'author': 'Yoshito Tabata, Mikako Murakami, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'A Study on Glove Type Sensor Structure for Hand Posture Measurement among Sign Language',
            'year': '2000',
            'book': 'Proceedings of Seminar on Sign Linguistic Engineering',
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
            'id': '1061',
            'author': 'Osamu Oshiro, Takatoshi Suenaga, Masataka Imura, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Autumn Conference of Japan Medical and Biological Engineers',
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
            'id': '1062',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
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
            'id': '1063',
            'author': 'Tomohiro Kuroda, Atsushi Nakamura, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference on Visualization Sosiety of Japan',
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
            'id': '1064',
            'author': 'Masaaki Nakano, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '1065',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference on Visualization Sosiety of Japan',
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
            'id': '1066',
            'author': 'Ryo Shikata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Meeting Support System for the Hearing Impaired',
            'year': '2000',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '1067',
            'author': 'Tatsuya Shuzui, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Data Structure of 3D Models for Heterogeneous Shared VR',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '1068',
            'author': 'Koichi Minami, Tomi Korpipaa, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Distributed Collaborative Work Support using Shared AR Environment - Shared Augmented Interior Design Space -',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '1069',
            'author': 'Mikako Murakami, Yoshito Tabata, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
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
            'id': '1070',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1071',
            'author': 'Tomi Korpipaa, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'Interior Design System using Two Heterogeneous Virtual Reality Platforms',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1072',
            'author': 'Tatsuya Shuzui, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1073',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
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
            'id': '1074',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': '*** No English title in DB***',
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
            'id': '1075',
            'author': 'Atsushi Nakamura, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '2000',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '1076',
            'author': 'Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Real-Time Medical Ultrasound Image Sequence Transmission System with Narrow Integrated Service Digital Network',
            'year': '1999',
            'book': 'Japanese Journal of Applied Physics',
            'doi': '',
            'type': 'journal',
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
            'id': '1077',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Yoshitsugu Manabe, Kunihiro Chihara',
            'title': 'HIT-Wear: A Menu System Superimposing on a Human Hand for Wearable Computers',
            'year': '1999',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
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
            'id': '1078',
            'author': 'Takatoshi Suenaga, Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Tele-Instruction System for Ultrasound Tele-diagnosis',
            'year': '1999',
            'book': 'Proceedings of International Conference on Artificial Reality and Tele-existence',
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
            'id': '1079',
            'author': 'Osamu Oshiro, Shigetoki Iino, Takatoshi Suenaga, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'An Instruction System to Manipulate US Probe in Tele-Echo',
            'year': '1999',
            'book': 'Proceedings of Joint BMES/EMBS Conference',
            'doi': '',
            'type': 'conference',
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
            'id': '1080',
            'author': 'Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'A Research on Visualization of Finger Spelling in Sign Animation',
            'year': '1999',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
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
            'id': '1081',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'A Study on Facial Action Visualization on S-TEL: An Avatar Based Sign Language Telecommunication System',
            'year': '1999',
            'book': 'Proceedings of CSUN\'s Annual International Conference, Technology and Persons with Disabilities, Web Proceedings',
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
            'id': '1082',
            'author': 'Wakako Makari, Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1083',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1084',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1085',
            'author': 'Atsushi Nakamura, Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
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
            'id': '1086',
            'author': 'Tomohiro Kuroda, Kunihiro Chihara',
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
            'id': '1087',
            'author': 'Masao Kitade, Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Bio-Medical Engineering',
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
            'id': '1088',
            'author': 'Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Bio-Medical Engineering',
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
            'id': '1089',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Technical Report of Japan Society of Educational Technology',
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
            'id': '1090',
            'author': 'Tomohiro Kuroda, Takatoshi Suenaga, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '1091',
            'author': 'Masataka Imura, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara, Joakim Brandberg, Per Ask',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Symposium on Ultrasonic Electronics',
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
            'id': '1092',
            'author': 'Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Symposium on Ultrasonic Electronics',
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
            'id': '1093',
            'author': 'Masaaki Nakano, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Japan Joint Automatic Control Conference',
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
            'id': '1094',
            'author': 'Tomohiro Kuroda, Yoshito Tabata, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '1095',
            'author': 'Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
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
            'id': '1096',
            'author': 'Shigetoki Iino, Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Bio-Medical Engineering',
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
            'id': '1097',
            'author': 'Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'A Method for Legible Sign Animation by On-demand Expansion of Avatar\'s Hand',
            'year': '1999',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '1098',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'A Method to Evaluate Finger Characters for Finger Spelling Learning System',
            'year': '1999',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '1099',
            'author': 'Atsushi Nakamura, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '1100',
            'author': 'Wakako Makari, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'Automatic Generation of Avatar Inheriting User\'s Figure',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '1101',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Kunihiro Chihara',
            'title': 'Hit-Wear: A Menu System Superimposing on a Human Hand for Wearable Computer',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '1102',
            'author': 'Takatoshi Suenaga, Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Tele-instruction System for Ultrasound Telediagnosis',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '1103',
            'author': 'Hiroshi Sasaki, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '\'Hit-Wear\': a Input Interface for Wearable Computers utilizing Visual Feedback and Physical Sense',
            'year': '1999',
            'book': 'Correspondences on Human Interface',
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
            'id': '1104',
            'author': 'Yoshito Tabata, Tomohiro Kuroda, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
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
            'id': '1105',
            'author': 'Takatoshi Suenaga, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1106',
            'author': 'Toshiyuki Umeda, Tomohiro Kuroda, Osamu Oshiro, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1107',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': '*** No English title in DB***',
            'year': '1999',
            'book': 'Bio-Medical Engineering',
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
            'id': '1108',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: An Avatar Based Sign Language Telecommunication System',
            'year': '1998',
            'book': 'International Journal of Virtual Reality',
            'doi': '',
            'type': 'journal',
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
            'id': '1109',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: An Avatar Based Sign Language Telephone',
            'year': '1998',
            'book': 'Transactions of the Virtual Reality Society of Japan',
            'doi': '',
            'type': 'journal',
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
            'id': '1110',
            'author': 'Tomohiro Kuroda',
            'title': 'A Study on Avatar Based Sign Communication -S-TEL : a Sign Language Telephone-',
            'year': '1998',
            'book': 'Doctoral Thesis, Nara Institute of Science and Technology',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{1998-journal-papers-1,
 author = {Tomohiro Kuroda},
 journal = {Doctoral Thesis, Nara Institute of Science and Technology},
 title = {A Study on Avatar Based Sign Communication -S-TEL : a Sign Language Telephone-},
 year = {1998}
}`
            },

  {
            'id': '1111',
            'author': 'Tomohiro Kuroda, Ayumu Matani, Kunihiro Chihara',
            'title': 'A Method to Support Tele-Diagnosis using Augmented Reality',
            'year': '1998',
            'book': 'Proceedings of International Symposium on Computational Medicine III',
            'doi': '',
            'type': 'conference',
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
            'id': '1112',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: An Avatar Based Sign Language Telecommunication System',
            'year': '1998',
            'book': 'Proceedings of European Conference on Disability, Virtual Reality and Associated Technologies',
            'doi': '',
            'type': 'conference',
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
            'id': '1113',
            'author': 'Tomohiro Kuroda',
            'title': 'New Image Compression Technique for Sector Scan Ultrasound Image',
            'year': '1998',
            'book': 'Lecture Notes of ICB Seminars -Ultrasound in Biomeasurements, Diagnostics and Therapy-',
            'doi': '',
            'type': 'conference',
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
            'id': '1114',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'A Study on Facia Action Handling on Avatar Based Sign Language Telecommunication',
            'year': '1998',
            'book': 'Human Interface News and Report',
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
            'id': '1115',
            'author': 'Masao Kitade, Tomohiro Kuroda, Ayumu Matani, Osamu Oshiro, Kunihiro Chihara',
            'title': 'A Method for Compressing and Transmitting Ultrasound B-mode Image in Telediagnosis',
            'year': '1998',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '1116',
            'author': 'Shigetoki Iino, Tomohiro Kuroda, Ayumu Matani, Osamu Oshiro, Kunihiro Chihara',
            'title': 'An Instruction System for Ultrasound Tele Diagnosis using Augmented Reality',
            'year': '1998',
            'book': 'Proceedings of Joint Conference on Medical Informatics',
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
            'id': '1117',
            'author': 'Shigetoki Iino, Tomohiro Kuroda, Ayumu Matani, Osamu Oshiro, Kunihiro Chihara',
            'title': 'An Instruction System for Ultrasound Tele Diagnosis using Augmented Reality',
            'year': '1998',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '1118',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Analysis on Facial Expression Parameters suitable for Avatar-based Sign Language Communication',
            'year': '1998',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
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
            'id': '1119',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Basic Research on Display of Facial Expression on Avatar Based Sign Language Telecommunication System',
            'year': '1998',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1120',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'A Study on Readability of Computer-Graphics Signs in Sign Language Telecommunication System: S-TEL',
            'year': '1997',
            'book': 'Japanese Journal of Sign Linguistics',
            'doi': '',
            'type': 'journal',
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
            'id': '1121',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: VR-based Sign Language Telecommunication System',
            'year': '1997',
            'book': 'Abridged Proceedings of  International Conference on Human-Computer Interaction',
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
            'id': '1122',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: A Sign Language Telephone using Virtual Reality Technologies',
            'year': '1997',
            'book': 'Proceedings of CSUN\'s Annual International Conference, Technology and Persons with Disabilities',
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
            'id': '1123',
            'author': 'Kosuke Sato, Tomohiro Kuroda',
            'title': 'Research of Facial Expression Transmission on Avatar-based Sign Language Telecommunication S-TEL',
            'year': '1997',
            'book': 'Proceedings of Symposium on MEXT Virtual Reality Project',
            'doi': '',
            'type': 'conference',
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
            'id': '1124',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'An Estimation of Upper Body Motion with Three Magnetic Sensors',
            'year': '1997',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '1125',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Basic Analysis of Facial Expression Transmission on S-TEL A Sign Language Telephone',
            'year': '1997',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
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
            'id': '1126',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Sign Language Telephone using Virtual Avatar and Facial Image',
            'year': '1997',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1127',
            'author': 'Tomohiro Kuroda',
            'title': 'S-TEL : A Telecommunication System for Sign Language',
            'year': '1996',
            'book': 'Master\'s Thesis, Nara Institute of Science and Technology',
            'doi': '',
            'type': 'journal',
            'bibtex': `@article{1996-journal-papers-1,
 author = {Tomohiro Kuroda},
 journal = {Master's Thesis, Nara Institute of Science and Technology},
 title = {S-TEL : A Telecommunication System for Sign Language},
 year = {1996}
}`
            },

  {
            'id': '1128',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Reconstruction of Signer\'s Action in a VR Telecommunication System for Sign Language',
            'year': '1996',
            'book': 'Proceedings of International Conference on Virtual Systems and Multimedia',
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
            'id': '1129',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL: A Telecommunication System for Sign Language',
            'year': '1996',
            'book': 'Conference Companion of Asia Pacific Computer Human Interaction',
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
            'id': '1130',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'S-TEL : A Sign Language Telephone',
            'year': '1996',
            'book': 'Technical Report of the Institute of Electronics, Information and Communication Engineers',
            'doi': '',
            'type': 'conference',
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
            'id': '1131',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Reconstructing Upper-body Motion of Signers in S-TEL : A Tele-communication System for Sign Language',
            'year': '1996',
            'book': 'Proceedings of Annual Conference of the Virtual Reality Society of Japan',
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
            'id': '1132',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'Basic Analysis on Communication Bandwidth of S-TEL A Sign Language Telephone',
            'year': '1996',
            'book': 'Proceedings of Annual Conference of Japanese Association of Sign Linguistics',
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
            'id': '1133',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'A VR Telecommunication System in Sign Language',
            'year': '1995',
            'book': 'Proceedings of Human Interface Symposium',
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
            'id': '1134',
            'author': 'Tomohiro Kuroda, Kosuke Sato, Kunihiro Chihara',
            'title': 'System Configuration of 3D Visual Telecommunication in Sign Language',
            'year': '1995',
            'book': 'Proceedings of Annual Conference of the institute of Systems, Control and Information Engineers',
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
            'id': '1135',
            'author': 'Yuji Tsuhima, Hideya Akashi, Jin Xi Du, Masahiro Susukita, Tomohiro Kuroda, Shinichiro Mori, Hiroshi Nakashima, Shinji Tomita',
            'title': 'A Parallel Computer Architecture for Volume Rendering',
            'year': '1994',
            'book': 'Proceedings of Joint Symposium on Parallel Processing',
            'doi': '',
            'type': 'conference',
            'bibtex': `inproceedings{1994-domestic-conferences-1,
 author = {Yuji Tsuhima and Hideya Akashi and Jin Xi Du and Masahiro Susukita and Tomohiro Kuroda and Shinichiro Mori and Hiroshi Nakashima and Shinji Tomita},
 booktitle = {Proceedings of Joint Symposium on Parallel Processing},
 pages = {89-96},
 title = {A Parallel Computer Architecture for Volume Rendering},
 venue = {Tsukuba/Japan},
 year = {1994}
}`
            },

],

                }
            }
        })
        