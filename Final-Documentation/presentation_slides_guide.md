# Aegis.AI FYP Presentation — PowerPoint Slide-by-Slide Content Guide
> **Total Slides:** 20 | **Theme:** Dark, modern (dark navy/slate background, white text, green/teal accents)

---

## SLIDE 1 — Title Slide
**Layout:** Centered title, dark background with subtle gradient

| Element | Content |
|---------|---------|
| Main Title | **Aegis.AI** |
| Subtitle | AI Governance Platform |
| Tag line | FYP Phase 1 Presentation |
| Team Members | Muhammad Haris (F2022376040) • Ahmed Abdullah Khan (F2022376096) • Farhana Minhas (F2022376126) |
| Supervisor | Supervised by: Sir Usama Ahmad |
| Institution | Department of AI & Data Science, SST, UMT |
| Date | March 2026 |
| Logo | UMT Logo (top left corner) |

**Visual:** Aegis.AI logo or shield icon centered behind the title in a subtle, faded style

---

## SLIDE 2 — Agenda
**Layout:** Two-column list

| # | Section | Speaker |
|---|---------|---------|
| 1 | Introduction | MH |
| 2 | Problem Statement & Objectives | MH |
| 3 | Domain Analysis & System Architecture (C4 L1→L3, ERD, DFD) | AAK |
| 4 | Product Backlog & Scrum Methodology | FM |
| 5 | Figma Prototype Designs | FM |
| 6 | Live Demo — VS Code & Project Structure | MH |
| 7 | Live Demo — Running Platform (10+ modules) | AAK |
| 8 | Algorithms Deep Dive | MH |
| 9 | Data Dictionary & Approval Sequence | AAK |
| 10 | Sprint Highlights (All 9) | FM |
| 11 | Results & Statistics | MH |
| 12 | Conclusion & Future Work | AAK |

**Visual:** Simple numbered list with teal bullet icons. Each section has the presenter's initials badge.

---

## SLIDE 3 — The Problem (Problem Statement)
**Layout:** 5 bold numbered points on left, illustration/icon on right

**Title:** Why AI Governance is Broken Today

| # | Problem |
|---|---------|
| 1 | **Regulatory Complexity** — EU AI Act + ISO 42001 + ISO 27001 + NIST AI RMF = hundreds of controls to track simultaneously |
| 2 | **No Centralized Oversight** — AI models, risks, vendors, and policies managed in disconnected spreadsheets |
| 3 | **No Self-Hostable Alternative** — Existing tools are cloud-only SaaS (Credo AI, OneTrust) — unaffordable for SMEs |
| 4 | **Manual, Error-Prone Audits** — Time-consuming, inconsistent, not repeatable |
| 5 | **No Built-In AI Safety Evaluation** — No integrated LLM benchmarking, bias detection, or AI code scanning |

**Bottom quote box:** *"There is a need for a comprehensive, self-hostable AI governance platform."*

**Visual:** Red warning icons next to each problem point. Red-to-amber gradient accent bar.

---

## SLIDE 4 — Objectives
**Layout:** Grid of 6 objective boxes (2 rows × 3 columns)

**Title:** What Aegis.AI Set Out to Do

| Box | Objective |
|-----|-----------|
| 🏛️ | Support EU AI Act, ISO 42001, ISO 27001, NIST AI RMF from one interface |
| 📦 | AI Model Inventory with risk assessment & version tracking |
| 🤖 | AI Advisor — LLM-powered governance chatbot |
| 🔬 | LLM Evaluations & Arena for model benchmarking |
| 🔍 | AI Detection Module — scan GitHub repos for AI-generated code |
| 🏢 | Multi-tenancy with complete per-tenant data isolation |

**Visual:** Each objective in a card with a teal border and relevant icon

---

## SLIDE 5 — Customers & Stakeholders
**Layout:** Left = Customers (3 bullets), Right = Stakeholder table summary

**Title:** Who Is Aegis.AI For?

**Left column — Customers:**
- 🏭 Technology companies needing EU AI Act compliance
- 🏥 Enterprises in finance, healthcare, manufacturing, public sector
- 🏛️ Government bodies requiring AI transparency and oversight

**Right column — Stakeholders (simplified table):**
| Role | Description |
|------|-------------|
| Admin | Full platform control |
| Editor | Day-to-day governance work |
| Reviewer | Reviews submissions, approves/rejects |
| Auditor | Read-only; generates compliance reports |
| System | Background jobs (PMM, automation, email) |

**Bottom note:** *"Platform is self-hosted — suitable for data sovereignty and air-gapped environments."*

---

## SLIDE 6 — Competitor Feature Comparison
**Layout:** Comparison matrix table

**Title:** How Aegis.AI Compares to Existing Solutions

| Feature | Credo AI | IBM OpenScale | Holistic AI | OneTrust AI | **Aegis.AI** |
|---------|:--------:|:-------------:|:-----------:|:-----------:|:------------:|
| EU AI Act Support | — | — | — | — | ✅ |
| ISO 42001 | Partial | — | Partial | — | ✅ |
| ISO 27001 | — | — | — | — | ✅ |
| NIST AI RMF | — | Partial | Partial | Partial | ✅ |
| LLM Evaluations | — | Partial | — | — | ✅ |
| AI Detection Module | — | — | — | — | ✅ |
| On-Premises Deploy | — | — | — | — | ✅ |
| Multi-Tenancy | — | — | — | — | ✅ |

**Visual:** Aegis.AI column highlighted in green. Stars next to unique features.

---

## SLIDE 7 — System Architecture
**Layout:** Architecture diagram with 3-tier annotations

**Title:** Technical Architecture — PERN + Python

**Diagram elements (describe to designer):**

```
[React + TypeScript Frontend]  ←→  [Node.js + Express Backend]  ←→  [PostgreSQL (Schema-per-Tenant)]
         |                                    |                                    |
   Material UI                       Clean Architecture                      Redis (BullMQ)
   React Router                   Repository Pattern                     Real-time SSE
   Zustand state                  Sequelize ORM
         |
[Python FastAPI — EvalServer]  ←→  [DeepEval Framework]
```

**Key bullets:**
- **Frontend:** React 18, TypeScript, Material UI, Zustand
- **Backend:** Node.js, Express.js, TypeScript, Sequelize ORM
- **Database:** PostgreSQL (schema-per-tenant multi-tenancy) + Redis
- **Evaluation Server:** Python, FastAPI, DeepEval
- **Auth:** JWT + RBAC (4 roles: Admin, Editor, Reviewer, Auditor)
- **Deployment:** Docker Compose + Kubernetes

---

## SLIDE 8 — System Integrations
**Layout:** Hub-and-spoke diagram centered on "Aegis.AI"

**Title:** External Integrations

**Spokes (each with icon):**
- 🤖 OpenAI / Anthropic — AI Advisor
- 📊 MLflow — AI Model metadata sync
- 🐙 GitHub API — AI Detection Module
- 💬 Slack — Governance alerts & automation
- 📧 AWS SES / SMTP / Resend — Email notifications
- 🔑 Google OAuth2 — SSO authentication
- 🧪 DeepEval — LLM benchmarking

**Note box:** *"All integrations are optional & modular — platform runs fully offline if needed."*

---

## SLIDE 9 — Product Backlog Summary
**Layout:** 3-column summary cards + pie chart

**Title:** Product Backlog — 58 User Stories | 20 EPICs

**Summary cards:**
| | FYP 1 (Phase 1) | FYP 2 (Future) | Total |
|-|:-:|:-:|:-:|
| Total User Stories | **43** | **15** | **58** |
| Story Points | **230** | **114** | **344** |
| ✅ Done | **43** | — | **43** |
| *(Planned)* | — | **15** | **15** |

**Pie chart:** 74% (43 stories) Done — Green | 26% (15 stories) Planned — Amber

**Epic highlight bullets:**
- User Management & RBAC ✅
- Multi-Tenancy & Org Management ✅
- Approval Workflows ✅
- Framework Management (EU AI Act, ISO 42001, ISO 27001, NIST AI RMF) ✅
- Risk, Vendor, Policy, Model Inventory ✅
- LLM Evaluations, AI Advisor, AI Detection *(Planned)*

---

## SLIDE 10 — Sprint Timeline
**Layout:** Horizontal Gantt-style timeline

**Title:** 9 Sprints | 5 Months | November 2025 — March 2026

| Sprint | Dates | Goal | Scrum Master |
|--------|-------|------|-------------|
| Sprint 1 | Nov 15–28 | Foundation & Authentication | **MH** |
| Sprint 2 | Dec 1–14 | Multi-Tenancy & Approvals & SSE | **AAK** |
| Sprint 3 | Dec 15–28 | EU AI Act Framework | **FM** |
| Sprint 4 | Jan 2–15 | ISO 42001 & ISO 27001 | **MH** |
| Sprint 5 | Jan 16–29 | Risk Management | **AAK** |
| Sprint 6 | Feb 1–14 | Vendor, Policy, Tasks | **FM** |
| Sprint 7 | Feb 15–28 | AI Model Inventory & NIST AI RMF | **MH** |
| Sprint 8 | Mar 1–7 | LLM Evals UI & AI Advisor UI | **AAK** |
| Sprint 9 | Mar 8–20 | Reporting, Evidence Hub, Search, AI Trust Center | **FM** |

**Visual:** Color-coded bars: MH = Blue, AAK = Orange, FM = Purple

---

## SLIDE 11 — Team Contributions
**Layout:** 3 cards side-by-side (one per member)

**Title:** Team Member Contributions

### 🔵 Muhammad Haris — Core Infrastructure & Backend
- Monorepo architecture setup
- JWT authentication & token refresh logic
- Sequelize ORM & database migrations
- Approval Workflows engine (multi-step state machine)
- Risk Management backend & auto-scoring algorithm
- Post-Market Monitoring (BullMQ scheduling)
- Global Search (14 entity types + Command Palette)
- **Scrum Master: Sprints 1, 4, 7**

### 🟠 Ahmed Abdullah Khan — DevOps, Compliance & Architecture
- Docker Compose & Kubernetes manifests (8 manifests incl. HPA)
- RBAC middleware (4-role permission system)
- EU AI Act module (13 control categories, ~60 controls)
- ISO 42001 (AIMS) & ISO 27001 (ISMS) modules
- NIST AI RMF (4 functions, ~70 subcategories)
- AI Model Inventory backend + MLflow integration
- SSE notification system with Redis Pub/Sub
- DOCX report generation
- **Scrum Master: Sprints 2, 5, 8**

### 🟣 Farhana Minhas — Frontend, UI/UX & Testing
- React 18 component architecture (50+ pages)
- Login, Registration, and Onboarding UI
- Vendor Management & Policy Manager UI
- WatchTower Event Tracker frontend
- Reporting & PDF/DOCX export UI
- Figma UI/UX prototypes (20 screens)
- Test case documentation & UAT execution
- **Scrum Master: Sprints 3, 6, 9**

---

## SLIDE 12 — Sprint Summary (Key Deliverables)
**Layout:** Two-column text, sprint on left, key features on right

**Title:** What We Built — Sprint by Sprint

| Sprints | Key Deliverables |
|---------|-----------------|
| 1–2 | Auth, RBAC, Multi-tenancy, Approval Workflows, SSE notifications |
| 3–4 | EU AI Act, ISO 42001, ISO 27001, NIST AI RMF compliance modules |
| 5–6 | Risk Management (auto-scoring), Vendor Management, Policy Manager, Tasks |
| 7–8 | AI Model Inventory, NIST framework completion, LLM Evals UI, AI Advisor UI |
| 9–10 | Reporting (PDF/DOCX), Evidence Hub, Global Search, AI Trust Center, WatchTower, Incidents |
| 11 | Post-Market Monitoring (PMM), Automation scaffolding |

---

## SLIDE 13 — Sprint Velocity Chart
**Layout:** Bar chart (commit/done story points per sprint)

**Title:** Sprint Velocity — Phase 1

| Sprint | Committed | Delivered |
|--------|-----------|-----------|
| S1 | 18 | 18 |
| S2 | 39 | 39 |
| S3 | 21 | 21 |
| S4 | 22 | 22 |
| S5 | 31 | 31 |
| S6 | 26 | 26 |
| S7 | 16 | 16 |
| S8 | 5 | 5 |
| S9 | 37 | 37 |

**Note:** *"100% delivery rate — 230 total story points delivered across 9 sprints"*

---

## SLIDE 14 — Live Demo Placeholder (Transition Slide)
**Layout:** Full-width text with icon

**Title:** Live Demo

**Body:**
> 🖥️ Switching to Live Application Demo
> 
> Running locally at: `http://localhost:5173`
>
> Services active: Node.js Backend • React Frontend • PostgreSQL • Redis

**Note for presenter:** This slide stays visible briefly while you switch screens. No need to explain it — just say "Let me switch to the live application."

---

## SLIDE 15 — Results: UAT & System Accuracy
**Layout:** Two tables side by side

**Title:** Testing Results — Phase 1

**Left Table — UAT Summary:**
| Metric | Value |
|--------|-------|
| Total Phase 1 User Stories | 43 |
| Tested via Browser UAT | 43 |
| Stories Passed | 43 |
| Pass Rate | **100%** |

**Right Table — System Accuracy:**
| Area | Accuracy |
|------|----------|
| User Acceptance Testing | **100%** |
| Risk Auto-Calculation | **100%** |
| Multi-Tenant Isolation | **100%** |
| Approval Workflow Progression | **100%** |
| PMM Auto-Scheduling | **100%** |
| RBAC Permission Enforcement | **100%** |
| SSE Real-Time Notifications | **98%** |
| PDF Report Accuracy | **93%** |
| **Overall System Accuracy** | **~99%** |

---

## SLIDE 16 — Platform Completion Metrics
**Layout:** 3 large metric cards + donut chart

**Title:** Platform Completion — Phase 1

**Metric cards:**
- 🟢 **43 / 58** User Stories Complete
- 🟢 **43 / 43** Phase 1 Stories = 100%
- 🟠 **15 stories** Planned for Phase 2

**Donut chart:** 74% complete (green) / 26% future (amber)

**Note:** *"Platform fully functional for Phase 1 scope. Phase 2 features require LLM API keys, SMTP, GitHub tokens."*

---

## SLIDE 17 — Framework Coverage
**Layout:** 4 cards, one per framework

**Title:** AI Compliance Framework Coverage

| Framework | Coverage |
|-----------|----------|
| 🇪🇺 **EU AI Act** | 13 control categories, ~60 questionnaire controls |
| 📋 **ISO 42001** | 7 clauses, Annex A & B — 7-stage workflow per subclause |
| 🔒 **ISO 27001** | 7 clauses, 93 Annex A controls — implementation tracking |
| 🇺🇸 **NIST AI RMF** | 4 functions (Govern/Map/Measure/Manage), ~70 subcategories |

**Visual:** Each framework card with official logo/flag icon and a green ✅ badge

---

## SLIDE 18 — Conclusion
**Layout:** 4 bullet achievement summary

**Title:** What We Achieved in FYP Phase 1

- ✅ Built a fully functional, self-hostable AI Governance Platform from scratch
- ✅ 43 user stories across 20 EPICs delivered and tested — 100% UAT pass rate
- ✅ Complete coverage of EU AI Act, ISO 42001, ISO 27001, and NIST AI RMF
- ✅ No comparable open-source self-hostable product provides this scope of features
- ✅ Clean Architecture, Docker + Kubernetes deployment, Multi-tenancy fully operational
- ✅ ~99% overall system accuracy across all measured areas

**Bottom quote:** *"Aegis.AI democratizes AI governance for organizations that cannot afford enterprise SaaS tools."*

---

## SLIDE 19 — Future Work (FYP Phase 2)
**Layout:** Numbered list with timeline hint

**Title:** What's Next — FYP Phase 2 (15 User Stories | 114 Story Points)

| # | Feature | Requirement |
|---|---------|-------------|
| 1 | AI Advisor with live LLM API | OpenAI / Anthropic key |
| 2 | LLM Evaluations & Arena (DeepEval) | EvalServer + API key |
| 3 | AI Detection Module (GitHub scanning) | GitHub token |
| 4 | Bias & Fairness Evaluation | EvalServer + LLM key |
| 5 | Email Notifications (password reset, PMM) | SMTP / AWS SES |
| 6 | Slack Automation integration | Slack webhook |
| 7 | MLflow model sync | MLflow instance |
| 8 | Cloud Deployment (AWS/Azure) | Cloud infrastructure |

---

## SLIDE 20 — Thank You
**Layout:** Centered, dark background, subtle shield/logo icon

**Title:** Thank You

**body:**
> *"We sincerely thank Sir Usama Ahmad for his continuous guidance and support throughout FYP Phase 1."*

| Resource | Link |
|---------|------|
| 🐙 GitHub Repository | github.com/muhammadharis356/aegis-develop |
| 📄 Documentation | Submitted with this presentation |
| 🎨 Figma Designs | figma.com/design/35gFjjYXV4dOuEBV08LCg6/Aegis.AI |

**Names with roll numbers:**
- Muhammad Haris — F2022376040
- Ahmed Abdullah Khan — F2022376096
- Farhana Minhas — F2022376126

**Bottom:** *"Any questions? We're happy to answer."*

---

## 🎨 PRE-BUILT THEME GUIDELINES FOR DESIGNER

| Element | Value |
|---------|-------|
| Background | #0D1117 (dark navy) |
| Primary accent | #00C896 (teal green) |
| Secondary accent | #3B82F6 (blue) |
| Warning accent | #F59E0B (amber) |
| Text (primary) | #FFFFFF |
| Text (secondary) | #9CA3AF |
| Font (heading) | Inter Bold or Outfit Bold |
| Font (body) | Inter Regular |
| Card background | #161B22 (slightly lighter navy) |
| Card border | 1px solid #30363D |
