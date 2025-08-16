# MusicBrainz Songsterr Player

Un'applicazione web interattiva per esplorare la musica attraverso le API di MusicBrainz e accedere alle tablature su Songsterr.

## ✨ Caratteristiche

- **Ricerca artisti**: Trova artisti musicali utilizzando le API di MusicBrainz
- **Esplorazione album**: Naviga attraverso la discografia completa degli artisti
- **Lista brani**: Visualizza tutti i brani di ogni album
- **Integrazione Songsterr**: Accesso diretto alle tablature dei brani su Songsterr
- **Design responsive**: Interfaccia ottimizzata per desktop e dispositivi mobili
- **UI moderna**: Design elegante con Tailwind CSS e Font Awesome

## 🚀 Demo

L'applicazione presenta un'interfaccia a tre colonne:
1. **Colonna Artisti**: Risultati della ricerca artisti
2. **Colonna Album**: Album dell'artista selezionato
3. **Colonna Brani**: Brani dell'album selezionato

## 📋 Prerequisiti

- Un browser web moderno con supporto JavaScript ES6+
- Connessione internet per accedere alle API esterne

## 🛠️ Installazione

1. **Clona il repository**:
   ```bash
   git clone https://github.com/tuousername/musicbrainz-songsterr-player.git
   cd musicbrainz-songsterr-player
   ```

2. **Apri l'applicazione**:
   Apri il file `music.html` nel tuo browser preferito o servilo tramite un server web locale.

### Servire con un server locale (opzionale)

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (se hai http-server installato)
npx http-server

# Con PHP
php -S localhost:8000
```

Poi visita `http://localhost:8000` nel tuo browser.

## 🎵 Come utilizzare

1. **Cerca un artista**: Inserisci il nome di un artista nella barra di ricerca (es. "Black Sabbath")
2. **Seleziona un artista**: Clicca su un artista dalla lista dei risultati
3. **Esplora gli album**: Scegli un album dalla lista che appare
4. **Ascolta i brani**: Clicca su un brano per aprire la ricerca su Songsterr

## 🏗️ Struttura del progetto

```
.
├── music.html          # File principale dell'applicazione
└── README.md          # Documentazione del progetto
```

## 🔧 Tecnologie utilizzate

- **HTML5**: Struttura dell'applicazione
- **CSS3**: Styling personalizzato
- **JavaScript (ES6+)**: Logica dell'applicazione e chiamate API
- **Tailwind CSS**: Framework CSS per il design
- **Font Awesome**: Icone
- **Google Fonts**: Font Inter per la tipografia

## 🌐 API utilizzate

### MusicBrainz API
- **Endpoint**: `https://musicbrainz.org/ws/2/`
- **Utilizzo**: Ricerca artisti, album e brani
- **Rate limiting**: Rispetta i limiti di richiesta dell'API
- **User-Agent**: Configurato come richiesto dalla documentazione MusicBrainz

### Songsterr
- **Utilizzo**: Integrazione per la visualizzazione delle tablature
- **URL**: `https://www.songsterr.com/a/wa/search`

## 📱 Design responsivo

L'applicazione è completamente responsiva e si adatta a:
- **Desktop**: Layout a tre colonne completo
- **Tablet**: Layout adattato con colonne ridimensionate
- **Mobile**: Layout a colonna singola con navigazione ottimizzata

## 🎨 Personalizzazione

### Modifica i colori
I colori principali possono essere modificati nelle classi Tailwind CSS:
```css
/* Colore primario (blu) */
bg-blue-500 hover:bg-blue-600

/* Colori di sfondo */
bg-gray-100 bg-gray-50 bg-white
```

### Aggiungere nuove funzionalità
Il codice è modulare e può essere facilmente esteso per aggiungere:
- Playlist personalizzate
- Integrazione con altri servizi musicali
- Sistema di preferiti
- Cache locale dei risultati

## 🤝 Contribuire

1. Fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è rilasciato sotto la licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 🙏 Riconoscimenti

- [MusicBrainz](https://musicbrainz.org/) per le API musicali
- [Songsterr](https://songsterr.com/) per le tablature
- [Tailwind CSS](https://tailwindcss.com/) per il framework CSS
- [Font Awesome](https://fontawesome.com/) per le icone

## 📞 Supporto

Se hai domande o problemi:
- Apri una issue su GitHub
- Controlla la documentazione delle API di MusicBrainz
- Verifica che il browser supporti le funzionalità moderne di JavaScript

## 🔄 Aggiornamenti futuri

- [ ] Sistema di cache per migliorare le performance
- [ ] Supporto per multiple lingue
- [ ] Integrazione con Spotify/Apple Music
- [ ] Modalità offline
- [ ] Sistema di raccomandazioni

---

*Sviluppato con ❤️ per gli amanti della musica*
