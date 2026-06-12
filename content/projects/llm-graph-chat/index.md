---
title: "LLM Graph Chat"
titleEn: "LLM Graph Chat"
period: "2025–"
date: 2025-01-01
description: "LLMとの会話を木構造で分岐させるUI。従来のチャット形式のシーケンシャルな制約を打破し、並列に複数の話題を探索できる。FlutterでWebアプリとして公開。"
thumbnail: "./llm-graph-chat.png"
tags: ["Flutter", "LLM", "Graph UI"]
links:
  - label: "App"
    url: "https://komoriyuta.github.io/llm_graph_chat/"
  - label: "GitHub"
    url: "https://github.com/komoriyuta/llm_graph_chat/"
---

LLMとの会話を分岐できるUI。一つの話題から派生する複数の話題を同時に探索できるようにすることで、従来のチャット形式のシーケンシャルな制約を打破することを目指している。それぞれのノードの上での会話のターンは、並列されるノードとはコンテキストが別れているので、LLMのコンテキストが汚染されない。

例えば、「〇〇なゲームを作りたい」という会話から、「Unityで作るとしたら」「Godotで作るとしたら」「Unreal Engineで作るとしたら」みたいに複数の話題に分岐させて、それぞれの話題で会話を続けることができる。Flutter開発しWebアプリとして公開している。