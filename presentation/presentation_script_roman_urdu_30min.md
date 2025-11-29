# Aegis.AI — Mukammal Presentation Script (~30 Min) — Roman Urdu
> **Format:** Recorded Zoom | **MH** = Muhammad Haris | **AAK** = Ahmed Abdullah Khan | **FM** = Farhana Minhas
> **Zabaan:** Roman Urdu (maa English technical terms) | Original full script: `presentation_script_roman_urdu.md`

---

## 🎬 Recording Se Pehle Checklist
- [ ] Services chal rahe hon: backend `:3000`, frontend `:5173`, EvalServer `:8000`
- [ ] Browser par `http://localhost:5173` khula ho (login page nazar aaye)
- [ ] VS Code par `d:\aegis-develop` khula ho (Explorer sidebar open)
- [ ] `Final Aegis-develop.docx` VS Code mein khula ho
- [ ] Figma link ready: `figma.com/design/35gFjjYXV4dOuEBV08LCg6/Aegis.AI`
- [ ] Zoom Focus Assist ON — Display names: Full Name + Roll Number
- [ ] GitHub repo tab khula ho: `github.com/muhammadharis356/aegis-develop`
- [ ] PowerPoint Slide 1 par ready ho

---

## ⏱ Speaker Time Table (30 Min)

| Part | Section | Speaker | Waqt |
|------|---------|---------|------|
| 1 | Taaruf + Problem + Objectives | MH | 5 min |
| 2 | Domain Analysis + Architecture | AAK | 5 min |
| 3 | Backlog, Scrum, aur Figma | FM | 3 min |
| 4 | VS Code Walkthrough | AAK | 3 min |
| 5 | Live Demo (key modules) | MH | 7 min |
| 6 | Algorithms + Data Dictionary | MH | 4 min |
| 7 | Sprints + Results + Conclusion | FM+AAK | 3 min |
| **Total** | | | **~30 min** |

---

# ═══════════════════════════════════════
# PART 1 — Taaruf, Masla, aur Maqasid
# Speaker: Muhammad Haris | ⏱ ~5 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 1 (Title Slide)

**MH:**

> "Assalam-o-Alaikum. hamara project hai Aegis.AI — ek AI Governance Platform. mera naam hai Muhammad Haris, student ID F2022376040. mere saath hain Ahmed Abdullah Khan, ID F2022376096, aur Farhana Minhas, ID F2022376126 — Department of Artificial Intelligence and Data Science, UMT Lahore — supervisor: Sir Usama Ahmad. Phase 1 development November 2025 mein shuru hua, 9 sprints mein March 2026 tak mukammal hui."

📺 **Show:** PowerPoint Slide 2 (Agenda)

> "agenda: Problem, Architecture, Backlog, VS Code walkthrough, live demo, algorithms, sprint highlights, aur results. shuru karte hain."

📺 **Show:** PowerPoint Slide 3 (The Problem)

> "problem kya hai: AI systems tezi se phail rahe hain lekin governance peeche hai. EU AI Act 2024 mein enforceable hua — high-risk AI ke liye risk assessments, documentation, aur human oversight laazmi hain. ISO 42001, ISO 27001, aur NIST AI RMF mazeed compliance layers add karte hain. ek real-world example: hospital mein AI cancer diagnosis system galat nataij deta hai — koi audit trail nahin, koi governance nahin — patient ki jaan daao par aur regulatory violation."

> "humne paanch problems identify ki: **1)** Regulatory complexity — chaar frameworks simultaneously manage karna na-mumkin spreadsheets se. **2)** Centralized oversight ki kami — models, risks, vendors alag-alag disconnected tools mein. **3)** koi self-hostable alternative nahin — Credo AI, IBM OpenScale, OneTrust sab cloud-only SaaS hain, government bodies legally apna governance data bahar nahin bhej saktin. **4)** Manual error-prone audits. **5)** Built-in AI safety evaluation tools ka na hona."

📺 **Show:** PowerPoint Slide 4 (Objectives)

> "hamara hal: Aegis.AI — comprehensive, self-hostable platform jo das maqasid deliver karta hai: charon compliance frameworks ek hi interface se; AI Model Inventory maa risk assessment; Vendor Management; Policy Manager; AI Advisor LLM-powered chatbot; LLM Evaluations aur Arena via DeepEval; AI Detection Module GitHub scanning ke saath; schema-per-tenant multi-tenancy; Docker aur Kubernetes deployment; aur PDF/DOCX report generation. ye das maqasid 20 EPICs aur 58 user stories se directly map hote hain."

---

# ═══════════════════════════════════════
# PART 2 — Domain Analysis aur Architecture
# Speaker: Ahmed Abdullah Khan | ⏱ ~5 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 5 (Customers & Stakeholders)

**AAK:**

> "Shukriya Haris. Main Ahmed Abdullah Khan. Aegis.AI chaar customer segments target karta hai: tech companies jo AI products build kar rahi hain, regulated industries — banking, healthcare, public sector — government bodies, aur sectoral industries jahan AI oversight laazmi hai. das actor types hain: Admin, Editor/AI Governance Officer, Reviewer, Auditor, End Users, External Vendors, Regulatory Bodies, LLM Providers, IT/DevOps, aur System background workers."

📺 **Show:** PowerPoint Slide 6 (Feature Comparison)

> "hamare competitors — IBM OpenScale, Credo AI, Holistic AI, OneTrust — sab cloud-only SaaS hain, partial framework support ke saath. Aegis.AI wahid platform hai jo complete EU AI Act + ISO 42001 + ISO 27001 + NIST AI RMF deliver karta hai — fully self-hosted, LLM Evaluation, AI Detection samait — aur bilkul muft."

📺 **Show:** `Final Aegis-develop.docx` → Section 5.1–5.4 (C4 Diagrams + Clean Architecture)

> "architecture: teen independently deployable services. React SPA port 5173 par Vite ke saath. Node.js TypeScript backend port 3000 par — 60 active route modules, JWT plus RBAC middleware. PostgreSQL port 5432 par schema-per-tenant isolation. Redis port 6379 par BullMQ job queues aur SSE Pub/Sub. Clean Architecture 4 layers mein: Presentation — 60 route files. Application — Controllers, SSE Service, PMM Scheduler, PDF Generator. Domain — Sequelize models, business rules jaise risk formula L×1+S×3. Infrastructure — PostgreSQL, Redis, LLM APIs, email. Dependencies sirf inward point karti hain — matlab PostgreSQL ko replace kiya ja sakta hai bagair business logic touch kiye."

📺 **Show:** Section 5.4 ERD

> "ERD mein 15 major table groups hain: Organizations → Users → Projects → ProjectRisks maa RiskHistory aur audit tables. Projects ke VendorRisks, ModelInventories, ApprovalRequests, Tasks, Incidents, PMM configurations bhi hain. Multi-tenancy: jab organization register hoti hai to system ek dedicated schema banata hai 10-character cryptographically random hash se. database engine level par enforce hota hai — 15 cross-tenant access tests kiye, sab 15 correctly blocked."

---

# ═══════════════════════════════════════
# PART 3 — Product Backlog, Scrum, aur Figma
# Speaker: Farhana Minhas | ⏱ ~3 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 9 (Backlog Summary) + PowerPoint Slide 10 (Sprint Timeline)

**FM:**

> "Shukriya Ahmed. Main Farhana Minhas, F2022376126. hamara backlog: 20 EPICs, 58 user stories — As a role, I can do something, so that benefit format mein, har story maa Priority, Acceptance Criteria, Story Points, aur Status. key Phase 1 EPICs: User Management, Multi-Tenancy, Approval Workflows, charon compliance Frameworks, Risk Management, Vendor Management, Policy Manager, Model Inventory, Incident Management, PMM, WatchTower. Phase 2 mein deferred: LLM Evaluations, AI Advisor live connections, AI Detection Module — in ke UIs banay hain, gracefully degrade karte hain."

> "development 9 two-week sprints mein — November 15 se March 20 tak. Scrum Master role rotate hua. Poori Scrum ceremonies: Planning, Daily Standups, Sprint Review maa Sir Usama Ahmad as Product Owner, Retrospective. Phase 1 mein 43 user stories — 230 story points — sab live browser user acceptance testing se verified."

> "individual contributions briefly: Muhammad Haris ne authentication, approval workflows engine, risk scoring, PDF generation, global search kiya. Ahmed Abdullah Khan ne Docker/Kubernetes, RBAC, charon framework seedings, SSE notification system kiya. Maine poora React frontend — 50 plus pages — aur tamam 20 Figma prototype designs banaye."

📺 **Open:** Figma link ya Final Aegis-develop.docx Section 3.4 screenshots

> "Figma screens: dark navy theme, teal accents, Inter typography — Login, Dashboard, Risk Management registry, Policy Manager lifecycle, AI Trust Center, LLM Evaluations, WatchTower, Approval Workflows. tamam 20 screens development se pehle design ki gayi — implementation guide ke liye."

---

# ═══════════════════════════════════════
# PART 4 — VS Code: Codebase Walkthrough
# Speaker: Ahmed Abdullah Khan | ⏱ ~3 min
# ═══════════════════════════════════════

📺 **Switch to:** VS Code — `d:\aegis-develop`

**AAK:**

> "VS Code mein aate hain. root mein teen apps: `Clients` — React TypeScript. `Servers` — Node.js TypeScript. `EvalServer` — Python FastAPI. saath mein `kubernetes/.k8s`, `docker-compose.yml`, aur `Final-Documentation`."

📺 **Expand:** `Servers/routes/` folder → phir `Servers/middleware/`

> "Servers folder Clean Architecture layers reflect karta hai: `routes/` — 60 route files, har feature ka apna module: eu-ai-act, iso-42001, iso-27001, nist-ai-rmf, projectRisks, vendors, policies, modelInventory, approvalWorkflows, automations, post-market-monitoring, aiDetection, search, advisor, aur mazeed. middleware mein teen files: `jwtAuth.ts` JWT token verify karta hai. `tenantScope.ts` PostgreSQL SET search_path `<tenant_schema>` set karta hai — us organization ki private schema tak tamam queries scope. `rbac.ts` role permissions check karta hai — unauthorized ho to fauran 403. ye teen-layer security har request par chalti hai."

📺 **Show:** `docker-compose.yml` briefly → phir `kubernetes/.k8s/` folder

> "Docker Compose mein paanch services maa health checks: postgres, redis, Node.js server, React Nginx frontend, Python evalserver — ek command `docker-compose up -d` se poori platform start. Kubernetes mein aath manifests hain: backend, frontend, evalserver, BullMQ worker, postgres StatefulSet, redis, Nginx Ingress maa SSL termination, aur Horizontal Pod Autoscaler. matlab Aegis.AI AWS EKS, Azure AKS, ya self-hosted Kubernetes par horizontally scale kar sakta hai."

---

# ═══════════════════════════════════════
# PART 5 — Live Demo: Running Application
# Speaker: Muhammad Haris | ⏱ ~7 min
# ═══════════════════════════════════════

📺 **Switch to:** Browser — `http://localhost:5173`

**MH:**

> "live application — port 5173 frontend, port 3000 API. ye login page hai — dark theme, Aegis.AI shield logo."

📺 **Log in** → Dashboard

> "Admin se login. Dashboard par organization-wide metrics: total use cases, risk score distribution, compliance progress per framework, vendor count, recent activity — sab is org ke PostgreSQL schema se scoped."

📺 **Navigate:** Overview → click one Use Case → EU AI Act tab → click one control

> "Overview mein Use Cases hain — AI systems jo governe ho rahe hain — auto-generated UC-IDs ke saath. use case ke andar EU AI Act tab mein 13 control categories hain: Data Governance, Technical Documentation, Human Oversight, Accuracy, Cybersecurity, Conformity Assessment waghaira. har control lifecycle mein move karta hai: Waiting → In Progress → Under Review → Done, ya N/A maa mandatory justification. har transition timestamp aur user ke saath log hoti hai."

📺 **Navigate:** Risk Management → open a risk → View History

> "Risk Registry. har risk mein Likelihood 1–5 Rare se Almost Certain, Severity 1–5 Negligible se Catastrophic. Platform auto-calculate karta hai: Risk Score = L×1 + S×3 — Severity ko teen guna weight AI governance mein impact zyada aham hai. View History mein har change recorded — complete version control."

📺 **Navigate:** Approval Workflows

> "Approval Workflows: Editor use case ya risk submit for review karta hai. Admin ne pehle multi-step template configure kiya hai — 5 sequential steps tak. submission par real-time SSE notification bell icon par — hamare Redis Pub/Sub pipeline se 100ms se kam mein. Approver step-by-step approve, reject with comment, ya submitter withdraw kar sakta hai. sab state transitions internally tracked."

📺 **Navigate:** Policy Manager → Post-Market Monitoring → Automations

> "Policy Manager mein policies jaati hain: Draft → Under Review → Approved → Published → Archived — directly compliance controls se linked, full traceability. Post-Market Monitoring EU AI Act Articles 9 aur 72 ke aligned — active PMM configs frequency, reminder_days, escalation_days ke saath, auto-generates cycles, emails stakeholder, aur submission par PDF audit report generate karta hai. Automations mein event-driven no-code rules: trigger jaise RISK_CREATED, condition jaise risk_level equals Very High, actions: SEND_SLACK, SEND_EMAIL, CREATE_TASK, CALL_WEBHOOK."

📺 **Navigate:** WatchTower → Settings (LLM Keys tab)

> "WatchTower real-time audit log — har governance action: actor, action type, entity, ISO 8601 timestamp. Settings mein modular config: LLM API keys OpenAI/Anthropic/OpenRouter, Email provider SMTP/SES/Azure/Resend, Slack webhook, API tokens. platform bagair kisi LLM key ke bhi fully functional — AI features gracefully degrade."

---

# ═══════════════════════════════════════
# PART 6 — Algorithms + Data Dictionary
# Speaker: Muhammad Haris | ⏱ ~4 min
# ═══════════════════════════════════════

📺 **Show:** Final Aegis-develop.docx → Section 6.3

**MH:**

> "paanch core algorithms — Section 6.3 mein documented."

> "**Algorithm 1: Risk Level Auto-Calculation.** Formula: Risk Score = L×1 + S×3. thresholds: ≤4 = Very Low, 5–8 = Low, 9–12 = Medium, 13–16 = High, ≥17 = Very High. project, vendor, aur model risks — tino mein same formula. 25 risk entries tested — 100% correctly calculated."

> "**Algorithm 2: AI Advisor Context Injection.** 6 steps: live use case data fetch karo → structured system prompt mein inject karo → conversation history append karo → configured LLM call karo — OpenAI/Anthropic/OpenRouter → response SSE ke zariye stream karo → agar tool call ho jaise `getRisksByProject` to backend execute karta hai result inject karta hai. Advisor 'is hafte mere kaun se risks Critical hain?' jaise live questions answer kar sakta hai."

> "**Algorithm 3: LLM Evaluation Scoring Pipeline.** test dataset load → target LLM ko bhejo → Correctness, Faithfulness, Hallucination Rate, Bias metrics se score karo → results aggregate karo → store. Arena mode do models simultaneously evaluate karta hai side-by-side."

> "**Algorithm 4: PMM Scheduler.** BullMQ cron `0 * * * *` — har ghante: active PMM configs query, no active cycle ho to naya cycle create aur questionnaire email, reminder_days threshold par reminder, escalation_days baad escalation alert, submission par Playwright PDF report."

> "**Algorithm 5: Automation Rule Engine.** event fire ho → tenant ke rules query → condition evaluate → matching rules ke liye actions execute — SLACK, EMAIL, TASK, WEBHOOK — phir execution history log."

📺 **Show:** Final Aegis-develop.docx → Section 5.8 Data Dictionary (briefly)

> "data dictionary se key points: `projects` table mein `uc_id` auto-generated VARCHAR UNIQUE, `ai_risk_classification` ENUM — Prohibited/High risk/Limited risk/Minimal risk — EU AI Act terminology directly. `project_risks` mein `risk_level_autocalculated` ENUM backend ne formula se compute ki. `post_market_monitoring_configs` mein `frequency_value`, `reminder_days`, `escalation_days`, aur `escalation_contact_id` FK. constraints: PostgreSQL 14+, Redis required, JWT 24h expiry, bcrypt 10 rounds, rate limiting 100 requests/15 min per IP, file upload max 10MB."

---

# ═══════════════════════════════════════
# PART 7 — Sprints, Results, aur Conclusion
# Speaker: Farhana Minhas + Ahmed Abdullah Khan | ⏱ ~3 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 12 (Sprint Summary) → Slide 15 (UAT Table) → Slide 18 (Conclusion)

**FM:**

> "9 sprints ke key highlights: Sprint 1 — monorepo, Docker, JWT auth, RBAC, Sequelize. Sprint 2 — schema-per-tenant multi-tenancy, full Approval Workflow engine maa SSE real-time notifications 100ms se kam mein. Sprint 3 — EU AI Act seeder. Sprint 4 — ISO 42001 aur ISO 27001. Sprint 5 — Risk Management maa auto-calculation aur RiskHistory. Sprint 6 — Vendor Management, Policy Manager, Policy Templates. Sprint 7 — Model Inventory aur NIST AI RMF chaar functions: GOVERN, MAP, MEASURE, MANAGE. Sprint 8 — LLM Evaluations aur AI Advisor UIs — UI-first strategy. Sprint 9 — PDF reporting Playwright se, Command Palette Ctrl+K 14 entity types mein — supervisor se khas tarif mili. ek bug — Sprint 9 PDF formatting race condition, retry mechanism se usi sprint mein fix."

> "results: 258 test cases — 45 Jest unit, 32 frontend component, 28 API integration, 90 sprint extended, 8 security, 10 PMM, 15 PDF — sab 258 pass, 0 fail, 100% correctness. UAT: 43 stories — 100%. Multi-tenancy: 15 cross-tenant attempts — 100% blocked. RBAC: 30 unauthorized attempts — 100% blocked. SSE: 50 tests — 49 under 100ms. Overall Phase 1 accuracy: ~99%."

**AAK:**

> "Aegis.AI koi prototype nahin — ek mukammal operational enterprise-grade platform hai. ~60,000 lines TypeScript aur Python, 60 route modules, 40 se zyada database tables. stack: React 18, Vite 6, Material UI, Redux Toolkit, React Query v5, Node.js 22, Express 4, TypeScript 5, Sequelize 6, Python FastAPI, DeepEval, PostgreSQL 15, Redis BullMQ, JWT plus bcrypt plus Google OAuth2, Playwright PDF, Docker Compose aur Kubernetes 8 manifests maa HPA, Swagger OpenAPI 3.0, Jest plus Supertest plus RTL plus MSW, Business Source License 1.1."

> "Phase 2 mein 15 planned user stories — 114 story points: live LLM connections, full DeepEval benchmarking, GitHub AI Detection, Bias/Fairness complete scoring, SMTP/SES emails, Slack integration, MLflow sync, AWS EKS/Azure AKS deployment. long-term roadmap mein granular permissions, AI risk assessment auto-generation, mobile app, Jira integration, Compliance Template Marketplace, OSCAL export. hum dil ki gehrayyion se Sir Usama Ahmad ka shukriya ada karte hain. source code, documentation, aur test cases github.com/muhammadharis356/aegis-develop par available hain. Jazakallah Khair."

---

> ⚡ **30-minute version tips:** Har speaker apne section confident aur brisk andaaz mein deliver kare — pauses minimum rakhein. Demo mein sirf key clicks — navigation animations ka intezaar na karein. Script ke dialogues agar zarurat ho to aur bhi compress karein lekin sab topics cover karein.
