# NeonSaaS - God-Tier Animated Landing Page ⚡

A high-performance, futuristic SaaS landing page built with **Next.js 16**, **Tailwind CSS v4**, and **GSAP**. This project pushes the boundaries of web interactivity with "God-Tier" animations, holographic effects, and a cinematic user experience.

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/59468c47-b185-42e5-bca3-c3d039506cf3" />


## 🚀 Features!

### **"God-Tier" Animations**
*   **Holographic Feature Cards**: Interactive 3D tilt with rotating "Border Beam" lights and crushed-glass backgrounds.
*   **Magnetic Interactions**: Buttons and cursors that snap to elements with physics-based elasticity.
*   **Cinematic Preloader**: A "Hyper-Spaced" entrance sequence that shatters the screen to reveal content.
*   **Spotlight Grid**: Mouse-following spotlight effects that reveal the underlying grid structure.
*   **Hacker Text Scramble**: Cyberpunk-style text decoding effects on headers.
*   **Parallax Scrolling**: Deep, multi-layered parallax effects on background elements.

### **Core UI/UX**
*   **Smooth Scrolling**: Integrated `Lenis` for a luxury, weighted scroll feel.
*   **Smart Navbar**: Glassmorphic, scroll-aware navigation that hides/shows intelligently.
*   **Glassmorphism**: Advanced blur and saturation filters for a premium frosted glass look.
*   **Responsive**: Fully optimized for mobile, tablet, and desktop.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation**: 
    *   [GSAP](https://gsap.com/) (GreenSock Animation Platform)
    *   [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
    *   [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Fonts**: `Inter` & `Space Grotesk`

## 📦 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anshtripathi6969/Animated-HD-Landing-Page---Next-js.git
    cd landing-page
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open locally:**
    Visit [http://localhost:3000](http://localhost:3000) to see the magic.

## 📂 Project Structure

```bash
src/
├── app/
│   ├── globals.css      # Global styles, variables, & tailwind 
│   ├── layout.tsx       # Root layout with SmoothScroll provider
│   └── page.tsx         # Main landing page composition
├── components/          # Reusable UI components
│   ├── Features.tsx     # The "God-Tier" holographic cards
│   ├── Hero.tsx         # Main entrance with magnetic buttons
│   ├── Navbar.tsx       # Smart scroll-aware navigation
│   ├── ProductDemo.tsx  # 3D dashboard with scrub animation
│   └── ...
└── lib/
    └── utils.ts         # CN utility for class merging
```

## 🎨 Custom Effects Explained

### **The "Border Beam"**
A custom CSS animation in `globals.css` that rotates a conic gradient behind a masked container to create a perpetual moving light effect on card borders.

### **Magnetic Button**
Uses React refs and GSAP's `quickTo` to calculate mouse position relative to the button center, applying a translation force that "pulls" the button towards the cursor.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

I am not promoting any product , just showcasing my skills!!

---

Currently built by **Ansh Tripathi**.
