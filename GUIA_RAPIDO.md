# 🤖 CLAW AGENT v1.0.2 - GUIA RÁPIDO

## ⚡ 3 Passos para Começar

### 1️⃣ Instalar a Extensão

**Opção A - Via Marketplace (em breve):**
- Abrir VS Code
- Extensões (Ctrl+Shift+X)
- Buscar "CLAW AGENT"
- Instalar

**Opção B - Compilar Localmente:**
```bash
git clone https://github.com/claw-agent/vscode-extension
cd vscode-extension
npm install
npm run compile
```

### 2️⃣ Configurar IA

Escolha **UMA** das opções:

**OpenAI (Recomendado):**
```bash
export OPENAI_API_KEY="sk-..."
```

**Google Gemini (Grátis):**
```bash
export GOOGLE_API_KEY="AIzaSy..."
```

**Ollama (100% Local, Grátis):**
```bash
# 1. Instalar Ollama
# 2. Executar: ollama serve
# 3. Em outro terminal:
export OLLAMA_ENDPOINT="http://localhost:11434"
```

### 3️⃣ Usar no VS Code

1. Abrir qualquer arquivo de código
2. **Clique direito** no editor
3. Escolher ação:
   - 🔍 Analisar Código
   - ✨ Melhorar Código
   - 📚 Gerar Documentação
   - 🧪 Criar Testes
   - ❓ Fazer Pergunta
4. Ver resultado em painel lateral

---

## 🎯 6 Comandos

| Comando | Atalho | O que faz |
|---------|--------|----------|
| **Analyze** 🔍 | Clique direito | Encontra bugs |
| **Improve** ✨ | Clique direito | Refatora código |
| **Document** 📚 | Clique direito | Gera documentação |
| **Test** 🧪 | Clique direito | Cria testes |
| **Ask** ❓ | Clique direito | Pergunta qualquer coisa |
| **Status** ℹ️ | Ctrl+Shift+P | Mostra configuração |

---

## 🔧 Configuração Permanente

### Linux/macOS

Abrir `~/.bashrc`:
```bash
nano ~/.bashrc
```

Adicionar no final:
```bash
export OPENAI_API_KEY="sk-..."
```

Salvar: `Ctrl+O`, `Enter`, `Ctrl+X`

Recarregar:
```bash
source ~/.bashrc
```

### Windows

1. Tecla Windows + "env"
2. "Editar variáveis de ambiente"
3. Nova variável
   - Nome: `OPENAI_API_KEY`
   - Valor: `sk-...`
4. OK
5. Reabrir terminal

---

## 🧪 Testar Configuração

No VS Code:

```
Ctrl+Shift+P
Digitar: CLAW Agent: Status
Enter
```

Deve aparecer painel mostrando:
- ✅ IA Provider: OpenAI (ou qual você configurou)
- ✅ API Key: ✅ Configurada
- ✅ Versão: 1.0.2
- ✅ Status: 🟢 Pronto

---

## 💡 Exemplos de Uso

### Exemplo 1: Analisar Bug

```python
def calcula(lista):
    return lista[10]  # ⚠️ Erro se lista tem menos de 11 itens
```

**Ação:** 🔍 Analisar Código

**Resultado:**
```
⚠️ IndexError potencial - lista pode ter menos de 10 itens
✅ Solução: Adicionar verificação de tamanho
```

### Exemplo 2: Melhorar Performance

```python
resultado = []
for i in range(len(lista)):
    resultado.append(lista[i] * 2)
```

**Ação:** ✨ Melhorar Código

**Resultado:**
```python
resultado = [x * 2 for x in lista]  # 3x mais rápido!
```

### Exemplo 3: Gerar Testes

```python
def saudacao(nome):
    return f"Olá, {nome}!"
```

**Ação:** 🧪 Criar Testes

**Resultado:**
```python
def test_saudacao():
    assert saudacao("João") == "Olá, João!"
    assert saudacao("") == "Olá, !"
    assert saudacao(None) raises TypeError
```

---

## 🐛 Problemas Comuns

### "Provider não encontrado"

❌ Problema: Variável não foi configurada corretamente

✅ Solução:
```bash
# Verificar se variável está definida:
echo $OPENAI_API_KEY

# Se vazio, configurar:
export OPENAI_API_KEY="sk-seu-chave-completa-aqui"

# Testar:
# Ctrl+Shift+P → CLAW Agent: Status
```

### "Timeout esperando resposta"

❌ Problema: IA demorando muito

✅ Solução:
- Verificar internet
- Tentar código menor primeiro
- Usar Ollama (local) se possível
- Tentar outro provider

### "API Key inválida"

❌ Problema: Chave incorreta ou expirada

✅ Solução:
- Ir até console do provider
- Gerar nova chave
- Reconfigurar:
  ```bash
  export OPENAI_API_KEY="sk-nova-chave"
  ```

---

## 📚 Próximos Passos

1. ✅ Configurar IA (acima)
2. ✅ Testar com `CLAW Agent: Status`
3. ✅ Tentar cada um dos 6 comandos
4. ✅ Ler [README.md](README.md) completo
5. ✅ Usar em seus projetos!

---

## 🔗 Links Úteis

- **README Completo**: [README.md](README.md)
- **GitHub**: https://github.com/claw-agent/vscode-extension
- **Issues**: https://github.com/claw-agent/vscode-extension/issues
- **Email**: rafaelbatistadev@outlook.com.br

---

**Pronto! Enjoy! 🚀**