Projeto myContacts 2.0

- Este projeto se trata de uma refatoração do frontend do projeto desenvolvido no curso do Jstack.
- A refatoração consiste em:
- Migraçao para o vitest.
- Aplicaçäo de design pattern para separar a parte lógica dos componentes em custom hooks, composição e generalização de componentes.
- Uso do Vitest juntamente com MSW para criação de testes e coverage.
- Toggle theme com abordagem diferente usando o CustomEventManager já criado.
- Abstração da parte de validações de formulários para se tornar reutilizatável e ficar mais próximo de libs que temos hoje, como Zod etc.

- Api está conteinerizada, basta entrar na pasta server e digitar docker compose up, depois basta rodar o schema dentro de database/schema.sql e inserir as categorias para teste.
