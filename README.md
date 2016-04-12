# kicss ver 0.1alfa
Bootstrap, Foundationを参考にして作ったCSSフレームワークです。

##コンセプト
-軽量
-分かりやすく
-カスタマイズしやすく
-WordPress対応
-ネーミングはBEMっぽく

##ver0.1alfa概要
ブラウザチェックがまだなのでalfa版としています。
確認済みブラウザ
Firefox 45

###グリッドレイアウト
[target]=sp（スマートフォン:320~480px）, tab（タブレット:481~768px）, pc（パソコン:769~）
[size]=1~12, 1r~12r, 1by5~4by5, 1by5~4by5r, 1by7~6by7, 1by7~6by7r

コンテナとして、row, flex, flex-r, flex-[target]-eq を用意しています。

row の代わりにflexを使うと、子要素はflexboxレイアウトになります。右詰めで行う場合はflex-r

flex-[target]-eq は、均等分割です。要素間にスペースはありません。

子要素は、col-[target]-[size] で12グリッドレイアウト。
デフォルトで float:left; 
末尾にrをつけるとfloat:right; となります。（例：col-sp-6r）
1~12は12分割で占める割合です。また、1by5~4by5は5分の1から5分の4、1by7~6by7は7分の1から7分の6を表しています。

グリッド間のマージンは固定値で指定できます。
また、sp, tab, pcのそれぞれで異なるマージンを指定できます。

使用する変数は_parameter.scssで管理します。

##各ファイルの説明
###style.scss
kicssの主要ファイルをまとめています。

###reset.scss
normalize.css v4.0.0　に少し追記したものを使用しています。

###_parameter.scss
グリッドのマージンや色などはこのファイルで管理できます。

###base.scss
h1～h6, p, imgなど、基本的な要素について記述しています。

###grid.scss
このフレームワークの中心になるグリッドシステムのファイルです。

###component.scss
サイトの部品類をまとめています。ver0.1betaではパン屑リストのみ。

###wordpress.scss
WordPressが付与するクラスのカスタマイズはこのファイルで行います。

###decoration.scss
案件によっていろいろカスタマイズするであろう要素のファイルです。

###ie8.scss
ie8用のファイルです。ver0.1alfa の時点ではまだ不十分です。

csscomb.json
WordPressのコードディング基準に合わせるためのcsscombファイル。
https://github.com/cedaro/grunt-wp-css/blob/develop/tasks/config/default.json
bradyvercher氏制作。MITライセンス。
