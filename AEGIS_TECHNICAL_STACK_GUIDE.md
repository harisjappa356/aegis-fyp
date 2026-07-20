# 🛡️ Aegis AI Governance Platform — Feature-by-Feature Technical Architecture Guide

This reference guide details the technology stack, frameworks, libraries, protocols, and architectural role for every core module in Aegis AI Governance.

---

## 🏗️ 1. Global Core Stack & Architecture Overview

| Component | Technology | Category | Technical Role in Aegis |
|---|---|---|---|
| **Frontend Framework** | React 18 + TypeScript | Framework / Library | Renders single-page interactive UI, manages application state, and handles dynamic data views. |
| **Frontend Build Tool** | Vite | Build Tool / Bundler | Compiles TypeScript & JSX assets, provides fast HMR (Hot Module Replacement) and optimized production bundles. |
| **UI Design System** | Material-UI (MUI v5) + TailwindCSS | UI Component Library | Delivers accessible, responsive UI controls (tables, modals, navigation drawers, form controls). |
| **Core Backend API** | Node.js + Express.js | Runtime & Web Framework | Implements RESTful HTTP endpoints, user authentication (JWT), tenant isolation, and business logic. |
| **ORM Layer** | Sequelize ORM | Object-Relational Mapper | Maps TypeScript objects to relational database schemas, preventing SQL injection and enforcing type safety. |
| **Relational Database** | PostgreSQL 16 | RDBMS Database | Stores structured governance domain data (Models, Policies, Risks, Tasks, Controls, Audit Logs). |
| **In-Memory Store** | Redis | In-Memory Data Store | Serves as the high-speed backend broker for BullMQ job queues, caching, and rate limiting. |
| **Async Task Queue** | BullMQ | Job Queue Library | Processes asynchronous background tasks (Slack notifications, cron reminders, email delivery). |
| **Evaluation Microservice** | Python 3.11 + FastAPI + Uvicorn | Microservice Stack | Executes compute-heavy LLM evaluation metrics, G-Eval algorithms, and dataset benchmarking asynchronously. |
| **Experiment Tracking** | MLflow Server | MLOps Platform | Logs LLM model evaluation runs, hyper-parameters, token metrics, and performance history. |
| **Containerization** | Docker & Docker Compose | Container Platform | Containerizes 5 microservices (`frontend`, `backend`, `worker`, `eval_server`, `postgresdb`) for unified cloud deployment. |
| **Cloud Infrastructure** | Azure VM + Nginx | Cloud Host & Proxy | Azure Linux Virtual Machine hosting the Docker container mesh; Nginx acts as reverse proxy and SSL termination. |

---

## 🎯 2. Feature-by-Feature Technical Deep Dive

### 🤖 Feature A: AI Governance Advisor & Chatbot
* **Purpose:** Interactive conversational compliance assistant that queries database records and provides actionable regulatory guidance (ISO 42001, EU AI Act, NIST AI RMF).
* **Architecture Pattern:** **Agentic ReAct Loop (Reasoning & Acting)** with native Function Calling.

| Component | Technology | Category | Role in Feature |
|---|---|---|---|
| **Agent Core** | TypeScript (Node.js) | Server Logic | Executes the autonomous `while(true)` agent loop (`Servers/advisor/agent.ts`). |
| **LLM SDKs** | `openai` SDK & `@anthropic-ai/sdk` | Client SDKs | Handles JSON schema tool conversion and LLM API calls (`client.chat.completions.create` & `client.messages.create`). |
| **API Gateway** | OpenRouter API Gateway | Multi-LLM Service | Routes advisor queries dynamically to GPT-4o, Claude 3.5 Sonnet, or DeepSeek V3. |
| **Agent Tools** | 7 Tool Modules (`riskTools`, `policyTools`, etc.) | Custom Function Schema | Formats database queries into standard JSON Function Calling schemas. |
| **Data Retrieval** | PostgreSQL (Sequelize SQL) | Database Layer | Fetches real-time tenant facts (risks, policies, models) when the LLM triggers a tool call. |

---

### 🧪 Feature B: LLM Evaluation & Benchmark Module (`EvalServer`)
* **Purpose:** Automated quality, safety, and performance benchmarking for custom prompt templates and LLM models.

| Component | Technology | Category | Role in Feature |
|---|---|---|---|
| **Service Engine** | Python 3.11 + FastAPI | Microservice Framework | Exposes REST endpoints (`/deepeval/experiments`, `/deepeval/arena`, `/deepeval/scorers`) for batch evaluation execution. |
| **Eval Framework** | DeepEval | Open-Source LLM Eval Library | Standardizes metric computations (Answer Relevancy, Groundedness, Toxicity, Bias, Instruction Following). |
| **Scoring Algorithm** | G-Eval Framework | Algorithmic Evaluation | Uses a Judge LLM with custom rubrics to evaluate model outputs on a 0.0 to 1.0 score continuum. |
| **LLM Arena** | Python Async / ThreadPool | Execution Engine | Runs head-to-head model comparisons on benchmark datasets; Judge LLM evaluates winner with reasoning. |
| **Dataset Storage** | JSON / PostgreSQL | File & DB Storage | Stores single-turn & multi-turn conversational evaluation benchmark datasets. |

---

### 🔔 Feature C: Integrations Engine (Slack, GitHub, Webhooks)
* **Purpose:** Connects Aegis to third-party team tools for real-time compliance alerting and automated workflows.

| Component | Technology | Category | Role in Feature |
|---|---|---|---|
| **Slack Client** | `@slack/web-api` | Official Node.js SDK | Formats and sends rich Slack Block Kit messages (`chat.postMessage`) to designated workspace channels. |
| **Security Protocol** | OAuth 2.0 | Security Standard | Handles secure authorization handshake with Slack API (`client_id`, `client_secret`, redirect URI). |
| **Token Encryption** | Node.js Crypto (AES-256-CBC) | Encryption Library | Encrypts and decrypts user OAuth access tokens stored in PostgreSQL using unique IV vectors. |
| **Routing Engine** | Node.js Event Handlers | Dispatcher | Maps governance event types (`Membership`, `Projects`, `Policy Reminders`, `Tasks`) to configured channel IDs. |

---

### ⚡ Feature D: Automations Engine
* **Purpose:** User-configurable rule-based automation engine (Trigger ➔ Action).

| Component | Technology | Category | Role in Feature |
|---|---|---|---|
| **Rule Evaluator** | TypeScript Event Bus | Logic Engine | Listens for system domain events (`model_updated`, `policy_changed`, `vendor_updated`). |
| **Schema Validation** | Pydantic / JSON Schema | Data Validator | Validates dynamic trigger inputs and action payload configurations. |
| **Action Handlers** | Node.js Async Dispatcher | Executor | Triggers automated actions (e.g. sending transactional emails via Resend API or creating tasks). |

---

### 🕸️ Feature E: Graph Traceability Link & Lineage Engine
* **Purpose:** Visualizes end-to-end relational governance lineage: `AI Model ➔ Use Case ➔ Risk ➔ Policy ➔ Evidence Control`.

| Component | Technology | Category | Role in Feature |
|---|---|---|---|
| **Graph Renderer** | React Flow & Cytoscape.js | Data Visualization Library | Renders interactive, zoomable, draggable node-and-edge network graphs in the browser. |
| **Lineage Querying** | Relational SQL Joins | Database Query | Executes recursive foreign key joins across `models`, `risks`, `policies`, and `controls` tables. |
| **Impact Analysis** | React State Engine | UI Logic | Highlights downstream affected assets when a regulatory policy or risk level is modified. |

---

### 🔍 Feature F: AI Detection & Repository Scanner
* **Purpose:** Scans software repositories (GitHub) to auto-discover hidden or ungoverned AI models, frameworks, and API dependencies.

| Component | Technology | Category | Role in Feature |
|---|---|---|---|
| **API Integration** | GitHub REST / GraphQL API | Integration Service | Fetches repository tree structure, package manifests (`requirements.txt`, `package.json`), and code files. |
| **Static Code Parser** | Regex & AST Syntax Parsers | Code Inspection Engine | Scans source code for AI import statements (`transformers`, `langchain`, `openai`, `torch`, `sklearn`). |
| **Risk Classifier** | Node.js / Python Logic | Rule Engine | Categorizes detected models by risk level and matches them against company governance policy rules. |

---

## 💡 Summary of System Strengths for Presentation

1. **Decoupled Architecture:** Node.js handles fast web transactions; Python FastAPI handles compute-heavy AI evals.
2. **Asynchronous Processing:** Long-running tasks run in background queues via BullMQ & Redis, preventing UI freezes.
3. **Enterprise Multi-Tenancy:** Secure database schema isolation using dynamic tenant hashes (`getTenantHash`).
4. **Unified Container Deployment:** 1-command deployment using Docker Compose on Azure Cloud infrastructure.
