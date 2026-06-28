---
title: "農工祭インタラクティブアート2025"
titleEn: "Interactive Art Installation"
period: "2025"
date: 2025-11-09
description: "GDGoC TUATとステージ研究会の合同展示。カメラで来場者の位置を取り、映像とLEDをその動きに合わせて変えた。"
thumbnail: "./interactive2025-720.jpg"
images:
  - "./control-calibration.jpg"
  - "./20251116_130341.jpg"
videos:
  - title: "LED位置検知"
    src: "./led-calibration.mp4"
    caption: "LEDを一つずつ点灯させ、カメラ画像上の位置を検知している様子。"
tags: ["LED", "ESP32", "Python", "YOLO", "p5.js", "NeoPixel", "Wi-Fi", "3D Gaussian Splatting", "カメラキャリブレーション", "イベント運営", "学生プロジェクト"]
splat:
  title: "展示記録"
  src: "/models/interactive-art-2025-archive.ksplat"
  alt: "農工祭インタラクティブアート2025の展示記録"
  cameraUp: [0, -1, -0.6]
  initialCameraPosition: [0, -3, 2]
  initialCameraLookAt: [0, 0, 0]
  scale: [1, 1, 1]
  position: [0, 0, 0]
  rotation: [0, 0, 0, 1]
  alphaThreshold: 5
links:
  - label: "制御ソフトのGitHub"
    url: "https://github.com/komoriyuta/led_control_from_camera"
  - label: "ESP32のファームウェアのGitHub"
    url: "https://github.com/komoriyuta/multiNeopixelControl"

---

農工祭2025で、GDGoC TUATとステージ研究会が合同で制作した展示。
街をテーマにし、LEDの上に紙で作った建物を置き、来場者の動きに合わせて映像とLEDを変化させるインタラクティブアートを作った。
来場者の足を検知して、その近くのLEDの色を変えたり、映像の中の人の動きに合わせてLEDを光らせたりした。

カメラ映像から人物を検出し、画面上の座標へ変換する。
その座標をp5.jsのビジュアルに渡し、この画面からサンプリングして、LEDに色・明るさを送る。ここでp5.jsを挟んだ理由は、ステージ研究会のメンバーにも、映像の演出を作ってもらうため。

LEDの制御はESP32とNeoPixelで行い、PC側で作った演出情報をWi-Fi経由で送った。

カメラは一台のみにし、できるだけキャリブレーションを簡単にした。足を検出すれば、LEDと物理的に距離が離れていることはないので、足の検出→p5.jsの画面上の座標→LEDの座標変換はそこまで厳密にしなくてもよいと判断した。
LEDの各々の座標は一つずつ光らせることで検知した。

制御ソフトはPythonとYOLOで人物位置を検出し、p5.jsのビジュアルと組み合わせた。
LED側はESP32とNeoPixelで組んで、PC側で作った演出情報をLEDへ送った。
映像、人物認識、実空間のLEDがずれて見えないよう、カメラ位置と反応範囲は現地で詰めた。

当日の展示スペースは3D Gaussian Splattingでも残した。
下のビューアで少し見られる。
