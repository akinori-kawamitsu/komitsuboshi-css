# kicss ver 0.2beta
Bootstrap, Foundationを参考にして作ったCSSフレームワークです。

##コンセプト
-軽量
-分かりやすく
-カスタマイズしやすく
-WordPress対応
-ネーミングはBEMっぽく

##ver0.1bata概要
ブラウザチェックがまだなのでbata版としています。
確認済みブラウザ
Firefox 45, IE8,9,10(IE11開発者モードにて確認),IE11 

###グリッドレイアウト
[target]=sp（スマートフォン:320~480px）, tab（タブレット:481~768px）, pc（パソコン:769~）
[size]=1~12, 1r~12r, 1by5~4by5, 1by5~4by5r, 1by7~6by7, 1by7~6by7r

コンテナとして、float, flex, flex-r, flex-[target]-eq を用意しています。

floatはBootstrapにおけるrowと同じです。（衝突を避けるため、row-colではなく、float-colのセットとなります）
float の代わりにflexを使うと、子要素はflexboxレイアウトになります。右詰めで行う場合はflex-r

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

###ie8.scss, ie9.scss, ie10.scss
ie8,9,10用のファイルです。
ie8はメディアクエリ非対応です。またcontainerの最小幅をspサイズの最大値（デフォルトでは480px）に制限しています。
flexboxをカバーするため、IE9以下ではjquery.matchHeight.jsを読み込んでいます。
ie10以下では、flexboxの等幅分割をdisplay:table;,display:table-cell;で代用しています。

###jquery.matchHeight.js
ie8,9でflexboxと同等の表示にするためのプラグインです。
 jquery-match-height master by @liabru
 http://brm.io/jquery-match-height/
WordPressでも動作するようにカプセル化しています。(ver 0.2beta)

###kicss.js
画像キャプション機能を提供するjQueryを入れています。(ver 0.2beta)

csscomb.json
WordPressのコードディング基準に合わせるためのcsscombファイル。
https://github.com/cedaro/grunt-wp-css/blob/develop/tasks/config/default.json
bradyvercher氏作。
