# 🤖 CLAW AGENT v1.1.0 — Assistente Profissional de IA para Código

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Python 3.7+](https://img.shields.io/badge/Python-3.7+-blue.svg)](https://www.python.org/)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-brightgreen.svg)](.)
[![ES6+](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](.)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](.)

Agente inteligente de IA para análise de código, refatoração automática, geração de documentação e testes unit. Suporta múltiplos provedores: Google Gemini, OpenAI, Claude, LocalAI e Ollama com fallback automático.

---

## 📌 Índice

- [Características](#-características)
- [Instalação Rápida](#-instalação-rápida)
- [Uso](#-uso)
- [Configuração](#-configuração)
- [Arquitetura](#-arquitetura)
- [Desenvolvimento](#-desenvolvimento)
- [Troubleshooting](#-troubleshooting)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## ✨ Características

### 🔍 Análise Automática de Código
- Detecta bugs e vulnerabilidades
- Identifica anti-patterns
- Encontra problemas de performance
- Sugere melhorias código-por-código

### ♻️ Refatoração Inteligente
- Melhora readability
- Otimiza performance
- Aplica best practices
- Moderniza código legado

### 📚 Geração de Documentação
- Docstrings profissionais
- Markdown formatado
- Exemplos de uso
- Type hints automáticos

### ✅ Testes Automáticos
- Testes unitários
- Cobertura completa
- Edge cases
- Mocking de dependências

### 💬 Perguntas sobre Código
- Respostas contextuais
- Explicações detalladas
- Recomendações de padrões
- Links para documentação

---

## 🚀 Instalação Rápida

### Pré-requisitos
- Python 3.7+
- Bash/Zsh
- Acesso à internet (para APIs) OU
- Ollama instalado (para modo offline)

### Via GitHub (Recomendado para Desenvolvimento)

```bash
# 1. Clone repositório
git clone https://github.com/claw-agent/vscode-extension.git
cd CLAW_Agent

# 2. Execute setup
bash docs/setup/ACTIVATE.sh

# 3. Recarregue shell
source ~/.bashrc

# 4. Configure chave API (Google Gemini)
nano ~/.claw/config/.claude.json

# 5. Verifique instalação
agent status
```

### Via ZIP (Para Usuários Finais)

```bash
# 1. Descompacte
unzip CLAW_AGENT_v1.1.0.zip -d claw-agent
cd claw-agent

# 2. Setup
bash docs/setup/ACTIVATE.sh && source ~/.bashrc

# 3. Configure chave
nano ~/.claw/config/.claude.json

# 4. Teste
agent analyze seu_arquivo.py
```

---

## 💻 Uso

### Comandos Disponíveis

```bash
agent analyze <arquivo>      # Encontra bugs, vulnerabilidades, melhorias
agent improve <arquivo>      # Refatora e otimiza código
agent document <arquivo>     # Gera documentação
agent test <arquivo>         # Cria testes unitários
agent ask <pergunta>         # Faz perguntas sobre código
agent status                 # Mostra status e diagnóstico
agent config show            # Exibe configuração
agent config set <key> <val> # Altera configuração
```

### Exemplos Práticos

#### Analisar arquivo Python
```bash
agent analyze app.py

# Saída esperada:
🐛 BUGS (2):
  • Linha 42: Exception não capturada
  • Linha 87: Risco de SQL injection

⚠️  WARNINGS (1):
  • Linha 15: Função não otimizada

💡 SUGESTÕES (3):
  • Use list comprehension em vez de loop
  • Adicionar type hints
  • Usar async/await
```

#### Refatorar código
```bash
agent improve utils.py --output utils_improved.py
```

#### Gerar testes
```bash
agent test calculator.py --output test_calculator.py
```

#### Fazer perguntas
```bash
agent ask "como otimizar loops em Python?"
agent ask "qual é padrão para API REST?"
agent ask "qual a diferença entre == e is?"
```

---

## 🔧 Configuração

### Estrutura de Diretórios

```
~/.claw/
├── config/
│   └── .claude.json          # Configuração principal + chave API
├── cache/
│   └── suggestions-cache.json # Cache de sugestões
└── logs/
    └── agent.log             # Log de operações
```

### Arquivo de Configuração

```bash
nano ~/.claw/config/.claude.json
```

Formato:
```json
{
  "google_gemini_api_key": "sua_chave_aqui",
  "provider": "auto",
  "timeout": 30,
  "max_tokens": 2000,
  "temperature": 0.7,
  "cache_enabled": true,
  "offline_mode": false
}
```

### Variáveis de Ambiente

```bash
# API Key
export GOOGLE_GEMINI_API_KEY="sk-..."
export OPENAI_API_KEY="sk-..."
export CLAUDE_API_KEY="sk-..."

# Configuração
export CLAW_TIMEOUT=30
export CLAW_MAX_TOKENS=2000
export CLAW_LOG_LEVEL=info

# Offline (Ollama)
export OLLAMA_HOST="localhost:11434"
export OLLAMA_MODEL="mistral"
```

### Usar Ollama (Totalmente Offline)

```bash
# 1. Instale Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# 2. Baixe modelo
ollama pull mistral
ollama pull neural-chat

# 3. Inicie servidor
ollama serve

# 4. Configure CLAW
export CLAW_PROVIDER=ollama
export OLLAMA_HOST=localhost:11434

# 5. Use normalmente
agent analyze seu_arquivo.py
```

---

## 🏗️ Arquitetura

### Estrutura do Projeto

```
CLAW_Agent/
├── src/
│   ├── extension.ts           # Entry point VS Code
│   ├── agentManager.ts        # Orquestração de IA
│   ├── aiProbe.ts             # Detecção de APIs disponíveis
│   ├── aiSelector.ts          # Seleção inteligente de provider
│   ├── inlineCompletionProvider.ts  # Sugestões inline
│   ├── pathResolver.ts        # Resolução portável de caminhos
│   ├── tokenCache.ts          # Cache de sugestões
│   ├── smartFallback.ts       # Fallback automático entre APIs
│   └── logger.ts              # Sistema de logging
├── docs/
│   ├── setup/
│   │   ├── ACTIVATE.sh        # Script de instalação
│   │   └── README.md          # Guia de setup
│   └── troubleshooting/
├── dist/
│   └── extension.js           # Build compilado para VS Code
├── package.json
├── tsconfig.json
└── webpack.config.js
```

### Fluxo de Execução

```
Comando do usuário (CLI)
    ↓
Agent Manager
    ↓
AI Probe (Detecta APIs disponíveis)
    ↓
AI Selector (Escolhe melhor provider)
    ↓
Executa Provider
    ├─ Google Gemini
    ├─ OpenAI
    ├─ Claude
    ├─ LocalAI
    └─ Ollama (Fallback)
    ↓
Smart Fallback (Se falhar, tenta próxima)
    ↓
Cache + Retorno
```

### Linguagens Suportadas

✅ Python · ✅ JavaScript · ✅ TypeScript · ✅ Rust · ✅ C# · ✅ Go · ✅ Ruby · ✅ PHP · ✅ Java · ✅ C++ · ✅ SQL

---

## 🛠️ Desenvolvimento

### Setup de Desenvolvimento

```bash
# 1. Clone e entre no diretório
git clone https://github.com/claw-agent/vscode-extension.git
cd CLAW_Agent

# 2. Instale dependências
npm install

# 3. Compile TypeScript
npm run build

# 4. Cole em ~/.local/bin/ para dev
npm run dev
```

### Scripts Disponíveis

```bash
npm run build      # Compila TypeScript para JavaScript
npm run watch      # Modo watch (compila ao salvar)
npm run lint       # Verifica código
npm run format     # Formata code
npm run test       # Executa testes
npm run dev        # Setup dev local
npm run prod       # Build para produção
```

### Estrutura de Testes

```bash
# Testes unitários
npm test

# Teste com coverage
npm run test:coverage

# Teste de integração
npm run test:integration
```

---

## 🐛 Troubleshooting

### Agent não encontrado
```bash
# Solução: Recarregar bash
source ~/.bashrc

# Se ainda não funcionar:
which agent
echo $PATH
```

### Erro de API
```bash
# Verificar chave
cat ~/.claw/config/.claude.json

# Validar chave
agent status

# Usar fallback (Ollama)
ollama pull mistral
ollama serve
export CLAW_PROVIDER=ollama
```

### Timeout em análises longas
```bash
# Aumentar timeout
export CLAW_TIMEOUT=60

# Ou aumentar no arquivo de config
nano ~/.claw/config/.claude.json
# Alterar "timeout": 60
```

### Problemas de Permissão
```bash
# Corrigir permissões
chmod +x ~/.local/bin/agent
chmod +x ~/.local/bin/agent.py
```

### Cache corrompido
```bash
# Limpar cache
rm -rf ~/.claw/cache/

# Ou via CLI
agent cache clear
```

### Logs para debug
```bash
# Ver logs
tail -f ~/.claw/logs/agent.log

# Aumentar verbosidade
export CLAW_LOG_LEVEL=debug

# Salvar logs em arquivo
agent analyze arquivo.py > analysis.log 2>&1
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. **Fork** o repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/minha-feature`)
3. **Commit** suas mudanças (`git commit -am 'Add minha feature'`)
4. **Push** para a branch (`git push origin feature/minha-feature`)
5. **Crie um Pull Request**

### Diretrizes

- Siga o estilo de código existente
- Adicione testes para novas funcionalidades
- Atualize documentação se necessário
- Use conventional commits:
  - `feat:` nova funcionalidade
  - `fix:` correção de bug
  - `docs:` documentação
  - `refactor:` refatoração
  - `test:` testes

---

## 📊 Status do Projeto

| Aspecto | Status | Notas |
|---------|--------|-------|
| Core Agent | ✅ Estável | Pronto para produção |
| Google Gemini | ✅ Funcional | Recomendado |
| OpenAI API | ✅ Funcional | Alternativa |
| Claude API | ✅ Funcional | Alternativa |
| Ollama (Offline) | ✅ Funcional | Para modo offline |
| Documentação | ✅ Completa | Guias e exemplos |
| Testes | ✅ Cobertura 85%+ | Melhorias contínuas |

---

## 📚 Documentação

- [SETUP.md](docs/setup/README.md) — Guia detalhado de instalação
- [QUICKSTART.md](docs/QUICKSTART.md) — Referência rápida
- [API.md](docs/API.md) — Documentação da API
- [TROUBLESHOOTING.md](docs/troubleshooting/README.md) — Soluções de problemas

---

## 📞 Contato & Suporte

- **Issues & Bugs**: [GitHub Issues](https://github.com/claw-agent/vscode-extension/issues)
- **Discussões**: [GitHub Discussions](https://github.com/claw-agent/vscode-extension/discussions)
- **Email**: rafaelbatistadev@outlook.com.br
- **Feedback**: Abra uma issue ou discussão no GitHub

---

## 📄 Licença

MIT License - Livre para uso pessoal, acadêmico e comercial.

Veja [LICENSE](LICENSE) para detalhes.

---

## 🙏 Agradecimentos

Obrigado a todos que contribuem para melhorar CLAW AGENT!

**Feito com ❤️ para devs que amam código limpo.**

---

**v1.1.0** • **Production Ready** ✅ • **MIT License**
