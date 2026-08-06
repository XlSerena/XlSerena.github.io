const copy = {
  en: {
    mark: "Lan Xu",
    nav_about: "About",
    nav_work: "Work",
    nav_side: "Side notes",
    nav_contact: "Contact",
    eyebrow: "AI Platform · Infrastructure",
    name: "Lan Xu",
    lede: "Building production agents, data platforms, and quiet tooling for AI teams.",
    hero_thought:
      "AI does not merely generate text and images. It shapes how reality is framed, remembered, and believed.",
    hero_caption: "Brussels · In front of The Death of Marat",
    cta_work: "Selected work",
    cta_mail: "Email",
    about_kicker: "About",
    about_title: "Systems that stay composed under load.",
    about_body:
      "I work where language models meet durable infrastructure—routing agents across tools, shaping trustworthy data paths, and making AI cost observable. Currently an AI Platform & Infrastructure Engineer at Noematrix (Flexiv Robotics). Previously a Data Engineer Intern at TikTok. M.S. Information (Big Data Analytics), University of Michigan; B.Eng. ECE, Shanghai Jiao Tong University.",
    about_list: [
      "LangGraph · agent orchestration · FastAPI",
      "Data platforms · streaming · analytics stores",
      "Docker · Kubernetes · CI/CD",
      "AI developer tooling & governance",
    ],
    work_kicker: "Selected work",
    work_title: "A few things worth showing.",
    tag_case: "Case study",
    tag_work: "Work",
    tag_personal: "Personal",
    tag_soon: "Soon",
    work_agents_title: "Production Multi-Agent Stack",
    work_agents_sub: "Router, tools, and async delivery for annotation, QC, and ops.",
    work_agents_problem_label: "Problem.",
    work_agents_problem:
      "Annotation, QC, and ops teams needed reliable answers from internal systems in chat—without waiting on engineers, and without exposing the wrong person’s data to the wrong role.",
    work_agents_owned_label: "What I owned.",
    work_agents_owned:
      "Independently built the full production stack: LangGraph / DeepAgents router and domain sub-agents, 40+ tools with role checks at graph build and tool run, FastAPI services, Taskiq workers, Redis locks/rate limits/retries, MySQL checkpoints, and streaming interactive cards as the delivery surface. Agent tools read an annotation/QC warehouse I modeled—capacity, productivity, and human-vs-machine quality across 330K+ approved tasks.",
    work_agents_hard_label: "Hard part.",
    work_agents_hard:
      "Concurrent chats would double-fire tools and stall cards; dirty upstream payloads and four role scopes made “just call the API” unsafe. Separated short LLM summaries from detailed card/spreadsheet outputs so the runtime stayed useful under load instead of dumping tables into chat—or failing silently.",
    work_agents_result_label: "Result.",
    work_agents_result:
      "Live for four user types: 4,000+ production traces in 30 days, peaking at 327/day, with a 100% LLM-call success rate.",
    work_costlens_sub: "Vibe-coding AI spend, one ledger across every entry point.",
    work_cursor_problem_label: "Problem.",
    work_cursor_problem:
      "Vibe coding made AI spend grow fast and hard to govern: usage was scattered across tools and gateways, so leads lacked one trustworthy view of who used what—by person and team—before costs piled up.",
    work_cursor_owned_label: "What I owned.",
    work_cursor_owned:
      "Independently built a unified cost-governance platform across those entry points: API ingestion, identity/group mapping for 8 groups, totaling 240 people, rankings and drill-downs, Docker deploy, plus Lark bots for daily rankings and threshold alerts.",
    work_cursor_hard_label: "Hard part.",
    work_cursor_hard:
      "Vendor APIs often expose cycle-to-date spend, not daily dollars—so same-cycle snapshots and diffs had to produce a reliable daily series, while usage from other entry points was normalized into the same attribution model. Billing rollovers, negative adjustments, departed users, and dual API schemas were handled so the ledger didn’t invent fake days or false cycle breaks.",
    work_cursor_result_label: "Result.",
    work_cursor_result:
      "One place to attribute AI usage and cost by person and group, with deduped threshold alerts and a morning ranking card—governance instead of spreadsheet archaeology across tools. Source stays private; a sanitized Skill (patterns only) is forthcoming.",
    work_wide_title: "TikTok · Decision Wide Tables",
    work_wide_sub: "Data Engineer Intern · unblocking the offline risk chain.",
    work_wide_problem:
      "Payment-order decision wide tables sat under ~80% of risk-domain jobs. At 70–90 TB / ~12B rows a day they took 5–7 hours, so leaf tasks could not defend SLA no matter how the queue was tuned.",
    work_wide_owned:
      "Owned the wide-table rebuild for the heaviest rooms (VA/SG first): skew cleanup, common-layer sink for shared REP dedupe, join-order fixes for oversized params/factors, and a 62-day hot/cold split grounded in lock/chargeback business rules.",
    work_wide_hard:
      "Tables were full DF rebuilds—null transaction_id skew (~200M rows) showed up as one Spark stage with a long tail. Hot/cold had to write one physical table via external paths, and Hive metadata had to refresh atomically so Sensor dependents never scheduled on a cold-only half partition.",
    work_wide_result:
      "Runtime fell ~6h→2h (VA) and ~4h→1.5h (SG), advancing risk-domain SLA by ~3h; hot-only reads cut query time ~16→10 min (~37%).",
    work_rt_title: "TikTok · Real-Time Risk Datasets",
    work_rt_sub: "Data Engineer Intern · Flink sensing for live abuse.",
    work_rt_problem:
      "As ecommerce opened new markets, abuse probed strategy gaps faster than hour-batch sensing could answer. Offline hour tables looked “hourly” but often lagged ~3–6 hours under yarn queues and multi-layer warehouse hops—too late for stolen-card, ATO, and collusion fight.",
    work_rt_owned:
      "Built Flink real-time fact datasets (rule/item grain) joined to request/result dims, plus offline compensation for history backfill, and operational monitors on failover, lag, and checkpoint health.",
    work_rt_hard:
      "Real-time paths fail quietly under burst lag or checkpoint loss; paired runtime alerts with later offline/online consistency checks so missing or duplicated rows could be caught before the board lied.",
    work_rt_result:
      "Moved key risk sensing from ~h+6 hour tables to near real time for stolen-card, account-takeover, and buyer–seller collusion scenes.",
    work_skills_title: "Skills",
    work_skills:
      "Public Cursor / Agent Skills will land here—reusable workflows and checklists, carefully stripped of internal systems and credentials.",
    side_kicker: "Side notes",
    side_title: "Smaller experiments worth keeping.",
    side_lede: "Games, XR, and playful systems at the edge of design and tech.",
    side_feastory_time: "Spring 2026",
    side_feastory_title: "Feastory",
    side_feastory_sub: "Food journal RPG",
    side_feastory_blurb:
      "A multi-agent village where daily meals become story—NPC dialogue, gentle mystery, and a closing report on how you ate.",
    side_feastory_role: "Lead · AI dialogue, narrative systems & game loop",
    side_dnd_time: "Spring 2026",
    side_dnd_title: "D&D 5e Rules Assistant",
    side_dnd_blurb:
      "A grounded rules companion for play: role-aware answers for Player or DM, with retrieved evidence you can inspect.",
    side_dnd_role: "Lead · RAG, interface & AWS EC2 demo",
    side_dnd_days: "Web demo available until October 19, 2026",
    side_dnd_expired_label: "Web demo ended October 19, 2026",
    dnd_modal_title: "Demo unavailable",
    dnd_modal_body:
      "The AWS EC2 free-tier demo for D&D 5e Rules Assistant ended on October 19, 2026.",
    dnd_modal_close: "Close",
    side_si659_time: "Winter 2025",
    side_si659_title: "XR Journalism Hazard Drill",
    side_si659_blurb:
      "A class-wide teamwork XR drill for journalists in a disaster zone—map, route, and reporting setup on Quest Pro.",
    side_si659_role: "Dev · Unity + Meta SDK · spatial interaction",
    side_game_time: "Spring 2024",
    side_game_title: "The Time Gambit",
    side_game_blurb:
      "A chess-pawn’s quest across two eras: puzzle through past and present until the path opens.",
    side_game_role: "Mechanics · level design · art · main menu",
    contact_kicker: "Contact",
    contact_title: "Say hello.",
    contact_lede: "Open to conversations about AI platforms, agents, and data infrastructure.",
    footer: "Quiet systems. Clear signals.",
  },
  zh: {
    mark: "Lan Xu",
    nav_about: "关于",
    nav_work: "作品",
    nav_side: "旁支",
    nav_contact: "联络",
    eyebrow: "AI 平台 · 基础设施",
    name: "Lan Xu",
    lede: "构建生产级智能体、数据平台，以及克制可靠的 AI 研发工具。",
    hero_thought: "AI 不只生成文字与图像，也在塑造我们如何理解、记忆与相信现实。",
    hero_caption: "布鲁塞尔 ·《马拉之死》前",
    cta_work: "精选作品",
    cta_mail: "邮件",
    about_kicker: "关于",
    about_title: "在压力下仍保持从容的系统。",
    about_body:
      "我在大模型与可靠基础设施的交界处工作——编排智能体工具调用、塑造可信数据路径，并让 AI 成本可观测、可治理。现任 Noematrix（Flexiv Robotics）AI 平台与基础设施工程师；曾于 TikTok 任数据工程实习生。密歇根大学信息学院硕士（大数据分析）；上海交通大学电子与计算机工程学士。",
    about_list: [
      "LangGraph · Agent 编排 · FastAPI",
      "数据平台 · 流式计算 · 分析型存储",
      "Docker · Kubernetes · CI/CD",
      "AI 研发工具与成本治理",
    ],
    work_kicker: "精选作品",
    work_title: "几件值得拿出来看的事。",
    tag_case: "案例",
    tag_work: "工作",
    tag_personal: "个人",
    tag_soon: "即将",
    work_agents_title: "Production Multi-Agent Stack",
    work_agents_sub: "路由、工具与异步投递，服务标注 / 质检 / 运营。",
    work_agents_problem_label: "问题。",
    work_agents_problem:
      "标注、质检与运营需要在对话里可靠查询内部系统——不能事事找工程师，也不能把不该看的数据交给错误角色。",
    work_agents_owned_label: "我负责。",
    work_agents_owned:
      "独立完成整套生产栈：LangGraph / DeepAgents 路由与领域子智能体、40+ 工具（图构建与工具执行两层鉴权）、FastAPI 服务、Taskiq Worker、Redis 锁/限流/重试、MySQL checkpoint，以及流式交互卡片作为投递面。Agent 工具读取我建模的标注/质检数仓——产能、人效与人机质量，覆盖 33 万+ 已通过任务。",
    work_agents_hard_label: "难点。",
    work_agents_hard:
      "并发会话会让工具双发、卡片卡住；上游脏数据加上四种角色数据范围，不能「直接调 API」。把简短 LLM 摘要与明细卡片/表格输出拆开，让 runtime 在压力下仍可用，而不是把大表塞进对话——或静默失败。",
    work_agents_result_label: "结果。",
    work_agents_result:
      "上线服务四类用户：30 天内 4,000+ 条生产 trace，峰值 327 条/天；LLM 调用成功率 100%。",
    work_costlens_sub: "Vibe coding 的 AI 花销 · 跨入口统一台账。",
    work_cursor_problem_label: "问题。",
    work_cursor_problem:
      "Vibe coding 让 AI 花销涨得快、却难治理：用量散落在不同工具与中转入口，负责人缺少按人/组看清「谁用了什么」的可信视图，成本往往堆到账单才暴露。",
    work_cursor_owned_label: "我负责。",
    work_cursor_owned:
      "独立搭建覆盖上述入口的统一成本治理平台：API 同步、邮箱/分组归因（8 组，共计 240 人）、排名与下钻、Docker 部署，以及飞书每日排名与消费门槛告警。",
    work_cursor_hard_label: "难点。",
    work_cursor_hard:
      "厂商 API 往往只给账期累计、没有按日美元，需用同账期快照做差还原可信日序列，并把其他入口的用量纳入同一套归因口径；同时正确处理账期切换、负向修正、离职成员与双 schema，避免假日期或误判新账期。",
    work_cursor_result_label: "结果。",
    work_cursor_result:
      "一个视图里按人/组归因各 AI 入口的用量与成本，配合去重门槛告警与早间排名卡片——用系统做治理，而不是跨工具扒表。源码属公司资产；脱敏 Skill（仅方法）即将公开。",
    work_wide_title: "TikTok · 决策大宽表优化",
    work_wide_sub: "数据工程实习 · 打通离线风控链路卡点。",
    work_wide_problem:
      "支付订单决策宽表支撑约八成风控域任务，日数据约 70–90 TB / 120 亿行，生产常耗 5–7 小时，叶子任务再怎么抢队列也保不住 SLA。",
    work_wide_owned:
      "负责最重机房（优先 VA/SG）的宽表改造：倾斜治理、REP 去重公共层下沉、大字段关联顺序调整，以及基于锁单/chargeback 业务规则的 62 天冷热分离。",
    work_wide_hard:
      "表是全量 DF——transaction_id 空值倾斜约 2 亿行，在 Spark UI 上表现为 stage 长尾。冷热要以外部表同 HDFS 路径落成一张物理表，且 Hive 元数据原子回刷，避免 Sensor 下游在「只有冷分区」时提前调度。",
    work_wide_result:
      "VA 约 6h→2h、SG 约 4h→1.5h，带动风控域 SLA 提前约 3h；只读热分区时取数约 16→10 分钟（~37%）。",
    work_rt_title: "TikTok · 实时风险数据集",
    work_rt_sub: "数据工程实习 · Flink 对抗进行中的滥用。",
    work_rt_problem:
      "电商开国后，黑产试探策略漏洞的速度超过小时批感知。离线小时表名义「小时」，在队列与多层数仓下常延迟约 3–6 小时，跟不上盗卡、ATO、买卖勾结的对抗节奏。",
    work_rt_owned:
      "搭建 Flink 实时事实集（规则/商品粒度）并关联请求与结果维表，辅以离线补偿回补历史，配置 failover / lag / checkpoint 监控。",
    work_rt_hard:
      "实时链路会在堆积或 checkpoint 失败时静默劣化；用运行告警，并补离在线一致性核对，避免看板漏数/重数而不自知。",
    work_rt_result:
      "关键风险感知从小时表约 h+6 做到近实时，支撑盗卡、账户接管、BC 勾结等场景的实时对抗。",
    work_skills_title: "Skills",
    work_skills: "公开的 Cursor / Agent Skills 会放在这里——可复用的流程与清单，并仔细剥离内部系统与凭证。",
    side_kicker: "旁支",
    side_title: "值得留下的小实验。",
    side_lede: "游戏、XR 与可玩系统，落在设计与科技的交界。",
    side_feastory_time: "2026 春",
    side_feastory_title: "Feastory",
    side_feastory_sub: "饮食手账 RPG",
    side_feastory_blurb: "多智能体小村：每日餐食长成故事——NPC 对话、轻解谜，以及一份关于「你怎么吃」的终报。",
    side_feastory_role: "主导 · AI 对话、叙事系统与游戏循环",
    side_dnd_time: "2026 春",
    side_dnd_title: "D&D 5e 规则助手",
    side_dnd_blurb: "为桌游现场准备的规则同伴：按玩家 / DM 视角作答，并出示可核对的检索证据。",
    side_dnd_role: "主导 · RAG、界面与 AWS EC2 demo",
    side_dnd_days: "网页服务有效至 2026 年 10 月 19 日",
    side_dnd_expired_label: "网页服务已于 2026 年 10 月 19 日到期",
    dnd_modal_title: "Demo 已下线",
    dnd_modal_body: "D&D 5e 规则助手的 AWS EC2 免费额度 demo 已于 2026 年 10 月 19 日到期。",
    dnd_modal_close: "关闭",
    side_si659_time: "2025 冬",
    side_si659_title: "XR记者危险演习",
    side_si659_blurb: "全班协作的 XR 记者演习：在灾区读地图、选路线、布置报道——Quest Pro 上完成。",
    side_si659_role: "开发 · Unity + Meta SDK · 空间交互",
    side_game_time: "2024 春",
    side_game_title: "The Time Gambit",
    side_game_blurb: "棋兵穿越两个时代：在过去与现在之间解谜，直到道路重新敞开。",
    side_game_role: "机制 · 关卡 · 美术 · 主菜单",
    contact_kicker: "联络",
    contact_title: "保持联络。",
    contact_lede: "欢迎交流 AI 平台、智能体与数据基础设施。",
    footer: "简约，却有分量。",
  },
};

const DND_EXPIRES_AT = new Date("2026-10-19T23:59:59");
let currentLang = "en";

function daysUntilDndExpiry() {
  const now = new Date();
  const ms = DND_EXPIRES_AT.getTime() - now.getTime();
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

function isDndExpired() {
  return daysUntilDndExpiry() <= 0;
}

function updateDndExpiryLabel() {
  const el = document.getElementById("dnd-days-remaining");
  if (!el) return;
  const dict = copy[currentLang] || copy.en;
  if (isDndExpired()) {
    el.textContent = dict.side_dnd_expired_label;
    el.classList.add("is-expired");
  } else {
    el.textContent = dict.side_dnd_days;
    el.classList.remove("is-expired");
  }
}

function applyLang(lang) {
  currentLang = lang;
  const dict = copy[lang] || copy.en;
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-list]").forEach((el) => {
    const key = el.getAttribute("data-i18n-list");
    const items = dict[key];
    if (!Array.isArray(items)) return;
    el.innerHTML = items.map((t) => `<li>${t}</li>`).join("");
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  updateDndExpiryLabel();

  try {
    localStorage.setItem("lx-lang", lang);
  } catch (_) {
    /* ignore */
  }
}

function initLang() {
  let lang = "en";
  try {
    lang = localStorage.getItem("lx-lang") || lang;
  } catch (_) {
    /* ignore */
  }
  if (navigator.language && navigator.language.toLowerCase().startsWith("zh") && !localStorage.getItem("lx-lang")) {
    lang = "zh";
  }
  applyLang(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });
}

function initReveal() {
  const pieces = document.querySelectorAll(".work .piece, .side-card");
  if (!("IntersectionObserver" in window)) {
    pieces.forEach((p) => p.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  pieces.forEach((p) => io.observe(p));
}

function openDndModal() {
  const modal = document.getElementById("dnd-modal");
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeDndModal() {
  const modal = document.getElementById("dnd-modal");
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function initDndDemo() {
  const card = document.getElementById("dnd-demo-card");
  const modal = document.getElementById("dnd-modal");
  if (!card) return;

  updateDndExpiryLabel();

  card.addEventListener("click", (event) => {
    if (!isDndExpired()) return;
    event.preventDefault();
    openDndModal();
  });

  if (modal) {
    modal.querySelectorAll("[data-modal-close]").forEach((el) => {
      el.addEventListener("click", closeDndModal);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDndModal();
  });
}

initLang();
initReveal();
initDndDemo();
