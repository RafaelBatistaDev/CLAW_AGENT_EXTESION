# 🚀 COMPILAR E PUBLICAR - GUIA RÁPIDO

> **TL;DR** - 5 minutos para compilar

## ⚡ Agora!

### Passo 1: Terminal

```bash
cd /home/recifecrypto/Documentos/CLAW_VSCode_Extension
```

### Passo 2: Compilar

```bash
bash build.sh
```

### Resultado

✅ Arquivo: `claw-agent-1.0.2.vsix`  
✅ Localização: Mesma pasta  
✅ Tamanho: 500 KB - 1 MB  
✅ Pronto para publicar!

---

## 🎯 Os 3 Comandos Simples

```bash
npm install
npm run compile
vsce package
```

**Pronto!** Arquivo gerado. ✅

---

## 📦 Seu Arquivo

```
claw-agent-1.0.2.vsix
```

---

## 🌐 Publicar (Marketplace)

### Primeira Vez (Setup)
```bash
npm install -g vsce
vsce create-publisher RafaelBatista
```

### Publicar
```bash
vsce publish -p <seu-token>
```

✅ Publicado em 10-15 min

---

## 🐛 Problemas?

| Obra | Solução |
|-----|---------|
| "npm: not found" | Instale Node.js |
| Arquivo pequeno | Execute: `npm run compile` |
| Permissão | `chmod +x build.sh` |

---

## ✅ Próximos Passos

1. ✅ Executar `bash build.sh`
2. ✅ Aguardar 5 minutos
3. ✅ Arquivo `claw-agent-1.0.2.vsix` pronto
4. ✅ Publicar ou compartilhar

---

**Pronto! Agora é só clicar e compilar.** 🚀
