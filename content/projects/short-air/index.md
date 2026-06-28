---
title: "Short Air"
titleEn: "Short Air"
period: "2024"
date: 2024-08-01
description: "Open Hack U 2024 TOKYOで作った空中ジェスチャー入力デバイス。赤外線距離センサとESP32で手の動きを読む。"
thumbnail: "./short-air-720.jpg"
tags: ["ESP32", "TensorFlow Lite", "MLP", "赤外線距離センサー", "3Dプリンタ"]
links:
  - label: "GitHub"
    url: "https://github.com/komoriyuta/OpenHackU_ShortAir_ML"
---

Open Hack U 2024 TOKYOで作った空中ジェスチャー入力デバイス。

左手デバイスを見て、手が汚れていても操作できる入力機器を作りたくなった。
ポテトチップスを食べながらPCを触ると、キーボードに油がつく。
それを避けたかった、というかなり雑な動機。

赤外線距離センサーを5つ載せ、手の動きを距離の時系列として取る。
ジェスチャー分類には小さなMLPを使い、TensorFlow Lite for MicrocontrollersでESP32上に載せた。
PC側に推論を逃がさないので、別の機器にも持っていきやすい。
