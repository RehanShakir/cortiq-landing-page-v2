# Cortiq.co Homepage Clone

A pixel-perfect replica of the Cortiq.co homepage built with Next.js 15, TypeScript, and Tailwind CSS. This project features identical functionality, animations, and interactions as the original site, with full dark theme support, video hero background, and accessibility features.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for reveal animations, parallax effects, and micro-interactions
- **Smooth Scrolling**: Lenis for buttery-smooth scrolling experience
- **Interactive Components**: Embla Carousel for testimonials, hover effects, and transitions
- **Accessibility**: Full keyboard navigation, reduced motion support, and semantic HTML
- **Performance Optimized**: 60fps animations, optimized images, and fast loading times
- **SEO Ready**: Meta tags, Open Graph data, and structured content

## 📦 Components

The homepage includes the following sections:

- **Header**: Sticky navigation with dropdown menus and mobile drawer
- **Hero**: Tilted video background, gradient text animation, CTAs, and animated visuals
- **TrustLogos**: Continuous marquee of company logos
- **FeatureStats**: Animated statistics with counter effects
- **ExplainerVideo**: Video section with play overlay and controls
- **ResultsGrid**: KPI cards with hover animations
- **PlatformSuite**: Tabbed component with Framer Motion transitions
- **Integrations**: Grid of integrations with hover tooltips
- **RatingsStrip**: Awards and ratings display
- **Testimonials**: Carousel with autoplay and progress indicators
- **SocialProofWall**: Tweet-style social proof cards
- **CTASection**: Educational content and community links
- **Footer**: 4-column layout with links and social icons
- **CookieBanner**: GDPR-compliant cookie consent

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd new_landing_page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Replacing Placeholder Content

#### Text Content
- **Hero Section**: Edit `src/components/Hero.tsx`
- **Testimonials**: Update testimonial data in `src/components/Testimonials.tsx`
- **Social Proof**: Modify social posts in `src/components/SocialProofWall.tsx`

#### Images and Logos
- **Company Logos**: Replace placeholder logos in `src/components/TrustLogos.tsx`
- **Integration Icons**: Update integration data in `src/components/Integrations.tsx`
- **Video Content**: Replace video placeholder in `src/components/ExplainerVideo.tsx`
- **Hero Video**: Replace `public/hero-video.mp4` with your own video file

#### Colors and Styling
- **Primary Colors**: Update color palette in `tailwind.config.ts`
- **Fonts**: Modify font imports in `src/app/globals.css`
- **Spacing**: Adjust spacing values in component files

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Follow the existing animation patterns with Framer Motion

### SEO Configuration

Update metadata in `src/app/layout.tsx`:
- Title and description
- Open Graph images
- Twitter card data
- Canonical URLs

## 🎯 Performance

The project is optimized for high performance:

- **Lighthouse Scores**: Targets 90+ for Performance, SEO, and Accessibility
- **Animation Performance**: 60fps on mobile devices
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Image Optimization**: Next.js Image component for automatic optimization

## ♿ Accessibility

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Readers**: Semantic HTML and ARIA labels
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color combinations

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: `sm:`, `md:`, `lg:`, `xl:` Tailwind breakpoints
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Smooth animations on all device sizes

## 🔧 Technical Details

### Dependencies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lenis**: Smooth scrolling library
- **Embla Carousel**: Lightweight carousel component
- **Lucide React**: Beautiful icon library

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is for educational purposes. Please respect the original Cortiq.co website's terms of use and don't use this code for commercial purposes without permission.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

## 🎉 Acknowledgments

- Inspired by the beautiful design of Cortiq.co
- Built with modern web technologies and best practices
- Thanks to the open-source community for the amazing tools

---

**Note**: This is a clone/replica for educational purposes. All placeholder content should be replaced with your own content, and you should ensure compliance with any applicable terms of use for the original design inspiration.