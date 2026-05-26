# 🎨 E-Commerce - UI Evolution com PrimeVue & Tailwind CSS

Este repositório contém a evolução da interface do e-commerce, migrando o HTML puro e a estilização nativa para uma interface moderna, responsiva e de alta fidelidade utilizando **PrimeVue** (componentes de UI) e **Tailwind CSS** (framework utilitário).

---

## 🛠️ O que foi desenvolvido

### 📂 Etapa 1: Configuração do Ambiente
* Integração do plugin **PrimeVue** com a aplicação no `main.ts` utilizando um preset de tema unificado.
* Configuração do **Tailwind CSS** (`tailwind.config.js`) e injeção das diretivas globais para gerenciamento de design tokens.

### 🖼️ Etapa 2: Refatoração do `ProductCard.vue`
* Substituição das tags estruturais comuns pelo componente `<Card>` do PrimeVue.
* Migração do botão de ação para o componente `<Button>`.
* Estilização visual fluida usando classes utilitárias do Tailwind (sombras, espaçamentos, transições e bordas arredondadas).

### 🏗️ Etapa 3: Layout Responsivo (`App.vue`)
* Estruturação da vitrine através do sistema de **Grid do Tailwind**, garantindo adaptabilidade para dispositivos móveis, tablets e telas grandes (`grid-cols-1 md:grid-cols-3 lg:grid-cols-4`).

### 🛒 Etapa 4 & 🔥 Desafio: Carrinho Avançado & UX Premium
* **Componentes de Dados:** Substituição da lista simples por uma visualização avançada com controle de layout.
* **Controle de Quantidade:** Integração do `<InputNumber>` com botões de incremento e decremento integrados, amarrados à reatividade do Vue.
* **Empty State:** Tratamento visual elegante para indicar carrinho vazio.
* **Modais de Confirmação:** Implementação do `<ConfirmDialog>` para validação de segurança antes de ações destrutivas (como esvaziar o carrinho).

---

## ✅ Critérios de Sucesso Atendidos

* **Ecossistema PrimeVue:** Uso consistente de componentes nativos (Card, Button, InputNumber, ConfirmDialog) para uma experiência de usuário padronizada.
* **Estilização Utilitária:** Interface construída sem folhas de estilo personalizadas (`<style>` isolados), utilizando exclusivamente classes utilitárias do Tailwind.
* **Persistência da Lógica:** Manutenção integral das regras de negócio desenvolvidas via **Options API** e das tipagens estritas em **TypeScript**.