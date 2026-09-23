---
layout: post
title: 2026-09-23 论文速报合集
date: 2026-09-23 00:00:00 +0800
permalink: /posts/2026-09-23-paper-digest/
categories:
- 论文速报
tags:
- LLM预训练
- 检查点平均
- 学习率调度
- 训练方法
- 偏差方差权衡
- 个性化搜索
- LLM重排序
- 行为信号融合
- 捷径学习
- 特征丢弃训练
- 在线实验
- 推荐系统
- 多任务学习
- 排序
- 在线学习
- 生产系统
- 模型结构设计
- Attention机制
- 线性注意力
- 视觉骨干网络
- 知识蒸馏
- 边缘部署
- MoE
- 参数高效微调
- 子专家
- 模型架构设计
- 稀疏微调
- LLM安全
- 越狱防御
- 提示优化
- 中间层注入
- 图预训练
- 提示学习
- 带符号图
- 拓扑数据分析
- 图神经网络
- 持久同调
description: 今日收录 7 篇与小组方向相关的论文。
comments: true
math: true
papers:
- arxiv_id: '2609.25482'
  arxiv_version: 1
  title: Terminal Shrinkage Averaging Reveals a Schedule-Estimator Interaction in
    LLM Pretraining
- arxiv_id: '2609.25825'
  arxiv_version: 1
  title: Robust Fusion of Semantic and Behavioural Signals for LLM Reranking in Personalised
    Search
- arxiv_id: '2609.25433'
  arxiv_version: 1
  title: 'Lightweight Ranking Heads: Accelerating Multi-Task Experimentation in Production
    Recommender Systems'
- arxiv_id: '2609.26590'
  arxiv_version: 1
  title: 'GTR: Gated Token Recurrence for Efficient Dense Prediction'
- arxiv_id: '2609.25655'
  arxiv_version: 1
  title: 'From Experts to Sub-experts: Fine-grained Parameter-Efficient Fine-Tuning
    for MoE LLMs'
- arxiv_id: '2609.26185'
  arxiv_version: 1
  title: Dynamic Deep Prompt Optimization for Defending Against Jailbreak Attacks
    on LLMs
- arxiv_id: '2609.25722'
  arxiv_version: 1
  title: Signed Graph Pre-Training and Prompt Learning
paper_pipeline:
  schema: 1
  kind: digest
  provider: openrouter
  model: z-ai/glm-5.3-flash
  source_hash: 8c999cf52c70bd845a88a979db197c103cfb860eb04d6e2f6eb3db2994c9c0b9
  generated_date: '2026-09-23'
  render_hash: 69affb467fcc979e7172af725dfbf88cadf377637c9adb576ebef13133120e19
institutions:
- Michigan
- Spotify
- Google
- DiDi
- Alibaba
- Berkeley
- UCLA
---

| 排名 | 评分 | 论文 | 机构 | arXiv 链接 | 主题 |
| ---: | ---: | --- | --- | --- | --- |
| 1 | 9 | [Terminal Shrinkage Averaging Reveals a Schedule-Estimator Interaction in LLM Pretraining](#arxiv-2609-25482) | Michigan | [2609.25482](https://arxiv.org/abs/2609.25482) | LLM预训练、检查点平均、学习率调度、训练方法、偏差方差权衡 |
| 2 | 9 | [Robust Fusion of Semantic and Behavioural Signals for LLM Reranking in Personalised Search](#arxiv-2609-25825) | Spotify | [2609.25825](https://arxiv.org/abs/2609.25825) | 个性化搜索、LLM重排序、行为信号融合、捷径学习、特征丢弃训练、在线实验 |
| 3 | 8 | [Lightweight Ranking Heads: Accelerating Multi-Task Experimentation in Production Recommender Systems](#arxiv-2609-25433) | Google | [2609.25433](https://arxiv.org/abs/2609.25433) | 推荐系统、多任务学习、排序、在线学习、生产系统、模型结构设计 |
| 4 | 8 | [GTR: Gated Token Recurrence for Efficient Dense Prediction](#arxiv-2609-26590) | DiDi | [2609.26590](https://arxiv.org/abs/2609.26590) | Attention机制、线性注意力、视觉骨干网络、模型结构设计、知识蒸馏、边缘部署 |
| 5 | 7 | [From Experts to Sub-experts: Fine-grained Parameter-Efficient Fine-Tuning for MoE LLMs](#arxiv-2609-25655) | Alibaba | [2609.25655](https://arxiv.org/abs/2609.25655) | MoE、参数高效微调、子专家、模型架构设计、稀疏微调 |
| 6 | 7 | [Dynamic Deep Prompt Optimization for Defending Against Jailbreak Attacks on LLMs](#arxiv-2609-26185) | Michigan | [2609.26185](https://arxiv.org/abs/2609.26185) | LLM安全、越狱防御、提示优化、中间层注入、模型结构设计 |
| 7 | 6 | [Signed Graph Pre-Training and Prompt Learning](#arxiv-2609-25722) | Berkeley、UCLA | [2609.25722](https://arxiv.org/abs/2609.25722) | 图预训练、提示学习、带符号图、拓扑数据分析、图神经网络、持久同调 |

今日收录 **7** 篇论文。评分为 10 分制阅读推荐度：方向相关性 4 分、方法贡献 3 分、实验证据或论证支撑 3 分；按总分降序排列，同分按 arXiv 编号排序。机构列为已识别的命中机构。点击论文标题跳转正文。各篇阅读范围不同，完整结论请核对原文。

## Terminal Shrinkage Averaging Reveals a Schedule-Estimator Interaction in LLM Pretraining {#arxiv-2609-25482}

**作者：** Adam Ousherovitch, Yixin Wang

**命中的作者机构：** Michigan

**作者单位原文：** Department of Statistics, University of Michigan；aoushero@umich.edu；yixinw@umich.edu

**论文：** [arXiv](https://arxiv.org/abs/2609.25482) · [本次阅读版本 v1](https://arxiv.org/abs/2609.25482v1)

阅读范围：完整 PDF，共 29 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Large language model (LLM) pretraining conventionally returns the raw final iterate. This couples two design choices: the learning-rate schedule that generates the parameter trajectory and the estimator that constructs the deployed model (e.g. the raw final iterate or a checkpoint average). A schedule that promotes optimization progress may differ from one that minimizes variation in the raw final iterate. Separating these choices creates an opportunity to maintain progress late in training while reducing variation in the returned model. To this end, we propose \emph&#123;Terminal Shrinkage Averaging (TSA)&#125;, which interpolates between the raw final iterate and the average of recent checkpoints to balance recent progress against terminal variation. We analyze how TSA changes the preferred terminal learning-rate schedule under a local quadratic approximation and test this interaction through a sequence of controlled NanoChat experiments. Finally, we demonstrate that the resulting gains transfer to depth-22 NanoChat, where the combined schedule and estimator improve validation quality. A qualifying time-to-GPT-2 run also finishes faster than the public baseline used in our experiments, providing preliminary evidence of benchmark acceleration.

### 一句话速览

论文研究 LLM 预训练中学习率调度与部署模型估计器的耦合问题，提出终端收缩平均（TSA）：在原始最终参数与近期检查点平均之间插值。理论分析加受控 NanoChat 实验表明，使用 TSA 时更活跃的终端学习率反而更优，该交互在更深模型规模上迁移成立，适用于预训练收尾调度设计。

### 研究动机

- LLM 预训练的常规做法是按某个学习率调度（schedule）训练到最后一步，然后直接部署最终的原始参数（raw final iterate）。这实际上把两个设计问题捆在一起：一是在训练末期（cooldown 阶段）参数轨迹应该如何走，二是从这条轨迹上取哪个模型来部署。如果想在末期保持参数仍有较大更新幅度（更有可能继续取得优化进展），最终单点参数的随机波动就会变大；而把学习率压低可以减小波动，却也限制了参数还能前进的空间。
- 已有的检查点平均方法（如 LAWA、SWA）表明平均可以降低输出模型的方差，且在学习率更高时平均更有效，但这些工作问的是“在给定轨迹下平均能带来多少收益”；本文问的是相反方向的问题：一旦承诺部署一个平均后的模型，是否应该换一条不同的终端轨迹？也就是平均强度与 cooldown 强度是否需要联合选择。
- 本文要回答的具体问题是：在局部二次近似下，终端收缩平均的最优收缩系数为什么位于两个端点之间；以及降低方差型的估计器是否会使更活跃的终端学习率调度变得 preferable，并通过受控实验直接检验这一交互。

### 方法与关键设计

- TSA 的定义很简洁：设在终端步 T 保存 K 个相隔 s 步的检查点，其平均为 <span class="paper-math">&#92;(&#92;bar&#123;&#92;theta&#125;&#95;&#123;T&#125;=&#92;frac&#123;1&#125;&#123;K&#125;&#92;sum&#95;&#123;j=0&#125;^&#123;K-1&#125;&#92;theta&#95;&#123;T-js&#125;&#92;)</span>，TSA 返回 <span class="paper-math">&#92;(&#92;widehat&#123;&#92;theta&#125;&#95;&#123;T&#125;(&#92;alpha):=(1-&#92;alpha)&#92;theta&#95;&#123;T&#125;+&#92;alpha&#92;bar&#123;&#92;theta&#125;&#95;&#123;T&#125;&#92;)</span>，其中 <span class="paper-math">&#92;(&#92;alpha&#92;in[0,1]&#92;)</span> 是唯一的收缩系数。<span class="paper-math">&#92;(&#92;alpha=0&#92;)</span> 即原始最终参数，<span class="paper-math">&#92;(&#92;alpha=1&#92;)</span> 即均匀 LAWA。由于最终检查点本身包含在平均中，它获得总权重 <span class="paper-math">&#92;(1-&#92;alpha+&#92;alpha/K&#92;)</span>，其余检查点各得 <span class="paper-math">&#92;(&#92;alpha/K&#92;)</span>。
- 理论分析用一个正半定二次模型 <span class="paper-math">&#92;(L&#95;&#123;&#92;mathrm&#123;quad&#125;&#125;(&#92;theta):=L(&#92;theta^&#123;&#92;star&#125;)+&#92;frac&#123;1&#125;&#123;2&#125;(&#92;theta-&#92;theta^&#123;&#92;star&#125;)^&#123;&#92;top&#125;H(&#92;theta-&#92;theta^&#123;&#92;star&#125;)&#92;)</span> 近似损失在检查点所在的短终端窗口内的形状，其中 <span class="paper-math">&#92;(&#92;theta^&#123;&#92;star&#125;&#92;)</span> 是局部极小点，<span class="paper-math">&#92;(H&#92;)</span> 是曲率矩阵。把每个检查点分解为期望部分 <span class="paper-math">&#92;(&#92;mu&#95;j&#92;)</span> 和训练随机性带来的残差 <span class="paper-math">&#92;(&#92;epsilon&#95;j&#92;)</span>，定义 <span class="paper-math">&#92;(m:=&#92;mu&#95;0-&#92;theta^&#123;&#92;star&#125;&#92;)</span>（原始最终点相对极小点的位移，代表进展）与 <span class="paper-math">&#92;(A:=&#92;mu&#95;0-&#92;bar&#123;&#92;mu&#125;&#92;)</span>（最终点与平均点期望位置的位移，代表滞后）。代入 TSA 定义可得精确分解 <span class="paper-math">&#92;(&#92;widehat&#123;&#92;theta&#125;&#95;&#123;T&#125;(&#92;alpha)-&#92;theta^&#123;&#92;star&#125;=m-&#92;alpha A+&#92;epsilon&#95;&#123;0&#125;+&#92;alpha q&#92;)</span>：确定性项 <span class="paper-math">&#92;(-&#92;alpha A&#92;)</span> 刻画平均把输出均值拉向较旧检查点造成的滞后代价，随机项 <span class="paper-math">&#92;(&#92;alpha q&#92;)</span> 刻画平均消除随机误差的收益。
- 由此得到定理一：期望超额风险满足 <span class="paper-math">&#92;(&#92;mathcal&#123;R&#125;(&#92;alpha)=&#92;mathcal&#123;R&#125;(0)+&#92;alpha(G&#95;&#123;&#92;mathrm&#123;lag&#125;&#125;-G&#95;&#123;&#92;mathrm&#123;noise&#125;&#125;)+&#92;frac&#123;&#92;alpha^&#123;2&#125;&#125;&#123;2&#125;(&#92;|A&#92;|&#95;&#123;H&#125;^&#123;2&#125;+V&#95;&#123;q&#125;)&#92;)</span>，其中 <span class="paper-math">&#92;(G&#95;&#123;&#92;mathrm&#123;lag&#125;&#125;=-&#92;langle m,A&#92;rangle&#95;H&#92;)</span> 是滞后代价，<span class="paper-math">&#92;(G&#95;&#123;&#92;mathrm&#123;noise&#125;&#125;=-C&#92;)</span> 是降噪收益。这是一个关于 <span class="paper-math">&#92;(&#92;alpha&#92;)</span> 的凸二次函数：当降噪收益大于滞后代价时少量平均有益；又因二次项使边际收益递减，最优 <span class="paper-math">&#92;(&#92;alpha&#92;)</span> 常落在内部——既非原始最终点也非完全 LAWA。附录报告的二次拟合以接近一的拟合优度实证支持了这一形状。
- 第二步分析固定 <span class="paper-math">&#92;(&#92;alpha&#92;)</span>，把风险写成 <span class="paper-math">&#92;(&#92;mathcal&#123;R&#125;&#95;&#123;&#92;alpha&#125;(&#92;rho)=B&#95;&#123;&#92;alpha&#125;(&#92;rho)+S&#95;&#123;&#92;alpha&#125;(&#92;rho)&#92;)</span>，<span class="paper-math">&#92;(&#92;rho&#92;)</span> 参数化终端活跃度（实验中即终端学习率下限）。比较在 <span class="paper-math">&#92;(&#92;rho&#95;&#123;&#92;mathrm&#123;raw&#125;&#125;&#92;)</span>（原始最终点偏好值）处的导数可推出：若平均的随机收益随终端活跃度增长快于其确定性成本，则使用平均输出时最优 <span class="paper-math">&#92;(&#92;rho&#92;)</span> 更大。一个一维推论给出直观例子：对单步噪声二次更新，最优步长满足 <span class="paper-math">&#92;(&#92;eta&#95;&#123;&#92;alpha&#125;^&#123;&#92;star&#125;=&#92;eta&#95;&#123;&#92;mathrm&#123;raw&#125;&#125;^&#123;&#92;star&#125;/(1-&#92;alpha/2)&#92;)</span>，任何 <span class="paper-math">&#92;(&#92;alpha&gt;0&#92;)</span> 都严格提高偏好步长，完全平均时翻倍（作者强调这只是揭示偏好调度会移动的条件，不保证幅度）。
- 与基线的关键差异：TSA 不修改优化器更新规则（与 Lookahead、PACE 等在训练过程中插值的方法正交），也不改变实时参数轨迹，只在终端做一次插值构造部署模型，因此可以干净地分离“轨迹如何训练”与“从轨迹取什么”两个选择。实现上，默认取若干个相隔固定步数的近期检查点，窗口约占训练总步数的一小部分，快照以 bfloat16 存储并以 float32 评估。方法只增加保存检查点的内存开销，不增加优化步数。

### 实验设计与论证方式

- 论文为实证型方法论文，实验分四层。第一层在固定的深度十二 NanoChat 轨迹（十二层、约两亿八千多万参数、三千优化步）上仅变化估计器：在五条独立数据顺序的确认轨迹上扫描 <span class="paper-math">&#92;(&#92;alpha&#92;)</span> 网格，指标为验证 BPB（越低越好），发现最优收缩系数明显位于内部，完全 LAWA 反而差于原始最终点。
- 第二层用配对析因设计，把终端学习率下限（峰值的百分之五、十、十五）与输出估计器（原始最终点 vs 固定收缩系数的 TSA）交叉，五个配对数据顺序重复；交互量定义为原始最终点的调度效应减去 TSA 的调度效应。第三层在纯 AdamW 下复现同一设计，检验交互是否依赖 NanoChat 原生的 Muon+AdamW。
- 评价协议上有明确的开发/确认划分：系数规则先在开发流上校准并冻结，确认轨迹训练完成后才在从未使用的留出批次上评估；区间为跨五条独立训练流的百分之九十五 Student-t 区间，配对设计消除了流间共同波动。规模迁移在深度二十二的 time-to-GPT-2 基准上进行：从公开配方出发，在相同数据参数比端点比较三个配置，另报 DCLM CORE 资格指标。全文为离线基准实验，无线上/AB 结果。

### 结果与证据

- 在固定训练轨迹上，部分收缩的收益明显位于内部：最优测试系数改善验证 BPB，预声明确认设置也有可分辨的改善，而完全均匀 LAWA 反而劣于原始最终点。这说明部分平均优于两端点，且不依赖对收缩系数的精细调节；该结论基于多条小规模轨迹的配对确认，不能直接外推到其他规模或架构。（Section 4.1）

  > The best tested point is <span class="paper-math">&#92;(&#92;alpha=0.40&#92;)</span> , whereas full LAWA ( <span class="paper-math">&#92;(&#92;alpha=1&#92;)</span> ) is worse than the raw final iterate. The response is broad and clearly interior. The best tested coefficient, <span class="paper-math">&#92;(&#92;alpha=0.40&#92;)</span> , improves BPB by <span class="paper-math">&#92;(0.000794&#92;pm 0.000087&#92;)</span> ; the predeclared confirmation setting <span class="paper-math">&#92;(&#92;alpha=0.55&#92;)</span> improves BPB by <span class="paper-math">&#92;(0.000711&#92;pm 0.000098&#92;)</span> .

- 在更强的终端活跃度干预下，两个简单效应方向相反且统计上均可分辨：提高终端活跃度使原始最终点变差，却使 TSA 变好；配对交互在两种干预强度下对所有流均为正。这直接支持论文核心的调度-估计器交互预测，说明估计器选择会改变何种终端调度更有利。（Table 1, Section 4.3）

  > resolved. At <span class="paper-math">&#92;(15&#92;%&#92;)</span> , the simple effects themselves point in opposite and statistically resolved directions: the raw final iterate worsens, whereas TSA improves.

- 在纯 AdamW 下，同一配对设计复现了正向交互，且在两个干预强度下所有重复均为正，只是幅度小于原生优化器。这表明该现象并非 Muon+AdamW 特有，支持交互的一般性；但 AdamW 幅度更小的原因文中未给出机制解释。（Section 4.4）

  > We retain the fixed TSA coefficient <span class="paper-math">&#92;(&#92;alpha=0.55&#92;)</span> and measure the within-stream interaction. It is <span class="paper-math">&#92;(0.000782&#92;pm 0.000089&#92;)</span> BPB for the <span class="paper-math">&#92;(10&#92;%&#92;)</span> floor and <span class="paper-math">&#92;(0.002536&#92;pm 0.000204&#92;)</span> BPB for the <span class="paper-math">&#92;(15&#92;%&#92;)</span> floor, and is positive in all five repetitions at both floors ( Figure 4 , right).

- 在更大的深度二十二规模上，更高的终端下限加 TSA 的组合在配对比较中于全部配对种子上改善验证 BPB，平均 CORE 超过资格阈值，但三个重复中只有一个单独达标，因此作者也将其定位为相对官方记录的初步结果；训练时间差异被归因于分配间的吞吐波动，不能解读为算法加速。该迁移仅在 NanoChat 体系内检验。（Table 2）

  图表观察（PDF 第 9 页）：深度 22 匹配端点比较（三个种子，均停在第 10172 步）：PR #830 early stop 验证 BPB 0.721617±0.000624、CORE 0.2479±0.0200；direct 9.0 基线 BPB 0.720235±0.000735、CORE 0.2491±0.0106；15% floor + TSA 的 BPB 0.719580±0.000562、CORE 0.2579±0.0159，训练时间 77.896±0.029 分钟。资格阈值 0.256525，三个种子中仅一个单独达标。

### 与小组方向的关联

对 interests 中“模型架构设计、预训练”直接相关：TSA 提供了一个几乎零训练成本的部署端估计器，而调度-估计器交互提示预训练收尾阶段应把学习率调度与输出规则联合调优，可借鉴到小组内预训练或大规模训练流程中。理论（滞后-降噪二次权衡）与配对确认实验设计（开发/确认划分、规则冻结）都值得模仿。与推荐、检索、语义 ID 等方向无直接关联；其收益尚未在更大规模或线上环境验证，采用前需在自身配置下复测。

### 局限与阅读边界

- 作者已承认的局限：TSA 只探索了输出估计器空间的一小部分，使用单一全局收缩系数，尽管附录中基于参数角色（嵌入、隐藏矩阵、unembedding、其余）的分组带来小幅但可分辨的额外收益；终端调度也只通过简单的学习率下限修改，其他 cooldown 形状、时长或检查点布置可能与估计器产生不同交互。理论基于局部二次近似，只用于解释末期权衡，不是完整的神经网络优化模型。
- 可合理提出的验证问题：所有规模迁移仅在 NanoChat 单节点级别的深度二十二设置上进行，跨架构、数据集和显著更大训练体制的迁移是开放的；论文未声明开源代码，本次也未核验任何复现仓库；时间到 GPT-2 的记录资格只有三个种子中的一个达标，官方记录层面的结论应视为初步。
- 本次阅读范围限制：文中报告均为验证 BPB 与 DCLM CORE 等离线指标，没有下游任务质量或线上效果证据；深度二十二实验的 TSA 系数直接沿用小规模实验在高下限条件下的最优值，这种跨规模系数迁移策略本身的稳健性未单独消融。

## Robust Fusion of Semantic and Behavioural Signals for LLM Reranking in Personalised Search {#arxiv-2609-25825}

**作者：** Aleksandr V. Petrov, Nathan Stein, Erik Lybecker, Emma Schüldt, Daniel Lazarovski, Hugues Bouchard, Mounia Lalmas

**命中的作者机构：** Spotify

**作者单位原文：** Spotify , UK；Spotify , Sweden；Spotify , Stockholm , Sweden；Spotify , Spain；Spotify

**论文：** [arXiv](https://arxiv.org/abs/2609.25825) · [本次阅读版本 v1](https://arxiv.org/abs/2609.25825v1)

阅读范围：完整 PDF，共 10 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Personalised search must satisfy query intent while incorporating user context and historical interactions. LLM-based cross-encoders provide a single reranking interface, but injecting predictive behavioural statistics into their prompts can encourage shortcut learning: reliance on historical signals at the expense of semantic and user-context patterns that generalise to sparse or unseen searches. We study this problem in the personalised search system of a large-scale audio streaming platform using Query Slice Stats (QSS), an interaction-derived behavioural feature summarising historical success for query-candidate pairs. Naive QSS injection improves ranking when the feature is available but reduces robustness when it is removed. We address this with deterministic dual-sample feature-dropout training, which presents each example once with QSS included and once with QSS removed. Offline, QSS injection improves ranking quality by 13.3% when available. Dual-sample training preserves these gains while improving performance under QSS-removed evaluation by 4.0% relative to naive QSS training. In a live online test, both QSS-aware variants improve search success by roughly 2%. The aggregate test does not distinguish dual-sample from features-only training; the cold-start comparison is directionally consistent with the offline results. Paired feature-present and feature-removed training can therefore reduce the tension between exploiting strong behavioural statistics and remaining robust when they are unavailable.

### 一句话速览

论文研究Spotify个性化搜索中的LLM交叉编码器重排序：把历史查询—条目成功率QSS离散化为提示词特征注入后，特征可用时排序显著提升，但会诱发捷径学习，特征缺失时性能下降。作者提出确定性的双样本特征丢弃训练，每个样本同时以含QSS和去QSS两个视图训练，在保留收益的同时改善稀疏与冷启动场景的鲁棒性，并通过线上A/B/C实验验证。

### 研究动机

- 个性化搜索处在检索与推荐的交界：输入是用户查询、用户上下文（如市场、近期收听历史）和候选条目，输出是对第一阶段召回候选集的重排序分数。同一查询对不同用户可能对应不同意图，因此排序既要满足显式查询意图，也要利用用户偏好和群体交互证据。
- 工业排序系统长期依赖点击率、历史成功率等行为统计特征，这类特征在头部高频查询—条目对上预测力很强，但在长尾和冷启动流量上稀疏甚至缺失。LLM交叉编码器提供了一条无需改架构的融合路径：把结构化特征转成文本token放进提示词。然而作者指出这带来捷径学习风险——当注入特征高度可预测时，模型会过度依赖它，牺牲能泛化到稀疏、未见查询的语义与个性化模式。
- 本文要回答的问题是：如何让重排序器在行为统计可靠时充分利用它，又在其稀疏或缺失时保持有效。作者以音频流媒体平台的QSS特征为研究对象，识别并量化这一权衡，并检验配对式特征移除训练能否缓解它。

### 方法与关键设计

- 系统采用候选生成加重排序的两段式架构：重排序器基于一个0.6B参数的开源预训练语言模型（PLUM风格检查点），对第一阶段检索返回的候选做逐点相关性打分。模型词表用基于平台交互数据构建的语义ID扩展，使条目身份信息能以紧凑离散表示与自然语言元数据并列编码。
- 提示词按三类信号组织：语义证据包括查询文本和候选的标题、创作者、内容类型与语义ID；用户上下文证据包括国家与近期语义ID；行为证据包括流行度分档和QSS成功率分档。连续或高基数值在插入前被离散化为粗粒度文本档位，使行为信号与语义信号走同一文本接口。论文图1给出了这一提示词构成的示意图，生产提示词还包含更多字段。
- QSS（Query Slice Stats）具体指查询—条目—国家组合的历史搜索成功率，来自特征库中多粒度切片的聚合交互统计，以基点表示。作者不注入原始数值，而是按历史分布分位数离散为very_low到very_high五个有序档位，缺失值记为unknown并从提示词中省略。QSS在高频组合上是强记忆型信号，对稀有组合几乎无信息，这正是研究捷径学习的理想载体。
- 训练采用逐点二分类：提示词呈现用户上下文、查询和候选特征，因果语言模型预测单个相关性token（Y或N），推断时用决策位置上Y的对数概率作为排序分数，类似monoT5的做法，无需任务专用打分头。监督微调损失为<span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;SFT&#125;&#125;(x,y)=-&#92;log p&#95;&#123;&#92;theta&#125;(y&#92;mid&#92;mathbf&#123;s&#125;)&#92;)</span>，其中<span class="paper-math">&#92;(x&#92;)</span>是提示词，<span class="paper-math">&#92;(&#92;mathbf&#123;s&#125;&#92;)</span>是token序列，<span class="paper-math">&#92;(y&#92;in&#92;&#123;&#92;text&#123;Y&#125;,&#92;text&#123;N&#125;&#92;&#125;&#92;)</span>，损失只在标签位置计算。
- 核心方法是双样本特征丢弃训练：每个带标签样本构造两个提示词，<span class="paper-math">&#92;(x^&#123;+&#125;&#92;)</span>为含全部特征的完整提示词，<span class="paper-math">&#92;(x^&#123;-&#125;&#92;)</span>为除QSS外与之完全相同的去QSS版本，两者共享同一标签<span class="paper-math">&#92;(y&#92;)</span>。混合损失为<span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;mixture&#125;&#125;=&#92;alpha&#92;cdot&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;SFT&#125;&#125;(x^&#123;+&#125;,y)+(1-&#92;alpha)&#92;cdot&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;SFT&#125;&#125;(x^&#123;-&#125;,y)&#92;)</span>，<span class="paper-math">&#92;(&#92;alpha&#92;in[0,1]&#92;)</span>控制含QSS视图的权重。去QSS项相当于针对行为统计依赖的正则化，迫使模型在强预测特征被移除时仍能依靠语义与上下文做出正确预测。作者强调这是提示词级数据增强而非新的学习原则，与随机隐藏单元Dropout不同，也与随机QSS丢弃（每次更新随机采样一个视图）相区别；随机丢弃作为辅助消融被评估，但未做匹配的统计比较。
- 与基线的关键差异在于：仅用完整提示词训练会让模型只见过QSS存在的输入，而双样本目标显式暴露两种视图。训练计算量约增加一倍，但服务时仍是单模型、单次前向、提示词接口不变，无需备用的降级排序器；由于两个提示词仅差QSS特征，理论上还可通过共享前缀的键值缓存优化训练计算。

### 实验设计与论证方式

- 数据来自平台两周的生产搜索交互日志：训练集100万会话、约45万唯一查询、4600多万唯一条目；评估集为不重叠时段的1万会话。候选为用户成功交互（如播放、关注、加库）的条目标为正，平均每会话约514个候选仅1.3个正例，稀疏性很高。评估集中约三分之一查询在训练中未出现，头部（训练频次超过500）会话占比极小，长尾主导。
- 指标为逐会话计算的NDCG@7和Recall@7，截断7对应生产界面首屏可见结果数，显著性用会话级配对t检验。所有模型从同一0.6B检查点出发微调一个epoch，扫描混合权重<span class="paper-math">&#92;(&#92;alpha&#92;in&#92;&#123;0,0.25,0.5,0.75,1.0&#92;&#125;&#92;)</span>，每个模型在含全部特征与去QSS两种条件下评估。诊断参照点包括随机排序、BM25元数据匹配、monoT5和仅用QSS打分，后两者未调参，仅作参照而非竞争性生产基线。
- 线上A/B/C测试比较三个变体：无QSS的对照模型（服务时也不注入QSS以免引入噪声）、双样本训练（<span class="paper-math">&#92;(&#92;alpha=0.5&#92;)</span>）和仅特征训练（<span class="paper-math">&#92;(&#92;alpha=1.0&#92;)</span>）。前线指标为搜索成功（用户与结果发生成功交互），按用户级分析；另按展示条目的最大训练频次切分为冷启动、躯干和头部切片，作者明确说明切片分析功效不足，只能作方向性解读。本次材料未包含代码公开声明，开源状态未核验。

### 结果与证据

- 离线实验表明，注入QSS在特征可用时明显提升排序质量；双样本训练在保留这些收益的同时，相对朴素注入训练在QSS被移除的评估下取得更好的表现，说明配对训练能同时兼顾行为信号利用与特征缺失鲁棒性。（Abstract）

  > We address this with deterministic dual-sample feature-dropout training, which presents each example once with QSS included and once with QSS removed. Offline, QSS injection improves ranking quality by 13.3% when available. Dual-sample training preserves these gains while improving performance under QSS-removed evaluation by 4.0% relative to naive QSS training.

- 线上A/B/C测试中，两个QSS感知变体相对无QSS对照均提升了搜索成功指标；但总体对比无法区分双样本与仅特征训练，冷启动切片的方向与离线结果一致，只能作为方向性证据而非结论性证据。（Abstract；第6节 Online Evaluation）

  > In a live online test, both QSS-aware variants improve search success by roughly 2%. The aggregate test does not distinguish dual-sample from features-only training; the cold-start comparison is directionally consistent with the offline results.

- 取中间混合权重时，去QSS评估下的排序质量与完全不用QSS训练的基线在统计上无显著差异，而始终注入QSS的训练在该条件下显著变差；这说明中等程度的QSS暴露足以拿到行为信号收益，同时避免模型对行为统计形成过度依赖。（5.2.2节；Table 2）

  > At <span class="paper-math">&#92;(&#92;alpha&#123;=&#125;0.5&#92;)</span> , NDCG@7 under QSS-removed evaluation remains statistically indistinguishable from the model trained without QSS (0.547 vs. 0.550; <span class="paper-math">&#92;(p=0.15&#92;)</span> ), whereas <span class="paper-math">&#92;(&#92;alpha&#123;=&#125;1.0&#92;)</span> reduces performance significantly to 0.526.

### 与小组方向的关联

论文直接落在小组的搜索/信息检索与LLM+推荐结合方向：LLM交叉编码器重排序、行为信号与语义信号融合、冷启动鲁棒性都是核心议题，且带有真实线上A/B/C实验，工程参考价值高。可借鉴的点包括把结构化特征离散化为提示词分桶、用特征移除评估诊断捷径依赖、以及双样本配对训练目标。局限是只研究单一QSS特征与单一系统，语义ID仅作为实体表示而非核心贡献，结论向其他特征族和场景迁移仍需验证。

### 局限与阅读边界

- 作者承认的局限：实验只聚焦单一QSS特征和单一重排序器，完全移除特征是有意的压力测试，不能代表部分缺失、噪声或过期特征等更现实的场景；用户上下文被并入整体提示词而未单独拆分其贡献，也没有与学习型个性化融合基线比较，替代融合架构的问题仍然开放。
- 从材料可合理提出的验证问题：线上切片分析本身统计功效不足，冷启动切片的置信区间接近零边界，双样本相对仅特征训练的线上优势尚需更大规模的切片实验确认；随机丢弃与确定性双样本之间缺少匹配的统计比较，哪种调度更优仍是未决问题；训练计算约翻倍的成本收益权衡也依赖具体部署条件。
- 本次阅读范围的限制：论文未报告推理时延与训练成本的量化数据，也未核验代码仓库与复现环境；结论建立在音频流媒体平台的流量分布上，向其他特征族、其他排序界面或其他领域迁移的效果属于作者列出的未来方向，尚未验证。

## Lightweight Ranking Heads: Accelerating Multi-Task Experimentation in Production Recommender Systems {#arxiv-2609-25433}

**作者：** Sanjay Surendranath Girija, Aniruddh Nath, Li Wei, Yanhao Jiang, Shawn Andrews, Lukasz Heldt, Yi Wu, Aditya Mahajan, Mohit Sharma

**命中的作者机构：** Google

**作者单位原文：** Google LLC , Mountain View , CA , USA；Google LLC

**论文：** [arXiv](https://arxiv.org/abs/2609.25433) · [本次阅读版本 v1](https://arxiv.org/abs/2609.25433v1)

阅读范围：完整 PDF，共 8 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Modern production-scale recommender systems rely on complex, multi-task ranking models. Introducing new prediction tasks into these massive systems often causes bottlenecks - it risks negative task conflicts with existing tasks, and can lead to long development and experimentation cycles due to the expensive retraining of backbone models and downstream models or tuning of reward combination formulas. To address the critical challenge of slow experimentation velocity, we introduce the Lightweight Ranking Heads (Light Heads) framework. Designed for continuous online learning environments, Light Heads enable the dynamic injection of new tasks into existing multi-task ranking models, effectively obviating the need for model cold-starting and retraining of backbone models. By utilizing stop-gradients and stateless daily training, this design strictly isolates new tasks, mitigating the risk of adverse task conflicts. Crucially, this framework uses a centralized configuration that allows Light Heads to be added to multiple models simultaneously, unblocking faster training data generation and co-training of downstream models. Successfully deployed at YouTube scale, this approach reduces the iteration cycle for multi-task experimentation from several weeks to days. In this paper, we detail the system architecture, analyze the training dynamics of stateless cold-started heads, compare their performance to full heads, and demonstrate how Light Heads have enabled the rapid A/B experimentation and deployment of new ranking tasks that yield measurable production value.

### 一句话速览

论文面向生产级多任务排序模型中新增预测任务迭代慢的问题，提出轻量排序头框架：通过中央配置把小头动态注入持续训练的排序模型，用停止梯度与无状态每日重置隔离新任务。在 YouTube 的实验显示稠密任务略低于全量头、稀疏任务接近持平，并将含下游模型的实验周期从数周缩短到约一半以下，已上线带来可测量的业务收益。

### 研究动机

- 现代生产级推荐系统由召回、排序、后排序和多样性等多个阶段串联组成，排序阶段通常是共享塔加多任务头的大型骨干模型，其预测再交给奖励模型或分数融合层使用。这类系统的输入是用户行为日志与内容特征，输出是各任务预测分数，用于最终推荐排序，使用场景是每日持续服务海量流量的线上系统。
- 在这样的系统中引入新预测任务面临三重瓶颈：一是新任务与旧任务可能产生负迁移，损害已有任务质量；二是骨干模型参数量巨大，为集成新任务而冷启动重训需要数天到数周；三是下游模型依赖上游预测构成的统一预测空间，新任务会产生新的预测空间，下游需要等待足够日志才能共同训练，而且几十个并行的实验模型都要“补课”才能让预测空间重新一致，可能拖延上线数月。
- 本文要回答的问题是：能否在不重训骨干、不影响现有任务质量的前提下，把新排序任务动态注入持续在线学习的多任务模型，并同时让所有在服模型输出统一预测空间，从而大幅缩短多任务实验的迭代周期。这与 LoRA、参数高效迁移学习等在冻结骨干上加适配层的思路同源，但针对的是持续训练的推荐排序系统。

### 方法与关键设计

- 框架由两部分组成：一份中央配置和模型内少量消费该配置的代码。中央配置独立于任何单一模型的代码，定义每个轻量头的标签、损失函数、激活函数、分类或回归目标、监控指标，还可扩展自定义采样和加权逻辑。所有排序模型在训练时读取同一配置，动态实例化并注入轻量头，这消除了大量实验模型逐个补课的需要。
- 轻量头结构是一个只有少量隐藏层的浅塔，刻意保持小规模，使其能在单次训练内收敛；注入位置通常与现有主头相同层，从而复用下方的共享塔表示。框架在轻量头底部施加停止梯度：反向传播只更新轻量头自身隐藏层，共享层不受新任务梯度影响。作者解释这带来两点好处：轻量头不会与现有任务或其他轻量头产生负迁移，未收敛的轻量头梯度也不会扰动下方各层。
- 配合浅架构与停止梯度，轻量头在每次训练开始时被重置、不持久化检查点，等效于每次迭代都从零冷启动。这种无状态设计保证所有在服模型上轻量头质量一致、方差极小，从而使中央配置驱动的所有模型都能同时产出统一的预测，供下游模型共同训练。论文以帮助理解的方式描述这一训练动态：图三展示每次重置后 AUC 先急剧下降，随后几步内快速恢复到局部最优；线上服务用的是完整训练结束后导出的模型，因此服务期预测质量不受重置影响。
- 与基线的差异在于：传统做法是把新任务作为全量头随模型冷启动、与共享塔共同训练，轻量头则冻结共享塔、只训练小头。框架还提供灵活性：可为未经验证的自定义标签生成训练数据；对极稀疏头可关闭重置、用检查点热启动；对主头因全局损失主导而照顾不佳的稀疏流量切片，轻量头可只在切片数据上训练而不影响共享层。
- 生产风险方面，配置在训练开始时读取并冻结整个训练期，修改在下次重置时生效；配有聚合质量监控面板、导出前自动评估阈值，以及轻量头缺失时的回退默认值，保证旧模型未更新配置时服务仍稳定。

### 实验设计与论证方式

- 实验在 YouTube Home 和 Watch Next 两个排序模型上进行，比较轻量头与全量头。轻量头使用停止梯度并在每次训练开始时重置，对应全量头则随模型冷启动、整个生命周期共同训练。实验覆盖分类头与回归头、数据量差异极大的任务，并对停止梯度和重置做消融。作者特别说明这些实验在真实生产系统的不同时间点进行，绝对指标因时间分布漂移而在不同表间略有差异，但每张表内的相对比较是受控的。
- 对比设置上，分类与回归头分别在 AUC 和 RMSE 上比较，另有不含对应全量头的独立轻量头实验检验共享表示的泛化。线上影响部分报告了包含排序模型与下游模型的完整实验周期时长，以及两个上线案例的 A/B 指标。候选空间与指标均为排序任务的离线评估指标加线上业务指标，未涉及召回阶段的对比。

### 结果与证据

- 在分类任务上，稠密任务的轻量头 AUC 略低于共同训练的全量头，而稀疏任务的轻量头能与全量头几乎持平，作者将其归因于共享塔已学到对该任务有用的表示。该结果支持冻结骨干训小头在稀疏任务上损失很小，但不代表所有任务类型都无损失。（Table 1，Section 4.1.1）

  > This can be attributed to the shared tower before the heads being able to learn good representations which are useful for the task. Table 1. Full Head vs Light Head Metrics on Classification Heads Head Full Head AUC Light Head AUC P(CTR) 0.781 0.772 E(Positive Sentiment) 0.9557 0.9553 E(Interaction Rate) 0.9794 0.9704 4.1.2.

- 框架已在 YouTube 两个大型模型家族上应用，涉及排序模型与下游模型的端到端实验总时长和启动联合实验所需时间都显著缩短，说明加速实验速度的目标在真实生产环境得到验证，而非仅离线模拟。（Section 5）

  > Production Impact The Light Heads framework has been applied successfully within YouTube on two large model families and has significantly reduced the experimentation duration when adding new heads. The total time for an experiment that involves the ranker model and a downstream model has been reduced from 24 days to 11 days.

- 一个优化长期奖励的轻量头上线后，在统计显著水平上提升了整体参与度并降低了低质曝光占比；另一例面向付费订阅用户的轻量头也带来该垂类参与度的大幅提升。这些是线上 A/B 结果，但为个例，不能推广为所有新任务都有类似收益。（Section 5.2）

  > First, a Light Head for optimizing long-horizon rewards drove a statistically significant ( <span class="paper-math">&#92;(p&lt;0.05&#92;)</span> ) +0.03% improvement in top-line engagement and a 0.40% reduction in low-quality impressions. The reduction in low-quality impressions ensures users are recommended higher-quality content, directly contributing to long-term user satisfaction.

- 移除停止梯度后，无论全量头还是轻量头的指标都变差，作者解释为新任务干扰了共享塔的表示学习，支持任务隔离设计对避免负迁移的作用。这属于生产系统上的受控消融，但任务对齐程度不同，不能断言停止梯度在所有任务组合上都是最优选择。（Table 4 与 Table 5）

  图表观察（PDF 第 6 页）：Table 4（全量头指标）：P(CTR) AUC 有停止梯度 0.7767、消融 0.7704；E(Positive Sentiment) AUC 0.9557 对 0.9541；E(Engagement) RMSE 0.9887 对 0.9975。Table 5（轻量头指标）：P(CTR) AUC 0.7667 对 0.7584；E(Positive Sentiment) AUC 0.9553 对 0.9541；E(Engagement) RMSE 0.9886 对 0.9976。

### 与小组方向的关联

论文与小组在推荐排序、多任务模型架构设计上的方向直接相关。停止梯度加无状态每日重置是一个成本低、机制清晰的隔离方案，可借鉴到多任务排序模型的新目标接入与稀疏切片优化中；中央配置驱动统一预测空间以加速下游共同训练的系统思路也值得参考。稀疏任务接近持平、稠密任务略降的边界条件，以及在自有系统上的适用性与收益，需在具体场景中实验验证。

### 局限与阅读边界

- 作者已承认的局限：框架依赖持续训练管线，无状态重置机制在低频批训练的系统上不可行；其工程开销只有在大量模型并行训练、并行几十个 A/B 实验的场景下才划算，小规模系统用传统冷启动更合理；在无下游数据依赖的单阶段推荐系统中，收益主要只剩省去骨干重训的算力；稠密任务上存在轻微离线指标下降，本质是成本与质量的帕累托权衡。
- 从材料可合理提出的验证问题：论文的分类与回归对比仅覆盖少数几个任务头，轻量头在其他类型目标（如更复杂的长序列或重尾标签）上是否仍能单次收敛未报告；无状态重置要求每次训练数据窗口足够支撑收敛，训练窗口长度的敏感性没有量化分析；全量头对比实验在不同时间点进行，虽表内受控，跨表结论仍需谨慎。
- 本次阅读范围不足：论文未提供代码仓库或复现环境的说明，本次也未核验开源情况；线上收益案例只有两个，其效果分布（成功与失败案例比例）未披露，因此对该框架上线收益的期望应结合自身场景做 A/B 验证而非直接外推。

## GTR: Gated Token Recurrence for Efficient Dense Prediction {#arxiv-2609-26590}

**作者：** Zhe Feng, Longfei Liu, Wei Liu, Kai Chen, Jiangjiang Kong, Wei Zhou, Yifeng Qian, Dexiong Chen, Xuanlong Yu, Xi Shen

**命中的作者机构：** DiDi

**作者单位原文：** Didi International Business Group；Didi Research

**论文：** [arXiv](https://arxiv.org/abs/2609.26590) · [本次阅读版本 v1](https://arxiv.org/abs/2609.26590v1)

阅读范围：完整 PDF，共 42 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Self-attention-based vision backbones perform well on dense prediction, but the quadratic computational cost of global softmax attention limits their efficiency as image resolution increases. We introduce Gated Token Recurrence (GTR), a softmax-free recurrent vision backbone that combines gated linear attention, alternating spatial scan directions, and spatially enhanced SwiGLU blocks. GTR is distilled from a detection-specialized DINOv3 teacher using only final-layer patch-token alignment through a linear projection and squared <span class="paper-math">&#92;(&#92;ell&#95;2&#92;)</span> loss, without masked-token prediction or intermediate-layer supervision. With Objects365 detector pre-training, GTR-L achieves 58.9 box AP on COCO \texttt&#123;val2017&#125; with 1.908\,ms median batch-one latency under compiled FP16 execution on an RTX~4090. The same backbone also transfers to instance segmentation, pose estimation, oriented detection, semantic segmentation, and monocular depth estimation. In an isolated kernel benchmark, our specialized chunkwise CUDA operator is <span class="paper-math">&#92;(4.0&#92;times&#92;)</span> faster than FLA v0.5.0 at 1.6K tokens on RTX~4090. TensorRT deployment on DRIVE AGX Thor achieves 2.282--8.769\,ms median batch-one latency across the evaluated models. These results show that recurrent token mixing can provide an efficient alternative to global softmax attention for high-resolution dense prediction and edge this http URL page: this https URL

### 一句话速览

论文提出 GTR，一种无 softmax 的门控线性注意力视觉骨干网络，通过四方向逐块扫描与空间增强 SwiGLU 实现线性复杂度的稠密预测，仅用最终 patch token 对齐从 DINOv3 教师蒸馏，在 COCO 检测及五个迁移任务上取得精度与时延的良好折中，并支持车载边缘部署。

### 研究动机

- 本文处理的任务是稠密预测：输入一张图像，输出像素级或目标级结构，如检测框、分割掩码、关键点或深度图，典型场景包括实时目标检测和车载边缘设备上的多任务感知。骨干网络需要在高分辨率输入下同时保证精度和低时延。
- 基于全局 softmax 注意力的视觉骨干在稠密预测上表现好，但注意力计算随图像 token 数呈二次增长，分辨率升高时代价迅速放大，在资源受限的边缘设备上尤其吃紧。线性注意力提供了复杂度更低的替代路线，已有工作如 EfficientViT 和 ViG 探索了这一方向，但要找到一个在模型大小、计算量、显存和时延都满足实际约束、又能跨多种稠密预测任务保持精度的通用线性注意力骨干，仍是开放问题。
- 论文要回答的核心问题是：线性注意力能否支撑一个跨任务通用、精度有竞争力的视觉骨干，并把理论上的线性复杂度真正转化为边缘硬件上的实测收益。

### 方法与关键设计

- GTR 的输入是图像，先按步长十六切分成 patch token 序列，骨干共十二个块且全程保持同一分辨率（单尺度结构）。每个块由两部分组成：用于长程上下文的门控线性注意力（GLA），以及用于局部空间混合的 Spatial SwiGLU。检测任务从第四、八、十二块取特征，经轻量投影构成步长八、十六、32 的三级特征金字塔，再接 DETR 式查询解码器；骨干本身保持单尺度，多尺度只在检测颈部构造。
- GLA 部分采用 key-only 变体。对每个头，输入 token 经投影得到 q、k、v，网络维护一个随扫描推进更新的循环状态，更新式为 <span class="paper-math">&#92;(&#92;mathbf&#123;S&#125;&#95;&#123;t&#125;=&#92;mathrm&#123;Diag&#125;(&#92;bm&#123;&#92;gamma&#125;&#95;&#123;t&#125;)&#92;mathbf&#123;S&#125;&#95;&#123;t-1&#125;+&#92;bm&#123;k&#125;&#95;&#123;t&#125;^&#123;&#92;top&#125;&#92;bm&#123;v&#125;&#95;&#123;t&#125;&#92;)</span>，输出为 <span class="paper-math">&#92;(&#92;bm&#123;o&#125;&#95;&#123;t&#125;=d&#95;&#123;k&#125;^&#123;-1/2&#125;&#92;bm&#123;q&#125;&#95;&#123;t&#125;&#92;mathbf&#123;S&#125;&#95;&#123;t&#125;&#92;)</span>。其中 <span class="paper-math">&#92;(&#92;bm&#123;&#92;gamma&#125;&#95;&#123;t&#125;=&#92;sigma(&#92;bm&#123;x&#125;&#95;&#123;t&#125;&#92;mathbf&#123;W&#125;&#95;&#123;&#92;alpha&#125;^&#123;(1)&#125;&#92;mathbf&#123;W&#125;&#95;&#123;&#92;alpha&#125;^&#123;(2)&#125;+&#92;bm&#123;b&#125;&#95;&#123;&#92;alpha&#125;)^&#123;1/&#92;tau&#125;&#92;)</span> 是逐 key 通道的保留门，取值在零到一之间，决定历史信息以多大比例保留；门采用秩为十六的低秩投影和温度参数。GTR 只用 key 侧衰减，value 侧衰减在训练和推理中都固定为一；输出端另有独立的数据依赖输出门作用于 RMS 归一化后的输出。由于没有 softmax 归一化，整个混合是递推形式，复杂度随 token 数线性增长，循环状态大小与序列长度无关。
- 因为递推沿扫描顺序是因果的，单方向扫描只能看到一侧上下文。GTR 让十二个块轮流使用左到右、右到左、上到下、下到上四种扫描方向，每块只做一次扫描并在之后恢复原空间顺序，使 token 随深度逐步获得互补的空间上下文。局部混合方面，Spatial SwiGLU 在 SwiGLU 的 value 分支中加入三乘三深度卷积：<span class="paper-math">&#92;(&#92;mathbf&#123;Y&#125;=&#92;bigl[&#92;mathrm&#123;SiLU&#125;(&#92;mathbf&#123;X&#125;&#92;mathbf&#123;W&#125;&#95;&#123;g&#125;)&#92;odot&#92;mathrm&#123;DWConv&#125;&#95;&#123;3&#92;times 3&#125;(&#92;mathbf&#123;X&#125;&#92;mathbf&#123;W&#125;&#95;&#123;v&#125;)&#92;bigr]&#92;mathbf&#123;W&#125;&#95;&#123;o&#125;&#92;)</span>，value 分支先重排成二维网格再卷积，提供非因果的邻域交互；整个网络不使用显式位置编码。直观地说，方向递推负责全局、S-SwiGLU 负责局部，两者互补。
- 训练分两步。先做跨架构蒸馏：冻结一个经检测任务适配的 DINOv3 教师，教师和学生接收同一整图，只对齐最终 patch token 表示。由于师生特征维度可能不同，学生对特征先过一个可学习线性投影 <span class="paper-math">&#92;(&#92;phi&#92;)</span>，目标是 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;mathrm&#123;align&#125;&#125;=&#92;frac&#123;1&#125;&#123;L&#125;&#92;sum&#95;&#123;i=1&#125;^&#123;L&#125;&#92;left&#92;|&#92;phi(&#92;mathbf&#123;Y&#125;&#95;&#123;&#92;mathrm&#123;stu&#125;&#125;^&#123;i&#125;)-&#92;mathbf&#123;Y&#125;&#95;&#123;&#92;mathrm&#123;tea&#125;&#125;^&#123;i&#125;&#92;right&#92;|&#95;&#123;2&#125;^&#123;2&#125;&#92;)</span>，即逐 patch 位置的平方欧氏损失，不用掩码预测、中间层监督或注意力对齐。相比 ViT-Linearizer 的多层匹配加掩码预测、ViT-AdaLA 的逐注意力模块对齐，这里只用单一阶段、单一损失。蒸馏数据为 ImageNet-1K 与 COCO 训练集混合，训练三百轮。
- 推理效率方面，论文为 GLA 写了专用分块 CUDA 算子：把逐 token 递推改写为固定大小块内的矩阵运算，先并行计算各块的摘要 <span class="paper-math">&#92;(&#92;mathbf&#123;U&#125;&#95;&#123;c&#125;&#92;)</span>，再通过轻量的边界状态扫描 <span class="paper-math">&#92;(&#92;mathbf&#123;S&#125;&#95;&#123;[c+1]&#125;=&#92;mathrm&#123;Diag&#125;(&#92;bm&#123;d&#125;&#95;&#123;c&#125;)&#92;mathbf&#123;S&#125;&#95;&#123;[c]&#125;+&#92;mathbf&#123;U&#125;&#95;&#123;c&#125;&#92;)</span> 传播上下文，最后各块独立算输出。该算子只针对 GTR 推理配置（FP16、块大小六十四、零初态、无反向），训练仍用参考 FLA 内核；它改变的是执行调度而非递推本身。部署时再把 RMSNorm 和输出门融合进 GLA 内核，并在 TensorRT 中做图与内核协同优化。

### 实验设计与论证方式

- 评测覆盖六个任务：COCO 目标检测（先在 Objects365 预训练三十六轮再在 COCO 微调三十轮，也报告跳过预训练的直训版本）、COCO 实例分割、COCO 人体姿态估计、DOTA-v1.0 旋转框检测、Cityscapes 语义分割和 NYU Depth V2 单目深度（用八源混合数据训练、不做 NYU 专项微调，评测时用六视角测试增强加逐图对数仿射对齐真值）。指标分别为 box AP、mask AP、keypoint AP、AP50、mIoU 和深度误差指标。
- 时延协议统一在 RTX 4090 上以 FP16、批一、torch.compile 加 CUDA Graph 测量，报告预热后的中位 CUDA 事件时延；DETR 式模型只测前向，需要 NMS 的 YOLO 系列额外计入 CUDA NMS。基线精度取自对应文献，时延为作者自测，两者来源不同。消融在相同教师、图像池和下游训练计划下独立蒸馏每个变体，覆盖蒸馏目标、空间机制、扫描方向、混合注意力、分辨率和检测器预训练。边缘部署在 DRIVE AGX Thor 上用 TensorRT 测量，并核对与 FP32 PyTorch 参考的余弦相似度。论文声明项目页面和 GitHub 开源，本次未核验仓库内容。

### 结果与证据

- 在 Objects365 检测器预训练下，GTR 四个规模在 COCO 检测上均取得同组最高 AP，大模型在精度和时延上同时优于同规模基线；该比较中基线精度取自原文献，时延为作者统一协议自测。（3.1 Real-Time Object Detection, Table 1）

  > RF-DETR ( Robinson et al., 2026 ) , and ECDet ( Liu et al., 2026 ) . With Objects365 pre-training ( Shao et al., 2019 ) , GTR-S/M/L/X achieve 53.6/57.3/58.9/59.4 AP, respectively, obtaining the best AP across all four scales. GTR-L reaches 58.9 AP at 1.908 ms median latency, outperforming all L-scale baselines in both AP and latency.

- 消融显示仅用最终输出的平方欧氏对齐这一单阶段蒸馏，即可超过多阶段或带掩码预测的跨架构蒸馏方法，并明显优于从零训练，说明极简蒸馏目标对线性注意力学生是有效的；这是在固定教师和学生配置下的对比。（3.3 Ablation Studies, Table 3）

  > Despite its simple single-stage design and objective, our method achieves 50.7 AP, outperforming ViT-Linearizer (50.0) and ViT-AdaLA (48.2), while training from scratch reaches only 31.1 AP. This suggests that simple final-output alignment is effective for distilling GTR. Table 3: Cross-architecture distillation on GTR-S without Objects365 pre-training.

- 扫描方向消融表明四方向扫描优于水平、垂直双向和单向扫描；在单向扫描下去掉 S-SwiGLU 会使精度大幅下降，说明局部空间混合是主要贡献之一，多方向扫描提供额外增益，两者互补。（3.3 Ablation Studies, Table 4）

  > Scan direction provides a complementary benefit: on GTR-L, four-direction scanning achieves 55.5 AP, compared with 55.1/55.0 for horizontal/vertical bidirectional scanning and 54.4 for a single direction. Moreover, under single-direction scanning, replacing S-SwiGLU with learned positional embeddings further reduces AP to 45.6.

- 在车载边缘硬件上以 TensorRT 部署，六个任务、四个规模的批一推理时延均处于毫秒级低位，且 FP16 输出与 FP32 参考的余弦相似度接近一致，支持线性注意力骨干在边缘实时稠密预测中的可行性；这是部署实测而非第三方复现。（3.3 与附录 E.1, Tables 25-26）

  > At batch size one, latency ranges from 2.282 to 8.769 ms across all tasks and model scales, while the cosine similarity between FP16 TensorRT outputs and their FP32 PyTorch references remains consistently high, ranging from 0.9989 to 1.0000. Increasing the batch size to eight raises the peak throughput to 571 images/s for GTR-S detection.

### 与小组方向的关联

论文属于 Attention 机制与模型结构设计的硬保留方向：它把门控线性注意力改造成适合高分辨率稠密预测的视觉骨干，并给出系统的消融与硬件级部署验证。对小组而言，线性复杂度 token 混合、单目标蒸馏和分块 CUDA 算子设计均可借鉴到高分辨率视觉或序列建模场景；与推荐检索的直接关联较弱，机制迁移到召回排序的收益属于待验证设想，不能由本文结果直接推出。

### 局限与阅读边界

- 作者承认的边界包括：基线精度取自原文献而时延为自测，跨模型族的部署转换、输入分辨率和后处理并不完全一致（例如 RF-DETR 使用各自原生分辨率，YOLO 系列时延含 NMS 而 DETR 式不含），因此精度—时延对比存在协议差异；专用 CUDA 算子只针对批一、FP16、固定头维度和零初态的推理配置，通用性受限，隔离算子基准也不含输出融合，不能直接当作端到端加速比。
- 从材料可合理提出的验证问题：深度评测使用逐图对数仿射对齐真值，报告的是对齐后指标，绝对尺度精度需另行解读；混合注意力和分辨率消融只在检测任务上进行，结论向其他任务的推广未直接验证；蒸馏收益是否依赖检测特化的 DINOv3 教师也值得检验。
- 本次阅读范围为完整 PDF 加正文片段，附录中的完整对比表已核对，但未实际运行代码或复现时延，开源仓库内容与复现环境本次未核验，相关结论以论文报告为准。

## From Experts to Sub-experts: Fine-grained Parameter-Efficient Fine-Tuning for MoE LLMs {#arxiv-2609-25655}

**作者：** Zhentao Tan, Chang Liu, Yao Liu, Yue Wu, Jieping Ye

**命中的作者机构：** Alibaba

**作者单位原文：** Alibaba Group

**论文：** [arXiv](https://arxiv.org/abs/2609.25655) · [本次阅读版本 v1](https://arxiv.org/abs/2609.25655v1)

阅读范围：完整 PDF，共 21 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

As large language models (LLMs) scale rapidly, dense full-parameter adaptation becomes increasingly expensive, motivating sparse and modular architectures such as Mixture-of-Experts (MoE) models. This shift raises a key question for parameter-efficient fine-tuning (PEFT): at what granularity should parameters be selected and updated? Existing PEFT methods such as LoRA operate on predefined weight matrices, while expert-level sparse tuning methods update entire selected experts. However, we observe that activated experts are internally sparse, with only a small fraction of intermediate channels strongly responding to downstream tasks, indicating that expert-level adaptation is still too coarse. We propose NSFT (Neural Sub-expert Fine-Tuning), a fine-grained PEFT framework that refines MoE adaptation from experts to sub-experts. NSFT decomposes each expert along the intermediate dimension into structured channel groups and selects task-relevant sub-experts by combining routing importance with intra-expert activation saliency. To optimize sparse partial updates, NSFT further introduces learning-rate scaling and dynamic gradient scaling to compensate for the reduced effective update magnitude. Experiments on OLMoE and Ling-mini-2.0 across challenging domain-specific tasks and general benchmarks show that NSFT consistently outperforms representative PEFT and expert-level sparse tuning baselines, while using substantially fewer trainable parameters and preserving competitive general capability. These results suggest that sub-expert-level adaptation is a more precise and efficient PEFT paradigm for MoE LLMs.

### 一句话速览

针对MoE大模型的参数高效微调，论文提出NSFT：把每个专家沿中间维分解为固定大小的通道组（子专家），结合路由重要性与专家内激活显著性选择任务相关子专家，并引入学习率缩放与动态梯度缩放补偿稀疏更新。在OLMoE与Ling-mini的多个领域任务上，NSFT以更少可训练参数超过LoRA和专家级稀疏微调，同时保持通用能力。

### 研究动机

- 论文研究的任务是MoE大模型的下游领域微调：输入是预训练MoE模型与领域指令数据，输出是一个在领域任务上表现更好、同时尽量不损失通用能力、且可训练参数尽量少的适配模型。典型场景包括医疗、科学、代码等领域的定制化，全参数微调在显存和算力上代价高昂。
- 已有方案分两类：LoRA等在预定义权重矩阵上做低秩更新，ESFT等专家级稀疏微调只更新被路由激活的完整专家。作者观察到被激活的专家内部仍是稀疏的，只有少部分中间通道对下游任务强烈响应，说明专家级更新仍太粗，会更新大量无关参数。
- 由此论文要回答的问题是：MoE适配的更新粒度应细到什么程度？能否在专家内部找到结构化、比单个神经元更稳定的更新单元，并解决由此带来的优化问题。

### 方法与关键设计

- 方法的第一步是动机观察。作者统计OLMoE专家内通道级门控分数分布，发现激活高度集中在零附近，覆盖前一半累计激活质量的阈值落在很小的数值区域，且该模式在医疗、科学、检索、数学、代码、表格等任务以及浅、中、深层随机采样的专家上都一致，说明专家内部稀疏是普遍现象（图1左、附录E图5和图6）。
- 核心模块是子专家构造与选择。GLU风格专家可写成 <span class="paper-math">&#92;(E&#95;&#123;l,e&#125;(x)=&#92;mathbf&#123;W&#125;&#95;&#123;&#92;mathrm&#123;down&#125;&#125;(&#92;mathrm&#123;SiLU&#125;(g&#95;&#123;l,e&#125;(x))&#92;odot &#92;mathbf&#123;W&#125;&#95;&#123;&#92;mathrm&#123;up&#125;&#125;x)&#92;)</span>，其中 <span class="paper-math">&#92;(g&#95;&#123;l,e&#125;(x)=&#92;mathbf&#123;W&#125;&#95;&#123;&#92;mathrm&#123;gate&#125;&#125;x&#92;)</span>。作者借用MoNE的分解视角，把专家写成各中间通道秩一变换的叠加：<span class="paper-math">&#92;(E&#95;&#123;l,e&#125;(x)=&#92;sum&#95;m a&#95;&#123;l,e,m&#125;(x)&#92;mathbf&#123;A&#125;&#95;&#123;l,e,m&#125;x&#92;)</span>，其中 <span class="paper-math">&#92;(a&#95;&#123;l,e,m&#125;&#92;)</span> 是第 <span class="paper-math">&#92;(m&#92;)</span> 个通道的激活，<span class="paper-math">&#92;(&#92;mathbf&#123;A&#125;&#95;&#123;l,e,m&#125;&#92;)</span> 是该通道对应的秩一矩阵。这解释了为什么按通道分组更新是自然的：每个通道本就是独立的计算分量。
- 选择打分分两层。通道级先累计被路由到该专家的所有token的门控响应绝对值 <span class="paper-math">&#92;(M&#95;&#123;l,e,m&#125;&#92;)</span> 并归一化，再乘以该专家的路由重要性 <span class="paper-math">&#92;(R&#95;&#123;l,e&#125;&#92;)</span>（被选中频率占比），得到 <span class="paper-math">&#92;(S&#95;&#123;l,e,m&#125;=R&#95;&#123;l,e&#125;&#92;hat&#123;M&#125;&#95;&#123;l,e,m&#125;&#92;)</span>。然后把连续 <span class="paper-math">&#92;(G&#92;)</span> 个通道组成一组，组分数为组内通道分数之和；在同一层内对所有组降序排序，选取累计分数首次超过阈值 <span class="paper-math">&#92;(&#92;tau&#92;)</span> 的最小集合作为可训练子专家。这样既保留专家级路由信息，又剔除专家内弱激活通道。
- 稀疏部分更新带来两个优化问题：可训练通道占比小导致有效更新量偏小；被选通道之间重要性差异大但被均匀对待。对此作者引入学习率缩放 <span class="paper-math">&#92;(&#92;eta&#95;&#123;l,e&#125;=&#92;eta&#95;&#123;&#92;mathrm&#123;base&#125;&#125;&#92;times&#92;min(d&#95;&#123;&#92;mathrm&#123;expert&#125;&#125;/K&#95;&#123;l,e&#125;,&#92;alpha&#95;&#123;&#92;max&#125;)&#92;)</span>，按活跃比例的倒数放大步长并设上限；以及梯度缩放，在反向传播时对每个被选组乘以系数 <span class="paper-math">&#92;(&#92;sigma&#95;g&#92;)</span>，它由该组激活能量相对均值的比值取幂得到，并用熵自适应指数 <span class="paper-math">&#92;(&#92;gamma&#92;)</span> 平滑：组能量分布均匀时 <span class="paper-math">&#92;(&#92;gamma&#92;)</span> 接近1以保留组间对比，分布集中时趋向0.5以抑制极端缩放。
- 作者进一步指出静态缩放会被Adam类优化器部分吸收，因为一阶和二阶矩同比例缩放后归一化更新对固定系数不敏感，因此提出动态梯度缩放：在线更新通道激活统计并用EMA平滑后周期性刷新缩放掩码。推断阶段与标准MoE前向一致，只是部分参数已被更新；与ESFT的区别在于更新单元从完整专家变为专家内通道组。
- 一个帮助理解的例子：设某专家中间维为1024、<span class="paper-math">&#92;(G=16&#92;)</span>，则该专家被切成64个候选子专家；若某层只有少数组累计分数超过 <span class="paper-math">&#92;(&#92;tau&#92;)</span>，就只更新这些组的 <span class="paper-math">&#92;(&#92;mathbf&#123;W&#125;&#95;&#123;&#92;mathrm&#123;up&#125;&#125;&#92;)</span>、<span class="paper-math">&#92;(&#92;mathbf&#123;W&#125;&#95;&#123;&#92;mathrm&#123;down&#125;&#125;&#92;)</span> 对应行列，其余参数保持冻结。

### 实验设计与论证方式

- 实验在两个MoE骨干上进行：OLMoE-7B和Ling-mini-2.0-16B，覆盖七个下游任务：数学（MATH500与GSM8K平均）、医疗多语言MMedC、科学指令SciRIFF、检索增强问答RAGQA（PubMedQA与Health）、代码（HumanEval与MBPP平均）和表格问答TableQA。通用能力用GPQA、MMLU-Redux、C-Eval、IFEval四个基准的平均衡量。
- 比较对象包括原始基座、全参数微调、LoRA（不同秩与目标模块）和ESFT（专家级稀疏微调）。训练统一为2个epoch、全局batch 8、8张A100、AdamW、峰值学习率3e-5、序列长8192并使用bin-packing；NSFT默认 <span class="paper-math">&#92;(&#92;tau=0.2&#92;)</span>、<span class="paper-math">&#92;(G=16&#92;)</span>，并对阈值0.1–0.5和组大小1–32做消融。所有结果均为离线评测，论文未报告线上或AB实验。
- 消融包括：阈值鲁棒性（NSFT在各阈值下均优于ESFT）、组大小敏感性（OLMoE上 <span class="paper-math">&#92;(G=16&#92;)</span> 较优，Ling-mini的TableQA上 <span class="paper-math">&#92;(G=4&#92;)</span> 最优，<span class="paper-math">&#92;(G&#92;)</span> 等于专家中间维时退化为ESFT）、静态与动态缩放对比、分组策略对比（连续分组优于随机分组、激活聚类分组和单通道选择），以及训练开销测量。代码在GitHub公开，本次未核验仓库与复现环境。

### 结果与证据

- 在OLMoE的多个领域微调任务上，NSFT在高效适配方法中取得最好的领域内平均成绩，明显超过ESFT和两种秩的LoRA，说明把更新单元细化到子专家能更有效地利用参数预算；该结论限于论文所测领域任务与离线评测设置。（Table 1, Section 4.2）

  > Table 1 summarizes the main results on OLMoE across multiple domain-specific fine-tuning datasets. NSFT-OLMoE achieves the best in-domain performance among efficient adaptation baselines, with an average score of 46.62, substantially outperforming ESFT-OLMoE and both LoRA variants.

- 全参数微调虽然领域内平均更高，但通用基准平均大幅下降；NSFT在只用很小比例可训练参数的情况下，通用能力平均与ESFT基本持平，说明子专家级适配能在增强领域学习的同时避免全参微调式的通用能力损失。（Table 1, Section 4.2）

  > Full FT obtains a higher in-domain average of 49.91, but its general-benchmark average drops sharply to 35.98. In contrast, NSFT-OLMoE maintains a general average of 45.96, nearly matching ESFT-OLMoE’s 46.24, while requiring only 5.67% average trainable parameters.

- 在Ling-mini的TableQA任务上，NSFT以更少的可训练参数取得远高于ESFT的PoT平均分，并超过最强的LoRA变体，同时通用平均高于所有LoRA变体和全参微调；这是表格理解单任务的效率—性能权衡结论，不能直接推广到所有任务。（Table 2, Section 4.2）

  > It achieves a PoT average of 34.44 , substantially higher than ESFT-Ling’s 17.68, while using only 2.86% trainable parameters. Compared with LoRA, NSFT-Ling is also much more parameter-efficient and surpasses the strongest LoRA variant, LoRA-r64.

- 细粒度TableQA对比显示，NSFT在可训练参数远小于最大LoRA配置的情况下接近其任务成绩，且多个NSFT变体都明显超过最好的ESFT变体，支持专家级选择对细粒度骨干仍太粗的论点；作者解释这与Ling-mini本身采用更多、更细的专家划分有关，属于合理解释而非因果证明。（Table 4, Appendix B）

  > In particular, NSFT-G4-th0.2 reaches a PoT average of 34.44 with only 2.86% trainable parameters, outperforming all ESFT variants and approaching the strongest LoRA variant, LoRA-128 MLP+QKVO, which obtains a PoT average of 35.35 but requires 29.69% trainable parameters.

### 与小组方向的关联

论文属于模型架构设计与高效微调方向，与小组关注的MoE结构、参数高效适配直接相关。子专家分解与自适应缩放是可借鉴的机制设计；若团队做生成式推荐或语义ID相关的MoE底座微调，该粒度选择思路有迁移价值。证据较充分但仅两个骨干、无线上结果，收益需在自身场景验证。

### 局限与阅读边界

- 作者承认的局限：实验只覆盖OLMoE-7B和Ling-mini-2.0-16B两个骨干，更大、更异构的MoE模型上的扩展行为有待检验；组大小 <span class="paper-math">&#92;(G&#92;)</span> 和阈值 <span class="paper-math">&#92;(&#92;tau&#92;)</span> 虽然在实验范围内稳健，但面对新领域或差异较大的架构仍需轻量验证搜索。
- 从材料可合理提出的验证问题：动态梯度缩放的收益随任务波动（MMedC上每步更新最好，SciRiFF上五步更好），且完整NSFT的训练时间明显高于仅选择的版本（附录表15中从约20分钟增至约35分钟），实际收益需与额外统计收集和掩码刷新成本权衡；最优组大小是骨干与任务相关的超参数，跨骨干不能套用同一设置。
- 本次阅读范围的限制：所有结果为离线基准评测，论文未提供线上部署或真实业务流量验证；通用能力保持只在四个基准上衡量，未覆盖更广的分布漂移场景；代码已给出链接但本次未核验仓库内容与复现环境。

## Dynamic Deep Prompt Optimization for Defending Against Jailbreak Attacks on LLMs {#arxiv-2609-26185}

**作者：** Doniyorkhon Obidov, Honggang Yu, Xiaolong Guo, Kaichen Yang

**命中的作者机构：** Michigan

**作者单位原文：** Michigan Technological University

**论文：** [arXiv](https://arxiv.org/abs/2609.26185) · [本次阅读版本 v1](https://arxiv.org/abs/2609.26185v1)

阅读范围：完整 PDF，共 9 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Large Language Models (LLMs) demonstrate impressive capabilities across many applications but remain vulnerable to jailbreak attacks, which elicit harmful or unintended content. While model fine-tuning is an option for safety alignment, it is costly and prone to catastrophic forgetting. Prompt optimization has emerged as a promising alternative, yet existing prompt-based defenses typically rely on static modifications (e.g., fixed prefixes or suffixes) that cannot adapt to diverse and evolving attacks. We propose Dynamic Deep Prompt Optimization (DDPO), the first jailbreak defense based on deep prompt optimization. DDPO uses the target LLM's own intermediate layers as feature extractors to dynamically generate defensive embeddings via a lightweight multilayer perceptron. These tailored embeddings are then injected into a subsequent intermediate layer, enabling an input-dependent defense without modifying the LLM's weights. This design ensures high adaptability with minimal computational overhead. Experiments on a diverse set of models and attacks demonstrate that DDPO significantly outperforms static prompt optimization methods, particularly on weakly aligned models and when handling semantically ambiguous benign prompts, successfully distinguishing them from genuinely harmful requests.

### 一句话速览

针对 LLM 越狱攻击防御，论文提出动态深度提示优化 DDPO：冻结目标模型权重，用其自身中间层特征经轻量两层 MLP 生成随输入变化的防御嵌入并注入后续层。在五个开源模型、九类攻击上，DDPO 将平均攻击成功率降到约百分之一以内，同时保持歧义良性请求通过率和 MMLU 表现，明显优于静态提示优化基线。

### 研究动机

- 这项工作面对的任务是：给定一个已经部署的大语言模型（LLM）和用户输入，在不改动模型权重的前提下，阻止越狱攻击诱导模型生成有害内容，同时不影响正常请求的回答质量。使用场景是模型开发者或部署方对自有模型加一层轻量安全防护，威胁模型假设攻击者知道模型结构但不能改参数，防御者拥有白盒访问权限。
- 已有方案分两类：模型级防御（安全微调、RLHF）成本高且可能引发灾难性遗忘，即模型在安全对齐后丢失通用能力；提示级防御更轻量，其中提示优化路线通过给输入附加优化过的前缀、后缀或连续嵌入来引导模型行为，但现有方法（如 PAT、RPO、DRO）训练完成后防御组件都是静态的，无法随不同输入自适应，在弱对齐模型和看似有害实则良性的歧义请求上表现明显下降。
- 论文要回答的问题是：能否利用 LLM 自身的内部语义表征，动态地为每个输入生成防御信号，而不引入大型辅助模型或二次前向计算的开销？作者将深度提示调优机制首次改造用于越狱防御，验证动态性是否是弥补静态方法缺陷的关键。

### 方法与关键设计

- DDPO 的整体流程分两步：先自动选择最优中间层，再训练一个轻量 MLP 生成动态防御嵌入并注入该层。目标 LLM 的权重全程冻结，唯一可训练的是 MLP 参数。
- 第一步是层选择。作者假设某些中间层对有害与良性意图的区分能力最强。做法是：准备一批有害与良性提示，逐层提取输入最后一个 token 的隐藏状态 <span class="paper-math">&#92;(h&#95;l^&#123;(last)&#125;&#92;)</span>，然后按公式 <span class="paper-math">&#92;(&#92;text&#123;Score&#125;(l)=&#92;mathbb&#123;E&#125;&#95;&#123;u&#92;sim H&#95;&#123;harmful&#125;^&#123;(l)&#125;,&#92;,v&#92;sim H&#95;&#123;benign&#125;^&#123;(l)&#125;&#125;[d(u,v)]&#92;)</span> 计算两类隐藏状态的平均成对余弦相似度，其中 <span class="paper-math">&#92;(d&#92;)</span> 为余弦相似度；再按 <span class="paper-math">&#92;(N=&#92;arg&#92;min&#95;l&#92;text&#123;Score&#125;(l)&#92;)</span> 选出相似度最低的层 <span class="paper-math">&#92;(N&#92;)</span>。直观地讲，这一层上两类输入在表征空间中被拉得最开，最适合做干预。
- 第二步是嵌入生成与注入。输入先在序列末尾附加一个占位的零向量 dummy 嵌入，其注意力掩码为 0；输入通过前 <span class="paper-math">&#92;(N&#92;)</span> 层后，提取最后一个 token 的隐藏状态 <span class="paper-math">&#92;(&#92;mathbf&#123;f&#125;&#95;&#123;user&#125;=h&#95;N^L&#92;)</span> 作为特征，送入两层 MLP 得到单个防御嵌入 <span class="paper-math">&#92;(e&#95;&#123;dyn&#125;&#92;)</span>。原第 <span class="paper-math">&#92;(N&#92;)</span> 层输出的隐藏状态序列 <span class="paper-math">&#92;(H&#95;N=[h&#95;N^&#123;(1)&#125;,&#92;dots,h&#95;N^L,h&#95;N^&#123;(dummy)&#125;]&#92;)</span> 中，占位符被替换为 <span class="paper-math">&#92;(e&#95;&#123;dyn&#125;&#92;)</span>，其注意力掩码改回 1，修改后的序列 <span class="paper-math">&#92;(H'&#95;N&#92;)</span> 作为第 <span class="paper-math">&#92;(N+1&#92;)</span> 层的输入，从而影响后续所有层的计算。帮助理解的例子：一条被攻击的请求经过前若干层后，MLP 感知到其有害语义，生成一个把模型推向拒绝回答的嵌入向量，插进后续层让它生成拒绝语句；良性请求则生成保留正常回答能力的向量。
- 训练目标只更新 MLP：对有害提示，要求注入 <span class="paper-math">&#92;(e&#95;&#123;dyn&#125;&#92;)</span> 后模型输出预定义的拒绝语句；对良性提示，要求输出有帮助的相关回答。总损失为 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;DDPO&#125;=&#92;lambda&#95;&#123;harmful&#125;&#92;mathcal&#123;L&#125;&#95;&#123;harmful&#125;+&#92;lambda&#95;&#123;benign&#125;&#92;mathcal&#123;L&#125;&#95;&#123;benign&#125;&#92;)</span>，两项均为交叉熵损失，<span class="paper-math">&#92;(&#92;lambda&#92;)</span> 是各自的权重系数。训练按 Algorithm 1 进行：前向到第 <span class="paper-math">&#92;(N&#92;)</span> 层取特征、生成嵌入、注入、从第 <span class="paper-math">&#92;(N+1&#92;)</span> 层继续前向得到预测，再仅对 <span class="paper-math">&#92;(&#92;theta&#95;&#123;MLP&#125;&#92;)</span> 反向传播更新。
- 推断时 MLP 只在生成第一个输出 token 时调用一次，之后整条回复的生成复用同一个 <span class="paper-math">&#92;(e&#95;&#123;dyn&#125;&#92;)</span>。这避免了朴素动态方案（用辅助 LLM 生成前缀）需要的双重输入处理和延迟，也规避了小辅助模型语义理解不足的问题。与静态基线的关键差异在于：PAT、DRO、RPO 的防御组件训练后固定，而 DDPO 的嵌入随输入变化，这是作者认为有效的根源。

### 实验设计与论证方式

- 实验覆盖五个开源模型：Llama-3-8B-Instruct、Deepseek-llm-7B-chat、Vicuna-13B-v1.5、Llama-2-7B-chat-hf 和 Openchat-3.5-1210，均用 Hugging Face 实现，运行在两块 NVIDIA A100 上。DDPO 的 MLP 为两层、512 隐藏单元、GeLU 激活。攻击评测涵盖九种策略：直接有害请求、PEZ、UAT、GCG、AutoPrompt、GBDA、GCG-M、PAIR 和人工构造提示，有害提示来自 AdvBench、JailbreakBench 与 HarmBench。
- 评测协议：训练集仅含五十个 GCG 与人工提示样本；每类攻击在二百三十个未见样本上评测攻击成功率 ASR（越低越好），其中七类攻击为零样本迁移设定。良性效用用两个集合：一是来自 JailbreakBench 和 WildJailbreak 的五百条看似有害实则良性的边界请求，指标为良性通过率 BPR（正确回答且不被误拒的比例）；二是 MMLU 平均准确率，衡量通用知识保留。比较对象为静态基线 PAT、RPO、DRO 和无防御。
- 消融包括三部分：将 DDPO 与同层注入单个固定嵌入的静态变体 SDPO 对比（两者训练数据与注入层完全相同）；考察注入嵌入数量 <span class="paper-math">&#92;(K&#92;)</span> 取一、五、十的影响；以及通过逐层余弦相似度分析（图 3）说明层选择的依据。论文声明代码已发布，本次未核验仓库内容，材料中未见线上或生产环境实验。

### 结果与证据

- 在全部五个模型和九类攻击上，DDPO 同时取得最低的平均攻击成功率和接近无防御状态的良性通过率与 MMLU 分数，而静态基线要么在弱对齐模型上几乎无效，要么大幅误拒歧义良性请求。该结果是离线基准上的对比，不能直接外推到线上部署效果。（Table 1）

  图表观察（PDF 第 6 页）：五个模型上对比 None、PAT、RPO、DRO、DDPO 的 ASR 与效用。Openchat：None 平均 ASR 71.20%，RPO 71.40%，DDPO 0.97%，Benign 95.60%，MMLU 60.90%。Deepseek：None 平均 ASR 59.52%，DDPO 0.39%。Vicuna：DDPO 平均 ASR 0.68%，Benign 95.80%，MMLU 53.85%；RPO 的 Benign 仅 11.80%。Llama3：DDPO 平均 ASR 0.77%，Benign 97.80%，MMLU 63.53。Llama2：DDPO 平均 ASR 1.40%，Benign 93.20%。

- 论文报告 DDPO 在所有模型上显著优于静态方法，并分析其克服了静态防御的两大失败模式：在弱对齐模型上无效，以及因误判歧义良性查询而严重损害效用。（Experiments - Defense Performance）

  > Defense Performance As shown in Table 1 , DDPO significantly outperforms static methods across all models, achieving a superior balance of low Attack Success Rate (ASR) and high utility. Our analysis reveals that DDPO overcomes two critical failings of static defenses. First, static defenses are ineffective on weakly aligned models.

- 在注入层与训练数据完全一致的对照下，动态生成嵌入带来的防御收益远超同一位置的静态嵌入，说明有效性主要来自输入自适应这一机制而非注入位置本身。该消融只在五个离线模型上验证，机制解释仍属作者推断层面。（Table 2）

  图表观察（PDF 第 6 页）：静态变体 SDPO 与动态 DDPO 的消融（相同训练数据与注入层）：SDPO 平均 ASR 依次为 Llama3 12.32%、Deepseek 22.90%、Vicuna 47.20%、Llama2 9.52%、Openchat 79.32%；DDPO 对应为 0.77、0.39、0.68、1.40、0.97。BPR 方面 Llama2 上 SDPO 70.00% 对 DDPO 93.20%，其余模型 DDPO 的 BPR 略低或接近。

- 增加注入嵌入数量并未带来显著或一致的改进，部分配置甚至略有退化，考虑到额外计算与延迟开销，单个嵌入是论文的默认与最优选择。（Ablation Studies - Effect of Number of Injected Embeddings）

  > We investigated whether increasing the number of embeddings to <span class="paper-math">&#92;(K=5&#92;)</span> or <span class="paper-math">&#92;(K=10&#92;)</span> could offer additional performance benefits. As shown in Table 3 , increasing the number of embeddings does not lead to significant or consistent improvements.

- 该层间相似度分析为自动选取中间干预层提供了经验依据，说明中间偏后层对两类输入的语义区分最明显；这属于对表征空间的观察，本身并不证明在该层注入必然最优。（Figure 3）

  图表观察（PDF 第 7 页）：五个模型逐层的有害—良性提示最后 token 隐藏状态平均余弦相似度曲线均呈 U 形：浅层相似度高，随深度下降至中间某层的最低点后再回升，最低点（图中以 × 标记）位于模型深度的约第 62 至 81 百分位。

### 与小组方向的关联

论文与小组关注的大模型结构设计与预训练相关：利用模型自身中间层表征加轻量 MLP 做输入自适应干预，这一思想可迁移到表征层面的个性化或安全控制。动态与静态嵌入的对照消融设计干净、代码已声明开源，可借鉴其实验协议。但主题属安全防御，与推荐检索无直接关联；方法依赖白盒访问与逐层相似度分析，迁移到闭源 API 模型不可行，动态机制在实际长尾输入上的稳健性有待复现验证。

### 局限与阅读边界

- 作者已承认的限制方面：层选择依赖有害与良性提示数据集来计算余弦相似度，最优层位置因模型而异，需要逐模型做前向分析；增加注入嵌入数没有一致收益，因此默认只用单个嵌入，这限制了防御容量的扩展空间。威胁模型假设攻击者不能修改模型参数，防御者拥有白盒访问，闭源模型场景下方法不直接适用。
- 从材料可合理提出的验证问题：训练仅使用约五十个 GCG 与人工提示样本，防御对训练分布之外的新型攻击策略（尤其是自适应针对 DDPO 本身的白盒攻击）的鲁棒性未在论文中讨论；论文只报告了消融和基准对比，未见对 MLP 被对抗性输入操纵的失败案例分析。这些属于待验证设想，不能断言论文结论错误。
- 本次阅读范围的限制：评测均为离线基准上的自动判定，未涉及真实用户流量或生产环境的表现；代码仓库已声明发布但本次未核验其内容与可复现环境；ASR 与 BPR 的判定方式（如是否使用 LLM 判分）在材料中未详细说明，可能影响与其他工作数值的直接比较。

## Signed Graph Pre-Training and Prompt Learning {#arxiv-2609-25722}

**作者：** Zihan Mei, Rong Pan, Yuzhou Chen, Yixuan He

**命中的作者机构：** Berkeley、UCLA

**作者单位原文：** University of California, Riverside

**论文：** [arXiv](https://arxiv.org/abs/2609.25722) · [本次阅读版本 v1](https://arxiv.org/abs/2609.25722v1)

阅读范围：完整 PDF，共 25 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Signed graphs arise in trust--distrust networks, financial correlation systems, biological interaction graphs, and many other domains in which edges can be positive or negative and may also be directed. While signed graph neural networks have improved task-specific learning, graph transfer learning on signed graphs remains underdeveloped. In this paper, we introduce TopoSIGN, a pioneer topology-guided graph pre-training and prompt learning framework for signed graphs. TopoSIGN combines a structural encoder built on the magnetic signed Laplacian with a novel persistent-homology branch that summarizes signed topology through Dowker-complex persistence images. The fused embeddings are then transferred to a prompt learning function. Experimental results on synthetic and real-world datasets demonstrate the efficacy of TopoSIGN in extracting useful structural information in signed graphs, as well as the adaptability and flexibility of the proposed general framework.

### 一句话速览

面向带符号（可含方向）图的预训练与提示学习框架 TopoSIGN：用带符号 GNN 结构编码器加基于符号度向量的 Dowker 复形持久同调分支，融合表征后做链接符号预测预训练，再以簇提示迁移到节点聚类。实验显示在含噪合成带符号图上取得最佳或接近最佳的聚类表现，增益依赖骨干网络选择，在稠密真实金融图上优势减弱。

### 研究动机

- 带符号图指边上带有正负极性、可能还有方向的图，如社交网络中的信任—不信任关系、金融资产的正负相关、生物系统中的促进—抑制关系。此时边的极性与连通性同等重要，标准无符号图方法难以直接使用。这类数据的典型任务包括链接符号预测和节点聚类，输出是把节点划分为若干个簇。
- 已有带符号图神经网络（如 MSGNN、SSSNET 等）多针对单一监督目标端到端训练，迁移能力有限；而图预训练、提示学习和图基础模型的研究几乎都集中在无符号图上。带符号图上唯一的预训练工作 SGPT 是把无符号图知识迁到带符号任务，方向不同。拓扑特征（持久同调）在无符号图上已有应用，但负边无法自然纳入既有过滤设计。
- 本文要回答的问题是：能否为带符号图构建一个预训练加提示学习的框架，使表示学到可迁移的结构信息，并让拓扑分支在保留符号语义的前提下补充多尺度结构信号。与最接近的 TopoDIG（面向有向无符号图）相比，关键差别在于结构编码器与拓扑过滤都要显式适配符号信息。

### 方法与关键设计

- TopoSIGN 由三个模块组成：结构符号 GNN 编码器（SGE）、带符号拓扑编码器、提示模块。给定带符号图 <span class="paper-math">&#92;(&#92;mathcal&#123;G&#125;=(&#92;mathcal&#123;V&#125;,&#92;mathcal&#123;E&#125;,w,&#92;mathbf&#123;X&#125;)&#92;)</span>，结构编码器输出节点嵌入 <span class="paper-math">&#92;(&#92;mathbf&#123;Z&#125;&#95;&#123;&#92;mathcal&#123;G&#125;&#125;&#92;)</span>，拓扑编码器输出 <span class="paper-math">&#92;(&#92;mathbf&#123;Z&#125;&#95;&#123;&#92;mathcal&#123;T&#125;&#125;&#92;)</span>，二者按公式 <span class="paper-math">&#92;(&#92;mathbf&#123;Z&#125;=[&#92;mathbf&#123;Z&#125;&#95;&#123;&#92;mathcal&#123;G&#125;&#125;&#92;|&#92;mathbf&#123;Z&#125;&#95;&#123;&#92;mathcal&#123;T&#125;&#125;]&#92;)</span> 拼接为联合节点表示，同一融合表征既用于预训练损失也接下游提示头。
- 结构分支有两种实例化。其一是 MSGNN 的磁符号拉普拉斯：先对称化带符号邻接矩阵 <span class="paper-math">&#92;(&#92;widetilde&#123;&#92;mathbf&#123;A&#125;&#125;&#92;)</span> 与度矩阵 <span class="paper-math">&#92;(&#92;widetilde&#123;&#92;mathbf&#123;D&#125;&#125;&#92;)</span>，用相位矩阵 <span class="paper-math">&#92;(&#92;Theta^&#123;(q)&#125;&#95;&#123;uv&#125;=2&#92;pi q(A&#95;&#123;uv&#125;-A&#95;&#123;vu&#125;)&#92;)</span> 编码方向不对称性，得到厄米特矩阵 <span class="paper-math">&#92;(&#92;mathbf&#123;H&#125;^&#123;(q)&#125;&#92;)</span>，再定义归一化磁符号拉普拉斯 <span class="paper-math">&#92;(&#92;mathbf&#123;L&#125;^&#123;(q)&#125;&#95;&#123;N&#125;=&#92;mathbf&#123;I&#125;-(&#92;widetilde&#123;&#92;mathbf&#123;D&#125;&#125;^&#123;-1/2&#125;&#92;widetilde&#123;&#92;mathbf&#123;A&#125;&#125;&#92;widetilde&#123;&#92;mathbf&#123;D&#125;&#125;^&#123;-1/2&#125;)&#92;odot&#92;exp(&#92;mathrm&#123;i&#125;&#92;Theta^&#123;(q)&#125;)&#92;)</span>。谱卷积用切比雪夫多项式近似，层更新为 <span class="paper-math">&#92;(&#92;mathbf&#123;X&#125;^&#123;(&#92;ell)&#125;=&#92;sigma(&#92;mathbf&#123;X&#125;^&#123;(&#92;ell-1)&#125;&#92;mathbf&#123;W&#125;^&#123;(&#92;ell)&#125;&#95;&#123;&#92;text&#123;self&#125;&#125;+&#92;widetilde&#123;&#92;mathbf&#123;L&#125;&#125;^&#123;(q)&#125;&#95;&#123;N&#125;&#92;mathbf&#123;X&#125;^&#123;(&#92;ell-1)&#125;&#92;mathbf&#123;W&#125;^&#123;(&#92;ell)&#125;&#95;&#123;&#92;text&#123;neigh&#125;&#125;+&#92;mathbf&#123;B&#125;^&#123;(&#92;ell)&#125;)&#92;)</span>，激活用复数版 ReLU，默认 <span class="paper-math">&#92;(q=0.25&#92;)</span>，最后拼接实部虚部得到实值嵌入。其二是 SSSNET 的 SIMPA 聚合，分别在正负邻域传播以保留友好与对抗关系的不同语义。
- 拓扑分支的核心是带符号度向量距离过滤。对每个节点定义正度 <span class="paper-math">&#92;(d^&#123;+&#125;(u)&#92;)</span> 与负度幅值 <span class="paper-math">&#92;(d^&#123;-&#125;(u)&#92;)</span>（负度取负边绝对值之和，故非负），构成二维向量 <span class="paper-math">&#92;(&#92;mathbf&#123;s&#125;(u)=[d^&#123;+&#125;(u),d^&#123;-&#125;(u)]&#92;)</span>，地标—见证距离取该度向量空间中的欧氏距离 <span class="paper-math">&#92;(&#92;delta&#95;&#123;&#92;pm&#125;(&#92;ell,w)=&#92;lVert&#92;mathbf&#123;s&#125;(&#92;ell)-&#92;mathbf&#123;s&#125;(w)&#92;rVert&#95;&#123;2&#125;&#92;)</span>，据此在阈值 <span class="paper-math">&#92;(&#92;varepsilon&#92;)</span> 扫描下得到 Dowker 复形过滤 <span class="paper-math">&#92;(D^&#123;&#92;pm&#125;&#95;&#123;&#92;varepsilon&#125;(L,W)&#92;)</span>。这样过滤仍是一维参数的，可直接用标准持久同调软件，同时不丢弃负边信息——总度相近但正负组成不同的节点会被区分开。为控制计算量，拓扑特征基于每个节点的两跳自我网络计算，并用地标采样加速。
- 持久图经持久图像（PI）向量化：把图映射到（出生，持续性）坐标，用高斯核卷积后离散成 <span class="paper-math">&#92;(d&#95;&#123;I&#125;&#92;times d&#95;&#123;I&#125;&#92;)</span> 网格并展平为固定长度向量。作者给出的直观理解（帮助理解的非原文例子）：两个用户正负好友数相近时纯度数无法区分，而向量表示把“正多负少”与“正少负多”拉开距离，过滤序列因此不同。
- 预训练任务是链接符号预测：对训练边按正负打二值标签，用 MLP 边解码器 <span class="paper-math">&#92;(&#92;hat&#123;y&#125;&#95;&#123;uv&#125;=&#92;text&#123;sigmoid&#125;(&#92;psi&#95;&#123;&#92;zeta&#125;([&#92;mathbf&#123;z&#125;&#95;&#123;u&#125;&#92;|&#92;mathbf&#123;z&#125;&#95;&#123;v&#125;]))&#92;)</span> 预测符号，损失为二元交叉熵；附录中每个小批按符号分层采样以平衡正负梯度贡献。下游适配采用类 GPPT 的簇提示：先用 METIS 划分出任务簇构建可学习提示库，对节点与候选下游簇 <span class="paper-math">&#92;(k&#92;)</span> 构造提示 token <span class="paper-math">&#92;(&#92;boldsymbol&#123;&#92;xi&#125;&#95;&#123;u,k&#125;=[&#92;mathbf&#123;p&#125;^&#123;m&#125;&#95;&#123;k&#125;&#92;|&#92;mathbf&#123;z&#125;&#95;&#123;u&#125;]&#92;)</span>，由小任务头打分并取最大者，训练目标是有种子标签节点上的负对数似然；预训练编码器可冻结只调提示库与任务头。与基线的主要差异在于：基线或为无符号/有向图设计的预训练提示框架，或为端到端带符号 GNN，均未同时建模符号拉普拉斯结构与符号拓扑过滤。

### 实验设计与论证方式

- 数据方面使用四组合成 SDSBM 带符号随机块图（分别含不同方向噪声与符号翻转噪声，其中一组为无噪设置）和两个真实数据集 Rainfall、SP1500（作者称其为仅有的同时具备真值标签与足够规模的公开带符号图）。协议为：以链接符号预测做自监督预训练（使用全部观测边，不单独留出链接划分），再迁移到节点聚类；聚类数据按节点划分为训练种子、验证、测试三部分，指标为 ARI（与真值簇一致度为满分、随机为零），报告五个随机种子的均值与标准差。
- 比较分两组：预训练提示方法（GPPT、All-in-one、GraphPrompt/Gprompt、GPF、SAMGPT、TopoDIG）与带符号聚类模型（SSSNET、SigMaNet、MSGNN、DSGC，及其加拓扑特征的变体）。所有方法统一用相同的预训练损失与 NLL 下游损失，仅微调学习率按验证 ARI 搜索，其余超参统一固定。消融覆盖拓扑分支有无、正子图过滤对比符号过滤、不同预训练任务（方向预测与三/四/五分类）、多种提示函数组合以及一至五样本低标注情形，并报告了预处理与训练时间。实验均在单张 H100 上离线完成，论文未报告线上或 A/B 结果；附录给出匿名代码与数据链接，本次未核验其复现情况。

### 结果与证据

- 在三个含方向或符号噪声的合成带符号图设置上，TopoSIGN 的两个实例（分别以 MSGNN 和 SSSNET 为结构骨干）取得所有预训练与提示方法中最好的下游聚类表现；但在无噪合成图和真实数据上并非整体最优，说明其优势集中在符号信号较难利用的含噪场景，且预训练迁移到聚类的绝对水平仍有限。（Table 1）

  > <span class="paper-math">&#92;(0.162&#92;pm 0.017&#92;)</span> <span class="paper-math">&#92;(0.000&#92;pm 0.000&#92;)</span> <span class="paper-math">&#92;(0.010&#92;pm 0.017&#92;)</span> TopoMSGNN (Ours) <span class="paper-math">&#92;(0.032&#92;pm 0.030&#92;)</span> <span class="paper-math">&#92;(0.107&#92;pm 0.009&#92;)</span> <span class="paper-math">&#92;(0.372&#92;pm 0.042&#92;)</span> <span class="paper-math">&#92;(0.164&#92;pm 0.025&#92;)</span> <span class="paper-math">&#92;(0.075&#92;pm 0.061&#92;)</span> <span class="paper-math">&#92;(0.000&#92;pm 0.000&#92;)</span> TopoSSSNET (Ours) <span class="paper-math">&#92;(&#92;mathbf&#123;0.076&#92;pm 0.031&#125;&#92;)</span> <span class="paper-math">&#92;(&#92;mathbf&#123;0.125&#92;pm 0.011&#125;&#92;)</span> <span class="paper-math">&#92;(&#92;mathbf&#123;0.379&#92;pm 0.036&#125;&#92;)</span> <span class="paper-math">&#92;(0.157&#92;pm 0.023&#92;)</span> <span class="paper-math">&#92;(0.062&#92;pm 0.057&#92;)</span> <span class="paper-math">&#92;(0.000&#92;pm 0.000&#92;)</span> Table 2 evaluates the

- 在半监督聚类中给多个带符号 GNN 加上拓扑特征普遍带来提升，其中对 SSSNET 骨干的增益最为显著；这支持持久图像特征与带符号传播机制互补的解释，但论文同时指出对 DSGC 这类自带拓扑预处理的方法反而略有下降，说明增益并非对所有骨干成立。（Table 2 讨论）

  > topological branch in semi-supervised clustering. Adding topological features consistently boosts several signed encoders. The gain is most pronounced for SSSNET across all datasets—particularly SDSBM-1–3, Rainfall, and SP1500—suggesting that persistence-image features complement its signed propagation by capturing multiscale local connectivity and cycle structures.

- 消融显示拓扑分支单独使用时几乎无法完成聚类任务，必须依赖结构编码器；在 MSGNN 骨干上，符号度向量过滤总体优于丢弃负边的正子图过滤，说明负边在构造拓扑特征时不应被提前剔除，但这一结论在 SSSNET 骨干上并不一致成立。（Appendix A.1）

  > For the MSGNN backbone, TopoMSGNN improves over MSGNN-only on four of the five datasets and generally outperforms the positive-sign subgraph-only topological baseline, indicating that the signed degree-vector filtration provides useful complementary information and that negative edges should not be discarded before topological feature construction.

### 与小组方向的关联

与小组的图表示、预训练与提示学习方向相关：把拓扑持久同调作为预训练补充信号、以及把边级预训练目标经提示迁移到节点级任务的思路，可借鉴到用户—物品交互图（含负反馈）上；但本文未评测排序或召回类任务，线上收益属于待验证设想，且拓扑分支在部分骨干上不带来增益，落地前需自行消融。

### 局限与阅读边界

- 作者已承认的局限：真实数据集（尤其稠密的 SP1500）上表现明显弱于合成图，作者归因于图结构稠密、链接符号预训练与聚类目标不匹配、以及当前过滤只刻画一种带符号拓扑；结论部分也把更丰富的有向符号过滤、动态图预训练与可扩展地标采样列为未来工作。
- 从材料可合理提出的验证问题：表 3 消融中 SSSNET 骨干加拓扑在多数数据集上反而变差，与正文“普遍提升”的说法存在张力，说明符号过滤与不同聚合机制的交互尚不清楚；此外真实图上预训练到聚类的迁移增益很小，符号度向量是否真的贡献了超出普通度统计的信息，附录中的度特征对照也只在部分数据集上支持 PH 特征，机制层面仍需进一步验证。
- 本次阅读范围限制：代码为匿名仓库链接，本次未核验复现环境与结果；实验全部为离线小规模图（最大约千级节点），对大规模工业图（如推荐系统的亿级交互图）的可扩展性只有地标采样与并行化讨论，没有直接证据；论文未报告任何线上或 A/B 结果，不能据此推断实际业务收益。

<span id="digest-content-909226f545c5f1b5ebfe8b569a19bd976afdf7d7f6fd7d3e73a0d2021891b989" hidden></span>
