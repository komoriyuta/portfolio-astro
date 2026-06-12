---
title: "Short Air"
titleEn: "Short Air"
period: "2024"
date: 2024-08-01
description: "Open Hack U 2024 TOKYOで作成した空中ジェスチャー入力デバイス。赤外線距離センサで手の動きを検出し、ESP32上でTensorFlow Lite for Microcontrollersによるリアルタイム推論でジェスチャーを認識する。"
thumbnail: "./short-air.png"
tags: ["ESP32", "TF Lite", "MLP", "3Dプリンタ"]
links:
  - label: "GitHub"
    url: "https://github.com/komoriyuta/OpenHackU_ShortAir_ML"
---

Open Hack U 2024 TOKYOで作成した空中ジェスチャー入力デバイス。

左手デバイスに着想を得て開発、ポテトチップスを食べていても、片手で操作できるようにしたいと思い、空中ジェスチャー入力デバイスを作成した。

赤外線距離センサーを5つ搭載して、手の動きを検出し、簡単なMLPでジェスチャーを分類している。このMLPはESP32上で動いているので、他のデバイスに持って行っても動かすことができる。
