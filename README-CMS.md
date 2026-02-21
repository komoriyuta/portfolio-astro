# ヘッドレスCMS（別リポジトリ）化の手順

静的サイトであるAstroにおいて、MarkdownやJSONの設定ファイルだけを切り離して管理（CMS化）する手順です。

## 1. 記事用リポジトリの作成
1. GitHub等のGitホスティングサービスで新しいリポジトリを作成します（例： `portfolio-content`）。
2. この Astro プロジェクトの `src/content` や `src/data` フォルダの中身を、その `portfolio-content` リポジトリへPushします。

## 2. サブモジュールとしての登録
Astro本体のリポジトリで以下を実行し、先ほどのリポジトリを2. `src/content/` フォルダ内で以下のコマンドを実行し、ファイルをプッシュします。
```bash
cd src/content
git branch -M main
git remote add origin https://github.com/あなたのID/ポートフォリオ用リポジトリ.git
git push -u origin main
```

## 3. GitHub Actions の連携（Webhooks の設定）
2. **記事リポジトリ側に Actions を追加**: コミット時に以下のようにつなぎこむファイル（`.github/workflows/trigger.yml`など）を作成します。

```yaml
name: Trigger Parent Repo Build
on:
  push:
    branches:
      - main
jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Repository Dispatch
        uses: peter-evans/repository-dispatch@v2
        with:
          token: ${{ secrets.PAT }}
          repository: ユーザー名/Astro本体リポジトリ名
          event-type: content-update
```
※ Astro本体側の `.github/workflows/deploy.yml` は既にこのイベント（`content-update`）を受け取るよう設定されています。
