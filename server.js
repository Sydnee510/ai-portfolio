require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const app = express();
const client = new OpenAI();

app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

// Load all knowledge files on startup — this is your RAG
function loadKnowledge() {
  const knowledgeDir = path.join(__dirname, 'knowledge');
  let context = '';
  const files = fs.readdirSync(knowledgeDir).filter(f => f.endsWith('.txt'));
  for (const file of files) {
    const content = fs.readFileSync(path.join(knowledgeDir, file), 'utf8');
    const label = file.replace('.txt', '').replace(/-/g, ' ').toUpperCase();
    context += `\n\n--- ${label} ---\n${content}`;
  }
  return context;
}

const knowledge = loadKnowledge();

// CHALLENGE: Change the name and personality of your AI assistant below
const PORTFOLIO_OWNER_NAME = 'Alex';
const AI_PERSONALITY = `You are a friendly, professional AI assistant representing ${PORTFOLIO_OWNER_NAME} on their personal portfolio website.
Your job is to help visitors learn about ${PORTFOLIO_OWNER_NAME} — their work, experience, projects, and skills.
Be warm, enthusiastic, and speak positively about ${PORTFOLIO_OWNER_NAME} in the third person.
Keep answers concise (2-4 sentences). If a visitor asks something you don't know from the context, say you're not sure but invite them to reach out directly.
Never make up information that isn't in the context below.

Here is everything you know about ${PORTFOLIO_OWNER_NAME}:
${knowledge}`;

app.post('/chat', async (req, res) => {
  const { message, history = [] } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Build conversation history for OpenAI
    const messages = [
      { role: 'system', content: AI_PERSONALITY },
      ...history.slice(-8), // keep last 8 messages for context
      { role: 'user', content: message }
    ];

    const response = await client.chat.completions.create({
      model: 'gpt-4.1-mini',
      max_tokens: 500,
      messages
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API error:', error.message);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n✅ Portfolio running at http://localhost:${PORT}`);
  console.log(`   Knowledge files loaded: ${fs.readdirSync('./knowledge').filter(f => f.endsWith('.txt')).join(', ')}\n`);
});
