---
title: "LLMエージェントによる協力ゲーム Ito"
titleEn: "Multi-agent Ito with LangGraph and RL"
period: "2026–"
date: 2026-02-03
description: "協力型カードゲームItoを複数のLLMエージェントに遊ばせた実験。LangGraphで進行を組み、PettingLLMsにもつないだ。"
thumbnail: "./ito.svg"
tags: ["Python", "LLM", "LangGraph", "Multi-Agent", "強化学習", "LoRA", "Pydantic", "PettingLLMs"]
links:
  - label: "Ito Game Library"
    url: "https://github.com/komoriyuta/langchain_ito_lib"
  - label: "PettingLLMs Integration"
    url: "https://github.com/komoriyuta/PettingLLMs-Ito"
---

協力型カードゲーム「Ito」を、複数のLLMエージェントにプレイさせる実験。
人間が遊ぶと空気を読むゲームだが、LLMにやらせるとどこで破綻するのか見たかった。

各プレイヤーは1から100までの秘密の数字を持ち、お題に沿った言葉だけで数字の大小を伝え合う。
全員の数字を小さい順に出せれば成功。
数字を直接言えないので、言葉の意味と他プレイヤーとの相対関係を推論する必要がある。

ゲーム進行はLangGraphで実装した。
発話、PLAY/WAITの投票、追加議論、カード提出を状態遷移として管理する。
LLM呼び出しの出力はPydanticで検証し、人間プレイヤーとAIを混ぜて遊べるようにもした。

既存のマルチエージェント強化学習フレームワークPettingLLMsへIto環境も統合した。
プレイヤーとゲームフェーズごとにLLM呼び出しのトラジェクトリを追跡し、発話、投票、議論へ別々の重みを与える報酬方式を実装した。
Prompt共有モデルとLoRAによるプレイヤー別方策の小さな学習までは動いている。

PettingLLMs本体は既存の研究プロジェクトで、この実験ではItoゲーム本体、学習環境、トラジェクトリ追跡、報酬設計への統合を担当した。
本格的な長時間学習と比較評価はまだできていない。
