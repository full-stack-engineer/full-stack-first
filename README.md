# フルスタックエンジニアへの第一歩
```
docker-compose up -d
```
下のコマンドでホットリロードを有効にできる（多分）

- 参考サイト
  - [ReactをつかったRuby on Railsをプロジェクトのはじめかた（with Docker）](https://futurismo.biz/how-to-start-react-rails-app/)
  - [RailsアプリにWebpacker(React + TypeScript)をセットアップする](https://qiita.com/yokoto/items/97e70ba3ef2436aa6dd7)

clone後にwebコンテナで実行するコマンド
```
rails db:create
rails db:migrate

docker-compose run web rails webpacker:install
docker-compose run web rails webpacker:install:react
docker-compose run web rails webpacker:install:typescript
```
多分何かの競合でエラーが出現するので頑張ってください
