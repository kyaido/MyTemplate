MyTemplate
==========

## 案件に合わせて修正する個所
- jQuery、modernizr、normalize のバージョンを最新に
- _vars.scss の内容を修正
- Gruntfile.js
    - compass の設定
    - autoprefixer のブラウザバージョン

## クラス名
モジュールのクラス名に一定の命名規則を持たせるために参考にする  
下記を参考に、自分ルールを追加  
http://geckotang.tumblr.com/post/69554882865/bem-words  

### 色々組み合わせて使いそうなもの
- hero........... mainVisualになるものに使いたい
- main........... 主となるもの
- sub............ 主となるものに付随して補足するもの
- huge........... huge &gt; large &gt; small
- large.......... でかい
- small.......... 小さい
- prev........... 前（previousだけど長いから略語）
- next........... 次
- local.......... 一部のページだけで使う
- global......... 全体のページで使う
- extra.......... なんか違うスタイル適用させたいときの最終候補

### 何かを囲む時に使いそうなもの
- outer.......... wrapperではなくouterを使う
- inner.......... 内側の要素を囲む場合はinner
- media.......... 画像やテキストを内包する
- block.......... モジュールの起点となるものはblock、blockの中にbox、block &gt; box
- col............ カラムにはcol

### 機能を持ってそうなもの
- tab............ タブ
- nav............ ナビゲーション
- heading........ 見出し
- title.......... 見出しじゃないけどblockやboxの見出しみたいなものに使う
- list........... 一覧的なもの
- item........... 子要素用の名前
- slider......... スライドするコンテンツ
- tooltip........ ツールチップ
- banner......... バナー用

### 文章とか
- article........ 記事、本文
- caption........ 画像や表につく補足文
- description.... 説明文章。
- note........... 補助的な文章,何かの情報に付随する文章に。
- text........... 普通の文が入る。なんでもない文章。

### 画像とかで使いそうなもの
- logo........... ロゴ
- thumb.......... サムネイル画像（thumbnailは長いのでthumbに）
- image.......... サムネイルではない画像
- icon........... アイコン

### フォームとかで使いそうなもの
- button......... ボタン（場合によってはbtn）
- search......... 検索する要素
- textfield...... 1行入力エリア
- textarea....... 複数行入力エリア用

### Modifierのサンプル
- isActive...... 現在地表示（currentとかぶる気がしたのでactiveで）
- isDisabled.... 機能が無効になっているもの
- isVisible..... もともと非表示なものが、表示された
- isHidden...... 非表示にしているもの
- isOpened...... 何かが開いている状態
- isClosed...... 何かが閉じている状態
- hasButton..... ボタンを含んでいる