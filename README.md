# 🤖 CLAW AGENT - Seu Assistente de IA para Código

> **Agente de IA profissional para análise, refatoração, documentação e testes automáticos de código**

<div align="center">

[![Version](https://img.shields.io/badge/Version-1.1.3-blue.svg?style=flat-square&logo=semantic-release)](https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode/releases)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square&logo=open-source-initiative)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen.svg?style=flat-square&logo=github)](https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg?style=flat-square&logo=node.js)](https://nodejs.org/)
[![VS Code](https://img.shields.io/badge/VS%20Code-1.85%2B-blue.svg?style=flat-square&logo=visual-studio-code)](https://code.visualstudio.com/)

[![Windows](https://img.shields.io/badge/Windows-10%2F11%2FServer-0078D4.svg?style=flat-square&logo=windows)](https://www.microsoft.com/windows)
[![macOS](https://img.shields.io/badge/macOS-Intel%20%2F%20Silicon-000000.svg?style=flat-square&logo=apple)](https://www.apple.com/macos/)
[![Linux](https://img.shields.io/badge/Linux-Ubuntu%20%2F%20Fedora%20%2F%20Debian-FCC624.svg?style=flat-square&logo=linux)](https://www.linux.org/)

[![AI: Online](https://img.shields.io/badge/AI-OpenAI%20%7C%20Gemini%20%7C%20Claude-FF6B6B.svg?style=flat-square)](#-provedores-de-ia)
[![AI: Local](https://img.shields.io/badge/AI%20Local-Ollama%20%7C%20LocalAI-10B981.svg?style=flat-square)](#-provedores-de-ia)
[![Build](https://img.shields.io/badge/Build-Distrobox%20%7C%20Podman%20%7C%20Docker-2496ED.svg?style=flat-square)](#-compilação)

[![GitHub Stars](https://img.shields.io/github/stars/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode?style=flat-square&logo=github)](https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode)
[![GitHub Issues](https://img.shields.io/github/issues/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode?style=flat-square&logo=github)](https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode/pulls)

</div>

---

## ✨ Features Principais

| 🎯 **Funcionalidades** | 🚀 **Performance** |
|---------|-----|
| ✅ 6 Comandos Profissionais | 🏃 Compilação ~30s |
| ✅ Múltiplas IAs (5 providers) | 💾 Extensão ~500KB |
| ✅ Detecção de Linguagem | 🔄 Retry Automático |
| ✅ Cross-Platform Idêntico | 🌙 Dark/Light Mode |
| ✅ Toggle ON/OFF | 📱 Responsivo |
| ✅ Timeout 30s Inteligente | 🔐 Seguro (sem vazamento) |

---

## 🖥️ Tabela de Compatibilidade

| **Sistema** | **Status** | **Node** | **Arquitetura** | **Notas** |
|---|---|---|---|---|
| 🪟 Windows 10/11/Server | ✅ | 18+ | x64, x86, ARM64 | Totalmente suportado |
| 🍎 macOS Intel/Apple Silicon | ✅ | 18+ | x64, arm64 | Nativo em ambos |
| 🐧 Linux (Ubuntu/Fedora/Debian) | ✅ | 18+ | x64, arm64 | Múltiplas distros |

---

## 🚀 Início Rápido (2 minutos)

### 1️⃣ Instalar a Extensão

```bash
# Opção A: Do arquivo VSIX
code --install-extension claw-agent-1.1.3.vsix

# Opção B: VS Code → Extensions → Install from VSIX
```

### 2️⃣ Configurar Provedor de IA

Escolha **UMA** das 5 opções:

#### 💻 Opções Online (Com Chave de API)

**OpenAI (ChatGPT - Recomendado)**

```bash
# Windows
setx OPENAI_API_KEY "sk-..."

# macOS/Linux
export OPENAI_API_KEY="sk-..."
echo 'export OPENAI_API_KEY="sk-..."' >> ~/.bashrc && source ~/.bashrc
```

**Google Gemini (Grátis+)**

```bash
export GOOGLE_API_KEY="AIzaSy..."
echo 'export GOOGLE_API_KEY="AIzaSy..."' >> ~/.bashrc && source ~/.bashrc
```

**Anthropic Claude (Premium)**

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
echo 'export ANTHROPIC_API_KEY="sk-ant-..."' >> ~/.bashrc && source ~/.bashrc
```

#### 🏠 Opções Locais (100% Grátis, Sem Chave)

**Ollama (Recomendado)**

```bash
export OLLAMA_ENDPOINT="http://localhost:11434"
echo 'export OLLAMA_ENDPOINT="http://localhost:11434"' >> ~/.bashrc && source ~/.bashrc
```

**LocalAI**

```bash
export LOCALAI_ENDPOINT="http://localhost:8080"
echo 'export LOCALAI_ENDPOINT="http://localhost:8080"' >> ~/.bashrc && source ~/.bashrc
```

### 3️⃣ Reiniciar VS Code

Feche completamente e abra novamente.

### 4️⃣ Usar o Agente

```
Clique direito em qualquer arquivo → "🔍 CLAW Agent: Analisar Código"
OU
Ctrl+Shift+P → CLAW Agent: Analyze
```

---

## 📊 6 Comandos Profissionais

| Comando | Descrição | Atalho |
|---------|-----------|--------|
| 🔍 **Analisar** | Encontra bugs, segurança e ineficiências | Clique direito |
| ✨ **Melhorar** | Refatora e otimiza código | Clique direito |
| 📚 **Documentar** | Gera documentação Markdown profissional | Clique direito |
| 🧪 **Testar** | Cria testes unitários completos | Clique direito |
| ❓ **Perguntar** | Responde perguntas sobre código | Clique direito |
| ℹ️ **Status** | Menu de ajuda e configuração | Ctrl+Shift+P |

---

## 🌳 Views Integradas no Sidebar

### 📊 CLAW Agent - Configurações (Explorer)

View nativa integrada ao Explorer com 3 seções principais:

```
📊 STATUS E INFORMAÇÕES
├─ Status: 🟢 Ativo/Inativo
├─ Provedor: Gemini/OpenAI/Claude/etc
├─ Versão: 1.1.3
└─ Arquivo Atual: nome_do_arquivo

⚡ COMANDOS RÁPIDOS
├─ 🔍 Analisar Código
├─ ✨ Melhorar Código
├─ 📚 Gerar Documentação
├─ 🧪 Criar Testes
├─ ❓ Fazer Pergunta
└─ 📋 Ver Status

⚙️ CONFIGURAÇÕES
├─ Provedor de IA (clicável)
├─ Timeout (30s padrão)
├─ Idioma (Português/English)
├─ Profundidade de Análise
├─ Auto-formatação
└─ ⚙️ Abrir Todas as Configurações
```

**Como acessar:** Clique em CLAW Agent - Configurações no Explorer → Expand seções

### 📂 Sugestões do CLAW (Activity Bar)

View dinâmica na Activity Bar que se atualiza automaticamente:

```
🤖 CLAW AI Assistant (Activity Bar)
└─ Sugestões do CLAW
   ├─ 📊 Arquivo: seu_arquivo.py (50 linhas)
   ├─ 🔍 Analisar este arquivo
   ├─ ✨ Refatorar código
   ├─ 🧪 Gerar testes
   ├─ 📚 Documentar
   └─ 🔤 Linguagem: Python 🐍
```

**Como acessar:** Clique no ícone 🤖 na Activity Bar (ou Ctrl+Alt+E)

### ✨ Funcionalidades das Views

- ✅ **Status em Tempo Real** - Atualiza conforme editor muda
- ✅ **Clique para Executar** - Qualquer item executa comando direto
- ✅ **Detecção de Linguagem** - Adapta sugestões por tipo de arquivo
- ✅ **Refresh Automático** - Atualiza ao mudar arquivo
- ✅ **Ícones Temáticos** - Respeita dark/light mode do VS Code
- ✅ **Contexto Dinâmico** - Informações do arquivo em tempo real

---

## 🤖 Provedores de IA Suportados

| **Provider** | **Configuração** | **Custo** | **Qualidade** | **Velocidade** | **Recomendado** |
|---|---|---|---|---|---|
| 🟠 OpenAI | `OPENAI_API_KEY=sk-...` | 💰 Pago | ⭐⭐⭐⭐⭐ | ⚡ Rápido | ✅ **Melhor** |
| 🔵 Google Gemini | `GOOGLE_API_KEY=AIzaSy...` | ✅ Grátis* | ⭐⭐⭐⭐ | ⚡ Rápido | ✅ **Bom** |
| 🔴 Claude | `ANTHROPIC_API_KEY=sk-ant-...` | 💰 Pago | ⭐⭐⭐⭐ | ⚡ Rápido | ✅ **Excelente** |
| 🏠 Ollama | `OLLAMA_ENDPOINT=http://localhost:11434` | ✅ Grátis | ⭐⭐⭐ | ⚠️ Médio** | ✅ **Local** |
| 🏠 LocalAI | `LOCALAI_ENDPOINT=http://localhost:8080` | ✅ Grátis | ⭐⭐ | ⚠️ Lento** | ⚪ **Backup** |

**\* Plano free com limite de requisições | \*\* Depende do hardware local**

### Como Obter Chaves de API

| **Provedor** | **Link** | **Processo** |
|---|---|---|
| OpenAI | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) | Conta → API Keys → Copiar |
| Google Gemini | [makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey) | Google Account → Gerar |
| Claude | [console.anthropic.com/keys](https://console.anthropic.com/keys) | Conta → Dashboard → Keys |
| Ollama | [ollama.ai](https://ollama.ai) | Instalar → 0 configuração |
| LocalAI | [github.com/go-skynet/LocalAI](https://github.com/go-skynet/LocalAI) | Instalar → 0 configuração |

---

## 📦 Compilação

### 3️⃣ Opções de Build

#### 🔹 **Distrobox** (Ubuntu em Container)

```bash
./build-distrobox.sh
# ✅ Tempo: ~45s | Ideal para: Fedora/RHEL
```

#### 🔹 **Podman** (Alpine - Mais Leve)

```bash
./build-podman.sh
# ✅ Tempo: ~30s | Ideal para: Recursos limitados
```

#### 🔹 **Docker Compose** (Padrão Indústria)

```bash
docker-compose up --build
# ✅ Ideal para: CI/CD pipelines
```

### Pré-requisitos

```bash
# Ubuntu/Debian
sudo apt install podman docker.io docker-compose

# Fedora/RHEL
sudo dnf install distrobox podman docker docker-compose

# macOS
brew install podman docker docker-compose
```

### Verificar Resultado

```bash
# Arquivo gerado
ls -lh claw-agent-1.1.3.vsix

# Instalar
code --install-extension claw-agent-1.1.3.vsix

# Testar: Ctrl+Shift+P → CLAW Agent: Status
```

---

## 💡 Casos de Uso

### 📝 **Documentação Automática**

Código novo sem docs?

```bash
Execute "document" → Documentação pronta!
```

### 🧪 **Testes Completos**

Novo módulo?

```bash
Execute "test" → Testes criados automaticamente!
```

### ✨ **Refatoração**

Código legado?

```bash
Execute "improve" → Melhoria automática + explicações!
```

### ❓ **Ajuda Profissional**

Dúvida?

```bash
Execute "ask" → Resposta da IA em segundos!
```

---

## 📊 Linguagens Suportadas

✅ **JavaScript** | ✅ **TypeScript** | ✅ **Python** | ✅ **Java** | ✅ **C#**
✅ **C++** | ✅ **Go** | ✅ **Rust** | ✅ **Ruby** | ✅ **PHP** | ✅ **SQL**

---

## 🐛 Troubleshooting

| **Problema** | **Solução** |
|-----------|-----------|
| "Nenhuma IA configurada" | `echo $OPENAI_API_KEY` → Configurar variável |
| "Timeout esperando resposta" | Verificar internet / Usar Ollama local |
| "API Key inválida" | Gerar nova no console provider |
| "Compilação falha" | `podman --version` / `chmod +x build-*.sh` |
| "Extension não carrega" | Verificar VS Code logs: `Help → Toggle Developer Tools` |

---

## 🔐 Privacidade e Segurança

✅ **Nenhuma chave API** armazenada no repositório
✅ **Secrets via variáveis de ambiente** apenas
✅ **Suporte 100% offline** (Ollama local)
✅ **Código sanitizado** (APIs sem vazamento)
✅ **MIT License** - Uso comercial permitido

---

## 📚 Documentação Completa

| **Arquivo** | **Conteúdo** |
|---------|-----------|
| [BUILD_CONTAINER_GUIDE.md](BUILD_CONTAINER_GUIDE.md) | Guia detalhado de compilação |
| [QUICK_BUILD.md](QUICK_BUILD.md) | Build rápido (3 comandos) |
| [CHANGELOG.md](CHANGELOG.md) | Histórico completo de versões |
| [LICENSE](LICENSE) | MIT License completa |

---

## 🚀 Recursos Técnicos

- ✅ **TypeScript Strict** - Type-safe em 100%
- ✅ **VS Code API 1.85+** - Integração nativa
- ✅ **Cross-Platform** - PathHelper universal
- ✅ **Timeout 30s** - HTTPHelper robusto
- ✅ **Retry 3x** - Reconexão automática
- ✅ **Dark/Light Theme** - Interface adaptativa
- ✅ **Toggle ON/OFF** - Controle na barra de status
- ✅ **Webpack + TS** - Compilação otimizada

---

## 📄 Licença

**MIT © 2026 Rafael Batista**

Você é livre para:

- ✅ Usar comercialmente
- ✅ Modificar código
- ✅ Distribuir versões
- ✅ Usar privadamente

Veja [LICENSE](LICENSE) para termos completos.

---

## 🤝 Contribuir

Issues, PRs e feedback bem-vindos! 🎉

👉 <https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode>

---

## 📧 Contato

- 📧 **Email**: <rafaelbatistadev@outlook.com.br>
- 🐙 **GitHub**: <https://github.com/RafaelBatistaDev>
- 🐛 **Issues**: <https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode/issues>

---

## 🎊 Versão 1.1.3 - Release Notes

### ✨ Principais Melhorias

| Melhoria | Detalhe |
|----------|---------|
| 🌍 **Cross-Platform** | Windows, macOS, Linux - Comportamento idêntico |
| 🔧 **PathHelper** | Caminhos funcionam em qualquer SO |
| 🌐 **HTTPHelper** | Timeout 30s + Retry 3x automático |
| 🎨 **UI Automática** | Tema light/dark adaptativo |
| 💬 **Mensagens** | Úteis, profissionais e em português |
| 🔒 **Robusto** | Tratamento de 10+ cenários de erro |

### 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| **Comandos** | 6 principais |
| **Provedores de IA** | 5 opções |
| **Plataformas** | Windows, macOS, Linux |
| **Build Methods** | 3 opções (Distrobox, Podman, Docker) |
| **Linguagens** | 10+ suportadas |
| **License** | MIT (Comercial ✅) |

---

<div align="center">

**Feito com ❤️ para devs que amam código limpo.**

**v1.1.3** • **Cross-Platform** ✅ • **Production Ready** ✅ • **MIT License** ✅

</div>
# 🤖 CLAW AGENT - Seu Assistente de IA para Código

> **Agente de IA profissional para análise, refatoração, documentação e testes automáticos de código**

<div align="center">

[![Version](https://img.shields.io/badge/Version-1.1.3-blue.svg?style=flat-square&logo=semantic-release)](https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode/releases)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square&logo=open-source-initiative)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen.svg?style=flat-square&logo=github)](https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg?style=flat-square&logo=node.js)](https://nodejs.org/)
[![VS Code](https://img.shields.io/badge/VS%20Code-1.85%2B-blue.svg?style=flat-square&logo=visual-studio-code)](https://code.visualstudio.com/)

[![Windows](https://img.shields.io/badge/Windows-10%2F11%2FServer-0078D4.svg?style=flat-square&logo=windows)](https://www.microsoft.com/windows)
[![macOS](https://img.shields.io/badge/macOS-Intel%20%2F%20Apple%20Silicon-000000.svg?style=flat-square&logo=apple)](https://www.apple.com/macos/)
[![Linux](https://img.shields.io/badge/Linux-Ubuntu%20%2F%20Fedora%20%2F%20Debian-FCC624.svg?style=flat-square&logo=linux)](https://www.linux.org/)

[![AI: OpenAI](https://img.shields.io/badge/AI-OpenAI%20%7C%20Gemini%20%7C%20Claude-FF6B6B.svg?style=flat-square)](#-provedores-de-ia)
[![AI: Local](https://img.shields.io/badge/AI%20Local-Ollama%20%7C%20LocalAI-10B981.svg?style=flat-square)](#-provedores-de-ia)
[![Build](https://img.shields.io/badge/Build-Distrobox%20%7C%20Podman%20%7C%20Docker-2496ED.svg?style=flat-square)](#-compilação)

[![GitHub Stars](https://img.shields.io/github/stars/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode?style=flat-square&logo=github)](https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode)
[![GitHub Issues](https://img.shields.io/github/issues/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode?style=flat-square&logo=github)](https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode/issues)

</div>

---

## ✨ Features Principais

<table>
<tr>
<td width="50%">

### 🎯 Funcionalidades

- ✅ **6 Comandos Profissionais** - Análise, melhoria, documentação, testes, perguntas, status
- ✅ **Múltiplas IAs** - OpenAI, Gemini, Claude, Ollama, LocalAI
- ✅ **Detecção Automática** - Identifica linguagem de programação
- ✅ **Cross-Platform** - Windows, macOS, Linux (idêntico em todos)
- ✅ **Toggle ON/OFF** - Botão na barra de tarefas para controlar agente
- ✅ **Timeout Inteligente** - 30 segundos com retry automático
- ✅ **Tratamento de Erros** - Mensagens úteis e sugestões

</td>
<td width="50%">

### 🚀 Performance

- 🏃 **Rápido** - Compilação em container (~30s)
- 💾 **Leve** - Extensão compactada (~500KB)
- 🔄 **Resiliente** - Retry automático em falhas
- 🌙 **Dark/Light** - Adapta ao tema do VS Code
- 📱 **Responsivo** - UI não trava durante processamento
- 🔐 **Seguro** - APIs sanitizadas, sem vazamento de chaves

</td>
</tr>
</table>

---

## 🖥️ Compatibilidade Cross-Platform

| Sistema | Status | Node | Arch | Notas |
|---------|--------|------|------|-------|
| **Windows** 10/11/Server | ✅ | 18+ | x64, x86, ARM64 | Totalmente suportado |
| **macOS** Intel/Apple Silicon | ✅ | 18+ | x64, arm64 | Nativo em ambos |
| **Linux** Ubuntu/Fedora/Debian | ✅ | 18+ | x64, arm64 | Testado em múltiplas distros |

### ✨ Melhorias v1.1.3

✅ Normalização automática de caminhos (Windows/Unix)
✅ Detecção automática do sistema operacional
✅ Variáveis de ambiente em todos os SOs
✅ Timeout inteligente (30s) com retry automático
✅ Tratamento robusto de erros com sugestões
✅ Interface adaptiva (Light/Dark theme)

---

---

## 🚀 Início Rápido (2 minutos)

### 1️⃣ Instalar a Extensão

```bash
# Opção A: Do arquivo VSIX
code --install-extension claw-agent-1.1.3.vsix

# Opção B: VS Code → Extensions → Install from VSIX
# (Teste local antes de publicar no Marketplace)
```

### 2️⃣ Configurar Provedor de IA

Escolha **UMA** das opções abaixo:

#### 💻 Online (Requer Chave de API)

**OpenAI (Recomendado - ChatGPT)**

```bash
# Windows
setx OPENAI_API_KEY "sk-..."

# macOS/Linux
export OPENAI_API_KEY="sk-..."
echo 'export OPENAI_API_KEY="sk-..."' >> ~/.bashrc && source ~/.bashrc
```

**Google Gemini (Grátis)**

```bash
# Windows
setx GOOGLE_API_KEY "AIzaSy..."

# macOS/Linux
export GOOGLE_API_KEY="AIzaSy..."
echo 'export GOOGLE_API_KEY="AIzaSy..."' >> ~/.bashrc && source ~/.bashrc
```

**Anthropic Claude**

```bash
# Windows
setx ANTHROPIC_API_KEY "sk-ant-..."

# macOS/Linux
export ANTHROPIC_API_KEY="sk-ant-..."
echo 'export ANTHROPIC_API_KEY="sk-ant-..."' >> ~/.bashrc && source ~/.bashrc
```

#### 🏠 Local (100% Grátis, Nenhuma Chave)

**Ollama (Recomendado para Local)**

```bash
# Windows
setx OLLAMA_ENDPOINT "http://localhost:11434"

# macOS/Linux
export OLLAMA_ENDPOINT="http://localhost:11434"
echo 'export OLLAMA_ENDPOINT="http://localhost:11434"' >> ~/.bashrc && source ~/.bashrc
```

**LocalAI**

```bash
# Windows
setx LOCALAI_ENDPOINT "http://localhost:8080"

# macOS/Linux
export LOCALAI_ENDPOINT="http://localhost:8080"
echo 'export LOCALAI_ENDPOINT="http://localhost:8080"' >> ~/.bashrc && source ~/.bashrc
```

### 3️⃣ Reiniciar VS Code

Feche completamente e reabra VS Code.

### 4️⃣ Começar a Usar

Abra qualquer arquivo de código e:

```
📌 Opção A: Clique direito → "🔍 CLAW Agent: Analisar Código"
📌 Opção B: Ctrl+Shift+P → CLAW Agent: Analyze
```

---

## 📊 6 Comandos Principais

Encontra bugs, problemas de segurança e ineficiências.

```
🔍 Clique direito no editor → "🔍 CLAW Agent: Analisar Código"
Ou: Ctrl+Shift+P → CLAW Agent: Analyze
```

**Detecta:**

- ✅ Bugs potenciais
- ✅ Problemas de segurança
- ✅ Ineficiências de performance
- ✅ Código smell

---

### 2️⃣ **MELHORAR** ✨

Refatora e otimiza código automaticamente.

```
✨ Clique direito no editor → "✨ CLAW Agent: Melhorar Código"
Ou: Ctrl+Shift+P → CLAW Agent: Improve
```

**Otimiza:**

- ✅ Algoritmos e performance
- ✅ Legibilidade
- ✅ Tratamento de erros
- ✅ Boas práticas

---

### 3️⃣ **DOCUMENTAR** 📚

Cria documentação profissional em Markdown.

```
📚 Clique direito no editor → "📚 CLAW Agent: Gerar Documentação"
Ou: Ctrl+Shift+P → CLAW Agent: Document
```

**Gera:**

- ✅ Descrições de funções/classes
- ✅ Parâmetros com tipos
- ✅ Exemplos de uso
- ✅ Exceções possíveis

---

### 4️⃣ **TESTAR** 🧪

Cria testes unitários completos.

```
🧪 Clique direito no editor → "🧪 CLAW Agent: Criar Testes"
Ou: Ctrl+Shift+P → CLAW Agent: Test
```

**Testes:**

- ✅ Cobertura completa
- ✅ Casos extremos
- ✅ Mocks automáticos
- ✅ Ready to use

---

### 5️⃣ **PERGUNTAR** ❓

Responde qualquer pergunta sobre código.

```
❓ Clique direito → "❓ CLAW Agent: Fazer Pergunta"
Ou: Ctrl+Shift+P → CLAW Agent: Ask Question
```

**Pode perguntar:**

- "Como otimizar este código?"
- "Qual é a melhor prática?"
- Qualquer coisa sobre código!

---

### 6️⃣ **STATUS** ℹ️

Verifica configuração e mostra ajuda.

```
ℹ️ Ctrl+Shift+P → "ℹ️ CLAW Agent: Status"
```

**Mostra:**

- ℹ️ IA Provider (OpenAI, Gemini, etc)
- ℹ️ Status da API Key
- ℹ️ Versão: 1.1.3
- ℹ️ Menu de comandos

---

## 🔧 Configuração Completa

### Passo 1: Instalar

**Opção A: VS Code Marketplace (em breve)**

```
Será publicada em breve no VS Code Marketplace
```

**Opção B: Compilar Localmente**

```bash
git clone https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode
cd "CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode"
npm install
npm run compile
npm run vscode:prepublish
```

---

## 🤖 Provedores de IA Suportados

<table>
<tr>
<th>Provider</th>
<th>Configuração</th>
<th>Custo</th>
<th>Qualidade</th>
<th>Velocidade</th>
<th>Recomendado</th>
</tr>
<tr>
<td><strong>🟠 OpenAI</strong></td>
<td><code>OPENAI_API_KEY=sk-...</code></td>
<td>💰 Pago</td>
<td>⭐⭐⭐⭐⭐</td>
<td>⚡ Rápido</td>
<td>✅ Melhor</td>
</tr>
<tr>
<td><strong>🔵 Google Gemini</strong></td>
<td><code>GOOGLE_API_KEY=AIzaSy...</code></td>
<td>✅ Grátis*</td>
<td>⭐⭐⭐⭐</td>
<td>⚡ Rápido</td>
<td>✅ Bom</td>
</tr>
<tr>
<td><strong>🔴 Claude</strong></td>
<td><code>ANTHROPIC_API_KEY=sk-ant-...</code></td>
<td>💰 Pago</td>
<td>⭐⭐⭐⭐</td>
<td>⚡ Rápido</td>
<td>✅ Excelente</td>
</tr>
<tr>
<td><strong>🏠 Ollama</strong></td>
<td><code>OLLAMA_ENDPOINT=http://localhost:11434</code></td>
<td>✅ Gratuito</td>
<td>⭐⭐⭐</td>
<td>⚠️ Médio**</td>
<td>✅ Local</td>
</tr>
<tr>
<td><strong>🏠 LocalAI</strong></td>
<td><code>LOCALAI_ENDPOINT=http://localhost:8080</code></td>
<td>✅ Gratuito</td>
<td>⭐⭐</td>
<td>⚠️ Lento**</td>
<td>⚪ Backup</td>
</tr>
</table>

**\* Plano free com limite de requisições
**\*\* Depende do hardware local

### Como Obter Chaves

| Provider | Link | Processo |
|----------|------|----------|
| **OpenAI** | <https://platform.openai.com/api-keys> | Criar conta → Gerar chave API → Usar |
| **Google Gemini** | <https://makersuite.google.com/app/apikey> | Gerar chave do Google AI Studio |
| **Claude** | <https://console.anthropic.com/keys> | Criar conta → Dashboard → API Keys |
| **Ollama** | <https://ollama.ai> | Instalar local → Sem chave |
| **LocalAI** | <https://github.com/go-skynet/LocalAI> | Instalar Docker → Sem chave |

---

## 📦 Compilação

```
Código novo sem docs?
Execute "document" e pronto!
```

### Cobertura de Testes

```
Novo módulo? Execute "test"
Testes já criados e prontos
```

### Refatoração

```
Código legado? Execute "improve"
Melhoria automática + explicações
```

### Aprendizado

```
Dúvida sobre código?
Execute "ask" com sua pergunta
```

---

## 🔐 Privacidade

✅ Nenhuma chave API no repositório
✅ Secrets via variáveis de ambiente
✅ Suporta uso 100% offline (Ollama)
✅ MIT License — Uso comercial permitido

---

## 📊 Linguagens Suportadas

✅ Python
✅ JavaScript / TypeScript
✅ C# / Java / C++
✅ Go / Rust / Ruby
✅ PHP / SQL

---

## 🚀 Recursos

- ✅ **6 Comandos Profissionais** - Focado em produtividade
- ✅ **Multi-Provider** - OpenAI, Gemini, Claude, LocalAI, Ollama
- ✅ **Cross-Platform** - Windows, macOS, Linux com suporte idêntico
- ✅ **Auto-Detect** - Detecta qual IA você tem configurada
- ✅ **Menu Contextual** - Clique direito = acesso rápido
- ✅ **Paleta de Comandos** - Ctrl+Shift+P = completo
- ✅ **Interface Clara** - Resultados em painel lateral
- ✅ **Timeout Inteligente** - Nunca fica pendurado
- ✅ **Retry Automático** - Reconecta em caso de falha
- ✅ **Zero Complexidade** - Versão 1.1.3: focada e simples

---

## 🐛 Troubleshooting

### "Nenhuma IA configurada"

```bash
# Verificar variável:
echo $OPENAI_API_KEY

# Configurar:
export OPENAI_API_KEY="sk-sua-chave"
source ~/.bashrc

# Testar:
# Ctrl+Shift+P → CLAW Agent: Status
```

### "Timeout esperando resposta"

- Verificar internet
- Tentar com Ollama (local)
- Usar arquivo menor para testar

### "API Key inválida"

- Verificar chave
- Gerar nova se necessário
- Testar em console provider

---

## 📱 Desenvolvimento

### Compilar

```bash
npm install
npm run watch        # Modo watch
npm run compile:prod # Build final
```

### Criar Extension (.vsix)

```bash
npm install -g vsce
vsce package

# Resultado: claw-agent-1.0.2.vsix
```

### Instalar Localmente

```bash
code --install-extension claw-agent-1.0.2.vsix
```

---

## � Licença

MIT © 2026 Rafael Batista

Você é livre para usar, modificar e distribuir. Veja [LICENSE](LICENSE)

---

## 🤝 Contribuir

Issues, PRs e feedback bem-vindos!

→ <https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode>

---

## 📧 Contato

- **Email**: <rafaelbatistadev@outlook.com.br>
- **GitHub**: <https://github.com/RafaelBatistaDev>
- **Issues**: <https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode/issues>

---

## 🎊 Versão 1.1.3 - O que mudou?

### ✨ Principais Melhorias

- **Cross-Platform** - Windows, macOS, Linux com suporte idêntico
- **Detecção de SO** - Ajusta automaticamente para seu sistema
- **PathHelper** - Caminhos funcionam igual em qualquer plataforma
- **HTTPHelper** - Timeout inteligente e retry automático
- **Melhor UX** - Tema automático (light/dark) e mensagens úteis
- **Robusto** - Tratamento de erro em 10+ cenários

### 📊 Stats

- **v1.1.3**: Release cross-platform completa
- **6 comandos**: Simples, poderoso e eficiente
- **5 providers de IA**: Máxima compatibilidade
- **3 plataformas**: Windows, macOS, Linux
- **MIT License**: Uso comercial permitido

---

## 📞 Precisa de Ajuda?

- Instalar? → Execute `npm install` e `npm run compile`
- Comandos? → Ctrl+Shift+P → "CLAW Agent: Status"
- Problemas? → Veja [TROUBLESHOOTING](#troubleshooting)
- Bug? → [Issues](https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode/issues)

---

## 📜 License

MIT — Livre para uso pessoal, acadêmico e comercial!

---

**Feito com ❤️ para devs que amam código limpo.**

**v1.1.3** • **Cross-Platform** (Windows | macOS | Linux) ✅ • **Production Ready** ✅ • **MIT License**
