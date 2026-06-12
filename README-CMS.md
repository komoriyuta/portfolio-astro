# コンテンツ更新手順

このポートフォリオは、Astro 本体とコンテンツを `portfolio-astro` リポジトリだけで管理します。

- プロジェクト記事と画像: `content/projects/`
- タグ分類: `content/data/tag-categories.json`
- サイト実装: `src/`

`main` ブランチへ Push すると、GitHub Actions がサイトをビルドして GitHub Pages へデプロイします。
別リポジトリ用の PAT や連携用 Actions は不要です。
