# 🌟 AI Portfolio — Build Your Personal Brand with AI

A beautiful portfolio website with an AI assistant that knows everything about you — powered by OpenAI.

Visitors land on your site and can **chat with an AI** that answers their questions about your work, experience, and background using your own documents.

> **Two AIs, two jobs:**
> - **OpenAI** (gpt-4.1-mini) powers the live chat widget on your portfolio
> - **Claude** is your coding partner — run the skills below to generate your content and customize the site

---

## ✅ What You'll Build

- A sleek personal portfolio website (fully customizable)
- An AI chat assistant that represents YOU
- 4 AI-powered skills to help you write your bio, copy, and social profiles

---

## 🚀 Setup (5 minutes)

### Step 1 — Get the code

```bash
git clone https://github.com/your-fork/ai-portfolio
cd ai-portfolio
```

Or: download the ZIP and open in VS Code.

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Add your API key

```bash
cp .env.example .env
```

Open `.env` and replace `your_api_key_here` with your OpenAI API key.

Get a key at: **platform.openai.com** → API Keys

### Step 4 — Start the app

```bash
npm start
```

Open your browser to **http://localhost:3000** 🎉

---

## ✏️ Make It Yours (20 minutes)

### Step 1 — Fill in your knowledge files

Open the `knowledge/` folder and replace the placeholder content with YOUR information:

| File | What to put in it |
|------|------------------|
| `bio.txt` | Your story, background, where you're from, values |
| `experience.txt` | Your jobs, roles, and what you did at each |
| `projects.txt` | Projects you've worked on and their results |
| `skills.txt` | Your technical skills, tools, soft skills |
| `achievements.txt` | Awards, milestones, numbers you're proud of |

💡 **Tip**: Just write naturally, like you're talking to a friend. The AI handles the rest.

### Step 2 — Generate your portfolio copy with AI skills

Open Claude Code (VS Code extension) and run these skills:

```
/portfolio-sections   ← Generates your hero, about, projects, and skills copy
/generate-bio         ← Writes 3 bio variations (short, medium, long)
/brand-voice          ← Defines your messaging and unique positioning  
/social-bios          ← LinkedIn, Twitter, Instagram bios ready to copy
```

### Step 3 — Customize the HTML

Open `frontend/index.html` and find all the `<!-- CHALLENGE -->` comments.
Replace the placeholder text with your actual content.

### Step 4 — Change the colors

Open `frontend/styles.css` and change the CSS variables at the top:

```css
--accent: #6C63FF;    ← Your brand color
--bg: #0f0f13;        ← Background (dark)
```

---

## 💬 How the AI Chat Works

The chat widget on your portfolio uses RAG (Retrieval-Augmented Generation):

1. When you start the server, it reads ALL your `knowledge/*.txt` files
2. Every visitor message includes your full knowledge as context
3. OpenAI answers questions about you using only your real information

**To add more context**: Just drop another `.txt` file in the `knowledge/` folder and restart.

## 🤖 How Claude Helps You Build

Claude Code (the VS Code extension) is your AI pair programmer for building and customizing this project. Use the skills below to generate content, then copy it into your HTML:

```
/portfolio-sections   ← Generates your hero, about, projects, and skills copy
/generate-bio         ← Writes 3 bio variations (short, medium, long)
/brand-voice          ← Defines your messaging and unique positioning
/social-bios          ← LinkedIn, Twitter, Instagram bios ready to copy
```

Claude reads your `knowledge/` files and writes the output to the `output/` folder — no coding needed.

---

## 🚢 Deploy to the Web (Free)

### Using Render.com (recommended)

1. Push your code to GitHub (exclude `.env`!)
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your GitHub repo
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add environment variable: `OPENAI_API_KEY` = your key
7. Click Deploy!

Your portfolio will be live at a public URL in ~3 minutes.

---

## 🛠️ Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm: command not found` | Install Node.js from nodejs.org |
| `Cannot find module` | Run `npm install` first |
| `Invalid API key` | Check your `.env` file has the correct key |
| Chat not responding | Make sure server is running (`npm start`) |
| Port already in use | Change `PORT=3001` in your `.env` file |

---

## 📁 Project Structure

```
ai-portfolio/
├── server.js              ← Backend: Express + OpenAI API + RAG
├── frontend/
│   ├── index.html         ← Your portfolio page (edit this!)
│   └── styles.css         ← All styles + CSS variables
├── knowledge/             ← YOUR documents (the AI reads these)
│   ├── bio.txt
│   ├── experience.txt
│   ├── projects.txt
│   ├── skills.txt
│   └── achievements.txt
├── output/                ← Generated content from skills
├── .claude/skills/        ← AI skills you can run
├── .env                   ← Your API key (never share this!)
└── package.json
```

---

Built with ❤️ for the AI Workshop · Chat powered by [OpenAI](https://openai.com) · Built with [Claude](https://claude.ai/code)
