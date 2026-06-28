---
title: "農工祭インタラクティブアート2024"
titleEn: "Interactive Art Installation"
period: "2024"
date: 2024-11-09
description: "GDGoC TUATとステージ研究会の合同展示。来場者が入力した文章をベクトル化し、Unity上で星のように並べた。"
thumbnail: "./interactive-art.jpeg"
tags: ["Python", "Unity", "Arduino", "Embedding", "PCA", "LLM", "ArUCo", "イベント運営", "学生プロジェクト"]
links:
  - label: "解析デモ"
    url: "https://github.com/komoriyuta/embedding-plot-for-noukou-interactive"
---

学部一年の時に、ステージ研究会と私が所属するGDGoCで作った展示。
旅先に置いてあるノートから着想して、来場者が残した文章をまとめて眺められる作品にした。

来場者が入力した文章は、星としてプロットされる。
星だけを見ても元の文章はわからない。
ただ、近い文章が近くに置かれたり、星同士がつながって新しい言葉が出たりすると、自分の言葉が他の人の言葉と少しだけ混ざる。

それぞれの文はGoogleのEmbedding APIでベクトル化した。
そのままだと高次元なので、PCAで4次元に落とす。
さらに時間で変わる4x3の回転行列をかけて、Unity上の3次元空間にプロットした。
少しやりすぎなくらい回るが、展示ではそれくらいのほうが見ていて分かりやすかった。

新しい文章は、LLMに二つの文を渡して、その中間っぽい文を作らせた。
生成した文は画面中央付近に置いた箱の上へ投影する。
箱にはAruCoマーカーを貼り、Unity上のPlaneを重ねて位置合わせした。
