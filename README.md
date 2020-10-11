### Este é o repositório de BackEnd do CooperaFavela
### Aqui você irá encontrar um detalhamento de como funciona nossa estruturação e regra de negócios, tal como o consumo de APIs  
  
Utilizamos tecnologias simples para a obtenção e manipulação dos dados, de forma a garantir a segurança na autenticação e proteção do cliente, tal como evitar overengineering, facilitando o desenvolvimento. :computer:

**Pré-Requisitos**

Para testar nossa API, você deve ter instalado em sua máquina:

- [Node](https://nodejs.org/en/download/)
- [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- [Yarn](https://yarnpkg.com/) (Recomendado)
  
**Passo-a-passo:**  
  
Clone o repositório em sua pasta de preferência e acesse a pasta do repositório de backend através da linha de comando. Com a devida estrutura instalada em sua máquina, você deverá executar a seguinte sequência de comandos:  
Para instalar as dependências:  
  
    $ yarn  
  
Agora, precisaremos montar a imagem do nosso container, da seguinte forma:
  
    $ docker-compose up  
  
Antes de começar a desenvolver, devemos montar nossa estrutura do banco de dados, para isso, faremos algo chamado migrations, utilizando o seguinte comando:  
  
    $ yarn mrun  
  
Por último, podemos agora executar nosso servidor em ambiente de desenvolvimento:  
  
    $ yarn dev:run  
  
**Mãos à obra!** :muscle: