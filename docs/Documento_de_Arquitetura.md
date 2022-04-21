# Documento de Arquitetura de Software

## Histórico de Revisão

Data|Versão|Descrição|Autor
-|-|-|-
29/01/2022|1.0|Abertura do Documento|João Victor Correia
31/01/2022|1.0.1|Adição visão lógica|João Victor Correia
15/02/2022|1.1|Mudança de tecnologia do Front-end|João Victor Correia
06/03/2022|1.2|Adição diagrama casos de uso|Iago Cabral
06/03/2022|1.2.1|Adição do tópico diagrama de pacotes e atualização da visão lógica|João Victor Correia
21/04/2022|1.3|Alteração do recurso B.i, adicionado tópicos ao diagrama de pacotes|Iago Cabral, Pedro Henrique Nogueira



## 1. Introdução

### 1.1 Finalidade

<p align = "justify"> &emsp;&emsp; O Seguinte documento tem como finalidade mostrar e esclarecer de uma forma geral a arquitetura utilizada no projeto, tornando o seu processo de entendimento o mais simples possível. Além disso, esse documento também tem como objetivo demonstrar as decisões arquiteturais tomadas pelo grupo em relação ao projeto.</p>

### 1.2 Escopo

<p align = "justify"> &emsp;&emsp; Esse documento visa permitir ao leitor se informar sobre a arquitetura utilizada no projeto, incentivando um entendimento mais simples e eficaz acerca do produto.</p>

### 1.3 Definições, Acrônimos e Abreviações

Abreviação|Significado
-|-
**MDS**| Métodos de Desenvolvimento de Software
**UnB**| Universidade de Brasília
**MVC**| Model-View-Controller
**API**| Applications Protocol Interface 
**JSON**| JavaScript Object Notation

### 1.4 Visão Geral

***
**Introdução:**  Fornece uma visão geral e introdutória sobre o documento;
***
**Representação Arquitetural:** Fornece informações sobre as tecnologias e os motivos pelos quais elas foram escolhidas;
***
**Metas e Restrições:** Demonstra as metas e restrições aplicadas no projeto;
***
**Visão Lógica:** Apresenta como os frameworks interagem entre si e com o usuário; 
***


## 2. Representação Arquitetural

### 2.1 Back-end

#### 2.1.1 Node.Js
<p align = "justify"> &emsp;&emsp; Node.Js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p>
<p align = "justify"> &emsp;&emsp;
    Com  ele é possível criar aplicações Javascript para rodar como uma aplicação standalone(que não necessita de softwares auxiliares) em uma máquina, não dependendo de um browser para a execução, como é o usual.
</p>
<p align="justify">  &emsp;&emsp; O principal motivo de sua adoção é a sua alta capacidade de escala. Além disso, sua arquitetura, flexibilidade e baixo custo, o tornam uma boa escolha para implementação de MVC e componentes da arquitetura Serverless.
    
</p>

#### 2.1.2 Express
<p align = "justify"> &emsp;&emsp; O Express.js é um framework Node que facilita o desenvolvimento criando abstrações de rotas, middlewares e muitas outras funções para facilitar a implementação de API's. Dentre suas principais características, podemos citar: Sistema de rotas completos, tratamento de exceções dentro da aplicação e gereciamento de requisições HTTP com seus mais diversos verbos.</p>

<p align="justify"> &emsp;&emsp; Outro ponto de interesse no framework se diz respeito da utilização do padrão Model-View-Controller, modelo esse que facilita a troca de informações entre a interface do usuário aos dados no banco, fazendo com que as respostas sejam mais rápidas e dinâmicas..</p>

- **Model**: Camada responsável por representar o negócio e pelo acesso e manipulação dos dados.
- **View**: Camada responsável por processar requests de usuários e retornar responses.
-  **Controller**: Camada responsável por ligar o model e a view, fazendo com que os models possam ser repassados para as views e vice-versa.

### 2.2 Front-End

#### 2.2.1 React
<p align = "justify"> &emsp;&emsp;O React é uma biblioteca front-end e tem como um de seus objetivos facilitar a conexão entre diferentes partes de uma página, portanto seu funcionamento acontece através do que chamamos de componentes. Em outras palavras, podemos imaginar que o React divide uma tela em diversos componentes para, então, trabalhar sobre eles de maneira individual.</p>
<p align = "justify" > &emsp;&emsp; Isso torna o React uma tecnologia muito flexível para a solução de problemas e para a construção de interfaces reutilizáveis, uma vez que cada um destes componentes pode ser manipulado de maneira distinta. </p>
<p align = "justify"> &emsp;&emsp; Além disso, por ser um framework que possui uma curva de aprendizado muito boa e alguns dos integrantes do grupo já terem conhecimento prévio relacionado à linguagem, ela foi selecionada para atuar no front-end.</p>


#### 2.2.2 MetaBase

<p align = "justify"> &emsp;&emsp;O objetivo do MetaBase é fornecer visualizações interativas e recursos de business intelligence com uma interface simples para que os usuários finais criem os seus próprios relatórios e dashboards. Por isso, ele foi escolhido como tecnologia para lidar com os dados que serão apresentados pela aplicação</p>

### 2.3 Banco de Dados

#### 2.3.1 MongoDB

<p align = "justify"> &emsp;&emsp;O MongoDB é um banco de dados opensource, de alta performance e flexível, sendo considerado o principal banco de dados NoSQL. É orientado a documentos, ou seja, os dados são armazenados como documentos, ao contrário de bancos de dados de modelo relacional, onde é trabalhado com registros em linhas e colunas. Os documentos podem ser descritos como dados no formato de chave-valor, no caso, utilizando o formato JSON (JavaScript Object Notation).</p>

<p>
    A escolha de um banco de dados não relacional se deve a grande quantidades de dados que o software terá que lidar e a flexibilidade necessária para isso. Esse tipo de banco não exige a rigidez dos esquemas e torna possível adicionar novas propriedades, sem a preocupação com o impacto nas demais informações já armazenadas.
</p>

## 3. Metas e Restrições

### 3.1 Metas
<p align = "justify"> &emsp;&emsp; O projeto visa facilitar a visualização e análise dos dados disponíveis no Brasil.io através de uma aplicação online e de fácil utilização</p>

### 3.2 Restrições

#### 3.2.1 Compatibilidade
- A aplicação será compatível com os principais navegadores da atualidade tendo um enfoque maior no Google Chrome na sua versão desktop e mobile. Será necessário o acesso a internet.
#### 3.2.2 Usabilidade
- O sistema visa ser intuitivo e de simples uso, evitando assim que a utilização não seja um empecilho.

#### 3.2.3 Confiabilidade
- A aplicação buscará obter ao menos 90% de cobertura em testes, garantindo assim a funcionalidade do sistema.

## 4. Visão Lógica
![Visão Lógica](https://github.com/fga-eps-mds/2021.2-Noctua/blob/main/docs/img/visao_logica.png?raw=true)
<p align = "justify"> &emsp;&emsp; As ações do usuário no ambiente web serão interpretadas pelo React como ações. Algumas dessas poderão ser tratadas no lado do cliente (client side), como ações de iteratividade que não precisam de comunicação externa.</p>

<p align = "justify"> &emsp;&emsp;Já em outras ações será preciso consultar um banco de dados no lado do servidor (server side), assim sendo preciso enviar uma solicitação (HttpRequest) para o servidor, utilizado o protocolo de comunicação HTTP.</p>

<p align = "justify"> &emsp;&emsp;Uma vez que o servidor receba a solicitação do cliente, será preciso interpretar o request com base na URL e no método HTTP utilizado. Essa computação é realizada pela camada controller que verificará a necessidade de se comunicar com a API Brasil.io para obtenção de dados. </p>

<p align = "justify"> &emsp;&emsp; Caso seja necessário, o controller disparará uma requisição HTTP para obter as informações desejadas. Com a resposta da API Brasil.io, o controller enviará os dados para a camada model, que salvará no banco o JSON e logo em seguida o retornará para que o controller disponibilize para a camada view, que exibirá para o cliente.  </p>

<p align = "justify"> &emsp;&emsp; Caso não precise de comunicação com a API, o controller requisitará à camada model os dados já salvos previamente, e esta o retornará para que seja exibido para o cliente na camada view. </p>

<p align = "justify"> &emsp;&emsp; O tratamento dos dados será feito pela ferramenta do Power BI que gerará relatórios e dashboards. Estes que serão embutidos no React via integração disponibilizada pela Microsoft </p>

### 4.1 Visão Geral: Pacotes e Camadas
<p align = "justify"> &emsp;&emsp; O sistema será desenvolvido utilizando o Django REST Framework e o Flutter. Irão se comunicar através da API REST fornecida pelo backend do sistema. </p>

#### 4.1.1 Diagrama de Pacotes
![Diagrama de Pacotes](https://github.com/fga-eps-mds/2021.2-Noctua/blob/main/docs/img/diagrama_de_pacotes_back.png?raw=true)
![Diagrama de Pacotes](https://github.com/fga-eps-mds/2021.2-Noctua/blob/main/docs/img/diagrama_de_pacotes_front.png?raw=true)

- **Frontend**
    - **React**: framework para desenvolvimento web.
        -  **Docker-Compose**: conjunto de containers docker.
        -  **tsconfig.json**: Configuração da linguagem typeScript utilizada mo projeto.
        - **package.json**: Arquivo com objetivo de  descrever as características das dependências usadas no projeto. Versão, subdependências, links de verificação de integridade, dentre outras coisas.
        - **yarn.lock**: O arquivo yarn.lock bloqueia as dependências instaladas em uma versão especifica, o que assegura que uma mesma instalação em um ambiente totalmente diferente, a mesma estrutura de arquivos e dependencias funcione.
         - **Src**: Diretório raíz do front-end.
             - **index.tsx**: Arquivo inicial do React.
             - **App.tsx**: Arquivo executado pela aplicação.
             - **Routes.tsx**: Responsável por todo o esquema de rotas da aplicação. 
            - **Pages**: Diretório para adicionar os arquivos que serão as páginas do projeto. Possui subpastas para facilitar colaboração com os outros desenvolvedores do projeto, cada squad coloca seus arquivos na respectiva pasta. A pasta shared possui as páginas que serão compartilhadas pelos squads. 
            - **Components**: Diretório onde são criados os componentes que serão utilizados e compartilhados pelas páginas. 
            - **Services**: Diretório que contém os arquivos que vão acessar a API/Back-end
            - **Public**: Diretório que contém os arquivos públicos da aplicação como imagens, ícones, fontes, etc.

- **Backend**
    - **Node.js**: ambiente de execução Javascript server-side.
       -  **Docker-Compose**: conjunto de containers docker.
        -  **tsconfig.json**: Configuração da linguagem typeScript utilizada mo projeto.
        - **package.json**: Arquivo com objetivo de  descrever as características das dependências usadas no projeto. Versão, subdependências, links de verificação de integridade, dentre outras coisas.
        - **yarn.lock**: O arquivo yarn.lock bloqueia as dependências instaladas em uma versão especifica, o que assegura que uma mesma instalação em um ambiente totalmente diferente, a mesma estrutura de arquivos e dependencias funcione.
        -  **node_modules**: Pasta com as dependências do projeto.
        - - **Src**: Diretório raíz do front-end.
            - **models**: Diretório contendo as models do aplicativo.
            - **controllers**: Diretório com os controladores que são responsáveis pelas regras de negócio e manejar as requisições da aplicação.
            - **Routes**: mapeia as rotas e disponibiliza os endpoints da API.
            - **database.ts**: Arquivo de configuração e conexão do banco de dados.
            - **server.ts**: Arquivo inicial do servidor que faz o intermedio do banco 
            e a API.
    - **jest**: Diretório contendo os testes unitários.
    - **cypress**: Diretórios de testes automatizados.
    - **MongoDB**: banco de dados da aplicação.
## 5. Visão de Casos de Uso

### 5.1 Atores

#### 5.1.1 Usuário
<p align = "justify"> &emsp;&emsp; Ator geral, que possui realiza as ações do aplicativo.</p>

#### 5.1.2 Desenvolvedor
<p align = "justify"> &emsp;&emsp; Recebe informações diretas do usuário podendo ser um relatório de problema ou um feedback.</p>

### 5.2 Diagrama de Casos de Uso
![Diagrama de Casos de Uso](https://raw.githubusercontent.com/fga-eps-mds/2021.2-Noctua/73d96ab18d757a74912776e1a37f21e68c33da91/docs/img/diagrama_casos_de_uso.png)

### Referências



> Como documentar a arquitetura de software. Disponível em: < [http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx](http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx) > Acesso em: 31 de janeiro de 2022


> Documento de arquitetura Acácia. Disponível em: < [https://fga-eps-mds.github.io/2019.2-Acacia/#/architecture_document](https://fga-eps-mds.github.io/2019.2-Acacia/#/architecture_document) > Acesso em: 31 de janeiro de 2022

> Documento de arquitetura Hortum. Disponível em: < [https://fga-eps-mds.github.io/2020.2-Hortum/Documento_de_arquitetura/](https://fga-eps-mds.github.io/2020.2-Hortum/Documento_de_arquitetura/) > Acesso em: 31 de janeiro de 2022

> Documentação React. Disponível em: < [https://pt-br.reactjs.org/docs/getting-started.html](https://pt-br.reactjs.org/docs/getting-started.html) > Acesso em: 16 de janeiro de 2022

> TEMPLATE Documento de Arquitetura de Software. Disponível em: < [https://github.com/DroidFoundry/DroidMetronome/wiki/TEMPLATE-Documento-de-Arquitetura-de-Software](https://github.com/DroidFoundry/DroidMetronome/wiki/TEMPLATE-Documento-de-Arquitetura-de-Software) > Acesso em: 31 de janeiro de 2022
