---
title: "Grunt: Automatizando tarefas de build"
date: 2015-10-11 16:00:00
categories: 
  - Web 
  - Frontend
tags:
  - Build
  - Css
  - Grunt
  - Javascript
  - Node.js
  - Tutoriais  
image: /img/posts/web/frontend/grunt/featured.png
url: /web/frontend/grunt
---

Você já parou para pensar em quantas tarefas repetidas você executa na hora de fazer *build/deploy* do seu projeto de 
Frontend?

Vamos pensar em algumas mais comuns:

<ul style="position: relative; left: 30px">
  <li>concatenar arquivos css/js;</li>
  <li>minificar css/js;</li>
  <li>processar arquivos sass/less;</li>
  <li>minificar imagens;</li>
  <li>minificar html;</li>
  <li>fazer upload dos arquivos para o servidor;</li>
</ul>

 Agora tente pensar em quanto tempo você gasta diariamente na realização dessas tarefas. 
 Por alto, podemos dizer que perde-se tempo suficiente para até 5 xícaras de café na copa :D 
 
 Mas então você deve se perguntar, como agilizar esse processo e ganhar essas preciosas 5 doses diárias de café a mais? 
 Eu te respondo, com o <a href="http://gruntjs.com/" target="_blank">Grunt</a>!.

## O que é Grunt?

<img src="/img/posts/web/frontend/grunt/duvida.jpg" alt="O que é Grunt?" title="O que é Grunt?" class="section-image">

O Grunt é uma ferramenta de linha de comando criada pelo <a href="https://twitter.com/cowboy" target="_blank">Ben Alman</a>, 
e é basicamente um executor tarefas. Sabe todas as tarefas repetitivas listadas agora a pouco, 
além de todas as outras que você realiza mas não foram listadas? Você pode deixar que o Grunt execute elas para você.

### Por que usar um executor de tarefas?

Em uma palavra: automação. Quanto menos trabalho você tem executando tarefas repetitivas como minificação, compilação, 
teste de unidade, validação, etc, mais fácil se torna o seu trabalho.

Depois de configurado, um executor de tarefas pode realizar boa parte do trabalho para você com basicamente nenhum esforço.

### Por que usar o Grunt?

O ecossistema do Grunt é enorme e continua crescendo diariamente. Com literalmente centenas de plugins disponíveis, 
você pode usar o Grunt para automatizar praticamente qualquer coisa com o mínimo de esforço.

Se ninguém tiver desenvolvido o que você precisa, criar e publicar o seu próprio plugin do Grunt é extremamente fácil. 
Aqui você encontra mais detalhes de 
<a href="http://gruntjs.com/creating-plugins" target="_blank">como criar o seu plugin para o Grunt</a>.

### Quem usa Grunt?

Atualmente o Grunt é utilizado em uma grande quantidade de projetos Web pelo mundo afora. 
Projetos como jQuery e Bootstrap utilizam o Grunt para automatizar o build. 
A imagem abaixo demonstra algumas empresas/projetos que utilizam o Grunt.

<figure class="post-figure medium">  
    <img src="/img/posts/web/frontend/grunt/quem-usa-grunt.png" class="responsive-image"
      alt="Empresas/Projetos que utilizam Grunt.">  
  <figcaption class="caption">Empresas/Projetos que utilizam Grunt.</figcaption>
</figure>

Enfim, atualmente considero o Grunt como uma ferramenta indispensável para qualquer projeto de Frontend Web. 
Se você ainda não está usando, está perdendo tempo (literalmente)!

Mais detalhes sobre a ferramenta podem ser encontrados na 
<a href="http://gruntjs.com/" target="_blank">página oficial do Grunt</a>.

## Grunt: Primeiros Passos

<img src="/img/posts/web/frontend/grunt/primeiros-passos.jpg" 
  alt="Grunt: Primeiros Passos" title="Grunt: Primeiros Passos" class="section-image">

Então, vou usar o Grunt, do que eu preciso?

O primeiro passo é entender como o Grunt funciona. O Grunt é implementado em Javascript e roda no 
<a href="https://nodejs.org/en/" target="_blank">Node.js</a>, então antes de instalar o Grunt você vai precisar ter o 
*node* e o *npm* instalados. Caso você não tenha seguem alguns links de 
<a href="http://blog.teamtreehouse.com/install-node-js-npm-windows" target="_blank">como instalar o node e npm no Windows</a> 
e <a href="https://www.digitalocean.com/community/tutorials/como-instalar-o-node-js-em-um-servidor-ubuntu-14-04-pt" target="_blank">como instalar o node e npm no Ubuntu</a>.

### Instalação do Grunt

Tendo instalado o node e o npm na sua máquina, o único trabalho para instalar o Grunt é rodar o seguinte comando:

<pre>
  npm install -g grunt-cli
</pre>

Isto vai habilitar o comando <code>grunt</code> no terminal.

Como você já deve ter notado, instalamos o *grunt-cli* e não o *grunt*, a função do *grunt-cli* é executar o 
*grunt* configurado para o projeto. Dessa forma é possível ter vários projetos, cada um rodando uma versão diferente do 
*grunt* sem problemas.

### Configurando o projeto para utilizar o Grunt

Para um projeto utilizar o Grunt, são necessários pelo menos dois arquivos, o <code>package.json</code> e o 
<code>Gruntfile.js</code>.

### package.json

O arquivo <code>package.json</code> é utilizado pelo <code>npm</code> para armazenar os meta-dados do seu projeto. 
Informações como nome do projeto, autor, url, licença, repositório e dependências, são todas armazenadas neste arquivo.

Então é por isso que o Grunt precisa dele, ao instalar um plugin do grunt no projeto, esse plugin é registrado como 
dependência no arquivo package.json.

O arquivo *package.json* deve estar no diretório raiz da sua aplicação. Você pode criar um através do comando 
<code>npm init</code>.

Ao rodar o comando *npm init* ele vai solicitar os dados do seu projeto, nem todos são obrigatórios. 
Executei o comando aqui, preenchi algumas informações e gerei o seguinte arquivo *package.json*:

<pre data-enlighter-language="json">
{
  "name": "projeto",
  "version": "1.0.0",
  "description": "Meu Projeto",
  "main": "package.json",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Andrew Cavalcante Pacifico",
  "license": "Apache"
}
</pre>

Para instalar o Grunt e os plugins dele no seu projeto, utilize sempre o comando 
`npm install <dependência> --save-dev`, dessa forma a dependência é automaticamente adicionada à sessão 
*devDependencies* do arquivo *package.json*.

A importância de adicionar a dependência à sessão *devDependencies* do *package.json*, 
é que caso você precise configurar o projeto novamente em uma outra máquina, basta rodar o comando `npm install`, 
e todas as dependências do projeto (incluindo o Grunt e seus plugins) serão automaticamente instaladas.

Então vamos instalar o Grunt localmente em nosso projeto. Para isso basta executar o seguinte comando:

<pre>
  npm install grunt --save-dev
</pre>

Um diretório chamado *node-modules* deve ter sido adicionado ao seu projeto, este diretório conterá todas as 
dependências do seu projeto instaladas via *npm*.

Este diretório deve conter um outro diretório chamado *grunt*, o que indica que o Grunt foi instalado 
localmente no seu projeto.

Se você der uma olhada no arquivo *package.json* verá que ele conterá agora a seguinte sessão:

<pre data-enlighter-language="json">
"devDependencies": {
  "grunt": "~0.4.5"
}
</pre>

Isso significa que o grunt foi adicionado como dependência do projeto.

Caso você esteja utilizando algum software de controle de versão para o seu projeto, é importante ressaltar que apenas 
o arquivo *package.json* precisa ser versionado, o diretório *node_modules* deve ser deixado de fora, uma vez que ele 
é gerado automaticamente.

### Gruntfile.js

O *Gruntfile.js* é o arquivo onde você vai definir e as tarefas e configurar os plugins do Grunt. 
Ele é um arquivo *Javascript* que deve ser colocado na raiz do seu projeto junto com o *package.json*, e assim como ele, 
também deve ser versionado.

O *Gruntfile* é formado basicamente pela configuração do projeto/plugins, pelo carregamento dos plugins do Grunt, 
definição das tarefas, e uma função que engloba tudo isso. Abaixo temos um exemplo de um *Gruntfile* básico.

<pre data-enlighter-language="js">
  module.exports = function(grunt) {
    // configuração dos plugins
    grunt.initConfig({
    });

    // carregamento dos plugins
    grunt.loadNpmTasks('nome-do-plugin');

    // definição das tarefas
    grunt.registerTask('default', []);
  };
</pre>

No código acima é possível perceber as três seções principais mencionadas.

Toda a configuração dos plugins e tarefas do Grunt deve ser feita através de um objeto passado como parâmetro para a 
função <code data-enlighter-language="js">grunt.initConfig()</code>.

Todos os plugins instalados devem ser carregados através da chamada da função 
<code data-enlighter-language="js">grunt.loadNpmTasks()</code>.

E por fim, você pode definir as suas tarefas através da função <code data-enlighter-language="js">grunt.registerTask()</code>. 
Cada plugin instalado automaticamente cria uma tarefa com o seu nome, mas se o objetivo é automatizar, 
não faz sentido termos que chamar todas as tarefas uma por uma, então você pode definir uma tarefa *default* que é 
executada sempre que o comando `grunt` for executado, e pode configurar esta tarefa para executar todas as outras.

## Plugins do Grunt

<img src="/img/posts/web/frontend/grunt/grunt-plugins.png" 
  alt="Plugins do Grunt" title="Plugins do Grunt" class="section-image">

Agora que você já sabe como instalar e configurar o *Grunt*, só o que falta é começar instalar os plugins. 
Como eu mencionei no início do artigo, o *Grunt* já tem plugin pra praticamente tudo, então vamos configurar alguns 
dos mais comuns para o nosso projeto.

### Concat

Geralmente quando trabalhamos em um projeto mais complexo, o ideal é modularizar o nosso código Javascript, 
e dividir em diferentes arquivos para facilitar a manutenção. Porém para melhorar a performance do projeto, quanto menos
arquivos carregados melhor. Então como proceder?

Neste caso podemos utilizar o plugin <a href="https://github.com/gruntjs/grunt-contrib-concat" target="_blank">grunt-contrib-concat</a>, 
que como o próprio nome já diz, é utilizado para concatenar arquivos. Dessa forma é possível possuir diversos arquivos 
com Javascript, e configurar o *Grunt* para juntar todos esses arquivos em um só.

Para instalar o plugin, basta executar o comando abaixo:

<pre>
  npm install grunt-contrib-concat --save-dev
</pre>

Depois disso, vamos criar o nosso *Gruntfile.js*, com o seguinte conteúdo:

<pre data-enlighter-language="js">
module.exports = function(grunt) {
  // configuração dos plugins
  grunt.initConfig({
    concat: {
      dist: {
        src: [ 'js/src/functions.js', 'js/src/core.js' ],
        dest: 'js/dist/projeto.js',
      }
    }
  });

  // carregamento dos plugins
  grunt.loadNpmTasks('grunt-contrib-concat');

  // definição das tarefas
  grunt.registerTask('default', ['concat']);
};
</pre>

No código acima carregamos o plugin `grunt-contrib-concat`, definimos que a 
tarefa *default* deverá executar a tarefa referente ao plugin, e definimos as configurações do plugin.

Nas configurações do plugin o que fizemos foi definir como source os arquivos *functions.js* e *core.js* ambos localizados 
no diretório *js/src*, e definimos como destino um único arquivo chamado *projeto.js* que deverá ser gerado no diretório 
*js/dist* (que é criado caso não exista).

Portanto, ao executar o comando `grunt` os arquivos *functions.js* e *core.js* serão automaticamente concatenados 
em um novo arquivo chamado *projeto.js*.

Mágica não é? :D

O plugin *concat* possui uma série de outras configurações possíveis, mais informações é só consultar a 
<a href="https://github.com/gruntjs/grunt-contrib-concat" target="_blank">documentação do plugin</a>.

### Uglify

Uma das práticas mais conhecidas de quem trabalha com frontend é a de minificar arquivos Javascript e CSS, 
dessa forma é possível diminuir o tempo de carregamento da página melhorando a performance e a experiência do usuário.

Durante algum tempo, o que eu fazia em meus projetos era procurar algum site de minificação 
como o http://jscompress.com/, copiar e colar o meu código lá, pegar o código minificado e salvar em um arquivo .min.js. 
E quando eu alterava alguma coisa no arquivo? Exato, tinha que fazer tudo isso de novo.

O <a href="https://github.com/gruntjs/grunt-contrib-uglify" target="_blank">grunt-contrib-uglify</a> é um plugin para o 
Grunt que faz exatamente isso pra você. Nele você pode especificar uma lista de arquivos *js* de entrada e um 
arquivo *js* de saída que terá o conteúdo dos arquivos de entrada, e já minificados.

Sabendo disso, então qual a necessidade do *concat*? Bem, geralmente em ambiente de desenvolvimento nós não queremos os 
arquivos minificados, então o ideal é configurar o grunt para executar o *concat* em desenvolvimento, 
e o *uglify* em uma task de *build/deploy*.

Então vamos lá, para instalar o plugin basta rodar o comando abaixo:

<pre>npm install grunt-contrib-uglify --save-dev</pre>

Após a instalação vamos adicionar a seguinte configuração ao nosso *Gruntfile* no objeto passado para a função 
`grunt.initConfig`:

<pre data-enlighter-language="js">
uglify: {
  dist: {
    files: {
      'js/dist/projeto.js': [
        'js/src/functions.js', 
        'js/src/core.js'
      ]
    }
  }
}
</pre>

Então adicionamos a linha para carregar o plugin:

<pre data-enlighter-language="js">grunt.loadNpmTasks('grunt-contrib-uglify');</pre>

E vamos definir uma nova task chamada *deploy*, que irá executar o *uglify*.

<pre data-enlighter-language="js">grunt.registerTask('deploy', ['uglify']);</pre>

Dessa maneira, ao executar o comando `grunt` no terminal, os seus arquivos *Javascript* serão concatenados em um único 
arquivo chamado *projeto.js*, e ao executar o comando `grunt deploy` eles serão concatenados e minificados.

### CSSMin

Beleza, falei que é essencial minificar Javascript e CSS, e mostrei o Uglify que minifica o Javascript. Mas e o CSS?

Pra minificar o CSS tem esse cara aí, <a href="https://github.com/gruntjs/grunt-contrib-cssmin" target="_blank">CSSMin</a>.

A instalação do plugin segue o padrão dos plugins anteriores:

<pre>npm install grunt-contrib-cssmin --save-dev</pre>

A configuração do plugin no *Gruntfile* vai ficar assim:

<pre data-enlighter-language="js">
cssmin: {
  dist: {
    files: {
      'css/dist/projeto.css': [
        'css/src/components.css',
        'css/src/core.css'
      ]
    }
  }
}
</pre>

Então adicionamos o carregamento do plugin no *Gruntfile*:

<pre data-enlighter-language="js">
  grunt.loadNpmTasks('grunt-contrib-cssmin');
</pre>

E alteramos a definição da task de *deploy* para executar além do *uglify*, o *cssmin*:

<pre data-enlighter-language="js">
  grunt.registerTask('deploy', ['uglify', 'cssmin']);
</pre>

Nessa configuração do exemplo, assumimos que o nosso projeto possui dois arquivos css, um contendo as definições 
dos componentes utilizados na página, e outro com as configurações mais genéricas. No build nós vamos juntar esses 
arquivos e minifica-los em um único arquivo chamado *projeto.css*.

A mesma estratégia do Javascript pode ser utilizada também aqui, usar o *concat* em ambiente de desenvolvimento, 
e o *cssmin* para deploy.

### Watch

O ser humano é sempre acha um problema em tudo :D , digo isso pois quando eu comecei a usar o *Grunt*, mesmo com todas as 
vantagens, eu reclamei do fato de precisar ir até o terminal e rodar o comando `grunt` todas as vezes que 
fizesse alguma alteração no meu projeto.

Se você estiver achando que vai precisar fazer a mesma coisa, adianto logo que não.

<figure class="post-figure medium">  
    <img src="/img/posts/web/frontend/grunt/uhu.jpg" class="responsive-image"
      alt="uhu">  
</figure>

O Grunt possui um plugin chamado <a href="https://github.com/gruntjs/grunt-contrib-watch" target="_blank">Watch</a> 
responsável por ficar observando os seus arquivos e aguardando que alguma alteração aconteça, e quando acontecer, 
executar uma determinada tarefa.

Então, o primeiro passo como sempre, instalar o plugin:

<pre>npm install grunt-contrib-watch --save-dev</pre>

E vamos adicionar a configuração do plugin, que vai ser a seguinte:

<pre data-enlighter-language="js">
watch: {
  scripts: {
    files: [
      'js/src/functions.js',
      'js/src/core.js'
    ],
    tasks : [ 'concat' ]
  }
}
</pre>

Nessa configuração, nós definimos para o *Watch* ficar observando alterações nos nossos arquivos Javascript, 
e caso algum deles seja alterado, automaticamente a task *concat* será executada.

Adicionamos o carregamento do plugin:

<pre data-enlighter-language="js">grunt.loadNpmTasks('grunt-contrib-watch');</pre>

E dessa vez não vamos adicionar a task do plugin a nenhuma das tasks que nós definimos, pois uma vez que o watch gera 
uma task que fica escutando alterações, ele ocupa o terminal, então deve ser executado sozinho.

Portanto, após a instalação, carregamento e configuração do *watch* no nosso *Gruntfile*, só o que precisamos fazer é 
rodar o comando `grunt watch`. Ao fazer isso, o terminal deve exibir algo mais ou menos assim:

<figure class="post-figure" style="width: 489px">  
  <img src="/img/posts/web/frontend/grunt/grunt-watch-waiting.png" class="responsive-image"
      alt="Grunt Watch aguardando alterações." title="Grunt Watch aguardando alterações.">  
  <figcaption class="caption">Grunt Watch aguardando alterações.</figcaption>
</figure>

Isso indica que o *grunt watch* está executando e aguardando alguma alteração nos arquivos configurados para serem observados.

Ao realizar uma alteração em um dos arquivos, o que deve acontecer é mais ou menos isso:

<figure class="post-figure medium" style="width: 626px">  
  <img src="/img/posts/web/frontend/grunt/grunt-watch-executing.png" class="responsive-image"
      alt="Grunt Watch executando uma tarefa." title="Grunt Watch executando uma tarefa.">  
  <figcaption class="caption">Grunt Watch executando uma tarefa.</figcaption>
</figure>

Percebam o que aconteceu. O *grunt watch* detectou uma alteração no arquivo *core.js* então executou a task _concat_ 
conforme foi definido na configuração.

### Outros Plugins

Nós demos uma olhada por alto em alguns dos plugins mais básicos, e mais comuns. Deixo claro que todos eles têm ainda 
uma porção de outras configurações possíveis, portanto vale a pena dar uma olhada na documentação detalhada de cada 
um e adapta-los para a sua necessidade.

Mas agora que você já conhece o Grunt, o próximo passo é buscar outros plugins que atendam às suas necessidades, 
como eu falei, tem plugin pra praticamente tudo. Abaixo listo alguns dos plugins que eu utilizo nos meus projetos:

 - <a href="https://github.com/gruntjs/grunt-contrib-imagemin" target="_blank">ImageMin</a>: Compressão de imagens;
 - <a href="https://github.com/gruntjs/grunt-contrib-copy" target="_blank">Copy</a>: Copia arquivos e diretórios;
 - <a href="https://github.com/gruntjs/grunt-contrib-copy" target="_blank">Exec</a>: Executa comandos shell;
 - <a href="https://github.com/gruntjs/grunt-contrib-htmlmin" target="_blank">HTMLMin</a>: Minificação de HTML;
 - <a href="https://github.com/outaTiME/grunt-replace" target="_blank">Replace</a>: Alteração de trechos de um arquivo seguindo um padrão;
 - <a href="https://github.com/gruntjs/grunt-contrib-sass" target="_blank">Sass</a>: Compila arquivos do 
 <a href="http://sass-lang.com/" target="_blank">SASS</a> para Css;
 - <a href="https://github.com/jedrichards/grunt-rsync" target="_blank">Rsync</a>: Utiliza o 
 <a href="http://linux.die.net/man/1/rsync" target="_blank">rsync</a> para sincronizar diretórios. 
 Excelente como alternativa ao FTP para fazer deploy de aplicações.

 Enfim, existem centenas de outros plugins disponíveis, a página oficial do Grunt oferece uma lista de plugins 
 disponíveis, é só ir lá e dar uma olhada.

## Conclusão

<img src="/img/posts/web/frontend/grunt/conclusao.jpg" alt="Conclusão" title="Conclusão" class="section-image">

Então pessoal, com isso já dá pra ter uma boa noção de como usar o *Grunt* nos seus projetos. Lembrando que o *Gruntfile* 
é um arquivo javascript padrão, logo você pode programar lá dentro conforme as suas necessidades, sem problema algum.

Caso alguém queira dar uma olhada no “projeto” exemplo completo, é só conferir aqui: 
https://github.com/ProgramAi/tutorial-grunt.

Vale mencionar que o Grunt não é a única ferramenta de automação de build disponível no mercado, uma outra 
ferramenta que tem muitos adeptos é o <a href="http://gulpjs.com/" target="_blank">Gulp</a>. 
Tem diversos artigos na Web comparando os dois. Vale a pena dar uma avaliada também.

Então, por enquanto é isso. Dúvidas, sugestões, opiniões, por favor mandem nos comentários.

Não esqueçam de acompanhar o blog nas redes sociais.

Valeu e até a próxima.

Brax!