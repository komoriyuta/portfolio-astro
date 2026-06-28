---
title: "農工祭2024 ハンググライダー部 注文管理システム"
titleEn: "Order Management for the Hang Gliding Club"
period: "2024"
date: 2024-11-09
description: "農工祭2024の模擬店向け注文管理アプリ。受付と調理側の端末で、注文と提供状況を同期した。"
thumbnail: "./image-720.jpg"
tags: ["TypeScript", "React", "Next.js", "Supabase", "リアルタイム同期", "共同開発", "イベント運営"]
links:
  - label: "GitHub"
    url: "https://github.com/Google-Developers-Group-on-Campus-TUAT/order-management"
---

農工祭2024に向けて、所属するGoogle Developer Group on Campus TUAT（GDGoC TUAT）で作った注文管理Webアプリ。
東京農工大学ハンググライダー部の模擬店で使ってもらった。
受付で入力した注文を調理側の端末へ共有し、商品の受け渡しまで同じ画面で追えるようにした。

注文入力では、商品を選ぶと金額と引換札番号を一時リストへ追加し、内容を確認してから確定できる。調理側では未提供の商品だけを一覧表示し、「完成」「渡す」の二段階操作で誤操作を防ぎながら進捗を更新する。限られた引換札を繰り返し使えるよう、札番号は50枚で循環する仕組みにした。

Next.jsとTypeScriptでタブレット向けの画面を実装し、Supabaseのデータベースとリアルタイム購読で複数端末の状態を同期した。
提供済み注文は削除せず、ステータスだけを変える。
当日の注文数を残しつつ、調理中の一覧からは外せるようにした。

私は初期実装から参加し、タブレット向けUI、Supabaseによる同期、注文入力と調理状況の表示切り替え、引換札番号の管理、提供済み商品のソフトデリートを担当した。
当日はハンググライダー部の模擬店で実際に運用された。
