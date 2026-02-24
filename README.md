# MusicBrainz Songsterr Player

An interactive web application for exploring music through MusicBrainz APIs and accessing guitar tabs on Songsterr.

## ✨ Features

- **Artist Search**: Find musical artists using MusicBrainz APIs with real-time suggestions
- **Genre Search**: Discover artists by music genre
- **Album Exploration**: Browse through artists' complete discographies
- **Track Listings**: View all tracks from any album
- **Favorites System**: Save and manage your favorite tracks with persistent storage
- **Theme Switcher**: Toggle between light and dark themes with automatic persistence
- **Songsterr Integration**: Direct access to guitar tabs and sheet music
- **Responsive Design**: Optimized interface for desktop and mobile devices
- **Modern UI**: Elegant design with Tailwind CSS and Font Awesome icons

## 🚀 Interface Overview

The application features a clean three-column layout:
1. **Artists Column**: Search results and artist listings
2. **Albums Column**: Albums from the selected artist
3. **Tracks Column**: Tracks from the selected album with favorites functionality

Additional features:
- **Theme Selector**: Fixed top-left position for easy theme switching
- **Favorites Button**: Floating button showing favorite count with overlay management
- **Real-time Search**: Live suggestions as you type artist names

## 📋 Prerequisites

- Modern web browser with ES6+ JavaScript support
- Internet connection for external API access
- No additional installations required

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/musicbrainz-songsterr-player.git
   cd musicbrainz-songsterr-player
   ```

2. **Open the application**:
   Open `index.html` in your preferred browser or serve it through a local web server.

### Serve with a local server (optional)

```bash
# With Python 3
python -m http.server 8000

# With Node.js (if you have http-server installed)
npx http-server

# With PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎵 How to Use

### Basic Search
1. **Search for an artist**: Enter an artist name in the search bar (e.g., "Black Sabbath")
2. **Use suggestions**: Click on real-time suggestions or use arrow keys to navigate
3. **Select an artist**: Click on an artist from the results list
4. **Explore albums**: Choose an album from the displayed list
5. **Browse tracks**: Click on any track to search for tabs on Songsterr

### Genre Search
1. **Switch to genre mode**: Select the "Genre" radio button
2. **Choose a genre**: Pick from the dropdown of popular music genres
3. **Discover artists**: Browse artists associated with that genre

### Managing Favorites
1. **Add favorites**: Click the heart icon next to any track
2. **View favorites**: Click the floating favorites button (top-right)
3. **Organize by artist/album**: Favorites are automatically grouped
4. **Remove favorites**: Use the trash icon in the favorites overlay

### Theme Switching
1. **Light theme**: Click the sun icon (default)
2. **Dark theme**: Click the moon icon
3. **Persistence**: Your theme choice is automatically saved

## 🏗️ Project Structure

```
.
├── api/
│   └── visits.js      # Visit counter function (Vercel)
├── index.html         # Main application file (single-page app)
└── README.md          # Project documentation
```

## 📈 Visit Counter (CounterAPI)

The visit counter is served via a serverless function at `/api/visits` to avoid CORS issues and keep the API key off the client.

### Vercel setup

1. **Deploy on Vercel**:
   ```bash
   vercel --prod
   ```
   The `/api` folder is automatically configured as serverless functions.

2. **Configure environment variable**:
   ```bash
   # Add the API key for all environments
   vercel env add COUNTER_API_KEY
   ```
   When prompted, enter your CounterAPI key and select all environments (Production, Preview, Development).

3. **Get your CounterAPI key** (optional):
   - Visit [counterapi.dev](https://counterapi.dev)
   - Create a free account
   - Generate an API key for v2 authentication
   
   **Note**: If `COUNTER_API_KEY` is not set, the function automatically falls back to CounterAPI v1 public mode (no authentication required).

### How it works
- **With API key**: Uses CounterAPI v2 with Bearer authentication (more secure)
- **Without API key**: Falls back to CounterAPI v1 public endpoint
- **CORS handled**: The serverless function proxies requests to avoid browser CORS issues

## 🔧 Technologies Used

- **HTML5**: Application structure and semantic markup
- **CSS3**: Custom styling with advanced features (backdrop-filter, transitions)
- **JavaScript (ES6+)**: Application logic, API calls, and DOM manipulation
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Font Awesome**: Professional icon library
- **Google Fonts**: Inter font family for modern typography
- **LocalStorage API**: Client-side data persistence for themes and favorites

## 🌐 APIs Used

### MusicBrainz API
- **Endpoint**: `https://musicbrainz.org/ws/2/`
- **Purpose**: Artist search, album listings, and track information
- **Rate Limiting**: Respectful API usage with proper delays
- **User-Agent**: Configured as required by MusicBrainz documentation
- **Data Types**: Artists, release-groups (albums), releases, and recordings

### Songsterr Integration
- **Purpose**: Guitar tab and sheet music access
- **URL Pattern**: `https://www.songsterr.com/a/wa/search?pattern={track}`
- **Behavior**: Opens in new tab for seamless experience

## 📱 Responsive Design

The application adapts to different screen sizes:
- **Desktop (1024px+)**: Full three-column layout with all features visible
- **Tablet (768px-1023px)**: Adapted layout with optimized column sizing
- **Mobile (<768px)**: Single-column layout with collapsible navigation

### Mobile Optimizations
- Touch-friendly button sizing
- Optimized spacing for finger navigation
- Responsive typography scaling
- Adaptive modal sizing

## 🎨 Customization

### Theme System
The application includes a comprehensive dark/light theme system:

```css
/* Light theme (default) */
body { background-color: #f3f4f6; }

/* Dark theme */
body.dark-theme { background-color: #1f2937; }
```

### Color Scheme Customization
Primary colors can be modified in Tailwind classes:
```css
/* Primary blue */
bg-blue-500 hover:bg-blue-600

/* Background variations */
bg-gray-100 bg-gray-50 bg-white

/* Dark theme overrides */
body.dark-theme .bg-white { background-color: #374151 !important; }
```

### Adding New Features
The modular code structure allows easy extension:
- **New search types**: Extend the search type radio system
- **Additional APIs**: Add new music service integrations
- **Enhanced favorites**: Implement playlist functionality
- **Social features**: Add sharing and user accounts

## 🚀 Performance Features

- **Debounced Search**: 300ms delay prevents excessive API calls
- **Efficient DOM Updates**: Minimal reflows and repaints
- **Local Storage**: Client-side caching for user preferences
- **Lazy Loading**: On-demand data fetching
- **Error Handling**: Graceful degradation with user feedback

## 🔒 Privacy & Data

- **No Server Required**: Runs entirely in the browser
- **Local Storage Only**: User data stays on their device
- **No Tracking**: No analytics or user behavior tracking
- **CORS Compliant**: Proper cross-origin request handling

## 🤝 Contributing

1. **Fork the project** on GitHub
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request** with a detailed description

### Development Guidelines
- Follow existing code style and patterns
- Add comments for complex functionality
- Test on multiple browsers and devices
- Update documentation for new features

## 📄 License

This project is released under the MIT License. See the `LICENSE` file for details.

## 🙏 Acknowledgments

- [MusicBrainz](https://musicbrainz.org/) for comprehensive music database APIs
- [Songsterr](https://songsterr.com/) for guitar tabs and sheet music
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) for the professional icon library
- [Google Fonts](https://fonts.google.com/) for the Inter font family

## 📞 Support

If you have questions or issues:
- **GitHub Issues**: Open an issue for bugs or feature requests
- **API Documentation**: Check MusicBrainz API documentation for data-related issues
- **Browser Compatibility**: Ensure your browser supports modern JavaScript features
- **Network Issues**: Verify internet connection for API access

## 🔄 Roadmap

### Upcoming Features
- [ ] **Advanced Search**: Filters for year, country, and record label
- [ ] **Playlist System**: Create and manage custom playlists
- [ ] **Export/Import**: Backup and restore favorites and playlists
- [ ] **Keyboard Shortcuts**: Power user navigation features
- [ ] **Enhanced Mobile**: Progressive Web App (PWA) support
- [ ] **Social Integration**: Share discoveries with friends
- [ ] **Performance**: Implement service worker for offline functionality
- [ ] **Accessibility**: Enhanced screen reader and keyboard navigation support

### Technical Improvements
- [ ] **Caching Strategy**: Implement smart caching for better performance
- [ ] **API Optimization**: Batch requests and intelligent prefetching
- [ ] **Error Recovery**: Automatic retry mechanisms for failed requests
- [ ] **Testing**: Comprehensive unit and integration test suite

---

*Built with ❤️ for music lovers and developers*
