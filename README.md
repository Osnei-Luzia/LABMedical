# LABMedical
## _Gestão Hospitalar_

LABMedical é uma aplicação web para gestão de informações de um ambiente hospitalar.

### Sumário

1. [Páginas e suas Funcionalidades](#paginas)
2. [Tecnologias](#tech)
3. [Instalação](#install)

<a id="paginas"></a>
## Páginas e Funcionalidades

O LABMedical gerencia três principais bancos de informações para seu hospital: Pacientes, Consultas e Exames. Possibilitando Criação, Remoção e Edição de informações de forma dinâmica e segura.

1. [Login](#login)
1.1. [Cadastro de Usuário](#loginCadastro)
2. [Página Inicial](#paginaInicio)
2.1. [Estatísticas do Sistema](#estatisticas)
2.2. [Busca de Pacientes](#buscaPacientes)
3. [Navegação](#navegacao)
4. [Cadastro de Pacientes](#cadastroPacientes)
4.1 [Edição e Remoção de Pacientes](#edicaoPacientes)
5. [Cadastro de Consultas e Exames](#cadastroConsultas)
6. [Prontuários](#prontuarios)
6.1 [Prontuário do Paciente](#prontuarioPaciente)

<a  id="login"></a> 
### Login
Para acessar o sistema do LABMedical é necessário entrar com e-mail e senha registrados. Veja sessão de [Cadastro de Usuário](#loginCadastro) para realizar o registro<br>
<img src="https://github.com/Osnei-Luzia/LABMedical/blob/main/labMedical/src/assets/readMeImagens/login.png" width="600"><br>

<a  id="loginCadastro"></a> 
#### Cadastro de Usuário
Para o registro de novo usuário, deve-se informar seu Nome Completo, E-mail válido, e uma Senha. Caso deseje, é possível anexar uma imagem para perfil através de URL.

Informe novamente a senha no campo Confirmar Senha e clique em confirmar para realizar o registro.<br>
<img src="https://github.com/Osnei-Luzia/LABMedical/blob/main/labMedical/src/assets/readMeImagens/cadastroUsuario.png" width="600"><br>

<a  id="paginaInicio"></a> 
### Página Inicial
Após o login, você estará ná Página inicial que é dividida em duas partes: Estatísticas e Pacientes.

<a  id="estatisticas"></a> 
#### Estatísticas do Sistema
A seção de estatísticas apresenta a quantidade de Pacientes, Consultas e Exames cadastrados no sistema.<br>

<a  id="buscaPacientes"></a>
#### Pacientes
A seção de Pacientes apresenta todos os pacientes cadastrados em cartões individuais junto de uma barra de busca que permite filtrar os pacientes mostrados a partir de seu Nome, Telefone ou E-mail.

Cada cartão apresenta do paciente, seu Nome, uma imagem de perfil caso tenha sido cadastrada, sua Idade, seu contato de E-mail ou Telefone caso não haja E-mail e por último o nome de seu convênio médico.<br>
<img src="https://github.com/Osnei-Luzia/LABMedical/blob/main/labMedical/src/assets/readMeImagens/paginaInicial.png" width="600"><br>

Também há a opção de editar as informaçoes do paciente clicando tanto na parte superior do cartão quanto no botão de Editar abaixo.<br>
<img src="https://github.com/Osnei-Luzia/LABMedical/blob/main/labMedical/src/assets/readMeImagens/cardPaciente.png" width="300"><br>

<a  id="navegacao"></a>
### Navegação
Na parte superior da aplicação, sempre estará a toolbar apresentando um botão para o menu de navegação, o nome da página em que o usuário está visualizando e informações de perfil: nome e imagem.

Ao clicar no botão de menu-sanduíche, o menu de navegação será mostrado. Nele é possível navegar entre todas as páginas da aplicação: Cadastro de Pacientes, Cadastro de Consulta, Cadastro de Exames e Lista de Prontuários.

No botão de Sair, o usuário logado será desconectado e a aplicação retornará para a Página de Login.<br>
<img src="https://github.com/Osnei-Luzia/LABMedical/blob/main/labMedical/src/assets/readMeImagens/navegacao.png" width="600"><br>

<a  id="cadastroPacientes"></a>
### Cadastro de Pacientes

O formulário de Cadastro de Pacientes indicará campos de preenchimento obrigatórios através de um asterisco vermelho no canto do campo. Apenas os campos que já foram preenchidos, porém incorretamente, pelo usuário, apresentaram mensagens de erro indicando o que deverá ser feito.

Para o preenchimento da seção Endereço, é possível realizar preenchimento automático de campos caso estes estejam registrados no banco da API ViaCep. Informe um CEP válido no campo de CEP e clique em Buscar ao lado. Os demais campos que não foram preenchidos automaticamente podem ser preenchidos manualmente.

Para finalizar o cadastro, deve-se clicar em Adicionar, que só estará habilitado caso todos os campos obrigatórios estejam preenchidos corretamente.<br>
<img src="https://github.com/Osnei-Luzia/LABMedical/blob/main/labMedical/src/assets/readMeImagens/cadastroPaciente.png" width="600"><br>

<a  id="edicaoPacientes"></a>
#### Edição e Remoção de Pacientes
Os botões de Editar e Deletar só serão habilitados caso o usuário tenha clicado no topo dos cartões de pacientes ou no botão de editar do cartão na seção de [Pacientes](#buscaPacientes) da Página Inicial.

A edição só será possível se todos os campos óbrigatórios ainda forem válidos após as mudanças.

A deleção só será possível caso não hajam Consultas e ou Exames vinculados ao paciente. Para a remoção de Consultas ou Exames veja a seção [Prontuários](#prontuarios)

<a  id="cadastroConsultas"></a>
### Cadastro de Consultas e Exames
Os formulários de Cadastro de Consultas e Cadastro de Exames se comportarão igualmente ao Cadastro de Pacientes, porém estes também possuem um campo obrigatório de Paciente.

Acima do formulário existe uma barra de pesquisa que filtrará os pacientes cadastros por Nome, Telefone, E-mail ou listará todos caso fique vazio. Clicando em um dos pacientes pesquisados, o título do formulário irá mudar de "Escolha um Paciente" para o nome do paciente escolhido, indicando que o campo obrigatório de Paciente está preenchido. <br>
<img src="https://github.com/Osnei-Luzia/LABMedical/blob/main/labMedical/src/assets/readMeImagens/cadastroConsulta.png" width="600"><br>

<img src="https://github.com/Osnei-Luzia/LABMedical/blob/main/labMedical/src/assets/readMeImagens/cadastroExame.png" width="600"><br>

<a  id="edicaoConsultas"></a>
#### Edição e Remoção de Consultas e Exames
Os botões de Editar e Deletar só serão habilitados caso o usuário tenha clicado no no botão de editar nas seções de Consultas ou Exames na página de [Prontuários](#prontuarios).

A edição só será possível se todos os campos óbrigatórios ainda forem válidos após as mudanças.

<a  id="prontuarios"></a>
### Prontuários
Na página de Lista de Prontuários, caso haja pacientes cadastrados, será apresentado uma tabela com todos os pacientes, mostrando seu ID único de Registro, Nome e Convênio.

É possível filtrar os pacientes cadastrados por Nome, Telefone ou E-mail na barra de pesquisa acima.

Clicando em Ver Mais de cada Pacientes, o usuário será levado para a página de Prontuário única do paciente escolhido.<br>
<img src="https://github.com/Osnei-Luzia/LABMedical/blob/main/labMedical/src/assets/readMeImagens/listaProntuario.png" width="600"><br>


<a  id="prontuarioPaciente"></a>
#### Prontuário do Paciente
Esta página é dividida em três seções: Paciente, Consultas do Paciente e Exames do Paciente.

Na seção Paciente, serão apresentadas as seguintes informações: Nome, Convenio, Telefone de Emergência, Alergias e Necessidades Especiais.

Na seção Consultas do Paciente, caso hajam consultas vinculadas ao paciente, serão apresentados cards em ordem cronológica com todos os dados da consulta, destacando Data, Hora e Motivo. Também haverá um botão para Editar, que levará o usuário para a página de [Cadastro de Consultas](#edicaoConsultas) com os botões de edição e deleção ativados.

Na seção Exames do Paciente, caso hajam exames vinculadas ao paciente, serão apresentados cards em ordem cronológica com todos os dados do exame, destacando Data, Hora, Nome do Exame e Nome do Laboratório. Haverá um botão para Editar, que levará o usuário para a página de [Cadastro de Exames](#edicaoConsultas) com os botões de edição e deleção ativados. E caso o exame tenha sido registrado com uma URL de anexo, um pequeno ícone irá aparecer ao lado do botão editar, que quando clicado levará ao anexo.<br>
<img src="https://github.com/Osnei-Luzia/LABMedical/blob/main/labMedical/src/assets/readMeImagens/prontuario.png" width="600"><br>


<a id="tech"></a>
## Tecnologias

É utilizado para seu funcionamento:
- [Angular] - Framework estrutural de desenvolvimento web.
- [Bootstrap] - Framework de front-end prático para desenvolvimento web.
- [ngx-Modal] - Pacote npm para utilização de modais bootstrap dentro de JS.
- [ViaCEP] - Webservice gratuito para consulta de endereço via CEP, suporta Ajax e retorno nos formatos JSON ou XML.
- [NodeJS] - Ambiente de execução open-source multiplataforma para JavaScript

<a id="install"></a>
## Instalação

Para o funcionamento correto do projeto em usa IDE, realize a instalaçoes das seguintes dependências e então clone este reposítório.

1. [Node.JS](#nodeJS)
2. [Angular](#angular)

Para inicialização, execute a seguinte linha dentro do diretório raiz do projeto 
```
ng serve --o
```
ou
```
npm start
```

<a  id="#nodeJS"></a>
### Node.JS
Para a instalação do Node.JS em sua IDE, execute 
```
	npm install
```
ou escolha a versão adequada em [Node Download]

<a  id="#angular"></a>
### Angular
Para a instalação do Angular em sua IDE, execute 
```
	npm install -g @angular/cli
```

[Node Download]: <https://nodejs.org/en/download/>

   [Angular]: <https://angular.io/>
   [Bootstrap]: <https://www.npmjs.com/package/bootstrap>
   [ngx-Modal]: <https://www.npmjs.com/package/ngx-modal>
   [ViaCEP]: <https://viacep.com.br/>
   [NodeJS]: <https://nodejs.org/en/>
c
