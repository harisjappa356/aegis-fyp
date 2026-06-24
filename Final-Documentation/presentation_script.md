<div dir="rtl">

# Aegis.AI — مکمل Presentation Script (~90 Min)
> **Format:** Recorded Zoom | **MH** = Muhammad Haris | **AAK** = Ahmed Abdullah Khan | **FM** = Farhana Minhas
> **زبان:** Urdu (مع English technical terms) | English backup: `presentation_script_english_backup.md`


---

## 🎬 Recording سے پہلے Checklist
- [ ] Services چل رہے ہوں: backend `:3000`, frontend `:5173`, EvalServer `:8000`
- [ ] Browser پر `http://localhost:5173` کھلا ہو (login page نظر آئے)
- [ ] VS Code پر `d:\aegis-develop` کھلا ہو (Explorer sidebar open)
- [ ] `Final Aegis-develop.docx` VS Code میں کھلا ہو (diagrams reference کے لیے)
- [ ] Figma link ready: `figma.com/design/35gFjjYXV4dOuEBV08LCg6/Aegis.AI`
- [ ] Zoom Focus Assist ON — Display names: Full Name + Roll Number
- [ ] GitHub repo tab کھلا ہو: `github.com/muhammadharis356/aegis-develop`
- [ ] PowerPoint Slide 1 پر ready ہو

---

# ═══════════════════════════════════════
# PART 1 — تعارف (Introduction)
# Speaker: Muhammad Haris | ⏱ ~4 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 1 (Title Slide)

**MH:**

> "Assalam-o-Alaikum، اور خوش آمدید ہمارے FYP Phase 1 کی recorded presentation میں۔ ہمارا project ہے — Aegis.AI، ایک AI Governance Platform۔ میرا نام ہے Muhammad Haris، student ID F2022376040۔ میرے ساتھ ہیں Ahmed Abdullah Khan، ID F2022376096، اور Farhana Minhas، ID F2022376126۔ ہم Department of Artificial Intelligence and Data Science، School of Systems and Technology، University of Management and Technology، Lahore کے students ہیں، اور ہمارے supervisor ہیں Sir Usama Ahmad۔"

> "Aegis.AI ایک self-hostable AI governance platform ہے جو organizations کو Artificial Intelligence safely، responsibly، اور global regulations کے مطابق deploy کرنے میں مدد دیتا ہے — EU AI Act، ISO 42001، ISO 27001، اور NIST AI Risk Management Framework سمیت۔"

> "ہم نے Phase 1 development November 2025 میں شروع کی اور March 2026 تک اپنی 9 sprints مکمل کیں۔ آج کی presentation میں ہم آپ کو وہ problem دکھائیں گے جو ہم نے solve کی، وہ system جو ہم نے build کیا، localhost پر running live demo، اور اپنے complete results اور statistics — سب کچھ detail میں۔"

📺 **Show:** PowerPoint Slide 2 (Agenda)

> "آج کا agenda 12 sections پر مشتمل ہے۔ Problem اور objectives سے شروع کریں گے، پھر domain analysis، system architecture، product backlog، Scrum methodology، VS Code codebase walkthrough، full live application demo، algorithms deep dive، data dictionary walkthrough، سب 9 sprints کے highlights، results اور statistics، اور آخر میں conclusion اور future work۔ تو بغیر وقت ضائع کیے شروع کرتے ہیں۔"

---

# ═══════════════════════════════════════
# PART 2 — مسئلہ اور مقاصد
# Speaker: Muhammad Haris | ⏱ ~8 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 3 (The Problem)

**MH:**

> "آئیں problem سے شروع کرتے ہیں۔ Artificial Intelligence systems کا enterprise environments میں تیزی سے پھیلاؤ governance frameworks کی development سے بہت آگے نکل گیا ہے۔ Organizations جو AI deploy کر رہی ہیں انہیں mounting regulatory pressure کا سامنا ہے — خاص طور پر European Union میں جہاں EU AI Act 2024 میں enforceable ہوا اور high-risk AI systems کے لیے structured risk assessments، documentation، human oversight mechanisms، اور post-market monitoring لازمی قرار دیتا ہے۔"

> "ISO 42001 — جو 2023 میں publish ہوئی اور AI Management Systems کے لیے دنیا کی پہلی international standard ہے — اور ISO 27001 information security کے لیے، compliance کی مزید layers add کرتے ہیں۔ اور America میں NIST AI Risk Management Framework چار functions کے ذریعے AI lifecycle cover کرتا ہے: Govern، Map، Measure، اور Manage۔"

> "ذرا ایک real scenario سوچیں — ایک hospital لگاتا ہے ایک AI system cancer diagnosis کے لیے۔ وہ system غلط diagnosis دے دیتا ہے۔ اگر کوئی governance نہ ہو، کوئی audit trail نہ ہو، کوئی risk assessment نہ ہو — تو patient کی جان داؤ پر لگ جاتی ہے اور hospital کو EU AI Act کی violation کا سامنا ہوتا ہے۔ یہی وہ real-world consequence ہے جسے prevent کرنا ان regulations کا مقصد ہے۔ اور یہی problem Aegis.AI حل کرتا ہے۔"

> "ہم نے پانچ core governance problems identify کیے:"

> "**Problem 1: Regulatory Complexity۔** چاروں frameworks کے ساتھ compliance کے لیے ایک ساتھ سینکڑوں controls، assessments، اور evidence items track کرنے پڑتے ہیں۔ کوئی ایک dashboard نہیں جہاں organization اپنی پوری compliance posture دیکھ سکے۔"

> "**Problem 2: Centralized Oversight کی کمی۔** AI models، risks، vendors، اور policies الگ الگ spreadsheets اور disconnected tools میں manage ہو رہے ہیں — کوئی unified view نہیں، کوئی audit trail نہیں۔"

> "**Problem 3: کوئی Self-Hostable Alternative نہیں۔** Credo AI، Holistic AI، IBM OpenScale، OneTrust AI — یہ سب cloud-only SaaS products ہیں enterprise pricing کے ساتھ۔ وہ organizations جنہیں data sovereignty چاہیے — خاص طور پر government bodies — legally اپنا governance data کسی third-party cloud پر نہیں بھیج سکتیں۔"

> "**Problem 4: Manual اور Error-Prone Audits۔** موجودہ audit processes manual، time-consuming، اور inconsistent ہیں — compliance gaps اور reporting delays کا باعث بنتے ہیں۔"

> "**Problem 5: Built-In AI Safety Evaluation نہیں۔** LLM behaviour evaluate کرنے کے لیے، AI-generated code detect کرنے کے لیے، اور وقت کے ساتھ model quality monitor کرنے کے لیے کوئی integrated tools نہیں۔"

> "ہمارا conclusion: ایک comprehensive، self-hostable AI governance platform کی ضرورت ہے جو compliance management، risk tracking، vendor oversight، model evaluation، اور policy governance کو ایک ہی system میں centralize کرے۔ اور یہی بالکل Aegis.AI provide کرتا ہے۔"

📺 **Show:** PowerPoint Slide 4 (Objectives)

> "ہمارے دس بنیادی مقاصد تھے: پہلا — ایک full-stack governance platform جو ایک interface سے چاروں major compliance frameworks support کرے۔ دوسرا — AI Model Inventory مع risk assessment اور version history۔ تیسرا — Vendor Management module۔ چوتھا — Policy Manager مع lifecycle management اور control linking۔ پانچواں — AI Advisor، ایک LLM-powered chatbot جو tool calling سے context-aware governance recommendations دے۔ چھٹا — LLM Evaluations module اور Arena جو DeepEval سے model benchmarking کرے۔ ساتواں — AI Detection Module جو GitHub repositories کو AI-generated code کے لیے scan کرے۔ آٹھواں — PostgreSQL schema-per-tenant multi-tenancy۔ نواں — Docker اور Kubernetes deployment۔ دسواں — PDF اور DOCX compliance report generation۔"

> "یہ دس مقاصد ہمارے 20 EPICs اور 58 user stories سے directly map ہوتے ہیں — جو Farhana تھوڑی دیر میں cover کریں گی۔"

---

# ═══════════════════════════════════════
# PART 3 — Domain Analysis اور Architecture
# Speaker: Ahmed Abdullah Khan | ⏱ ~12 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 5 (Customers & Stakeholders)

**AAK:**

> "Shukriya Haris۔ Main Ahmed Abdullah Khan ہوں۔ اب میں domain analysis اور پھر system architecture detail میں cover کروں گا۔"

> "Aegis.AI چار customer segments کو target کرتا ہے۔ پہلا — وہ technology companies جو AI products build کر رہی ہیں اور EU AI Act compliance چاہیے۔ دوسرا — regulated industries جیسے banking، healthcare، manufacturing، public sector جو third-party یا in-house AI integrate کر رہی ہیں۔ تیسرا — وہ industries جہاں AI use sectoral oversight کے تابع ہے۔ چوتھا — government اور public sector bodies جو citizen-facing services میں AI deploy کر رہی ہیں جنہیں transparency اور human oversight درکار ہے۔"

> "ہمارا stakeholder model دس actor types cover کرتا ہے۔ Admin جسے full platform control حاصل ہے: organizations create کرنا، users manage کرنا، approval workflow templates بنانا، API tokens اور LLM keys manage کرنا۔ Editor یا AI Governance Officer: روزانہ کی governance — controls fill کرنا، risks create کرنا، vendors اور policies manage کرنا۔ Reviewer: submissions review اور approve یا reject کرنا۔ Auditor: read-only access اور compliance reports generate کرنا۔ End Users: tasks کے assignees۔ External Vendors، Regulatory Bodies، LLM Providers جیسے OpenAI اور Anthropic بیرونی stakeholders ہیں۔ IT/DevOps team deployment کے لیے۔ اور System background workers automated jobs کرتے ہیں — PMM scheduling، automation rule execution، email notifications۔"

📺 **Show:** PowerPoint Slide 6 (Feature Comparison)

> "ہمارا competitor comparison دکھاتا ہے کہ IBM OpenScale primarily cloud-hosted ہے، fairness اور drift monitoring تک محدود۔ Credo AI SaaS-only ہے، partial ISO support کے ساتھ۔ Holistic AI SaaS، partial NIST اور ISO۔ OneTrust AI enterprise SaaS، partial multi-framework۔ Aegis.AI واحد platform ہے جو یہ سب ایک ساتھ offer کرتا ہے: complete EU AI Act، complete ISO 42001، complete ISO 27001، complete NIST AI RMF، integrated LLM Evaluation اور Arena، AI Detection Module، full multi-tenancy، اور on-premises deployment — مفت اور self-hosted۔"

📺 **Show:** `Final Aegis-develop.docx` → Section 5.1 C4 Level 1 Diagram

> "C4 Level 1 architecture میں تین independently deployable services ہیں۔ React SPA port 5173 پر Vite کے ساتھ — initial load 2 seconds سے کم۔ یہ REST/JSON کے ذریعے Node.js TypeScript backend سے communicate کرتی ہے جو port 3000 پر ہے، اور directly Python FastAPI EvalServer سے — port 8000۔ Backend میں 60 active route modules ہیں، JWT plus RBAC middleware، اور tenant identification middleware۔ PostgreSQL port 5432 پر schema-per-tenant isolation کے ساتھ — ہر organization کا اپنا dedicated schema۔ Redis port 6379 پر BullMQ job queues اور SSE Pub/Sub دونوں کے لیے۔"

📺 **Show:** Section 5.2 C4 Level 2 Container Diagram

> "C4 Level 2 میں React 18 SPA ہے Vite، Material UI، Redux Toolkit plus redux-persist، React Query v5، اور React Router v6 کے ساتھ — 50 سے زیادہ pages۔ Backend Node.js 22.x ہے Express 4.x، TypeScript 5.x، اور Sequelize 6.x ORM کے ساتھ۔ EvalServer Python FastAPI ہے DeepEval framework کے ساتھ — LLM benchmarking، Arena comparisons، اور Bias اور Fairness evaluations کے لیے۔"

📺 **Show:** Section 5.3 C4 Level 3 Component Diagram

> "یہ ہمارا enterprise-grade architecture کا اصل ثبوت ہے — C4 Level 3 component decomposition۔ Backend API container کے اندر 8 major components ہیں۔ Auth Middleware: JWT validate کرتا ہے اور user identity extract کرتا ہے ہر request پر۔ Tenant Middleware: PostgreSQL schema search path set کرتا ہے۔ RBAC Middleware: user کا role check کرتا ہے route کی required permission کے خلاف — اور فوراً 403 return کرتا ہے اگر authorized نہ ہو۔ 60 Route Modules: تمام 17 feature domains کے endpoints define کرتے ہیں۔ Controllers: request اور response handle کرتے ہیں اور Models اور Services کو delegate کرتے ہیں۔ SSE Publisher: Redis Pub/Sub کے ذریعے subscribed browser clients کو real-time events deliver کرتا ہے۔ PMM Scheduler: BullMQ worker — hourly cron job جو PMM cycles create کرتا ہے اور due notifications بھیجتا ہے۔ PDF Generator: Playwright سے styled HTML governance reports render کرتا ہے اور PDF print کرتا ہے۔"

📺 **Show:** Section 5.4 Clean Architecture Flowchart

> "Clean Architecture میں بالکل 4 layers ہیں۔ Presentation Layer میں 60 Express route modules اور تین middleware files ہیں۔ Application Layer میں controllers اور domain services ہیں — SSE service، Slack service، PMM scheduler، PDF generator۔ Domain Layer میں Sequelize models، TypeScript interfaces، shared enumerations، اور business rules ہیں — risk formula L×1 plus S×3، اور PMM escalation logic۔ Infrastructure Layer باہر کی ring ہے: PostgreSQL، Redis، email services، LLM APIs۔ سب سے اہم بات — dependencies صرف inward point کرتی ہیں۔ اس کا مطلب ہے ہم PostgreSQL کو کسی اور database سے replace کر سکتے ہیں بغیر ایک بھی business logic line touch کیے۔"

📺 **Show:** Section 5.4 ERD Mermaid Diagram

> "Entity Relationship Diagram میں 15 major table groups ہیں۔ سب سے اوپر Organizations کے بہت سے Users اور Projects ہیں۔ Projects کے بہت سے ProjectRisks ہیں — ہر ایک کے ساتھ RiskHistory snapshot table اور RiskChangeHistory audit table۔ Projects کے VendorRisks، ModelInventories، ApprovalRequests، Tasks، Incidents، اور PMM configurations بھی ہیں۔ ApprovalWorkflows کے ApprovalWorkflowSteps ہیں اور وہ ApprovalRequests generate کرتے ہیں جن کے ApprovalRequestSteps ہیں۔ Policies کے PolicyLinkedObjects ہیں — کوئی بھی policy کسی بھی framework control یا risk سے link ہو سکتی ہے — اور PolicyChangeHistory۔ PMM configurations PMM Questions define کرتے ہیں، PMM Cycles generate کرتے ہیں، جو PMM Responses collect کرتے اور PMM Reports produce کرتے ہیں۔"

📺 **Show:** Section 5.7 DFD Level 1

> "DFD Level 1 Aegis.AI کو 8 major internal processes اور 4 data stores میں decompose کرتا ہے۔ P1: Authentication اور User Management۔ P2: Compliance Framework Management — EU AI Act، ISO، NIST۔ P3: Risk اور Vendor Management۔ P4: LLM Evaluation اور AI Advisory۔ P5: Reporting اور Document Generation۔ P6: Automation اور Notification Engine۔ P7: Post-Market Monitoring۔ P8: AI Detection اور Repository Scanning۔ 4 data stores: DS1 — PostgreSQL public schema، DS2 — PostgreSQL tenant governance data، DS3 — Redis، DS4 — EvalServer database۔"

> "Multi-tenancy کے بارے میں: جب کوئی organization register کرتی ہے تو system ایک dedicated schema create کرتا ہے — 10-character cryptographically random hash کے ساتھ، org name نہیں — security کے لیے۔ Tenant Middleware JWT سے org ID extract کرتا ہے پھر PostgreSQL search_path set کرتا ہے۔ یہ database engine level پر enforce ہوتا ہے — دو tenants physically ایک دوسرے کا data access نہیں کر سکتے کسی بھی application-level bug کے باوجود۔ ہم نے 15 cross-tenant access tests کیے — سب 15 correctly blocked ہوئے۔"

---

# ═══════════════════════════════════════
# PART 4 — Product Backlog اور Scrum
# Speaker: Farhana Minhas | ⏱ ~6 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 9 (Backlog Summary) + Final Aegis-develop.docx Section 3.3

**FM:**

> "Shukriya Ahmed۔ Main Farhana Minhas ہوں، F2022376126۔ میں آپ کو بتاؤں گی کہ ہم نے Scrum کے ذریعے development کیسے plan اور manage کی۔"

> "ہمارا product backlog hierarchy 20 EPICs سے 58 individual User Stories تک جاتی ہے۔ ہر story اس format میں ہے: As a role، I can do something، so that benefit۔ ہر story میں Priority، Acceptance Criteria جو exactly وہ conditions define کرتی ہیں جن پر story complete ہوگی، Story Points، اور Status ہے۔"

> "20 EPICs پورے AI governance lifecycle cover کرتے ہیں۔ EPIC 1 — User Management اور RBAC۔ EPIC 2 — Multi-Tenancy اور Organization Management۔ EPIC 3 — Approval Workflows۔ EPIC 4 — Framework Management جو چاروں regulations cover کرتی ہے۔ EPIC 5 — Risk Management۔ EPIC 6 — Vendor Management۔ EPIC 7 — Policy Management۔ EPIC 8 — AI Model Inventory۔ EPICs 9، 10، 16، 17 — LLM Evaluations، AI Advisor، AI Detection Module، اور Bias and Fairness — یہ Phase 2 features ہیں۔ EPIC 11 — Search اور Navigation۔ EPIC 12 — Reporting اور Dashboard۔ EPIC 13 — Shared Collaboration۔ EPIC 14 — Automations اور Notifications۔ EPIC 15 — Incident Management اور Training Registry۔ EPIC 18 — Post-Market Monitoring۔ EPIC 19 — Policy Templates۔ EPIC 20 — WatchTower Event Tracker۔"

> "Phase 1 میں ہم نے 43 user stories مکمل کیں — 230 story points — اور تمام live browser user acceptance testing سے verify ہوئیں۔ 15 stories یعنی 114 story points Phase 2 کے لیے deferred کی گئی ہیں کیونکہ انہیں external infrastructure چاہیے: LLM API keys، SMTP servers، running MLflow instance، Slack webhooks، GitHub tokens۔ لیکن ان سب features کے UIs fully built ہیں — یہ gracefully degrade کرتے ہیں جب external dependency absent ہو۔"

📺 **Show:** PowerPoint Slide 10 (Sprint Timeline)

> "Development 9 two-week sprints میں organize کی — November 15، 2025 سے March 20، 2026 تک۔ Scrum Master role rotate رہا: Muhammad Haris نے Sprints 1، 4، اور 7 lead کیے۔ Ahmed Abdullah Khan نے Sprints 2، 5، اور 8 lead کیے۔ میں نے Sprints 3، 6، اور 9 lead کیے۔ ہر sprint میں پورے Scrum ceremonies ہوئے: Planning Meeting، Daily Standups، Sprint Review جس میں Sir Usama Ahmad Product Owner کا role ادا کرتے تھے، اور Retrospective۔ Sprint health consistently 4 سے 5 out of 5 رہا۔"

📺 **Show:** PowerPoint Slide 11 (Team Contributions)

> "Individual contributions میں: Muhammad Haris نے monorepo setup، JWT authentication with refresh tokens، Sequelize ORM and migrations، Approval Workflows engine، Risk Management scoring algorithm، PDF report generation، اور Global Search کیا۔ Ahmed Abdullah Khan نے Docker Compose، Kubernetes manifests، RBAC middleware، EU AI Act seeding and control engine، ISO 42001 اور ISO 27001 implementations، NIST AI RMF seeding، Model Inventory، SSE notification system with Redis Pub/Sub، اور DOCX report generation کیا۔ میں نے پورا frontend React component architecture 50+ pages کے ساتھ، Login اور Registration UI، Vendor Management UI، Policy Manager UI، WatchTower event tracker frontend، Command Palette، Reporting UI، اور تمام 20 Figma prototype designs بنائے۔"

---

# ═══════════════════════════════════════
# PART 5 — Figma Designs Showcase
# Speaker: Farhana Minhas | ⏱ ~2 min
# ═══════════════════════════════════════

📺 **Open:** Figma design link یا Final Aegis-develop.docx Section 3.4 screenshots

**FM:**

> "Live demo سے پہلے، میں briefly ان Figma prototype designs کا ذکر کروں گی جو میں نے develop کیے۔ آپ dark professional theme دیکھ سکتے ہیں — dark navy backgrounds، teal accent colors، Inter typography۔ Login page Aegis.AI shield logo کے ساتھ، Dashboard risk distribution charts کے ساتھ، Overview page use case cards کے ساتھ، Risk Management registry color-coded severity levels کے ساتھ، Policy Manager lifecycle view، AI Trust Center public page، LLM Evaluations dashboard، WatchTower event tracker، Approval Workflows inbox، اور Settings page۔ تمام 20 screens development سے پہلے اور اس کے دوران design کیے گئے — React implementation guide کرنے کے لیے۔"

---

# ═══════════════════════════════════════
# PART 6 — VS Code: Codebase Walkthrough
# Speaker: Muhammad Haris | ⏱ ~7 min
# ═══════════════════════════════════════

📺 **Switch to:** VS Code — `d:\aegis-develop`

**MH:**

> "اب میں VS Code پر switch کرتا ہوں تاکہ live application سے پہلے آپ کو codebase دکھا سکوں۔"

📺 **Show:** Root folder in Explorer

> "Repository root میں تین application directories ہیں۔ `Clients` — React TypeScript frontend۔ `Servers` — Node.js TypeScript backend۔ `EvalServer` — Python FastAPI evaluation server۔ ساتھ میں `Figma-Designs` سب Figma screenshots کے ساتھ، `Final-Documentation` ہمارا FYP report، `kubernetes/.k8s` production deployment manifests کے ساتھ، اور `docker-compose.yml` root میں۔"

📺 **Open:** `Servers/index.ts` briefly

> "Backend entry point Express initialize کرتا ہے، PostgreSQL سے Sequelize کے ذریعے connect ہوتا ہے، Redis سے connect ہوتا ہے، پھر tenant middleware اور JWT middleware register کرتا ہے، اور آخر میں 60 independent route modules mount کرتا ہے۔ Platform کا ہر feature اپنی dedicated route file رکھتا ہے — یہ ہماری application layer boundary ہے۔"

📺 **Show:** `Servers/` folder structure

> "Folder names directly Clean Architecture layers reflect کرتے ہیں۔ `routes/` — Presentation Layer — 60 route files۔ `controllers/` — Application Layer — request handlers جن میں کوئی business logic نہیں۔ `domain.layer/models/` — Domain Layer — ہر entity کے Sequelize ORM models: users، projects، risks، vendors، approval workflows، policies، PMM configs۔ `services/` — shared infrastructure: SSE publisher service، Slack service، PDF generator using Playwright، PMM scheduler۔ `jobs/` — BullMQ workers۔ `advisor/` — AI Advisor tool function definitions function calling کے لیے۔"

📺 **Expand:** `Servers/routes/` folder

> "Route files یہاں ہیں: users، roles، projects، eu-ai-act، iso-42001، iso-27001، nist-ai-rmf، projectRisks، riskHistory، risk-change-history، vendorRisks، vendors، policies، modelInventory، modelRisks، approvalWorkflows، approvalRequests، notifications، reporting، evidenceHub، notes، tasks، ai-incidents، training، post-market-monitoring، automations، slackWebhooks، integrations mlflow اور github کے لیے، aiDetection، aiTrustCentre، ceMarking، entityGraph، search، llm-keys، deepeval، evaluation-llm-keys، advisor، logger، dashboard، shares، file-manager۔ 60 active route modules — 66 utility routes سمیت۔"

📺 **Open:** `Servers/middleware/` — jwtAuth.ts, rbac.ts, tenantScope.ts

> "تین core middleware files ہر request کو اس sequence میں secure کرتی ہیں۔ پہلے `jwtAuth.ts` incoming JWT token verify کرتی ہے — signature، expiry check کرتی ہے اور user ID، role، اور organization ID extract کرتی ہے۔ پھر `tenantScope.ts` اس org ID کو لے کر PostgreSQL کو `SET search_path TO <tenant_schema>` issue کرتی ہے — اس organization کی private schema تک تمام queries scope کرتی ہے۔ پھر `rbac.ts` user کا role load کرکے check کرتی ہے کہ اس role کو specific route کی required permission ہے یا نہیں — اگر نہیں تو فوراً 403 return کرتی ہے۔ یہ تین-layer security chain ہر single request پر چلتی ہے۔"

📺 **Open:** `Servers/.env.example` briefly

> "Environment variables پوری integration picture reveal کرتی ہیں۔ `DATABASE_URL` PostgreSQL کے لیے۔ `REDIS_URL` Redis کے لیے۔ `JWT_SECRET` tokens sign کرنے کے لیے۔ `OPENAI_API_KEY` اور `ANTHROPIC_API_KEY` AI Advisor کے لیے — دونوں optional۔ `SLACK_WEBHOOK_URL` automation notifications کے لیے۔ `EMAIL_PROVIDER` — `ses`، `smtp`، `azure`، یا `resend` — completely modular۔ `GITHUB_TOKEN` AI Detection Module کے لیے۔ `MLFLOW_TRACKING_URI` model metadata sync کے لیے۔ `SSL_KEY_PATH` اور `SSL_CERT_PATH` production HTTPS کے لیے۔"

📺 **Open:** `kubernetes/.k8s/` folder

> "Kubernetes manifests کی بات کریں تو یہاں آٹھ manifest files ہیں: `deployment.yaml` Node.js backend کے لیے، `client-deployment.yaml` React Nginx frontend کے لیے، `evalserver-deployment.yaml` Python FastAPI کے لیے، `worker-deployment.yaml` BullMQ background worker کے لیے ایک separate scalable deployment میں، `postgres-deployment.yaml` StatefulSet with persistent volume، `redis-deployment.yaml`، `ingress.yaml` Nginx Ingress with SSL termination، اور `hpa.yaml` — Horizontal Pod Autoscaler backend کے لیے۔ اس کا مطلب ہے Aegis.AI production میں horizontally scale کر سکتا ہے — AWS EKS، Azure AKS، یا self-hosted Kubernetes cluster پر۔"

📺 **Open:** `docker-compose.yml` briefly

> "Docker Compose file میں پانچ services ہیں health checks کے ساتھ: postgres، redis، Node.js server، React frontend via Nginx، اور Python evalserver۔ ایک command — `docker-compose up -d` — اور پوری platform start ہو جاتی ہے، fully networked۔ یہ directly ہمارا self-hosted deployment objective deliver کرتا ہے۔"

---

# ═══════════════════════════════════════
# PART 7 — Live Demo: Running Application
# Speaker: Ahmed Abdullah Khan | ⏱ ~15 min
# ═══════════════════════════════════════

📺 **Switch to:** Browser — `http://localhost:5173`

**AAK:**

> "اب live application۔ Port 5173 پر frontend اور port 3000 پر API running ہے۔ یہ login page ہے — dark theme، Aegis.AI shield logo، Farhana کا design۔"

📺 **Log in** → Dashboard

> "Admin test account سے login کرتے ہیں۔ Dashboard پر آ گئے — یہاں organization-wide metrics دکھتے ہیں: total use cases، risk score distribution by level، compliance progress by framework، vendor count، اور recent activity — سب کچھ اس organization کے PostgreSQL schema سے scoped ہے۔"

📺 **Navigate:** Overview (Use Cases)

> "Overview تمام Use Cases دکھاتا ہے — یہی ہمارا terminology ہے AI systems کے لیے جن کی governance ہو رہی ہے۔ ہر card میں auto-generated UC-ID ہے — UC-1، UC-2 وغیرہ — owner، risk classification، اور status۔ ایک پر click کرتے ہیں۔"

📺 **Click** a use case → EU AI Act tab

> "Use case کے اندر tabs ہیں compliance frameworks کے لیے۔ EU AI Act tab میں 13 control categories دکھتی ہیں: Data Governance، Technical Documentation، Transparency اور Provision of Information، Human Oversight، Accuracy اور Robustness، Cybersecurity، Conformity Assessment، Fundamental Rights Impact Assessment — اور مزید۔ ایک category پر click کرتے ہیں اور controls دکھتے ہیں اپنی status کے ساتھ۔"

📺 **Click** one control → show status dropdown

> "ہر control lifecycle states میں move کرتا ہے: Waiting → In Progress → Under Review → Done۔ یا N/A mark ہو سکتا ہے mandatory justification کے ساتھ۔ یہ transitions exactly EU AI Act کے systematic conformity assessment documentation requirements match کرتے ہیں۔ ہر transition timestamp اور user کے ساتھ log ہوتی ہے۔"

📺 **Navigate:** Risk Management

> "Risk Management میں risk registry دکھتی ہے۔ ہر risk کا نام، owner، likelihood 1 سے 5 تک — Rare سے Almost Certain — اور severity 1 سے 5 تک — Negligible سے Catastrophic۔ Platform automatically risk level calculate کرتا ہے formula سے: Risk Score equals Likelihood times 1 plus Severity times 3۔ Severity کو تین گنا weight دیتے ہیں کیونکہ AI governance میں impact زیادہ اہم ہے frequency سے۔ View History پر click کریں — اس risk میں کی گئی ہر تبدیلی یہاں ہے — complete version control۔"

📺 **Navigate:** Approval Workflows

> "Approval Workflows میں Editor ایک use case یا risk formal sign-off کے لیے submit کرتا ہے۔ Admin پہلے سے multi-step workflow templates configure کرتا ہے — 5 sequential approval steps تک، ہر step کسی role کو assigned۔ Submission پر assigned approver کو real-time notification ملتی ہے bell icon پر — ہمارے SSE اور Redis Pub/Sub pipeline سے 100 milliseconds سے کم میں۔ Approver step by step approve کر سکتا ہے، reject with comment، یا submitter withdraw کر سکتا ہے۔ ہر state transition internally track ہوتی ہے — pending، approved، rejected، withdrawn۔"

📺 **Navigate:** Policy Manager

> "Policy Manager میں AI policies جاتی ہیں: Draft → Under Review → Approved → Published → Archived۔ Policies directly EU AI Act controls، ISO clauses، یا risks سے link ہو سکتی ہیں — governance decision اور regulatory control کے درمیان full traceability۔ Sprint 6 نے reusable policy templates introduce کیے جو AI governance best practices سے pre-populated ہیں۔"

📺 **Navigate:** AI Model Inventory

> "AI Model Inventory organization میں deploy تمام AI models کی registry ہے۔ ہر model entry میں نام، version، model type، owner، linked use case، اور status ہے۔ Version history automatically track ہوتی ہے — ہر update ایک `model_inventory_history` snapshot create کرتا ہے۔ Model-level risks بھی track ہوتے ہیں same auto-calculation formula سے۔"

📺 **Navigate:** Post-Market Monitoring

> "Post-Market Monitoring — یہ EU AI Act Articles 9 اور 72 کے directly aligned ہے۔ یہاں آپ active PMM configurations دیکھتے ہیں۔ ہر configuration میں frequency ہے — ہر 30 days، ہر month — reminder_days جب stakeholder کو reminder بھیجا جائے، escalation_days اور escalation contact۔ System automatically ہر cycle بناتا ہے، questionnaire email بھیجتا ہے، reminders اور escalation alerts کرتا ہے، اور submission پر PDF audit report generate کرتا ہے۔"

📺 **Navigate:** Incident Management

> "AI Incident Management میں governance incidents log ہوتی ہیں — AI system failures، bias incidents، regulatory violations، یا anything جو formal escalation کی ضرورت ہو۔ ہر incident میں severity، status lifecycle، اور linked use case ہے۔ Training Registry کے ساتھ یہ NIST AI RMF کا GOVERN function implement کرتا ہے۔"

📺 **Navigate:** Automations

> "Automations میں event-driven rules ہیں۔ Admin کوئی بھی trigger define کر سکتا ہے — جیسے RISK_CREATED، condition جیسے risk_level equals Very High — اور پھر actions: SEND_SLACK، SEND_EMAIL، CREATE_TASK، CALL_WEBHOOK۔ یہ no-code governance automation ہے platform کے اندر۔"

📺 **Navigate:** WatchTower Event Tracker

> "WatchTower real-time audit log ہے۔ ہر governance action یہاں capture ہوتا ہے — logins، use case changes، risk updates، approval decisions، policy status transitions — actor، action type، affected entity، اور ISO 8601 timestamp کے ساتھ۔ System Logs tab بھی ہے filterable by severity level۔"

📺 **Navigate:** AI Trust Center

> "AI Trust Center ایک public-facing transparency page ہے — بغیر login کے accessible۔ Admin اسے configure کرتا ہے AI systems کی list، sub-processor organizations، documentation links، اور certification claims کے ساتھ۔ یہ directly EU AI Act transparency obligations support کرتا ہے۔"

📺 **Navigate:** Settings → LLM Keys, Email Config tabs

> "Settings page modular configuration system دکھاتا ہے۔ Admin LLM API keys add کر سکتا ہے OpenAI، Anthropic، یا OpenRouter کے لیے۔ Separate Evaluation LLM keys EvalServer کے لیے۔ Email provider configuration — SMTP، AWS SES، Azure Email، یا Resend میں سے کوئی۔ Slack webhook automation کے لیے۔ اور API tokens programmatic access کے لیے۔ یہ modular architecture کا مطلب ہے platform بغیر کسی LLM key کے بھی fully functional run کرتا ہے — تمام AI features gracefully degrade ہوتے ہیں۔"

---

# ═══════════════════════════════════════
# PART 8 — Algorithms Deep Dive
# Speaker: Muhammad Haris | ⏱ ~10 min
# ═══════════════════════════════════════

📺 **Show:** Final Aegis-develop.docx Section 6.3 Algorithms

**MH:**

> "اب میں وہ پانچ core algorithms explain کروں گا جو Aegis.AI کو power کرتے ہیں — یہ سب ہمارے FYP report کے Section 6.3 میں documented ہیں۔"

> "**Algorithm 1: Risk Level Auto-Calculation۔** یہ central scoring algorithm ہے جو تین risk dimensions میں use ہوتا ہے — project risks، vendor risks، اور model risks۔ Formula یہ ہے: Risk Score equals Likelihood times 1 plus Severity times 3۔ Likelihood اور Severity دونوں 1-to-5 enumerations ہیں۔ Likelihood values: 1=Rare، 2=Unlikely، 3=Possible، 4=Likely، 5=Almost Certain۔ Severity values: 1=Negligible، 2=Minor، 3=Moderate، 4=Major، 5=Catastrophic۔ Score thresholds: 4 یا کم = Very Low۔ 5 سے 8 = Low۔ 9 سے 12 = Medium۔ 13 سے 16 = High۔ 17 یا زیادہ = Very High۔ Severity کو تین گنا weight دیا کیونکہ AI governance میں impact frequency سے زیادہ اہم ہے۔ ہم نے 25 risk entries test کیے — سب 25 کا 100% correctly calculated level نکلا۔"

> "**Algorithm 2: AI Advisor Context Injection۔** AI Advisor صرف LLM کو message forward نہیں کرتا۔ Process کے 6 steps ہیں۔ Step 1: current use case data fetch کرو — open risks کی count، framework completion percentages، active use cases، outstanding tasks۔ Step 2: اسے structured system prompt prefix کے طور پر conversation سے پہلے inject کرو۔ Step 3: last N turns کی conversation history append کرو continuity کے لیے۔ Step 4: configured LLM provider call کرو — OpenAI، Anthropic، یا OpenRouter — organization کی stored API key سے `api/llm-keys` سے۔ Step 5: response React frontend کو SSE کے ذریعے stream کرو real-time chatbot experience کے لیے۔ Step 6: اگر Advisor کوئی tool call کرے — جیسے `getRisksByProject`، `getVendorList`، یا `getFrameworkProgress` — backend tool execute کرتا ہے، result inject کرتا ہے، اور generation continue کرتا ہے۔ اس کا مطلب ہے Advisor 'اس ہفتے میرے کون سے risks Critical ہیں؟' جیسے questions live data سے answer کر سکتا ہے۔"

> "**Algorithm 3: LLM Evaluation Scoring Pipeline۔** یہ EvalServer algorithm ہے DeepEval framework کے ساتھ۔ Step 1: test dataset load کرو — question-answer-context triplets جو user نے upload کیے ہیں۔ Step 2: ہر item target LLM کو بھیجو جو evaluate ہو رہا ہے۔ Step 3: ہر response configured metrics کے خلاف score کرو — Correctness، Faithfulness، Hallucination Rate، اور Bias۔ Step 4: تمام test cases میں ہر metric کے results aggregate کرو۔ Step 5: EvalServer database میں comparison view کے لیے results store کرو۔ Step 6: Arena mode یہ pipeline دو models کے لیے simultaneously چلاتا ہے اور side-by-side comparison render کرتا ہے۔ Evaluation LLM key — main Advisor key سے الگ — scoring calls کے لیے judge model کے طور پر use ہوتی ہے۔"

> "**Algorithm 4: Post-Market Monitoring Scheduler۔** BullMQ cron job ہر گھنٹے `0 * * * *` پر چلتا ہے۔ Step 1: تمام active PMM configurations query کرو جہاں configured `notification_hour` current UTC hour match کرتا ہو۔ Step 2: جن configurations کا کوئی active cycle نہیں انہیں نیا cycle create کرو اور stakeholder کو initial questionnaire email بھیجو link اور deadline کے ساتھ۔ Step 3: active cycles کے لیے `reminder_days` threshold check کرو — اگر cycle due date سے N days کے اندر ہے تو reminder email بھیجو۔ Step 4: اگر cycle کو `escalation_days` گزر گئے بغیر response کے تو `escalation_contact` کو escalation alert بھیجو۔ Step 5: جب stakeholder cycle submit کرے تو EJS template plus Playwright سے PDF audit report generate کرو اور PMM reports archive میں store کرو۔ یہ algorithm directly EU AI Act Articles 9 اور 72 implement کرتا ہے۔"

> "**Algorithm 5: Automation Rule Engine۔** Event-driven، no-code governance automation۔ Step 1: کوئی governance event system میں کہیں بھی fire ہو — مثلاً `RISK_CREATED`، `TRAINING_ADDED`، `PROJECT_UPDATED`، `INCIDENT_LOGGED`۔ Step 2: engine اس tenant کے تمام automation rules query کرے۔ Step 3: ہر rule کے لیے event payload کے خلاف condition filter evaluate کرے — مثلاً 'risk_level equals Very High'۔ Step 4: تمام matching rules کے لیے action sequence in order execute کرے — `SEND_SLACK`، `SEND_EMAIL`، `CREATE_TASK`، یا `CALL_WEBHOOK`۔ Step 5: execution results اور errors automation history table میں log ہوں۔ یہ design complex no-code governance workflows allow کرتا ہے — مثلاً: 'جب بھی Very High risk create ہو، Slack پر notify کرو AND remediation task create کرو AND escalation email بھیجو۔'"

📺 **Show:** Section 6.4 Constraints

> "Documentation میں ہمارے constraints بھی specified ہیں۔ Technical constraints: PostgreSQL 14 یا زیادہ JSONB features اور schema-based multi-tenancy کے لیے۔ Redis required ہے۔ LLM API keys optional ہیں — تمام AI features gracefully degrade کرتے ہیں۔ Playwright PDF generation کے لیے server-side required ہے۔ Maximum file upload 10 MB ہے۔ Security constraints: passwords bcrypt 10 rounds سے hash ہوتے ہیں۔ JWT tokens 24 hours بعد expire ہوتے ہیں۔ Auth endpoints پر rate limiting: 100 requests per 15-minute window per IP۔ Helmet.js تمام HTTP security headers enforce کرتا ہے۔ Regulatory constraint: Aegis.AI Business Source License 1.1 کے تحت release ہوا — use مفت ہے، commercial SaaS resale کے لیے 4 سال بعد commercial license درکار ہے۔"

---

# ═══════════════════════════════════════
# PART 9 — Data Dictionary اور Approval Sequence
# Speaker: Ahmed Abdullah Khan | ⏱ ~5 min
# ═══════════════════════════════════════

📺 **Show:** Final Aegis-develop.docx Section 5.8 Data Dictionary

**AAK:**

> "اب میں ہماری data dictionary اور approval workflow sequence diagram walk through کروں گا — یہ ہماری technical depth کا اہم حصہ ہے۔"

> "Data dictionary میں ہم چند key tables دیکھتے ہیں۔ `projects` table — یعنی Use Cases — میں `uc_id` ہے جو auto-generated VARCHAR UNIQUE ہے UC-1 format میں، `ai_risk_classification` ایک ENUM ہے Prohibited، High risk، Limited risk، Minimal risk کے ساتھ، `type_of_high_risk_role` ایک ENUM ہے — Deployer، Provider، Distributor، Importer — یہ EU AI Act کی terminology directly ہے۔ `pending_frameworks` ایک JSONB column ہے جو approval کے لیے pending frameworks track کرتی ہے۔"

> "`project_risks` table میں `likelihood` ENUM ہے Rare/Unlikely/Possible/Likely/Almost Certain کے ساتھ، `severity` ENUM ہے Negligible/Minor/Moderate/Major/Catastrophic کے ساتھ، اور `risk_level_autocalculated` ENUM ہے جو backend automatically compute کرتا ہے L×1 plus S×3 formula سے۔ `mitigation_status` track کرتا ہے Not Started/In Progress/Completed/On Hold۔ اور `ai_lifecycle_phase` column AI lifecycle کا وہ phase record کرتا ہے جس میں یہ risk exist کرتا ہے۔"

> "`post_market_monitoring_configs` table میں: `frequency_value` INTEGER ہے default 30 کے ساتھ، `frequency_unit` ENUM ہے days/weeks/months، `reminder_days` INTEGER ہے due date سے پہلے weeks کی تعداد، `escalation_days` INTEGER ہے overdue ہونے کے بعد escalation تک، اور `escalation_contact_id` FK ہے اس user کو جسے escalation alerts ملتے ہیں۔"

📺 **Show:** Final Aegis-develop.docx Section 5.5 Approval Workflow Sequence Diagram

> "اب approval workflow sequence diagram step by step۔ Editor React Frontend میں Use Case یا Risk submit for Approval کرتا ہے۔ Frontend `POST /api/approval-requests` Backend کو بھیجتا ہے۔ Backend PostgreSQL میں ApprovalRequest create کرتا ہے status pending کے ساتھ اور entity status pending_approval میں update کرتا ہے۔ پھر Backend Redis میں notification event publish کرتا ہے۔ Redis SSE channel کے ذریعے broadcast کرتا ہے۔ Backend Approver کو real-time SSE notification deliver کرتا ہے۔ Approver pending approval request کھولتا ہے — Frontend `GET /api/approval-requests/:id` call کرتا ہے — Backend request plus entity details fetch کرتا ہے اور return کرتا ہے۔ اگر Approver Approve کرے: step status approved ہوتا ہے، Backend check کرتا ہے کہ سب steps complete ہیں یا نہیں، entity approved ہوتی ہے، اور Redis کے ذریعے Editor کو real-time notification ملتی ہے Approved کی۔ اگر Reject کرے: request rejected ہوتا ہے، entity previous state میں revert ہوتی ہے، اور Editor کو Rejected کی notification ملتی ہے۔"

---

# ═══════════════════════════════════════
# PART 10 — Sprint Highlights (تمام 9 Sprints)
# Speaker: Farhana Minhas | ⏱ ~8 min
# ═══════════════════════════════════════

📺 **Show:** Final Aegis-develop.docx یا PowerPoint Slide 12 (Sprint Summary)

**FM:**

> "اب میں تمام 9 sprints کے technical decisions walk through کروں گی۔"

> "**Sprint 1** — Foundation۔ Muhammad Haris — Scrum Master۔ Monorepo initialize ہوا، Docker Compose configure ہوا، JWT authentication with refresh tokens build ہوئی، RBAC middleware چار roles کے لیے deploy ہوا، Sequelize ORM migration system set up ہوا۔ Supervisor feedback: 'Authentication solid؛ requested RBAC be demonstrated with actual routes in Sprint 2۔' 18 story points committed، 18 delivered — password reset email deferred کیا گیا۔"

> "**Sprint 2** — Multi-Tenancy، Approvals، اور SSE۔ Ahmed — Scrum Master۔ اہم achievement schema-per-tenant implementation تھی۔ Sprint 2 class diagram ہمارا ApprovalWorkflow، ApprovalWorkflowStep، ApprovalRequest، اور ApprovalRequestStep data model دکھاتا ہے۔ Sequence diagram پورا approval flow دکھاتا ہے Editor submission سے Redis Pub/Sub تک Approver کی real-time SSE notification تک — 100ms سے کم میں۔ 39 story points — 100% delivered۔"

> "**Sprint 3** — EU AI Act۔ Farhana — Scrum Master۔ Reusable data seeder utility implement ہوئی — Sprint 2 retrospective action item — جس نے team کو چار گھنٹے بچائے۔ Sprint 3 class diagram EUAIActCategory، EUAIActControl، EUAIActSubControl، اور AutoDriver class دکھاتا ہے۔ Sequence diagram auto-fill flow دکھاتا ہے Editor کے Auto-Fill click سے OpenAI API call تک control database میں populate ہونے تک۔ 21 story points، 100% delivered۔"

> "**Sprint 4** — ISO 42001 اور ISO 27001۔ Muhammad Haris — Scrum Master۔ Same seeder pattern apply ہوا۔ ISO 42001 کا 7-stage workflow implement ہوا: Not Started → Initial Assessment → Gap Analysis → Remediation Planning → Implementation → Verification → Certified — ہر subclause کے لیے۔ ISO 27001 کے 93 Annex A controls seed اور individually trackable۔"

> "**Sprint 5** — Risk Management۔ Ahmed — Scrum Master۔ Sprint 5 sequence diagram risk creation کا exact flow دکھاتا ہے backend auto-calculation سمیت: Likelihood=4، Severity=4 دیتا ہے Score 4+12=16، جو High risk level map کرتا ہے۔ Severity=5 کرو تو 4+15=19 — Very High۔ ہر calculation change RiskHistory table میں snapshot ہوتی ہے۔ Decision table تمام 25 likelihood-severity combinations enumerate کرتی ہے۔ 31 story points committed، 31 delivered۔"

> "**Sprint 6** — Vendor Management، Policy Manager، Evidence Hub، Tasks۔ Farhana — Scrum Master۔ Sprint 6 sequence diagram policy lifecycle دکھاتا ہے: Editor Draft create کرتا ہے، review کے لیے submit کرتا ہے، Reviewer SSE notification پاتا ہے، Reviewer approve کرتا ہے، Editor publish کرتا ہے۔ اہم بات — Sprint 2 approval workflow engine reuse ہوا policy approvals کے لیے — اس سے تقریباً دو development days بچے۔ 26 story points، 100%۔"

> "**Sprint 7** — AI Model Inventory اور NIST AI RMF۔ Muhammad Haris — Scrum Master۔ Sprint 7 class diagram ModelInventory، ModelInventoryHistory، اور NistAiRmfFunction with NistAiRmfCategory دکھاتا ہے۔ NIST function mapping: GOVERN → Policy Manager، RBAC، Approval Workflows۔ MAP → Risk Management اور Use Cases۔ MEASURE → Risk Registry اور Scoring۔ MANAGE → Risk Mitigation اور PMM۔ 16 story points، 100%۔"

> "**Sprint 8** — LLM Evaluations اور AI Advisor UIs۔ Ahmed — Scrum Master۔ Deliberate UI-first strategy: live LLM connections کے بغیر پوری UI infrastructure build کرو۔ LLM API keys AES-256 encrypted database میں store ہوتی ہیں۔ Supervisor feedback: 'UI-first approach allows demonstration — practical strategy۔' 5 story points، 100%۔"

> "**Sprint 9** — Reporting، Search، AI Trust Center۔ Farhana — Scrum Master۔ PDF report generation Playwright سے deliver ہوئی — ایک headless Chromium instance جو styled HTML governance report render کرتا ہے اور PDF print کرتا ہے۔ CI میں ایک PDF formatting issue آئی rendering race condition کی وجہ سے — retry mechanism سے fix ہوئی۔ Command Palette Ctrl+K — global search 14 entity types میں: use cases، risks، vendors، policies، models، notes، evidence، incidents۔ Supervisor خاص طور پر Command Palette UX سے impressed ہوئے۔ 37 story points، 100%۔ اور یہ صرف وہ ایک bug تھا جو تمام 9 sprints میں reported ہوئی — اور وہ بھی اسی sprint میں resolve ہوئی۔"

---

# ═══════════════════════════════════════
# PART 11 — Results اور Statistics
# Speaker: Muhammad Haris | ⏱ ~7 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 15 (UAT Table) / Section 8

**MH:**

> "اب Phase 1 results اور test statistics مکمل طور پر present کرتا ہوں۔"

> "Correctness کی بات کریں — یعنی وہ test cases جن کا output specification سے بالکل match کیا۔ ہم نے کل 258 test cases لکھے۔ Suite کے حساب سے: 45 Jest unit tests — backend models، utilities، controllers — سب 45 pass۔ 32 frontend component tests React Testing Library plus Mock Service Worker سے — سب 32 pass۔ 28 API integration tests Supertest سے Express server کے خلاف directly — سب 28 pass۔ 90 extended sprint test cases — ہر sprint کے 10، happy-path اور negative-path دونوں — سب 90 pass۔ 8 security audit checks — Helmet.js، CORS، rate limiting، bcrypt، JWT expiry — سب 8 pass۔ 10 PMM cron scheduler tests مختلف timezone configurations میں — سب 10 correct۔ 15 PDF generation tests — سب 15 retry mechanism سے pass۔ Grand total: 258 لکھے، 258 pass، 0 fail — 100% correctness۔"

📺 **Show:** Section 8.3 Sprint-by-Sprint Test Case Summary

> "Sprint-by-sprint extended test case summary: Sprint 1 سے 9 تک، ہر sprint کے 10 test cases — سب 10 pass۔ 90 extended sprint test cases total — پورے development period میں صفر failures۔"

📺 **Show:** System Accuracy Table (Section 8.2)

> "Accuracy — یعنی system outputs کا expected outcome سے match۔ User Acceptance Testing: 43 user stories browser testing سے — 43 pass، 100%۔ Risk Level Auto-Calculation: 25 risk entries — 25 correct، 100%۔ Multi-Tenancy Data Isolation: 15 cross-tenant access attempts — سب 15 blocked، 100%۔ Approval Workflow Step Progression: 20 scenarios — سب 20 correct، 100%۔ PMM Cycle Auto-Scheduling: 10 cron trigger tests — 10 correct، 100%۔ RBAC Permission Enforcement: 30 unauthorized attempts — سب 30 blocked، 100%۔ SSE Real-Time Notification: 50 tests — 49 under 100ms، 1 missed Redis restart test پر — 98%، reconnect logic سے handle۔ PDF Report Accuracy: 15 reports — 14 fully accurate، 1 minor formatting drift Playwright race condition سے — 93%، retry سے fix۔ Overall Phase 1 system accuracy: approximately 99%۔"

📺 **Show:** Performance Benchmarks

> "Performance benchmarks: Simple GET requests — 50 milliseconds سے کم۔ Complex governance queries — 2 seconds سے کم۔ PDF generation Playwright سے — 3 سے 8 seconds۔ PMM PDF — approximately 3 seconds۔ LLM Evaluation per test case GPT-4o judge سے — 5 سے 15 seconds۔ SSE notification latency Redis Pub/Sub سے — 100 milliseconds سے کم۔ Frontend initial load Vite-optimized build سے — 2 seconds سے کم۔"

📺 **Show:** Feature Completeness Module Table

> "Feature completeness table میں Phase 1 کا ہر module اپنے route group اور status کے ساتھ listed ہے۔ Authentication and RBAC سے لے کر تمام چار compliance frameworks، Risk Management تین route groups کے ساتھ، Vendor Management، Policy Manager، Model Inventory، LLM Evaluations via EvalServer، AI Advisor with function calling، Evidence Hub، Global Search 14 entity types میں، AI Trust Center، CE Marking Registry، Task Management، AI Incident Management، Training Registry، Post-Market Monitoring، Entity Graph visualization، Reporting PDF اور DOCX دونوں کے لیے، Automations، Slack Integration، WatchTower Event Tracker، Docker Deployment، اور Kubernetes Deployment — 38 Phase 1 modules میں سے سب complete۔"

📺 **Show:** Section 7.1 Project Monitoring (GitHub)

> "Project monitoring کے لیے ہم نے GitHub use کیا۔ تمام 9 sprints GitHub Milestones کے طور پر track ہوئے۔ Issues labeled: feature، bug، test، docs، اور security۔ Progress GitHub Projects Kanban board پر visible تھی۔ CI/CD کے لیے — GitHub Actions نے تین pipelines چلائیں: ہر pull request پر ESLint اور TypeScript compilation۔ `develop` میں merge پر Docker build verification۔ `main` میں merge پر full test suite plus Docker image push۔ اس کا مطلب ہے `main` تک پہنچنے والا ہر code line automated quality gates سے گزرا۔"

---

# ═══════════════════════════════════════
# PART 12 — Conclusion اور Future Work
# Speaker: Ahmed Abdullah Khan | ⏱ ~6 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 18 (Conclusion)

**AAK:**

> "Aegis.AI کوئی prototype نہیں ہے۔ یہ ایک مکمل operational، enterprise-grade AI governance platform ہے جو آج on-premises production use کے لیے deploy ہو سکتا ہے۔ یہ platform چار بڑے compliance frameworks کو consolidate کرتا ہے، risk کو تین dimensions میں manage کرتا ہے — project، vendor، اور model — اور governance کو documentation سے آگے active AI safety evaluation، AI content detection، اور AI-powered advisory تک extend کرتا ہے۔"

> "Technology stack کی بات کریں: React 18 frontend Vite 6.x build tool کے ساتھ، Material UI 6.x components کے لیے، Redux Toolkit with redux-persist state management کے لیے، React Query v5 server state کے لیے، React Router v6۔ Backend Node.js 22.x Express 4.x کے ساتھ، TypeScript 5.x، Sequelize 6.x ORM۔ EvalServer Python FastAPI with DeepEval۔ PostgreSQL 15+ primary database۔ Redis with BullMQ۔ Authentication JWT plus bcrypt plus Google OAuth2۔ PDF generation Playwright with EJS templates۔ Containerization Docker Compose v3.8 اور Kubernetes 1.28+ سے۔ API documentation Swagger OpenAPI 3.0 سے۔ Testing Jest، Supertest، React Testing Library، اور Mock Service Worker سے۔ ہر piece deliberately production readiness کے لیے choose ہوا۔"

> "Notable technical achievements: Schema-per-tenant multi-tenancy جو 15 cross-tenant access attempts block کرنے پر verified ہوئی۔ Multi-step approval workflow engine 5 configurable sequential steps کے ساتھ full state-machine semantics — pending، approved، rejected، withdrawn، step-progressed۔ Real-time SSE notification system sub-100ms delivery کے ساتھ 50 concurrent tests میں confirmed۔ Automation Rule Engine 4 action types کے ساتھ: SEND_SLACK، SEND_EMAIL، CREATE_TASK، CALL_WEBHOOK۔ Post-Market Monitoring module BullMQ cron scheduling کے ساتھ EU AI Act Articles 9 اور 72 directly implement کرتا ہے۔ Global search 14 entity types میں Command Palette Ctrl+K سے۔ Public AI Trust Center regulatory transparency کے لیے۔ Complete Docker Compose اور Kubernetes 8 manifests کے ساتھ Horizontal Pod Autoscaler سمیت۔"

> "Codebase تقریباً 60,000 lines of TypeScript and Python پر مشتمل ہے تین independent applications میں۔ 60 active backend route modules — 66 utility routes سمیت۔ 40 سے زیادہ database tables۔ Documentation تمام 9 sprints cover کرتی ہے class diagrams، sequence diagrams، decision tables، اور extended test cases کے ساتھ — 10 per sprint، 90 total۔ Business Source License 1.1 کے تحت release۔"

📺 **Show:** PowerPoint Slide 19 (Future Work)

> "Phase 2 کے لیے ہمارے پاس 15 planned user stories ہیں — 114 story points — یہ سب وہ features ہیں جنہیں external services چاہیے جو Phase 1 میں available نہیں تھیں۔ ان میں شامل ہیں: AI Advisor کو live LLM API integration کے ساتھ activate کرنا۔ LLM Evaluations اور Arena full DeepEval benchmarking pipeline کے ساتھ complete کرنا۔ AI Detection Module GitHub repository scanning کے ساتھ activate کرنا۔ Bias and Fairness Evaluation per-group scoring کے ساتھ complete کرنا۔ SMTP اور AWS SES سے transactional emails enable کرنا۔ Full Slack automation integration۔ MLflow model metadata synchronization۔ اور cloud deployment AWS EKS یا Azure AKS پر۔"

> "اس سے آگے ہمارے long-term roadmap میں 10 items ہیں۔ پہلا: Granular permission system — resource-level access control۔ دوسرا: AI Risk Assessment auto-generation — LLM سے model description سے risk assessments۔ تیسرا: Regulatory Updates Feed — EU AI Act اور ISO changes automatically monitor کرنا۔ چوتھا: React Native mobile app — dashboard، alerts، اور approval actions چلتے پھرتے کے لیے۔ پانچواں: بی-directional Jira اور GitHub Issues integration۔ چھٹا: Federated Learning Governance۔ ساتواں: Expanded AI Agency — fully autonomous governance workflows human-in-the-loop approval کے ساتھ۔ آٹھواں: Compliance Template Marketplace — community library۔ نواں: Multi-language support — German، French، اور Arabic EU اور GCC markets کے لیے۔ دسواں: OSCAL export — machine-readable compliance artifacts formal certification submission کے لیے۔"

📺 **Show:** PowerPoint Slide 20 (Thank You)

---

# ═══════════════════════════════════════
# PART 13 — Closing
# تمام تین Members | ⏱ ~2 min
# ═══════════════════════════════════════

📺 **تینوں cameras ایک ساتھ visible**

**MH:** "یہ تھی ہماری Aegis.AI FYP Phase 1 کی مکمل presentation۔"

**AAK:** "ہم دل کی گہرائیوں سے Sir Usama Ahmad کا شکریہ ادا کرتے ہیں ان کی مسلسل guidance اور feedback کے لیے اس پورے سفر میں۔"

**FM:** "مکمل source code، documentation، sprint records، test cases، اور system diagrams ہمارے GitHub repository پر available ہیں — github.com/muhammadharis356/aegis-develop — اور submitted documentation package میں۔"

**MH:** "ہمیں یقین ہے کہ Aegis.AI AI governance space میں genuine value deliver کرتا ہے اور ہم Phase 2 مکمل کرنے کا انتظار کر رہے ہیں۔ آپ کے قیمتی وقت کا شکریہ۔"

**سب تینوں:** "Jazakallah Khair۔"

---

## ⏱ Speaker Time Table

| Part | Section | Speaker | وقت |
|------|---------|---------|-----|
| 1 | تعارف (Introduction) | MH | 4 min |
| 2 | مسئلہ اور مقاصد (Problem & Objectives) | MH | 8 min |
| 3 | Domain Analysis اور Architecture (C4 L1→L3, ERD, DFD) | AAK | 12 min |
| 4 | Product Backlog اور Scrum | FM | 6 min |
| 5 | Figma Designs | FM | 2 min |
| 6 | VS Code Walkthrough (Clean Arch, K8s, .env) | MH | 7 min |
| 7 | Live Demo (10+ modules) | AAK | 15 min |
| 8 | Algorithms Deep Dive + Constraints | MH | 10 min |
| 9 | Data Dictionary اور Approval Sequence | AAK | 5 min |
| 10 | Sprint Highlights (تمام 9) | FM | 8 min |
| 11 | Results اور Statistics | MH | 7 min |
| 12 | Conclusion اور Future Work | AAK | 6 min |
| 13 | Closing | سب | 2 min |
| **Total** | | | **~92 min** |

---

## ✂️ Trimming Guide (40–60 Min)

| کیا Cut کریں | وقت بچے گا |
|-------------|-----------|
| Part 3: صرف C4 L1 + ERD دکھائیں — L2، L3، DFD skip | −5 min |
| Part 6: `.env` اور Kubernetes skip کریں | −3 min |
| Part 7: WatchTower + Settings demo skip | −3 min |
| Part 8: صرف Algorithm 1 اور 4 رکھیں، constraints skip | −4 min |
| Part 9: Data Dictionary section پوری skip کریں | −5 min |
| Part 10: Sprint 3-7 کو 1 جملے میں summarize کریں | −3 min |
| Part 11: Sprint-by-sprint table اور CI/CD section skip | −3 min |
| Part 12: Tech stack paragraph cut کریں | −3 min |
| **Total saved** | **−29 min → ~63 min** |

> **40 min کے لیے:** مزید Part 2 trim کریں (Problem 3-5 ایک جملے میں) −3 min، Part 4 EPIC list skip کریں −2 min، Part 5 Figma پوری cut −2 min → **~56 min**۔ پھر Part 10 سے صرف Sprints 1، 2، 5، 9 رکھیں −4 min → **~52 min**۔

</div>
