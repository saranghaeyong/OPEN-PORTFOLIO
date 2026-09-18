<div align="center">

### 🌐 **[View My Live Portfolio](https://saranghaeyong.github.io/OPEN-PORTFOLIO/)**

</div>

# Sarang R N — Cinematic Developer Portfolio

A cinematic, anime-inspired personal portfolio designed for **Sarang R N**, MCA Graduate specializing in Software Development, Python, and Machine Learning. The portfolio combines dark cyberpunk aesthetics, ambient digital particle effects, and an interactive AI research telemetry dashboard showcasing the flagship capstone project on Phishing Detection with LLM & CNN.

---

## 1. Project Description

This portfolio represents Sarang R N's technical capabilities, academic foundations, and key research project without inflating experience or adding unrequested claims:

- **Full-Screen Cinematic Hero:** Features dark cyberpunk-anime visuals, a lone developer silhouette rooftop vista, ambient particle effects, core technical badges, and clear calls-to-action.
- **Academic Foundation (About Me):** Details the Master of Computer Applications (MCA) from Cochin University of Science and Technology (CUSAT) and Bachelor of Computer Applications (BCA) from Bharata Mata College of Science and Arts.
- **Categorized Technical Arsenal:** Real technical skills across Programming, AI / Machine Learning, Web Development, Databases, Automation, and Tools with interactive filtering and zero fake percentage bars.
- **Centerpiece Research Project HUD:** Interactive pipeline visualizer detailing the project *"Towards the Detection of Phishing Websites Using LLM & CNN"* (CUSAT, Grade S, 16 Credits) with conceptual flow steps, neural architecture breakdown, and evaluation criteria.
- **Certifications & Direct Contact:** Minimalist certifications list and direct communication channels (Email, Phone, Location) with instant one-click clipboard copying.

---

## 2. Installation

Ensure you have [Node.js](https://nodejs.org/) (version 18 or newer) installed.

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <your-repository-url>
cd sarang-portfolio

# Install required dependencies
npm install
```

---

## 3. Development Command

To start the local development server:

```bash
npm run dev
```

The application will be accessible at:
```
http://localhost:3000
```

---

## 4. Production Build Command

To compile and bundle the application for production deployment:

```bash
npm run build
```

The compiled static assets will be output to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 5. How to Replace Hero Image

The hero artwork is configured in `src/config/portfolioConfig.ts`.

1. Place your new image file in `src/assets/images/` or `public/assets/`.
2. Open `src/config/portfolioConfig.ts`.
3. Update the `heroImage` property:

```typescript
// src/config/portfolioConfig.ts
export const PORTFOLIO_CONFIG: PortfolioData = {
  ...
  // Replace with your image path or public URL:
  heroImage: '/src/assets/images/your-new-hero-image.jpg',
  ...
};
```

*Recommended aspect ratio: 16:9 widescreen, dark cinematic palette.*

---

## 6. How to Add GitHub / LinkedIn / Project Links

External links and project URLs are kept in `src/config/portfolioConfig.ts` so no dummy links are displayed on the live site:

### Adding Project Repository / Demo Link:

```typescript
// src/config/portfolioConfig.ts
project: {
  ...
  // Add your GitHub repository or paper URL here:
  projectUrlPlaceholder: 'https://github.com/your-username/phishing-detection-llm-cnn',
}
```

### Adding GitHub, LinkedIn, and Resume:

```typescript
// src/config/portfolioConfig.ts
socialPlaceholders: {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  resume: '/resume.pdf', // or a cloud link to your CV
},
```

Once added, the placeholder cards in the **Contact** section and the **View Project** button in the Featured Project section will automatically link directly to your profiles!

---

## 7. How to Deploy

### Option A: Vercel / Netlify / Cloudflare Pages

1. Push this project to GitHub.
2. Connect your GitHub repository to Vercel, Netlify, or Cloudflare Pages.
3. Configure the build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### Option B: Google Cloud Run

Build the container image using the included Docker/Cloud Run configuration and deploy:

```bash
gcloud run deploy sarang-portfolio --source . --port 3000
```

### Option C: GitHub Pages

1. Set `base: './'` in `vite.config.ts`.
2. Run `npm run build`.
3. Deploy the contents of the `dist/` folder to your `gh-pages` branch.

---

## License & Attribution

Designed and created for **Sarang R N**. All rights reserved.
