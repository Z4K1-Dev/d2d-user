# Next.js CRM Dashboard with Live Data & Interactive Charts

Project dashboard CRM modern yang dibangun dengan Next.js 15, TypeScript, Tailwind CSS, dan shadcn/ui. Project ini menampilkan fitur-fitur canggih termasuk live data updates, interactive pie charts dengan CustomActiveShape, dan SpotlightCard dengan animasi gradient.

## 🚀 Fitur Utama

### ✅ Dashboard Components
- **4 Live Status Cards** dengan real-time updates:
  - Total Customers (dengan live counter)
  - Active Tasks (dengan live counter)
  - Revenue (dengan live counter)
  - Conversion Rate (dengan live counter)
- **CustomActiveShape Pie Charts** untuk setiap status card
- **SpotlightCard** dengan cyan/teal gradient animation untuk Revenue Overview
- **AreaChart dengan Gradient** untuk monthly revenue dan customer growth
- **Task Table** dengan status badges dan priority indicators
- **Responsive Sidebar Navigation**
- **Modern Header** dengan search dan user menu

### ✅ Live Data Features
- **Real-time Updates**: Data diperbarui setiap 3 detik
- **Live Badges**: Indikator "LIVE" pada semua status cards
- **Dynamic Calculations**: Pie charts otomatis menyesuaikan dengan data live
- **Smooth Animations**: Transisi halus untuk perubahan data

### ✅ Interactive Chart Features
- **CustomActiveShape Pie Charts**: 
  - 4 segments per chart (Current, Previous, Growth, Other)
  - Interactive hover effects dengan leader lines
  - Detail value dan percentage display
  - Color-coded segments (Blue, Green, Orange, Purple)
- **SpotlightCard Effect**: Cyan/teal gradient border animation
- **Responsive Chart Sizing**: Optimal untuk mobile dan desktop

### ✅ Technical Features
- **Next.js 15** dengan App Router
- **TypeScript 5** untuk type safety
- **Tailwind CSS 4** untuk styling
- **shadcn/ui components** untuk UI konsisten
- **Recharts** untuk advanced data visualization
- **Theme Support** (light/dark mode)
- **Responsive Design** untuk mobile dan desktop

## 📊 Chart Implementations

### 1. CustomActiveShape Pie Charts
Setiap status card memiliki pie chart interaktif dengan:

```tsx
// Custom Active Shape Component
const CustomActiveShape = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props
  
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${((percent || 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
```

### 2. Live Data Implementation
```tsx
// Live data state management
const [liveData, setLiveData] = React.useState({
  totalCustomers: 1234,
  activeTasks: 56,
  revenue: 45678,
  conversionRate: 3.2
});

// Real-time updates every 3 seconds
React.useEffect(() => {
  const interval = setInterval(() => {
    setLiveData(prev => ({
      totalCustomers: prev.totalCustomers + Math.floor(Math.random() * 5) - 2,
      activeTasks: Math.max(0, prev.activeTasks + Math.floor(Math.random() * 3) - 1),
      revenue: Math.max(0, prev.revenue + Math.floor(Math.random() * 200) - 100),
      conversionRate: Math.max(0, Math.min(100, prev.conversionRate + (Math.random() * 0.2 - 0.1)))
    }))
  }, 3000);

  return () => clearInterval(interval);
}, []);
```

### 3. SpotlightCard with Gradient Animation
```tsx
// Revenue Overview dengan SpotlightCard
<SpotlightCard>
  <div className="space-y-4">
    <div>
      <h3 className="text-2xl font-bold tracking-tight">Revenue Overview</h3>
      <p className="text-muted-foreground">
        Monthly revenue and customer growth for the current year
      </p>
    </div>
    <ChartContainer config={chartConfig} className="h-80 w-full">
      {/* AreaChart dengan gradient */}
    </ChartContainer>
  </div>
</SpotlightCard>
```

### 4. AreaChart dengan Gradient
```tsx
// Chart Configuration
const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#3b82f6", // Blue color
  },
  customers: {
    label: "Customers",
    color: "#60a5fa", // Light blue color
  },
};

<AreaChart data={chartData}>
  <defs>
    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
    </linearGradient>
    <linearGradient id="customersGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.1}/>
    </linearGradient>
  </defs>
  {/* ... chart components ... */}
  <Area
    type="monotone"
    dataKey="revenue"
    stroke="#3b82f6"
    strokeWidth={2}
    fill="url(#revenueGradient)"
    dot={{ r: 4 }}
  />
  <Area
    type="monotone"
    dataKey="customers"
    stroke="#60a5fa"
    strokeWidth={2}
    fill="url(#customersGradient)"
    dot={{ r: 4 }}
  />
</AreaChart>
```

## 🛠 Tech Stack

### Core Framework
- **Next.js 15** dengan App Router
- **TypeScript 5** - Strict typing
- **React 19** - UI library

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **Tailwind CSS Animate** - Animations

### Data & Charts
- **Recharts 2.15.4** - Chart library
- **Custom Chart Components** - Gradient area charts, CustomActiveShape pie charts
- **Live Data Updates** - Real-time data simulation

### Development Tools
- **ESLint** - Code linting
- **tsx** - TypeScript execution
- **nodemon** - Development server
- **Prisma** - Database ORM (SQLite)

### Additional Features
- **NextAuth.js v4** - Authentication
- **Socket.IO** - Real-time communication
- **Zustand** - State management
- **TanStack Query** - Server state
- **Framer Motion** - Animations

## 📁 Project Structure

```
/home/z/my-project/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Main Dashboard Page
│   │   ├── layout.tsx               # Root Layout
│   │   ├── globals.css              # Global Styles
│   │   ├── analytics/               # Analytics Page
│   │   ├── customers/               # Customers Page
│   │   ├── tasks/                   # Tasks Page
│   │   ├── settings/                # Settings Page
│   │   ├── profile/                 # Profile Page
│   │   └── api/                     # API Routes
│   ├── components/
│   │   ├── ui/                      # shadcn/ui Components
│   │   │   ├── spotlightcard.tsx    # SpotlightCard component
│   │   │   ├── card.tsx            # Card components
│   │   │   ├── chart.tsx           # Chart components
│   │   │   └── ...                 # Other UI components
│   │   ├── app-header.tsx           # Dashboard Header
│   │   ├── app-sidebar.tsx          # Sidebar Navigation
│   │   └── theme-toggle.tsx         # Theme Switcher
│   ├── hooks/                       # Custom Hooks
│   │   ├── use-toast.ts            # Toast notifications
│   │   └── use-mobile.ts           # Mobile detection
│   └── lib/
│       ├── db.ts                   # Database client
│       ├── socket.ts               # Socket.IO logic
│       └── utils.ts                # Utility functions
├── components.json                 # shadcn/ui config
├── tailwind.config.ts              # Tailwind config
├── tsconfig.json                   # TypeScript config
├── package.json                    # Dependencies
├── server.ts                       # Custom server with Socket.IO
└── prisma/
    └── schema.prisma               # Database schema
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Quick Start
```bash
# Install dependencies
npm install

# Start development server (RECOMMENDED WAY)
npm run restart:dev

# Alternative: Kill then start manually
npm run kill:dev
npm run dev

# Check if server is running
npm run ps:check

# Access the application
open http://localhost:3000
```

## 🔄 Server Management Commands

### Development Server Management
```bash
# Kill existing development server (REQUIRED before starting new one)
npm run kill:dev

# Start development server
npm run dev

# Restart development server (kill then start)
npm run restart:dev
```

### Custom Server Commands
```bash
# Kill all Node.js processes related to project
npm run kill:all

# Check running processes
npm run ps:check

# Force restart server
npm run force:restart
```

### Available Scripts
```bash
# Development
npm run dev          # Start dev server on localhost:3000
npm run kill:dev     # Kill existing dev server processes
npm run restart:dev  # Restart dev server (kill + start)
npm run kill:all     # Kill all Node.js processes
npm run ps:check     # Check running processes
npm run force:restart # Force restart server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:push      # Push schema to database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run migrations
npm run db:reset     # Reset database

# Code Quality
npm run lint         # Run ESLint
```

### Usage Protocol
**PENTING**: Selalu gunakan `npm run kill:dev` sebelum menjalankan `npm run dev` untuk menghindari port conflicts:

```bash
# Cara yang benar untuk menjalankan development server:
npm run kill:dev    # Kill existing processes
npm run dev         # Start new server

# Atau gunakan shortcut (direkomendasikan):
npm run restart:dev # Kill lalu start otomatis

# Untuk masalah yang lebih persisten:
npm run force:restart # Force restart dengan delay lebih lama
```

### Best Practices
1. **Selalu gunakan `npm run restart:dev`** untuk memulai development server
2. **Jangan gunakan `npm run dev` langsung** tanpa membunuh proses sebelumnya
3. **Gunakan `npm run ps:check`** untuk memeriksa proses yang berjalan
4. **Gunakan `npm run force:restart`** jika server tidak mau mati dengan normal
5. **Monitor dev.log** untuk melihat log server: `tail -f dev.log`

## 🌐 Access Points

- **Dashboard**: http://localhost:3000
- **API Health Check**: http://localhost:3000/api/health
- **Socket.IO**: ws://localhost:3000/api/socketio

## 📊 Dashboard Pages

### Main Dashboard (`/`)
- **Live Status Cards**: Total Customers, Active Tasks, Revenue, Conversion Rate dengan:
  - Real-time data updates (setiap 3 detik)
  - Interactive CustomActiveShape pie charts
  - LIVE badges
  - Chart on left, text on right layout
- **Revenue Overview**: SpotlightCard dengan AreaChart gradient
- **Recent Tasks**: Table dengan task management

### Additional Pages
- **Analytics** (`/analytics`): Detailed analytics page
- **Customers** (`/customers`): Customer management
- **Tasks** (`/tasks`): Task management interface
- **Settings** (`/settings`): Application settings
- **Profile** (`/profile`): User profile management

## 🎨 Styling & Theming

### Color System
- Menggunakan Tailwind CSS built-in variables
- Theme-aware colors (`bg-primary`, `text-primary-foreground`)
- Support untuk light dan dark mode
- Custom color schemes untuk charts:
  - Total Customers: Blue (#3b82f6)
  - Active Tasks: Green (#10b981)
  - Revenue: Orange (#f59e0b)
  - Conversion Rate: Purple (#8b5cf6)

### Components
- **shadcn/ui** component library
- **SpotlightCard** dengan cyan/teal gradient animation
- Responsive design dengan mobile-first approach
- Consistent spacing dan typography

### Chart Styling
- Custom gradient fills untuk area charts
- CustomActiveShape pie charts dengan interactive hover effects
- Theme-aware chart colors
- Interactive tooltips dan hover states
- Live data animations

## 🔧 Configuration

### Environment Variables
Project ini menggunakan environment variables untuk konfigurasi. Lihat `.env.example` untuk variabel yang tersedia.

### Database
- **SQLite** sebagai database (development)
- **Prisma ORM** untuk database management
- Schema di `prisma/schema.prisma`

### Custom Server
- **Express-style server** dengan Socket.IO integration
- File: `server.ts`
- Supports real-time features

## 📝 Project History & Context

### Origin
- **Source**: Clone dari https://github.com/Z4K1-Dev/d2d-user
- **Major Enhancements**: 
  - Live data implementation
  - CustomActiveShape pie charts
  - SpotlightCard integration
  - Enhanced chart interactions
- **Status**: Production-ready dengan advanced features

### Implementation Details
1. **Clone repository** dari GitHub
2. **Implement live data updates** dengan React state dan useEffect
3. **Add CustomActiveShape pie charts** untuk semua status cards
4. **Integrate SpotlightCard** untuk Revenue Overview
5. **Enhanced chart interactions** dengan hover effects dan leader lines
6. **Add LIVE badges** untuk real-time indication
7. **Optimize responsive design** untuk semua screen sizes

### Current Status
- ✅ Server running pada localhost:3000
- ✅ Dashboard fully functional dengan live data
- ✅ CustomActiveShape pie charts sudah terimplementasi
- ✅ SpotlightCard dengan gradient animation
- ✅ Real-time updates setiap 3 detik
- ✅ All components responsive dan theme-aware
- ✅ Build successful tanpa errors
- ✅ Interactive chart features fully working

## 🔄 Continuation Guide

### Untuk Melanjutkan Project di Chat Baru
Jika terkena limit dan harus buka chat baru, berikan informasi berikut:

```
**PROJECT CONTINUATION REQUEST**

**Project:** Next.js CRM Dashboard with Live Data & Interactive Charts
**Last Status:** 
- ✅ Clone repo d2d-user dari GitHub
- ✅ Implement live data updates (setiap 3 detik)
- ✅ Add CustomActiveShape pie charts untuk 4 status cards
- ✅ Integrate SpotlightCard untuk Revenue Overview
- ✅ Server running on localhost:3000
- ✅ Dashboard fully functional dengan interactive features

**Location:** /home/z/my-project
**Last Command:** npm run dev
**Main Features:** Live status cards, interactive pie charts, spotlight card, gradient area chart, task table, sidebar nav

**Continue from:** Testing, optimization, atau additional feature development
```

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. Port 3000 already in use (EADDRINUSE)
```bash
# Solution 1: Use restart command (RECOMMENDED)
npm run restart:dev

# Solution 2: Manual kill then start
npm run kill:dev
npm run dev

# Solution 3: Force restart for persistent issues
npm run force:restart

# Solution 4: Check what's running
npm run ps:check
```

#### 2. Server not responding
```bash
# Check if processes are running
npm run ps:check

# Kill all processes and restart
npm run force:restart

# Check server logs
tail -f dev.log
```

#### 3. Multiple server instances running
```bash
# Kill all processes
npm run kill:all

# Check if all processes are killed
npm run ps:check

# Start fresh server
npm run dev
```

#### 4. Import errors with chart components
```bash
# Ensure you're using correct imports:
# ✅ Correct: import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts"
# ✅ Correct: import { Area, AreaChart, XAxis, YAxis, CartesianGrid, defs, linearGradient, stop } from "recharts"

# Reinstall dependencies if needed
npm install
```

#### 5. Build errors
```bash
# Run build to check for compilation issues
npm run build

# Fix linting issues
npm run lint

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Server Commands Reference
```bash
# Basic Operations
npm run dev          # Start dev server on localhost:3000
npm run kill:dev     # Kill existing dev server processes
npm run restart:dev  # Restart dev server (kill + start)

# Advanced Operations
npm run kill:all     # Kill all Node.js processes
npm run ps:check     # Check running processes
npm run force:restart # Force restart server

# Development Workflow
npm run restart:dev  # Recommended way to start development
tail -f dev.log      # Monitor server logs
npm run ps:check     # Verify running processes
```

## 📝 Notes

- Project ini menggunakan **custom server** dengan Socket.IO support
- **Live data updates** sudah terimplementasi dengan real-time counters
- **CustomActiveShape pie charts** sudah terimplementasi dengan interactive hover effects
- **SpotlightCard** sudah terintegrasi dengan cyan/teal gradient animation
- **Theme support** sudah terintegrasi dengan next-themes
- **Responsive design** untuk semua screen sizes
- **Production-ready** dengan successful build
- **PENTING**: Selalu gunakan `npm run restart:dev` untuk memulai development server
- **Server management** commands telah ditambahkan untuk menghindari port conflicts
- **Monitor dev.log** untuk melihat server activity dan troubleshooting

### Development Protocol
1. **Sebelum memulai development**: Selalu gunakan `npm run restart:dev`
2. **Ketika ada masalah**: Gunakan `npm run force:restart` untuk restart paksa
3. **Monitoring**: Gunakan `npm run ps:check` dan `tail -f dev.log`
4. **Best practice**: Jangan gunakan `npm run dev` langsung tanpa membunuh proses sebelumnya

## 🤝 Contributing

Project ini siap untuk development lanjutan. Beberapa area untuk improvement:
- Performance optimization untuk large datasets
- Additional chart types dan visualizations
- Enhanced real-time features dengan Socket.IO
- Mobile app optimization
- Additional dashboard widgets
- Data persistence dengan database integration
- User authentication dan authorization
- Export functionality untuk charts dan data

---

**Last Updated**: Current session  
**Status**: ✅ Fully functional dengan live data, interactive pie charts, dan spotlight card  
**Next Steps**: Testing, optimization, atau additional feature development  
**Recent Changes**: Implemented live data updates, CustomActiveShape pie charts, SpotlightCard integration, enhanced chart interactions