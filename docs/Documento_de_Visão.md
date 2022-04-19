# Documento de Visão
## Histórico de revisão
Data|Versão|Descrição|Autor(es)
-|-|-|-
31/01/2022|1.0|Abertura do documento de visão|[@MateusCaltabiano](https://github.com/MateusCaltabiano), [@MatheusSoares](https://github.com/MtsSrs), [@phnog](https://github.com/phnog) 
11/02/2022|1.1|Adição dos tópicos 3.7, 4, 5, 6 e 7| [@MateusCaltabiano](https://github.com/MateusCaltabiano)
06/03/2022|1.2|Atualização  do Documento de Visão | [@phnog](https://github.com/phnog) 
03/04/2022|1.3|Revisao e Atualização do Documento de Visão | [@phnog](https://github.com/phnog), [@IagoCabral](https://github.com/iagocabral) 
18/04/2022|1.4|Atualização do Documento de Visão |[@MatheusSoares](https://github.com/MtsSrs)
## 1. Introdução
### 1.1 Objetivo

<p align = "justify"> &emsp;&emsp; Este documento tem como propósito  de elencar todas as capacidades e funções desenvolvidas pelo produto, e também todas as dificuldades e obstáculos transpostos durante o desenvolvimento.  </p>

### 1.2 Escopo

<p align = "justify"> &emsp;&emsp;Durante as eleições sabe-se que o conhecimento do candidato é indispensável para o eleitor. Compreendendo isto, o objetivo principal do projeto é facilitar a relação dados/usuário, trazendo a transparência para leitura de informações. A mediação será feita por um produto que consome os dados governamentais disponibilizados pelo Brasil.io e mostra de para o usuário de uma forma mais amigável.</p>

### 1.3 Definições, Acrônimos e Abreviações

Abreviação|Significado
-|-
**UnB**|Universidade de Brasília
**MDS**|Métodos de Desenvolvimento de Software
**RF**|Requisitos Funcionais
**RNF**|Requisitos Não Funcionais

### 1.4 Visão Geral
***
**Introdução:**  Introdução ao projeto.
***
**Posicionamento:** Interrelação Projeto & Problema.
***
**Descrições da Parte Interessada e do Usuário:** Visão geral do cliente.
***
**Visão Geral do Produto:** Capacidades e funções gerais do produto.
***
**Recursos do Produto:** Descrição dos recursos disponíveis pelo produto.
***
**Restrições:** Limitações de uso.
***
**Requisitos Funcionais:** Funcionalidades, Prioridades e Capacidades.
***
## 2. Posicionamento

O problema é|que afeta|cujo impacto é|uma boa solução seria
-|-|-|-
Dificuldade na busca de dados sobre candidatos|O Processo Eleitoral|Eleição de candidatos sem conhecimento de suas ações|A criação de um dashboard que mostra em suma todas os gastos do candidato e do seu gabinete

### 2.1 Oportunidade de negócios

&emsp;&emsp;A ideia é pegar dados do repositório de dados públicos (brasil.io) e implementar um software que pegue os dados puros e os deixe visualmente agradáveis e de fácil entendimento, facilitando assim o estudo dos mesmos.

### 2.2 Problema

&emsp;&emsp;Não ter dados importantes de forma visualmente acessível e simples pode afetar diversos estudiosos e pesquisadores quanto ao tempo. Uma solução seria o recolhimento e transformação dos dados de maneira automatizada para permitir a visualização deles como um todo e de diversas maneiras de forma a simplificar o estudo e visualização dos mesmos.

### 2.3 Posição do produto

&emsp;&emsp;Destinado para qualquer um que tenha o interesse de visualizar os dados disponibilizados, mas especialmente pensado para facilitar pesquisas e afins. O (nome) é um aplicativo/site que junta e mostra dados para uma fácil interpretação. De outro modo, pode ser utilizado o (nome do concorrente), mas nosso produto possibilita uma (principal diferencial do produto).

## 3 Descrições da Parte Interessada e do Usuário
### 3.1 Resumo dos envolvidos
Nome|Descrição|Responsabilidades
-|-|-
Equipe de desenvolvimento de Software|Estudantes da disciplina Métodos de Desenvolvimento de Software (MDS)|Desenvolver e gerenciar o projeto
Orientadores|Professora da disciplina Métodos de Desenvolvimento de Software (MDS)|Orientar e guiar a equipe 
### 3.2 Resumo dos Usuários
Usuário|Descrição
-|-
Pesquisadores |Pesquisar dados
Estudantes|Pesquisar dados

### 3.3 Perfil dos Usuários
#### 3.3.1 Pesquisadores e Estudantes
- **Representante:**         Pesquisadores e Estudantes.
- **Descrição:**             Grupo em busca de dados. 
- **Responsabilidades:**     Buscar dados. 
- **Critérios de Sucesso:**  Encontrar os dados.
- **Envolvimento:**          Baixo.
- **Problemas:** Ter dificuldade para encontrar o que estavam buscando. 


### 3.4 Perfis dos Envolvidos
#### 3.4.1 Equipe de desenvolvimento de software
- **Representantes:** Pedro Henrique Nogueira Gonçalves, Mateus Caltabiano,  Matheus Soares, Matheus Perillo, João Victor Correia e Iago de Paula Cabral. 
- **Descrição:** Responsaveis por desenvolver e gerenciar o projeto.
- **Responsabilidades:** Desenvolver e gerenciar o projeto.
- **Critérios de Sucesso:** Obter um projeto com qualidade e entregar a tempo. 
- **Envolvimento:** Alto.
- **Problemas:** Seguir com os prazos estipulados para desenvolver e aplicar soluções.

#### 3.4.2 Orientadores
- **Representantes:** Professora Carla Silva Rocha Aguiar .
- **Descrição:** Professora da disciplina Métodos de Desenvolvimento de Software.
- **Responsabilidades:** Orientar e avaliar a equipe de desenvolvimento.
- **Critérios de Sucesso:** Transmitir e observar o sucesso da equipe no desenvolvimento do projeto. 
- **Envolvimento:** Médio.
- **Problemas:** -

### 3.5 Principais Necessidades da Parte Interessada ou do Usuário
Usuário|Necessidade|Solução Atual|Solução Proposta
-|-|-|-
Pesquisadores e Estudantes|Plataforma para encontrar dados|Jornais e noticiarios|Plataforma que possiblita, ao usuario, pegar os dados desejados a qualquer momento.
### 3.6 Ambiente  do Usuário

&emsp;&emsp;Projeto web.

### 3.7 Alternativas e Concorrência 
***
#### 3.7.1 Portal da transparência
&emsp;&emsp;É uma plataforma do governo lançada pela Controladoria-Geral da União, onde qualquer cidadão pode encontrar diversas informações relacionadas à gestão pública do Brasil. As informações são disponibilizadas de diversas formas, como: painéis, consultas detalhadas, gráficos, dados abertos.

## 4. Visão geral do produto

### 4.1 Perspectiva do produto
&emsp;&emsp;O site tem como objetivo principal tornar a busca de dados importantes para jornalistas e pesquisadores uma tarefa mais simples, possibilitando a visualização organizada dos dados com diversas possibilidades de filtros e gráficos.

### 4.2 Resumo das capacidades
Benefício|Recursos de suporte
-|-
Facilitar a visualização de dados do governo|O site traz diversas funcionalidades que permitem um entendimento mais fácil dos dados

### 4.3 Suposições e dependências
- O usuário deverá possuir um computador com acesso à internet

## 5. Recursos do produto
- Visualização de tabelas
- Visualização de gráficos
- Filtragem de dados
- Comunicação com o usuário (por meio de formulário)

## 6. Restrições

### 6.1 Restrições de design
- O design deve ser de fácil entendimento, para que o usuário desfrute das funcionalidades naturalmente, sem nenhuma necessidade de tutoriais ou conhecimentos específicos

### 6.2 Restrições de uso
- É necessário um computador para a utilização do produto

## 7. Requisitos do produto
### 7.1 Requisitos funcionais
Identificador|Requisito|Prioridade
-|-|-
RF1|Permitir que o usuário possa pesquisar dados|Média
RF2|Permitir feedback via formulário|Baixa
RF3|Salvar no banco de dados as informações que serão exibidas|Alta
RF4|Permitir que o usuário possa aplicar filtros nas pesquisas|Média
RF5|Gerar gráficos filtrado dos dados do Deputado, seja por tipo de gastos ou por Ministério |Alta
RF6|Verificar se o dado requisitado já está salvo no banco|Alta
### 7.2 Requisitos não-funcionais
Identificador|Requisito
-|-
RNF1|Ser compatível com os principais navegadores web atuais
RNF2|O ambiente de produção deve ser configurado de modo que sempre contenha uma versão testada e estável
RNF3|O ambiente de homologação deve ser configurado de modo que as versões mais recentes sejam testadas
RNF4|O ambiente de desenvolvimento deve ser configurado de modo que todos utilizem as mesmas versões das linguagens e frameworks

## 8. Referências
> IBM Knowledge Center - Documento de Visão. Disponível em: [https://www.ibm.com/support/knowledgecenter/pt-br/SSYMRC_6.0.3/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html](https://www.ibm.com/support/knowledgecenter/pt-br/SSYMRC_6.0.3/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html) 
> > Acesso em: 31 de Janeiro de 2022

> Acacia - Documento de Visão. Disponível em: https://fga-eps-mds.github.io/2019.2-Acacia/#/vision_document
> >Acesso em: 31 de Janeiro de 2022

> Hortum - Documento de Visão. Disponível em: https://fga-eps-mds.github.io/2020.2-Hortum/Documento_de_visao/
> >Acesso em: 31 de Janeiro de 2022


