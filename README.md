# Portfolio Website - Dede Febriansyah

A modern, responsive portfolio website showcasing skills, projects, and experience as a Full Stack Developer.

## 🌟 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **Interactive Animations**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and structured data
- **TypeScript**: Fully typed for better development experience

## 🛠 Technologies Used

### Frontend

- **Next.js 15** - React framework for production
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icons

### Development Tools

- **ESLint** - Code linting
- **VS Code** - Recommended IDE

### Deployment

- **Cloudflare Pages** - Deployment platform
- **Vercel** - Alternative deployment option

## 📋 Prerequisites

- Node.js 18.x or higher
- npm package manager

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](https://dedeproject.dev) to see the portfolio.

## 📝 Customization

### Personal Information

Update your personal information in `/src/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ... other fields
};
```

### Projects & Experience

Add your projects and work experience in the same file by updating the respective arrays.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   └── ui/               # Reusable UI components
├── data/                 # Data and content
│   └── portfolio.ts      # Portfolio data (personal info, projects, skills)
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
└── types/                # TypeScript type definitions
    └── index.ts          # Type definitions
```

## 🎨 Sections Included

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal story, education, and certifications
- **Skills**: Technical skills organized by category with proficiency levels
- **Experience**: Work history with detailed descriptions
- **Projects**: Showcase of projects with filters and project details
- **Contact**: Contact form and social links

## 🚀 Deployment

### Cloudflare Pages (Current Setup)

```bash
npm run build
npm run deploy
```

### Manual Build

```bash
npm run build
npm start
```

## 📱 Responsive Design

Fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

| Command           | Action                   |
| :---------------- | :----------------------- |
| `npm run dev`     | Start development server |
| `npm run build`   | Build production version |
| `npm run preview` | Preview build locally    |
| `npm run deploy`  | Deploy to Cloudflare     |
| `npm run lint`    | Run ESLint               |

## 📞 Support

For questions or customization help:

- **Email**: febriansyahd65@gmail.com
- **GitHub**: [@dedeez14](https://github.com/dedeez14)

---

Built with ❤️ by Dede Febriansyah using Next.js & TypeScript
