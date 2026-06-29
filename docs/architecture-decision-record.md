# Architecture Decision Record: v5 Product-Sheet Refresh

## Context

The source project at `E:\Project\Agentic-Senior-Core` changed from the older per-project scaffolding direction into a v5 universal plugin package. The site had visible copy close to v5, but supporting docs still described obsolete setup and visual decisions.

## Decision

Keep the restrained neo-brutal product sheet and update the content model around the current package:

1. Hero headline uses the product name and the current install command.
2. Capabilities describe plugin-tier delivery, the small `AGENTS.md` core, on-demand skills/commands, and `ascx`.
3. Quick start follows README setup order: global npm install, plugin install, adapter generation, status check.
4. CLI demo uses `asc status` and `ascx` samples instead of imagined plugin boot output.
5. Docs section links to source repo portability and architecture docs.

## Consequences

- The page is closer to the actual repo and easier to maintain after package changes.
- The visual identity stays distinct without a large rebuild.
- The site no longer implies the v4 `.agent-context` scaffold is the main product.
- Future updates should start by checking `package.json`, `README.md`, `docs/agent-portability.md`, and `docs/architecture.md` in the source repo.
