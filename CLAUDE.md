# ai-portfolio

An AI-powered personal portfolio website. Visitors can chat with an AI assistant that knows everything about the portfolio owner from their knowledge documents.

## Stack
- Backend: Node.js + Express (`server.js`)
- Frontend: Vanilla HTML/CSS/JS (`frontend/`)
- AI: Anthropic SDK (Claude claude-sonnet-4-6)
- RAG: All `.txt` files in `knowledge/` are loaded at startup and injected into every chat message

## Key files
- `server.js` — Express server, knowledge loader, /chat endpoint
- `frontend/index.html` — Portfolio page + chat widget (look for CHALLENGE comments)
- `frontend/styles.css` — All styles, CSS variables for easy theming
- `knowledge/*.txt` — The owner's documents that power the AI
- `.env` — ANTHROPIC_API_KEY goes here (never commit this file)

## To run
```
npm install
cp .env.example .env
# Add your Anthropic API key to .env
npm start
```

## Skills available
- `/generate-bio` — Generate bio variations from knowledge docs
- `/portfolio-sections` — Generate all page section copy
- `/brand-voice` — Define brand messaging and voice
- `/social-bios` — LinkedIn, Twitter, Instagram bios

## RAG approach
All knowledge files are always injected (no keyword routing needed — everything is about one person). To add new context, just add a `.txt` file to `/knowledge/`.
