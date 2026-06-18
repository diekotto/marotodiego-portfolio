# marotodiego.com

My personal portfolio — a **Cloud & DevOps architect's résumé presented as a terminal session**. Every section is the output of a command (`$ cat about.md`, `$ ls projects/`, `$ cat experience.log`), rendered in a single phosphor-green-on-slate terminal skin with JetBrains Mono throughout.

Live at **[www.marotodiego.com](https://www.marotodiego.com)**.

The design language (colors, typography, the shell-prompt metaphor) is documented in [`DESIGN.md`](DESIGN.md).

## Tech stack

- **Framework:** Next.js 15 (App Router) with React 19, exported as a fully static site (`output: 'export'`)
- **UI:** shadcn/ui on Radix primitives, `lucide-react` icons
- **Styling:** Tailwind CSS, dark theme by default (light "paper terminal" toggle via `next-themes`)
- **Font:** JetBrains Mono (`next/font/google`)
- **Hosting:** S3 (private origin) behind CloudFront, on AWS — provisioned with Terraform
- **CI/CD:** GitHub Actions

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # static export to ./out
npm run lint     # next lint
npm run fmt      # prettier --write .
```

> Run `lint`, `build`, and `fmt` before opening a PR.

## Project structure

```
app/                 # Next.js App Router: layout.tsx, page.tsx, globals.css
components/           # Section components (hero, about, skills, …) + section-heading
  └── ui/             # shadcn/ui primitives
hooks/                # Custom React hooks
lib/                  # Shared utilities
public/               # Static assets (icons, etc.)
terraform/            # AWS infrastructure (S3, CloudFront, ACM, Route53, apex redirect)
.github/workflows/    # deploy-web.yml (site), terraform.yml (infra)
```

`app/page.tsx` composes the page in order: Hero → About → Skills → Certifications → Projects → Community → Experience → Education → Awards → Contact → Footer.

## Deployment

The site is a static export served from a private S3 bucket through CloudFront (OAC, ACM TLS, HTTP/2+3, gzip/brotli). The apex domain 301-redirects to `www` via an API Gateway MOCK integration. All of this lives in [`terraform/`](terraform/).

Deploys are triggered manually via the **Deploy to S3** GitHub Action (`workflow_dispatch`), which builds, syncs `out/` to S3 (HTML uploaded `no-cache`, hashed assets `immutable`), and lets CloudFront serve the result.

## Community contributions

| Project        | What it does                                                                                                                                   | My contribution                                                                                                                                | Link                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **Readme AI**  | AI-powered CLI that autogenerates rich, customizable README files from any repo; supports OpenAI, Anthropic, Gemini, Ollama, and offline mode. | Shipped a GitHub-Action wrapper, added Spanish locale, and refactored the CLI to support larger Claude context windows while tightening tests. | <https://github.com/eli64s/readme-ai> |
| **Size Limit** | Performance-budget tool for JavaScript that runs in CI, calculates real download & exec cost, and fails the build if a PR tips the budget.     | Fixed PNPM-workspace resolution, added a Vite example, and triaged bundle-size regressions across three major frameworks.                      | <https://github.com/ai/size-limit>    |

## Find me online

- GitHub: [diekotto](https://github.com/diekotto)
- LinkedIn: [diegomaroto](https://www.linkedin.com/in/diegomaroto)
- Blog: [dev.to/diek](https://dev.to/diek)
- Email: hola@marotodiego.com

## License

[MIT](LICENSE)
