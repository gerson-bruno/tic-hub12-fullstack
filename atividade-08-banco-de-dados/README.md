# Atividade Prática: Normalização de Dados e Arquitetura de Software 📊

Repositório dedicado à resolução prática e teórica sobre as Formas Normais (1FN, 2FN e 3FN), visando garantir a integridade dos dados e mitigar anomalias em sistemas de software.

---

## 📁 Estrutura de Documentação e Mocks do Projeto
- `docs/ATIVIDADE_08.md`: Diagnósticos completos, respostas das tarefas conceituais e mapeamento das regras de negócio.
- `src/mocks/normalizacao_dados.ts`: Estruturas de dados em TypeScript normalizadas e populadas para simulação do banco de dados em memória.

---

## 🟢 Bloco 1 — Fundamentos de Normalização

### 1. Tabela de Matrículas (Diagnóstico 1FN)
* **Tarefa A (Violação):** Violação da **1FN (Atomicidade)** devido a atributos multivalorados em uma mesma célula.
* **Tarefa B (Atomicidade):** Um atributo é atômico quando representa um valor único e indivisível. O modelo falha por listar disciplinas e professores concatenados por vírgula.
* **Tarefa C (Resolução):** Após a normalização e a separação dos dados multivalorados, a aluna Ana Lima terá exatamente **3 linhas** correspondentes às suas disciplinas. Mapeado no mock via relação `N:N` (`alunos`, `disciplinas` e `matriculas`).

### 2. Tabela de Vendas (Diagnóstico 3FN)
* **Tarefa A (Dependências):** Cadeia transitiva identificada: `venda_id` -> `departamento` -> `gerente_depto`.
* **Tarefa B (Anomalia):** Alterar um gerente exigiria um update massivo no histórico de vendas passadas, gerando inconsistência de dados.
* **Tarefa C (Modelagem Relacional):** Separado nos arrays `departamentos` e `vendas`.

---

## 🟡 Bloco 2 — Normalização em Cadeia

### 3. Sistema de Restaurante (1FN → 2FN → 3FN)
* **Fluxo de Normalização:**
  1. **1FN:** Itens e subitens de pedidos desmembrados individualmente por linha.
  2. **2FN:** Criação do modelo `pedidos` contendo Mesa e Garçom, eliminando a dependência parcial do item.
  3. **3FN:** Criação do modelo `garcons` associado ao Turno, eliminando dependências transitivas. Separado nos mocks em `garcons`, `pedidos` e `itensPedido`.
* **Desafio Técnico (Campo Total):** O valor deve ser **calculado via query**. Isso assegura a integridade do banco: se o preço de um item for alterado, o cálculo do total reflete a mudança dinamicamente, sem risco de divergência.

---

## 🔴 Bloco 3 — Diagnóstico de Engenharia

### 4. Gestão de Biblioteca (Conceito de 2FN)
* **Tarefa A (Dependência Parcial):** `titulo_livro` vincula-se apenas a `livro_id` e `usuario_email` apenas a `usuario_id`, violando a 2FN por não dependerem da chave composta inteira.
* **Tarefa B (Anomalia de Inserção):** Impossibilidade de registrar um livro novo na base sem que ocorra um empréstimo simultâneo para gerar um `usuario_id`.
* **Tarefa C (Schema Final):** Refletido rigorosamente nas coleções de mock `livros`, `usuarios` e `emprestimos`.

### 5. DESAFIO MASTER: Sistema de Clínica
* **Violações Identificadas:** Campos multivalorados de procedimentos (1FN), dependência parcial do nome do paciente em relação ao CPF (2FN) e dependência transitiva da cobertura sobre o plano de saúde (3FN).
* **Estrutura Final em 3FN:**
  - **Pacientes** (`cpf`, `nome`)
  - **Planos** (`id`, `nome`, `cobertura`)
  - **Medicos** (`crm`, `nome`, `especialidade`)
  - **Consultas** (`id`, `data`, `paciente_cpf`, `medico_crm`, `plano_id`, `sala_id`)
* **Reflexão sobre Manutenção:** Se um plano de saúde alterar sua taxa de cobertura, o ajuste é feito em **apenas 1 linha** na tabela de Planos. O modelo normalizado garante facilidade de manutenção e consistência total contra atualizações parciais.