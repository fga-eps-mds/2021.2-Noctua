# Noctua - Grupo (DashBoard Brasil IO)
<p align="center">
  <img width="400" src="https://cdn.discordapp.com/attachments/744698026462937211/949754815217532938/unknown.png">
</p>

<h1 align="center">Development</h1>

![GitHub contributors](https://img.shields.io/github/contributors/fga-eps-mds/Tema03-timeb?color=black)
![GitHub issues](https://img.shields.io/github/issues/fga-eps-mds/Tema03-timeb?color=violet)
![GitHub closed issues](https://img.shields.io/github/issues-closed/fga-eps-mds/Tema03-timeb?color=brightgreen)
![GitHub pull requests](https://img.shields.io/github/issues-pr/fga-eps-mds/Tema03-timeb?color=violet)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/fga-eps-mds/Tema03-timeb?color=brightgreen)
![GitHub branches](https://badgen.net/github/branches/fga-eps-mds/Tema03-timeb/)
![GitHub repo size](https://img.shields.io/github/repo-size/fga-eps-mds/Tema03-timeb?color=purple)

## Objetivo 
&emsp;&emsp;O objetivo principal do projeto é facilitar a relação dados/usuário, trazendo a transparência para leitura de informações. A mediação será feita por um produto que consome os dados governamentais disponibilizados pelo [Brasil.io](https://brasil.io/home/) e mostra de para o usuário de uma forma mais amigável.  

## Instalação

<!-- Pré-Requisitos -->
### Pré-Requisitos
#### Obrigatórias
|Tecnologias|Descrição|
|-|-|
|[Git](https://git-scm.com/)|`git` é uma ferramenta de versionamento de código `gratuito` e `open source`, capaz de lidar com tudo desde pequenos até grandes projetos, com `velocidade` e `eficiência`.|
|[Docker](https://www.docker.com/get-docker)|o `docker` é uma plataforma `open source` de containerização, ou seja um software para criação de sistemas isolados. Os `containers` são extremamente leves e permitem que os softwares sejam `facilmente` executados e exportados para os diversos sistemas existentes atualmente.|
|[Docker compose](https://docs.docker.com/compose/install/#install-compose)|O `docker-compose` é uma tecnologia de `multi-dockerização` que permite, através de um único arquivo de configuração `.yml`, criar e rodar todos os serviços/dockers da sua aplição.|

#### Para sistemas Windows
|Tecnologias|Descrição|
|-|-|
|[Windows Subsystem for Linux](https://docs.microsoft.com/pt-br/windows/wsl/install-win10)|O Subsistema do Windows para Linux permite que os desenvolvedores executem um `ambiente GNU/Linux`, incluindo a maioria das ferramentas de linha de comando, utilitários e aplicativos, diretamente no Windows, sem modificações e sem a sobrecarga de uma `máquina virtual tradicional` ou instalação `dualboot`.|
|[Docker compose para WSL](https://docs.docker.com/docker-for-windows/wsl/)|O Windows Subsystem for Linux `WSL` apresenta uma mudança significativa na arquitetura, pois é um kernel Linux completo desenvolvido pela Microsoft, permitindo que os contêineres do Linux sejam executados `nativamente`, `sem emulação`. |


### Baixando e rodando o Projeto

```bash
# Clone o repositório
$ git clone https://github.com/fga-eps-mds/2021.2-Noctua.git

# Entre na pasta do projeto
$ cd 2021.2-Noctua/

# Build do docker
$ docker-compose build

# Rodando o docker
$ docker-compose up
```
Ao rodar o código a *porta 3000* estará aberta para o uso da aplicação e a *porta 5000* para chamadas da api.

### Para desenvolvimento 
#### Como desenvolvedor é necessário ter o [Node.js](https://nodejs.org/en/download/) e [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) instalados

```bash
# Clone o repositório
$ git clone https://github.com/fga-eps-mds/2021.2-Noctua.git

# Entre na pasta do projeto
$ cd 2021.2-Noctua/

# Entre no front-end 
$ cd front

# Instale dependências de desenvolvimento 
$ yarn

# Voltar para a pasta do projeto 
$ cd ..

# Entre no back-end 
$ cd server

# Voltar para a pasta do projeto 
$ cd ..

# Instale dependências de desenvolvimento 
$ yarn

# Build do container para desenvolvimento
$ docker-compose -f docker-compose.dev.yml build

# Rodando o docker para dev
$ docker-compose -f docker-compose.dev.yml up
```
Ao rodar o código a *porta 3000* estará aberta para o uso da aplicação e a *porta 5000* para chamadas da api.




## Contribuidores


|Nome                             |GitHub                             | 
| --------                        | --------                          |
|Matheus Soares Arruda            | https://github.com/MtsSrs         |
|Mateus Caltabiano Neves Frauzino |https://github.com/MateusCaltabiano|
|Matheus Moreira Lopes Perillo    |https://github.com/MatheusPerillo  |
|Joao Victor Correia de Oliveira  |https://github.com/CorreiaJV       |
|Pedro Henrique Nogueira Gonçalves|https://github.com/phnog           |
|Iago de Paula Cabral             |https://github.com/iagocabral      |
|Murilo Perazzo Barbosa Souto     |https://github.com/murilopbs       |
|Ian da Costa Gama                |https://github.com/ian-dcg         |
|Matheus Henrick Dutra dos Santos |https://github.com/MatheusHenrickSantos|
|Charles Manrique Serafim Morais  |https://github.com/charles-serafim |
|Júlio César Martins França       |https://github.com/Julio-eng       |
|Igor Thiago Lima de Santana      |https://github.com/Alladin-51      |
|Fellipe Pereira da Costa Silva   |https://github.com/fellipepcs      |
|Matheus Moreira da Silva Vieira  |https://github.com/matheusmsvieira |
|Eurico Menezes de Abreu Neto     |https://github.com/EuricoAbreu     |
|Lucas Rodrigues Cardoso          |https://github.com/lucascard       |

## Releases
