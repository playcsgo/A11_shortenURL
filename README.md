短網址處理網頁
====
AC 2-3後端_A11作業_縮網址

專案畫面
---
![image](https://playcsgo.github.io/A11_shortenURL/public/pictures/1.png)
-------
![image](https://playcsgo.github.io/A11_shortenURL/public/pictures/2.png)
-------
產品功能
-----
- 將網址轉換為長度一致的新網址
- 轉換後可直接連結 或是 複製新網址

使用套件
-----
- express: 4.18.2
- express-handlebars: 7.0.1
- method-override: 3.0.0
- mongoose": "^7.0.0
- dotenv: 16.0.3


安裝方式
----
1.使用終端機於套件覆蓋路徑, ，Clone 此專案, 

    $ git clone https://github.com/playcsgo/A11_shortenURL.git
    
2.安裝套件
    前往專案檔案根目錄
    $ npm i express express-handlebars method-override mongoose dotenv
    
3.於專案根目錄下創建.env檔案 

    將mongoDB的連線字串複製上來
    MONGODB_URI = 連線字串
    
4.啟動
    
    前往專案檔案根目錄
    
    使用者模式:
    $ npm run start  
    開發模式:
    $ npm run dev
    
    出現以下訊息表示成功開啟
    express is runing on http://localhost3000
    mongoDB connected!!
