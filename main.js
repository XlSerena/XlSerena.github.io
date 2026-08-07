const copy = {
  en: {
    mark: "Lan Xu",
    nav_about: "About",
    nav_work: "Work",
    nav_open: "Open",
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
      "I work where language models meet durable infrastructure—routing agents across tools, shaping trustworthy data paths, and making AI cost observable. AI Platform & Infrastructure Engineer at Noematrix (Flexiv Robotics); previously Data Engineer Intern at TikTok. M.S. Information (Big Data Analytics), University of Michigan; B.Eng. ECE, Shanghai Jiao Tong University.",
    about_list: [
      { lead: "Agents", rest: "LangGraph · FastAPI · async workers" },
      { lead: "Data", rest: "warehouses · streaming · serving" },
      { lead: "Delivery", rest: "Docker · Kubernetes · CI/CD" },
      { lead: "Cost & tooling", rest: "spend governance · developer platforms" },
    ],
    work_kicker: "Selected work",
    work_title: "A few things worth showing.",
    work_lede: "AI platform first—agents and cost governance—with large-scale data systems as proof I can ship under load.",
    tag_case: "Case study",
    tag_work: "Work",
    tag_personal: "Personal",
    work_agents_title: "Production Multi-Agent Stack",
    work_agents_sub: "Router, tools, and async delivery for annotation, QC, and ops.",
    work_agents_problem_label: "Problem.",
    work_agents_problem:
      "Annotation, QC, and ops teams needed reliable answers from internal systems in chat—without waiting on engineers, and without exposing the wrong person’s data to the wrong role.",
    work_agents_owned_label: "What I owned.",
    work_agents_owned:
      "Independently built the production agent runtime end to end: LangGraph / DeepAgents routing with domain sub-agents, 40+ tools with role checks at both graph build and tool run, and an async path from chat events through Taskiq workers to streaming cards—with Redis locks/rate limits/retries, FastAPI services, and MySQL checkpoints. Wired tools into an annotation/QC warehouse I modeled—capacity, productivity, and human-vs-machine quality across 330K+ approved tasks.",
    work_agents_hard_label: "Hard part.",
    work_agents_hard:
      "Concurrent chats would double-fire tools and stall cards; dirty upstream payloads and four role scopes made “just call the API” unsafe. Separated short LLM summaries from detailed card/spreadsheet outputs so the runtime stayed useful under load instead of dumping tables into chat—or failing silently.",
    work_agents_result_label: "Result.",
    work_agents_result:
      "Live for four user types: 4,000+ production traces in 30 days, peaking at 327/day, with no failed LLM calls in the measured window.",
    work_hard_label: "Hard part.",
    work_costlens_sub: "Vibe-coding AI spend, one ledger across every entry point.",
    work_costlens_blurb:
      "Independently built unified spend governance across AI entry points for 8 groups / 240 people: ingestion, attribution, rankings, and Lark alerts—including trustworthy daily series from cycle-total-only vendor APIs.",
    work_costlens_hard:
      "Reconstructing day-level series people could trust when vendors only exposed billing-cycle totals—without double-counting alerts across entry points.",
    work_wide_title: "TikTok · Risk Table Optimization at Scale",
    work_wide_sub: "Data Engineer Intern · scale proof on the offline risk chain.",
    work_wide_blurb:
      "Rebuilt 70–90 TB / ~12B-row payment decision wide tables that ~80% of risk jobs depended on: skew fixes, common-layer sink, and 62-day hot/cold split. Cut runtime ~6h→2h and ~4h→1.5h in the heaviest clusters; hot-only reads ~16→10 min (~37%).",
    work_wide_hard:
      "Landing a common-layer + hot/cold redesign downstream jobs could adopt without a consumer rewrite wave.",
    work_rt_title: "TikTok · Near-Real-Time Risk Sensing",
    work_rt_sub: "Data Engineer Intern · scale proof with Flink under live fraud pressure.",
    work_rt_blurb:
      "Built Flink real-time risk datasets with offline compensation and lag/failover/checkpoint monitors, moving stolen-card, ATO, and collusion sensing from ~h+6 hour tables to near real time.",
    work_rt_hard:
      "Keeping jobs honest under lag and failover so near-real-time sensing stayed trustworthy when streams hiccuped.",
    open_kicker: "Open work",
    open_title: "Skills and peripherals.",
    open_lede: "Installable agent skills and small services distilled from production.",
    open_quota_title: "sub2api-lark-quota",
    open_quota_blurb:
      "An ecosystem peripheral for open-source Sub2API — Lark/Feishu request & approval → auto deposit.",
    skill_tools_title: "agent-tool-safety",
    skill_tools_blurb:
      "Five installable skills: dual-layer authz, idempotency, dirty-payload guards, summary vs detail delivery, and a full review pass.",
    skill_spend_title: "costlens-skills",
    skill_spend_blurb:
      "Five installable skills: entry inventory, cycle-total→daily, attribution, deduped alerts, reconciliation + synthetic fixtures.",
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
    nav_open: "开源",
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
      { lead: "Agents", rest: "LangGraph · FastAPI · 异步 Worker" },
      { lead: "Data", rest: "数仓 · 流式 · 服务层" },
      { lead: "Delivery", rest: "Docker · Kubernetes · CI/CD" },
      { lead: "Cost & tooling", rest: "花销治理 · 研发工具平台" },
    ],
    work_kicker: "精选作品",
    work_title: "几件值得拿出来看的事。",
    work_lede: "主线是 AI 平台——智能体与成本治理；大规模数据系统用来证明我能在压力下把东西做稳。",
    tag_case: "案例",
    tag_work: "工作",
    tag_personal: "个人",
    work_agents_title: "Production Multi-Agent Stack",
    work_agents_sub: "路由、工具与异步投递，服务标注 / 质检 / 运营。",
    work_agents_problem_label: "问题。",
    work_agents_problem:
      "标注、质检与运营需要在对话里可靠查询内部系统——不能事事找工程师，也不能把不该看的数据交给错误角色。",
    work_agents_owned_label: "我负责。",
    work_agents_owned:
      "独立做出生产级 agent runtime：LangGraph / DeepAgents 路由与领域子智能体、40+ 工具（图构建与工具执行两层鉴权），以及对话事件经 Taskiq Worker 到流式卡片的异步投递——配合 Redis 锁/限流/重试、FastAPI 与 MySQL checkpoint。工具接上我建模的标注/质检数仓——产能、人效与人机质量，覆盖 33 万+ 已通过任务。",
    work_agents_hard_label: "难点。",
    work_agents_hard:
      "并发会话会让工具双发、卡片卡住；上游脏数据加上四种角色数据范围，不能「直接调 API」。把简短 LLM 摘要与明细卡片/表格输出拆开，让 runtime 在压力下仍可用，而不是把大表塞进对话——或静默失败。",
    work_agents_result_label: "结果。",
    work_agents_result:
      "上线服务四类用户：30 天内 4,000+ 条生产 trace，峰值 327 条/天；观测窗口内无失败 LLM 调用。",
    work_hard_label: "难点。",
    work_costlens_sub: "Vibe coding 的 AI 花销 · 跨入口统一台账。",
    work_costlens_blurb:
      "独立搭建跨 AI 入口的统一成本治理，覆盖 8 组 / 240 人：同步、归因、排名与飞书告警，并在厂商仅提供账期累计时还原可信日序列。",
    work_costlens_hard: "在只有账期累计的 API 上还原可信日序列，同时避免跨入口告警重复计数。",
    work_wide_title: "TikTok · 大规模风控宽表优化",
    work_wide_sub: "数据工程实习 · 用规模证明离线链路扛得住。",
    work_wide_blurb:
      "改造约八成风控任务依赖的支付决策宽表（70–90 TB / ~120 亿行）：倾斜治理、公共层下沉、62 天冷热分离。最重集群约 6h→2h、4h→1.5h；热分区取数约 16→10 分钟（~37%）。",
    work_wide_hard: "让公共层 + 冷热分层能被下游直接接住，而不掀起一轮消费任务重写。",
    work_rt_title: "TikTok · 近实时风险感知",
    work_rt_sub: "数据工程实习 · 用 Flink 证明实时对抗扛得住。",
    work_rt_blurb:
      "搭建 Flink 实时风险数据集，配合离线补偿与 lag/failover/checkpoint 监控，将盗卡、ATO、勾结等感知从小时表约 h+6 做到近实时。",
    work_rt_hard: "在 lag/failover 下仍保持任务可信，让近实时感知在流量抖动时站得住。",
    open_kicker: "公开产物",
    open_title: "Skills 与周边服务。",
    open_lede: "从生产实践提炼的可安装 Skills，以及可自行部署的周边服务。",
    open_quota_title: "sub2api-lark-quota",
    open_quota_blurb: "为开源 Sub2API 补的一块生态周边：飞书提额与审批 → 自动入账。",
    skill_tools_title: "agent-tool-safety",
    skill_tools_blurb:
      "五个可安装 skill：双层鉴权、幂等、脏上游校验、摘要/明细分流与端到端评审。",
    skill_spend_title: "costlens-skills",
    skill_spend_blurb:
      "五个可安装 skill：入口盘点、账期累计→按日、组织归因、去重告警、对账，含合成 fixture。",
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
    el.innerHTML = items
      .map((item) => {
        if (item && typeof item === "object" && item.lead != null) {
          const rest = item.rest ? ` · ${item.rest}` : "";
          return `<li><strong>${item.lead}</strong>${rest}</li>`;
        }
        return `<li>${item}</li>`;
      })
      .join("");
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
  const pieces = document.querySelectorAll(".work .piece, .skill-item, .side-card");
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
