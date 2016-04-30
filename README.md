# komitsuboshi-css ver 0.5
Bootstrap, Foundationを参考にして作ったCSSフレームワークです。

##コンセプト
-軽量
-分かりやすく
-カスタマイズしやすく
-WordPress対応
-ネーミングはBEMっぽく

##ver0.5概要
確認済みブラウザ
Firefox 45, IE8,9,10(IE11開発者モードにて確認),IE11 
Mac Safari, Mac Chrome,
iOS Safari, iOS Choreme

###グリッドレイアウト
基本構造
<code>
&lt;div class="float"&gt;
  &lt;div class="col-[target]-[size]"&gt;&lt;/div&gt;
&lt;/div&gt;
</code>
[target]=sp, tab, pc
  sp（スマートフォン:320~480px）
  tab（タブレット:481~768px）
  pc（パソコン:769~）
[size]=1~12, 1r~12r, 1by5~4by5, 1by5~4by5r, 1by7~6by7, 1by7~6by7r
　基本的に左詰めで、末尾にrを付けた要素は右詰めになります。混在させることもできます。
 1~12は12分割で占める割合です。また、1by5~4by5は5分の1から5分の4、1by7~6by7は7分の1から7分の6を表しています。

親要素に指定するクラス名はfloatの他, flex, flex-r, flex-[target]-eq を用意しています。

floatはBootstrapにおけるrowと同じです。子要素はfloatプロパティで横並びになります。
flexを使うと、子要素はflexboxレイアウトになります。この場合子要素にrがついていても左から順に並びます。
子要素を右詰めで行う場合は親要素のclassはflex-rになります。この場合子要素にrがついていなくても右から並びます。
しかし、IE9以下ではfloatレイアウトのままなので、子要素のrの有無でレイアウトが変わってしまいます。flex-rを用いる場合、子要素の末尾にはすべてrをつけてください。

flex-[target]-eq は、均等分割です。要素間にスペースはありません。

グリッド間のマージンは固定値で指定できます。
また、sp, tab, pcのそれぞれで異なるマージンを指定できます。この値は_parameter.scssで変更します。

そのほかの変数も、_parameter.scssで管理します。

##各ファイルの説明
###style.scss
komitsuboshi-cssの主要ファイルをまとめています。

###reset.scss
normalize.css v4.0.0　と、独自に追加した記述があります。

###_parameter.scss
グリッドのマージンや色など、変数はこのファイルでまとめて管理しています。
（componentに使われる変数は、それぞれのconponentファイル内で定義します）

###base.scss
h1～h6, p, imgなど、基本的な要素について記述しています。

###grid.scss
このフレームワークの中心になるグリッドシステムのファイルです。

###component.scss
追加機能をまとめています。
追加機能によっては別途JavaScriptファイルの読み込みが必要になります。それらはjsフォルダに収めています。

###wordpress.scss
WordPressが付与するクラスのカスタマイズはこのファイルで行います。

###decoration.scss
案件によっていろいろカスタマイズするプロパティはここに記述してください。

###ie8.scss, ie9.scss, ie10.scss
ie8,9,10用のファイルです。
ie8はメディアクエリ非対応です。またcontainerの最小幅をspサイズの最大値（デフォルトでは480px）に制限しています。
flexboxをカバーするため、IE9以下ではjquery.matchHeight.jsを読み込んでいます。
ie10以下では、flexboxの等幅分割をdisplay:table;,display:table-cell;で代用しています。

###jquery.matchHeight.js
ie8,9でflexboxと同等の表示にするためのプラグインです。
 jquery-match-height master by @liabru
 http://brm.io/jquery-match-height/
WordPressでも動作するようにカプセル化しました。(ver 0.2beta)

###kicss.js
画像キャプション機能を提供するjQueryを入れています。(ver 0.2beta)

csscomb.json
WordPressのコードディング基準に合わせるためのcsscombファイル。
https://github.com/cedaro/grunt-wp-css/blob/develop/tasks/config/default.json
bradyvercher氏作。

##変更履歴
0.1alfa　grid.cssほぼ完成。
0.2beta　クラス名rowをfloatに変更。Windowsの主要ブラウザのデバッグ。
0.3　名前をkicssからkomitsuboshi-cssに変更（同名がすでにあった）。Mac,iOSの主要ブラウザの動作確認。
0.4　ファイル・フォルダを整理。decoration.scssをデフォルトの読み込みから削除。
0.5　readmeフォルダ作成。使い方などはここのindex.htmlにまとめた。