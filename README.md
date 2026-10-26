# Mani Vardhan Reddy — Portfolio

A responsive, interactive personal portfolio built with React + Vite. It includes a hero section, about, experience, education, filterable project cards, skill groups, certifications, and contact actions.

## Requirements
- Node.js 18+ (recommended: current LTS)
- Visual Studio Code
- Internet connection for first-time dependency installation and Google Fonts

## Run locally in VS Code

1. Download and extract `mani-portfolio.zip`.
2. Open Visual Studio Code.
3. Select **File → Open Folder...** and choose the extracted `mani-portfolio` folder.
4. Open **Terminal → New Terminal**.
5. Install dependencies:

   ```bash
   npm install
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. In the terminal, open the local URL Vite prints (usually `http://localhost:5173`).

To stop the server, press `Ctrl + C` in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The production files are created in the `dist` folder.

## Personalize it before publishing

Open `src/main.jsx` and update:

- `profile`: email, phone, LinkedIn URL, GitHub URL, location.
- `projects`: descriptions, contributions, company labels, and technology stacks.
- `certifications`: keep only certifications you have completed.
- Skills in `skillGroups`.
- The experience and education content in the JSX.

### Important accuracy notes
- The project descriptions are based on the supplied resume and have been rewritten for portfolio presentation.
- The `02+ years` metric is based on the resume summary; update it if your current experience changes.
- The `20+` REST-controller metric is stated for Demand Tracker in the resume. The site uses it as a highlight; retain it only if you're comfortable presenting it that way.
- LinkedIn and GitHub links are placeholders because the exact profile URLs were not included in the resume. Replace them with your real profile URLs before publishing.
- Internal company projects may be confidential. Publish only details approved by your employer; don't add source code, screenshots, customer information, or internal architecture details without permission.
- The “Copy email” button uses the browser clipboard API; if clipboard permission is unavailable, it opens the email app.

## Suggested next steps
1. Add a downloadable PDF resume link if you want one.
2. Replace placeholder social links with your real profiles.
3. Test on mobile and desktop.
4. Publish using Vercel, Netlify, or GitHub Pages (Vercel/Netlify are straightforward for Vite apps).
