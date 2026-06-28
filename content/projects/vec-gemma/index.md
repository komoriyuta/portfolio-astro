---
title: "vec_gemma"
titleEn: "Connecting Sentence Embeddings and Gemma"
period: "2025"
date: 2025-01-23
description: "Sentence Transformerの文章ベクトルをGemmaの入力埋め込みへ変換し、元の文章を復元できるか試した実験。"
thumbnail: "./vec-gemma.svg"
tags: ["Python", "PyTorch", "Gemma", "Sentence Transformers", "Embedding", "VAE", "MLP", "LLM", "分散学習"]
links:
  - label: "GitHub"
    url: "https://github.com/komoriyuta/vec_gemma"
---

文章埋め込みモデルが作るベクトルから、言語モデルで元の文章を戻せるか試した実験。
うまくいけば面白いと思ったが、まだ精度は足りていない。

Sentence Transformerで得た文章埋め込みをVAEへ入力し、Gemma 2のトークン埋め込みと同じ次元へ変換する。変換したベクトルをGemmaの初期埋め込みとして渡し、入力文章を再構成するように学習させた。

学習するのは、二つの埋め込み空間をつなぐVAEまたは多層パーセプトロンだけにした。
文章埋め込みモデルとGemma本体は固定している。
日本語Wikipedia文章データセットを使った学習処理、KLダイバージェンスを含む損失、生成サンプルのTensorBoard記録、チェックポイント保存を実装した。

複数GPUで試せるよう、PyTorch Distributed Data Parallelを使った学習コードも作った。

意味ベクトルを連続的に動かして文章生成へつなぐところまで行きたかった。
ただ、十分な再構成精度や定量評価までは届いていない。
