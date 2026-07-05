# Granite City Salsa Website

A modern, responsive website for Aberdeen's premier salsa and bachata dance community. Built with React, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This website serves as the digital home for Granite City Salsa, showcasing class schedules, instructors, venue information, and providing an easy way for potential students to claim their first free class.
check

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A code editor (VS Code recommended)

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd granite-city-salsa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure
```
granite-city-salsa/
├── public/                  # Static assets
│   ├── logo.png            # Granite City Salsa logo
│   ├── venue.png           # Dejavu Nightclub photo
│   └── team/               # Instructor photos
│       ├── jordan.png
│       ├── alexandra.png
│       ├── luis.png
│       ├── maria.png
│       └── team.png        # Group photo
├── src/
│   ├── components/         # React components
│   │   ├── Hero.tsx        # Landing section with CTA
│   │   ├── Schedule.tsx    # Class timetable
│   │   ├── Team.tsx        # Instructor profiles
│   │   ├── Location.tsx    # Venue info & map
│   │   └── ClaimModal.tsx  # Free class claim popup
│   ├── App.tsx             # Main application component
│   ├── App.css             # Component-specific styles
│   ├── index.css           # Global styles & animations
│   └── main.tsx            # Application entry point
├── index.html              # HTML template (includes Tailwind CDN)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🎨 Key Components

### Hero Component (`src/components/Hero.tsx`)
- **Purpose**: First section visitors see with main branding and call-to-action
- **Features**:
  - Granite City Salsa logo
  - Social media links (Instagram, Facebook)
  - "Claim Your First Class FREE" button
  - Opens modal with instructions before redirecting to Instagram DM
- **Key Functions**:
  - `useState` to manage modal visibility
  - Modal triggers Instagram DM flow

### Schedule Component (`src/components/Schedule.tsx`)
- **Purpose**: Displays the weekly class timetable
- **Structure**:
  - Array of class objects with time, name, instructors, and colour coding
  - Responsive grid layout (2 columns on desktop, 1 on mobile)
  - Colour-coded badges for each class type
- **Customisation**: Edit the `classes` array to update schedule

### Team Component (`src/components/Team.tsx`)
- **Purpose**: Showcases instructors with photos and bios
- **Structure**:
  - Group photo at the top
  - Individual cards for each instructor
  - Colour-coded role badges matching their speciality
- **Customisation**: Edit the `instructors` array to add/remove/update instructors

### Location Component (`src/components/Location.tsx`)
- **Purpose**: Provides venue information and directions
- **Features**:
  - Venue photo with hover effects
  - Address and directions information
  - "Get Directions" button (links to Google Maps)
  - Embedded Google Maps iframe
- **Customisation**: Update the Google Maps embed URL if venue changes

### ClaimModal Component (`src/components/ClaimModal.tsx`)
- **Purpose**: Popup that explains how to claim free class before redirecting to Instagram
- **Props**:
  - `isOpen`: Boolean to control visibility
  - `onClose`: Function to close the modal
- **Features**:
  - Instructions for users
  - Link to Instagram DM
  - Close button and "Maybe later" option

## 🎨 Styling & Design

### Technology Stack
- **Tailwind CSS**: Utility-first CSS framework (loaded via CDN)
- **Custom Animations**: Defined in `src/index.css`
- **Colour Scheme**:
  - Primary: Green (`from-green-400 to-green-600`)
  - Background: Dark grey/purple gradients
  - Accent colours: Pink, blue, purple, red (for different class types)

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - `md:` - 768px and above (tablets and desktops)
  - All components are fully responsive

### Custom Animations
Defined in `src/index.css`:
- `animate-fade-in`: Fade in with upward motion
- `animate-slide-up`: Slide up with staggered delays

## 🔧 Common Modifications

### Updating Class Schedule

Edit `src/components/Schedule.tsx`:
```typescript
const classes = [
  {
    time: "7pm - 8pm",
    name: "Beginners Salsa",
    instructors: "Jordan & Alexandra",
    color: "from-green-500 to-green-600"
  },
  // Add more classes here
]
```

### Changing Social Media Links

Edit `src/components/Hero.tsx`:
```typescript
// Instagram
href="https://www.instagram.com/granitecitysalsa"

// Facebook
href="https://www.facebook.com/profile.php?id=61581967402586"
```

### Updating Venue Information

Edit `src/components/Location.tsx`:
- Change address text
- Update Google Maps embed URL
- Replace venue photo in `public/venue.png`

### Adding New Instructors

Edit `src/components/Team.tsx`:
```typescript
const instructors = [
  {
    name: "New Instructor",
    role: "Dance Style Instructor",
    bio: "Biography text here...",
    image: "/team/new-instructor.png",
    color: "from-blue-500 to-purple-600"
  },
  // Add to the array
]
```

Then add their photo to `public/team/new-instructor.png`

### Changing Brand Colours

Update throughout components by replacing Tailwind classes:
- `from-green-400 to-green-600` (primary buttons/CTAs)
- `from-purple-500 to-pink-600` (accents)
- Colour classes follow Tailwind's naming convention

## 📸 Managing Images

### Adding/Replacing Images

1. **Logo**: Replace `public/logo.png`
2. **Venue Photo**: Replace `public/venue.png`
3. **Team Photos**: Add/replace in `public/team/` folder
   - Individual photos: `jordan.png`, `alexandra.png`, etc.
   - Group photo: `team.png`

### Image Requirements
- Format: PNG or JPG
- Logo: Ideally square (e.g., 400x400px)
- Venue: Landscape orientation (e.g., 1200x800px)
- Team photos: Portrait or square (e.g., 800x1000px)

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### Netlify/Vercel
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Custom Hosting
1. Build the project: `npm run build`
2. Upload contents of `dist` folder to your web host

## 🛠 Technology Details

### Dependencies
- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling (via CDN)
- **Lucide React**: Icon library

### Development Tools
- **ESLint**: Code linting
- **TypeScript Compiler**: Type checking

## 📝 Best Practices

### Code Organisation
- One component per file
- Keep components focused on a single responsibility
- Use TypeScript interfaces for props
- Comment complex logic

### Styling
- Use Tailwind utility classes
- Maintain consistent spacing (mb-4, mb-6, mb-12 pattern)
- Use hover effects for interactive elements
- Ensure mobile responsiveness

### Performance
- Optimise images before uploading
- Keep bundle size small
- Use lazy loading for images if needed

## 🐛 Troubleshooting

### Development server won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tailwind styles not working
- Ensure `index.html` includes Tailwind CDN script
- Check browser console for errors
- Clear browser cache

### Images not displaying
- Verify image paths start with `/` (e.g., `/logo.png`)
- Check images exist in `public/` folder
- Ensure correct file extensions

### Build errors
```bash
# Check for TypeScript errors
npm run build

# Fix common issues
- Check all imports are correct
- Ensure all components export properly
- Verify no syntax errors
```

## 📧 Contact & Support

For questions about the codebase:
- Review this README
- Check component comments
- Inspect browser developer console for errors

For Granite City Salsa enquiries:
- Instagram: [@granitecitysalsa](https://www.instagram.com/granitecitysalsa)
- Facebook: [Granite City Salsa](https://www.facebook.com/profile.php?id=61581967402586)

## 📄 Licence

This project is for Granite City Salsa. All rights reserved. Created by superbachatero Luis Toral from Mexico.

---

**Built with ❤️ for the Aberdeen salsa & bachata community** 💃🕺