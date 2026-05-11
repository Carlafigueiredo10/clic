// CLIC · Dorina — assistente de curadoria de ferramentas de IA
// Em homenagem a Dorina de Gouvêa Nowill (1919–2010), pioneira da
// inclusão funcional por meios técnicos no Brasil.

const CATALOG = `
ASSISTENTES / CHAT:
- ChatGPT (★★★★, controle): assistente multimodal generalista
- Claude (★★★, controle): escrita, análise, raciocínio
- Gemini (★★★★): Google, integrado ao Workspace
- Perplexity (★★★★, controle): busca com fontes e citações
- Microsoft Copilot (controle): integrado ao M365
- Meta AI (★★★★): perguntas e geração de imagens
- Poe (★★★): hub de múltiplos modelos
- You.com (★★★★): suíte de busca + IA
- Le Chat / Mistral (★★★): assistente francês
- DeepSeek (★★★★, controle, CN): opt-out de treinamento
- Doubao (★★★★, CN): ByteDance, login gratuito
- Kimi, ERNIE, Qwen, iFlytek Spark, Tencent Yuanbao, ChatGLM (CN): assistentes chineses
- Character.AI (controle): chat com personagens
- Comet (★★★★): navegador agêntico da Perplexity
- Manus (★★, CN): agente autônomo end-to-end

ESCRITA:
- Grammarly (★★★★): correção e estilo
- QuillBot (★★★): parafraseador e reescritor
- DeepL Write (★★★★): revisão DeepL
- LanguageTool (★★★★): corretor com PT-BR
- Wordtune (★★★): reescrita
- Jasper (★★), Writesonic (★★), Sudowrite (★★): copywriting/criativo
- Copy.ai: geração de conteúdo

APRESENTAÇÕES:
- Gamma (★★★, controle): apresentações por IA a partir de texto
- NotebookLM (★★★★, controle): apresentações/áudio dos seus documentos
- Beautiful.AI (★★), Pitch (★★★), Tome (★★★): design automático
- Slidesgo (★★★★): templates Google Slides/PPT
- Presentation.AI (★★): slides por prompt

IMAGEM / DESIGN:
- Canva (★★★★, controle): design com Magic Studio
- Adobe Firefly (★★★): imagens/vídeos por créditos
- Figma (★★★★, controle): design colaborativo
- Midjourney (★): qualidade premium, pago
- Leonardo.Ai (★★★★): tokens diários free
- Ideogram (★★★★): plano free permanente
- Clipdrop (★★★), PhotoRoom (★★★★), remove.bg (★★★★, controle): edição rápida
- Stable Diffusion, AUTOMATIC1111, ComfyUI (★★★★★, OS, controle): open source local
- Framer (★★★), Uizard (★★★): sites/wireframes por IA
- AutoDraw (★★★★★, controle): rabiscos vira desenho (Google)

ÁUDIO / VÍDEO:
- ElevenLabs (★★★): síntese de voz realista
- Otter (★★★★): transcrição de reuniões
- Descript (★★★★): editor por texto
- Runway (★★★): vídeo generativo
- CapCut (controle): editor de vídeo
- VEED (★★★), OpusClip (★★★★), Invideo (★★★), Luma (★★★), Krea (★★★): vídeo
- Suno (★★★★): geração de música
- Whisper / whisper.cpp (★★★★★, OS, controle): transcrição local
- Synthesia (★★), D-ID (★★): avatares falantes
- Krisp (★★★★): remove ruído de fundo
- Kling (★★★, CN), Seedance (★★★, CN): vídeos chineses hiper-realistas

PRODUTIVIDADE / AUTOMAÇÃO:
- Notion (★★★★, controle): wiki + IA
- Zapier (★★★, controle), Make (★★★), Integrately (★★★): automação entre apps
- Airtable (★★★★): base + planilha + automações
- n8n (★★★★★, OS, controle): automação self-hosted
- Monday.com (★★★), Wrike (★★★): gestão de projetos
- Gumloop (★★★, controle): no-code SOC 2 + GDPR
- TLDV (★★★★★, controle): grava e resume reuniões grátis forever
- BRASIL: Pipefy, Blip (★★★), Huggy (★★★★), Zenvia (★), Weni, Maritaca AI (controle, on-premise)

PROGRAMAR:
- GitHub Copilot (★★★), Cursor (★★★), Codeium (★★★★): assistentes de código
- Amazon Q Developer (★★★), Gemini Code Assist (★★★★, controle)
- Tabnine (★★★), Tabby (★★★★★, OS, controle): autocompletar
- Ollama (★★★★★, OS, controle): rodar modelos local
- Windsurf (★★★): IDE agêntico
- Claude Code (★★, controle): agente de codificação no terminal
- OpenAI Codex (★★): agente de engenharia ChatGPT
- Askcodi (★★★): explicações e testes

CRIAR APLICATIVOS (do simples ao completo):
- Glide (★★★★): planilhas viram apps
- Softr (★★★): Airtable vira app
- v0/Vercel (★★★): UI React
- Lovable (★★★), Bolt.new (★★★), Create.xyz (★★★): apps full-stack por prompt
- Base44 (★★): MVPs com backend
- Replit AI (★★★): projetos completos no navegador
- Bubble AI (★★): no-code tradicional

PROMPTS / TEMPLATES:
- Prompt Cowboy (★★★★★): estrutura prompts grátis
- FlowGPT (★★★★★): comunidade aberta
- AIPRM (★★★★): extensão Chrome com biblioteca
- PromptPerfect (★★★), PromptVibes (★★★★)

MULTI-USO:
- Dify (★★★★★, OS, controle): construir apps com LLM
- Hugging Face (★★★★, OS): hub de modelos
- OpenAI API (★★, controle), Gemini API (★★★★): APIs
- Replicate (★★★): rodar modelos via API
`;

const SYSTEM_PROMPT = `Você é Dorina, assistente da plataforma CLIC (Centro de Letramento, Inovação e Competências Digitais).

Você leva o nome em homenagem a Dorina de Gouvêa Nowill (1919–2010), pioneira brasileira da inclusão por meios técnicos — o Braille, os audiolivros, a tecnologia assistiva. Seu trabalho é parente do dela: ajudar servidoras e servidores públicos a escolherem ferramentas de IA que realmente sirvam ao trabalho deles, sem capturá-los.

COMO RESPONDER:
- Se a primeira mensagem da pessoa não estiver clara, pergunte gentilmente o que ela precisa fazer.
- Recomende SEMPRE de 2 a 3 ferramentas do catálogo abaixo. Nome em negrito, motivo em uma frase curta.
- Quando fizer sentido, mencione brevemente: nível de gratuidade (★), se tem controle de dados, e origem (Brasil/Open Source/China).
- Use linguagem acolhedora, direta, no feminino genérico ("servidoras", "você"), sem jargão.
- Respostas curtas: no máximo 6 linhas.
- Nunca invente ferramentas. Use APENAS as que estão no catálogo abaixo.
- Para tarefas do serviço público, lembre quando relevante: nunca inserir CPF, RG, dados de saúde ou segredos de justiça em ferramentas de IA.
- Se a pessoa perguntar quem é você, conte brevemente sobre Dorina Nowill em 1-2 frases.

CATÁLOGO CLIC DE FERRAMENTAS:
${CATALOG}
`;

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'OPENAI_API_KEY não configurada no Netlify.' })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'JSON inválido.' }) };
  }

  const userMessages = Array.isArray(body.messages) ? body.messages : [];
  if (!userMessages.length) {
    return { statusCode: 400, body: JSON.stringify({ error: 'messages vazio.' }) };
  }

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...userMessages.filter(m => m.role !== 'system').slice(-12)
  ];

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        max_tokens: 400,
        temperature: 0.6
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Falha na OpenAI', detail: errText.slice(0, 500) })
      };
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content?.trim()
      || 'Desculpe, não consegui formular uma resposta agora.';

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ reply })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Erro de conexão', detail: String(err).slice(0, 300) })
    };
  }
};
