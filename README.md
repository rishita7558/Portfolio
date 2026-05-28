# Rishita Saladi - Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://html.com/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://www.javascript.com/)

A modern, highly responsive, and interactive personal developer portfolio website designed to showcase my projects, skills, and professional experience. Built with a focus on UI/UX, the portfolio features a glassmorphic aesthetic, dark/light mode functionality, smooth scroll animations, and a clean, mobile-first design.

## ✨ Features
- **Dark/Light Mode:** Seamless theme toggling with local storage persistence.
- **Glassmorphism Design:** Premium UI with frosted glass effects, glowing borders, and gradient accents.
- **Dynamic Animations:** Floating objects, scroll-triggered reveal animations (`IntersectionObserver`), and interactive typing effects (`Typed.js`).
- **Responsive Layout:** fully optimized for desktops, tablets, and mobile devices with a slide-out hamburger menu.
- **Experience Timeline:** Vertical animated timeline to showcase professional history and internships.
- **Contact Form Validation:** Simulated backend contact form with a dynamic toast notification system.
- **Native PDF Download:** 1-click resume download feature.

## 🛠 Tech Stack
- **HTML5:** Semantic and accessible structure.
- **CSS3:** Custom properties (variables) for theme management, Flexbox/Grid layouts, keyframe animations, and media queries.
- **JavaScript (Vanilla):** DOM manipulation, event handling, and scroll observations.
- **Typed.js:** Library for dynamic typing animations.
- **FontAwesome:** Scalable vector icons.
- **Google Fonts:** Inter & Plus Jakarta Sans typography.

## 📂 Folder Structure
```text
Portfolio/
├── index.html        # Main HTML structure and content
├── stylesheet.css    # Core styling, animations, and responsive breakpoints
├── main.js           # Interactive logic, theme toggle, form handling
├── Me.jpeg           # Circular profile picture asset
├── Saladi_Rishita_Resume.pdf        # Downloadable CV/Resume
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
- **Resume File:** Replace the existing `Saladi_Rishita_Resume.pdf` in the root directory with your updated CV. Make sure the filename matches.
- **Typing Animation:** Edit the strings array in `main.js` to customize the titles in the hero section.

## 🌐 Deployment
This static site can be deployed easily for free on platforms like **GitHub Pages**, **Vercel**, or **Netlify**.

**To deploy to GitHub Pages:**
1. Push your code to a public GitHub repository.
2. Go to your repository settings.
3. Navigate to the **Pages** section on the left sidebar.
4. Under "Source", select the `main` branch and save.
5. Your portfolio will be live in a few minutes!

## 📸 Screenshots
*(You can add screenshots of your site here)*

| Dark Mode | Light Mode |
|-----------|------------|
| ![Dark Mode](https://via.placeholder.com/400x250.png?text=Dark+Mode+Screenshot) | ![Light Mode](https://via.placeholder.com/400x250.png?text=Light+Mode+Screenshot) |

## 📫 Contact Info
- **LinkedIn:** [Rishita Saladi](https://linkedin.com/in/rishita-saladi-397319324)
- **GitHub:** [@rishita7558](https://github.com/rishita7558)
- **Email:** rishitasaladi2007@gmail.com

---
*Designed & Developed with ❤️ by Rishita Saladi*
