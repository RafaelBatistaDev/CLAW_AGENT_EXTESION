import os
import subprocess
import re

def run():
    # Detecta o nome da pasta e remove espaços/especiais para o nome do container
    raw_folder = os.path.basename(os.getcwd())
    safe_name = re.sub(r'[^a-zA-Z0-9]', '-', raw_folder).lower()
    name = f"compiler-{safe_name}"

    # 1. Verifica se o container já existe
    check_container = subprocess.run(f"distrobox ls | grep {name}", shell=True, capture_output=True)

    if check_container.returncode != 0:
        print(f"📦 Primeira vez: Criando ambiente '{name}'...")
        # Usando --yes e limpando o nome para evitar erro de flag
        setup_cmd = "apt-get update && apt-get install -y git && npm install -g @vscode/vsce ovsx"
        create_cmd = f"distrobox create --name {name} --image node:22-bookworm-slim --yes --pre-init-hooks \"{setup_cmd}\""
        subprocess.run(create_cmd, shell=True)
    else:
        print(f"🚀 Ambiente '{name}' detectado! Pulando para a compilação...")

    # 2. Comando de compilação
    # Usamos -n para garantir que o distrobox enter identifique o nome corretamente
    build_cmd = "npm install && vsce package"

    print("🔨 Compilando projeto e gerando novo VSIX...")
    subprocess.run(f"distrobox enter --name {name} -- sh -c '{build_cmd}'", shell=True)

    print(f"\n✅ Concluído! O arquivo .vsix atualizado está na pasta do projeto.")

if __name__ == '__main__':
    run()
