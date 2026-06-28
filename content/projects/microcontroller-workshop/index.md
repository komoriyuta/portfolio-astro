---
title: "マイコン講習会教材"
titleEn: "Microcontroller Workshop Materials"
period: "2025"
date: 2025-08-19
description: "電脳サークル向けのマイコン講習会教材。Raspberry Pi PicoとPlatformIOで、回路とプログラムを一緒に扱う。"
thumbnail: "./microcontroller-workshop.svg"
tags: ["C++", "Raspberry Pi Pico", "PlatformIO", "Arduino", "IMU", "PID制御", "NeoPixel", "GPIO", "PWM", "I2C", "サーボ", "MkDocs", "教材制作", "コミュニティ活動"]
links:
  - label: "教材サイト"
    url: "https://komoriyuta.github.io/dennou-microcontroller/"
  - label: "GitHub"
    url: "https://github.com/komoriyuta/dennou-microcontroller"
---

所属する東京農工大学電脳サークルで、マイコン講習会の教材を作った。
Arduino IDEだけで終わらせず、Raspberry Pi PicoとPlatformIOを使って、少し開発環境らしい形に寄せている。

教材では、Lチカやライブラリの使い方だけで終わらせないようにした。
LEDの電流制限抵抗をオームの法則から計算し、GPIO、ADC、PWM、I2C、割り込み、ノンブロッキング処理へ進む。
可変抵抗器、SG90サーボ、MPU-6050、NeoPixelなど、机の上で試せるサンプルも用意した。

最後は、IMUで傾きを読み、サーボで水平へ戻すセルフバランシングプラットフォームを扱う。
完成例を配るだけだとたぶん身につかないので、データシートを読み、回路とプログラムを自分で直せるところまで持っていく構成にした。

テキストはMkDocsで公開し、各章のPlatformIOプロジェクトも同じリポジトリで管理している。
講習会が終わったあとも、メンバーが読み返して直せる教材にしたかった。
