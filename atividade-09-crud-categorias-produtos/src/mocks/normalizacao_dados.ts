
// --- FIGURA 1: MATRÍCULAS  ---
export const alunos = [
  { id: 1, nome: "Ana Lima" },
  { id: 2, nome: "Pedro Souza" }
];

export const disciplinas = [
  { id: 101, nome: "Cálculo", professor: "João" },
  { id: 102, nome: "Física", professor: "Sara" },
  { id: 103, nome: "Programação", professor: "Carlos" },
  { id: 104, nome: "Química", professor: "Marta" }
];

// Tabela intermediária para resolver a relação N:N entre alunos e disciplinas
export const matriculas = [
  { aluno_id: 1, disciplina_id: 101 },
  { aluno_id: 1, disciplina_id: 102 },
  { aluno_id: 1, disciplina_id: 103 },
  { aluno_id: 2, disciplina_id: 101 },
  { aluno_id: 2, disciplina_id: 104 }
];

// --- FIGURA 2: VENDAS  ---
export const departamentos = [
  { id: 1, nome: "Eletrônicos", gerente: "Marcos" },
  { id: 2, nome: "Roupas", gerente: "Fernanda" }
];

export const vendas = [
  { venda_id: 101, vendedor_id: 5, depto_id: 1, valor: 1200 },
  { venda_id: 102, vendedor_id: 5, depto_id: 1, valor: 850 },
  { venda_id: 103, vendedor_id: 8, depto_id: 2, valor: 300 }
];

// --- FIGURA 3: RESTAURANTE ---
export const garcons = [
  { id: 1, nome: "Lucas", turno: "Noite" }
];

export const pedidos = [
  { pedido_id: 1, mesa: 5, garcom_id: 1 },
  { pedido_id: 2, mesa: 3, garcom_id: 1 }
];

export const itensPedido = [
  { pedido_id: 1, item: "Pizza", preco: 50.00 },
  { pedido_id: 1, item: "Suco", preco: 10.00 },
  { pedido_id: 1, item: "Sorvete", preco: 12.00 },
];

// --- FIGURA 4: BIBLIOTECA  ---
export const livros = [
  { id: 427, titulo: "Clean Code", isbn: "978-0132" },
  { id: 557, titulo: "DDD", isbn: "978-0321" }
];

export const usuarios = [
  { id: 7, email: "ana@email.com" }
];

export const emprestimos = [
  { livro_id: 427, usuario_id: 7, data: "2024-01-10" },
  { livro_id: 557, usuario_id: 7, data: "2024-03-01" }
];