# Aegis.AI — Mukammal Presentation Script (~90 Min) — Roman Urdu
> **Format:** Recorded Zoom | **MH** = Muhammad Haris | **AAK** = Ahmed Abdullah Khan | **FM** = Farhana Minhas
> **Zabaan:** Roman Urdu (maa English technical terms) | English backup: `presentation_script_english_backup.md`

---

## 🎬 Recording Se Pehle Checklist
- [ ] Services chal rahe hon: backend `:3000`, frontend `:5173`, EvalServer `:8000`
- [ ] Browser par `http://localhost:5173` khula ho (login page nazar aaye)
- [ ] VS Code par `d:\aegis-develop` khula ho (Explorer sidebar open)
- [ ] `Final Aegis-develop.docx` VS Code mein khula ho (diagrams reference ke liye)
- [ ] Figma link ready: `figma.com/design/35gFjjYXV4dOuEBV08LCg6/Aegis.AI`
- [ ] Zoom Focus Assist ON — Display names: Full Name + Roll Number
- [ ] GitHub repo tab khula ho: `github.com/muhammadharis356/aegis-develop`
- [ ] PowerPoint Slide 1 par ready ho

---

# ═══════════════════════════════════════
# PART 1 — Taaruf (Introduction)
# Speaker: Muhammad Haris | ⏱ ~4 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 1 (Title Slide)

**MH:**

> "Assalam-o-Alaikum, aur khosh aamdyd hamare FYP Phase 1 ki recorded presentation mein. hamara project hai — Aegis.AI, ek AI Governance Platform. mera naam hai Muhammad Haris, student ID F2022376040. mere saath hain Ahmed Abdullah Khan, ID F2022376096, aur Farhana Minhas, ID F2022376126. hum Department of Artificial Intelligence and Data Science, School of Systems and Technology, University of Management and Technology, Lahore ke students hain, aur hamare supervisor hain Sir Usama Ahmad."

> "Aegis.AI ek self-hostable AI governance platform hai jo organizations ko Artificial Intelligence safely, responsibly, aur global regulations ke mutabiq deploy karne mein madad deta hai — EU AI Act, ISO 42001, ISO 27001, aur NIST AI Risk Management Framework samait."

> "humne Phase 1 development November 2025 mein shuru ki aur March 2026 tak apni 9 sprints mukammal ki. aaj ki presentation mein hum aap ko wo problem dikhayenge jo humne solve ki, wo system jo humne build kiya, localhost par running live demo, aur apne complete results aur statistics — sab kuch detail mein."

📺 **Show:** PowerPoint Slide 2 (Agenda)

> "aaj ka agenda 12 sections par mushtamil hai. Problem aur objectives se shuru karenge, phir domain analysis, system architecture, product backlog, Scrum methodology, VS Code codebase walkthrough, full live application demo, algorithms deep dive, data dictionary walkthrough, sab 9 sprints ke highlights, results aur statistics, aur aakhir mein conclusion aur future work. to bagair waqt zaaya kiye shuru karte hain."

---

# ═══════════════════════════════════════
# PART 2 — Masla aur Maqasid (Problem & Objectives)
# Speaker: Muhammad Haris | ⏱ ~8 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 3 (The Problem)

**MH:**

> "aayein problem se shuru karte hain. Artificial Intelligence systems ka enterprise environments mein teezi se phailaao governance frameworks ki development se bohat aage nikal gaya hai. Organizations jo AI deploy kar rahi hain unhen mounting regulatory pressure ka samna hai — khas taur par European Union mein jahan EU AI Act 2024 mein enforceable hua aur high-risk AI systems ke liye structured risk assessments, documentation, human oversight mechanisms, aur post-market monitoring laazmi qarar deta hai."

> "ISO 42001 — jo 2023 mein publish huyi aur AI Management Systems ke liye duniya ki pehli international standard hai — aur ISO 27001 information security ke liye, compliance ki mazeed layers add karte hain. aur America mein NIST AI Risk Management Framework chaar functions ke zariye AI lifecycle cover karta hai: Govern, Map, Measure, aur Manage."

> "zara ek real scenario sochen — ek hospital lagata hai ek AI system cancer diagnosis ke liye. wo system galat diagnosis de deta hai. agar koi governance na ho, koi audit trail na ho, koi risk assessment na ho — to patient ki jaan daao par lag jaati hai aur hospital ko EU AI Act ki violation ka samna hota hai. yahi wo real-world consequence hai jise prevent karna in regulations ka maqsad hai. aur yahi problem Aegis.AI hal karta hai."

> "humne paanch core governance problems identify ki:"

> "**Problem 1: Regulatory Complexity.** charon frameworks ke saath compliance ke liye ek saath saikron controls, assessments, aur evidence items track karne padte hain. koi ek dashboard nahin jahan organization apni poori compliance posture dekh sake."

> "**Problem 2: Centralized Oversight ki kami.** AI models, risks, vendors, aur policies alag alag spreadsheets aur disconnected tools mein manage ho rahe hain — koi unified view nahin, koi audit trail nahin."

> "**Problem 3: koi Self-Hostable Alternative nahin.** Credo AI, Holistic AI, IBM OpenScale, OneTrust AI — ye sab cloud-only SaaS products hain enterprise pricing ke saath. wo organizations jinhen data sovereignty chahiye — khas taur par government bodies — legally apna governance data kisi third-party cloud par nahin bhej saktin."

> "**Problem 4: Manual aur Error-Prone Audits.** maujuda audit processes manual, time-consuming, aur inconsistent hain — compliance gaps aur reporting delays ka baais bante hain."

> "**Problem 5: Built-In AI Safety Evaluation nahin.** LLM behaviour evaluate karne ke liye, AI-generated code detect karne ke liye, aur waqt ke saath model quality monitor karne ke liye koi integrated tools nahin."

> "hamara conclusion: ek comprehensive, self-hostable AI governance platform ki zarurat hai jo compliance management, risk tracking, vendor oversight, model evaluation, aur policy governance ko ek hi system mein centralize kare. aur yahi bilkul Aegis.AI provide karta hai."

📺 **Show:** PowerPoint Slide 4 (Objectives)

> "hamare das buniyadi maqasid the: pehla — ek full-stack governance platform jo ek interface se charon major compliance frameworks support kare. doosra — AI Model Inventory maa risk assessment aur version history. teesra — Vendor Management module. chautha — Policy Manager maa lifecycle management aur control linking. paanchwaan — AI Advisor, ek LLM-powered chatbot jo tool calling se context-aware governance recommendations de. chatha — LLM Evaluations module aur Arena jo DeepEval se model benchmarking kare. saatwan — AI Detection Module jo GitHub repositories ko AI-generated code ke liye scan kare. aathwan — PostgreSQL schema-per-tenant multi-tenancy. nauwaan — Docker aur Kubernetes deployment. daswan — PDF aur DOCX compliance report generation."

> "ye das maqasid hamare 20 EPICs aur 58 user stories se directly map hote hain — jo Farhana thodi der mein cover karengi."

---

# ═══════════════════════════════════════
# PART 3 — Domain Analysis aur Architecture
# Speaker: Ahmed Abdullah Khan | ⏱ ~12 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 5 (Customers & Stakeholders)

**AAK:**

> "Shukriya Haris. Main Ahmed Abdullah Khan hoon. ab main domain analysis aur phir system architecture detail mein cover karoonga."

> "Aegis.AI chaar customer segments ko target karta hai. pehla — wo technology companies jo AI products build kar rahi hain aur EU AI Act compliance chahiye. doosra — regulated industries jaise banking, healthcare, manufacturing, public sector jo third-party ya in-house AI integrate kar rahi hain. teesra — wo industries jahan AI use sectoral oversight ke taabe hai. chautha — government aur public sector bodies jo citizen-facing services mein AI deploy kar rahi hain jinhen transparency aur human oversight darkaar hai."

> "hamara stakeholder model das actor types cover karta hai. Admin jise full platform control haasil hai: organizations create karna, users manage karna, approval workflow templates banana, API tokens aur LLM keys manage karna. Editor ya AI Governance Officer: rozana ki governance — controls fill karna, risks create karna, vendors aur policies manage karna. Reviewer: submissions review aur approve ya reject karna. Auditor: read-only access aur compliance reports generate karna. End Users: tasks ke assignees. External Vendors, Regulatory Bodies, LLM Providers jaise OpenAI aur Anthropic baahari stakeholders hain. IT/DevOps team deployment ke liye. aur System background workers automated jobs karte hain — PMM scheduling, automation rule execution, email notifications."

📺 **Show:** PowerPoint Slide 6 (Feature Comparison)

> "hamara competitor comparison dikhata hai ke IBM OpenScale primarily cloud-hosted hai, fairness aur drift monitoring tak mahdood. Credo AI SaaS-only hai, partial ISO support ke saath. Holistic AI SaaS, partial NIST aur ISO. OneTrust AI enterprise SaaS, partial multi-framework. Aegis.AI wahid platform hai jo ye sab ek saath offer karta hai: complete EU AI Act, complete ISO 42001, complete ISO 27001, complete NIST AI RMF, integrated LLM Evaluation aur Arena, AI Detection Module, full multi-tenancy, aur on-premises deployment — muft aur self-hosted."

📺 **Show:** `Final Aegis-develop.docx` → Section 5.1 C4 Level 1 Diagram

> "C4 Level 1 architecture mein teen independently deployable services hain. React SPA port 5173 par Vite ke saath — initial load 2 seconds se kam. ye REST/JSON ke zariye Node.js TypeScript backend se communicate karti hai jo port 3000 par hai, aur directly Python FastAPI EvalServer se — port 8000. Backend mein 60 active route modules hain, JWT plus RBAC middleware, aur tenant identification middleware. PostgreSQL port 5432 par schema-per-tenant isolation ke saath — har organization ka apna dedicated schema. Redis port 6379 par BullMQ job queues aur SSE Pub/Sub dono ke liye."

📺 **Show:** Section 5.2 C4 Level 2 Container Diagram

> "C4 Level 2 mein React 18 SPA hai Vite, Material UI, Redux Toolkit plus redux-persist, React Query v5, aur React Router v6 ke saath — 50 se zyada pages. Backend Node.js 22.x hai Express 4.x, TypeScript 5.x, aur Sequelize 6.x ORM ke saath. EvalServer Python FastAPI hai DeepEval framework ke saath — LLM benchmarking, Arena comparisons, aur Bias aur Fairness evaluations ke liye."

📺 **Show:** Section 5.3 C4 Level 3 Component Diagram

> "ye hamara enterprise-grade architecture ka asal saboot hai — C4 Level 3 component decomposition. Backend API container ke andar 8 major components hain. Auth Middleware: JWT validate karta hai aur user identity extract karta hai har request par. Tenant Middleware: PostgreSQL schema search path set karta hai. RBAC Middleware: user ka role check karta hai route ki required permission ke khilaf — aur fauran 403 return karta hai agar authorized na ho. 60 Route Modules: tamam 17 feature domains ke endpoints define karte hain. Controllers: request aur response handle karte hain aur Models aur Services ko delegate karte hain. SSE Publisher: Redis Pub/Sub ke zariye subscribed browser clients ko real-time events deliver karta hai. PMM Scheduler: BullMQ worker — hourly cron job jo PMM cycles create karta hai aur due notifications bhejta hai. PDF Generator: Playwright se styled HTML governance reports render karta hai aur PDF print karta hai."

📺 **Show:** Section 5.4 Clean Architecture Flowchart

> "Clean Architecture mein bilkul 4 layers hain. Presentation Layer mein 60 Express route modules aur teen middleware files hain. Application Layer mein controllers aur domain services hain — SSE service, Slack service, PMM scheduler, PDF generator. Domain Layer mein Sequelize models, TypeScript interfaces, shared enumerations, aur business rules hain — risk formula L×1 plus S×3, aur PMM escalation logic. Infrastructure Layer baahir ki ring hai: PostgreSQL, Redis, email services, LLM APIs. sab se aham baat — dependencies sirf inward point karti hain. is ka matlab hai hum PostgreSQL ko kisi aur database se replace kar sakte hain bagair ek bhi business logic line touch kiye."

📺 **Show:** Section 5.4 ERD Mermaid Diagram

> "Entity Relationship Diagram mein 15 major table groups hain. sab se oopar Organizations ke bohat se Users aur Projects hain. Projects ke bohat se ProjectRisks hain — har ek ke saath RiskHistory snapshot table aur RiskChangeHistory audit table. Projects ke VendorRisks, ModelInventories, ApprovalRequests, Tasks, Incidents, aur PMM configurations bhi hain. ApprovalWorkflows ke ApprovalWorkflowSteps hain aur wo ApprovalRequests generate karte hain jin ke ApprovalRequestSteps hain. Policies ke PolicyLinkedObjects hain — koi bhi policy kisi bhi framework control ya risk se link ho sakti hai — aur PolicyChangeHistory. PMM configurations PMM Questions define karte hain, PMM Cycles generate karte hain, jo PMM Responses collect karte aur PMM Reports produce karte hain."

📺 **Show:** Section 5.7 DFD Level 1

> "DFD Level 1 Aegis.AI ko 8 major internal processes aur 4 data stores mein decompose karta hai. P1: Authentication aur User Management. P2: Compliance Framework Management — EU AI Act, ISO, NIST. P3: Risk aur Vendor Management. P4: LLM Evaluation aur AI Advisory. P5: Reporting aur Document Generation. P6: Automation aur Notification Engine. P7: Post-Market Monitoring. P8: AI Detection aur Repository Scanning. 4 data stores: DS1 — PostgreSQL public schema, DS2 — PostgreSQL tenant governance data, DS3 — Redis, DS4 — EvalServer database."

> "Multi-tenancy ke baare mein: jab koi organization register karti hai to system ek dedicated schema create karta hai — 10-character cryptographically random hash ke saath, org name nahin — security ke liye. Tenant Middleware JWT se org ID extract karta hai phir PostgreSQL search_path set karta hai. ye database engine level par enforce hota hai — do tenants physically ek doosre ka data access nahin kar sakte kisi bhi application-level bug ke bawajood. humne 15 cross-tenant access tests kiye — sab 15 correctly blocked hue."

---

# ═══════════════════════════════════════
# PART 4 — Product Backlog aur Scrum
# Speaker: Farhana Minhas | ⏱ ~6 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 9 (Backlog Summary) + Final Aegis-develop.docx Section 3.3

**FM:**

> "Shukriya Ahmed. Main Farhana Minhas hoon, F2022376126. main aap ko bataaongi ke humne Scrum ke zariye development kaise plan aur manage ki."

> "hamara product backlog hierarchy 20 EPICs se 58 individual User Stories tak jaati hai. har story is format mein hai: As a role, I can do something, so that benefit. har story mein Priority, Acceptance Criteria jo exactly wo conditions define karti hain jin par story complete hogi, Story Points, aur Status hai."

> "20 EPICs poore AI governance lifecycle cover karte hain. EPIC 1 — User Management aur RBAC. EPIC 2 — Multi-Tenancy aur Organization Management. EPIC 3 — Approval Workflows. EPIC 4 — Framework Management jo charon regulations cover karti hai. EPIC 5 — Risk Management. EPIC 6 — Vendor Management. EPIC 7 — Policy Management. EPIC 8 — AI Model Inventory. EPICs 9, 10, 16, 17 — LLM Evaluations, AI Advisor, AI Detection Module, aur Bias and Fairness — ye Phase 2 features hain. EPIC 11 — Search aur Navigation. EPIC 12 — Reporting aur Dashboard. EPIC 13 — Shared Collaboration. EPIC 14 — Automations aur Notifications. EPIC 15 — Incident Management aur Training Registry. EPIC 18 — Post-Market Monitoring. EPIC 19 — Policy Templates. EPIC 20 — WatchTower Event Tracker."

> "Phase 1 mein humne 43 user stories mukammal ki — 230 story points — aur tamam live browser user acceptance testing se verify huin. 15 stories yaani 114 story points Phase 2 ke liye deferred ki gayi hain kyunke unhen external infrastructure chahiye: LLM API keys, SMTP servers, running MLflow instance, Slack webhooks, GitHub tokens. lekin in sab features ke UIs fully built hain — ye gracefully degrade karte hain jab external dependency absent ho."

📺 **Show:** PowerPoint Slide 10 (Sprint Timeline)

> "Development 9 two-week sprints mein organize ki — November 15, 2025 se March 20, 2026 tak. Scrum Master role rotate raha: Muhammad Haris ne Sprints 1, 4, aur 7 lead ki. Ahmed Abdullah Khan ne Sprints 2, 5, aur 8 lead ki. Maine Sprints 3, 6, aur 9 lead ki. har sprint mein poore Scrum ceremonies hue: Planning Meeting, Daily Standups, Sprint Review jis mein Sir Usama Ahmad Product Owner ka role ada karte the, aur Retrospective. Sprint health consistently 4 se 5 out of 5 raha."

📺 **Show:** PowerPoint Slide 11 (Team Contributions)

> "Individual contributions mein: Muhammad Haris ne monorepo setup, JWT authentication with refresh tokens, Sequelize ORM and migrations, Approval Workflows engine, Risk Management scoring algorithm, PDF report generation, aur Global Search kiya. Ahmed Abdullah Khan ne Docker Compose, Kubernetes manifests, RBAC middleware, EU AI Act seeding and control engine, ISO 42001 aur ISO 27001 implementations, NIST AI RMF seeding, Model Inventory, SSE notification system with Redis Pub/Sub, aur DOCX report generation kiya. Maine poora frontend React component architecture 50+ pages ke saath, Login aur Registration UI, Vendor Management UI, Policy Manager UI, WatchTower event tracker frontend, Command Palette, Reporting UI, aur tamam 20 Figma prototype designs banaye."

---

# ═══════════════════════════════════════
# PART 5 — Figma Designs Showcase
# Speaker: Farhana Minhas | ⏱ ~2 min
# ═══════════════════════════════════════

📺 **Open:** Figma design link ya Final Aegis-develop.docx Section 3.4 screenshots

**FM:**

> "Live demo se pehle, main briefly un Figma prototype designs ka zikr karongi jo maine develop ki. aap dark professional theme dekh sakte hain — dark navy backgrounds, teal accent colors, Inter typography. Login page Aegis.AI shield logo ke saath, Dashboard risk distribution charts ke saath, Overview page use case cards ke saath, Risk Management registry color-coded severity levels ke saath, Policy Manager lifecycle view, AI Trust Center public page, LLM Evaluations dashboard, WatchTower event tracker, Approval Workflows inbox, aur Settings page. tamam 20 screens development se pehle aur is ke dauran design ki gayi — React implementation guide karne ke liye."

---

# ═══════════════════════════════════════
# PART 6 — VS Code: Codebase Walkthrough
# Speaker: Muhammad Haris | ⏱ ~7 min
# ═══════════════════════════════════════

📺 **Switch to:** VS Code — `d:\aegis-develop`

**MH:**

> "ab main VS Code par switch karta hoon taake live application se pehle aap ko codebase dikha sakoon."

📺 **Show:** Root folder in Explorer

> "Repository root mein teen application directories hain. `Clients` — React TypeScript frontend. `Servers` — Node.js TypeScript backend. `EvalServer` — Python FastAPI evaluation server. saath mein `Figma-Designs` sab Figma screenshots ke saath, `Final-Documentation` hamara FYP report, `kubernetes/.k8s` production deployment manifests ke saath, aur `docker-compose.yml` root mein."

📺 **Open:** `Servers/index.ts` briefly

> "Backend entry point Express initialize karta hai, PostgreSQL se Sequelize ke zariye connect hota hai, Redis se connect hota hai, phir tenant middleware aur JWT middleware register karta hai, aur aakhir mein 60 independent route modules mount karta hai. Platform ka har feature apni dedicated route file rakhta hai — ye hamari application layer boundary hai."

📺 **Show:** `Servers/` folder structure

> "Folder names directly Clean Architecture layers reflect karte hain. `routes/` — Presentation Layer — 60 route files. `controllers/` — Application Layer — request handlers jin mein koi business logic nahin. `domain.layer/models/` — Domain Layer — har entity ke Sequelize ORM models: users, projects, risks, vendors, approval workflows, policies, PMM configs. `services/` — shared infrastructure: SSE publisher service, Slack service, PDF generator using Playwright, PMM scheduler. `jobs/` — BullMQ workers. `advisor/` — AI Advisor tool function definitions function calling ke liye."

📺 **Expand:** `Servers/routes/` folder

> "Route files yahan hain: users, roles, projects, eu-ai-act, iso-42001, iso-27001, nist-ai-rmf, projectRisks, riskHistory, risk-change-history, vendorRisks, vendors, policies, modelInventory, modelRisks, approvalWorkflows, approvalRequests, notifications, reporting, evidenceHub, notes, tasks, ai-incidents, training, post-market-monitoring, automations, slackWebhooks, integrations mlflow aur github ke liye, aiDetection, aiTrustCentre, ceMarking, entityGraph, search, llm-keys, deepeval, evaluation-llm-keys, advisor, logger, dashboard, shares, file-manager. 60 active route modules — 66 utility routes samait."

📺 **Open:** `Servers/middleware/` — jwtAuth.ts, rbac.ts, tenantScope.ts

> "teen core middleware files har request ko is sequence mein secure karti hain. pehle `jwtAuth.ts` incoming JWT token verify karti hai — signature, expiry check karti hai aur user ID, role, aur organization ID extract karti hai. phir `tenantScope.ts` us org ID ko le kar PostgreSQL ko `SET search_path TO <tenant_schema>` issue karti hai — is organization ki private schema tak tamam queries scope karti hai. phir `rbac.ts` user ka role load karke check karti hai ke is role ko specific route ki required permission hai ya nahin — agar nahin to fauran 403 return karti hai. ye teen-layer security chain har single request par chalti hai."

📺 **Open:** `Servers/.env.example` briefly

> "Environment variables poori integration picture reveal karti hain. `DATABASE_URL` PostgreSQL ke liye. `REDIS_URL` Redis ke liye. `JWT_SECRET` tokens sign karne ke liye. `OPENAI_API_KEY` aur `ANTHROPIC_API_KEY` AI Advisor ke liye — dono optional. `SLACK_WEBHOOK_URL` automation notifications ke liye. `EMAIL_PROVIDER` — `ses`, `smtp`, `azure`, ya `resend` — completely modular. `GITHUB_TOKEN` AI Detection Module ke liye. `MLFLOW_TRACKING_URI` model metadata sync ke liye. `SSL_KEY_PATH` aur `SSL_CERT_PATH` production HTTPS ke liye."

📺 **Open:** `kubernetes/.k8s/` folder

> "Kubernetes manifests ki baat karein to yahan aath manifest files hain: `deployment.yaml` Node.js backend ke liye, `client-deployment.yaml` React Nginx frontend ke liye, `evalserver-deployment.yaml` Python FastAPI ke liye, `worker-deployment.yaml` BullMQ background worker ke liye ek separate scalable deployment mein, `postgres-deployment.yaml` StatefulSet with persistent volume, `redis-deployment.yaml`, `ingress.yaml` Nginx Ingress with SSL termination, aur `hpa.yaml` — Horizontal Pod Autoscaler backend ke liye. is ka matlab hai Aegis.AI production mein horizontally scale kar sakta hai — AWS EKS, Azure AKS, ya self-hosted Kubernetes cluster par."

📺 **Open:** `docker-compose.yml` briefly

> "Docker Compose file mein paanch services hain health checks ke saath: postgres, redis, Node.js server, React frontend via Nginx, aur Python evalserver. ek command — `docker-compose up -d` — aur poori platform start ho jaati hai, fully networked. ye directly hamara self-hosted deployment objective deliver karta hai."

---

# ═══════════════════════════════════════
# PART 7 — Live Demo: Running Application
# Speaker: Ahmed Abdullah Khan | ⏱ ~15 min
# ═══════════════════════════════════════

📺 **Switch to:** Browser — `http://localhost:5173`

**AAK:**

> "ab live application. Port 5173 par frontend aur port 3000 par API running hai. ye login page hai — dark theme, Aegis.AI shield logo, Farhana ka design."

📺 **Log in** → Dashboard

> "Admin test account se login karte hain. Dashboard par aa gaye — yahan organization-wide metrics dikhte hain: total use cases, risk score distribution by level, compliance progress by framework, vendor count, aur recent activity — sab kuch is organization ke PostgreSQL schema se scoped hai."

📺 **Navigate:** Overview (Use Cases)

> "Overview tamam Use Cases dikhata hai — yahi hamari terminology hai AI systems ke liye jin ki governance ho rahi hai. har card mein auto-generated UC-ID hai — UC-1, UC-2 waghaira — owner, risk classification, aur status. ek par click karte hain."

📺 **Click** a use case → EU AI Act tab

> "Use case ke andar tabs hain compliance frameworks ke liye. EU AI Act tab mein 13 control categories dikhti hain: Data Governance, Technical Documentation, Transparency aur Provision of Information, Human Oversight, Accuracy aur Robustness, Cybersecurity, Conformity Assessment, Fundamental Rights Impact Assessment — aur mazeed. ek category par click karte hain aur controls dikhte hain apni status ke saath."

📺 **Click** one control → show status dropdown

> "har control lifecycle states mein move karta hai: Waiting → In Progress → Under Review → Done. ya N/A mark ho sakta hai mandatory justification ke saath. ye transitions exactly EU AI Act ke systematic conformity assessment documentation requirements match karte hain. har transition timestamp aur user ke saath log hoti hai."

📺 **Navigate:** Risk Management

> "Risk Management mein risk registry dikhti hai. har risk ka naam, owner, likelihood 1 se 5 tak — Rare se Almost Certain — aur severity 1 se 5 tak — Negligible se Catastrophic. Platform automatically risk level calculate karta hai formula se: Risk Score equals Likelihood times 1 plus Severity times 3. Severity ko teen guna weight dete hain kyunke AI governance mein impact zyada aham hai frequency se. View History par click karein — is risk mein ki gayi har tabdeeli yahan hai — complete version control."

📺 **Navigate:** Approval Workflows

> "Approval Workflows mein Editor ek use case ya risk formal sign-off ke liye submit karta hai. Admin pehle se multi-step workflow templates configure karta hai — 5 sequential approval steps tak, har step kisi role ko assigned. Submission par assigned approver ko real-time notification milti hai bell icon par — hamare SSE aur Redis Pub/Sub pipeline se 100 milliseconds se kam mein. Approver step by step approve kar sakta hai, reject with comment, ya submitter withdraw kar sakta hai. har state transition internally track hoti hai — pending, approved, rejected, withdrawn."

📺 **Navigate:** Policy Manager

> "Policy Manager mein AI policies jaati hain: Draft → Under Review → Approved → Published → Archived. Policies directly EU AI Act controls, ISO clauses, ya risks se link ho sakti hain — governance decision aur regulatory control ke darmiyan full traceability. Sprint 6 ne reusable policy templates introduce kiye jo AI governance best practices se pre-populated hain."

📺 **Navigate:** AI Model Inventory

> "AI Model Inventory organization mein deploy tamam AI models ki registry hai. har model entry mein naam, version, model type, owner, linked use case, aur status hai. Version history automatically track hoti hai — har update ek `model_inventory_history` snapshot create karta hai. Model-level risks bhi track hote hain same auto-calculation formula se."

📺 **Navigate:** Post-Market Monitoring

> "Post-Market Monitoring — ye EU AI Act Articles 9 aur 72 ke directly aligned hai. yahan aap active PMM configurations dekhte hain. har configuration mein frequency hai — har 30 days, har month — reminder_days jab stakeholder ko reminder bheja jaye, escalation_days aur escalation contact. System automatically har cycle banata hai, questionnaire email bhejta hai, reminders aur escalation alerts karta hai, aur submission par PDF audit report generate karta hai."

📺 **Navigate:** Incident Management

> "AI Incident Management mein governance incidents log hoti hain — AI system failures, bias incidents, regulatory violations, ya anything jo formal escalation ki zarurat ho. har incident mein severity, status lifecycle, aur linked use case hai. Training Registry ke saath ye NIST AI RMF ka GOVERN function implement karta hai."

📺 **Navigate:** Automations

> "Automations mein event-driven rules hain. Admin koi bhi trigger define kar sakta hai — jaise RISK_CREATED, condition jaise risk_level equals Very High — aur phir actions: SEND_SLACK, SEND_EMAIL, CREATE_TASK, CALL_WEBHOOK. ye no-code governance automation hai platform ke andar."

📺 **Navigate:** WatchTower Event Tracker

> "WatchTower real-time audit log hai. har governance action yahan capture hota hai — logins, use case changes, risk updates, approval decisions, policy status transitions — actor, action type, affected entity, aur ISO 8601 timestamp ke saath. System Logs tab bhi hai filterable by severity level."

📺 **Navigate:** AI Trust Center

> "AI Trust Center ek public-facing transparency page hai — bagair login ke accessible. Admin ise configure karta hai AI systems ki list, sub-processor organizations, documentation links, aur certification claims ke saath. ye directly EU AI Act transparency obligations support karta hai."

📺 **Navigate:** Settings → LLM Keys, Email Config tabs

> "Settings page modular configuration system dikhata hai. Admin LLM API keys add kar sakta hai OpenAI, Anthropic, ya OpenRouter ke liye. Separate Evaluation LLM keys EvalServer ke liye. Email provider configuration — SMTP, AWS SES, Azure Email, ya Resend mein se koi. Slack webhook automation ke liye. aur API tokens programmatic access ke liye. ye modular architecture ka matlab hai platform bagair kisi LLM key ke bhi fully functional run karta hai — tamam AI features gracefully degrade hote hain."

---

# ═══════════════════════════════════════
# PART 8 — Algorithms Deep Dive
# Speaker: Muhammad Haris | ⏱ ~10 min
# ═══════════════════════════════════════

📺 **Show:** Final Aegis-develop.docx Section 6.3 Algorithms

**MH:**

> "ab main wo paanch core algorithms explain karoonga jo Aegis.AI ko power karte hain — ye sab hamare FYP report ke Section 6.3 mein documented hain."

📺 **Show:** Final Aegis-develop.docx → Section 6.3 → Algorithm 1 (Risk Level Auto-Calculation) decision table
📺 **Also Show:** Browser → Risk Management → koi bhi risk entry kholo aur Likelihood + Severity fields dikhao

> "**Algorithm 1: Risk Level Auto-Calculation.** ye central scoring algorithm hai jo teen risk dimensions mein use hota hai — project risks, vendor risks, aur model risks. Formula ye hai: Risk Score equals Likelihood times 1 plus Severity times 3. Likelihood aur Severity dono 1-to-5 enumerations hain. Likelihood values: 1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain. Severity values: 1=Negligible, 2=Minor, 3=Moderate, 4=Major, 5=Catastrophic. Score thresholds: 4 ya kam = Very Low. 5 se 8 = Low. 9 se 12 = Medium. 13 se 16 = High. 17 ya zyada = Very High. Severity ko teen guna weight diya kyunke AI governance mein impact frequency se zyada aham hai. humne 25 risk entries test ki — sab 25 ka 100% correctly calculated level nikla."


📺 **Show:** Final Aegis-develop.docx → Section 6.3 → Algorithm 2 (AI Advisor Context Injection) flowchart
📺 **Also Show:** Browser → AI Advisor page → chatbot interface aur sidebar context panel dikhao

> "**Algorithm 2: AI Advisor Context Injection.** AI Advisor sirf LLM ko message forward nahin karta. Process ke 6 steps hain. Step 1: current use case data fetch karo — open risks ki count, framework completion percentages, active use cases, outstanding tasks. Step 2: ise structured system prompt prefix ke taur par conversation se pehle inject karo. Step 3: last N turns ki conversation history append karo continuity ke liye. Step 4: configured LLM provider call karo — OpenAI, Anthropic, ya OpenRouter — organization ki stored API key se `api/llm-keys` se. Step 5: response React frontend ko SSE ke zariye stream karo real-time chatbot experience ke liye. Step 6: agar Advisor koi tool call kare — jaise `getRisksByProject`, `getVendorList`, ya `getFrameworkProgress` — backend tool execute karta hai, result inject karta hai, aur generation continue karta hai. is ka matlab hai Advisor 'is hafte mere kaun se risks Critical hain?' jaise questions live data se answer kar sakta hai."


📺 **Show:** Final Aegis-develop.docx → Section 6.3 → Algorithm 3 (LLM Evaluation Scoring Pipeline) diagram
📺 **Also Show:** Browser → LLM Evaluations page → test cases table aur metrics scores dikhao

> "**Algorithm 3: LLM Evaluation Scoring Pipeline.** ye EvalServer algorithm hai DeepEval framework ke saath. Step 1: test dataset load karo — question-answer-context triplets jo user ne upload ki hain. Step 2: har item target LLM ko bhejo jo evaluate ho raha hai. Step 3: har response configured metrics ke khilaf score karo — Correctness, Faithfulness, Hallucination Rate, aur Bias. Step 4: tamam test cases mein har metric ke results aggregate karo. Step 5: EvalServer database mein comparison view ke liye results store karo. Step 6: Arena mode ye pipeline do models ke liye simultaneously chalata hai aur side-by-side comparison render karta hai. Evaluation LLM key — main Advisor key se alag — scoring calls ke liye judge model ke taur par use hoti hai."


📺 **Show:** Final Aegis-develop.docx → Section 6.3 → Algorithm 4 (PMM Scheduler) flowchart
📺 **Also Show:** Browser → Post-Market Monitoring → active PMM configuration kholo aur cycle status dikhao

> "**Algorithm 4: Post-Market Monitoring Scheduler.** BullMQ cron job har ghante `0 * * * *` par chalta hai. Step 1: tamam active PMM configurations query karo jahan configured `notification_hour` current UTC hour match karta ho. Step 2: jin configurations ka koi active cycle nahin unhen naya cycle create karo aur stakeholder ko initial questionnaire email bhejo link aur deadline ke saath. Step 3: active cycles ke liye `reminder_days` threshold check karo — agar cycle due date se N days ke andar hai to reminder email bhejo. Step 4: agar cycle ko `escalation_days` guzar gaye bagair response ke to `escalation_contact` ko escalation alert bhejo. Step 5: jab stakeholder cycle submit kare to EJS template plus Playwright se PDF audit report generate karo aur PMM reports archive mein store karo. ye algorithm directly EU AI Act Articles 9 aur 72 implement karta hai."


📺 **Show:** Final Aegis-develop.docx → Section 6.3 → Algorithm 5 (Automation Rule Engine) event-flow diagram
📺 **Also Show:** Browser → Automations page → existing rule kholo aur trigger/condition/action fields dikhao

> "**Algorithm 5: Automation Rule Engine.** Event-driven, no-code governance automation. Step 1: koi governance event system mein kahin bhi fire ho — maslan `RISK_CREATED`, `TRAINING_ADDED`, `PROJECT_UPDATED`, `INCIDENT_LOGGED`. Step 2: engine us tenant ke tamam automation rules query kare. Step 3: har rule ke liye event payload ke khilaf condition filter evaluate kare — maslan 'risk_level equals Very High'. Step 4: tamam matching rules ke liye action sequence in order execute kare — `SEND_SLACK`, `SEND_EMAIL`, `CREATE_TASK`, ya `CALL_WEBHOOK`. Step 5: execution results aur errors automation history table mein log hon. ye design complex no-code governance workflows allow karta hai — maslan: 'jab bhi Very High risk create ho, Slack par notify karo AND remediation task create karo AND escalation email bhejo.'"

📺 **Show:** Section 6.4 Constraints

> "Documentation mein hamare constraints bhi specified hain. Technical constraints: PostgreSQL 14 ya zyada JSONB features aur schema-based multi-tenancy ke liye. Redis required hai. LLM API keys optional hain — tamam AI features gracefully degrade karte hain. Playwright PDF generation ke liye server-side required hai. Maximum file upload 10 MB hai. Security constraints: passwords bcrypt 10 rounds se hash hote hain. JWT tokens 24 hours baad expire hote hain. Auth endpoints par rate limiting: 100 requests per 15-minute window per IP. Helmet.js tamam HTTP security headers enforce karta hai. Regulatory constraint: Aegis.AI Business Source License 1.1 ke tehat release hua — use muft hai, commercial SaaS resale ke liye 4 saal baad commercial license darkaar hai."

---

# ═══════════════════════════════════════
# PART 9 — Data Dictionary aur Approval Sequence
# Speaker: Ahmed Abdullah Khan | ⏱ ~5 min
# ═══════════════════════════════════════

📺 **Show:** Final Aegis-develop.docx Section 5.8 Data Dictionary

**AAK:**

> "ab main hamari data dictionary aur approval workflow sequence diagram walk through karoonga — ye hamari technical depth ka aham hissa hai."

> "Data dictionary mein hum kuch key tables dekhte hain. `projects` table — yaani Use Cases — mein `uc_id` hai jo auto-generated VARCHAR UNIQUE hai UC-1 format mein, `ai_risk_classification` ek ENUM hai Prohibited, High risk, Limited risk, Minimal risk ke saath, `type_of_high_risk_role` ek ENUM hai — Deployer, Provider, Distributor, Importer — ye EU AI Act ki terminology directly hai. `pending_frameworks` ek JSONB column hai jo approval ke liye pending frameworks track karti hai."

> "`project_risks` table mein `likelihood` ENUM hai Rare/Unlikely/Possible/Likely/Almost Certain ke saath, `severity` ENUM hai Negligible/Minor/Moderate/Major/Catastrophic ke saath, aur `risk_level_autocalculated` ENUM hai jo backend automatically compute karta hai L×1 plus S×3 formula se. `mitigation_status` track karta hai Not Started/In Progress/Completed/On Hold. aur `ai_lifecycle_phase` column AI lifecycle ka wo phase record karta hai jis mein ye risk exist karta hai."

> "`post_market_monitoring_configs` table mein: `frequency_value` INTEGER hai default 30 ke saath, `frequency_unit` ENUM hai days/weeks/months, `reminder_days` INTEGER hai due date se pehle weeks ki tadaad, `escalation_days` INTEGER hai overdue hone ke baad escalation tak, aur `escalation_contact_id` FK hai us user ko jise escalation alerts milte hain."

📺 **Show:** Final Aegis-develop.docx Section 5.5 Approval Workflow Sequence Diagram

> "ab approval workflow sequence diagram step by step. Editor React Frontend mein Use Case ya Risk submit for Approval karta hai. Frontend `POST /api/approval-requests` Backend ko bhejta hai. Backend PostgreSQL mein ApprovalRequest create karta hai status pending ke saath aur entity status pending_approval mein update karta hai. phir Backend Redis mein notification event publish karta hai. Redis SSE channel ke zariye broadcast karta hai. Backend Approver ko real-time SSE notification deliver karta hai. Approver pending approval request kholta hai — Frontend `GET /api/approval-requests/:id` call karta hai — Backend request plus entity details fetch karta hai aur return karta hai. agar Approver Approve kare: step status approved hota hai, Backend check karta hai ke sab steps complete hain ya nahin, entity approved hoti hai, aur Redis ke zariye Editor ko real-time notification milti hai Approved ki. agar Reject kare: request rejected hota hai, entity previous state mein revert hoti hai, aur Editor ko Rejected ki notification milti hai."

---

# ═══════════════════════════════════════
# PART 10 — Sprint Highlights (Tamam 9 Sprints)
# Speaker: Farhana Minhas | ⏱ ~8 min
# ═══════════════════════════════════════

📺 **Show:** Final Aegis-develop.docx ya PowerPoint Slide 12 (Sprint Summary)

**FM:**

> "ab main tamam 9 sprints ke technical decisions walk through karongi."

> "**Sprint 1** — Foundation. Muhammad Haris — Scrum Master. Monorepo initialize hua, Docker Compose configure hua, JWT authentication with refresh tokens build hui, RBAC middleware chaar roles ke liye deploy hua, Sequelize ORM migration system set up hua. Supervisor feedback: 'Authentication solid; requested RBAC be demonstrated with actual routes in Sprint 2.' 18 story points committed, 18 delivered — password reset email deferred kiya gaya."

> "**Sprint 2** — Multi-Tenancy, Approvals, aur SSE. Ahmed — Scrum Master. aham achievement schema-per-tenant implementation thi. Sprint 2 class diagram hamara ApprovalWorkflow, ApprovalWorkflowStep, ApprovalRequest, aur ApprovalRequestStep data model dikhata hai. Sequence diagram poora approval flow dikhata hai Editor submission se Redis Pub/Sub tak Approver ki real-time SSE notification tak — 100ms se kam mein. 39 story points — 100% delivered."

> "**Sprint 3** — EU AI Act. Farhana — Scrum Master. Reusable data seeder utility implement hui — Sprint 2 retrospective action item — jis ne team ko chaar ghante bachaye. Sprint 3 class diagram EUAIActCategory, EUAIActControl, EUAIActSubControl, aur AutoDriver class dikhata hai. Sequence diagram auto-fill flow dikhata hai Editor ke Auto-Fill click se OpenAI API call tak control database mein populate hone tak. 21 story points, 100% delivered."

> "**Sprint 4** — ISO 42001 aur ISO 27001. Muhammad Haris — Scrum Master. Same seeder pattern apply hua. ISO 42001 ka 7-stage workflow implement hua: Not Started → Initial Assessment → Gap Analysis → Remediation Planning → Implementation → Verification → Certified — har subclause ke liye. ISO 27001 ke 93 Annex A controls seed aur individually trackable."

> "**Sprint 5** — Risk Management. Ahmed — Scrum Master. Sprint 5 sequence diagram risk creation ka exact flow dikhata hai backend auto-calculation samit: Likelihood=4, Severity=4 deta hai Score 4+12=16, jo High risk level map karta hai. Severity=5 karo to 4+15=19 — Very High. har calculation change RiskHistory table mein snapshot hoti hai. Decision table tamam 25 likelihood-severity combinations enumerate karti hai. 31 story points committed, 31 delivered."

> "**Sprint 6** — Vendor Management, Policy Manager, Evidence Hub, Tasks. Farhana — Scrum Master. Sprint 6 sequence diagram policy lifecycle dikhata hai: Editor Draft create karta hai, review ke liye submit karta hai, Reviewer SSE notification paata hai, Reviewer approve karta hai, Editor publish karta hai. aham baat — Sprint 2 approval workflow engine reuse hua policy approvals ke liye — is se taqreeban do development days bache. 26 story points, 100%."

> "**Sprint 7** — AI Model Inventory aur NIST AI RMF. Muhammad Haris — Scrum Master. Sprint 7 class diagram ModelInventory, ModelInventoryHistory, aur NistAiRmfFunction with NistAiRmfCategory dikhata hai. NIST function mapping: GOVERN → Policy Manager, RBAC, Approval Workflows. MAP → Risk Management aur Use Cases. MEASURE → Risk Registry aur Scoring. MANAGE → Risk Mitigation aur PMM. 16 story points, 100%."

> "**Sprint 8** — LLM Evaluations aur AI Advisor UIs. Ahmed — Scrum Master. Deliberate UI-first strategy: live LLM connections ke bagair poori UI infrastructure build karo. LLM API keys AES-256 encrypted database mein store hoti hain. Supervisor feedback: 'UI-first approach allows demonstration — practical strategy.' 5 story points, 100%."

> "**Sprint 9** — Reporting, Search, AI Trust Center. Farhana — Scrum Master. PDF report generation Playwright se deliver hui — ek headless Chromium instance jo styled HTML governance report render karta hai aur PDF print karta hai. CI mein ek PDF formatting issue aayi rendering race condition ki wajah se — retry mechanism se fix hui. Command Palette Ctrl+K — global search 14 entity types mein: use cases, risks, vendors, policies, models, notes, evidence, incidents. Supervisor khas taur par Command Palette UX se impressed hue. 37 story points, 100%. aur ye sirf wo ek bug tha jo tamam 9 sprints mein reported hua — aur wo bhi usi sprint mein resolve hua."

---

# ═══════════════════════════════════════
# PART 11 — Results aur Statistics
# Speaker: Muhammad Haris | ⏱ ~7 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 15 (UAT Table) / Section 8

**MH:**

> "ab Phase 1 results aur test statistics mukammal taur par present karta hoon."

> "Correctness ki baat karein — yaani wo test cases jin ka output specification se bilkul match kiya. humne kul 258 test cases likhe. Suite ke hisab se: 45 Jest unit tests — backend models, utilities, controllers — sab 45 pass. 32 frontend component tests React Testing Library plus Mock Service Worker se — sab 32 pass. 28 API integration tests Supertest se Express server ke khilaf directly — sab 28 pass. 90 extended sprint test cases — har sprint ke 10, happy-path aur negative-path dono — sab 90 pass. 8 security audit checks — Helmet.js, CORS, rate limiting, bcrypt, JWT expiry — sab 8 pass. 10 PMM cron scheduler tests mukhtalif timezone configurations mein — sab 10 correct. 15 PDF generation tests — sab 15 retry mechanism se pass. Grand total: 258 likhe, 258 pass, 0 fail — 100% correctness."

📺 **Show:** Section 8.3 Sprint-by-Sprint Test Case Summary

> "Sprint-by-sprint extended test case summary: Sprint 1 se 9 tak, har sprint ke 10 test cases — sab 10 pass. 90 extended sprint test cases total — poore development period mein sifar failures."

📺 **Show:** System Accuracy Table (Section 8.2)

> "Accuracy — yaani system outputs ka expected outcome se match. User Acceptance Testing: 43 user stories browser testing se — 43 pass, 100%. Risk Level Auto-Calculation: 25 risk entries — 25 correct, 100%. Multi-Tenancy Data Isolation: 15 cross-tenant access attempts — sab 15 blocked, 100%. Approval Workflow Step Progression: 20 scenarios — sab 20 correct, 100%. PMM Cycle Auto-Scheduling: 10 cron trigger tests — 10 correct, 100%. RBAC Permission Enforcement: 30 unauthorized attempts — sab 30 blocked, 100%. SSE Real-Time Notification: 50 tests — 49 under 100ms, 1 missed Redis restart test par — 98%, reconnect logic se handle. PDF Report Accuracy: 15 reports — 14 fully accurate, 1 minor formatting drift Playwright race condition se — 93%, retry se fix. Overall Phase 1 system accuracy: taqreeban 99%."

📺 **Show:** Performance Benchmarks

> "Performance benchmarks: Simple GET requests — 50 milliseconds se kam. Complex governance queries — 2 seconds se kam. PDF generation Playwright se — 3 se 8 seconds. PMM PDF — taqreeban 3 seconds. LLM Evaluation per test case GPT-4o judge se — 5 se 15 seconds. SSE notification latency Redis Pub/Sub se — 100 milliseconds se kam. Frontend initial load Vite-optimized build se — 2 seconds se kam."

📺 **Show:** Feature Completeness Module Table

> "Feature completeness table mein Phase 1 ka har module apne route group aur status ke saath listed hai. Authentication and RBAC se le kar tamam chaar compliance frameworks, Risk Management teen route groups ke saath, Vendor Management, Policy Manager, Model Inventory, LLM Evaluations via EvalServer, AI Advisor with function calling, Evidence Hub, Global Search 14 entity types mein, AI Trust Center, CE Marking Registry, Task Management, AI Incident Management, Training Registry, Post-Market Monitoring, Entity Graph visualization, Reporting PDF aur DOCX dono ke liye, Automations, Slack Integration, WatchTower Event Tracker, Docker Deployment, aur Kubernetes Deployment — 38 Phase 1 modules mein se sab complete."

📺 **Show:** Section 7.1 Project Monitoring (GitHub)

> "Project monitoring ke liye humne GitHub use kiya. tamam 9 sprints GitHub Milestones ke taur par track hue. Issues labeled: feature, bug, test, docs, aur security. Progress GitHub Projects Kanban board par visible thi. CI/CD ke liye — GitHub Actions ne teen pipelines chalaye: har pull request par ESLint aur TypeScript compilation. `develop` mein merge par Docker build verification. `main` mein merge par full test suite plus Docker image push. is ka matlab hai `main` tak pahunchne wala har code line automated quality gates se guzra."

---

# ═══════════════════════════════════════
# PART 12 — Conclusion aur Future Work
# Speaker: Ahmed Abdullah Khan | ⏱ ~6 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 18 (Conclusion)

**AAK:**

> "Aegis.AI koi prototype nahin hai. ye ek mukammal operational, enterprise-grade AI governance platform hai jo aaj on-premises production use ke liye deploy ho sakta hai. ye platform chaar bare compliance frameworks ko consolidate karta hai, risk ko teen dimensions mein manage karta hai — project, vendor, aur model — aur governance ko documentation se aage active AI safety evaluation, AI content detection, aur AI-powered advisory tak extend karta hai."

> "Technology stack ki baat karein: React 18 frontend Vite 6.x build tool ke saath, Material UI 6.x components ke liye, Redux Toolkit with redux-persist state management ke liye, React Query v5 server state ke liye, React Router v6. Backend Node.js 22.x Express 4.x ke saath, TypeScript 5.x, Sequelize 6.x ORM. EvalServer Python FastAPI with DeepEval. PostgreSQL 15+ primary database. Redis with BullMQ. Authentication JWT plus bcrypt plus Google OAuth2. PDF generation Playwright with EJS templates. Containerization Docker Compose v3.8 aur Kubernetes 1.28+ se. API documentation Swagger OpenAPI 3.0 se. Testing Jest, Supertest, React Testing Library, aur Mock Service Worker se. har piece deliberately production readiness ke liye choose hua."

> "Notable technical achievements: Schema-per-tenant multi-tenancy jo 15 cross-tenant access attempts block karne par verified hui. Multi-step approval workflow engine 5 configurable sequential steps ke saath full state-machine semantics — pending, approved, rejected, withdrawn, step-progressed. Real-time SSE notification system sub-100ms delivery ke saath 50 concurrent tests mein confirmed. Automation Rule Engine 4 action types ke saath: SEND_SLACK, SEND_EMAIL, CREATE_TASK, CALL_WEBHOOK. Post-Market Monitoring module BullMQ cron scheduling ke saath EU AI Act Articles 9 aur 72 directly implement karta hai. Global search 14 entity types mein Command Palette Ctrl+K se. Public AI Trust Center regulatory transparency ke liye. Complete Docker Compose aur Kubernetes 8 manifests ke saath Horizontal Pod Autoscaler samait."

> "Codebase taqreeban 60,000 lines of TypeScript and Python par mushtamil hai teen independent applications mein. 60 active backend route modules — 66 utility routes samait. 40 se zyada database tables. Documentation tamam 9 sprints cover karti hai class diagrams, sequence diagrams, decision tables, aur extended test cases ke saath — 10 per sprint, 90 total. Business Source License 1.1 ke tehat release."

📺 **Show:** PowerPoint Slide 19 (Future Work)

> "Phase 2 ke liye hamare paas 15 planned user stories hain — 114 story points — ye sab wo features hain jinhen external services chahiye jo Phase 1 mein available nahin thin. in mein shamil hain: AI Advisor ko live LLM API integration ke saath activate karna. LLM Evaluations aur Arena full DeepEval benchmarking pipeline ke saath complete karna. AI Detection Module GitHub repository scanning ke saath activate karna. Bias and Fairness Evaluation per-group scoring ke saath complete karna. SMTP aur AWS SES se transactional emails enable karna. Full Slack automation integration. MLflow model metadata synchronization. aur cloud deployment AWS EKS ya Azure AKS par."

> "is se aage hamare long-term roadmap mein 10 items hain. pehla: Granular permission system — resource-level access control. doosra: AI Risk Assessment auto-generation — LLM se model description se risk assessments. teesra: Regulatory Updates Feed — EU AI Act aur ISO changes automatically monitor karna. chautha: React Native mobile app — dashboard, alerts, aur approval actions chalte phirte ke liye. paanchwaan: bi-directional Jira aur GitHub Issues integration. chatha: Federated Learning Governance. saatwan: Expanded AI Agency — fully autonomous governance workflows human-in-the-loop approval ke saath. aathwan: Compliance Template Marketplace — community library. nauwaan: Multi-language support — German, French, aur Arabic EU aur GCC markets ke liye. daswan: OSCAL export — machine-readable compliance artifacts formal certification submission ke liye."

📺 **Show:** PowerPoint Slide 20 (Thank You)

---

# ═══════════════════════════════════════
# PART 13 — Aakhiri Baatein (Closing)
# Tamam Teen Members | ⏱ ~2 min
# ═══════════════════════════════════════

📺 **Tino cameras ek saath visible**

**MH:** "ye thi hamari Aegis.AI FYP Phase 1 ki mukammal presentation."

**AAK:** "hum dil ki gehrayyion se Sir Usama Ahmad ka shukriya ada karte hain unki musalsal guidance aur feedback ke liye is poore safar mein."

**FM:** "mukammal source code, documentation, sprint records, test cases, aur system diagrams hamare GitHub repository par available hain — github.com/muhammadharis356/aegis-develop — aur submitted documentation package mein."

**MH:** "humen yaqeen hai ke Aegis.AI AI governance space mein genuine value deliver karta hai aur hum Phase 2 mukammal karne ka intezaar kar rahe hain. aap ke qeemati waqt ka shukriya."

**Sab Tino:** "Jazakallah Khair."

---

## ⏱ Speaker Time Table

| Part | Section | Speaker | Waqt |
|------|---------|---------|------|
| 1 | Taaruf (Introduction) | MH | 4 min |
| 2 | Masla aur Maqasid (Problem & Objectives) | MH | 8 min |
| 3 | Domain Analysis aur Architecture (C4 L1→L3, ERD, DFD) | AAK | 12 min |
| 4 | Product Backlog aur Scrum | FM | 6 min |
| 5 | Figma Designs | FM | 2 min |
| 6 | VS Code Walkthrough (Clean Arch, K8s, .env) | MH | 7 min |
| 7 | Live Demo (10+ modules) | AAK | 15 min |
| 8 | Algorithms Deep Dive + Constraints | MH | 10 min |
| 9 | Data Dictionary aur Approval Sequence | AAK | 5 min |
| 10 | Sprint Highlights (tamam 9) | FM | 8 min |
| 11 | Results aur Statistics | MH | 7 min |
| 12 | Conclusion aur Future Work | AAK | 6 min |
| 13 | Aakhiri Baatein (Closing) | Sab | 2 min |
| **Total** | | | **~92 min** |

---

## ✂️ Trimming Guide (40–60 Min)

| Kya Cut Karein | Waqt Bachega |
|----------------|-------------|
| Part 3: sirf C4 L1 + ERD dikhayein — L2, L3, DFD skip | −5 min |
| Part 6: `.env` aur Kubernetes skip karein | −3 min |
| Part 7: WatchTower + Settings demo skip | −3 min |
| Part 8: sirf Algorithm 1 aur 4 rakhein, constraints skip | −4 min |
| Part 9: Data Dictionary section poori skip karein | −5 min |
| Part 10: Sprint 3-7 ko 1 jumle mein summarize karein | −3 min |
| Part 11: Sprint-by-sprint table aur CI/CD section skip | −3 min |
| Part 12: Tech stack paragraph cut karein | −3 min |
| **Total saved** | **−29 min → ~63 min** |

> **40 min ke liye:** mazeed Part 2 trim karein (Problem 3-5 ek jumle mein) −3 min, Part 4 EPIC list skip karein −2 min, Part 5 Figma poori cut −2 min → **~56 min**. phir Part 10 se sirf Sprints 1, 2, 5, 9 rakhein −4 min → **~52 min**.
