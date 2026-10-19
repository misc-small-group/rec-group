---
layout: post
title: 2026-10-19 论文速报合集
date: 2026-10-19 00:00:00 +0800
permalink: /posts/2026-10-19-paper-digest/
categories:
- 论文速报
tags:
- 用户表示学习
- 扩散语言模型
- 场景自适应路由
- 推荐与风控
- 对比学习
- 生成式推荐
- 语义ID
- 重排
- LLM后训练
- 强化学习
- Attention机制
- 稀疏注意力
- 长上下文推理
- KV缓存
- 模型结构设计
- LLM推理加速
- Agentic RL
- 事件预测
- LLM 智能体
- GRPO
- 概率校准
- 评分规则
- 推荐系统
- 缩放定律
- 模型评估
- 计算效率
- 小规模代理
- Agent技能演化
- LLM Agent
- 外部记忆
- 自我改进
- 认知分化
- 大模型个性化
- 激活干预
- 超网络
- 价值推断
- 自适应提问
- 变分推断
- 个性化记忆
- 记忆门控
- 在线学习
- UCB
- 延迟反馈
- 多级过程奖励
- 形式化验证
- LLM训练
- 自蒸馏
- 特权信息
- KL指标
- 生成模型
- Normalizing Flow
- 少步采样
- 精确似然
- RLHF后训练
- 分子采样
- 参数高效微调
- Toeplitz矩阵
- 低秩分解
- 理论分析
- 隐式推理
- 知识蒸馏
- LLM效率
- 扩散模型
- 像素空间生成
- 参数化设计
- 流匹配
- 图像生成
- 后处理细化
- 自适应解码
- 生成加速
- 潜在表示
- Perceiver解码器
- 路由器
- 投机草稿
description: 今日收录 15 篇与小组方向相关的论文。
comments: true
math: true
papers:
- arxiv_id: '2610.22400'
  arxiv_version: 1
  title: 'Rethinking User Encoders: Routing Diffusion States for Scenario-Adaptive
    User Representation'
- arxiv_id: '2610.22797'
  arxiv_version: 1
  title: Reasoning Reranking with Semantic IDs as the Sole Item Representation
- arxiv_id: '2610.22985'
  arxiv_version: 1
  title: 'Prism Attention: Proposal-Refined Index Sharing Mechanism for Efficient
    LLMs Inference'
- arxiv_id: '2610.22684'
  arxiv_version: 1
  title: 'AlphaBet: Reinforcement Learning for LLM Event Forecasting Agents'
- arxiv_id: '2610.23453'
  arxiv_version: 1
  title: 'Predictable Scaling: Efficient Model Exploration via Scaling-Law Prediction'
- arxiv_id: '2610.23599'
  arxiv_version: 1
  title: 'From Trajectories to Differentiated Skills: Cognitive Differentiation for
    Self-Improving Agents'
- arxiv_id: '2610.23702'
  arxiv_version: 1
  title: 'VISTA: Steering LLMs with Latent User Values Inferred from a Few Survey
    Answers'
- arxiv_id: '2610.23812'
  arxiv_version: 1
  title: Learning Personalized Memory Gating from Delayed One-Sided Feedback
- arxiv_id: '2610.22448'
  arxiv_version: 1
  title: 'Lean4AgenticRL: Advancing Agentic RL with Verifiable Multi-level Process
    Rewards'
- arxiv_id: '2610.22512'
  arxiv_version: 1
  title: Predicting Privileged Information Effectiveness for On-Policy Self-Distillation
- arxiv_id: '2610.22711'
  arxiv_version: 1
  title: Normalizing Flow Maps
- arxiv_id: '2610.22883'
  arxiv_version: 1
  title: 'ToPA: Block-wise Toeplitz Adaptation for Expressive and Efficient Fine-Tuning'
- arxiv_id: '2610.22924'
  arxiv_version: 1
  title: 'Sep-Latent: Separator Tokens as Natural Compression Anchors for Implicit
    Reasoning'
- arxiv_id: '2610.23854'
  arxiv_version: 1
  title: Rethinking the design space of Vanilla Pixel Diffusion Transformers
- arxiv_id: '2610.22788'
  arxiv_version: 1
  title: Next Token or Vector? Learning How Far to Decode
paper_pipeline:
  schema: 1
  kind: digest
  provider: openrouter
  model: z-ai/glm-5.3-flash
  source_hash: 580d84b5430e7e423fccf19981579d8d9895a523ee46c52dd083b98c373141f8
  generated_date: '2026-10-19'
  render_hash: aa3941fd40326c3fc8284340ef02a475decfed6fa88b05ac7548f0a86ed77e76
institutions:
- Alibaba
- Google
- Baidu
- Amazon
- Meta
- Meituan
- Michigan
- Berkeley
- Salesforce
- UCLA
- CMU
- MIT
- Adobe
- Microsoft
---

| 排名 | 评分 | 论文 | 机构 | arXiv 链接 | 主题 |
| ---: | ---: | --- | --- | --- | --- |
| 1 | 10 | [Rethinking User Encoders: Routing Diffusion States for Scenario-Adaptive User Representation](#arxiv-2610-22400) | Alibaba | [2610.22400](https://arxiv.org/abs/2610.22400) | 用户表示学习、扩散语言模型、场景自适应路由、推荐与风控、对比学习 |
| 2 | 10 | [Reasoning Reranking with Semantic IDs as the Sole Item Representation](#arxiv-2610-22797) | Google | [2610.22797](https://arxiv.org/abs/2610.22797) | 生成式推荐、语义ID、重排、LLM后训练、强化学习 |
| 3 | 10 | [Prism Attention: Proposal-Refined Index Sharing Mechanism for Efficient LLMs Inference](#arxiv-2610-22985) | Baidu | [2610.22985](https://arxiv.org/abs/2610.22985) | Attention机制、稀疏注意力、长上下文推理、KV缓存、模型结构设计、LLM推理加速 |
| 4 | 9 | [AlphaBet: Reinforcement Learning for LLM Event Forecasting Agents](#arxiv-2610-22684) | Amazon | [2610.22684](https://arxiv.org/abs/2610.22684) | Agentic RL、事件预测、LLM 智能体、GRPO、概率校准、评分规则 |
| 5 | 9 | [Predictable Scaling: Efficient Model Exploration via Scaling-Law Prediction](#arxiv-2610-23453) | Meta | [2610.23453](https://arxiv.org/abs/2610.23453) | 推荐系统、缩放定律、模型评估、计算效率、小规模代理 |
| 6 | 9 | [From Trajectories to Differentiated Skills: Cognitive Differentiation for Self-Improving Agents](#arxiv-2610-23599) | Meituan | [2610.23599](https://arxiv.org/abs/2610.23599) | Agent技能演化、LLM Agent、外部记忆、自我改进、认知分化 |
| 7 | 9 | [VISTA: Steering LLMs with Latent User Values Inferred from a Few Survey Answers](#arxiv-2610-23702) | Michigan | [2610.23702](https://arxiv.org/abs/2610.23702) | 大模型个性化、激活干预、超网络、价值推断、自适应提问、变分推断 |
| 8 | 9 | [Learning Personalized Memory Gating from Delayed One-Sided Feedback](#arxiv-2610-23812) | Berkeley、Salesforce、UCLA | [2610.23812](https://arxiv.org/abs/2610.23812) | 个性化记忆、记忆门控、在线学习、LLM Agent、UCB、延迟反馈 |
| 9 | 8 | [Lean4AgenticRL: Advancing Agentic RL with Verifiable Multi-level Process Rewards](#arxiv-2610-22448) | Amazon | [2610.22448](https://arxiv.org/abs/2610.22448) | Agentic RL、多级过程奖励、形式化验证、GRPO、LLM训练 |
| 10 | 8 | [Predicting Privileged Information Effectiveness for On-Policy Self-Distillation](#arxiv-2610-22512) | Michigan | [2610.22512](https://arxiv.org/abs/2610.22512) | LLM训练、自蒸馏、特权信息、Agentic RL、KL指标、GRPO |
| 11 | 8 | [Normalizing Flow Maps](#arxiv-2610-22711) | CMU、MIT | [2610.22711](https://arxiv.org/abs/2610.22711) | 生成模型、Normalizing Flow、少步采样、精确似然、RLHF后训练、分子采样 |
| 12 | 8 | [ToPA: Block-wise Toeplitz Adaptation for Expressive and Efficient Fine-Tuning](#arxiv-2610-22883) | Alibaba | [2610.22883](https://arxiv.org/abs/2610.22883) | 参数高效微调、Toeplitz矩阵、模型结构设计、低秩分解、理论分析 |
| 13 | 8 | [Sep-Latent: Separator Tokens as Natural Compression Anchors for Implicit Reasoning](#arxiv-2610-22924) | Alibaba | [2610.22924](https://arxiv.org/abs/2610.22924) | 隐式推理、Attention机制、知识蒸馏、LLM效率、模型结构设计 |
| 14 | 8 | [Rethinking the design space of Vanilla Pixel Diffusion Transformers](#arxiv-2610-23854) | Adobe | [2610.23854](https://arxiv.org/abs/2610.23854) | 扩散模型、像素空间生成、参数化设计、流匹配、图像生成、后处理细化 |
| 15 | 7 | [Next Token or Vector? Learning How Far to Decode](#arxiv-2610-22788) | Microsoft | [2610.22788](https://arxiv.org/abs/2610.22788) | 自适应解码、生成加速、潜在表示、Perceiver解码器、路由器、投机草稿 |

今日收录 **15** 篇论文。评分为 10 分制阅读推荐度：方向相关性 4 分、方法贡献 3 分、实验证据或论证支撑 3 分；按总分降序排列，同分按 arXiv 编号排序。机构列为已识别的命中机构。点击论文标题跳转正文。各篇阅读范围不同，完整结论请核对原文。

## Rethinking User Encoders: Routing Diffusion States for Scenario-Adaptive User Representation {#arxiv-2610-22400}

**作者：** Junru Zhang, Jinyong Wen, Bin Dou, Wuliang Huang, Baokun Wang, Yu Cheng, Weiqiang Wang, Cheng Peng

**命中的作者机构：** Alibaba

**作者单位原文：** 1 Zhejiang University, 2 Ant Group , China；Ant Group

**论文：** [arXiv](https://arxiv.org/abs/2610.22400) · [本次阅读版本 v1](https://arxiv.org/abs/2610.22400v1)

阅读范围：完整 PDF，共 9 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Existing large language model (LLM)-based user encoders serialize heterogeneous behavioral logs and compress them into static representations through autoregressive (AR) prediction. However, their unidirectional constraint limits bidirectional information flow, hindering cross-modal interactions and the joint preservation of multi-source signals. Consequently, the learned static representations struggle to accommodate the distinct evidence requirements of diverse downstream scenarios. We address these limitations by unlocking the iterative denoising process of diffusion language models (dLLMs) as a multi-granularity reconstruction space. Based on this insight, we propose FINDERS (FactorIzatioN of Diffusion statEs for Routing across Scenarios), a router-equipped dLLM framework comprising four operations: denoise, factorize, route, and compress. Learnable meta-slots organize complementary denoising states into transferable cross-modal semantics and modality-specific behavioral factors. To provide grounded supervision, we construct BehaviorQA, a large-scale corpus containing explicit behavioral rationales. Guided by scenario queries, a lightweight router dynamically emphasizes relevant slot directions via an input-level residual pathway before cross-source fusion and final compression. Extensive experiments and online A/B tests across ten industrial scenarios demonstrate that FINDERS consistently outperforms state-of-the-art methods in both unified and scenario-adaptive settings. This work effectively pushes the boundaries of dLLMs beyond language generation, demonstrating their immense potential as powerful user representation learners.

### 一句话速览

论文研究工业级用户表示学习：将扩散语言模型的迭代去噪状态视为多粒度重建空间，提出FINDERS框架，用可学习元槽分解跨模态与模态专属语义，再由查询条件路由器以残差方式加权相关槽，压缩为场景自适应嵌入。在十个工业二分类任务和两项线上A/B测试中优于自回归与双向基线。

### 研究动机

- 用户表示学习把支付平台中异构的用户信号（账单交易、小程序行为、搜索、页面浏览、App使用、结构化属性）压缩成可集中存储、跨场景复用的稠密向量，供营销转化、欺诈识别、信贷评估等下游决策使用。同一份用户画像需要服务目标差异很大的场景：风控关注稀疏的异常交易，营销关注近期购买与活动互动，信贷依赖稳定的资产与现金流证据。
- 现有LLM用户编码器把异构行为序列化后，通过自回归的下一词元或下一行为预测学习统一表示。其严格的单向因果注意力限制了双向信息流动，跨模态交互和多源信号的联合保留不足；而查询自适应方法通常在行为已被骨干网络融合压缩之后才引入查询条件，难以恢复早期被丢弃的模态专属证据。
- 本文要回答的问题是：如何组织并选择性访问扩散语言模型在迭代去噪过程中产生的动态状态，使同一份用户画像能按场景查询自适应地暴露不同证据。作者提出重建空间视角：不同噪声水平的去噪状态对应不同语义方向，高噪声状态偏向宏观行为意图，低噪声状态保留细粒度动作细节。

### 方法与关键设计

- FINDERS围绕去噪、分解、路由、压缩四个操作构建，采用两阶段训练。形式化目标是学习查询感知的用户表示 <span class="paper-math">&#92;(&#92;mathbf&#123;z&#125;(&#92;mathbf&#123;Q&#125;)=f&#95;&#123;&#92;psi&#125;(&#92;mathcal&#123;X&#125;,&#92;mathbf&#123;Q&#125;)&#92;)</span>，其中 <span class="paper-math">&#92;(&#92;mathcal&#123;X&#125;&#92;)</span> 是包含 <span class="paper-math">&#92;(M&#92;)</span> 个模态行为词元的滚动画像，<span class="paper-math">&#92;(&#92;mathbf&#123;Q&#125;&#92;)</span> 是描述场景目标的自然语言查询。
- 第一阶段（去噪与分解）为每个模态部署 <span class="paper-math">&#92;(K&#92;)</span> 个可学习元槽，其中第一个是跨模态语义槽，其余保留模态专属模式。输入按 <span class="paper-math">&#92;(&#92;mathbf&#123;X&#125;^&#123;&#92;mathrm&#123;in&#125;&#125;=[&#92;mathbf&#123;X&#125;^&#123;(1)&#125;;&#92;mathbf&#123;S&#125;^&#123;(1)&#125;;&#92;ldots;&#92;mathbf&#123;X&#125;^&#123;(M)&#125;;&#92;mathbf&#123;S&#125;^&#123;(M)&#125;;&#92;mathbf&#123;Q&#125;;&#92;mathbf&#123;A&#125;]&#92;)</span> 组织，训练时采样噪声水平 <span class="paper-math">&#92;(t&#92;sim&#92;mathcal&#123;U&#125;(0,1)&#92;)</span>，按线性调度部分掩码行为词元、完全掩码答案词元，查询与元槽保持可见。完全掩码答案可防止语义泄漏，迫使模型依据可见查询从画像中恢复答案。
- 重建目标 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;rec&#125;&#125;&#92;)</span> 同时要求模型恢复被掩码的行为词元和完整答案序列，即 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;rec&#125;&#125;=-&#92;mathbb&#123;E&#125;&#92;big[&#92;frac&#123;1&#125;&#123;L&#95;&#123;a&#125;&#125;&#92;sum&#95;&#123;j&#125;&#92;log p&#95;&#123;&#92;theta&#125;(a&#95;&#123;j&#125;&#92;mid&#92;widetilde&#123;&#92;mathbf&#123;X&#125;&#125;&#95;&#123;t&#125;^&#123;&#92;mathrm&#123;in&#125;&#125;,t)+&#92;frac&#123;1&#125;&#123;M&#125;&#92;sum&#95;&#123;m&#125;&#92;frac&#123;1&#125;&#123;|&#92;Omega&#95;&#123;t&#125;^&#123;(m)&#125;|&#125;&#92;sum&#95;&#123;i&#92;in&#92;Omega&#95;&#123;t&#125;^&#123;(m)&#125;&#125;&#92;log p&#95;&#123;&#92;theta&#125;(x&#95;&#123;i&#125;^&#123;(m)&#125;&#92;mid&#92;widetilde&#123;&#92;mathbf&#123;X&#125;&#125;&#95;&#123;t&#125;^&#123;&#92;mathrm&#123;in&#125;&#125;,t)&#92;big]&#92;)</span>。轻噪声保留局部细节，重噪声迫使跨词元、跨来源推理；答案重建则按查询整合画像，提供全局语义目标。
- 在重建之上，三个槽级目标把去噪状态组织成可复用因子：模态专属槽通过注意力重建对应模态的行为去噪状态（ Frobenius 距离损失 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;ms&#125;&#125;&#92;)</span>，带停梯度）；跨模态槽与池化后的答案隐藏状态做余弦对齐（<span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;cm&#125;&#125;&#92;)</span>）；行归一化槽状态的正交约束 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;geo&#125;&#125;&#92;)</span> 防止不同槽重复编码同一主导行为。作者先优化重建损失建立稳定去噪状态，再逐步提高槽级目标权重。
- 第二阶段（路由与压缩）去掉扩散噪声和答案词元，保留模态—槽—查询布局。轻量路由器为每个槽计算门控 <span class="paper-math">&#92;(g^&#123;(m)&#125;&#95;&#123;k&#125;(&#92;mathbf&#123;Q&#125;)=&#92;sigma(&#92;mathrm&#123;MLP&#125;([&#92;mathbf&#123;e&#125;^&#123;&#92;mathbf&#123;X&#125;;(m)&#125;;&#92;mathbf&#123;s&#125;&#95;&#123;k&#125;^&#123;(m)&#125;;&#92;mathbf&#123;e&#125;^&#123;&#92;mathbf&#123;Q&#125;&#125;]/&#92;tau))&#92;)</span>，同时考虑当前行为、槽因子和场景查询。门控不替换或剪枝基础画像，而是构造查询条件残差 <span class="paper-math">&#92;(&#92;Delta&#92;mathbf&#123;E&#125;^&#123;(m)&#125;(&#92;mathbf&#123;Q&#125;)&#92;)</span>：行为嵌入位置置零，仅对槽按门控加权，再以可学习系数 <span class="paper-math">&#92;(&#92;gamma&#92;)</span>（初始化为零）加到基础输入上，每个槽实际被缩放为 <span class="paper-math">&#92;(1+&#92;gamma g^&#123;(m)&#125;&#95;&#123;k&#125;(&#92;mathbf&#123;Q&#125;)&#92;)</span>。这种加性残差保留了完整行为序列，避免硬路由造成的信息丢失。
- 残差增强的输入经一次干净的前向传播，在查询词元位置池化并投影归一化得到 <span class="paper-math">&#92;(&#92;mathbf&#123;z&#125;(&#92;mathbf&#123;Q&#125;)&#92;)</span>。训练用对比目标 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;S2&#125;&#125;&#92;)</span>：以路由后的用户嵌入为锚，匹配答案为正例、批内其他答案为负例，使表示保留匹配答案表达的行为证据。推断时支持场景自适应（带查询与路由）和通用（<span class="paper-math">&#92;(&#92;gamma=0&#92;)</span>、通用查询）两种模式，均只需一次前向传播，无需答案词元、噪声注入或迭代去噪。与基线的关键差异在于：证据保留与场景选择被解耦，路由发生在跨源融合之前而非之后。

### 实验设计与论证方式

- 数据来自某大型支付平台约四十亿量级的匿名滚动画像，含六个异步行为来源（账单交易、小程序、搜索、页面曝光导航、App浏览购买、结构化属性），预训练与评测按用户和时间双重切分。评测为十个二分类任务（每任务约五十万测试用户），覆盖营销支付转化、风控、金融服务、生态活跃四个领域，指标为AUC。
- 基线按注意力架构分组：双向编码器（含FOUND等）、自回归模型（含Q-Anchor及其软提示变体）、扩散语言模型（含Vanilla-dLLM，即同设置下池化最终查询词元状态）。FINDERS以0.5B扩散骨干训练，各源用gte-base编码器映射，LoRA微调，每源八个元槽，所有用户训练方法共享预训练切分、词元预算、优化日程和128维输出；在128块A100上训练二十万步。评测时冻结全部表示组件，每任务只训练线性预测头，分别评测统一模式与场景自适应模式。
- 分析部分通过冻结第一阶段模型提取不同噪声水平的隐藏状态做可视化，并展示查询条件路由分布；消融（论文图7d）比较移除基础通路、改用融合后路由、禁用槽分解等变体。线上部分为两项各十四天的A/B测试，流量分配、下游模型与决策策略在实验组和对照组间严格一致，报告相对基线的提升。

### 结果与证据

- 在十个工业场景的平均AUC上，带路由的FINDERS取得所有方法中的最好成绩，不做路由的FINDERS变体也优于同设置训练的Vanilla-dLLM基线，说明槽分解与路由两个组件均有贡献；该结果为离线二分类评测，不能直接外推到召回或线上业务指标。（Table 1）

  > 0.9504 0.8595 FINDERS ( <span class="paper-math">&#92;(&#92;gamma=0&#92;)</span> ) 0.7902 0.7410 0.7089 0.9288 0.7872 0.9590 0.8660 0.9420 0.9366 0.9520 0.8612 FINDERS + Routing 0.7938 0.7452 0.7106 0.9311 0.7887 0.9610 0.8672 0.9437 0.9383 0.9540 0.8634 Figure 4 . Visualization of Stage-I diffusion-state semantics.

- 在暴露—意图—支付链条较长的复杂转化任务上，FINDERS加路由相对最强的场景自适应自回归基线取得绝对AUC提升，支持在融合前进行查询条件路由比融合后提示调整更能保留场景相关证据；提升幅度限于这两个转化任务，不代表全部任务。（Section 5.1）

  > Because predictive signals here span long exposure-intent-payment chains, FINDERS +Routing achieves absolute AUC improvements of +0.70% and +0.78% over the best scenario-adaptive AR baseline ( Q-Anchor + Prompt Tuning).

- 数字支付营销转化的十四天线上A/B测试中，FINDERS相对生产基线同时改善排序AUC和CTCVR校准误差，说明方法在真实流量下兼顾了排序与校准；该结果来自单一营销场景，其他场景的线上收益未在本次材料中报告。（Section 5.3 Scenario I）

  > This scenario focuses on identifying users likely to complete a payment following exposure to digital marketing campaigns. Compared with the production baseline, FINDERS achieves an absolute AUC improvement of 1.18 percentage points (from 0.9443 to 0.9561) and a 62.5% relative reduction in CTCVR calibration error (PCOC deviation from 1.0 decreases from 0.0301 to 0.0113).

- 活跃欺诈识别的线上A/B测试中，FINDERS同时提升KS与固定误报率下的召回，并降低风险损失率和人工审核负担，支持细粒度证据在压缩前被保留的设想；风控指标随阈值策略变化，跨期稳定性需更长观察。（Section 5.3 Scenario II）

  > FINDERS improves the KS score by 1.34% and recall at a fixed FPR by 1.92% , while reducing the risk loss rate by 0.71% and manual audit load by 3.15% . This demonstrates that our method prevents the dilution of decisive fine-grained evidence, boosting both detection quality and operational efficiency. 3) Deployment at Production Scale.

### 与小组方向的关联

论文直接面向推荐、营销与风控等个性化场景的用户表示学习，属于小组核心方向；核心贡献是把dLLM去噪状态组织为可路由的语义槽，机制新颖且有离线与线上双重证据。限制是任务均为二分类、依赖单一支付平台数据，跨平台迁移未验证。

### 局限与阅读边界

- 作者承认的倾向性限制：噪声水平到语义粒度的对应是一种趋势而非预定义的映射，三个噪声区间的语义分布存在重叠，图4和图5的t-SNE与高频词观察只提供定性支持，不能证明严格的粒度分配。
- 可合理提出的验证问题：评测全部为二分类任务与AUC类指标，未覆盖召回候选生成或多目标排序场景；BehaviorQA问答对的构建细节在附录中，本次阅读范围内其质量与多样性只能依据正文描述；方法在单一支付平台数据上训练，跨平台、跨业务形态的迁移尚未验证。
- 本次阅读范围不足：论文未在正文给出代码开源声明，本次也未核验任何代码仓库与复现环境，不能据此断言开源与否；线上A/B仅报告两个场景十四天的结果，长期稳定性与其他八个线下场景的线上表现仍待观察。

## Reasoning Reranking with Semantic IDs as the Sole Item Representation {#arxiv-2610-22797}

**作者：** Zhenwei Tang, Jintao Liu, Di Bai, Xidong Wu, Xinwu Cheng

**命中的作者机构：** Google

**作者单位原文：** Google University of Toronto

**论文：** [arXiv](https://arxiv.org/abs/2610.22797) · [本次阅读版本 v1](https://arxiv.org/abs/2610.22797v1)

阅读范围：完整 PDF，共 30 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Reasoning rerankers write a rationale before ranking a candidate slate, and existing systems read item metadata to do so, even though generative recommenders increasingly represent items as compact Semantic IDs (SIDs). Ranking from SIDs alone has two appeals: SID prompts are far shorter than the matched item text, and although item codes are fixed from content, the backbone learns their token embeddings in part from user-item interaction sequences, so the tokens can carry behavioral signal that item text lacks. That training targets next-item generation, and whether it supports ranking a supplied slate from SIDs alone is untested. We build ReRankID, a controlled testbed in which models reason and rank from a history and slate shown only as SIDs, varying item rendering, history length, and slate size one at a time. On this testbed, such models often copy the input order instead of reranking, and readable metadata does not repair the failure. We compare supervised fine-tuning, rejection-sampled self-training, on-policy distillation, and verifier-based reinforcement learning as post-training methods and find that they elicit the missing behavior. The strongest post-trained model, the 8B model trained with a graded ranking reward, gives the best SID-only ranking and matches strong text-reading LLMs whose prompts are about 20x longer. It ranks above random with no history at all, where a caption-reading reference does not, and it keeps its gains at long histories, where text prompts pass 50k tokens and the caption-reading reference stops improving. In a paired rationale audit, this model argues trade-offs better than that reference but describes items less accurately. The common post-training methods we test thus elicit ranking from SIDs but not faithful item descriptions, which calls for post-training that improves the reasoning itself, not only the ranking it produces.

### 一句话速览

论文构建 ReRankID 受控测试台，研究仅用语义 ID 表示物品时大模型能否先写推理再重排给定候选列表。发现现有 SID 预训练模型常照抄输入顺序，监督微调与基于验证器的强化学习可激发该行为；最强模型以远短于文本的提示匹敌读文本的强模型，但其理由中的物品描述不忠实。

### 研究动机

- 现代推荐系统采用多级漏斗，最后一级是对给定候选列表的重排：输入是用户历史与候选集合，输出是一个排序。推理型重排器在排序前先写出可检查的理由，但现有系统都依赖可读的物品元数据。与此同时，生成式推荐越来越把物品表示为紧凑的语义 ID（SID），即由内容嵌入量化得到的离散码序列。仅用 SID 排序有两个吸引力：提示远短于匹配的物品文本；且码的 token 嵌入部分从用户行为序列中学得，可能携带文本没有的行为信号。
- 问题在于 SID 预训练的目标是预测下一个物品，能否支持对给定候选列表的排序从未被检验。已有两条路线互不覆盖：SID 推理系统生成下一物品而非重排给定列表；列表式重排器则用可读元数据替换或增强标识符。本文要回答：仅凭 SID token 在预训练中学到的信息，模型能否对给定候选列表先推理再排序，以及哪些常见后训练方法能激发这一行为。

### 方法与关键设计

- 论文先定义任务：对用户取最近 k 个历史物品 H_k 和含 N 个候选的列表 C，其中恰有一个观测正例。物品渲染函数 ρ 把物品映射为 token，模型读取渲染后的历史与候选，用自然语言推理后返回十个互不相同候选下标的排序 π，质量由正例在 π 中的名次评分。渲染有三种物品匹配视图：仅 SID、纯文本描述、两者并列；因为排序只用下标指代候选，同一用户和列表可在任意视图下评分，使元数据访问成为受控变量而非混杂因素。
- 测试台构建在快手短视频交互与 OpenOneRec 的 SID 词表上，使用其公开的 1.7B 与 8B 两个检查点。测试集含四百个恰有一个正例的用户，正例在显式互动与长时观看之间平衡；每用户一个百条优先池，含正例、干净曝光难负例与随机填充，竞争性正例被排除而非当作负例。列表与历史均按固定确定性嵌套构造，从锚点设置（k=64、N=30）起每次只变动一个轴：历史长度、列表大小或渲染方式。
- 评分与诊断分开：主指标是端到端 NDCG@5，无效输出计零而非剔除，使接口失败计入模型；同时记录 Identity%（照抄输入顺序的输出占比）与 Loop%（推理不终止直到 token 上限的占比）。主要比较在同一批用户上配对进行，用用户配对自助区间判断显著性；所有系统用同一固定提示与展示顺序，并另做展示顺序与措辞审计。
- 诊断阶段发现主要障碍在接口：这些模型从未见过

### 实验设计与论证方式

- 实验在四百个测试用户上进行，锚点设置为历史六十四、候选三十，主指标为端到端 NDCG@5，另报 NDCG@10、召回与 MRR；所有比较在同一批用户上配对，用用户配对自助区间判断显著性。参照包括随机打乱、基于历史描述质心嵌入相似度的 Caption 基线，以及读文本视图的 GPT、Gemini、Claude 三个强通用模型；后两者与 OpenOneRec 模型和输入都不同，故作为诊断参照而非表示受控的竞争者。
- 后训练比较覆盖监督微调、拒绝采样自训练、在线策略蒸馏与验证器强化学习四种方法，统一在共享的六千条 SID 提示集上训练，检查点按四百个开发用户的 NDCG@5 选择后再上测试集。奖励消融把分级 NDCG 奖励换成二元命中奖励，其余设置不变；另按正例互动等级分层报告增益。展示顺序与提示措辞两项审计表明参照模型得分对顺序和措辞不敏感，且 SID 系统的顺序敏感性通过照抄率单独报告。
- 需要强调离线边界：这是单正例隐式反馈的标准离线协议，只衡量模型是否把观测正例排前，不衡量其余候选之间的次序是否正确；论文未报告任何线上或 A/B 结果，理由质量审计由大模型裁判完成并附程序化校验。

### 结果与证据

- 经分级排序奖励强化学习训练的最强模型在仅用语义 ID 的排序上取得最佳成绩，并能匹敌读物品文本的强模型，而后者的提示长度约为其二十倍；这说明紧凑的 SID 提示在该测试台上可达到与长文本提示相当的排序质量，但该对照中模型家族与输入表示同时不同，只能作为诊断性参照而非受控因果结论。（Abstract / Section 5.2）

  > The strongest post-trained model, the 8B model trained with a graded ranking reward, gives the best SID-only ranking and matches strong text-reading LLMs whose prompts are about <span class="paper-math">&#92;(20&#92;times&#92;)</span> longer.

- 在较大规模模型上，基于验证器的强化学习在监督微调之上带来显著配对增益，其置信区间不包含零，且分级排序奖励在与二元命中奖励的直接配对对比中显著更优；在较小规模上强化学习与监督微调相当，奖励形式差异不显著。这支持奖励粒度在大模型上起作用，但两种奖励在小模型上不可区分，不能推广为普遍规律。（Section 5.2 / Table 2）

  > At 8B, RLVR then improves on SFT with a paired gain whose 95% user-paired bootstrap interval excludes zero, and gives the strongest SID-only model, on par with text-reading LLMs that see prompts about <span class="paper-math">&#92;(20&#92;times&#92;)</span> longer; at 1.7B it matches SFT. The graded ranking reward also beats a binary top-one variant in the direct paired contrast at 8B.

- 最强模型在完全没有历史时排序仍高于随机，而读描述的参照做不到；在长历史下其增益保持，而文本参照停止提升。配对理由审计显示该模型权衡论证优于文本参照，但对从未以文本见过的物品描述不准确。这表明 SID token 确实携带文本没有的偏好信号，但后训练激发的是排序而非忠实的物品描述。（Section 5.2 / Section 5.3）

  > This 8B RLVR model ranks above random with no history at all, where a caption-reading reference does not, and it keeps its gains at the longest histories, where the text reference stops improving. A paired rationale audit then shows that the strongest SID model argues trade-offs better than the text reference, yet misstates items it has never seen as text.

### 与小组方向的关联

论文正中小组的生成式推荐、语义 ID 与 LLM 重排方向，提供了可复用的受控测试台、四种后训练方法的统一对比和奖励设计消融，代码与数据公开。主要限制是仅在单一短视频平台与单一 SID 词表上验证，且无线上结果，结论向其他场景迁移需再检验。

### 局限与阅读边界

- 作者承认的核心局限是：所测后训练方法只激发了排序行为，未带来忠实的物品描述——最强模型在配对理由审计中权衡论证优于文本参照，却会错误描述它从未以文本见过的物品，这被明确列为待解决的问题而非已修复的缺陷。
- 从材料可合理提出的验证问题：结论建立在快手短视频与 OpenOneRec 单一 SID 词表之上，SID token 携带行为信号的程度依赖其特定预训练流程，换平台、换词表或换预训练目标是否成立未检验；每用户恰一正例的协议只衡量正例名次，不评估候选间完整次序的正确性；理由审计依赖大模型裁判，虽有两项校验，仍存在跨顺序犹豫与少量翻转。
- 本次阅读范围方面：论文未报告线上或 A/B 实验，所有结论限于离线单正例排序；训练与推理均在 A100 上以 bf16 完成，方法间监督预算不同（如 OPD 无标签、SFT 用教师轨迹），跨方法比较时监督来源差异需一并考虑，不能把增益全部归因于算法本身。

## Prism Attention: Proposal-Refined Index Sharing Mechanism for Efficient LLMs Inference {#arxiv-2610-22985}

**作者：** Zhenxu Tian, Kebin Liu, Zhengwu Yang, Yi Su, Qingqing Dang, Yanlin Sha, Kaipeng Deng, Dianhai Yu, Yanjun Ma, Juntao Li, Min Zhang

**命中的作者机构：** Baidu

**作者单位原文：** Baidu Inc.

**论文：** [arXiv](https://arxiv.org/abs/2610.22985) · [本次阅读版本 v1](https://arxiv.org/abs/2610.22985v1)

阅读范围：完整 PDF，共 20 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Long-context decoding in large language models (LLMs) is increasingly bottlenecked by the memory and computation required to attend over an ever-growing Key-Value (KV) cache at each autoregressive step. Although token-level sparse attention reduces this burden by restricting computation to a small subset of relevant past tokens, its practical gains are often offset by repeatedly recomputing layer-wise sparse indices as the context grows. A common remedy is to share sparse indices across layers by computing them only at designated anchor layers, but such static reuse ignores the layer-wise evolution of attention patterns, causing the reused indices to progressively deviate from the layer-specific optima and incur substantial attention loss. By revisiting cross-layer sparsity from the perspective of attention dynamics, we find that inter-layer salient token shift is highly localized: although the exact top-<span class="paper-math">&#92;(&#92;kappa&#92;)</span> indices differ across layers, the core high-attention tokens remain stable, with changes concentrated near the expanded boundary of previously selected regions. Motivated by this, we propose Prism Attention, a proposal-refined sparse attention framework. It replaces rigid cross-layer index reuse with a coarse-to-fine strategy, preserving layer-wise adaptability while retaining the efficiency benefits of cross-layer sharing. Extensive experiments show that Prism Attention achieves state-of-the-art performance among mainstream sparse attention methods on both reasoning and long-context benchmarks, while attaining a <span class="paper-math">&#92;(3.4&#92;times&#92;)</span> end-to-end decoding speedup over FlashAttention at 128K context length.

### 一句话速览

针对长上下文 LLM 解码中跨层稀疏索引静态复用导致的精度损失，提出 Prism Attention：锚定层生成扩展候选池，后续层在池内轻量重选自身稀疏支持，并用 INT2 量化降低候选构建成本。在推理与长上下文基准上取得主流稀疏方法中最优平均精度，128K 上下文端到端解码较 FlashAttention 获得约 3.4 倍加速。

### 研究动机

- 长上下文自回归解码时，每生成一个 token 都要对不断增长的 KV 缓存（历史 key-value 向量）做注意力计算，注意力开销随序列长度线性增长。token 级稀疏注意力只对少量相关历史 token 计算注意力，能显著降低开销，但为每层精确找出 top-<span class="paper-math">&#92;(&#92;kappa&#92;)</span> 相关 token 需要对全上下文打分，随层数和上下文增长反复重建稀疏索引的开销会抵消稀疏化收益。
- 一种常见做法是跨层索引共享：只在少数锚定层精确计算索引，供后续层直接复用。但注意力模式随网络深度演化，静态复用会使索引逐渐偏离各层最优，造成注意力质量损失。作者通过观察发现层间显著 token 的漂移是高度局部的：核心高注意力 token 跨层稳定，变化集中在已选区域边界附近。本文要回答的问题是：能否在保留跨层共享效率的同时，让每层以极低成本恢复自身最优的稀疏支持。

### 方法与关键设计

- Prism Attention 的核心是把跨层复用从『直接复制固定 top-<span class="paper-math">&#92;(&#92;kappa&#92;)</span> 索引集』改为『粗到细的提案-精炼』两阶段。层被离线划分为提案层（Proposal Layer）和精炼层（Refined Layer），沿用 IndexCache 的贪心校准流程确定划分（实验中约每 4 层 1 个提案层）。提案层对全上下文打分并输出扩展候选池，精炼层只在池内重打分选出自己的 top-<span class="paper-math">&#92;(&#92;kappa&#92;)</span>，从而以与上下文长度无关的成本吸收层间局部漂移。
- 形式化地，设解码步 <span class="paper-math">&#92;(t&#92;)</span>、层 <span class="paper-math">&#92;(&#92;ell&#92;)</span> 的查询为 <span class="paper-math">&#92;(q&#95;t^&#92;ell&#92;)</span>，历史 key 缓存为 <span class="paper-math">&#92;(K^&#92;ell&#92;)</span>，相关性打分为 <span class="paper-math">&#92;(s&#95;t^&#92;ell(i)=&#92;phi(q&#95;t^&#92;ell,k&#95;i^&#92;ell)&#92;)</span>。理想层内稀疏支持是 <span class="paper-math">&#92;(&#92;mathcal&#123;T&#125;&#95;t^&#92;ell=&#92;operatorname&#123;TopK&#125;(s&#95;t^&#92;ell,&#92;kappa)&#92;)</span>，精确计算需 <span class="paper-math">&#92;(&#92;mathcal&#123;O&#125;(L&#95;t)&#92;)</span> 成本。静态复用直接令 <span class="paper-math">&#92;(&#92;mathcal&#123;T&#125;&#95;t^&#123;&#92;mathcal&#123;S&#125;&#125;&#92;leftarrow&#92;mathcal&#123;T&#125;&#95;t^&#123;&#92;mathcal&#123;F&#125;&#125;&#92;)</span>。Prism 改为：提案层 <span class="paper-math">&#92;(&#92;mathcal&#123;F&#125;&#92;)</span> 输出扩展候选池 <span class="paper-math">&#92;[&#92;mathcal&#123;C&#125;&#95;t^&#123;&#92;mathcal&#123;F&#125;&#125;=&#92;operatorname&#123;TopK&#125;(s&#95;t^&#123;&#92;mathcal&#123;F&#125;&#125;,n),&#92;quad n=&#92;rho&#92;kappa,&#92; &#92;rho&#92;geq 1,&#92;]</span> 其中 <span class="paper-math">&#92;(&#92;rho&#92;)</span> 是小扩展因子；提案层自身仍只注意自己的 top-<span class="paper-math">&#92;(&#92;kappa&#92;)</span>，但缓存 <span class="paper-math">&#92;(&#92;mathcal&#123;C&#125;&#95;t^&#123;&#92;mathcal&#123;F&#125;&#125;&#92;)</span> 供下游使用。精炼层 <span class="paper-math">&#92;(&#92;mathcal&#123;S&#125;&#92;)</span> 只在池内重打分 <span class="paper-math">&#92;(&#92;widehat&#123;s&#125;&#95;t^&#123;&#92;mathcal&#123;S&#125;&#125;(i)=&#92;phi(q&#95;t^&#123;&#92;mathcal&#123;S&#125;&#125;,k&#95;i^&#123;&#92;mathcal&#123;S&#125;&#125;),&#92; i&#92;in&#92;mathcal&#123;C&#125;&#95;t^&#123;&#92;mathcal&#123;F&#125;&#125;&#92;)</span>，再取 <span class="paper-math">&#92;(&#92;widehat&#123;&#92;mathcal&#123;T&#125;&#125;&#95;t^&#123;&#92;mathcal&#123;S&#125;&#125;=&#92;operatorname&#123;TopK&#125;(&#92;widehat&#123;s&#125;&#95;t^&#123;&#92;mathcal&#123;S&#125;&#125;,&#92;kappa)&#92;)</span>。这样候选池提供高召回区域，局部精炼吸收层间偏差。
- 为降低提案构建本身的成本，作者提出量化提案生成：用分组非对称 2-bit（INT2）量化压缩提案层使用的 key 缓存。具体把每个 key 向量的头维 <span class="paper-math">&#92;(d&#92;)</span> 切成大小为 <span class="paper-math">&#92;(g&#92;)</span> 的 <span class="paper-math">&#92;(M=d/g&#92;)</span> 个子向量，每组维护独立缩放因子 <span class="paper-math">&#92;(&#92;alpha&#95;&#123;i,m&#125;^&#123;&#92;mathcal&#123;F&#125;&#125;=(&#92;max(k&#95;&#123;i,m&#125;^&#123;&#92;mathcal&#123;F&#125;&#125;)-&#92;min(k&#95;&#123;i,m&#125;^&#123;&#92;mathcal&#123;F&#125;&#125;))/(2^b-1)&#92;)</span> 和零点 <span class="paper-math">&#92;(&#92;beta&#95;&#123;i,m&#125;^&#123;&#92;mathcal&#123;F&#125;&#125;=&#92;min(k&#95;&#123;i,m&#125;^&#123;&#92;mathcal&#123;F&#125;&#125;)&#92;)</span>，量化为 <span class="paper-math">&#92;(&#92;tilde&#123;k&#125;&#95;&#123;i,m&#125;^&#123;&#92;mathcal&#123;F&#125;&#125;=&#92;operatorname&#123;clip&#125;(&#92;lfloor(k&#95;&#123;i,m&#125;^&#123;&#92;mathcal&#123;F&#125;&#125;-&#92;beta&#95;&#123;i,m&#125;^&#123;&#92;mathcal&#123;F&#125;&#125;)/&#92;alpha&#95;&#123;i,m&#125;^&#123;&#92;mathcal&#123;F&#125;&#125;&#92;rceil,0,2^b-1)&#92;)</span>。在 GQA 架构下，用 max 归约把同一 KV 组内多个查询头的打分聚合为每 token 一个提案分 <span class="paper-math">&#92;(&#92;tilde&#123;s&#125;&#95;t^&#123;&#92;mathcal&#123;F&#125;&#125;(i)=&#92;max&#95;&#123;j&#92;in&#92;mathcal&#123;G&#125;&#125;&#92;langle q&#95;&#123;t,j&#125;^&#123;&#92;mathcal&#123;F&#125;&#125;,&#92;tilde&#123;k&#125;&#95;i^&#123;&#92;mathcal&#123;F&#125;&#125;&#92;rangle&#92;)</span>，使每个 KV 头每步只加载一次，避免分组头间的冗余内存访问。
- 设计动机来自第 3 节的观察实验：随锚定层距离增大，索引重叠率持续下降且长上下文下降更快；但如图 2 所示，目标层 top-128 索引大多落在参考层 top-128 至 top-512 的扩展区间内，落在扩展池之外的极少，说明适度扩大候选池即可覆盖层间变化。图 3 进一步显示把提案从 top-128 扩到 top-256 能显著恢复跨层覆盖率。附录 B 还在 GQA 与 MLA 架构、不同上下文长度和数学推理、摘要、少样本、多文档问答等任务上验证了这种局部漂移的普遍性。
- 推断流程（算法 1）：每个解码步逐层执行，提案层用 INT2 key 近似打分并取 top-<span class="paper-math">&#92;(&#92;rho&#92;kappa&#92;)</span> 作为候选池，自身注意池内前 <span class="paper-math">&#92;(&#92;kappa&#92;)</span> 个；精炼层在继承的池内用 INT2 key 重打分并取 top-<span class="paper-math">&#92;(&#92;kappa&#92;)</span> 作为稀疏支持，再做稀疏注意力。与基线的差异在于：Quest、Seer-R 等按块或逐层选索引，IndexCache 等静态复用锚定层索引，而 Prism 让每个精炼层在共享候选区域内自适应重选，精炼成本与上下文长度无关。

### 实验设计与论证方式

- 实验基于 Qwen3-4B 和 Qwen3-8B，在 NVIDIA H800 GPU 上进行。长上下文理解用 LongBench 中平均输入超过 8192 token 的子集，最大生成长度 4096；推理评测在 AIME-24/25、MATH500、GPQA-Diamond 上分别生成 64、8、16 个答案并计算 Pass@1 准确率，最大生成长度 32768。比较对象包括全注意力（FlashAttention）和四个稀疏解码基线：Quest（页级查询感知稀疏）、LessIsMore（单层跨头合并加近因窗口）、SeerAttention-R（自蒸馏门控的块级稀疏）、IndexCache（锚定层索引静态复用）。
- IndexCache 与 Prism 共用同一离线校准流程：在 OpenR1-MATH-220k 的 64 个样本（最长 32768）上以 token 级交叉熵为目标做贪心层划分，锚定层与共享层比例约 1:3，稀疏预算校准时为 512。Prism 最终稀疏预算 <span class="paper-math">&#92;(&#92;kappa=2048&#92;)</span>，长上下文任务扩展因子 <span class="paper-math">&#92;(&#92;rho=4&#92;)</span>（候选池 8192），推理任务 <span class="paper-math">&#92;(&#92;rho=2&#92;)</span>。效率评测分三层：自研 Triton 内核的组件级时延（CUDA Graph 计时）、集成进 SGLang 的每层时延（TP8 单 rank 形状、2K 稀疏预算）、以及端到端每步解码时延；另有准确率-效率 Pareto 对比和消融。
- 消融在 Qwen3-4B 上隔离各组件：逐层索引、直接跨层复用、校准、量化、提案-精炼共享，并比较 group-4 与更激进的 group-9（每 9 层 1 个提案层）设置；还分析了扩展因子 <span class="paper-math">&#92;(&#92;rho&#92;)</span> 与稀疏预算 <span class="paper-math">&#92;(&#92;kappa&#92;)</span> 的敏感性，以及校准样本随机种子对层划分稳定性的影响。附录 E 把方法扩展到 78 层的 GLM-5.2，在 LongBench-V2（128K）和 RULER（64K/128K）上比较不同 F/S/R 层配置。本次未核验代码仓库与开源状态。

### 结果与证据

- 在两个 Qwen3 模型的推理基准上，Prism 取得所有被评测稀疏方法中最高的平均 Pass@1 准确率，明显优于 Quest、Seer-R 和 IndexCache，且与全注意力的差距收窄到很小；优势在最难的 AIME 子集上最突出。这说明提案-精炼共享能在困难长推理任务上恢复精度，但不表示在所有任务上都超过全注意力。（Table 1 / Section 5.2 Accuracy Results）

  > Accuracy-Efficiency Pareto Comparison. Performance on Reasoning Benchmarks. As shown in Table 1 , Prism achieves the best average accuracy among all evaluated sparse baselines on both Qwen3 models. On Qwen3-4B, Prism reaches an average score of 71.43, improving over Quest, Seer-R, and IndexCache by 25.28, 2.08, and 1.27 points, respectively.

- 在 LongBench 长上下文理解上，Prism 在两个模型上都取得稀疏方法中最强的平均分，接近甚至略超全注意力，并稳定优于 IndexCache 和 Seer-R。这支持了静态复用会累积注意力损失、而候选池内重选能保留任务相关上下文的假设；但个别子集仍低于全注意力，说明并非全面无损。（Table 2 / Section 5.2 Accuracy Results）

  > On Qwen3-4B, Prism obtains an average score of 54.98, nearly matching Full Attention and improving over IndexCache by 1.71 points. On Qwen3-8B, Prism reaches 54.97, slightly exceeding Full Attention and improving over Seer-R and IndexCache by 1.33 and 2.32 points, respectively.

- 在 SGLang 集成的端到端解码时延测量中，Prism 在最长上下文设置下将 FlashAttention 的每步时延压缩到约三分之一，且加速随上下文增长进一步扩大；相对 IndexCache 的额外精炼开销随上下文增长单调摊薄，到最长上下文时几乎可忽略。该结果基于特定模型、批量与硬件配置，其他环境需重新测量。（Figure 7 / Section 5.3 Efficiency Analysis）

  > As shown in Figure 7 , Prism reduces the per-step latency of FlashAttention from 15.03 ms to 4.47 ms at 128K (BSZ=16), a <span class="paper-math">&#92;(3.36&#92;times&#92;)</span> speedup that increases further with context length.

### 与小组方向的关联

论文属于 Attention 机制与模型结构设计方向，命中小组硬保留兴趣；其跨层注意力动态分析和粗到细索引共享对长上下文推理系统设计有直接借鉴价值。实验覆盖多模型、多任务并有完整效率分解，证据较充分；但层划分依赖离线校准、未报告线上部署与开源状态，收益迁移需自行验证。

### 局限与阅读边界

- 作者已承认的局限（附录 F）：Proposal/Refined 层划分完全继承 IndexCache 的离线贪心校准，在数学推理语料上以交叉熵为目标搜索一次后冻结，未把校准流程本身作为设计变量；由于层间索引漂移明显依赖任务类型，作者提出未来应从更强搜索策略、更贴近下游准确率的目标、以及与目标工作负载域和长度分布匹配的校准语料三个方向改进，且这不需要额外推理成本。
- 从材料可合理提出的验证问题：短上下文和小批量下 Prism 相对 IndexCache 有固定开销（INT2 量化与扩大候选池尚未摊销），只有在长上下文大批量时才反超，因此在短序列服务场景收益有限；层间漂移幅度随任务类型变化，跨任务部署时 <span class="paper-math">&#92;(&#92;rho&#92;)</span> 与层划分是否仍最优需要按目标负载重新校准验证。此外主实验集中在 Qwen3 系列，GLM-5.2 结果在附录且只覆盖长上下文基准，推理任务上的跨模型泛化未报告。
- 本次阅读范围限制：效率数字来自作者自研 Triton 内核与 SGLang 集成环境（H800、特定 TP 形状），不同硬件或框架下的加速比需自行复现；论文未声明代码开源，本次也未核验任何仓库，能否复现待确认。

## AlphaBet: Reinforcement Learning for LLM Event Forecasting Agents {#arxiv-2610-22684}

**作者：** Liqin Ye, Rongzhi Zhang, Xin Liu, Zheng Li, Yuan He, Qingyu Yin, Priyanka Nigam, Chao Zhang

**命中的作者机构：** Amazon

**作者单位原文：** Amazon Data &amp; Models Code Website；Amazon

**论文：** [arXiv](https://arxiv.org/abs/2610.22684) · [本次阅读版本 v1](https://arxiv.org/abs/2610.22684v1)

阅读范围：完整 PDF，共 43 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Forecasting an unresolved event requires finding relevant evidence and deciding how strongly it supports each outcome. Yet outcome-based training of Large Language Model (LLM) forecasters often begins with preassembled evidence at a single prediction date, leaving evidence acquisition outside the learning loop. We introduce AlphaBet, an agentic reinforcement learning (RL) framework that trains a single LLM policy to search, reason, and report probabilities across multiple pre-resolution dates. Each dated forecast is scored by a proper scoring rule against the eventual outcome, allowing one resolved event to supervise decisions under different information states. We decompose forecasting regret into an evidence-acquisition gap and a probability-reporting gap, and show that Group Relative Policy Optimization (GRPO)'s standard-deviation normalization can distort the reporting target under multi-class proper scores. On GLM-4.5-Air, AlphaBet reduces the Brier score from 0.731 to 0.626 on Forecast-Dojo and from 0.612 to 0.528 on FutureX. Controlled ablations attribute these gains to multi-date training and show that they come from improvements in both information acquisition and probability reporting. Our empirical results validate that GRPO's std normalization degrades proper-scoring-rule performance while leaving top-outcome accuracy largely unchanged.

### 一句话速览

AlphaBet 是面向 LLM 事件预测的智能体强化学习框架：单一策略在事件解决前的多个日期主动搜索证据并报告概率分布，以严格适当评分规则对每次预测打分。论文证明 GRPO 的组内标准差归一化会扭曲多类概率报告目标，去除后训练在 Forecast-Dojo 与 FutureX 上同时降低 Brier 分数并提升准确率。

### 研究动机

- 事件预测任务的输入是一个自然语言问题，它描述一个尚未解决的现实事件（如政策走向、经济指标），并给定一组互斥且穷尽的可能结果；输出是在事件解决前的多个日期上，对结果分布的概率报告。由于证据随时间不断累积，预测者需要像人类长期预测者那样，反复回访同一事件并根据新信息更新信念。
- 已有基于结果反馈训练的 LLM 预测方法通常只在单一预测日期上、用预先组装好的证据来优化概率报告，证据获取环节完全在训练回路之外，也没有学习信号告诉模型预测应如何随信息演化而更新。这留下一个核心问题：结果反馈能否同时训练证据搜寻行为和概率报告行为，并覆盖不断变化的信息状态？
- Forecast-Dojo 提供了可回放、按时间索引的预测研究环境，使这一更完整的学习问题变得可行。本文在此环境上构建 AlphaBet，回答上述问题，并进一步分析策略优化中归一化方式对概率校准的影响。

### 方法与关键设计

- 任务形式化：每个问题 <span class="paper-math">&#92;(Q&#92;)</span> 指定有限的结果集合 <span class="paper-math">&#92;(&#92;mathcal&#123;Y&#125;=&#92;&#123;1,&#92;ldots,K&#92;&#125;&#92;)</span> 与解决判据。在问题活跃期 <span class="paper-math">&#92;([&#92;tau&#95;&#123;&#92;mathrm&#123;start&#125;&#125;,&#92;tau&#95;&#123;&#92;mathrm&#123;close&#125;&#125;]&#92;)</span> 内，预测者在解决前的调度日期 <span class="paper-math">&#92;(&#92;tau&#95;1&lt;&#92;cdots&lt;&#92;tau&#95;T&#92;)</span> 上各做一次预测步，输出概率报告 <span class="paper-math">&#92;(p&#95;&#123;Q,t&#125;&#92;in&#92;Delta^&#123;K-1&#125;&#92;)</span>。日期 <span class="paper-math">&#92;(&#92;tau&#95;t&#92;)</span> 可用的信息语料为 <span class="paper-math">&#92;(&#92;mathcal&#123;I&#125;&#95;&#123;&#92;le&#92;tau&#95;t&#125;&#92;)</span>，且随时间单调扩张 <span class="paper-math">&#92;(&#92;mathcal&#123;I&#125;&#95;&#123;&#92;le&#92;tau&#95;t&#125;&#92;subseteq&#92;mathcal&#123;I&#125;&#95;&#123;&#92;le&#92;tau&#95;&#123;t+1&#125;&#125;&#92;)</span>，晚于该日期发布的信息被排除。
- 论文区分两个预测目标：日期语料目标 <span class="paper-math">&#92;(q&#95;&#123;Q,t&#125;(k)=&#92;Pr(Y=k&#92;mid Q,&#92;tau&#95;t,&#92;mathcal&#123;I&#125;&#95;&#123;&#92;le&#92;tau&#95;t&#125;)&#92;)</span> 是给定全部可用信息时的贝叶斯最优预测；获取上下文目标 <span class="paper-math">&#92;(q^&#123;H&#125;&#95;&#123;Q,t&#125;(k)=&#92;Pr(Y=k&#92;mid Q,&#92;tau&#95;t,H&#95;t,M&#95;&#123;t-1&#125;)&#92;)</span> 只基于当步搜索与阅读结果 <span class="paper-math">&#92;(H&#95;t&#92;)</span> 以及传入的笔记本 <span class="paper-math">&#92;(M&#95;&#123;t-1&#125;&#92;)</span>。三者分离了语料可推断的内容、智能体实际掌握的内容和最终报告的内容。
- 训练信号来自严格适当评分规则：若对任意分布 <span class="paper-math">&#92;(q&#92;)</span> 与报告 <span class="paper-math">&#92;(p&#92;)</span> 有 <span class="paper-math">&#92;(&#92;mathbb&#123;E&#125;&#95;&#123;Y&#92;sim q&#125;[S(q,Y)]&#92;ge&#92;mathbb&#123;E&#125;&#95;&#123;Y&#92;sim q&#125;[S(p,Y)]&#92;)</span> 且等号当且仅当 <span class="paper-math">&#92;(p=q&#92;)</span>，则真实报告在期望上最优。这使论文无需观察潜在目标，就能从报告分布与最终结果中导出训练信号。
- 智能体循环：每个预测步从问题、日期和（可选的）上一步信念笔记本出发，交替推理与三种工具调用——Search 按日期受限语料返回查询的前若干条文章快照，Read 读取已找到文章全文，Compute 执行模型生成的 Python 代码做数值分析、聚合或基率估计。步末智能体提交概率报告；启用外部记忆时还产出更新后的信念笔记本 <span class="paper-math">&#92;(M&#95;t&#92;)</span>，总结当前信念、未决问题与累积证据，供下一步使用。记忆关闭时每步从零开始，称为 memory-free；开启时称为 memory-on。
- 奖励与目标：每步奖励为 <span class="paper-math">&#92;(R&#95;t=S(p&#95;t,Y)+R&#95;t^&#123;&#92;mathrm&#123;format&#125;&#125;&#92;)</span>，主实验用负 Brier 分数作为评分项，格式奖励检查答案格式、工具调用名称以及（开启记忆时）笔记本结构与预测的一致性。训练目标是最大化跨日期的期望累积奖励 <span class="paper-math">&#92;(J&#95;&#123;&#92;mathrm&#123;train&#125;&#125;=J&#95;&#123;&#92;mathrm&#123;forecast&#125;&#125;+J&#95;&#123;&#92;mathrm&#123;format&#125;&#125;&#92;)</span>；由于格式项非正且在合法输出处归零，论文证明其不改变预测最优解。
- 命题 1 给出核心分解：在无结果泄漏假设下，最小化预测遗憾等价于最小化信息获取缺口 <span class="paper-math">&#92;(D&#95;S(q&#95;&#123;Q,t&#125;,q^&#123;H&#125;&#95;&#123;Q,t&#125;)&#92;)</span> 与概率报告缺口 <span class="paper-math">&#92;(D&#95;S(q^&#123;H&#125;&#95;&#123;Q,t&#125;,p&#95;&#123;Q,t&#125;)&#92;)</span> 之和，其中 <span class="paper-math">&#92;(D&#95;S(q,p)=&#92;mathbb&#123;E&#125;&#95;&#123;Y&#92;sim q&#125;[S(q,Y)-S(p,Y)]&#92;)</span>。这说明同一已解决事件可以在多个信息状态下监督决策，但联合优化并不保证两个缺口各自下降，需要消融验证。
- 策略优化采用 GRPO 但去掉组内标准差归一化，只保留均值中心化：<span class="paper-math">&#92;(A^&#123;(i)&#125;&#95;&#123;Q,t&#125;=R^&#123;(i)&#125;&#95;&#123;Q,t&#125;-&#92;bar&#123;R&#125;&#95;&#123;Q,t&#125;&#92;)</span>。命题 2 说明：均值中心化只把期望评分梯度缩放一个正常数因子，方向不变；而标准差归一化在大组极限下等价于把报告目标替换为按各类奖励标准差倾斜的版本 <span class="paper-math">&#92;(&#92;widetilde&#123;q&#125;^&#123;H&#125;&#95;&#123;Q,t&#125;(k)=&#92;frac&#123;q^&#123;H&#125;&#95;&#123;Q,t&#125;(k)/(&#92;sigma^&#123;S&#125;&#95;&#123;Q,t,k&#125;+&#92;epsilon)&#125;&#123;&#92;sum&#95;j q^&#123;H&#125;&#95;&#123;Q,t&#125;(j)/(&#92;sigma^&#123;S&#125;&#95;&#123;Q,t,j&#125;+&#92;epsilon)&#125;&#92;)</span>，只有各类标准差相等时才回到真实目标。因此归一化可能按结果类别重新加权，使分布变尖、变平或在类别间偏移，扭曲多类概率目标。组构造上，memory-free 对同一问题同一日期采样一组完整回合；memory-on 对同一问题采样多个完整回合，在每个日期上跨回合组内比较，且只用当步即时奖励，不做跨日期信用分配。

### 实验设计与论证方式

- 训练底座为 GLM-4.5-Air（106B-A12B），其公开检查点发布于训练事件之前。训练集为 Forecast-Dojo 训练划分，来自 Polymarket 的一千余个二元与多选项事件、近四千个事件—日期任务，预测日期跨度约半年；由于所有训练事件晚于检查点发布，其结果无法被预训练数据直接记住。另用时间上不重叠的验证集做检查点选择与超参调优。
- 语料为按时间索引的 CC-News，检索在每个预测日期被限制为该日期前已发布的文章。奖励为负 Brier 分数加格式奖励。论文比较三种变体：单日期训练、多日期无记忆（memory-free）、多日期带信念笔记本（memory-on）。
- 评测在 Forecast-Dojo 评测集与 FutureX 上进行，指标为 top 结果准确率与 Brier 分数，报告点估计及百分之九十五置信区间（Forecast-Dojo 用事件聚类自助法，FutureX 用逐条自助法）。比较对象包括预测 harness 与此前基于 RL 的训练方法，并与更大的现成模型对照。消融覆盖多日期训练、证据—读者交换实验以及 GRPO 归一化方式（含对数评分的补充实验）。这是纯离线基准研究，材料中未见线上部署实验。

### 结果与证据

- 在 GLM-4.5-Air 上，AlphaBet 在 Forecast-Dojo 与 FutureX 两个基准上都显著降低了 Brier 分数，说明多日期智能体训练能改善概率预测质量；该结果为离线基准上的点估计，不能直接外推到线上部署或其他底座模型。（摘要与 1 Introduction）

  > We decompose forecasting regret into an evidence-acquisition gap and a probability-reporting gap, and show that Group Relative Policy Optimization (GRPO)'s standard-deviation normalization can distort the reporting target under multi-class proper scores. On GLM-4.5-Air, AlphaBet reduces the Brier score from 0.731 to 0.626 on Forecast-Dojo and from 0.612 to 0.528 on FutureX.

- 最强变体在两个基准上同时提升 top 结果准确率并降低 Brier 分数，优于预测 harness 与此前基于 RL 的训练方法，并与明显更大的现成模型保持竞争力；这支持多日期训练的整体有效性，但比较范围限于论文所选基准与对手。（1 Introduction）

  > Our strongest variant improves GLM-4.5-Air from 41.6% to 50.5% accuracy and from 0.731 to 0.626 Brier on Forecast-Dojo evaluation set, and from 51.3% to 57.9% accuracy and from 0.612 to 0.528 Brier on FutureX, outperforming forecasting harnesses and prior RL-based training methods while remaining competitive with substantially larger off-the-shelf models.

- 受控消融显示多日期训练一致优于单日期训练；证据—读者交换实验表明收益同时来自更好的证据获取和更好的概率报告，而非单一来源；GRPO 消融支持归一化分析。消融支持解释，但不能排除所有其他可能原因。（1 Introduction）

  > Multi-date training consistently improves over single-date training. Controlled evidence–reader swaps show improvements in both evidence acquisition and probability reporting. Finally, GRPO ablations support our proper-scoring analysis: within-group standardization degrades probabilistic forecast quality, while removing it preserves the intended training signal.

- 实证结果验证了 GRPO 的组内标准差归一化会损害基于适当评分规则的概率预测质量，而 top 结果准确率基本不变；这说明归一化的危害集中在概率校准而非排序最可能结果的能力，该结论限于论文所测的评分规则与任务设置。（1 Introduction）

  > Our empirical results validate that GRPO’s std normalization degrades proper-scoring-rule performance while leaving top-outcome accuracy largely unchanged. † † footnotetext: Corresponding author(s): &#123;liqiny, chaozhang&#125;@gatech.edu † † footnotetext: † Work done during an internship at Amazon.

### 与小组方向的关联

该工作属于 Agentic RL 与带训练的记忆方向，与小组兴趣直接匹配；其多日期训练、信念笔记本和 GRPO 归一化分析对生成式推荐中的语义决策与概率校准有可借鉴之处。实证较充分，含消融与置信区间，但无线上结果，代码状态本次未核验。

### 局限与阅读边界

- 作者已承认的局限：memory-on 情形下，早期笔记本动作会影响后续预测，但训练只使用每个日期的即时奖励，没有跨日期信用分配，更新是逐步代理而非完整回合回报梯度，作者明确把跨日期信用分配列为未来工作。此外，命题 2 只刻画固定上下文、仅评分项的局部报告更新，不保证训练完成的完整智能体整体校准；对数评分的概率下限实现在整个单纯形上并非严格适当。
- 从材料可合理提出的验证问题：训练事件全部来自 Polymarket、证据语料限于新闻类文章，向其他事件类型或其他证据源的迁移未在本材料中验证；倾斜目标的失真方向依赖各类奖励标准差，实际训练中会以何种形式（变尖、变平或类别偏移）出现，论文只给出理论可能性和总体实证支持，未逐类分析。
- 本次阅读范围限制：材料未包含线上或真实时间预测的部署结果，代码仓库状态本次未核验，无法据此判断复现条件；与更大现成模型的对照细节在本次材料中未完整展开。

## Predictable Scaling: Efficient Model Exploration via Scaling-Law Prediction {#arxiv-2610-23453}

**作者：** Aishwarya Wesanekar, Sheng-Tao Yang, Jiawei Zhang, Flavio Sales Truzzi, Chen Chen, Nader Beigiparast, Shengyuan Huang, Roshanak Zilouchian Moghaddam, Vitor Cid, Colin Clement, Vinayak Thapliyal, Sebastian Ament, Jihao Andreas Lin, Vincent Huang, Kai Han, Boyi Jiang, Wenlin Chen, Chaorong Chen, Ashwin Kumar, Maximilian Balandat, David Eriksson, Yifei Zhang, Pan Zhong

**命中的作者机构：** Meta

**作者单位原文：** Meta Platforms, Inc.

**论文：** [arXiv](https://arxiv.org/abs/2610.23453) · [本次阅读版本 v1](https://arxiv.org/abs/2610.23453v1)

阅读范围：完整 PDF，共 26 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Evaluating candidate changes (hypotheses) to recommendation models requires full-scale training runs consuming thousands of GPU-hours, severely limiting the hypothesis space engineers can feasibly explore. We introduce Predictable Scaling (PS), a systematic framework that exploits empirically verified regularity conditions to predict full-scale model performance from small-scale proxies. PS constructs scaled-down variants via composable scaling functions along distinct resource axes, and projects metrics to the target scale via curve fitting with calibrated uncertainty estimates. We compare three prediction strategies of increasing expressiveness: even the simplest (raw proxy) achieves prediction error within the empirical noise floor of repeated-run variance; the most expressive (Gaussian Process) provides an indicative 15% relative MAE improvement and calibrated uncertainty. Evaluation on two ranking models of increasing complexity---a task-specific model and a foundation model---demonstrates that PS correctly ranks actionable hypotheses across diverse hypothesis types at 79-88% compute reductions.

### 一句话速览

针对推荐模型候选改动需全量训练、算力消耗过大的问题，提出 Predictable Scaling 框架：以六种可组合的缩放函数构造小规模代理实验，再用曲线拟合把相对性能差距外推到目标规模。在两个工业排序模型与四个公开模型上验证，能以大幅节省的算力正确排序有效假设。

### 研究动机

- 工业推荐系统中，评估候选改动（假设）需要对每个候选做一次全量训练，消耗数千 GPU 小时；候选集随架构、特征、超参的设计空间乘性增长，工程师能实际探索的假设空间因此严重受限。已有缩放定律研究主要面向同构 Transformer 的绝对损失，用于容量规划；多臂早停类方法只能在固定架构内提前终止差配置，无法处理架构、特征、数据这类需要独立训练的结构性改动。
- 本文要回答的问题是：推荐模型的假设级相对性能差距是否随规模呈可预测的规律，能否用小规模代理实验可靠预测全量结果并保持假设之间的排序。其关键经验观察是，即使绝对性能曲线噪声很大，假设之间的相对差距仍是规模的平滑低维函数。

### 方法与关键设计

- 问题设定：设基线模型与若干候选假设，每个假设经收敛训练后得到标量指标（归一化熵 NE，越低越好）。定义相对性能差距 <span class="paper-math">&#92;(&#92;Delta&#95;i=(&#92;ell&#95;i-&#92;ell&#95;0)/&#92;ell&#95;0&#92;)</span>，负值表示优于基线。缩放机制 <span class="paper-math">&#92;(s&#95;j&#92;)</span> 产生小规模变体并得到缩放后差距 <span class="paper-math">&#92;(&#92;Delta&#95;i^&#123;(j)&#125;&#92;)</span>，构成观测向量 <span class="paper-math">&#92;(&#92;mathbf&#123;d&#125;&#95;i&#92;)</span>。预测器 <span class="paper-math">&#92;(f&#95;&#92;theta&#92;)</span> 把 <span class="paper-math">&#92;(&#92;mathbf&#123;d&#125;&#95;i&#92;)</span> 映射为全量差距估计 <span class="paper-math">&#92;(&#92;hat&#123;&#92;Delta&#125;&#95;i&#92;)</span>。PS 不预测绝对性能，而是预测相对差距，这是与经典缩放定律的核心差别。
- 框架提供六种可组合的缩放函数：DD 均匀降采样训练数据（保持数据分布，保序最可靠）；HSR 缩减稀疏嵌入表行数（低于最小阈值的表不动，主要省显存）；ES 缩减嵌入向量宽度；FS 按预计算的重要性分数剪枝低重要性特征（共享嵌入表整组处理，并沿依赖链移除派生特征）；WAS 统一缩放所有隐藏维度（计算约按 <span class="paper-math">&#92;(&#92;alpha^2&#92;)</span> 下降）；DS 截断 Transformer 层数。函数可乘性组合成缩放配置，例如（帮助理解的例子）对数据、哈希表和嵌入宽度各取一半比例，得到一个目标降算力的代理。所有整数参数经量化缩放算子处理，保证结果为正且与硬件对齐（如张量核的倍数要求），并维护嵌入维度与压缩因子之间的结构不变式。
- 预测器有三种递增表达力：最简代理直接取某一缩放点的差距；线性回归假设差距迁移函数近似仿射，用最小二乘拟合；经验高斯过程（EGP）从历史训练曲线学习非参数先验——均值函数是历史曲线的逐点平均，协方差是样本协方差 <span class="paper-math">&#92;(k(x,x')=&#92;frac&#123;1&#125;&#123;R-1&#125;&#92;sum&#95;i[y&#95;i(x)-&#92;mu(x)][y&#95;i(x')-&#92;mu(x')]&#92;)</span>，在固定缩放点外推代理学习曲线的收敛值。EGP 还提供校准不确定性：预测的平均变异系数超过任务相关阈值时拒绝该预测，提示需要全量训练。曲线拟合前先用差距趋势和极高 Pearson 相关阈值筛选参考曲线，作者发现单条高相关参考比多条更稳健。
- 预算最优代理选择：在已知全量差距的基准语料（历史已收敛实验积累）上，枚举满足预算约束 <span class="paper-math">&#92;((N+1)&#92;cdot r(c)&#92;cdot C&#95;&#123;&#92;text&#123;full&#125;&#125;&#92;leq B&#92;)</span> 的缩放配置，组合深度受限、比例网格较粗、并按计算档位过滤，然后训练代理、交叉验证联合选择缩放配置与预测器，最小化平均绝对误差。基准语料上的代理训练是一次性离线投入，之后的模型拟合开销可忽略。
- 与基线的差异：Hyperband、BOHB 等多保真方法在固定架构内自适应终止差配置，而 PS 面向每个需要独立训练的结构性改动；经典缩放定律预测同构架构的绝对性能，PS 预测异构推荐模型（稀疏嵌入、稠密层、序列组件耦合）中跨多个资源轴的相对差距。计算节省由训练器数、样本量与吞吐的相对变化合成估计，代理与全量使用同型硬件以避免吞吐混淆。

### 实验设计与论证方式

- 评估在两个工业排序模型上进行：任务专用模型 TS-1 与基础模型 FM-1（前向 FLOPs 约为 TS-1 的数十倍），均为多任务 CTR+CVR 排序模型，训练数据量级为百亿到千亿样本，含约一千五百个稠密特征和约七百个高基数稀疏特征。指标为归一化熵，以重复基线运行的标准差作为 A/A 噪声底，MAE 按其归一化；排序相关性只在超出噪声底的有效假设上计算，因为中性假设的排序本身无意义。TS-1 评估十四个留出假设与三种预测器，FM-1 评估七个留出假设比较最简代理与 GP，均使用单一代理配置。
- 附录 H 提供可复现的公开评估：在 Criteo 数据集上对 DLRM、DeepFM、xDeepFM、DCN-v2 四个架构，设计二十七个超参假设（嵌入维度、DNN 宽度、深度、联合缩放、正则与学习率），按效应量分层划分为训练与留出集，在六种统一比例的缩放配置下比较三种预测器。所有结果均为离线训练指标；论文未报告线上 A/B 结果，也未在正文声明开源代码，本次未核验代码仓库。

### 结果与证据

- 在任务专用排序模型的点击率头上，三种预测策略的误差均落在重复实验噪声底以内；经验高斯过程进一步降低误差并提升排序相关性，并对所有有效假设实现完全的排序保持，说明小规模代理足以做假设初筛。结论限于该模型的离线归一化熵指标。（Table 3, Section 4）

  > The raw proxy achieves <span class="paper-math">&#92;(0.865&#92;,&#92;tau&#95;&#123;&#92;text&#123;AA&#125;&#125;&#92;)</span> MAE ( <span class="paper-math">&#92;(&#92;rho=0.755&#92;)</span> ); the EGP achieves the best at <span class="paper-math">&#92;(0.738&#92;,&#92;tau&#95;&#123;&#92;text&#123;AA&#125;&#125;&#92;)</span> ( <span class="paper-math">&#92;(&#92;rho=0.8&#92;)</span> )—a <span class="paper-math">&#92;(15&#92;%&#92;)</span> relative MAE improvement. Among the 6 actionable hypotheses ( <span class="paper-math">&#92;(|&#92;Delta|&gt;&#92;tau&#95;&#123;&#92;text&#123;AA&#125;&#125;&#92;)</span> ), PS achieves <span class="paper-math">&#92;(&#92;rho=1.0&#92;)</span> under all predictors. Figure 4 visualizes this progression.

- 在基础模型上，最简代理在点击率头的误差明显超过噪声底，而经验高斯过程通过曲线拟合把误差压回噪声底附近，说明代理保真度随规模退化时曲线拟合价值最大；该结论限于离线指标，且留出假设数量较小。（Table 4, Section 4）

  > The raw proxy exceeds the noise floor on CTR heads ( <span class="paper-math">&#92;(2.15&#92;,&#92;tau&#95;&#123;&#92;text&#123;AA&#125;&#125;&#92;)</span> , <span class="paper-math">&#92;(1.75&#92;,&#92;tau&#95;&#123;&#92;text&#123;AA&#125;&#125;&#92;)</span> ). The GP reduces these to <span class="paper-math">&#92;(0.70&#92;)</span> – <span class="paper-math">&#92;(0.85&#92;,&#92;tau&#95;&#123;&#92;text&#123;AA&#125;&#125;&#92;)</span> —a <span class="paper-math">&#92;(57&#92;)</span> – <span class="paper-math">&#92;(67&#92;%&#92;)</span> MAE improvement—confirming that curve fitting provides substantial value on foundation models where the raw proxy alone is insufficient.

- 在四个公开架构上，当最简代理误差超过噪声底时，高斯过程均能大幅降低误差，且改进恰在代理最差的配置上最大，验证了曲线拟合在信号噪声大时最有用；这是统一缩放比例下公开基准的观察，普适性待进一步验证。（Appendix H.3.1）

  > Across all four models, when the raw proxy exceeds <span class="paper-math">&#92;(1&#92;,&#92;tau&#95;&#123;&#92;text&#123;AA&#125;&#125;&#92;)</span> , the GP reduces MAE by <span class="paper-math">&#92;(37&#92;)</span> – <span class="paper-math">&#92;(80&#92;%&#92;)</span> : • DLRM hash_data: <span class="paper-math">&#92;(4.567&#92;to 0.893&#92;,&#92;tau&#95;&#123;&#92;text&#123;AA&#125;&#125;&#92;)</span> ( <span class="paper-math">&#92;(-80&#92;%&#92;)</span> ; fig. 11 ) • DCN-v2 hash_data: <span class="paper-math">&#92;(1.919&#92;to 0.559&#92;,&#92;tau&#95;&#123;&#92;text&#123;AA&#125;&#125;&#92;)</span> ( <span class="paper-math">&#92;(-71&#92;%&#92;)</span> ; fig. 32 ) • DCN-v2 data_ds: <span class="paper-math">&#92;(1.821&#92;to 0.819&#92;,&#92;tau&#95;&#123;&#92;text&#123;AA&#125;&#125;&#92;)</span> ( <span class="paper-math">&#92;(-55&#92;%&#92;)</span> ; fig. 32 ) • xDeepFM all_scaled:

- 多轴组合缩放可能比单轴更严重地破坏保序性：某组合的排序相关性为负，而其两个单轴分量均为正，说明缩放函数不能盲目组合，需在基准语料上筛选；该现象在特定架构上观察到，跨架构规律性待验证。（Appendix H.3.3）

  > Combining scaling dimensions sometimes introduces interaction effects that violate (A3) more severely than either axis alone: • DeepFM hash_emb ( <span class="paper-math">&#92;(&#92;rho=-0.491&#92;)</span> ) combines hash-only ( <span class="paper-math">&#92;(&#92;rho=0.939&#92;)</span> ) and emb-only ( <span class="paper-math">&#92;(&#92;rho=0.115&#92;)</span> )—the composition is dramatically worse than either component.

### 与小组方向的关联

框架针对推荐模型假设评估的真实算力痛点，缩放函数设计与预算最优选择流程有实质新意，工业模型与公开基准双线实验加预测器消融较充分；但无线上结果、留出假设数量有限，部分结论依赖特定架构与数据规模。

### 局限与阅读边界

- 作者承认的局限：PS 在 NE 快速收敛、A/A 方差小、效应量超过噪声底时表现最好；组合缩放存在符号翻转风险，需在基准语料上检测并在翻转率过高时拒绝该配置。公开基准进一步显示边界条件：嵌入宽度单独缩放在全部四个公开架构上保序性都差（与工业模型上 ES 表现良好形成对比）；数据降采样的可靠性依赖数据规模，在小数据集上对复杂交互架构会退化；DCN-v2 这类强耦合交叉网络最难缩放，且 MAE 与排序保持可能背离。
- 可合理提出的验证问题：主实验只用单一代理配置（作者把多尺度配置列为未来方向），指标限于离线 NE，线上指标适配与更大基础模型上的验证尚未完成；对规则条件未验证的新架构，作者建议 PS 初筛加选择性全量验证的混合策略，这一建议本身也未经实验验证。
- 本次阅读范围不足：未核验代码仓库与复现环境，开源状态以论文声明为准；论文声明部分文本由大模型辅助撰写，技术内容与结果由作者验证，本次未独立复现任何实验。

## From Trajectories to Differentiated Skills: Cognitive Differentiation for Self-Improving Agents {#arxiv-2610-23599}

**作者：** Yewei Zhao, Derong Xu, Wei Chen, Yin Xu, Peilun Zhou, Xiaohan Wang, Guojun Yin, Wei Lin, Mingjun Xiao

**命中的作者机构：** Meituan

**作者单位原文：** Meituan City University of Hong Kong * Corresponding authors.；Meituan City University of Hong Kong

**论文：** [arXiv](https://arxiv.org/abs/2610.23599) · [本次阅读版本 v1](https://arxiv.org/abs/2610.23599v1)

阅读范围：完整 PDF，共 22 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Large language model (LLM) agents tackle complex tasks through reasoning and interaction with external environments. Agent skills provide persistent, transferable capabilities that guide task planning, inform contextual decisions, support tool use, and enable executable procedures. Yet existing skill-evolution methods largely organize knowledge around skill artifacts, overlooking the functional heterogeneity within individual skills and its implications for knowledge maintenance and use. Inspired by cognitive science, we propose Cognitive Differentiation in Skill Evolution (CDSE), which evolves a unified skill through four functionally distinct yet coordinated components: Meta, Experience, Tool, and Script. CDSE extracts evidence-grounded semantic gradients from successful and failed trajectories, consolidates them by functional role, and applies component-specific updates and validation with cross-component coordination and adaptive invocation. An analysis of 500 top-ranked skill packages shows that 96.8% contain knowledge spanning at least two functional roles. Across six benchmarks, three agent models, and two execution harnesses, CDSE achieves the highest scores in all 36 settings, improving over the Base agent by 7.6 percentage points and the strongest competing method in each setting by 2.6 points on average. Ablation studies further support the importance of functional differentiation and adaptive invocation.

### 一句话速览

针对 LLM agent 技能演化中知识按工件边界组织、忽视功能异质性的问题，提出 CDSE 框架：从成功/失败轨迹提取带证据的语义梯度，按 Meta、Experience、Tool、Script 四种功能角色分化维护，并配合专门更新、跨组件协调与自适应调用。在六个基准、三个模型、两种执行框架的 36 个设置中全部取得最高分，消融支持功能分化的关键作用；结论限于离线基准评测。

### 研究动机

- LLM agent 通过推理和与环境交互完成复杂任务，外部技能（skill）以不修改模型参数的持久知识状态形式，为任务规划、上下文决策、工具使用和可执行流程提供可复用能力。利用带评测结果的执行轨迹持续精炼技能，是 agent 持续自我改进的重要路线，典型场景包括文档问答、表格操作、软件工程和业务工作流自动化等 agent 基准任务。
- 作者指出，现有技能演化方法大多围绕工件边界（技能文档、记忆条目、技能库）组织知识，忽视了单个技能内部知识的功能异质性：同一次执行可能同时产生任务级控制建议、情境启发式、工具使用规则和可复用脚本，它们在范围、表示、验证要求和生效时机上各不相同，仅按工件组织无法决定各自应如何维护和调用。
- 本文要回答的问题是：异质的行为更新应如何在外部技能状态中被组织、更新、验证和调用。作者借鉴认知科学（控制过程与记忆结构、知道如何与知道什么的区分、执行功能的统一性与多样性），提出按功能角色分化的技能演化框架 CDSE。作为动机证据，作者分析了 500 个高排名技能包，发现绝大多数包含至少两种功能角色的知识，说明功能分化是真实技能的普遍特征。

### 方法与关键设计

- CDSE 的形式化设定是：agent 在固定模型参数和固定更新协议下，维护一个持久的外部技能状态 <span class="paper-math">&#92;(&#92;mathcal&#123;B&#125;^&#123;(t)&#125;=(&#92;mathcal&#123;M&#125;,&#92;mathcal&#123;E&#125;,&#92;mathcal&#123;T&#125;,&#92;mathcal&#123;S&#125;)^&#123;(t)&#125;&#92;)</span>，分别对应 Meta、Experience、Tool、Script 四个组件。给定带评测结果的轨迹语料 <span class="paper-math">&#92;(&#92;mathcal&#123;D&#125;^&#123;(t)&#125;=&#92;&#123;(&#92;tau&#95;i,y&#95;i)&#92;&#125;&#92;)</span>，核心更新为 <span class="paper-math">&#92;(&#92;mathcal&#123;B&#125;^&#123;(t+1)&#125;=&#92;mathcal&#123;U&#125;(&#92;mathcal&#123;B&#125;^&#123;(t)&#125;,&#92;mathcal&#123;R&#125;(&#92;mathcal&#123;G&#125;(&#92;mathcal&#123;D&#125;^&#123;(t)&#125;)))&#92;)</span>，其中 <span class="paper-math">&#92;(&#92;mathcal&#123;G&#125;&#92;)</span> 提取候选语义梯度，<span class="paper-math">&#92;(&#92;mathcal&#123;R&#125;&#92;)</span> 做保留与功能归因，<span class="paper-math">&#92;(&#92;mathcal&#123;U&#125;&#92;)</span> 执行带验证的更新。
- 第一阶段是结果对比的语义梯度发现。确定性过滤器 <span class="paper-math">&#92;(P&#92;)</span> 去除心跳、重试通知等运行时噪声，保留推理、工具调用和观察。成功与失败轨迹走不同诊断目标：成功轨迹重建最小可追溯的成功路径并评级为有效/脆弱/无效/未知，提取值得保留的行为；失败轨迹定位最早有证据的决定性错误及最小可行恢复。每个候选梯度 <span class="paper-math">&#92;(f=(g,e)&#92;)</span> 把可复用行为更新 <span class="paper-math">&#92;(g&#92;)</span> 与支撑轨迹行 <span class="paper-math">&#92;(e&#92;)</span> 配对，保证证据可溯源。
- 第二阶段是认知引导的梯度整合，分保留门控和功能归因两步。保留门 <span class="paper-math">&#92;(r(f)&#92;in&#92;&#123;0,1&#92;&#125;&#92;)</span> 过滤泛泛建议、无支持诊断和样本特定答案；每个保留梯度分配一个主组件、至多一个次组件，即 <span class="paper-math">&#92;(&#92;rho(f)&#92;subseteq&#92;mathcal&#123;K&#125;&#92;)</span> 且 <span class="paper-math">&#92;(1&#92;le|&#92;rho(f)|&#92;le 2&#92;)</span>。归因依据行为角色：Meta 收任务级控制（规划、监控、停止），Experience 收带局部激活条件的启发式，Tool 收依赖具体命名工具的操作规则，Script 收确定性可测试的程序提案。帮助理解的例子：比较前先核对单位属于 Experience，而针对某表格库保持公式的限制属于 Tool，可重复排序变换则可成为 Script 提案。
- 第三阶段是自适应自我改进更新：<span class="paper-math">&#92;(&#92;widehat&#123;&#92;mathcal&#123;B&#125;&#125;&#95;k^&#123;(t+1)&#125;=U&#95;k(&#92;mathcal&#123;B&#125;&#95;k^&#123;(t)&#125;,&#92;mathcal&#123;F&#125;&#95;k)&#92;)</span>，再经跨组件协调 <span class="paper-math">&#92;(C&#92;)</span> 和描述重写 <span class="paper-math">&#92;(D&#92;)</span> 得到 <span class="paper-math">&#92;(&#92;mathcal&#123;B&#125;^&#123;(t+1)&#125;=D(C(&#92;widehat&#123;&#92;mathcal&#123;B&#125;&#125;^&#123;(t+1)&#125;))&#92;)</span>。Meta 和 Experience 共享原子规则机制（对齐、聚合证据修订、归纳新规则、容量控制），但 Meta 管任务级控制、Experience 要求局部触发条件；Tool 按能力类别组织规则并做类别级容量控制；Script 有最严格的验收契约——提案需确定性、显式输入输出契约、可行测试，实现后自测并由独立验证器在干净环境中复核，未通过验证的代码被扣留。
- 与基线的关键差异在于组织原则：Trace2Skill、SkillOpt-lite、EvoSkill 等方法以技能文档、记忆条目或技能库等工件边界为单位组织知识，而 CDSE 让功能归属决定所有权、表示、更新规则、验证契约和调用时机。协调器只做最小编辑解决冲突与重复，不能改动已验证的脚本；描述重写器只更新加载前可见的组件描述，验证器要求其余内容字节级不变，任一阶段验证失败则不发布新状态。推断时 agent 通过普通调用机制按任务需求选择性加载组件。

### 实验设计与论证方式

- 实验覆盖六个基准：OfficeQA（文档问答）、SpreadsheetBench2（表格操作）、SealQA（长上下文证据综合）、LiveMathBench（数学选择题）、SWE-Pro（仓库级软件工程，以全部测试通过为成功标准）和 AutomationBench（基于最终环境状态断言的业务工作流）。使用 GLM-5.2、DeepSeek-V4-Flash、MiniMax-M3 三个模型，在 Claude Code 和 Codex 两种执行框架下评测，每个基准按 2:7 划分训练/测试集，训练轨迹用于技能演化，报告结果均在测试集上，且各方法共享训练划分、任务实例、工具与上下文限制。
- 比较对象包括无技能状态的 Base、Trace2Skill、SkillOpt-lite 和 EvoSkill，主表报告三轮演化后的任务得分，聚合提升为各单元内百分点变化的宏平均。消融包括组件移除（图 4）和四种机制消融（表 3：去分化、去专门更新、去跨组件协调、去自适应调用接口）。另有跨模型/跨框架技能状态迁移（图 6、表 11/12）、跨基准组件迁移（表 2）和 token 效率分析（表 4/6）。所有结果均为离线基准评测，论文未报告线上或 A/B 实验；附录说明剩余提示词与实现代码在软件补充材料中提供，本次未核验代码仓库。

### 结果与证据

- 在六个基准、三个模型、两种执行框架的全部设置中，CDSE 取得最高分，相对无技能基线的平均提升为宏平均百分点，且在每个基准的两种框架下均成立；该结论基于离线基准测试，不能直接外推到线上场景。（4.2 Overall Performance）

  > On average, it improves over Base by 7.6 percentage points and exceeds the strongest competing skill-evolution baseline in each setting by 2.6 points. This advantage holds on every benchmark with both Claude Code and Codex, spanning document and mathematical reasoning, spreadsheet manipulation, software engineering, and business workflows.

- 机制消融显示功能分化贡献最大，其次是自适应调用接口；去分化变体使用与完整方法相同的语义梯度，说明收益来自功能组织与维护方式本身，而非仅仅提取经验教训。该消融限于三个基准和单一模型-框架组合。（4.6 Mechanism Ablations）

  > Full CDSE achieves the highest score across all three benchmarks. Removing cognitive differentiation causes the largest drops, followed by removing the Adaptive Invocation Interface. The no-differentiation variant uses the same semantic gradients as CDSE, suggesting benefits from functional organization and maintenance beyond lesson extraction.

- 跨基准组件迁移显示 Meta 的任务级控制知识迁移性最好，Experience 较有选择性，Tool 和 Script 迁移收益有限，与各组件知识的作用范围一致；该结果基于单一模型的两个源基准，不能推广为所有任务类型的迁移规律。（4.5 Transfer across Tasks, Models, and Harnesses）

  > Table 2 evaluates component transfer from SpreadsheetBench2 or AutomationBench to other benchmarks. Meta improves 9 of 10 source–target pairs, averaging 3.6 pp over Base, whereas Experience transfers more selectively and Tool and Script show limited consistent gains.

- 图中可观察到：在该模型与框架组合下，移除任一组件在 AutomationBench 上均造成明显下降，而 Script 在 SpreadsheetBench2 上调用率很低但移除后下降最大，说明组件重要性与调用频率不直接对应；由于渐进式披露下描述始终可见，零调用不等于零影响。（Figure 4）

  图表观察（PDF 第 7 页）：图4(a)移除增量热力图：AutomationBench 行 Meta/Exp/Tool/Script 分别为 -5.6/-8.2/-6.3/-5.0；SpreadsheetBench2 行 Script 为 -8.0，为该行最大降幅；图4(b)调用率：SpreadsheetBench2 的 Script 为 6%，AutomationBench 四组件均不低于 77%。

### 与小组方向的关联

论文属于小组关注的 Agentic RL、Memory with training 与大模型个性化方向：以固定模型参数、可训练外部记忆的方式实现 agent 自我改进，其按功能角色分化记忆组件、专门维护算子加跨组件协调的设计，可借鉴到推荐/检索 agent 的经验记忆与技能库管理中。组件迁移分析（Meta 可迁移、Tool/Script 强环境依赖）对跨场景记忆复用有直接参考价值；四组件划分是否最优、路由错误的影响值得在我们场景中验证。

### 局限与阅读边界

- 作者已承认的局限：评测限于六个基准、三个模型和两种执行框架，向其他领域和 agent 配置的泛化留待未来；多轮实验复用固定轨迹语料，不能证明在持续变化环境中可持续改进；四组件划分虽有调研和实验支持，但替代分解方式的有效性尚未研究。
- 从材料可合理提出的验证问题：四组件的划分粒度由专家标注和路由提示词决定，路由质量依赖 LLM 分类器（标注 F1 约在 0.85–0.91 之间），错误归因对最终技能质量的影响未单独量化；技能演化收益集中在第一轮，说明收益上限受训练轨迹信息量约束，在真实持续运行场景中需要不断补充新执行证据，其成本与稳定性待验证。
- 本次阅读范围的限制：论文未报告线上或 A/B 实验，所有结论基于离线基准；实现代码在补充材料中提供但本次未核验仓库与复现环境；基准评分规则（如 OfficeQA 的容差加权、SpreadsheetBench2 的严格双精度要求）较复杂，跨基准的宏平均提升不能直接映射到任一具体业务指标。

## VISTA: Steering LLMs with Latent User Values Inferred from a Few Survey Answers {#arxiv-2610-23702}

**作者：** Yinuo Xu, Jadie Adams, Brian Hu, Shivani Kumar, David Jurgens, Arslan Basharat

**命中的作者机构：** Michigan

**作者单位原文：** University of Michigan, Kitware Inc.；yinuoxu@umich.edu；kshivan@umich.edu；jurgens@umich.edu

**论文：** [arXiv](https://arxiv.org/abs/2610.23702) · [本次阅读版本 v1](https://arxiv.org/abs/2610.23702v1)

阅读范围：完整 PDF，共 19 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Personalizing a language model requires knowing what a person values, which stays largely consistent across tasks. Yet most methods either learn task-specific preferences or place the user's profile in the prompt, where models struggle to act on it. We introduce VISTA (Value-Informed Steering and Targeted Acquisition), which infers a latent profile from users' (full or partial) survey answers, and maps the profile through a hypernetwork to a user-specific steering intervention in a frozen LLM to select answer choices or generate free-text responses. Given the same evidence, VISTA matches or beats in-context profiles on synthetic preferences (Food2D), the World Values Survey (WVS), and PrimeX, without adding prompt tokens. To reduce the cognitive burden of completing full surveys, VISTA also chooses which questions to ask and when to stop: on WVS it stops after 6% of the questionnaire while retaining 94% of the full-history gain, where standard adaptive testing retains at most 42%. The dominant steering direction is an interpretable value axis on which VISTA places unseen users accurately. Our results point toward pluralistic alignment that adapts to individuals at deployable cost.

### 一句话速览

论文提出VISTA：从少量问卷答案推断用户价值潜变量，经超网络映射为冻结LLM的激活干预（转向向量或软前缀），并用同一后验自适应选题与停止。在合成偏好、WVS与PrimeX上匹配或超过上下文画像，少量问题即可恢复大部分个性化收益，主导方向可解释为价值轴。

### 研究动机

- 个性化语言模型需要知道用户重视什么，而价值观跨任务相对稳定。现有路线要么从任务内成对偏好学习任务特定的用户表示，信号与收集任务绑定；要么把用户画像写进提示词，模型未必执行，且提示随答案增多变长。作者要回答：能否从少量问卷答案推断可复用、跨任务的价值潜变量，并以固定开销干预冻结LLM。
- 长问卷还带来认知负担，受访者会敷衍作答。此前偏好建模、逐用户激活干预与自适应提问三条线各自独立，VISTA首次整合三者：从少量答案推断价值后验、映射为激活级干预、并用同一后验决定问什么和何时停。

### 方法与关键设计

- 每个用户价值用三十二维潜变量<span class="paper-math">&#92;(z&#92;)</span>表示。给定问卷答案<span class="paper-math">&#92;(D&#95;u&#92;)</span>，摊销编码器输出对角高斯后验<span class="paper-math">&#92;(q&#95;&#92;phi(z|D&#95;u)=&#92;mathcal&#123;N&#125;(&#92;mu&#95;u,&#92;mathrm&#123;diag&#125;(&#92;sigma&#95;u^2))&#92;)</span>，<span class="paper-math">&#92;(&#92;mu&#95;u&#92;)</span>为价值估计、<span class="paper-math">&#92;(&#92;sigma&#95;u^2&#92;)</span>刻画不确定性；编码器取回所选选项文本嵌入，经可学习查询注意力池化聚合并映射到后验参数，训练用重参数化采样、评估用后验均值。
- 解码器为候选回答打分<span class="paper-math">&#92;(s&#95;&#92;theta(x,z)&#92;)</span>，<span class="paper-math">&#92;(z&#92;)</span>经FiLM注入语句嵌入，故能给训练未见文本打分；二选一对应Bradley–Terry、多选对应Plackett–Luce。训练目标<span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;=&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;choice&#125;&#125;+&#92;beta&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;KL&#125;&#125;+&#92;lambda&#95;&#123;&#92;mathrm&#123;swap&#125;&#125;&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;guide&#125;&#125;&#92;)</span>；为防后验坍缩，swap引导正则构造答案全反转的镜像用户，要求其潜变量均值近似取反、方差一致，迫使编码器对个体敏感。
- 共享编码器对个体可能次优，推断时在编码器初值<span class="paper-math">&#92;(&#92;mu&#95;&#123;u,0&#125;&#92;)</span>基础上对用户已答题目做一百步Adam精炼：<span class="paper-math">&#92;(&#92;mu&#95;u^&#92;star=&#92;arg&#92;min&#95;&#92;mu[&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;choice&#125;&#125;(D&#95;u;&#92;mu,&#92;theta)+&#92;tfrac&#123;&#92;lambda&#125;&#123;2&#125;&#92;lVert&#92;mu-&#92;mu&#95;&#123;u,0&#125;&#92;rVert^2]&#92;)</span>，正则平衡个体证据与群体初始化，防稀疏答案过拟合。
- 超网络<span class="paper-math">&#92;(h&#95;&#92;psi&#92;)</span>（四块八头自注意力，唯一被训练组件，梯度穿过冻结的Llama-3-8B-Instruct回传）把<span class="paper-math">&#92;(&#92;hat&#123;z&#125;&#95;u&#92;)</span>映射为干预。选择题用约二百四十万参数版本输出单位范数转向向量<span class="paper-math">&#92;(&#92;Delta&#95;u&#92;)</span>（只变方向），加到第十层残差流每个token位置，层号由验证搜索选出，训练用答案字母交叉熵。自由文本用约一千五百万参数版本输出BOS后十六个软前缀token，先蒸馏价值模型选中的目标回答，再用个性化DPO在立场相反、长度匹配的解释对上精炼，随机目标对照确认增益来自用户表示。
- 每次作答后编码器一次前向更新后验，采样六十四个后验样本，用逐题逻辑回归估计答案分布，按EPIG（对目标题回答的期望预测信息增益）选下一题；最大剩余EPIG低于初始最大值的<span class="paper-math">&#92;(&#92;varepsilon&#92;)</span>倍时停止。与基线差异：基线重排序需多次采样或提示每次重读全部答案，VISTA每查询只加一个向量或十六个软token，开销固定。

### 实验设计与论证方式

- 数据集三个：Food2D为合成食物偏好（两千训练、三百留出用户，准确率有约百分之六十六的噪声上限）；WVS第七波英美受访者约五千六百人；PrimeX八百五十八人，用五折轮换，并测试从WVS冻结编码器跨问卷、跨人群迁移。
- 强制选择题取循环选项顺序平均后的最高概率选项与本人真实答案比对，主指标为留出准确率；个性化增益用population（群体均值）与shuffled（换一个人的表示）两种对照度量，后者更严格。所有臂在相同评分行上配对，用按人聚类的自助区间。基线包括零样本LLM、上下文画像、逐题众数、LoRe与PAL。
- 自由文本生成在Food2D与PrimeX上评估（WVS无用户写作），裁判为异家族的Qwen3.5-9B，各系统与其无用户条件对照比较；Food2D的提示基线是知道真实口味向量的oracle。自适应提问在预算一、二、五、十题下与CAT、Prompt-Only、CoT、BED-LLM、逐题众数比较，CAT是唯一自带停止规则的基线。论文未报告线上或AB实验；作者声明将发布代码，本次未核验仓库。

### 结果与证据

- 在相同证据下，VISTA的用户表示在三个数据集上匹配或超过把答案放进提示词的上下文画像基线，且在部分数据集上用户特定增益达到基线的数倍。该比较在相同评分行上配对进行，说明潜变量表示比文字画像更有效地传递个人信息；这是离线问卷任务结果，不能直接推广到线上生成或推荐场景。（Table 5, Section 5.1）

  > Given every observed answer, either to the encoder or to the prompt, VISTA ties in-context conditioning on PrimeX ( <span class="paper-math">&#92;(+0.41&#92;)</span> points) and on contested WVS items ( <span class="paper-math">&#92;(+0.32&#92;)</span> ), and wins on WVS overall ( <span class="paper-math">&#92;(+2.61&#92;)</span> ) and by nearly ten points on Food2D. (2) VISTA’s user-specific gain is a multiple of in-context’s on two of the three datasets (Table 5 ).

- 主导转向方向对应可读的价值轴（WVS上为宗教传统主义，PrimeX上为安全对危险），转向后的模型能把未见用户放到该轴上其实际所处的位置，且在从未见过道德基础问卷的情况下也能恢复个体位置。这支持潜变量具有可解释结构，但相关系数来自问卷答案空间，属于定性可解释性证据，不证明因果机制。（Section 5.1 (c), Figure 2）

  > The steered model recovers each held-out respondent’s own position at <span class="paper-math">&#92;(r=0.73&#92;)</span> on WVS and <span class="paper-math">&#92;(r=0.59&#92;)</span> on PrimeX . UK respondents in WVS also completed a Moral Foundations questionnaire.

- 在PrimeX自由文本生成上，只有VISTA相对其无用户条件的对照取得统计显著的净增益，且在少数派与多数派观点行上均为正；人格提示虽然增益更大但损失也更大，净效应被抵消，且倾向复述用户的世界观信念而非表态。该评价依赖异家族LLM裁判的离线评估，裁判判断的是文本立场与本人答案的一致性。（Section 5.2, Figure 3）

  > Only VISTA’s gain over its user-agnostic control is significant on PrimeX ( <span class="paper-math">&#92;(+1.2&#92;)</span> ); Persona prompting gain more and lose more on majority and minority opinions, whereas VISTA’s shift is smaller and better aimed and nets positive on both groups (Fig. 3 ).

- 在WVS上，VISTA的自适应停止规则用远少于完整问卷的问题数就恢复了绝大部分个性化收益，且配对比较下优于CAT在其最优阈值下的表现；多问几题不再带来显著增益。该结果限于强制选择题任务与该数据集，合成偏好数据集上CAT的停止规则反而更早停止，说明停止规则的优劣依赖曲线形状，不能一概而论。（Section 5.3, Figure 4）

  > On WVS, VISTA stops after 6.2% of the questionnaire (8.1 of 131 questions ) with 93.5% of the gain; asking all ten instead is worth <span class="paper-math">&#92;(+0.32&#92;)</span> points with no significant gain. CAT stops sooner, at 6.7 questions under its textbook <span class="paper-math">&#92;(&#92;mathrm&#123;SE&#125;&lt;0.30&#92;)</span> , but recovers only 31.2%, or 42.2% at whichever of its five thresholds does best.

### 与小组方向的关联

论文与小组关注的大模型个性化、模型架构设计（超网络生成干预）直接相关，激活级转向思路可借鉴到个性化推荐或检索的用户建模中。证据较充分：三数据集、多种对照与消融、聚类自助区间；但全部为离线问卷任务，无线上或AB实验，代码仅声明将开源、本次未核验，向推荐场景迁移需另行验证。

### 局限与阅读边界

- 作者承认：自适应提问仅覆盖强制选择题，哪些问题对自由文本最有信息量仍是开放问题；转向只用后验均值，方差与一致性信号未被充分利用；用户持多数派观点时，转向有时会把模型从本已正确的答案上拉开（PrimeX强制选择与自由文本上多数派行准确率均下降，净效应仍为正），作者提出未来可检测并在此类情形下不施加转向。
- 作者还指出：评估都在问卷答案及关于问卷话题的自由文本上，价值与实际行为的相关有限，价值潜变量能否在具体道德两难上有效转向尚未验证；所有转向实验只用Llama-3-8B-Instruct一个基座，换基座需重训超网络；作者未测试转向是否削弱基座安全性，并提醒个性化可能强化用户既有观点。
- 可合理提出的验证问题：个性化增益在少数派行更突出、多数派行有回退，部署需权衡；裁判为另一个LLM，校准虽经报告仍可能引入偏差。代码仓库尚未发布或未核验，复现环境无法确认；向推荐或检索场景的迁移收益属于待验证设想。

## Learning Personalized Memory Gating from Delayed One-Sided Feedback {#arxiv-2610-23812}

**作者：** Kaixuan Ji, Zixiang Chen, Wenting Zhao, Cheng Qian, Heng Wang, Weizhi Zhang, Jielin Qiu, Liangwei Yang, Quanquan Gu, Silvio Savarese, Shelby Heinecke, Huan Wang

**命中的作者机构：** Berkeley、Salesforce、UCLA

**作者单位原文：** Salesforce AI Research；University of California, Los Angeles

**论文：** [arXiv](https://arxiv.org/abs/2610.23812) · [本次阅读版本 v1](https://arxiv.org/abs/2610.23812v1)

阅读范围：完整 PDF，共 26 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Long-term memory enables language-model agents to personalize future interactions, but a finite memory bank cannot preserve every extracted fact. Existing memory gating policies are typically shared across users and therefore fail to account for user-specific patterns of future reuse. In this paper, we study memory gating at the fact level. We first propose a retrieval-based labeling strategy that labels each fact by whether it is later retrieved and incorporated into responses. We then formulate online memory gating as contextual apple tasting with delayed one-sided feedback, and propose Warm-Start UCB, which combines offline learning from existing data with online adaptation to the current user. Our theoretical analysis establishes a high-probability regret upper bound of <span class="paper-math">&#92;(&#92;tilde&#123;O&#125;(T&#92;epsilon &#92;wedge d&#92;sqrt&#123;T&#125;)&#92;)</span> when the delay window is at most <span class="paper-math">&#92;(O(&#92;sqrt&#123;T&#125;)&#92;)</span>, where <span class="paper-math">&#92;(T&#92;)</span> is the total number of rounds, <span class="paper-math">&#92;(&#92;epsilon&#92;)</span> is the initialization error, <span class="paper-math">&#92;(d&#92;)</span> is the dimension of the feature map, and <span class="paper-math">&#92;(&#92;tilde&#123;O&#125;(&#92;cdot)&#92;)</span> hides constant and poly-logarithmic factors. The results of our experiment demonstrate that our method outperforms all baselines under different memory budgets and history lengths, establishing it as a promising personalized memory gating policy.

### 一句话速览

论文研究 LLM 智能体的个性化记忆门控：如何决定哪些事实值得存入有限记忆库。作者提出基于后续检索是否命中并真正被使用的标注策略，把在线门控建模为带延迟单边反馈的 contextual apple tasting 问题，提出两阶段 Warm-Start UCB，给出遗憾上界，并在自建基准上报告优于现有 LLM 门控基线。

### 研究动机

- LLM 智能体在与用户长期交互时，会从对话中抽取候选事实并存入记忆库，后续查询时再检索相关条目以实现个性化。由于存储与上下文预算有限，系统必须决定哪些事实值得保留：门控的输入是每条候选事实及其上下文特征，输出是存入或丢弃的二元决策，直接影响未来对话能否命中有用记忆。
- 现有系统的存储准则通常跨用户共享，例如基于启发式（是否表达稳定偏好、属性或目标）或从长上下文数据学到的通用策略，无法刻画不同用户在未来复用模式上的差异。前序工作已在会话层面形式化该问题并给出基准，显示完美个性化门控与现有基线之间仍有较大空间。
- 本文要回答的问题是：能否从交互结果中直接学习事实级、用户个性化的门控策略？关键难点在于反馈结构特殊——只有被存入的事实才可能获得后续检索反馈，且反馈在未知延迟后才有意义，被丢弃事实的反事实结果不可观测。

### 方法与关键设计

- 数据构造方面，作者以用户与 LLM 的交互历史为语料，按时间顺序喂给现成记忆系统（论文使用 mem0，但声称流水线与抽取器无关）。从空记忆库出发，每个会话抽取候选原子事实并全部并入记忆库，得到无限预算下的候选事实池，作为后续标注与评测的基础。语料采用前序工作的 PerMemBench-S，并额外合成了更长的 PerMemBench-L 以刻画长程交互。
- 标注策略是本文第一个贡献：对每条候选事实，遍历其之后的所有用户轮次，先由 LLM 判断该轮是否需要查询记忆；需要时由同一 LLM 生成自然语言查询并调用检索器，若该事实进入 top-k 检索命中，则初步标记为被需要。由于检索命中本身是带噪信号（可能只是主题相关而非真正必要，例如时间不匹配），再用 LLM 裁判逐对验证该事实出现在上下文中是否为回答所必需或能显著提升答案质量，得到有效命中集合 H0。
- 为弥补检索系统的漏检，对所有检索得分都低于阈值的轮次，再用 LLM 检查 top 检索中是否存在若干事实组合起来有助于回答，这些对记入 H1 并与 H0 合并。最终每条事实的效用标签是：只要存在任一后续轮次的有效命中即为正。作者强调该标签直接来自下游检索结果，不依赖人工或启发式奖励。
- 在线学习被形式化为带单边延迟反馈的 contextual apple tasting：每轮面对一条事实，动作是存入（add）或跳过（skip）；只有选择 add 才可能在未知延迟后观察到该事实是否被检索并确认使用，即反馈单边且延迟。作者采用 running-zero-flipping-one 延迟模型，即延迟以一定概率在每轮翻转，反馈只在存入条目上可用，这与智能体记忆系统的结构吻合。
- 算法 Warm-Start UCB 分两阶段。第一阶段从其他用户数据离线学习总体效用模式：假设效用概率由线性模型给出，用岭回归估计总体参数，其正则化形式为 <span class="paper-math">&#92;(&#92;bm&#123;&#92;mu&#125;&#95;&#123;0&#125;=(&#92;widehat&#123;&#92;bm&#123;&#92;Sigma&#125;&#125;&#95;&#123;n&#125;+&#92;gamma&#95;&#123;n&#125;&#92;mathbf&#123;I&#125;)^&#123;-1&#125;&#92;frac&#123;1&#125;&#123;n&#125;&#92;sum&#95;&#123;i=1&#125;^&#123;n&#125;&#92;mathbf&#123;x&#125;&#95;&#123;i&#125;y&#95;&#123;i&#125;&#92;)</span>，其中 <span class="paper-math">&#92;(&#92;mathbf&#123;x&#125;&#95;&#123;i&#125;&#92;)</span> 是事实特征、<span class="paper-math">&#92;(y&#95;&#123;i&#125;&#92;)</span> 是效用标签、<span class="paper-math">&#92;(&#92;widehat&#123;&#92;bm&#123;&#92;Sigma&#125;&#125;&#95;&#123;n&#125;&#92;)</span> 是经验协方差。附录论证了当用户参数集中在一个总体中心附近且样本量足够时，该估计与真实中心的加权距离可被 <span class="paper-math">&#92;(&#92;epsilon&#92;)</span> 控制，为热启动提供先验。
- 第二阶段在当前用户的在线交互中自适应：维护设计矩阵 <span class="paper-math">&#92;(&#92;mathbf&#123;V&#125;&#95;&#123;t&#125;&#92;)</span> 与累积统计，计算置信上界索引 <span class="paper-math">&#92;(&#92;widetilde&#123;&#92;eta&#125;&#95;&#123;t&#125;=&#92;langle&#92;widehat&#123;&#92;bm&#123;&#92;theta&#125;&#125;&#95;&#123;t-1&#125;,&#92;mathbf&#123;x&#125;&#95;&#123;t&#125;&#92;rangle+&#92;alpha&#95;&#123;t-1&#125;&#92;|&#92;mathbf&#123;x&#125;&#95;&#123;t&#125;&#92;|&#95;&#123;&#92;mathbf&#123;V&#125;&#95;&#123;t-1&#125;^&#123;-1&#125;&#125;&#92;)</span>，其中第一项是当前对效用概率的估计，第二项是不确定性 bonus，<span class="paper-math">&#92;(&#92;alpha&#95;&#123;t-1&#125;&#92;)</span> 同时计入统计误差与热启动先验失配。索引超过阈值 <span class="paper-math">&#92;(&#92;kappa&#95;&#123;m&#125;&#92;tau&#92;)</span>（<span class="paper-math">&#92;(&#92;kappa&#95;&#123;m&#125;&#92;)</span> 是延迟窗口内观察到反馈的概率）就存入。与基线的差别在于：基线是跨用户共享的 LLM 启发式或全存策略，而本方法用离线先验加速冷启动，再用 UCB 探索当前用户的特有模式。理论结果表明，当延迟窗口不超过 <span class="paper-math">&#92;(O(&#92;sqrt&#123;T&#125;)&#92;)</span> 时，遗憾以高概率被 <span class="paper-math">&#92;(&#92;widetilde&#123;O&#125;(T&#92;epsilon&#92;wedge d&#92;sqrt&#123;T&#125;)&#92;)</span> 界住：先验好时按 <span class="paper-math">&#92;(T&#92;epsilon&#92;)</span> 收敛，先验差时退化为标准 <span class="paper-math">&#92;(d&#92;sqrt&#123;T&#125;&#92;)</span> 学习速率，作者还据此给出正则参数的相变选择准则。

### 实验设计与论证方式

- 评测在自建基准上进行，包括 PerMemBench-S 与更长的 PerMemBench-L。协议设定固定记忆预算 <span class="paper-math">&#92;(B&#92;)</span>，门控对每条事实决定是否存入，库满时按最早条目驱逐。主指标是检索命中保留率（RHR）：统计有效命中集合中，事实在真正被需要的轮次仍留在记忆库里的比例。RHR 低可能因为门控直接丢弃了所需事实，也可能因为存入太多无关事实导致其被过早驱逐，因此高 RHR 意味着既存对又存少。辅助指标是把存储决策视为二元分类的 F1。
- 比较对象包括此前的 LLM 门控方法与朴素的全部存入基线，在多个记忆预算（论文正文与附录涉及不同预算档位）和不同交互历史长度下评测。作者还做了元分析：用事实文本的 TF-IDF 表示加逻辑回归预测效用标签，比较跨用户与留一用户设置，以说明效用模式既跨用户共享又存在个体差异，这为热启动假设提供经验动机。
- 关于数据集可靠性，作者在附录中报告：当交互历史较短时，在线估计器收集不到足够反馈，离线预训练池也变小，方法在 PerMemBench-S 上表现不稳；因此正文以 PerMemBench-L 作为研究学习动态的更可靠测试床。本次阅读范围内，论文未报告真实线上或 AB 实验，也未声明开源代码，前序筛选材料中这两项状态为未知，以本次正文为准。

### 结果与证据

- 作者报告该方法在不同记忆预算和历史长度下均优于所有基线，支持其作为个性化记忆门控策略的有效性。这是论文自建基准上的离线对比结论，未涉及真实线上部署效果，也不能推出在其它记忆系统或用户分布上同样占优。（Abstract）

  > The results of our experiment demonstrate that our method outperforms all baselines under different memory budgets and history lengths, establishing it as a promising personalized memory gating policy.

- 实验结果显示 Warm-Start UCB 持续优于以往的 LLM 门控方法和朴素全存基线，说明同时利用离线先验与在线自适应的门控确实能更合理地分配有限记忆预算。该结论限于论文自建基准的评测协议，全存基线的劣势也部分反映了预算约束下无差别存储的代价。（Introduction, contributions）

  > Experiment results show that Warm-Start UCB consistently outperforms previous LLM-based methods and the naive admit-all baseline, suggesting that Warm-Start UCB serves as an effective gating policy for personalized memory. Notation. We use <span class="paper-math">&#92;([n]&#92;)</span> to denote the set <span class="paper-math">&#92;(&#92;&#123;1,&#92;dots,n&#92;&#125;&#92;)</span> .

- 作者声称理论分析与实证结果共同验证了 Warm-Start UCB 作为门控策略的有效性：理论给出遗憾上界，实验提供基准对比支持。理论结论依赖延迟窗口与先验误差等假设条件，实证部分为模拟基准，二者均不能直接等同于真实产品环境中的收益。（Introduction）

  > The second stage adapts to user-specific patterns during online interaction via an upper confidence bound (UCB) algorithm. Our theoretical analysis and empirical results verify the effectiveness of Warm-Start UCB as a gating policy.

### 与小组方向的关联

论文直接对应小组的 Agentic RL、Memory with training 与大模型个性化方向：把记忆写入决策形式化为可证明的在线学习问题，标注策略与 UCB 设计均可借鉴到记忆管理和个性化建模。限制在于实验为自建离线基准、无线上结果，且本次未核验代码开源情况。

### 局限与阅读边界

- 作者承认的局限包括：标注依赖 LLM 裁判验证检索命中，标签本身可能带噪；理论保证依赖延迟窗口不超过 <span class="paper-math">&#92;(O(&#92;sqrt&#123;T&#125;)&#92;)</span> 以及用户参数围绕总体中心集中等假设，附录也指出用户间真实异质性对应的 <span class="paper-math">&#92;(&#92;epsilon&#95;&#123;&#92;mathrm&#123;pop&#125;&#125;&#92;)</span> 不会随预训练数据增多而消失。
- 从材料可合理提出的验证问题：RHR 与 F1 都在模拟交互语料上计算，标签由 LLM 判定，与真实部署中用户是否真正受益于某条记忆可能存在偏差；方法在短历史用户上的表现不稳，作者自己也建议以长数据集为准，这意味着冷启动场景的适用性有待进一步验证。
- 本次阅读范围的不足：正文片段在实验细节处不完整，具体各预算档位下的数值对比、消融设置与基线实现细节主要需依赖 PDF 图表核对；此外本次未核验代码仓库与复现环境，不能据此断言论文是否开源或可复现。

## Lean4AgenticRL: Advancing Agentic RL with Verifiable Multi-level Process Rewards {#arxiv-2610-22448}

**作者：** Ruida Wang, Gerald Friedland, Tong Zhang, Chris Kong

**命中的作者机构：** Amazon

**作者单位原文：** Amazon Web Services

**论文：** [arXiv](https://arxiv.org/abs/2610.22448) · [本次阅读版本 v1](https://arxiv.org/abs/2610.22448v1)

阅读范围：完整 PDF，共 27 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Enhancing the agentic capabilities of Large Language Models (LLMs) to tackle complex software engineering (SWE) and general terminal-usage problems is a pressing challenge. Current state-of-the-art LLMs often go through large-scale agentic Reinforcement Learning (RL). However, they mostly rely on high-level outcome rewards, with minimal consideration of low-level toolcall and mid-level workflow-stage rewards, which makes the training less effective. To overcome this limitation, we propose **Lean4AgenticRL**, which, to the best of our knowledge, is the first framework that grounds multi-level process rewards in the unified Lean4 formalization schema for open-ended agentic RL. **Lean4AgenticRL** first builds a *problem-specific workflow* system that balances the agent's own capability and controllability during execution, laying the foundation for further verification. Subsequently, our workflow formalization and multi-level reward annotation methods enable agent behavior verification within a general harness system. It provides multi-level rewards to support more effective agentic RL with the workflow-stage-normalized GRPO algorithm. Using **Lean4AgenticRL**, we train **LAR-9B/27B**, a family of models with enhanced agentic capability. Extensive experiments indicate that our model outperforms the leading model of similar size. **LAR-27B** achieves **77.3%** on TerminalBench-2.1. On average, our models outperform the base model by **9.89%** and surpass the second-best model of comparable size we know by **5.07%**. These results indicate the potential of integrating formal methods in enhancing open-ended agentic RL.

### 一句话速览

论文提出 Lean4AgenticRL 框架，用 Lean4 依赖类型语言把智能体轨迹形式化为工作流图，统一标注高层结果奖励、中层工作流阶段奖励与低层工具调用惩罚，并配合按阶段归一化的 GRPO 训练 LAR 系列模型。在软件工程与终端基准上平均超过基座模型，适用于开放式智能体任务训练。

### 研究动机

- 本文面向的任务是让大语言模型智能体在软件工程（SWE）与通用终端使用环境中完成长程任务：输入是问题描述与容器化环境，智能体通过多轮推理加工具调用（如运行测试、修改代码）产出补丁或改变容器状态，输出由仓库级测试或任务特定测试判定成败。这类能力是当前前沿模型训练的重要方向。
- 现有大规模智能体强化学习主要依赖高层结果奖励：只有任务最终成功或失败才给信号。这无法区分成功轨迹中有用的中间动作与冗余错误步骤；而只监督低层工具调用结果的过程奖励又可能忽略整体工作流进展，当单个工具调用与任务目标没有直接联系时会损害训练。如何以可验证的方式统一高层、中层与低层奖励，是本文要回答的核心问题。
- 与已有工作相比，本文的差别在于把过程奖励建立在统一的 Lean4 形式化模式之上：此前基于符号或算法预言机的可验证过程奖励多为受控环境中的任务特定验证器，而本文声称首次在开放式智能体强化学习中用统一依赖类型语言落地多级过程奖励。

### 方法与关键设计

- 框架分三步：先构建问题特定工作流（PSWF）智能体系统，再把工作流形式化并标注多级奖励，最后用工作流阶段归一化的 GRPO 训练。作者使用 Claude-code 或 Terminus-2 作为智能体 harness，沿用 Lean4Agent 的验证体系：工作流表示为异构有向图 <span class="paper-math">&#92;(&#92;mathcal&#123;G&#125;=&#92;langle V,E&#92;rangle&#92;)</span>，节点 <span class="paper-math">&#92;(v&#95;i&#92;)</span> 是工作流阶段，边 <span class="paper-math">&#92;(E&#92;)</span> 规定允许的阶段转移；每个阶段附带前置条件 <span class="paper-math">&#92;(&#92;rho&#95;i^&#123;(pre)&#125;&#92;)</span> 与后置条件 <span class="paper-math">&#92;(&#92;rho&#95;i^&#123;(post)&#125;&#92;)</span>，由原子谓词构成，类似 Hoare 三元组。
- 规划阶段：给定问题陈述 <span class="paper-math">&#92;(&#92;mathcal&#123;S&#125;&#92;)</span>、环境 <span class="paper-math">&#92;(&#92;mathcal&#123;E&#125;&#92;)</span>（通常是容器）与通用工作流 <span class="paper-math">&#92;(&#92;mathcal&#123;W&#125;&#92;)</span>，智能体在 harness 中探索环境并产出 PSWF <span class="paper-math">&#92;(&#92;mathcal&#123;W&#95;S&#125;&#92;)</span>，即 <span class="paper-math">&#92;(&#92;mathcal&#123;W&#95;S&#125;,&#92;bm&#123;&#92;tau&#125;^&#123;(p)&#125;=&#92;text&#123;H&#125;(LLM(&#92;mathcal&#123;E&#125;,&#92;mathcal&#123;S&#125;,&#92;mathcal&#123;W&#125;))&#92;)</span>。PSWF 是自然语言计划，例如 SWE 任务中包含相关源文件、疑似原因与修复验证步骤。执行阶段再把 PSWF 与规划轨迹 <span class="paper-math">&#92;(&#92;bm&#123;&#92;tau&#125;^&#123;(p)&#125;&#92;)</span> 一起交给智能体执行，避免重复探索。这一设计在固定工作流的可控性与自由 ReAct 式执行的灵活性之间折中。
- 形式化与分段：用大模型把自然语言 PSWF 转成形式化工作流 <span class="paper-math">&#92;(&#92;mathcal&#123;F&#95;W^&#123;(S)&#125;&#125;=&#92;&#123;(v&#95;i,&#92;rho&#95;i^&#123;(pre)&#125;,&#92;rho&#95;i^&#123;(post)&#125;)&#92;&#125;&#92;)</span>，并与通用工作流对齐以保证跨 rollout 可比。随后逐步把执行轨迹的每个步骤分配到工作流阶段：<span class="paper-math">&#92;(j&#95;i=LLM(&#92;tau&#95;i,&#92;tau&#95;&#123;i+1&#125;,&#92;tau&#95;&#123;i-1&#125;,&#92;mathcal&#123;F&#95;W^&#123;(S)&#125;&#125;)&#92;)</span>，每步只能停留在当前阶段或转移到相邻（含回环）阶段。由于每次判断只看局部窗口而非完整 rollout，分段可扩展到超长轨迹；循环与分支的每次重访都算作独立实例。
- 奖励标注分三层。高层结果奖励 <span class="paper-math">&#92;(&#92;alpha&#95;i&#92;in&#92;&#123;-1,1&#92;&#125;&#92;)</span> 由验证器判定任务成败。中层阶段奖励 <span class="paper-math">&#92;(&#92;beta&#92;)</span>：检查每个阶段的步骤是否满足前置与后置条件，可直接判定的谓词用 Lean 或 Python 代码验证，需要语义解释的用 LLM 判官，满足后置条件则 <span class="paper-math">&#92;(&#92;beta=1&#92;)</span>，否则 <span class="paper-math">&#92;(&#92;beta=-1&#92;)</span>。低层工具调用奖励 <span class="paper-math">&#92;(&#92;gamma&#95;i&#92;in&#92;&#123;-1,0&#92;&#125;&#92;)</span> 是只罚不奖的符号守卫，用 Lean 与 Python 检查器惩罚连续重复命令、无操作命令、常量输出、纯打印脚本、无动作中间步与无进展重执行等常见奖励作弊模式；作者刻意不设正奖励，防止 <span class="paper-math">&#92;(&#92;gamma&#92;)</span> 本身被利用压过其他正奖励。
- 训练目标：把三层奖励合成每步奖励 <span class="paper-math">&#92;(r&#95;&#123;i,j,k&#125;^&#123;(0)&#125;=&#92;alpha&#95;i+(0.2+0.3&#92;cdot&#92;mathbb&#123;I&#125;&#92;&#123;&#92;alpha&#95;i=1&#92;&#125;)&#92;cdot&#92;beta&#95;&#123;i,j&#125;&#92;)</span>，再叠加 <span class="paper-math">&#92;(&#92;gamma&#92;)</span> 惩罚得到 <span class="paper-math">&#92;(r^&#123;(1)&#125;&#92;)</span>，最后按组通过率 <span class="paper-math">&#92;(p&#92;)</span> 门控：只有通过率为零或至少 75% 的组才使用过程奖励，其余组退回纯结果奖励 <span class="paper-math">&#92;(&#92;alpha&#92;)</span>。这样过程奖励只作用于结果奖励梯度不稳定（全对或全错）的组，且 <span class="paper-math">&#92;(&#92;beta&#92;)</span> 项系数至多 0.5，抑制对过程奖励的作弊。规划阶段 token 只用纯结果奖励训练。
- 优势计算是关键差异：标准 GRPO 在轨迹层面给每步相同信用，而本文按通用工作流阶段跨 rollout 分组，计算阶段内与长度归一化的优势 <span class="paper-math">&#92;(A&#95;&#123;i,j,k&#125;=&#92;frac&#123;r&#95;&#123;i,j,k&#125;-&#92;text&#123;mean&#125;(&#92;bm&#123;G&#125;&#95;j)&#125;&#123;&#92;text&#123;std&#125;(&#92;bm&#123;G&#125;&#95;j)&#125;&#92;)</span>，其中 <span class="paper-math">&#92;(&#92;bm&#123;G&#125;&#95;j&#92;)</span> 汇集所有 rollout 中对齐到同一阶段 <span class="paper-math">&#92;(j&#92;)</span> 的奖励。相比直接按工具调用对齐的做法，这避免了把目的不同的步骤放在一起比较，解决了开放式智能体强化学习中的分组问题。整体目标函数是带上下界裁剪与 KL 正则的 GRPO 形式。

### 实验设计与论证方式

- 评测任务为 SWE-Bench-Verified（人工核验的 Python 仓库问题，智能体产出 Git 补丁，由仓库级测试判定）与 TerminalBench-2.0/2.1（跨软件工程、系统管理、安全、科学计算的终端任务，按最终容器状态测试判定）。SWE 用 mean@3，TerminalBench 用 mean@5，随机种子，作者核验评测集与训练数据无重叠。
- 基线为同规模最新开源权重模型：9B 级对比 OpenThinker-Agent-V1、Qwen-3.5-9B、TMax-9B、Gemma-4-12B；27B 级对比 Qwen-3.6-27B、TMax-27B、Qwen-3-Coder-30B、Gemma-4-31B、Qwen-3.8-27B，均以最高推理强度与最长上下文运行。harness 为 TerminalBench 上的 Terminus-2 与 SWE 上的 Claude-code。
- 训练基于 Qwen-3.5-9B 与 Qwen-3.8-27B，数据混合 TMax-15k 与 SWE-ReBench，异步强化学习基于 SLIME 与 OpenClaw-RL，批大小与组大小均为 32，上下文上限 128K token，在 64 张 H200 上分别训练 160 与 240 小时。另有与纯结果奖励 GRPO 的训练动态对比、去掉 PSWF 与去掉 <span class="paper-math">&#92;(&#92;gamma&#92;)</span> 的消融，以及附录中的跨模型验证和标注忠实度评估。代码与模型已在 GitHub 开源，本次未核验仓库内容。

### 结果与证据

- 在所评测的三个基准上，LAR 系列模型相对基座模型与已知同规模次优模型均取得平均提升，大模型在终端基准上达到论文报告的最高成绩。该结果支持多级过程奖励训练在同规模对比中的有效性，但对比对象为特定开源模型集合，不能推广到所有同规模模型。（Section 3.3 Main Results）

  > LAR-27B achieves 77.3% on TerminalBench-2.1 ( Team, 2025c ) and, across the three benchmarks we evaluated, our model outperforms their base model by 9.89% and the second-best models of comparable size by 5.07% on average. The performance highlights the effectiveness and generality of Lean4AgenticRL .

- 平均而言，模型相对基座与已知同规模次优模型均有提升，作者据此认为形式化方法与开放式智能体强化学习结合具有潜力；这是作者报告的平均值，具体各基准表现需结合结果表解读，不能推出每个基准上都优于所有对手。（Section 1 Introduction）

  > On average, our models outperform the base model by **9.89%** and surpass the second-best model of comparable size we know by **5.07%**. These results indicate the potential of integrating formal methods in enhancing open-ended agentic RL.

- 训练动态对比显示，纯结果奖励的 GRPO 在软件工程任务上先升后回落，在终端任务上波动明显；本方法在两个任务上持续上升并更早超过 GRPO 的最佳检查点。这支持多级过程奖励改善训练稳定性的说法，但为单次训练曲线观察，作者对退化原因的解释属于假设而非已验证的因果结论。（Figure 2）

  图表观察（PDF 第 6 页）：图 2 为软件工程任务（SWE-Bench-Verified）与终端任务（TerminalBench-2.0）上 Lean4AgenticRL 与 GRPO 随训练步数的评测曲线：GRPO 曲线在 SWE 任务前段上升后回落，在终端任务波动明显；本方法曲线在两个任务上均保持上升趋势。具体数值刻度在 PDF 中可读但未在正文文字中报告，此处仅描述趋势。

- 案例研究显示，随训练推进，模型在尚未完成该任务时，获得正阶段奖励的工作流阶段比例持续上升，最终任务被完全解决，说明中层阶段奖励能在任务解决前提供学习信号；但为单一任务的事后标注案例，不能直接推广为普遍机制。（Appendix J.1, Table 4）

  > accuracy keeps increasing, indicating that our Lean4AgenticRL reward design is prompting the model to solve additional problems throughout the process. And the model can finally resolve that problem as the process reward steadily grows.

### 与小组方向的关联

论文与小组关注的 Agentic RL、可验证奖励与训练方法方向直接相关：多级过程奖励与阶段归一化优势的设计可借鉴到长程智能体训练，形式化验证思路也可迁移到其他可判定任务域。证据较充分，含主实验、训练动态对比、消融与案例，但奖励依赖 LLM 判官、仅在软件工程与终端任务验证，未涉及推荐检索场景，需谨慎迁移。

### 局限与阅读边界

- 作者在附录中承认三点局限：其一，可验证性依赖从外部显式约束智能体行为，并未打开大模型内部计算的黑箱实现彻底透明验证；其二，验证未集成进 harness 的运行时，只用于训练期奖励设计；其三，任务范围限于传统智能体任务（SWE 与终端使用），未把视觉信号纳入强化学习过程。
- 从材料可合理提出的验证问题：形式化边界依赖 LLM 完成工作流形式化、轨迹分段与谓词判断，附录报告的标注失败率虽低于一成，但错误集中在自然语言标准含糊与判官上下文截断，这些误差在更长轨迹或更模糊任务上是否放大需要验证；此外 <span class="paper-math">&#92;(&#92;gamma&#92;)</span> 守卫规则针对的是 bash 类命令模式，迁移到其他工具生态时规则集需重新设计。
- 本次阅读范围方面：训练动态对比（图 2）与案例研究（表 4 及附录轨迹图）为单任务或单基准观察，训练后期收益与阶段归一化优势的因果机制主要靠作者假设解释，缺少跨多种任务结构的系统消融；27B 规模下 SWE-Bench-Verified 接近饱和，作者自己也指出 TerminalBench-2.1 才是该规模更可靠的比较。

## Predicting Privileged Information Effectiveness for On-Policy Self-Distillation {#arxiv-2610-22512}

**作者：** Kaijian Zou, Emiliano Penaloza, MohammadHossein Rezaei, Anisha Gunjal, Mohit Raghavendra, Lu Wang, Yunzhong He, Anas Mahmoud

**命中的作者机构：** Michigan

**作者单位原文：** University of Michigan – Ann Arbor

**论文：** [arXiv](https://arxiv.org/abs/2610.22512) · [本次阅读版本 v1](https://arxiv.org/abs/2610.22512v1)

阅读范围：完整 PDF，共 36 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

On-policy self-distillation (OPSD) enables large language models (LLMs) to learn from privileged information (PI) without a separate teacher model. However, prior work largely treats PI as a fixed design choice, leaving the effects of its content and construction poorly understood. This challenge is particularly important in multi-turn agentic settings, where trajectories contain actions, observations, and reasoning that can be transformed into PI in many ways. We systematically evaluate 16 PI configurations across three multi-turn agentic benchmarks and three student models that vary in scale and reasoning mode. We find that PI effectiveness depends on its content, generation source, and the student model. Information-dense trajectories and PI produced by more capable generators generally yield larger gains, whereas thinking models benefit less consistently. To assess PI before training, we compare PI utility with two KL-based metrics: sampled-token reverse KL (<span class="paper-math">&#92;(D&#92;)</span>) and error-step KL contrast (<span class="paper-math">&#92;(&#92;Delta d^&#123;-&#125;&#95;&#123;&#92;mathrm&#123;err&#125;&#125;&#92;)</span>). The KL-based metrics track post-training performance more consistently than PI utility, which can be distorted by information leakage. Empirically, selecting each task's PI by <span class="paper-math">&#92;(&#92;Delta d^&#123;-&#125;&#95;&#123;&#92;mathrm&#123;err&#125;&#125;&#92;)</span> also improves post-training performance over random selection, most when the PI candidates differ widely. Finally, effective PI remains beneficial when combined with GRPO, allowing the combined objective to outperform a strong GRPO baseline. Overall, our results provide practical guidance for constructing and evaluating PI in OPSD training.

### 一句话速览

本文系统研究在线策略自蒸馏（OPSD）中特权信息（PI）的构造与评估：在三个多轮智能体基准和三个学生模型上比较十六种 PI 配置，发现 PI 效果取决于内容、来源与学生模型；提出两种 KL 离线指标，其中错误步 KL 对比可在训练前预测 PI 有效性并指导逐任务选择，且有效 PI 与 GRPO 结合可超过强 GRPO 基线。

### 研究动机

- OPSD（在线策略自蒸馏）让大语言模型在没有独立教师模型的情况下，用自身轨迹训练自己：同一模型分别作为学生和教师，教师额外看到特权信息（PI），例如标准答案、成功轨迹或提示，学生通过逐 token 对齐教师分布来内化推理时拿不到的信息。这在多轮智能体任务（如 ALFWorld 家务模拟、AppWorld 编程、τ²-retail 客服）中尤其重要，因为轨迹包含动作、观察和推理，可被改造成 PI 的方式非常多。
- 已有工作把 PI 当作固定设计选择，只在小范围格式、模型和任务上验证，不清楚什么样的 PI 才能产生有效学习信号，也不清楚 PI 质量能否在训练前评估。逐个候选跑一次 OPSD 训练代价高昂，可靠的离线指标可以把算力集中在最有希望的 PI 上。
- 本文要回答三个问题：哪些 PI 格式和来源最有效；PI 效果为何依赖学生模型；以及能否用训练前可计算的指标预测 PI 的训练后收益。

### 方法与关键设计

- OPSD 的核心设定是学生与教师共享参数 <span class="paper-math">&#92;(&#92;theta&#92;)</span>，区别仅在于教师额外条件于 PI <span class="paper-math">&#92;(I&#92;)</span>。对学生采样出的轨迹 <span class="paper-math">&#92;(&#92;tau&#92;)</span>，OPSD 最小化学生到 PI 条件化教师的反向 KL：<span class="paper-math">&#92;[&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;OPSD&#125;&#125;(&#92;theta)=&#92;mathbb&#123;E&#125;&#95;&#123;&#92;tau&#92;sim&#92;pi&#95;&#123;&#92;theta&#125;^&#123;S&#125;&#125;&#92;left[&#92;frac&#123;1&#125;&#123;L&#95;&#123;&#92;tau&#125;&#125;&#92;sum&#95;&#123;t=1&#125;^&#123;L&#95;&#123;&#92;tau&#125;&#125;D&#95;&#123;&#92;mathrm&#123;KL&#125;&#125;&#92;!&#92;left(&#92;pi&#95;&#123;&#92;theta&#125;^&#123;S&#125;(&#92;cdot&#92;mid s&#95;&#123;t&#125;)&#92;,&#92;|&#92;,&#92;operatorname&#123;sg&#125;&#92;!&#92;left[&#92;pi&#95;&#123;&#92;theta&#125;^&#123;T&#125;(&#92;cdot&#92;mid s&#95;&#123;t&#125;,I)&#92;right]&#92;right)&#92;right]&#92;]</span> 其中 <span class="paper-math">&#92;(&#92;operatorname&#123;sg&#125;&#92;)</span> 阻断教师侧梯度。由于两个策略只差 PI 的可见性，PI 的构造直接决定逐 token 训练信号，这是全文分析的出发点。
- PI 构造覆盖七种格式，由 GLM-5.2 和 Qwen3.7-Plus 两个生成源产出。轨迹类 PI 从专家模型的成功轨迹中保留不同成分：仅动作（Action）、动作加环境观察（Action+Obs.）、动作加推理（Action+Thou.）或三者俱全，用于区分有效 PI 到底需要专家行为、环境上下文还是推理过程。提示类 PI 包括把成功轨迹压缩成简短描述的 Summary、包含成功分析、错误分析和可复用策略的 Skill，以及由成功参考轨迹配对学生失败轨迹生成的 Checklist（结构化任务要求清单）。学生自己也可以生成 Summary 和 Skill。
- 为在训练前评估 PI，论文定义三个离线指标。PI utility <span class="paper-math">&#92;(U(I)&#92;)</span> 是同一模型带 PI 与不带 PI 时的任务成功率之差，衡量 PI 对看到它的策略有多大帮助。采样 token 反向 KL <span class="paper-math">&#92;(D(I)&#92;)</span> 用学生采样 token 上的对数比绝对值估计：<span class="paper-math">&#92;(d&#95;I(&#92;tau)=&#92;frac&#123;1&#125;&#123;L&#95;&#123;&#92;tau&#125;&#125;&#92;sum&#95;&#123;t&#125;|&#92;log&#92;frac&#123;&#92;pi^S&#95;&#92;theta(y&#95;t|s&#95;t)&#125;&#123;&#92;pi^T&#95;&#92;theta(y&#95;t|s&#95;t,I)&#125;|&#92;)</span>，衡量 PI 在学生访问状态上引起的分布偏移幅度。
- 第三个指标是错误步 KL 对比 <span class="paper-math">&#92;(&#92;Delta d^&#123;-&#125;&#95;&#123;&#92;mathrm&#123;err&#125;&#125;&#92;)</span>：先对每个交互步计算只取正部的对数比均值 <span class="paper-math">&#92;(d^&#123;-&#125;&#95;&#123;I&#125;(&#92;tau,j)&#92;)</span>（衡量 PI 抑制学生采样 token 的强度），再减去同一任务、同一绝对步位置的基线 <span class="paper-math">&#92;(b&#95;I(x,j)&#92;)</span> 以消除位置效应，最后只在裁判标注出错误步的失败轨迹上平均。正值表示 PI 把分布偏移更集中地指向已识别的错误，而不是均匀地扰动整个策略。
- 与基线的差异方面，与逐候选训练相比，KL 指标只需对学生 rollout 做一次前向打分；与 GRPO 等结果奖励 RL 相比，OPSD 提供更稠密的 token 级监督。在结合实验中，两者在优势层面加权：<span class="paper-math">&#92;(A^&#123;&#92;mathrm&#123;OPSD+GRPO&#125;&#125;=&#92;lambda A^&#123;&#92;mathrm&#123;GRPO&#125;&#125;+(1-&#92;lambda)A^&#123;&#92;mathrm&#123;OPSD&#125;&#125;&#92;)</span>，其中 <span class="paper-math">&#92;(A^&#123;&#92;mathrm&#123;OPSD&#125;&#125;&#95;&#123;i,t&#125;=&#92;ell&#95;T-&#92;ell&#95;S&#92;)</span> 是逐 token 的自蒸馏优势，<span class="paper-math">&#92;(&#92;lambda=1&#92;)</span> 退化为纯 GRPO。训练在 SkyRL 中实现，用 AdamW 优化、vLLM 做 rollout，4B 模型用八卡 H100、30B 模型用十六卡。
- 一个帮助理解的例子：在 ALFWorld 的擦海绵任务中，Action 提示就是六步命令列表，Summary 写成一段话，Skill 给出“找到—拿取—清洗—放回”的抽象流程，Checklist 则列出行动前、行动中、结束前应逐项确认的要求。同一参考轨迹以不同粒度呈现，教师据此产生的逐 token 监督差异正是各指标要量化的对象。

### 实验设计与论证方式

- 实证设置覆盖三个多轮智能体基准：ALFWorld（文本家务模拟，训练一千六百个任务，在 valid_seen 与 valid_unseen 合并集上报告成功率）、AppWorld（跨九个模拟应用的编程任务，九十训练任务、一百六十八测试任务，以隐藏单元测试判定）、τ²-retail（客服对话加工具调用，训练三百五十二任务、评测一百一十四任务）。学生为 Qwen3-4B-Instruct、Qwen3-4B-Thinking 和 Qwen3-30B-A3B-Instruct，报告最佳三检查点窗口的 pass@1。离线指标在与评测集不相交的训练或开发任务上计算。
- 格式与来源比较共十六种 PI 配置，逐个训练学生；相关性分析把每个 PI 的三个离线指标与训练后性能做 Spearman 相关。受控实验包括 ALFWorld-Passcode（改造环境使评分只看提交的密钥，从而分离泄漏信息与可学习信息）和逐任务 PI 选择（对每个任务从候选池按 <span class="paper-math">&#92;(D&#92;)</span> 或 <span class="paper-math">&#92;(&#92;Delta d^&#123;-&#125;&#95;&#123;&#92;mathrm&#123;err&#125;&#125;&#92;)</span> 取前三再抽样，与随机抽取对比，三到四个种子）。结合实验在 Qwen3-4B-Instruct 上扫四个 <span class="paper-math">&#92;(&#92;lambda&#92;)</span> 值，与匹配的 GRPO 基线对照。论文报告了代码与数据链接，本次未核验仓库内容；材料中未见线上 AB 实验证据。

### 结果与证据

- 错误步 KL 对比在全部学生—基准组合上都与训练后性能正相关，说明把分布偏移集中在裁判标注错误步上的 PI 往往带来更大训练收益；相关强度随组合波动，属于观察性关联，不能单独证明因果。（Section 3.2）

  > Error-step KL contrast consistently tracks post-training performance. Across all nine student–benchmark combinations, <span class="paper-math">&#92;(&#92;Delta d^&#123;-&#125;&#95;&#123;&#92;mathrm&#123;err&#125;&#125;&#92;)</span> is positively correlated with post-training performance ( <span class="paper-math">&#92;(&#92;rho=0.10&#92;)</span> – <span class="paper-math">&#92;(0.94&#92;)</span> ).

- 用错误步 KL 对比逐任务挑选 PI 优于随机抽取，在候选来源或强弱差异大的池子里收益最明显；这支持该指标作为训练前筛选工具，但结论来自所测候选池设定，不代表所有池分布。（Abstract / Section 5.2）

  > Empirically, selecting each task’s PI by <span class="paper-math">&#92;(&#92;Delta d^&#123;-&#125;&#95;&#123;&#92;mathrm&#123;err&#125;&#125;&#92;)</span> also improves post-training performance over random selection, most when the PI candidates differ widely. Finally, effective PI remains beneficial when combined with GRPO, allowing the combined objective to outperform a strong GRPO baseline.

- 在三个基准上，轨迹类 PI 配合接近纯 GRPO 的权重设置，其联合目标均超过匹配的 GRPO 基线，说明结果奖励与有效 PI 的蒸馏信号互补；收益依赖 PI 质量与权重选择，且训练曲线显示 PI 的边际收益会随训练推进衰减。（Section 4.2）

  > On AppWorld, Trajectory PI at <span class="paper-math">&#92;(&#92;lambda=0.99&#92;)</span> reaches <span class="paper-math">&#92;(43.90&#92;)</span> , exceeding the GRPO score of <span class="paper-math">&#92;(42.91&#92;)</span> . Likewise, on <span class="paper-math">&#92;(&#92;tau^&#123;2&#125;&#92;)</span> , it reaches <span class="paper-math">&#92;(55.04&#92;)</span> , compared with <span class="paper-math">&#92;(48.27&#92;)</span> for GRPO. Takeaway. Increasing the GRPO weight substantially improves vanilla OPSD. With strong PI and appropriate weighting, the combined objective can outperform a matched GRPO baseline.

- 在 ALFWorld-Passcode 受控实验中，只换掉轨迹而保留正确密钥会大幅拉高 utility 却几乎使训练性能减半，而两个 KL 指标同步下降；这说明 utility 度量的是模型能否当场利用泄漏信息，KL 指标才反映可迁移的学习信号。（Section 5.1）

  > Changing only the trajectory, from the task’s own to another task’s, does the reverse. The mismatched PI still scores higher utility than the task’s own trajectory in standard ALFWorld or with the decoy key, yet it nearly halves training performance to <span class="paper-math">&#92;(45.0&#92;)</span> and lowers both KL metrics.

### 与小组方向的关联

对小组的 Agentic RL 方向，本文提供了可直接借鉴的两点：一是用错误步 KL 对比在训练前筛选蒸馏信号或辅助监督来源，避免逐候选跑昂贵训练；二是 OPSD 与 GRPO 的优势级加权组合及“PI 收益早期显著、后期应退场”的调度观察。结论限于三个智能体基准和 Qwen 系学生，迁移到推荐或检索式生成任务前需自行验证。

### 局限与阅读边界

- 作者承认的局限：静态 PI 在训练中固定不变，学生学会其中可提取的信息后监督变得冗余，继续蒸馏甚至妨碍结果奖励学习；在小规模、低多样性训练集上，PI 带来的样本效率提升会加速过拟合（AppWorld 上训练成功率接近饱和而测试 pass@1 明显更低）。作者据此建议自适应调度或多样化 PI 实例，但这些属于未来方向，文中未实现。
- 可合理提出的验证问题：所有结论基于 Qwen 系三个学生和三个智能体基准，PI 格式排序（如轨迹优于提示、Skill 最强）在其他模型家族或其他任务分布上是否成立未验证；错误步标注依赖特定裁判模型，标注质量对 <span class="paper-math">&#92;(&#92;Delta d^&#123;-&#125;&#95;&#123;&#92;mathrm&#123;err&#125;&#125;&#92;)</span> 的影响未系统消融；结合实验只扫了简单加权，未探索更精细的信号组合方式。
- 本次阅读范围限制：论文报告了代码与数据公开链接，但本次未核验仓库内容与复现环境；材料中未见线上部署或 AB 实验证据，所有结果均为离线基准评测，实际生产环境中的收益有待验证。

## Normalizing Flow Maps {#arxiv-2610-22711}

**作者：** Francesco M. Ruscio, Timothy James Hitge, Fred Zhangzhi Peng, Danyal Rehman, Zander W. Blasingame, Nicholas M. Boffi, Michael M. Bronstein, Alexander Tong, Avishek Joey Bose

**命中的作者机构：** CMU、MIT

**作者单位原文：** MIT；Carnegie Mellon University

**论文：** [arXiv](https://arxiv.org/abs/2610.22711) · [本次阅读版本 v1](https://arxiv.org/abs/2610.22711v1)

阅读范围：完整 PDF，共 47 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Scalable approaches to learning neural dynamical systems have placed diffusion, flow matching, and few-step generators in flow maps at the forefront of generative modeling. Such state-of-the-art models have limited access to explicit model densities despite evolving from classical generative modeling approaches that leveraged tractable likelihoods, e.g., Normalizing Flows and Autoregressive models. In this paper, we combine these threads of few-step generation and tractable sample likelihoods and introduce Normalizing Flow Maps (NFM), a class of exactly invertible pushforward maps that generalizes normalizing flows and flow maps. More precisely, NFMs learn the integrator of an underlying dynamical system, but crucially, they provide efficient exact likelihood evaluation by construction. To enable scalable training of NFMs, we derive two complementary axes of consistency inherent to NFMs that yield (self) distillation objectives: (1) pointwise matching, which unlocks <span class="paper-math">&#92;(&#92;ell&#95;2&#92;)</span>-based flow-map style regression losses, and (2) distributional matching, which matches pushforward distributions to the marginals of a prescribed forward process. On conditional image generation on CIFAR-10 and ImageNet-64, NFMs achieve state-of-the-art sample quality among parameter-matched normalizing flows, while supporting likelihood-based RLHF. For equilibrium sampling in Boltzmann Generators, NFMs outperform prior state-of-the-art normalizing flows on both single-system and transferable peptide benchmarks.

### 一句话速览

论文提出 Normalizing Flow Maps（NFM），一类沿随机插值路径参数化的可逆双时间推前映射，把少步生成的 flow map 与精确似然的 normalizing flow 统一起来。作者给出逐点匹配与分布匹配两种自蒸馏训练目标（NFM-R 与 NFM-D），在条件图像生成上超过参数量对齐的可逆流基线，并支持基于似然的 RLHF 后训练与玻尔兹曼生成器平衡采样。

### 研究动机

- 生成建模的核心任务是学习从简单参考分布（如标准高斯）到复杂数据分布的传输映射：输入是噪声或带条件的噪声，输出是样本，许多下游场景还要求给出样本的精确概率密度。典型场景包括图像生成、基于奖励的后训练（RLHF），以及科学计算中的玻尔兹曼生成器——后者需要从噪声映射到分子构象分布并计算权重用于重采样。
- 现有两条路线各有缺陷。扩散与流匹配模型采样质量高，但评估精确密度需沿常微分方程轨迹积分并估计高维雅可比行列式的迹，代价高昂，导致基于似然的后训练要么依赖高方差值函数估计，要么难以进行，容易不稳定甚至模式坍缩。flow map 类方法直接学习积分算子、把采样压缩到少数几步网络前向，但标准参数化既不可逆也不提供可处理的雅可比行列式。经典 normalizing flow 虽有精确似然，但为稳定训练需向干净数据注入噪声，反而破坏了廉价似然这一承诺。
- 因此本文要回答：能否构造一个同时具备少步推理与构造性精确似然的模型类？作者的答案是 NFM，它把可逆流推广到任意时间对之间的传输：先验到数据的映射退化为经典 normalizing flow，任意中间时间对的查询则给出 flow map 式的少步传输。

### 方法与关键设计

- 表示与数据构造：NFM 建立在随机插值之上。给定数据样本 <span class="paper-math">&#92;(x&#95;0&#92;)</span> 与噪声 <span class="paper-math">&#92;(x&#95;1&#92;)</span>，插值过程定义为 <span class="paper-math">&#92;(I&#95;t(x&#95;0,x&#95;1)=&#92;gamma&#95;t x&#95;0+&#92;beta&#95;t x&#95;1&#92;)</span>，其中光滑函数 <span class="paper-math">&#92;(&#92;gamma,&#92;beta&#92;)</span> 满足边界条件 <span class="paper-math">&#92;(&#92;gamma&#95;0=1,&#92;gamma&#95;1=0,&#92;beta&#95;0=0,&#92;beta&#95;1=1&#92;)</span>；取线性插值 <span class="paper-math">&#92;(x&#95;t=(1-t)x&#95;0+tx&#95;1&#92;)</span> 即退化为常见的流匹配设定。这定义了一条从数据分布到噪声分布的概率路径，NFM 学习沿这条路径的传输算子。
- 核心模块：NFM 是一族联合参数化的双时间推前映射 <span class="paper-math">&#92;(X^&#92;theta&#95;&#123;s,t&#125;&#92;)</span>，对容许时间对集合中任意 <span class="paper-math">&#92;(s&gt;t&#92;)</span> 给出从时间 <span class="paper-math">&#92;(s&#92;)</span> 到 <span class="paper-math">&#92;(t&#92;)</span> 的可逆映射。与普通 flow map 用平均速度参数化 <span class="paper-math">&#92;(X^&#92;theta&#95;&#123;s,t&#125;(x&#95;s)=x&#95;s+(t-s)v^&#92;theta&#95;&#123;s,t&#125;(x&#95;s)&#92;)</span> 不同，NFM 要求映射精确可逆且在数据端点有精确的变量替换公式 <span class="paper-math">&#92;(&#92;log p&#95;0^&#92;theta(x&#95;0)=&#92;log p&#95;1(x&#95;1)-&#92;log&#92;left|&#92;det&#92;frac&#123;&#92;partial f^&#92;theta(x&#95;1)&#125;&#123;&#92;partial x&#95;1&#125;&#92;right|&#92;)</span>，其中 <span class="paper-math">&#92;(p&#95;1&#92;)</span> 是标准高斯。架构上采用改进的 iTARFlow（基于因果 Transformer 的自回归仿射流），每个位置的变换形如 <span class="paper-math">&#92;(f&#95;k^&#123;&#92;theta,m&#125;(x)=(x&#95;k-&#92;mu&#95;k^&#123;&#92;theta,m&#125;(x&#95;&#123;&lt;k&#125;))&#92;odot&#92;exp(-&#92;alpha&#95;k^&#123;&#92;theta,m&#125;(x&#95;&#123;&lt;k&#125;))&#92;)</span>，尺度与平移由因果注意力给出，保证雅可比行列式可精确计算。
- 训练目标一（NFM-R，逐点匹配）：利用真实流映射需满足的拉格朗日、欧拉与半群一致性条件，转化为带 stop-gradient 的自蒸馏回归损失，对平均速度做 <span class="paper-math">&#92;(&#92;ell&#95;2&#92;)</span> 回归，并通过雅可比向量积（JVP）估计时间导数项，类似 MeanFlow/iMF 的做法。训练时从重流（ReFlow）配对数据采样 <span class="paper-math">&#92;(x&#95;0,x&#95;1&#92;)</span>，目标速度为 <span class="paper-math">&#92;(x&#95;1-x&#95;0&#92;)</span> 加上模型自身估计的引导修正项。
- 训练目标二（NFM-D，分布匹配）：这是新的算法框架。它把插值点 <span class="paper-math">&#92;(x&#95;t&#92;)</span> 通过网络逆映射到噪声端（固定编码到 <span class="paper-math">&#92;(s=1&#92;)</span>），要求逆映射输出接近标准高斯，损失为高斯先验项加对数雅可比修正，即 <span class="paper-math">&#92;(0.5&#92;,&#92;mathbb&#123;E&#125;&#92;|z&#92;|^2-&#92;mathbb&#123;E&#125;&#92;log&#92;det&#92;)</span>。两时间版本再组合一段中间时间到噪声端的映射，终端映射使用 detach 的参考参数但保留输入梯度，形成自蒸馏。直观例子（帮助理解）：NFM-D 相当于训练一个可把数据—噪声插值线上任意点编码回高斯的可逆编码器，编码越接近高斯，正向生成越接近数据分布。
- 数值可逆性与推断：NFM-R 理论上精确可逆，但回归目标加去噪参数化在实践中会损失数值可逆性。作者在数据端注入加性高斯噪声并随训练退火到零，推断时以双精度恢复数值可逆；另一条 NFM-R 路线先只训流匹配损失、再以完整 iMF 损失微调，成本更低且样本更好。推断支持少步采样（如先无条件一步、再带引导一步），并沿用 iMF 式引导（引导强度与区间作为条件输入）。由于似然精确可算，后训练采用带 KL 惩罚的 REINFORCE：<span class="paper-math">&#92;(J^&#123;&#92;rm&#123;RLOO&#125;&#125;(&#92;theta)=&#92;frac&#123;1&#125;&#123;N&#125;&#92;sum&#95;&#123;i=1&#125;^&#123;N&#125;&#92;log p&#95;&#123;1&#92;to 0&#125;^&#123;&#92;theta&#125;(x&#95;i)&#92;,&#92;rm&#123;sg&#125;(A&#95;i)&#92;)</span>，其中 <span class="paper-math">&#92;(A&#95;i=H&#95;i-&#92;frac&#123;1&#125;&#123;n-1&#125;&#92;sum&#95;&#123;j&#92;neq i&#125;H&#95;j&#92;)</span>，<span class="paper-math">&#92;(H&#95;i=R(x&#95;i)-&#92;beta(&#92;log p&#95;&#123;1&#92;to 0&#125;^&#123;&#92;theta&#125;(x&#95;i)-&#92;log p^&#123;&#92;theta&#125;&#95;&#123;&#92;rm&#123;ref&#125;&#125;(x&#95;i))&#92;)</span>，即奖励减去与参考模型的精确 KL 惩罚，只需对数似然梯度、无需奖励梯度；数值不可逆时退回奖励梯度加最大熵正则。与基线的关键差异在于：MLE 训练的 iTARFlow 需要噪声注入且注入后不可逆，而 NFM 试图同时保住可逆性与少步能力。

### 实验设计与论证方式

- 图像生成：在条件 CIFAR-10 与 ImageNet-64 上评测，模型基于改进 iTARFlow，参数量分别约四十百万与一百二十百万，NFM-R 使用来自 EDM/EDM2 的 ReFlow 配对数据，优化器为 Muon 加 AdamW。指标为 FID、FLD、KID 及精确率/召回率。主要基线是 MLE 训练的 iTARFlow；由于此前没有条件 CIFAR-10 的 TARFlow 结果，作者对基线做了学习率、EMA、噪声增强与引导级别的系统消融，并比较了 AdamW 与 Muon。消融显示基线必须注入噪声并去噪才能取得好 FID，但此时会失去可逆性。
- 后训练实验：在 CIFAR-10 上用绿色青蛙奖励做 REINFORCE 微调（固定种子对比前后样本），在 ImageNet-64 上用 ImageReward、PickScore、AestheticScore、Skywork 等奖励混合做文本对齐后训练，并与 best-of-N 及 SMC 基线在多个奖励上比较，全部为离线评测，无线上 A/B 实验。
- 玻尔兹曼生成器：单系统设定覆盖三种丙氨酸寡肽与十残基小蛋白 Chignolin，可迁移设定使用 ManyPeptidesMD 在未见过的四残基与八残基肽上零样本评测。指标为能量维与扭转角维的 <span class="paper-math">&#92;(&#92;mathcal&#123;E&#125;&#92;)</span>-<span class="paper-math">&#92;(&#92;mathcal&#123;W&#125;&#95;2&#92;)</span>、<span class="paper-math">&#92;(&#92;mathbb&#123;T&#125;&#92;)</span>-<span class="paper-math">&#92;(&#92;mathcal&#123;W&#125;&#95;2&#92;)</span> 及 TICA-<span class="paper-math">&#92;(&#92;mathcal&#123;W&#125;&#95;2&#92;)</span>（衡量生成构象分布与参考分子动力学分布的 Wasserstein 距离，越低越好），并配合能量直方图与 Ramachandran 图做定性检查。比较对象包括 SBG、ECNF++、FALCON、F2D2、SCALLOP 等，作者还重实现了 SBG 以控制架构与训练配方差异，并对优化器、批大小、训练轮数做了消融。

### 结果与证据

- 在三个单肽体系的连续流基准上，NFM-D 全面优于 SBG 基线，并在多数指标上接近或追平自回归参考方法 ArBG 的水平。这说明分布匹配训练目标能在分子构象采样任务上训练出高质量的可逆流；但作者同时指出许多结果在统计上难以区分，故领先幅度需谨慎解读。（Table 9）

  > E.2.1 Single peptides AL3, AL4, and AL6 . Table 9 compares NFM-D to different models on AL3, AL4, and AL6. First, NFM-D outperforms SBG. Additionally, it is strong on every baseline, closing the gap to ArBG.

- 在十残基小蛋白 Chignolin 上，参数量相同的 NFM-D 在重要采样与 SMC 两种重采样协议下均优于 SBG 及其重实现版本，且 NFM-D 配合 SMC 取得最佳能量距离。这支持 NFM-D 的似然质量更有利于重采样；结论限于该小蛋白与所测重采样预算。（Table 11）

  > Algorithm <span class="paper-math">&#92;(&#92;mathcal&#123;E&#125;&#92;)</span> - <span class="paper-math">&#92;(&#92;mathcal&#123;W&#125;&#95;&#123;2&#125;&#92;downarrow&#92;)</span> <span class="paper-math">&#92;(&#92;mathbb&#123;T&#125;&#92;)</span> - <span class="paper-math">&#92;(W&#95;&#123;2&#125;&#92;downarrow&#92;)</span> Parameters (M) SBG SMC <span class="paper-math">&#92;(10.819&#92;pm 7.206&#92;)</span> <span class="paper-math">&#92;(3.778&#92;pm 0.440&#92;)</span> 114 SBG-iTARFlow IS <span class="paper-math">&#92;(17.015&#92;pm 11.781&#92;)</span> <span class="paper-math">&#92;(2.845&#92;pm 0.069&#92;)</span> <span class="paper-math">&#92;(66.5&#92;)</span> SBG-iTARFlow SMC <span class="paper-math">&#92;(10.874&#92;pm 10.179&#92;)</span> <span class="paper-math">&#92;(3.558&#92;pm 0.918&#92;)</span> <span class="paper-math">&#92;(66.5&#92;)</span> NFM-D IS (Ours) <span class="paper-math">&#92;(&#92;underline&#123;5.118&#92;pm 0.262&#125;&#92;)</span> <span class="paper-math">&#92;(&#92;mathbf&#123;2.712&#92;pm 0.050&#125;&#92;)</span> <span class="paper-math">&#92;(66.5&#92;)</span>

- 在可迁移设定下，对未见过的短肽与八残基肽的零样本评测显示：换用 Muon 优化器与更大批大小带来温和改进，换成 iTARFlow 架构带来大幅提升，而再叠加 NFM-D 损失进一步改善学到的能量表示。这是逐组件的消融证据，说明收益来自架构与损失的组合而非单一因素。（Table 12）

  > Comparing the third row with the preceding baselines, we find that training with Muon and a larger batch size yields modest improvements across most metrics. Replacing TARFlow with the iTARFlow architecture leads to a substantially larger gain, while switching to the NFM-D loss further improves the quality of the learned energy representation.

- 在 ImageNet 文本对齐后训练实验中，作者在多个随机种子上绘制 NFM-R 与 best-of-N 及 SMC 基线的对比，观察到在全部四个奖励指标上 NFM-R 均有清晰改进。这表明精确似然使基于 REINFORCE 的后训练可行且有效；但这是离线奖励评测，不涉及线上部署效果。（Figure 9）

  > In Figure 9 we plot the performance of NFM-R against best-of-N and SMC baselines over 10 seeds and observe a clear improvement over these baselines across all four rewards. E.2 Boltzmann Generators Datasets . We evaluate our models in both system-specific and transferable settings.

### 与小组方向的关联

论文属于模型架构设计方向，命中小组对生成模型结构与新训练目标的兴趣；其精确似然加少步采样的组合对需要似然的后训练（如 RLHF）有借鉴价值。但与推荐、检索无直接关联，迁移到语义 ID 或生成式推荐需要自行设计可逆结构，属于间接可借鉴。

### 局限与阅读边界

- 作者已承认的局限：其一，NFM-R 的数值可逆性在实践中会丢失，需要噪声退火与双精度推断才能恢复，增加训练与推断的工程复杂度，且不可逆时只能退回带最大熵正则的奖励梯度方案，失去精确 KL 惩罚。其二，在单肽基准上作者明确指出许多结果在统计上难以区分（尤其扭转角 Wasserstein 指标），并呼吁建立包含更大体系（至二十残基）的单系统数据集，说明当前分子结论的统计功效有限。
- 从材料可合理提出的验证问题：图像实验仅覆盖小分辨率（CIFAR-10 与 ImageNet-64），NFM 在高分辨率或文本到图像设定下能否保持可逆性与少步质量未经验证；NFM-R 在部分原始指标上表现异常（如与 NFM-D 对比表中原始能量距离极大），其似然质量与重采样效果的权衡值得进一步核查。此外，可迁移肽实验的零样本优势幅度随序列与指标变化，泛化边界尚不清楚。
- 本次阅读范围不足：论文未报告任何线上或 A/B 部署结果，后训练收益均为离线奖励指标；代码仓库链接已给出但本次未核验其可用性与复现环境。

## ToPA: Block-wise Toeplitz Adaptation for Expressive and Efficient Fine-Tuning {#arxiv-2610-22883}

**作者：** Sicong Li, Qianqian Xu, Zhiyong Yang, Zitai Wang, Longtao Huang, Xiaochun Cao, Qingming Huang

**命中的作者机构：** Alibaba

**作者单位原文：** Alibaba Group

**论文：** [arXiv](https://arxiv.org/abs/2610.22883) · [本次阅读版本 v1](https://arxiv.org/abs/2610.22883v1)

阅读范围：完整 PDF，共 44 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Parameter-Efficient Fine-Tuning (PEFT) has emerged as a prevalent strategy for adapting large pre-trained models. Among PEFT techniques, reparameterization-based methods, particularly those that employ low-rank or sparsity structures, have attracted significant attention. However, these approaches often underperform full fine-tuning. Specifically, low-rank methods constrain the update rank, which is misaligned with the inherently high-rank nature of full fine-tuning. In contrast, sparsity-based techniques limit the flexibility of the parameter space and compromise connectivity across weights. To overcome these limitations, we explore the use of Toeplitz matrices, whose entries are constant along each diagonal, therefore providing a compact parameterization without imposing explicit rank or sparsity constraints. A straightforward approach is to update weights via a product of Toeplitz matrices. However, similar to RNNs, long multiplicative chains often lead to gradient instability. To address this issue, we propose \textbf&#123;ToPA&#125;, a more refined version of this idea that replaces standard Toeplitz matrices with block-wise Toeplitz, greatly increasing each factor's capacity and shortening the chain, thereby stabilizing training and improving expressiveness. We theoretically show that products of block-wise Toeplitz matrices can approximate arbitrary matrices under shorter chain length, justifying the structural design of ToPA. Furthermore, we demonstrate that ToPA offers greater expressivity than existing low-rank and sparse parameterizations. Empirical evaluations across 21 NLP and CV datasets, spanning 5 model architectures, consistently validate the effectiveness of ToPA.

### 一句话速览

论文研究参数高效微调（PEFT）的参数化结构，指出低秩与稀疏两条主流路线的表达力瓶颈，提出基于块状 Toeplitz 矩阵乘积加恒等残差的 ToPA 方法，配合非对称零初始化稳定训练。理论上证明其可实现高秩稠密更新且链长更短，在 21 个 NLP 与 CV 数据集、5 种模型架构上持续优于 LoRA、OFT 等基线。

### 研究动机

- 大语言模型适配下游任务通常需要微调，但全量微调计算与显存开销大。参数高效微调（PEFT）只更新少量参数，其中重参数化路线最具代表性：一类是 LoRA 式低秩分解，把权重更新写成两个低秩矩阵的乘积；另一类是 OFT/BOFT 式稀疏结构，用一串稀疏正交矩阵去调制预训练权重。这些方法在推荐、搜索等场景微调 LLM 时也被广泛使用，因此其表达力上限直接影响下游适配质量。
- 两类方法都难以追平全量微调。低秩方法假设更新具有低内在维度，但近期研究表明低维不等于低秩，全量微调通常产生高秩更新，秩约束会成为结构瓶颈导致欠拟合；稀疏方法则预先固定稀疏模式并施加正交约束，把每列适配权重限制在预定义的低维子空间中，切断跨维度信息流动。论文要回答的问题是：能否设计一种既紧凑又不施加显式秩或稀疏约束的参数化，使 PEFT 的表达力追上全量微调。
- 作者选择 Toeplitz 矩阵作为切入点：这种矩阵沿每条对角线元素相同，一个 n×n 矩阵只需 2n−1 个自由参数，且矩阵—向量乘法可借助 FFT 在 O(n log n) 时间内完成；经典矩阵理论还表明任意矩阵可分解为若干 Toeplitz 矩阵的乘积。这些性质使其成为兼顾紧凑性与表达力的候选，但直接使用会遇到长乘积链的训练不稳定问题，这正是本文要解决的核心矛盾。

### 方法与关键设计

- 论文首先用实验刻画两条主流路线的局限：在 LLaMA-2-7B 上做数学推理微调时，全量微调的更新矩阵秩远高于 LoRA 在常见秩设置下的水平；同时 OFT/BOFT 的适配器非零元素比例极低，说明稀疏模式确实大幅切断了参数连接。这为引入新结构提供了动机。
- 最直接的做法是把预训练权重 W0 与一串可学习 Toeplitz 矩阵的乘积相乘，即 W = W0·(∏ T_i)，每个 T_i 初始化为单位矩阵，使训练起点等价于原模型。但作者从梯度结构出发给出命题：损失对第 i 个因子的梯度包含其前后所有 Toeplitz 因子的乘积，形如 ∇_&#123;T_i&#125;L = (∏_&#123;k&lt;i&#125; T_k)^T W0^T G (∏_&#123;k&gt;i&#125; T_k)^T，其中 G 是对 W 的梯度。若中间矩阵谱范数超过 1，梯度会随链长 t 指数增长，类似 RNN 的梯度爆炸。作者在 LLaMA-3-8B 常识推理任务上用链长 t=16 的朴素方法复现了这一现象：前 700 步内梯度范数与训练损失剧烈波动并最终崩溃（图 3）。
- ToPA 的第一个改进是把单个 Toeplitz 矩阵替换为块状 Toeplitz 矩阵：将 n×n 矩阵划分为 p×p 个子块，每个子块是独立的 (n/p)×(n/p) Toeplitz 矩阵。这样单个因子含 p(2n−p) 个参数，约为标准 Toeplitz 的 p 倍；在相同参数预算下链长可缩短约 p 倍，而梯度结构形式不变，从而显著缓解指数增长。第二个改进是加入恒等残差：W = W0·(∏ T_blk^i + I)，把适配中心化在恒等映射附近，既稳定优化，也符合微调应贴近预训练权重的归纳偏置。图 3 显示 ToPA 在同参数预算下训练动态明显更平滑。
- 初始化采用类似 LoRA 的非对称策略：第一个块状 Toeplitz 矩阵的定义向量置零，其余从正态分布采样，保证可学习模块在训练开始时输出为零，完整保留预训练网络行为。这帮助理解：如同 LoRA 中 B=0、A 随机初始化，ToPA 通过零初始化第一个因子使乘积为零。
- 理论部分给出三个结果。其一，由于每个块状 Toeplitz 因子几乎必然可逆，更新矩阵 ΔW = W0·(∏ T_blk^i) 的秩几乎必然等于 W0 的秩，即实现高秩更新，绕开低秩瓶颈。其二，作者把经典定理推广到块状情形：任意 n×n 矩阵一般可表示为约 n/(2p)+1 个块状 Toeplitz 矩阵的乘积，链长上界为 2n/p+5，比标准 Toeplitz 所需链长更短。其三，存在一类适配权重，ToPA 用 O(n) 参数即可实现，而 LoRA 至少需要 O(n²)、OFT/BOFT 至少需要 O(n log n) 参数，说明其在特定变换上表达力更强。
- 与基线的差异在于：LoRA 是加性低秩更新，OFT/BOFT 是乘性稀疏正交调制，而 ToPA 是乘性稠密高秩调制，参数量与基线相当（表中均在约 13M–17M 量级），但结构上不受秩或稀疏约束。

### 实验设计与论证方式

- 实验覆盖自然语言理解、主题驱动图像生成、常识推理、数学与代码生成四类任务，使用 DeBERTaV3、Stable-Diffusion、LLaMA-2/3、Qwen3 共 5 种模型架构、21 个数据集。常识推理在 BoolQ、PIQA、SIQA、ARC、OBQA、HellaSwag、WinoGrande 等数据集上报告准确率并取平均，比较对象包括 LoRA、DoRA、HiRA、RidgeLoRA、OFT、BOFT、HRA，参数量按基线匹配。
- 数学与代码生成在 GSM8K、MATH、HumanEval、MBPP 上评估；附录还报告了 LLaMA-3-8B 上三个随机种子的均值与标准差，用于检验稳健性。消融方面，作者比较了去掉恒等残差的变体，验证残差项的贡献；训练动态对比（图 3 与附录图 8）则从梯度范数和损失曲线角度支撑稳定性设计。论文未报告线上或 AB 实验，代码在 NeurIPS 检查清单中标注为录用后发布，本次未核验任何开源仓库。

### 结果与证据

- 在 LLaMA-2-7B 骨干的八个常识推理数据集上，参数量与各基线相当的 ToPA 取得了最高的平均准确率，超过 LoRA、DoRA、HiRA、RidgeLoRA、OFT、BOFT 和 HRA。该结果支持块状 Toeplitz 参数化在同等预算下表达力更强的论点，但仅反映离线基准表现，不能推出线上收益。（Table 1）

  > Model Method # Param BoolQ PIQA SIQA ARC-c ARC-e OBQA HellaS WinoG Avg LLaMA2-7B LoRA r=32 16.8M 70.5 81.1 80.1 71.5 85.4 78.6 84.6 78.5 78.8 DoRA r=32 17.0M 70.7 81.3 79.5 71.2 85.6 78.2 84.8 78.4 78.7 HiRA r=32 16.8M 70.6 82.2 79.3 69.8 85.9 79.4 86.5 79.8 79.2 RidgeLoRA r=32 17.0M 71.2 83.5 81.1 71.5 87.0 79.8 87.3 82.6 80.5 OFT b=64 16.8M 70.5 83.1 80.2 69.9 86.6 80.4 86.5

- 在 LLaMA-3-8B 的数学推理与代码生成任务上，作者用三个随机种子重复实验并报告均值与标准差，ToPA 在 GSM8K、MATH、HumanEval、MBPP 四项指标上均达到最佳或并列最佳的平均水平。多种子设置增强了稳健性结论的可信度，但实验仍限于 8B 规模模型。（Table 10, Appendix F.3）

  > <span class="paper-math">&#92;(45.5&#123;&#92;pm&#125;0.3&#92;)</span> <span class="paper-math">&#92;(67.1&#123;&#92;pm&#125;0.2&#92;)</span> ToPA <span class="paper-math">&#92;(&#123;&#125;^&#123;t=3&#125;&#95;&#123;p=8&#125;&#92;)</span> 12.6M <span class="paper-math">&#92;(&#92;textbf&#123;74.9&#125;&#123;&#92;pm&#125;0.3&#92;)</span> <span class="paper-math">&#92;(&#92;textbf&#123;23.5&#125;&#123;&#92;pm&#125;0.2&#92;)</span> <span class="paper-math">&#92;(&#92;textbf&#123;51.6&#125;&#123;&#92;pm&#125;0.3&#92;)</span> <span class="paper-math">&#92;(&#92;textbf&#123;67.2&#125;&#123;&#92;pm&#125;0.3&#92;)</span> F.4 Additional Qualitative Results for Subject-Driven Generation Fig. 9 , Fig. 10 , and Fig. 11 demonstrate additional qualitative results for subject-driven generation tasks.

- 消融实验比较了带与不带恒等残差的 ToPA：去掉残差后四项数学与代码生成指标一致下降，说明残差项对最终性能有正向贡献。该消融只验证残差设计的必要性，不能单独证明块状结构是全部收益来源。（Appendix F.1, Table 9）

  > Method # Param GSM8K MATH HumanEval Mbpp w/o Identity 12.6M 74.3 23.2 51.0 66.6 w/ Identity 12.6M 74.7 23.5 51.8 67.2 F.2 Additional Results on Training Instability in the Naive Method Fig. 8 illustrates the training dynamics of the Frobenius norm of gradients and the training loss for the naive method ( <span class="paper-math">&#92;(t=32&#92;)</span> ) and ToPA <span class="paper-math">&#92;(&#123;&#125;^&#123;t=2&#125;&#95;&#123;p=16&#125;&#92;)</span> when fine-tuning LLaMA-2-7B on

- 作者实测 LLaMA-2-7B 数学推理微调后 query/value 注意力矩阵的更新秩：全量微调的秩远高于 LoRA 在常见秩设置下的水平，且随参数比例变化 LoRA 秩始终受限。这为低秩约束是结构瓶颈的动机提供了实证支持，属于对更新矩阵性质的观察而非下游性能证据。（Section 2.1, Figure 2(a)）

  > To substantiate this, we compute the rank of the updated query and value attention matrices of the Llama2-7B model fine-tuned via LoRA for math reasoning task with varying parameter ratios. As illustrated in Fig. 2(a) , the rank of full fine-tuning is about <span class="paper-math">&#92;(3758&#92;)</span> , significantly higher than those of LoRA (e.g., <span class="paper-math">&#92;(16,32,64&#92;)</span> ).

### 与小组方向的关联

论文属于模型结构设计与预训练模型适配方向，与小组关注的架构设计、预训练与 LLM 微调直接相关；其高秩稠密更新的思路对下游推荐/检索任务的 LLM 适配有潜在迁移价值。理论论证较完整，实验覆盖面广，但未报告线上结果，代码在清单中标注暂未公开，收益需自行复现验证。

### 局限与阅读边界

- 作者在附录中明确承认两点局限：当前评估主要针对单模态骨干模型，扩展到视觉—语言等多模态大模型是未来方向；受算力限制，实验最大只到 8B 规模，更大模型上的可扩展性和实际行为有待进一步研究。
- 从材料可合理提出的验证问题包括：块状 Toeplitz 乘法虽可用 FFT 加速，但实际前向/反向的端到端训练与推理耗时相对 LoRA 的开销论文未给出系统对比，落地时需自行测量；理论结果中的“几乎必然”依赖随机性假设，在真实训练中秩保持程度值得实证检查。此外，检查清单显示代码在投稿阶段未公开，复现需等待作者发布，本次也未核验任何仓库。
- 需要强调适用条件：结论基于参数量匹配下的离线基准对比，跨任务的一致优势不能直接外推为线上推荐或检索场景的收益；对具体任务（如生成式推荐中的语义 ID 学习）是否同样受益，属于待验证设想而非本文已验证的结论。

## Sep-Latent: Separator Tokens as Natural Compression Anchors for Implicit Reasoning {#arxiv-2610-22924}

**作者：** Yinlong Xu, Jianfeng Huang, Zhengdong Zhou, Mingjie Lin, Fuyu Lv, Dan Ou, Hongxia Xu, Jian Wu

**命中的作者机构：** Alibaba

**作者单位原文：** Alibaba Group, Hangzhou, China &#123;xuyinlong,Einstein,Wujian2000&#125;@zju.edu.cn , &#123;lvfuyu.lfy,danou.do&#125;@taobao.com；Alibaba Group, Hangzhou, China

**论文：** [arXiv](https://arxiv.org/abs/2610.22924) · [本次阅读版本 v1](https://arxiv.org/abs/2610.22924v1)

阅读范围：完整 PDF，共 13 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Large Language Models (LLMs) have demonstrated remarkable success in complex reasoning through explicit Chain-of-Thought (CoT), but the associated computational overhead and token verbosity remain significant barriers to efficiency. While implicit reasoning in continuous latent spaces offers a promising alternative, existing methods like Coconut and CODI often rely on fixed-length latent sequences and suffer from representational collapse. In this paper, we propose Sep-Latent, an adaptive implicit reasoning framework that utilizes separator tokens as structural semantic anchors. By introducing an Attention-Decay mechanism, we force the model to aggregate and compress reasoning logic into these anchors during training. We then align explicit and implicit pathways through multi-level distillation across all layers to ensure logical consistency. Crucially, Sep-Latent enables dynamic reasoning depth by adaptively terminating the latent thinking phase based on query complexity. Experimental results on the GSM8k-Aug benchmark show that Sep-Latent achieves an accuracy of 56.8\% with an average of only 5.4 tokens, significantly outperforming prior fixed-length implicit models in efficiency while narrowing the performance gap with explicit CoT. Further analysis via PCA and symbolic variant testing confirms that our method ensures semantic grounding and exhibits superior robustness to perturbations.

### 一句话速览

论文研究大模型隐式推理的效率与表征塌缩问题，提出以分隔符 token 为语义锚点的 Sep-Latent 框架：用渐进式注意力衰减把推理信息压缩进锚点，再经多层蒸馏对齐显式与隐式两条路径，并按题目复杂度自适应退出隐式思考。在数学与常识基准上，该方法以极少的隐式 token 数接近显式思维链精度。

### 研究动机

- 任务背景是让大模型完成多步推理：输入一道数学应用题或常识问题，模型输出中间推理过程和最终答案。显式思维链（Chain-of-Thought，即在回答前逐字生成推理文本）效果好但推理时延和 token 开销大；直接输出答案又损失精度。
- 已有隐式推理路线（如 Coconut、CODI、SIM-CoT）把推理压缩到连续隐空间，用蒸馏或课程学习替代文本推理步骤，但普遍使用固定数量的隐式 token，无法按题目难度伸缩，且隐状态容易塌缩成无信息的同质化表示。
- 本文要回答的问题是：能否让模型自然地把推理逻辑压缩到少量结构化锚点上，并根据查询复杂度动态决定隐式思考的深度，从而在保持精度的同时大幅降低推理开销。

### 方法与关键设计

- 作者先观察到一个现象：语言模型在推理时会自然地把较强注意力分配给分隔符 token（如换行符、逗号、句号）。论文据此提出反向利用这一结构：训练时放大对分隔符的注意力集中，使模型把推理信息主动压缩进这些天然锚点，而不是让隐状态漂移到词表空间之外。
- 显式路径上引入注意力衰减机制。设第 l 层注意力中查询位置 i 对键位置 j 的原始权重为 <span class="paper-math">&#92;( A^&#123;(l)&#125;&#95;&#123;i,j&#125; &#92;)</span>，对属于推理步骤 token 的位置乘以衰减因子 <span class="paper-math">&#92;( &#92;gamma &#92;in [0,1] &#92;)</span>：<span class="paper-math">&#92;[ &#92;hat&#123;A&#125;^&#123;(l)&#125;&#95;&#123;i,j&#125;=&#92;begin&#123;cases&#125;A^&#123;(l)&#125;&#95;&#123;i,j&#125;&#92;cdot&#92;gamma &amp; j&#92;in&#92;mathcal&#123;I&#125;&#95;&#123;&#92;text&#123;steps&#125;&#125;&#92;&#92; A^&#123;(l)&#125;&#95;&#123;i,j&#125; &amp; &#92;text&#123;otherwise&#125;&#92;end&#123;cases&#125; &#92;]</span> 即逐步压制对推理文本的注意力，迫使必要信息经由分隔符 <span class="paper-math">&#92;( v&#95;k &#92;)</span> 的隐状态传播，把分隔符当作摘要式隐变量。训练采用课程式调度：第一个 epoch 内 <span class="paper-math">&#92;( &#92;gamma &#92;)</span> 从 1.0 按余弦衰减到目标值（如 0.1），之后保持不变，让模型先学会基本逻辑映射再被强制压缩。
- 隐式路径把显式文本步骤 <span class="paper-math">&#92;( s&#95;k &#92;)</span> 替换为连续隐 token <span class="paper-math">&#92;( z&#95;1,&#92;dots,z&#95;m &#92;)</span>。隐位置的输入向量由前一个位置最后一层隐状态经 MLP 投影得到：<span class="paper-math">&#92;( u&#95;t=&#92;text&#123;MLP&#125;(h&#95;&#123;t-1&#125;^&#123;(L)&#125;) &#92;)</span>，从而绕开离散词表约束并保持自回归依赖。
- 对齐目标采用双路径多层蒸馏。对分隔符/隐 token 位置与答案位置，分别把所有 L 层隐状态求和聚合为 <span class="paper-math">&#92;( H&#95;&#123;&#92;text&#123;sep&#125;&#125; &#92;)</span>、<span class="paper-math">&#92;( H&#95;&#123;&#92;text&#123;latent&#125;&#125; &#92;)</span>、<span class="paper-math">&#92;( H&#95;&#123;&#92;text&#123;cot&#125;&#125; &#92;)</span>、<span class="paper-math">&#92;( H&#95;&#123;&#92;text&#123;imp&#125;&#125; &#92;)</span>，再用平方欧氏距离对齐：<span class="paper-math">&#92;( &#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;dis&#92;&#95;anchor&#125;&#125;=&#92;lvert&#92;lvert H&#95;&#123;&#92;text&#123;latent&#125;&#125;-H&#95;&#123;&#92;text&#123;sep&#125;&#125;&#92;rvert&#92;rvert&#95;2^2 &#92;)</span>，<span class="paper-math">&#92;( &#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;dis&#92;&#95;answer&#125;&#125;=&#92;lvert&#92;lvert H&#95;&#123;&#92;text&#123;imp&#125;&#125;-H&#95;&#123;&#92;text&#123;cot&#125;&#125;&#92;rvert&#92;rvert&#95;2^2 &#92;)</span>。同时两条路径都有交叉熵监督：显式路径监督整个序列（推理步骤加答案），隐式路径只监督最终答案。总损失为 <span class="paper-math">&#92;( &#92;mathcal&#123;L&#125;=&#92;mathcal&#123;L&#125;&#95;&#123;CE&#125;+&#92;mathcal&#123;L&#125;&#95;&#123;Dis&#125; &#92;)</span>。与 CODI 等离线蒸馏不同，这里是同一模型在显式与隐式两种模式下联合训练、在线自蒸馏，无需额外的辅助解码模型。
- 推断阶段关闭显式路径和注意力衰减。模型从起始分隔符进入隐式阶段，每步用 MLP 投影生成下一隐输入；同时在每个隐步把语言建模头作用于当前隐状态，当解码出终止分隔符 <span class="paper-math">&#92;( v&#95;&#123;end&#125; &#92;)</span>（条件为 <span class="paper-math">&#92;( &#92;text&#123;argmax&#125;(Wh&#95;t^&#123;(L)&#125;)=&#92;text&#123;index&#125;(v&#95;&#123;end&#125;) &#92;)</span>）时结束隐式思考，回到普通自回归解码输出答案。这就是按查询复杂度自适应决定推理深度的机制。
- （帮助理解的例子）附录给出的训练数据格式是：显式答案形如起始符、若干计算步骤、每步后跟分隔符、再输出答案；隐式答案则把中间计算步骤整体替换为占位的隐 token，只保留起始符、终止符和答案。这样隐式路径只需学会在极少 token 内完成内部计算。

### 实验设计与论证方式

- 训练数据为 GSM8k-Aug，即在原始 GSM8k 基础上用 GPT-4 通过改写、数值重采样和合成扩充到约三十八万余条样本，并去除自然语言推理链以迫使模型内化推理。评测覆盖域内 GSM8k，域外数学基准 MultiArith、SVAMP、GSM-Hard（数值放大）与 GSM-SYM（符号扰动），以及常识与逻辑基准 LogiQA、CSQA、StrategyQA。
- 比较对象包括 SFT-CoT（显式思维链监督微调）、SFT-Direct（直接输出答案）、Coconut（课程式隐 token 替换）、CODI（自蒸馏对齐隐轨迹）以及引入辅助模型监督中间过程的 SIM-Coconut 和 SIM-CODI。骨干模型为 Llama3.2-1B/3B、Llama3.1-8B 和 Qwen3-0.6B，报告准确率与平均 token 消耗。
- 实现基于 Hugging Face transformers 与 DeepSpeed ZeRO-3，在 H20 GPU 集群上训练 3 个 epoch，总 batch size 为 128，初始学习率 1e-4，线性预热加余弦退火；分隔符选换行符。消融部分对注意力衰减与锚点蒸馏的必要性用 top-5 采样重复十次实验验证，并用 PCA 可视化比较隐 token 与词表嵌入空间的关系。所有结果均为离线评测，论文未报告线上或 AB 实验，本次也未核验代码仓库。

### 结果与证据

- 在训练所用数学应用题基准的测试集上，Sep-Latent 以平均极少的隐式 token 数取得了高于此前最强隐式蒸馏方法的准确率，并接近显式思维链监督基线。这是论文报告的离线主结果，说明隐式路径在效率上明显优于固定长度隐式方法，但不能直接外推到其他任务域或线上场景。（Abstract 与正文主结果表）

  > Experimental results on the GSM8k-Aug benchmark show that Sep-Latent achieves an accuracy of 56.8% with an average of only 5.4 tokens, significantly outperforming prior fixed-length implicit models in efficiency while narrowing the performance gap with explicit CoT.

- 在更大的 Llama 系列骨干上，方法在域内准确率上持续超过 CODI 与 SIM-CODI 两类隐式基线，同时保持几乎不变的极低 token 消耗，说明效率优势随模型规模大体保留。但验证仅限于 Llama 与 Qwen 的中小模型，更大规模或其他架构未测。（Table 2）

  > Acc. (%) tokens Acc. (%) tokens Acc. (%) tokens Acc. (%) tokens Acc. (%) tokens Llama3.2-3B SFT-CoT 71.5 27.7 17.0 22.4 98.3 11.4 71.0 12.4 64.5 18.5 SFT-Direct 38.3 1.2 9.5 1.4 88.7 1.4 52.9 1.4 47.4 1.4 CODI 60.8 8.2 14.3 11.5 98.7 11.5 73.3 11.5 61.8 10.7 SIM-CODI 62.3 8.2 14.6 11.5 98.8 11.5 74.9 11.5 62.7 10.7 Sep-Latent(ours) 64.7 5.5 16.3 5.7 98.5 5.7 75.1 5.7 63.7 5.7

- 在逻辑与常识问答基准上，方法平均准确率超过 CODI 与 SIM-CODI，接近直接输出答案的基线上限，并在逻辑推理数据集上取得所比较方法中的最高准确率。这些任务与数学训练数据分布差异较大，说明隐式路径有一定迁移能力，但相对直接作答的优势幅度有限。（Table 3 与常识推理小节）

  > As shown in Table 3 , Sep-Latent achieves a 61.3% average accuracy, outperforming both CODI (59.6%) and SIM-CODI (60.5%). Our method nearly matches the SFT-Direct performance ceiling (61.5%) while significantly surpassing the verbose SFT-CoT baseline (49.7%).

- 消融显示去掉注意力衰减或去掉锚点蒸馏都会带来明显性能下降，二者同时去除时退化最严重；作者据此认为注意力衰减为分隔符蒸馏提供了必要的结构基础，缺少显式注意力约束时分隔符表示会引入噪声而非指导。这是重复采样下的均值观察，不能排除其他因素共同作用。（消融小节与 Figure 6）

  > sampling (Figure 6 ). These quantitative results are also summarized in Table 1 . The significant performance drop when applying distillation without decay (green line) suggests that, lacking an explicit attention constraint, separator representations fail to capture the underlying reasoning process, introducing noise rather than guidance.

### 与小组方向的关联

论文属于 Attention 机制与模型结构设计方向，注意力衰减加锚点压缩的思路新颖，消融与多规模实验较完整。与小组的生成式推荐、语义 ID 方向有潜在借鉴（压缩表示与自适应深度），但实验限于数学与常识基准，未在推荐检索场景验证，线上收益与代码开源情况本次未核验。

### 局限与阅读边界

- 作者承认的局限：其一，方法虽缩小了差距，但准确率仍未完全超过显式 SFT-CoT 基线，说明某些复杂逻辑任务中文本链仍是更稳定的监督信号；其二，采样分析显示贪心解码失败时正确答案常仍在输出分布内，作者认为推理逻辑已存在，但需要强化学习来进一步对齐隐式路径与正确解。
- 从材料可合理提出的验证问题：训练数据由 GPT-4 扩充且去除了自然语言推理链，域外优势是否部分来自数据构造方式而非隐式推理本身，需要独立数据验证；最优衰减比例是按基准挑选的超参数，跨任务的最优设置是否稳定未知；自适应退出机制在长链、多分支推理（训练数据多为少量步骤的数学题）下的表现未测。
- 本次阅读范围限制：实验集中在数学与常识问答的小到中等规模模型，未涉及推荐、检索等小组核心场景，任何迁移收益都只是设想；论文未声明代码开源，本次也未核验复现环境，效率对比基于论文报告的训练开销图，未独立复测。

## Rethinking the design space of Vanilla Pixel Diffusion Transformers {#arxiv-2610-23854}

**作者：** Soumik Mukhopadhyay, Long Mai, Abhinav Shrivastava, Aniruddha Mahapatra

**命中的作者机构：** Adobe

**作者单位原文：** Adobe Research

**论文：** [arXiv](https://arxiv.org/abs/2610.23854) · [本次阅读版本 v1](https://arxiv.org/abs/2610.23854v1)

阅读范围：仅读取正文：原 PDF 第 1–12 页（共 33 页）；在第 12 页 REFERENCES 标题前结束；保留正文图表与公式，未读取参考文献及附录

### 原始摘要

Pixel-space diffusion models have recently re-emerged as a compelling alternative to latent diffusion, avoiding the lossy latent bottleneck and separately trained autoencoder. JiT shows that a vanilla diffusion transformer can generate directly in pixel space by replacing the commonly used velocity prediction (<span class="paper-math">&#92;(&#92;boldsymbol&#123;u&#125;&#92;)</span>-prediction) with clean image prediction (<span class="paper-math">&#92;(&#92;boldsymbol&#123;x&#95;0&#125;&#92;)</span>-prediction). In this work, we revisit this choice and introduce MFlow, an adaptive parameterization that learns to interpolate between <span class="paper-math">&#92;(&#92;boldsymbol&#123;x&#95;0&#125;&#92;)</span>- and <span class="paper-math">&#92;(&#92;boldsymbol&#123;u&#125;&#92;)</span>-prediction across principal directions of the data, learned end-to-end with diffusion training. We find that the preferred parameterization varies systematically with the data representation and model capacity -- notably, increasing model capacity shifts preference toward velocity prediction. We evaluate MFlow across ImageNet, UCF-101 video, and large-scale text-to-image generation, demonstrating competitive or improved generative performance across diverse settings. In addition, we find that vanilla pixel diffusion transformers, irrespective of parameterization, retain a persistent high-frequency deficit relative to real images. To address this, we introduce ConvRefiner, a lightweight convolutional module trained post-hoc with an adversarial loss while keeping the diffusion backbone frozen. With only a small amount of additional training, ConvRefiner restores the high-frequency statistics of generated images while preserving FID. Project webpage: this https URL .

### 一句话速览

针对像素空间扩散 Transformer 的预测参数化选择问题，提出 MFLOW：在数据主成分方向上学习介于干净图像预测与速度预测之间的连续可学习增益，免去 AsymFlow 式人工秩搜索；另发现 JiT 族模型存在持续高频亏损，提出冻结骨干、事后对抗训练的 ConvRefiner 补回高频。在 ImageNet、UCF-101 视频与大规模文生图上取得相当或更优的生成质量。

### 研究动机

- 本文研究的对象是直接在像素空间工作的 vanilla 扩散 Transformer。这类模型不需要单独训练的自编码器和潜空间压缩，避免了潜扩散模型（LDM）有损瓶颈导致的重建失真，以及压缩自编码器与下游生成目标脱节的问题。JiT 证明用 16×16 大 patch 的普通 Transformer 直接对原始像素做扩散也能取得有竞争力的生成效果，但每个 token 需要建模高维像素块，由此引出两个问题：什么预测参数化最适合这种高维 patch，以及极简的大 patch 结构能否忠实刻画细尺度图像细节。
- 在参数化方面，已有路线各有不足：JiT 用干净图像（<span class="paper-math">&#92;( x&#95;0 &#92;)</span>）预测，依据流形假设更易学习，但采样时换算回速度 <span class="paper-math">&#92;( u &#92;)</span> 在低噪声区间病态；AsymFlow 在选定的低秩 PCA 子空间做 <span class="paper-math">&#92;( u &#92;)</span> 预测、其余做 <span class="paper-math">&#92;( x&#95;0 &#92;)</span> 预测，但硬截断的秩需要昂贵的训练搜索；k-Diff 用全局共享的可学习标量插值，无法区分表示内部的方向差异。本文要回答的第一个问题是：能否让模型自动学习每个数据主方向上 <span class="paper-math">&#92;( x&#95;0 &#92;)</span> 与 <span class="paper-math">&#92;( u &#92;)</span> 预测的最优混合，免去人工子空间选择。
- 在细节建模方面，作者发现 JiT 族模型无论采用何种参数化，生成图像相对真实图像都存在持续的高频亏损，这指向极简大 patch 设计（patch token 直接经 MLP 投回像素、缺少局部细化通路）的局限。本文要回答的第二个问题是：能否在不改动骨干和原训练流程的前提下，低成本补回缺失的高频统计。

### 方法与关键设计

- 论文的设定是 rectified flow / 随机插值框架：前向过程为 <span class="paper-math">&#92;( x&#95;t = t&#92;,x&#95;0 + (1-t)&#92;,&#92;epsilon &#92;)</span>，其中 <span class="paper-math">&#92;( x&#95;0 &#92;)</span> 是干净数据、<span class="paper-math">&#92;( &#92;epsilon &#92;)</span> 是标准高斯噪声，<span class="paper-math">&#92;( t &#92;)</span> 从 0（纯噪声）到 1（干净数据）。生成沿概率流 ODE 进行，速度场为 <span class="paper-math">&#92;( u(x&#95;t,t) = &#92;mathbb&#123;E&#125;[x&#95;0 - &#92;epsilon &#92;mid x&#95;t] &#92;)</span>。网络可以回归噪声、速度 <span class="paper-math">&#92;( u &#92;)</span> 或干净图像 <span class="paper-math">&#92;( x&#95;0 &#92;)</span>，三者代数等价但条件化难度不同。
- 已有方案各有缺陷：JiT 主张 <span class="paper-math">&#92;( x&#95;0 &#92;)</span> 预测，理由是干净数据位于低维流形附近而噪声与速度张满整个环境空间，欠完备网络预测 <span class="paper-math">&#92;( x&#95;0 &#92;)</span> 更容易；但采样时需把 <span class="paper-math">&#92;( x&#95;0 &#92;)</span> 换算回 <span class="paper-math">&#92;( u &#92;)</span>，在低噪声区间病态。AsymFlow 用 patch-PCA 特征向量 <span class="paper-math">&#92;( U &#92;)</span> 选前 <span class="paper-math">&#92;( r &#92;)</span> 个主方向做 <span class="paper-math">&#92;( u &#92;)</span> 预测、其余做 <span class="paper-math">&#92;( x&#95;0 &#92;)</span> 预测，但硬截断的秩 <span class="paper-math">&#92;( r &#92;)</span> 依赖数据集与模态，需要昂贵的训练搜索（作者举例 AsymFlow 调一次秩需要 6 次训练），且把噪声限制在最高方差方向这一选择本身是任意的——作者发现 PCA 第 9 到 16 方向可以胜过第 1 到 8 方向。k-Diff 用全局共享的可学习标量插值，无法表达表示内部的方向差异。
- MFLOW 把二值投影子 <span class="paper-math">&#92;( P &#92;)</span> 换成分级算子 <span class="paper-math">&#92;( M = U&#92;,&#92;mathrm&#123;diag&#125;(m&#95;1,&#92;ldots,m&#95;D)&#92;,U^&#92;top &#92;)</span>，每个主方向有连续可学习增益 <span class="paper-math">&#92;( m&#95;i &#92;in [0,1] &#92;)</span>，回归目标为 <span class="paper-math">&#92;( u&#95;G = x&#95;0 - M&#92;epsilon &#92;)</span>。在 PCA 基下逐分量解耦为 <span class="paper-math">&#92;( &#92;tilde&#123;u&#125;&#95;&#123;G,i&#125; = &#92;tilde&#123;x&#125;&#95;&#123;0,i&#125; - m&#95;i&#92;,&#92;tilde&#123;&#92;epsilon&#125;&#95;i &#92;)</span>：<span class="paper-math">&#92;( m&#95;i = 1 &#92;)</span> 即该方向做 <span class="paper-math">&#92;( u &#92;)</span> 预测，<span class="paper-math">&#92;( m&#95;i = 0 &#92;)</span> 即 <span class="paper-math">&#92;( x&#95;0 &#92;)</span> 预测，因此 MFLOW 严格泛化了两个端点以及 AsymFlow（后者对应 <span class="paper-math">&#92;( m&#95;i = &#92;mathbf&#123;1&#125;[i &#92;le r] &#92;)</span>）。增益用归一化方差初始化 <span class="paper-math">&#92;( m&#95;i = &#92;hat&#123;&#92;lambda&#125;&#95;i/(&#92;hat&#123;&#92;lambda&#125;&#95;i + c) &#92;)</span>，默认通过每方向 logit 的 sigmoid 端到端可学习。
- 关键机制是闭式精确速度恢复。前向式与目标式在每个特征方向上构成关于 <span class="paper-math">&#92;( (&#92;tilde&#123;x&#125;&#95;&#123;0,i&#125;, &#92;tilde&#123;&#92;epsilon&#125;&#95;i) &#92;)</span> 的二元线性方程组，其系数矩阵行列式为 <span class="paper-math">&#92;( -&#92;Delta&#95;i &#92;)</span>，<span class="paper-math">&#92;( &#92;Delta&#95;i = (1-t) + m&#95;i t &#92;ge 1-t &gt; 0 &#92;)</span> 恒非零，因此对任意 <span class="paper-math">&#92;( m&#95;i &#92;in [0,1] &#92;)</span> 都能精确解出 <span class="paper-math">&#92;( x&#95;0 &#92;)</span> 与 <span class="paper-math">&#92;( &#92;epsilon &#92;)</span>，进而恢复完整速度 <span class="paper-math">&#92;( u &#92;)</span>。这保证了连续增益不会破坏采样所需的 ODE 场，是 MFLOW 能与标准训练目标兼容的原因。
- 训练时 <span class="paper-math">&#92;( M &#92;)</span> 不改变前向过程和输运目标 <span class="paper-math">&#92;( u &#92;)</span>，只改变网络回归目标的逐坐标条件化：网络输出 <span class="paper-math">&#92;( &#92;hat&#123;u&#125;&#95;G &#92;)</span>，经闭式映射得到 <span class="paper-math">&#92;( &#92;hat&#123;u&#125; &#92;)</span>，在速度空间用流匹配损失 <span class="paper-math">&#92;( &#92;mathcal&#123;L&#125;(&#92;theta) = &#92;mathbb&#123;E&#125;[w(t)&#92;|&#92;hat&#123;u&#125; - (x&#95;0-&#92;epsilon)&#92;|&#95;2^2] &#92;)</span> 联合训练生成器与增益，需要时可对预测的干净信号加 LPIPS 损失；采样时用标准 Euler/Heun 求解 <span class="paper-math">&#92;( &#92;dot&#123;x&#125; = u &#92;)</span>。一个帮助理解的例子：二维螺旋嵌入到 512 维观测空间后，完整 <span class="paper-math">&#92;( u &#92;)</span> 预测随维度升高退化，而固定或可学习 MFLOW 与 <span class="paper-math">&#92;( x&#95;0 &#92;)</span> 预测、秩匹配的 AsymFlow 一样能恢复螺旋，说明连续增益在高维欠完备设定下仍然可行。
- 第二个组件针对高频缺陷。作者用径向平均功率谱（RAPS）分析发现 JiT 族模型无论何种参数化都在 0.5–0.7 径向频率段亏损，而潜空间模型、VAE 重建和带像素级通路的 PixelDiT 没有此问题，怀疑根源是大倍率 patch 化且 patch 内没有任何局部操作。ConvRefiner 是轻量残差卷积模块，在冻结的扩散骨干之上事后训练：对网络的 <span class="paper-math">&#92;( x &#92;)</span> 预测（其他参数化先换算成 <span class="paper-math">&#92;( x &#92;)</span>）叠加卷积残差，用感知损失加 PatchGAN 对抗损失（仅作用于接近干净的图像）训练，骨干不动，因此改动成本很低。

### 实验设计与论证方式

- 实验覆盖三类任务。类条件图像生成在 ImageNet-1K 上训练与评测，指标为 FID@50K；类条件视频生成在 UCF-101 上使用 16 帧、128×128 分辨率，指标为 FVD@10K；文本到图像生成使用约 9 亿张内部图片预训练、3350 万张做 SFT，评测 GenEval、DPG-Bench 和 PRISM-Bench。图像与视频实验基于 JiT 仓库的 vanilla transformer 骨干，分 B/L/H 三档规模，图像用 16×16 patch，视频用 4×8×8 patch。
- 比较对象包括 JiT（x0 预测）、AsymFlow（硬截断 PCA 子空间）等像素扩散方法，以及 U-Net 类、U-ViT 类、解码器头类等层级结构模型；视频还与 WAN2.1 潜空间扩散和自回归模型对比。文本到图像实验用同一 1.1B MMDiT-L/16 骨干在相同 SFT 设置下实例化三种参数化，以隔离参数化本身的影响，并扩展到 13B 总参数、2.9B 激活参数的 MoE 模型。消融涵盖损失参数化、M 初始化方式、M 学习率倍率、ConvRefiner 的块数与 GAN 权重，以及不同 refiner 家族。
- 高频分析使用径向平均功率谱（RAPS），并报告相对真实图像的高频亏损（dB）。ConvRefiner 在冻结的 600 epoch 基础模型上额外训练 30 epoch（约 5% 训练量），文本到图像上从 SFT 检查点再训 5k 步。本次阅读范围为正文第 1–12 页，未读附录；论文未报告线上或 AB 实验，正文未给出代码仓库链接，本次未核验开源状态。

### 结果与证据

- 在 ImageNet 的 B 级模型上，加入 LPIPS 感知损失后三种参数化的 FID 都改善，其中 MFLOW 优于 JiT 和 AsymFlow；这支持 MFLOW 与感知损失组合时的竞争力，但无 LPIPS 时 MFLOW 落后于 AsymFlow，说明该优势依赖训练配置，不能推广为参数化本身全面占优。（Table 2, Section 5）

  > We see that LPIPS helps all the models in FID (evaluated on base JiT-B evaluation hy- perparameters). However, it improves MFLOW performance the most, beating the baselines. Method FID↓ w/o LPIPS w/ LPIPS JiT-B/16 (Li &amp; He (2026)) 3.70 3.42 AsymFlow-B/16 (Chen et al. (2026a)) 3.59 3.40 MFLOW-B/16 (ours) 3.74 3.33 Implementation Details.

- 在类条件视频生成上，B 级和 L 级的 MFLOW 的 FVD 均优于同规模的 JiT 与 AsymFlow，也优于所对比的潜空间扩散基线，L 级加事后 Framewise-LPIPS 后取得表中最佳；这支持 MFLOW 跨域到视频的有效性，但对比模型多为作者自训，绝对水平受训练配置影响。（Tables 4-5, Section 5）

  > generation DIGAN (Yu et al. (2022)) 58M† 5.5M† – 465 NeRV-Diffusion-L (Ren et al. (2026)) ∼229M 467M 128 97 Pixel diffusion models VideoFusion (Luo et al. (2023)) – 2B – 173 Video JiT-L/4×8×8 (Li &amp; He (2026)) – 458M 1024 111 Video AsymFlow-L/4×8×8 (Chen et al. (2026a)) – 458M 1024 98 Video MFLOW-L/4×8×8 (ours) – 458M 1024 97 + post-hoc Framewise-LPIPS (ours) – 458M 1024 94

- 在 ImageNet 上，ConvRefiner 把 MFLOW-H 的高频亏损从接近 JiT 水平大幅降低，同时 FID 保持不变；这支持事后卷积细化能在不损害生成质量的前提下恢复高频统计，但该表只覆盖 H 级单一配置，且高频亏损指标是相对真实图像谱的均值差。（Table 1, Section 4.2）

  > Method FID↓HF-deficit(dB) JiT-H/16 1.82 -6.69 MFLOW-H/16 MFLOW 1.81 -6.63 MFLOW-H/16 + ConvRefiner (ours) 1.81 -1.29 Based on our analysis we suspect that this high-frequency deficit might be specific to the JiT-based pixel diffusion architecture. However, as seen in the previous section, convolutional VAE decoders are able to recover high- frequency.

- 图中可观察到，ConvRefiner 后训练使 B/H 两级、JiT 与 MFLOW 四种配置的径向功率谱在 0.5–0.7 高频段重新贴近真实图像曲线，同时右侧 FID 随后训练轮数几乎保持水平；这支持高频修复与生成质量保持可以兼得，但谱曲线为定性观察，具体亏损数值以正文表格为准。（Figure 8）

  图表观察（PDF 第 9 页）：Figure 8 左列为 JiT-B、JiT-H、MFlow-B、MFlow-H 四个子图的 RAPS 曲线（power 10log10(dB) 对 normalized radial frequency），每个子图均显示 before 曲线在 0.5–0.7 频段明显低于 real，after (w/ refiner) 曲线贴近 real；右图为 FID 对 post-hoc refiner+GAN epoch（0 到 30）的曲线，JiT-B、MFlow-B、JiT-H、MFlow-H 四条线在训练过程中基本平稳，无上升趋势。

### 与小组方向的关联

论文属于视觉生成架构与训练目标设计，与小组的模型架构设计、Attention 机制兴趣相关：方向自适应增益可视为对预测目标条件化的结构化改造，其逐方向分析思路对语义 ID 或表示设计有类比参考价值，但与推荐、检索无直接任务重叠。可借鉴的是免搜索的自适应参数化框架和冻结骨干的低成本后处理细化；其在推荐场景的迁移纯属设想，需另行验证。

### 局限与阅读边界

- 作者已承认的局限：高频亏损的归因是推测性的，正文写明只是怀疑该问题特定于 JiT 式骨干（大 patch 化且无 patch 内局部操作），并未给出因果证明；ConvRefiner 的消融也显示 DiP patch-detailer 加 GAN 损失会过度补偿并明显损害 FID，说明后处理细化对损失权重敏感。
- 从材料可合理提出的验证问题：MFLOW 的收益依赖 patch-PCA 基的估计，PCA 基在不同数据分布或分辨率下的稳定性未在正文中讨论；B 级模型上无 LPIPS 时 MFLOW 落后于 AsymFlow，说明其优势与感知损失等训练配置耦合，迁移到其他损失组合时需重新验证。M-curve 关于模型容量推动偏好转向 u 预测的结论基于 1B 与 13B-MoE 两个点的对比，属于观察性趋势而非受控因果结论。
- 本次阅读范围不足：附录中的完整训练配置、伪代码、RAPS 协议细节和 RAEv2 潜空间实验（表 10）未读取，无法核验训练成本与超参敏感性；文本到图像实验使用内部数据集，外部无法直接复现该规模对比；论文未报告线上部署效果，生成质量与真实用户感知的差距仍待验证。

## Next Token or Vector? Learning How Far to Decode {#arxiv-2610-22788}

**作者：** Sai Sreenivas Chintha, Chidera Biringa, Rishab Sharma, Anusha Agrawal, Prachi Badarayani, Gemma Zhang, Nigel Boachie Kumankumah, Marco Ayala, Sulaiman Vesal

**命中的作者机构：** Microsoft

**作者单位原文：** Microsoft；Microsoft 2University of Massachusetts Amherst

**论文：** [arXiv](https://arxiv.org/abs/2610.22788) · [本次阅读版本 v1](https://arxiv.org/abs/2610.22788v1)

阅读范围：完整 PDF，共 10 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Standard autoregressive decoding advances one token at a time, even when several upcoming tokens can be predicted together. We propose CADENCE (Context-Adaptive DEcoding), a generation method that learns both what to draft and how far to draft. Gaussian prediction heads represent future spans as continuous latent vectors, and a shared decoder converts the selected vector into token predictions in parallel. A learned router selects the prediction length from the model's own hidden states and predicted Gaussian parameters, adapting generation granularity to the current context with single-token generation as a fallback. The backbone verifies each proposed continuation and retains the prefix that matches its greedy predictions. Experiments with Llama-3.1-8B-Instruct on Alpaca, GSM8K, and HumanEval show that router-selected positions yield higher draft acceptance than applying the corresponding prediction length everywhere. CADENCE achieves up to 1.3x higher generation throughput than standard greedy decoding.

### 一句话速览

论文提出CADENCE自适应解码框架：在冻结的Llama-3.1-8B-Instruct骨干之上，用各预测跨度的高斯潜表示加共享Perceiver式解码器并行草拟多token，并由学习路由器按上下文选择跨度或回退单token。在Alpaca、GSM8K、HumanEval上，路由选择位置的草稿接受率高于固定跨度，吞吐最高达贪心解码的1.3倍。

### 研究动机

- 大语言模型的标准自回归解码每步只前进一个token，响应越长用户等待越久，固定算力下服务系统的吞吐也受限。然而token的可预测性在序列内差异很大：重复出现的短语、模板和代码语法几乎由上下文决定，而需要回忆或计算的数字（如平方根的小数位）则难以一次预测多步。统一按单token推进，对可预测片段浪费了并行机会。
- 已有加速路线包括投机解码与并行token头、扩散或插入式生成、以及把固定长度token块压缩成连续向量的方法（如CALM的固定块、CoLaR由提示指定压缩率）；自适应方法则多在草拟之后通过学习停止或动态树来控制长度。这些方法的长度决策要么固定、要么发生在草拟之后。
- 本文要回答的问题是：模型能否把“草拟多远”的决策提前到解码候选片段之前，即从不同候选跨度的潜表示中直接选择合适的预测长度，并以单token生成为回退，从而在不改变骨干输出的前提下提升生成效率。

### 方法与关键设计

- CADENCE在冻结的预训练自回归骨干（Llama-3.1-8B-Instruct）上外挂三个模块：各预测跨度的高斯预测头、共享的Perceiver IO式解码器和一个学习路由器。每个生成步中，骨干先预测下一个token并给出上下文表示：把最后三层最后一个位置的隐状态拼接后线性投影回骨干宽度，即 <span class="paper-math">&#92;(c&#95;t=&#92;mathrm&#123;Proj&#125;([h&#95;t^&#123;(-3)&#125;;h&#95;t^&#123;(-2)&#125;;h&#95;t^&#123;(-1)&#125;])&#92;)</span>，让下游模块同时看到骨干最后几层的互补信息且不增加参数量。
- 目标构造上，论文把未来 <span class="paper-math">&#92;(k&#92;)</span> 个token的嵌入压缩成一个跨度表示：用带旋转位置编码（RoPE）的多头注意力池化器对真值token嵌入做注意力池化再线性降维，得到 <span class="paper-math">&#92;(z^&#123;&#92;star&#125;&#95;&#123;t,k&#125;&#92;)</span>。注意力依赖位置但值向量不变，避免了均值池化丢失顺序、或直接加位置向量把位置与语义纠缠的问题。跨度从 <span class="paper-math">&#92;(t+2&#92;)</span> 开始，因为骨干语言模型头已直接预测 <span class="paper-math">&#92;(t+1&#92;)</span> 位置。池化器先与解码器一起预训练后冻结，作为固定监督目标。
- 每个跨度 <span class="paper-math">&#92;(k&#92;)</span> 有一个专属高斯头（共享MLP主干），预测 <span class="paper-math">&#92;(D=512&#92;)</span> 维对角高斯参数 <span class="paper-math">&#92;(&#92;mu&#95;&#123;t,k&#125;,&#92;sigma&#95;&#123;t,k&#125;&#92;)</span>，即 <span class="paper-math">&#92;(q&#95;&#123;t,k&#125;(z)=&#92;mathcal&#123;N&#125;(z;&#92;mu&#95;&#123;t,k&#125;,&#92;mathrm&#123;diag&#125;(&#92;sigma&#95;&#123;t,k&#125;^2))&#92;)</span>。对角协方差使参数量随维度线性增长、似然训练在每个位置都可计算；所有跨度用相同的潜维度，保持容量一致。
- 共享解码器采用Perceiver IO式交叉注意力：把选中的潜向量 <span class="paper-math">&#92;(z&#92;)</span> 作为共享的key和value，为 <span class="paper-math">&#92;(k&#92;)</span> 个输出位置各分配一个学习位置查询，经四层交叉注意力后由线性输出层并行产生 <span class="paper-math">&#92;(k&#92;)</span> 个词表分布。所有跨度共享解码器参数和查询库，迫使各高斯头产出彼此兼容的潜表示，也免去为每个长度单独训练解码器。
- 路由器是宽度512的残差MLP，输入为上下文 <span class="paper-math">&#92;(c&#95;t&#92;)</span> 和所有候选跨度的高斯参数，输出六类softmax：五个预测跨度加一个仅骨干回退。训练分三阶段：先预训练池化器与解码器（token级交叉熵），确立可重建未来跨度的潜空间；再冻结骨干与池化器，联合训练高斯头、投影和解码器，损失为高斯负对数似然（NLL）与对骨干分布的KL自蒸馏之和，权重 <span class="paper-math">&#92;(&#92;lambda&#95;&#123;&#92;mathrm&#123;KL&#125;&#125;=1&#92;)</span>、<span class="paper-math">&#92;(&#92;lambda&#95;&#123;&#92;mathrm&#123;NLL&#125;&#125;=0.005&#92;)</span>——蒸馏项直接监督验证时被评估的token分布，NLL因跨512维、五个跨度求和而降权；最后冻结全部生成模块，用focal loss（<span class="paper-math">&#92;(&#92;gamma=1&#92;)</span>，类权按训练频率的负平方根比例）训练路由器，标签是能完全匹配骨干贪心延续的最大跨度，若无则记为回退类，以应对长跨度标签稀少的不平衡。
- 推断时路由器选出跨度 <span class="paper-math">&#92;(k&#92;)</span> 或回退；若选中跨度，解码器用高斯均值 <span class="paper-math">&#92;(&#92;mu&#95;&#123;t,k&#125;&#92;)</span>（保证确定并与路由标签构造一致）并行解码 <span class="paper-math">&#92;(k&#92;)</span> 个token，草稿由骨干token加这 <span class="paper-math">&#92;(k&#92;)</span> 个token组成，共 <span class="paper-math">&#92;(k+1&#92;)</span> 个。冻结骨干对草稿做贪心验证，保留与骨干贪心预测一致的最长前缀后继续生成。与基线的差异在于：标准解码每步只提交一个token，而CADENCE在验证保护下按上下文自适应地一次推进多个token。

### 实验设计与论证方式

- 实现上，骨干为冻结的Llama-3.1-8B-Instruct，五个高斯头对应跨度 <span class="paper-math">&#92;(k&#92;in&#92;&#123;1,&#92;ldots,5&#92;&#125;&#92;)</span>，潜维512；训练数据为用该骨干生成的UltraChat-ShareGPT对话集。三阶段训练分别用AdamW：池化器与解码器预训练（学习率 <span class="paper-math">&#92;(3&#92;times10^&#123;-4&#125;&#92;)</span>）、高斯头与解码器联合训练两轮（学习率 <span class="paper-math">&#92;(10^&#123;-4&#125;&#92;)</span>，1000步warmup）、路由器一轮（学习率 <span class="paper-math">&#92;(3&#92;times10^&#123;-4&#125;&#92;)</span>，300步warmup），后两阶段有效批大小16、梯度范数裁剪1.0。
- 评测覆盖三类生成任务：Alpaca（指令跟随与自由文本）、GSM8K（数学推理）、HumanEval（代码生成）。指标包括token接受率（验证后保留token数占草拟token数比例）、全草稿接受率（草稿全部被接受的比例）、平均接受长度 <span class="paper-math">&#92;(&#92;tau&#92;)</span>（每个验证步实际提交的token数）以及相对同一骨干标准自回归解码的吞吐加速。论文未报告线上或AB实验，材料中也未见开源代码声明，本次未核验仓库。
- 比较设计有三组：一是自适应与固定跨度对照——两者用相同的高斯头和解码器，仅区别在路由器是否按位置选跨度，用于隔离“选择”本身的贡献；二是路由器输入消融——仅上下文 versus 上下文加高斯参数；三是整体系统与标准贪心解码的吞吐对比。附录还在80条Alpaca提示的每个答案token上核对路由器与“最大完全匹配跨度”标签的一致性。

### 结果与证据

- 在三个基准上，token接受率随预测跨度增大而下降，但路由器选中位置上的接受率始终高于把同一跨度应用到所有位置的固定跨度生成，短跨度处也有约十个百分点的提升。这说明学习到的路由确实挑出了多token预测更可能成功的上下文；但由于接受率是在路由选中的位置上条件化统计的，该对比衡量的是跨度选择的有效性，不能直接推出整体生成效率的提升。（Section 5.1）

  > At <span class="paper-math">&#92;(k=4&#92;)</span> , for example, CADENCE achieves token acceptance rates of 51.7%, 64.3%, and 60.5% on GSM8K, HumanEval, and Alpaca, respectively, compared with 37.7%, 35.8%, and 36.3% under fixed-horizon generation. This pattern is also observed at shorter horizons, with improvements of approximately 9–10 percentage points at <span class="paper-math">&#92;(k=1&#92;)</span> across all three benchmarks.

- 在Alpaca上，把预测的高斯参数加入路由器输入后，各跨度的平均接受长度、token接受率和全草稿接受率三项指标均优于仅用骨干上下文的路由器，尝试多token生成的步骤占比和整体平均接受长度也提高。这支持高斯参数提供了骨干上下文之外的互补信息；该消融仅在Alpaca报告，其他任务上是否同样成立未验证。（Table 2, Section 5.3）

  > At <span class="paper-math">&#92;(k=4&#92;)</span> , token acceptance increases from 56.9% to 60.5%, while full-draft acceptance improves from 21.5% to 31.3%. At <span class="paper-math">&#92;(k=5&#92;)</span> , mean accepted length increases from 3.27 to 3.57 tokens. At the generation level, the proportion of steps attempting multi-token generation increases from 47.1% to 50.0%, while the overall mean accepted length improves from 1.50 to 1.56 tokens.

- 相对同一冻结骨干的标准贪心自回归解码，CADENCE在三个评测基准上均取得高于一倍的生成吞吐加速，且论文声称保持骨干的生成输出不变。该结果基于贪心验证设定和单一骨干，不能外推到采样解码或其他模型；加速倍数是吞吐比值，不代表时延按同比例下降。（Table 3, Section 5.4）

  > Table 3 reports speedups of 1.28 <span class="paper-math">&#92;(&#92;times&#92;)</span> , 1.28 <span class="paper-math">&#92;(&#92;times&#92;)</span> , and 1.3 <span class="paper-math">&#92;(&#92;times&#92;)</span> on Alpaca, GSM8K, and HumanEval, respectively. These results demonstrate that adaptive-granularity generation can preserve the autoregressive backbone’s outputs while providing additional computational benefits.

### 与小组方向的关联

论文属于模型架构设计方向，核心是Attention池化、Perceiver式交叉注意力解码与学习式跨度路由的组合，命中小组对模型架构与Attention机制的兴趣；其“按上下文选择预测多远”的思路对生成式推荐中多token/语义ID预测的粒度控制有借鉴潜力。限制是仅一个骨干、贪心验证设定，且未在推荐检索场景验证。

### 局限与阅读边界

- 作者承认的局限有三点：其一，路由器决策偏保守，有时在更长延续本可被接受时仍选择短跨度或回退，未来需要能平衡生成进度与计算成本的路由目标；其二，实验仅限Llama-3.1-8B-Instruct单一骨干，跨模型规模与家族的迁移未验证；其三，方法依赖骨干验证来阻止错误延续传播，无验证模式下的行为未被系统评估。
- 从材料可合理提出的验证问题：所有结果均在贪心验证与贪心解码下取得，采样解码（温度大于零）时草稿接受率与吞吐收益是否保持，论文未给出；附录显示路由器与精确匹配标签的一致率约六成，且在答案开头等长匹配更常见处一致率更低，说明路由仍有明显改进空间；加速比约1.3倍属中等幅度，额外模块（高斯头、解码器、路由器）的显存与计算开销未详细报告。
- 本次阅读范围方面：论文未报告线上服务或高并发场景的结果，而相关工作指出不加区分地验证长草稿在高并发下会浪费目标模型批容量，因此CADENCE在真实服务负载下的收益是待验证问题；开源代码状态本次未核验，复现环境无法确认。

<span id="digest-content-ebc856c5582a9b933f5c4efa61a864381267e88aadd2f9135a713089ac1bfd11" hidden></span>
