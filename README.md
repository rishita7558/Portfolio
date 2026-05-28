# Rishita Saladi - Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://html.com/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://www.javascript.com/)

A modern, highly responsive, and interactive personal developer portfolio website designed to showcase my projects, skills, and professional experience. Built with a focus on UI/UX, the portfolio features a glassmorphic aesthetic, dark/light mode functionality, smooth scroll animations, and a clean, mobile-first design.

## ✨ Features
- **Dark/Light Mode:** Seamless theme toggling with local storage persistence.
- **Glassmorphism & Micro-interactions:** Premium UI with frosted glass effects, glowing borders, custom `cubic-bezier` hover elevations, and tactile button press states.
- **Dynamic Animations:** Floating objects, scroll-triggered reveal animations (`IntersectionObserver`), and interactive typing effects (`Typed.js`).
- **SEO & Accessibility:** Fully optimized with semantic HTML5 (`<main>`, `<nav>`), ARIA attributes, Open Graph meta tags, Twitter Cards, and canonical URLs.
- **Responsive Layout:** Fully optimized for desktops, tablets, and mobile devices with an accessible slide-out hamburger menu.
- **Experience Timeline:** Vertical animated timeline to showcase professional history and internships.
- **Functional Contact Form:** Fully working contact form powered by the **Web3Forms API** to route messages directly to an email inbox.
- **CI/CD Pipeline:** Automated GitHub Actions workflow for HTML validation (`HTMLHint`) and seamless zero-downtime deployment to Vercel.
- **Native PDF Download:** 1-click resume download feature.

## 🛠 Tech Stack
- **HTML5:** Semantic and accessible structure.
- **CSS3:** Custom properties (variables) for theme management, Flexbox/Grid layouts, advanced keyframe animations, and `cubic-bezier` transitions.
- **JavaScript (Vanilla):** DOM manipulation, event handling, scroll observations, and `fetch` API requests.
- **Web3Forms API:** Backend-as-a-service for secure email routing without a custom server.
- **GitHub Actions:** CI/CD automation for validation and deployment.
- **Typed.js:** Library for dynamic typing animations.
- **FontAwesome:** Scalable vector icons.
- **Google Fonts:** Inter & Plus Jakarta Sans typography.

## 📂 Folder Structure
```text
Portfolio/
├── .github/workflows/
│   └── ci-cd.yml     # Automated CI/CD pipeline for Vercel deployment
├── index.html        # Main HTML structure with SEO and A11y tags
├── stylesheet.css    # Core styling, micro-interactions, and responsive breakpoints
├── main.js           # Interactive logic, theme toggle, Web3Forms integration
├── Me.jpeg           # Circular profile picture asset
├── Saladi_Rishita_Resume.pdf  # Downloadable CV/Resume
└── README.md         # Project documentation
```

## ⚙️ Installation & Setup

To run this project locally, simply clone the repository and open the HTML file. No build tools or package managers are required!

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishita7558/Portfolio.git
   cd Portfolio
   ```

2. **Run the project**
   - Simply double-click the `index.html` file to open it in your browser.
   - *Alternatively*, if using VS Code, use the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for hot-reloading.

## 🎨 Customization
- **Theme Colors:** Open `stylesheet.css` and update the root variables to change the accent gradients:
  ```css
  :root {
      --accent-cyan: #06b6d4;
      --accent-violet: #8b5cf6;
  }
  ```
- **Profile Picture:** Replace the existing `Me.jpeg` in the root directory with your own profile image to automatically update the hero section.
- **Resume File:** Add your updated CV to the root directory. If you use a different filename (e.g., `my_resume.pdf`), you must update the `href` and `download` attributes in `index.html` on lines containing `<a href="./resume.pdf"`.
- **Typing Animation:** Edit the strings array in `main.js` to customize the titles in the hero section.
- **Contact Form Emails:** Update the `access_key` in `main.js` with your own key from [Web3Forms](https://web3forms.com/) to receive messages at your preferred email address.

## 🌐 Deployment & CI/CD
This static site is equipped with a GitHub Actions workflow (`.github/workflows/ci-cd.yml`) that automatically tests your HTML and deploys changes to **Vercel**. 

**To use the automated Vercel pipeline:**
1. Create a token in your Vercel Dashboard.
2. In your GitHub repository, go to **Settings > Secrets and variables > Actions**.
3. Add three repository secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`.
4. The pipeline will now automatically deploy your site whenever you push to the `main` branch.

Alternatively, you can delete the `.github` folder and use Vercel, Netlify, or GitHub Pages' native automated dashboard integrations.

**To deploy to GitHub Pages:**
1. Push your code to a public GitHub repository.
2. Go to your repository settings.
3. Navigate to the **Pages** section on the left sidebar.
4. Under "Source", select the `main` branch and save.
5. Your portfolio will be live in a few minutes!

## 📫 Contact Info
- **LinkedIn:** [Rishita Saladi](https://linkedin.com/in/rishita-saladi-397319324)
- **GitHub:** [@rishita7558](https://github.com/rishita7558)
- **Email:** rishitasaladi2007@gmail.com

---
*Designed & Developed with ❤️ by Rishita Saladi*
