function lancamentos(){ 
    let titulo = document.querySelectorAll('.card-title')
    let img = document.querySelectorAll(".card img")
    let descricao = document.querySelectorAll(".card-text")


    let arrayTitulos = ["Zhenwu Shijie – True Martial World", "Spirit Blade Mountain", "Regressor of the Fallen Family", "Hitoribocchi no Isekai Kouryaku", "The Player Hides His Past", "Ijiranaide, Nagatoro-san"];

    let arrayImg = ['../img/card-lancamento/card-1.webp', "../img/card-lancamento/card-2.webp", "../img/card-lancamento/card-3.webp", "../img/card-lancamento/card-4.jpg", "../img/card-lancamento/card-5.webp", "../img/card-lancamento/card-6.webp"]

    let arrayDescricao = ["Com os mais fortes especialistas dos 33 Céus, o Imperador Humano e seu oponente estava envolvido em uma batalha final. O Imperador Humano destruiu o Mundo Abissal e um cartão roxo misterioso que havia selado a arma poderosa do Rei Demônio Abissal...", "Há uma montanha chamada Spirit Blade Mountain. Dentro ou pela montanha reside assistentes, também conhecidos como espírito Spirit Blade Masters. Juntos, eles formam o clã Spirit Blade. Spirit Blade é sinônimo de magia, como é a Lâmina suas formas Espirituais. A relação atual entre a Montanha e o real Spirit Blade é desconhecida...", "Uma vida cheia de arrependimentos. Quando ele percebeu seus erros e decidiu levar uma nova vida, já era tarde demais. Sua família já tinha partido.Ele suportou cada dia com puro ódio. Finalmente, no fim de seu sofrimento, seu desejo alcançou os céus – um desejo não perdoado.Ele desafia o destino para erguer sua espada...", "Exilado da classe? Checado Ser transportado para um mundo alternativo com seus colegas? Checado Encontrar um Deus em uma espécie de Limbo entre os dois mundos? Checado Pegar uma skill roubada? Não gostaria de ser você, já foram todas vendidas..", "O jogo de realidade virtual “História do continente de Archana” se tornou realidade, e os “jogadores”, que estavam sincronizados com os humanos, apareceram para proteger o mundo. Lee Hoyeon, que era só um assalariado comum, assumiu o corpo do personagem que tinha criado no ensino fundamental, “Grandfell Claudi Arpeus Romeo.”...", "A estudante Hayase Nagatoro adora passar seu tempo livre fazendo uma coisa, que é intimidar seu Senpai! Depois que Nagatoro e seus amigos tropeçam nos desenhos da aspirante a artista, eles se divertem em intimidar impiedosamente o tímido Senpai. Nagatoro resolve continuar seu jogo cruel e o visita diariamente para que ela possa forçar Senpai a fazer o que lhe interessar no momento, especialmente se isso o deixar desconfortável...."]

    for(let i = 0; i < arrayTitulos.length; i++){
        titulo[i].innerText = arrayTitulos[i];
        img[i].src = arrayImg[i]
        descricao[i].innerText = arrayDescricao[i]
    }
}

if (window.location.href.indexOf("lancamentos.html") !== -1) {
    document.addEventListener("DOMContentLoaded", lancamentos);
}

function linkButton(){
    let botaoLerMais = document.querySelectorAll(".card-body a");
    let arrayLinks = [".","https://mangaschan.net/manga/solo-leveling/","https://mangaschan.net/manga/kaijuu-8-gou/","https://mangaschan.net/manga/jujutsu-kaisen/", "https://mangaschan.net/manga/one-punch-man/", "https://mangaschan.net/manga/baki-dou/","https://mangaschan.net/manga/vagabond/"]

    for(let i = 0; i < arrayLinks.length; i++){
        botaoLerMais[i].href = arrayLinks[i];
    }
}
if (window.location.href.indexOf("index.html") !== -1) {
    document.addEventListener("DOMContentLoaded", linkButton);
}