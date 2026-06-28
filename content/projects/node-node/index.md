---
title: "Node×Node"
titleEn: "Neural Network Strategy Game"
period: "2026"
date: 2026-03-18
description: "ニューラルネットワークを自分で組み、Toy Problemを解くブラウザゲーム。層や活性化関数はスキルツリーで解放する。"
thumbnail: "./node-node.png"
images:
  - "./skills.png"
  - "./nodes.png"
video:
  title: "Node×Nodeデモ"
  src: "./node-node-demo.mp4"
  caption: "スキルツリーで要素を解放し、ネットワークを組んでステージを進める流れ。"
tags: ["TypeScript", "React", "TensorFlow.js", "React Flow", "Zustand", "Graph UI", "機械学習", "ゲーム開発", "共同開発"]
links:
  - label: "App"
    url: "https://tuatmcc.github.io/Hackathon2026Spring-A/"
  - label: "GitHub"
    url: "https://github.com/tuatmcc/Hackathon2026Spring-A"
---

東京農工大学マイクロコンピュータクラブ（MCC / GitHub: [tuatmcc](https://github.com/tuatmcc)）のハッカソンで共同開発したゲーム。
ニューラルネットワークを自分で組んで、Toy Problemを解いていく。

プレイヤーはスキルツリーから層、活性化関数、オプティマイザ、正則化などを解放する。
解放した要素だけでネットワークを組み、線形分類、XOR、関数近似、手書き数字認識などのステージを進める。

React FlowのネットワークエディタとTensorFlow.jsを接続し、ブラウザ上でモデルを組み立て、学習し、結果を可視化できるようにした。
パラメータ数制限や未解放要素の制限があるので、ただ大きいモデルを作れば勝てるわけではない。

ゲーム画面では、解いたステージに応じて使える部品が増えていく。
モデルを組む画面とステージ攻略の画面を行き来しながら、ニューラルネットワークを少しずつ強くしていく作りにした。

私は初期設計から参加し、ネットワークエディタ、学習処理、データセット、スキルツリー、ゲーム画面、テスト、リファクタリングを担当した。
特に、不完全なグラフの検証、層の接続と削除、学習停止、パラメータ数制限、手書き数字認識ステージを実装した。
