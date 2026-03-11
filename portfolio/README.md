# Developer Portfolio

A highly aesthetic, modern developer portfolio suitable for a Blockchain & Cloud Developer, entirely built using React and Tailwind CSS. The portfolio features a sleek dark theme, smooth transitions, mobile responsiveness, and easy customization via a single configuration file.

## Features

- **Centralized Configuration:** Edit all personal info, skills, projects, and certifications in one file (`src/config/data.js`).
- **Responsive Design:** Looks great on mobile devices, tablets, and desktops.
- **Glassmorphism UI:** Transparent, blurred cards for a modern, futuristic look.
- **Dark Theme Priority:** Sleek dark-slate aesthetics contrasted with vibrant, electric blue accents.
- **Animations:** Smooth scroll, slide-in effects, and glowing hover states.

## Tech Stack

- [React](https://react.dev/) (Vite)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Node.js

## How to Run Locally

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd testport
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

---

## Configuration

To customize the portfolio with your own details, open `src/config/data.js`. You can easily edit:
- `personalInfo`: Name, role, tagline, about section, and social links.
- `techSkills`: Your core skills and proficiency levels.
- `experience`: Work history or internships.
- `projects`: Your featured work with links to GitHub and live demos.
- `certifications`: Professional licenses and achievements.

## Building for Production

To create a production-ready build, run:
```bash
npm run build
```
The optimized files will be generated in the `dist` folder.

## License

MIT
