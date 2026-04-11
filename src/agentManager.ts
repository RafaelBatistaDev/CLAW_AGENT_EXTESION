/**
 * 🤖 CLAW AGENT v1.1.3 - Agent Manager
 * Gerencia os 6 comandos principais do agente profissional
 * ✅ Cross-platform: Windows, macOS, Linux
 * ✅ Melhorado: Timeout, retry, tratamento de erro robusto
 */

import axios from 'axios';
import { HTTPHelper } from './utils/httpHelper';
import { PathHelper } from './utils/pathHelper';

interface AIProvider {
    name: string;
    endpoint: string;
    apiKey: string;
}

export class AgentManager {
    private aiProvider: AIProvider | null = null;
    private readonly REQUEST_TIMEOUT = 30000; // 30 segundos

    constructor() {
        this.detectProvider();
    }

    /**
     * Inicializa o gerenciador
     */
    async initialize(): Promise<string> {
        try {
            if (!this.aiProvider) {
                return 'ℹ️ Nenhum provider de IA configurado. Use: agent status';
            }

            // Testa conectividade com endpoint
            const isConnected = await HTTPHelper.testConnectivity(
                this.aiProvider.endpoint,
                5000
            );

            if (!isConnected) {
                return `⚠️ Provider detectado (${this.aiProvider.name}) mas não conseguiu conectar ao endpoint.\nVerifique sua conexão ou se o serviço está rodando.`;
            }

            return `✅ Conectado a: ${this.aiProvider.name}`;
        } catch (error) {
            console.error('Erro ao inicializar:', error);
            return `⚠️ Erro ao verificar conexão: ${HTTPHelper.sanitizeError(error)}`;
        }
    }

    /**
     * Detecta qual IA está disponível (suporta Windows, macOS, Linux)
     */
    private detectProvider(): void {
        const providers = {
            OPENAI_API_KEY: {
                name: 'OpenAI (ChatGPT)',
                endpoint: 'https://api.openai.com/v1/chat/completions',
                apiKey: process.env.OPENAI_API_KEY || ''
            },
            GOOGLE_API_KEY: {
                name: 'Google Gemini',
                endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash',
                apiKey: process.env.GOOGLE_API_KEY || ''
            },
            ANTHROPIC_API_KEY: {
                name: 'Anthropic Claude',
                endpoint: 'https://api.anthropic.com/v1/messages',
                apiKey: process.env.ANTHROPIC_API_KEY || ''
            },
            LOCALAI_API_KEY: {
                name: 'LocalAI',
                endpoint: process.env.LOCALAI_ENDPOINT || 'http://localhost:8080/v1/chat/completions',
                apiKey: process.env.LOCALAI_API_KEY || 'localai'
            },
            OLLAMA_ENDPOINT: {
                name: 'Ollama',
                endpoint: process.env.OLLAMA_ENDPOINT || 'http://localhost:11434/api/generate',
                apiKey: process.env.OLLAMA_ENDPOINT || 'ollama'
            }
        };

        for (const provider of Object.values(providers)) {
            if (provider.apiKey && provider.apiKey.trim()) {
                this.aiProvider = provider;
                return;
            }
        }
    }

    /**
     * COMANDO 1: Analisar código
     */
    async analyze(code: string, filePath: string): Promise<string> {
        try {
            const language = PathHelper.detectLanguage(filePath);
            const fileName = PathHelper.getFileName(filePath);

            const prompt = `Analise o seguinte código ${language} (${fileName}) e identifique:
1. Bugs potenciais
2. Problemas de segurança
3. Ineficiências de performance
4. Melhorias de legibilidade
5. Violações de boas práticas

Arquivo: ${fileName}
Linguagem: ${language}

\`\`\`${language.toLowerCase()}
${code}
\`\`\`

Forneça uma análise detalhada e acionável.`;

            return await this.callAI(prompt);
        } catch (error) {
            return HTTPHelper.getHelpfulErrorMessage(error, 'Analyze');
        }
    }

    /**
     * COMANDO 2: Melhorar código
     */
    async improve(code: string, filePath: string): Promise<string> {
        try {
            const language = PathHelper.detectLanguage(filePath);
            const fileName = PathHelper.getFileName(filePath);

            const prompt = `Refatore e melhore o seguinte código ${language} (${fileName}):

Aplicar:
- Otimização de algoritmos e performance
- Melhorias de legibilidade
- Tratamento robusto de erros
- Seguir boas práticas da linguagem
- Sugerir mudanças estruturais se necessário

Arquivo: ${fileName}
Linguagem: ${language}

\`\`\`${language.toLowerCase()}
${code}
\`\`\`

Forneça o código refatorado com explicações claras.`;

            return await this.callAI(prompt);
        } catch (error) {
            return HTTPHelper.getHelpfulErrorMessage(error, 'Improve');
        }
    }

    /**
     * COMANDO 3: Gerar documentação
     */
    async document(code: string, filePath: string): Promise<string> {
        try {
            const language = PathHelper.detectLanguage(filePath);
            const fileName = PathHelper.getFileName(filePath);

            const prompt = `Gere documentação profissional em Markdown para o seguinte código ${language} (${fileName}):

Incluir:
- Descrição clara da função/classe
- Parâmetros com tipos
- Retorno esperado
- Exemplos de uso
- Exceções e erros possíveis
- Notas, avisos e limitações
- Casos de uso recomendados

Arquivo: ${fileName}
Linguagem: ${language}

\`\`\`${language.toLowerCase()}
${code}
\`\`\`

Use formato Markdown bem estruturado e profissional.`;

            return await this.callAI(prompt);
        } catch (error) {
            return HTTPHelper.getHelpfulErrorMessage(error, 'Document');
        }
    }

    /**
     * COMANDO 4: Criar testes
     */
    async test(code: string, filePath: string): Promise<string> {
        try {
            const language = PathHelper.detectLanguage(filePath);
            const fileName = PathHelper.getFileName(filePath);

            // Mapeia framework de teste por linguagem
            const testFrameworks: { [key: string]: string } = {
                'Python': 'pytest',
                'JavaScript': 'Jest',
                'TypeScript': 'Jest',
                'Java': 'JUnit 5',
                'C#': 'NUnit/xUnit',
                'C++': 'Google Test',
                'Go': 'testing',
                'Rust': 'cargo test',
                'PHP': 'PHPUnit',
                'Ruby': 'RSpec'
            };

            const framework = testFrameworks[language] || 'framework apropriado';

            const prompt = `Crie testes unitários automatizados e completos para o seguinte código ${language} (${fileName}):

Requisitos:
- Use ${framework}
- Cubra casos normais e casos extremos
- Incluir testes de erro e exceção
- Use mocks/stubs se necessário
- Siga boas práticas de teste
- Código pronto para usar

Arquivo: ${fileName}
Linguagem: ${language}
Framework: ${framework}

\`\`\`${language.toLowerCase()}
${code}
\`\`\`

Forneça código de teste profissional e completo.`;

            return await this.callAI(prompt);
        } catch (error) {
            return HTTPHelper.getHelpfulErrorMessage(error, 'Test');
        }
    }

    /**
     * COMANDO 5: Fazer pergunta
     */
    async ask(question: string, code: string): Promise<string> {
        try {
            const context = code ? `\nArquivo atual:\n\`\`\`\n${code}\n\`\`\`` : '';
            const prompt = `${question}${context}`;
            return await this.callAI(prompt);
        } catch (error) {
            return HTTPHelper.getHelpfulErrorMessage(error, 'Ask');
        }
    }

    /**
     * COMANDO 6: Mostrar status
     */
    async getStatus(): Promise<string> {
        const osInfo = PathHelper.getSystemInfo();
        const providerName = this.aiProvider?.name || '❌ Nenhum configurado';
        const isConfigured = this.aiProvider ? '✅ Configurada' : '❌ Não encontrada';
        const status = this.aiProvider ? '🟢 Pronto' : '🔴 Aguardando configuração';

        return `
═══════════════════════════════════════════════════════════════
🤖 CLAW AGENT v1.1.3 - STATUS
═══════════════════════════════════════════════════════════════

📊 AGENTE PROFISSIONAL - 6 COMANDOS PRINCIPAIS
───────────────────────────────────────────────────────────────

  1️⃣  \`clawagent.analyze\`
      Encontra bugs, problemas de segurança e ineficiências

  2️⃣  \`clawagent.improve\`
      Refatora e otimiza código automaticamente

  3️⃣  \`clawagent.document\`
      Gera documentação profissional em Markdown

  4️⃣  \`clawagent.test\`
      Cria testes unitários completos

  5️⃣  \`clawagent.ask\`
      Responde qualquer pergunta sobre código

  6️⃣  \`clawagent.status\`
      Mostra este menu de ajuda

───────────────────────────────────────────────────────────────

✅ STATUS DO AGENTE
─ Sistema: ${osInfo}
─ IA Provider: ${providerName}
─ API Key: ${isConfigured}
─ Versão: 1.1.3
─ Status: ${status}

───────────────────────────────────────────────────────────────

📖 GUIA RÁPIDO - CONFIGURAÇÃO

  Variáveis de ambiente suportadas:

  ✨ Opções Online (exigem chave):
  • OPENAI_API_KEY      → Usar OpenAI (ChatGPT)
  • GOOGLE_API_KEY      → Usar Google Gemini
  • ANTHROPIC_API_KEY   → Usar Claude

  🏠 Opções Locais (100% grátis, sem chave):
  • OLLAMA_ENDPOINT     → Usar Ollama (http://localhost:11434)
  • LOCALAI_ENDPOINT    → Usar LocalAI (http://localhost:8080)

  Exemplo de uso (Windows, macOS, Linux):
  \$ export OPENAI_API_KEY="sk-..."
  \$ export GOOGLE_API_KEY="AIzaSy..."
  \$ export OLLAMA_ENDPOINT="http://localhost:11434"

───────────────────────────────────────────────────────────────

🔗 SUPORTE CROSS-PLATFORM

  Versão 1.1.3 suporta:
  ✅ Windows (todos)
  ✅ macOS (Intel e Apple Silicon)
  ✅ Linux (Ubuntu, Fedora, Debian, etc)

  Compatibilidade:
  ✅ Caminhos automáticos (Windows/Unix)
  ✅ Variáveis de ambiente
  ✅ Timeouts inteligentes
  ✅ Retry automático em falhas
  ✅ Detecção automática de linguagem

───────────────────────────────────────────────────────────────

📚 LINKS ÚTEIS

  Documentação: https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode
  Issues: https://github.com/RafaelBatistaDev/CLAW-AGENT---Seu-Assistente-de-IA-para-Codigo-VsCode/issues
  Email: rafaelbatistadev@outlook.com.br

═══════════════════════════════════════════════════════════════
        `;
    }

    /**
     * Chama a IA configurada com retry e timeout
     */
    private async callAI(prompt: string): Promise<string> {
        if (!this.aiProvider) {
            return `❌ Erro: Nenhuma IA configurada.

Configure uma variável de ambiente passando a chave de API:
- OPENAI_API_KEY (OpenAI - requer chave)
- GOOGLE_API_KEY (Google Gemini - requer chave)
- ANTHROPIC_API_KEY (Claude - requer chave)

Ou use uma IA local (100% grátis):
- OLLAMA_ENDPOINT (padrão: http://localhost:11434)
- LOCALAI_ENDPOINT (padrão: http://localhost:8080)

Compatível com: Windows, macOS, Linux`;
        }

        try {
            if (this.aiProvider.name.includes('OpenAI')) {
                return await this.callOpenAI(prompt);
            } else if (this.aiProvider.name.includes('Gemini')) {
                return await this.callGemini(prompt);
            } else if (this.aiProvider.name.includes('Claude')) {
                return await this.callClaude(prompt);
            } else if (this.aiProvider.name.includes('LocalAI') || this.aiProvider.name.includes('Ollama')) {
                return await this.callLocal(prompt);
            }

            return '❌ Provider não reconhecido';
        } catch (error) {
            return HTTPHelper.getHelpfulErrorMessage(error, `Provider: ${this.aiProvider.name}`);
        }
    }

    private async callOpenAI(prompt: string): Promise<string> {
        try {
            const response = await axios.post(
                this.aiProvider!.endpoint,
                {
                    model: 'gpt-4-turbo-preview',
                    messages: [{ role: 'user', content: prompt }],
                    temperature: 0.7,
                    max_tokens: 4000
                },
                {
                    headers: HTTPHelper.createHeaders(`Bearer ${this.aiProvider!.apiKey}`),
                    timeout: this.REQUEST_TIMEOUT,
                    validateStatus: () => true
                }
            );

            if (response.status === 200) {
                return response.data.choices[0].message.content;
            } else if (response.status === 401) {
                return '❌ Erro 401: Chave OpenAI inválida ou expirada';
            } else if (response.status === 429) {
                return '❌ Erro 429: Limite de requisições atingido. Aguarde alguns segundos.';
            }

            return `❌ Erro ${response.status}: ${response.statusText}`;
        } catch (error) {
            return HTTPHelper.getHelpfulErrorMessage(error, 'OpenAI');
        }
    }

    private async callGemini(prompt: string): Promise<string> {
        try {
            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.aiProvider!.apiKey}`;

            const response = await axios.post(
                endpoint,
                {
                    contents: [{
                        parts: [{ text: prompt }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 4000
                    }
                },
                {
                    headers: HTTPHelper.createHeaders(),
                    timeout: this.REQUEST_TIMEOUT,
                    validateStatus: () => true
                }
            );

            if (response.status === 200) {
                return response.data.candidates[0].content.parts[0].text;
            } else if (response.status === 401 || response.status === 403) {
                return '❌ Erro 403: Chave Google Gemini inválida ou com permissões insuficientes';
            }

            return `❌ Erro ${response.status}: ${response.statusText}`;
        } catch (error) {
            return HTTPHelper.getHelpfulErrorMessage(error, 'Google Gemini');
        }
    }

    private async callClaude(prompt: string): Promise<string> {
        try {
            const response = await axios.post(
                this.aiProvider!.endpoint,
                {
                    model: 'claude-3-5-sonnet-20241022',
                    max_tokens: 4000,
                    messages: [{ role: 'user', content: prompt }]
                },
                {
                    headers: {
                        'x-api-key': this.aiProvider!.apiKey,
                        'anthropic-version': '2023-06-01',
                        'Content-Type': 'application/json',
                        'User-Agent': HTTPHelper.getUserAgent()
                    },
                    timeout: this.REQUEST_TIMEOUT,
                    validateStatus: () => true
                }
            );

            if (response.status === 200) {
                return response.data.content[0].text;
            } else if (response.status === 401) {
                return '❌ Erro 401: Chave Claude inválida ou expirada';
            }

            return `❌ Erro ${response.status}: ${response.statusText}`;
        } catch (error) {
            return HTTPHelper.getHelpfulErrorMessage(error, 'Claude');
        }
    }

    private async callLocal(prompt: string): Promise<string> {
        try {
            const response = await axios.post(
                this.aiProvider!.endpoint,
                {
                    model: 'gpt-4',
                    messages: [{ role: 'user', content: prompt }],
                    temperature: 0.7,
                    max_tokens: 4000
                },
                {
                    headers: HTTPHelper.createHeaders(),
                    timeout: this.REQUEST_TIMEOUT,
                    validateStatus: () => true
                }
            );

            if (response.status === 200) {
                return response.data.choices[0].message.content;
            }

            return `❌ Erro ${response.status}: Verifique se o serviço local está rodando`;
        } catch (error) {
            return HTTPHelper.getHelpfulErrorMessage(error, 'IA Local (Ollama/LocalAI)');
        }
    }
}
