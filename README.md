# Personal Portfolio - Cloud & DevOps Architect · AWS Solutions Architect · Security-First Engineer

A modern, responsive portfolio website built with React, Shadcn, and Tailwind CSS. This portfolio showcases professional experience, technical skills, projects, and technical articles.

I build resilient, highly-scalable cloud platforms that turn business problems into automated, serverless, and container-driven solutions. With deep expertise in AWS, Terraform, and CI/CD automation, I enable teams to ship faster and sleep better. Passionate about clean architectures, mentoring, and driving a security-first culture.

## 🚀 Features

- Responsive design optimized for all devices
- Dark theme with modern UI
- Smooth scroll navigation
- Interactive components with hover effects
- Section-based layout:
  - Professional introduction
  - Technical skills showcase
  - Certifications
  - Work experience timeline
  - Personal projects gallery
  - Community contributions section
  - Technical articles section

## 🛠️ Tech Stack

- **Framework:** React with Shadcn
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Aws Cloudfront with S3

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/diekotto/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 🔧 Project Structure

```
src/
  ├── components/
  │   ├── sections/
  │   │   ├── Hero.tsx
  │   │   ├── Skills.tsx
  │   │   ├── Experience.tsx
  │   │   ├── Projects.tsx
  │   │   └── Articles.tsx
  │   └── layout/
  │       └── Navbar.tsx
  ├── App.tsx
  └── index.tsx
```

## 🎨 Customization

1. Update personal information:

   - Edit content in each section component
   - Update links and social media profiles
   - Modify job experiences and projects

2. Styling:

   - Colors can be adjusted in `tailwind.config.js`
   - Component styles are managed with Tailwind classes
   - Layout and spacing can be modified in individual components

3. Content Structure:
   - Each section is a separate component
   - Easy to add or remove sections as needed

## 🔍 Component Overview

- **Navbar**: Fixed navigation with smooth scroll to sections
- **Hero**: Introduction section with social links
- **Skills**: Technical skills displayed in card format
- **Certifications**: Professional certifications highlighting expertise
- **Experience**: Professional experience with detailed descriptions
- **Projects**: Personal projects showcase with GitHub links
- **Community Contributions**: Highlights open source projects I've helped shape
- **Articles**: Technical articles with links to full content

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile devices
- Tablets
- Desktop screens
- Large desktop screens

## 🔄 Development Workflow

1. Create a new branch for features:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:

```bash
git add .
git commit -m "Description of changes"
```

3. Push changes and create a pull request:

```bash
git push origin feature/your-feature-name
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Community Contributions

| Project        | What It Does                                                                                                                                                                             | My Touch                                                                                                                                       | Link                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **Readme AI**  | AI-powered CLI that autogenerates rich, customizable README files from any repo; supports OpenAI, Anthropic, Gemini, Ollama, and even offline mode.                                      | Shipped a GitHub-Action wrapper, added Spanish locale, and refactored the CLI to support larger Claude context windows while tightening tests. | <https://github.com/eli64s/readme-ai> |
| **Size Limit** | Performance-budget tool for JavaScript that runs in CI, calculates real download & exec cost, and fails the build if a PR tips the budget; includes tree-shaking and time-based metrics. | Fixed PNPM-workspace resolution, added Vite example, and triaged bundle-size regressions across three major frameworks.                        | <https://github.com/ai/size-limit>    |

## Find Me Online

For any questions or suggestions, please reach out:

- GitHub: [diekotto](https://github.com/diekotto)
- LinkedIn: [diegomaroto](https://www.linkedin.com/in/diegomaroto)
- Blog: [dev.to/diek](https://dev.to/diek)
- Email: hola@marotodiego.com

---

Made with ❤️
