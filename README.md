# ZenZop Landing Page

A modern, responsive landing page application built with Next.js 13+ and Tailwind CSS. This project showcases ZenZop's delivery services with dedicated pages for Users, Riders, and Shop owners.

## 🚀 Features

### **Multi-Page Landing Experience**

- **User Page**: Grocery delivery services for customers
- **Rider Page**: Delivery partner opportunities and app features
- **Shop Page**: Store management and partnership information

### **Responsive Design**

- Mobile-first approach with responsive breakpoints
- Optimized for all device sizes (mobile, tablet, desktop)
- Touch-friendly navigation and interactions

### **Modern UI/UX**

- Clean, professional design with dark blue color scheme
- Smooth scroll effects and transitions
- Interactive elements with hover states
- Optimized images and assets

### **Navigation & Header**

- Sticky header with scroll effects
- Dynamic background transparency
- Responsive navigation (text on mobile, full nav on desktop)
- Active route highlighting

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX
- **Images**: Next.js Image component with optimization
- **Responsive**: Mobile-first CSS approach
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📱 Pages & Components

### **Main Pages**

- `/` - Home/Landing page
- `/user` - Customer grocery delivery page
- `/rider` - Delivery partner page
- `/shop` - Store management page

### **Components**

- **Header**: Global navigation with responsive design
- **Footer**: App download section with store links
- **Hero Sections**: Engaging content with call-to-action buttons
- **Feature Sections**: Service highlights and benefits
- **Testimonials**: User reviews and feedback
- **FAQ**: Common questions and answers

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn package manager

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/Chandan881/landingpage.git
   cd landingpage
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**

```bash
npm run build
npm start
```

## 📁 Project Structure

```
landing-app/
├── app/
│   ├── (routes)/
│   │   ├── rider/          # Rider landing page
│   │   ├── shop/           # Shop landing page
│   │   └── user/           # User landing page
│   ├── assests/            # Images and assets
│   │   └── mainLanding/    # Main landing page assets
│   ├── components/          # Reusable components
│   │   ├── atoms/          # Basic UI components
│   │   ├── molecules/      # Compound components
│   │   └── organisms/      # Complex page sections
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout component
│   └── page.js             # Home page
├── public/                  # Static assets
├── README.md               # This file
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### **Colors**

The project uses a consistent dark blue color scheme:

- Primary: `text-blue-900` (Dark blue)
- Active: `text-blue-600` (Medium blue)
- Hover: `text-blue-700` (Hover states)
- Buttons: `bg-blue-600` (Primary buttons)

### **Styling**

- All styles use Tailwind CSS classes
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Custom CSS can be added to `globals.css`

### **Content**

- Update text content in respective page files
- Replace images in `app/assests/mainLanding/`
- Modify navigation links in `Header.js`

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Text navigation, compact layout
- **Small**: `640px - 768px` - Enhanced mobile experience
- **Medium**: `768px - 1024px` - Tablet layout
- **Large**: `1024px+` - Desktop with full navigation

## 🚀 Deployment

### **Vercel (Recommended)**

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Custom domain can be added in Vercel dashboard

### **Netlify**

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure build settings in Netlify dashboard

### **Other Platforms**

- Any static hosting service that supports Next.js
- Export as static files: `npm run export`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Chandan** - [GitHub Profile](https://github.com/Chandan881)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and supporters

---

**ZenZop Landing Page** - Delivering excellence in digital experiences 🚀
