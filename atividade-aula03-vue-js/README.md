# 🍏 E-Commerce - Front-End com Vue.js (Options API) & TypeScript

Este repositório contém a implementação da interface do e-commerce, integrando as regras de negócio e models anteriores diretamente no navegador utilizando o ecossistema do **Vue.js 3** com **Options API**.

---

## 🛠️ O que foi desenvolvido

### 📂 Etapa 1: Preparação das Models
* Organização e exportação das estruturas tipadas em arquivos separados (`Product.ts`, `Category.ts`, `CartItem.ts`).

### 🖼️ Etapa 2: Componentização (`ProductCard.vue`)
* Criação de um componente isolado para renderização do produto.
* Uso de **Props** fortemente tipadas para receber o objeto `Product`.
* Emissão de eventos personalizados (`$emit`) ao componente pai para gerenciar a ação de clique do botão "Adicionar".

### 🏗️ Etapa 3: Integração e Reatividade (`App.vue`)
* Uso da estrutura **Options API** (`data`, `methods`, `props`).
* Renderização dinâmica da vitrine de produtos através da diretiva `v-for`.
* Implementação do método `addToCart(product)` controlando o estado reativo do carrinho.

### 🛒 Etapa 4 & 🔥 Desafio: Resumo do Carrinho & Model Rica
* **Vitrine Dinâmica:** Exibição em tempo real do total de unidades e do valor final da compra.
* **Arquitetura Pro:** Instanciação da classe de negócio `Cart` diretamente no estado do Vue (`data()`), mantendo o componente visual limpo de regras de negócio e delegando a lógica para a model rica.
* **Listagem Detalhada:** Renderização de uma lista auxiliar exibindo os itens contidos no carrinho, suas respectivas quantidades e opções de remoção.

---

## ✅ Critérios de Sucesso Atendidos

* **Options API Estruturada:** Divisão limpa de responsabilidades entre propriedades e métodos do framework.
* **Componentização Obrigatória:** Interface modularizada com comunicação via props e eventos.
* **TypeScript Estrito:** Todo o fluxo de dados do ecossistema Vue foi tipado sem a utilização de `any`.
* **Reatividade:** Sincronização imediata entre as ações da model e a renderização do HTML no navegador.