---
title: "LLM Graph Chat"
titleEn: "LLM Graph Chat"
period: "2025–"
date: 2025-01-01
description: "LLMとの会話を木構造で分岐させるUI。通常のチャットで話題が一本道になるのが嫌で作った。Flutterで公開している。"
thumbnail: "./llm-graph-chat.png"
tags: ["Dart", "Flutter", "LLM", "Graph UI"]
links:
  - label: "App"
    url: "https://komoriyuta.github.io/llm_graph_chat/"
  - label: "GitHub"
    url: "https://github.com/komoriyuta/llm_graph_chat/"
---

LLMとの会話を分岐できるUI。
普通のチャットだと、一つ脱線すると元の話題へ戻るのが面倒だった。
そこで会話を木構造で持ち、話題ごとに別ノードとして続けられるようにした。

例えば「ゲームを作りたい」という会話から、「Unityで作る」「Godotで作る」「Unreal Engineで作る」と枝分かれさせ、それぞれの話題を別々に続けられる。
ノードごとに会話履歴を分けているので、別の枝の話題をLLMへ混ぜずに済む。
Flutterで開発し、Webアプリとして公開している。
