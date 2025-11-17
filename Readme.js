//No início do projeto, depois de definido o HTML e o CSS
//1º instala o json server:
//npm i json-server@1.0.0-alpha.21

//2º cria o arquivo .gitignore para n carregar a pasta node_modeules, pq ela é pesada

//3º criar o arquivo server.json

//4º Inicia configuração do package.json
//add o scrip do server igual está lá, coloca watch pra fica escutando e ja atualizando

//5º roda no terminal o server
//npm run server

//6º Cria um nome e descrição pro Package.json

//7º Instalando o WebPack
//npm i webpack@5.89.0 webpack-cli@5.1.4 --save-dev
//Instala sempre no terminal que não está rodando o server

//8º Dentro de package.json nos scripts, cria o script "build": "webpack"

//9ª Dentro de src, cria o arquivo main.js

//10º Dentro da pasta raiz cria o arquivo webpack.config.js
//const path = require("path") -> Isso para importar as configurações do webpack. Deve ser feito assim e nao com import ou export pq usa o proprio node.
//vai rodar do lado do servidor e vai muita coisa pronta pro navegador. Por isso deve usar essa sintax
//Agora, dentro dela, se configura a saída para a pasta dist com o nome do arquivo main.js
//Entao roda o comando no terminal para rodar a build construída:
//npm run build - entao é criada a pasta dist

//11º Instalação do webpack dev server
//npm i webpack-dev-server@4.15.1 --save-dev
//configura o devserver dentro do webpack.config
//criado o scrip dev dentro de package.json
//roda o script no terminal: npm run dev

//12º incluir o html no webpack
//intala no terminal:
//npm i html-webpack-plugin@5.6.0 --save-dev
//Configura no webpack.config
//roda npm run build no terminal pra levar o html para a pasta dist
//roda npm run dev para rodar o server e abrir a pagina no navegador

//12+1º Carregando o favicon dentro dos plugins do webpack.config

//14º Instalando o CSS do webpack
//npm i style-loader@3.3.3 css-loader@6.8.1 --save-dev
//ele vai parar dentro do package.json
//dentro do webpack configura os modeule com test e use
//isso é para carregar o css dentro do dist
//dentro do main.js de src, importa as configurações do css e entao exclui o arquivo index.css e exclui o link que faz referencia a esse arquivo dentro do html

//15ª Instalando o plugin para levar os assets
//npm i copy-webpack-plugin@11.0.0 --save-dev
//configurei dentro de webpackage a variável:
//const CopyWebpackPlugin = require("copy-webpack-plugin") e tambem a configuração:
// o plugin  new CopyWebpackPlugin

//16º Incluindo o Babel para suportar navegadores mais antigos
//npm i babel-loader@9.1.3 @babel/core@7.23.7 @babel/preset-env@7.23.7 --save-dev
//Entao ja aparece ela dentro do package.json
//agora dentro do webpack configura ele em module
//executa npm run build


//17º Instalando o dayjs
//npm i dayjs@1.11.10
//dentro da pasta src cria pasta libs
//dentro dela cria dayjs.js e importa lá o dayjs
//dentro do main.js importa e configura o dayjs

//18º Acabou as configurações e pacotes. Agora começa a programação das funcionalidades
//Cria a pasta utils dentro de src
//Cria o arquivo openning-hours dentro dela

//19º Captar as info preenchidas pelo usuario

//20º Criar o arquivo page-load.js dentro de form
//importar ele dentro do main
//começar a cria-lo

//21º Criar o arquivo load.js e uma pasta schedules dentro de modeules e e hours-loaded dentro de form dentro de modules
//Começar edita-lo

//22º