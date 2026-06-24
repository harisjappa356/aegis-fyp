## Acknowledgment

We would like to express our profound gratitude to our project supervisor, **Usama Ahmad**, for his invaluable guidance, continuous support, and constructive feedback throughout the development of **Aegis.AI — An AI Governance Platform**. His expertise and mentorship have been instrumental in shaping this project and helping us navigate the complex domain of AI compliance and regulations.

We also extend our sincere thanks to the Head of Department and the Program Director of the Department of Artificial Intelligence and Data Science at the **University of Management and Technology (UMT), Lahore**, for providing us with the resources and academic environment necessary to undertake this Final Year Project.

Furthermore, we are deeply grateful to our families and friends for their unwavering patience, encouragement, and moral support during the long months of research and development. Lastly, we acknowledge the open standards community and the developers of the open-source tools—including PostgreSQL, React, Node.js, and Python—that made the realization of this platform possible.

*— Muhammad Haris, Ahmed Abdullah Khan, Farhana Minhas*

---

## System Boundary and List of Actors

### System Boundary
The **Aegis.AI Platform** serves as the system boundary. Inside this boundary lies the core functionality: User Management, Multi-Tenancy Isolation, Compliance Framework Tracking (EU AI Act, ISO 42001, etc.), Risk and Vendor Management, LLM Evaluations, the AI Advisor, and Reporting. External entities that interact outside this boundary include Regulatory Bodies, Third-Party APIs (OpenAI/Anthropic, GitHub, Slack, MLflow), and Email Providers.

### List of Actors (Stakeholders & Users)
The following actors interact with or are impacted by the Aegis.AI platform and its associated user stories:

- **End User / Employee**; this person is a member of the organization who registers for an account, logs into the portal, manages personal preferences (Dark/Light mode, notifications), resets their passwords, and completes assigned compliance training. *(Associated User Stories: US-101, US-103, US-104)*
- **Admin**; this person has complete platform control for an organization. Multiple employees can be managed under an organization's license. The Admin assigns user roles, configures API tokens, views organization-wide data dashboards, manages subscription tiers, and builds custom multi-step approval workflow templates. *(Associated User Stories: US-102, US-105, US-202, US-203, US-303)*
- **AI Governance Officer / Editor**; this person drives day-to-day governance. They create and manage use cases (projects), fill in questionnaires for compliance frameworks (EU AI Act, ISO 42001, NIST AI RMF), manage AI policies, assess vendor risks, and submit projects for formal approval. *(Associated User Stories: US-301, US-401, US-402, US-403)*
- **Reviewer**; this person acts as an internal compliance checkpoint. They review the implementation details and assessment answers submitted by the Editor, and can either approve or reject the pending requests. *(Associated User Stories: US-302)*
- **Risk Owner**; this person is responsible for creating, tracking, and maintaining a history of project-specific or model-specific risks within the organization. *(Associated User Stories: US-501, US-502)*
- **Auditor**; this person (internal or external) holds read-only access to governance records to view evidence, inspect audit logs, and extract compliance reports for regulatory purposes.
- **System (Automated Jobs)**; this non-human actor operates in the background to automatically calculate risk levels based on severity and likelihood, ensure schema-per-tenant data isolation, provide AI-driven auto-completion for compliance controls, and execute scheduled monitoring tasks. *(Associated User Stories: US-201, US-404, US-503)*
- **LLM Provider (External System)**; this external AI service (e.g., OpenAI, Anthropic) processes prompts sent by the system to generate chat responses for the AI Advisor and execute LLM Evaluations.
- **Regulatory Body (External Stakeholder)**; these are external entities or government regulators who receive the finalized PDF/DOCX compliance reports, CE Marking certificates, and view the public-facing AI Trust Center.
