# 🚀 Residência em TIC-12 — Full Stack Development (UFC/UECE)

Este repositório centraliza os projetos, laboratórios e atividades práticas desenvolvidos durante a minha participação na **Residência em TIC-12**, promovida pela **Universidade Federal do Ceará (UFC)** em parceria com a **Universidade Estadual do Ceará (UECE)**. 

O foco do programa é a capacitação avançada em engenharia de software full stack, cobrindo de forma integrada o design de bancos de dados relacionais, o desenvolvimento de APIs seguras e robustas no Back-End e a construção de interfaces modernas, performáticas, validadas e protegidas no Front-End.

---

## 🛠️ Tecnologias e Ecossistema Aprendido

Durante os módulos da residência, consolidei competências práticas de engenharia de software utilizando o seguinte ecossistema tecnológico:

* **Bancos de Dados & Engenharia:** Teoria Relacional, Formas Normais (1FN, 2FN, 3FN), Mapeamento de Regras de Negócio e Modelagem de Dados.
* **Linguagem Base:** TypeScript (Tipagem estrita, contratos por interfaces, simulação de dados em memória e desenvolvimento sob o paradigma POO, erradicando o uso de `any`).
* **Back-End:** Node.js, Express, Roteamento REST, Arquitetura em Camadas (Entities, Repositories, Services, Controllers, DTOs), Autenticação JWT, Validação de Schemas com **Zod** e Middlewares customizados.
* **Front-End:** Vue.js 3 (Options API, Composition API, Reatividade Avançada, Componentização, Props e Custom Events).
* **Gerenciamento de Estado:** **Pinia** (Estado centralizado, Actions, Getters e persistência automática via localStorage).
* **Roteamento e Segurança:** Vue Router (Rotas dinâmicas, Nested Routes, Route Guards e RBAC - Controle de Acesso Baseado em Funções).
* **Validação de Formulários:** **Vuelidate** (Validação reativa, tratamento de estados de erro e feedback em tempo de execução).
* **UI/UX & Design Systems:** Tailwind CSS (Grid System, Responsividade, Design Tokens) e PrimeVue (Componentes avançados, DataTables, Toasts, ConfirmDialogs).

---

## 📁 Estrutura dos Projetos & Aprendizados

O repositório está estruturado em subpastas que refletem a evolução incremental e o amadurecimento arquitetural das aplicações desenvolvidas:

### 1. Modelagem Arquitetural, Banco de Dados & Normalização (1FN, 2FN, 3FN)
Estudo focado em garantir a integridade dos dados, mitigar anomalias de escrita e otimizar a consistência de sistemas de software através da normalização.
* **Principais Aprendizados:** Diagnóstico e quebra de dependências funcionais nas três primeiras Formas Normais (1FN, 2FN e 3FN), eliminando atributos multivalorados, dependências parciais e dependências transitivas.
* **Diferenciais:** Criação de *mocks* relacionais estruturados em TypeScript (`src/mocks/normalizacao_dados.ts`) e defesa do uso de campos calculados dinamicamente para evitar redundâncias e desatualizações.

### 2. Programação Orientada a Objetos & Tipagem Avançada
Estruturação do núcleo de regras de negócio da aplicação utilizando os pilares da POO e recursos estritos do TypeScript.
* **Principais Aprendizados:** Modelagem rica de classes (`Product`, `Category`, `User`); uso de interfaces para contratos de dados; segurança em tempo de compilação com *Literal Types* para restrição de perfis de acesso (`"ADMIN"` ou `"CUSTOMER"`).
* **Diferenciais (Lógica do Carrinho):** Implementação da classe `Cart` utilizando *High-Order Functions* (`.some()`, `.reduce()`) para processar e acumular dados de forma puramente declarativa e livre de laços imperativos.

### 3. Back-End: Roteamento REST Básico com Express e TypeScript
Implementação inicial de um servidor HTTP com foco em padrões arquiteturais REST e robustez de código.
* **Principais Aprendizados:** Manipulação de parâmetros de requisição (`Params`, `Query String`, `Body`); isolamento de escopos e modularização com `express.Router()`.
* **Diferenciais:** Criação de Middlewares customizados para logs de requisições (`Logger`) e validação de payloads; uso estrito das tipagens nativas do Express (`Request`, `Response`, `NextFunction`).

### 4. Back-End: Estruturação, Controladores e Validação com Zod
Evolução da API para garantir o desacoplamento de código e a blindagem de dados de entrada através de uma camada de validação especializada.
* **Principais Aprendizados:** Divisão lógica de responsabilidades entre Rotas (direcionamento), Controllers (lógica de HTTP e entrega) e Schemas (regras de validação).
* **Diferenciais:** * **Middleware de Validação Genérico (`validateData.ts`):** Interceptador dinâmico que valida e sanitiza payloads contra schemas do Zod antes de atingir os controladores, retornando automaticamente `400 Bad Request` em caso de divergência.
    * **Controllers Limpos:** Eliminação de checagens manuais de tipo (`if/else`), delegando o fluxo para o método `.safeParse()` do Zod e validando UUIDs autênticos em tempo de execução.

### 5. Back-End Avançado: API REST, Arquitetura em Camadas & Segurança (JWT, RBAC)
Evolução da API para um sistema de nível de produção, adotando uma arquitetura desacoplada e padrões rígidos de segurança.
* **Principais Aprendizados:** Implementação da arquitetura completa em camadas (**Entities, Repositories, Services, Controllers** e **DTOs**) com inversão/injeção de dependências e paginação estruturada (`LIMIT` e `OFFSET`).
* **Diferenciais:** Fluxo completo de autenticação via **Token JWT** e autorização por papéis (*Role-Based Access Control - RBAC*), mantendo rotas de consulta públicas e rotas de escrita restritas a administradores, além de tratamento global de exceções via `errorMiddleware`.

### 6. Front-End Core: Integração com Vue.js 3 (Options API) & TypeScript
Transição da lógica de negócios do e-commerce de scripts isolados para uma SPA (*Single Page Application*) interativa no navegador.
* **Principais Aprendizados:** Domínio do ciclo de vida e estrutura do Vue (Options API); comunicação eficiente entre componentes através de propriedades (`Props`) fortementes tipadas e emissão de eventos personalizados (`$emit`).
* **Diferenciais:** Integração de uma **Model Rica** (classe de negócio `Cart`) diretamente no estado reativo do Vue, mantendo a camada de visualização limpa e focada apenas na renderização da UI.

### 7. UI Evolution: Design Moderno com PrimeVue & Tailwind CSS
Evolução visual completa da interface, migrando de elementos nativos do HTML para uma aplicação com design premium, fluido e responsivo.
* **Principais Aprendizados:** Configuração de temas e presets com PrimeVue; componentização avançada com `<Card>`, `<InputNumber>` e tratamento elegante de estados vazios (*Empty States*).
* **Diferenciais:** Estilização 100% utilitária com Tailwind CSS, eliminando folhas de estilo personalizadas (`<style>`); uso de modais de confirmação (`ConfirmDialog`) para mitigar ações destrutivas acidentais.

### 8. Arquitetura Avançada Front-End: Rotas, Layouts Dinâmicos & Guards de Segurança
Transformação da interface do e-commerce em um ecossistema completo com múltiplos fluxos de navegação e barreiras de segurança programáticas no lado do cliente.
* **Principais Aprendizados:** Mapeamento de rotas e sub-rotas aninhadas (*Nested Routes*) via Vue Router; separação total de contextos visuais por meio de layouts diferenciados (Visualização do Consumidor vs. Dashboard do Administrador).
* **Diferenciais:** Implementação de travas de segurança globais (`beforeEach`): `Guard de Checkout` (bloqueio para usuários anônimos) e `Guard de Role (RBAC)` (inspeção de metatags para proteção da área administrativa).

### 9. Front-End Avançado: Gerenciamento de Estado Global (Pinia), Validação (Vuelidate) e UX
Implementação de um sistema de autenticação robusto no ecossistema do Vue 3 utilizando a **Composition API** e as melhores práticas de gerenciamento de estado e experiência do usuário.
* **Principais Aprendizados:** Criação de stores globais com o **Pinia** (`authStore`) para centralizar dados do usuário e tokens de autenticação; validação reativa e síncrona de formulários com o **Vuelidate** (validações de e-mail, tamanho de senha e igualdade de campos).
* **Diferenciais:**
    * **Persistência e UX Inteligente:** Persistência automática do estado de login no `localStorage` e uso de Navigation Guards para redirecionamento inteligente (retornando o usuário para a página que ele tentou acessar antes de ser interceptado pelo login).
    * **Feedback Visual Premium:** Injeção de alertas dinâmicos globais com o componente `<Toast>`, loadings reativos em botões e tratamento visual de campos inválidos.

---

## 🚀 Principais Conquistas e Critérios Atendidos

* **Separação de Conceitos (SoC) Rigorosa:** Arquiteturas limpas e desacopladas em camadas lógicas específicas tanto no servidor (Rotas, Schemas, Controllers, Services e Repositories) quanto no cliente (Views, Stores, Components, Layouts e Roteadores).
* **Sanitização e Validação Estrita:** Blindagem absoluta contra payloads corrompidos ou malformatados usando o Zod no Back-End, e validação reativa com Vuelidate no Front-End para mitigar erros antes do envio dos dados.
* **Segurança Simétrica (Ponta a Ponta):** Autenticação e autorização por níveis de acesso (RBAC) implementadas de forma simétrica: rotas de API protegidas por JWT no servidor e rotas de tela blindadas por Route Guards no Vue Router.
* **Estado Centralizado e Reatividade Fluida:** Gerenciamento científico do estado da aplicação utilizando o Pinia para fluxos globais (como autenticação) e mantendo a reatividade local do Vue para a renderização da interface e manipulação de models ricas.
* **Design Premium e Responsivo:** Interfaces de alta fidelidade visual construídas de forma totalmente responsiva com o poder utilitário do Tailwind CSS e componentes avançados do PrimeVue.
* **Código Altamente Tipado:** Ecossistema TypeScript ponta a ponta, erradicando o uso de tipos genéricos e inseguros como `any` e garantindo alta manutenibilidade, previsibilidade e documentação implícita do software.
