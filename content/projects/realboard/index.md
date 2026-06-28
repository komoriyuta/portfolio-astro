---
title: "RealBoard 改修"
titleEn: "RealBoard Refactoring"
period: "2024–"
date: 2024-12-01
description: "電脳サークルのスノーボード体感ゲームRealBoardを改修。ESP32と加速度センサーで、古い制御まわりを置き換えた。"
thumbnail: "./realboard.png"
tags: ["ESP32", "Bluetooth", "HID", "加速度センサー"]
---

電脳サークルで引き継がれていたスノーボード体感ゲーム「RealBoard」の制御システムを改修した。
古い構成は配線と機材が大きく、設営も少し面倒だった。

ESP32を使い、Bluetooth HIDでバランスボードの入力をPCへ送る構成にした。
ボードの傾きは加速度センサーで読み、ゲーム側では通常の入力デバイスとして扱える。
イベントで運ぶことを考えると、このくらい単純な構成のほうがよかった。
