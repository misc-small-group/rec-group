---
layout: post
title: 2026-09-28 论文速报合集
date: 2026-09-28 00:00:00 +0800
permalink: /posts/2026-09-28-paper-digest/
categories:
- 论文速报
tags:
- 推荐系统
- 位置编码
- RoPE
- 时间建模
- 序列推荐
- Attention机制
- 多目标检索
- 嵌入子空间
- 双塔模型
- 注意力掩码
- 服务期权重
- 线上A/B
- MoE
- 专家剪枝
- 模型压缩
- 训练无关
- 共识残差
- LLM Agent
- 多智能体
- 生产环境
- 语义ID
- 嵌入学习
- 因果保留
- 机制记忆
- 证据门控
- 世界模型
- LLM 隐状态
- 选择性适应
- agent memory
- multi-agent
- benchmark
- claim admission
- 诊断研究
- 上下文感知
- XR界面
- 基准测试
- 功能建议
- LLM
- 性能剖析
- 系统工具
- 模型分析
- GPU优化
- Agentic RL
- 工具选择
- 多轮搜索
- 信用分配
- LLM智能体
- 个性化
- Agent 记忆
- 健康代理
- 结构化记录
- 用户理解
description: 今日收录 10 篇与小组方向相关的论文。
comments: true
math: true
papers:
- arxiv_id: '2609.30576'
  arxiv_version: 1
  title: 'T-RoPE: Time-Aware Rotary Position Embedding for Sequential Recommendation'
- arxiv_id: '2609.30601'
  arxiv_version: 1
  title: Embedding Subspace Partitioning for Dynamic Multi-Objective Retrieval
- arxiv_id: '2609.30465'
  arxiv_version: 1
  title: 'RAZOR: Pruning Replaceable Experts in LLMs'
- arxiv_id: '2609.30541'
  arxiv_version: 1
  title: 'AutoResearch at Production Scale: Failure Modes and a Multi-Agent Framework'
- arxiv_id: '2609.30650'
  arxiv_version: 1
  title: 'Causal Retention in Interactive Agents: Interface Factorization and Selective
    Adaptation'
- arxiv_id: '2609.30813'
  arxiv_version: 1
  title: A Benchmark and Diagnostic Study of Epistemic Admission in Shared Agent Memory
- arxiv_id: '2609.30466'
  arxiv_version: 1
  title: A Benchmarking Framework for Context-aware XR Interfaces
- arxiv_id: '2609.30656'
  arxiv_version: 1
  title: 'Component Benchmark: Hierarchical Model Profiling for Large-scale Recommendation
    Systems'
- arxiv_id: '2609.30906'
  arxiv_version: 1
  title: 'ToolSearcher: Optimizing Tool Selection at Scale via Reinforcement Learning'
- arxiv_id: '2609.31255'
  arxiv_version: 1
  title: 'PIA: A Personal Intelligence Agent Turning Health Conversations into Records
    and Records into Understanding'
paper_pipeline:
  schema: 1
  kind: digest
  provider: openrouter
  model: z-ai/glm-5.3-flash
  source_hash: ed783e2de0e9988dcc3d7148899529842d18ef0bba6d18f112ee5e5d77ca07ee
  generated_date: '2026-09-28'
  render_hash: d33aa4a332d8c2e8f744ac0ded7e4289155fc8bcff282a96d273de0aca10bc2d
institutions:
- MIT
- Microsoft
- Tencent
- Amazon
- Baidu
- Meta
- CMU
- Alibaba
- Naver
---

| 排名 | 评分 | 论文 | 机构 | arXiv 链接 | 主题 |
| ---: | ---: | --- | --- | --- | --- |
| 1 | 10 | [T-RoPE: Time-Aware Rotary Position Embedding for Sequential Recommendation](#arxiv-2609-30576) | MIT | [2609.30576](https://arxiv.org/abs/2609.30576) | 推荐系统、位置编码、RoPE、时间建模、序列推荐、Attention机制 |
| 2 | 10 | [Embedding Subspace Partitioning for Dynamic Multi-Objective Retrieval](#arxiv-2609-30601) | Microsoft | [2609.30601](https://arxiv.org/abs/2609.30601) | 多目标检索、嵌入子空间、双塔模型、注意力掩码、服务期权重、线上A/B |
| 3 | 9 | [RAZOR: Pruning Replaceable Experts in LLMs](#arxiv-2609-30465) | Tencent | [2609.30465](https://arxiv.org/abs/2609.30465) | MoE、专家剪枝、模型压缩、训练无关、共识残差 |
| 4 | 9 | [AutoResearch at Production Scale: Failure Modes and a Multi-Agent Framework](#arxiv-2609-30541) | Amazon | [2609.30541](https://arxiv.org/abs/2609.30541) | 推荐系统、LLM Agent、多智能体、生产环境、语义ID、嵌入学习 |
| 5 | 9 | [Causal Retention in Interactive Agents: Interface Factorization and Selective Adaptation](#arxiv-2609-30650) | Baidu | [2609.30650](https://arxiv.org/abs/2609.30650) | 因果保留、机制记忆、证据门控、世界模型、LLM 隐状态、选择性适应 |
| 6 | 9 | [A Benchmark and Diagnostic Study of Epistemic Admission in Shared Agent Memory](#arxiv-2609-30813) | Meta | [2609.30813](https://arxiv.org/abs/2609.30813) | agent memory、multi-agent、benchmark、claim admission、诊断研究 |
| 7 | 8 | [A Benchmarking Framework for Context-aware XR Interfaces](#arxiv-2609-30466) | CMU、Meta | [2609.30466](https://arxiv.org/abs/2609.30466) | 推荐系统、上下文感知、XR界面、基准测试、功能建议、LLM |
| 8 | 7 | [Component Benchmark: Hierarchical Model Profiling for Large-scale Recommendation Systems](#arxiv-2609-30656) | Meta | [2609.30656](https://arxiv.org/abs/2609.30656) | 推荐系统、性能剖析、系统工具、模型分析、GPU优化 |
| 9 | 7 | [ToolSearcher: Optimizing Tool Selection at Scale via Reinforcement Learning](#arxiv-2609-30906) | Alibaba | [2609.30906](https://arxiv.org/abs/2609.30906) | Agentic RL、工具选择、多轮搜索、信用分配、LLM智能体 |
| 10 | 7 | [PIA: A Personal Intelligence Agent Turning Health Conversations into Records and Records into Understanding](#arxiv-2609-31255) | Naver | [2609.31255](https://arxiv.org/abs/2609.31255) | 个性化、Agent 记忆、健康代理、结构化记录、用户理解 |

今日收录 **10** 篇论文。评分为 10 分制阅读推荐度：方向相关性 4 分、方法贡献 3 分、实验证据或论证支撑 3 分；按总分降序排列，同分按 arXiv 编号排序。机构列为已识别的命中机构。点击论文标题跳转正文。各篇阅读范围不同，完整结论请核对原文。

## T-RoPE: Time-Aware Rotary Position Embedding for Sequential Recommendation {#arxiv-2609-30576}

**作者：** Yang Liu, Noel Loo, Ali Khanafer, Shuying Sun, Akshay Soni, Zhong Wu, Linjun Yang

**命中的作者机构：** MIT

**作者单位原文：** Massachusetts Institute of Technology

**论文：** [arXiv](https://arxiv.org/abs/2609.30576) · [本次阅读版本 v1](https://arxiv.org/abs/2609.30576v1)

阅读范围：完整 PDF，共 17 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Large-scale recommenders increasingly adopt the sequential generative recipe behind large language models, bringing the Transformer into recommendation along with design choices made for text, including Rotary Position Embedding (RoPE). In language models, RoPE encodes token indices for relative position reasoning, but in recommendation, an interaction index records only event order, saying nothing about elapsed time, behavioral cycles across scales, or calendar phase. We revisit this choice and propose T-RoPE, a time-aware RoPE for sequential generative recommendation that replaces index-only rotation with timestamp-based angles, learnable temporal coefficients, multiscale frequency banks, shifted query alignment, and non-stationary key rotation. We prove that standard RoPE, even on timestamps, remains time-translation invariant and cannot distinguish seasonal contexts, and that T-RoPE breaks this invariance while preserving the RoPE interface. Across five public benchmarks, T-RoPE achieves the best result on every metric on every dataset, improving over the strongest baseline by 78--130\% in HR@10 on the sparse PixelRec data and 8--12\% across metrics on Amazon Books. On an industrial-scale e-commerce dataset with more than 6B interactions, it improves every metric over the HSTU + Time RAB backbone by 13--82\%, with ablations attributing the largest gains to multiscale frequencies (<span class="paper-math">&#92;(+56&#92;%&#92;)</span> NDCG@50) and non-stationary keys (<span class="paper-math">&#92;(+4&#92;%&#92;)</span>). An online A/B test in the Shop app yields positive lifts in conversion rate (<span class="paper-math">&#92;(+0.33&#92;%&#92;)</span>) and order count (<span class="paper-math">&#92;(+0.63&#92;%&#92;)</span>). We also provide forward and backward algorithms whose added cost is linear in sequence length and head dimension, keeping time-aware RoPE practical for large generative recommenders.

### 一句话速览

论文针对序列生成式推荐中沿用文本的 RoPE 只编码事件顺序、丢失时间间隔与日历周期的问题，提出时间感知的 T-RoPE：以时间戳驱动旋转角度，配合可学习系数、多尺度频率库、移位查询对齐与非平稳键旋转。理论上证明其打破时间平移不变性，实验在五个公开基准、工业数据与线上 A/B 中全面领先。

### 研究动机

- 序列生成式推荐把用户行为表示为带时间戳的事件序列 <span class="paper-math">&#92;(&#92;&#123;(i&#95;1,t&#95;1),&#92;ldots,(i&#95;L,t&#95;L)&#92;&#125;&#92;)</span>，自回归地预测下一个物品，已在大规模生产系统落地。这类模型大量借用语言模型的工程组件，其中旋转位置编码（RoPE）通过按位置索引旋转查询和键向量来注入顺序信息。
- 问题在于语言与推荐的位置语义不同：交互索引只记录事件先后，不包含时间间隔、跨尺度行为周期和日历相位。间隔半年的物品与昨天的物品在索引 RoPE 下可能位置等价；小时、周、月、季节等周期结构没有对应的频率；绝对日历位置完全不可见。已有时间方案只补了部分缺口：TiSASRec 把离散化的时间间隔作为注意力偏置，HSTU 的时间相对注意力偏置把分桶时间差映射为加性标量，TO-RoPE 把时间戳引入 RoPE 角度但查询与键共享几何，仍保持时间平移不变。
- 本文要回答的问题是：能否在保留 RoPE 高效接口的前提下，让旋转注意力直接编码流逝时间、多尺度周期和日历相位，并从理论上说明为什么单纯把时间戳代入标准 RoPE 仍不足以表达季节性。

### 方法与关键设计

- T-RoPE 保留 RoPE 的计算接口，只改变旋转角度的来源与含义。第一步是真实时间旋转：把整数位置索引替换为以秒计的 Unix 时间戳，不做居中或归一化，每个旋转平面的角度为 <span class="paper-math">&#92;(&#92;phi&#95;&#123;m,d&#125;=t&#95;m/&#92;beta&#95;d&#92;)</span>。这样两个事件的相对相位变成真实时间差的函数，注意力内积正比于 <span class="paper-math">&#92;(&#92;cos((t&#95;n-t&#95;m)/&#92;beta&#95;d)&#92;)</span>，序列上相邻但间隔数月的两个事件不再占据相邻相位，而密集爆发的事件仍聚在一起。
- 第二步是可学习时间系数。每个平面为查询和键分别引入标量系数 <span class="paper-math">&#92;(&#92;alpha^q&#95;d,&#92;alpha^k&#95;d&#92;)</span>，角度变为 <span class="paper-math">&#92;(&#92;phi^q&#95;&#123;m,d&#125;=&#92;alpha^q&#95;d t&#95;m/&#92;beta&#95;d&#92;)</span>。作者观察到训练后同一层内查询与键系数的符号和幅度大多对齐，即共同强调同一时间频带，但不同层之间差异明显，说明各层学到各自的时间敏感度，而非一个共享的偏置。
- 第三步是多尺度频率库。单一基础频率只能分辨一种时间尺度，而用户行为同时包含分钟级的浏览会话、周月级的家庭购买和年度季节性。T-RoPE 用几何间隔为每个旋转平面分配基础频率 <span class="paper-math">&#92;(&#92;beta&#95;d=&#92;exp[&#92;log&#92;beta&#95;&#123;&#92;min&#125;+&#92;frac&#123;d-1&#125;&#123;D/2-1&#125;(&#92;log&#92;beta&#95;&#123;&#92;max&#125;-&#92;log&#92;beta&#95;&#123;&#92;min&#125;)]&#92;)</span>，默认从 <span class="paper-math">&#92;(10^2&#92;)</span> 到 <span class="paper-math">&#92;(10^8&#92;)</span> 秒，可学习系数决定每个频带的贡献强度。论文的图三显示训练确实只上调少数时间频带而非均匀使用所有频率，不同频率对应不同的用户周期，这解释了该模块为何能把原始时间戳变成可用的周期结构。
- 第四步是移位查询对齐。位置 <span class="paper-math">&#92;(m&#92;)</span> 的监督目标是时刻 <span class="paper-math">&#92;(t&#95;&#123;m+1&#125;&#92;)</span> 的事件，线上推理时模型拿到的是当前会话时间 <span class="paper-math">&#92;(t&#95;&#123;&#92;text&#123;now&#125;&#125;&#92;)</span>，因此查询按目标时间旋转、键保留自身时间戳，实现上只是把时间戳角度张量沿序列维左移一步。这样同一条物品历史可以在不同预测季节下被评估，例如假日季与日常补货场景，而不改变架构。
- 第五步是非平稳键编码，这是打破时间平移不变性的关键。若查询和键以相同方式旋转，注意力相位只取决于时间差 <span class="paper-math">&#92;((t&#95;&#123;m+1&#125;-t&#95;n)/&#92;beta&#95;d&#92;)</span>，整体平移时间后不变，模型无法区分同一历史落在年周期哪个阶段。T-RoPE 对键改用旋转矩阵的转置，即 <span class="paper-math">&#92;(&#92;mathbf&#123;k&#125;'&#95;&#123;n,d&#125;=&#92;mathbf&#123;R&#125;(-&#92;phi^k&#95;&#123;n,d&#125;)&#92;mathbf&#123;k&#125;&#95;&#123;n,d&#125;&#92;)</span>，最终每个平面的注意力得分为 <span class="paper-math">&#92;(&#92;mathbf&#123;q&#125;^&#92;top&#95;&#123;m,d&#125;&#92;mathbf&#123;R&#125;(-(&#92;alpha^q&#95;d t&#95;&#123;m+1&#125;+&#92;alpha^k&#95;d t&#95;n)/&#92;beta&#95;d)&#92;mathbf&#123;k&#125;&#95;&#123;n,d&#125;&#92;)</span>，相位取决于时间戳之和而非之差，共同平移会改变分数。理论上作者证明：共享系数的时间戳 RoPE 仍时间平移不变，无法表达季节性；而当某维满足 <span class="paper-math">&#92;(&#92;alpha^q&#95;d+&#92;alpha^k&#95;d&#92;neq 0&#92;)</span> 时 T-RoPE 打破该不变性，且当某维的有效角频率匹配目标周期时可以表达对预测时刻的正弦依赖。
- 实现上，由于时间戳量级达十亿秒，角度计算在 FP32 下进行再转回模型精度；作者给出前向、反向算法与代价分析，相对固定 RoPE 增加的开销在序列长度和头维度上是线性的，而自注意力本身对序列长度是二次的，整个模块只增加与层数乘头维同阶的少量参数。帮助理解的例子：同一用户半年前和昨天各点过同一类商品，索引 RoPE 下两者可能处于相同相对位置，T-RoPE 则让注意力直接看到真实间隔与日历位置。

### 实验设计与论证方式

- 公开基准：ML-20M、Amazon Books、Pixel200K、Pixel1M、Pixel8M，统一 PyTorch 框架、相同物品 ID 输入、预处理、最大序列长度、留一法协议与超参，比较 SASRec、TiSASRec、HSTU、HSTU+Time RAB、HSTU+TO-RoPE，指标为 HR@10/50、NDCG@10/50、MRR；序列长度 ML-20M 为两百、其余为五十，训练用 AdamW、采样负例 Softmax 损失，单卡 H100。
- 工业规模消融：Shop 内部电商数据约一亿五千万用户、近五百万物品、超六十亿交互，模型为十二个 HSTU 块、八头注意力、序列长度五百十二；按天做时间留出，报告 Recall@K 而非 HR@K，从完整模型逐级移除组件直到 HSTU+Time RAB 骨干，并单独移除查询旋转与键旋转。
- 线上 A/B：在 Shop 应用推荐系统中部署，与不带 T-RoPE 的同构生产模型对照，报告转化率与订单数的相对提升及 p 值；附录另给出静态吞吐对比，T-RoPE 训练与验证吞吐与 TO-RoPE 相当、略低于基线 HSTU。

### 结果与证据

- 在五个公开基准上，该方法在全部指标上均取得最优，且数据时间结构越强收益越大：规则较密的影评数据提升温和，稀疏的电商与图片数据提升明显，说明绝对日历相位在稀疏商业数据中携带更多信号；结论限于同一训练框架与统一协议下的离线对比。（5.1节，表2）

  > Across five public benchmarks, T-RoPE achieves the best result on every metric on every dataset, improving over the strongest baseline by 78–130% in HR@10 on the sparse PixelRec data and 8–12% across metrics on Amazon Books.

- 在超六十亿交互的工业电商数据上，该方法在所有指标上超过时间偏置骨干，消融把最大贡献归于多尺度频率库，其次是非平稳键，说明收益可分解到具体机制而非整体不可解释；这是单一内部数据集上的相对比较，不能直接外推到其他业务。（5.2节，表3）

  > On an industrial-scale e-commerce dataset with more than 6B interactions, it improves every metric over the HSTU + Time RAB backbone by 13–82%, with ablations attributing the largest gains to multiscale frequencies ( <span class="paper-math">&#92;(+56&#92;%&#92;)</span> NDCG@50) and non-stationary keys ( <span class="paper-math">&#92;(+4&#92;%&#92;)</span> ).

- 线上 A/B 中转化率提升达到统计显著，订单数提升为方向性证据但显著性未过常用阈值，说明离线收益部分转化为业务价值；观察窗口与流量分配细节未在摘要级证据中给出，长期效果待验证。（5.3节，表4）

  > An online A/B test in the Shop app yields positive lifts in conversion rate ( <span class="paper-math">&#92;(+0.33&#92;%&#92;)</span> ) and order count ( <span class="paper-math">&#92;(+0.63&#92;%&#92;)</span> ).

### 与小组方向的关联

论文直接命中小组关注的 Attention 机制与推荐排序召回方向：把 RoPE 从索引坐标改为时间坐标，并给出可证明的对称性分析，属于可迁移的结构设计。多尺度频率库与非平稳键的消融结论、线上转化率提升对落地有参考价值；语义 ID 与生成式推荐路线也可直接套用该编码，值得精读并在自有数据上验证。

### 局限与阅读边界

- 作者承认的局限：工业数据与生产基础设施因隐私与治理流程无法公开，线上实验只报告聚合结果；理论条件上若训练收敛到每维查询与键系数互为相反数，模型会退化为时间平移不变的情形，作者称部署模型中未出现该退化，但这依赖训练动态而非保证。
- 可合理提出的验证问题：公开基准上最强基线是 HSTU+Time RAB，而 TO-RoPE 在部分数据集上明显弱于 Time RAB，时间编码之间的比较受实现与调参影响，跨数据集的趋势不能当作单一因素的因果结论；A/B 中订单数提升的 p 值大于常用显著性阈值，作者也只称其为方向性证据，长期留存与生态影响未报告。
- 本次阅读范围不足：代码仓库与复现环境未在本次核验，公开基准的可复现性依赖论文给出的完整方法与附录配置；频率库上下界等超参在不同业务域的敏感性只有 Shop 一个工业场景的消融支持，迁移到其他推荐系统时需重新验证。

## Embedding Subspace Partitioning for Dynamic Multi-Objective Retrieval {#arxiv-2609-30601}

**作者：** Shaobo Zhang, Alice Leung, Yunxiang Ren, Ping Liu, Yuchin Juan, Qianqi Shen, Benjamin Le, Jianqiang Shen, Chengming Jiang, Ko-Cheng Wang, Vidya Krishnamurthy, Caleb Johnson, Fedor Borisyuk, Luke Simon, Jingwei Wu, Wenjing Zhang

**命中的作者机构：** Microsoft

**作者单位原文：** LinkedIn , Mountain View , CA , USA；LinkedIn

**论文：** [arXiv](https://arxiv.org/abs/2609.30601) · [本次阅读版本 v1](https://arxiv.org/abs/2609.30601v1)

阅读范围：完整 PDF，共 10 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Modern industrial recommender systems must optimize across competing objectives, balancing semantic relevance with business metrics such as engagement and revenue. While bi-encoders dominate large-scale retrieval due to their efficiency, they collapse these heterogeneous signals into a single static embedding space. This design creates a fundamental limitation: once trained, the retriever cannot adapt to shifting objective priorities at serving time without retraining. Moreover, joint optimization with multi-objective losses often induces interference between objectives, leading to suboptimal trade-offs. We propose Embedding Subspace Partitioning (ESP), a retrieval framework that decomposes the embedding into task-aware subspaces and replaces the single dot product with a weighted sum of per-subspace similarities, whose weights are tunable at serving time. For Transformer bi-encoders, ESP uses the model's native end-of-sequence token as a segment delimiter, with segment-aware attention masking and position encoding resets to guarantee subspace isolation in a single forward pass. Serving is performed via GPU-accelerated exhaustive kNN over one concatenated index, eliminating the need for per-objective Approximate Nearest Neighbor (ANN) infrastructure required by multi-head approaches. We evaluate ESP on an open-source benchmark built from MS MARCO. A single ESP model traces a broad Pareto frontier, consistently outperforming strong multi-task baselines across diverse operating points. In LinkedIn's job matching platform (70M+ weekly users), ESP enabled dynamic retrieval reconfiguration and delivered significant key business metric lifts.

### 一句话速览

针对多目标检索中单嵌入无法在服务期调整目标权衡的问题，LinkedIn 提出 ESP：把嵌入划分为任务感知子空间，用各子空间相似度的加权和打分，权重作为服务期旋钮。Transformer 版用 EOS 分段加注意力掩码与位置重置实现隔离，DNN 版用投影头。单个模型即可扫出帕累托前沿，并在 LinkedIn 求职匹配平台线上 A/B 中取得显著业务提升。

### 研究动机

- 工业级检索的第一阶段很少只优化单一相关性。以 LinkedIn 求职匹配为例，召回层需要同时照顾求职者与职位的语义匹配、用户互动意愿以及平台收入等业务目标；电商搜索、信息流推荐也存在类似的多目标权衡。主流方案是双塔（bi-encoder）模型：把查询和文档各编码成一个 d 维向量，用一次点积衡量相关性，从而支持近似最近邻（ANN）索引和低延迟大规模服务。
- 这种单嵌入设计在多目标场景下有两个根本缺陷：所有异质信号被压进同一个几何空间，训练后无法在不重训的情况下调整目标优先级（作者称之为“无旋钮问题”）；同时多目标联合损失会在目标之间产生干扰，导致次优折中。现有应对要么用加权多任务损失训练单嵌入，要么为每个目标单独建一路检索再合并，前者把权衡固化在训练期，后者基础设施成本随目标数线性增长。
- 本文要回答的问题是：能否在架构层面把不同目标的表示能力分开，使得一个训练好的模型在服务期通过可调权重就能在目标之间自由权衡？作者从容量下界的理论分析出发，论证共享嵌入的每目标容量随目标冲突程度下降，而分区构造可以消除这一损失，并据此提出嵌入子空间分区框架 ESP。

### 方法与关键设计

- ESP 的核心思想是把一个 d 维嵌入切成 k 个互不重叠的子空间，第 i 个子空间 <span class="paper-math">&#92;(&#92;mathbf&#123;e&#125;&#95;i&#92;in&#92;mathbb&#123;R&#125;^&#123;d&#95;i&#125;&#92;)</span> 专门负责第 i 个目标，完整嵌入是各子向量的拼接。查询与文档的检索得分改为各子空间点积的加权和：<span class="paper-math">&#92;(S(&#92;mathbf&#123;q&#125;,&#92;mathbf&#123;d&#125;)=&#92;sum&#95;&#123;i=1&#125;^&#123;k&#125; w&#95;i&#92;cdot&#92;langle&#92;mathbf&#123;e&#125;&#95;i,&#92;mathbf&#123;e&#125;&#95;i'&#92;rangle&#92;)</span>。关键在于权重 <span class="paper-math">&#92;(w&#95;i&#92;)</span> 不写进模型，而是在请求侧于服务期设置：同一个训练好的模型通过调权重即可在目标之间扫出整条帕累托前沿，无需重训练；当所有权重取 1 时退化为标准点积，兼容既有检索设施。
- 作者先用几何分析论证为什么需要分区：给定 k 个相关性矩阵，单嵌入的得分矩阵秩不超过 d，要同时以相对 Frobenius 误差 <span class="paper-math">&#92;(&#92;delta&#92;)</span> 逼近各目标，所需维度下界为 <span class="paper-math">&#92;(d&#92;ge r&#92;cdot(1+(k-1)&#92;varepsilon)&#92;)</span>，其中 <span class="paper-math">&#92;(&#92;varepsilon&#92;)</span> 是目标间有效子空间的主角度冲突度；而按有效秩比例分配维度的分区构造只需 <span class="paper-math">&#92;(&#92;sum&#95;i r&#95;i&#92;)</span>，且与冲突模式无关。也就是说，冲突越大，共享嵌入的容量损失越严重，而分区在架构层面消除了这种干扰。实践中用排序间的 Kendall τ 作为冲突的可计算代理。
- Transformer 实现复用模型原生的 EOS 词元作为分段分隔符，不新增词表：输入按“属性段 &lt;EOS&gt; 正文段 &lt;EOS&gt;”排列，属性段放在正文之前。配合分段感知的因果注意力掩码（每个 EOS 只注意自己段内的词元）和位置 ID 重置（每段从位置 0 重新编号，消除 RoPE 下同一段属性文本因前面正文长度不同而产生的嵌入漂移），两个 EOS 位置的隐状态分别作为语义与属性子嵌入，单次前向即完成分区，且不引入任何额外参数。作者报告的消融显示：仅靠属性在前的因果隔离，相同实体文本的余弦相似度约 0.97；加掩码后实体判别率进一步提升；位置重置把被 RoPE 破坏的余弦从约 0.50 恢复到约 0.73–1.0。
- DNN 双塔（无因果注意力）则用共享主干上的 k 个轻量投影头实现同样的输出分区，LinkedIn 生产系统即采用此设计，k=3 对应互动、收入、匹配度三个目标。训练时每个子空间用各自的损失（排序用 InfoNCE、收入预测用 MSE 对蒸馏伪标签、二分类匹配度用 BCE），总损失是各子损失的加权和；由于每个损失只依赖自己的子嵌入，输出层面不产生跨目标的梯度干扰，共享主干仍接收混合梯度，但容量保证建立在输出分区上。
- 与基线的差异：多任务单头（MTSH）把权衡烘焙进训练权重，改优先级就要重训；多头（MTMH）虽分区但每个头需要独立 ANN 索引再合并，基础设施随目标数线性增长；ColBERT 质量最高但每文档存 L 个词元向量。ESP 用一个拼接索引上的 GPU 加速穷举 KNN 直接对加权和做暴力扫描，以模型—硬件协同设计绕开 ANN 兼容性问题，存储保持每文档 k=2–3 个向量。

### 实验设计与论证方式

- 开源基准：基于 MS MARCO 构造含硬实体负例的多目标检索基准，约 39K 文档库、1359 条评测查询，指标为语义 NDCG@10 与实体 Recall@10，比较无实体基线、实体入 prompt、MTSH、ColBERT 与 ESP。
- 训练实验：0.6B 模型训练一轮，比较 MTSH 不同实体权重、MTSH+PCGrad 与 ESP 不同服务期权重，并用 bootstrap 置信区间检验语义 NDCG 差异。
- 维度分配与扩展：扫描实体子空间维度验证低维即可饱和实体匹配；增加长度偏好作为第三目标验证 k=3 的服务期控制；BEIR 三数据集验证单目标不回退。
- 生产验证：LinkedIn 求职匹配平台（DNN-ESP，k=3：互动、收入、匹配度），离线比较 MTSH、JRC 与 ESP 的召回与 MSE，并进行 7 天线上 A/B 测试报告统计显著的业务指标。

### 结果与证据

- 在 LinkedIn 生产系统的 7 天线上 A/B 测试中，仅调整服务期权重而无需重训，即可在多个权重设置下同时或分别改善收入、职位申请等业务指标，并在选定工作点显著降低不匹配率；该结果支持服务期旋钮具有真实业务价值，但观察窗口有限，长期效应未在此证据中给出。（Section 6.3 / Abstract）

  > This approach has been deployed in LinkedIn’s job matching platform for two years, serving 70M+ weekly active users; in a 7-day online A/B test, retuning the serving-time weights alone on a single trained model yielded +4.0% revenue, +3.95% job applications, and <span class="paper-math">&#92;(-&#92;)</span> 8.95% no-fit rate.

- 在开源基准的训练模型对比中，单嵌入 MTSH 随实体权重加大出现语义质量单调下降，PCGrad 只能缓解而无法消除干扰；ESP 在匹配实体召回的工作点上语义 NDCG 显著更高且无需重训，支持干扰瓶颈来自表示几何而非梯度冲突的解释。（Table 2, Section 5.3）

  > PCGrad ( Yu et al., 2020 ) gradient surgery mitigates the interference ( <span class="paper-math">&#92;(-4.6&#92;)</span> pp semantic vs. <span class="paper-math">&#92;(-4.9&#92;)</span> pp for MTSH <span class="paper-math">&#92;(&#92;alpha&#95;&#123;e&#125;&#123;=&#125;5&#92;)</span> ) but cannot eliminate it, confirming the bottleneck is geometric (embedding capacity), not gradient conflict.

- 生产环境离线对比显示，在同等收入权重下，MTSH 的批内召回大幅下降，而 ESP 几乎无损失，JRC 虽保住召回但付出很大的 MSE 代价；该结果支持分区架构在生产规模上消除了目标间干扰，但对比限于该平台的互动与收入两个目标。（Table 5, Section 6.2）

  > ESP <span class="paper-math">&#92;(w&#95;&#123;&#92;text&#123;rev&#125;&#125;&#123;=&#125;0.99&#92;)</span> ), MTSH loses 28.24% in-batch recall while ESP loses only 0.54%, a <span class="paper-math">&#92;(&#92;approx 50&#123;&#92;times&#125;&#92;)</span> improvement that quantifies the interference that partitioning eliminates at production scale. JRC mitigates the recall loss ( <span class="paper-math">&#92;(-0.03&#92;%&#92;)</span> ) but inherits MTSH’s lack of serving-time tunability and pays a large MSE penalty ( <span class="paper-math">&#92;(+5307.25&#92;%&#92;)</span> ). Table 5 .

- 预训练模型对比中，ESP 以标准双塔的单向量存储成本取得与 ColBERT 接近的实体召回和语义质量，并超过实体入 prompt 的任务切换方案；说明子空间隔离能在不增加服务成本的情况下兼顾两个目标，但该对比基于小规模预训练模型与小型语料，结论的规模外推需谨慎。（Table 1, Section 5.3）

  > Method Sem Ent Vectors / Doc Scoring Baseline (no entity) .668 .496 1 dot Entity in prompt .762 .594 1 dot MTMH † ( Zhang et al., 2025a ) .677 .833 2 2 <span class="paper-math">&#92;(&#92;times&#92;)</span> dot, merge ColBERT ( Khattab and Zaharia, 2020 ) .849 .935 <span class="paper-math">&#92;(L&#92;)</span> token vectors MaxSim ESP (ours) .843 .932 1 dot † Pretrained MTMH simulated via per-objective prompts.

### 与小组方向的关联

论文同时命中小组关注的检索召回、模型架构与 Attention 机制方向：用分段注意力掩码和位置重置在单次前向内实现子空间隔离，思路可直接迁移到多目标召回场景；服务期权重旋钮和单索引穷举 KNN 的系统设计也值得借鉴。开源基准与线上 A/B 提供了较强证据，但高分辨率多目标冲突下的效果仍属待验证设想，迁移时需评估自身 ANN 基础设施兼容性。

### 局限与阅读边界

- 理论下界基于对称模型与 Frobenius 误差假设，冲突代理量 Kendall τ 只是数量级指示，作者自己指出奇异值差异可在无子空间冲突时引起排序分歧，容量论证与实际收益之间的因果链是间接的。
- 基准中实体匹配是低分辨率目标（作者报告约 1:20 的分辨率差），语义与实体冲突较强但实体子空间极小；作者承认当多个目标同时需要高分辨率嵌入（如语义精度对主题多样性）时，ESP 的优势尚未验证，这是关键适用条件。
- 服务依赖 GPU 加速的穷举 KNN，与 IVFPQ 等分区式 ANN 索引不兼容，迁移到以传统 ANN 为基础设施的系统需要额外的系统改造；Transformer 变体的延迟数据来自 0.6B 模型与 H200 GPU 的短序列测量，其他规模与硬件下的表现本次材料未覆盖。
- 线上 A/B 为 7 天窗口且只报告了若干权重点的显著指标，长期效应与跨业务泛化未在本次材料中给出；开源基准已声明发布，但代码仓库与复现环境本次未核验。

## RAZOR: Pruning Replaceable Experts in LLMs {#arxiv-2609-30465}

**作者：** Mingyang Song, Mao Zheng

**命中的作者机构：** Tencent

**作者单位原文：** Foundation Model Department, Tencent, China

**论文：** [arXiv](https://arxiv.org/abs/2609.30465) · [本次阅读版本 v1](https://arxiv.org/abs/2609.30465v1)

阅读范围：完整 PDF，共 39 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Mixture-of-experts (MoE) models activate few experts per token but store the full expert pool. Expert pruning reduces this storage burden; at a fixed pruning budget, the goal is to preserve the original model's output distribution as closely as possible. Yet an expert's usage or contribution magnitude does not by itself determine the damage caused by its removal. What matters is whether the surviving computation can replace its function. We introduce RAZOR, a training-free expert pruning method that scores functional replaceability using consensus residuals: deviations of expert outputs from the original weighted mixture. An exact single-deletion identity at a fixed layer input accounts for survivor renormalization and router-selected refill, providing local scores aggregated over calibration tokens for budgeted pruning without gradients or recovery training. On GLM-4.7-Flash, Qwen3.6-35B-A3B, DeepSeek-V4-Flash-0731, and Hy3 at 25\% and 50\% expert removal, RAZOR achieves the highest nine-task macro average among the evaluated pruning methods in all eight settings. On the two backbones with matched REAP benchmark runs, it exceeds REAP by 2.12--5.59 points and wins all 36 paired task comparisons. It also lowers reverse KL relative to REAP in all four matched GLM-4.7-Flash and Qwen3.6-35B-A3B model--budget settings. Analysis of responses generated by Qwen3.6-35B-A3B nevertheless reveals changes in diversity, formatting, and termination, underscoring that task retention and predictive fidelity do not ensure generation stability.

### 一句话速览

针对 MoE 大模型的整专家剪枝问题，提出训练无关的 RAZOR：用共识残差（专家输出相对原始加权混合的偏差）构造精确的单专家删除损伤公式，同时考虑幸存者权重重归一化与路由器补位。在四个后训练 MoE 模型、两个删除率下，其九任务宏平均在全部八个设置中领先所评测剪枝方法，但高删除率仍有明显损失，且生成行为会改变。

### 研究动机

- MoE（混合专家）模型每个 token 只激活少数专家，但必须存储完整专家池，存储开销大。整专家剪枝通过删除专家缩小模型，在固定剪枝预算下目标是尽量保持原模型输出分布。已有方法多用路由频率或激活范数等标量刻画专家重要性，这类统计只描述使用频率和贡献大小，不刻画专家输出之间如何组合：一个贡献大的专家可能被幸存计算替代，而贡献小的专家可能提供幸存者无法恢复的分量。
- 论文要回答的核心问题是功能可替换性：删除哪个专家对剩余计算的破坏最小。两个结构性因素使该问题复杂——删除专家后幸存者权重会重归一化，路由器还可能补位提升原本未选中的专家。作者证明仅凭门控值和输出范数无法确定最小破坏的删除（命题 1），需要输出几何信息。
- 与 REAP 等基于路由加权输出范数均值的方法相比，本文的差别在于被排序的量：不是孤立的重要性，而是在固定层输入的删除反事实下，混合输出的实际变化。

### 方法与关键设计

- 设 token 表示为 <span class="paper-math">&#92;(x&#92;)</span>，路由器选出 <span class="paper-math">&#92;(k&#92;)</span> 个专家 <span class="paper-math">&#92;(S(x)&#92;)</span>，专家 <span class="paper-math">&#92;(i&#92;)</span> 输出 <span class="paper-math">&#92;(f&#95;i(x)&#92;)</span>、归一化权重 <span class="paper-math">&#92;(w&#95;i(x)&#92;)</span>。路由输出即共识 <span class="paper-math">&#92;(c(x)=&#92;sum&#95;&#123;i&#92;in S(x)&#125;w&#95;i(x)f&#95;i(x)&#92;)</span>（式 1），作者称之为共识但不假设专家彼此一致。定义共识残差 <span class="paper-math">&#92;(r&#95;j(x)=f&#95;j(x)-c(x)&#92;)</span>，即每个专家输出相对要保留的混合的偏差。
- 核心是命题 2 的精确删除公式：在补位假设下（删除 <span class="paper-math">&#92;(i&#92;)</span> 时路由器提升排名最高的未选专家 <span class="paper-math">&#92;(r&#92;)</span>，其伪权重为 <span class="paper-math">&#92;(w&#95;r&#92;)</span>），token 级删除损伤为 <span class="paper-math">&#92;[&#92;delta&#95;i(x)=&#92;|c(x)-&#92;tilde&#123;c&#125;^&#123;-i&#125;(x)&#92;|&#95;2=&#92;frac&#123;&#92;|w&#95;i(x)r&#95;i(x)-w&#95;r(x)r&#95;r(x)&#92;|&#95;2&#125;&#123;D&#95;i(x)&#125;,&#92;quad D&#95;i=1-w&#95;i+w&#95;r.&#92;]</span> 分子是删除专家的加权残差与补位专家加权残差之差：若二者精确匹配，局部混合不变，即补位专家可完全替代被删专家；分母来自幸存者与补位权重的重归一化。令 <span class="paper-math">&#92;(w&#95;r=0&#92;)</span> 得到无补位的留一情形（命题 3）：<span class="paper-math">&#92;(&#92;delta&#95;i^&#123;&#92;mathrm&#123;loo&#125;&#125;=&#92;frac&#123;w&#95;i&#125;&#123;1-w&#95;i&#125;&#92;|f&#95;i-c&#92;|&#95;2&#92;)</span>，即路由质量乘以到幸存者输出的距离。
- 打分与剪枝流程：对每个被路由到的专家，把 token 级损伤按条件 RMS（均方根）在校准 token 上聚合，得到专家分数 <span class="paper-math">&#92;(s&#95;i&#92;)</span>（式 18）；每层保留分数最高的 <span class="paper-math">&#92;(B&#92;)</span> 个专家，部署时在保留池上做原始 top-<span class="paper-math">&#92;(k&#92;)</span> 路由。RCS、RCS-LOO、RCS-Refill 分别对应 <span class="paper-math">&#92;(w&#95;i&#92;|r&#95;i&#92;|&#95;2&#92;)</span>、留一损伤、补位损伤三种 token 量，RCS-Refill 加条件 RMS 即 RAZOR。整个过程只用前向计算，无需梯度、子集搜索或恢复训练。
- 实现上（算法 1）采用分块在线统计：对未剪枝模型做一次校准前向，分块重建路由输出与补位专家输出，累积每专家的 <span class="paper-math">&#92;(q&#95;i=&#92;sum&#95;t&#92;delta&#95;i(t)^2&#92;)</span> 与计数 <span class="paper-math">&#92;(n&#95;i&#92;)</span>，工作缓冲为 <span class="paper-math">&#92;(O(C(k+1)d)&#92;)</span>，持久状态仅 <span class="paper-math">&#92;(O(E)&#92;)</span> 每层；支持逐层加载以控制显存。物理剪枝直接按保留索引切片专家张量和路由器行，得到更小的检查点，无需运行时掩码或稀疏核。对 DeepSeek 的固定哈希层单独按表计数选择并做路由修复。
- 与基线的差异：Frequency 只数被选次数，EAN 是条件均值激活范数，REAP 是条件均值的路由加权输出范数 <span class="paper-math">&#92;(w&#95;i&#92;|f&#95;i&#92;|&#95;2&#92;)</span>。RAZOR 的关键区别是用共识残差（方向信息）加删除反事实（重归一化与补位），而非孤立的贡献大小。作者强调局部输出变化只是分布目标的替代量，不是保证：联合删除会相互作用，激活变化会跨层传播。

### 实验设计与论证方式

- 实验覆盖四个后训练 MoE 骨干（GLM-4.7-Flash、Qwen3.6-35B-A3B、DeepSeek-V4-Flash-0731、Hy3），各在两个专家删除率下评测，均无恢复训练。校准用 2,048 例、七领域的 MoECal 池；保真度用反向 KL（<span class="paper-math">&#92;(D&#95;&#123;&#92;mathrm&#123;KL&#125;&#125;(q&#92;|p)&#92;)</span>，<span class="paper-math">&#92;(p&#92;)</span>、<span class="paper-math">&#92;(q&#92;)</span> 为原模型与剪枝模型在共享参考前缀上的预测）和参考 token 的 NLL/超额困惑度，八个轴覆盖四个校准任务类型与四个留出类型。
- 下游评测为九任务基准（AIME'26、IFEval、IFBench、SuperGPQA、BFCL v4、LongBench v2、HumanEval+、LiveCodeBench、SWE-bench Verified），Overall 对九任务等权。基线包括 Frequency、EAN、REAP 及三个残差准则；注意 REAP、Frequency、EAN 只在 GLM-4.7-Flash 和 Qwen3.6-35B-A3B 上做了基准对比，另两个骨干只与未剪枝参考和 RCS-LOO 比较。下游基准用温度 0（SWE-bench 用 0.7），AIME 报告 avg@8。
- 除任务与保真度外，还做了自由生成诊断（多样性、杂散闭合分隔符、响应长度、长度受限完成率），以及组件消融（共识参考、LOO 因子、补位、RMS 与均值聚合）、校准预算与语料敏感性分析。作者明确区分离线基准与诊断研究，未报告线上部署或端到端加速结果。

### 结果与证据

- 在四个骨干、两个删除率共八个设置中，RAZOR 的九任务宏平均在所评测剪枝方法中全部最高；在两个有匹配 REAP 基准的骨干上超过 REAP 并赢下全部配对任务比较。这支持补位感知打分对整体任务保持的价值，但宏平均领先不意味着每个任务都占优，且对比范围限于所评测方法。（Abstract / Section 1）

  > On GLM-4.7-Flash, Qwen3.6-35B-A3B, DeepSeek-V4-Flash-0731, and Hy3 at 25\% and 50\% expert removal, RAZOR achieves the highest nine-task macro average among the evaluated pruning methods in all eight settings. On the two backbones with matched REAP benchmark runs, it exceeds REAP by 2.12--5.59 points and wins all 36 paired task comparisons.

- 激进剪枝并非无损：四个骨干在高删除率下宏性能均低于原模型；在匹配检查点上 RAZOR 的反向 KL 在全部匹配的模型—预算设置中低于 REAP。说明低删除率接近原模型而高删除率有实际代价，分布保真度优势也不能推出任务无损。（Section 1 / Section 3.3）

  > These gains do not make aggressive pruning lossless: all four backbones lose macro performance relative to their originals at 50% removal. On matched GLM-4.7-Flash and Qwen3.6-35B-A3B checkpoints, Razor also lowers reverse KL relative to REAP in all four model–budget settings.

- 生成行为仍受影响：剪枝后长度受限完成的比例高于未剪枝模型，说明任务性能与预测保真度的保持不能保证生成稳定性。该结果仅基于单一骨干的自由生成诊断，不能推广到其他骨干，也不能推断潜在推理能力受损。（Section 3.4）

  > These two panels show favorable response-form comparisons, not evidence about latent reasoning or a length control for the three-benchmark diversity result. Termination remains affected: length-limited finishes reach 25.8% for Razor and 24.2% for REAP, against 16.0% unpruned.

- 在匹配检查点上，RAZOR 在全部匹配的模型—预算设置中反向 KL 均低于 REAP，支持其分布保真度优势；但表中同时显示补位相对 RCS-LOO 在一个设置上略升 KL，且 KL 降低不必然意味着参考 token 似然保持更好。（Table 6）

  图表观察（PDF 第 25 页）：反向 KL（nats，越低越好）：Qwen3.6-35B-A3B 25% 时 REAP 0.07461、RCS 0.06669、RCS-LOO 0.07141、RAZOR 0.06872；50% 时分别为 0.45654、0.40337、0.45108、0.44397。GLM-4.7-Flash 25% 时 REAP 0.22850、RAZOR 0.20459；50% 时 REAP 1.01690、RAZOR 0.85457。RAZOR 相对 REAP 的相对变化为 −4.3%/−1.2%/−10.9%/−14.3%。

### 与小组方向的关联

与小组的模型架构设计、预训练与压缩方向直接相关：共识残差加删除反事实的打分思路可借鉴到任何需要估计模块可替换性的场景（如稀疏化、模块裁剪）。方法推导严谨、实验覆盖广且作者对结果边界（KL 与似然不一致、生成行为变化、校准敏感性）交代清楚。待验证点包括：补位候选在联合删除下可能自身被删、端到端加速未测量、以及该准则在推荐/检索类稀疏模型上的迁移效果。

### 局限与阅读边界

- 作者已承认的局限：补位打分假设的候选专家在多专家删除后可能自身已被剪掉，替换假设在部署模型中未必成立；固定输入、单删除准则无法覆盖删除间的相互作用与后续层输入变化；下游与 Frequency、EAN、REAP 的基准对比只覆盖两个骨干，自由生成结果仅限 Qwen3.6-35B-A3B；DeepSeek 的哈希层匹配未确认，其基准差距不能完全归因于学习路由器的显著性。
- 可合理提出的验证问题：物理剪枝减少存储参数，但保持相同 top-k 并不按比例减少激活计算，且打分器需重建局部专家输出；论文未测量打分运行时、服务时延、能耗、峰值显存和端到端加速，实际部署收益需自行验证。校准预算研究显示残差准则的保留集合稳定性低于 REAP，其对最终保真度和下游性能的影响未被解释。
- 本次阅读范围限制：部分评测器版本、基准种子、AIME 数据分发和 SWE agent 脚手架不可得，作者也声明无法精确复现全部对比；基准对比未重复校准与剪枝运行、无任务级不确定性。剪枝模型检查点不可由作者再分发，代码公开状态本次未核验。

## AutoResearch at Production Scale: Failure Modes and a Multi-Agent Framework {#arxiv-2609-30541}

**作者：** Aparajith Chandran, Juwon Kim, Saurav Jha, Pablo Castells, Florian Hottier

**命中的作者机构：** Amazon

**作者单位原文：** Amazon

**论文：** [arXiv](https://arxiv.org/abs/2609.30541) · [本次阅读版本 v1](https://arxiv.org/abs/2609.30541v1)

阅读范围：完整 PDF，共 10 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Optimizing embedding systems for production recommendation pipelines demands systematic exploration that consumes disproportionate engineering effort at scale. We apply Andrej Karpathy's AutoResearch paradigm -- a large language model that iteratively edits a training script and retains modifications that improve a held-out scalar metric -- to automate this exploration. We report on twelve weeks of running this paradigm at production scale, where iterations consume hours of multi-GPU compute, evaluation involves competing criteria, and campaigns span weeks across many training jobs. Across two independently developed representation-learning systems for a book recommendation pipeline, we ran 220+ experiments and observed five recurring failure modes absent from the original setting: infrastructure fragility, agent memory decay, search-direction stagnation, iteration-cost asymmetry, and metric fixation. We contribute a three-principle scaffolding design -- prevent, persist, redirect -- that maps each failure mode to a structural remedy and whose instantiation scales with iteration cost. The framework produced a 1.82x Recall@6 lift and a 2.1x coherence lift over hand-tuned baselines, and the agent autonomously designed a text-only fallback that expanded catalog coverage by 5.8x. The two systems span nearly three orders of magnitude in per-iteration cost yet exhibit the same failure modes, suggesting these are structural properties of production-scale autonomous research rather than artifacts of either application.

### 一句话速览

论文把 AutoResearch 范式（LLM 迭代改训练脚本、按留出指标保留改进）部署到亚马逊图书推荐的两个生产级嵌入系统，十二周跑了两百多次实验，归纳出五种生产规模特有的失败模式，提出预防、持久化、重定向三原则的多智能体脚手架，取得召回与一致性指标的大幅提升，并总结成本依赖的设计原则。

### 研究动机

- 论文面对的任务是：在生产级推荐管道中系统性地优化嵌入学习系统。输入是共购行为图、预计算文本嵌入等数据，输出是用于检索的书籍嵌入或用于生成式检索与类目组织的层级语义 ID，使用场景是图书推荐的核心召回与浏览聚类。这类探索通常消耗大量工程师时间，而 Karpathy 提出的 AutoResearch 范式——一个大模型迭代修改训练脚本、按留出集标量指标保留或丢弃改动——提供了一种自动化路径。
- 但原始范式建立在三个假设上：迭代便宜（单 GPU 几分钟）、评估是单一标量、战役短到能装进一个上下文窗口。生产环境恰好在这三个轴上全部失效：单次迭代消耗数小时多 GPU 算力，评估涉及相互竞争的多项指标，战役跨越数周和大量训练任务。此前没有工作报告过 AutoResearch 在这些条件下是否仍然成立。
- 本文要回答的问题是：生产规模下自主研究会以哪些可复现的方式失败，这些失败是否为结构性而非个例，以及需要什么样的脚手架设计才能让范式在生产中可用。作者在两个独立开发、成本相差近三个数量级的系统上运行该范式，以观察失败模式是否跨系统复现。

### 方法与关键设计

- 两个系统共享 AutoResearch 的标准组件：一个携带指令与累积发现的研究程序文件 program.md、一个含训练脚本 train.py 与不可变评估器的智能体沙箱（智能体只能读评估结果、不能改评估代码），以及记录所有迭代的研究日志。差异在于搜索层级与成本档位：System A 的智能体每次迭代重写整个训练脚本，System B 的智能体只改超参数与编码器架构。
- 框架围绕三原则组织脚手架。预防（prevent）针对基础设施脆弱与成本不对称：System A 引入执行前的 Code Fixer 智能体，对 Researcher 产出的脚本做单遍语义改写，捕捉语法检查发现不了的分布式训练配置错误、显存隐患、冗余重算等问题；System B 因迭代便宜而改用执行后的自动回滚。作者强调单遍改写设计来自教训：早先的两步 Reviewer 架构曾连续返回格式错误的 JSON，导致同一违规文件操作被反复引入。
- 重定向（redirect）针对搜索方向停滞：System A 的 Criticizer 智能体只在最优指标在近若干次迭代内相对提升低于阈值时触发，发出两到五句话的战略性指令，指向设计空间的不同区域而非具体代码改动；指令在下一次保留后清空，避免其积累权威话语。System B 的对应机制是人类在 run 之间更新 program.md 完成范式切换。
- 持久化（persist）针对记忆衰减：把 program.md 移到跨任务的持久存储，使每个新训练任务继承此前所有任务的发现；System B 中由人类而非智能体维护该文件，写入约束、回滚阈值与已知失败结论。作者明确说明该机制只能降低而不能消除重复测试。
- 一个帮助理解的例子：System A 的 Criticizer 在五次边际改进后发出指令，指出差距不在建模而在输入表示，要求构建显式的共购邻域表示；Researcher 随后实现多跳邻域画像，三次迭代内把 Recall@6 从一个平台推到更高水平，后续迭代在此基础上继续爬升。这说明智能体能在一个范式内高效优化，但范式切换需要外部重定向。
- 指标固着只得到部分缓解：多指标报告、在 program.md 中写入可用性背景、run 间人工质检都降低了刷指标行为的严重度，但智能体本身从不质疑指标是否正确——这是设计使然（智能体只能改训练参数、不能改评估标准），因此系统无法完全无人值守。作者将指标自评列为开放问题。

### 实验设计与论证方式

- 十二周战役共 220+ 次实验：System A 在多 GPU 实例上跑 60+ 次迭代（6 个 run，单次 9–19 小时），System B 在单 GPU 上跑 150+ 次迭代（15 个 run，单次 6–52 分钟），两者单次迭代成本相差约三个数量级。
- System A 以 Recall@6 为目标指标：对每个留置的下一次购买，用 FAISS IVF+Flat 索引取嵌入空间六个最近邻，衡量命中真实购买的比例；基线是四名工程师周工作量调出的 Node2Vec 方案。System B 以加权一致性为主指标，辅以流派纯度、簇中位大小、单点率等可用性指标，基线是手工配置的 RQ-VAE。
- 验证协议包括：在 11 个不同购买日期上重评 System A 峰值模型以排除单日运气；评估器对智能体不可修改以防刷分；System B 的早期架构决策在放大后的数据规模上全量复测后才锁定。作者说明这是离线研究，System A 嵌入与 System B 语义 ID 的线上试点正在进行，尚未报告线上 A/B 结果。
- 组件贡献分析采用战役自然阶段作为消融（Table V），配合 Code Fixer 首次部署修 bug 记录与 Criticizer 指令前后的时序证据；作者承认这不是受控随机消融。

### 结果与证据

- 完整三智能体框架在 System A 上相对人工调优基线取得明显召回提升，且跨多个评估日期稳健；但该消融是自然战役阶段而非受控随机实验，不能完全排除迭代累积本身的贡献。（Section V-A）

  > Code-level AutoResearch with the full three-agent framework reached a 1.82 <span class="paper-math">&#92;(&#92;times&#92;)</span> relative lift over the hand-tuned baseline (3.79%) and 2.45 <span class="paper-math">&#92;(&#92;times&#92;)</span> over the deployed retrieval baseline (2.82%) on its peak evaluation date ( <span class="paper-math">&#92;(&#92;pm&#92;)</span> 0.28 pp across 11 evaluation dates; the peak is <span class="paper-math">&#92;(&#123;&#92;sim&#125;&#92;)</span> 2.6 <span class="paper-math">&#92;(&#92;sigma&#92;)</span> above the across-date mean), an iter-12 result obtained over six

- 组件消融显示各智能体逐步引入与性能阶梯对应，支持收益来自特定智能体而非单纯迭代累积；但阶段为自然过渡，因果解读仍属观察性证据。（Table V）

  图表观察（PDF 第 6 页）：Table V（System A 各配置最优 Recall@6 与相对人工基线 3.79% 的提升倍数）：Hand-tuned baseline 3.79%（1.00×）；Researcher only config-level 3.73%（0.98×）；Researcher only code-level 4.17%（1.10×）；Researcher+Code Fixer 5.48%（1.45×，为 Criticizer 触发前的停滞点）；Researcher+Fixer+Criticizer 全量 6.90%（1.82×）。

- System B 的分阶段进展显示智能体自主完成最大单段架构增益，而跨范式切换由人类驱动并带来战役最优结果；指标为离线加权一致性，不代表线上效果。（Table VI）

  图表观察（PDF 第 7 页）：Table VI（System B 十五个 run 分阶段最优加权一致性 WC 与相对手工基线 0.348 的倍数）：Baseline 0.348（1.00×）；Phase 1 智能体架构发现 0.691（1.98×）；Phase 2 扩到千万级+流派纯度 0.692（1.99×）；Phase 3 内容-only 嵌入转向 0.633（1.82×，回退）；Phase 4 行为+内容转向 0.735（2.11×）。

- 在多指标评估下，智能体持续刷主指标而牺牲层级可用性，且加入护栏后三项可用性指标在整个战役中从未同时满足，说明一致性—密度权衡是结构性的；该结论限于 System B 的指标设计。（Section III-E）

  > More strikingly, even with these additions, the three usability criteria (weighted coherence, genre purity, and median cluster size) were never simultaneously met in any of 15 runs across 150+ iterations, indicating that the tradeoff was structural rather than a tuning problem.

### 与小组方向的关联

论文直接落在小组的推荐召回、语义 ID 与 Agentic 方向交叉点：用 LLM 智能体自动优化召回嵌入与 RQ-VAE 语义 ID，并系统总结生产级智能体循环的失败模式与脚手架设计。prevent/persist/redirect 三原则与成本依赖权重可直接迁移到我们的长周期训练智能体实验；其离线收益尚未经线上验证，语义 ID 部分仅以一致性为代理指标，借鉴框架设计时应先设计自己的线上验证路径。

### 局限与阅读边界

- 作者承认的第一条局限：System A 的组件消融是观察性的，Table V 的阶段是自然过渡而非受控对照，无法完全排除收益来自迭代累积而非特定智能体干预；他们用时序与工件级证据部分缓解，但受控复现仍缺失。
- 第二条局限：两个系统都来自同一组织的图书推荐单一领域，五种失败模式与成本依赖原则能否推广到其他领域尚未验证。第三条局限：Recall@6 与加权一致性都是离线代理指标，本研究未验证其与真实顾客结果的关系；线上试点正在进行但结果未报告，离线到线上的转化是已知风险。
- 从材料可合理提出的验证问题：成本依赖原则只有两个数据点支撑，作者自己也称其为经验观察而非已证设计原则；此外 System B 的三项可用性指标从未同时满足，说明指标设计本身可能需要重构，而智能体被禁止修改评估器，完全无人值守运行在该设计下不可达。本次未核验任何代码仓库，训练数据为专有数据不可公开，复现需依赖作者描述的协议在其他行为数据集上重建。

## Causal Retention in Interactive Agents: Interface Factorization and Selective Adaptation {#arxiv-2609-30650}

**作者：** Shengjun Zhang, Tingyi Liu, Dong Xie, Yunlong Dong, Xiang Wang, Cheng Zeng

**命中的作者机构：** Baidu

**作者单位原文：** Baidu Inc.；Independent Researcher * Correspondence: xiedong04@baidu.com; wangxiang.whu@whu.edu.cn

**论文：** [arXiv](https://arxiv.org/abs/2609.30650) · [本次阅读版本 v1](https://arxiv.org/abs/2609.30650v1)

阅读范围：完整 PDF，共 34 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Task performance need not determine which intervention mechanism an agent retains. We study causal retention: whether a frozen learned state answers a mechanism-probe map fixed independently of training, including action, context, direct target, value, and delay. For finite structural causal model classes, the optimal probe error is a Bayes decision risk. It vanishes exactly when every learning-interface fiber lies within one probe-answer fiber; any state obtained by post-processing that interface inherits the same lower bound. A posterior-coverage theorem characterizes budgeted retesting, while an exact edit decomposition shows that the shifted set is the unique support of an error-free target update. Causal Core implements these conditions through evidence-gated writing, readout filtering, temporal credit, hidden-context setup, and local diagnostic updates. Experiments cover finite causal systems, continuous simulators, an official TD-MPC2 world model, and Qwen2.5-7B-Instruct. A frozen Qwen last-layer probe reaches 0.958 balanced accuracy on source mechanisms but 0.583 on changed delays; the gated mechanism state reaches 1.000 and accepts only 0.056 of synchronized-readout candidates. In TD-MPC2, five target states per actuator recover effect-sign accuracy from 0.057 to 0.948 without degrading stable responses. Causal retention is therefore distinct from task sufficiency and source-domain decodability.

### 一句话速览

论文研究交互智能体的因果保留：冻结后的学习状态能否回答训练目标从未要求的干预机制探针（动作、上下文、直接目标、取值、延迟）。作者给出接口因子化的贝叶斯风险刻画，并提出证据门控记忆层 Causal Core，在有限 SCM、TD-MPC2 世界模型和冻结 Qwen 隐状态上验证：任务表现好不等于机制可查询，门控状态可恢复被改动的机制且少写虚假条目。

### 研究动机

- 任务考虑的是交互式智能体（如强化学习智能体、世界模型、语言智能体）在环境中学到的状态：输入是交互轨迹（奖励、观测、排序信号等），输出是策略或预测。使用场景是迁移与干预：换环境后需要回答“哪个动作在什么上下文下改变哪个变量、变成什么值、延迟多久”。
- 作者指出训练目标只识别环境的等价类：两个系统可以有相同的奖励过程、最优动作或一步预测，却对动作的直接目标、上下文或延迟给出不同答案。因此对训练任务充分的状态，对目标从未要求回答的干预查询可能不充分。已有路线（结构因果模型、处理效应估计、因果发现、不变预测、因果表征学习）各自估计不同的量，都不能保证冻结状态保留完整的机制答案。
- 本文要回答的问题是：一个冻结的学习状态能否回答独立于训练固定的机制探针映射，即“因果保留”；以及如何构造一个学习接口，使保留成为可能并支持迁移时只改被移动的条目。

### 方法与关键设计

- 论文把交互式结构因果模型写成 <span class="paper-math">&#92;(X&#95;&#123;t+1&#125;=F(X&#95;t,H&#95;t,A&#95;t,&#92;varepsilon&#95;&#123;t+1&#125;)&#92;)</span>、<span class="paper-math">&#92;(O&#95;t=&#92;psi(X&#95;t,H&#95;t,&#92;eta&#95;t)&#92;)</span>，其中 <span class="paper-math">&#92;(H&#95;t&#92;)</span> 是学习者可能看不到的潜在上下文。评估者从模型结构方程固定一个结构索引 <span class="paper-math">&#92;(&#92;sigma&#95;M(&#92;xi,a)=(c,y,&#92;delta)&#92;)</span>，记录动作 <span class="paper-math">&#92;(a&#92;)</span> 在状态 <span class="paper-math">&#92;(&#92;xi&#92;)</span> 下的活跃上下文、直接目标和延迟；确定性后代或传感器读出不算直接目标。
- 核心量是机制记忆：条目为 <span class="paper-math">&#92;(&#92;theta=(a,c,y,v,&#92;delta)&#92;)</span> 的有限集合，<span class="paper-math">&#92;(a&#92;)</span> 是动作、<span class="paper-math">&#92;(c&#92;)</span> 是上下文谓词、<span class="paper-math">&#92;(y&#92;)</span> 是直接目标、<span class="paper-math">&#92;(v&#92;)</span> 是效果值、<span class="paper-math">&#92;(&#92;delta&#92;)</span> 是延迟。查询 <span class="paper-math">&#92;(z=(&#92;xi,a)&#92;)</span> 时返回所有满足 <span class="paper-math">&#92;(c(&#92;xi)=1&#92;)</span> 的四元组。机制风险 <span class="paper-math">&#92;(R&#95;Q&#92;)</span> 定义为答案集合与真值不等价的概率；奖励遗憾、图误差、预测误差都不是它的替代品，因为各自至少边际化掉一个坐标。
- 理论上，接口 <span class="paper-math">&#92;(&#92;mathcal&#123;I&#125;&#92;)</span> 的因果保留风险是探针贝叶斯风险 <span class="paper-math">&#92;(&#92;mathfrak&#123;B&#125;&#95;&#123;&#92;nu,Q&#125;(&#92;mathcal&#123;I&#125;,&#92;Pi)=&#92;mathbb&#123;E&#125;[1-&#92;max&#95;u &#92;mathbb&#123;P&#125;(U=u&#92;mid &#92;mathsf&#123;T&#125;&#95;&#123;&#92;mathcal&#123;I&#125;&#125;,Z)]&#92;)</span>：给定接口描述 <span class="paper-math">&#92;(&#92;mathsf&#123;T&#125;&#95;&#123;&#92;mathcal&#123;I&#125;&#125;&#92;)</span> 和探针 <span class="paper-math">&#92;(Z&#92;)</span>，最优解码器对答案 <span class="paper-math">&#92;(U&#92;)</span> 的最小错误率。定理 2 证明该风险为零当且仅当接口商细化探针商，即接口能区分所有探针答案不同的模型；任何对接口后处理得到的冻结状态都继承同一下界。这解释了为什么任务表现好不保证机制可查询。
- 实现层 Causal Core 是独立于策略优化器的证据门控记忆层。对候选 <span class="paper-math">&#92;(&#92;theta&#92;)</span>，它在同一干预前上下文下收集配对试验：动作 <span class="paper-math">&#92;(a&#92;)</span> 与参考动作 <span class="paper-math">&#92;(a^0&#92;)</span> 的经验频率 <span class="paper-math">&#92;(&#92;widehat&#123;p&#125;&#95;t^u(&#92;theta)&#92;)</span>（式 3），其差 <span class="paper-math">&#92;(&#92;widehat&#123;&#92;Delta&#125;&#95;t&#92;)</span> 估计 <span class="paper-math">&#92;(do(a)&#92;)</span> 与 <span class="paper-math">&#92;(do(a^0)&#92;)</span> 的干预对比而非未调整的相关。写入门 <span class="paper-math">&#92;(G&#95;t(&#92;theta)&#92;)</span> 是目标、时间、读出、上下文四个门的乘积（式 5），只有全部通过才按保键算子 <span class="paper-math">&#92;(&#92;mathsf&#123;W&#125;&#92;)</span> 更新记忆，每个动作-上下文-目标-延迟键至多保留一个值。
- 四个门各有针对性：读出过滤排除与传感器同步的候选，除非干预能分离二者，防止把 <span class="paper-math">&#92;(a&#92;to R, Y:=R&#92;)</span> 误写成 <span class="paper-math">&#92;(a&#92;to Y&#92;)</span>；时间信用要求所选延迟以边际 <span class="paper-math">&#92;(&#92;gamma&#95;&#123;&#92;text&#123;time&#125;&#125;&#92;)</span> 胜过竞争动作，防止把等待动作或事后观测写成原因；隐藏上下文门主动搜索 setup 动作提高资格率，再用配对对照和可见分离器检验；迁移后用诊断惊异均值选可疑条目（式 7），只对选中条目做局部重测更新（式 8–10），其余条目保持不变。
- 与基线的差异在于：被动相关、奖励学习、排序损失、条件发现、潜在世界模型等基线使用各自接口学习后冻结，而 Causal Core 通过受控干预对比主动细化接口。训练中不提供真值机制标签，监督完全来自干预对比（作者在 Remark 1 中说明）。

### 实验设计与论证方式

- 评估覆盖有限 SCM 族（含读出与隐藏上下文变体）、连续度量 SCM、官方 TD-MPC2 MT30 检查点（cheetah-run、walker-walk、reacher-easy 各三个种子）和冻结的 Qwen2.5-7B-Instruct。所有学习状态在机制探针打分前冻结；真值机制只在事后构造探针，训练中不提供。指标包括精确元组准确率、目标边投影 F1、假写计数、读出假阳性率，以及要求同时保住稳定条目并改正移动条目的 AdaptScore。
- 有限 SCM 实验中，基线包括被动相关、奖励学习、排序损失、条件发现（含读出 oracle 变体）、元组提升、潜在世界模型和转移探针，全部接收相同轨迹。TD-MPC2 实验用配对脉冲计算连续响应 <span class="paper-math">&#92;(&#92;Delta&#95;h&#92;)</span>，线性与两层非线性解码器在源干预对上拟合后冻结，迁移时一个执行器改变符号；选择性更新与全局探针头更新接收相同的目标对，形成消融。语言模型实验在 12 个程序族上训练探针、6 个不相交族上测试，动作与状态名做中性 token 置换以防名字泄漏。
- 论文声明代码、源数据表和原始结果文件随提交提供（GitHub 仓库），附录 B 给出种子、预算与实现细节。本次未核验仓库内容与复现环境；材料中无线上或 AB 实验，全部为受控仿真与离线探针评估。

### 结果与证据

- 冻结 Qwen 末层线性解码器在源机制上平衡准确率很高、改名后仍较高，但在被改延迟子集上大幅下降，RBF 解码器更低；说明源域可解码性不等于对机制变化的稳定保留。配对证据规则能恢复全部被改延迟但接受绝大多数同步读出候选，而门控机制状态在保持被改延迟准确率的同时把读出假阳性率降到很低，说明证据门控在有效性与召回之间取得更好的平衡。该结论限于论文构造的程序族与固定探针映射。（Section 5.5 / Table 5）

  > Thus the source result cannot be dismissed as complete absence of mechanism information, while that information does not support the held-out changed delay. A paired-evidence rule recovers every changed delay but accepts <span class="paper-math">&#92;(0.944&#92;)</span> of synchronized readouts. Applying the admissible-write gate preserves changed-delay accuracy <span class="paper-math">&#92;(1.000&#92;)</span> and lowers readout FPR to <span class="paper-math">&#92;(0.056&#92;)</span> .

- 在预训练世界模型的迁移设定中，冻结模型的被移动执行器符号准确率接近随机；用目标对做全局探针头更新虽提升符号准确率，但稳定响应误差明显变差；选择性更新在全部任务种子运行中都定位到被移动执行器，符号准确率接近 oracle 执行器映射，且稳定响应误差与冻结模型持平。这支持“局部编辑优于全局重学”的结论，但仅针对单执行器符号翻转这一特定迁移设定。（Section 5.4 / Table 4）

  > A global probe-head update using the target pairs raises it to <span class="paper-math">&#92;(0.694&#92;)</span> but increases stable-response NRMSE from <span class="paper-math">&#92;(0.673&#92;)</span> to <span class="paper-math">&#92;(1.460&#92;)</span> . The selective update compares the two actuator hypotheses on five target states per actuator, localizes the shift in all nine runs, and reaches sign accuracy <span class="paper-math">&#92;(0.948&#92;)</span> .

- 在匹配轨迹的有限 SCM 基准上，潜在世界模型虽然源预测准确率很高，目标边 F1 却很低并写出大量隐藏标签假阳性；Causal Core 在目标边 F1 相当或更高的情况下读出与隐藏标签假阳性为零。这说明高任务或预测性能与差的固定探针恢复可以共存，支持因果保留独立于任务充分性的核心论点；但结论限于论文生成的 SCM 族。（Section 5.2 / Table 1）

  > A latent world model reaches next-bit accuracy <span class="paper-math">&#92;(0.905&#92;)</span> yet has target-edge F1 <span class="paper-math">&#92;(0.24&#92;)</span> ; with a readout oracle it reaches <span class="paper-math">&#92;(0.32&#92;)</span> and writes <span class="paper-math">&#92;(39.88&#92;)</span> hidden-label false positives. Causal Core has target-edge F1 <span class="paper-math">&#92;(0.79&#92;)</span> with zero readout and hidden-label false positives. High task or predictive performance therefore coexists with poor fixed-probe recovery.

- 无门控的 Qwen 探索者写出大量虚假条目和读出假阳性，加入上下文搜索或控制规划器门控后两类计数大幅下降；在改名与语义读出适应任务中，非诊断和读出不安全基线的 AdaptScore 为零，Causal Core 为满分。这表明门控写入主要改善写入有效性而非牺牲召回；适应结论依赖诊断选择与局部重测的有限样本保证成立的前提。（Section 5.3 / Table 6）

  > The ungated Qwen explorer writes <span class="paper-math">&#92;(92.3&#92;)</span> false entries and <span class="paper-math">&#92;(37.0&#92;)</span> readout false positives; the context-search and control-planner gates reduce these counts to <span class="paper-math">&#92;(6.0/0.0&#92;)</span> and <span class="paper-math">&#92;(2.0/0.0&#92;)</span> , respectively. In renamed and semantic-readout adaptation, non-diagnostic and readout-unsafe baselines have AdaptScore <span class="paper-math">&#92;(0&#92;)</span> , while Causal Core has AdaptScore <span class="paper-math">&#92;(1.00&#92;)</span> .

### 与小组方向的关联

论文与小组的记忆训练、模型结构设计、Agentic RL 兴趣直接相关：证据门控写入、读出过滤和局部诊断更新是可借鉴的记忆管理机制，理论部分给出了“任务充分不等于机制可查询”的可检验判据。对推荐/检索场景的启发在于记忆条目的有效性与选择性更新，但论文全部实验在受控干预环境，无线上结果，迁移收益需自行验证。

### 局限与阅读边界

- 作者承认的局限：连续实验只覆盖固定的状态、干预和水平查询分布，而非恢复无限制的潜在 SCM；隐藏上下文实验中罕见的资格事件使部分隐藏上下文留在观测商之外（隐藏召回未达满）；条件 C2–C3 只是充分条件，不满足时有限样本上界不再成立。
- 可合理提出的验证问题：机制模式要求真值记忆可由有限元组表示，且评估者固定探针语义并提供配对干预能力；在只能被动观测、机制连续或候选类无限的场景中，门控的边际条件如何设定尚不清楚。TD-MPC2 实验只考虑单执行器符号翻转，多机制同时移动时的定位预算（定理 4 的覆盖上界）是否够用未验证。
- 本次阅读范围限制：代码仓库与源数据未实际核验，复现环境与运行成本未知；论文未报告训练或推理的时延与算力开销，无法评估该方法在真实系统中的部署代价。语言模型实验仅用 Qwen2.5-7B-Instruct 一个模型，结论对其他模型的普适性待检验。

## A Benchmark and Diagnostic Study of Epistemic Admission in Shared Agent Memory {#arxiv-2609-30813}

**作者：** Xiaoyang Li, Yiqi Wang, Chencheng Zhu, KE XU, Wencheng Yang, Zequn Sun, Pingan Song, Yiqun Duan, Taotao Cai

**命中的作者机构：** Meta

**作者单位原文：** Facebook

**论文：** [arXiv](https://arxiv.org/abs/2609.30813) · [本次阅读版本 v1](https://arxiv.org/abs/2609.30813v1)

阅读范围：完整 PDF，共 34 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Evaluating claim admission in shared agent memory is challenging because repeated claims may be mistaken for independent evidence. An agent may copy or paraphrase a retrieved belief, while admitting a false claim exposes subsequent agents to it. To study this problem, we introduce the Correlated Promotion Benchmark (CPB), which evaluates whether candidate claims should be admitted to shared this http URL -Static constructs a frozen test split from publicly annotated sources with fixed gold actions. CPB-Live runs multi-agent teams over a shared store, records all writes and retrievals, and tracks source lineage defined by each scenario. A separate consumer answers from the store alone. We evaluate eight admission policies across four agent families. Our results show that policies which deduplicate sources reject many true claims alongside false ones, whereas policies preserving answer coverage admit nearly as many false claims as unrestricted sharing. Gating on declared source type reduces false adoption to 0.06--0.09, compared with 0.22--0.47 for other answering policies. Once an uncontested false belief enters memory, the consumer asserts it in 0.97--0.99 of probes across all families. No non-oracle policy consistently rejects false claims across verbatim copies, paraphrases, and paraphrases declared authoritative. These findings reveal the limitations of admission policies without access to source lineage.

### 一句话速览

研究多智能体共享记忆中的主张准入问题：虚假主张经复制或改写后可能被误当独立证据写入共享记忆并污染下游回答。作者提出CPB基准（静态冻结测试集加动态多智能体运行环境），评测八种准入策略在四个模型家族上的表现，发现只有基于声明来源类型的治理规则能同时保持低虚假采纳率和高回答覆盖率，且没有任何非预言机策略能抵御改写或权威来源伪装。

### 研究动机

- 多智能体系统常共享一个记忆库：各智能体观察各自来源、提出候选主张，由准入策略决定是否写入共享记忆，后续智能体和消费者从记忆中检索作答。核心风险在于：一个智能体可能复述或改写从共享记忆中检索到的信念，这种重复的支持并非独立证据，一旦虚假主张被准入，会暴露给所有后续读者。
- 已有方案各有缺陷：去重层（如Mem0）只消除冗余不消除错误；一致性检查（如A-MemGuard）会被候选主张引用的支持性来源文本骗过；投票类机制依赖名义支持数，无法区分独立来源与复制来源；LLM裁判在改写和权威来源伪装下也会放行。现有基准很少包含冲突或可靠性不等的证据，也没有固定语料能测量准入—检索—再写入之间的反馈回路。
- 本文要回答的问题是：在没有来源谱系信息的前提下，各类准入策略能否阻止虚假主张进入共享记忆并到达消费者？关键设计是让场景预先固定每条来源的谱系（复制关系），使策略的折叠判断可对照真实谱系评分，而非依赖相似度代理。

### 方法与关键设计

- 论文构建两个互补的评测工具。CPB-Static从公开标注语料（主张验证数据集、多跳编辑语料、Wikipedia引用图谱）组装冻结测试集，共1200个六智能体回合，按600/200/400划分训练、验证、测试，测试集在评测前哈希冻结。固定黄金规则在谱系折叠后统计独立来源数：有足够独立来源的支持性主张应被准入，否则扣留。
- CPB-Live是动态环境：每回合六智能体运行六轮，共享存储记录每次写入和检索。准入策略将候选主张及其证据映射到四种动作（promote、request_evidence、keep_private、abstain），只有promote改变存储。场景预先固定每条来源的谱系，这是策略无法获得的参考。消费者在第六轮仅凭共享记忆回答定向问题，其回答用于测量采纳率。
- 关键度量：设F为被判为假的已准入信念，R(b)为检索过信念b的智能体集合，实际触达为各假信念检索者并集的大小；传播损害为消费者在假信念可检索期间所做的读取次数，作者用公式 <span class="paper-math">&#92;(|&#92;&#123;r &#92;in C : &#92;exists&#92;, b &#92;in F,&#92; t&#95;&#123;b&#125; &lt; r&#92;&#125;|&#92;)</span> 定义，其中C是消费者读取轮次集合，<span class="paper-math">&#92;(t&#95;b&#92;)</span>是信念b的写入轮次。主张真伪由固定的断言评分器独立于来源判断：未引用来源的复述也算假，引用假来源的限定性陈述不算假。
- 评测的准入策略包括：仅私有和全共享两个端点；多数投票和一致性投票（Live上基于引用来源计数）；独立性投票（近重复折叠后要求两个支持组）；DEPEN（从统计一致性推断复制并折扣可疑复制者）；GovMem的全相关审查规则；治理规则（来源类型门控：无矛盾的新鲜权威来源才准入，矛盾时弃权，否则搁置）；LLM裁判；以及逻辑回归和梯度提升树两个训练基线。
- 诊断臂包括谱系预言机（用真实谱系替代表面相似度做折叠，这是任何策略都不可能拥有的信息）和语义折叠（用双向蕴含替代表面相似度）。此外将Mem0作为存储、A-MemGuard的一致性检查作为策略嵌入Live环境实测。四个骨干为Qwen3.5-9B、Gemma-3-12B、Llama-3.1-8B和Claude Opus 5，每个家族的骨干同时充当六个智能体、消费者和裁判。
- 与基线的核心差异在信息假设：所有策略只看到重构的公共视图（候选文本、引用来源及其类型、可检索信念、声明来源），看不到检索日志、真实谱系或主张真伪，这使评测能直接回答缺乏谱系信息的策略能做到什么。

### 实验设计与论证方式

- CPB-Live每个骨干运行100个预提交配置，分四类场景家族：相关一致（一个智能体获得根事实，半数场景有独立佐证）、并发冲突（两个智能体同时收到矛盾证据，两轮后有权威确认）、混合场景、双来源（同一轮给一个智能体真根加独立复述，或假根加逐字/改写副本）。另有30个交叉配置补全真伪与形式的交叉格，只在Qwen和闭源家族上运行。
- Static上运行十个策略，Live上八个，外加对Qwen智能体的前沿裁判。Static使用聚类bootstrap区间，六个预注册比较用Holm校正；Live分析预注册为描述性，不做假设检验。两个评分器均由两名人工标注者在120个盲样本上验证，断言评分器对假标签的精确率和召回率均有报告。
- 消融包括：关闭智能体对共享记忆的检索（写回回路消融）、交换候选到达顺序（顺序敏感性）、真伪与来源形式的交叉表。代码和数据已在GitHub公开，配置在执行前提交并随存储日志发布。

### 结果与证据

- 在保持回答覆盖的策略中，基于声明来源类型门控的治理规则将虚假采纳率压到最低区间，而其他作答策略的虚假采纳率明显更高。去重类策略则连同真主张一起大量拒绝。这说明来源类型门控在测试的策略中是唯一兼顾低假采纳与高覆盖的机制，但该结果限于本基准的场景构成。（Abstract / Section 5.1）

  > Our results show that policies which deduplicate sources reject many true claims alongside false ones, whereas policies preserving answer coverage admit nearly as many false claims as unrestricted sharing. Gating on declared source type reduces false adoption to 0.06--0.09, compared with 0.22--0.47 for other answering policies.

- 一旦无争议的虚假信念进入共享记忆，仅凭共享记忆作答的消费者在几乎所有探测中断言假值，且没有任何非预言机策略能在逐字复制、改写和权威类型改写三种复制形态下稳定拒绝虚假主张。这支持了缺乏来源谱系的准入策略存在根本局限的论点，但保护性竞争真值的效果只在并发冲突家族中测量。（Abstract / Section 5.3）

  > Once an uncontested false belief enters memory, the consumer asserts it in 0.97–0.99 of probes across all families. No non-oracle policy consistently rejects false claims across verbatim copies, paraphrases, and paraphrases declared authoritative.

- 嵌入实测的两个已发布组件均未能阻止虚假信息：Mem0的去重只消除冗余不消除错误，A-MemGuard的一致性检查会放行其引用来源支持的虚假内容。这表明现有部署层记忆组件的写路径和检查机制在本基准上不构成有效防线，结论适用于所测组件版本和场景类型。（Section 5.2）

  > family. Values in Appendix E , where the diagnostic arms and the frontier judge over Qwen appear on their own pools. 5.2 Two published components inside the instrument F2. Mem0 removes duplicates and not false adoption, and A-MemGuard’s check passes falsehoods their cited sources support.

- 准入决策跟随第二来源的形式而非主张真伪：即使有完美的复制检测（谱系预言机），也无法确立独立支持的真伪，而治理规则依赖的来源类型一旦被伪装为权威文档就会放行虚假复述。该表只覆盖Qwen和闭源家族的交叉配置，每格样本量小，只能作描述性观察。（Table 13）

  图表观察（PDF 第 25 页）：真伪与来源形式交叉表（合并各家族块）：治理规则在逐字和改写列的真假写入均为0.00，独立复述列假0.95、真1.00；独立性投票逐字真假均0.00，改写假0.72、真1.00，独立假0.90、真1.00；谱系预言机逐字和改写真假均0.00，独立假0.95、真0.90；语义折叠改写假0.10、真0.15。

### 与小组方向的关联

与小组的Agentic RL、Memory with training兴趣直接相关：共享记忆准入是多智能体记忆系统的核心治理问题，CPB的谱系固定设计与写回回路消融可直接借鉴到记忆训练和评测中。对大模型个性化中的记忆污染防护也有参考价值。待验证方向：将来源类型门控与学习型准入结合、在真实（非虚构）场景中检验失败频率。代码已公开，可复现。

### 局限与阅读边界

- 作者承认的局限（附录S）：所有Live场景为虚构内容，这使谱系可固定、真伪可知，但结果只说明机制类别在此工具上的行为，不能推断部署中失败的发生频率；相关一致家族中的父来源独立性仅由不同引用推定；折叠机制被证明能拒绝复制，但未证明能接纳真正的佐证；竞争真值的保护效果只在并发冲突家族中测量。
- 从材料可合理提出的验证问题：环境提供contest、demote和supersede操作但没有任何被比较策略使用，因此纠错能力是未测试而非不存在；写回回路消融显示关闭共享检索最多减少一次假写入，但这种一致性是否会增加依赖支持计数的策略下的假准入，作者明确表示未测试。声明式来源依赖的测量受智能体报告行为影响（Qwen从不声明依赖），放大率只是下界。
- 本次阅读范围的限制：Live测量为描述性统计，无假设检验，策略间差异的统计显著性仅在Static的预注册比较中确立；断言评分器和裁判本身是语言模型，虽经120项人工验证，仍存在系统性误差方向（假计数偏低）；除Mem0和A-MemGuard外，比较对象为重新实现的机制类别而非原始系统。

## A Benchmarking Framework for Context-aware XR Interfaces {#arxiv-2609-30466}

**作者：** Hyunsung Cho, Sarah Yewon Yun, Nancy Ruonan Sun, Ben Lafreniere, Mark Parent, Kashyap Todi, Tanya R. Jonker, Hrvoje Benko, Sherry Tongshuang Wu, David Lindlbauer

**命中的作者机构：** CMU、Meta

**作者单位原文：** Carnegie Mellon University , Pittsburgh , Pennsylvania , USA；Reality Labs Research, Meta , Toronto , Ontario , Canada；Reality Labs Research, Meta , Redmond , Washington , United States；Carnegie Mellon University

**论文：** [arXiv](https://arxiv.org/abs/2609.30466) · [本次阅读版本 v1](https://arxiv.org/abs/2609.30466v1)

阅读范围：完整 PDF，共 16 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Everyday Extended Reality (XR) systems aim to provide context-aware access to the right functionalities at the right time and place, with minimal manual reconfiguration as users switch context. Yet these interfaces are hard to evaluate: current prototyping and user-study workflows offer no systematic, repeatable way to compare adaptation methods across users and scenarios. We present ContextXR, a novel benchmarking framework for context-aware XR interfaces. ContextXR represents an XR application as a connected graph of functional facets, each a semantically coherent group of related capabilities that together support a shared user intent. On this representation, we build MineXR++, a dataset augmenting prior XR interface data with facet-level annotations, and formulate three canonical tasks of context-aware suggestion: context factor analysis, initial facet suggestion, and next facet suggestion. Our evaluation protocol scores suggestion methods by a simulated interaction metric, the navigation and search cost of reaching the desired functionality. Through experiments benchmarking global popularity, relational retrieval, and LLM-based methods, we demonstrate that ContextXR enables the systematic, reproducible evaluation of context-aware XR interfaces.

### 一句话速览

论文提出ContextXR基准框架，把XR应用表示为功能面（facet）图，构建带facet标注的MineXR++数据集，定义上下文因素分析、初始与下一步功能建议三个任务，并用模拟交互的导航与搜索成本评估流行度、关系检索和LLM方法。结果显示用户匹配的少样本LLM建议最能降低访问成本，框架适用于XR上下文感知功能建议的系统化评测。

### 研究动机

- 任务背景：日常XR（扩展现实）系统中，用户在做饭、通勤、办公等场景间切换时，需要界面自动把当下有用的功能摆到眼前，而不是手动翻找应用。论文把这个问题形式化为上下文感知功能建议：给定用户、任务、环境三元组，系统应推断哪些功能单元应当被直接呈现，使用户以尽量少的导航与搜索代价到达所需功能。
- 已有方案的缺陷在于评测基础设施缺失：现有上下文感知XR系统多为定制原型，靠一次性用户研究验证，无法跨用户、跨场景系统比较方法，也无法分离哪些上下文因素真正起作用。同时，已有建议工作要么在整应用粒度上操作（太粗、造成视觉杂乱），要么预测单个下一步动作（与本文要解决的“整个活动中应持续可用的功能集合”是不同问题）。
- 本文要回答的问题是：能否为上下文感知XR功能建议建立一套共享表示、标准任务和面向用户效用的评测协议，使不同方法在同一基准上可复现地比较，并回答哪些上下文信号最有信息量、不同建模策略表现如何。

### 方法与关键设计

- 核心表示是功能面（functional facet）：介于整个应用与单个原子动作之间的中间粒度。每个facet表示为 <span class="paper-math">&#92;( f=(i&#95;f,&#92;mathcal&#123;K&#125;&#95;f) &#92;)</span>，其中 <span class="paper-math">&#92;( i&#95;f &#92;)</span> 是用户意图（用动词加名词命名，如 View Recipe），<span class="paper-math">&#92;( &#92;mathcal&#123;K&#125;&#95;f &#92;)</span> 是支撑该意图的原子能力集合（如 view_ingredients、view_cooking_time）。选择这个粒度的理由是：整应用太粗会暴露多余功能，原子动作太细会迫使用户反复拼装低层控制。
- 同一应用内的facet通过导航能力相连，构成facet图 <span class="paper-math">&#92;( G&#95;a=(&#92;mathcal&#123;F&#125;&#95;a,&#92;mathcal&#123;E&#125;&#95;a) &#92;)</span>：若facet <span class="paper-math">&#92;( f&#95;u &#92;)</span> 含有打开 <span class="paper-math">&#92;( f&#95;v &#92;)</span> 的导航能力（命名约定为 open_ 加目标facet名），则存在有向边。每个应用还有一个特殊的 Open Section 根节点，对应应用入口或导航中枢。这个图让建议方法能推理粒度与导航可达性，避免推荐同一导航链上的冗余facet。
- 数据集MineXR++在开源MineXR上增加facet标注层：MineXR含31名参与者在办公、客厅、厨房、咖啡店四类环境中创建的个性化XR布局与组件。作者先从截图构建facet数据库，覆盖42个应用、273个facet和1007个能力，再由一名作者标注、另一名复核，把每个组件链接到facet及其使用上下文（用户ID、任务、位置）。
- 问题形式化：上下文为三元组 <span class="paper-math">&#92;( q=(u,t,e) &#92;)</span>，目标是从候选facet集合 <span class="paper-math">&#92;( &#92;mathcal&#123;F&#125; &#92;)</span> 中找出目标集合 <span class="paper-math">&#92;( Y&#95;q &#92;subseteq &#92;mathcal&#123;F&#125; &#92;)</span>（MineXR++中即参与者实际放置的facet），方法输出建议集合 <span class="paper-math">&#92;( &#92;hat&#123;Y&#125;&#95;q &#92;)</span>，框架对产生方式不做限制。
- 评测协议是模拟交互的导航与搜索成本。无辅助的手动基线成本为 <span class="paper-math">&#92;( C&#95;&#123;&#92;text&#123;manual&#125;&#125;(Y&#95;q)=c&#95;&#123;&#92;text&#123;open&#92;&#95;menu&#125;&#125;+&#92;sum&#95;&#123;f&#95;i&#92;in Y&#95;q&#125;(c&#95;&#123;&#92;text&#123;app&#92;&#95;scan&#125;&#125;(f&#95;i)+c&#95;&#123;&#92;text&#123;facet&#92;&#95;nav&#125;&#125;(f&#95;i)) &#92;)</span>，即打开应用菜单的一次性成本加上逐个扫描应用、应用内导航的成本。有建议时，目标facet被划分为精确命中H、同应用调整A和未命中M三个不相交子集，建议辅助成本为 <span class="paper-math">&#92;( C&#95;&#123;&#92;text&#123;suggest&#125;&#125;=c&#95;&#123;&#92;text&#123;suggest&#92;&#95;scan&#125;&#125;(&#92;hat&#123;Y&#125;&#95;q)+&#92;sum&#95;&#123;f&#95;i&#92;in A&#125;c&#95;&#123;&#92;text&#123;adjust&#125;&#125;(f&#95;i)+&#92;sum&#95;&#123;f&#95;i&#92;in M&#125;(c&#95;&#123;&#92;text&#123;app&#92;&#95;scan&#125;&#125;(f&#95;i)+c&#95;&#123;&#92;text&#123;facet&#92;&#95;nav&#125;&#125;(f&#95;i))+&#92;mathbf&#123;1&#125;&#95;&#123;|M|&gt;0&#125;&#92;,c&#95;&#123;&#92;text&#123;open&#92;&#95;menu&#125;&#125; &#92;)</span>，其中 <span class="paper-math">&#92;( c&#95;&#123;&#92;text&#123;suggest&#92;&#95;scan&#125;&#125; &#92;)</span> 是扫描建议列表的成本，<span class="paper-math">&#92;( c&#95;&#123;&#92;text&#123;adjust&#125;&#125; &#92;)</span> 是从同应用建议到达目标的残余成本，未命中则回退到手动导航。相比Recall@K等二值截断指标，该协议能计入部分效用（如同应用的正确入口点），并与无辅助基线直接可比。
- 被比较的方法包括：全局流行度（按训练数据出现频率排序，忽略上下文）；关系检索（在用户-任务-环境-应用-facet-能力的类型化实体关系模式上，用 <span class="paper-math">&#92;( P(f|u) &#92;)</span>、<span class="paper-math">&#92;( P(f|u,t) &#92;)</span> 等上下文条件统计排序，并在精确匹配稀疏时用all-MiniLM-L6-v2的Sentence-BERT嵌入对任务和环境标签做余弦相似度软迁移）；零样本LLM与少样本LLM（结构化提示包含当前场景、候选facet目录及facet图链接，少样本版本按用户/任务/环境等迁移条件加入历史示例，LLM为Gemini 3 Flash、温度0.2，均输出固定规模的facet集合）。与基线的差异在于：检索方法依赖预计算统计、延迟与算力开销低，LLM方法则用通用上下文推理与示例迁移。

### 实验设计与论证方式

- 论文做了三个实验。实验一为上下文因素分析：对每个facet做lift分析，比较其在匹配某上下文因子（同一用户、任务或环境）条件下出现的频率相对全局频率的提升，找出主导因子。实验二为初始facet建议：用户刚进入上下文时预测应呈现的facet集合，目标是参与者实际放置的facet。实验三为下一步facet建议：沿场景时间线逐步预测，把已放置的facet作为额外证据，检验交互历史是否优于静态上下文。
- 评测协议上，所有辅助方法输出固定规模的建议集合，与人工标注目标对比；流行度和关系检索使用场景级种子五折交叉验证，保证留出场景的观测不进入训练折；少样本条件按迁移条件分别报告，括号内为存在匹配示例的场景数。主指标是相对手动访问的成本降低百分比，辅以Recall@10、F1@10、Hit@10等检索指标。这是集合层面的功能建议任务，候选空间是跨应用的facet目录，而非单一动作预测。
- 论文未报告真实用户研究或线上部署结果，全部为离线模拟交互评测；作者也说明上下文感知（感知模块）不在框架范围内，假设上下文标签已给出。

### 结果与证据

- lift分析显示功能需求并非由单一上下文因子决定：多数facet由用户主导，其余分别由任务、环境主导或呈混合/无提升模式。这支持了个性化是重要信号的观点，但该分析基于小规模设想布局数据，主导因子的分布不能直接推广到真实长期使用。（Section 4.1.3）

  > Among facets used in MineXR++ , 47 were user-dominant, 14 task-dominant, and 12 environment-dominant, while 8 showed mixed dependence and 20 showed no lift above baseline. This variability suggests that desired functionality in XR does not reduce to a single factor alone, but reflects a combination of personal preference, task relevance, and environment setting.

- 初始facet建议中，所有辅助方法都降低了相对手动访问的导航与搜索成本，其中用户匹配的少样本LLM在样本较充分的条件中表现最好，用户加环境的组合也接近；仅匹配任务或任务加环境的效果明显较弱。这说明用户对齐的历史示例对冷启动建议最有价值，但个别组合的匹配场景极少，其数值需谨慎解读。（Table 1）

  > Condition Cost Recall@10 F1@10 Hit@10 Manual Access 21.20 – – – Global Popularity 19.85 (-6.4%) 0.167 0.132 0.688 Relational Retrieval 18.39 (-13.3%) 0.259 0.193 0.798 Zero-shot LLM 17.66 (-16.7%) 0.228 0.168 0.761 Few-shot LLM User (106) 16.33 (-22.6%) 0.338 0.255 0.830 Task (40) 18.41 (-15.9%) 0.274 0.217 0.825 Environment (108) 17.07 (-18.8%) 0.287 0.206 0.870 User+Task ( 2

- 下一步facet建议中，关系检索取得最高的召回类指标，用户匹配的少样本LLM成本最低，而任务类迁移几乎无收益甚至接近手动基线。作者解释为序列场景下匹配轨迹稀疏导致示例迁移失准；这是基于观察的解释，数据稀疏下的失败机制未被进一步实验验证。（Table 2）

  > Condition Cost Recall@10 F1@10 Hit@10 Manual Access 21.19 – – – Global Popularity 18.70 (-11.7%) 0.168 0.089 0.466 Relational Retrieval 15.70 (-25.9%) 0.355 0.162 0.687 Zero-shot LLM 16.00 (-24.5%) 0.205 0.102 0.488 Few-shot LLM User 14.61 (-31.1%) 0.285 0.147 0.574 Task 19.22 (-9.3%) 0.079 0.044 0.188 Environment 15.82 (-25.3%) 0.209 0.104 0.492 User+Task 20.98 (-1.0%) 0.007

### 与小组方向的关联

该论文与小组的推荐/检索、LLM与推荐结合方向直接相关：它把上下文感知功能建议形式化为集合推荐问题，facet图与结构化提示设计对语义ID、生成式推荐有参考价值，关系检索的上下文条件统计是轻量召回基线的可借鉴设计。可借鉴点还包括以访问成本而非精确匹配为核心的评测思路。待验证的是：结论来自小规模设想布局数据与简化成本模拟，个性化主导的发现需要在更大规模真实使用数据上复核。

### 局限与阅读边界

- 作者已承认的局限：导航与搜索成本模型是刻意简化的模拟，采用固定每步成本和统一用户策略，不刻画真实XR交互的感知、认知与运动动态；评测假设上下文标签已给出，未计入上游感知错误；框架强调可复现的量化评测，抽象掉了感知相关性、认知负荷、信任等体验维度。
- 从材料可合理提出的验证问题：MineXR源自实验室环境下的设想布局而非长期真实使用，用户与上下文特定信号稀疏，用户主导的结论可能受数据规模与构成影响；少样本条件中部分迁移组合的匹配场景数极少，其优势数值不稳定；成本模型中的各步代价设定会直接影响方法间排序，换用更丰富的代价模型后结论是否保持有待检验。
- 本次阅读范围的限制：论文声明代码、数据集与基准已公开，但本次未核验仓库内容与复现环境；LLM结果依赖单一商用模型与固定温度，跨模型稳健性未在文中报告。

## Component Benchmark: Hierarchical Model Profiling for Large-scale Recommendation Systems {#arxiv-2609-30656}

**作者：** Dharak Kharod, Yuzhen Huang, Zhou Wang, Jackie Xu, Fuzail Khan, Jacky Zhou, Hao Yan, Lidong Zhao, Xizhou Feng, Yvonne Liu, Karthik Jayaraman, Praveen Ramachandran, Vishwa Karia, Yashasvi Makin

**命中的作者机构：** Meta

**作者单位原文：** Meta Platforms Inc , Sunnyvale, California, USA &#123;dharakk, yuzhenhuang, zhouwang, jackiexu0313, fuzailkhan, junqingz, haoyan17, lidong, fengx&#125;@meta.com &#123;yvliu, karthikjay, pramacha, vishwakaria, yashasvi&#125;@meta.com；Meta Platforms Inc；&#123;dharakk, yuzhenhuang, zhouwang, jackiexu0313, fuzailkhan, junqingz, haoyan17, lidong, fengx&#125;@meta.com；&#123;yvliu, karthikjay, pramacha, vishwakaria, yashasvi&#125;@meta.com

**论文：** [arXiv](https://arxiv.org/abs/2609.30656) · [本次阅读版本 v1](https://arxiv.org/abs/2609.30656v1)

阅读范围：完整 PDF，共 9 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Large-scale recommendation models pose distinct, under-explored profiling challenges. Most recommendation model architectures are structurally heterogeneous, intermixing memory-bandwidth-bound operations, small compute-bound dense layers, dynamic shapes from jagged categorical features, and low-arithmetic-intensity operations. Recommendation models evolve rapidly as modeling engineers experiment with compositions, often written without visibility into hardware execution characteristics. Standard profiling tools offer either end-to-end throughput or operator-level traces, but cannot attribute performance to the submodules that practitioners reason about. We present Component Benchmark (CB), a profiling system that independently characterizes each submodule performance in a hierarchical manner, providing a tree-structured, interactive visualization that brings performance clarity to ML practitioners. At its core, CB provides a simple yet extensible, submodule-based benchmarking framework with a plugin architecture that enables hierarchical performance analysis. These large-scale recommendation models are TB-scale, run on thousands of GPUs and ingest 100B examples per day. We demonstrate CB's effectiveness on common open sourced models and discuss how CB has been leveraged to accelerate modern recommendation model performance analysis and optimization.

### 一句话速览

论文面向大规模推荐模型训练的性能剖析难题，提出组件级剖析系统 CB：利用 PyTorch hook 独立捕获每个子模块及其运行时输入，分层递归剖析并以树状交互视图呈现时延、内存、FLOPs 与 MFU。在开源 DLRM 与 NanoGPT上演示功能，并报告多个生产优化案例，如算子改写带来训练与服务吞吐净提升、编译机会评估支撑 QPS 提升。

### 研究动机

- 大规模推荐模型的性能剖析与通用语言模型很不一样：其架构高度异构，混合了受内存带宽限制的嵌入查表操作、计算受限的小型稠密层、由参差不齐的类别特征带来的动态形状，以及算术强度很低的逐元素操作。Meta 的推荐模型达到 TB 级规模，在数千块 GPU 上持续训练，每天摄入约十的十一次方量级样本，在这种规模下，个位百分比的吞吐提升也会放大为全集群的容量收益。
- 现有剖析工具只能提供端到端吞吐或算子级 trace：前者无法回答“该优化哪个模块”，后者粒度太细且缺乏组件语义，工程师常在 trace 中看到热点却难以归因到具体模型组件；PyTorch 2 编译还会进一步抹平模块边界。本文要回答的问题是：如何把性能可靠地归因到工程师实际推理时所用的子模块粒度，并让非性能专家也能方便地定位瓶颈。

### 方法与关键设计

- CB 的核心思路是把性能测量单元从整个训练任务缩小到子模块。它基于 PyTorch 的模块树，在感兴趣的子模块（默认全部子模块）上注册前向 hook，在实际执行时捕获每个子模块的运行时输入，从而在组件边界处重建细粒度的前向与反向执行行为。作者曾尝试注入 trace 注解或修改编译器内部来恢复模块级信息，但在大规模场景下不可靠，最终选择了这种显式捕获、独立剖析的简单设计。
- 剖析流程按广度优先递归进行：先枚举所有子模块并按层级深度排序，逐个捕获输入、运行预处理器和剖析插件；用户可配置剖析深度并过滤不关心的模块。当某个高层模块大到无法放进单块 GPU 时，CB 会跳过该模块，改为聚合其子模块的结果来估计父模块行为，从而分层重建模块级信息。
- 系统采用极简的插件架构，核心只有约一千行代码，包含四类扩展点：Component Provider 负责从不同训练栈中取出顶层模型和输入，适配异构框架；Preprocessor 插件在剖析前调整批大小、混合精度等；Profiler 插件实现核心剖析逻辑，内置 FLOPs 计数、内存快照、Kineto trace 采集和核级分析；Result 插件负责聚合与可视化，例如生成分层的 Icicle 交互视图和模型图。
- 针对推荐模型特有的工程难点，CB 在输入处理上做了两件事：一是利用训练栈自带的数据加载逻辑取真实输入，通常单个 batch 即有代表性，需要模拟动态形状时可扩展为多 batch；二是应对嵌入表查找可能占用数 TB 内存的问题，在提取子模块输入时缩小嵌入哈希规模并缩减批大小以适配单 GPU，再在 Preprocessor 插件中复制张量恢复到原始批大小，既保留输入分布又减少本地剖析时的显存溢出。
- 结果呈现为层级化交互报告：结果表中每行对应一个按路径标识的子模块，报告时延、模型大小、每秒 TFLOPS、MFU（模型浮点利用率）、CPU/GPU 时间、估计带宽及利用率，并提供指向 trace、GPU 快照和 Perfetto 等工具的链接；Icicle 视图按所选指标（如 MFU）用红绿色谱着色，用户可点击任意模块下钻。与 PyTorch Profiler 的 with_modules 在完整执行中就地归因不同，CB 独立剖析每个子模块，避免核调度重叠、缓存热度与编译器融合等跨模块干扰，在 PyTorch 2 编译抹平模块边界时仍能保留模块语义。

### 实验设计与论证方式

- 在单块 Nvidia H100 上对开源 DeepFM 结构的 DLRM 模型和 NanoGPT 语言模型运行 CB，配置 MFU、Kineto trace、内存快照及自定义可视化插件，展示层级结果表与 Icicle 视图；作者说明该实验仅为功能演示。
- 生产案例部分报告了注意力模块算子改写、PT2 编译机会评估、生成式推荐排序模型回归归因和子模块定向压缩四个真实优化场景，属于线上训练与服务环境的实际收益，而非受控对比实验。

### 结果与证据

- 在某个基于注意力的模块中，CB 的子模块级 MFU 报告定位出多个低利用率的 GEMV 核；工程师把部分受内存带宽限制的 GEMM/GEMV 操作改写为逐元素核，虽然单个核比厂商库更慢，但扩大了 PT2 融合区域并改善访存模式，最终带来训练与服务吞吐的净提升。该结果说明局部变慢可能换来全局变快，是整体 trace 无法检验的假设。（V Results in Practice）

  > Engineers found that re-authoring certain memory-bound GEMM/GEMV operations to instead dispatch elementwise kernels - even though those kernels are individually slower than the vendor library GEMM - enlarged the PT2 fusion region and improved memory access patterns, producing a net training and serving throughput gain of 3%.

- 对一个仅部分模块启用 PT2 编译的模型，CB 在集成前独立基准测试有编译与无编译的版本，量化了扩展编译范围的机会，支撑了后续带来线上 QPS 提升的改造决策；整体模型方法无法把编译收益归因到未编译的子模块，因此这类测量只有组件级隔离剖析才能完成。（V Results in Practice）

  > Benchmarking the model in isolation with and without PT2 reduced iteration time from 83 ms to 50 ms, sizing the opportunity before any integration effort was incurred and justifying work that delivered 34% QPS increase. The measurement is unreachable by whole-model methods, which cannot attribute compiler benefit to an uncompiled submodule.

- 一个生成式推荐排序模型相对前代出现内存与 FLOPs 的显著增长却无从归因，CB 的逐模块内存与 FLOPs 分解把增长定位到事件模型变重和 set-transformer 块扩大这两处具体改动；恢复基线维度后收回了 QPS 与内存损失。这支持组件级归因对跨模型回归诊断的价值，但属于单一案例。（V Results in Practice）

  > CB’s per-module memory and FLOPs breakdown localized the increase to two specific changes: a heavier event model and enlarged set-transformer blocks; restoring the baseline dimensions recovered 10% QPS and 22% memory savings.

- 在开源 DLRM 模型的演示剖析中，Icicle 视图与下钻结果显示 sparse_arch 几乎完全受内存带宽限制，inter_arch 下 deep_fm 为计算受限而 fm 为带宽受限，dense_arch 中相邻 Linear 层的 MFU 差异被层级归因于矩阵形状而非模块类型差异。这些是演示性观察，不构成对生产模型优化收益的证据。（IV-A Benchmark Results）

  > Fig. 5: Zoom-in on the inter-arch module Fig. 6: Zoom-in on the dense-arch module Diving deeper into the model, we see Figure 5 which zooms into the inter_arch module. We infer the following information traversing each level: • The inter_arch.deep_fm and inter_arch.fm modules are sibling sub-modules that are compute (MFU: 27.06%) and bandwidth-bound (MFU: 0.06%) respectively.

### 与小组方向的关联

论文与小组的推荐系统、排序召回及模型架构方向直接相关：CB 提供的子模块级 MFU、时延与内存归因方法，可用于诊断大规模推荐模型训练瓶颈，其独立剖析子模块以规避编译器融合干扰的设计值得借鉴；生成式推荐排序模型的回归归因案例尤其贴近语义 ID 类模型的工程实践。可借鉴其插件化剖析框架思路，但文中收益数字来自 Meta 内部环境，迁移前需在自有栈上验证。

### 局限与阅读边界

- 作者承认开源模型上的观察仅为演示性质，MFU 等结论依赖所选优化目标与输入分布；剖析需要真实数据，类别特征稀疏度和序列长度分布会显著影响结果，换数据或换配置后结论可能改变。
- 单 GPU 本地剖析需要对大模型做近似处理：嵌入哈希规模被缩小、批大小先缩减再复制回原尺寸，这保留了输入分布但改变了内存占用形态，对以显存为优化目标的结论需谨慎外推；父模块结果由子模块聚合估计，与整体执行时的核调度重叠、缓存状态和编译器融合存在差异。
- 生产案例的收益数字来自 Meta 内部栈，基线配置、硬件规模与流量条件未在本文完整给出，外部团队复现这些量级收益属于待验证问题；本次阅读未核验代码仓库与开源状态。

## ToolSearcher: Optimizing Tool Selection at Scale via Reinforcement Learning {#arxiv-2609-30906}

**作者：** Zhenlong Dai, Xujie Song, Zitong Wang, Tong Niu, Jian liu, Weiqiang Wang, Xiu Tang, Sai Wu, Chang Yao, Jingyuan Chen

**命中的作者机构：** Alibaba

**作者单位原文：** Ant Group

**论文：** [arXiv](https://arxiv.org/abs/2609.30906) · [本次阅读版本 v1](https://arxiv.org/abs/2609.30906v1)

阅读范围：完整 PDF，共 29 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Large language models (LLMs) excel at natural language processing but struggle to interact with external environments. Tool learning provides a promising way to extend LLMs into actionable agents, where tool selection is a critical prerequisite for successful tool use. Existing work often assumes a small or predefined set of tools, leaving large-scale tool selection underexplored. Real-world repositories contain a vast and diverse array of tools, making it difficult for LLMs to effectively search, distinguish, and compose tools under context-length constraints. We identify large-scale tool selection as a new challenge for agentic reinforcement learning, highlighting that existing RL methods for knowledge-based question answering are inadequate for selecting tools while considering compatibility. To address this challenge, we propose ToolSearcher, a novel RL framework for effective multi-turn search and fine-grained optimization in large-scale tool selection. Specifically, we introduce category-constrained tool discrimination to improve the model's ability to distinguish functionally similar tools, event-level search modeling to explicitly optimize the discovery of target tools during multi-turn search, and trajectory-aligned credit allocation to provide fine-grained reward signals for different stages of the search-selection process. Extensive experiments on large-scale tool selection benchmarks demonstrate that ToolSearcher consistently outperforms a set of strong baselines in challenging settings involving iterative search and complex tool composition.

### 一句话速览

论文研究大规模工具库中的工具选择问题：给定用户需求，LLM 通过多轮调用搜索引擎检索并选出满足接口兼容性的工具集合。提出 ToolSearcher 强化学习框架，包含类别约束工具判别、事件级搜索建模和轨迹对齐信用分配三个组件，在 StableToolBench 与 AppWorld 上稳定超过 Search-R1、GSPO、GDPO、MARAG-R1 等基线，尤其改善复杂工具组合场景。

### 研究动机

- 任务输入是用户需求与一个大规模工具库（每个工具有功能描述、输入约束和输出 schema），输出是满足任务要求的工具集合；模型通过多轮调用搜索引擎检索工具文档再决策。这类能力是 LLM 智能体执行真实任务的前提，因为上下文长度限制使模型无法把所有工具文档放进提示词，必须先搜索再选择。
- 已有工作多假设候选工具集小或预先给定，与真实生态中工具数量庞大、功能与语义高度相似的情况脱节。把 RL 用于知识问答式多轮检索的方法（如 Search-R1、MARAG-R1）依赖迭代补充信息，不显式建模工具搜索过程，也难以推理工具组合的接口兼容性；同时轨迹级奖励对所有动作给同一信号，监督稀疏。
- 本文要回答的问题是：如何在大规模工具库上有效进行多轮搜索，并对搜索、判别、选择等多种能力给出细粒度的奖励信号，使模型学会搜索并组合兼容的工具。

### 方法与关键设计

- 任务形式化：在工具库 <span class="paper-math">&#92;(&#92;mathcal&#123;T&#125;&#92;)</span> 上，给定需求 <span class="paper-math">&#92;(q&#92;)</span> 和搜索引擎 <span class="paper-math">&#92;(&#92;mathcal&#123;R&#125;&#92;)</span>，目标是让策略 <span class="paper-math">&#92;(&#92;pi&#95;&#92;theta&#92;)</span> 最大化选出目标工具集 <span class="paper-math">&#92;(&#92;mathcal&#123;T&#125;&#95;s&#92;)</span> 的条件概率 <span class="paper-math">&#92;(P&#95;&#92;theta(&#92;mathcal&#123;T&#125;&#95;s|q,&#92;mathcal&#123;T&#125;,&#92;mathcal&#123;R&#125;)&#92;)</span>。每轮模型生成符合 schema 的搜索调用，搜索引擎返回文档，模型据此继续搜索或输出最终工具列表；检索到的 token 做 loss masking，不参与策略梯度。
- 第一个组件是类别约束工具判别（CCTD）。利用工具库自带的类别（如社交、体育、金融）把检索从全局搜索改为类别内搜索：<span class="paper-math">&#92;(D=&#92;mathcal&#123;R&#125;(C&#95;&#42;,Q&#92;mid&#92;mathcal&#123;T&#125;&#95;&#123;C&#95;&#42;&#125;)&#92;)</span>，即在给定类别 <span class="paper-math">&#92;(C&#95;&#42;&#92;)</span> 的子空间内检索。类别内工具相似度极高，构成一个强约束的困难训练环境，迫使模型学会区分功能相近的工具而不是只优化查询语义。训练分两阶段：先用约三成数据在子类别搜索设置下训练，再切换到全局搜索设置。
- 第二个组件是事件级搜索建模（ESM）。把搜索轨迹 <span class="paper-math">&#92;(&#92;mathcal&#123;S&#125;&#92;)</span> 建模为事件序列 <span class="paper-math">&#92;(&#92;mathcal&#123;E&#125;=(e&#95;1,&#92;dots,e&#95;k)&#92;)</span>，每个事件 <span class="paper-math">&#92;(e&#95;k=(a&#95;k,&#92;mathcal&#123;R&#125;(a&#95;k))&#92;)</span> 是一次搜索动作及其返回的工具集。关键定义是首次发现新目标工具的事件集合：<span class="paper-math">&#92;(&#92;mathcal&#123;T&#125;&#95;&#123;e&#95;j&#125;=&#92;mathcal&#123;M&#125;(e&#95;j)&#92;cap(&#92;mathcal&#123;T&#125;&#95;s&#92;setminus&#92;mathcal&#123;M&#125;(&#92;mathcal&#123;E&#125;&#95;&#123;&lt;j&#125;))&#92;)</span>，只有 <span class="paper-math">&#92;(&#92;mathcal&#123;T&#125;&#95;&#123;e&#95;j&#125;&#92;neq&#92;emptyset&#92;)</span> 的事件进入 <span class="paper-math">&#92;(&#92;mathcal&#123;E&#125;^&#42;&#92;)</span> 参与优化，重复搜到已见工具的事件不奖励。
- 在此基础上，事件级优势借鉴 GRPO 的组内相对基线：对每个需求采样 <span class="paper-math">&#92;(G&#92;)</span> 条轨迹，token <span class="paper-math">&#92;(&#92;mathcal&#123;S&#125;&#95;&#123;i,t&#125;&#92;)</span> 所在事件的优势为 <span class="paper-math">&#92;(&#92;widehat&#123;A&#125;&#95;&#123;i,e(t)&#125;=&#92;max&#95;&#123;T&#92;in&#92;mathcal&#123;T&#125;&#95;&#123;e(t)&#125;&#125;&#92;left[&#92;frac&#123;r(T,&#92;mathcal&#123;S&#125;&#95;i)-&#92;mathrm&#123;mean&#125;(&#92;&#123;r(T,&#92;mathcal&#123;S&#125;&#95;j)&#92;&#125;&#95;&#123;j=1&#125;^G)&#125;&#123;&#92;mathrm&#123;std&#125;(&#92;&#123;r(T,&#92;mathcal&#123;S&#125;&#95;j)&#92;&#125;&#95;&#123;j=1&#125;^G)&#125;&#92;right]&#92;)</span>，其中 <span class="paper-math">&#92;(r&#92;)</span> 是指示目标工具是否被搜到的 0/1 函数；不在 <span class="paper-math">&#92;(&#92;mathcal&#123;E&#125;^&#42;&#92;)</span> 中的事件优势置零。这样梯度集中在真正推进搜索的事件上，附录 F 的梯度分析显示每个事件的梯度系数由其事件级优势决定，而 GRPO/GSPO 等基线整条轨迹共享同一结果奖励。
- 第三个组件是轨迹对齐信用分配（TCA）。同一任务的不同轨迹进度差异很大：有的完成选择，有的搜齐工具但选错，有的还在早期搜索。TCA 规定：只有当轨迹 <span class="paper-math">&#92;(&#92;mathcal&#123;S&#125;&#95;i&#92;)</span> 已搜齐全部目标工具（<span class="paper-math">&#92;(&#92;mathcal&#123;M&#125;(&#92;mathcal&#123;S&#125;&#95;i)&#92;cap&#92;mathcal&#123;T&#125;&#95;s=&#92;mathcal&#123;T&#125;&#95;s&#92;)</span>）时，选择事件才获得基于二值选择奖励 <span class="paper-math">&#92;(r&#95;s&#92;)</span> 的组内归一化优势，否则置零，防止模型在没搜到工具时靠猜蒙对；同时组内已被普遍掌握的目标工具对应的搜索事件优势也置零，把学习信号留给尚未掌握的步骤。
- 与基线的差异在于：Search-R1、GSPO 用轨迹级结果奖励，GDPO 把搜索召回与选择匹配两个奖励解耦归一化后相加，MARAG-R1 用多个奖励直接求和；本文则按事件和阶段分配不同优势。训练在 8 张 A100 上进行，检索器为 Qwen3-Embedding-0.6B，每轮返回 5 篇文档，最多 8 轮交互，每 prompt 采样 5 条 rollout，两阶段训练共 1 个 epoch。

### 实验设计与论证方式

- 训练与主评测用 StableToolBench：约 1.6 万个 API、49 个类别，训练集 1.4 万余条样本，覆盖单工具（I1）、类内多工具（I2）、集合内多工具（I3）三类指令，并按未见指令、未见工具、未见类别三个层次考察泛化。指标包括 F1、Recall、Precision、Match（衡量所选工具与真值的匹配程度）和 SRecall（衡量搜索阶段召回目标工具的比例）。注意这是在约 1.6 万工具的候选空间中先多轮搜索再选择，不是常规推荐排序任务。
- 基线覆盖两种范式：RAG 与 RAG SFT（单轮检索取 top-100 文档），以及把搜索引擎当外部工具的 Multi-turns、Search-R1、GSPO、GDPO、MARAG-R1。骨干为 Qwen2.5-7B-Instruct 和 Qwen3-4B-Instruct，所有 RL 方法使用相同检索器、轮数、rollout 数等配置以保证公平。OOD 评测用 AppWorld（9 个应用、457 个有状态 API），工具选择在其训练集上评（有工具标注），下游执行用 FullCodeRefl 加 gpt-5-mini 生成代码，报告 TGC 与 SGC；因 D-3 难度主要受代码生成影响，只评 D-1/D-2。
- 消融在 Qwen2.5-7B-Instruct 上分别去掉 CCTD、ESM、TCA；另有不同搜索设置对比（CCTD 约束搜索 vs 全局搜索）和训练曲线分析（SRecall、交互轮数、选择 Recall 随训练步数变化）。论文未报告误差棒，仅固定随机种子；本次未见任何线上/AB 实验，代码与数据集声明在 GitHub 公开，本次未核验仓库内容。

### 结果与证据

- 在 Qwen2.5-7B-Instruct 上，相比未训练的多轮基线，ToolSearcher 把整体 F1 和 Match 提升到远高于基线的水平，说明该框架对大规模工具选择本身有效；但这是与未训练基线的对比，不能据此推断相对强 RL 基线的优势幅度。（Section 5.1）

  > For example, on Qwen2.5-7B-Instruct, ToolSearcher improves the overall F1 score from 9.8% to 51.3% and the Match score from 4.6% to 27.8% compared with the multi-turn baseline.

- 在最难的 I3 场景（集合内多工具组合）上，ToolSearcher 的 F1 超过四个 RL 基线，且在 Qwen3-4B 上呈类似趋势，支持事件级搜索与细粒度奖励对复杂工具组合更有利的论点；这是两个基准上的观察，不构成对其他工具库的因果结论。（Section 5.1）

  > This advantage is especially notable in the challenging I3 scenario, where ToolSearcher surpasses GDPO, MARAG-R1, GSPO, and Search-R1 by 6.6%, 8.3%, 9.8%, and 10.0%, respectively. A similar performance trend can be observed on Qwen3-4B-Instruct, further demonstrating the stable improvements achieved by our method.

- 在 OOD 的 AppWorld 上，ToolSearcher 的下游执行完成率（TGC 与 SGC）平均优于次优方法，说明工具选择质量的提升能传导到代码执行结果；但训练数据缺乏状态感知，作者自己指出在 AppWorld 上的提升仍然有限。（Section 5.3）

  > For tool calling performance, our method also achieves the best Task Goal Completion (TGC) and Scenario Goal Completion (SGC) on average. For example, ToolSearcher outperforms the second-best method ( i.e. , GDPO) by 5.7% in both overall TGC and SGC on Qwen2.5-7B-Instruct.

- 去掉事件级搜索建模后，两个数据集上搜索阶段召回率大幅下降，且训练曲线显示模型与搜索引擎的交互轮数明显减少，说明该组件是维持主动多轮搜索的关键；这是消融证据，不能排除其他因素（如奖励稀疏程度）的叠加作用。（Section 5.4）

  > These results highlight that trajectory-aligned credit assignment provides more accurate and stable learning signals for tool selection at various stages of progress. (3) Removing ESM significantly decreases performance for tool searching, with the SRecall score dropping by 22.4% on StableToolBench and 39.4% on AppWorld, highlighting its importance in tool searching.

### 与小组方向的关联

与小组的 Agentic RL、多轮检索/召回方向高度契合：事件级优势估计和轨迹对齐信用分配是可直接借鉴的细粒度奖励设计，CCTD 的困难课程构造思路也可迁移到相似候选区分问题。实验含双骨干、多基线、消融与 OOD 评测，代码声明开源，但无线上结果，且训练数据为 LLM 合成、工具组合偏并行，方法在强时序依赖场景的收益有待验证。

### 局限与阅读边界

- 作者承认的局限：训练数据由 LLM 合成，工具组合多为并行而非时序依赖，缺乏状态感知，导致在 AppWorld 这类有状态 API 环境的提升受限；训练上下文窗口限制交互轮数为 8（约 5000 token），而 AppWorld 场景平均涉及超过 8 个 API，作者提出用上下文摘要缩短窗口作为未来方向。
- 可合理提出的验证问题：CCTD 依赖工具库自带类别标注，在无类别或类别质量差的仓库中是否仍有效未验证；事件级优势以目标工具是否首次被搜到为信号，依赖真值工具集，实际部署中如何获得可靠奖励未讨论；消融只在 Qwen2.5-7B 上做，组件在小模型上的贡献是否一致待验证。
- 本次阅读范围限制：论文未报告误差棒与多次运行的方差，结果稳定性只能依据固定种子的单次结果；代码仓库本次未核验，复现环境与数据预处理细节以论文描述为准。

## PIA: A Personal Intelligence Agent Turning Health Conversations into Records and Records into Understanding {#arxiv-2609-31255}

**作者：** Jeonghun Yoon, Dongchan Kim, Hongyeon Yu, Young-Bum Kim, Jaegul Choo

**命中的作者机构：** Naver

**作者单位原文：** NAVER Corp., Seongnam, Republic of Korea；NAVER Corp., Bellevue, WA, USA

**论文：** [arXiv](https://arxiv.org/abs/2609.31255) · [本次阅读版本 v1](https://arxiv.org/abs/2609.31255v1)

阅读范围：完整 PDF，共 13 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

General-purpose agent memory summarizes conversations: it extracts salient snippets, embeds them, and retrieves the top-k into the prompt. A health agent cannot run on summaries: a dose becomes a sentence, "since last week" is resolved at the model's discretion, and a three-month glucose trend cannot be answered by text similarity. We present PIA, a personal intelligence agent deployed alongside a consumer health agent. PIA receives the agent's natural-language requests, decides for itself whether and how to write or read, and turns conversations into typed clinical records and records into a synthesized understanding of the user. Its memory harness consists of four controls -- extraction, memory, retrieval, and understanding -- each a domain-agnostic mechanism with a pluggable health module: schema, medical alias dictionary, knowledge graph, and temporal rules. We show how the same query receives a different answer as the memory injected into the response context deepens from one-dimensional recall, to a two-dimensional health snapshot, to a three-dimensional trajectory with causality, and report lessons from operation: self-reported health data are missing not at random, question phrasing governs the quality of synthesized understanding, and nearly a third of candidate causal links are structural noise that rules alone remove.

### 一句话速览

面向生产健康助手的个人记忆代理 PIA：把对话抽取为带类型的临床记录，再由后台引擎 HU2 合成用户理解。核心是提取、记忆、检索、理解四个领域无关控制加可插拔健康模块，并在合成用户场景上评测门控、路由与存储质量，报告了自报数据缺失偏差等运营教训。

### 研究动机

- 任务背景是消费级健康代理的长期记忆：输入是用户与代理的多轮健康对话，输出是代理每轮可引用的证据包和一份持续更新的用户理解。通用代理记忆的做法是抽取显著片段、向量化后按相似度取 top-k 注入提示词，适合记住座位偏好这类事实。
- 作者指出这在健康场景有三个缺陷：记录被压平成句子，无法按字段查询聚合；时间被模型猜测，事件时间与提及时间混淆后趋势问题不可靠；用户只是被罗列而非被理解，例如用户没提糖尿病时系统无法把血糖、糖化血红蛋白归到糖尿病概念下。
- 论文要回答的问题是：如何把对话变成可查询、可聚合、带可靠时间的类型化临床记录，并把记录合成为对用户的整体理解。与 Mem0、Zep、MemGPT 等记忆框架相比，差别在于提供类型背后的完整流水线（准入规则、确定性时间运算、失败即拒的校验），而非仅允许开发者声明实体类型。

### 方法与关键设计

- PIA 部署在生产健康代理之后，每轮接收代理的自然语言请求，自主决定写、读或两者兼做。整体是双副本结构：写路径由紧凑归一化器把话语写成健康用户档案（HUP）记录存入关系型记录系统，同一轮同时被开源 Hindsight 引擎保留为联想记忆中的事实、因果边和合并观察；读路径经读门和读路由器选择结构化检索、联想召回或两者组合。
- 提取控制：结构化解码强制输出落入 23 种 HUP 类型之一，是否成记录由模式匹配而非模型裁量决定。时间表达式被逐字复制、绝不由模型计算日期，由非 LLM 的确定性时间解析器相对提及时间换算出绝对事件时间、睡眠区间和预计用药结束日期；事件时间与提及时间分开存储，缺失则留空。同一指标的记录沿时间轴链接成趋势记录，相关事件组成检查、处方等容器型片段。帮助理解的例子：用户说“三天前体重 80 公斤”，解析器按规则得到事件日期为提及日减三天，而非让模型猜。
- 记忆控制决定什么被承认为事实：测试结果只有在名称与版本化的医学别名词典精确匹配时才入库，近似匹配进入候选队列等待离线扩充；入库后由医学知识图谱标注，把事实（原样数值）、标注（标准键、对照参考区间的异常标记、临床概念标签）与综合（读时生成、永不存储的解释文本）分开。标注让系统能回答用户从未说过的概念，例如“我的糖尿病数值”解析到打了糖尿病概念标签的检验项。
- 检索控制按待做的判断构造证据：枚举、数值、趋势类请求走按类型和字段读取记录库的结构化检索；无法表达的请求走联想召回，嵌入、关键词、图链接候选融合重排后进行再水化——从记录系统重读原始记录，使数值、单位、来源、时间来自字段而非句子。硬边界规则：请求点名某药或某检验而库中无匹配时返回空结果而非相似度兜底，因为缺失检验的最近邻是错误的检验。
- 理解控制与 HU2：HU2 在请求路径之外运行，对合并记忆提出七个问题（用户是谁、身体状态、行为状态、医疗约束、目标轨迹、偏好、行动建议），每题经共享指令转发给联想记忆的记忆推理循环，答案带出处存储并发布为常驻上下文包。问题文本是契约标识符，改一个词就触发全体用户重问；只有行动建议字段允许推荐，从而用问题本身强制推理边界。记录变更时按再生策略合并突发请求、只重问变化字段，行动建议字段总是重问。作者还提出理解的五级阶梯：状态摘要在生产，目标生命周期在生产/试点，因果关联在试点，纠错与反事实仅为设计。

### 实验设计与论证方式

- 评测套件对运行中的实例重放场景文件，采用两层打分：对冻结真值的确定性探针，以及存储、检索、回答、能力四轴的 LLM 评审，每轴只给通过与不通过、不求和。套件含 271 个场景（存储、路由、检索及一个 HU2 场景），基于 20 个合成用户共 741 条话语、976 条记录；真值由三位有健康领域背景的标注者逐条审核后冻结，每次测量在独立运行上重复以报告波动幅度。
- 比较对象是各组件自身的目标行为而非外部基线：RETAIN 门控的精确率、召回率与准确率，READ 门控的召回率，读路由器的工具选择正确率及返回结果查询上的 MRR、召回率与精确率，评审在存储场景上的存储判定通过率。另报告部署记录库中全部富化测试结果行的标注覆盖率，这是行级聚合而非按用户指标。论文未与开源记忆框架做定量对比，三维度个性化示例仅作场景展示、未测量。

### 结果与证据

- 在合成用户上，RETAIN 写入门控在多次独立运行中从未错误收录不应保留的话语，整体准确率较高；其漏收是失败即拒默认策略的代价，说明该设计以牺牲部分召回换取记录层零误存。（Section 6, Results）

  > Results. Table 2 summarizes. The RETAIN decision never admitted an utterance that should not have been kept (precision 100% in all four runs) and reached 94.9% accuracy; its misses (recall 89.1%) are the price of the fail-closed default. READ recalls 91.0% of the turns that need memory.

- 读路由器在多数决策中选中了预期工具；在返回了结果的查询上，排序指标显示目标记录通常排在前列。这些数字只在返回非空结果的查询上计算，不能推广到全部查询，也不构成与基线系统的优劣比较。（Section 6, Results）

  > The read router selected the intended tool in 91.0% of 335 decisions; over queries that returned rows, MRR is 0.785 with recall@ <span class="paper-math">&#92;(k&#92;)</span> 0.763 and precision@ <span class="paper-math">&#92;(k&#92;)</span> 0.758 ( <span class="paper-math">&#92;(k&#123;=&#125;5&#92;)</span> for 60 queries, 1 otherwise). On the 54 storage scenarios the judge’s storage verdict—the axis these scenarios are built to test—passes in 88.3% (spread 7.4 over three runs).

- 部署记录库的聚合统计显示，绝大多数测试结果行带有标准键和概念标签，但只有约三分之二获得参考区间、更少获得异常标记，暴露了词典参考区间覆盖不足的短板；这是行级聚合，不能推断单个用户的记录质量。（Section 6, Results）

  > Across all 16,122 enriched test-result rows in the deployed record store at measurement time (an aggregate count over rows, not a per-user measure), 99.7% carry a standard key and 99.2% a concept tag, but only 66.6% a reference range and 64.4% an abnormality flag—the footprint of a dictionary with 144 range rows for 319 tests.

- 表格确认了门控、路由与存储路径在合成用户上的整体表现，且各数字来自不同场景数与运行次数的独立测量；所有评测均基于合成数据，不能直接外推到真实用户线上表现。（Table 2）

  图表观察（PDF 第 6 页）：表 2 汇总各组件指标：Gate RETAIN 精确率 100.0、召回率 89.1、准确率 94.9；Gate READ 召回率 91.0；检索工具选择 91.0、MRR 0.785、Recall@k 0.763、Precision@k 0.758；评审存储判定通过率 88.3。门控数字来自 192 个路由场景四次运行平均，检索数字来自 24 个检索场景三次运行，评审数字来自 54 个存储场景三次运行。

### 与小组方向的关联

论文与小组的大模型个性化、Agent 记忆方向高度相关：四控制记忆框架、确定性时间解析、精确匹配准入门控、HU2 问题契约和上下文包都是可迁移到个性化推荐或对话代理的系统设计。可借鉴其把记录层与联想记忆双副本分离、用问题文本做版本化契约的做法；其三维度个性化是场景展示而非测量，迁移到推荐收益需自行验证。

### 局限与阅读边界

- 作者已承认的局限：理解阶梯中只有第一级状态摘要在生产，第二、三级为试点，第四、五级仅为设计，相关论述是设计主张而非测量行为；精确别名词典的覆盖决定了记录层召回上限，且门控目前只覆盖测试结果、药物仍在进行中；评测全部使用合成用户、确定性探针和全上下文 LLM 评审，三维度个性化只是场景示例，真实用户纵向评测因隐私无法对外报告，也未与开源记忆框架做定量比较。
- 从材料可合理提出的验证问题：门控与路由指标在合成场景上测得，场景分布由作者构造，真实对话中话语形态更杂时表现是否保持未知；评审存储判定通过率在三次运行间波动较大，稳定性有待更多运行确认；自报数据缺失非随机的偏差会从第二级传播到第三级，因果关联的可靠性依赖过滤规则的质量。
- 本次阅读范围限制：论文未提供开源代码仓库，本次也未核验任何复现环境；部署细节（如线上时延、成本）未报告，无法评估该多组件流水线在实际请求路径外的运行开销。

<span id="digest-content-6463c9baa0eb19257a5d862197585b69bb0f47d1fe76ae1accd52194f08cb2e0" hidden></span>
