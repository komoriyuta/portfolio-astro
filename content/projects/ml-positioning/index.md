---
title: "機械学習による位置推定"
titleEn: "ML-based Positioning"
period: "2023–2024"
date: 2024-03-01
description: "VR技術の普及を目指し、IMU（慣性計測ユニット）のみで高精度な位置推定を行う研究。Transformerモデルを用いてIMUの時系列データを位置データに翻訳するアプローチをとった。"
thumbnail: "./ml-positioning.png"
result: "ATE 0.17944m を達成。二重積分によるドリフトが発生せず全体の傾向を捉えることに成功。"
tags: ["PyTorch", "Transformer", "IMU", "TSUBAME"]
award: "SSH生徒研究発表会 ポスター発表賞 / 生徒投票賞"
---

VR技術の普及を目指し、IMU（慣性計測ユニット）のみで高精度な位置推定を行う研究。高校の課題研究として行った。

Transformerモデルを用いてIMUの時系列データを位置データに「翻訳」するアプローチをとった。

具体的には生のセンサデータの系列をエンコーダ、位置の系列をデコーダに入力し、Transformerの自己回帰的な構造を利用して、位置の系列を予測するようにモデルを学習させた。

東京工業大学のスーパーコンピュータTSUBAMEを利用した学習と評価を行った。初めてクラスターを利用した。
