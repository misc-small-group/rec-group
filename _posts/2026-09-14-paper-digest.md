---
layout: post
title: 2026-09-14 论文速报合集
date: 2026-09-14 12:00:00 +0800
permalink: /posts/2026-09-14-paper-digest/
categories:
- 论文速报
tags:
- 动态创意优化
- 广告创意选择
- 整页优化
- 瀑布流布局
- 探索与利用
- 生产系统
- Agentic Web
- 委托频谱
- AI代理
- 推荐范式转变
- 双受众推荐
- 生成式重排
- 检索后验证
- 语义ID
- 序列推荐
- 候选池重排
- RRF融合
- 生成式推荐
- 线性注意力
- 大束宽解码
- 推理加速
- Gated DeltaNet
- 多兴趣推荐
- 兴趣坍缩
- 匈牙利匹配
- 候选召回
- 用户兴趣路由
- 多正样本学习
description: 今日收录 5 篇与小组方向相关的论文。
comments: true
math: true
papers:
- arxiv_id: '2609.11943'
  arxiv_version: 1
  title: 'PinDCO: Whole-Page Aware Dynamic Creative Optimization at Scale'
- arxiv_id: '2609.11945'
  arxiv_version: 1
  title: Who Are We Recommending To? Recommender Systems in the Agentic Web
- arxiv_id: '2609.12270'
  arxiv_version: 1
  title: 'Recommendation Retrievers Need Verifiers: Universal Generative Reranking
    for Sequential Recommendations'
- arxiv_id: '2609.12399'
  arxiv_version: 1
  title: 'OneLA: Scaling Linear-Attention Decoding to Large Beams in Generative Recommendation'
- arxiv_id: '2609.12842'
  arxiv_version: 1
  title: 'MIMA: Multi-Interest Recommendation via Multi-Positive Exclusive Assignment'
paper_pipeline:
  schema: 1
  kind: digest
  provider: openrouter
  model: deepseek/deepseek-v4-flash-0731
  source_hash: f6b92e6d66265584bf8a3546320c252482f4256635cc58c8a07d5cae62b79682
  generated_date: '2026-09-14'
  render_hash: 4af2c6ea54a3ce3cbb5905e81d6332c8c852c66b428eafdcfc6093a0946b0c34
institutions:
- Pinterest
- Spotify
- Meta
- Kuaishou
- Alibaba
---

今日收录 **5** 篇与小组方向相关的论文。各篇阅读范围不同，内容供筛选，完整结论请核对原文。

1. [PinDCO: Whole-Page Aware Dynamic Creative Optimization at Scale](#arxiv-2609-11943)
1. [Who Are We Recommending To? Recommender Systems in the Agentic Web](#arxiv-2609-11945)
1. [Recommendation Retrievers Need Verifiers: Universal Generative Reranking for Sequential Recommendations](#arxiv-2609-12270)
1. [OneLA: Scaling Linear-Attention Decoding to Large Beams in Generative Recommendation](#arxiv-2609-12399)
1. [MIMA: Multi-Interest Recommendation via Multi-Positive Exclusive Assignment](#arxiv-2609-12842)

## PinDCO: Whole-Page Aware Dynamic Creative Optimization at Scale {#arxiv-2609-11943}

**作者：** Yu Hao, Yuchun Li, Peimeng Sui, Meilin Liu, Tianyuan Cui, Hao Li, Zicong Zhou, Akanksha Baid

**命中的作者机构：** Pinterest

**作者单位原文：** Pinterest Inc. San Francisco USA；Pinterest Inc. Seattle USA；Pinterest Inc.

**论文：** [arXiv](https://arxiv.org/abs/2609.11943) · [本次阅读版本 v1](https://arxiv.org/abs/2609.11943v1)

阅读范围：HTML 前 30000 字符

### 一句话速览

PinDCO 是 Pinterest 提出的生产级动态创意优化系统，通过创意组件融合网络和像素感知调整模块，在瀑布流整页布局下实现大规模广告创意检索与选择，并带来显著 CTR 提升。

### 研究动机

- 生成式 AI 大幅加速广告创意生产，使每个广告的候选创意数量急剧膨胀，需要可扩展的动态创意优化系统。
- Pinterest 的瀑布流网格布局中，创意渲染尺寸会挤占邻近内容，传统的逐广告位独立优化无法处理跨槽位影响，需要整页感知的优化。
- 高 QPS 和成本约束下，创意优化必须与重排序阶段并行，否则会增加端到端延迟。
- 新鲜创意冷启动问题突出，需要探索与利用策略来快速收集无偏反馈。

### 方法

- 构建基于探索-利用（epsilon-greedy）的高质量训练数据，平衡流量覆盖与服务成本。
- 提出创意组件融合网络（CCFN），为图像、标题、布局等组件分别建模专用塔，使用组件特定超参数应对异构复杂度和异步收敛。
- CCFN 预测相对广告级排序预测的增量得分，并与其联合训练和校准，降低学习难度。
- 引入像素感知调整模块（PAM），根据创意纵横比施加惩罚项，鼓励有效利用屏幕像素并优化整页效果。
- 使用轻量级预选模型在本地剪枝候选集，减少模型服务器调用。
- 采用缓存优化、动态批处理等工程手段提升服务效率，支持大规模创意打分。
- 系统与广告排序并行运行，通过多臂老虎机平衡探索与利用。

### 结果与证据

- 论文报告 PinDCO 在在线 A/B 实验中带来广告点击率（CTR）+3.09% 的提升，且整页指标为正。（摘要）

  > Extensive offline analyses and online A/B experiments demonstrate the effectiveness of PinDCO, yielding a +3.09% lift in ad Click-Through Rate(CTR) with positive whole-page metrics.

- 论文报告 CCFN 相比基线在 PR-AUC 上获得 +0.171% 的改善、在 AUC-ROC 上获得 +0.046% 的改善。（表 1）

  > CCFN +0.171% +0.046%

- 论文报告仅使用轻量级模型时，PR-AUC 相对提升 +0.111%，AUC-ROC 相对提升 +0.027%。（表 1）

  > Lightweight-Only +0.111% +0.027%

- 论文报告 Peri-CR 基线在 PR-AUC 上相对提升 +0.163%，在 AUC-ROC 上相对提升 +0.043%。（表 1）

  > Peri-CR +0.163% +0.043%

### 与小组方向的关联

该论文研究 Pinterest 上的广告创意动态优化（DCO）系统，涉及创意检索与选择、与广告排序并行化、生成式推荐和整页优化，与用户关注的推荐系统、排序召回以及生成式推荐和 LLM 结合的方向高度相关。

### 局限与阅读边界

- 论文离线实验仅聚焦图像和布局组件，未覆盖文字等其他创意组件，作者称计划随创意生成扩展加入更多组件类型。
- PAM 目前仅用纵横比度量创意尺寸，且假设网格宽度固定，作者指出可扩展至宽度变化的复杂场景但未验证。
- 本文材料（前 30000 字符）未包含完整实验消融表、基线细节和更多数值结果，离线数据集的具体规模也未覆盖。
- 结果主要基于 Pinterest 平台的生产流量，可能难以直接迁移到其他布局或非视觉推荐场景。

## Who Are We Recommending To? Recommender Systems in the Agentic Web {#arxiv-2609-11945}

**作者：** Himan Abdollahpouri, Kyle Kretschman, Sai Ravindranath, Jackie Doremus, Mounia Lalmas

**命中的作者机构：** Spotify

**作者单位原文：** Spotify USA；Spotify UK；Spotify

**论文：** [arXiv](https://arxiv.org/abs/2609.11945) · [本次阅读版本 v1](https://arxiv.org/abs/2609.11945v1)

阅读范围：HTML 前 23562 字符

### 一句话速览

这是一篇立场论文，提出推荐系统在智能体网络中的消费者正从人类转向AI代理，引入委托频谱划分不同决策上下文，并给出面向代理与人类双受众的研究议程。

### 研究动机

- 传统推荐系统设计假定推荐由人类直接接收、解释和采取行动。
- LLM驱动的自主代理正在代表用户浏览、比较、谈判和执行交易，挑战这一基本假设。
- 不同决策背景下代理替代人类判断的程度不同，需要系统化理解这一变化。

### 方法

- 以立场论文形式提出推荐范式正在发生分叉的观点。
- 引入委托频谱，基于偏好可指定性、结果可验证性和决策风险三个因素刻画决策上下文。
- 将推荐场景分为人类主导、混合和代理主导三类，并给出代表性决策示例。
- 分析推荐系统核心设计维度（交互格式、偏好表示、优化目标、解释透明、时间动态、变现）的相应变化。
- 提出六个研究方向：双受众推荐、代理偏好建模、超越参与度的评估、变现、信任与问责、操纵风险。

### 结果与证据

- 论文报告，过去二十年推荐系统一直基于推荐由人类直接消费的假设设计。（摘要）

  > For two decades, recommender systems have been designed under the assumption that a human directly consumes each recommendation: receiving, interpreting, and acting upon it.

- 论文报告，在可委托场景中，推荐的主要操作消费者正从人转向代理，需要新的优化目标、交互协议和评估标准。（摘要）

  > In delegable contexts, such as routine purchases, travel, and constrained transactional tasks, the primary operational consumer of recommendations is shifting from the human to the agent, requiring new optimization objectives, interaction protocols, and evaluation criteria.

- 论文报告，提出用偏好可指定性、结果可验证性和决策风险三个因素刻画推荐上下文的委托频谱。（摘要）

  > We introduce a delegation spectrum that characterizes recommendation contexts along factors such as preference specifiability, outcome verifiability, and decision stakes

- 论文报告，提出涵盖代理偏好建模、双受众优化和新兴代理注意力经济的研究议程。（摘要）

  > we outline a research agenda spanning agent preference modeling, dual-audience optimization, and the emerging agent attention economy

### 与小组方向的关联

该论文聚焦大语言模型驱动的AI代理对推荐系统消费范式的冲击，提出委托频谱和双受众优化，与兴趣中生成式推荐、LLM与推荐结合以及推荐系统设计直接相关。

### 局限与阅读边界

- 本文是立场论文，未提供实验验证或实证数据支持。
- 委托频谱的三个因素及划分是启发式框架，作者未定义量化标准。
- 材料仅覆盖HTML前23562字符，可能未包含完整引用或后续讨论。
- 作者未涉及具体算法实现或训练设置，仅给出概念性研究议程。

## Recommendation Retrievers Need Verifiers: Universal Generative Reranking for Sequential Recommendations {#arxiv-2609-12270}

**作者：** Benyu Zhang, Qiang Zhang, Rui Li, Qunshu Zhang, Devansh Tandon, Neeraj Bhatia

**命中的作者机构：** Meta

**作者单位原文：** Meta MRS

**论文：** [arXiv](https://arxiv.org/abs/2609.12270) · [本次阅读版本 v1](https://arxiv.org/abs/2609.12270v1)

阅读范围：HTML 前 30000 字符

### 一句话速览

提出一个轻量级生成式验证器，通过打分候选物品的标识符token似然，在不重训检索器的情况下提升冻结检索器top-K候选池的Recall@k。

### 研究动机

- 多阶段推荐系统中第一阶段检索器只能向前传有限长度的候选前缀，相关物品可能排在较深位置而未被消费。
- 现有方法通常需要重训或替换检索器，代价高且影响线上服务。
- 受语言模型草稿-验证解码启发，希望在不改变检索器的情况下提升有限前缀中的相关物品覆盖率。

### 方法

- 问题形式化为两栈框架：冻结的检索器作为草稿器生成top-K候选池，轻量生成式验证器对每个候选物品的标识符token进行自回归打分。
- 验证器为小型因果Transformer，条件化在冻结检索器状态的stop-gradient投影上，预测候选物品的标识符token序列。
- 训练使用逐位置teacher-forcing的交叉熵损失，不需要采样负样本或候选池，监督信号密度高。
- 物品标识符采用语义ID和哈希ID的多通道拼接，验证器对tokenization无要求。
- 推理时验证器仅重排检索器的top-K候选，通过加权倒数秩融合（RRF）合并两个排序，并使用检索器顺序作为回填尾部。
- 验证器不进行特征连接、不建模跨候选交互，不训练标量效用模型，区别于传统的重排器。

### 结果与证据

- 论文提出一个轻量级生成式验证器，用于检索模型的后置验证。（摘要）

  > We introduce a lightweight generative verifier for retrieval models.

- 论文报告验证器通过候选物品标识符token的似然来打分，输入是检索器状态和候选物品。（摘要）

  > Given a retriever state and a candidate item, the verifier scores the item through the likelihood of its identifier tokens.

- 论文报告验证器使用后置训练，以next-token交叉熵为损失，训练时不需要采样负样本或候选池，推理时只对检索器top-K候选打分。（摘要）

  > It is trained post hoc with next-token cross entropy, requires no sampled negatives or candidate pool during training, and scores only the retriever's top-$K$ candidates at inference.

- 论文报告在Amazon产品和YaMBDa音乐推荐上，同一验证器训练方案提升了SASRec、GRU4Rec、NextItNet和MiniOneRec的Recall@10。（摘要）

  > Across Amazon product recommendation and YaMBDa music recommendation, the same verifier training recipe improves Recall@10 for SASRec, GRU4Rec, NextItNet, and MiniOneRec.

- 论文报告消融实验表明，仅向检索器注入物品内容特征不能解释验证带来的提升，支持验证器作为事后输出侧适配机制。（摘要）

  > Ablations show that the improvements are not explained solely by injecting item-content features into the retriever, supporting verification as a post-hoc output-side adaptation mechanism.

### 与小组方向的关联

论文研究多阶段推荐系统中第一阶段检索的候选池质量提升，提出轻量级生成式验证器进行后置重排，与生成式推荐、语义ID和LLM结合推荐的研究兴趣高度相关，且实验覆盖多种序列推荐模型。

### 局限与阅读边界

- 论文报告实验主要基于Amazon Reviews和YaMBDa两个基准，验证器在文本和音频推荐上的表现可能不直接推广到其他模态或领域。
- 作者指出MiniOneRec作为强生成式检索器时，验证器提升较小，说明对强草稿器收益有限。
- 本文阅读范围为HTML前30000字符，部分实验细节、消融完整结果和训练设置可能未覆盖，无法核实全部数值。
- YaMBDa数据集不适用于MiniOneRec，因此未评估生成式LLM在该数据集上的表现。

## OneLA: Scaling Linear-Attention Decoding to Large Beams in Generative Recommendation {#arxiv-2609-12399}

**作者：** Xiangrui Yang, Cheng Peng, Yunfeng Zhao, Liang Zeng, Ao Hu, Jiawei Yang, Shengzhe Wang, Jingshan Lv, Xiao Liang, Chen Yang, Jiaqiang Liu, Yiming Qiu

**命中的作者机构：** Kuaishou

**作者单位原文：** Kuaishou Technology , China；Kuaishou Technology

**论文：** [arXiv](https://arxiv.org/abs/2609.12399) · [本次阅读版本 v1](https://arxiv.org/abs/2609.12399v1)

阅读范围：HTML 前 30000 字符

### 一句话速览

OneLA提出一种面向生成式推荐大束宽解码的线性注意力解码框架，通过共享上下文状态、紧凑追加式转移记录和轻量祖先索引，避免为每个束物化完整循环状态，实现1.54–2.46倍端到端解码加速。

### 研究动机

- 生成式推荐需要大束宽解码生成数百个候选物品，给循环线性注意力带来新的扩展挑战。
- 现有线性注意力服务系统要么为每个束物化完整循环状态，要么重复重放共享历史，造成大量内存和流量开销。
- 动态束选择导致状态复制、重建或重算，成本高昂。

### 方法

- 将生成式推荐建模为基于语义ID的序列生成，使用Gated DeltaNet作为线性注意力实例。
- 提出OneLA，用单一共享的提示派生状态和紧凑追加式GDN转移记录（GTR）表示所有束状态。
- 通过投影重放直接在状态投影上计算，避免物化每个束的完整循环矩阵。
- 使用轻量祖先索引跟踪束历史，束更新无需移动或复制记录。
- 设计融合共享上下文GPU内核，跨束复用共享状态并在片上执行重放。

### 结果与证据

- 论文报告OneLA在端到端解码上实现1.54–2.46倍加速，并显著减少循环状态内存使用和数据移动。（摘要）

  > Our analysis shows that OneLA achieves 1.54–2.46 × \times end-to-end decode speedups while substantially reducing recurrent-state memory use and data movement.

### 与小组方向的关联

该论文聚焦生成式推荐中的大束宽解码与线性注意力加速，属于生成式推荐、语义ID与LLM结合方向，与兴趣高度相关。

### 局限与阅读边界

- 论文评估基于工业GR工作负载和0.8B Qwen3.5模型，结论可能不适用于其他模型或数据集。
- 阅读范围仅覆盖HTML前30000字符，未包含完整实验数值、消融和训练设置，因此无法核实除摘要外的具体性能数据。
- 作者未在摘要中提及的局限，如对SID长度或束宽的依赖，需进一步验证。

## MIMA: Multi-Interest Recommendation via Multi-Positive Exclusive Assignment {#arxiv-2609-12842}

**作者：** Xingyuan Mao, Alin Fan, Shichao Nie, Junfeng Zhang, Yan Xiao, Tao Luo, Xiaoyi Zeng

**命中的作者机构：** Alibaba

**作者单位原文：** Alibaba International Digital Commerce Group , Beijing , China；Alibaba International Digital Commerce Group , Guangzhou , China；Alibaba International Digital Commerce Group , Hangzhou , China；Alibaba International Digital Commerce Group

**论文：** [arXiv](https://arxiv.org/abs/2609.12842) · [本次阅读版本 v1](https://arxiv.org/abs/2609.12842v1)

阅读范围：HTML 前 30000 字符

### 一句话速览

MIMA通过将同一请求内共现物品组成正样本集、用因果Transformer解码器生成互补兴趣并借助匈牙利匹配实现正样本与兴趣的独占分配，同时引入路由模块校准跨兴趣通道分数，以缓解兴趣坍缩并提升召回效果。

### 研究动机

- 现有多兴趣推荐方法常受兴趣坍缩困扰，学到的兴趣向量趋于相似，削弱了多兴趣模型的表达能力。
- 作者指出普遍采用的单正样本训练范式是导致兴趣坍缩的重要因素：每个实例仅有一个正样本，兴趣被独立优化，同一主导兴趣可能反复被不同正样本更新而其余兴趣缺乏监督。
- 现有方法很少显式建模用户对每个兴趣的激活强度，导致推理时不同兴趣通道的分数缺乏统一归一化基础，跨兴趣排序不可靠。

### 方法

- 将同一请求内共现的物品分组为正样本集，使并发兴趣在同一训练步中联合可见。
- 使用因果Transformer解码器生成互补兴趣，每个兴趣查询只关注先前查询，促使后续兴趣补充先前未捕获的模式。
- 通过匈牙利算法在兴趣向量与多个正样本之间进行独占的一对一最优分配，使不同正样本的梯度路由到不同兴趣，从训练目标本身促进兴趣分化。
- 引入轻量级路由模块，利用保留的路由查询估计用户-兴趣激活概率，并与兴趣-物品匹配分数结合以校准跨通道检索分数。
- 训练时对分配矩阵采用stop-gradient，仅用其选择参与损失的配对，梯度通过损失回传到被选中的兴趣和解码器。

### 结果与证据

- 论文报告MIMA在三个公开数据集和一个工业数据集上持续优于最先进的基线方法，并且在线A/B测试带来了显著的业务收益。（摘要）

  > Experiments on three public datasets and an industrial dataset show that MIMA consistently outperforms state-of-the-art baselines, and an online A/B test yields significant business gains.

- 论文报告在5.4.1节的实验中，匈牙利分配方案整体表现最佳。（第4.3节）

  > Experiments in Section 5.4.1 confirm that the Hungarian assignment performs best overall.

### 与小组方向的关联

该论文聚焦多兴趣推荐中的兴趣坍缩与跨通道分数不可比问题，提出基于多正样本独占分配的MIMA框架，与用户关注的推荐系统、召回排序及生成式推荐方向高度相关。

### 局限与阅读边界

- 本次材料仅覆盖HTML前30000字符，未包含实验设置、具体数据集指标、消融实验和训练细节，无法核实论文报告的性能提升幅度。
- 作者在方法部分提到匈牙利分配优于贪心和Sinkhorn软分配，但具体实验对比结果位于未覆盖的5.4.1节。
- 论文声称在三个公开数据集和一个工业数据集上优于基线，但未提供具体数值，结论的适用条件需依赖完整论文验证。
