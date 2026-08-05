const copy = {
  en: {
    mark: "Lan Xu",
    nav_about: "About",
    nav_work: "Work",
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
    work_cursor:
      "An end-to-end platform for AI developer-tool cost governance: Cursor Admin API ingestion, spend attribution, rankings, drill-downs, and alerting—designed for billing-cycle edge cases and noisy real-world usage. Source remains private (company property); a sanitized public Skill is forthcoming.",
    work_cursor_note: "Coming soon — Cursor / Agent Skill (patterns only, no proprietary code).",
    work_dm3_agents_title: "DM3 Agents Platform",
    work_dm3_agents:
      "Production multi-agent assistant on Lark: router and domain sub-agents with LangGraph / DeepAgents, role-aware authorization, streaming interactive cards, and hardened async workers—thousands of production traces with high LLM reliability.",
    work_dm3_stats_title: "DM3 Statistics",
    work_dm3_stats:
      "Annotation and quality-control data platform: ODS→DWD→DWS→serving models for capacity, productivity, and human-versus-machine quality across hundreds of thousands of approved tasks.",
    work_photo:
      "A quiet travel photography site—light on chrome, heavy on place. Design and front-end craft outside the day job.",
    work_skills_title: "Skills",
    work_skills:
      "Public Cursor / Agent Skills will land here—reusable workflows and checklists, carefully stripped of internal systems and credentials.",
    contact_kicker: "Contact",
    contact_title: "Say hello.",
    contact_lede: "Open to conversations about AI platforms, agents, and data infrastructure.",
    footer: "Quiet systems. Clear signals.",
  },
  zh: {
    mark: "Lan Xu",
    nav_about: "关于",
    nav_work: "作品",
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
    work_cursor:
      "端到端的 AI 研发工具成本治理平台：接入 Cursor Admin API，完成消费归因、排名、下钻与告警，并处理账期切换与真实使用中的边界情况。完整源码属公司资产，不公开；脱敏后的公开 Skill 即将发布。",
    work_cursor_note: "即将推出 — Cursor / Agent Skill（仅方法与清单，不含专有代码）。",
    work_dm3_agents_title: "DM3 多智能体平台",
    work_dm3_agents:
      "面向飞书的生产级多智能体助手：以 LangGraph / DeepAgents 编排路由与领域子智能体，角色授权、流式交互卡片与稳健异步 Worker——支撑数千条生产 trace，并保持高 LLM 调用成功率。",
    work_dm3_stats_title: "DM3 统计平台",
    work_dm3_stats:
      "标注与质检数据平台：ODS→DWD→DWS→服务层模型，覆盖产能、人效，以及人机质量对比，支撑数十万级已通过任务的分析。",
    work_photo: "安静的旅行摄影站——界面克制，把分量留给地方本身。工作之外的设计与前端练习。",
    work_skills_title: "Skills",
    work_skills: "公开的 Cursor / Agent Skills 会放在这里——可复用的流程与清单，并仔细剥离内部系统与凭证。",
    contact_kicker: "联络",
    contact_title: "保持联络。",
    contact_lede: "欢迎交流 AI 平台、智能体与数据基础设施。",
    footer: "简约，却有分量。",
  },
};

function applyLang(lang) {
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
  const pieces = document.querySelectorAll(".work .piece");
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

initLang();
initReveal();
