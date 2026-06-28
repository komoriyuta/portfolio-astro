---
title: "市民参加型大規模3D再構成プラットフォームの構築と実証"
titleEn: "reschene"
period: "2025–"
date: 2025-05-01
description: "農工大学生プロジェクト。参加者が撮った写真を集め、公共空間の3D Gaussian Splattingデータを作る試作。"
thumbnail: "./reschene.jpg"
tags: ["Flutter", "機械学習", "学生プロジェクト", "3D Gaussian Splatting"]
links:
  - label: "アプリのGitHub"
    url: "https://github.com/komoriyuta/reschene_app/"
---

農工大の「学生プロジェクト」という支援を受けて進めた。
3D Gaussian Splattingと市民参加型の写真収集を組み合わせ、公共空間の3Dデータを作る仕組みを試作した。

アプリはFlutterで開発した。
スマホで撮影した写真をアップロードしてもらい、サーバー上で3D Gaussian Splattingの処理にかける。
スマホ側には、再構成に向いた撮り方をガイドする機能と、使いにくい画像を弾く機能を入れた。

サーバー側では3D Gaussian Splattingデータを作る。
そのままの手順だと時間がかかりすぎるので、ニューラルネットワークによる疎点群推定やカメラパラメータ推定を試した。
3DGS本体の処理も、実験しながら軽くしている途中。
