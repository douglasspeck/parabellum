//#region ---------------- Declaring Variables ---------------- */
var allowTurn = true;
var turnNum = 1;
var dayCycle = true;
var gameTime = 7;
var multi = 0.3;
var multi_Str = 0.93;
var multi_Dex = 1.2;
//#endregion ------------------------------------------------------ */

$(document).ready(function(){
    setup();
});

//#region ------------------ DAY-NIGHT SYSTEM ----------------- */

function dayNight() {
    if(gameTime <= 13){
        multi_Str = 1 + (multi * (gameTime-7) / 6);
        multi_Dex = 1 + (multi * (7-gameTime) / 6);
    }
    else {
        multi_Dex = 1 + (multi * (gameTime-19) / 6);
        multi_Str = 1 + (multi * (13+gameTime) / 12);
    }
}

//#endregion ------------------------------------------------------ */

function setup() {

    //#region ------------------- Clock  System ------------------- */

    var clockPic = new Array();
    clockPic = [
        "clock0.png",
        "clock1.png",
        "clock2.png",
        "clock3.png",
        "clock4.png",
        "clock5.png",
        "clock6.png",
        "clock7.png",
        "clock8.png",
        "clock9.png",
        "clock10.png",
        "clock11.png",
        "clock12.png",
        "clock13.png",
        "clock14.png",
        "clock15.png",
        "clock16.png",
        "clock17.png",
        "clock18.png",
        "clock19.png",
        "clock20.png",
        "clock21.png",
        "clock22.png",
        "clock23.png",
    ];

    $('.clock').html(`<img class="clock-img" src="img/${clockPic[gameTime]}">`);

    //#endregion -------------------------------------------------- */
    
    //#region ----------------------- CARDS ----------------------- */

    var card = new Array();
    card[0] = {id:0, name:"Alma Penada", class:"", faction:"", range:"", description:"", group:"soul", str:0, dex:0, wis:0, effect:"", image:""};
    card[1] = {id:1, name:"Afrodite", class:"greatGod", faction:"zeus", range:"back", description:"Afrodite é a deusa da beleza, ela nasceu na ilha de Chipre. Filha de Zeus e de Dione, afrodite, casou-se com Hefesto, porém teve muitos amantes mesmo assim. Ela teve diversos filhos, com deuses e mortais também, como Enéias, Priapo, Eros e etc. Ela também teve inimigas, por conta de sua beleza, como Hera", group:"", str:2, dex:8, wis:15, effect:"convert", image:"crosshair"};
    card[2] = {id:2, name:"Ágora", class:"spell", faction:"neutral", range:"spell", description:"Ágora é um termo grego que significa a reunião de qualquer natureza, geralmente empregada por Homero como uma reunião geral de pessoas. A ágora parece ter sido uma parte essencial da constituição dos primeiros estados gregos.", group:"", str:0, dex:0, wis:0, effect:"burn", image:"fire"};
    card[3] = {id:3, name:"Amazonas", class:"minion", faction:"ares", range:"front", description:"", group:"amazon", str:6, dex:6, wis:3, effect:"", image:"group"};
    card[4] = {id:4, name:"Apolo", class:"greatGod", faction:"ares", range:"front", description:"Apolo é um deus da mitologia greco-romana, considerado um dos maiores deuses do Olimpo. A representação mais comum de Apolo é de um homem nu, jovem, bonito e brilhante, na qual remete a ideia de ele fosse o próprio Sol.", group:"", str:9, dex:12, wis:4, effect:"sunlight", image:"group"};
    card[5] = {id:5, name:"Aquiles", class:"hero", faction:"zeus", range:"front", description:"", group:"", str:9, dex:8, wis:3, effect:"hero", image:"group"};
    card[6] = {id:6, name:"Aquilon", class:"spell", faction:"neutral", range:"front", description:"Vento Norte", group:"", str:0, dex:0, wis:0, effect:"wind", image:"group"};
    card[7] = {id:7, name:"Árion", class:"god", faction:"poseidon", range:"middle", description:"", group:"", str:5, dex:13, wis:2, effect:"", image:"shield"};
    card[8] = {id:8, name:"Ártemis", class:"greatGod", faction:"ares", range:"middle", description:"Ártemis, deusa grega, divindade responsável pelas atividades da caça, é representada como uma imagem lunar arisca e selvagem, constantemente seguida de perto por feras selvagens, especialmente por cães ou leões. Ela traz sempre consigo, no abrigo de suas mãos, um arco dourado, nos ombros um coldre de setas, e pode ser vista trajando uma túnica de tamanho curto.", group:"", str:6, dex:13, wis:6, effect:"", image:"shield"};
    card[9] = {id:9, name:"Asas de Nice", class:"spell", faction:"neutral", range:"front", description:"", group:"", str:0, dex:0, wis:0, effect:"nice", image:"group"};
    card[10] = {id:10, name:"Átropos", class:"monster", faction:"", range:"middle", description:"Está em um grupo, que se chama Moiras. Elas Regiam o destino dos humanos. Não são questionadas por ninguém, nem mesmo por Zeus. Átropos era a responsável de cortar o fio da vida das pessoas, com sua tesoura encantada. Ela sempre anda, com sua tesoura, e o fio. Era Magra, e tinha uma estatura normal.", group:"moira", str:5, dex:6, wis:4, effect:"call", image:"shield"};
    card[11] = {id:11, name:"Auster", class:"spell", faction:"neutral", range:"spell", description:"Vento Sul", group:"", str:0, dex:0, wis:0, effect:"clearWind", image:"fire"};
    card[12] = {id:12, name:"Baco", class:"greatGod", faction:"minerva", range:"back", description:"Baco, também conhecido como Deus do vinho, das festas e do delírio místico, é fruto do relacionamento de Sêmele e Zeus. Considerado o protetor da vinhas e do vinho. Ele também é visto como o protetor da fertilidade e do teatro.", group:"", str:5, dex:9, wis:11, effect:"wineRain", image:"crosshair"};
    card[13] = {id:13, name:"Belona", class:"god", faction:"marte", range:"back", description:"", group:"", str:7, dex:3, wis:10, effect:"", image:"crosshair"};
    card[14] = {id:14, name:"Bóreas", class:"spell", faction:"neutral", range:"front", description:"Vento Norte", group:"", str:0, dex:0, wis:0, effect:"wind", image:"group"};
    card[15] = {id:15, name:"Brutus", class:"minion", faction:"neutral", range:"back", description:"Marco Júnio Bruto, foi um patrício, líder político de orientação conservadora republicana romana, e militar romano. Depois de ser adotado por seu tio, começou a usar o nome Quinto Servílio Cépio Bruto, mas voltou a usar seu nome original.", group:"", str:6, dex:4, wis:5, effect:"spy", image:"crosshair"};
    card[16] = {id:16, name:"Caos", class:"titan", faction:"zeus", range:"spell", description:"Caos, a mais antiga das entidades cósmicas, provavelmente reunia em si mesmo tudo o que viria posteriormente a existir, Caos foi considerado por Hesíodo como a primeira divindade a surgir no universo, portanto o mais velho dos Deuses, também conhecidos como Deuses primordiais, representava a desordem inicial do mundo.", group:"", str:0, dex:0, wis:0, effect:"caos", image:"fire"};
    card[17] = {id:17, name:"Caos", class:"titan", faction:"jupiter", range:"spell", description:"Caos, a mais antiga das entidades cósmicas, provavelmente reunia em si mesmo tudo o que viria posteriormente a existir, Caos foi considerado por Hesíodo como a primeira divindade a surgir no universo, portanto o mais velho dos Deuses, também conhecidos como Deuses primordiais, representava a desordem inicial do mundo.", group:"", str:0, dex:0, wis:0, effect:"caos", image:"fire"};
    card[18] = {id:18, name:"Capacete de Minerva", class:"spell", faction:"minerva", range:"spell", description:"O Capacete Romano alguns capacetes tem uma crista vermelha no topo são de metais e bem firmes eles vem desde da cabeça até a lateral do rosto. Os capacetes baseado no estilo antigo da Grécia mantiveram-se populares entre esses cavaleiros durante séculos. Eles utilizavam um modelo mais bonito e cerimonial do que o dos funcionários e até mesmo do que os modelos utilizados pelos centuriões.", group:"", str:0, dex:0, wis:0, effect:"", image:"fire"};
    card[19] = {id:19, name:"Capacete Invisível de Hades", class:"spell", faction:"hades", range:"spell", description:"O Capacete Invisível de Hades é um capacete que foi forjado por alguns Ciclopes, ele da invisibilidade para Hades quando ele está vestindo o capacete para poder sair a superfície sem ele ser visto, e assim podendo andar sobre a terra. ", group:"", str:0, dex:0, wis:0, effect:"helmetHades", image:"fire"};
    card[20] = {id:20, name:"Capacete Invisível de Plutão", class:"spell", faction:"plutao", range:"spell", description:"", group:"", str:0, dex:0, wis:0, effect:"helmetPlutao", image:"fire"};
    card[21] = {id:21, name:"Caríbdis", class:"monster", faction:"poseidon", range:"front", description:"Em tempos mais antigos, Caríbdis era mais ligado a lendas de marinheiros e pescadores do que propriamente à mitologia grega. Na mitologia grega, era uma criatura marinha protetora de limites territoriais no mar. Em outra tradição, seria um turbilhão criado por Poseidon.", group:"", str:8, dex:5, wis:2, effect:"", image:"group"};
    card[22] = {id:22, name:"Casa de Banho", class:"spell", faction:"minerva", range:"spell", description:"Embora os romanos não tenham inventado os banhos públicos, pois os caldeus e os gregos já faziam usos dessa prática, mas foram os romanos que popularizaram os banhos públicos. Durante o império (27 a.C - 476 d.C) os banhos públicos se tornaram algo comum do cotidiano do povo romano, havendo banhos públicos em todas as províncias e na maioria das cidades.", group:"", str:0, dex:0, wis:0, effect:"", image:"fire"};
    card[23] = {id:23, name:"Centauro", class:"monster", faction:"neutral", range:"front", description:"Eles representam o instinto animal em junção com a inteligência humana, metáfora das ações dos homens numa situação de perda de controle.", group:"", str:3, dex:7, wis:5, effect:"", image:"group"};
    card[24] = {id:24, name:"Cérbero", class:"monster", faction:"hades", range:"front", description:"Essas criaturas vivem em florestas e montanhas e se alimentam de carne crua. Apresentam muita energia física e aparecem, geralmente, em bando.", group:"", str:11, dex:3, wis:1, effect:"", image:"group"};
    card[25] = {id:25, name:"Cérbero", class:"monster", faction:"plutao", range:"front", description:"Cérbero, na mitologia grega, era um monstruoso cão de três cabeças que guardava a entrada do mundo inferior, deixando as almas entrarem, mas jamais saírem e despedaçando os mortais que por lá se aventurassem. Ele era o cão de guarda de Hades, o deus dos mortos.", group:"", str:11, dex:3, wis:1, effect:"", image:"group"};
    card[26] = {id:26, name:"Ceres", class:"greatGod", faction:"netuno", range:"front", description:"Ceres, a deusa romana das plantas, equivale à Deméter na mitologia grega. Ela era filha de Saturno e Cibele, era também amante e irmã de Júpiter, normalmente era vista com um cesto de flores e frutos, um cetro e uma coroa feita de orelhas de trigo.", group:"", str:10, dex:7, wis:8, effect:"", image:"group"};
    card[27] = {id:27, name:"César", class:"hero", faction:"neutral", range:"front", description:"Caio Júlio César, mais conhecido apenas como Júlio César, foi um líder romano importante no processo de transição do modelo republicano para o Império. Nascido em 100 a.C. viveu até 44 a.C. quando foi assassinado. ", group:"", str:9, dex:3, wis:8, effect:"", image:"group"};
    card[28] = {id:28, name:"Cetos", class:"monster", faction:"neutral", range:"front", description:"", group:"", str:10, dex:3, wis:2, effect:"", image:"group"};
    card[29] = {id:29, name:"Céu", class:"titan", faction:"plutao", range:"back", description:"", group:"", str:15, dex:12, wis:3, effect:"burn2", image:"crosshair"};
    card[30] = {id:30, name:"Chamado dos Mortos", class:"spell", faction:"plutao", range:"spell", description:"", group:"", str:0, dex:0, wis:0, effect:"revive", image:"fire"};
    card[31] = {id:31, name:"Cibele, Magna Mater", class:"god", faction:"neutral", range:"middle", description:"", group:"", str:6, dex:8, wis:6, effect:"", image:"shield"};
    card[32] = {id:32, name:"Ciclope", class:"monster", faction:"poseidon", range:"front", description:"São seres gigantes, só tem um olho no meio de sua testa, sua única fraqueza é  o seu olho. Na mitologia grega, os ciclopes trabalhavam como ferreiros, fabricavam as ferramentas de deuses como o tridente de Poseidon, raios utilizados por Zeus e o capacete que dava  invisibilidade para Hades.", group:"", str:10, dex:4, wis:1, effect:"", image:"group"};
    card[33] = {id:33, name:"Ciclope", class:"monster", faction:"netuno", range:"front", description:"São seres gigantes, só tem um olho no meio de sua testa, sua única fraqueza é  o seu olho. Na mitologia grega, os ciclopes trabalhavam como ferreiros, fabricavam as ferramentas de deuses como o tridente de Poseidon, raios utilizados por Zeus e o capacete que dava  invisibilidade para Hades.", group:"", str:10, dex:4, wis:1, effect:"", image:"group"};
    card[34] = {id:34, name:"Cinturão de Hipólita", class:"spell", faction:"ares", range:"spell", description:"A composição simbólica do cinturão espelha a vocação de seu portador, configura a humildade ou o poder. Recebeu de seu pai, o deus  Ares, um cinturão mágico como símbolo de  poder e autoridade sobre as amazonas. Para consegui-lo, precisaria  conquistar o coração da guerreira.", group:"amazon", str:0, dex:0, wis:0, effect:"evoke4", image:"fire"};
    card[35] = {id:35, name:"Cloto", class:"monster", faction:"neutral", range:"middle", description:"", group:"moira", str:6, dex:4, wis:5, effect:"call", image:"shield"};
    card[36] = {id:36, name:"Coliseu", class:"spell", faction:"neutral", range:"spell", description:"Em Roma, na Itália, foi construído durante 6 anos, para a inauguração teve 100 dia de jogos, execuções, batalhas navais, combates de gladiadores, lutas e caçadas animais, foi lugar de entretenimento durante 5 séculos, no século V, teve um terremoto ", group:"", str:0, dex:0, wis:0, effect:"burn", image:"fire"};
    card[37] = {id:37, name:"Coroa de Nice", class:"spell", faction:"neutral", range:"front", description:"", group:"", str:0, dex:0, wis:0, effect:"nice", image:"group"};
    card[38] = {id:38, name:"Cronos ", class:"titan", faction:"atena", range:"back", description:"", group:"", str:7, dex:8, wis:15, effect:"freezeTime", image:"crosshair"};
    card[39] = {id:39, name:"Cupido", class:"monster", faction:"jupiter", range:"back", description:"Cupido, Deus Romano do Amor, retratado com seu arco e flecha e bem conhecido por causar desastres amorosos. Suas flechas podiam despertar amor ou paixão em suas vítimas. Muitas de suas ele era tido como benéfico em razão da felicidade que concedia aos casais.", group:"", str:2, dex:6, wis:7, effect:"", image:"crosshair"};
    card[40] = {id:40, name:"Décima", class:"monster", faction:"neutral", range:"middle", description:"Ela é uma velha parca que cuida do fio da vida até o dia do cortar do fio que é quando a pessoa morre ela é uma mãe cuidadora . Pais delas e as outras parcas Zeus e Témis. As parcas são todas segas nem mesmo Zeus pode contestar suas decisões.", group:"parca", str:5, dex:6, wis:4, effect:"call", image:"shield"};
    card[41] = {id:41, name:"Deméter", class:"greatGod", faction:"poseidon", range:"front", description:"", group:"", str:10, dex:7, wis:8, effect:"", image:"group"};
    card[42] = {id:42, name:"Diana", class:"greatGod", faction:"marte", range:"middle", description:"Na mitologia romana, Diana era uma deusa virgem. De acordo com os mitos romanos, Diana era filha de Júpiter e Latona , irmã gêmea de Febo . Diana era uma caçadora incansável, seus cultos eram realizados em templos rústicos no meio da floresta onde animais eram sacrificados.", group:"", str:6, dex:13, wis:6, effect:"", image:"shield"};
    card[43] = {id:43, name:"Diómedes", class:"god", faction:"ares", range:"front", description:"Diomedes, um herói grego, valente, forte e corajoso, é filho de área o Deus da guerra. Diomedes feito a deusa afroditi, em uma batalha. Possui um escudo e uma lança que eram da deusa atena, e além disso ele é protegido por ela.", group:"", str:10, dex:5, wis:5, effect:"", image:"group"};
    card[44] = {id:44, name:"Dionísio", class:"greatGod", faction:"atena", range:"back", description:"Dionísio é o deus do vinho também, conhecido na mitologia Romana como Baco deus da natureza e da fertilidade e tem poder de drogas poderosas. Filho de Zeus com uma mortal que morreu que ainda estava grávida, Zeus retirou o bebê e colocou dentro de sua perna para continuar a gestação.", group:"", str:5, dex:9, wis:11, effect:"wineRain", image:"crosshair"};
    card[45] = {id:45, name:"Dragão de Ares", class:"monster", faction:"ares", range:"front", description:"Criatura presente na mitologia de muitos povos e civilizações. Sendo representada como animais reptilianos, de grandes dimensões, normalmente com asas, plumas, hálito de fogo, e até poderes mágicos.  Há muitos anos, os povos antigos descobriram fósseis de dinossauros e os associavam a monstros mitológicos.", group:"", str:8, dex:7, wis:0, effect:"", image:"group"};
    card[46] = {id:46, name:"Dragão de Marte", class:"monster", faction:"marte", range:"front", description:"Criatura presente na mitologia de muitos povos e civilizações. Sendo representada como animais reptilianos, de grandes dimensões, normalmente com asas, plumas, hálito de fogo, e até poderes mágicos.  Há muitos anos, os povos antigos descobriram fósseis de dinossauros e os associavam a monstros mitológicos.", group:"", str:8, dex:7, wis:0, effect:"", image:"group"};
    card[47] = {id:47, name:"Édipo", class:"hero", faction:"neutral", range:"back", description:"Édipo é um personagem da mitologia grega, famoso por matar seu pai Laio e casar-se com sua mãe Jocasta e ter quatro filhos. Libertou o povo tebano da maldição da esfinge. Foi Rei de Tebas. Ao descobrir a verdade sobre a sua origem, acabou furando os próprios olhos, e sua mãe-mulher se enforcou.", group:"", str:4, dex:4, wis:12, effect:"edipo", image:"crosshair"};
    card[48] = {id:48, name:"Elfiates", class:"minion", faction:"neutral", range:"back", description:"Efialtes tem um irmão gêmeo, e juntos e são conhecidos como Aloídas, eram filhos de Poseidon e Ifimedia. Efialtes é considerado um gigante, tinha um crescimento estupendo, em que cada ano cresciam cerca de 50 cm em largura e cerca de 150 cm em altura, além de aumentar extraordinariamente a sua força.", group:"", str:5, dex:5, wis:5, effect:"spy", image:"crosshair"};
    card[49] = {id:49, name:"Eneias", class:"hero", faction:"marte", range:"front", description:"Eneias era filho de Afrodite e do mortal Anquises. foi o herói da roma. ele era forte e corajoso.  Durante a Guerra de Tróia, Enéias foi um dos mais respeitados heróis troianos, talvez inferior somente a Heitor. Ele combateu frente a frente alguns dos grandes heróis gregos.", group:"", str:10, dex:5, wis:5, effect:"hero", image:"group"};
    card[50] = {id:50, name:"Ênio", class:"god", faction:"ares", range:"back", description:"Ênio na mitologia grega, é uma Deusa conhecida pelo epítedo de destruidores de cidades e frequentemente representada coberto de sangue e levando armas de guerra. Filha de Zeus e Hera, e em algumas versões, era filha ou irmão de Eris, com frequência é retratada junto a Fobos e Deimos Como aquela que castiga com uma vara.", group:"", str:7, dex:3, wis:10, effect:"", image:"crosshair"};
    card[51] = {id:51, name:"Equidna", class:"monster", faction:"jupiter", range:"front", description:"Equidna é uma criatura monstruosa , com tronco de uma bela mulher (ou ninfa) e cauda de serpente em lugar dos membros. Era gigante, como um titã. Por isso era a única capaz de se unir com o horrendo Tifão. Vivia numa caverna no Peloponeso ou na Síria.", group:"", str:7, dex:5, wis:3, effect:"", image:"group"};
    card[52] = {id:52, name:"Eros", class:"god", faction:"zeus", range:"back", description:"O Eros é filho de Afrodite e Ares. Ele é o deus do amor, quando ele atira uma flecha em alguma pessoa ela fica apaixonada rapidamente pela primeira pessoa que ela ver.  Ele é, normalmente, retratado em pinturas acompanhado da mãe.", group:"", str:3, dex:6, wis:11, effect:"", image:"crosshair"};
    card[53] = {id:53, name:"Escolápio", class:"god", faction:"neutral", range:"back", description:"Escolápio é filho do deus Apolo e Coronis.  Ele foi entregue aos cuidados de Quiron que lhe ensinou a medicina. Conforme crescia, foi adquirindo uma grande habilidade na medicina, descobrindo uma maneira de ressuscitar os mortos tornando-se assim o Deus da medicina. Seu símbolo é um bastão com uma serpente enrolada.", group:"", str:3, dex:7, wis:10, effect:"revive", image:"crosshair"};
    card[54] = {id:54, name:"Escudo", class:"spell", faction:"atena", range:"", description:"", group:"", str:0, dex:0, wis:0, effect:"shield", image:""};
    card[55] = {id:55, name:"Esfinge", class:"spell", faction:"neutral", range:"back", description:"A Esfinge é uma mulher com corpo de leão, ela fica na frente do portão da cidade de Tebas, ela só deixava as pessoas entrarem na cidade de acertarem a seguinte charada: que animal anda de 4 patas de dia 2 de tarde e 3 patas a noite.", group:"", str:0, dex:0, wis:0, effect:"sphinx", image:"crosshair"};
    card[56] = {id:56, name:"Esteno ", class:"monster", faction:"atena", range:"front", description:"", group:"gorgon", str:4, dex:4, wis:9, effect:"gorgonWis", image:"group"};
    card[57] = {id:57, name:"Euríale ", class:"monster", faction:"atena", range:"front", description:"", group:"gorgon", str:4, dex:9, wis:4, effect:"gorgonDex", image:"group"};
    card[58] = {id:58, name:"Euro", class:"spell", faction:"neutral", range:"back", description:"Vento Leste: Euro era o nome que os gregos antigos e a geografia da Grécia Antiga (em grego: Εύρος) davam ao vento leste. Esse era o vento que trazia a tempestade para os marinheiros, calor e a chuva do Leste para a terra. Seu nome entre os romanos era Valtorno. Filho de Eos e Astreu.", group:"", str:0, dex:0, wis:0, effect:"wind", image:"crosshair"};
    card[59] = {id:59, name:"Fauna", class:"minion", faction:"neutral", range:"middle", description:"Era a deusa romana da fertilidade das florestas, campos e rebanhos. Tinha como descendentes Fauno e os faunos. Sua origem e significados são obscuros. No começo Fauna era chamada somente de A deusa amável, da crença de que sua bondade se estendia a toda a natureza.", group:"fauno", str:3, dex:3, wis:9, effect:"", image:"shield"};
    card[60] = {id:60, name:"Fauno", class:"minion", faction:"neutral", range:"middle", description:"O fauno do latim Faunus ou ainda Fatuus, é um personagem da mitologia romana, que cuidava dos pastores e rebanhos, o fauno tem cabeça e tronco de humano, pernas e chifre de bode, cultuado no norte palatino, protetor dos pastores e rebanhos.", group:"fauno", str:3, dex:3, wis:9, effect:"", image:"shield"};
    card[61] = {id:61, name:"Favonius", class:"spell", faction:"neutral", range:"middle", description:"Vento Oeste", group:"", str:0, dex:0, wis:0, effect:"wind", image:"shield"};
    card[62] = {id:62, name:"Febo", class:"greatGod", faction:"marte", range:"middle", description:"Deus Romano equivalente ao grego Apolo, cujo nome lhe passou a ser um epíteto. Irmão gêmeo de Diana, também conhecida por Ártemis, e também filho de Júpiter com Latona. Personificava a luz, era o deus das músicas, poesias, Deus-sol e o mais belo de roma, ao nascer derrotou uma serpente píton.", group:"", str:8, dex:12, wis:5, effect:"sunlight", image:"shield"};
    card[63] = {id:63, name:"Fênix", class:"monster", faction:"neutral", range:"front", description:" Na mitologia grega, fênix se trata do pássaro de fogo que ao morrer se incendiava, mas acabava renascendo das próprias cinzas. Com isso, poderia viver pela eternidade. ", group:"", str:3, dex:7, wis:5, effect:"", image:"group"};
    card[64] = {id:64, name:"Fogo Azul", class:"spell", faction:"hades", range:"spell", description:"", group:"", str:0, dex:0, wis:0, effect:"blueFire", image:"fire"};
    card[65] = {id:65, name:"Fortuna", class:"god", faction:"minerva", range:"back", description:"A fortuna é a deusa da sorte, do azar e da esperança para a religião romana. Ela era considerada filha de Júpiter. Os romanos achavam que ela era um símbolo da justiça e que ela controlava a sorte e o azar dos homens conforme seus atos.", group:"", str:5, dex:3, wis:12, effect:"buy", image:"crosshair"};
    card[66] = {id:66, name:"Gaia", class:"titan", faction:"ares", range:"front", description:"Gaia é um elemento primordial é latente. Criada pelo Caos. Podemos-lhe considerar a Mãe-Terra, porque sempre está com muitas plantas e cuidando da biodiversidade da natureza. Ela é mãe de diversas divindades ou até pode se considerar monstros. Teve de marido Urano, em que fez vários problemas em sua vida.", group:"", str:15, dex:4, wis:9, effect:"buy4", image:"group"};
    card[67] = {id:67, name:"Grifo", class:"monster", faction:"minerva", range:"middle", description:"O Grifo é uma criatura lendária de origens asiáticas milenares. Ele é um híbrido metade águia e metade leão. É representante de deuses e invocado em rituais e cerimônias, associado à justiça, à luz e à autoridades divinas e ao ciclo da morte e do renascimento.", group:"", str:10, dex:2, wis:3, effect:"", image:"shield"};
    card[68] = {id:68, name:"Harpia", class:"monster", faction:"neutral", range:"middle", description:"Na mitologia grega, Harpias eram mostrou alados com o rosto de uma velha feia, com garras afiadas. A maioria das imagens e dos contos falam que quando elas apareçam era numa aparência bonita, mas quando pegava o que queria revelava sua verdadeira forma.", group:"", str:2, dex:10, wis:3, effect:"", image:"shield"};
    card[69] = {id:69, name:"Hefesto", class:"greatGod", faction:"poseidon", range:"front", description:"", group:"", str:15, dex:2, wis:8, effect:"buy", image:"group"};
    card[70] = {id:70, name:"Hera", class:"greatGod", faction:"zeus", range:"back", description:"Hera era uma deusa da mitologia grega, conhecida como a rainha do Olimpo por ter sido casada com Zeus. Ela representava o nascimento, casamento monogâmico, a fidelidade e a fertilidade. Tinha uma personalidade forte, marcada pelo orgulho e ciúmes", group:"", str:3, dex:9, wis:13, effect:"", image:"crosshair"};
    card[71] = {id:71, name:"Héracles", class:"hero", faction:"zeus", range:"front", description:"Na mitologia grega, Teseu foi um herói. Os Atenienses cultivavam muito este herói,  pois acreditavam que ele tinha sido o fundador de Atenas. Ele era forte e corajoso. Além disso era considerado um  espécie de herói reformador e modernizador. Adriane é filha de Minos, rei de Creta. Conta a lenda que ela ajudou Teseu, seu grande amor a sair do labirinto do Minotauro seguindo um lovelo de lã.", group:"", str:18, dex:9, wis:3, effect:"hero", image:"group"};
    card[72] = {id:72, name:"Hércules ", class:"hero", faction:"jupiter", range:"front", description:"Hércules é filho de Alcmena e Júpiter.  Juno resolve lançar um feitiço sobre Hércules. Com isso, ele matou sua família. Após isso, ele teve que cumprir 12 difíceis tarefas como: matar o Leão de Neméia, Matar a Hidra e entre outros.", group:"", str:16, dex:10, wis:4, effect:"hero", image:"group"};
    card[73] = {id:73, name:"Hermes", class:"greatGod", faction:"atena", range:"middle", description:"Hermes é um dos deuses mais antigos da mitologia grega, também conhecido como mensageiro dos deuses. Também considerado deus dos comerciantes, dos ladrões, das viagens, da magia, do alfabeto, dos números, dos pesos e medidas, e da amizade.", group:"", str:5, dex:12, wis:8, effect:"steal", image:"shield"};
    card[74] = {id:74, name:"Hidra", class:"monster", faction:"neutral", range:"middle", description:"", group:"", str:8, dex:3, wis:4, effect:"", image:"shield"};
    card[75] = {id:75, name:"Hipocampo", class:"monster", faction:"poseidon", range:"middle", description:"Ele É a montaria de Poseidon e de seu Exército. O hipocampo possui a metade de cima com patas dianteiras, pescoço e cabeça de cavalo. Já a parte inferior lembra um peixe, golfinho e até uma serpente marinha.", group:"", str:7, dex:7, wis:1, effect:"", image:"shield"};
    card[76] = {id:76, name:"Hipocampo", class:"monster", faction:"netuno", range:"middle", description:"Ele É a montaria de Poseidon e de seu Exército. O hipocampo possui a metade de cima com patas dianteiras, pescoço e cabeça de cavalo. Já a parte inferior lembra um peixe, golfinho e até uma serpente marinha.", group:"", str:7, dex:7, wis:1, effect:"", image:"shield"};
    card[77] = {id:77, name:"Hipólita", class:"god", faction:"ares", range:"front", description:"Minha  personagem  se  chama  Hipólita  a  antiga  rainha  das  amazonas. Não  se  sabe  muito  sobre  sua  historia,  mas  sabe-se  que  ela  possui  um  cinturão  mágico,  sua  arma para  ataque. Hipolita  morreu  em  uma  batalha.", group:"amazon", str:8, dex:7, wis:5, effect:"evoke4", image:"group"};
    card[78] = {id:78, name:"Juno", class:"greatGod", faction:"jupiter", range:"back", description:"Juno, deusa, esposa de júpiter, contém 5 filhos. Rainha dos deuses, deusa do matrimônio e da união, da monogamia e da fidelidade. é representada pelo pavão, sua ave favorita.  Todos tinham ódio pela a Juno, inimigos faziam parte da sua rotina. Sua beleza era encantadora, que brilhava em seus olhos.", group:"", str:3, dex:9, wis:13, effect:"", image:"crosshair"};
    card[79] = {id:79, name:"Laquesis", class:"monster", faction:"neutral", range:"middle", description:"Laquesis era a moira que determinava quanto tempo o ser irá viver. Nem Zeus pode interferir em suas ações, pois poderia corromper a ordem natural do universo. Na Odisséia ela já representa as fiandeiras, perdendo seu papel singular.", group:"moira", str:4, dex:5, wis:6, effect:"call", image:"shield"};
    card[80] = {id:80, name:"Legião Romana", class:"minion", faction:"neutral", range:"front", description:"O Foi o exército o responsável por conquistar diversos povos, desde os gregos, aos cartagineses, sírios, egípcios, dentre tantos outros, que fizeram de Roma o Império mais extenso da antiguidade era a maior unidade militar do exército romano, contando com mais de 3 000 homens.", group:"", str:11, dex:3, wis:1, effect:"nexus", image:"group"};
    card[81] = {id:81, name:"Leto", class:"god", faction:"plutao", range:"front", description:"", group:"", str:7, dex:5, wis:8, effect:"", image:"group"};
    card[82] = {id:82, name:"Lira de Nice", class:"spell", faction:"neutral", range:"front", description:"", group:"", str:0, dex:0, wis:0, effect:"nice", image:"group"};
    card[83] = {id:83, name:"Loba Capitolina", class:"monster", faction:"marte", range:"front", description:"", group:"", str:1, dex:1, wis:1, effect:"evoke1", image:"group"};
    card[84] = {id:84, name:"Medusa", class:"monster", faction:"atena", range:"front", description:"A Medusa, na mitologia grega, era um monstro ctônico do sexo feminino, uma das três Górgonas. Filha de Fórcis e Ceto, quem quer que olhasse diretamente para ela seria transformado em pedra.", group:"gorgon", str:9, dex:4, wis:4, effect:"gorgonStr", image:"group"};
    card[85] = {id:85, name:"Melinoe", class:"god", faction:"hades", range:"back", description:"", group:"", str:5, dex:7, wis:8, effect:"convert", image:"crosshair"};
    card[86] = {id:86, name:"Mercúrio", class:"greatGod", faction:"minerva", range:"middle", description:"Mercúrio era o deus dos viajantes, ladrões e do comércio, sendo também, a personificação da inteligência. Ele era encarregado de levar as mensagens de um deus para o outro, para isso, contava com alguns coisas como uma bolsa, sandálias, capacete com asas, varinha de condão e o caduceu. ", group:"", str:4, dex:13, wis:8, effect:"drain", image:"shield"};
    card[87] = {id:87, name:"Minotauro", class:"monster", faction:"neutral", range:"back", description:"O Minotauro é um dos personagens mais conhecidos da mitologia grega. Segundo o mito, o Minotauro era um ser de cabeça, cauda de touro e corpo de homem que habitava um labirinto na ilha de Creta. O pedido de Minos a Poseidon impediu que ele vivesse normalmente mudando o futuro do Minotauro.", group:"", str:12, dex:2, wis:1, effect:"", image:"crosshair"};
    card[88] = {id:88, name:"Morta", class:"monster", faction:"neutral", range:"middle", description:"Morta (Átropos), ela é responsável pela dor, entre os romanos elas são conhecidas como Parcas, as suas características físicas são: usa uma capa preta, que não dá para ver o seu rosto, sua capa tampa os seus pés,suas mãos são negras e sem pele, só com osso.", group:"parca", str:6, dex:4, wis:5, effect:"call", image:"shield"};
    card[89] = {id:89, name:"Nice", class:"god", faction:"neutral", range:"front", description:"", group:"", str:10, dex:6, wis:4, effect:"nice", image:"group"};
    card[90] = {id:90, name:"Nix", class:"god", faction:"hades", range:"middle", description:"Efialtes tem um irmão gêmeo, e juntos e são conhecidos como Aloídas, eram filhos de Poseidon e Ifimedia. Efialtes é considerado um gigante, tinha um crescimento estupendo, em que cada ano cresciam cerca de 50 cm em largura e cerca de 150 cm em altura, além de aumentar extraordinariamente a sua força.", group:"", str:8, dex:5, wis:7, effect:"moonlight", image:"shield"};
    card[91] = {id:91, name:"Nona", class:"monster", faction:"neutral", range:"middle", description:"", group:"parca", str:4, dex:5, wis:6, effect:"call", image:"shield"};
    card[92] = {id:92, name:"Noto", class:"spell", faction:"neutral", range:"spell", description:"Vento Sul", group:"", str:0, dex:0, wis:0, effect:"clearWind", image:"fire"};
    card[93] = {id:93, name:"Nox", class:"god", faction:"plutao", range:"front", description:"", group:"", str:8, dex:5, wis:7, effect:"moonlight", image:"group"};
    card[94] = {id:94, name:"Oceano", class:"titan", faction:"poseidon", range:"back", description:"", group:"", str:10, dex:15, wis:5, effect:"buff", image:"crosshair"};
    card[95] = {id:95, name:"Oceano", class:"titan", faction:"netuno", range:"back", description:"", group:"", str:10, dex:15, wis:5, effect:"buff", image:"crosshair"};
    card[96] = {id:96, name:"Odisseu", class:"hero", faction:"atena", range:"front", description:"Odisseu foi Rei de Itaca, foi casado com Penopole teve um filho, Telêmaco. Idealizador do “Cavalo de Tróia” foi responsável pela entrada do exército grego, garantindo o sucesso da batalha.", group:"", str:7, dex:5, wis:8, effect:"", image:"group"};
    card[97] = {id:97, name:"Pã", class:"god", faction:"poseidon", range:"back", description:"Na mitologia grega, Pã é o deus dos bosques, dos pastores e rebanhos. Com sua aparência metade bode com cascos e metade humano, porém com chifres. Muitos são as histórias sobre quem são os seus pais verdadeiros, alguns lhe atribuindo como filho de Hermes e Penélope.", group:"", str:5, dex:8, wis:12, effect:"call", image:"crosshair"};
    card[98] = {id:98, name:"Palma da Vitória", class:"spell", faction:"neutral", range:"front", description:"", group:"", str:0, dex:0, wis:0, effect:"nice", image:"group"};
    card[99] = {id:99, name:"Pegasus", class:"monster", faction:"poseidon", range:"middle", description:"O pégasus é um ser mitológico grego que se parece com um cavalo alado, ele surgiu do sangue de Medusa depois de ser decapitada por Perseu.", group:"", str:6, dex:8, wis:1, effect:"", image:"shield"};
    card[100] = {id:100, name:"Pegasus", class:"monster", faction:"netuno", range:"middle", description:"O pégasus é um ser mitológico grego que se parece com um cavalo alado, ele surgiu do sangue de Medusa depois de ser decapitada por Perseu.", group:"", str:6, dex:8, wis:1, effect:"", image:"shield"};
    card[101] = {id:101, name:"Perséfone", class:"god", faction:"hades", range:"middle", description:"Perséfone, e é casada com seu tio Hades, Perséfone foi raptada por ele, e o comeu o fruto proibido, a romã, ela é a deusa do submundo na mitologia grega. Também é considerada  deusa na agricultura, das estações, das flores, dos frutos e da fertilidade.", group:"", str:3, dex:11, wis:6, effect:"", image:"shield"};
    card[102] = {id:102, name:"Proserpina", class:"god", faction:"plutao", range:"middle", description:"", group:"", str:3, dex:11, wis:6, effect:"", image:"shield"};
    card[103] = {id:103, name:"Psique - Alma", class:"god", faction:"plutao", range:"back", description:"", group:"", str:5, dex:7, wis:8, effect:"convert", image:"crosshair"};
    card[104] = {id:104, name:"Quimera", class:"monster", faction:"jupiter", range:"middle", description:"Uma criatura que foi de Tifão e Equidna, mas ganhou outras quatro cabeças, uma de leão, uma de dragão, uma de cabra e uma cauda de cabeça de cobra, mais duas asas. Embora em todos os mitos de Quimera se refira a um animal específico, na arte da história ela aparece de diferentes jeitos, então fala-se das quimeras. ", group:"", str:5, dex:7, wis:3, effect:"", image:"shield"};
    card[105] = {id:105, name:"Raio de Júpiter", class:"spell", faction:"jupiter", range:"spell", description:"Foi a primeira arma feita pelos ciclopes para a primeira Titanomaquia, que destruiu o Monte Ótris e derrubou Cronos de seu trono. É um cilindro de bronze celestial de alto grau, com 60 cm de comprimento. Tem explosivos, que possuem potencial infinito, sendo que nem Júpiter era capaz de controlá-lo a 100% de seu poder.", group:"", str:0, dex:0, wis:0, effect:"", image:"fire"};
    card[106] = {id:106, name:"Raio de Zeus", class:"spell", faction:"zeus", range:"spell", description:"O Raio-Mestre é o símbolo de poder de Zeus e também é a arma mais poderosa e perigosa já feita nas forjas dos ciclopes. É através dele que são produzidos todos os outros raios.", group:"", str:0, dex:0, wis:0, effect:"", image:"fire"};
    card[107] = {id:107, name:"Rômulo e Remo", class:"monster", faction:"marte", range:"front", description:"Rômulo e Remo são irmãos gêmeos conta a lenda que eram filhos do deus gregos Ares ou Marte um dos quais, Rômulo, foi o fundador da cidade de Roma e seu primeiro rei. Amúlio, rei tirano ao saber do nascimento das crianças as jogou no rio Tibre.e foram encontrados por uma loba,que teria os amamentado e cuidado deles.", group:"", str:1, dex:1, wis:1, effect:"evoke1", image:"group"};
    card[108] = {id:108, name:"Sátiro", class:"monster", faction:"neutral", range:"back", description:"", group:"", str:2, dex:5, wis:8, effect:"", image:"crosshair"};
    card[109] = {id:109, name:"Saturno", class:"greatGod", faction:"minerva", range:"back", description:"Saturno Deus romano do tempo, agricultura, riqueza, geração, dissolução, renovação periódica e libertação. As tradições romanas dizem que esse Deus foi o criador de Roma, foi homenageado e respeitado, mas tinha uma pequena ambição por poder.", group:"", str:7, dex:8, wis:15, effect:"freezeTime", image:"crosshair"};
    card[110] = {id:110, name:"Sereia", class:"monster", faction:"netuno", range:"middle", description:"", group:"", str:2, dex:6, wis:7, effect:"convert", image:"shield"};
    card[111] = {id:111, name:"Silvano", class:"god", faction:"netuno", range:"back", description:"Silvano é um deus da Roma Antiga, das florestas. Mora em grutas e vaga pelos vales e pelas montanhas, Silvanus protege os rebanhos de gado, afastar os lobos, e promovendo a sua fertilidade e divindade. Uma oferenda a Silvano é para garantir a saúde do gado.", group:"", str:5, dex:8, wis:12, effect:"call", image:"crosshair"};
    card[112] = {id:112, name:"Tânatos", class:"god", faction:"hades", range:"back", description:"", group:"", str:7, dex:5, wis:8, effect:"", image:"crosshair"};
    card[113] = {id:113, name:"Terra", class:"titan", faction:"marte", range:"front", description:"", group:"", str:15, dex:4, wis:9, effect:"buy4", image:"group"};
    card[114] = {id:114, name:"Teseu", class:"hero", faction:"zeus", range:"front", description:"", group:"", str:15, dex:9, wis:6, effect:"hero", image:"group"};
    card[115] = {id:115, name:"Tifão", class:"monster", faction:"poseidon", range:"front", description:"Tifão é um titã da mitologia. Os gregos diziam ser ele o pai dos ventos ferozes e violentos e o responsável pela seca do Rio Nilo e deus da morte. Do seu casamento com Equidna nasceram vários dos monstros que povoam as aventuras de heróis e deuses.", group:"", str:9, dex:5, wis:1, effect:"evoke2", image:"group"};
    card[116] = {id:116, name:"Tridente", class:"spell", faction:"poseidon", range:"spell", description:"É a arma do rei do Mar e a arma mais poderosa entre os Deuses e todos os humanos que andam sobre a Terra e pelo mar, o tridente é super poderoso e ele é super fortes ", group:"", str:0, dex:0, wis:0, effect:"evoke3", image:"fire"};
    card[117] = {id:117, name:"Tridente", class:"spell", faction:"netuno", range:"spell", description:"É a arma do rei do Mar e a arma mais poderosa entre os Deuses e todos os humanos que andam sobre a Terra e pelo mar, o tridente é super poderoso e ele é super fortes ", group:"", str:0, dex:0, wis:0, effect:"evoke3", image:"fire"};
    card[118] = {id:118, name:"Tufão", class:"god", faction:"netuno", range:"front", description:"", group:"", str:9, dex:5, wis:1, effect:"evoke2", image:"group"};
    card[119] = {id:119, name:"Ulisses", class:"hero", faction:"minerva", range:"back", description:"Ulisses transcendeu o âmbito da mitologia grega e se converteu em símbolo da capacidade do homem para superar as adversidades. Ulisses (em grego, Odisseu) nasceu na ilha de Ítaca, filho do rei Laerte, que lhe legou o reino, e Anticléia.", group:"", str:7, dex:5, wis:8, effect:"hero", image:"crosshair"};
    card[120] = {id:120, name:"Urano", class:"titan", faction:"hades", range:"front", description:"Urano personificava o céu. Foi gerado espontaneamente por Gaia (a Terra) e casou-se com sua mãe. Urano teve numerosos filhos (e irmãos), ele odiava seus filhos e mantinha todos presos no interior de Gaia. Cronos, o mais jovem, assumiu a liderança da luta contra Urano e, usando uma foice o castrou seu pai e jogou seus testículos ao mar .", group:"", str:15, dex:12, wis:3, effect:"burn2", image:"group"};
    card[121] = {id:121, name:"Vênus", class:"greatGod", faction:"jupiter", range:"back", description:"A deusa Vênus é a deusa do amor e da beleza na mitologia romana, ela representou o ideal de beleza feminina. Em uma das versões de seu mito ela seria filha de Júpiter, deus dos céus, e Dione, deusa das ninfas. Noutra versão da lenda, ela nasceu da espuma do mar e dentro de uma concha.", group:"", str:2, dex:8, wis:15, effect:"convert", image:"crosshair"};
    card[122] = {id:122, name:"Vesta", class:"god", faction:"minerva", range:"middle", description:"", group:"", str:4, dex:10, wis:6, effect:"", image:"shield"};
    card[123] = {id:123, name:"Vulcano", class:"greatGod", faction:"netuno", range:"front", description:"Vulcano, segundo a mitologia romana, era o Deus do Fogo, filho de Júpiter e Juno. Vulcano é o Deus mais feio de todos, e quando nasceu, foi lançado ao mar por sua mãe pela falta de beleza. A figura do deus era a de um ferreiro que criava raios, inclusive os raios que Júpiter usava. ", group:"", str:15, dex:2, wis:8, effect:"buy", image:"group"};
    card[124] = {id:124, name:"Vulturnus", class:"spell", faction:"neutral", range:"back", description:"Vento Leste", group:"", str:0, dex:0, wis:0, effect:"wind", image:"crosshair"};
    card[125] = {id:125, name:"Zéfiro", class:"spell", faction:"neutral", range:"middle", description:"Vento Oeste", group:"", str:0, dex:0, wis:0, effect:"wind", image:"shield"};    

    //#endregion -------------------------------------------------- */

    //#region ------------------ Converting Data ------------------ */

    var fac = new Array();
    fac = ["Zeus","Júpiter","Hades","Plutão","Atena","Minerva","Poseidon","Netuno","Ares","Marte","Neutro"];

    var faction = new Array();
    for (var ii=0; ii<card.length; ii++) {
        if (card[ii].faction == "zeus") {
            faction[ii] = fac[0];
        } else if (card[ii].faction == "jupiter") {
            faction[ii] = fac[1];
        } else if (card[ii].faction == "hades") {
            faction[ii] = fac[2];
        } else if (card[ii].faction == "plutao") {
            faction[ii] = fac[3];
        } else if (card[ii].faction == "atena") {
            faction[ii] = fac[4];
        } else if (card[ii].faction == "minerva") {
            faction[ii] = fac[5];
        } else if (card[ii].faction == "poseidon") {
            faction[ii] = fac[6];
        } else if (card[ii].faction == "netuno") {
            faction[ii] = fac[7];
        } else if (card[ii].faction == "ares") {
            faction[ii] = fac[8];
        } else if (card[ii].faction == "marte") {
            faction[ii] = fac[9];
        } else if (card[ii].faction == "neutral") {
            faction[ii] = "Neutro";
        }
    }

    var range = new Array();
    range["back"] = "Artilharia";
    range["middle"] = "Flancos";
    range["front"] = "Infantaria";
    range["spell"] = "Magia";
    range[""] = "Magia Especial";

    //#endregion -------------------------------------------------- */

    //#region ----------------------- DECKS ----------------------- */

    var deck = new Array();
        deck[0] = [
            1,5,16,52,70,71,106,114,
            2,9,10,14,23,28,35,37,47,48,55,58,68,74,79,82,87,92,98,108,125];        // Zeus
        deck[1] = [
            17,39,51,72,78,104,105,123,
            6,9,11,15,23,27,31,36,37,40,53,59,60,61,63,68,80,82,88,89,91,98,124];   // Jupiter
        deck[2] = [
            19,24,64,85,90,101,112,120,
            2,9,10,14,23,28,35,37,47,48,55,58,68,74,79,82,87,92,98,108,125];        // Hades
        deck[3] = [
            20,25,29,30,81,93,102,103,
            6,9,11,15,23,27,31,36,37,40,53,59,60,61,63,68,80,82,88,89,91,98,124];   // Plutão
        deck[4] = [
            38,44,54,56,57,73,84,96,
            2,9,10,14,23,28,35,37,47,48,55,58,68,74,79,82,87,92,98,108,125];        // Atena
        deck[5] = [
            12,18,22,65,67,86,109,119,122,
            6,9,11,15,23,27,31,36,37,40,53,59,60,61,63,68,80,82,88,89,91,98,124];   // Minerva
        deck[6] = [
            7,21,32,41,69,75,94,97,99,115,116,
            2,9,10,14,23,28,35,37,47,48,55,58,68,74,79,82,87,92,98,108,125];        // Poseidon
        deck[7] = [
            26,33,76,95,100,110,111,117,118,123,
            6,9,11,15,23,27,31,36,37,40,53,59,60,61,63,68,80,82,88,89,91,98,124];   // Netuno
        deck[8] = [
            3,4,8,34,43,45,50,66,77,
            2,9,10,14,23,28,35,37,47,48,55,58,68,74,79,82,87,92,98,108,125];        // Ares
        deck[9] = [
            13,32,46,49,62,83,107,113,
            6,9,11,15,23,27,31,36,37,40,53,59,60,61,63,68,80,82,88,89,91,98,124];   // Marte

    var myDeck = new Array();
    for(var i=0;i<deck.length;i++) {
        myDeck[i] = new Array();
        for(var j=0;j<deck[i].length;j++) {
            var cardNumber = deck[i][j];
            myDeck[i][j] = card[cardNumber];
        }
    }

    var chosenDeck = 0;
    function chooseFaction() {
        var choice = prompt(
            'Escolha sua Facção:\n 0 – Zeus\n 1 – Júpiter\n 2 – Hades\n 3 – Plutão\n 4 – Atena\n 5 – Minerva\n 6 – Poseidon\n 7 – Netuno\n 8 – Ares\n 9 – Marte','Insira um número de 0 a 9');
        if (choice >=0 && choice <10) {
            txt = "Você escolheu a facção de " + fac[choice] + ".";
            alert(txt);
            chosenDeck = choice;
        } else {
            txt = "Algo deu errado. Insira um número de 0 a 9";
            alert(txt);
            faction();
        };
    }
    chooseFaction();
    var opponentDeck = 6;

    //#endregion -------------------------------------------------- */

    //#region --------------------- Sort Cards -------------------- */

    var l,m,n;
    for(l=0; l<myDeck[chosenDeck].length; l++) {
        m = Math.floor(Math.random() * l);
        n = myDeck[chosenDeck][l];
        myDeck[chosenDeck][l] = myDeck[chosenDeck][m];
        myDeck[chosenDeck][m] = n;
    }
    for(l=0; l<myDeck[opponentDeck].length; l++) {
        m = Math.floor(Math.random() * l);
        n = myDeck[opponentDeck][l];
        myDeck[opponentDeck][l] = myDeck[opponentDeck][m];
        myDeck[opponentDeck][m] = n;
    }

    //#endregion -------------------------------------------------- */

    //#region --------------------- Deal Hands -------------------- */

    var numberOfCards = 10;
    var n = 0;
    while(n < numberOfCards){
        var cardId = myDeck[opponentDeck][n];
        
        $('.opponent.hand').append(drawCard(cardId));
        console.log('opponent draws card '+cardId.name);
        n++;
    }
    n = 0;
    while(n < numberOfCards){
        var cardId = myDeck[chosenDeck][n];

        $('.player.hand').append(drawCard(cardId));
        console.log('player draws card '+cardId.name);
        n++;
    }
    
    //#endregion -------------------------------------------------- */

    //#region ---------------- Return Card Graphics --------------- */

    function drawCard(cardId){
        var newStr = Math.floor(cardId.str * multi_Str);
        var newDex = Math.floor(cardId.dex * multi_Dex);
        var attributes = newStr + newDex + cardId.wis;
        return '<div class="card" data-cardid="'+cardId.id+'"><span class="'+cardId.effect+'"></span><label>'+cardId.name+'</label><span class="num">'+attributes+'</span><span class="iden">"'+cardId.id+'"</span> <i class="fa '+cardId.image+'"></i></div>';
    }

    //#endregion -------------------------------------------------- */

    //#region --- Select a Card and Highlight where it can play --- */

    $('.player.hand').on('click','.card',function(){

        if($(this).hasClass('selected')) {
            var info = 
                toUnicodeVariant(toUpperCase(removeAccent(card[$(this).data('cardid')].name)), 'bold') + "\n" +
                "Facção: " + faction[card[$(this).data('cardid')].id] + "\n" +
                "Fileira: " + range[card[$(this).data('cardid')].range] + "\n" + "\n" +
                toUnicodeVariant("Atributos:",'bold') + "\n" +
                "Força: " + card[$(this).data('cardid')].str + " • " + multi_Str + " = " + Math.floor(card[$(this).data('cardid')].str * multi_Str) + "\n" +
                "Destreza: " + card[$(this).data('cardid')].dex + " • " + multi_Dex + " = " + Math.floor(card[$(this).data('cardid')].dex * multi_Dex) + "\n" +
                "Sabedoria: " + card[$(this).data('cardid')].wis + "\n";
            alert(info);
        } else {
            $('.card').removeClass('selected');
            $(this).addClass('selected');
            var getRange = card[$(this).data('cardid')].range;
            $('.player.board .range').removeClass('highlight');
            $('.player.board .'+getRange).addClass('highlight');
        }
    });

    //#endregion -------------------------------------------------- */

    //#region ------ Play Card when You Click Allowable Range ----- */

    $('.board.player .range').on('click',function(){

        if($('.card.selected').length && allowTurn==true){

            var getCard = card[$('.card.selected').data('cardid')];
            var getRange = card[$('.card.selected').data('cardid')].range;
            var getEffect = card[$('.card.selected').data('cardid')].effect;

            $('.clock').html(`<img class="clock-img" src="/img/${clockPic[gameTime]}">`);
            console.log('this is turn '+turnNum);

            $('.player.board .range').removeClass('highlight');

            $('.card.selected').remove();

            $('.player.board .'+getRange+'.range').append(drawCard(getCard));
            console.log('player draws card');

            //#region ----------------------- EFFECTS --------------------- */
            //#endregion -------------------------------------------------- */

            runOpponentTurn();
            updateScores();

        };

    });

    //#endregion ----------------------------------------------------- */
    
    //#region ------------------ Opponnent's turn ----------------- */

    function runOpponentTurn(){

        var cardId = Math.floor(Math.random() * myDeck[opponentDeck].length);
        $('.opponent.hand').append(drawCard(myDeck[opponentDeck][cardId]));
        console.log('opponent draws card');

        allowTurn = false;
        $('.your-turn').hide();
        $('.opponent-turn').show();
        $('.opponent-overlay').show();
        $('.opponent .thinking').show();

        var thinkTime = Math.floor(Math.random() * 2000) + 500;
        var numCards = $('.opponent.hand .card').length;

        setTimeout(function(){

            if (turnNum < 5){
                // play no effect cards if possible, let some build up first

                $('.opponent.hand .card').each(function(){
                    var thisId = parseInt($(this).data('cardid'));
                    if(card[thisId].effect==''){
                        $(this).addClass('possible');
                    }
                });

                var numPossibles = $('.opponent.hand .card.possible').length;

                if (numPossibles == "0"){
                    console.log('opponent playing random card');
                    // Just play a random card
                    var playThisCard = Math.floor(Math.random() * numCards) + 1;
                    var getCard = $('.opponent.hand .card:nth-of-type('+playThisCard+')').data('cardid');
                    $('.opponent.hand .card:nth-of-type('+playThisCard+')').remove();
                }else{
                    console.log('opponent playing blank card');
                    // Play one of the possibles
                    var getCard = $('.opponent.hand .card.possible:first').data('cardid');
                    $('.opponent.hand .card.possible:first').remove();
                }

            }else{
                // start firing out the special cards (although go blank if that's all that's left)

                $('.opponent.hand .card').each(function(){
                    var thisId = parseInt($(this).data('cardid'));
                    if(card[thisId].effect=!''){
                        $(this).addClass('possible');
                    }
                });

                var numPossibles = $('.opponent.hand .card.possible').length;

                if (numPossibles == "0"){
                    console.log('opponent playing random card');
                    // Just play a random card
                    var playThisCard = Math.floor(Math.random() * numCards) + 1;
                    var getCard = $('.opponent.hand .card:nth-of-type('+playThisCard+')').data('cardid');
                    $('.opponent.hand .card:nth-of-type('+playThisCard+')').remove();
                }else{
                    console.log('opponent playing attack or buff card');
                    // Play one of the possibles
                    var getCard = $('.opponent.hand .card.possible:first').data('cardid');
                    $('.opponent.hand .card.possible:first').remove();
                }

            }

            $('.opponent.hand .card').removeClass('possible');

            getCard = parseInt(getCard);
            var getRange = card[getCard].range;
            var getEffect = card[getCard].effect;

            $('.opponent.board .'+getRange).append(drawCard(card[getCard]));
            console.log('opponent draws card');

            updateScores();

            allowTurn = true;
            $('.opponent-overlay').hide();
            $('.opponent .thinking').hide();
            $('.your-turn').show();
            $('.opponent-turn').hide();

            var cardId = Math.floor(Math.random() * myDeck[chosenDeck].length);
            $('.player.hand').append(drawCard  (myDeck[chosenDeck][cardId]));

            if(parseInt($('.player.board .total').text()) > 199 && parseInt($('.opponent.board .total').text()) > 199){
                if(parseInt($('.player.board .total').text()) > parseInt($('.opponent.board .total').text())){
                    alert('Fim de Jogo! Você venceu!');
                }else if(parseInt($('.opponent.board .total').text()) > parseInt($('.player.board .total').text())){
                    alert('Fim de jogo! Você perdeu!');
                }else{
                    alert('Fim de jogo! É um empate!');
                }
            }else if(parseInt($('.player.board .total').text()) > 150){
                alert('Fim de Jogo! Você venceu!');
            }else if(parseInt($('.opponent.board .total').text()) > 150){
                alert('Fim de jogo! Você perdeu!');
            }

        },thinkTime);

        turnNum++;

        if (dayCycle==true) {
            gameTime++;
        }
        if (gameTime==24) {
            gameTime=0;
        }

    }

    //#endregion -------------------------------------------------- */

    //#region ------------------- Update Scores ------------------- */

    function updateScores(){

        var opponent_back=0;
        var opponent_middle=0;
        var opponent_front=0;
        var opponent_total=0;
        var player_back=0;
        var player_middle=0;
        var player_front=0;
        var player_total=0;
        var myAttributes;
        
        $('.opponent.board .back.range .card').each(function(){
            myAttributes = Math.floor(card[$(this).data('cardid')].str * multi_Str) + Math.floor(card[$(this).data('cardid')].dex * multi_Dex) + card[$(this).data('cardid')].wis;
            opponent_back = opponent_back + myAttributes;
            opponent_total = opponent_total + myAttributes;
        });
        $('.opponent.board .middle.range .card').each(function(){
            myAttributes = Math.floor(card[$(this).data('cardid')].str * multi_Str) + Math.floor(card[$(this).data('cardid')].dex * multi_Dex) + card[$(this).data('cardid')].wis;
            opponent_middle = opponent_middle + myAttributes;
            opponent_total = opponent_total + myAttributes;
        });
        $('.opponent.board .front.range .card').each(function(){
            myAttributes = Math.floor(card[$(this).data('cardid')].str * multi_Str) + Math.floor(card[$(this).data('cardid')].dex * multi_Dex) + card[$(this).data('cardid')].wis;
            opponent_front = opponent_front + myAttributes;
            opponent_total = opponent_total + myAttributes;
        });
        $('.player.board .back.range .card').each(function(){
            myAttributes = Math.floor(card[$(this).data('cardid')].str * multi_Str) + Math.floor(card[$(this).data('cardid')].dex * multi_Dex) + card[$(this).data('cardid')].wis;
            player_back = player_back + myAttributes;
            player_total = player_total + myAttributes;
        });
        $('.player.board .middle.range .card').each(function(){
            myAttributes = Math.floor(card[$(this).data('cardid')].str * multi_Str) + Math.floor(card[$(this).data('cardid')].dex * multi_Dex) + card[$(this).data('cardid')].wis;
            player_middle = player_middle + myAttributes;
            player_total = player_total + myAttributes;
        });
        $('.player.board .front.range .card').each(function(){
            myAttributes = Math.floor(card[$(this).data('cardid')].str * multi_Str) + Math.floor(card[$(this).data('cardid')].dex * multi_Dex) + card[$(this).data('cardid')].wis;
            player_front = player_front + myAttributes;
            player_total = player_total + myAttributes;
        });

        $('.opponent.board .back.range .counter').text(opponent_back);
        $('.opponent.board .middle.range .counter').text(opponent_middle);
        $('.opponent.board .front.range .counter').text(opponent_front);
        $('.opponent .total').text(opponent_total);
        $('.player.board .back.range .counter').text(player_back);
        $('.player.board .middle.range .counter').text(player_middle);
        $('.player.board .front.range .counter').text(player_front);
        $('.player .total').text(player_total);

    //#endregion ------------------------------------------------------ */

};

//#region -------------------- Formatting Text -------------------- */

function removeAccent(str) {

    withAccent = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";

    noAccent = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    novastr="";
    for(i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<withAccent.length; a++) {
            if (str.substr(i,1)==withAccent.substr(a,1)) {
                novastr+=noAccent.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
}

function toLowerCase(str) {

    upperCase = "AÀÁÂÃÄÅÆBCÇDÐEÈÉÊËFGHIÌÍÎÏJKLMNÑOÒÓÔÕÖØPQRŔSTUÙÚÛÜVWXYÝZ";

    lowerCase = "aàáâãäåæbcçdðeèéêëfghiìíîïjklmnñoòóôõöøpqrŕstuùúûüvwxyýz";
    novastr="";
    for(i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<upperCase.length; a++) {
            if (str.substr(i,1)==upperCase.substr(a,1)) {
                novastr+=lowerCase.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
}

function toUpperCase(str) {

    lowerCase = "aàáâãäåæbcçdðeèéêëfghiìíîïjklmnñoòóôõöøpqrŕstuùúûüvwxyýz";

    upperCase = "AÀÁÂÃÄÅÆBCÇDÐEÈÉÊËFGHIÌÍÎÏJKLMNÑOÒÓÔÕÖØPQRŔSTUÙÚÛÜVWXYÝZ";
    novastr="";
    for(i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<lowerCase.length; a++) {
            if (str.substr(i,1)==lowerCase.substr(a,1)) {
                novastr+=upperCase.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
}

//#endregion ------------------------------------------------------ */
}
