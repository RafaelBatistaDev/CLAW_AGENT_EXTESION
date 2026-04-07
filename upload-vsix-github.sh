#!/bin/bash

# 📦 Script de Upload VSIX para Release do GitHub
# Faz upload automático do VSIX compilado para a release v1.1.0

set -e

echo "════════════════════════════════════════════════════════════"
echo "📤 Fazendo Upload VSIX para Release GitHub"
echo "════════════════════════════════════════════════════════════"

# Configurações
OWNER="RafaelBatistaDev"
REPO="CLAW_AGENT_EXTESION"
TAG="v1.1.0"
VSIX_FILE="claw-agent-1.1.0.vsix"
GITHUB_TOKEN="${GITHUB_TOKEN}"

# Verificações
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ ERRO: GITHUB_TOKEN não definido"
    echo ""
    echo "📋 Para gerar um token:"
    echo "   1. Acesse: https://github.com/settings/tokens"
    echo "   2. Crie um novo token com permissão 'repo'"
    echo "   3. Copie o token"
    echo ""
    echo "🔧 Defina a variável:"
    echo "   export GITHUB_TOKEN='seu_token_aqui'"
    echo ""
    exit 1
fi

if [ ! -f "$VSIX_FILE" ]; then
    echo "❌ ERRO: Arquivo $VSIX_FILE não encontrado"
    exit 1
fi

echo "✅ Token presente"
echo "✅ Arquivo $VSIX_FILE encontrado"
echo ""

# Obter informações da release
echo "📍 Obtendo informações da release $TAG..."
RELEASE_ID=$(curl -s \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/$OWNER/$REPO/releases/tags/$TAG" | grep '"id"' | head -1 | sed 's/.*"id": \([0-9]*\).*/\1/')

if [ -z "$RELEASE_ID" ]; then
    echo "❌ ERRO: Release $TAG não encontrada no GitHub"
    echo "   Verifique se a tag existe: git tag -l"
    exit 1
fi

echo "✅ Release encontrada (ID: $RELEASE_ID)"
echo ""

# Upload do arquivo
echo "⏳ Fazendo upload de $VSIX_FILE..."
UPLOAD_URL="https://uploads.github.com/repos/$OWNER/$REPO/releases/$RELEASE_ID/assets"

HTTP_STATUS=$(curl -s -w "%{http_code}" -o /tmp/upload_response.txt \
  -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Content-Type: application/octet-stream" \
  --data-binary @"$VSIX_FILE" \
  "$UPLOAD_URL?name=$(basename $VSIX_FILE)")

if [ "$HTTP_STATUS" = "201" ]; then
    echo "✅ Upload concluído com sucesso!"
    echo ""
    echo "📊 Informações do arquivo:"
    echo "   Nome: $VSIX_FILE"
    echo "   Tamanho: $(ls -lh $VSIX_FILE | awk '{print $5}')"
    echo ""
    cat /tmp/upload_response.txt | grep -o '"browser_download_url":"[^"]*' | cut -d'"' -f4
    echo ""
    echo "✅ Arquivo disponível para download!"
else
    echo "❌ ERRO: Upload falhou (HTTP $HTTP_STATUS)"
    cat /tmp/upload_response.txt
    exit 1
fi

echo ""
echo "════════════════════════════════════════════════════════════"
echo "🎉 Pronto! VSIX disponível em:"
echo "   https://github.com/$OWNER/$REPO/releases/tag/$TAG"
echo "════════════════════════════════════════════════════════════"
