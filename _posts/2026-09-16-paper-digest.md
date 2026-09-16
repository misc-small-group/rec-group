---
layout: post
title: 2026-09-16 论文速报合集
date: 2026-09-16 00:00:00 +0800
permalink: /posts/2026-09-16-paper-digest/
categories:
- 论文速报
tags:
- 检索阶段多样性
- 个性化分桶
- 在线参数调优
- A/B 实验
- 工业推荐系统
- Agentic RL
- 工具使用
- 虚假相关
- LLM代理
- 奖励设计
- 预训练
- span掩码
- 掩码语言模型
- 位置约束
- NLU基准
- 扩散语言模型
- 寄存器令牌
- 有界状态推理
- 模型结构设计
- 强化学习
- 可解释性
- LLM Agent
- 对齐训练
- 密度比估计
- 多轮推理
- 模仿学习
- RAG
- 信息检索
- 忠实度评估
- 开源权重模型
- 科学应用
- 专家评估
- 源溯源
- 查询分诊
- 可信检索
description: 今日收录 7 篇与小组方向相关的论文。
comments: true
math: true
papers:
- arxiv_id: '2609.16452'
  arxiv_version: 1
  title: 'PCap: Personalized Retrieval-Stage Diversity Capping in Facebook Marketplace'
- arxiv_id: '2609.16268'
  arxiv_version: 1
  title: 'Spurious Tool Use: When RL Agents Learn the Wrong Reason to Act'
- arxiv_id: '2609.16061'
  arxiv_version: 1
  title: 'POSPAN: Position-Constrained Span Masking for Language Model Pre-training'
- arxiv_id: '2609.16372'
  arxiv_version: 1
  title: Register Tokens for Bounded-State Reasoning in Diffusion Language Models
- arxiv_id: '2609.16760'
  arxiv_version: 1
  title: Turn-level Multiscale Density Ratio Estimation for LLM Agents
- arxiv_id: '2609.16519'
  arxiv_version: 1
  title: 'AquiLLM: Evaluating Faithfulness in Open-Weight RAG-LLM Systems for Scientific
    Research'
- arxiv_id: '2609.16564'
  arxiv_version: 1
  title: Query-Aware Source-Risk Triage for Retrieval-Augmented Generation
paper_pipeline:
  schema: 1
  kind: digest
  provider: openrouter
  model: z-ai/glm-5.3-flash
  source_hash: dc42d49f3927499107ad34a186e9fc35d5ccf4d3c0208a74cdf8d9aa3e564803
  generated_date: '2026-09-16'
  render_hash: 0ddc2c9b2a54682a0b00783d17d519e8b5c8c87756a286cba1ce24798c175b2e
institutions:
- Meta
- Berkeley
- Stanford
- UCLA
- JD.com
- Microsoft
- Alibaba
- Google
---

| 排名 | 评分 | 论文 | 机构 | arXiv 链接 | 主题 |
| ---: | ---: | --- | --- | --- | --- |
| 1 | 9 | [PCap: Personalized Retrieval-Stage Diversity Capping in Facebook Marketplace](#arxiv-2609-16452) | Meta | [2609.16452](https://arxiv.org/abs/2609.16452) | 检索阶段多样性、个性化分桶、在线参数调优、A/B 实验、工业推荐系统 |
| 2 | 8 | [Spurious Tool Use: When RL Agents Learn the Wrong Reason to Act](#arxiv-2609-16268) | Berkeley、Stanford、UCLA | [2609.16268](https://arxiv.org/abs/2609.16268) | Agentic RL、工具使用、虚假相关、LLM代理、奖励设计 |
| 3 | 7 | [POSPAN: Position-Constrained Span Masking for Language Model Pre-training](#arxiv-2609-16061) | JD.com | [2609.16061](https://arxiv.org/abs/2609.16061) | 预训练、span掩码、掩码语言模型、位置约束、NLU基准 |
| 4 | 7 | [Register Tokens for Bounded-State Reasoning in Diffusion Language Models](#arxiv-2609-16372) | Microsoft | [2609.16372](https://arxiv.org/abs/2609.16372) | 扩散语言模型、寄存器令牌、有界状态推理、模型结构设计、强化学习、可解释性 |
| 5 | 7 | [Turn-level Multiscale Density Ratio Estimation for LLM Agents](#arxiv-2609-16760) | Alibaba | [2609.16760](https://arxiv.org/abs/2609.16760) | LLM Agent、Agentic RL、对齐训练、密度比估计、多轮推理、模仿学习 |
| 6 | 6 | [AquiLLM: Evaluating Faithfulness in Open-Weight RAG-LLM Systems for Scientific Research](#arxiv-2609-16519) | Berkeley、UCLA | [2609.16519](https://arxiv.org/abs/2609.16519) | RAG、信息检索、忠实度评估、开源权重模型、科学应用、专家评估 |
| 7 | 6 | [Query-Aware Source-Risk Triage for Retrieval-Augmented Generation](#arxiv-2609-16564) | Google | [2609.16564](https://arxiv.org/abs/2609.16564) | RAG、信息检索、源溯源、查询分诊、可信检索 |

今日收录 **7** 篇论文。评分为 10 分制阅读推荐度：方向相关性 4 分、方法贡献 3 分、实验证据或论证支撑 3 分；按总分降序排列，同分按 arXiv 编号排序。机构列为已识别的命中机构。点击论文标题跳转正文。各篇阅读范围不同，完整结论请核对原文。

## PCap: Personalized Retrieval-Stage Diversity Capping in Facebook Marketplace {#arxiv-2609-16452}

**作者：** Guangchao Yuan, Janis Fuh, Christopher Choate, Xun Tang, Wenqi Zhu, Chengyi Zhang, Pavan Kumar Paalya Chandrashekar, Jiang Han, Jiangyuan Li, Hongyan Wang, Shuting Wang

**命中的作者机构：** Meta

**作者单位原文：** Meta , Menlo Park , CA , USA；Meta , Boston , MA , USA；Meta；gcyuan@meta.com；jfuh@meta.com；cchoate@meta.com

**论文：** [arXiv](https://arxiv.org/abs/2609.16452) · [本次阅读版本 v1](https://arxiv.org/abs/2609.16452v1)

阅读范围：完整 PDF，共 5 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

We propose a personalized capping framework (PCap) to improve the diversity in Facebook Marketplace by introducing user-level diversity constraints at the retrieval stage. PCap models individual diversity preferences using Shannon entropy-based scoring, segments users into diversity buckets, and applies personalized category caps during multi-source candidate retrieval. To navigate the high-dimensional parameter space of per-bucket caps, we leverage an automated online optimization method called Parameter Tuning Sequence. Large-scale online experiments demonstrate that PCap significantly improves users' browsing experience shown in engagement metrics. This work provides practical insights into integrating personalized diversity into industrial retrieval systems.

### 一句话速览

论文在 Facebook Marketplace 检索阶段引入用户级多样性约束：用香农熵刻画用户多样性偏好并分成六桶，对多路召回的各类目候选施加个性化上限，再用在线参数调优框架 PTS 自动搜索各桶乘数。两阶段大规模 A/B 实验显示个性化上限在浏览、点击、回访等参与指标上取得统计显著提升，延迟开销极小，适合工业检索系统参考。

### 研究动机

- Facebook Marketplace 的浏览信息流向用户推荐与其兴趣匹配的商品，推荐质量直接影响满意度和留存。现有推荐器依赖用户历史互动，容易形成反馈循环：系统持续推送最感兴趣的内容，候选池类目趋于集中、多样性下降。已有个性化多样性工作多停留在公开数据集的离线实验，或部署在排序阶段调整排序列表；短视频平台的全链路实践结论认为排序是最合适的干预阶段。
- 作者指出的开放问题是：在严格延迟和可扩展性约束下，把个性化多样性部署到检索阶段仍是工业界未解决的挑战。检索候选分布在多个索引分片上，没有全局相关性分数供 MMR、DPP 这类排序重排方法做权衡计算，与检索阶段约束系统性不兼容。PCap 要回答两个问题：检索阶段的多样性上限能否改善用户体验；在统一上限之上，细粒度个性化是否带来额外价值。

### 方法与关键设计

- PCap 的干预点在多路召回的候选检索环节。系统先用人工设计的 Facebook 商品类目体系（FPT）做内容分组，每个商品由图像-文本分类模型预测到数百个类目之一，如手机配件、汽车、家具；框架也支持任意稀疏内容特征作分组键，使系统能在组级别而非单品级别显式推理多样性。
- 个性化多样性建模分三步。第一步，对用户在滑动窗口内的点击行为计算各 FPT 类目的点击概率 <span class="paper-math">&#92;(p(c|u)&#92;)</span>，再求香农熵 <span class="paper-math">&#92;(S(u)=-&#92;sum&#95;&#123;c&#92;in C&#125;&#123;p(c|u)&#92;times&#92;log&#123;p(c|u)&#125;&#125;&#92;)</span>，熵越大说明用户历史浏览的类目越广，作为多样性偏好的代理。选熵而非原有的归一化 HHI 指标，是因为 HHI 不考虑互动量：点击四个不同类目和十个不同类目的用户 HHI 相同，但后者明显更偏好多样。
- 第二步做归一化：<span class="paper-math">&#92;(d&#95;&#123;u&#125;=&#92;frac&#123;S(U)-S(min)+l&#125;&#123;S(max)-S(min)+l&#125;&#92;)</span>，其中 <span class="paper-math">&#92;(S(max)&#92;)</span>、<span class="paper-math">&#92;(S(min)&#92;)</span> 是全体用户的最大、最小熵，<span class="paper-math">&#92;(l&#92;)</span> 控制个性化程度、越大越弱，初始取零以观察完全个性化的影响。第三步剔除点击数低于阈值的用户，把剩余用户按分数分成六桶，桶一最不偏好多样、桶六最偏好多样；分桶要求各桶人数大致均匀且用户桶归属逐日稳定，固定的小桶数在生产系统中行为可预测、开销低、对短期行为噪声鲁棒。
- 上限机制作用于分片扫描和聚合两个位置。每个召回源有固定抓取上限并超额抓取以保召回，这会使聚合候选偏向主导类目。桶级上限由召回源抓取量乘以调优的源乘数 <span class="paper-math">&#92;(f&#95;&#123;k&#125;&#92;)</span>（<span class="paper-math">&#92;(K&#92;)</span> 为全部召回源），加上基于用户桶的个性化乘数 <span class="paper-math">&#92;(m&#95;&#123;u&#125;&#92;)</span> 共同决定：偏好集中的用户获得宽松上限（允许单类目更多候选），偏好多样的用户获得更紧上限以拓宽类目曝光，同时防止单一类目组主导候选池、保留高质量相关商品。
- <span class="paper-math">&#92;(m&#95;&#123;u&#125;&#92;)</span> 由参数调优序列（PTS）在线学习。PTS 是顺序收窄区间的 A/B 流程，概念上类似在线网格搜索：每个试验臂对应一组桶乘数组合，每轮固定对照臂、把候选臂暴露在小流量数天，时长至少覆盖一个完整工作日加周末周期以捕捉主要方差来源；每轮参数包络向表现最好的配置收缩。作者解释不用贝叶斯优化或 bandit 分配，是因线上指标噪声大、复杂采集机制收益不抵开销，且均匀网格结果透明单调、与现有固定分配的评估基础设施无缝集成。

### 实验设计与论证方式

- 评估完全依赖线上 A/B 测试而非离线基线。作者的理由是：检索阶段上限会改变候选池并移动下游排序动态，离线指标难以捕捉对真实用户行为的二阶效应，离线回放也系统性低估这些效应；MMR、DPP 面向排序阶段重排，与检索约束不兼容。基线选最自然的检索阶段方案：无上限对照，以及按买家/非买家分段、段内规则统一的统一上限。
- 两阶段设计：第一阶段统一上限对比无上限，验证检索阶段上限是否改善曝光和参与度；第二阶段 PCap 对比统一上限，度量个性化增量。每阶段覆盖相当比例用户、持续数周。指标包括每日商品列表浏览量（VPV）、详情页点击（PDP）、卖家回复的买卖对话（MLI）、反映回访的会话数、衡量类目曝光广度的 HHI 多样性分数，以及信息流分页请求平均延迟；结果以带 95% 置信区间的百分比变化报告，多样性分析单独考察分页信息流中各桶的分数变化。

### 结果与证据

- 统一类目上限显著提升浏览量，确实让用户曝光到更多样的内容；但详情页点击、买卖对话和会话等深层参与指标没有显著改善，说明不考虑个体偏好的统一干预只能改变曝光、难以转化为用户行动，直接引出个性化方案。（3.2 Phase 1, Table 1）

  > No Capping To validate the premise that retrieval-stage diversity capping benefit users, we first test uniform capping against the no-capping production baseline. Uniform capping significantly increases VPV ( <span class="paper-math">&#92;(+0.3088&#92;%&#92;)</span> ), confirming that category-level caps at the retrieval stage successfully expose users to more diverse content.

- 第二阶段用 PTS 优化后的逐桶乘数对比统一上限，所有主要参与指标一致正向，浏览量、详情页点击和会话数统计显著；个性化上限比统一上限更好地对齐多样性与用户意图，且仅带来极小的额外延迟，总体仍在生产要求之内。（3.4 Phase 2, Table 2）

  > The results of the online test (Table 2 ) show consistent positive movement across all primary engagement metrics, with statistically significant improvements in VPV, PDP, and Marketplace Sessions.

- 分桶多样性分析显示 PCap 按预期方向调节各桶信息流：低多样性桶更集中、符合聚焦偏好，高多样性桶获得更广类目覆盖，其中最高多样性桶显著上升；中等桶变化很小，与 PTS 调参发现一致。（3.4.1, Table 3）

  > The results suggest that PCap modulates diversity in the intended direction across the full spectrum: less diverse cohorts ( bucket-1 and bucket-2 ) receive more concentrated feeds aligned with their focused preferences, while higher diverse users ( bucket-5 and bucket-6 ) receive broader category coverage — with bucket-6 showing a significant <span class="paper-math">&#92;(0.25&#92;%&#92;)</span> increase.

- PTS 自动调参揭示沿多样性谱系的清晰单调模式：中间桶收敛于中性乘数附近，个性化在此无可测收益；低多样性桶需要更大乘数即更宽松上限，高多样性桶收敛于更小乘数即更紧上限，说明个性化收益集中在偏好两端。（3.3.3 Empirical Insights）

  > Empirical Insights The automated tuning revealed a clear, monotonic pattern across the diversity spectrum, validating both our bucket construction and the underlying personalization hypothesis: the cap is a meaningful lever, and its optimal setting is genuinely a function of the user’s intrinsic diversity preference. (1) Users in the middle buckets ( bucket-3 and bucket-4 )

### 与小组方向的关联

论文直接命中小组的推荐系统、排序召回与个性化方向，核心贡献是把多样性干预从排序阶段前移到检索阶段，并给出可复用的在线调参工程方案，证据来自大规模真实 A/B 实验，可信度较高。限制是基线较简单、无开源信息，部分收益幅度较小，机制解释有待进一步验证。

### 局限与阅读边界

- 作者承认的局限：冷启动用户缺乏足够互动数据，无法得到个性化多样性分数；当前分组依赖语义类目体系，计划探索共互动分组；用户分桶是静态的，计划用聚类动态获取；各类目上限阈值固定，未考虑库存分布变化，计划动态调整。
- 从材料可合理提出的验证问题：基线只有无上限和按买家状态的统一上限，未与排序阶段个性化多样性或其他检索干预对比，个性化收益的相对大小难以定位；MLI 第二阶段为正向但未达统计显著，深度交易意向的提升证据较弱；多样性分数变化幅度很小，对长期留存和交易的影响未在本文时间窗口内验证。本次阅读范围方面：论文未报告开源代码，PTS 各轮参数区间、流量比例和运行轮数正文未完整给出，调参成本只能定性理解。

## Spurious Tool Use: When RL Agents Learn the Wrong Reason to Act {#arxiv-2609-16268}

**作者：** Yiwei Yang, Haoxiang Zhang, Bingbing Wen, Yao Lu, Yuchen Wu, Lei Zhang, Julian McAuley, Pan Lu, Bill Howe

**命中的作者机构：** Berkeley、Stanford、UCLA

**作者单位原文：** University of California San Diego；Stanford University；panlu@stanford.edu；lez023@ucsd.edu jmcauley@ucsd.edu panlu@stanford.edu

**论文：** [arXiv](https://arxiv.org/abs/2609.16268) · [本次阅读版本 v1](https://arxiv.org/abs/2609.16268v1)

阅读范围：完整 PDF，共 14 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Large language model (LLM) agents increasingly interleave natural language reasoning with external tools such as web search and code execution. These tool-use policies are often optimized via reinforcement learning (RL), which can amplify spurious correlations in the training data. In this work, we study when and why RL-trained agents learn shortcut tool-selection policies: invoking tools based on superficial prompt cues rather than genuine task requirements. We construct controlled synthetic environments combining factual question answering and mathematical reasoning tasks, and inject cues that are strongly correlated with specific tools during training but causally irrelevant to tool necessity. Across counterfactual evaluations where cues are present but the associated tools are not required, agents exhibit substantial shortcut behavior, with spurious tool invocation rates increasing by up to 39 percent. However, shortcut formation is not universal: across the conditions we test, it arises only when the agent has already learned to use the target tool reliably, suggesting that task competence, rather than dataset imbalance alone, is a key factor in shortcut learning. A swapped-cue analysis further shows that semantic alignment between cues and tools substantially amplifies this effect. To mitigate these failures, we introduce a dense, decision-level reward in which an LLM judge evaluates the necessity of each tool call. This tool-necessity reward effectively suppresses cue-driven tool use while preserving task performance, providing a practical approach to improving the robustness of LLM agent tool-use policies.

### 一句话速览

论文研究强化学习训练的 LLM 工具调用代理会学到的捷径行为：依据提示中的表面线索而非真实任务需求调用工具。作者在受控合成环境中注入与工具强相关但因果无关的线索，发现虚假调用率最高提升 39 个百分点，且捷径只在代理已熟练掌握目标工具时形成；提出的工具必要性奖励可消除该现象并保持准确率。

### 研究动机

- LLM 代理通过生成结构化标签调用网络搜索、代码解释器等外部工具，并用强化学习（RL）优化何时调用哪种工具，典型场景包括检索增强问答和工具增强的数学推理。评价标准通常只看最终答案是否正确。
- 已有 RL 工具使用方法普遍只在最终答案上给奖励，工具选择这一中间决策本身没有监督。作者指出一个独特失败模式：代理可能把训练中与高奖励偶然共现的表面提示特征（如格式标签）与某工具虚假关联，学会按线索而非任务需求调用工具。由于不必要的调用不一定损害答案正确性，这种捷径在只看最终答案的评测下难以被发现。论文要回答的问题是：这种捷径何时、为何形成，以及如何抑制。

### 方法与关键设计

- 论文先形式化问题：输入表示为 <span class="paper-math">&#92;( x=(x&#95;c,a) &#92;)</span>，其中 <span class="paper-math">&#92;( x&#95;c &#92;)</span> 是因果特征，<span class="paper-math">&#92;( a &#92;)</span> 是与任务无因果关系的虚假属性。定义 1 规定：若 <span class="paper-math">&#92;( &#92;pi&#95;&#92;theta(T&#95;s&#92;mid x&#95;c,a) &#92;gg &#92;pi&#95;&#92;theta(T&#95;s&#92;mid x&#95;c) &#92;)</span> 且该工具 <span class="paper-math">&#92;( T&#95;s &#92;)</span> 对任务没有实用价值（<span class="paper-math">&#92;( P(R&#123;=&#125;1&#92;mid x&#95;c,T&#95;s)&#92;leq P(R&#123;=&#125;1&#92;mid x&#95;c,T&#92;neq T&#95;s) &#92;)</span>），则策略存在工具虚假相关。关键在于虚假调用不必导致任务失败，因此结果奖励无法发现它。
- 度量方式是反事实评估组：对每个测试问题构造带线索与不带线索两个版本，计算 <span class="paper-math">&#92;( &#92;Delta&#92;text&#123;Tool&#125;&#95;&#123;Y&#92;text&#123;-&#125;N&#125;=&#92;hat&#123;&#92;pi&#125;&#95;&#123;&#92;theta&#125;(T&#95;s&#92;mid x&#95;c,a)-&#92;hat&#123;&#92;pi&#125;&#95;&#123;&#92;theta&#125;(T&#95;s&#92;mid x&#95;c) &#92;)</span>，即在不需要该工具的任务上，线索出现导致的工具调用率增量，这是全文衡量捷径强度的主要指标。
- 训练数据为受控合成环境：从 Natural Questions（适合搜索）和 DeepMath-103k（适合 Python 解释器）各采样 500 题，共 1000 题平衡训练集。将某一线索注入其中一个任务子集：搜索语义线索（如模拟网页索引标记的 WEB_INDEX、引用标签 REFERENCE、常见于检索增强流程的 answer 格式指令）注入事实问答；代码语义线索（如 Jupyter 单元头 Cell、shebang 行、CODE 标签）注入数学题。每个线索单独训练一次以隔离其影响；评测在 DeepMath、GSM8K、NQ、2Wiki 上构造同样的反事实组。
- 治理方法是工具必要性奖励：用 GPT-5 Nano 作为裁判，输入问题、工具类型和工具输入，输出每次调用的二元必要性标签；定义上，只有当胜任的模型不用该工具就无法答对时调用才是必要的，图方便的调用（简单算术、格式化）不算必要。总奖励为 <span class="paper-math">&#92;( r^&#123;&#92;text&#123;total&#125;&#125;=r^&#123;&#92;text&#123;task&#125;&#125;+&#92;sum&#95;t r^&#123;&#92;text&#123;nec&#125;&#125;&#95;t &#92;)</span>，其中不必要的调用罚 <span class="paper-math">&#92;( -&#92;alpha &#92;)</span>（取 0.5），只罚不奖以避免鼓励滥用。这样每个工具决策都获得独立于表面线索的密集反馈。
- 训练用开源 VerlTool 框架和 GRPO 算法，基座为 Qwen2.5-7B-Instruct，无额外 SFT；工具调用通过 search/python 标签从 token 生成中产生，环境返回结果作为后续生成上下文。与基线的核心差别在于：基线只在最终答案上给二元任务奖励，本文为每个工具决策附加必要性惩罚。帮助理解的一个例子：训练时事实题总带着 answer 标签并用搜索解出，测试时把该标签贴到数学题上，代理会无视数学任务去调搜索，而必要性奖励会在训练期就对数学题上的搜索调用给出惩罚。

### 实验设计与论证方式

- 实验在四个数据集上以反事实组评测：训练任务内（DeepMath、NQ）加留出的 2Wiki 和 GSM8K。指标为准确率、带/不带线索时的目标工具调用率及其差值 Δ。比较对象包括未训练模型、无线索训练基线、注入线索的训练，以及加入必要性奖励的版本；每个线索是独立训练运行，共约 30 步、批量 64、单种子。
- 消融包括三方面：一是交换线索实验，把代码语义线索注入学得好的事实任务、把搜索语义线索注入学不好的数学任务，以解耦任务胜任度与语义对齐两个因素；二是相关性强度扫描，把训练中线索与工具配对的比例从五成扫到全部；三是通过训练/验证准确率曲线观察两个任务的学习进度差异。
- 论文明确这是刻意控制变量的合成小规模环境，用于隔离捷径形成的机制，不代表真实部署环境；文中无线上实验，代码与数据构造脚本作者表示计划在录用后发布，本次未核验任何仓库。

### 结果与证据

- 把搜索语义线索注入事实类训练后，代理在不需要搜索的数学题上出现明显的不必要搜索调用：线索存在时调用率增量显著大于无线索基线，说明代理确实把提示线索当成了调用搜索的理由，而非依据任务需求决策。（Section 5.2）

  > When the cue is present at test time, the agent makes substantially more unnecessary search calls: <span class="paper-math">&#92;(&#92;Delta&#92;text&#123;Search&#125;&#92;)</span> reaches <span class="paper-math">&#92;(+19.9&#92;)</span> on DeepMath and <span class="paper-math">&#92;(+39.2&#92;)</span> on GSM8K for [WEB_INDEX_742] , and <span class="paper-math">&#92;(+21.7&#92;)</span> and <span class="paper-math">&#92;(+9.5&#92;)</span> respectively for &lt;answer&gt; .

- 对称条件下的结果形成对照：注入数学训练的代码语义线索在事实类测试上几乎没有引起额外的 Python 调用，个别条件仅有小幅上升，远小于搜索线索条件的效果，尽管两组的组间失衡程度相同。（Section 5.2）

  > Code-semantic cues produce no meaningful increase in spurious Python calls on NQ: <span class="paper-math">&#92;(&#92;Delta&#92;text&#123;Py&#125;&#92;)</span> is <span class="paper-math">&#92;(-0.3&#92;)</span> for Cell and <span class="paper-math">&#92;(+0.7&#92;)</span> for [CODE] . On 2Wiki, [CODE] shows a modest increase of <span class="paper-math">&#92;(+3.8&#92;)</span> , though this remains far smaller than the shortcut effects observed in the search-cue condition.

- 交换线索实验表明语义对齐的作用：把语义不匹配的代码线索接到已学会的事实任务上，虚假搜索调用只有边际增加、处于基线波动范围内，远低于语义对齐时的水平；作者由此提出任务胜任度决定捷径能否形成、语义对齐调节其强度，这是在所测条件下的观察而非普适结论。（Section 5.4）

  > Table 3 reports results for code-semantic cues injected into NQ, where the task is well-learned but semantic alignment is absent. Only a marginal increase in spurious search calls is observed: <span class="paper-math">&#92;(&#92;Delta&#92;text&#123;Search&#125;&#92;)</span> is <span class="paper-math">&#92;(+3.5&#92;)</span> for Cell on DeepMath and <span class="paper-math">&#92;(+0.1&#92;)</span> for [CODE] , both within baseline variance.

- 加入工具必要性奖励后，各条件下线索驱动的虚假工具调用被压到接近零，且准确率相对无线索基线保持或提升，说明对工具决策本身的显式监督能在不牺牲任务性能的情况下切断线索与工具调用的耦合。（Section 5.5）

  > use across all conditions, reducing cue-driven tool selection to near zero. Importantly, this reduction does not come at the cost of task performance: accuracy is preserved or improved relative to the no-cue baseline.

### 与小组方向的关联

对做 Agentic RL 和搜索/工具增强推理的小组很有参考价值：它揭示了只看最终答案的结果奖励会放大数据中线索与工具的虚假关联，且能力越强越易中招。工具必要性奖励提供了决策级密集反馈的可借鉴范式，可迁移到检索调用是否必要的判断上；反事实评估组也可直接用于审计自家代理。结论来自 7B 模型加小规模合成环境，迁移到真实数据前需自行验证。

### 局限与阅读边界

- 作者已承认的局限：研究在受控合成环境中进行，旨在隔离机制，结论向更真实训练环境的推广是未来工作；相关性强度阈值的跨线索、跨规模泛化是开放问题；必要性裁判依赖 GPT-5 Nano，可能引入该模型自身的偏差，作者视其为实用设计而非必要性的权威标准。
- 从材料可合理提出的验证问题：实验为单种子、每条件仅约三十步训练，DeepMath 上任务始终未学会，'任务胜任度促成捷径'的因果解释部分依赖这一学习进度的巧合差异；100% 相关下 GSM8K 的准确率下降与捷径共存，必要性奖励对更复杂多工具场景和更大模型的效果均未验证。裁判判定必要性本身在边界情形（如模型确能直接答对但调用了工具）的定义是否稳定也值得检验。
- 本次阅读范围的限制：代码与数据脚本按作者计划在录用后发布，本次未核验任何开源仓库或复现环境；评测集规模与反事实组的具体样本数在已读正文中未详列，无法评估各 Δ 估计的方差。

## POSPAN: Position-Constrained Span Masking for Language Model Pre-training {#arxiv-2609-16061}

**作者：** Zhenyu Zhang, Lei Shen, Yuming Zhao, Meng Chen, Xiaodong He

**命中的作者机构：** JD.com

**作者单位原文：** JD AI Research , China；JD AI Research

**论文：** [arXiv](https://arxiv.org/abs/2609.16061) · [本次阅读版本 v1](https://arxiv.org/abs/2609.16061v1)

阅读范围：完整 PDF，共 5 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Span-level masked language modeling (MLM) has shown to be advantageous to pre-trained language models over the original single-token MLM, as entities/phrases and their dependencies are critical to language understanding. Previous works only consider span length with some discrete distributions, while the dependencies among spans are ignored, i.e., assuming that the positions of masked spans are uniformly distributed. In this paper, we present POSPAN, a general framework to allow diverse position-constrained span masking strategies via the combination of span length distribution and position constraint distribution, which unifies all existing span-level masking methods. To verify the effectiveness of POSPAN in pre-training, we evaluate it on the datasets from several NLU benchmarks. Experimental results indicate that the position constraint is capable of enhancing span-level masking broadly, and our best POSPAN setting consistently outperforms its span-length-only counterparts and vanilla MLM. We also conduct theoretical analysis for the position constraint in masked language models to shed light on the reason why POSPAN works well, demonstrating the rationality and necessity of POSPAN.

### 一句话速览

论文研究语言模型预训练中的跨度掩码策略，提出POSPAN框架：用跨度长度分布与位置约束分布共同控制掩码，统一已有span级MLM方法。在DeBERTaV3后训练与多个NLU基准上，最优设置稳定超过仅控制长度的基线和原始MLM，并给出理论解释。适用于预训练目标设计，未涉及线上推荐或检索场景。

### 研究动机

- 掩码语言建模（MLM，即把输入中部分token替换为特殊符号并让模型根据上下文还原）是BERT类模型预训练的核心任务。原始MLM只随机遮盖单个token，忽略了短语的整体语义和实体的内部依赖，因此后续工作提出span级掩码：把一段连续token整体遮住，让模型学习短语、实体等更丰富的语义单元。
- 然而已有span级掩码方法只设计跨度长度分布（如何决定遮多长），默认被遮span的位置彼此独立、均匀分布。作者认为自然语言中短语和实体在上下文中有强依赖，随机选位置可能导致次优的掩码选择，不是好的归纳偏置。
- 本文要回答的问题是：给span掩码加上位置约束（控制相邻被遮span之间的距离）能否普遍提升预训练效果，以及为什么有效。作者提出通用框架POSPAN，把长度分布与位置约束分布组合，统一已有方法并探索新策略。

### 方法与关键设计

- POSPAN把span掩码分解为两个因素：每个span的长度，以及span的位置（从哪里开始遮）。给定含m个被遮span的序列，作者用两个分布形式化：长度服从跨度长度分布 <span class="paper-math">&#92;(F&#95;M&#92;)</span>，相邻span的起始位置距离 <span class="paper-math">&#92;(|pos&#95;&#123;i+1&#125;-pos&#95;i|&#92;)</span> 服从位置约束分布 <span class="paper-math">&#92;(F&#95;D&#92;)</span>，其中N是输入token长度。已有方法只设计 <span class="paper-math">&#92;(F&#95;M&#92;)</span>，位置随机选取；作者推导出随机选位置背后隐含的多项式分布 <span class="paper-math">&#92;(polyn(r&#95;m,N)&#92;)</span>，即所有已有方法可统一为 <span class="paper-math">&#92;(F&#95;M&#92;)</span> 不同而 <span class="paper-math">&#92;(F&#95;D&#92;)</span> 相同的POSPAN特例。
- 推导过程帮助理解如下：固定掩码率 <span class="paper-math">&#92;(r&#95;m&#92;)</span> 时共遮 <span class="paper-math">&#92;(r&#95;m N&#92;)</span> 个token，位置约束d的范围是 <span class="paper-math">&#92;(0&#92;le d&#92;le (1-r&#95;m)N&#92;)</span>。对随机放置的两个span，作者通过对所有位置积分得到距离不超过d的概率 <span class="paper-math">&#92;(&#92;hat&#123;F&#95;D&#125;(d)=&#92;frac&#123;2Nd-d^2&#125;&#123;c&#125;&#92;)</span>，其中 <span class="paper-math">&#92;(c=(1-r&#95;m^2)N^2&#92;)</span> 是归一化常数。该分布偏向小间距，作者认为这恰恰阻碍了span间依赖的建模。
- 理论分析部分，作者引入隐变量 <span class="paper-math">&#92;(R&#95;&#123;ij&#125;&#92;)</span> 表示两个span之间的语义依赖，分三种情形：几乎无依赖、前者是后者的前提、后者是前者的前提。通过贝叶斯分解，掩码span预测的对数似然可拆成两项：一项是 <span class="paper-math">&#92;(&#92;log P(R&#95;&#123;ij&#125;|S&#95;i,S&#95;j)&#92;)</span>（由 <span class="paper-math">&#92;(F&#95;D&#92;)</span> 控制的依赖项），另一项是 <span class="paper-math">&#92;(&#92;log P(S&#95;i,S&#95;j)&#92;)</span>（由 <span class="paper-math">&#92;(F&#95;M&#92;)</span> 控制的span自身项）。已有工作只优化第二项；对有依赖的情形，第一项不可忽略，<span class="paper-math">&#92;(F&#95;D&#92;)</span> 设置不当会损害模型。
- 进一步，作者把span预测概率用span边界token估计，span间的距离依赖由两span之间的d个未遮token集合 <span class="paper-math">&#92;(I&#95;&#123;ij&#125;&#92;)</span> 反映，并假设给定 <span class="paper-math">&#92;(R&#95;&#123;ij&#125;&#92;)</span> 后 <span class="paper-math">&#92;(I&#95;&#123;ij&#125;&#92;)</span> 与span内token独立，从而 <span class="paper-math">&#92;(P(R&#95;&#123;ij&#125;|S&#95;i,S&#95;j)&#92;propto P(R&#95;&#123;ij&#125;|d)&#92;)</span>。最终预训练目标分解为两个损失：<span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;=&#92;mathcal&#123;L&#125;&#95;R+&#92;mathcal&#123;L&#125;&#95;S&#92;)</span>，其中 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;S&#92;)</span> 是span长度损失（期望最大化 <span class="paper-math">&#92;(&#92;log P(S&#95;i|len&#95;i)&#92;)</span>），<span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;R&#92;)</span> 是span依赖损失（期望最大化 <span class="paper-math">&#92;(&#92;log P(R&#95;&#123;ij&#125;|F&#95;D)&#92;)</span>）。这里 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;R&#92;)</span> 并非新增可训练损失项，而是说明 <span class="paper-math">&#92;(F&#95;D&#92;)</span> 作为先验影响优化上界。
- 算法层面，POSPAN（Algorithm 1）先从 <span class="paper-math">&#92;(F&#95;M&#92;)</span> 采样N个span长度、从 <span class="paper-math">&#92;(F&#95;D&#92;)</span> 采样N个span间距，分别存入向量M和D；然后沿token位置交替累加间距和长度，交替决定“不遮”与“遮”的区段，收集所有候选span；再随机删去部分span直到被遮token数满足掩码率要求；最后把选中token替换为。掩码细节沿用BERT惯例：遮15%的token，其中八成替换为、一成随机替换、一成保留。
- 通过组合不同 <span class="paper-math">&#92;(F&#95;M&#92;)</span> 与 <span class="paper-math">&#92;(F&#95;D&#92;)</span>，POSPAN可复现全部已有掩码方法并构造新策略。作者考察四种分布：泊松（Pois）、正态（Norm）、几何（Geo）和均匀（Rand），<span class="paper-math">&#92;(F&#95;M&#92;)</span> 的均值约为4、<span class="paper-math">&#92;(F&#95;D&#92;)</span> 的均值约为5，以与已有方法可比；超参数通过网格搜索确定。与基线的核心差异在于：基线只控制 <span class="paper-math">&#92;(F&#95;M&#92;)</span> 而 <span class="paper-math">&#92;(F&#95;D&#92;)</span> 固定为随机隐含分布，POSPAN显式设计 <span class="paper-math">&#92;(F&#95;D&#92;)</span>。

### 实验设计与论证方式

- 实验采用后训练（即在已有预训练checkpoint上做第二阶段预训练）而非从头预训练：从各任务训练集收集文本并去除标签，约150万句、2.5亿token用于后训练，再在各下游数据集上微调。骨干是公开的deberta-v3-xsmall（12层、6个注意力头，隐藏层与嵌入维度384，中间层1536）；后训练20轮、batch size 512、LAMB优化器、峰值学习率1e-4；微调10轮，报告每个数据集10次运行的平均分，并用Wilcoxon检验（p&lt;0.05）标注最优结果。
- 任务覆盖四类NLU：命名实体识别（CoNLL 2003）、句子对分类（MNLI、MRPC、QNLI）、问答（BoolQ、COPA）和机器阅读理解（ReCoRD、SQuAD v2.0、RACE）。比较对象包括：不做后训练的DeBERTaV3原始checkpoint、单token掩码的MLM、固定长度4的Fixed、整词掩码WWM、N-gram掩码，以及从几何/泊松分布采样长度的Geo和Pois。这些基线 <span class="paper-math">&#92;(F&#95;M&#92;)</span> 各异但 <span class="paper-math">&#92;(F&#95;D&#92;)</span> 都是随机隐含分布，与POSPAN形成受控对比。
- 消融方面，作者将WWM、Geo、Pois分别与不同 <span class="paper-math">&#92;(F&#95;D&#92;)</span> 组合，在GLUE上观察位置约束分布的影响（Figure 1，x轴为不同 <span class="paper-math">&#92;(F&#95;D&#92;)</span>，y轴为GLUE平均分，图中polyn代表仅控长度的对照）。需要注意这是离线学术基准上的后训练实验，论文未报告任何线上或AB实验，本次也未核验开源代码。

### 结果与证据

- 在九个NLU数据集上，POSPAN取得整体最优表现，并在常识推理、问答和阅读理解等任务上超过此前最好的span级掩码基线。作者将此归因于位置约束的引入；但这是小模型后训练下的离线结果，不能直接推广到从头预训练或线上场景。（Section 3.2 Main Results）

  > Our proposed POSPAN obtained the best performance across different tasks. Specially, POSPAN surpassed the previous best baselines by 1.8%, 0.9%, 0.6% on COPA, BoolQ, RACE respectively. It demonstrates the superiority and necessity of position constraint for span masking.

- 主结果表显示，所有后训练方法都优于不做后训练的DeBERTaV3基线，span级掩码普遍优于单token掩码，而带位置约束的POSPAN两个设置在多数列上领先，例如在阅读理解和问答任务上达到表中最高分。该表支持位置约束带来一致增益的结论，但各列差距幅度不一，个别任务上与最强基线接近。（Table 2）

  图表观察（PDF 第 4 页）：Table 2（第4页）列出各方法在CoNLL、MNLI(m/mm)、MRPC、QNLI、BoolQ、COPA、ReCoRD、SQuAD、RACE上的得分：DeBERTaV3基线为94.9/88.1/88.3/87.0/92.4/80.1/70.3/56.5/44.6/84.8/82.0/52.0；最强基线Geo为95.7/88.5/88.7/88.9/93.1/81.3/73.2/56.8/45.1/85.0/82.5/52.5；POSPAN(Geo-Pois)为95.9/88.8/89.0/89.2/93.4/81.6/75.7/57.3/45.6/85.4/82.5/52.8；POSPAN(Pois-Pois)为95.8/88.9/89.3/88.2/93.2/81.9/75.6/57.1/45.3/85.6/82.7/53.1，其中COPA 75.7、RACE 53.1为全表最高。

- 分布消融图表明位置约束分布的选择对性能影响显著：同一 <span class="paper-math">&#92;(F&#95;M&#92;)</span> 下更换 <span class="paper-math">&#92;(F&#95;D&#92;)</span> 既能带来提升也可能造成下降，且偏向小间距的分布（如几何分布）一致地损害性能，泊松分布相对更优。这支持位置约束并非可有可无的结论，但分布优劣的解释是作者推测，且仅基于GLUE平均分。（Figure 1）

  图表观察（PDF 第 4 页）：Figure 1（第4页）x轴为位置约束分布（Geo、polyn、Rand、Norm、Pois），y轴为GLUE平均分（约85.8–85.8区间内波动）。三条曲线分别对应WWM、Geo、Pois三种 <span class="paper-math">&#92;(F&#95;M&#92;)</span>：WWM曲线从Geo约85.9升至Pois约85.8附近（图中标注85.2→85.5→85.4→85.3→85.3等点）；Geo曲线在polyn处约85.5、Pois处约85.8；Pois曲线在polyn处约85.4、Pois处约85.6。整体趋势为Pois作为 <span class="paper-math">&#92;(F&#95;D&#92;)</span> 时得分最高，Geo作为 <span class="paper-math">&#92;(F&#95;D&#92;)</span> 时最低。

### 与小组方向的关联

论文属于兴趣中“模型架构设计、预训练”方向，核心是把span掩码从只控长度扩展到同时控位置距离，框架统一性强、理论分析清晰，可借鉴到语义ID或文档表示的预训练目标设计中。证据方面有跨九个数据集的对比和分布消融，但仅在小模型上做后训练，且未报告线上结果与开源代码，收益需自行验证。

### 局限与阅读边界

- 作者承认的局限较明确：实验采用后训练而非从头预训练，结论建立在deberta-v3-xsmall这一小模型和约2.5亿token的后训练语料上，位置约束在更大模型、更大语料和从头预训练下是否仍有效，论文未验证；作者也在未来工作中提出要设计更好的 <span class="paper-math">&#92;(F&#95;M&#92;)</span> 与 <span class="paper-math">&#92;(F&#95;D&#92;)</span>。
- 从材料可合理提出的验证问题：最优分布组合（如Geo-Pois、Pois-Pois）是通过网格搜索选出的，存在对评测集过拟合超参数的风险；Figure 1显示 <span class="paper-math">&#92;(F&#95;D&#92;sim Geo&#92;)</span> 会一致地损害性能，说明位置约束的收益依赖分布形态，其与语言依赖长度关系的解释（离散分布更优）是作者推测，需在更多语料上检验。此外提升幅度总体较小，部分数据集差异接近噪声水平，尽管有显著性检验，跨任务的一致增益仍需独立复现。
- 本次阅读范围的限制：论文为5页短文，未提供训练稳定性和计算开销的详细报告，也未附代码链接，本次未核验开源情况；理论分析基于预测独立性等简化假设，属于解释性论证而非严格证明，不能据此断言位置约束在所有预训练设置下都有收益。

## Register Tokens for Bounded-State Reasoning in Diffusion Language Models {#arxiv-2609-16372}

**作者：** Albert Ge, Chandan Singh, Yufan Zhuang, Xiaodong Liu, Jianfeng Gao, Frederic Sala

**命中的作者机构：** Microsoft

**作者单位原文：** Microsoft Research

**论文：** [arXiv](https://arxiv.org/abs/2609.16372) · [本次阅读版本 v1](https://arxiv.org/abs/2609.16372v1)

阅读范围：完整 PDF，共 40 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Masked diffusion language models (dLLMs) generate text by iteratively denoising masked tokens with bidirectional attention. Extending reasoning across generation chunks normally requires keeping earlier generated text in context. We ask whether a dLLM can instead continue reasoning after that text is cleared, using only a fixed-size carried state. We implement this state as a small number of register tokens: dedicated fixed-position tokens whose continuous hidden states are trained to carry reasoning progress across generation chunks. We post-train dLLMs to decode a chunk of text, clear it while preserving the register values, and continue decoding from the prompt and carried state. In our main comparisons on LLaDA and Dream, registers outperform discrete-text carry on every benchmark, with gains of up to 8.5 points on math and 19.5 points on code. Registers are especially effective for bounded code generation, where correct programs usually span several chunks. Finally, registers can be further refined with reinforcement learning on long-horizon reasoning tasks.

### 一句话速览

研究扩散语言模型在生成块被清空后能否仅靠固定大小的携带状态继续推理。作者提出寄存器令牌：固定位置的连续隐藏状态，经分块SFT与分块diffu-GRPO训练跨块携带推理进度。在LLaDA与Dream上，寄存器在所有基准上优于离散文本携带，代码生成优势最大，线性探针可解码出运行总和等状态变量。

### 研究动机

- 掩码扩散语言模型（dLLM）通过双向注意力迭代去噪被掩码令牌来并行生成文本。当生成超过单窗口时，标准做法是把已生成文本追加进上下文，注意力开销随总生成长度平方增长；已有改进dLLM推理的SFT和RL方法也都保留先前文本。本文提出更极端的问题：每个生成块结束后清空已生成文本，模型能否仅靠固定大小的携带状态继续推理？这对应有界状态多块推理设定，活跃窗口和携带状态大小与生成块数无关。
- 携带状态可以是保留最后几个生成令牌的离散文本或压缩摘要，但作者认为纯文本携带受限于令牌可表达的内容；关键观察是dLLM双向注意力使固定位置在解码时既可读也可写（自回归模型中只读），适合做可学习的携带状态。难点是新块可直接注意提示词或自身未掩码令牌而绕过寄存器。相比并发工作MetaState（跨去噪步的循环记忆）和Reasoning with Latent Tokens（用仍掩码位置做潜在计算），本文寄存器在已完成文本被移除后跨块持久存在，并在固定位置反复读写。

### 方法与关键设计

- 推理流程：设寄存器位置 <span class="paper-math">&#92;(r&#95;1,&#92;ldots,r&#95;R&#92;)</span> 固定在提示词前部（主实验四个）。每块去噪完成后，额外对提示词和已完成块做一次前向传播，读取寄存器位置的最后层隐藏状态，得到 <span class="paper-math">&#92;(R&#92;times d&#92;)</span> 嵌入张量；下一块把这些位置的输入嵌入替换为保存值，其余提示词不变。同一位置每块被覆写，模型必须学会保留什么、替换什么。
- 训练时把长推理轨迹切成至多 <span class="paper-math">&#92;(C&#92;)</span> 令牌的块，每块用掩码令牌目标 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;mask&#125;&#125;(&#92;theta)=-&#92;mathbb&#123;E&#125;&#95;&#123;t,(c,y&#95;0),y&#95;t&#125;&#92;left[&#92;frac&#123;1&#125;&#123;t&#125;&#92;sum&#95;&#123;k&#92;in M&#95;t&#125;&#92;log p&#95;&#92;theta(y&#95;0^k&#92;mid c&#92;oplus y&#95;t)&#92;right]&#92;)</span>，其中 <span class="paper-math">&#92;(y&#95;0&#92;)</span> 是目标令牌、<span class="paper-math">&#92;(c&#92;)</span> 是干净条件上下文、<span class="paper-math">&#92;(M&#95;t&#92;)</span> 是掩码位置集合。对每个续块 <span class="paper-math">&#92;(k&gt;0&#92;)</span>，先对提示词和干净前一块做前向传播读取寄存器状态；该前向保留在计算图中，使去噪损失梯度回传到紧邻的寄存器写入，而供后续复用的状态被detach，训练内存有界。
- 标准目标有两条绕过寄存器的捷径：补全令牌可直接注意提示词从头解题；未掩码补全令牌自身可提供足够上下文。对策是：以概率 <span class="paper-math">&#92;(p&#95;&#123;&#92;mathrm&#123;prompt&#125;&#125;&#92;)</span> 对整条轨迹施加提示词掩码（补全和寄存器查询不能读提示词键），且每块做 <span class="paper-math">&#92;(M=4&#92;)</span> 次去噪传播，首次全掩码 <span class="paper-math">&#92;(t=1&#92;)</span>、其余 <span class="paper-math">&#92;(t&#92;sim&#92;mathcal&#123;U&#125;[10^&#123;-3&#125;,1]&#92;)</span>，每次传播独立做优化器步并重算寄存器写入。命题1表明：在全掩码加提示词掩码的续块上，预测损失下界为 <span class="paper-math">&#92;(H(Y&#95;j&#92;mid&#92;ell)-I(Y&#95;j;&#92;mathbf&#123;r&#125;&#92;mid&#92;ell)&#92;)</span>，只有寄存器携带关于目标的互信息才能超越忽略寄存器的最优预测器，训练压力被显式压到寄存器上。
- 对照方面：记忆令牌基线用同一提取传播、槽数和布局，但在每续块最后一次传播加重构目标 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;memory&#125;&#125;=&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;next&#125;&#125;(&#92;mathrm&#123;sg&#125;(&#92;mathbf&#123;r&#125;&#95;k))+&#92;lambda&#92;,&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;recon&#125;&#125;(&#92;mathbf&#123;t&#125;&#95;&#123;k-1&#125;,&#92;mathbf&#123;r&#125;&#95;k)&#92;)</span>，即用携带状态重构前一块（<span class="paper-math">&#92;(&#92;lambda=0.05&#92;)</span>）；离散文本基线把前一块最后四个生成令牌id放入下一块前部的四个离散槽位。
- 强化学习方面，作者提出分块diffu-GRPO：按推理时的分块携带协议采样rollout，奖励 <span class="paper-math">&#92;(r(&#92;mathbf&#123;p&#125;,&#92;cdot)&#92;in[0,1]&#92;)</span> 评估累积前缀，从首个含正确答案的前缀定义rollout级优势 <span class="paper-math">&#92;(A&#95;g&#92;)</span>，在GRPO式裁剪目标下更新。关键设计是块 <span class="paper-math">&#92;(k+1&#92;)</span> 策略更新时以梯度开启重算状态转移 <span class="paper-math">&#92;(s^g&#95;&#123;k+1&#125;=f&#95;&#92;theta(&#92;mathbf&#123;p&#125;,&#92;mathbf&#123;t&#125;^g&#95;k,s^g&#95;k)&#92;)</span> 但截断传入状态梯度，使奖励信用回传到寄存器写入计算而不做全rollout反传；离散文本携带不可微，奖励只能经下一块令牌似然到达策略。
- 帮助理解的例子：对球体体积与表面积数值相等求半径的问题，块0写出体积和表面积公式，文本被清空后寄存器携带中间结论，块1据此解出 <span class="paper-math">&#92;(r^2(r-3)=0&#92;)</span>，块2给出最终答案。作者还用合成实验研究写/读协议来源：仅任务损失时模型不使用携带槽（全BPTT也不行），作者推测是读者—写者协调失败，直接监督边界状态的辅助损失可打破僵局但跨种子不稳定，仅作为存在性证明。

### 实验设计与论证方式

- 主实验在LLaDA-8B-Base和Dream-7B-Base上做分块SFT，数据为六万条OpenMathInstruct-2与OpenCodeInstruct混合轨迹。数学用 <span class="paper-math">&#92;(C=128&#92;)</span> 令牌块、最多8块，代码用 <span class="paper-math">&#92;(C=64&#92;)</span>、最多16块，共享1024令牌总生成预算；零样本chat格式，数学取首答准确率，代码拼接各块后报pass@1。比较对象为全序列SFT（无携带）、离散文本携带、记忆令牌和寄存器，覆盖GSM8K、GSM-Hard、MATH500、Omni-MATH easy、HumanEval和MBPP。
- 主表中寄存器在全部12行优于离散文本，10行领先两个携带基线；GSM8K增益在两骨干为8.5和8.0点，最大代码增益是Dream MBPP的19.5点。意外的是全序列SFT在所有 <span class="paper-math">&#92;(C=128&#92;)</span> 数学行最高——其正确答案全部出现在第一块；寄存器相对无携带SFT的增益集中在必须跨块的代码。附录给出配对bootstrap区间：Dream MBPP寄存器对离散文本的差距区间不含零，HumanEval上的排序应视为方向性。
- 消融包括：槽数 <span class="paper-math">&#92;(N&#92;in&#92;&#123;1,4,8,16&#92;&#125;&#92;)</span> 扫描（小槽数已有效，<span class="paper-math">&#92;(N=16&#92;)</span> 需更多数据和WSD学习率衰减才反超）；分块diffu-GRPO在Countdown和LongArithmetic两个多块任务上进一步提升携带状态；carry对reset的对照、对注入状态的保范噪声干预，以及线性探针解码寄存器内容。作者还统一用首答规则重评主表数学结果。

### 结果与证据

- 寄存器在主表全部行上优于离散文本携带，并在多数行领先两个携带基线；GSM8K上对离散文本的增益在两个骨干上均明显，最大代码增益出现在Dream的MBPP。该结果支持寄存器作为更强携带机制的总体结论，但个别行领先幅度较小，作者也指出并非每个数值领先都单独显著。（Section 4.2）

  > The GSM8K gains over Discrete text are 8.5 points on LLaDA and 8.0 on Dream; the largest code gain is 19.5 points on Dream MBPP. Memory tokens lead on LLaDA GSM-Hard by 1.7 points and on Dream MATH500 by 0.2 points (one additional correct answer). Registers lead every code row. A surprising finding is that full-sequence SFT leads all eight math rows at <span class="paper-math">&#92;(C&#123;=&#125;128&#92;)</span> .

- 在代码设定下寄存器超过无携带的全序列SFT，且绝大多数寄存器成功程序跨块完成，说明携带机制在输出无法装入单窗口时最有价值；数学上全序列SFT仍领先，说明携带收益依赖续写行为而不仅是状态表示。（Section 4.2）

  > Registers are strongest on code, where the model must emit a complete program rather than a short final answer. At <span class="paper-math">&#92;(C&#123;=&#125;64&#92;)</span> , registers outperform full-sequence SFT by 12.2 and 3.5 points on LLaDA HumanEval and MBPP, and by 14.6 and 10.9 points on Dream.

- 分块diffu-GRPO后，寄存器在两个多块任务上的平均有界奖励均高于离散文本，且LongArithmetic差距更大，说明强化学习能进一步改进学到的携带状态。这些是有界奖励而非精确匹配率，超出训练范围的严格精确匹配对所有条件都很稀少。（Section 4.6）

  > Table 3 shows that registers improve over Discrete text by <span class="paper-math">&#92;(+2.6&#92;)</span> reward points on Countdown and <span class="paper-math">&#92;(+8.1&#92;)</span> on LongArithmetic. RL can therefore improve the carried state further. These values are mean bounded rewards rather than exact-match rates because both tasks give partial credit to formatted but incorrect answers.

- 线性探针显示寄存器线性可解码出最终答案、运行总和及其符号，且在模型给出答案前就能解码下一步运算，远超多数类和打乱标签对照，支持寄存器携带了紧凑状态变量而非仅是额外容量；探针是诊断性的，不直接证明因果。（Section 4.7）

  > From the first answer-emitting chunk, the final answer and running total are linearly decodable from the registers with held-out Pearson <span class="paper-math">&#92;(R&#123;=&#125;0.85&#92;)</span> and <span class="paper-math">&#92;(R&#123;=&#125;0.84&#92;)</span> , and the corresponding signs are decoded at 94.1% and 90.0% accuracy.

### 与小组方向的关联

与小组的模型架构、Attention机制和Memory with training兴趣直接相关：寄存器利用dLLM双向注意力使固定位置可读可写，是可训练记忆通道的新实例，其干预实验和线性探针方法可借鉴到记忆机制研究；与推荐/检索无直接关联。待验证方向包括更大模型与更多域的泛化、把寄存器用作长输入压缩器；多数SFT比较单种子，结论强度需注意。

### 局限与阅读边界

- 作者已承认的局限：寄存器不能替代全上下文解码，在1024令牌范围内保留完整轨迹更准确，计时研究未报告峰值内存或超出骨干上下文的表现；全序列SFT在所有 <span class="paper-math">&#92;(C=128&#92;)</span> 数学行领先，寄存器相对无携带SFT的增益只在代码上；连续与离散槽位只匹配数量而非信息容量，两者的提示词掩码概率也不同；掩码和去噪传播次数未单独消融；多数SFT比较只用一个种子，并非每个数值领先都显著；可解释性证据最强的LongArithmetic本身状态显式，属于有利设定。
- 从材料可合理提出的验证问题：合成实验显示仅任务损失无法自发产生写/读协议，需辅助状态监督且跨种子不稳定，说明8B规模下寄存器成功学习可能依赖预训练模型已有的相关能力，该机制在何种条件下可稳定习得仍是开放问题；<span class="paper-math">&#92;(N=16&#92;)</span> 的反超依赖WSD学习率衰减且单种子，作者自己也声明不构成一般缩放规律；LLaDA-Instruct试点显示基础模型配方直接迁移到指令微调初始化会退化，但缺少匹配对照，不能归因于寄存器本身。
- 本次阅读范围方面：代码声明将发布，本次未核验仓库与复现环境；无线上/AB实验证据；部分历史分析（干预、槽扫描、全上下文对比）保留原始评分器，与修正后的主表数值不可直接混用，引用时需注意标注。

## Turn-level Multiscale Density Ratio Estimation for LLM Agents {#arxiv-2609-16760}

**作者：** Zishuo Zhao, Kai Chen, Ao Li, Yuan Liu

**命中的作者机构：** Alibaba

**作者单位原文：** Alibaba Group

**论文：** [arXiv](https://arxiv.org/abs/2609.16760) · [本次阅读版本 v1](https://arxiv.org/abs/2609.16760v1)

阅读范围：完整 PDF，共 15 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

With the rapid development of Large language model (LLM), agent systems enhanced by LLMs show huge potential in being able to deal with complex tasks, especially involving multi-step thinking or interaction with tools. For applying LLM techniques with a well-designed agent paradigm, post-training of LLM in multiple agent scenarios is necessary to achieve better performance. Among the variable post-training techniques, alignment methods such as PPO, DPO, DIL, and GRPO become popular because many papers show a significant positive impact on the model's performance by punishing negative samples while keeping acceptable training complexity. However, most alignment methods address simple single-turn tasks, and there remains room for improvement for complex multi-turn tasks. We propose Turn-level Multiscale Density Ratio Estimation (tlm-DRE), which assigns different weights on corresponding turns and proposes asymmetric token-level training based on the positive-negative space gaps across multiple turns of tasks. The results of the experiment on a wide range of agent benchmarks show that the proposed method performs competitively compared to traditional alignment methods. The proposed training method enables LLMs to perform robustly in multi-turn reasoning tasks with both in-domain and out-of-domain conditions.

### 一句话速览

面向 LLM 智能体多轮任务的对齐训练问题，提出轮级多尺度密度比估计方法 tlm-DRE：用 SFT 参考策略的置信度给各轮加权，低置信度轮获得更高权重，并在 Bregman 散度框架下推导轮级加权损失。在 ALFWorld、ScienceWorld、HotpotQA 等基准上优于 ETO、DMPO、DIL 等基线，适用于离线配对训练范式。

### 研究动机

- LLM 智能体需要在复杂多轮环境中逐步交互：输入是任务描述与历史观测序列，输出是每轮的思考与动作，直到完成目标。要让模型胜任这类任务，通常先用专家轨迹做监督微调，再通过强化学习或偏好对齐方法（如 PPO、DPO、GRPO、DIL）做后训练。
- 作者指出已有对齐方法多在轨迹层面整体施加奖励或惩罚：一条失败轨迹被整体当作负样本，但其中多数轮次其实可能是正确的，这种粗粒度处理会损害性能。同时，把对齐视为密度比估计框架下的模仿学习这一路线在智能体任务上的研究还很少。
- 本文要回答的问题是：能否在密度比估计的模仿学习框架内，引入轮级多尺度加权，使训练集中在真正出错的少数关键轮次上，从而提升多轮智能体任务的对齐效果与训练的 token 效率。

### 方法与关键设计

- 任务形式化：智能体与环境交互若干轮，第 i 轮基于上下文 <span class="paper-math">&#92;(c&#95;&#123;i-1&#125;&#92;)</span>（此前各轮的思考、动作与观测）生成语言动作 <span class="paper-math">&#92;(y&#95;&#123;a&#95;i&#125;&#92;)</span>，策略为 <span class="paper-math">&#92;(&#92;pi&#95;&#92;theta(a&#95;t|c&#95;t)&#92;)</span>，当策略由 LLM 驱动时动作空间等价于语言空间。参考策略 <span class="paper-math">&#92;(&#92;pi&#95;&#123;ref&#125;&#92;)</span> 是 SFT 后的模型，用它采样得到偏好轨迹 <span class="paper-math">&#92;(&#92;boldsymbol&#123;y&#95;w&#125;&#92;)</span> 与较差轨迹 <span class="paper-math">&#92;(&#92;boldsymbol&#123;y&#95;l&#125;&#92;)</span> 组成配对数据。
- 预备知识：DPO 用 Bradley-Terry 模型直接优化配对样本的奖励差；DRE 路线把策略优化视为估计密度比 <span class="paper-math">&#92;(r&#95;&#92;theta=&#92;pi&#95;&#92;theta/&#92;pi&#95;&#123;ref&#125;&#92;)</span> 与真实密度比 <span class="paper-math">&#92;(r^&#42;=&#92;pi&#95;c/&#92;pi&#95;&#123;ref&#125;&#92;)</span> 的逼近，用 Bregman 散度 <span class="paper-math">&#92;(BR&#95;f(r^&#42;&#92;|r&#95;&#92;theta)=f(r^&#42;)-f(r&#95;&#92;theta)-&#92;partial f(r&#95;&#92;theta)(r^&#42;-r&#95;&#92;theta)&#92;)</span> 度量差距，其中 <span class="paper-math">&#92;(f&#92;)</span> 是严格凸函数，取不同 <span class="paper-math">&#92;(f&#92;)</span> 得到不同散度，如 UKL 对应 <span class="paper-math">&#92;(f(r)=r&#92;log r-r&#92;)</span>。
- 核心构造一是多尺度密度比表示：作者把整条轨迹的密度比写成各轮策略概率之商，再引入轮级权重 <span class="paper-math">&#92;(&#92;omega&#95;t&#92;)</span>，把每轮概率替换为 <span class="paper-math">&#92;(&#92;pi^&#123;&#92;omega&#95;t&#125;&#92;)</span>，得到跨轮不同尺度上的加权密度比。这一构造使散度损失天然区分不同轮次的训练强度，作者说明 token 级加权思想因 Bregman 散度的高度非线性和不对称性无法平凡推广到轮级 DRE，需要重新定义密度比函数。
- 核心构造二是轮级权重的来源：定义第 i 轮的充分性估计 <span class="paper-math">&#92;(&#92;log p&#95;i=&#92;frac&#123;1&#125;&#123;|y&#95;i|&#125;&#92;sum&#95;j &#92;log&#92;pi&#95;&#123;ref&#125;(y&#95;&#123;i,j&#125;|x,c&#95;&#123;i-1&#125;,y&#95;&#123;i,&lt;j&#125;)&#92;)</span>，即参考策略在该轮输出的平均对数概率。作者论证它衡量该轮被训练得是否充分，而非异常检测，因此权重应与置信度负相关：用阈值 <span class="paper-math">&#92;(p&#95;&#123;pivot&#125;&#92;)</span> 二值化，置信度高于阈值取低权重 <span class="paper-math">&#92;(&#92;omega&#95;L&#92;)</span>，否则取高权重 <span class="paper-math">&#92;(&#92;omega&#95;U&#92;)</span>。直觉是 SFT 后低置信度的轮次更可能是欠拟合的关键出错步，需要在后训练阶段重点修正。
- 训练目标：把加权密度比代入 Bregman 散度，并在负样本服从 <span class="paper-math">&#92;(&#92;pi&#95;&#123;ref&#125;&#92;)</span>、理想策略在选中轨迹上概率接近一的假设下，推出 tlm-DRE 损失。本文选 UKL 核，最终损失包含对负样本轨迹的密度比项，以及对正样本轨迹按轮加权、带 <span class="paper-math">&#92;(1/&#92;pi&#95;&#123;ref&#125;^&#123;&#92;omega&#95;i-1&#125;&#92;)</span> 乘积的对数比惩罚，使关键错误轮受到更强修正。帮助理解的例子：一条失败轨迹前九轮都正确，第十轮产生明显错误动作导致后续偏离目标，本方法只上调该轮权重，避免把前面正确轮次一起推向负区域。
- 训练流程与基线差异：与 ETO、DMPO 等轨迹级 DPO 变体相比，本文在 DRE 损失上叠加轮级不对称加权；与 GRPO 等在线策略方法相比，本文本质是离线模仿学习，依赖已选出的正轨迹或专家轨迹，作者也说明它不适合 GRPO 动态采样批次中难以确定唯一专家的场景。

### 实验设计与论证方式

- 数据集与协议：三个多轮环境——ALFWorld（具身家务，稀疏二元奖励）、ScienceWorld（模拟科学实验，连续奖励）、HotpotQA（多跳检索问答，用精确匹配 EM 和 F1 评价）。交互任务按测试集是否含训练中出现过的任务类型划分为 seen 与含新颖变化的 unseen。交互任务指标为平均奖励，实验在八张 A100 上完成，模型全量微调，两阶段为多轮 SFT 加一轮对齐训练，结果为多次独立运行的平均并附标准差。
- 比较对象：零样本 ReAct 提示基线（GPT 系列与 Qwen 模型）、SFT、PPO、RFT、ETO、DMPO、DIL，骨干为 Llama-2-7B 与 Qwen2.5-7B-Instruct；附录另与在线策略方法 RLOO、GRPO、GiGPO 在 GiGPO 的测试环境下对比，该协议探索步数更长、测试子集划分不同。消融包括去掉 DRE 换成线性轮加权 DPO（记为 w/o DRE）和去掉轮级加权（记为 w/o tlm，即复现的 DIL）两种。
- 超参分析：作者启发式设定置信度阈值，<span class="paper-math">&#92;(&#92;omega&#95;U&#92;)</span> 固定为使出错轮退回标准 DRE 强度，<span class="paper-math">&#92;(&#92;omega&#95;L&#92;)</span> 在若干候选值上搜索并选定统一值；附录图展示了正负样本置信度分布存在明显间隔，作为置信度加权可行性的前提证据，并建议训练前先检查该分布。

### 结果与证据

- 在两个骨干模型和两个交互环境的多数设置下，完整方法取得最好或有竞争力的平均奖励，两个消融变体均弱于完整方法，说明 DRE 框架与轮级加权各有贡献；但提升幅度有限，且均为仿真环境的离线评测，不能直接外推到真实线上系统。（Table 1 (Llama-2-7B 与 Qwen2.5-7B-Instruct 部分)）

  图表观察（PDF 第 7 页）：表 1 报告平均奖励：Llama-2-7B 组 tlm-DRE 在 ALFWorld seen/unseen、ScienceWorld seen/unseen 分别为 70.0±0.71、72.6±0.49、71.4±1.27、61.2±0.70，对比 ETO 的 68.6/72.4/68.5/61.1 与 DMPO 的 43.3/55.0/72.4/61.7；Qwen2.5-7B-Instruct 组 tlm-DRE 为 75.5±0.47、90.1±0.50、72.7±0.75、64.5±0.54，对比 SFT 70.7/83.6/71.8/61.8、ETO 75.0/86.6/69.1/62.8、DIL 73.6/88.8/71.9/63.7，消融变体 w/o DRE 为 74.8/87.3/72.3/63.4、w/o tlm 为 75.0/89.3/72.3/63.9

- 在多跳检索问答任务上，方法在精确匹配与 F1 两项指标上优于 SFT、CoH、PPO、DPO、NAT 等基线，作者据此论证方法对检索型多轮任务也适用；不过该任务探索步数较少，对长轨迹场景的验证主要依赖交互环境。（Table 2）

  > Results on Multi-Hop QA Tasks As shown in Table 2 , tlm-DRE consistently improves performance on multi-turn search-augmented QA tasks, achieving an Exact Match (EM) of 33.8 and an F1 score of 43.74 in HotpotQA, substantially outperforming strong baselines such as NAT.

- 在与在线策略方法相同的测试协议下，本方法在 ALFWorld 上的整体成功奖励超过 GiGPO 等基线，作者以此说明离线模仿式方法并非必然弱于在线 RL；但该协议与主表设置不同，两组数字不能混用比较。（Table 3 (Appendix B)）

  图表观察（PDF 第 12 页）：表 3 在 GiGPO 测试协议下的 ALFWorld 整体成绩：RLOO 为 75.5，GRPO 为 77.6，GiGPO 两种变体分别为 90.8 与 90.2，tlm-DRE 为 92.4，基模型为 Qwen2.5-7B-Instruct

- 消融分析显示轮级权重与密度比估计各自独立贡献：轮级权重倾向在未见设置中带来更大增益，作者解释为强调关键轮次有助于拟合分布外的交互模式；该解释基于跨数据集的观察趋势，不能当作单因素因果结论。（Ablation Study）

  > Specifically, turn-level weights and DRE each contribute independently, but exhibit different strengths across evaluation splits. We observe that the turn-level weights tend to provide larger gains in the unseen setting on both datasets, suggesting that emphasizing critical turns helps to better fit out-distribution interaction patterns.

### 与小组方向的关联

与小组的 Agentic RL 与 LLM 后训练兴趣直接相关：用参考策略置信度做轮级信用分配的思路简单可迁移，也提示了在多轮推荐或检索代理中区分关键步与常规步的加权训练设计。机制分析提供定性支持，但收益均在仿真基准测得，核函数与超参的稳健性证据有限，借鉴前宜先在本方任务上做置信度分布检查与消融。

### 局限与阅读边界

- 作者已承认的局限：方法基于离线采样策略，与 GRPO、GSPO 的动态采样结合后收益是否保持尚待验证；UKL 核的选取缺乏系统性分析，未比较其他 Bregman 核在任务上的差异；实验覆盖的智能体任务有限，更复杂的任务分解与工具使用场景未验证。
- 从材料可合理提出的验证问题：置信度加权的前提是 SFT 后正负样本置信度分布有明显间隔，作者也指出该思路直接用于未做领域微调的原始策略置信度时可能失效，高置信度幻觉 token 能否被修复是开放问题；关键分析依赖少量案例，轮级定位的普遍有效性需要更大规模验证；性能差距在部分设置上较小，需结合标准差判断实际意义。
- 本次阅读范围的限制：论文正文和附录未见代码仓库链接或开源声明，本次也未核验复现环境；所有结果是仿真环境的离线评测，未见任何线上实验，因而在真实推荐或检索系统中的适用性只能作为待验证设想。

## AquiLLM: Evaluating Faithfulness in Open-Weight RAG-LLM Systems for Scientific Research {#arxiv-2609-16519}

**作者：** Bernie Boscoe, Srinath Saikrishnan, Vikram Seenivasan, Jack Stark, Andrew Lizarraga, Morgan Himes, Jonathan Soriano, PJ Allen, Tuan Do

**命中的作者机构：** Berkeley、UCLA

**作者单位原文：** 1 Dept. of Computer Science, Southern Oregon University, USA 2 Dept. of Physics &amp; Astronomy, University of California, Los Angeles, USA 3 Dept. of Statistics, University of California, Los Angeles, USA 4 Dept. of Computer Science, University of California, Los Angeles, USA；boscoeb@sou.edu, srinathsai22@ucla.edu, vikrams25@ucla.edu, jstark@astro.ucla.edu, andrewlizarraga@ucla.edu, jsoriano@astro.ucla.edu, morganhimes@ucla.edu, pricep@sou.edu, tdo@astro.ucla.edu；boscoeb@sou.edu, srinathsai22@ucla.edu, vikrams25@ucla.edu,；jstark@astro.ucla.edu, andrewlizarraga@ucla.edu, jsoriano@astro.ucla.edu,；morganhimes@ucla.edu, pricep@sou.edu, tdo@astro.ucla.edu

**论文：** [arXiv](https://arxiv.org/abs/2609.16519) · [本次阅读版本 v1](https://arxiv.org/abs/2609.16519v1)

阅读范围：完整 PDF，共 14 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Scientific research increasingly relies on large, heterogeneous data sources, motivating interest in retrieval-augmented generation (RAG) systems that provide natural language access to scientific knowledge and research workflows. Researchers are exploring the viability of these systems as natural language interfaces for document search and for generating analysis code and pipeline components. At the same time, concerns about data privacy and control over research infrastructure have motivated interest in open-weight models and open-source deployments hosted within research institutions. In astronomy, this development follows a long history of computational infrastructure development, from archival databases and SQL-based systems to LLM-assisted research tools. This paper presents a domain-expert evaluation of faithfulness for AquiLLM, an open-weight, offline RAG-LLM platform designed to support scientific research groups in the use and preservation of tacit and formal knowledge. We define faithfulness as the extent to which generated responses remain grounded in retrieved scientific context without unsupported claims or omissions. We report results from an astronomy case study evaluating AquiLLM across retrieval and scientific analysis tasks. AquiLLM performs most reliably on explicit retrieval-oriented questions grounded in the RAG collection, while faithfulness degrades for queries requiring synthesis or ambiguity resolution. These results highlight both the promise and limitations of open-weight RAG-LLM systems for scientific research and demonstrate the importance of domain-expert evaluation beyond standard benchmark leaderboards.

### 一句话速览

本文介绍并评估了AquiLLM，一个开源权重、可离线部署的科研RAG-LLM平台。五位天文学家基于课题组31篇文档构建的语料，对十类问题共一百余条回答做忠实度专家评分，发现检索式问题表现最可靠，而跨文档综合与比较分析类问题忠实度显著下降，并归纳出六类典型失败模式。结论适用于单组、单域的小规模基线评估。

### 研究动机

- 科研工作流需要在分散、异构的资料上检索和推理：除正式论文外，还有未发表手稿、技术文档、数据集说明等隐性知识。传统SQL式数据库接口要求研究者熟悉表结构与查询语法，而商业AI平台又带来隐私、可复现性和成本方面的顾虑。因此科研组希望有一个本地部署、数据不出机构的自然语言知识问答系统，作为从结构化查询走向对话式科研界面的过渡。
- 然而开放权重模型通常只通过通用基准榜单评估，无法反映其在具体科研场景中的可靠性。科学问答要求回答严格锚定在检索到的上下文中，避免无依据推断。本文要回答的问题是：一个离线、开源权重的RAG-LLM系统，在领域专家眼中对不同类型的科研提问（从单文档事实检索到跨文档综合比较）的忠实度表现如何，失败集中在哪里。相关工作只覆盖了通用RAG架构与忠实度概念，本文的差异在于用领域专家在自己语料上做情境化评估，而非标准化基准。

### 方法与关键设计

- AquiLLM是模块化的浏览器端RAG-LLM工具：用户创建个人或共享文档集，文档经异步摄取管线解析、切块并索引；查询时由编排层协调检索、记忆与工具调用，将检索到的文档块拼入提示词交给生成模型。与基线方案（直接调用商业API）的关键差别在于全本地部署：生成、嵌入、重排、OCR分别由独立的开源权重模型承担，通过vLLM在同一GPU上以内存分区方式并存（PDF第3页架构图展示了摄取/索引、查询运行时、共享数据存储与本地vLLM四层结构）。
- 检索配置在论文表一中完整给出：文档切成带重叠的字符块，嵌入模型为Qwen3-VL-Embedding-2B，重排器为Qwen3-VL-Reranker-2B；查询时做混合检索，即稠密向量相似度与词法三元组匹配各取候选，候选池按固定倍数扩展后重排，再送入生成模型。这一混合设计是为了同时覆盖语义相近与术语精确匹配两类查询。
- 主对话模型是一个第三方社区微调版Qwen3.5-27B（在Claude风格数据上继续训练以引入变长思考行为），作者强调该微调没有独立技术报告或基准评估，选择依据仅是他们在自己工作流上的非正式对比。选型在推理质量、检索性能与单卡显存、时延之间权衡，体现了机构算力约束下的部署现实。
- 一个值得注意的机制是引用强制（citation enforcement）：生成管线要求回答中的引用只映射到检索工具实际返回的块，若模型不配合则触发兜底生成一条带引用的回答；界面中引用可点击并高亮原文段落，让用户直接核对声明与出处。该机制针对的正是科学场景中可信度取决于可溯源性的需求。
- 评估方法论本身也是本文贡献之一：问题按五类设计（事实检索、元数据查询、新人概念讲解、科学解释、比较科学分析），覆盖从检索到推理的复杂度梯度；专家先协作形成共识参考答案，再各自独立生成并自评回答。对其他科研组而言，这套分类法可直接迁移到自己的RAG部署上复用。

### 实验设计与论证方式

- 评估在天文学研究组进行：五位成员基于组内31篇文档（含HSC、Euclid、LSST巡天文档、组内论文与未发表手稿）构建专属集合，从候选问题池选出覆盖五类的十道代表题。每位参与者对每题独立提交至多三次并通过内置表单自评，最终得到141条带评分的回答（每题12至15条）；评分采用无文字锚点的五点量表，每条评分附带必填的定性反馈。系统评估期间禁用外部互联网访问，确保回答只基于受控语料。
- 比较对象不是其他RAG系统，而是不同问题类型之间的表现对比，以及与共识参考答案的一致性；另有探索性的评分一致性描述统计。需要注意，其中三个类别各只对应一道底层问题，其类别均值是单题结果而非可泛化的类别效应，作者对此有明确说明。论文无线上A/B实验，属离线专家评估；系统代码在GitHub公开，但评估数据集暂不公开以避免污染后续基准。附录还估算了单卡H100部署在专家云与超大规模云上的月度成本区间。

### 结果与证据

- 整体上多数回答获得较高忠实度评分，系统表现总体偏强，但仍有不小比例的回答被评为低分，说明失败并非边缘现象。该结果基于单一研究组的自评数据，不能直接外推到其他领域或其他模型配置。（Section V）

  > existing multi-rater data. V Results Across 141 cleaned responses (140 non-missing ratings), AquiLLM demonstrated generally strong faithfulness performance, with a mean rating of 3.80 (median = 4.0, SD = 1.24). Most responses were evaluated positively, with 68.6% receiving ratings of 4–5, while 17.9% received ratings of 1–2.

- 由多道题聚合的两类问题构成最稳健的对比：基于单文档的事实检索类平均分最高，而需要跨文档综合的比较科学分析类平均分最低，说明跨来源综合与比较是主要失败面。其余三类只对应单道底层问题，其均值不能读作类别效应。（Table III / Section V-A）

  > The most robust contrast, drawn from the two categories built from multiple underlying questions, is between Factual Retrieval (4 questions, <span class="paper-math">&#92;(n&#123;=&#125;60&#92;)</span> , mean 4.17) and Comparative Scientific Analysis (3 questions, <span class="paper-math">&#92;(n&#123;=&#125;39&#92;)</span> , mean 2.97), indicating that cross-source synthesis and comparison remain the primary failure surface.

- 作者报告了幻觉式科学细节的具体案例：模型在比较两个红移预测模型时报出的偏差差距是原文支持值的倍数级夸大。此为定性案例证据，说明模型会生成听起来科学但无依据的数值，不能据此推断整体错误率。（Section V-C1）

  > V-C 1 Hallucinated Scientific Details The model occasionally introduced unsupported numeric or technical claims while sounding scientifically plausible. In one comparison between two redshift prediction models, the system reported a 2.4x bias gap when the source-supported value was 1.2x.

- 评分一致性分析显示，得分最高的问题评分高度集中，而两道比较分析类问题的评分落在均值一个点内的比例最低。由于每位评分者评的是自己生成的回答，回答变异与评分者严格程度完全混淆，作者只报告两者共现，不声称因果解释。（Section V-B）

  > questions (Q4 and Q9), where only 42.9% and 46.2% of ratings, respectively, fell within one point of the mean.

### 与小组方向的关联

对小组的检索/RAG兴趣而言，本文的混合检索加引用强制机制、五类问题评估方法和六类失败模式清单都有直接借鉴价值，尤其可用于设计内部RAG系统的忠实度评测流程。局限在于结果来自单组单域的小语料专家自评，缺少与替代RAG框架的对照和组件消融；知识图谱增强检索等改进尚属计划，其收益未经实验验证，不能据此预判部署效果。

### 局限与阅读边界

- 作者明确承认的局限包括：评估仅来自同一研究组的五位天文学家，单一领域、单一开源权重模型配置，且没有与替代RAG系统的对照实验或隔离重排、候选扩展、编排贡献的组件级消融；与商业API对比因语料含未发表材料而与隐私初衷冲突。此外五点量表没有预定义文字锚点，评分一致性分析无法区分回答不稳定与评分者主观差异，作者将其定位为探索性替代而非正式信度指标。
- 从材料可合理提出的待验证问题：忠实度下降主要归因于检索层、工具调用编排还是模型推理能力，文中只是定性归因，需要作者计划的组件消融来回答；在数百至数千文档规模的语料上，检索歧义是否会加剧比较分析类失败，作者也明示未直接评估。基于自动指标的忠实度评估能否替代或补充本套专家流程，本文未做对比。
- 本次阅读范围的限制：评分原始数据与十道问题的参考答案未公开，我无法核验各题评分分布与失败模式的对应细节；表一检索参数的具体数值虽在PDF中可读，但其对结果的影响未经任何敏感性实验支持，读者不应将默认配置视为最优。系统代码公开，但本次未核验仓库内容与复现环境。

## Query-Aware Source-Risk Triage for Retrieval-Augmented Generation {#arxiv-2609-16564}

**作者：** Kainan Zhou, Gangzhen Qian, Chuhong Xu, Lu Yi

**命中的作者机构：** Google

**作者单位原文：** Google LLC

**论文：** [arXiv](https://arxiv.org/abs/2609.16564) · [本次阅读版本 v1](https://arxiv.org/abs/2609.16564v1)

阅读范围：完整 PDF，共 6 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Retrieval-augmented generation (RAG) pipelines may omit a source's material relationship to the query. We study a pre-generation triage layer that treats this relationship as query dependent. The method routes canonical query families for enhanced review and assigns retrieved pages to pass, contextualize, exclude, or review. It combines a four-dimension page score, rank-discounted family aggregation, intent-preserving query mutations, and a family-held-out router. A single-coded pilot of 200 real URLs supplies provisional calibration anchors; a 20,000-row scenario with synthetic domain identifiers supports controlled workload analysis. An oracle page gate defines a risk-coverage target for a future learned classifier. The evaluation shows why page-level frequency cannot substitute for family-level exposure and quantifies how calibration changes scenario activation. Annotation reliability remains unmeasured, and synthetic rankings omit real retrieval dynamics. The result is an auditable triage method and validation plan, not an estimate of deployed review workload, live-Web prevalence, or downstream answer-quality gains.

### 一句话速览

本文研究检索增强生成中的源风险分诊问题：检索页面与查询存在利益关系（如赞助、affiliate）但该关系在生成前被忽略。方法将页面级四维评分经排名折减聚合成查询族激活信号，并用家族留出路由器和 oracle 页面门定义未来分类器的风险—覆盖率目标。结果是可审计的分诊框架与验证计划，不含部署级实证收益。

### 研究动机

- 检索增强生成（RAG）系统将检索到的文档交给生成模型合成答案。已有工作关注引用是否支持陈述、答案是否幻觉，但存在另一类源头失败：一篇 affiliate 推荐或倡导组织的页面可能内容真实有用，但其与查询的物质利益关系（如商业利益、立场倾向）在生成前被剥离，使读者把利益相关来源当作独立证据。作者称这类失败为源侧（source-side）风险，它可能在普通排序中自然发生，而非对抗注入。
- 本文要回答的是三个有边界的问题：如何表示查询—页面关系风险、人工锚定如何影响查询族激活、未来页面分类器应满足怎样的风险—覆盖率目标。与答案级幻觉检测不同，本文把事实支持与来源溯源作为两个独立维度，且不试图给发布者打永久标签。
- 关键洞察是风险具有查询依赖性：同一个页面在比较类查询下可能构成利益冲突，在一般信息查询下则无关。因此分析单元是查询—页面对而非域名，且家族级累计暴露比单页频率更能刻画风险。

### 方法与关键设计

- 方法分两层。第一层是页面评分：两名评审对 200 个真实 URL（20 个英文审计查询、每个垂直五条查询各十条记录）按四个有序维度打分，分别是查询相关的激励或物质关系 I、方向性倡导 A、披露不透明度 O 和表观独立性 P，取值范围 <span class="paper-math">&#92;(&#92;&#123;0, 0.25, 0.5, 0.75, 1&#92;&#125;&#92;)</span>。合成公式为 <span class="paper-math">&#92;(S&#95;&#123;&#92;text&#123;page&#125;&#125;(q,u) = (I &#92;cdot A &#92;cdot O &#92;cdot P)^&#123;1/4&#125;&#92;)</span>，几何平均是刻意的合取设计：任何一维为零则复合分为零。注意该分数只是审阅优先级指数，不代表页面虚假或恶意的概率。
- 第二层是场景生成与人工锚定。构造 400 条规范查询（每垂直 100 条）、每条 50 个排名合成源观测，共 2 万行查询—页面行；合成域名不对应真实发布者，也不来自任何真实搜索引擎或爬取。为防止垂直间任意基线偏移主导负载分析，作者按公式 <span class="paper-math">&#92;(E[&#92;text&#123;clip&#125;(S&#95;&#123;&#92;text&#123;raw&#125;&#125; + &#92;delta&#95;v, 0, 1) &#92;mid v] = &#92;mu&#95;v&#92;)</span> 为每个垂直拟合一个加性截距 <span class="paper-math">&#92;(&#92;delta&#95;v&#92;)</span>，使合成分数的均值对齐人工锚点均值。仅拟合四个截距，其余结构保持冻结，因此后续激活变化可归因于声明的校准步骤。
- 家族级聚合采用排名折减：排名 <span class="paper-math">&#92;(r&#92;)</span> 的权重与 <span class="paper-math">&#92;(1/&#92;log&#95;2(r+1)&#92;)</span> 成正比并在查询内归一化，这一设计借鉴长上下文研究中证据位置影响模型使用的发现。家族分数为 <span class="paper-math">&#92;(S&#95;&#123;&#92;text&#123;query&#125;&#125;(q) = &#92;sum&#95;r w&#95;r S&#95;&#123;&#92;text&#123;page&#125;&#125;(q, u&#95;r)&#92;)</span>。当 <span class="paper-math">&#92;(S&#95;&#123;&#92;text&#123;query&#125;&#125;(q) &#92;ge &#92;tau&#92;)</span> 且至少两个成员页面也超过 <span class="paper-math">&#92;(&#92;tau&#92;)</span> 时家族激活，两页守卫防止单条极端页面决定激活；主分析 <span class="paper-math">&#92;(&#92;tau=0.50&#92;)</span>，并在 0.40 到 0.60 之间重复。
- 路由器层面，每条规范查询产生 12 个文本形式：原始表述加 11 个保持意图的变异，覆盖比较、证据优先、怀疑、披露感知、约束感知、替代寻求和独立来源七类。同一查询的所有形式留在同一训练/开发/测试分区（60/20/20 家族划分），避免近似重复表述跨越分区。比较对象包括精确字符串匹配、风险词表、词 TF–IDF 逻辑回归和词加字符 TF–IDF 路由器；预测目标是场景激活规则而非人工查询标签。
- 页面策略接口有四个动作：pass（保留但不认证无偏）、contextualize（保留证据并披露关系）、exclude（中性合成不合适时扣留证据）和 review（处理缺失或来源不足的页面）。原型用 oracle 门（直接观察人工页面分数）实现 pass、exclude 和 review 三种动作，contextualize 需要答案生成，不在本次评估内。oracle 门在每档 <span class="paper-math">&#92;(&#92;tau&#92;)</span> 扣留超过阈值的已解析页面，未解析页面送去审阅，并要求至少保留三页作为固定的证据充分性代理，由此刻画未来学习型分类器应达到的风险—覆盖率目标。

### 实验设计与论证方式

- 评估由四部分构成，各有明确声明边界（原文 Table I）。人工审计：200 个真实 URL，其中 186 个有已解析分数，用于校准锚点并记录访问失败情况；14 个未解析页面（不可用、错页、部分或付费墙）保持缺失而不当作安全。场景：2 万行合成行，用于负载和阈值压力测试。查询路由器：4800 个形式，测试受控变异恢复。oracle 门：200 个 URL，给出风险—覆盖率目标。
- 关键实验发现跨垂直差异：PROD 和 SOFT 的人工高分层页面占比相同，但人工审计中只有 PROD 垂直激活查询，SOFT 无一激活——说明家族激活取决于聚合暴露而非单页计数。校准效应方面，四个截距均为负（合成原始均值高于人工锚点），主阈值下激活家族数从 119 降到 105，其中 SOFT 变化最大。阈值敏感性在 0.40 到 0.60 之间单调变化。
- 路由器在 80 个留出家族上评估：精确匹配对未见变异的召回为零，词表与两个 TF–IDF 模型都能部分恢复激活规则，其中词加字符模型偏精确率、词逻辑回归与字符模型 F1 相近。oracle 门给出保留证据比例与残余风险质量的权衡曲线。全部结果都是生成器条件下的离线分析：无真实检索排名、无学习型页面分类器、无匹配的下游答案生成或答案评分，也无线上实验；论文未声明开源代码仓库，本次未核验其可复现环境。

### 结果与证据

- 人工审计显示不同垂直的页面级风险均值与高分层占比存在明显梯度，但各垂直仅五条审计查询、bootstrap 区间重叠，这些数值只能作为校准锚点，不能推出真实网络上的风险普遍率。（IV.A Manual Page and Query Units）

  > PROD and SOFT each have a 55.3% high- page share; the corresponding shares are 23.9% for POL and 19.6% for YMYL. The cluster-bootstrap intervals in Fig. 2 overlap, and each vertical contains only five audit queries. These values therefore serve as calibration anchors rather than population estimates.

- 家族留出评估下，简单文本模型能在未见受控改写上部分恢复场景激活规则，且学习型路由器优于精确匹配；这只支持受控变异恢复这一有限工程声明，不等于对自然部署查询的准确率。（IV.C Family-Held-Out Router）

  > Family-Held-Out Router As expected under family-held-out evaluation, exact canonical matching has zero recall on unseen mutations. The risk lexicon reaches 0.401 precision, 0.625 recall, and 0.489 F1. Word TF–IDF logistic regression reaches 0.521 F1. The word- plus-character TF–IDF model reaches 0.546 precision, 0.492 recall, 0.518 F1, and 0.748 accuracy.

- oracle 门量化了保留证据与残余风险质量的权衡，多数查询在主阈值下仍满足三页证据充分性代理；由于门直接观察人工分数，该结果是保留证据水平的定义而非分类器性能或答案质量收益的证据。（IV.D Oracle Risk–Coverage Target）

  > Before gating, mean rank-discounted manual score mass is 0.346. At τ = 0.50, the oracle retains 61.7% of discounted evidence and leaves residual score mass 0.099. Nineteen of 20 queries meet the three-page evidence-sufficiency proxy, with 5.7 retained pages on average. At 0.40, evidence retention drops to 45.9%, and 17 queries meet the proxy.

- 人工锚定统一降低了各垂直的场景分数与家族激活量，说明校准步骤会实质性改变审阅负载估计；但由于锚点均值本身就是由人工分数设定，锚定后均值一致是构造使然，不构成对生成器的独立验证。（Table II / Fig. 5）

  图表观察（PDF 第 4 页）：表 II 给出各垂直人工锚定统计：PROD 原始均值 0.497、截距 −0.025、锚定均值 0.477、激活 45/100；SOFT 0.453、−0.049、0.418、33/100；POL 0.324、−0.056、0.291、18/100；YMYL 0.253、−0.012、0.248、9/100。正文报告主阈值下激活家族总数从校准前 119 降至 105，SOFT 从 41 降至 33。图 5 子图 (a) 显示四个截距均为负，子图 (b) 显示锚定后高家族数在各垂直均下降。

### 与小组方向的关联

对小组的 RAG 评估、搜索信息检索方向有直接参考价值：查询依赖的源风险表示、排名折减的家族级聚合和家族留出划分都是可借鉴的设计，尤其适合构建需要审计溯源的检索管线。但证据主要是单编码小样本锚定加合成场景，无下游答案实验，将其用于真实系统前需按论文自定的双评分和真实检索协议补齐验证。

### 局限与阅读边界

- 作者明确承认的核心局限包括：人工审计为单人编码试点，无页面独立双评，标注可靠性和评审间一致性未测量；人工均值只校准场景，两者一致是构造而非验证；合成排名省略了检索依赖的发布者集中、重复来源、时间变化和访问失败，2.63 成激活率只是生成器条件下的条件性负载，不估计部署审阅负载、真实网络普遍率或下游答案质量收益。
- 从材料可合理提出的验证问题：风险评分的四维合取设计依赖评审对激励、倡导、披露和独立性的主观判断，若标注分歧传播到四个校准均值，家族激活和负载结论会随之移动——作者在第七节列出了双评分重叠审计方案但尚未执行，属于前瞻协议而非结果。
- 比较与适用条件方面，路由器指标基于单一家族划分，划分间波动未知；风险词表与 TF–IDF 的对比规模很小，不能推广到大查询分布。此外利益关系证据须在页面、重定向链或公开所有权记录中可见才可检测，引用段落中不可见的 affiliate 欺诈仍是开放难题；contextualize 动作与答案级收益完全未评估，属于明确的未来工作而非本次阅读范围缺口。

<span id="digest-content-992c41b2a75fec0742e279f5f55d034db3c97fab452008230cdbc751041f8226" hidden></span>
