#!/bin/bash

# 🤖 CLAW AGENT v1.0.2 - Build Script
# Compila a extensão VS Code

set -e

echo "═══════════════════════════════════════════════════════════"
echo "🔨 CLAW AGENT v1.0.2 - Build Script"
echo "═══════════════════════════════════════════════════════════"
echo ""

# 1. Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado"
    echo "   Instale de: https://nodejs.org/"
    exit 1
fi
echo "✅ Node.js: $(node --version)"

# 2. Verificar npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado"
    exit 1
fi
echo "✅ npm: $(npm --version)"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📥 Passo 1: Instalar Dependências"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

npm install
echo "✅ Dependências instaladas"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔨 Passo 2: Compilar TypeScript"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

npm run compile
echo "✅ TypeScript compilado"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📦 Passo 3: Gerar Arquivo VSIX"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Instalar vsce se não tiver
if ! command -v vsce &> /dev/null; then
    echo "📥 Instalando vsce..."
    npm install -g vsce
fi

echo "⏳ Criando pacote VSIX..."
vsce package

VSIX_FILE=$(ls -t claw-agent-*.vsix | head -1)
VSIX_SIZE=$(du -h "$VSIX_FILE" | cut -f1)

echo "✅ VSIX criado: $VSIX_FILE ($VSIX_SIZE)"

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "✅ BUILD CONCLUÍDO!"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "📝 Próximos Passos:"
echo ""
echo "  1. Instalar localmente (test):"
echo "     code --install-extension $VSIX_FILE"
echo ""
echo "  2. Publicar no Marketplace:"
echo "     vsce publish -p <seu-token>"
echo ""
echo "═══════════════════════════════════════════════════════════"
