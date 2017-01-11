---
title: "Iniciando na Programação Android - Android Studio Tutorial"
date: 2015-09-20 16:00:00
categories: 
  - Mobile 
  - Android
tags:
  - Android Studio
  - Fácil
  - Hello World
  - Iniciantes
  - Programação
  - Tutoriais
image: /img/posts/mobile/android/android-studio-tutorial/featured.jpg
url: /mobile/android/android-studio-tutorial
---

Se você é programador e resolveu iniciar no mundo da programação Android, 
já deve conhecer os requisitos iniciais e os primeiros passos para criar 
um aplicativo para Android. Se não conhece, dê uma olhada nesse artigo onde 
eu mostro as principais formas de Como criar um aplicativo para Android, 
e os requisitos para começar.

Até o ano passado <!--more--> a principal forma de desenvolvimento para Android era o 
<a href="https://developer.android.com/tools/help/adt.html" target="_blank">Android Developer Tools</a>, 
um plugin para o <a href="https://eclipse.org/" target="_blank">Eclipse</a> que adiciona as ferramentas 
necessárias para o desenvolvimento para o SO móvel da Google.

O Android Studio já vinha sendo desenvolvido faz algum tempo, mas era mantido como opção secundária.

A partir desse ano a Google adotou oficialmente o Android Studio como solução principal para o 
desenvolvimento de aplicações para Android.

Sabendo disso a ação natural é? Jogar no Google _“Android Studio Tutorial para Iniciantes”_ :stuck_out_tongue: 

Se foi isso que você fez e chegou até aqui, parabéns, veio ao lugar certo :smiley:. 
Se não foi isso que você fez, mas chegou aqui do mesmo jeito, então, parabéns também! :wink:

O objetivo do tutorial é mostrar como criar a primeira aplicação utilizando o Android Studio. 
Ao final, você deve saber como configurar um novo projeto no Android Studio, criar uma aplicação, 
e executa-la em um emulador ou dispositivo físico.

Se você chegar ao final sem conseguir fazer tudo isso, deixe sua mensagem de socorro nos 
comentários que eu te ajudo.

## O Início de tudo

<img src="/img/posts/mobile/android/android-studio-tutorial/inicio.jpg" alt="Inicio" class="section-image">

Então, dito tudo isso, vamos para o que interessa. Quais são os dois requisitos básicos 
para utilizar qualquer programa? Exato, baixar e instalar.

O download do Android Studio pode ser feito 
<a href="https://developer.android.com/sdk/index.html" target="_blank">aqui</a>.
Para quem utiliza sistema Windows, é preciso fazer 
a instalação antes, a instalação é bem simples, bastando seguir o bom e velho, _next > next > next_. 
Para quem utiliza sistema Linux, o download é de um zip já contendo os arquivos do Android Studio 
para execução, então é só descompactar o arquivo e mandar bala.

### Primeira execução
<figure class="post-figure">
  <a href="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-1.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-1.png" class="responsive-image"
      alt="Android Studio - Tela de configuração 1">
  </a>
  <figcaption class="caption">Android Studio - Tela de configuração 1</figcaption>
</figure>

Na primeira execução a tela acima será exibida, isso acontece pois você precisa definir as 
configurações principais do Android Studio, mas nas próximas vezes você irá direto para a tela de 
gerenciamento dos projetos.

Ao clicar em _Next_ na tela exibida, você deve se deparar com a tela abaixo, nela você pode escolher 
entre os tipos de configuração, Padrão ou Personalizada. No nosso exemplo vamos escolher a opção 
_Custom_, apenas para mostrar o que pode ser configurado.

<figure class="post-figure">
  <a href="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-2.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-2.png" class="responsive-image"
      alt="Android Studio - Tela de configuração 2">
  </a>
  <figcaption class="caption">Android Studio - Tela de configuração 2</figcaption>
</figure>

Como escolhemos a opção _Custom_, ao clicar no botão _Next_ a tela abaixo foi exibida. Nela é possível 
configurar o esquema de cores da IDE, então se você gosta, já pode selecionar aquele tema com fundo 
escuro padrão.

<figure class="post-figure">
  <a href="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-3.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-3.png" class="responsive-image"
      alt="Android Studio - Tela de configuração 3">
  </a>
  <figcaption class="caption">Android Studio - Tela de configuração 3</figcaption>
</figure>

Na próxima tela, você pode configurar quais itens deseja instalar, e onde deseja instalar o SDK do 
Android.

<figure class="post-figure">
  <a href="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-4.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-4.png" class="responsive-image"
      alt="Android Studio - Tela de configuração 4">
  </a>
  <figcaption class="caption">Android Studio - Tela de configuração 4</figcaption>
</figure>

Dos itens a instalar, o único que é opcional é o _Android Virtual Device_, então se você não pretende 
utilizar emulador para testar as suas aplicações (o que é bem difícil), você pode desmarcar essa 
opção, porém não o faça se você não tiver certeza do que está fazendo.

A tela abaixo não tem nenhuma configuração a fazer, e só deve ser exibida para quem utiliza 
sistemas Linux.

<figure class="post-figure">
  <a href="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-5.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-5.png" class="responsive-image"
      alt="Android Studio - Tela de configuração 5">
  </a>
  <figcaption class="caption">Android Studio - Tela de configuração 5</figcaption>
</figure>

Para quem está seguindo o tutorial no Windows a tela abaixo deve ser exibida logo depois do 4º 
passo.

<figure class="post-figure">
  <a href="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-6.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-6.png" class="responsive-image"
      alt="Android Studio - Tela de configuração 6">
  </a>
  <figcaption class="caption">Android Studio - Tela de configuração 6</figcaption>
</figure>

Ela é a tela final, exibindo um resumo de todas as opções escolhidas durante a instalação, 
e uma lista de tudo que será baixado e instalado. Ela também é a tela que é exibida logo após 
a escolha do tipo da instalação (2º passo) caso você escolha a opção _Standard_.

Então, são essas as opções disponíveis para configuração no momento da primeira instalação 
do Android. Não há nada muito importante para mudar, então o ideal é escolher logo a opção 
_Standard_ no início e finalizar a instalação.

Pra você que achou que após fazer o download e instalar o Android Studio já ia poder usar, 
saber que ele vai ter que baixar mais de 1 GB de arquivos deve ser relativamente frustrante :laughing: , 
mas é isso aí mesmo, agora é sentar e esperar o download da tela aí de baixo finalizar :confused:.

<figure class="post-figure">
  <a href="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-7.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-setup-7.png" class="responsive-image"
      alt="Android Studio - Tela de configuração 7">
  </a>
  <figcaption class="caption">Android Studio - Tela de configuração 7</figcaption>
</figure>

## Novo Projeto
<img src="/img/posts/mobile/android/android-studio-tutorial/novo-projeto.jpg" alt="Novo Projeto" class="section-image">

Após o término do download, a configuração do Android Studio estará finalizada, então você estará 
pronto para iniciar um novo projeto. A tela abaixo deverá ser exibida, nela você poderá gerenciar 
todos os projetos criados, criar um projeto novo, abrir um projeto existente, importar um projeto 
do Eclipse, entre outras opções.

<figure class="post-figure">
  <a href="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-inicial.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-inicial.png" class="responsive-image"
      alt="Tela de boas vindas do Android Studio">
  </a>
  <figcaption class="caption">Tela de boas vindas do Android Studio.</figcaption>
</figure>

Como nós queremos criar uma aplicação nova do zero, nós vamos escolher a primeira opção, 
que diz _Start a new Android Studio project_.

Em seguida deve ser exibida a tela onde você vai configurar os dados principais do projeto.

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/novo-projeto-android-studio-passo-1.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/novo-projeto-android-studio-passo-1.png" class="responsive-image"
      alt="Criando um novo projeto no Android Studio – Passo 1">
  </a>
  <figcaption class="caption">Criando um novo projeto no Android Studio – Passo 1.</figcaption>
</figure>

No campo **Application name** você define o nome da sua aplicação. No exemplo eu defini o nome 
como _Hello Android_, mas você pode usar o nome que achar mais conveniente.

No campo **Company Domain** você deve definir o domínio da empresa ou desenvolvedor que está 
criando o aplicativo. O Android Studio automaticamente utiliza esse campo invertido, 
junto com o nome da aplicação como pacote raiz do projeto.

O pacote raiz do projeto define o nome completo da aplicação, e é o que identifica cada uma. 
Dessa forma o Android não se confunde entre aplicações com o mesmo nome.

Um exemplo, se buscarmos por _Inbox_ na Google Play, podemos ver a app oficial do Google. 
A url para acessa-la é essa: 
<a href="https://play.google.com/store/apps/details?id=com.google.android.apps.inbox" target="_blank">
  https://play.google.com/store/apps/details?id=com.google.android.apps.inbox
</a>. 
Temos também uma outra aplicação chamada Inbox que pode ser acessada nessa 
url: <a href="https://play.google.com/store/apps/details?id=com.magzter.inbox" target="_blank">
https://play.google.com/store/apps/details?id=com.magzter.inbox
</a>.

Perceba que ao final da url de cada uma, temos um campo id=\<valor\>. Esse valor é diferente 
para cada aplicação, e é o que define o nome único de cada app.

Voltando à configuração do nosso projeto, no campo **Project location** você define em que lugar do 
seu computador você deseja salvar o seu projeto. Então é só escolher o valor e clicar no botão next.

Na próxima tela você define em que plataformas sua aplicação vai rodar, e o SDK mínimo para 
cada uma delas.

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/novo-projeto-android-studio-passo-2.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/novo-projeto-android-studio-passo-2.png" class="responsive-image"
      alt="Criando um novo projeto no Android Studio – Passo 2">
  </a>
  <figcaption class="caption">Criando um novo projeto no Android Studio – Passo 2.</figcaption>
</figure>

Esse passo é necessário pois a cada versão nova do Android são adicionados diversos recursos novos, 
portanto utilizar estes recursos no desenvolvimento do seu aplicativo significa que ele não vai 
funcionar direito em dispositivos que possuam uma versão mais antiga do sistema.

Quanto mais antigo for o SDK mínimo, seu aplicativo vai atender uma quantidade maior de 
dispositivos, porém mais trabalho você terá para desenvolver e menos recursos você terá. 
Quanto mais novo for o SDK mínimo da sua aplicação, mais recursos você tem, porém menos 
dispositivos serão compatíveis com a sua aplicação.

O ideal é tentar achar um equilíbrio, o próprio Android Studio já mostra uma estimativa 
de dispositivos compatíveis com a sua aplicação quando você escolhe a versão do SDK mínimo. 
Clicando em _Help me choose_, a tela abaixo é exibida:

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/android-api-distribuicao.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/android-api-distribuicao.png" class="responsive-image"
      alt="Gráfico distribuição de versões do Android.">
  </a>
  <figcaption class="caption">Gráfico distribuição de versões do Android.</figcaption>
</figure>

Nessa tela você terá dados mais detalhados a respeito dos recursos disponíveis em cada versão do 
Android, e a estimativa de dispositivos compatíveis com cada versão.

Não sei a frequência em que esses dados são atualizados, mas de qualquer forma essas informações podem ser visualizadas 
nos <a href="https://developer.android.com/about/dashboards/index.html" target="_blank">Android Dashboards</a>, 
que são atualizados com maior frequência.

No nosso exemplo vamos escolher a API 15 (Android 4.0.3) como SDK mínimo. Essa é geralmente a opção que utilizo nas 
apps que desenvolvo, ela cobre a grande maioria dos dispositivos, e traz uma quantidade muito boa de recursos.

**Uma dica:** Dar suporte para versões do Android anteriores à API 11 dão MUITO trabalho, e segundo os dados dos dashboards 
do Android, apenas 4.3% dos dispositivos permanecem com essas versões mais antigas, então não compensa :wink:.

Voltando à criação do projeto, clique no botão _next_ e tela abaixo deve ser exibida.

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/novo-projeto-android-studio-passo-3.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/novo-projeto-android-studio-passo-3.png" class="responsive-image"
      alt="Criando um novo projeto no Android Studio – Passo 3">
  </a>
  <figcaption class="caption">Criando um novo projeto no Android Studio – Passo 3.</figcaption>
</figure>

Nesta tela você pode escolher uma 
<a href="http://developer.android.com/guide/components/activities.html" target="_blank">Activity</a> inicial pra aplicação. 
Pense em uma Activity como uma janela, que exibirá dados e vai interagir com o usuário.

O Android Studio oferece uma grande variedade de Activities pré definidas já na criação do projeto. Para o nosso caso, 
vamos escolher a primeira opção, que consiste em uma Activity vazia (_Blank Activity_).

Na próxima (e última) tela de configuração da aplicação, você define justamente as configurações da tela que você 
selecionou no passo anterior. Se você selecionou a opção _Blank Activity_, a seguinte tela deve ser exibida:

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/novo-projeto-android-studio-passo-4.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/novo-projeto-android-studio-passo-4.png" class="responsive-image"
      alt="Criando um novo projeto no Android Studio – Passo 4">
  </a>
  <figcaption class="caption">Criando um novo projeto no Android Studio – Passo 4.</figcaption>
</figure>

Neste momento, não vamos alterar nenhuma configuração aqui, então apenas pressione o botão _Finish_ para finalizar a 
criação do projeto.

Uma tela de _Loading_ deve ser exibida durante um certo tempo, não se preocupe, isso é normal e acontece pois o 
Android Studio está construindo o projeto. Ao final desse carregamento a dela principal do Android Studio será exibida, 
conforme a imagem a seguir:

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-principal.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/android-studio-tela-principal.png" class="responsive-image"
      alt="Tela Principal do Android Studio">
  </a>
  <figcaption class="caption">Tela Principal do Android Studio.</figcaption>
</figure>

Na região principal da tela, devem estar abertas duas abas, uma delas para edição do arquivo _MainActivity.java_ que 
contém o código fonte da tela principal da nossa aplicação, e na outra o arquivo _activity_main.xml_ que contém o layout 
da nossa tela, e como você já deve ter percebido a tela já conta com o tradicional **Hello World**.

Para não dizer que não fizemos nada, vamos alterar o texto desse Hello World. Para isso basta dar dois cliques no 
Hello World sendo exibido na tela. Uma janelinha deve ser exibida com os campos text e id.

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/alteracao-texto-textview.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/alteracao-texto-textview.png" class="responsive-image"
      alt="Alteração do texto da TextView">
  </a>
  <figcaption class="caption">Alteração do texto da TextView.</figcaption>
</figure>

O campo text define o texto a ser exibido, e o id é o que identifica o elemento que contém o texto no layout da tela. 
Defina os dois conforme o exemplo, use o texto que você quiser e o mesmo id do exemplo 
(ou não, você que sabe :stuck_out_tongue:).

Se você chegou até aqui, parabéns, você acabou de criar a sua primeira aplicação para Android.

<img src="/img/posts/mobile/android/android-studio-tutorial/homer-woohoo.jpg" alt="Parabéns" style="display: block; margin: auto">

O próximo passo é executar a sua aplicação, e ver ela funcionando :smiley:.

No desenvolvimento para dispositivos móveis, para rodar a aplicação nós temos duas opções, rodar em um dispositivo 
externo, ou rodar em um emulador, que é um programa que simula um dispositivo no seu próprio computador, portanto não é 
necessário ter um celular com Android para testar a sua aplicação.

## Executando em um emulador
<img src="/img/posts/mobile/android/android-studio-tutorial/emulador-android.jpg" alt="Executando em um emulador" class="section-image">

O processo para executar a aplicação em um emulador é bem simples. Antes de executar a nossa aplicação em um emulador, 
nós devemos executar o emulador. Para isso nós vamos abrir o Gerenciador de dispositivos virtuais (AVD Manager), isso 
pode ser feito através do menu _Tools > Android > AVD Manager_ ou através do ícone na barra de ferramentas.

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/icone-avd-manager.jpg" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/icone-avd-manager.jpg" class="responsive-image"
      alt="Ícone do AVD Manager">
  </a>
  <figcaption class="caption">Ícone do AVD Manager.</figcaption>
</figure>

O Android Studio então exibirá a tela do AVD Manager, que é igual à imagem abaixo:

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/avd-manager.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/avd-manager.png" class="responsive-image"
      alt="Tela principal AVD Manager">
  </a>
  <figcaption class="caption">Tela principal AVD Manager.</figcaption>
</figure>

Nessa tela estarão listados todos os emuladores configurados no seu computador, geralmente o Android Studio já configura 
um dispositivo virtual no momento da instalação, então você já deve ter um na sua máquina, assim como na figura acima, 
porém caso não tenha é facil criar um através do botão **Create Virtual Device** na parte de baixo da tela.

Não vou exibir o processo de criação de um novo dispositivo virtual, pois já foge um pouco do objetivo do tutorial, 
mas caso alguém tenha interesse e tenha alguma dúvida, pode deixar a pergunta nos comentários :wink:.

Para executar o emulador basta clicar no ícone de _play_ localizado na parte direita da tela, na linha em que está 
localizado o Virtual Device desejado.

O emulador será executado e começará a inicializar o sistema. Esse processo geralmente é demorado, dependendo da 
quantidade de programas abertos no computador. Então uma dica é deixar o emulador aberto durante todo o período em que 
você estiver programando :wink:.

Finalizado o processo de inicialização do emulador você vai ter um celular virtual com Android rodando dentro do seu 
computador, então agora é só instalar o seu app nesse dispositivo virtual e executar.

A execução da aplicação é feita através do menu **Run > Run ‘app’** ou através do atalho **Shift + F10**. Ao dizer para o 
Android Studio que deseja executar a aplicação, a seguinte tela será exibida:

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/executar-app-android-studio.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/executar-app-android-studio.png" class="responsive-image"
      alt="Executar aplicação no Android Studio">
  </a>
  <figcaption class="caption">Executar aplicação no Android Studio.</figcaption>
</figure>

Nessa janela você vai selecionar onde quer executar a sua aplicação, nela são listados todos os emuladores em execução 
(que geralmente é só um e olhe lá), e caso tenha algum celular conectado ao computador, ele é listado ali também. 
Então é só selecionar o dispositivo desejado e clicar em Ok.

Feito isso o Android Studio vai fazer o _Build_ do projeto, instalar o app no emulador, e já vai executa-lo, ao finalizar 
o processo a tela do aplicativo será exibida no emulador, conforme a imagem abaixo:

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/app-emulador.png" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/app-emulador.png" class="responsive-image"
      alt="Aplicação rodando no emulador">
  </a>
  <figcaption class="caption">Aplicação rodando no emulador.</figcaption>
</figure>

## Executando em um dispositivo físico
<img src="/img/posts/mobile/android/android-studio-tutorial/nexus.jpg" alt="Executando em um dispositivo físico" class="section-image">

O emulador pode ser uma mão na roda na hora de testar rapidamente a sua aplicação durante o desenvolvimento, mas você 
só vai saber se a aplicação realmente funciona, depois de testar em um dispositivo real. Quanto mais próximo do ambiente 
real forem os seus testes, melhor.

O processo para executar a aplicação em um dispositivo físico, no Android Studio é o mesmo. Você só precisa fazer 
algumas configurações antes no celular onde você deseja testar a aplicação.

### Habilitando a depuração USB

Antes de executar a aplicação, o seu celular deve estar com o _USB debugging_ (depuração USB) habilitado. Para isso vamos 
ter que acessar as opções do desenvolvedor.

Se o seu celular possui o Android 3.2 ou anterior, você vai encontrar essa opção no menu 
**Configurações > Aplicações > Desenvolvimento**. Se o seu celular possui a versão 4.0 do Android, ou versão mais nova, 
a opção será encontrada em **Configurações > Opções do Desenvolvedor**.

<figure class="post-figure medium">  
    <img src="/img/posts/mobile/android/android-studio-tutorial/habilitar-depuracao-usb.jpg" class="responsive-image"
        alt="Habilitando depuração USB no Android">  
  <figcaption class="caption">Habilitando depuração USB no Android.</figcaption>
</figure>

A partir da versão 4.2 do Android, o menu Opções do desenvolvedor vem desabilitado. Se esse for o seu caso, você deverá 
fazer o seguinte para habilita-lo: Acessar o menu **Configurações > Sobre o telefone**, em seguida tocar sucessivamente 
(mais ou menos umas dez vezes) na opção **Número da versão**.

Ao retornar ao menu anterior, o item Opções do Desenvolvedor deve estar disponível logo acima de _Sobre o Telefone_. Se 
você ainda não conseguiu ativar a opção, tem um tutorial mais detalhado sobre esse processo 
<a href="http://www.techtudo.com.br/dicas-e-tutoriais/noticia/2014/10/como-ativar-o-modo-desenvolvedor-no-android.html" target="_blank">aqui</a>.

### Executando o Aplicativo

Após habilitar a depuração USB, você já estará pronto para executar a aplicação no celular. Então basta conectar o 
celular no computador via cabo USB (no Windows talvez seja necessário instalar algum driver), acessar o Android Studio, 
e mandar executar o aplicativo (Shift + F10).

<figure class="post-figure medium">
  <a href="/img/posts/mobile/android/android-studio-tutorial/executar-app-android-studio-celular.jpg" target="_blank">
    <img src="/img/posts/mobile/android/android-studio-tutorial/executar-app-android-studio-celular.jpg" class="responsive-image"
      alt="Execução do app no celular">
  </a>
  <figcaption class="caption">Execução do app no celular.</figcaption>
</figure>

A tela de escolha dos dispositivos deve exibir o seu celular conectado. Então basta selecionar o celular, e pressionar 
o botão **OK**. O Android Studio vai instalar o aplicativo no seu celular e executa-lo, assim como fez com o emulador.

Chegando até aqui, você oficialmente criou o seu primeiro aplicativo no Android Studio. Já pode colocar a experiência 
no currículo e no LinkedIn :smiley:.

Então por hoje é só, assim que possível tem mais. Não esqueça de postar a sua opinião/sugestão/pedido/dúvida/bug nos 
comentários.

Acompanhe o blog, curta os perfis nas redes sociais, que em breve terá mais conteúdo relacionado a programação 
disponível.

Valeu pessoal.