# Aegis.AI Product Backlog

## 1. Overview
The product backlog for Aegis.AI covers the end-to-end AI governance lifecycle, including GRC (Governance, Risk, and Compliance) capabilities, technical LLM evaluations, and automated repository scanning. Every item in this backlog has been verified against the actual implemented backend routes (60 active modules) and frontend pages.

> **Phase Structure:**
> - **Phase 1 (Sprints 1–11):** Core platform features, tested and verified locally.
> - **Phase 2 (Sprints 12–13):** Features requiring external integrations (LLM API keys, SMTP email server, MLflow, Slack, GitHub, EvalServer). Not deployed in Phase 1.

---

## 2. Scrum Team

| Role | Name |
|------|------|
| **Product Owner** | Usama Ahmad (Project Supervisor) |
| **Scrum Master** | Rotating — see Sprint Backlog in Section 4 of FYP Documentation |
| **Development Team** | Muhammad Haris, Ahmed Abdullah Khan, Farhana Minhas |

---

## 3. Definition of Done

A User Story is considered **Done** when:
- [ ] Backend API route(s) are implemented, tested, and returning correct responses
- [ ] Frontend UI component(s) are implemented and connected to the API
- [ ] Feature is visible and functional in local Docker Compose environment
- [ ] User story verified via browser-based user acceptance testing

---

## 4. Terminology
- **Use Case (UC):** Internally represented as "Projects" in the codebase, referred to as "Use Cases" in governance contexts. Each is auto-assigned a unique UC-ID (e.g., UC-1).
- **Tenant:** A distinct organization with its own isolated PostgreSQL schema.
- **Framework:** A set of controls (e.g., EU AI Act, ISO 42001) applied to a use case.
- **Story Points:** Estimated in Fibonacci sequence (1, 2, 3, 5, 8, 13). Higher = more complex.

---

## 5. Epics and User Stories

### EPIC 1: User Management & RBAC
**Goal:** Secure access and role-based permissions for organization members.
**Sprint:** 1

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-101 | As a user, I can register and login to my organization's portal. | High | User can register with email/password; login returns a JWT; invalid credentials return 401. | 5 | ✅ Done |
| US-102 | As an admin, I can assign roles (Admin, Editor, Reviewer, Auditor). | High | Admin can update any user's role; role change is reflected immediately on next API request. | 3 | ✅ Done |
| US-103 | As a user, I can reset my password via email. | High | User receives reset email within 60 s; clicking the link allows setting a new password; old password no longer works. | 3 | *(Phase 2)* |
| US-104 | As a user, I can set my theme and notification preferences. | Medium | User can toggle dark/light mode and notification settings; preferences persist across sessions. | 2 | ✅ Done |
| US-105 | As an admin, I can generate and manage API tokens for platform access. | Medium | Admin can create, view, and revoke API tokens; token can authenticate API calls. | 3 | ✅ Done |

---

### EPIC 2: Multi-Tenancy & Org Management
**Goal:** Isolated data environments for different organizations.
**Sprint:** 2

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-201 | As a system, I must isolate data using schema-per-tenant architecture. | High | Two tenants sharing the same DB instance cannot read each other's data; verified via API calls with different JWT tokens. | 8 | ✅ Done |
| US-202 | As an admin, I can view organization-wide statistics on a dashboard. | High | Dashboard shows total use cases, risks, vendors, and compliance progress; data is tenant-scoped. | 5 | ✅ Done |
| US-203 | As an admin, I can manage tiers and subscriptions. | Medium | Admin can view and update the organization's subscription tier; tier limits are enforced. | 3 | ✅ Done |

---

### EPIC 3: Approval Workflows
**Goal:** Configurable sign-off processes for governance changes.
**Sprint:** 2

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-301 | As an editor, I can submit a use case or risk for approval. | High | An approval request is created and linked to the entity; approver receives real-time SSE notification. | 5 | ✅ Done |
| US-302 | As an approver, I can review, approve, or reject pending requests. | High | Approver can accept or reject; on approval entity status changes; submitter receives notification. | 5 | ✅ Done |
| US-303 | As an admin, I can create custom multi-step approval workflow templates. | High | Admin can create a workflow with 1–5 steps, each assigned to a role; template is available for use on use cases. | 8 | ✅ Done |

---

### EPIC 4: Framework Management
**Goal:** Tracking compliance across major AI regulations and standards.
**Sprint:** 3 & 4

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-401 | As an editor, I can assess a use case against the EU AI Act. | High | Editor can fill in all 13 control category questionnaires; progress percentage updates in real-time. | 13 | ✅ Done |
| US-402 | As an editor, I can manage ISO 42001 (AIMS) and ISO 27001 (ISMS) clauses. | High | Editor can update each subclause through a 7-stage workflow; annex items can be marked N/A with justification. | 13 | ✅ Done |
| US-403 | As an editor, I can track NIST AI RMF functions and categories. | High | All 4 NIST functions (Govern/Map/Measure/Manage) with subcategories are trackable; progress charts display per function. | 8 | ✅ Done |
| US-404 | As a user, I can use "Auto Drivers" to auto-fill controls using AI. | Medium | User triggers AI auto-fill on a control; LLM generates a suggested response; user can accept or edit. | 5 | *(Phase 2)* |

---

### EPIC 5: Risk Management
**Goal:** Comprehensive tracking of project, vendor, and model risks.
**Sprint:** 5

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-501 | As a risk owner, I can create and track project-specific risks. | High | Risk is created with name, owner, likelihood, severity; risk level is auto-calculated on save. | 5 | ✅ Done |
| US-502 | As a user, I can see the change history of a risk over time. | High | Every update to a risk is recorded; user can view full history with timestamps and changed fields. | 3 | ✅ Done |
| US-503 | As a system, I auto-calculate risk levels using (Likelihood × 1) + (Severity × 3). | High | Given Likelihood=4, Severity=4 → Score=16 → Risk Level="High"; formula verified in unit tests. | 3 | ✅ Done |

---

### EPIC 6: Vendor Management
**Goal:** Managing third-party AI service providers and their associated risks.
**Sprint:** 5

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-601 | As a user, I can maintain a registry of AI vendors. | High | Vendor can be created, updated, and deleted; vendor list is displayed with search and filter. | 5 | ✅ Done |
| US-602 | As a risk officer, I can perform risk assessments on specific vendors. | High | Vendor risk can be created, linked to a vendor, and tracked with history; risk level is auto-calculated. | 5 | ✅ Done |

---

### EPIC 7: Policy Management
**Goal:** Lifecycle management of internal AI policies and guidelines.
**Sprint:** 6

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-701 | As a policy owner, I can draft, review, and publish AI policies. | Medium | Policy goes through Draft → Under Review → Published states; each transition is logged in change history. | 8 | ✅ Done |
| US-702 | As a user, I can link policies to specific framework controls or risks. | Medium | Policy can be linked to one or more controls/risks; linked objects visible on policy detail page. | 3 | ✅ Done |

---

### EPIC 8: AI Model Inventory
**Goal:** Centralized registry of all AI models used within the organization.
**Sprint:** 7

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-801 | As a developer, I can register model metadata and version history. | Medium | Model entry created with name, version, type, owner; version history tracked; change history recorded. | 5 | ✅ Done |
| US-802 | As a user, I can sync model metadata directly from MLflow. | Medium | Given a configured MLflow URL, clicking "Sync" populates/updates model entries from MLflow registry. | 8 | *(Phase 2)* |

---

### EPIC 11: Search & Navigation
**Goal:** Rapid retrieval of information across the platform.
**Sprint:** 9

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-1101 | As a user, I can use a global search to find any of the 14 entity types. | Medium | Searching a keyword returns results across use cases, risks, vendors, policies, etc.; results scoped to tenant. | 8 | ✅ Done |
| US-1102 | As a power user, I can use the Command Palette (Ctrl+K) for navigation. | Medium | Pressing Ctrl+K opens the command palette; typing a query shows matching pages and entities; selecting navigates to them. | 5 | ✅ Done |

---

### EPIC 12: Reporting & Dashboard
**Goal:** Visualising and exporting governance posture.
**Sprint:** 9

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-1201 | As a user, I can generate PDF and DOCX compliance reports. | High | Clicking "Generate Report" on a use case produces a downloadable PDF and DOCX; report contains framework progress, risks, and controls. | 8 | ✅ Done |
| US-1202 | As a user, I can view an Entity Graph of relationships between objects. | Medium | Graph visualises connections between use cases, risks, vendors, models, and controls; nodes are clickable for detail. | 8 | ✅ Done |

---

### EPIC 13: Shared Collaboration Tools
**Goal:** Cross-functional tools for governance documentation.
**Sprint:** 6 & 9

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-1301 | As a user, I can upload and manage files in a central Evidence Hub. | High | Files can be uploaded, searched, filtered by entity, and downloaded; max 10 MB per file enforced. | 5 | ✅ Done |
| US-1302 | As a user, I can add notes and annotations to any platform entity. | Medium | Note can be created on any entity type; notes list is visible on the entity detail page. | 3 | ✅ Done |
| US-1303 | As a user, I can create shareable links for external reviewers. | Medium | Admin creates a share link with expiry; external user can access the linked view without logging in. | 5 | ✅ Done |
| US-1304 | As a user, I can view and manage CE Marking conformities. | Medium | CE Marking entries can be created, tracked, and linked to use cases; registry view available. | 3 | ✅ Done |
| US-1305 | As a user, I can configure and view the AI Trust Center for transparency. | Medium | Admin can add resources and subprocessors; public Trust Center page is accessible without login. | 5 | ✅ Done |
| US-1306 | As a user, I can create and manage governance tasks. | Medium | Task can be created with title, assignee, due date; overdue tasks display a warning indicator. | 3 | ✅ Done |
| US-1307 | As an auditor, I can view full audit trails and change history for all entities. | High | Change history is available for use cases, risks, vendors, policies, model inventory, and incidents; each record shows who changed what and when. | 5 | ✅ Done |

---

### EPIC 14: Automations & Notifications
**Goal:** Real-time alerts and event-driven workflows.
**Sprint:** 2 & 10

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-1401 | As a user, I receive real-time notifications via SSE for approvals. | High | When an approval event fires, the notification appears in the header within < 100 ms without page refresh. | 8 | ✅ Done |
| US-1402 | As an admin, I can configure automation rules (e.g., Slack on High Risk). | High | Admin creates a rule with trigger (e.g., RISK_CREATED), condition (risk_level = Very High), action (SEND_SLACK); rule fires automatically when condition is met. | 13 | *(Phase 2)* |

---

### EPIC 15: Incident Management & Training Registry
**Goal:** Tracking AI failures and organisational literacy.
**Sprint:** 10

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-1501 | As a user, I can log and track AI incidents and their resolutions. | Medium | Incident can be created with title, severity, description, and status; change history recorded on every update. | 5 | ✅ Done |
| US-1502 | As an admin, I can maintain a registry of AI literacy training sessions. | Medium | Training record can be created with title, date, attendees, and status; lifecycle transitions (Planned → Completed) tracked. | 3 | ✅ Done |

---

### EPIC 18: Post-Market Monitoring (PMM)
**Goal:** Automated periodic review of deployed AI use cases (EU AI Act Articles 9 & 72).
**Sprint:** 11

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-1801 | As an admin, I can configure a PMM schedule (frequency, reminder days, escalation contact) per use case. | High | PMM config can be created/updated with frequency (e.g., 30 days), reminder threshold, and escalation user; config persists per use case. | 5 | ✅ Done |
| US-1802 | As an admin, I can define custom monitoring questions (in addition to system defaults). | High | Admin can add/edit/delete custom questions; they appear alongside system defaults in the questionnaire form. | 3 | ✅ Done |
| US-1803 | As a stakeholder, I receive an email when a new monitoring cycle is due and can fill in the questionnaire. | High | BullMQ cron fires hourly; stakeholder receives email with questionnaire link; MonitoringForm allows answers with autosave. | 8 | *(Phase 2)* |
| US-1804 | As an admin, I receive escalation notifications if a cycle is overdue beyond the configured threshold. | High | If cycle not submitted within escalation_days, escalation email sent to escalation_contact; logged in system. | 5 | *(Phase 2)* |
| US-1805 | As an auditor, I can download PDF reports for all completed PMM cycles. | High | Completed cycle triggers PDF generation; PDF listed in ReportsArchive with date and download link. | 8 | ✅ Done |

---

### EPIC 19: Policy Templates
**Goal:** Pre-built library of governance policy templates to accelerate policy creation.
**Sprint:** 10

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-1901 | As a policy owner, I can browse and use pre-built AI governance policy templates. | Low | Policy Templates page lists available templates with title and description; user can preview content. | 3 | ✅ Done |
| US-1902 | As a user, I can create a new policy pre-populated from a selected template. | Low | Clicking "Use Template" opens the Policy Manager with fields pre-filled from template content; user can edit before saving. | 3 | ✅ Done |

---

### EPIC 20: WatchTower / Event Tracker
**Goal:** Real-time visibility into all user actions and system events for platform administrators.
**Sprint:** 10

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-2001 | As an admin, I can view a live feed of all platform events (logins, changes, approvals). | Medium | WatchTower Events tab shows a paginated, filterable list of all governance events with timestamp, user, and action. | 5 | ✅ Done |
| US-2002 | As an admin, I can view and filter raw system logs for troubleshooting. | Medium | WatchTower Logs tab displays raw server log entries; filterable by severity level and date range. | 3 | ✅ Done |

---

## — PHASE 2 SPRINTS —

> The following sprints cover features that require external integrations (LLM API keys, SMTP server, MLflow, Slack, GitHub, EvalServer) or cloud deployment. These are deferred to Phase 2 and are **not part of the Phase 1 delivery**.

---

### EPIC 9: LLM Evaluations & Arena *(Phase 2 — Sprint 12)*
**Goal:** Technical evaluation of LLM performance and comparison.
**Requires:** OpenAI / Anthropic / OpenRouter API key + EvalServer running

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-901 | As a user, I can run DeepEval experiments to test LLM outputs. | Medium | User creates an experiment, uploads a dataset, selects metrics (Correctness/Faithfulness/Hallucination/Bias); results stored and viewable. | 13 | |
| US-902 | As a user, I can perform head-to-head model comparisons in an "Arena". | Medium | User selects two LLMs and a prompt; both responses returned and displayed side-by-side for comparison. | 8 | |
| US-903 | As an admin, I can manage separate API keys for evaluation LLMs. | Medium | Admin can add/delete evaluation LLM API keys separate from the main advisor LLM keys. | 3 | ✅ Done |

---

### EPIC 10: AI Advisor (Assistant) *(Phase 2 — Sprint 12)*
**Goal:** AI-powered guidance on governance and compliance tasks.
**Requires:** OpenAI / Anthropic / OpenRouter API key configured in Settings

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-1001 | As a user, I can chat with an AI Advisor for governance help. | Medium | User sends a message; AI responds with governance-relevant advice; conversation history persists across sessions. | 8 | |
| US-1002 | As a system, the Advisor can use "Tools" to query live platform data. | Medium | Advisor invokes a named tool (e.g., getRisksByProject) to fetch live data; tool result is incorporated into the response. | 13 | |

---

### EPIC 16: AI Detection Module *(Phase 2 — Sprint 12)*
**Goal:** Scanning repositories for AI content and bill of materials.
**Requires:** GitHub repository access / GitHub token

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-1601 | As a developer, I can scan a GitHub repo for AI components. | Medium | User enters a GitHub repo URL; scan runs and returns a list of detected AI components with file paths and confidence scores. | 13 | |
| US-1602 | As a user, I can export an AI-BOM (Bill of Materials) from a scan. | Medium | User clicks "Export AI-BOM" on a completed scan; a structured JSON/CSV file is downloaded listing all detected components. | 5 | |

---

### EPIC 17: Bias & Fairness Evaluation *(Phase 2 — Sprint 12)*
**Goal:** Systematic evaluation of AI model outputs for demographic bias and fairness.
**Requires:** EvalServer running + LLM API key

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-1701 | As an ML engineer, I can run a bias & fairness evaluation on an LLM using structured test datasets. | Medium | User uploads a dataset with demographic labels; EvalServer runs fairness metrics; results show per-group score breakdown. | 13 | |
| US-1702 | As a user, I can view per-group fairness scores and bias metrics in the LLM Evaluations dashboard. | Medium | Bias & Fairness tab in EvalsDashboard shows bar/radar charts of group-level scores for each metric. | 5 | |
| US-1703 | As a user, I can store and retrieve historical bias evaluation results for audit purposes. | Medium | Past bias evaluation runs are stored in EvalServer DB; user can retrieve and re-view any historical result. | 3 | |

---

### Phase 2 — Sprint 13: External Notifications & Deployment

**Requires:** SMTP/SendGrid email server, Slack webhook, cloud deployment environment

| ID | User Story | Priority | Acceptance Criteria | Story Points | Status |
|---|---|---|---|---|---|
| US-103 | As a user, I can reset my password via email. | High | User receives reset email within 60 s; clicking the link allows setting a new password. | 3 | |
| US-404 | As a user, I can use "Auto Drivers" to auto-fill controls using AI. | Medium | User triggers AI auto-fill; LLM generates a suggested response; user can accept or edit. | 5 | |
| US-802 | As a user, I can sync model metadata directly from MLflow. | Medium | Given a configured MLflow URL, clicking "Sync" populates/updates model entries from MLflow registry. | 8 | |
| US-1402 | As an admin, I can configure automation rules (e.g., Slack on High Risk). | High | Admin creates a rule with trigger, condition, action (SEND_SLACK); rule fires automatically. | 13 | |
| US-1803 | As a stakeholder, I receive an email when a new monitoring cycle is due. | High | BullMQ cron fires; stakeholder receives email with questionnaire link. | 8 | |
| US-1804 | As an admin, I receive escalation notifications if a PMM cycle is overdue. | High | Escalation email sent to escalation_contact; logged in system. | 5 | |

---

## 6. Backlog Summary

| Metric | Phase 1 | Future Work | Total |
|--------|---------|-------------|-------|
| Total EPICs | 17 | 5 | 20 |
| Total User Stories | 43 | 15 | 58 |
| Story Points | 230 | 114 | 344 |
| ✅ Done (Tested & Verified) | 43 | — | 43 |
| *(Future Work — pending external setup)* | — | 15 | 15 |
| Remaining (Phase 1) | 0 | — | 0 |

> **Phase 1 Testing Status:** 43 out of 43 Phase 1 user stories verified via live browser user acceptance testing.
> US-903 (LLM API key management UI) verified as ✅ Done — UI tested successfully without needing external key.
