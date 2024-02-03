confirm("Are you sure you want to delete?")
$(document).ready(function(){

    $(".mudaTela").click(function(){
        mudaTela( $(this), $(this).attr("nova"), $(this).attr("animacao"), $(this).attr("tempoAnimacao") );
    });

    $("a.opcoes").click(function(e){
        e.preventDefault();
        $("div.opcoes").slideToggle(500);
    });

    $(".calendario .marcado").click(function(){
        mostraMsgMes($(this).attr("value"));
    });

    const mudaTela = ( atual, nova = null, animacao = "fade", tempoAnimacao = 900 ) => {

        // define a nova tela
        if(!nova){
            nova = parseInt(atual.parent().attr("id").split("tela")[1])+1;
        }

        if(animacao == "fade"){
            $("#tela"+(nova-1)).fadeOut(tempoAnimacao);
            setTimeout(() => {
                $("#tela"+nova).fadeIn(tempoAnimacao)
            }, tempoAnimacao);
        }else{
            $("#tela"+(nova-1)).hide(tempoAnimacao);
            $("#tela"+nova).show(tempoAnimacao);
        }

        if($("#tela"+nova).hasClass("temporizado")){
            $("#tela"+nova+" div").hide();
            telaTemporizada(nova, 0);
        }

        verificaFundo(nova);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        if(nova == 5){
            var audio = new Audio('assets/musica.mp3');
            audio.volume = 0.1;
            audio.play();
        }
        
    }

    const telaTemporizada = ( nTela, contador ) =>{

        const tela = $("#tela"+nTela+" div:eq("+contador+")");
        const temporizador = 500;
        const temporizadorPrimeiraTela = (contador==0?$("#tela"+nTela).attr("tempo"):temporizador);

        setTimeout(() => {
            tela.fadeIn(temporizador);

            setTimeout(() => {
                tela.fadeOut(temporizador);
                if(tela.attr("final") == "true"){
                    mudaTela(null, nTela+1, "fade", 900);
                    verificaFundo(nTela+1);
                }else{
                    telaTemporizada(nTela, contador+1);
                }

            }, tela.attr("tempo") );

        }, temporizadorPrimeiraTela);
        
    }

    const verificaFundo = (nTela) =>{

        const fundo = $("#tela"+nTela).attr("fundo");
        const tempo = $("#tela"+nTela).attr("tempo");

        if(fundo){
            $("body").attr("class", fundo);            
        }
        
    }

    const mostraMsgMes = (texto) =>{

        let titulo;
        let mensagem;

        switch(texto){
            case "19/09": titulo = "19 de Setembro de 2023"; mensagem = "<p>Esse foi o dia que nos conhecemos! Sim, iniciativa minha porque o marrento é 0 atitudes.</p><p> Tu tava tão lindo aquele dia treinando costas, gigante, não sabia se mandava mensagem logo ali. Vergonha não deixou... saí da academia e mandei, é isso. Papo fluindo, até eu cair no golpe do MINHA FRANGUINHA. Nocaute!";break;
            case "20/09": titulo = "20 de Setembro de 2023"; mensagem = "<p>Nosso primeiro treino!<br>Era feriado e treinamos à tarde, de inicio tu não podia ir porque tu trabalhava mas no final conseguiu folga e foi incrível, me chamou de franga umas 84 vezes e nunca mais parou ;-;</p><p></p>";break;
            case "21/09": titulo = "21 de Setembro de 2023"; mensagem = "<p>Sim nós treinamos de novo, 'diferente uma garota que gosta de treinar superiores' lá ele. Continuamos conversando pelo instagram e tu ainda pegava o celular do teu pai pra conversar comigo, o próprio marrento disse que tava perdendo a marra.</p><p> Se não me engano foi esse dia que tu pegou minhas mãos e fez aquela brincadeira do tiktok, o primeiro frio na barriga a gente não esquece.</p>";break;
            case "22/09": titulo = "22 de Setembro de 2023"; mensagem = "<p>5 DIAS: Nosso primeiro rolê e primeiro beijo</p><p> De novo, tomei a atitude de te convidar pra sair porque o marrento era lerdão (mal sabia ela, espera só ganhar intimidade) convidei pra um açaí e eu não tinha ideia de que tu gostava tanto assim, acertei mt. Olha eu nunca fui muito de tomar atitude, mas tu não me beijava nunca, umas 3h de conversando e nada(o papo dos 5 dias surgiu aí), mas tu me deixou confortável pra chegar... e não tava rolando meudeus... que decepção!<br><br> Lembro até hoje do teu olhar quando tava me levando pra casa, ouvindo orochi e com a mão na minha perna. Lembro também de eu ser tão anticarinho q achei tão bobo tu tirar a mão do volante pra trocar a marcha invés de tirar a mão da minha perna, hoje acho uma das coisas mais gays, fofas, ELITE!<br> ps.: esqueci minha correntinha e desde então nunca tirou do pescoço <3 CADÊ A MARRA</p>";break;
            case "27/10": titulo = "27 de Outubro de 2023"; mensagem = "<p>O dia que tu foi pra academia pra fazer 2 exercícios <3 <br> real, nunca vou esquecer. Tu tava com dor de cabeça e achava que não ia ir pra academia e no fim foi, FEZ 2 EXERCÍCIOS!!!!!! me ama menos af</p>";break;
            case "29/10": titulo = "29 de Outubro de 2023"; mensagem = "<p>O storie do Halloween<br> Eu tava no RAP IN CENA e lembro da Maria dizendo:'Para de olhar isso Vitoria' e eu simplesmente EXPLODINDO de ciúme.</p><p> <small>não tinha mais como esconder de mim mesma o que eu tava sentindo</small> <br> Mas mesmo assim, decidi que tu era um idiota e não ia mais falar ctg...</p>";break;
            case "02/11": titulo = "02 de Novembro de 2023"; mensagem = "<p>Mandei mensagem porque tu não saia da minha cabeça</p><p> Eu me senti tão boba, de novo tinha sido feito de troxinha mas corri atrás... nos acertamos mas nunca vou esquecer o 'se eu disser que não to mentindo' ablueblueblue vsfd tmj</p>";break;
            case "05/11": titulo = "05 de Novembro de 2023"; mensagem = "<p>Acho que esse dia foi algo que marcou também, quando saímos pelo centro eu, tu e o gabriel, não éramos um casal e eu tava toda insegura, tu tinha que conversar com a feia...Bem q o Gabriel falou que tu ia ficar comigo <3 </p>";break;
            case "12/11": titulo = "12 de Novembro de 2023"; mensagem = "<p>Ai ai... o que dizer desse dia? Acho que foi doido e perfeito. </p><p>Me buscou em casa e me levou pra dirigir no píer, quase bati no muro fazendo charme mas é isso aí. Foi incrível! Depois começou a chover e tal aquelas coisa hihihi <br> <br> Mais tarde, vieram jogar sinuca(tu é muito ruim ein), odiaram meu guacamole, jogamos bocha e foi tudo de bom parecendo 4 idosos. Verdade ou desafio e vinho... terminando no banheiro do bar aiai ein AIAI</p>";break;
            case "18/11": titulo = "18 de Novembro de 2023"; mensagem = "<p>Fui parar na tua casa depois de uma festa...</p><p>Não era pra isso ter acontecido rapazes<br> Também foi a primeira vez que me disse eu te amo, claro, do teu jeito, a coisa mais fofa: RAWR <3 </p>";break;
            case "22/11": titulo = "22 de Novembro de 2023"; mensagem = "<p>Fizemos ligação de madrugada..</p><p> A gente sempre foi bom de conversar, e o que a gente conversou naquela madrugada me fez ter certeza<br> Tanto que te mandei mensagem no outro dia de manhã dizendo que queria viver isso contigo, ficar muito gay e 'pq q eu to botando trava?'<br> Foi o dia que eu disse 'eu te amo' pela primeira vez. </p>";break;
            case "24/11": titulo = "24 de Novembro de 2023"; mensagem = "<p>Tu veio aqui em casa pela primeira vez</p><p>Fiz uma gororoba que chamei de massa com molho branco, fiz smores e vimos filme. Muuuito boiolinha ai q saudade</p>";break;
            case "26/11": titulo = "26 de Novembro de 2023"; mensagem = "<p>Napoleão em Capão</p><p>Nosso date duplo, filme bosta e companhia maravilhosa. Estando contigo tudo é incrível! Não esquecendo do fliperama onde descobri que sou melhor em alguma coisa que glória, no flaflu!<br> Eu amo te ver dirigindo <br> Eu amo o jeito que me olha <br> Eu amo o jeito que cuida de mim <br> Eu amo tanto ser teu par... <3</p>";break;
            case "02/12": titulo = "02 de Dezembro de 2023"; mensagem = "<p>Pastelzinho e skincare</p><p> Uma das coisas que mais admiro em você, é a paciência que tem comigo. Se não me engano eu surtei esse dia de novo com paranóias e tu simplesmente me abraçou e disse que tava tudo bem.<br> Obrigada por isso.</p>";break;
            case "08/12": titulo = "08 de Dezembro de 2023"; mensagem = "<p>Treinamos pela primeira vez na complex</p><p> Tinha acabado a luz na matriz e então resolvemos ir treinar na complex. Depois a gente foi pro centro e é um dos dias que eu nunca vou esquecer, eu sempre reclamei de que tu não se abria muito comigo e aquele dia tu falou muito sobre ti e eu fiquei tão feliz de tu se sentir bem pra compartilhar tuas coisas comigo, mais uma vez perdi a hora estando na companhia de lucas rodrigues.</p>";break;
            case "10/12": titulo = "11 de Dezembro de 2023"; mensagem = "<p>QUE DOMINGO BOM MEUS AMIGOS</p><p> Fui pra tua casa e o filme(velozes e furiosos desafio em tokyo ein, amei muito demais) que nos viu, não preciso falar mais nada né..</p>";break;
            case "12/12": titulo = "12 de Dezembro de 2023"; mensagem = "<p>O dia q a gente encerrou tudo, eu encerrei...</p><p> olha eu pensei muito se colocava aqui mas faz parte das nossas memórias, afinal foi depois desse dia q a gente de fato não se desgrudou mais..</p>";break;
            case "13/12": titulo = "13 de Dezembro de 2023"; mensagem = "<p>Voltamos a nos falar</p><p>Pra ti ver que é o destino mesmo, postei um storie contigo e apaguei no mesmo segundo, e nesse segundo tu viu... eu comecei a treinar de manhã e foi o maior período de tempo que ficamos sem nos ver</p>";break;
            case "16/12": titulo = "16 de Dezembro de 2023"; mensagem = "<p>Combinamos de treinar de manhã</p><p> A academia era praticamente nossa e foi muito bom te ver de novo, eu tava toda capenga jururu xoxa...</p>";break;
            case "17/12": titulo = "17 de Dezembro de 2023"; mensagem = "<p>Praiamos</p><p>dia que nos encontramos na praia e depois convenci a mãe de dar uma volta no centro comigo pra q eu pudesse te ver. Aquela música do Hariel realmente combinou perfeitamente com o momento e eu guardo até hoje, foi tão bom ter a minha mãe do meu lado e eu poder te ver de novo... tu tava tão lindo, eu não conseguia parar de repetir isso p minha mãe...</p>";break;
            case "24/12": titulo = "24 de Dezembro de 2023"; mensagem = "<p>Missão impossível: achar roupa pro ano novo</p><p>Aa a gente nem tava namorando ainda, mas me sentia como, levando roupinha pra ti provar uiaiaui q baitolinha. Passamos o natal juntos <3 </p>";break;
            case "29/12": titulo = "29 de Dezembro de 2023"; mensagem = "<p>O dia que estraguei meu pedido de namoro ;-; </p><p> Lembro até hoje do berro que eu dei, saí pulando e rindo, lembro também do frio na barriga que senti. O marrento comprou nossas alianças...<3 </p>";break;
            case "01/01": titulo = "01 de Janeiro de 2024"; mensagem = "<section class='text-center'><p class='letra-vermelha'><strong>Nosso dia primeiro <3...</strong></p></section>";break;



            case "final": titulo = "19 de Junho de 2021"; mensagem = "<section class='text-center mt-5 mb-5'><p><strong>O dia em que ela disse<br><span class='letra2 letra-vermelha'>SIM</span></strong></p></section>";break;
        }

        mostraPopUp(true, titulo, mensagem);
        telaFinal = (texto=="final"?true:false);
    }

    

});

let telaFinal = false;

const mostraPopUp = (mostrar, titulo = "Título de testes", mensagem = "Mensagem de teste...") =>{

    if(mostrar){
        $("html, body").animate({ scrollTop: $(".pop-up")[0].offsetTop }, "smooth");
        $(".pop-up").fadeIn(500);
        $(".pop-up h1").html(titulo);
        $(".pop-up div").html(mensagem);
        $(".container").css("opacity", "0.5");
    }else{
        $(".pop-up").fadeOut(500);
        $(".container").css("opacity", "1");

        if(telaFinal){
            $("#tela19").fadeOut(4000);
            setTimeout(() => {
                $("#tela20").fadeIn(6500);
                $("body").attr("class", "fundo6");    
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }, 4000);
        }

    }

}