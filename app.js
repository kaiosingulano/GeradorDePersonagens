let descricaoPersonagem = document.querySelector('.personagem');
let complementoDePersonagem = document.querySelector('.personagem2');
let personagemFinal = [];
let botao = document.querySelector('.botao');
let botao2 = document.querySelector('.botao2');
let easteregg = document.querySelector('.easteregg');


function gerarPersonagem () {

    let generoEscolhido = document.getElementById('genero').value;
    if (generoEscolhido == "E-girl") {
        descricaoPersonagem.innerHTML = `Sua personagem provavelmente se chama na internet de "dark.waifu", "night_lady" ou coisa do tipo, e deve ser da classe Biscoiteira de Rede Social ou então da classe Só Fico em Casa Lendo Fanfic de Vampiro e Assistindo Orgulho e Preconceito. Mas assim, por segurança, me passa o número da sua personagem aí, um amigo meu tá pedindo: <input type="tel" placeholder="Te juro que é pra um amigo" class="telefone"><button class="zap" onclick="zipzop()">Submeter ZipZop</button>`
        botao.style.display = "none";
        botao2.style.display = "block";
        travarOpcao('raca');
        travarOpcao('genero');
        travarOpcao('classe');
        travarOpcao('idade');
        travarOpcao('background');
        travarOpcao('peculiaridade');
        return
    }
    if (generoEscolhido == "WhatsApp 2") {
        descricaoPersonagem.innerHTML = `ERRO! Geração de personagens do gênero Whatsapp 2 está disponível apenas para usuários PREMIUM. Estamos com as últimas vagas de beta gratuitas abertas para testagem. Para garantir a sua vaga como beta tester, clique no gentil corvo ao final da página.`
        botao.style.display = "none";
        botao2.style.display = "block";
        travarOpcao('raca');
        travarOpcao('genero');
        travarOpcao('classe');
        travarOpcao('idade');
        travarOpcao('background');
        travarOpcao('peculiaridade');
        return
    }
    if (generoEscolhido == "Ryan Gosling") {
        descricaoPersonagem.innerHTML = `Coloque o áudio abaixo para tocar, e comece a descer a página lentamente para obter seu personagem. <audio class="helicopter" controls><source src="./audio/ryan.mp3"></audio><p class="ryan">Seu personagem é...</p><p class="ryan">literalmente eu.</p>`
        botao.style.display = "none";
        botao2.style.display = "block";
        travarOpcao('raca');
        travarOpcao('genero');
        travarOpcao('classe');
        travarOpcao('idade');
        travarOpcao('background');
        travarOpcao('peculiaridade');
        return
    }

    if (generoEscolhido == "Aleatório"){
        generoEscolhido = listaDeGeneros[(Math.floor(Math.random() * listaDeGeneros.length))]
        personagemFinal.push(generoEscolhido);
    } else {
        personagemFinal.push(generoEscolhido);
    }

    let racaEscolhida = document.getElementById('raca').value;
    if (racaEscolhida == "Aleatório"){
        racaEscolhida = listaDeRacas[(Math.floor(Math.random() * listaDeRacas.length))]
        personagemFinal.push(racaEscolhida);
    } else {
        personagemFinal.push(racaEscolhida);
    }


    let nomeEscolhido = document.getElementById('nome').value;
    if (nomeEscolhido == "Morthar") {
        descricaoPersonagem.innerHTML = "Olha só, alguém aqui aprecia boa mágica. Clique no corvo e ele te contará um segredo sobre você..."
        botao.style.display = "none";
        botao2.style.display = "block";
        return
    }
    if (nomeEscolhido == "Oskia") {
        descricaoPersonagem.innerHTML = "Esse aí tá precisando de companhia por mil anos em Avernus, topa?"
        botao.style.display = "none";
        botao2.style.display = "block";
        return
    }
    if (nomeEscolhido == "Quirin") {
        descricaoPersonagem.innerHTML = "Nada como um pão-de-queijo e os slots de fireball cheios pela manhã..."
        botao.style.display = "none";
        botao2.style.display = "block";
        return
    }
    if (nomeEscolhido == "Dr. Zabast") {
        descricaoPersonagem.innerHTML = "Antes mesmo de Baldur's Gate 3 esse cara me fez simpatizar com um Mind Flayer. WWE > Poderes psíquicos, apenas."
        botao.style.display = "none";
        botao2.style.display = "block";
        return
    }
    if (nomeEscolhido == "Barvan") {
        descricaoPersonagem.innerHTML = "Uou cara, você não vai me chamar pra um duelo no meu próprio site, vai? Perae, xô catar seu IP aqui, desliga os cookies não na moralzinha."
        botao.style.display = "none";
        botao2.style.display = "block";
        return
    }
    if (nomeEscolhido == "Ulisses") {
        descricaoPersonagem.innerHTML = "É definitivamente uma página bem aventuresca."
        botao.style.display = "none";
        botao2.style.display = "block";
        return
    }
    if (nomeEscolhido == "Johann") {
        descricaoPersonagem.innerHTML = "Quantas bolas de fogo são necessárias pra escapar do inferno? Muitas. E o protótipo de Musashi tem que virar um anjo. E o cabeça de vácuo tem que servir por 1000 anos. E todos os personagens do Hugo tem que morrer. Eu juro que tentei fazer uma piada."
        botao.style.display = "none";
        botao2.style.display = "block";
        return
    }
    if (nomeEscolhido == "Darius") {
        descricaoPersonagem.innerHTML = "Zariel sorrindo, pronta pra chamar as forças reunidas de seu poder infernal, mas esse maluco tinha duas manas azuis em pé. Bendito seja."
        botao.style.display = "none";
        botao2.style.display = "block";
        return
    }
    if (nomeEscolhido == "Cornélio") {
        descricaoPersonagem.innerHTML = "EEEEITA SÔ TEM UM PÁSSARO ESQUISITO MACONHEIRO ALI, ATIRA NESSE TREM"
        botao.style.display = "none";
        botao2.style.display = "block";
        return
    }
    gerarNome(racaEscolhida, "Helicóptero Apache", nomesHA);
    gerarNome("Humano", "Masculino", nomesHumanosM);
    gerarNome("Humano", "Feminino", nomesHumanosF);
    gerarNome("Elfo", "Masculino", nomesElficosM);
    gerarNome("Elfo", "Feminino", nomesElficosF);
    gerarNome("Meio-Elfo", "Masculino", nomesElficosM);
    gerarNome("Meio-Elfo", "Feminino", nomesElficosF);
    gerarNome("Anão", "Masculino", nomesAnaosM);
    gerarNome("Anão", "Feminino", nomesAnaosF);
    gerarNome("Halfling", "Masculino", nomesHalflingM);
    gerarNome("Halfling", "Feminino", nomesHalflingF);
    gerarNome("Meio-Orc", "Masculino", nomesOrcM);
    gerarNome("Meio-Orc", "Feminino", nomesOrcF);
    if (nomeEscolhido != ""){
        personagemFinal.push(nomeEscolhido);
    }

    let sobrenomeEscolhido = document.getElementById('sobrenome').value;
    if (generoEscolhido=="Helicóptero Apache" && sobrenomeEscolhido == ""){
        gerarSobrenomeHA();
    } else {
        gerarSobrenome("Humano", sobrenomesHumanos);
        gerarSobrenome("Elfo", sobrenomesElficos);
        gerarSobrenome("Anão", sobrenomesAnaos);
        gerarSobrenome("Meio-Elfo", sobrenomesElficos);
        gerarSobrenome("Halfling", sobrenomesHalfling);
        gerarSobrenome("Meio-Orc", sobrenomesOrc);
        if (sobrenomeEscolhido != ""){
            personagemFinal.push(sobrenomeEscolhido);
        }
    }
    if (generoEscolhido == "Helicóptero Apache") {
        descricaoPersonagem.innerHTML = `Seu personagem se chama ${personagemFinal[2]} ${personagemFinal[3]}, é o principal helicóptero de ataque do Exército dos Estados Unidos, sucessor do AH-1 Cobra. Este é considerado atualmente o melhor helicóptero de ataque do mundo, sendo empregado em diversos ambientes hostis e com elevadas taxas de sucesso em suas missões. O AH-64 Apache possui um rotor principal de quatro pás e um rotor de cauda de quatro pás. A tripulação senta em conjunto, com o piloto sentado atrás e acima do co-piloto/artilheiro. O modelo avançado, o AH-64D Apache Longbow, está equipado com uma suite de sensores e armamento melhorados. A melhoria de destaque deste modelo sobre a variante A é o Longbow Fire Control Radar, instalado sobre o rotor principal. A posição elevada da redoma permite a detecção e ataque por míssil a alvos localizados atrás de obstáculos (como terreno, árvores ou edifícios). Além disso, seu personagem faz: <audio class="helicopter" controls><source src="./audio/helicopter.mp3"></audio>`
        botao.style.display = "none";
        botao2.style.display = "block";
        travarOpcao('raca');
        travarOpcao('genero');
        travarOpcao('classe');
        travarOpcao('idade');
        travarOpcao('background');
        travarOpcao('peculiaridade');
        return
    }

    let classeEscolhida = document.getElementById('classe').value;
    if (classeEscolhida == "Aleatório"){
        classeEscolhida = listaDeClasses[(Math.floor(Math.random() * listaDeClasses.length))]
        personagemFinal.push(classeEscolhida);
    } else {
        personagemFinal.push(classeEscolhida);
    }

    if (racaEscolhida == "Humano") {
        gerarIdade(15,9,25,16,45,26,55,46,80,56);
    }
    if (racaEscolhida == "Elfo") {
        gerarIdade(80,40,150,81,500,151,700,501,1000,701);
    }
    if (racaEscolhida == "Meio-Elfo") {
        gerarIdade(15,9,25,16,45,26,70,46,120,71);
    }
    if (racaEscolhida == "Anão") {
        gerarIdade(35,15,70,36,120,71,170,121,230,171);
    }
    if (racaEscolhida == "Halfling") {
        gerarIdade(20,9,29,21,40,30,50,41,60,51);
    }
    if (racaEscolhida == "Meio-Orc") {
        gerarIdade(12,6,19,13,30,20,40,31,60,40);
    }

    let backgroundEscolhido = document.getElementById('background').value;
    if (backgroundEscolhido == "Aleatório") {
        backgroundEscolhido = listaDeBackgrounds[(Math.floor(Math.random() * listaDeBackgrounds.length))]
        personagemFinal.push(backgroundEscolhido);
    } else {
        personagemFinal.push("não fez nada de relevante que esteja em meus registros");
    }

    let peculiaridadeEscolhida = document.getElementById('peculiaridade').value;
    if (peculiaridadeEscolhida == "Aleatório") {
        peculiaridadeEscolhida = listaDePeculiaridades[(Math.floor(Math.random() * listaDePeculiaridades.length))]
        personagemFinal.push(peculiaridadeEscolhida);
    } else {
        personagemFinal.push("não possui nenhuma característica incomum ou relevante de conhecimento geral");
        }

    if (personagemFinal[4] == "Nenhuma") {
        descricaoPersonagem.innerHTML = `O personagem se chama ${personagemFinal[2]} ${personagemFinal[3]}, tem ${personagemFinal[5]} anos, é do gênero ${personagemFinal[0]}, pertence à raça dos ${personagemFinal[1]}s. No passado, seu personagem ${personagemFinal[6]}. Além disso, seu personagem ${personagemFinal[7]}.`;
    } else {
    descricaoPersonagem.innerHTML = `O personagem se chama ${personagemFinal[2]} ${personagemFinal[3]}, tem ${personagemFinal[5]} anos, é do gênero ${personagemFinal[0]}, pertence à raça dos ${personagemFinal[1]}s e é da classe ${personagemFinal[4]}. No passado, seu personagem ${personagemFinal[6]}. Além disso, seu personagem ${personagemFinal[7]}.`;
    }

    botao.style.display = "none";
    botao2.style.display = "block";
    travarOpcao('raca');
    travarOpcao('genero');
    travarOpcao('classe');
    travarOpcao('idade');
    travarOpcao('background');
    travarOpcao('peculiaridade');
}

function gerarNome(raca, genero, lista) {
    let nomeEscolhido = document.getElementById('nome').value;
    let racaEscolhida = personagemFinal[1];
    let generoEscolhido = personagemFinal[0];
    if (racaEscolhida == raca && generoEscolhido == genero && nomeEscolhido == ""){
        nomeEscolhido = lista[(Math.floor(Math.random() * lista.length))]
        personagemFinal.push(nomeEscolhido);
    } 
}

function gerarSobrenomeHA() {
    sobrenomeEscolhido = sobrenomesHA[(Math.floor(Math.random() * sobrenomesHA.length))]
        personagemFinal.push(sobrenomeEscolhido);
}

function gerarSobrenome(raca, lista) {
    let sobrenomeEscolhido = document.getElementById('sobrenome').value;
    let racaEscolhida = personagemFinal[1];
    if (racaEscolhida == raca && sobrenomeEscolhido == ""){
        sobrenomeEscolhido = lista[(Math.floor(Math.random() * lista.length))]
        personagemFinal.push(sobrenomeEscolhido);
    } 
}

function gerarIdade(max1,min1,max2,min2,max3,min3,max4,min4,max5,min5) {
    let faseDaVida = document.getElementById('idade').value;
    let idadeEscolhida;
    if (faseDaVida == "Aleatório"){
        faseDaVida = listaDeIdades[(Math.floor(Math.random() * listaDeIdades.length))]
    }
    if (faseDaVida == "Criança") {
        idadeEscolhida = Math.floor(Math.random() * ((max1+1)-min1) + min1);
    }
    if (faseDaVida == "Jovem") {
        idadeEscolhida = Math.floor(Math.random() * ((max2+1)-min2) + min2);
    }
    if (faseDaVida == "Adulto") {
        idadeEscolhida = Math.floor(Math.random() * ((max3+1)-min3) + min3);
    }
    if (faseDaVida == "Meia-idade") {
        idadeEscolhida = Math.floor(Math.random() * ((max4+1)-min4) + min4);
    }
    if (faseDaVida == "Tábua da beirada") {
        idadeEscolhida = Math.floor(Math.random() * ((max5+1)-min5) + min5);
    }
    personagemFinal.push(idadeEscolhida);
}

function gerarBackground() {}

function travarOpcao(id) {
    let seletor = document.getElementById(id);
    seletor.setAttribute("disabled", true);
}
function liberarOpcao(id) {
    let seletor = document.getElementById(id);
    seletor.removeAttribute("disabled");
}

function reiniciarGerador() {
    personagemFinal = [];
    botao.style.display = "block";
    botao2.style.display = "none";
    descricaoPersonagem.innerHTML = "";
    complementoDePersonagem.innerHTML = "";
    document.getElementById('caixa-nome').reset();
    document.getElementById('caixa-sobrenome').reset();
    limparCampos('raca');
    limparCampos('genero');
    limparCampos('classe');
    limparCampos('idade');
    limparCampos('background');
    limparCampos('peculiaridade');
    liberarOpcao('raca');
    liberarOpcao('genero');
    liberarOpcao('classe');
    liberarOpcao('idade');
    liberarOpcao('background');
    liberarOpcao('peculiaridade');
}

function limparCampos (id, atributo) {
    document.getElementById(id).selectedIndex = 0;
}

function romario () {
    let easter = document.querySelector('.easter');
    easter.classList.toggle('easter-rise');
}

function zipzop() {
    complementoDePersonagem.style.display = "block";
    complementoDePersonagem.innerHTML = "Agradecemos. Em breve um Bruno, Matheus ou Lucas entrará em contato com a digníssima (sou um hosmi de paleivra).";
}