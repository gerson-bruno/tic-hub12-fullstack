# 🛒 E-Commerce - POO e Tipagem Avançada

Este repositório contém a resolução da atividade prática focada em expandir o sistema de e-commerce aplicando os conceitos de **Programação Orientada a Objetos (POO)** e **Tipagem Avançada** em TypeScript.

---

## 🛠️ O que foi desenvolvido

### 📂 Etapa 1: Models Base
* Modelagem rica das classes `Product` e `Category`.
* Uso de interfaces para garantir a tipagem estrita de cada atributo.

### 👤 Etapa 2: Gerenciamento de Usuários (Roles)
* Criação da classe `User`.
* Implementação do atributo `role` utilizando **Literal Types** para restringir o acesso estritamente a `"ADMIN"` ou `"CUSTOMER"` em tempo de compilação.

### 🛒 Etapa 3 & 🔥 Desafio: Lógica do Carrinho (Cart)
Implementação da classe `Cart` utilizando **High-Order Functions (HOF)** para um código mais limpo e declarativo:
* `addItem(product, quantity)`: Utiliza `.some()` para verificar duplicidade. Se o produto já está no carrinho, apenas incrementa a quantidade sem duplicar a entrada no array.
* `getTotalItems()`: Utiliza `.reduce()` para calcular o total de unidades acumuladas no carrinho.
* `getFinalPrice()`: Utiliza `.reduce()` para calcular o valor monetário total da compra.

---

## ✅ Critérios de Sucesso Atendidos

* **Tipagem Completa:** Código 100% tipado, sem o uso de `any`.
* **Integridade da Role:** Compilador impede qualquer valor diferente de ADMIN ou CUSTOMER.
* **Lógica de Acúmulo:** Carrinho gerencia corretamente produtos repetidos.
* **Uso de HOF:** Substituição de laços imperativos por `.reduce()` e `.some()`.

