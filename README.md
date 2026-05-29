# Sistema de Orçamentos - Hydra Piscinas

Sistema web desenvolvido para gerenciamento e criação de orçamentos internos em uma empresa do ramo de piscinas.

⚠️ Observação: Os produtos e valores são fictícios ou ajustados para uso interno e demonstração.

---

# 📌 Sobre o projeto

Este sistema foi desenvolvido para substituir o processo manual de criação de orçamentos feito via calculadora e WhatsApp.

Antes, os orçamentos eram feitos manualmente, gerando:

* erros de cálculo
* perda de tempo
* falta de padronização
* demora no atendimento

Com este sistema, o processo se tornou automatizado, centralizado e acessível pela rede interna da empresa.

Hoje o sistema é utilizado diariamente no ambiente interno da loja para geração rápida de orçamentos e controle de produtos.

---

# 🚀 Funcionalidades

* Cadastro e seleção de produtos
* Controle de quantidades
* Cálculo automático de valores
* Aplicação de descontos
* Busca inteligente de produtos
* Geração de orçamento em texto
* Geração de orçamento em PDF
* Interface organizada por categorias
* Controle de estoque
* Sistema responsivo para celular e tablet
* Sistema rodando em rede local (LAN)
* Banco de dados local com SQLite

---

# 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* Node.js
* Express
* SQLite

---

# 🌐 Acesso em rede local

O sistema foi adaptado para funcionar em múltiplos dispositivos através da rede local da empresa.

Exemplo:

http://IP-DO-SERVIDOR:3000

Isso permite acesso simultâneo por computadores e celulares conectados na mesma rede.

---

# 📱 Responsividade

O sistema possui adaptação para:

* computadores
* notebooks
* tablets
* celulares

A interface foi ajustada para melhorar a experiência mobile no ambiente da loja.

---

# 📂 Estrutura do projeto

backend/
├── server.js
├── database.db

css/
├── style.css
├── estoque.css

js/
├── script.js
├── estoque.js

img/
├── logo.jpg

index.html
estoque.html

---

# ⚙️ Como executar o projeto

## Instalar dependências

```bash
npm install
```

## Iniciar servidor

```bash
node backend/server.js
```

---

# 🔮 Melhorias futuras

* Login de usuários
* Controle de permissões
* Histórico de orçamentos
* Dashboard de vendas
* Backup automático
* Integração com WhatsApp
* Relatórios financeiros

---

# 📌 Status do projeto

✅ Em uso interno diário na empresa.
