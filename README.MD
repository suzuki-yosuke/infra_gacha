# 0.事前準備

* 変数設定
export PROJECT_ID=<_hoge_>
export BUCKET_NAME=infra_gacha
export APP_NAME=gacha

* CloudFunction準備
https://cloud.google.com/functions/docs/quickstart?refresh=1&authuser=1

* Bucket準備
gsutil mb -p ${PROJECT_ID} gs://${BUCKET_NAME}


*  参考URL
https://github.com/GoogleCloudPlatform/slack-samples


# 1. CloudFunction単体テスト
## デプロイ
* コマンド
```
gcloud beta functions deploy ${APP_NAME} --stage-bucket ${BUCKET_NAME} --trigger-topic ${APP_NAME}
```
* URL
https://cloud.google.com/sdk/gcloud/reference/beta/functions/?authuser=0&hl=ja

## Function実行
```
gcloud beta functions call ${APP_NAME} --data '{"message":"First Messages!"}'
```
## ログの確認
```
gcloud beta functions logs read ${APP_NAME}
```

# 2. Slack→CloudFunction連携





# 3. CloundFunctionからNoSQLのデータ取得

# 4. Slack~ColoudFunction~NoSQL連携

# 5. GCSに保管されてデータを表示

# 6. Kintoneで管理画面
