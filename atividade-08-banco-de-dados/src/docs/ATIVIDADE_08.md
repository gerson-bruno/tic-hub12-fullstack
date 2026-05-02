# Atividade 8 - Normalização de Dados e Arquitetura

## Bloco 1 - Fundamentos

### 1. Tabela de Matrículas (Figura 1)
- **Tarefa A:** Viola a **1FN (Atomicidade)**. As colunas `disciplinas` e `professores` possuem múltiplos valores em uma única célula.
- **Tarefa B:** Um atributo é atômico quando é indivisível. As colunas falham porque listam nomes separados por vírgula, dificultando buscas e filtros.
- **Tarefa C:** Ao normalizar, cada disciplina vira uma linha. A aluna Ana Lima terá **3 linhas** (Cálculo, Física e Programação).

### 2. Tabela de Vendas (Figura 2)
- **Tarefa A:** `venda_id` -> `departamento` -> `gerente_depto`. O gerente depende do departamento, que por sua vez depende da venda (Dependência Transitiva).
- **Tarefa B:** Se o gerente Marcos for substituído, será necessário atualizar todas as linhas de vendas passadas, gerando risco de inconsistência.
- **Tarefa C:** 
  - Tabela Vendedores (id, nome)
  - Tabela Departamentos (id, nome, gerente)
  - Tabela Vendas (id, vendedor_id, depto_id, valor)

## Bloco 2 - Sistema de Restaurante (Figura 3)
- **Normalização:** 
  1. **1FN:** Itens do pedido separados por linha.
  2. **2FN:** Mesa e Garçom movidos para a tabela `Pedidos` (não dependem do item).
  3. **3FN:** Turno movido para a tabela `Garçons` (depende do nome/ID do garçom).
- **Desafio (Campo Total):** O campo deve ser **calculado via query**. 
  - *Justificativa:* Evita redundância e garante a integridade. Se o preço de um item mudar, o total calculado estará sempre correto.

## Bloco 3 - Diagnóstico de Engenharia

### 4. Gestão de Biblioteca (Figura 4)
- **Tarefa A:** `titulo_livro` depende apenas de `livro_id`. `usuario_email` depende apenas de `usuario_id`. (Dependência Parcial).
- **Tarefa B:** Não é possível cadastrar um livro novo sem que ele tenha sido emprestado (pois exige um `usuario_id` na chave primária).
- **Tarefa C Schema:**
  - Livros (id, titulo, isbn)
  - Usuarios (id, email)
  - Emprestimos (livro_id, usuario_id, data)

### 5. Desafio Master - Sistema de Clínica
- **Violações:** 1FN (procedimentos multivalorados), 2FN (nome do paciente depende só do CPF) e 3FN (cobertura depende do plano).
- **Tabelas 3FN:**
  - `Pacientes` (cpf, nome)
  - `Planos` (id, nome, cobertura)
  - `Medicos` (crm, nome, especialidade)
  - `Consultas` (id, data, paciente_cpf, medico_crm, plano_id, sala_id)
- **Reflexão:** Se o plano alterar a cobertura, mexemos em **apenas 1 linha** na tabela de Planos. Vantagem: Integridade total e facilidade de manutenção.