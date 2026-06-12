---
title: "市民参加型大規模3D再構成プラットフォームの構築と実証"
titleEn: "reschene"
period: "2025–"
date: 2025-05-01
description: "農工大学生プロジェクト。3D Gaussian Splatting x 市民参加型で公共の大規模な3Dデータをつくるシステムの提案。"
thumbnail: "./reschene.jpg"
tags: ["Flutter","学生プロジェクト","3D Gaussian Splatting"]
links:
  - label: "アプリのGitHub"
    url: "https://github.com/komoriyuta/reschene_app/"
---

農工大の”学生プロジェクト”という支援を受けた。3D Gaussian Splattingと市民参加型のアプローチを組み合わせて、公共の大規模な3Dデータをつくるシステムの提案とプロトタイプの開発を行った。

アプリはFlutterで開発した。スマホで撮影した写真をアップロードしてもらい、サーバー上で3D Gaussian Splattingのアルゴリズムを用いて3Dモデルを生成する。
スマホ側では、再構成に向いた画像の撮り方をガイドする機能や、使えない画像をフィルタリングする機能なども実装している。

サーバー側では3D Gaussian Splattingデータを作る。そのままのアルゴリズムでは処理時間が長すぎるため、ニューラルネットワークによる疎点群推定・カメラパラメータの推定などを採用したり、3DGS自体のアルゴリズムも工夫を行った。