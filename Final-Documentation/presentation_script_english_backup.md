# Aegis.AI — Full Presentation Script (~90 Min)
> **Format:** Recorded Zoom | **MH** = Muhammad Haris | **AAK** = Ahmed Abdullah Khan | **FM** = Farhana Minhas
> **Language:** English | Original (Urdu): `presentation_script.md`

---

## 🎬 Pre-Recording Checklist
- [ ] Services must be running: backend `:3000`, frontend `:5173`, EvalServer `:8000`
- [ ] Browser must have `http://localhost:5173` open (login page visible)
- [ ] VS Code must have `d:\aegis-develop` open (Explorer sidebar visible)
- [ ] `Final Aegis-develop.docx` open in VS Code (for diagram reference)
- [ ] Figma link ready: `figma.com/design/35gFjjYXV4dOuEBV08LCg6/Aegis.AI`
- [ ] Zoom Focus Assist ON — Display names: Full Name + Roll Number
- [ ] GitHub repo tab open: `github.com/muhammadharis356/aegis-develop`
- [ ] PowerPoint on Slide 1 and ready

---

# ═══════════════════════════════════════
# PART 1 — Introduction
# Speaker: Muhammad Haris | ⏱ ~4 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 1 (Title Slide)

**MH:**

> "Assalam-o-Alaikum, and welcome to our FYP Phase 1 recorded presentation. Our project is Aegis.AI — an AI Governance Platform. My name is Muhammad Haris, student ID F2022376040. With me are Ahmed Abdullah Khan, ID F2022376096, and Farhana Minhas, ID F2022376126. We are students from the Department of Artificial Intelligence and Data Science, School of Systems and Technology, University of Management and Technology, Lahore, and our supervisor is Sir Usama Ahmad."

> "Aegis.AI is a self-hostable AI governance platform that helps organizations deploy Artificial Intelligence safely, responsibly, and in compliance with global regulations — including the EU AI Act, ISO 42001, ISO 27001, and the NIST AI Risk Management Framework."

> "We began Phase 1 development in November 2025 and completed our 9 sprints by March 2026. In today's presentation, we will walk you through the problem we solved, the system we built, a live demo running on localhost, and our complete results and statistics — all in detail."

📺 **Show:** PowerPoint Slide 2 (Agenda)

> "Today's agenda consists of 12 sections. We will start with the problem and objectives, then move to domain analysis, system architecture, product backlog, Scrum methodology, a VS Code codebase walkthrough, a full live application demo, an algorithms deep dive, a data dictionary walkthrough, highlights from all 9 sprints, results and statistics, and finally the conclusion and future work. So without wasting any time, let us begin."

---

# ═══════════════════════════════════════
# PART 2 — Problem & Objectives
# Speaker: Muhammad Haris | ⏱ ~8 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 3 (The Problem)

**MH:**

> "Let us start with the problem. The rapid proliferation of Artificial Intelligence systems in enterprise environments has far outpaced the development of governance frameworks. Organizations deploying AI face mounting regulatory pressure — especially in the European Union, where the EU AI Act became enforceable in 2024 and mandates structured risk assessments, documentation, human oversight mechanisms, and post-market monitoring for high-risk AI systems."

> "ISO 42001 — published in 2023 as the world's first international standard for AI Management Systems — and ISO 27001 for information security, add further layers of compliance. And in the United States, the NIST AI Risk Management Framework covers the AI lifecycle through four functions: Govern, Map, Measure, and Manage."

> "Consider a real scenario — a hospital deploys an AI system for cancer diagnosis. That system produces an incorrect diagnosis. If there is no governance, no audit trail, no risk assessment — a patient's life is put at risk and the hospital faces a violation of the EU AI Act. This is exactly the real-world consequence these regulations aim to prevent. And this is precisely the problem Aegis.AI solves."

> "We identified five core governance problems:"

> "**Problem 1: Regulatory Complexity.** Compliance with all four frameworks simultaneously requires tracking hundreds of controls, assessments, and evidence items. There is no single dashboard where an organization can view its complete compliance posture."

> "**Problem 2: Lack of Centralized Oversight.** AI models, risks, vendors, and policies are being managed across separate spreadsheets and disconnected tools — no unified view, no audit trail."

> "**Problem 3: No Self-Hostable Alternative.** Credo AI, Holistic AI, IBM OpenScale, OneTrust AI — these are all cloud-only SaaS products with enterprise pricing. Organizations that require data sovereignty — especially government bodies — legally cannot send their governance data to a third-party cloud."

> "**Problem 4: Manual and Error-Prone Audits.** Existing audit processes are manual, time-consuming, and inconsistent — leading to compliance gaps and reporting delays."

> "**Problem 5: No Built-In AI Safety Evaluation.** There are no integrated tools to evaluate LLM behavior, detect AI-generated code, or monitor model quality over time."

> "Our conclusion: there is a need for a comprehensive, self-hostable AI governance platform that centralizes compliance management, risk tracking, vendor oversight, model evaluation, and policy governance into a single system. And this is exactly what Aegis.AI provides."

📺 **Show:** PowerPoint Slide 4 (Objectives)

> "We had ten core objectives: First — a full-stack governance platform that supports all four major compliance frameworks from a single interface. Second — AI Model Inventory with risk assessment and version history. Third — a Vendor Management module. Fourth — a Policy Manager with lifecycle management and control linking. Fifth — AI Advisor, an LLM-powered chatbot that uses function calling to deliver context-aware governance recommendations. Sixth — an LLM Evaluations module and Arena that uses DeepEval for model benchmarking. Seventh — an AI Detection Module that scans GitHub repositories for AI-generated code. Eighth — PostgreSQL schema-per-tenant multi-tenancy. Ninth — Docker and Kubernetes deployment. Tenth — PDF and DOCX compliance report generation."

> "These ten objectives map directly to our 20 EPICs and 58 user stories — which Farhana will cover in a moment."

---

# ═══════════════════════════════════════
# PART 3 — Domain Analysis & Architecture
# Speaker: Ahmed Abdullah Khan | ⏱ ~12 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 5 (Customers & Stakeholders)

**AAK:**

> "Thank you, Haris. I am Ahmed Abdullah Khan. I will now cover the domain analysis and then the system architecture in detail."

> "Aegis.AI targets four customer segments. First — technology companies building AI products that need EU AI Act compliance. Second — regulated industries such as banking, healthcare, manufacturing, and the public sector that are integrating third-party or in-house AI. Third — industries where AI use is subject to sectoral oversight. Fourth — government and public sector bodies deploying AI in citizen-facing services that require transparency and human oversight."

> "Our stakeholder model covers ten actor types. Admin with full platform control: creating organizations, managing users, building approval workflow templates, managing API tokens and LLM keys. Editor or AI Governance Officer: day-to-day governance — filling controls, creating risks, managing vendors and policies. Reviewer: reviewing and approving or rejecting submissions. Auditor: read-only access and generating compliance reports. End Users: task assignees. External Vendors, Regulatory Bodies, and LLM Providers such as OpenAI and Anthropic are external stakeholders. The IT/DevOps team handles deployment. And System background workers perform automated jobs — PMM scheduling, automation rule execution, and email notifications."

📺 **Show:** PowerPoint Slide 6 (Feature Comparison)

> "Our competitor comparison shows that IBM OpenScale is primarily cloud-hosted and limited to fairness and drift monitoring. Credo AI is SaaS-only with partial ISO support. Holistic AI is SaaS with partial NIST and ISO. OneTrust AI is an enterprise SaaS with partial multi-framework support. Aegis.AI is the only platform that offers all of the following together: complete EU AI Act, complete ISO 42001, complete ISO 27001, complete NIST AI RMF, integrated LLM Evaluation and Arena, an AI Detection Module, full multi-tenancy, and on-premises deployment — at no cost, self-hosted."

📺 **Show:** `Final Aegis-develop.docx` → Section 5.1 C4 Level 1 Diagram

> "In the C4 Level 1 architecture, there are three independently deployable services. A React SPA on port 5173 with Vite — initial load under 2 seconds. It communicates via REST/JSON with the Node.js TypeScript backend on port 3000, and directly with the Python FastAPI EvalServer on port 8000. The backend has 60 active route modules, JWT plus RBAC middleware, and tenant identification middleware. PostgreSQL on port 5432 with schema-per-tenant isolation — each organization has its own dedicated schema. Redis on port 6379 for both BullMQ job queues and SSE Pub/Sub."

📺 **Show:** Section 5.2 C4 Level 2 Container Diagram

> "In C4 Level 2, there is a React 18 SPA with Vite, Material UI, Redux Toolkit plus redux-persist, React Query v5, and React Router v6 — with over 50 pages. The backend is Node.js 22.x with Express 4.x, TypeScript 5.x, and Sequelize 6.x ORM. The EvalServer is Python FastAPI with the DeepEval framework — for LLM benchmarking, Arena comparisons, and Bias and Fairness evaluations."

📺 **Show:** Section 5.3 C4 Level 3 Component Diagram

> "This is the true proof of our enterprise-grade architecture — the C4 Level 3 component decomposition. Inside the Backend API container there are 8 major components. Auth Middleware: validates JWT and extracts user identity on every request. Tenant Middleware: sets the PostgreSQL schema search path. RBAC Middleware: checks the user's role against the required permission for the route — and immediately returns 403 if not authorized. 60 Route Modules: define the endpoints for all 17 feature domains. Controllers: handle request and response and delegate to Models and Services. SSE Publisher: delivers real-time events to subscribed browser clients via Redis Pub/Sub. PMM Scheduler: a BullMQ worker — hourly cron job that creates PMM cycles and sends due notifications. PDF Generator: uses Playwright to render styled HTML governance reports and print them as PDFs."

📺 **Show:** Section 5.4 Clean Architecture Flowchart

> "Clean Architecture has exactly 4 layers. The Presentation Layer contains 60 Express route modules and three middleware files. The Application Layer contains controllers and domain services — SSE service, Slack service, PMM scheduler, PDF generator. The Domain Layer contains Sequelize models, TypeScript interfaces, shared enumerations, and business rules — the risk formula L×1 + S×3, and PMM escalation logic. The Infrastructure Layer is the outermost ring: PostgreSQL, Redis, email services, LLM APIs. Most importantly — dependencies point only inward. That means we can replace PostgreSQL with any other database without touching a single line of business logic."

📺 **Show:** Section 5.4 ERD Mermaid Diagram

> "In the Entity Relationship Diagram, there are 15 major table groups. At the top, Organizations have many Users and Projects. Projects have many ProjectRisks — each with a RiskHistory snapshot table and a RiskChangeHistory audit table. Projects also have VendorRisks, ModelInventories, ApprovalRequests, Tasks, Incidents, and PMM configurations. ApprovalWorkflows have ApprovalWorkflowSteps and generate ApprovalRequests which have ApprovalRequestSteps. Policies have PolicyLinkedObjects — any policy can be linked to any framework control or risk — and PolicyChangeHistory. PMM configurations define PMM Questions, generate PMM Cycles, which collect PMM Responses and produce PMM Reports."

📺 **Show:** Section 5.7 DFD Level 1

> "DFD Level 1 decomposes Aegis.AI into 8 major internal processes and 4 data stores. P1: Authentication and User Management. P2: Compliance Framework Management — EU AI Act, ISO, NIST. P3: Risk and Vendor Management. P4: LLM Evaluation and AI Advisory. P5: Reporting and Document Generation. P6: Automation and Notification Engine. P7: Post-Market Monitoring. P8: AI Detection and Repository Scanning. 4 data stores: DS1 — PostgreSQL public schema, DS2 — PostgreSQL tenant governance data, DS3 — Redis, DS4 — EvalServer database."

> "On multi-tenancy: when an organization registers, the system creates a dedicated schema — using a 10-character cryptographically random hash, not the org name — for security. The Tenant Middleware extracts the org ID from the JWT and then sets the PostgreSQL search_path. This is enforced at the database engine level — two tenants physically cannot access each other's data regardless of any application-level bug. We ran 15 cross-tenant access tests — all 15 were correctly blocked."

---

# ═══════════════════════════════════════
# PART 4 — Product Backlog & Scrum
# Speaker: Farhana Minhas | ⏱ ~6 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 9 (Backlog Summary) + Final Aegis-develop.docx Section 3.3

**FM:**

> "Thank you, Ahmed. I am Farhana Minhas, F2022376126. I will explain how we planned and managed development through Scrum."

> "Our product backlog hierarchy goes from 20 EPICs down to 58 individual User Stories. Each story is in the format: As a role, I can do something, so that benefit. Every story includes a Priority, Acceptance Criteria that define exactly the conditions under which the story is complete, Story Points, and a Status."

> "The 20 EPICs cover the entire AI governance lifecycle. EPIC 1 — User Management and RBAC. EPIC 2 — Multi-Tenancy and Organization Management. EPIC 3 — Approval Workflows. EPIC 4 — Framework Management covering all four regulations. EPIC 5 — Risk Management. EPIC 6 — Vendor Management. EPIC 7 — Policy Management. EPIC 8 — AI Model Inventory. EPICs 9, 10, 16, 17 — LLM Evaluations, AI Advisor, AI Detection Module, and Bias and Fairness — these are Phase 2 features. EPIC 11 — Search and Navigation. EPIC 12 — Reporting and Dashboard. EPIC 13 — Shared Collaboration. EPIC 14 — Automations and Notifications. EPIC 15 — Incident Management and Training Registry. EPIC 18 — Post-Market Monitoring. EPIC 19 — Policy Templates. EPIC 20 — WatchTower Event Tracker."

> "In Phase 1, we completed 43 user stories — 230 story points — and all were verified through live browser user acceptance testing. 15 stories, totaling 114 story points, were deferred to Phase 2 because they require external infrastructure: LLM API keys, SMTP servers, a running MLflow instance, Slack webhooks, and GitHub tokens. However, the UIs for all these features are fully built — they degrade gracefully when the external dependency is absent."

📺 **Show:** PowerPoint Slide 10 (Sprint Timeline)

> "Development was organized into 9 two-week sprints — from November 15, 2025 to March 20, 2026. The Scrum Master role rotated: Muhammad Haris led Sprints 1, 4, and 7. Ahmed Abdullah Khan led Sprints 2, 5, and 8. I led Sprints 3, 6, and 9. Every sprint had complete Scrum ceremonies: Planning Meeting, Daily Standups, Sprint Review where Sir Usama Ahmad acted as Product Owner, and Retrospective. Sprint health consistently remained 4 to 5 out of 5."

📺 **Show:** PowerPoint Slide 11 (Team Contributions)

> "In terms of individual contributions: Muhammad Haris built monorepo setup, JWT authentication with refresh tokens, Sequelize ORM and migrations, Approval Workflows engine, Risk Management scoring algorithm, PDF report generation, and Global Search. Ahmed Abdullah Khan built Docker Compose, Kubernetes manifests, RBAC middleware, EU AI Act seeding and control engine, ISO 42001 and ISO 27001 implementations, NIST AI RMF seeding, Model Inventory, SSE notification system with Redis Pub/Sub, and DOCX report generation. I built the entire frontend React component architecture with 50+ pages, Login and Registration UI, Vendor Management UI, Policy Manager UI, WatchTower event tracker frontend, Command Palette, Reporting UI, and all 20 Figma prototype designs."

---

# ═══════════════════════════════════════
# PART 5 — Figma Designs Showcase
# Speaker: Farhana Minhas | ⏱ ~2 min
# ═══════════════════════════════════════

📺 **Open:** Figma design link or Final Aegis-develop.docx Section 3.4 screenshots

**FM:**

> "Before the live demo, I will briefly walk through the Figma prototype designs I developed. You can see the dark professional theme — dark navy backgrounds, teal accent colors, Inter typography. Login page with the Aegis.AI shield logo, Dashboard with risk distribution charts, Overview page with use case cards, Risk Management registry with color-coded severity levels, Policy Manager lifecycle view, AI Trust Center public page, LLM Evaluations dashboard, WatchTower event tracker, Approval Workflows inbox, and Settings page. All 20 screens were designed before and during development — to guide the React implementation."

---

# ═══════════════════════════════════════
# PART 6 — VS Code: Codebase Walkthrough
# Speaker: Muhammad Haris | ⏱ ~7 min
# ═══════════════════════════════════════

📺 **Switch to:** VS Code — `d:\aegis-develop`

**MH:**

> "Now I will switch to VS Code to show you the codebase before we move to the live application."

📺 **Show:** Root folder in Explorer

> "In the repository root, there are three application directories. `Clients` — the React TypeScript frontend. `Servers` — the Node.js TypeScript backend. `EvalServer` — the Python FastAPI evaluation server. Alongside these are `Figma-Designs` with all Figma screenshots, `Final-Documentation` containing our FYP report, `kubernetes/.k8s` with production deployment manifests, and `docker-compose.yml` at the root."

📺 **Open:** `Servers/index.ts` briefly

> "The backend entry point initializes Express, connects to PostgreSQL via Sequelize, connects to Redis, registers the tenant middleware and JWT middleware, and finally mounts 60 independent route modules. Every feature of the platform has its own dedicated route file — this is our application layer boundary."

📺 **Show:** `Servers/` folder structure

> "The folder names directly reflect the Clean Architecture layers. `routes/` — Presentation Layer — 60 route files. `controllers/` — Application Layer — request handlers with no business logic. `domain.layer/models/` — Domain Layer — Sequelize ORM models for every entity: users, projects, risks, vendors, approval workflows, policies, PMM configs. `services/` — shared infrastructure: SSE publisher service, Slack service, PDF generator using Playwright, PMM scheduler. `jobs/` — BullMQ workers. `advisor/` — AI Advisor tool function definitions for function calling."

📺 **Expand:** `Servers/routes/` folder

> "The route files are: users, roles, projects, eu-ai-act, iso-42001, iso-27001, nist-ai-rmf, projectRisks, riskHistory, risk-change-history, vendorRisks, vendors, policies, modelInventory, modelRisks, approvalWorkflows, approvalRequests, notifications, reporting, evidenceHub, notes, tasks, ai-incidents, training, post-market-monitoring, automations, slackWebhooks, integrations for mlflow and github, aiDetection, aiTrustCentre, ceMarking, entityGraph, search, llm-keys, deepeval, evaluation-llm-keys, advisor, logger, dashboard, shares, file-manager. 60 active route modules — 66 including utility routes."

📺 **Open:** `Servers/middleware/` — jwtAuth.ts, rbac.ts, tenantScope.ts

> "Three core middleware files secure every request in this sequence. First, `jwtAuth.ts` verifies the incoming JWT token — checks signature and expiry — and extracts the user ID, role, and organization ID. Then `tenantScope.ts` takes that org ID and issues `SET search_path TO <tenant_schema>` to PostgreSQL — scoping all queries to that organization's private schema. Then `rbac.ts` loads the user's role and checks whether that role has the required permission for the specific route — if not, it immediately returns 403. This three-layer security chain runs on every single request."

📺 **Open:** `Servers/.env.example` briefly

> "The environment variables reveal the full integration picture. `DATABASE_URL` for PostgreSQL. `REDIS_URL` for Redis. `JWT_SECRET` for signing tokens. `OPENAI_API_KEY` and `ANTHROPIC_API_KEY` for the AI Advisor — both optional. `SLACK_WEBHOOK_URL` for automation notifications. `EMAIL_PROVIDER` — `ses`, `smtp`, `azure`, or `resend` — fully modular. `GITHUB_TOKEN` for the AI Detection Module. `MLFLOW_TRACKING_URI` for model metadata sync. `SSL_KEY_PATH` and `SSL_CERT_PATH` for production HTTPS."

📺 **Open:** `kubernetes/.k8s/` folder

> "On Kubernetes manifests — there are eight manifest files here: `deployment.yaml` for the Node.js backend, `client-deployment.yaml` for the React Nginx frontend, `evalserver-deployment.yaml` for Python FastAPI, `worker-deployment.yaml` for the BullMQ background worker in a separate scalable deployment, `postgres-deployment.yaml` as a StatefulSet with persistent volume, `redis-deployment.yaml`, `ingress.yaml` for Nginx Ingress with SSL termination, and `hpa.yaml` — the Horizontal Pod Autoscaler for the backend. This means Aegis.AI can horizontally scale in production — on AWS EKS, Azure AKS, or a self-hosted Kubernetes cluster."

📺 **Open:** `docker-compose.yml` briefly

> "The Docker Compose file contains five services with health checks: postgres, redis, Node.js server, React frontend via Nginx, and Python evalserver. One command — `docker-compose up -d` — and the entire platform starts, fully networked. This directly delivers our self-hosted deployment objective."

---

# ═══════════════════════════════════════
# PART 7 — Live Demo: Running Application
# Speaker: Ahmed Abdullah Khan | ⏱ ~15 min
# ═══════════════════════════════════════

📺 **Switch to:** Browser — `http://localhost:5173`

**AAK:**

> "Now the live application. The frontend is running on port 5173 and the API on port 3000. This is the login page — dark theme, Aegis.AI shield logo, Farhana's design."

📺 **Log in** → Dashboard

> "Logging in with the Admin test account. We are on the Dashboard — it shows organization-wide metrics: total use cases, risk score distribution by level, compliance progress by framework, vendor count, and recent activity — all scoped to this organization's PostgreSQL schema."

📺 **Navigate:** Overview (Use Cases)

> "Overview shows all Use Cases — this is our terminology for the AI systems being governed. Each card has an auto-generated UC-ID — UC-1, UC-2, etc. — owner, risk classification, and status. Let us click on one."

📺 **Click** a use case → EU AI Act tab

> "Inside the use case there are tabs for compliance frameworks. The EU AI Act tab shows 13 control categories: Data Governance, Technical Documentation, Transparency and Provision of Information, Human Oversight, Accuracy and Robustness, Cybersecurity, Conformity Assessment, Fundamental Rights Impact Assessment — and more. We click on a category and the controls are shown with their status."

📺 **Click** one control → show status dropdown

> "Each control moves through lifecycle states: Waiting → In Progress → Under Review → Done. Or it can be marked N/A with a mandatory justification. These transitions exactly match the EU AI Act's systematic conformity assessment documentation requirements. Every transition is logged with a timestamp and user."

📺 **Navigate:** Risk Management

> "In Risk Management, the risk registry is displayed. Each risk has a name, owner, likelihood from 1 to 5 — Rare to Almost Certain — and severity from 1 to 5 — Negligible to Catastrophic. The platform automatically calculates the risk level using the formula: Risk Score equals Likelihood times 1 plus Severity times 3. Severity is given three times the weight because in AI governance, impact matters more than frequency. Click View History — every change made to this risk is here — complete version control."

📺 **Navigate:** Approval Workflows

> "In Approval Workflows, an Editor submits a use case or risk for formal sign-off. The Admin pre-configures multi-step workflow templates — up to 5 sequential approval steps, each assigned to a role. On submission, the assigned approver receives a real-time notification on the bell icon — delivered in under 100 milliseconds through our SSE and Redis Pub/Sub pipeline. The approver can approve step by step, reject with a comment, or the submitter can withdraw. Every state transition is tracked internally — pending, approved, rejected, withdrawn."

📺 **Navigate:** Policy Manager

> "In Policy Manager, AI policies move through: Draft → Under Review → Approved → Published → Archived. Policies can be linked directly to EU AI Act controls, ISO clauses, or risks — providing full traceability between governance decisions and regulatory controls. Sprint 6 introduced reusable policy templates pre-populated with AI governance best practices."

📺 **Navigate:** AI Model Inventory

> "The AI Model Inventory is a registry of all AI models deployed within the organization. Each model entry has a name, version, model type, owner, linked use case, and status. Version history is automatically tracked — every update creates a `model_inventory_history` snapshot. Model-level risks are also tracked using the same auto-calculation formula."

📺 **Navigate:** Post-Market Monitoring

> "Post-Market Monitoring — this is directly aligned with EU AI Act Articles 9 and 72. Here you can see active PMM configurations. Each configuration has a frequency — every 30 days, every month — reminder_days for when to send the stakeholder a reminder, escalation_days and an escalation contact. The system automatically creates each cycle, sends out the questionnaire email, handles reminders and escalation alerts, and generates a PDF audit report upon submission."

📺 **Navigate:** Incident Management

> "AI Incident Management is where governance incidents are logged — AI system failures, bias incidents, regulatory violations, or anything requiring formal escalation. Each incident has a severity, status lifecycle, and linked use case. Together with the Training Registry, this implements the GOVERN function of the NIST AI RMF."

📺 **Navigate:** Automations

> "In Automations, there are event-driven rules. An Admin can define any trigger — such as RISK_CREATED, a condition like risk_level equals Very High — and then actions: SEND_SLACK, SEND_EMAIL, CREATE_TASK, CALL_WEBHOOK. This is no-code governance automation built right into the platform."

📺 **Navigate:** WatchTower Event Tracker

> "WatchTower is the real-time audit log. Every governance action is captured here — logins, use case changes, risk updates, approval decisions, policy status transitions — with actor, action type, affected entity, and ISO 8601 timestamp. There is also a System Logs tab filterable by severity level."

📺 **Navigate:** AI Trust Center

> "The AI Trust Center is a public-facing transparency page — accessible without login. The Admin configures it with a list of AI systems, sub-processor organizations, documentation links, and certification claims. This directly supports the EU AI Act transparency obligations."

📺 **Navigate:** Settings → LLM Keys, Email Config tabs

> "The Settings page shows the modular configuration system. An Admin can add LLM API keys for OpenAI, Anthropic, or OpenRouter. Separate Evaluation LLM keys for the EvalServer. Email provider configuration — SMTP, AWS SES, Azure Email, or Resend. Slack webhook for automations. And API tokens for programmatic access. This modular architecture means the platform runs fully functional with no LLM keys at all — all AI features degrade gracefully."

---

# ═══════════════════════════════════════
# PART 8 — Algorithms Deep Dive
# Speaker: Muhammad Haris | ⏱ ~10 min
# ═══════════════════════════════════════

📺 **Show:** Final Aegis-develop.docx Section 6.3 Algorithms

**MH:**

> "I will now explain the five core algorithms that power Aegis.AI — all of which are documented in Section 6.3 of our FYP report."

> "**Algorithm 1: Risk Level Auto-Calculation.** This is the central scoring algorithm used across three risk dimensions — project risks, vendor risks, and model risks. The formula is: Risk Score equals Likelihood times 1 plus Severity times 3. Likelihood and Severity are both 1-to-5 enumerations. Likelihood values: 1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain. Severity values: 1=Negligible, 2=Minor, 3=Moderate, 4=Major, 5=Catastrophic. Score thresholds: 4 or below = Very Low. 5 to 8 = Low. 9 to 12 = Medium. 13 to 16 = High. 17 or above = Very High. Severity is given three times the weight because in AI governance, impact is more important than frequency. We tested 25 risk entries — all 25 produced a correctly calculated level, 100%."

> "**Algorithm 2: AI Advisor Context Injection.** The AI Advisor does not simply forward a message to an LLM. The process has 6 steps. Step 1: fetch current use case data — count of open risks, framework completion percentages, active use cases, outstanding tasks. Step 2: inject this as a structured system prompt prefix before the conversation. Step 3: append the last N turns of conversation history for continuity. Step 4: call the configured LLM provider — OpenAI, Anthropic, or OpenRouter — using the organization's stored API key from `api/llm-keys`. Step 5: stream the response to the React frontend via SSE for a real-time chatbot experience. Step 6: if the Advisor makes a tool call — such as `getRisksByProject`, `getVendorList`, or `getFrameworkProgress` — the backend executes the tool, injects the result, and continues generation. This means the Advisor can answer questions like 'Which of my risks are Critical this week?' from live data."

> "**Algorithm 3: LLM Evaluation Scoring Pipeline.** This is the EvalServer algorithm using the DeepEval framework. Step 1: load the test dataset — question-answer-context triplets uploaded by the user. Step 2: send each item to the target LLM being evaluated. Step 3: score each response against the configured metrics — Correctness, Faithfulness, Hallucination Rate, and Bias. Step 4: aggregate results for each metric across all test cases. Step 5: store results in the EvalServer database for comparison. Step 6: Arena mode runs this pipeline for two models simultaneously and renders a side-by-side comparison. The Evaluation LLM key — separate from the main Advisor key — is used as the judge model for scoring calls."

> "**Algorithm 4: Post-Market Monitoring Scheduler.** A BullMQ cron job runs every hour at `0 * * * *`. Step 1: query all active PMM configurations where the configured `notification_hour` matches the current UTC hour. Step 2: for configurations without an active cycle, create a new cycle and send the stakeholder an initial questionnaire email with a link and deadline. Step 3: for active cycles, check the `reminder_days` threshold — if the cycle is within N days of its due date, send a reminder email. Step 4: if a cycle has passed `escalation_days` without a response, send an escalation alert to the `escalation_contact`. Step 5: when the stakeholder submits the cycle, generate a PDF audit report using EJS templates plus Playwright and store it in the PMM reports archive. This algorithm directly implements EU AI Act Articles 9 and 72."

> "**Algorithm 5: Automation Rule Engine.** Event-driven, no-code governance automation. Step 1: a governance event fires anywhere in the system — for example `RISK_CREATED`, `TRAINING_ADDED`, `PROJECT_UPDATED`, `INCIDENT_LOGGED`. Step 2: the engine queries all automation rules for that tenant. Step 3: for each rule, evaluate the condition filter against the event payload — for example 'risk_level equals Very High'. Step 4: for all matching rules, execute the action sequence in order — `SEND_SLACK`, `SEND_EMAIL`, `CREATE_TASK`, or `CALL_WEBHOOK`. Step 5: execution results and errors are logged in the automation history table. This design allows complex no-code governance workflows — for example: 'Whenever a Very High risk is created, notify on Slack AND create a remediation task AND send an escalation email.'"

📺 **Show:** Section 6.4 Constraints

> "Our constraints are also specified in the documentation. Technical constraints: PostgreSQL 14 or higher for JSONB features and schema-based multi-tenancy. Redis is required. LLM API keys are optional — all AI features degrade gracefully. Playwright is required server-side for PDF generation. Maximum file upload size is 10 MB. Security constraints: passwords are hashed with bcrypt at 10 rounds. JWT tokens expire after 24 hours. Rate limiting on auth endpoints: 100 requests per 15-minute window per IP. Helmet.js enforces all HTTP security headers. Regulatory constraint: Aegis.AI is released under the Business Source License 1.1 — use is free; commercial SaaS resale requires a commercial license after 4 years."

---

# ═══════════════════════════════════════
# PART 9 — Data Dictionary & Approval Sequence
# Speaker: Ahmed Abdullah Khan | ⏱ ~5 min
# ═══════════════════════════════════════

📺 **Show:** Final Aegis-develop.docx Section 5.8 Data Dictionary

**AAK:**

> "I will now walk through our data dictionary and the approval workflow sequence diagram — this is an important part of our technical depth."

> "In the data dictionary, let us look at a few key tables. The `projects` table — meaning Use Cases — has `uc_id`, which is an auto-generated VARCHAR UNIQUE field in UC-1 format, `ai_risk_classification` which is an ENUM with the values Prohibited, High risk, Limited risk, and Minimal risk, and `type_of_high_risk_role` which is an ENUM — Deployer, Provider, Distributor, Importer — this is EU AI Act terminology directly. `pending_frameworks` is a JSONB column that tracks frameworks pending approval."

> "The `project_risks` table has `likelihood` as an ENUM with Rare/Unlikely/Possible/Likely/Almost Certain, `severity` as an ENUM with Negligible/Minor/Moderate/Major/Catastrophic, and `risk_level_autocalculated` as an ENUM that the backend computes automatically using the L×1 + S×3 formula. `mitigation_status` tracks Not Started/In Progress/Completed/On Hold. And the `ai_lifecycle_phase` column records the phase of the AI lifecycle in which this risk exists."

> "The `post_market_monitoring_configs` table has: `frequency_value` as an INTEGER defaulting to 30, `frequency_unit` as an ENUM with days/weeks/months, `reminder_days` as an INTEGER for the number of weeks before the due date, `escalation_days` as an INTEGER for how long after becoming overdue before escalation, and `escalation_contact_id` as an FK to the user who receives escalation alerts."

📺 **Show:** Final Aegis-develop.docx Section 5.5 Approval Workflow Sequence Diagram

> "Now the approval workflow sequence diagram step by step. The Editor submits a Use Case or Risk for Approval in the React Frontend. The Frontend sends `POST /api/approval-requests` to the Backend. The Backend creates an ApprovalRequest in PostgreSQL with status pending and updates the entity status to pending_approval. The Backend then publishes a notification event to Redis. Redis broadcasts through the SSE channel. The Backend delivers a real-time SSE notification to the Approver. The Approver opens the pending approval request — the Frontend calls `GET /api/approval-requests/:id` — the Backend fetches the request plus entity details and returns them. If the Approver Approves: the step status becomes approved, the Backend checks whether all steps are complete, the entity becomes approved, and the Editor receives a real-time Approved notification via Redis. If Rejected: the request is rejected, the entity reverts to its previous state, and the Editor receives a Rejected notification."

---

# ═══════════════════════════════════════
# PART 10 — Sprint Highlights (All 9 Sprints)
# Speaker: Farhana Minhas | ⏱ ~8 min
# ═══════════════════════════════════════

📺 **Show:** Final Aegis-develop.docx or PowerPoint Slide 12 (Sprint Summary)

**FM:**

> "I will now walk through the technical decisions made across all 9 sprints."

> "**Sprint 1** — Foundation. Muhammad Haris — Scrum Master. The monorepo was initialized, Docker Compose was configured, JWT authentication with refresh tokens was built, RBAC middleware was deployed for four roles, and the Sequelize ORM migration system was set up. Supervisor feedback: 'Authentication is solid; requested RBAC be demonstrated with actual routes in Sprint 2.' 18 story points committed, 18 delivered — password reset email was deferred."

> "**Sprint 2** — Multi-Tenancy, Approvals, and SSE. Ahmed — Scrum Master. The key achievement was the schema-per-tenant implementation. The Sprint 2 class diagram shows our ApprovalWorkflow, ApprovalWorkflowStep, ApprovalRequest, and ApprovalRequestStep data model. The sequence diagram shows the complete approval flow from Editor submission through Redis Pub/Sub to real-time SSE notification for the Approver — in under 100ms. 39 story points — 100% delivered."

> "**Sprint 3** — EU AI Act. Farhana — Scrum Master. A reusable data seeder utility was implemented — a Sprint 2 retrospective action item — which saved the team approximately four hours. The Sprint 3 class diagram shows EUAIActCategory, EUAIActControl, EUAIActSubControl, and the AutoDriver class. The sequence diagram shows the auto-fill flow from the Editor clicking Auto-Fill through the OpenAI API call to controls being populated in the database. 21 story points, 100% delivered."

> "**Sprint 4** — ISO 42001 and ISO 27001. Muhammad Haris — Scrum Master. The same seeder pattern was applied. ISO 42001's 7-stage workflow was implemented: Not Started → Initial Assessment → Gap Analysis → Remediation Planning → Implementation → Verification → Certified — for each subclause. ISO 27001's 93 Annex A controls were seeded and are individually trackable."

> "**Sprint 5** — Risk Management. Ahmed — Scrum Master. The Sprint 5 sequence diagram shows the exact flow of risk creation including backend auto-calculation: Likelihood=4, Severity=4 gives Score 4+12=16, mapping to High risk level. Change Severity to 5 and you get 4+15=19 — Very High. Every calculation change is snapshotted in the RiskHistory table. The decision table enumerates all 25 likelihood-severity combinations. 31 story points committed, 31 delivered."

> "**Sprint 6** — Vendor Management, Policy Manager, Evidence Hub, Tasks. Farhana — Scrum Master. The Sprint 6 sequence diagram shows the policy lifecycle: the Editor creates a Draft, submits for review, the Reviewer receives an SSE notification, the Reviewer approves, the Editor publishes. Importantly — the Sprint 2 approval workflow engine was reused for policy approvals — saving approximately two development days. 26 story points, 100%."

> "**Sprint 7** — AI Model Inventory and NIST AI RMF. Muhammad Haris — Scrum Master. The Sprint 7 class diagram shows ModelInventory, ModelInventoryHistory, and NistAiRmfFunction with NistAiRmfCategory. The NIST function mapping: GOVERN → Policy Manager, RBAC, Approval Workflows. MAP → Risk Management and Use Cases. MEASURE → Risk Registry and Scoring. MANAGE → Risk Mitigation and PMM. 16 story points, 100%."

> "**Sprint 8** — LLM Evaluations and AI Advisor UIs. Ahmed — Scrum Master. A deliberate UI-first strategy: build the complete UI infrastructure without live LLM connections. LLM API keys are stored in the database encrypted with AES-256. Supervisor feedback: 'UI-first approach allows demonstration — practical strategy.' 5 story points, 100%."

> "**Sprint 9** — Reporting, Search, AI Trust Center. Farhana — Scrum Master. PDF report generation was delivered using Playwright — a headless Chromium instance that renders a styled HTML governance report and prints it as a PDF. One PDF formatting issue appeared in CI due to a rendering race condition — fixed with a retry mechanism. Command Palette Ctrl+K — global search across 14 entity types: use cases, risks, vendors, policies, models, notes, evidence, incidents. The supervisor was particularly impressed by the Command Palette UX. 37 story points, 100%. And that was the only bug reported across all 9 sprints — and it was resolved within the same sprint."

---

# ═══════════════════════════════════════
# PART 11 — Results & Statistics
# Speaker: Muhammad Haris | ⏱ ~7 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 15 (UAT Table) / Section 8

**MH:**

> "I will now present the complete Phase 1 results and test statistics."

> "On correctness — meaning test cases whose output exactly matched the specification. We wrote a total of 258 test cases. By suite: 45 Jest unit tests — backend models, utilities, controllers — all 45 pass. 32 frontend component tests using React Testing Library plus Mock Service Worker — all 32 pass. 28 API integration tests using Supertest against the Express server directly — all 28 pass. 90 extended sprint test cases — 10 per sprint, covering both happy-path and negative-path — all 90 pass. 8 security audit checks — Helmet.js, CORS, rate limiting, bcrypt, JWT expiry — all 8 pass. 10 PMM cron scheduler tests across different timezone configurations — all 10 correct. 15 PDF generation tests — all 15 pass with the retry mechanism. Grand total: 258 written, 258 pass, 0 fail — 100% correctness."

📺 **Show:** Section 8.3 Sprint-by-Sprint Test Case Summary

> "The sprint-by-sprint extended test case summary: from Sprint 1 through Sprint 9, each sprint had 10 test cases — all 10 pass. 90 extended sprint test cases total — zero failures across the entire development period."

📺 **Show:** System Accuracy Table (Section 8.2)

> "Accuracy — meaning system outputs matching the expected outcome. User Acceptance Testing: 43 user stories tested in the browser — 43 pass, 100%. Risk Level Auto-Calculation: 25 risk entries — 25 correct, 100%. Multi-Tenancy Data Isolation: 15 cross-tenant access attempts — all 15 blocked, 100%. Approval Workflow Step Progression: 20 scenarios — all 20 correct, 100%. PMM Cycle Auto-Scheduling: 10 cron trigger tests — 10 correct, 100%. RBAC Permission Enforcement: 30 unauthorized attempts — all 30 blocked, 100%. SSE Real-Time Notification: 50 tests — 49 under 100ms, 1 missed on a Redis restart test — 98%, handled with reconnect logic. PDF Report Accuracy: 15 reports — 14 fully accurate, 1 with minor formatting drift due to the Playwright race condition — 93%, fixed with retry. Overall Phase 1 system accuracy: approximately 99%."

📺 **Show:** Performance Benchmarks

> "Performance benchmarks: Simple GET requests — under 50 milliseconds. Complex governance queries — under 2 seconds. PDF generation with Playwright — 3 to 8 seconds. PMM PDF — approximately 3 seconds. LLM Evaluation per test case with GPT-4o as judge — 5 to 15 seconds. SSE notification latency via Redis Pub/Sub — under 100 milliseconds. Frontend initial load with the Vite-optimized build — under 2 seconds."

📺 **Show:** Feature Completeness Module Table

> "The feature completeness table lists every Phase 1 module with its route group and status. From Authentication and RBAC through all four compliance frameworks, Risk Management with three route groups, Vendor Management, Policy Manager, Model Inventory, LLM Evaluations via EvalServer, AI Advisor with function calling, Evidence Hub, Global Search across 14 entity types, AI Trust Center, CE Marking Registry, Task Management, AI Incident Management, Training Registry, Post-Market Monitoring, Entity Graph visualization, Reporting for both PDF and DOCX, Automations, Slack Integration, WatchTower Event Tracker, Docker Deployment, and Kubernetes Deployment — all 38 Phase 1 modules complete."

📺 **Show:** Section 7.1 Project Monitoring (GitHub)

> "For project monitoring, we used GitHub. All 9 sprints were tracked as GitHub Milestones. Issues were labeled: feature, bug, test, docs, and security. Progress was visible on a GitHub Projects Kanban board. For CI/CD — GitHub Actions ran three pipelines: ESLint and TypeScript compilation on every pull request. Docker build verification on merge to `develop`. Full test suite plus Docker image push on merge to `main`. This means every line of code that reached `main` passed through automated quality gates."

---

# ═══════════════════════════════════════
# PART 12 — Conclusion & Future Work
# Speaker: Ahmed Abdullah Khan | ⏱ ~6 min
# ═══════════════════════════════════════

📺 **Show:** PowerPoint Slide 18 (Conclusion)

**AAK:**

> "Aegis.AI is not a prototype. It is a complete, operational, enterprise-grade AI governance platform that can be deployed on-premises for production use today. This platform consolidates four major compliance frameworks, manages risk across three dimensions — project, vendor, and model — and extends governance beyond documentation to active AI safety evaluation, AI content detection, and AI-powered advisory."

> "On the technology stack: React 18 frontend with Vite 6.x as the build tool, Material UI 6.x for components, Redux Toolkit with redux-persist for state management, React Query v5 for server state, React Router v6. Backend: Node.js 22.x with Express 4.x, TypeScript 5.x, Sequelize 6.x ORM. EvalServer: Python FastAPI with DeepEval. PostgreSQL 15+ as the primary database. Redis with BullMQ. Authentication: JWT plus bcrypt plus Google OAuth2. PDF generation: Playwright with EJS templates. Containerization: Docker Compose v3.8 and Kubernetes 1.28+. API documentation: Swagger OpenAPI 3.0. Testing: Jest, Supertest, React Testing Library, and Mock Service Worker. Every piece was deliberately chosen for production readiness."

> "Notable technical achievements: Schema-per-tenant multi-tenancy verified by blocking all 15 cross-tenant access attempts. Multi-step approval workflow engine with up to 5 configurable sequential steps and full state-machine semantics — pending, approved, rejected, withdrawn, step-progressed. Real-time SSE notification system with sub-100ms delivery confirmed in 50 concurrent tests. Automation Rule Engine with 4 action types: SEND_SLACK, SEND_EMAIL, CREATE_TASK, CALL_WEBHOOK. Post-Market Monitoring module with BullMQ cron scheduling directly implementing EU AI Act Articles 9 and 72. Global search across 14 entity types via Command Palette Ctrl+K. Public AI Trust Center for regulatory transparency. Complete Docker Compose and Kubernetes with 8 manifests including the Horizontal Pod Autoscaler."

> "The codebase consists of approximately 60,000 lines of TypeScript and Python across three independent applications. 60 active backend route modules — 66 including utility routes. Over 40 database tables. The documentation covers all 9 sprints with class diagrams, sequence diagrams, decision tables, and extended test cases — 10 per sprint, 90 total. Released under the Business Source License 1.1."

📺 **Show:** PowerPoint Slide 19 (Future Work)

> "For Phase 2, we have 15 planned user stories — 114 story points — all features that require external services which were not available in Phase 1. These include: activating the AI Advisor with a live LLM API integration. Completing LLM Evaluations and Arena with the full DeepEval benchmarking pipeline. Activating the AI Detection Module with GitHub repository scanning. Completing the Bias and Fairness Evaluation with per-group scoring. Enabling transactional emails via SMTP and AWS SES. Full Slack automation integration. MLflow model metadata synchronization. And cloud deployment on AWS EKS or Azure AKS."

> "Beyond that, our long-term roadmap contains 10 items. First: Granular permission system — resource-level access control. Second: AI Risk Assessment auto-generation — generating risk assessments from model descriptions using LLMs. Third: Regulatory Updates Feed — automatically monitoring EU AI Act and ISO changes. Fourth: React Native mobile app — dashboard, alerts, and approval actions on the go. Fifth: bi-directional Jira and GitHub Issues integration. Sixth: Federated Learning Governance. Seventh: Expanded AI Agency — fully autonomous governance workflows with human-in-the-loop approval. Eighth: Compliance Template Marketplace — a community library. Ninth: Multi-language support — German, French, and Arabic for EU and GCC markets. Tenth: OSCAL export — machine-readable compliance artifacts for formal certification submission."

📺 **Show:** PowerPoint Slide 20 (Thank You)

---

# ═══════════════════════════════════════
# PART 13 — Closing
# All Three Members | ⏱ ~2 min
# ═══════════════════════════════════════

📺 **All three cameras visible simultaneously**

**MH:** "That concludes our complete Aegis.AI FYP Phase 1 presentation."

**AAK:** "We would like to express our deepest gratitude to Sir Usama Ahmad for his continued guidance and feedback throughout this entire journey."

**FM:** "The complete source code, documentation, sprint records, test cases, and system diagrams are available on our GitHub repository — github.com/muhammadharis356/aegis-develop — and in the submitted documentation package."

**MH:** "We believe Aegis.AI delivers genuine value in the AI governance space and we look forward to completing Phase 2. Thank you for your valuable time."

**All three:** "Jazakallah Khair."

---

## ⏱ Speaker Time Table

| Part | Section | Speaker | Time |
|------|---------|---------|------|
| 1 | Introduction | MH | 4 min |
| 2 | Problem & Objectives | MH | 8 min |
| 3 | Domain Analysis & Architecture (C4 L1→L3, ERD, DFD) | AAK | 12 min |
| 4 | Product Backlog & Scrum | FM | 6 min |
| 5 | Figma Designs | FM | 2 min |
| 6 | VS Code Walkthrough (Clean Arch, K8s, .env) | MH | 7 min |
| 7 | Live Demo (10+ modules) | AAK | 15 min |
| 8 | Algorithms Deep Dive + Constraints | MH | 10 min |
| 9 | Data Dictionary & Approval Sequence | AAK | 5 min |
| 10 | Sprint Highlights (all 9) | FM | 8 min |
| 11 | Results & Statistics | MH | 7 min |
| 12 | Conclusion & Future Work | AAK | 6 min |
| 13 | Closing | All | 2 min |
| **Total** | | | **~92 min** |

---

## ✂️ Trimming Guide (40–60 Min)

| What to Cut | Time Saved |
|-------------|-----------|
| Part 3: Show only C4 L1 + ERD — skip L2, L3, DFD | −5 min |
| Part 6: Skip `.env` and Kubernetes | −3 min |
| Part 7: Skip WatchTower + Settings demo | −3 min |
| Part 8: Keep only Algorithms 1 and 4, skip constraints | −4 min |
| Part 9: Skip the entire Data Dictionary section | −5 min |
| Part 10: Summarize Sprints 3–7 in one sentence each | −3 min |
| Part 11: Skip sprint-by-sprint table and CI/CD section | −3 min |
| Part 12: Cut the tech stack paragraph | −3 min |
| **Total saved** | **−29 min → ~63 min** |

> **For 40 min:** Further trim Part 2 (Problems 3–5 in one sentence) −3 min, skip Part 4 EPIC list −2 min, cut Part 5 Figma entirely −2 min → **~56 min**. Then keep only Sprints 1, 2, 5, 9 in Part 10 −4 min → **~52 min**.
