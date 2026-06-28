---
title: "VJLED"
titleEn: "AI-native VJ and LED Control App"
period: "2026–"
date: 2026-04-24
description: "GLSL、p5.js、Three.js、動画を混ぜてVJできるTauri製アプリ。音声解析とLED出力も入れている。"
thumbnail: "./vjled.jpg"
images:
  - "./led-position-calibration-720.jpg"
video:
  title: "当日の演出の様子"
  src: "./IMG_2430~5.mp4"
  caption: "VJLEDで映像コードとエフェクトを調整している様子。"
videos:
  - title: "イベントでの操作"
    src: "./live-vj-operation.mp4"
    caption: "イベント当日にVJLEDを操作している様子。"
tags: ["Rust", "Tauri", "React", "TypeScript", "GLSL", "WebGL", "p5.js", "Three.js", "LED", "ESP32", "NeoPixel", "UDP", "音声解析", "FFT", "BPM", "ONNX", "カメラキャリブレーション"]
links:
  - label: "GitHub"
    url: "https://github.com/komoriyuta/vjled"
---

AIにVJに使うための映像を生成させるデスクトップアプリ。手書きでのクリエイティブコーディングもできる。完全に人間がつながず、AIだけで自動で映像用のコード生成、エフェクト付きの切り替えも行うモードもある。
Tauri v2、Rust、React、TypeScriptで開発している。

GLSL、p5.js、Three.js、動画を共通のレンダラーインターフェースで扱い、AとBの映像をフェーダーで合成する。操作画面と出力画面は別ウィンドウで動作し、プロジェクトの保存・読み込みにも対応している。

Rust側ではシステム音声やマイクを取得し、FFT、BPM、ビートをリアルタイムに解析する。
解析結果は各レンダラーへ渡し、音に反応する映像を書けるようにした。
軽量なモデルを使った楽曲ジャンルとムードの推定も組み込んだ。AUTO VJでは、この解析結果をもとに、AIが映像コードを生成し、音楽に合わせて自動で切り替える。

独自のLEDシステムとの連携では、カメラ画像からLEDの位置をキャリブレーションする。これは農工祭2025のインタラクティブアート展示で作ったものを流用した。
映像上の対応ピクセルを抽出し、UDPで複数デバイスへ送る。このLEDのサンプル元の映像には画面に表示している映像以外も指定できる。
映像と物理LEDを別々に作るのが面倒だったので、同じ画面から扱えるようにした。

実際のイベントでは、会場に設置したLEDをカメラで撮影し、点灯位置を画面上へマッピングしてから運用した。
当日はVJLEDの操作画面で映像コードやエフェクトを調整しながらVJを行い、映像と会場のLED演出を連動させた。
下の写真は、LED位置認識のキャリブレーション結果と、当日に操作している様子。
