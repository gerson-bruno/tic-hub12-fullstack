# 🗺️ E-Commerce - Roteamento, Layouts Dinâmicos & Guards de Segurança

Este repositório contém a evolução da arquitetura do e-commerce, transformando a aplicação de uma única página (SPA simples) em um ecossistema com múltiplas visualizações, controle de acesso e layouts diferenciados utilizando **Vue Router**, **PrimeVue** e **Tailwind CSS**.

---

## 🛠️ O que foi desenvolvido

### 🚀 Etapa 1: Configuração do Roteador (`Vue Router`)
* Mapeamento completo de rotas da aplicação, incluindo caminhos para a vitrine (`Home`), visualização individual (`Detalhes do Produto` via rota dinâmica com ID) e fluxo de finalização (`Carrinho/Checkout`).
* Substituição de gatilhos nativos de navegação pelo componente `<Menubar>` do PrimeVue e diretivas `<router-link>` para tráfego sem recarregamento de página.

### 🖼️ Etapa 2: Layouts Diferenciados (Consumidor vs. Admin)
* **Layout do Consumidor:** Estrutura focada em UX, mantendo cabeçalho e estado do carrinho persistentes durante a navegação.
* **Layout de Admin:** Estrutura em formato de Dashboard, isolando a área de gestão com um menu lateral dedicado a operações administrativas.

### 🛡️ Etapa 3: Guards e Proteção de Acesso
* Implementação de travas de segurança globais utilizando o gancho `beforeEach` do Vue Router:
  * **Guard de Checkout:** Bloqueia o avanço para a finalização de compra caso o usuário não esteja devidamente autenticado.
  * **Guard de Role (RBAC):** Protege a área administrativa de ponta a ponta, inspecionando as metatags da rota e garantindo o acesso exclusivo para usuários com o perfil `"ADMIN"`.

### 🔥 Seção Desafio: Experiência Administrativa Premium
* **Data Management:** Renderização e gerenciamento dos produtos cadastrados através do componente `<DataTable>` do PrimeVue dentro do Dashboard.
* **Rotas Aninhadas (Nested Routes):** Organização arquitetural do ecossistema Admin por meio de sub-rotas filhas, separando de forma limpa a listagem de produtos dos relatórios estatísticos.
* **Breadcrumbs Dinâmicos:** Integração de linhas de navegação estruturadas para indicar a posição hierárquica do usuário na aplicação.

---

## ✅ Critérios de Sucesso Atendidos

* **Navegação SPA Fluida:** Transições de estado e páginas instantâneas, sem gatilhos de *refresh* de tela.
* **Segurança na Aplicação:** Rotas críticas blindadas programaticamente contra acessos indevidos por manipulação de URL.
* **Isolamento de Interfaces:** Separação visual total entre a experiência de compra do cliente e a ferramenta operacional do administrador.
* **Aderência ao Stack:** Uso integrado de componentes dinâmicos do PrimeVue e utilitários de responsividade do Tailwind CSS sob tipagem estrita do TypeScript.