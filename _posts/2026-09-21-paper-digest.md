---
layout: post
title: 2026-09-21 论文速报合集
date: 2026-09-21 00:00:00 +0800
permalink: /posts/2026-09-21-paper-digest/
categories:
- 论文速报
tags:
- Mixture-of-Experts
- 模型架构设计
- 生成式推荐
- 在线A/B实验
- 超网络
- 开源代码
- 个性化搜索
- GPU-CPU协同
- 召回架构
- 交互预排序
- 生产A/B测试
- Agentic RL
- LLM agent
- 信用分配
- 技能记忆
- 锦标赛排序
- 自动出价
- Decision Transformer
- 序列级MoE
- 离线策略改进
- 线上A/B
- 基础模型
- MoE路由
- Attention机制
- 注意力汇
- 数学推理
- 频域特征
- 层深度分析
- Agentic实验
- 在线自动研究
- 实验验证
- 记忆机制
- 视频检索
- 在线评估
- 模型结构设计
- 循环Transformer
- 深度-时间权衡
- Thought Token
- MoE
- 语言建模
- 稀疏prefill
- 长上下文
- 推理加速
- 块稀疏
- 广告主画像
- 个性化
- 对比学习
- 解耦表示
- 池化算子
- 几何平均
- 归纳偏置
- 粗粒化
- 模型结构
description: 今日收录 10 篇与小组方向相关的论文。
comments: true
math: true
papers:
- arxiv_id: '2609.21346'
  arxiv_version: 1
  title: 'IntBMoE: Integrating Block-Level Conditioning into Expert Composition for
    Full-Participation Mixture-of-Experts'
- arxiv_id: '2609.21281'
  arxiv_version: 1
  title: Hybrid GPU-CPU Retrieval for Personalized Search at Ultra-Large Scale
- arxiv_id: '2609.21378'
  arxiv_version: 1
  title: 'ArenaFlow: From Trajectory Ranking to Hierarchical Credit Propagation for
    Open-Ended Agent RL'
- arxiv_id: '2609.21550'
  arxiv_version: 1
  title: 'OneBid: A Unified Auto-Bidding Foundation Model for Diverse oCPX Advertising
    Scenarios'
- arxiv_id: '2609.20974'
  arxiv_version: 1
  title: 'Attention-Aware Routing: Coupling Routing and Attention in MoEs'
- arxiv_id: '2609.21257'
  arxiv_version: 1
  title: 'Verify, Don''t Trust: Agentic Model Development for Video Discovery Retrieval
    at Scale'
- arxiv_id: '2609.21605'
  arxiv_version: 1
  title: Trading Depth for Time in Recurrent Transformers
- arxiv_id: '2609.20971'
  arxiv_version: 1
  title: 'RBS-Attention: Radius-Bounded Sparse Prefill for Long-Context Large Language
    Models'
- arxiv_id: '2609.21308'
  arxiv_version: 1
  title: Auto-Bidding with Disentangled Advertiser Profiles and Train-Free Adaptation
- arxiv_id: '2609.21876'
  arxiv_version: 1
  title: Geometric Mean Pooling for Equal-Weight Multiplicative Coarse-Graining
paper_pipeline:
  schema: 1
  kind: digest
  provider: openrouter
  model: z-ai/glm-5.3-flash
  source_hash: 87255a965ab5fe80b491698228d54d669758f6675e7169b53f3ae7e0029f2ccb
  generated_date: '2026-09-21'
  render_hash: 79a98cfab780533567862b1211f8fc05cd13f76eeedbc6fb4ef9bc7730cb1c62
institutions:
- Alibaba
- Meta
- Kuaishou
- Amazon
- Microsoft
- Google
---

| 排名 | 评分 | 论文 | 机构 | arXiv 链接 | 主题 |
| ---: | ---: | --- | --- | --- | --- |
| 1 | 10 | [IntBMoE: Integrating Block-Level Conditioning into Expert Composition for Full-Participation Mixture-of-Experts](#arxiv-2609-21346) | Alibaba | [2609.21346](https://arxiv.org/abs/2609.21346) | Mixture-of-Experts、模型架构设计、生成式推荐、在线A/B实验、超网络、开源代码 |
| 2 | 9 | [Hybrid GPU-CPU Retrieval for Personalized Search at Ultra-Large Scale](#arxiv-2609-21281) | Meta | [2609.21281](https://arxiv.org/abs/2609.21281) | 个性化搜索、GPU-CPU协同、召回架构、交互预排序、生产A/B测试 |
| 3 | 9 | [ArenaFlow: From Trajectory Ranking to Hierarchical Credit Propagation for Open-Ended Agent RL](#arxiv-2609-21378) | Alibaba | [2609.21378](https://arxiv.org/abs/2609.21378) | Agentic RL、LLM agent、信用分配、技能记忆、锦标赛排序 |
| 4 | 9 | [OneBid: A Unified Auto-Bidding Foundation Model for Diverse oCPX Advertising Scenarios](#arxiv-2609-21550) | Kuaishou | [2609.21550](https://arxiv.org/abs/2609.21550) | 自动出价、Decision Transformer、序列级MoE、离线策略改进、线上A/B、基础模型 |
| 5 | 8 | [Attention-Aware Routing: Coupling Routing and Attention in MoEs](#arxiv-2609-20974) | Amazon | [2609.20974](https://arxiv.org/abs/2609.20974) | MoE路由、Attention机制、注意力汇、数学推理、频域特征、层深度分析 |
| 6 | 8 | [Verify, Don't Trust: Agentic Model Development for Video Discovery Retrieval at Scale](#arxiv-2609-21257) | Meta | [2609.21257](https://arxiv.org/abs/2609.21257) | Agentic实验、在线自动研究、实验验证、记忆机制、视频检索、在线评估 |
| 7 | 8 | [Trading Depth for Time in Recurrent Transformers](#arxiv-2609-21605) | Microsoft | [2609.21605](https://arxiv.org/abs/2609.21605) | 模型结构设计、循环Transformer、深度-时间权衡、Thought Token、MoE、语言建模 |
| 8 | 7 | [RBS-Attention: Radius-Bounded Sparse Prefill for Long-Context Large Language Models](#arxiv-2609-20971) | Alibaba | [2609.20971](https://arxiv.org/abs/2609.20971) | Attention机制、稀疏prefill、长上下文、推理加速、块稀疏 |
| 9 | 7 | [Auto-Bidding with Disentangled Advertiser Profiles and Train-Free Adaptation](#arxiv-2609-21308) | Alibaba | [2609.21308](https://arxiv.org/abs/2609.21308) | 自动出价、广告主画像、个性化、对比学习、解耦表示、Decision Transformer |
| 10 | 7 | [Geometric Mean Pooling for Equal-Weight Multiplicative Coarse-Graining](#arxiv-2609-21876) | Google | [2609.21876](https://arxiv.org/abs/2609.21876) | 池化算子、几何平均、归纳偏置、粗粒化、模型结构 |

今日收录 **10** 篇论文。评分为 10 分制阅读推荐度：方向相关性 4 分、方法贡献 3 分、实验证据或论证支撑 3 分；按总分降序排列，同分按 arXiv 编号排序。机构列为已识别的命中机构。点击论文标题跳转正文。各篇阅读范围不同，完整结论请核对原文。

## IntBMoE: Integrating Block-Level Conditioning into Expert Composition for Full-Participation Mixture-of-Experts {#arxiv-2609-21346}

**作者：** Ran Cheng, Longfei Xu, Zheng Liu, Kaikui Liu, Xiangxiang Chu

**命中的作者机构：** Alibaba

**作者单位原文：** DreamX, Alibaba Group

**论文：** [arXiv](https://arxiv.org/abs/2609.21346) · [本次阅读版本 v1](https://arxiv.org/abs/2609.21346v1)

阅读范围：完整 PDF，共 18 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Mixture-of-Experts (MoE) scales capacity, but existing designs cannot set three quantities independently. For a single token, participation is how many experts contribute knowledge to its output, execution is how many are actually computed (compute cost), and materialization is how many expert-sized parameter sets must be built and stored (memory cost). Sparse routing keeps execution and materialization low, but shrinks participation: for each token, only a few experts contribute. Dense output-mixing restores full participation, but its execution grows with the number of experts. Parameter-merging keeps execution at one expert, but its materialization grows with the number of routing decisions. We propose IntBMoE, a block-conditioned MoE that decouples all three by pairing dense expert composition with sparse block execution. Its blocks come from a small learned codebook, one per entry. At each internal layer, a lightweight hypernetwork merges all expert bases in that layer's pool into one composed expert. Participation is full, because every composed expert draws on the entire pool. Execution stays sparse, because a router sends each token to only a few blocks. Materialization is bounded, because the codebook, not the input, fixes how many blocks exist. Dual-Path Residual Gating (DPRG) further couples two independently composed paths through multiplicative gating. Experiments on image classification show consistent gains over representative sparse and dense MoE baselines. Additional experiments on language modeling and sequential recommendation validate its generalization beyond vision. IntBMoE is fully deployed in AMap's generative recommendation system, serving hundreds of millions of users under a 60ms latency budget, with a 2.4% relative UVCTR gain in online A/B testing. Our code is available at this https URL .

### 一句话速览

论文提出 IntBMoE，一种块级条件化的混合专家架构：用小型码本加超网络把全部专家基组合成少量可复用多层块，再对每个 token 做 Top-k 稀疏路由，同时实现全池参与、稀疏执行和有界物化。在 ImageNet-1K、MiniPile 和序列推荐上超过稀疏与稠密 MoE 基线，并已部署于高德生成式推荐系统，线上 A/B 中 UVCTR 相对提升。

### 研究动机

- 混合专家（MoE）通过维护专家池和路由器扩展模型容量，但作者指出，对单个 token 而言，三个关键量在现有设计中无法独立设定：参与度（多少专家的知识进入该 token 的输出）、执行量（实际计算多少个专家，对应算力）和物化量（运行时需构建并存储多少个专家规模参数集，对应显存）。三者原则上独立，现有方案却各自耦合。
- 具体而言，稀疏路由执行和物化都低，但每个 token 只有少数专家参与，未选中专家既不影响输出也得不到学习信号；稠密输出混合恢复全参与，但执行成本随专家数增长；参数合并把全部专家合成一个复合专家执行，但每个路由决策都要物化一份专家规模参数。论文要回答：能否让每个 token 受益于完整专家池，同时避免稠密执行和无界物化。
- 该问题对推荐系统尤其相关：高德的生成式推荐服务需在严格时延预算内响应，既要容量足以表达用户兴趣差异，又要控制请求时延和内存，IntBMoE 正是为此设计并完成全量部署。

### 方法与关键设计

- IntBMoE 以替换 Transformer 骨干中 FFN 子层的方式接入，每个模块分两级工作：块级参数合成与 token 级稀疏路由。块级先维护含 K 个可学习嵌入的码本，每个嵌入对应一个候选块；共享超网络把每个块嵌入映射为值、门两组组合系数，再按系数把该层专家池中全部 E 个专家基线性组合成复合参数。超网络只依赖块嵌入而不依赖 token 表示，故 K 个组合块可预先计算并在所有 token 间共享——物化有界的来源即块数量由码本决定，与路由决策数无关。
- 形式化地，码本为 <span class="paper-math">&#92;(&#92;mathcal&#123;C&#125;=&#92;&#123;&#92;mathbf&#123;c&#125;&#95;&#123;b&#125;&#92;in&#92;mathbb&#123;R&#125;^&#123;d&#95;&#123;c&#125;&#125;&#92;&#125;&#95;&#123;b=1&#125;^&#123;K&#125;&#92;)</span>（式 4），第 <span class="paper-math">&#92;(&#92;ell&#92;)</span> 层专家池为 <span class="paper-math">&#92;(&#92;mathcal&#123;P&#125;^&#123;(&#92;ell)&#125;=&#92;&#123;(W&#95;&#123;e&#125;^&#123;(&#92;ell)&#125;,&#92;mathbf&#123;b&#125;&#95;&#123;e&#125;^&#123;(&#92;ell)&#125;)&#92;&#125;&#95;&#123;e=1&#125;^&#123;E&#125;&#92;)</span>（式 5）。超网络用线性–LayerNorm–ReLU 主干加两个线性头，从 <span class="paper-math">&#92;(&#92;mathbf&#123;c&#125;&#95;&#123;b&#125;&#92;)</span> 生成系数 <span class="paper-math">&#92;(&#92;bm&#123;&#92;alpha&#125;&#95;&#123;b&#125;^&#123;v&#125;,&#92;bm&#123;&#92;alpha&#125;&#95;&#123;b&#125;^&#123;g&#125;&#92;in&#92;mathbb&#123;R&#125;^&#123;E&#125;&#92;)</span>（式 6–7）。关键设计是系数不做 softmax 归一化，可为负且不必和为一，使组合覆盖专家基的线性张成空间而非限于凸包；并乘以方差保持因子 <span class="paper-math">&#92;(1/&#92;sqrt&#123;E&#125;&#92;)</span> 稳定尺度。每层组合参数为 <span class="paper-math">&#92;(W&#95;&#123;b,p&#125;^&#123;(&#92;ell)&#125;=&#92;frac&#123;1&#125;&#123;&#92;sqrt&#123;E&#125;&#125;&#92;sum&#95;&#123;e=1&#125;^&#123;E&#125;&#92;alpha^&#123;p&#125;&#95;&#123;b,e&#125;W&#95;&#123;e&#125;^&#123;(&#92;ell)&#125;&#92;)</span>（式 8），逐层执行得到 L 层块。
- token 级路由对每个 token 独立进行：两层 ReLU MLP 路由器对 K 个块打分取 Top-k（式 9–10），选中块按 softmax 路由权重加权求和（式 16）。由于每个块都由全池专家基组合而成，即使只执行 k 个块，token 输出仍汇聚全部专家的知识，这就是全参与；执行只算 k 个块，保持稀疏。与稀疏 MoE 的差别在于路由对象从原始专家变为预组合块，与参数合并的差别在于组合输入无关且有限次。
- 进入选中块前有块条件特征过滤：把 token 表示与该块码本嵌入拼接，经线性层加 sigmoid 得逐维软掩码 <span class="paper-math">&#92;(&#92;mathbf&#123;m&#125;&#95;&#123;t,b&#125;&#92;)</span>，逐元素乘到输入（式 11），让不同块对同一 token 形成不同视角。块内采用双路径残差门控（DPRG）：值路径为线性变换，门路径经 RMSNorm 后以 <span class="paper-math">&#92;(&#92;widetilde&#123;&#92;mathbf&#123;z&#125;&#125;^&#123;(&#92;ell)&#125;&#95;&#123;t,b&#125;=&#92;mathbf&#123;v&#125;^&#123;(&#92;ell)&#125;&#95;&#123;t,b&#125;&#92;odot(&#92;mathbf&#123;1&#125;+&#92;lambda&#92;,&#92;operatorname&#123;SiLU&#125;(&#92;mathbf&#123;g&#125;^&#123;(&#92;ell)&#125;&#95;&#123;t,b&#125;))&#92;)</span> 做残差乘性调制（式 12–14），层间加 LayerNorm（式 15）。两条路径各自是专家基的线性组合，但乘积使整体对系数非线性，提升表达而不扩大专家池；可学习残差尺度 <span class="paper-math">&#92;(&#92;lambda&#92;)</span> 在模块内层间共享。
- 输出端再加始终激活的共享 SwiGLU 专家（式 17），承接无需按块区分的公共信息。复杂度上，组合全部 K 个块成本为 <span class="paper-math">&#92;(O(KED)&#92;)</span>，执行为 <span class="paper-math">&#92;(O(TkD)&#92;)</span>（D 为一个多层专家基的矩阵总量）。推理时参数固定后组合块可一次性构建并缓存，请求时计算只剩 <span class="paper-math">&#92;(O(TkD)&#92;)</span>，对固定 K 和 k 不随专家池规模增长——这是它能进入严格时延预算的关键。训练时同批图像共享组合块，组合成本按批摊销。

### 实验设计与论证方式

- 主实验在 ImageNet-1K（128 万训练图、5 万验证图、1000 类）上进行，所有方法共用八层 DeiT-Tiny 风格骨干、从零训练，报告三个随机种子的平均 Top-1/Top-5 准确率。比较对象覆盖稀疏路由（Switch Transformer、DeepSeek-V3 MoE、ReMoE、V-MoE、Expert Choice、DynMoE、MASS）和稠密参与（Soft MoE、SMEAR、Lory、<span class="paper-math">&#92;(&#92;mu&#92;)</span> MoE）两族基线，全部 MoE 方法总参数约 24M 对齐；附录 A 给出专家参数匹配规则与训练超参，实验在八块 96GB 的阿里 T-Head PPU 上完成。
- 跨域实验用 MiniPile（18 层 Llama 风格因果 Transformer，训练约 15 亿 token，指标为交叉熵损失和困惑度）和 IntTravel（1.628 亿用户、730 万兴趣点的序列推荐，用 Where 任务预测下一行程目的地 POI，指标为 HR@1、HR@5、NDCG@5，候选空间为全量 POI 的下一跳预测而非排序重排）。对因果任务，作者把 Soft MoE 改造成只用当前及之前 token 构建槽位、SMEAR 用 token 级组合。消融覆盖单层块、固定 <span class="paper-math">&#92;(&#92;lambda&#92;)</span>、去门路径、去共享专家、去特征过滤和 softmax 系数六个变体，另有超参敏感性、逐专家移除和缓存成本分析。
- 线上部分在高德 POI 推荐服务（App 首屏预测用户可能访问的 Top-10 POI 以确定地图视口）做了一周 A/B：对照组为无 MoE 模块的现有生产模型，实验组为缓存版 IntBMoE，流量约每秒 5000 次请求，在 T-Head PPU 上平均时延 19ms、P99 为 38ms，UVCTR 相对提升 2.4%，随后全量部署。代码已在 GitHub 开源（本次未核验仓库内容与复现环境）。

### 结果与证据

- 在 ImageNet-1K 上，IntBMoE 的 Top-1 与 Top-5 准确率相对稠密骨干分别取得明显提升，说明该架构在视觉分类任务上有效；该对比基于相同骨干与训练协议，但未涉及更大规模模型。（5.2 Experimental Results）

  > Table 1 presents the primary comparison. IntBMoE achieves 73.76% Top-1 and 91.48% Top-5 accuracy. Relative to the dense backbone, these scores represent gains of 7.36 and 3.79 percentage points, respectively.

- 在总参数量对齐的条件下，IntBMoE 超过全部稀疏路由与稠密参与基线，包括最强对手 SMEAR，说明全参与加稀疏执行的组合优于两类现有设计；比较限于该参数规模与该基准。（5.2 Experimental Results）

  > IntBMoE also outperforms all sparse-routing and dense-participation MoE baselines, exceeding the strongest competitor, SMEAR, by 1.98 Top-1 percentage points and 1.15 Top-5 percentage points. All MoE methods use comparable total parameter budgets of approximately 24M.

- 表中可观察到 IntBMoE 的推理成本为每图 4.063 GFLOPs，缓存后降至 3.457 GFLOPs，且激活参数量高于多数稀疏基线，说明其收益以全池参与换取较大激活参数，缓存主要削减计算而非参数量。（Table 1）

  图表观察（PDF 第 8 页）：Table 1（第 8 页）：IntBMoE ACC@1=0.7376、ACC@5=0.9148、Params=24.295M、Activated=23.111M、FLOPs=4.063G；IntBMoE (cached) FLOPs=3.457G；SMEAR ACC@1=0.7178、FLOPs=1.493G；V-MoE ACC@1=0.7167、FLOPs=1.920G。

- 消融显示门路径贡献最大，其次是参数匹配的单层块退化，共享专家与特征过滤带来较小但一致的增益，固定残差尺度和 softmax 归一化系数均劣于完整设计，支持 DPRG 与无约束系数两个核心设计的必要性。（Table 2）

  > Top-1 <span class="paper-math">&#92;(&#92;uparrow&#92;)</span> 0.7376 0.6878 0.7244 0.6804 0.7332 0.7372 0.7263 Top-5 <span class="paper-math">&#92;(&#92;uparrow&#92;)</span> 0.9148 0.8910 0.9078 0.8831 0.9108 0.9132 0.9072 Removing the gate path causes the largest performance drop, followed by collapsing each two-layer block into a parameter-matched single layer. The shared expert and feature filter provide smaller but consistent gains.

- 逐个移除专家基均导致准确率下降，各层平均下降幅度不同，支持全池专家确实被有效利用；这是不重训的移除分析，反映训练后的参数依赖，不能直接推出训练过程中每个专家都获得充分学习信号。（5.4 Effective Full-Pool Expert Participation）

  > The vertical axis uses a logarithmic scale. Figure 4 shows that removing any of the examined expert bases reduces Top-1 accuracy. The mean drops at Layers 0, 2, 4, and 6 are 1.60, 0.49, 1.17, and 0.78 percentage points, respectively.

- 在 MiniPile 语言建模上 IntBMoE 取得最低测试损失与困惑度，在 IntTravel 序列推荐上三项指标均为最优，说明架构可跨模态泛化；但推荐侧相对最强基线的领先幅度较小，实际收益以线上 A/B 为准。（6 Generalization to Language Modeling and Recommendation）

  > PPL of 14.5878. Relative to <span class="paper-math">&#92;(&#92;mu&#92;)</span> MoE (CP), the strongest baseline, IntBMoE reduces PPL by 2.9%. Relative to the dense backbone, the reduction is 12.4%. On IntTravel, IntBMoE achieves the highest mean HR@1, HR@5, and NDCG@5. These results support generalization to autoregressive language modeling and sequential recommendation.

- 缓存版 IntBMoE 在高德生产环境的一周 A/B 中，平均与 P99 时延均满足服务预算，同时 UVCTR 取得相对提升，随后全量部署；这是真实线上结果，但实验周期一周、单一场景，长期与跨场景稳定性未报告。（6 Online evaluation and deployment）

  > The experiment handled approximately 5,000 queries per second. Running on Alibaba T-Head PPUs, cached IntBMoE achieved an average latency of <span class="paper-math">&#92;(19&#92;,&#92;mathrm&#123;ms&#125;&#92;)</span> and a P99 latency of <span class="paper-math">&#92;(38&#92;,&#92;mathrm&#123;ms&#125;&#92;)</span> , remaining within the serving budget while delivering a 2.4% relative improvement in UVCTR.

### 与小组方向的关联

论文命中小组的模型架构设计与生成式推荐方向，且带真实线上 A/B 与开源代码，证据链完整。核心的码本加超网络组合专家思路可迁移到推荐排序/召回骨干的容量扩展与多场景建模；DPRG 双路径门控与缓存部署方案也值得借鉴。主要限制是主实验在视觉小模型上，推荐侧离线提升幅度较小，需在自有场景验证。

### 局限与阅读边界

- 作者承认并部分回应的局限：组合成本 <span class="paper-math">&#92;(O(KED)&#92;)</span> 仍随专家池规模线性增长，只是从每 token 一次降为每模块一次；缓存把请求时内存和计算与 E 解耦，但小专家池下缓存反而更耗内存（图 7 显示从 16 个专家起缓存才更省内存），且引入固定的预组合块内存开销。此外激活参数量约 23M，接近稠密参与基线水平，容量收益主要体现在精度而非激活参数压缩。
- 可合理提出的验证问题：主基准是八层小骨干上的 ImageNet-1K，结论能否外推到大规模语言模型预训练尚未验证；推荐侧离线指标相对最强基线的差距很小，线上收益来自与无 MoE 生产模型的对比而非与最强离线基线的线上对比，UVCTR 提升的归因和稳定性有待更多场景复验；专家移除分析在原检查点上不重训进行，反映的是训练后依赖而非训练动态。
- 本次阅读范围限制：代码仓库内容、推理缓存的具体工程实现和 A/B 的置信区间、显著性检验未在正文给出，本次也未核验仓库，相关工程细节以作者报告为准。

## Hybrid GPU-CPU Retrieval for Personalized Search at Ultra-Large Scale {#arxiv-2609-21281}

**作者：** Hao Fu, Jichao Sun, Baiting Zhu, Qiaoling Liu, Yan Shi, Cheng Lu, Liu Liu, Yubo Wang, Xin Yao, Xiangyu Niu, Xu Dong, Wenhan Lyu, Chiyao Shen, Yinjie Huang, Minglei Chen, Shuai Ding, Li Fan, Xiao Kong

**命中的作者机构：** Meta

**作者单位原文：** Meta Platforms, Inc. , Menlo Park , California , USA；Meta Platforms, Inc.

**论文：** [arXiv](https://arxiv.org/abs/2609.21281) · [本次阅读版本 v1](https://arxiv.org/abs/2609.21281v1)

阅读范围：完整 PDF，共 10 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Embedding-based retrieval on user-generated content at the trillion-document scale exposes a sharp conflict between two production demands: deep, expressive personalization for queries with rich user intent, and broad coverage of a massive inventory under fixed latency and resource budgets. We characterize this as the personalization-scale paradox: hosting the full serving inventory in GPU memory is too resource intensive, while CPU compute cannot execute the same interaction-heavy model on the latency-critical path. We present a hybrid GPU-CPU co-serving system that resolves the paradox through orchestration rather than a new model class. A high-depth GPU pathway fuses retrieval and interaction pre-ranking over a curated online pool on the order of a billion documents, while a high-breadth CPU pathway searches an independently selected online inventory roughly twenty times larger with lightweight personalized scoring. Either or both pathways can run per request; candidates are deduplicated before shared downstream ranking. The system is deployed in production. A full-system A/B test against the legacy CPU-only configuration improves model-scored relevance and substantive engagement, while separate pathway experiments show positive value at their own deployment scopes. Retrieval logs show that the pathways contribute structurally distinct candidates, production serving measurements characterize their latency, and a matched capacity plan quantifies the economic rationale for assigning modeling depth to GPUs and inventory breadth to CPUs. Together, these results validate a practical, independently evolvable depth-breadth architecture for ultra-large-scale personalized search.

### 一句话速览

论文提出超大规模个性化搜索中的混合 GPU-CPU 协同架构：GPU 通路在十亿级精选池上融合双塔召回与交互预排序，CPU 通路以轻量个性化打分检索约二十倍大的库存。全系统 A/B 测试显示相关性与实质互动均相对纯 CPU 旧配置提升，检索日志证明两通路候选结构互补，属于已部署生产系统的架构与实证研究。

### 研究动机

- 任务背景是超大规模用户生成内容的个性化搜索召回：输入是查询与用户上下文，输出是送入共享下游排序器的候选文档集合。发现类查询需要与行为历史做非线性交互的深度个性化，导航类和长尾查询则要求稀疏文档仍可被召回，即库存广度。
- 作者将这一矛盾概括为个性化-规模悖论：把全部在线库存放进 GPU 高带宽内存成本过高，而 CPU 算力又无法在延迟关键路径上运行同样的重交互模型。已有工业系统多用可分离打分换取效率，ColBERT、生成式检索等提升表达力的方案让大规模服务更昂贵；SVFusion、FusionANNS 则把单次 ANN 请求拆分到 CPU 与 GPU 协同处理。
- 本文要回答的问题是：能否不发明新模型类，而通过系统编排同时获得建模深度与库存广度。与异构拆分方案的关键差别在于，两条通路运行不同的模型族、维护各自独立选出的库存，在聚合点汇合，GPU 还在候选离开加速器之前完成交互预排序。

### 方法与关键设计

- 整体是分叉-汇合的双通路系统。查询理解先从查询和用户上下文提取语义、语言、意图与个性化信号，容量与可用性控制决定哪些通路运行，可独立禁用以做容量控制或回滚。各分支有独立截止时间，超时分支不拖垮另一分支，聚合器按文档标识去重并保留来源归因，再交给共享下游排序器。
- GPU 通路追求建模深度。高带宽内存装不下全部库存，GPU 池按搜索价值而非原始热度筛选：内容经摄入期元数据门控、第一周早期互动过滤、之后由分类、搜索有用性与时间衰减模型估计长期效用三个阶段；衰减按类别自适应，小众教程和本地指南可豁免互动剪枝，新闻类快速衰减，一年以上内容仅保留极小比例的常青池。
- 模型上，双塔召回器与基于 DeepFM 的交互预排序器联合训练。查询塔把语义嵌入与用户画像嵌入拼成稠密输入，经残差多层感知机处理；文档塔输出用于最近邻检索的低维向量。训练目标是三项加权和：<span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;Total&#125;&#125;=w&#95;&#123;1&#125;&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;InfoNCE&#125;&#125;+w&#95;&#123;2&#125;&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;SmoothL1&#125;&#125;+w&#95;&#123;3&#125;&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;BCE&#125;&#125;&#92;)</span>。InfoNCE 采用批内负采样，对锚查询 <span class="paper-math">&#92;(q&#95;i&#92;)</span> 以正例文档与来自其他会话的负例计算对比损失，对齐召回与打分分布；另有会话内 InfoNCE 把已互动候选当正例、相关但未互动候选当更难负例。价值模型按可随流量段调整的任务权重加权各预测，使一个模型服务异构流量而无需重训。
- 服务栈保持 ANN 检索、推理与预排序全程驻留加速器：计算骨干放在高带宽内存，稀疏嵌入表按需经 PCIe 从主机内存取回，使参数量可超过显存容量；融合的 8 位整数算子把量化与距离计算合并为单个算子。部署使用 AMD MI300X，单卡压测支撑每秒一百多到两百个查询，模型服务器尾延迟约几十毫秒。
- CPU 通路追求广度。专用嵌入索引从数万亿级上游语料选出数百亿公开文档，复制到普通 x86 服务器 DRAM；池扩大十倍需要更多质心，作者把聚类训练解耦为每日独立分布式训练并发布带版本的质心索引。服务端两项优化：急切求值先按词项连续扫描最近邻簇算出全局 Top-K，再作为动态跳表用于剩余布尔约束，把散乱随机读变成顺序扫描；命中扫描绕过迭代器抽象，把原始向量批量送入 AVX-512 内核。CPU 模型是共享 XLM-V 骨干的双塔，用双向 InfoNCE 产出紧凑多语言向量，个性化只保留在查询侧，用户与文档向量仅做点积，以牺牲表达力换取文档向量可预计算和 SIMD 友好的扫描。
- 与基线的差异：旧配置是纯 CPU 同构分层，本系统让深度与广度分别落在合适硬件上，两通路独立选库、独立发布、独立回滚，通过稳定的候选契约在聚合点汇合，而非拆分单次 ANN 请求。

### 实验设计与论证方式

- 评估围绕四个问题：GPU 通路的端到端价值、CPU 通路的效率与线上质量、组合系统的生产价值与候选多样性、固定广向量负载下的容量成本。主要指标是 DCG@20（模型打分的前二十位相关性，非人工评估）和 GSRR（好搜索会话率，会话中出现至少一个超过类型阈值的实质互动事件即记好）。所有报告变化是相对提升，不确定性在账号分配层面计算。
- 全系统 A/B 采用持久账号级分配，两臂各约一半，每日每臂数百万账号，运行九天；GPU 通路七天实验与禁用 GPU 的 CPU 通路九天评估分别对同期对照运行。对跨日相关性，作者用 Cauchy-Schwarz 界取九天区间半宽均值作为保守区间。另有十五天线上实验评估质心从六万四千扩到五十一万、探测簇二百五十六的配置，以及三天日志约十一万条双通路请求的重叠分析。
- 容量成本是独立规划练习：对同一 256 维 SQ8 负载、三区域副本比较 GPU 与 CPU 部署，结论是存储而非吞吐决定单位数，加速器三区域容量成本约为 CPU 的四倍；不含共享排序、网络与完整混合栈，也不建立延迟或质量等价。线上实验评估的是完整通路配置，单组件归因需要隔离实验。

### 结果与证据

- 九天全系统 A/B 中，混合架构相对旧纯 CPU 配置在模型打分相关性与实质互动两个指标上的等日均值均有相对提升，且给出的保守置信区间不包含零，九个单日区间也全部为正。该结果验证的是完整部署配置的整体价值，不能归因到硬件、库存、模型或过滤中的某一单项。（Table 2, Section 6.1）

  > Configuration DCG@20 GSRR High-depth GPU <span class="paper-math">&#92;(+0.73&#92;%&#92;pm 0.15&#92;%&#92;)</span> <span class="paper-math">&#92;(+1.04&#92;%&#92;pm 0.13&#92;%&#92;)</span> Broad-inventory CPU <span class="paper-math">&#92;(+3.16&#92;%&#92;pm 0.15&#92;%&#92;)</span> <span class="paper-math">&#92;(+1.20&#92;%&#92;pm 0.11&#92;%&#92;)</span> Hybrid architecture <span class="paper-math">&#92;(+4.51&#92;%&#92;)</span> <span class="paper-math">&#92;([+3.99&#92;%,+5.04&#92;%]&#92;)</span> <span class="paper-math">&#92;(+2.01&#92;%&#92;)</span> <span class="paper-math">&#92;([+1.71&#92;%,+2.32&#92;%]&#92;)</span> Over the same nine-day window, the hybrid treatment improved the equal-day mean DCG@20 by <span class="paper-math">&#92;(4.51&#92;%&#92;)</span> and the equal-day mean GSRR by <span class="paper-math">&#92;(2.01&#92;%&#92;)</span>

- CPU 侧两项效率结果：专用索引与急切执行大幅降低检索阶段计算量；十五天线上实验中，扩大质心数的配置在未检测到互动指标回归的情况下明显降低 CPU 使用。作者强调两项削减的基线不同、各自含固定开销，因此分开报告，不能相乘。（Section 6.3）

  > This is a complete CPU-pathway estimate: it does not isolate inventory breadth, the personalization model, the dedicated index, or the filter update. Dedicated indexing and eager execution reduced retrieval-stage compute by 89.45% (9.48 <span class="paper-math">&#92;(&#92;times&#92;)</span> ). Figure 5 separately shows the offline recall–candidate frontier for 64k and 512k centroid indices.

- 三天日志中，GPU 与 CPU 稠密召回集合在头部、腰部、尾部查询段的重叠都很低，七天复核与主窗口一致，说明两条通路贡献结构上不同的候选。低重叠只建立候选多样性，本身不等于用户价值，用户价值证据来自全系统 A/B。（Table 4, Section 6.4）

  > GPU-side is <span class="paper-math">&#92;(|G&#92;cap C|/|G|&#92;)</span> ; CPU-side is <span class="paper-math">&#92;(|G&#92;cap C|/|C|&#92;)</span> . Segment (queries) GPU-side CPU-side Jaccard Head ( <span class="paper-math">&#92;(85&#123;,&#125;617&#92;)</span> ) <span class="paper-math">&#92;(2.41&#92;%&#92;)</span> <span class="paper-math">&#92;(1.15&#92;%&#92;)</span> <span class="paper-math">&#92;(0.75&#92;%&#92;)</span> Torso ( <span class="paper-math">&#92;(17&#123;,&#125;057&#92;)</span> ) <span class="paper-math">&#92;(2.08&#92;%&#92;)</span> <span class="paper-math">&#92;(0.60&#92;%&#92;)</span> <span class="paper-math">&#92;(0.44&#92;%&#92;)</span> Tail ( <span class="paper-math">&#92;(11&#123;,&#125;405&#92;)</span> ) <span class="paper-math">&#92;(2.20&#92;%&#92;)</span> <span class="paper-math">&#92;(0.52&#92;%&#92;)</span> <span class="paper-math">&#92;(0.41&#92;%&#92;)</span> Low overlap establishes candidate diversity, not user value by itself.

- 生产延迟测量显示 CPU 通路在所有报告分位都快于词法检索，GPU 通路在中位与九五分位更快但尾延迟更高。作者说明这不是同口径内核比较：两条通路候选预算与打分深度不同，测量也不含查询理解、聚合、下游排序与客户端渲染，不能据此排名通路的计算效率。（Table 3）

  图表观察（PDF 第 7 页）：生产检索分支墙时间（七天、帖子类）：Lexical 调用 3.43M，P50/P95/P99 为 196/686/1184 ms；CPU 通路 2.11M，41/439/859 ms；GPU 通路 0.94M，151/675/1376 ms。CPU 通路三个分位均快于词法检索；GPU 通路 P50、P95 更快，P99 比词法高约 16%。

### 与小组方向的关联

论文与小组的搜索、召回和排序方向直接对口，展示了把交互深度放进 GPU 召回通路、把库存广度留给 CPU 的可落地分工，其候选契约、独立发布回滚和保守 A/B 统计方法可直接借鉴。通路级提升是完整配置的估计，学习式请求路由与单组件归因仍是待验证方向；本次未核验任何代码仓库。

### 局限与阅读边界

- 作者已承认的局限：通路实验同时改变多个组件，提升无法分配到硬件、ANN 精度、模型深度或库存规模的单项；全系统 A/B 也不识别交互效应。共享排序器输入的多样性不等于最终曝光或分来源互动，需要带归因的曝光与行为数据。聚合指标未建立子群体公平性。
- 从材料可合理提出的验证问题：容量比较固定在 256 维 SQ8 表示，不含完整混合栈，未报告利用率、配对延迟目标或召回质量等价测试，结论不能直接外推到部署的 384 维 CPU 模型或整个系统。学习式请求级路由被列为下一步，需随机化通路分配才能无偏评估。离线-在线部署单元须同版本发布的教训来自一次失败前例，普适性有待复现。
- 本次阅读范围限制：论文未提供开源代码或生产配置，附录说明生产配置与隐私敏感日志不可获得，实验依赖论文报告的聚合表格，无法独立复现；两通路实验在不同窗口对各自同期对照运行，跨行数字不可直接比较。

## ArenaFlow: From Trajectory Ranking to Hierarchical Credit Propagation for Open-Ended Agent RL {#arxiv-2609-21378}

**作者：** Qiang Zhang, Ruixue Ding, Fanrui Zhang, Xi Chen, Boli Chen, Shihang Wang, Yinfeng Huang, Yi Zheng, Pengjun Xie, Kaipeng Zhang, Jiawei Liu, Zheng-Jun Zha

**命中的作者机构：** Alibaba

**作者单位原文：** Alibaba Token Hub, Alibaba Group Amap, Alibaba Group

**论文：** [arXiv](https://arxiv.org/abs/2609.21378) · [本次阅读版本 v1](https://arxiv.org/abs/2609.21378v1)

阅读范围：完整 PDF，共 27 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Reinforcement learning has substantially improved large language model (LLM) agents in verifiable domains, but remains difficult to apply to open-ended agent tasks, where solutions are diverse and reliable scalar rewards are hard to obtain. Recent pairwise evaluation methods alleviate reward discrimination collapse by replacing pointwise scoring with relative preferences. However, they still compress rich comparative feedback into a single trajectory-level reward, obscuring decisive intermediate steps and preventing successful behaviors from being consolidated into reusable skills. We propose ArenaFlow, a hierarchical credit propagation framework for open-ended agent reinforcement learning. ArenaFlow leverages tournament-based relative ranking to derive trajectory-level reward signals. Each comparison is further equipped with structured reflective evaluation, which reveals three types of supervision: pivotal success steps, reusable strategy skills, and usage attribution of retrieved skills. At the step level, ArenaFlow propagates trajectory-level advantages to high-confidence pivotal steps according to tournament survival depth, enabling more targeted optimization of local reasoning behaviors. At the skill level, ArenaFlow estimates skill utility from group-level usage attribution and maintains a global skill memory through utility-aware updating, pruning, and retrieval. The resulting high-utility skills further serve as policy priors for future exploration. Extensive experiments validate ArenaFlow's effectiveness on open-ended agent tasks.

### 一句话速览

面向开放域 agent 强化学习，ArenaFlow 在锦标赛相对排序基础上做分层信用传播：把轨迹级优势按锦标赛存活深度加权传播到关键成功步骤，并通过使用归因估计技能效用，维护可检索的全局技能记忆。在 Open-Travel、Open-DeepResearch 和 DeepResearch Bench 上显著超过 ArenaRL 等基线，适用于无可靠标量奖励的开放任务。

### 研究动机

- 开放域 agent 任务（如深度研究报告生成、个性化行程规划）的输入是用户查询与工具环境，输出是多步推理加工具调用的长轨迹和最终答案。这类任务解空间巨大、评价维度主观，难以设计可靠的标量奖励，使 RL 难以直接应用。常见做法是用 LLM-as-a-Judge 给轨迹打分或做偏好比较。
- 早期逐点打分容易发生奖励区分度坍缩：候选轨迹普遍较优时分数集中在窄区间，优化信号被裁判噪声主导。近期的成对偏好方法（Writing-Zero、Pref-GRPO、ArenaRL）用相对比较缓解了这一问题，但偏好信号仍只在轨迹级使用：同一优势被均匀施加到长轨迹所有步骤，决定成败的中间行为被稀释；比较中揭示的成功模式在产出偏好后即被丢弃，无法沉淀为可复用经验。
- 本文要回答的问题是：能否把比较式反馈从轨迹级进一步传播到两个互补层面——局部传播到关键推理步骤做针对性优化，跨轨迹传播把成功行为固化为可复用技能引导长期探索。与依赖可验证中间步骤的过程奖励模型和难以判定技能有效性的技能库方法不同，ArenaFlow 用锦标赛深度作为置信度信号同时解决信用分配和技能效用估计。

### 方法与关键设计

- 整体流程分四步：先在轨迹组内做锦标赛相对排序得到轨迹级奖励；再对每次两两比较做结构化反思评估，产出三类监督信号；然后分别在步骤级和技能级传播信用；最后用带步骤级优势的策略目标优化模型。
- 轨迹级排序：给定查询 <span class="paper-math">&#92;(x&#92;)</span>，策略模型 <span class="paper-math">&#92;(&#92;pi&#95;&#123;&#92;theta&#125;&#92;)</span> 生成轨迹组 <span class="paper-math">&#92;(&#92;mathcal&#123;G&#125;=&#92;&#123;&#92;tau&#95;1,&#92;ldots,&#92;tau&#95;N&#92;&#125;&#92;)</span>。采用带种子的单败淘汰赛，先用贪心解码轨迹作锚建立初始排序先验，再通过二叉淘汰比较。赛后每条轨迹得到组内名次，转换为分位式奖励 <span class="paper-math">&#92;(r&#95;i=1-&#92;frac&#123;&#92;mathrm&#123;Rank&#125;&#95;&#123;&#92;tau&#95;i&#125;&#125;&#123;N-1&#125;&#92;)</span>，再做组内归一化 <span class="paper-math">&#92;(A&#95;i=&#92;frac&#123;r&#95;i-&#92;mu&#95;r&#125;&#123;&#92;sigma&#95;r+&#92;epsilon&#125;&#92;)</span> 得到轨迹级优势。这一步沿用 ArenaRL 的锦标赛范式，作用是获得对裁判噪声更稳健的偏好信号。
- 结构化反思评估：对第 <span class="paper-math">&#92;(m&#92;)</span> 轮的每次比较，裁判模型 <span class="paper-math">&#92;(&#92;mathcal&#123;J&#125;&#92;)</span> 除预测胜者外还输出三类诊断：胜者轨迹中对胜利有实质贡献的关键成功步骤；从被比较轨迹中抽象的可复用技能（含名称、描述、核心原理、执行指南和避错约束）；以及若 rollout 时注入了检索到的历史技能，判定哪些被实质用于关键步骤。这把裁判理由转化为可操作的信用信号，是两层传播的原料。
- 步骤级信用传播：核心假设是越深轮次识别出的关键步骤越可靠，因为它支撑了对更强幸存者的胜利。设锦标赛总深度为 <span class="paper-math">&#92;(D&#92;)</span>，第 <span class="paper-math">&#92;(m&#92;)</span> 轮的置信权重为 <span class="paper-math">&#92;(&#92;omega&#95;m=&#92;frac&#123;&#92;exp(&#92;eta&#92;cdot m/D)&#125;&#123;&#92;sum&#95;&#123;j=1&#125;^&#123;D&#125;&#92;exp(&#92;eta&#92;cdot j/D)&#125;&#92;)</span>，<span class="paper-math">&#92;(&#92;eta&#92;)</span> 控制加权锐度。轨迹 <span class="paper-math">&#92;(&#92;tau&#95;i&#92;)</span> 第 <span class="paper-math">&#92;(k&#92;)</span> 步的原始信用 <span class="paper-math">&#92;(q&#95;i^k=&#92;sum&#95;&#123;m&#92;in&#92;mathcal&#123;R&#125;&#95;i&#125;&#92;omega&#95;m&#92;cdot&#92;mathbb&#123;I&#125;(k&#92;in&#92;mathcal&#123;P&#125;&#95;i^m)&#92;)</span>，即在获胜轮次中该步被标为关键的加权计数；再在轨迹内归一化为 <span class="paper-math">&#92;(g&#95;i^k&#92;)</span>。最终步骤优势 <span class="paper-math">&#92;(A&#95;i^k=A&#95;i+&#92;max(A&#95;i,0)&#92;cdot g&#95;i^k&#92;)</span>：只对正排名轨迹放大关键步骤，保留全局偏好方向的同时强化局部有效行为。
- 技能级信用传播：维护全局技能记忆 <span class="paper-math">&#92;(&#92;mathcal&#123;B&#125;&#92;)</span>，每个技能 <span class="paper-math">&#92;(s&#92;)</span> 带效用分 <span class="paper-math">&#92;(U&#95;s&#92;)</span> 和评估次数 <span class="paper-math">&#92;(n&#95;s&#92;)</span>。冠军轨迹相关比较中提取的子技能由 LLM 汇总为元技能插入记忆，语义等价但更泛化的新技能做版本感知替换。由于同组所有轨迹条件于相同检索技能，检索本身不等于有用，因此只有裁判明确把技能归因到关键成功步骤时才计效用：组级归因信用 <span class="paper-math">&#92;(C&#95;s^x=&#92;sum&#95;&#123;&#92;tau&#95;i&#92;in&#92;mathcal&#123;G&#125;&#125;&#92;sum&#95;&#123;m&#92;in&#92;mathcal&#123;R&#125;&#95;i&#125;&#92;omega&#95;m&#92;cdot&#92;mathbb&#123;I&#125;(s&#92;in&#92;mathcal&#123;Q&#125;&#95;i^m)&#92;)</span>，在检索技能集内归一化为 <span class="paper-math">&#92;(z&#95;s^x&#92;)</span> 后在线更新 <span class="paper-math">&#92;(U&#95;s&#92;leftarrow&#92;frac&#123;n&#95;sU&#95;s+z&#95;s^x&#125;&#123;n&#95;s+1&#125;&#92;)</span>。活跃池 <span class="paper-math">&#92;(&#92;mathcal&#123;B&#125;&#95;&#123;&#92;mathrm&#123;active&#125;&#125;=&#92;&#123;s&#92;mid n&#95;s&lt;K&#92;lor U&#95;s&#92;geq 0&#92;&#125;&#92;)</span> 保证技能至少被评估 <span class="paper-math">&#92;(K&#92;)</span> 次且效用为负才剪枝，避免过早丢弃新技能。
- 检索与优化：查询时先按余弦相似度从活跃池召回 top-<span class="paper-math">&#92;(2k&#92;)</span> 候选，再按 <span class="paper-math">&#92;(&#92;phi&#95;&#123;&#92;mathrm&#123;ret&#125;&#125;(x,s)=&#92;mathrm&#123;Sim&#125;(x,s)+&#92;lambda&#92;cdot U&#95;s&#92;)</span> 重排，取 top-<span class="paper-math">&#92;(k&#92;)</span> 技能注入系统提示作为策略先验。策略优化用带 clip 的目标 <span class="paper-math">&#92;(&#92;max&#95;&#123;&#92;pi&#95;&#92;theta&#125;&#92;mathbb&#123;E&#125;[&#92;sum&#92;min(&#92;rho&#95;i^kA&#95;i^k,&#92;mathrm&#123;clip&#125;(&#92;rho&#95;i^k,1-&#92;epsilon,1+&#92;epsilon)A&#95;i^k)]&#92;)</span>，<span class="paper-math">&#92;(&#92;rho&#95;i^k&#92;)</span> 为概率比。与基线的关键差异在于：ArenaRL 只做轨迹级锦标赛排序，ArenaFlow 额外把比较反馈分解为步骤级和技能级信用，且技能记忆随训练演化。

### 实验设计与论证方式

- 实验在三个开放域基准上进行：Open-Travel（个性化行程规划，含多航点路由、单日规划、交通比较、POI 搜索、多日规划五个子任务，提供六个旅行工具）、Open-DeepResearch（多轮网页搜索与信息综合，基于 Google API）和 DeepResearch Bench（22 个领域共 100 个博士级研究任务，作为迁移基准）。评价协议为 LLM-as-a-Judge：Qwen3-Max 与 Claude-4-Sonnet 双裁判，将模型轨迹与基准基线轨迹成对比较，计算非平局比较上的胜率并平均两裁判分数；DeepResearch Bench 用 Gemini-2.5-Pro 按官方 RACE 指标（全面性、深度、指令遵循、可读性）评价。
- 比较对象分三组：闭源强模型（GPT-5.2、Grok-4、Gemini-2.5-Pro、Claude-4.5-Sonnet）；RL 算法，包括逐点奖励的 GRPO、GSPO、Reinforce++（冷启动后 RL）和成对偏好的 Writing-Zero、Pref-GRPO、ArenaRL（直接 RL），所有 RL 基线使用与 ArenaFlow 相同的骨干和裁判；以及专有 deepsearch 系统。骨干为 Qwen3-8B，裁判为 Qwen3-Max，组大小 <span class="paper-math">&#92;(N=16&#92;)</span>、每组 <span class="paper-math">&#92;(G=8&#92;)</span>，训练 120 步，学习率 <span class="paper-math">&#92;(1&#92;times10^&#123;-6&#125;&#92;)</span>，检索 top-<span class="paper-math">&#92;(k=3&#92;)</span>，剪枝最小评估次数为 5，效用重排系数 0.2，全部在 8 张 NVIDIA H20 GPU 上进行。
- 消融在 Open-Travel 上分别移除步骤信用、技能信用、整个技能记忆和深度加权；进一步分析包括跨裁判鲁棒性、检索技能数量扫描（最优为中等数量，过多引入冗余干扰）、训练曲线对比、计算成本，以及结构化反思评估与三人标注的一致性检验（随机抽 200 个成对比较，关键步骤识别与技能归因的 F1 分别为 79.5 和 76.1）。论文未报告线上或 AB 实验；正文声明代码已公开，本次未核验仓库内容。

### 结果与证据

- 在 Open-Travel 上，ArenaFlow 的均值分数较直接 RL 基线 ArenaRL 有大幅提升，也高于全部所列闭源模型和冷启动 RL 基线。该结果说明分层信用传播在行程规划任务上带来一致增益，但指标为相对基线轨迹的裁判胜率，属单基准离线结果，未含线上验证。（Table 1, Section 4.2）

  > As shown in Table 1 , ArenaFlow achieves the best overall performance across Open-Travel and Open-DeepResearch. On Open-Travel, ArenaFlow substantially outperforms both closed-source models and RL baselines, improving the mean score over ArenaRL from 35.9 to 55.4.

- 在 DeepResearch Bench 迁移评测中，在 Open-DeepResearch 上训练的 ArenaFlow 取得所列方法中最高的总体分，超过 ArenaRL 与 Pref-GRPO，并与专有 deepsearch 系统相当。该结果支持模型学到可迁移的研究策略而非基准特定行为，但迁移仅检验了这一个目标基准。（Table 2, Section 4.2）

  > ArenaFlow obtains the best overall score of 43.2, outperforming ArenaRL by 5.6 and Pref-GRPO by 9.1. It also performs competitively against proprietary deep-search systems such as Grok Deeper Search and Perplexity Deep Research. This transfer result suggests that ArenaFlow learns reusable research strategies rather than benchmark-specific behaviors.

- 消融显示移除步骤级信用后 Open-Travel 均值明显下降，说明仅用轨迹级优势在长程规划中存在信用稀释；禁用技能级信用也导致下降，说明使用归因的效用估计对抑制陈旧技能必要。各组件贡献为该基准上的观察，不能外推为所有任务的因果结论。（Table 3, Section 4.3）

  > Removing step-level credit reduces the mean score from 55.4 to 48.6, showing that trajectory-level advantages alone suffer from credit dilution in long-horizon planning tasks. Disabling skill-level credit lowers the mean score to 50.7, suggesting that usage-attributed utility estimation is necessary to suppress stale or ineffective skills.

- 成本对比表明 ArenaFlow 相对 ArenaRL 只增加温和开销，却带来明显更高的性能；相比 Pref-GRPO 则用更少的 token 和 LLM 调用取得更高分。该结果支持方法在效率与性能间有较好权衡，但仅在 Open-Travel 单一基准和固定组配置下测得。（Table 5, Appendix B）

  图表观察（PDF 第 14 页）：表 5（第 14 页）列出 Open-Travel 上 GRPO 训练 57 分钟、0.29M tokens、128 次 LLM 调用、性能 16.4%；Pref-GRPO 为 2h02min、3.87M、960 次、32.2%；ArenaRL 为 1h16min、1.52M、240 次、35.9%；ArenaFlow 为 1h22min、1.97M、248 次、55.4%。

### 与小组方向的关联

论文直接命中小组的 Agentic RL 与 Memory with training 方向，把锦标赛偏好信号分解为步骤级和技能级信用，机制设计清晰，技能记忆的效用感知更新与检索可借鉴到个性化与生成式推荐场景。主要限制是评价依赖 LLM-as-a-Judge、无线上实验，技能效用估计的长期稳定性有待验证。

### 局限与阅读边界

- 评价协议本身依赖 LLM-as-a-Judge：训练奖励和测试指标都由裁判模型产生，尽管跨裁判实验和与人工标注的一致性检验提供了一定支持，但裁判偏差仍可能系统性影响绝对分数，且 Open-Travel/Open-DeepResearch 的指标是相对基线轨迹的胜率而非绝对质量。技能效用估计依赖裁判对“实质使用”的归因判断，长训练下归因噪声的累积效应论文未充分讨论。
- 从材料可提出的待验证问题：技能记忆的跨任务迁移只在 DeepResearch Bench 上检验了一次，技能是否会在分布差异更大的任务上引入误导性先验尚不清楚；效用更新是简单滑动平均，未与更复杂的技能依赖建模（如 GoS 的图结构）对比；<span class="paper-math">&#92;(&#92;eta&#92;)</span>、<span class="paper-math">&#92;(&#92;lambda&#92;)</span>、<span class="paper-math">&#92;(K&#92;)</span> 等超参的敏感性只有部分扫描。此外，每步比较都需调用强裁判做结构化反思，成本分析显示相对 ArenaRL 开销温和，但更大规模训练或更强裁判下的成本仍待验证。
- 本次阅读范围方面：论文未报告线上或 AB 实验，所有结论来自离线基准；代码仓库已声明但本次未核验其内容与复现环境。计算成本对比限于 Open-Travel 单一基准和固定组配置，其他任务上的开销比例可能不同。

## OneBid: A Unified Auto-Bidding Foundation Model for Diverse oCPX Advertising Scenarios {#arxiv-2609-21550}

**作者：** Yewen Li, Peng Jiang, Yitian Li, Pengfei Lv, Xialong Liu, Peng Jiang, Qingpeng Cai

**命中的作者机构：** Kuaishou

**作者单位原文：** Kuaishou Technology , Beijing, China；Kuaishou Technology

**论文：** [arXiv](https://arxiv.org/abs/2609.21550) · [本次阅读版本 v1](https://arxiv.org/abs/2609.21550v1)

阅读范围：完整 PDF，共 14 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Auto-bidding is central to computational advertising, where strategies must maximize advertisers' conversion value under economic constraints. It has evolved from rule-based controllers to reinforcement learning and generative methods such as Decision Transformer (DT). Yet these methods increasingly mismatch the prevailing optimized cost-per-X (oCPX) paradigm, which spans heterogeneous scenarios (e.g., registration, purchase), each served by a separate model, leading to fragmented pipelines and underexploring cross-scenario modeling. Inspired by foundation models like LLMs, unifying these oCPX scenarios into one model raises three challenges: multi-objective control, scalable capacity under strict latency, and safe offline policy improvement. We present OneBid, a unified auto-bidding foundation model that learns a reusable backbone from heterogeneous oCPX logs and adapts it to scenario-specific deployments via offline post-training. Building on DT, OneBid extends single Return-to-Go conditioning to two atomic signals, Return-to-Go for conversion value and Cost-to-Go for cost ratio, plus value-aware regularization on next-action prediction. To absorb distributional heterogeneity, we design a sequence-level Mixture-of-Experts architecture, where shared experts encode cross-scenario knowledge and sparsely-routed experts capture scenario-specific patterns at low latency, yielding consistent scaling with model size and data. During post-training, we align the backbone with scenario preferences via Critic-guided Relative Offline Policy optimization (CROP): a learned critic scores candidate actions group-relatively, avoiding the unsafe online exploration of GRPO-style fine-tuning while constraining policy shift to reduce OOD risk. Validated via online A/B tests and fully deployed at Kuaishou, OneBid delivers an overall +2.2% ADVV gain on oCPX Ads, peaking at +13.1% in the ROAS scenario.

### 一句话速览

针对快手 oCPX 广告中每场景单独训练出价模型导致的碎片化问题，提出统一自动出价基础模型 OneBid：以 Decision Transformer 为骨干，用 RTG/CTG 双控制信号解耦转化与成本目标，序列级 MoE 扩容并保低时延，后训练用 CROP 做离线策略改进。线上 A/B 显示 oCPX 整体 ADVV 提升，ROAS 场景增益最大，已全量部署。

### 研究动机

- 自动出价是计算广告的核心决策模块：策略在预算与成本效率约束下自动调整出价，最大化广告主转化价值。在 oCPX（按目标转化优化计费）广告中，注册、激活、购买等转化目标各构成一个出价场景，数据稀疏度、环境动态和成本容忍度差异很大，工业系统因此采用一场景一模型流水线，工程冗余且无法共享跨场景知识。受基础模型范式启发，作者问：能否用一个基础模型统一多样的 oCPX 出价场景。
- 直接照搬 LLM 式配方并不容易，论文归纳三个挑战：一是多目标控制，原始 Decision Transformer（DT）只以单一标量回报条件化，无法同时表达转化价值与成本比；二是严格线上时延下扩展容量，稠密模型计算随参数线性增长，token 级 MoE 又有路由开销；三是安全的离线策略改进，出价动作的业务效果延迟、反事实且不能线上探索验证。
- 与最相关的生成式出价方法（AIGB/DiffBid、GAS、GAVE、CBD）相比，它们仍是场景专属的策略学习器，未研究异构场景日志能否作为可扩展预训练语料学到可迁移规律。OneBid 回答的正是这个统一化问题。

### 方法与关键设计

- 问题建模上，出价形式化为带约束的序贯决策：策略按较粗频率调整出价乘子 <span class="paper-math">&#92;(&#92;alpha&#92;)</span>，出价形式为 <span class="paper-math">&#92;(b&#95;i=&#92;alpha&#92;cdot&#92;mathrm&#123;CPA&#125;&#92;cdot p&#92;mathrm&#123;CTCVR&#125;&#95;i&#92;)</span>，CPA 是广告主指定的单转化成本，pCTCVR 是预估转化概率。轨迹为 <span class="paper-math">&#92;(&#92;tau=&#92;&#123;(&#92;mathbf&#123;s&#125;&#95;t,&#92;mathbf&#123;a&#125;&#95;t,r&#95;t,z)&#92;&#125;&#95;&#123;t=1&#125;^T&#92;)</span>，场景身份 <span class="paper-math">&#92;(z&#92;)</span> 与场景相关奖励使各场景共享统一轨迹格式。oCPX 下预算约束通常很弱，核心是双目标：最大化转化价值并保持成本比在有效区间内。
- 预训练输入设计：把 DT 的单一 Return-to-Go（RTG，剩余累计回报条件信号）扩展为两个原子信号——面向转化的 RTG 与面向成本比的 Cost-to-Go（CTG）。转化价值稀疏且延迟，作者用实时可观测的累计成本构造稠密代理分数 <span class="paper-math">&#92;(G&#95;t&#92;)</span>：成本在目标成本边界内时随成本线性增长，超出后对称下降（对应平台对超花的补偿），差分得步级奖励再累加为 RTG。CTG 编码未来成本比偏差 <span class="paper-math">&#92;(|1-&#92;rho&#95;i|&#92;)</span> 的变化量，负值表示预期会回到目标成本比。二者构成解耦的二维控制接口，输入 token 为 <span class="paper-math">&#92;((RTG,CTG,&#92;mathbf&#123;s&#125;,&#92;mathbf&#123;a&#125;)&#92;)</span> 加场景嵌入；线上服务时由 pacing 模块给出目标，RTG/CTG 按实际状态在线更新。
- 模型输出与训练目标：为避免退化为对日志动作的行为克隆，动作头之外增加辅助 Q/V 预测头，采用 IQL 式保守目标——V 用期望分位数回归拟合，Q 用单步 TD 拟合。总目标为动作 MSE 加带权重 <span class="paper-math">&#92;(&#92;lambda&#92;)</span> 的 Q/V 损失，既用长程价值信号正则化表示，又为后训练 critic 提供热启动。
- 骨干是序列级 MoE（S-MoE）：每个 Transformer 块保留因果注意力，把稠密 FFN 替换为共享专家加路由专家。共享专家对每条序列始终激活，编码跨场景共性；路由专家按整条序列的场景身份 <span class="paper-math">&#92;(z&#92;)</span> 硬路由，建模场景特有残差模式，子集内用轻量状态相关权重聚合。与 token 级 MoE 不同，S-MoE 不需要学习路由器，每条请求的激活专家数与执行图固定，避免小批量流式请求下 token 分发、重组与负载不均带来的尾时延不稳定，同时以共享专家促进正向迁移、路由专家抑制负向干扰。
- 后训练 CROP：先通过可控奖励 <span class="paper-math">&#92;(r&#95;t=&#92;Delta&#92;mathrm&#123;cost&#125;&#95;t/&#92;max(&#92;mathrm&#123;cost&#92;&#95;ratio&#125;&#95;t,1)^&#92;beta&#92;)</span> 实例化场景偏好，<span class="paper-math">&#92;(&#92;beta&#92;)</span> 控制超花惩罚强度，<span class="paper-math">&#92;(&#92;beta=0&#92;)</span> 退化为纯转化最大化；critic 从预训练 Q/V 头初始化并继续训练。CROP 对每个状态从旧策略采样一组候选出价动作，用 critic 打分并组内归一化得相对优势，以带裁剪的策略目标加对预训练参考策略的 KL 约束更新 actor。组相对归一化降低对异构状态下 Q 值绝对刻度的依赖，KL 约束把更新限制在预训练模型可靠支撑附近以降低分布外风险；附录给出误差分解，说明候选动作裁剪与 critic 保守训练共同控制外推误差。推断时以在线更新的 RTG/CTG 与近期轨迹为条件自回归生成出价动作。

### 实验设计与论证方式

- 数据来自快手 oCPX 广告工业日志：预训练语料约七千万条训练转移与七百万条留出转移，覆盖七种 oCPX 动作类型（表单提交、激活、购买、ROAS 等），训练/测试按时间顺序划分防泄漏。离线指标为下一动作预测（NAP）MSE、Q 回归误差与 Q 值提升；线上指标为 ADVV（平台可向广告主收取的有效收入，主业务指标）与 Valid Ratio（成本比落在有效区间的成本加权广告主占比）。
- 实现上，OneBid 是因果 Transformer，五个规模从约四百万到五亿参数；S-MoE 每块含 4 个共享专家与 28 个路由专家、每序列激活 4 个路由专家；CROP 每状态采样 5 个候选动作、迭代 3 次。离线对比包括缩放分析、CTG 与 S-MoE 消融（与激活参数量对齐的稠密对照）、critic 缩放，以及 AWR、GAS 两种微调基线（相同 actor/critic 架构）。线上 A/B 在快手生产流量上进行，每实验占三分之一流量、至少连续五天，做前后 AA 校验，对比对象是各场景重度调优的生产 DT 基线；另在单卡 H800 上做 256 专家的 token 级 MoE 时延基准。

### 结果与证据

- 在归一化 Q 值提升指标上，CROP 相比 AWR 与 GAS 两种离线微调基线取得明显更大的改进，说明用 critic 做组内相对排序并直接优化 actor 比仅重加权日志动作或外部动作搜索更有效。该结果是离线估计的 Q 值提升，不能直接等同于线上业务收益。（Table 1, Section 6.2）

  > Held-out Q regression error decreases as critic model size and data volume increases. Table 1 . Q-value improvement of fine-tuning methods. Metric AWR GAS CROP <span class="paper-math">&#92;(&#92;Delta Q/Q&#95;&#123;&#92;mathrm&#123;label&#125;&#125;&#92;)</span> <span class="paper-math">&#92;(&#92;uparrow&#92;)</span> 0.12% 0.06% 1.90% Pretraining scaling.

- 全量部署后的累计线上 A/B 结果显示，OneBid 在购买、ROAS、激活、表单提交、线索提交等多个 oCPX 场景均取得一致的 ADVV 增益，多数场景 Valid Ratio 同步改善，仅激活场景略有下降；整体增益支持统一基础模型可替代碎片化场景专属流水线的主张。各场景置信区间宽度不同，ROAS 场景区间较宽，单场景结论应结合区间解读。（Table 4, Section 6.3）

  > Scenario ADVV <span class="paper-math">&#92;(&#92;uparrow&#92;)</span> Valid Ratio <span class="paper-math">&#92;(&#92;uparrow&#92;)</span> Purchase +2.5% CI: [0.7%, 4.3%] +4.1pp ROAS +13.1% CI: [5.0%, 28%] +3.1pp Activation +1.8% CI: [1.3%, 2.2%] <span class="paper-math">&#92;(-&#92;)</span> 0.3pp Form Submit +1.9% CI: [1.0%,2.8%] +2.8pp Leads Submit +2.3% CI: [1.1%, 3.7%] +0.5pp oCPX Overall +2.2% — After validating the two-stage effect in a representative deployment, we examine whether the full

- 在 256 专家的基准配置下，S-MoE 相比 token 级 MoE 取得超过一个数量级的单请求时延降低并显著降低峰值显存，支持序列级硬路由避免逐 token 分发与同步开销的设计动机。该测量限于单卡、特定批量与序列长度的离线基准，不代表完整线上服务链路。（Table 5, Appendix G）

  > Latency and memory comparison of MoE implementations with 256 experts, measured on a single NVIDIA H800 GPU (batch size 32, sequence length 20, hidden dim 128, top- <span class="paper-math">&#92;(k=2&#92;)</span> ). S-MoE achieves over <span class="paper-math">&#92;(13&#92;times&#92;)</span> lower latency and <span class="paper-math">&#92;(&#92;sim&#92;)</span> <span class="paper-math">&#92;(40&#92;%&#92;)</span> lower peak memory than token-level MoE.

- 图中可观察到留出集 NAP 损失随模型规模与预训练数据量增加而持续下降，五个模型规模与多档数据量均呈单调趋势，支持把异构 oCPX 日志当作共享预训练语料的前提。这是所研究区间内的经验趋势，作者拟合的幂律仅具指示性，不能外推为普适缩放定律。（Figure 2, Section 6.2）

  图表观察（PDF 第 7 页）：Figure 2（第 7 页）为对数坐标缩放曲线：横轴为训练转移数（1M 至 70M），纵轴为留出集 NAP MSE（对数刻度），五条曲线对应 4M、15M、60M、0.2B、0.5B 模型规模；所有曲线随数据量增加单调下降，且模型越大曲线越低。

### 与小组方向的关联

论文命中小组的生成式决策模型、模型架构设计与 Attention 机制方向：DT 骨干、序列级 MoE、离线组相对策略优化都是可借鉴的通用设计，且线上 A/B 与全量部署提供了少见的工业级证据。限制是任务为广告出价而非推荐排序，数据专有，公开可复现性有限。

### 局限与阅读边界

- 作者承认的局限：训练与评测均基于快手专有日志，缺乏含多转化场景的公开大规模数据集，限制公开可复现性；线上对比只能选能通过工程、时延与风控要求的生产安全基线，已部署系统中难以对单模块做细粒度线上隔离；NAP 损失、critic 回归误差与估计 Q 值提升等离线指标不能完全替代线上业务指标。
- 从材料可合理提出的验证问题：缩放幂律只在所研究区间成立，作者明确不声称普适定律，外推到更大规模待验证；S-MoE 时延优势在特定批量与序列长度配置下测得，其他服务配置未报告；CROP 的离线安全性依赖动作裁剪与 KL 约束强度，这些超参在其他平台的迁移效果未验证。
- 本次阅读范围方面：论文未声明开源代码或数据，本次也未核验任何代码仓库，复现需依赖论文描述；ROAS 场景的线上置信区间较宽，单场景增益应结合区间解读而非只看点估计。

## Attention-Aware Routing: Coupling Routing and Attention in MoEs {#arxiv-2609-20974}

**作者：** Despoina Kosmopoulou, Anastasios Tsetsilas, Efthymios Georgiou, Giannis Karamanolakis, Swastik Roy, Alexandros Potamianos

**命中的作者机构：** Amazon

**作者单位原文：** Amazon AGI

**论文：** [arXiv](https://arxiv.org/abs/2609.20974) · [本次阅读版本 v1](https://arxiv.org/abs/2609.20974v1)

阅读范围：完整 PDF，共 9 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

In Mixture-of-Experts language models, the router typically selects and weights experts based on the token's hidden state, utilizing limited contextual information. We propose Attention-Aware Routing (AAR), which augments the router with temporal and spectral features extracted from a sliding window of attention weights that represent a summary of the model's contextual state, disentangled from the hidden state. Keeping the base transformer entirely frozen, we train only the routing parameters, isolating routing as the sole variable. AAR improves GSM8K by +3.37 pp over a routing-only SFT baseline on OLMoE. Beyond performance, we show that routing and attention form a coupled circuit: routing changes at layer l propagate through the residual stream to amplify attention sinks at layer l+1, reshaping attention without any direct update to the attention mechanism itself. Further, AAR reduces long diverging generation, with incorrect answers getting shorter, while correct answers remain unchanged in length. Finally, AAR is strongly depth-sensitive: applying it indiscriminately across layers can degrade factual retrieval, whereas mathematical reasoning gains persist when it is introduced deeper in the network. This sensitivity exposes a retrieval--reasoning tension across depth and makes layer-selective AAR a controlled probe of the routing-relevant information carried by attention at different layers.

### 一句话速览

面向 MoE 语言模型的路由器：作者提出注意力感知路由 AAR，把最近若干 token 的注意力权重经时域与频域特征送入辅助线性路由器，与标准路由门控融合；冻结基座、只训练路由参数。OLMoE 上 GSM8K 较 routing-only SFT 提升三点三个百分点，并揭示路由—注意力耦合回路、错误答案变短以及随深度的检索—推理权衡，适用于后 SFT 的 MoE 适配。

### 研究动机

- 混合专家（MoE）语言模型通过每个 token 只激活部分专家来扩展容量并控制推理成本。路由器决定每个 token 由哪些专家处理：输入是该 token 的隐状态，输出是对各专家的打分并选出 top-k；它既负责计算分配，也决定每层由哪些计算路径塑造 token 表示。
- 标准路由只用隐状态作为输入，而上下文关系信息（模型当前在关注什么、忽略什么）与语义内容在隐状态中纠缠。已有改进路线包括跨层循环路由单元、用超网络生成路由参数，以及在推理阶段按人工规则干预注意力；与这些不同，本文想在训练中把注意力信号固化为可学习、架构原生的路由偏置。
- 本文要回答的问题是：若把内容与上下文关系信息的解耦作为归纳偏置注入路由——用注意力权重窗口作为额外输入——仅训练路由参数、其余全部冻结，能否改变模型的任务表现与生成行为。

### 方法与关键设计

- 标准 MoE 路由中，第 <span class="paper-math">&#92;(l&#92;)</span> 层注意力子层之后的 token 表示 <span class="paper-math">&#92;(&#92;mathbf&#123;h&#125;&#95;i^l&#92;)</span> 经线性映射得到专家打分 <span class="paper-math">&#92;(&#92;mathbf&#123;g&#125;&#95;i = W&#95;r &#92;mathbf&#123;h&#125;&#95;i^l&#92;)</span>，softmax 后选 top-k 专家。AAR 在每个选定的 MoE 层并行引入一个辅助注意力路由模块 <span class="paper-math">&#92;(A&#95;l&#92;)</span>：其输入不是隐状态，而是该 token 对序列中前若干位置的注意力权重。
- 注意力窗口的构造：对当前 token，取其对最近 <span class="paper-math">&#92;(M&#92;)</span> 个 token 的注意力权重并跨注意力头平均，组装成滑窗 <span class="paper-math">&#92;(&#92;mathbf&#123;w&#125;&#95;i^l &#92;in &#92;mathbb&#123;R&#125;^M&#92;)</span>；序列开头不足 <span class="paper-math">&#92;(M&#92;)</span> 个位置时从左侧零填充保持长度恒定。直观理解：隐状态概括 token“是什么”，注意力权重则编码压缩的关系结构——模型最近看哪里、忽略哪里、焦点集中何处——相对独立于内容信息。
- 增强窗口通过固定、不学习的特征映射 <span class="paper-math">&#92;(&#92;phi&#92;)</span> 得到：时域变体 <span class="paper-math">&#92;(&#92;text&#123;AAR&#125;^&#123;&#92;text&#123;T&#125;&#125;&#92;)</span> 直接保留原始窗口；完整版再拼接窗口的离散傅里叶变换（DFT）幅度，即 <span class="paper-math">&#92;(&#92;phi(&#92;mathbf&#123;w&#125;&#95;i^l) = &#92;big[&#92;,&#92;mathbf&#123;w&#125;&#95;i^l &#92;| &#92;log(1+|&#92;mathcal&#123;F&#125;(&#92;mathbf&#123;w&#125;&#95;i^l)|)&#92;,&#92;big]&#92;)</span>，保留前 <span class="paper-math">&#92;(K=&#92;lfloor M/2&#92;rfloor+1&#92;)</span> 个频点，<span class="paper-math">&#92;(&#92;log(1+&#92;cdot)&#92;)</span> 压缩幅度的动态范围。频域视图平移不变，能暴露单层线性层难以从原始窗口恢复的谱结构。
- 注意力路由器是单层线性映射 <span class="paper-math">&#92;(&#92;mathbf&#123;g&#125;^&#123;&#92;text&#123;attn&#125;&#125;&#95;i = A&#95;l^&#92;top &#92;tilde&#123;&#92;mathbf&#123;w&#125;&#125;&#95;i^l&#92;)</span>，<span class="paper-math">&#92;(A&#95;l &#92;in &#92;mathbb&#123;R&#125;^&#123;M' &#92;times E&#125;&#92;)</span> 按视图分块对角，视图之间不引入交叉权重。随后做路由插值：门控 <span class="paper-math">&#92;(&#92;boldsymbol&#123;&#92;alpha&#125;&#95;i = &#92;sigma&#92;big(G&#95;l[&#92;,&#92;mathbf&#123;h&#125;&#95;i^l &#92;| &#92;tilde&#123;&#92;mathbf&#123;w&#125;&#125;&#95;i^l&#92;,]&#92;big)&#92;)</span> 依据隐状态与各自窗口给出每个视图的置信权重；最终打分为 <span class="paper-math">&#92;(&#92;mathbf&#123;g&#125;&#95;i = &#92;boldsymbol&#123;&#92;beta&#125;&#95;0 &#92;odot &#92;mathbf&#123;g&#125;^&#123;&#92;text&#123;std&#125;&#125;&#95;i + B&#92;big(&#92;boldsymbol&#123;&#92;alpha&#125;&#95;i &#92;odot &#92;mathbf&#123;g&#125;^&#123;&#92;text&#123;attn&#125;&#125;&#95;i&#92;big)&#92;)</span>，其中 <span class="paper-math">&#92;(&#92;boldsymbol&#123;&#92;beta&#125;&#95;0 = &#92;mathbf&#123;1&#125; - B&#92;boldsymbol&#123;&#92;alpha&#125;&#95;i&#92;)</span>。当 <span class="paper-math">&#92;(&#92;boldsymbol&#123;&#92;alpha&#125;&#95;i &#92;equiv &#92;mathbf&#123;0&#125;&#92;)</span> 时完全退化为标准路由，保证注意力信号只在门控“有信心”时介入，且不破坏负载均衡等既有训练目标。
- 训练时冻结除路由参数外的全部模型参数，只更新原路由 <span class="paper-math">&#92;(W&#95;r^l&#92;)</span> 与辅助参数 <span class="paper-math">&#92;((A&#95;l, G&#95;l)&#92;)</span>，用标准下一词预测损失；推断流程不变，仅路由打分多了一路注意力窗口输入。这一设置把路由隔离为唯一变量，使后续性能变化与机制观察可归因到路由本身，也是与“改动注意力机制本身”一类方法的本质差别。
- 窗口长度有信号层面的依据：作者对窗口 <span class="paper-math">&#92;(&#92;mathbf&#123;w&#125;&#95;i^l&#92;)</span> 做归一化自相关分析（在 GSM8K 提示上按 query token 平均），发现其有效相关长度在约二十个 token 处衰减到阈值以下——即超过该长度的相邻注意力权重已不相关——这解释了中等窗口最优、大窗口反而退化的消融结果。

### 实验设计与论证方式

- 主实验在 OLMoE-1B-7B-SFT 上进行：一个总参数七千百万、每 token 激活一百万子集的 MoE 模型，含十六个 MoE 层、每层六十四个专家、top-8 路由。只在 Tulu3 的四分之一采样（约二十二万条）上微调路由参数，AdamW 优化器，批大小一千余，序列长度五百余，每个配置五个随机种子，单次 OLMoE 训练约四个 GPU 小时；在 Qwen1.5-MoE-A2.7B-Chat 上复验，并在更大的 Qwen3.6-MoE 上仅用一万多样本做数学评测、三个种子。
- 基线设计是关键：与原始 SFT 模型以及同条件的 routing-only SFT（不含辅助路由器、同样继续训练）比较，后者把“额外注意力信号”与“继续训练”的贡献分开。评测覆盖 GSM8K（八样本思维链准确率）、BBH、MMLU、MATH-500、HumanEval（pass@10）与 IFEval（loose 准确率）。分析包括窗口大小消融、注意力信号自相关、注意力汇逐层统计、答案长度配对分析以及按起始层扫描的学科级 MMLU 评测。
- 本次阅读范围内，文中未报告任何线上或 AB 实验，也未出现代码开源的声明；所有结论来自离线基准与内部行为分析，机制解释部分作者以假设语气给出。

### 结果与证据

- 在 OLMoE 上，把注意力路由施加于中间偏深层后，GSM8K 数学推理成绩稳定高于仅训练原路由器的同条件基线；仅用时域窗口的简化版本已带来大部分提升，完整版本进一步增益。BBH、HumanEval 与 IFEval 成绩保持在噪声范围内，说明收益集中于数学推理而非伴随整体波动。（Table 1 / Section 4.2）

  > AAR, applied to layers <span class="paper-math">&#92;(S=&#92;&#123;9,&#92;ldots,15&#92;&#125;&#92;)</span> with <span class="paper-math">&#92;(M=40&#92;)</span> , achieves the best GSM8K performance at <span class="paper-math">&#92;(55.36&#92;pm 0.74&#92;)</span> , a gain of <span class="paper-math">&#92;(+3.37&#92;)</span> pp over routing-only SFT. AAR <span class="paper-math">&#92;(&#123;&#125;^&#123;&#92;text&#123;T&#125;&#125;&#92;)</span> (AAR utilizing only time-domain weights) at <span class="paper-math">&#92;(M=20&#92;)</span> already improves GSM8K from <span class="paper-math">&#92;(51.99&#92;)</span> to <span class="paper-math">&#92;(54.57&#92;)</span> ( <span class="paper-math">&#92;(+2.58&#92;)</span> pp), with the full AAR providing further gain.

- 在规模更大的 MoE 模型上，将注意力路由施加于少数中间到深层的全注意力层，仅用小规模样本训练且无架构特定调参，数学基准成绩仍稳定优于 routing-only 基线，说明数学推理收益可跨基准与模型规模迁移；但该设置基线更强、训练预算更小，增益幅度也相应收窄。（Table 2 / Section 4.2）

  > We apply AAR ( <span class="paper-math">&#92;(M=40&#92;)</span> ) to full-attention layers <span class="paper-math">&#92;(&#92;&#123;23,27,31&#92;&#125;&#92;)</span> , located in the middle-to-deep portion of the network, and train on 12.8K samples without architecture-specific tuning. AAR improves MATH-500 by <span class="paper-math">&#92;(+1.13&#92;)</span> pp over three seeds (Table 2 ), despite the substantially stronger baseline and reduced training budget.

- 在配对长度比较中，当基线与 AAR 模型都答错时，AAR 生成的错误答案明显更短；两者都答对时长度几乎不变，说明模型并非整体变得简短，而是减少了错误答案上的发散式长生成，更快给出确定的错误结论。（Table 4 / Section 5.2）

  > When both models answer incorrectly, AAR-T produces substantially shorter answers (mean <span class="paper-math">&#92;(-11.8&#92;%&#92;)</span> , P99 <span class="paper-math">&#92;(-14.9&#92;%&#92;)</span> ). When both models are correct, lengths are indistinguishable.

- 改变起始层的扫描显示，检索型学科在过早介入时表现最差、随起始层后移逐步恢复；推理型学科的增益基本不依赖起始深度，混合型学科在中间层附近达到峰值，说明浅层对事实检索敏感，路由—注意力回路在不同深度携带不同性质的信息。（Figure 4 / Section 6.1）

  > For retrieval-heavy subjects, performance is worst when AAR starts early and recovers as the starting layer increases. For reasoning-heavy subjects, improvements persist regardless of starting depth. For subjects combining both, such as Economics or Physics, performance peaks when AAR starts around layers <span class="paper-math">&#92;(7&#92;)</span> – <span class="paper-math">&#92;(11&#92;)</span> .

### 与小组方向的关联

论文直接落在小组关注的 Attention 机制与 MoE 架构设计方向：滑窗注意力作为路由的辅助条件信号、冻结基座只训路由参数的受控归因设置、层选择性干预作为功能探针，都可借鉴到架构研究与检索场景的待验证设想中。多模型、多种子与消融较扎实，但机制解释部分仍是假设，且未见线上结果与开源声明。

### 局限与阅读边界

- 作者承认的局限：AAR 需要在激活层显式物化注意力权重，无法使用 FlashAttention，回退实现的额外开销随序列长度和 AAR 层数线性增长；实验只覆盖后 SFT 适配，最优层选择依赖模型的既有训练，跨模型的最优层子集可能不同，从零联合预训练的设置留待未来工作。
- 可合理提出的验证问题：注意力汇放大与数学推理提升之间的联系，作者自己写成假设，层选择性证据表明二者相关，但未排除其他并行原因；检索—推理张力以 MMLU 学科划分为代理，能否推广到真实检索型任务和其他基准待验证；部分配置下 HumanEval 等代码任务成绩略降，代码生成收益并不成立。
- 此外，所有结论来自离线基准与行为分析，未见线上部署验证；“错误答案变短”是描述性统计而非保证推理正确性提升的机制，且全层应用的负面结果说明实际使用前必须做层选择，这增加了部署前的调参成本。

## Verify, Don't Trust: Agentic Model Development for Video Discovery Retrieval at Scale {#arxiv-2609-21257}

**作者：** Hao Fu, Baiting Zhu, Minglei Chen, Yinjie Huang, Shuai Ding

**命中的作者机构：** Meta

**作者单位原文：** Meta Platforms, Inc. , Menlo Park , California , USA；Meta Platforms, Inc.

**论文：** [arXiv](https://arxiv.org/abs/2609.21257) · [本次阅读版本 v1](https://arxiv.org/abs/2609.21257v1)

阅读范围：完整 PDF，共 9 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Large language model (LLM) agents can propose, implement, and evaluate model changes. Autoresearch loops demonstrate this capability through minutes-scale iterations on a self-contained program. Online autoresearch instead spans asynchronous systems, hours-long variants, and weeks-long campaigns that can influence a product. A completed run can still support an invalid conclusion when a code change is a no-op, data windows leak, evaluator semantics drift, or the two arms traverse different serving funnels. We present EvoPilot, a human-gated method for long-horizon online autoresearch. Role-specific agents execute each round through a versioned domain skill and typed adapter. Durable records preserve experiments and failures; deterministic checks enforce recorded lessons. We study a 37-day campaign for the retrieval system that powers Video Deep Dive (VDD), an online experience for discovering follow-on videos after a user opens a seed video. The campaign covered seven directions and used an hourly refreshed index of hundreds of millions of videos. Earlier manual experiments had not established a benefit from an interaction head. A primitive autoresearch attempt revisited the direction but incorrectly attributed an offline hit-rate decline of 22 percentage points to the head. We then introduced EvoPilot. Its human-gated verification traced the drop to a pre-existing evaluation defect that produced output depths of 3,000 and 600. After repair, a matched comparison measured an offline improvement of 3.20 percentage points. Post-study replay and mutation tests rejected invalid comparisons while admitting valid counterparts. Durable state recovered an interrupted round, and artifact reuse avoided approximately five GPU-hours. Separately, a seven-day randomized online evaluation estimated a 0.66% relative increase in the VDD slice of Good Search Result Rate for Retention (GSRR).

### 一句话速览

论文提出EvoPilot，一种以人为门槛的长周期在线自动研究方法，把在线实验当作可验证的协议而非提示词：角色化智能体执行轮次，持久化记录实验与失败，确定性校验只接纳可比较的对照—处理对。在视频发现检索系统VDD的37天战役中，它纠正了把评估缺陷误归因于交互头的历史错误结论，修复后离线匹配比较显示交互头有效，配套七天随机线上A/B实验估计了GSRR相对提升。

### 研究动机

- 论文研究的任务是长周期在线自动研究：让LLM智能体在真实生产检索系统上提出、实现并评估模型改动。与在自包含脚本上分钟级迭代的自动研究循环不同，在线场景跨越异步系统，变体训练数小时，战役持续数周且影响线上产品。具体场景VDD是：用户打开种子视频后，系统用种子视频、机器生成的枢轴查询和用户上下文检索后续值得观看的视频。
- 已有方案的缺陷在于完成实验不等于得到有效结论：代码改动可能是空操作、数据窗口泄漏、评估器语义漂移，或两臂走了不同服务漏斗，各自成功完成的运行仍可能不可比较。固定算力循环用单一标量决定保留或回滚，MLflow等追踪系统记录参数与血缘但不判定两次运行是否实现了被批准的对比。
- 本文要回答的问题是：如何让智能体在多系统、跨会话的长周期实验中产出持久且可验证的证据，而不是只追求更高数字。核心主张是“验证而非信任”：智能体的提案、记忆和自述都不是执行权限或科学证据，只有被批准的协议、工件身份和确定性校验构成可信基础。

### 方法与关键设计

- EvoPilot把在线实验当作协议而非提示词。流程是：人类批准轮次协议，协议规定共同基座、数据钉扎、所需终态工件、指标、停止规则和被授权的对比；每个对比指定对照臂、处理臂及允许的差异。隔离工作节点通过版本化领域技能和类型化适配器执行变体，覆盖训练、发布、评估的DAG，支持从有效上游工件部分恢复。
- 证据准入是fail-closed的：确定性校验器Verify_R检查两臂是否都成功、是否源自被批准基座、数据钉扎是否一致、实际差异是否等于授权处理、未受处理影响的阶段工件是否等价，缺证据即拒绝。准入公式 <span class="paper-math">&#92;(&#92;mathcal&#123;A&#125;(c,t;R)=&#92;mathbb&#123;1&#125;[&#92;operatorname&#123;Verify&#125;&#95;&#123;R&#125;(c,t)]&#92;cdot&#92;mathbb&#123;1&#125;[&#92;operatorname&#123;Review&#125;&#95;&#123;R&#125;(c,t)]&#92;)</span> 中，Verify_R做机械资格检查，Review_R记录人类对指标语义和例外的裁决。证据单元因此是对照—处理对而非单次运行。
- 智能体拓扑含六个版本化角色族：轮次规划器提出待批准方案，基座构建器生成共享变更集，实验工作节点在隔离环境执行，只读结果分析师综合已准入证据并建议停止或转向，另有故障分诊/修复与周期监控角色。编排器和校验器是确定性程序而非智能体。规划、实验修改、结果综合和修复用Claude Opus 4.7/4.8，只读监控用Claude Haiku。
- 持久化支持分三个范围：运行账本存类型化事件和原子化轮次结果以支持恢复；程序记忆存先前计划与实验摘要；事件目录含38条可检索记录。关键设计是记忆只起咨询作用：存储的教训只有在被编码为对工件或状态转移的可执行检查后才具强制力。每阶段先持久化状态再记录完成，崩溃时重放未提交阶段。
- 被研究的检索系统是两塔模型加非线性交互头：请求塔 <span class="paper-math">&#92;(h&#95;r=Q(s,q,u)&#92;)</span> 消费枢轴查询、用户上下文和种子视频请求侧特征，候选塔 <span class="paper-math">&#92;(h&#95;d=D(d)&#92;)</span> 只消费候选视频特征，归一化后以点积 <span class="paper-math">&#92;(a(d)=&#92;langle h&#95;r,h&#95;d&#92;rangle&#92;)</span> 做近似最近邻检索。训练目标是会话外批内InfoNCE，<span class="paper-math">&#92;(&#92;mathcal&#123;B&#125;&#95;i&#92;)</span> 排除同会话样本以免把合理共现当负例；交互头 <span class="paper-math">&#92;(G(h&#95;r,h&#95;d,a(d))&#92;)</span> 提供点击与参与辅助标签的加权二元交叉熵损失，即使推理不使用其分数也能塑造共享表示。候选深度 <span class="paper-math">&#92;(P&#92;)</span> 控制进入重打分的候选数，<span class="paper-math">&#92;(K&#92;)</span> 是输出深度。
- 与基线的关键差异：EvoPilot不引入新的VDD模型架构，其贡献是控制并验证跨源代码、训练数据、索引发布、服务配置和回放评估这条多系统路径。例如（帮助理解的例子）只开启交互头的服务处理，协议需同时授权候选深度 <span class="paper-math">&#92;(P&#92;)</span> 变化，因为交互头是 <span class="paper-math">&#92;(P&#92;)</span> 个候选的唯一消费者；校验器要求未受影响阶段共享等价键，把候选深度隔离为唯一实际差异。

### 实验设计与论证方式

- 评估在37天VDD纵向战役中进行，覆盖七个方向、20个批准轮次和68个有报告指标的配置。战役以一次原始自动研究尝试开场，EvoPilot在其产出无效交互头结论后才引入。主要评估对象是实验控制方法本身：配对回放测试准入守卫，执行记录测量终态覆盖、恢复和工件复用，线上A/B是独立下游端点，只因果估计被选模型处理，不作为EvoPilot有效性的证据。
- 离线评估在单一候选池回放留出对，主指标是深度 <span class="paper-math">&#92;(K&#92;)</span> 处的点击命中率 <span class="paper-math">&#92;(H&#95;&#123;&#92;text&#123;click&#125;&#125;@K&#92;)</span>，即被点击留出视频落入top-K输出的比例；线上 <span class="paper-math">&#92;(K=3000&#92;)</span>。作者报告约0.36个百分点的重复发布经验容差带，源于发布时打乱产生的候选子池差异，属操作变异而非抽样不确定性。线上端点GSRR的VDD切片是会话级合格参与率，报告相对提升。
- 操作统计用与结果无关的完整性筛选：九个轮次保留全部操作字段构成可审计队列，共22训练、22发布、27评估阶段；其余11轮因字段缺失排除在操作率分母外。RQ1用十对干净/变异夹具测试守卫；RQ2分析交互头案例；RQ3考察已准入结果如何约束后续方向；RQ4报告七天随机A/B，账户为随机化与分析单元，回归调整均值并用前七天结果作协变量。

### 结果与证据

- 人工门槛验证把离线命中率的大幅下降追溯到评估缺陷导致的输出深度不一致，修复后匹配比较测得交互头带来离线改善。该结果说明原始自动研究结论是无效测量而非模型失败，但改善幅度是描述性点估计，作者未报告置信区间。（Abstract / Section 5.3）

  > Its human-gated verification traced the drop to a pre-existing evaluation defect that produced output depths of 3,000 and 600. After repair, a matched comparison measured an offline improvement of 3.20 percentage points. Post-study replay and mutation tests rejected invalid comparisons while admitting valid counterparts.

- 配对回放/变异测试中，全部干净夹具被准入，全部对应故障被拦截，校验器还拒绝了缺少工件溯源或仅有自报数字的终态读数。这支持守卫能区分干净状态与已知故障，但作者指出十对夹具不能确立现场召回率或误拦截率。（Section 5.2, Table 5）

  > All ten clean fixtures were admitted, and all ten corresponding faults were blocked (Table 5 ). The verifier also rejected terminal readings that were missing artifact-backed provenance or were only self-reported. Table 5. Paired replay/mutation: 10/10 clean fixtures admitted and 10/10 corresponding faults blocked.

- 七天随机线上实验在系统其余部分固定的情况下，估计出统计显著的GSRR相对提升。该结果只因果估计被选模型处理的产品相关性，不是EvoPilot方法有效性的证据，且护栏指标在保留数据集中不可得。（Section 5.5）

  > The analysis covers a seven-day window and uses a regression-adjusted mean with outcomes from a separate seven-day pre-period. With the remainder of the system fixed, the estimated relative GSRR effect was <span class="paper-math">&#92;(+0.66&#92;%&#92;)</span> , a statistically significant increase. Guardrail outcomes were not available in the retained dataset.

- 持久化状态恢复了一次被中断的轮次，工件复用避免了冗余发布及其GPU开销。这些是操作层面的收益记录，来自可审计队列内的文档化案例，不能外推为整体成本节约。（Abstract）

  > Durable state recovered an interrupted round, and artifact reuse avoided approximately five GPU-hours. Separately, a seven-day randomized online evaluation estimated a 0.66% relative increase in the VDD slice of Good Search Result Rate for Retention (GSRR).

### 与小组方向的关联

论文属于Agentic实验控制与记忆机制方向，部署在视频发现检索这一信息检索系统上，与小组的Agentic RL、Memory with training及搜索检索兴趣相关。可借鉴的设计包括把记忆教训固化为可执行校验、以对照—处理对为证据单元、fail-closed准入。线上A/B是强信号，但仅覆盖单一模型决策，方法本身的收益证据是回放与变异测试，需在自有工作流中验证迁移成本。

### 局限与阅读边界

- 作者已承认的局限：只有九个轮次有完整操作记录，不外推token成本或GPU占用；原始自动研究基线是保留的事故记录而非并发随机化对比；十对夹具不能确立现场召回率或误拦截率，新身份门只有回放证据；评估器语义仍需人工审查；离线置信区间、线上护栏指标和跨组织复现均不可得。
- 可合理提出的验证问题：EvoPilot的收益证据主要是回放/变异测试和单一交互头案例，在更多方向、更短战役或不同团队流程下的有效性未验证；线上A/B只覆盖被选模型处理，不能推出EvoPilot本身能系统性提升研究产出；0.36个百分点的容差带来自单一系统的重复发布，其他系统发布变异可能不同。
- 本次阅读范围限制：论文未提供开源代码链接，本次未核验任何代码仓库或复现环境；线上结果来自Meta内部系统，外部团队难以直接复制其GPU服务基础设施；交互头的离线改善是描述性点估计，作者未报告推断性置信区间。

## Trading Depth for Time in Recurrent Transformers {#arxiv-2609-21605}

**作者：** Zeyi Huang, Xuehai He, Yong Jae Lee, Yelong Shen

**命中的作者机构：** Microsoft

**作者单位原文：** Microsoft

**论文：** [arXiv](https://arxiv.org/abs/2609.21605) · [本次阅读版本 v1](https://arxiv.org/abs/2609.21605v1)

阅读范围：完整 PDF，共 8 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Recurrent Transformers increase computational depth through temporal recurrence, feeding each token's high-level hidden state into the computation of the next. This raises a natural question: is additional computation better spent on more temporal steps or greater physical depth? We investigate this question using Latent Recurrent Transformers (LRTs), which retain one backbone forward pass per vocabulary token during decoding and provide a controlled setting for comparing these two ways of adding computation. Specifically, we insert a latent thought token between consecutive vocabulary tokens. Each thought token passes through the same <span class="paper-math">&#92;(L&#92;)</span> layers as a vocabulary token, sharing the backbone parameters and providing an additional stage of hidden-state refinement before predicting the next token. We compare this <span class="paper-math">&#92;(L&#92;)</span>-layer LRT against a <span class="paper-math">&#92;(2L&#92;)</span>-layer LRT without thought tokens. Both execute <span class="paper-math">&#92;(2L&#92;)</span> Transformer blocks per vocabulary token during decoding, but the thought-token model uses fewer parameters. On 16- and 20-layer mixture-of-experts NanoChat backbones, one thought token brings the shallower model within 0.006 and 0.004 bits per byte of its double-depth counterpart, recovering 67% and 81% of the improvement with approximately 48% fewer total parameters. These results suggest that temporal thinking offers a parameter-efficient alternative to increasing physical depth in recurrent Transformers.

### 一句话速览

论文研究循环 Transformer 中额外计算应投向时间步还是物理深度：在 Latent Recurrent Transformer 的相邻词表 token 之间插入共享参数的潜在 thought token，与加深一倍的模型在相同解码块执行数下对比。在 16/20 层 NanoChat MoE 上，一个 thought token 以约少一半参数恢复加深深度收益的大部分，跨 token 反馈与 KV 反馈消融支持该设计。

### 研究动机

- Transformer 增加计算深度有两条常见路线：一是加深物理层数，让每个 token 经过更多独立参数化的层；二是循环式 Transformer，把上一个 token 的高层隐状态反馈进下一个 token 的计算，沿时间轴反复穿越主干。本文要回答的问题是：在循环架构固定时，额外计算应该花在更多时间步上，还是更大的物理深度上。这一问题对参数预算受限的语言模型训练有直接意义。
- 已有方案中，Looped Transformer 用共享层在同一位置反复精炼表示，属于深度轴的参数共享；PonderLM-2 等在连续空间引入潜在思考步，但思考步之后不再把最终状态显式反馈给下一个词表 token 的计算。作者利用 LRT（Latent Recurrent Transformer）作为受控实验平台：它在自回归解码时每个词表 token 只需一次主干前向，天然适合比较两种加计算方式。
- 本文的核心做法是在相邻词表 token 之间插入潜在 thought token，复用同一主干，使浅层模型在解码块执行数上与加深一倍的模型对齐，从而在参数更少的情况下检验时间维计算能否替代物理深度。

### 方法与关键设计

- 基础骨干是 L 层 LRT。设词表 token 序列为 <span class="paper-math">&#92;(x&#95;1,&#92;ldots,x&#95;N&#92;)</span>，<span class="paper-math">&#92;(E[x&#95;t]&#92;)</span> 为其嵌入，LRT 把前一个 token 的顶层隐状态反馈进当前 token 的计算：<span class="paper-math">&#92;[h&#95;t=F&#95;&#92;theta&#92;bigl(E[x&#95;t],h&#95;&#123;t-1&#125;;C&#95;&#123;&lt;t&#125;&#92;bigr),&#92;]</span> 其中 <span class="paper-math">&#92;(F&#95;&#92;theta&#92;)</span> 是主干加反馈通路，<span class="paper-math">&#92;(h&#95;&#123;t-1&#125;&#92;)</span> 是前一 token 的最终隐状态，<span class="paper-math">&#92;(C&#95;&#123;&lt;t&#125;&#92;)</span> 是此前位置的 KV 缓存。模型从 <span class="paper-math">&#92;(h&#95;t&#92;)</span> 用输出头预测 <span class="paper-math">&#92;(x&#95;&#123;t+1&#125;&#92;)</span>。由于 <span class="paper-math">&#92;(h&#95;&#123;t-1&#125;&#92;)</span> 在自回归解码时已可用，每个词表 token 只需一次新的主干前向。
- 反馈配置上，作者沿用 LRT 设计但把循环源固定为最终层隐状态（而非搜索中间层），状态通过隐状态残差和投影出的键值两种方式进入当前计算，由可学习的缩放和门控控制。改变深度或加 thought token 时保持该反馈机制不变，保证对比公平。
- 加时间维计算的方式是在每个词表 token 后插入连续的 thought 位置：它不对应任何词表离散 token，没有可学习的 token 嵌入，以上一隐状态为输入再过一次同一主干。设 <span class="paper-math">&#92;(h&#95;t^&#123;(0)&#125;&#92;)</span> 为处理 <span class="paper-math">&#92;(x&#95;t&#92;)</span> 后的状态，<span class="paper-math">&#92;(h&#95;t^&#123;(j)&#125;&#92;)</span> 为第 <span class="paper-math">&#92;(j&#92;)</span> 个 thought token 后的状态，每 token <span class="paper-math">&#92;(K&#92;)</span> 个 thought token 时：<span class="paper-math">&#92;[h&#95;t^&#123;(0)&#125;=F&#95;&#92;theta&#92;bigl(E[x&#95;t],h&#95;&#123;t-1&#125;^&#123;(K)&#125;;C&#95;&#123;&lt;t,0&#125;&#92;bigr),&#92;qquad h&#95;t^&#123;(j)&#125;=F&#95;&#92;theta&#92;bigl(h&#95;t^&#123;(j-1)&#125;,h&#95;t^&#123;(j-1)&#125;;C&#95;&#123;&lt;t,j&#125;&#92;bigr),&#92;]</span> 式中状态既替换输入嵌入，又充当主干内的循环反馈；输出头从最终状态 <span class="paper-math">&#92;(h&#95;t^&#123;(K)&#125;&#92;)</span> 预测 <span class="paper-math">&#92;(x&#95;&#123;t+1&#125;&#92;)</span>。<span class="paper-math">&#92;(K=0&#92;)</span> 即退化为普通 LRT。
- 参数共享与注意力设计：词表和 thought 位置共享注意力、MoE 与反馈投影参数，只有反馈缩放和门控独立；因此加 thought token 几乎不增加独立参数。使用 MoE 主干让路由器为词表和不同思考步选择不同专家，使各次前向激活共享参数的不同子集。所有位置都写 KV 并在因果掩码下对后续可见；thought token 与其词表 token 共享旋转位置索引（<span class="paper-math">&#92;(K=1&#92;)</span> 时为 0,0,1,1,…）。与 PonderLM-2 的关键区别是：最终 thought 状态直接反馈给下一个词表 token 的计算，使循环依赖链跨 token 边界延续。
- 深度-时间对比的口径：<span class="paper-math">&#92;(L&#92;)</span> 层模型配 <span class="paper-math">&#92;(K&#92;)</span> 个 thought token 时，解码阶段每词表 token 执行 <span class="paper-math">&#92;(B&#95;&#123;&#92;mathrm&#123;decode&#125;&#125;(L,K)=L(K+1)&#92;)</span> 个块，因此一个 thought token 对齐加深一倍、两个对齐加深两倍的块执行数。作者明确指出块执行数不含注意力开销、不等于 FLOPs 或时延：thought 模型注意力覆盖更多位置、交互成本更高，但总参数约少一半。
- 训练采用并行多轮精炼（multi refinement）：严格按解码递归训练会串行等待，改为每轮对所有位置并行前向，递归输入取自上一轮最终状态按位右移；thought 位置上移位状态同时充当输入嵌入替换。流程为一次仅词表的初始化轮（零递归输入、无预测损失）加四轮精炼，各监督轮等权施加 next-token 损失并保留跨轮梯度；thought 模型的预测从每个词表区间的最后一个 thought 状态读出，词表位置本身无直接预测损失。这使循环依赖在多轮间累积约数倍于 <span class="paper-math">&#92;(L&#92;)</span> 的计算深度（图 2 以 <span class="paper-math">&#92;(x&#95;4&#92;)</span> 的梯度路径示意跨两个 token 区间连接四次主干前向）。

### 实验设计与论证方式

- 实验在 NanoChat MoE 上进行，参考规模为 16 层和 20 层（对应约 0.8B 和 1.3B 参数的 vanilla Transformer），深度倍率 1×/2×/3× 对应 16/32/48 与 20/40/60 层，宽度固定；MoE 为 8 个路由专家、top-2 路由加 1 个共享专家。thought token 与 looped 模型保持参考物理深度。评价用验证集 bits per byte（BPB，越低越好），三个种子平均，从第一个词表 token 开始以 KV 缓存执行顺序递归；一个和两个 thought token 的模型分别训练，训练与评测的 thought 数一致。
- 比较对象包括标准 Transformer（物理深度参考，不与循环模型做 FLOP 匹配）、Looped Transformer（深度轴共享参数基线）、PonderLM-2（时间轴基线，平均约 4.5 轮精炼）以及不同深度的 LRT。LRT、PonderLM-2 和 looped 配置的训练 FLOP 预算大致可比但非精确逐配置匹配。消融在 16 层、单 thought token 的 LRT 上分别移除跨 token 递归和 KV 反馈。

### 结果与证据

- 在两个模型规模上，单个 thought token 使浅层 LRT 的验证 BPB 接近加深一倍的对应模型，恢复其加深收益的大部分，同时总参数约少一半。该结果支持时间维共享计算是参数高效替代方案，但加深模型仍更优，且结论限于该语言建模设置。（Abstract / Section 3.2）

  > On 16- and 20-layer mixture-of-experts NanoChat backbones, one thought token brings the shallower model within 0.006 and 0.004 bits per byte of its double-depth counterpart, recovering 67% and 81% of the improvement with approximately 48% fewer total parameters.

- 两个 thought token 进一步降低 BPB，在同解码块数下接近三倍深度 LRT，恢复其加深收益的相当比例，且总参数远少于三倍深度模型。说明时间维扩展可超出单个 thought token，但三倍深度仍占优。（Section 3.3）

  > LRTs with two thought tokens come within 0.008 BPB of these models at both model sizes, recovering 70.4% and 74.2% of the improvement from tripling depth while using approximately 65% fewer total parameters.

- 移除跨 token 递归后 BPB 变差，接近 PonderLM-2 水平，说明跨词表边界的显式循环依赖链是 thought token 收益的关键来源之一；这是单配置消融，不能排除其他因素的贡献。（Section 3.5, Table 2）

  > Removing it preserves the thought-token computation and causal attention, but breaks the explicit recurrent chain between successive token intervals. BPB increases from 0.786 to 0.795, approaching PonderLM-2’s 0.797.

- 表格显示在同解码块数分组内，LRT 加 thought token 的 BPB 优于同组的 Loop Transformer 与 PonderLM-2，也优于三倍深度的标准 Transformer；但标准 Transformer 训练计算更少，该对比只描述参数与解码权衡，不是训练 FLOP 匹配的优势。（Table 1）

  图表观察（PDF 第 6 页）：Table 1（第 6 页）：16L/20L 下 LRT+1 thought token BPB 为 0.786/0.745，LRT+2 thought token 为 0.779/0.739；Loop Transformer 2/3/4 loops 为 0.804/0.774、0.799/0.768、0.795/0.764；PonderLM-2 1/2 thought token 为 0.797/0.752、0.789/0.745；Transformer 3× 为 0.789/0.756；LRT 2×/3× 为 0.780/0.741、0.771/0.731。

### 与小组方向的关联

硬保留规则命中模型结构设计：论文提出在循环 Transformer 中用共享参数的 thought token 沿时间维扩展计算，并与物理加深做受控对比，属于对模型结构的提出与系统研究。实验为 NanoChat MoE 上的离线 BPB 评测，材料未报告线上实验或开源代码，故 online_results 和 open_source 为 unknown，以本次正文为准。

### 局限与阅读边界

- 作者承认的局限：同解码块数下更深 LRT 仍更好，现有实验未分离剩余差距的原因；循环与 looped 各配置的训练预算只是大致可比，缺少逐配置实测 FLOPs；解码块数不含注意力开销，也不是时延或吞吐测量；不同 thought 数的模型分别训练，能否泛化到更多 thought token 或推理时自适应选择数量仍是开放问题。
- 从材料可提出的验证问题：结论基于 NanoChat MoE 的语言建模 BPB，两个参考规模（约 0.8B/1.3B）之外是否成立未验证；thought token 增加注意力交互成本，实际服务时延与吞吐需要实测才能判断部署价值；循环源固定为最终层，中间层作循环源的效果被留作未来工作。
- 本次阅读范围限制：材料未报告线上实验或开源代码状态，本次也未核验代码仓库与复现环境；训练预算对比为近似口径，无法据此断言各配置训练成本严格相等。

## RBS-Attention: Radius-Bounded Sparse Prefill for Long-Context Large Language Models {#arxiv-2609-20971}

**作者：** Chuxu Song, Jiuqi Wei, Zhencan Peng

**命中的作者机构：** Alibaba

**作者单位原文：** OceanBase, Ant Group

**论文：** [arXiv](https://arxiv.org/abs/2609.20971) · [本次阅读版本 v1](https://arxiv.org/abs/2609.20971v1)

阅读范围：完整 PDF，共 23 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Long-context large language model inference is increasingly limited by prefill, where dense self-attention processes the entire prompt before generation begins. Sparse block selection can reduce this cost, but a block centroid may hide a highly relevant token among many irrelevant ones. We call this failure mode mean dilution and propose RBS-Attention, a training-free sparse-prefill method with two complementary selection branches. A centroid base branch captures average relevance, while a rescue branch uses the maximum key-block radius and its prompt-, layer-, and head-dependent distribution to identify blocks at risk of underestimation. Independently thresholding the two branches and combining their masks controls the contribution of rescue blocks while preserving regular block-sparse FlashAttention execution. On H100 GPUs, RBS-Attention achieves 20.65<span class="paper-math">&#92;(&#92;times&#92;)</span> standalone prefill-attention speedup, 11.92<span class="paper-math">&#92;(&#92;times&#92;)</span> vLLM prefill-attention speedup, and 5.97<span class="paper-math">&#92;(&#92;times&#92;)</span> end-to-end time-to-first-token speedup at 128K on Qwen3-30B-A3B-Instruct-2507-FP8. On the dense Qwen3-32B model, it obtains 88.65 overall RULER accuracy versus 89.52 for dense attention; LongBench-v2, InfiniteBench, and Video-MME provide additional quality evaluation. Supporting experiments measure actual retention, compare selectors at matched density, and characterize block-size, threshold, and memory behavior. Together, these results support radius-adaptive dual-branch selection as an effective approach to long-context prefill.

### 一句话速览

针对长上下文大模型推理中 prefill 阶段稠密注意力开销过大的问题，论文提出免训练的 RBS-Attention：用质心分支捕捉平均相关性，用基于键块最大半径的自适应救援分支弥补质心打分对分散块的低估，两分支独立阈值后取并集，再走块稀疏 FlashAttention。在 H100 上 128K 上下文取得显著 prefill 加速，RULER 等质量接近稠密注意力，适用于长上下文推理加速场景。

### 研究动机

- 长上下文大模型在生成回答前要先对整个 prompt 做一次自注意力，这一阶段称为 prefill。输入是长度可达数十万 token 的查询、键、值序列，输出是首个 token 之前的注意力结果，直接决定用户可见的首 token 延迟。稠密注意力的计算量随 prompt 长度平方增长，在 64K–128K 上下文下成为延迟瓶颈，FlashAttention 类内核只优化访存效率，无法改变平方复杂度。
- 已有稀疏 prefill 方案分两类：模式推断法先从探针查询推测注意力结构再外推，但结构随层、头、任务变化大；块打分法把键序列分块，用块质心与查询块做点积近似块级相关性，便宜但隐含假设质心能代表块内 token。当块内只有少数关键 token、其余无关时，质心得分被稀释，整块可能被错误剪掉，作者称之为均值稀释。
- 论文要回答的问题是：能否在保持块稀疏执行效率的前提下，识别并挽救那些因内部离散度高而容易被质心打分低估的块。作者的诊断发现，排名低估随块半径增大而上升，最高半径分位组集中了远超均匀比例的高分注意力块，这促使他们用半径作为风险信号设计选择器。

### 方法与关键设计

- 方法整体是免训练的推理期选择器。首先把查询、键、值按块大小 <span class="paper-math">&#92;(B&#92;)</span> 分块，对每个键块计算质心 <span class="paper-math">&#92;(c&#95;b=&#92;frac&#123;1&#125;&#123;|K&#95;b|&#125;&#92;sum&#95;&#123;k&#92;in K&#95;b&#125;k&#92;)</span> 和最大半径 <span class="paper-math">&#92;(r&#95;b=&#92;max&#95;&#123;k&#92;in K&#95;b&#125;&#92;|k-c&#95;b&#92;|&#95;2&#92;)</span>。质心刻画块的平均方向，半径刻画块内 token 相对质心的最大偏离，二者共同构成块的几何摘要。
- 半径本身有几何含义：由 Cauchy–Schwarz 不等式可得块内最大 token 得分的上界 <span class="paper-math">&#92;(s&#95;b(q)&#92;le q^&#123;&#92;top&#125;c&#95;b+&#92;|q&#92;|&#95;2 r&#95;b&#92;)</span>，即质心得分加上查询范数乘半径。但直接对所有块用完整上界过于保守，大半径块会挤占有限预算。因此作者把半径转成自适应救援系数：对每层每个 KV 头，取块半径的中位数 <span class="paper-math">&#92;(r&#95;&#123;&#92;mathrm&#123;low&#125;&#125;&#92;)</span> 与九十分位 <span class="paper-math">&#92;(r&#95;&#123;&#92;mathrm&#123;high&#125;&#125;&#92;)</span>，令 <span class="paper-math">&#92;(&#92;beta&#95;b=&#92;mathrm&#123;clamp&#125;&#92;big(&#92;frac&#123;r&#95;b-r&#95;&#123;&#92;mathrm&#123;low&#125;&#125;&#125;&#123;r&#95;&#123;&#92;mathrm&#123;high&#125;&#125;-r&#95;&#123;&#92;mathrm&#123;low&#125;&#125;&#125;,0,1&#92;big)&#92;)</span>。紧凑块几乎得不到救援权重，高度分散块获得完整救援项，且分位数来自当前 prompt 的统计，无需逐 prompt 调参。
- 随后是双分支打分。基础分支就是质心得分 <span class="paper-math">&#92;(&#92;ell&#95;&#123;&#92;mathrm&#123;base&#125;&#125;(q,b)=q^&#123;&#92;top&#125;c&#95;b&#92;)</span>，负责捕捉质心可靠的块；救援分支为 <span class="paper-math">&#92;(&#92;ell&#95;&#123;&#92;mathrm&#123;rescue&#125;&#125;(q,b)=q^&#123;&#92;top&#125;c&#95;b+&#92;|q&#92;|&#95;2 r&#95;b&#92;beta&#95;b&#92;)</span>。注意当 <span class="paper-math">&#92;(&#92;beta&#95;b&lt;1&#92;)</span> 时该分数被刻意衰减，不再保证是严格上界，而是一个风险分数——作者在附录中给出反例说明衰减分数可能低于块内真实最大 logit，其作用是排序信号而非保证。
- 两个分支各自在查询块层面聚合分数（用数值稳定的指数求和并减去共享最大值），然后分别施加相对阈值 <span class="paper-math">&#92;(&#92;alpha&#95;&#123;&#92;mathrm&#123;base&#125;&#125;&#92;)</span> 和 <span class="paper-math">&#92;(&#92;alpha&#95;&#123;&#92;mathrm&#123;rescue&#125;&#125;&#92;)</span>，得到两个块掩码，再与强制保留的 sink、局部窗口和最近块取并集作为最终掩码。作者解释为何要保留基础分支：救援分支的半径抬升会同时抬高其相对阈值，可能把原本质心规则会保留的块挤出去，取并集才能同时保住相关性路径和半径支持的候选。
- 推断时按最终掩码执行块稀疏 FlashAttention，只对保留的块对做 token 级点积、因果掩码和 softmax。选择器开销方面，质心与半径计算为 <span class="paper-math">&#92;(O(Nd)&#92;)</span>，全量打分约 <span class="paper-math">&#92;(O(N^2d/B)&#92;)</span>，稀疏注意力为 <span class="paper-math">&#92;(O(MK&#95;&#123;&#92;mathrm&#123;avg&#125;&#125;B^2d)&#92;)</span>，当平均保留块数远小于总块数时节省显著，但最坏情况仍是平方复杂度。与基线的差异在于：FlashPrefill 用均值块打分，Quest 用逐坐标 min/max 盒上界且面向解码，SpargeAttention 用自相似性判断可压缩块，而 RBS 用连续的分布自适应救援系数加独立阈值并集。

### 实验设计与论证方式

- 系统评测在 H100 上用 Qwen3-30B-A3B-Instruct-2507-FP8（MoE 模型），覆盖 16K–256K 上下文，报告独立 prefill 注意力加速、vLLM 内 prefill 注意力加速和端到端首 token 延迟加速，均以同模型同硬件同栈的稠密执行归一。质量评测用 Qwen3-32B（稠密模型）和 Qwen3-VL-30B-A3B-Thinking-FP8（多模态），基准为 RULER、LongBench-v2（每模型 503 样本）、InfiniteBench 代表任务和 Video-MME（1000 样本、每视频 32 帧）。
- 基线包括 FlashPrefill、FlexPrefill、MInference、XAttn 和稠密注意力。作者强调阈值不是固定 Top-K 预算，实际保留密度随 prompt、层、头变化，因此定义实际密度（最终进入稀疏内核的有效因果块对占比）并在质量表旁报告；密度多为小样本选择器抽样估计，不是全数据集测量。补充的 A100 实验做严格密度对齐、选择器消融、块大小与阈值敏感性、校准成本和显存。
- 选择器消融在同一后端、同块大小、130 个 RULER-128K 样本上比较质心-only、完整 L2 上界、Quest 风格改编和 RBS 自适应并集，密度对齐到约同一锚点；作者明确说明配对 bootstrap 差值区间包含零，该小样本诊断不构成统计显著结论。A100 补充实验的延迟与 H100 扩展测量不可互换，Quest 风格实验只隔离页打分策略，不是对官方 Quest 解码系统的评测。

### 结果与证据

- 在 128K 上下文的 MoE 模型上，独立 prefill 注意力、vLLM 内 prefill 注意力和端到端首 token 延迟三个计时范围依次获得递减的加速倍数，说明块选择节省的注意力工作足以摊销选择器开销；这些是 H100 上该模型的测量，不能外推到稠密或多模态模型，也不代表短上下文表现。（Abstract / Section 5.1）

  > On H100 GPUs, RBS-Attention achieves 20.65 <span class="paper-math">&#92;(&#92;times&#92;)</span> standalone prefill-attention speedup, 11.92 <span class="paper-math">&#92;(&#92;times&#92;)</span> vLLM prefill-attention speedup, and 5.97 <span class="paper-math">&#92;(&#92;times&#92;)</span> end-to-end time-to-first-token speedup at 128K on Qwen3-30B-A3B-Instruct-2507-FP8.

- 在稠密模型上，RBS 的 RULER 总体准确率略低于稠密注意力，同时 LongBench-v2、InfiniteBench 和 Video-MME 提供补充质量评估，并辅以实际保留率、同密度选择器对比和块大小、阈值、显存行为分析；说明质量损失可控，但差距为逐点数值，未给出显著性检验。（Abstract / Section 5.3）

  > On the dense Qwen3-32B model, it obtains 88.65 overall RULER accuracy versus 89.52 for dense attention; LongBench-v2, InfiniteBench, and Video-MME provide additional quality evaluation. Supporting experiments measure actual retention, compare selectors at matched density, and characterize block-size, threshold, and memory behavior.

- 把各基线重新校准到与 RBS 几乎相同的实际保留密度后，RBS 在该锚点仍取得最高的 RULER 准确率，支持基础/救援预算分配在受限算力下保留了有用块；这是单模型单锚点的校准点，不能与不同阈值配置的延迟配对，也不构成跨任务的因果结论。（Section 5.2 / Appendix A）

  > persists when budgets are aligned more tightly, we recalibrate baselines to the RBS density anchors (Appendix A ). At the 5.34% anchor, with every method within 0.10 percentage point of the target, RBS obtains 80.28 accuracy, compared with 76.87 for MInference, 74.73 for FlashPrefill, 66.77 for XAttn, and 58.56 for FlexPrefill.

- 同后端同密度下，RBS 自适应并集的点估计高于质心-only、完整 L2 上界和 Quest 风格选择器，说明仅靠最保守的几何上界并不能最好地利用有限保留预算；但配对 bootstrap 差值区间包含零，该 130 例诊断集不确立统计显著性。（Section 5.5, Table 6）

  > All four selectors use the same prefill backend, <span class="paper-math">&#92;(B=128&#92;)</span> , the same 130 RULER-128K examples, and actual density within 0.10 percentage point of 5.34%. RBS has the highest point estimate at 76.67, compared with 73.63 for centroid-only, 72.41 for the unattenuated full-L2 selector, and 73.71 for Quest-style selection.

### 与小组方向的关联

命中小组的 Attention 机制与模型架构方向，属于注意力稀疏化设计，与推荐/检索无直接关系，但长上下文 prefill 加速对 RAG 类检索增强管线有间接价值。核心可借鉴点是均值稀释诊断与半径自适应救援分支的构造方式；证据较充分但关键消融样本量小且未达统计显著，代码开源状态本次未核验。

### 局限与阅读边界

- 作者承认的局限包括：方法只针对长上下文 prefill，短上下文收益小甚至可能低于稠密；大半径只提示潜在均值稀释，不保证块内含与特定查询相关的证据；固定阈值下实际密度随模型、prompt、层、头变化，块大小与阈值研究只覆盖测试过的配置，迁移性需更广评估；质量表旁的密度是较小样本的估计；双分支实现需要明显大于持久统计量的临时工作区。
- 从材料可提出的待验证问题：核心选择器消融仅 130 例且差值置信区间含零，自适应救援相对质心-only 的优势需要更大样本确认；阈值默认值在两个模型上产生不同密度，跨模型与跨任务的阈值迁移尚未系统验证；A100 上批大小为四时 MInference 与 FlexPrefill 是串行适配而非原生批处理，吞吐对比对该两项有偏。
- 本次阅读范围的不足：论文未报告推荐或检索场景的收益，其价值限于长上下文语言与多模态推理；代码开源状态在本次材料中未核验，复现环境与内核实现细节未独立确认；H100 加速数字来自 MoE 模型，作者明确不外推到稠密或多模态模型的时延。

## Auto-Bidding with Disentangled Advertiser Profiles and Train-Free Adaptation {#arxiv-2609-21308}

**作者：** Songyue Cai, Shan Gu, Wei Chen, Ziru Xu, Lianyu Wang, Jian Xu, Xiaofeng Zhu

**命中的作者机构：** Alibaba

**作者单位原文：** Taobao &amp; Tmall Group, Alibaba, Beijing, China

**论文：** [arXiv](https://arxiv.org/abs/2609.21308) · [本次阅读版本 v1](https://arxiv.org/abs/2609.21308v1)

阅读范围：完整 PDF，共 17 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

Auto-bidding is a key component of modern advertising systems that provides a personalized bidding strategy for each advertiser. By characterizing each individual, profile-based methods achieve personalization and have proven effective in domains such as recommendation. However, despite the diverse bidding behavior of advertisers, their application to auto-bidding remains limited. A primary reason is that constructing and leveraging advertiser profiles face several challenges: extracting pure profiles is non-trivial, modeling common and private information simultaneously is difficult, and profile updating and cold-start adaptation remain challenging. To tackle these issues, we propose \textbf&#123;ADAPT&#125;, an \underline&#123;\textbf&#123;A&#125;&#125;uto-bidding framework with \underline&#123;\textbf&#123;D&#125;&#125;isentangled \underline&#123;\textbf&#123;A&#125;&#125;dvertiser \underline&#123;\textbf&#123;P&#125;&#125;rofiles and \underline&#123;\textbf&#123;T&#125;&#125;raining-free adaptation. ADAPT introduces a two-stage training paradigm and supports training-free adaptation. Specifically, (i) the stage 1 extracts pure static and dynamic profiles via contrastive learning over the advertiser memory bank; (ii) the stage 2 disentangles the dynamic profile into a common profile and a private profile, and combines them with the static profile to jointly condition the bidding strategy; (iii) once trained, ADAPT constructs profiles for new advertisers and updates profiles of existing advertisers without retraining. Our experiments on a large-scale auto-bidding benchmark demonstrate that ADAPT consistently achieves superior performance, and ablation studies further validate the effectiveness of each module. The source code will be released at this https URL .

### 一句话速览

面向广告自动出价的个性化问题，提出 ADAPT 框架：两阶段训练先经对比学习从广告主记忆库提取静态与动态画像，再将动态画像解耦为共同与私有画像并作为前缀条件化决策 Transformer，配合免训练的 EMA 画像更新与零样本冷启动。在 AuctionNet 基准上全面超过离线 RL 与生成式出价基线，消融验证各模块有效。

### 研究动机

- 自动出价（auto-bidding）是广告平台的核心组件：给定广告主的预算与 CPA（每次行动成本）等约束，系统在投放期内根据实时市场状态为每批流量动态调整出价参数，目标是在满足约束下最大化转化价值。已有方案分两类：离线强化学习方法从日志数据估计价值函数，但长周期稀疏奖励下价值估计不准、策略学习不稳；生成式方法（如 Decision Transformer）把出价改写为轨迹条件下的动作生成，绕开价值估计，但通常对所有广告主使用同一模型，不针对各自策略做个性化。
- 画像（profile）方法在推荐等领域已证明能实现个性化，但直接迁移到自动出价面临三个困难：出价轨迹由连续状态和动作构成，策略难以像离散交互那样直接提取；出价画像全是数值向量、缺乏显式语义，模型难以理解其中共享与私有的成分；线上服务禁止重训，画像的构建与更新必须免训练且仅依赖轨迹。
- 本文要回答的核心问题是：如何系统地提取、利用并更新广告主画像，使出价决策个性化。ADAPT 的回答是两阶段训练加免训练适应：第一阶段用对比学习提取干净的静态/动态画像，第二阶段把动态画像解耦为共同与私有画像供决策模型使用，适应模块负责新广告主冷启动与已有广告主的画像更新。

### 方法与关键设计

- 问题形式化上，出价被建模为约束序贯决策：状态 <span class="paper-math">&#92;(s&#95;t&#92;)</span> 汇总剩余预算、剩余时间与历史出价信息，动作 <span class="paper-math">&#92;(a&#95;t&#92;)</span> 是各约束对应的出价参数，奖励 <span class="paper-math">&#92;(r&#95;t&#92;)</span> 为该时间步赢得的曝光总价值，模型沿轨迹以累计回报 RTG 为条件生成动作。论文引用已有结论：约束出价问题存在闭式最优解 <span class="paper-math">&#92;(bid&#95;i^&#123;&#42;&#125;=&#92;lambda&#95;&#123;0&#125;v&#95;&#123;i&#125;+&#92;sum&#95;&#123;j&#125;&#92;lambda&#95;&#123;j&#125;p&#95;&#123;ij&#125;C&#95;&#123;j&#125;&#92;)</span>，其中 <span class="paper-math">&#92;(v&#95;i&#92;)</span> 是曝光价值、<span class="paper-math">&#92;(p&#95;&#123;ij&#125;&#92;)</span> 是约束指标、<span class="paper-math">&#92;(C&#95;j&#92;)</span> 是约束上限、<span class="paper-math">&#92;(&#92;lambda&#95;j&#92;)</span> 是拉格朗日乘子，因此出价可归结为持续调参。
- 第一阶段做画像表示学习。静态画像用可训练的类别嵌入表 <span class="paper-math">&#92;(&#92;bm&#123;S&#125;&#92;in&#92;mathbb&#123;R&#125;^&#123;C&#92;times d&#125;&#92;)</span> 表示广告主类目先验；动态画像用可训练的记忆库 <span class="paper-math">&#92;(&#92;bm&#123;P&#125;&#92;in&#92;mathbb&#123;R&#125;^&#123;N&#92;times d&#125;&#92;)</span> 表示，每个广告主对应一个个体画像 <span class="paper-math">&#92;(&#92;bm&#123;p&#125;&#95;i&#92;)</span>。从历史轨迹中采样长度为 <span class="paper-math">&#92;(K&#92;)</span> 的片段，经轻量嵌入得到 <span class="paper-math">&#92;(&#92;bm&#123;e&#125;&#92;in&#92;mathbb&#123;R&#125;^&#123;3K&#92;times d&#125;&#92;)</span>，前缀拼接可学习 CLS token 与静态画像后输入双向注意力 Transformer（因为目标是理解整段轨迹的策略而非预测下一动作，允许双向注意），取 CLS 位置的隐状态 <span class="paper-math">&#92;(&#92;bm&#123;h&#125;&#92;)</span>。
- 第一阶段用 InfoNCE 对比损失训练：<span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;inf&#125;&#125;=-&#92;log&#92;frac&#123;&#92;exp(&#92;bm&#123;h&#125;^&#123;&#92;top&#125;&#92;text&#123;LayerNorm&#125;(&#92;bm&#123;p&#125;&#95;&#123;i&#125;)/&#92;tau)&#125;&#123;&#92;sum&#95;&#123;j&#125;&#92;exp(&#92;bm&#123;h&#125;^&#123;&#92;top&#125;&#92;text&#123;LayerNorm&#125;(&#92;bm&#123;p&#125;&#95;&#123;j&#125;)/&#92;tau)&#125;&#92;)</span>，即以 <span class="paper-math">&#92;(&#92;bm&#123;p&#125;&#95;i&#92;)</span> 为正样本、其他广告主画像为负样本，使动态画像能区分不同广告主并承载其个性化策略。分阶段训练的目的是避免画像被动作标签过度塑形。
- 第二阶段做解耦画像出价。共同画像通过交叉注意力提取：<span class="paper-math">&#92;(&#92;bm&#123;p&#125;&#95;&#123;&#92;text&#123;com&#125;&#125;=&#92;text&#123;CrossAttn&#125;(Q=&#92;bm&#123;p&#125;&#95;&#123;i&#125;,K=&#92;bm&#123;P&#125;,V=&#92;bm&#123;P&#125;)&#92;)</span>，即以个体画像为查询、整个记忆库为键值，得到广告主感知的共享策略（而非所有广告主共用一个固定向量）；私有画像由 MLP 编码个体画像得到 <span class="paper-math">&#92;(&#92;bm&#123;p&#125;&#95;&#123;&#92;text&#123;pri&#125;&#125;=&#92;text&#123;MLP&#125;(&#92;bm&#123;p&#125;&#95;&#123;i&#125;)&#92;)</span>。为防止两者退化为相似表示，引入相关性损失 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;cor&#125;&#125;&#92;)</span>：对每个样本沿隐藏维中心化后惩罚共同与私有画像的绝对余弦相似度。随后把静态、共同、私有画像作为前缀拼接到轨迹嵌入前，输入 6 层因果 Transformer（即 DT 骨干），对状态 token 的隐状态做线性投影预测动作，用 MSE 损失 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;mse&#125;&#125;&#92;)</span> 训练，总目标为 <span class="paper-math">&#92;(&#92;mathcal&#123;L&#125;=&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;mse&#125;&#125;+&#92;alpha&#92;mathcal&#123;L&#125;&#95;&#123;&#92;text&#123;cor&#125;&#125;&#92;)</span>。
- 适应模块免训练。对已有广告主的新投放期：冻结第一阶段编码器，编码新轨迹得到 <span class="paper-math">&#92;(&#92;bm&#123;h&#125;&#95;&#123;&#92;text&#123;new&#125;&#125;&#92;)</span>，用指数滑动平均 <span class="paper-math">&#92;(&#92;bm&#123;p&#125;&#95;&#123;i&#125;&#92;leftarrow&#92;lambda&#92;bm&#123;p&#125;&#95;&#123;i&#125;+(1-&#92;lambda)&#92;bm&#123;h&#125;&#95;&#123;&#92;text&#123;new&#125;&#125;&#92;)</span> 更新记忆库条目，兼顾历史信息与近期策略变化。对新广告主：没有个体画像，则用其类目静态画像、对现有广告主共同画像取平均得到原型共同画像、私有画像置零，拼成前缀后由冻结的 DT 直接推理，实现零样本冷启动。与基线的关键差异在于：DT 等生成式方法不含任何广告主级条件，而 ADAPT 用三类画像前缀显式注入个性化策略。

### 实验设计与论证方式

- 实验在阿里巴巴发布的 AuctionNet 基准上进行，含 dense 与 sparse 两个转化稀疏度不同的版本，各含 48 个广告主、9987 个投放期、每期超过 50 万次曝光机会；轨迹长 48 步，状态 16 维。比较对象包括四个离线 RL 方法（USCB、BCQ、CQL、IQL）和五个生成式方法（DiffBid、DT、CDT、DT-score、GAS）。指标为 Conversions（不考虑约束的转化价值）与 Score（在 CPA 约束下按实际与目标 CPA 之比施加惩罚后的价值）。实现上第一阶段为 8 层双向 Transformer，第二阶段为 6 层因果 Transformer，轨迹窗口 <span class="paper-math">&#92;(K=10&#92;)</span>，相关性损失权重 <span class="paper-math">&#92;(&#92;alpha=1&#92;)</span>，EMA 系数 <span class="paper-math">&#92;(&#92;lambda=0.99&#92;)</span>。
- 主实验在两版数据集的全部预算档位（预算规模的 50% 到 150%）上报告 Score，ADAPT 均为最优。消融覆盖四个方面：去掉全部画像退化为 DT、只用静态或只用动态画像；不解耦动态画像、只用共同或只用私有画像；零样本新广告主适应（训练时移除部分广告主全部数据）；以及留出一批投放期做免训练 EMA 更新。附录还提供画像扰动敏感性、<span class="paper-math">&#92;(&#92;alpha&#92;)</span> 超参敏感性、UMAP 可视化与余弦相似度统计。所有结果均为离线仿真，论文未报告线上 A/B 实验；代码声明将发布在 GitHub，本次未核验仓库状态。

### 结果与证据

- 在 100% 预算设置下，ADAPT 在两个数据集变体上的 Score 均超过最强基线 GAS，也大幅超过最弱基线 DiffBid。该结果支持画像建模在离线仿真中带来稳定收益，但提升幅度随预算档位变化，且仅基于 AuctionNet 仿真环境，不能直接推断线上投放收益。（Section 4.2）

  > For instance, under the 100% budget setting, ADAPT improves the score by 2.23% and 2.77% over the strongest baseline ( i.e. , GAS) on AuctionNet-dense and AuctionNet-sparse, respectively, and by 141.45% and 90.26% over the weakest baseline ( i.e. , DiffBid).

- 零样本新广告主实验中，训练时移除所选广告主全部数据后，完整零样本设计在 Score 与转化上均显著优于无画像设置，也优于 DT 基线，说明静态画像与原型共同画像能为未见广告主提供有效策略引导；但所选广告主数量与类目覆盖有限，泛化范围有待更大规模验证。（Section 4.3, Table 4）

  > In contrast, adding the static profile improves the score and conversions by 6.60% and 4.69%, while adding the common profile further improves them by 7.55% and 5.47%. With the full zero-shot design, ADAPT achieves the best performance, improving the score and conversions by 26.42% and 17.97% over the zero-profile setting.

- 在模型参数全部冻结、仅用 EMA 更新画像的设置下，ADAPT 在 Score 与转化上均超过不更新的变体，说明免训练更新能把近期出价信息注入画像；该实验只验证了单批留出投放期，未覆盖长期多次更新的漂移场景。（Section 4.3, Table 5）

  > These periods are then treated as new periods to update advertiser profiles with the proposed EMA-based mechanism, while all model parameters remain frozen. As shown in Table 5 , ADAPT improves the score and conversions by 5.39% and 3.09% over the variant without EMA update.

- 画像余弦相似度统计显示共同画像在广告主间相似度很高、私有画像明显更低，与解耦的预期语义一致；这是对表示性质的定量描述，属于相关性证据，不能单独证明相似度差异是性能提升的原因。（Appendix A.4, Table 9）

  > The common profiles have a high mean similarity of 0.9027, while the private profiles have a much lower mean similarity of 0.3218, confirming that common profiles capture shared strategies and private profiles preserve personalized information.

### 与小组方向的关联

画像解耦与免训练适应的思路对推荐/个性化方向有明确迁移价值，机制设计完整；但实验仅限 AuctionNet 离线仿真、48 个广告主，无线上结果，代码声明将开源但本次未核验，证据强度中等。

### 局限与阅读边界

- 作者承认的局限方面，论文未设独立局限章节，但从实验设置可见：全部结果来自 AuctionNet 离线仿真，环境由固定日志与二价拍卖模拟构成，与真实线上竞争、广告主策略反馈回路存在差距；数据仅 48 个广告主，画像记忆库与交叉注意力的规模效应未在大广告主量级上检验。
- 可合理提出的验证问题：其一，共同画像取自对记忆库的交叉注意力，记忆库规模增长时其计算成本与表示质量如何变化未讨论；其二，EMA 更新系数固定，面对广告主策略突变或长期漂移时的稳健性未测；其三，零样本冷启动依赖类目静态画像与全体共同画像均值，若新广告主类目稀缺或策略离群，原型画像可能引入偏差，论文未做失败案例分析。
- 本次阅读范围方面：已通读 17 页 PDF 含附录与全部表格，但未核验 GitHub 代码仓库与复现环境，超参敏感性仅覆盖相关性损失权重 <span class="paper-math">&#92;(&#92;alpha&#92;)</span>，其他超参（如温度系数 <span class="paper-math">&#92;(&#92;tau&#92;)</span>、记忆库维度）的敏感性未报告；基线复现是否调至最优也未独立确认，与最强基线 GAS 的差距较小，结论对该差距的稳健性需谨慎解读。

## Geometric Mean Pooling for Equal-Weight Multiplicative Coarse-Graining {#arxiv-2609-21876}

**作者：** Ang-Kun Wu, Fangdi Wen, Jingtao Zhang

**命中的作者机构：** Google

**作者单位原文：** Google

**论文：** [arXiv](https://arxiv.org/abs/2609.21876) · [本次阅读版本 v1](https://arxiv.org/abs/2609.21876v1)

阅读范围：完整 PDF，共 17 页（含图表、公式及附录），辅以可核对的正文片段

### 原始摘要

As an alternative to the additive and extremal biases of average and max pooling, we introduce Geometric Mean Pooling (GMP), a signed pooling operator that combines the product of feature signs with the geometric mean of feature magnitudes. Motivated by local-to-global composition in quantum many-body physics, GMP retains both joint sign information and a characteristic multiplicative scale without introducing learnable pooling parameters. We show that non-overlapping hierarchical GMP preserves the corresponding global multiplicative statistic and evaluate it on synthetic sequence tasks, iterative coarse-graining, image classification, and molecular lipophilicity regression. On the synthetic tasks, GMP recovers product-based signals more accurately than average and max pooling and maintains predictive performance under the tested levels of multiplicative input noise. On image and molecular data, however, its effectiveness depends on the representation, target parameterization, and placement of local and global pooling. These results position GMP as a complementary, regime-dependent inductive bias for tasks in which equal-weight multiplicative composition is plausible, rather than as a universal replacement for standard pooling operators.

### 一句话速览

论文提出带符号的几何平均池化（GMP）：以特征符号乘积与幅值几何平均替代平均/最大池化，无额外可学习参数。作者证明非重叠层级 GMP 精确保持全局乘积统计量，并在合成序列任务、图像分类与分子亲脂性回归上验证。合成任务中 GMP 显著优于基线，但图像与分子任务效果依赖表示、激活与池化位置，定位为条件适用的互补归纳偏置。

### 研究动机

- 池化是卷积网络中把局部激活压缩为低分辨率特征的基本操作，输入是特征图或序列窗口，输出是聚合后的数值或向量，用于下游预测。平均池化偏向加性统计，最大池化偏向极值响应，当目标由大量可比特征的联合乘积决定时二者并不匹配：此时各特征的边缘分布可以完全相同，类别信息只藏在乘积的符号或对数幅值之和中。
- 已有路线包括广义平均池化（GeM，参数趋于零时退化为几何平均）、可学习算术单元（NMU、NPU）以及 Deep Sets 式聚合框架。GeM 面向正输入且常带可学习参数，算术单元学习乘积子集，而本文关注更窄的等权情形：目标依赖全体特征的乘积，或等价地依赖对数幅值之和。要回答的问题是：能否定义无参数、带符号的乘性池化算子，使其在层级粗粒化下精确保持全局乘积统计量，并界定适用范围。动机部分来自量子多体物理：费米子占据态的波函数是 Slater 行列式（单粒子轨道的反对称乘积和），价键固体态也呈局部键因子的乘性组合。

### 方法与关键设计

- GMP 定义在窗口 <span class="paper-math">&#92;(W=&#92;&#123;x&#95;1,&#92;ldots,x&#95;k&#92;&#125;&#92;)</span> 上：<span class="paper-math">&#92;[&#92;mathrm&#123;GMP&#125;(W)=&#92;Big(&#92;prod&#95;&#123;i=1&#125;^&#123;k&#125;&#92;mathrm&#123;sign&#125;(x&#95;i)&#92;Big)&#92;exp&#92;Big(&#92;frac&#123;1&#125;&#123;k&#125;&#92;sum&#95;&#123;i=1&#125;^&#123;k&#125;&#92;log&#92;big(&#92;max(|x&#95;i|,&#92;varepsilon)&#92;big)&#92;Big),&#92;]</span> 其中 <span class="paper-math">&#92;(&#92;varepsilon&#92;)</span> 是对数内的幅值下界（一维默认 <span class="paper-math">&#92;(10^&#123;-6&#125;&#92;)</span>，二维默认 <span class="paper-math">&#92;(10^&#123;-12&#125;&#92;)</span>），<span class="paper-math">&#92;(&#92;mathrm&#123;sign&#125;(0)=0&#92;)</span>。第一个因子记录非零输入的符号奇偶性，第二个因子计算截断后的几何幅值；对数空间求值避免直接形成完整乘积，防止数值下溢。
- 该设计与乘积分解 <span class="paper-math">&#92;(&#92;prod&#95;i x&#95;i=(&#92;prod&#95;i &#92;mathrm&#123;sign&#125;(x&#95;i))&#92;exp(&#92;sum&#95;i &#92;log|x&#95;i|)&#92;)</span> 对应：GMP 保留联合符号与等权乘性尺度，已知窗口大小且截断不激活时，可用 <span class="paper-math">&#92;(&#92;mathrm&#123;sign&#125;(&#92;mathrm&#123;GMP&#125;)|&#92;mathrm&#123;GMP&#125;|^k&#92;)</span> 恢复完整乘积。与 GeM 的区别在于 GeM 面向正输入且参数可学习，GMP 固定幅值变换并显式加入符号奇偶规则；与 NMU/NPU 的区别在于 GMP 应用规定的奇偶规则和等权对数幅值权重，不学习乘积结构。
- 作者用重整化群语言刻画层级性质：把 <span class="paper-math">&#92;(N&#92;)</span> 个变量分成大小为 <span class="paper-math">&#92;(b&#92;)</span> 的不重叠块，每块由块映射替换，反复应用生成粗粒化流。平均池化对应加性块自旋映射，最大池化对应极值次序统计映射，二者都不是等权乘性统计的不动点；而 GMP 在变量替换 <span class="paper-math">&#92;(u&#95;i=&#92;log(&#92;max(|x&#95;i|,&#92;varepsilon))&#92;)</span> 下，幅值部分成为对数幅值空间中的算术平均：<span class="paper-math">&#92;(&#92;log|&#92;mathcal&#123;R&#125;&#95;b^&#123;&#92;mathrm&#123;GMP&#125;&#125;(B)|=&#92;frac&#123;1&#125;&#123;b&#125;&#92;sum&#95;&#123;i&#92;in B&#125;u&#95;i&#92;)</span>。附录 B 证明：当等大小、不重叠的块覆盖全部输入、各层使用相同 <span class="paper-math">&#92;(&#92;varepsilon&#92;)</span> 且中间无其他变换时，层级 GMP 精确等于一次性全局 GMP，含零输入情形也成立；浮点实现可能有舍入差异。
- 池化位置分两种：全局 GMP 把整条序列或特征图压缩为单个等权乘性摘要；局部 GMP 以大小为 <span class="paper-math">&#92;(k&#92;)</span>、步长为 <span class="paper-math">&#92;(k&#92;)</span> 的不重叠窗口分块替换（式 2），二维情形直接扩展到空间窗口（式 3），逐通道独立应用。激活选择会改变符号分量的作用：严格正输入下 GMP 就是截断几何平均；ReLU 输入下窗口内任一精确零会使带符号输出为零，且实现的反向传播对该窗口所有输入给出零梯度；Softplus 则消除负号机制。附录 A 还指出截断使算子在零点不连续，小幅符号变化可产生有限输出跳变，这解释了后文图像实验中全局 GMP 的不稳定。
- 一个帮助理解的例子：序列 <span class="paper-math">&#92;((-2,3,-5)&#92;)</span> 的符号乘积为正，对数幅值平均给出约 <span class="paper-math">&#92;((30)^&#123;1/3&#125;&#92;)</span> 的几何幅值，GMP 输出为正的该值；平均池化只看到负均值，最大池化只看到 3，都丢失符号奇偶信息。

### 实验设计与论证方式

- 实验分两层：合成任务检验规定的符号与幅值统计，应用任务检验学习表示内的池化。Case A 是全局带符号乘积分类：独立标准高斯序列，标签由乘积符号（负数个数的奇偶性）决定，各坐标边缘分布在两类间相同；比较全局最大、平均与 GMP 加线性分类器，池化前无卷积、归一化或激活。Case B 是局部乘积和分类：序列分成大小为 <span class="paper-math">&#92;(k&#92;)</span> 的不重叠单元，标签依赖局部带符号几何平均之和，观测加入小幅加性噪声，局部池化窗口与生成单元精确对齐。
- 回归侧 R1 检验全局几何均值回归，R2 检验局部单元对数均值回归，R3 检验乘性与加性噪声鲁棒性，R4 用八步迭代池化检验乘性观测量的保持。应用实验包括 MNIST、Fashion-MNIST、CIFAR-10 图像分类（全局/局部/同步三种池化位置配置，匹配架构与训练流程，十个种子）和 MoleculeNet 亲脂性回归（约四千二百个分子，Bemis–Murcko 骨架划分，Morgan 指纹输入的二维 CNN，与 XGBoost、随机森林、全连接网络及 SMILES 嵌入基线对比）。注意分子实验在辅助指数目标 <span class="paper-math">&#92;(z=&#92;exp(y)&#92;)</span> 上评测，与基线的对数尺度结果只能间接比较；附录 E 显示换回原始对数标签尺度后排序反转，最大池化最强。所有实验使用 NVIDIA RTX A6000 GPU，代码在 GitHub 公开（本次未核验仓库内容）。

### 结果与证据

- 在全局带符号乘积分类任务中，GMP 在所有报告的序列长度与相关系数设置下均达到完全准确，而平均与最大池化在独立输入下接近随机水平，仅在最高相关系数设置下略高于随机。该结果支持 GMP 保留符号奇偶信息的主张，但为单种子扫描，且任务是为该算子量身构造的，不能推广到一般分类。（Section 4.1 / Appendix C Table 3）

  > Across the reported single-seed sweeps over sequence length <span class="paper-math">&#92;(N&#92;in&#92;&#123;16,32,64,128&#92;&#125;&#92;)</span> and adjacent-site correlation <span class="paper-math">&#92;(&#92;rho&#92;in&#92;&#123;0,0.3,0.5,0.7,0.9&#92;&#125;&#92;)</span> , GMP achieves <span class="paper-math">&#92;(100&#92;%&#92;)</span> accuracy. Average and max pooling remain near chance for independent inputs and both reach <span class="paper-math">&#92;(60.4&#92;%&#92;)</span> accuracy at <span class="paper-math">&#92;(&#92;rho=0.9&#92;)</span> . Sweep details and full results appear in Appendix C , Table 3 .

- 符号消融显示，去掉几何平均中的符号奇偶项后，两个合成分类任务的准确率都降到约随机水平，说明符号分量是这些设置中性能的关键来源。该消融仅在合成任务上进行，不能直接推出符号分量在真实数据上同样关键。（Section 4.1 Table 1）

  > The only difference between the pooling variants is whether the geometric mean is computed with or without the sign-parity term. Removing the sign-parity term reduces accuracy to approximately chance level in both tasks, demonstrating its importance in these settings. Table 1: Ablation of the sign-parity term in geometric mean pooling.

- 在全局几何均值回归任务中，GMP 的决定系数接近满分，平均池化居中，最大池化最弱，支持几何聚合与乘性目标之间的对应关系。作者也指出平均池化可借助算术与几何幅值的相关性保留部分预测信息；结果为无噪声输入下的单种子实验。（Section 4.2 / Appendix C Table 4）

  > The learned affine embedding and regression head allow the model to adapt this summary during training. For <span class="paper-math">&#92;(N&#92;in&#92;&#123;16,32,64,128&#92;&#125;&#92;)</span> in the reported single-seed experiment, GMP achieves <span class="paper-math">&#92;(R^&#123;2&#125;=0.993&#92;)</span> – <span class="paper-math">&#92;(1.000&#92;)</span> , compared with <span class="paper-math">&#92;(0.609&#92;)</span> – <span class="paper-math">&#92;(0.638&#92;)</span> for average pooling and <span class="paper-math">&#92;(0.019&#92;)</span> – <span class="paper-math">&#92;(0.137&#92;)</span> for max pooling.

- 迭代池化实验中，以干净全局几何均值为目标逐层读出平均绝对误差：GMP 曲线在全部粗粒化步骤中近似保持恒定，平均池化误差居中且缓慢上升，最大池化误差随层级明显增大。这从经验上印证层级一致性证明，但该实验针对规定的乘性统计量，不涉及学习表示。（Figure 3 (R4)）

  图表观察（PDF 第 7 页）：图 3（第 7 页）为 R4 迭代池化实验，纵轴为 Mean Absolute Error（对数刻度），横轴为 RG Step 1–8；Geometric Pooling 曲线在约 10^-5 量级近似水平，Average Pooling 在约 10^-4 量级缓慢上升，Max Pooling 从约 10^-4 上升到约 10^-2 以上。

- 分子亲脂性回归的辅助指数目标实验中，全局 GMP 优于全局最大与平均池化，但局部 GMP 与全局最大池化组合时表现变差，且与基线的比较因目标尺度不同只能间接进行。附录 E 显示换回原始对数标签后最大池化最强，说明结论对目标参数化敏感。（Figure 5）

  图表观察（PDF 第 9 页）：图 5（第 9 页）报告 Morgan 指纹 2D CNN 在辅助目标 z=exp(y) 上的测试 R^2，按局部池化（Geo/Max/Avg）分三组，每组含全局 Geo/Max/Avg 三柱；正文指出最佳配置达到 R^2=0.3545，全局 GMP 优于全局 max 与 avg，局部 GMP 配全局 max 时变差；误差条为十种子标准差。

### 与小组方向的关联

论文属于模型结构设计方向，提出参数无关的带符号几何平均池化算子，并给出层级一致性的理论刻画，与小组关注的池化/聚合算子设计直接相关。合成任务证据充分，但图像与分子实验显示条件依赖明显，未涉及推荐或检索场景，迁移路径需自行验证。

### 局限与阅读边界

- 作者明确承认 GMP 的效果依赖表示、目标参数化与局部/全局池化位置：图像分类中全局 GMP 不稳定，作者归因于 ReLU 精确零对带符号算子的影响；分子实验中局部 GMP 与全局最大池化组合时反而有害，且目标尺度一换排序就反转。因此 GMP 只应视为等权乘性组合可信时的条件性归纳偏置，不是通用替代品。
- 从材料可提出的验证问题：层级一致性证明要求等大小不重叠块、共享 <span class="paper-math">&#92;(&#92;varepsilon&#92;)</span> 且中间无变换，实际网络中的卷积与归一化会破坏该恒等式，实际收益需逐场景验证；Case A 与 R1 的扫描为单种子（种子 42），稳健性结论主要依赖 Case B、消融与图像实验的十种子设置。
- 本次阅读范围限于论文本身：未核验开源代码的可用性与复现环境，未在推荐、检索或语义 ID 等小组核心场景测试该算子，其在物理、化学等真实乘性结构数据上的表现属于作者列出的未来工作。

<span id="digest-content-ec99430e3b19fe03cf6a928547405d98286adff4eb9eb183c1fd27f54315a4ec" hidden></span>
