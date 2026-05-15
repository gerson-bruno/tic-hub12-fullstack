# 🚀 Sistema de Autenticação Segura

Este projeto é uma aplicação Vue 3 desenvolvida para a atividade prática de Gerenciamento de Estado e Validação. A aplicação implementa um fluxo completo de autenticação utilizando **Pinia**, **Vuelidate** e **PrimeVue**.

## 🛠️ Tecnologias Utilizadas

*   **Vue 3** (Composition API)
*   **Vite** (Build tool)
*   **Pinia** (Gerenciamento de estado global)
*   **PrimeVue** (Biblioteca de componentes UI)
*   **Tailwind CSS** (Estilização e layout)
*   **Vuelidate** (Validação de formulários reativa)
*   **Vue Router** (Navegação e proteção de rotas)

## ⚙️ Funcionalidades e Melhorias

1.  **Estado Centralizado:** Uso da `authStore` (Pinia) para gerenciar o usuário, token e status de autenticação, com persistência automática via `localStorage`.
2.  **Validação Estrita:** Implementação de regras rigorosas com Vuelidate (e-mail válido, senha mínima de 6 caracteres e validação de confirmação de senha).
3.  **Jornada do Usuário (Fluxo):** 
    *   Implementação de *Navigation Guards* (Router).
    *   Redirecionamento inteligente: após o login, o usuário retorna automaticamente para a página que tentou acessar anteriormente.
4.  **Feedback Visual (UX):**
    *   Uso de componentes `<Toast>` para notificações de sucesso e erro.
    *   Feedback de `loading` reativo nos botões de submissão.
    *   Tratamento de erros com bordas e textos em destaque para campos inválidos.
5.  **Refatoração:** Código organizado em diretórios lógicos (`views`, `stores`, `router`) para maior legibilidade e manutenção.

## 🔑 Credenciais para Teste (Login)

*   **E-mail:** `teste@email.com`
*   **Senha:** `123456`

