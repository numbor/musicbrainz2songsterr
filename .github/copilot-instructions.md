# MusicBrainz Songsterr Player - AI Agent Instructions

## Project Overview
This is a single-page web application (`music.html`) that integrates MusicBrainz API with Songsterr for music discovery and guitar tab access. The entire application is contained in one HTML file with embedded CSS and JavaScript - **no build tools or package managers required**.

## Architecture & Core Components

### Single-File Architecture
- **[music.html](music.html)**: Complete application (2179 lines) containing HTML structure, CSS styling, and JavaScript logic
- **No external dependencies**: Uses CDN-hosted Tailwind CSS, Font Awesome, and Google Fonts
- **No build process**: Open directly in browser or serve via simple HTTP server

### Key JavaScript Modules (all in music.html)
- **API Integration**: MusicBrainz API calls with proper User-Agent headers
- **Search System**: Dual-mode search (artist name vs. genre) with real-time suggestions
- **Favorites Management**: LocalStorage-based persistence with import/export functionality
- **Theme System**: Light/dark theme toggle with persistence
- **Random Song Discovery**: Cross-API workflow to find random tracks

### Data Flow Patterns
1. **Search Flow**: User input → MusicBrainz API → Artist selection → Albums → Tracks → Songsterr redirect
2. **Suggestion Flow**: Keystroke debouncing → API calls → DOM updates with keyboard navigation
3. **Favorites Flow**: Track interaction → LocalStorage update → UI state sync

## Critical Development Patterns

### API Usage
- **Required User-Agent**: `musicbrainz2songsterr/1.0 (https://github.com/yourusername/musicbrainz-songsterr-player)`
- **Rate Limiting**: Built-in debouncing for suggestion requests (300ms)
- **Error Handling**: Graceful degradation with user feedback via `showMessage()`

### State Management
- **Global Variables**: `favorites[]`, `currentArtistName`, `currentAlbumName`, `currentTheme`
- **LocalStorage Keys**: `'favorites'`, `'theme'`
- **DOM State**: Active item styling via CSS class `'active-item'`

### UI Conventions
- **CSS Custom Properties**: Defined in `:root` for consistent theming (e.g., `--primary-blue`, `--gray-800`)
- **Professional Classes**: `.pro-card`, `.pro-button`, `.pro-input` for consistent styling
- **Theme Classes**: `body.dark-theme` prefix for dark mode overrides
- **Message System**: Fixed-position notifications via `showMessage()` function

## Essential Workflows

### Development Setup
```bash
# No installation required - just open in browser
python -m http.server 8000  # Optional local server
# OR
npx http-server
# OR
php -S localhost:8000
```

### Key Functions to Understand
- `searchArtists(query)`: Core MusicBrainz artist search
- `getSuggestions(query)`: Real-time suggestion system
- `getRandomSong()`: Complex multi-API random discovery flow
- `manageFavorites()`: LocalStorage-based favorites system
- `changeTheme(theme)`: Theme switching with persistence

### Testing Patterns
- **Manual Testing**: Load in browser, test search flows
- **API Testing**: Console network tab for MusicBrainz responses
- **LocalStorage Testing**: Browser dev tools Application tab

## Integration Points

### External APIs
- **MusicBrainz**: Primary data source (`https://musicbrainz.org/ws/2/`)
- **Songsterr**: Tab destination (`https://songsterr.com/a/wa/search?q=`)

### Browser APIs
- **LocalStorage**: Favorites and theme persistence
- **Fetch API**: All HTTP requests
- **DOM Events**: Keyboard navigation, click handlers

## Common Modifications

### Adding New Features
- Extend the single HTML file - no module system
- Follow existing CSS custom property patterns
- Use `showMessage()` for user feedback
- Store state in global variables or LocalStorage

### Styling Changes
- Modify CSS custom properties in `:root` for theme changes
- Follow `.pro-*` class naming convention
- Ensure dark theme compatibility with `body.dark-theme` selectors

### API Extensions
- Follow existing error handling patterns
- Include proper User-Agent headers
- Use debouncing for user input scenarios

## Dev Container Notes
- **Environment**: Debian bullseye base image
- **No special setup required**: Standard web development tools available
- **Port forwarding**: Configure as needed for local server (typically 8000)