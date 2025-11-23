# 🎓 Portfólio de Atividades Acadêmicas (EGJJ)

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Tipo%20de%20Projeto-Acad%C3%AAmico-blue.svg" alt="Tipo de Projeto">
</p>

## 📚 Visão Geral do Projeto

Este repositório serve como um **Portfólio de Atividades Acadêmicas**, reunindo diversos projetos e exercícios desenvolvidos em grupo para a disciplina de **Programação Web** (ou similar) da **UNIPAR**. O objetivo principal foi consolidar o aprendizado em lógica de programação e desenvolvimento front-end, utilizando as tecnologias base da web.

O projeto principal funciona como um **Launcher** ou **Hub de Atividades**, onde o usuário realiza um *login* simples (apenas validação de formato) e é direcionado a uma página inicial que lista e permite a execução de todas as atividades desenvolvidas em *iframes*.

## 👥 Equipe de Desenvolvimento

Este projeto foi resultado de um esforço colaborativo.

| Membro da Equipe | Função Principal |
| :--- | :--- |
| **João Bartko** | Desenvolvimento Front-end e Integração |
| *Outros Membros* | *A ser preenchido pelo usuário* |

## ✨ Atividades e Funcionalidades

O portfólio é composto por uma coleção de **20 mini-aplicações** que demonstram o domínio de diferentes conceitos de JavaScript, HTML e CSS.

| Categoria | Atividade | Descrição |
| :--- | :--- | :--- |
| **Cálculos** | Calculadora de IMC | Calcula o Índice de Massa Corporal. |
| | Calculadora de Média | Calcula a média de notas com avaliação. |
| | Conversor de Temperatura | Converte valores entre Celsius, Fahrenheit e Kelvin. |
| | Verificador de Números Primos | Verifica se um número é primo. |
| **Jogos/Lógica** | Jogo da Velha | Implementação do clássico jogo da velha. |
| | Jogo da Memória | Jogo de cartas para exercitar a memória. |
| | Jogo de Adivinhação | Jogo simples de adivinhação de números. |
| | Quizz | Aplicação de perguntas e respostas. |
| **Utilitários** | Contador Regressivo (Timer) | Temporizador simples. |
| | Cronômetro | Medição de tempo. |
| | Editor de Texto Simples | Funcionalidade básica de edição de texto. |
| | Galeria de Imagens com Filtro | Exibição de imagens com opções de filtragem. |
| | Lista de Compras | Aplicação de lista de tarefas/compras. |
| | Simulador de Caixa Eletrônico | Simulação de operações bancárias básicas. |
| | Sorteador de Nomes | Ferramenta para sorteio aleatório de nomes. |
| | Tabuada Interativa | Ferramenta para prática de tabuada. |
| | To-do List | Lista de tarefas pendentes. |
| **Validação** | Validador de CPF (simples) | Validação básica de formato de CPF. |
| | Validador de Senha | Verificação de requisitos de segurança de senha. |
| | Controle de Visibilidade | Exemplo de manipulação de visibilidade de elementos. |

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estrutura de todas as páginas e atividades.
*   **CSS3:** Estilização e layout, incluindo o design da tela de login e do hub.
*   **JavaScript:** Lógica de programação e interatividade para todas as mini-aplicações.

## 📂 Estrutura do Repositório

O projeto é organizado em um diretório principal que contém o *launcher* e um diretório `Apps` que armazena cada atividade separadamente.

```
port-egjj/
├── Apps/
│   ├── Calculadora de IMC/
│   ├── CRONÔMETRO/
│   ├── JOGO DE MEMORIA/
│   └── ... (Demais 17 atividades)
├── assets/             # Imagens e logos (astronauta, fundo, logo-unipar)
├── PaginaInicial/      # Hub de acesso às atividades
├── scripts/            # Script do launcher
├── styles/             # Estilos do launcher
└── index.html          # Tela de Login (Ponto de entrada)
```

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/jvbartk0/port-egjj.git
    cd port-egjj
    ```

2.  **Abra o Ponto de Entrada:**
    Abra o arquivo `index.html` na raiz do projeto em seu navegador.

3.  **Navegação:**
    *   Preencha o nome e RA na tela de login (a validação é simples, apenas de formato).
    *   Você será redirecionado para a **Página Inicial**, onde poderá selecionar qualquer uma das atividades listadas na barra lateral para executá-la no *iframe* central.

---
*Este projeto é um trabalho acadêmico e foi desenvolvido para fins de avaliação e aprendizado.*
