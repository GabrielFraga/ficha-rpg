export const Races = [
  {
    label: 'Selecione uma Raça',
    value: 'default',
  },
  {
    label: 'Anões',
    value: 'Anões',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: -2 },
      { name: 'Constituição', value: 2 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 2 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `+4 Constituição, +2 Sabedoria, -2 Destreza. Anões são resistentes e sábios, mas um tanto lentos.
    Deslocamento 6m. Embora sejam do tamanho Médio, anões têm pernas curtas e seu deslocamento é o mesmo de criaturas Pequenas. No entanto, o deslocamento de um anão jamais é reduzido por uso de armadura ou excesso de carga.
    Visão no Escuro. Anões podem enxergar no escuro a até 18 metros, apenas em preto e branco. Um anão ignora camuflagem (incluindo camuflagem total) por escuridão.
    +4 em testes de resistência contra venenos e magias
    Para anões, todos os tipos de machados e martelos são armas simples
    Classe de Armadura +4 contra adversários de tamanho Grande ou maior.
    +2 em testes de perícias para assuntos relacionados a pedra e metal, apenas para perícias com Inteligência ou Sabedoria como habilidade-chave. Este bônus aplica-se a coisas como masmorras, armadilhas, passagens secretas, armas, armaduras, jóias e gemas preciosas, objetos de arte...`,
    ],
  },
  {
    label: 'Elfos',
    value: 'Elfos',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 4 },
      { name: 'Constituição', value: -2 },
      { name: 'Inteligência', value: 2 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `+4 Destreza, +2 Inteligência, -2 Constituição. A agilidade e intelecto dos elfos são lendários, embora sejam mais frágeis que os humanos.
    Niele04
    Elfa - Colorido por Fumaça
    
    Visão na Penumbra. Um elfo ignora camuflagem (mas não camuflagem total) por escuridão. Eles podem ver duas vezes mais longe que os humanos em condições de pouca iluminação, como luz das estrelas e tochas.
    +4 em testes de Vontade contra encantamentos. Elfos também são imunes à magia sono.
    +4 em testes de Identificar Magia e Percepção. Elfos têm familiaridade com magias e sentidos apurados.
    A dificuldade do teste de resistência contra magias arcanas lançadas por um elfo aumenta em CD +2.
    Elfos sabem usar espadas curtas, espadas longas, Floretes e arcos (curtos, longos e compostos). Elfos também recebem Foco em Arma para uma destas armas (à escolha do jogador) como um talento adicional.`,
    ],
  },
  {
    label: 'Goblins',
    value: 'Goblins',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 4 },
      { name: 'Constituição', value: 2 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: -2 },
    ],
    racialInfo: [
      `+4 Destreza, +2 Constituição, -2 Carisma. Goblins são ágeis e resistentes, mas também rudes.
    Goblintrpg4
    Goblin - Colorido por Fumaça
    
    Tamanho Pequeno: Goblins recebem classe de armadura +1, +1 nas jogadas de ataque e +4 em testes de Furtividade, mas precisam usar armas menores.
    Deslocamento 9m. Apesar de pequenos, goblins são rápidos. Sua velocidade é a mesma de criaturas Médias.
    Visão no Escuro. Goblins (assim como outros goblinóides) podem enxergar no escuro até 18 metros, apenas em preto e branco. Um goblin ignora camuflagem (incluindo camuflagem total) por escuridão.
    +4 em testes de Fortitude contra doenças e venenos. Goblins também não precisam fazer testes de Fortitude por ingerir comida estragada.
    +4 em testes de Ladinagem e Ofício (um à escolha do jogador). Goblins estão acostumados a roubar para viver, e têm aptidão natural para engenhocas.`,
    ],
  },
  {
    label: 'Halflings',
    value: 'Halflings',
    habilities: [
      { name: 'Força', value: -2 },
      { name: 'Destreza', value: 4 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 2 },
    ],
    racialInfo: [
      `
    +2 em duas habilidades à escolha do jogador
Sandro02trpgpintura2
Humano - Colorido por Fumaça

2 talentos adicionais à escolha do jogador.
2 perícias treinadas extras, que não precisam ser escolhidas entre suas perícias de classe.
    `,
    ],
  },
  {
    label: 'Humanos',
    value: 'Humanos',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [``],
  },
  {
    label: 'Meio-Gênios',
    value: 'Meio-Gênios',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 2 },
      { name: 'Sabedoria', value: -2 },
      { name: 'Carisma', value: 4 },
    ],
    racialInfo: [
      `
    +4 Carisma, +2 Inteligência, -2 Sabedoria. Meio-Gênios são atraentes, simpáticos e brilhantes, embora um pouco ingênuos.
    +4 em testes de Identificar Magia. A natureza mágica dos meio-gênios faz com que eles entendam melhor o funcionamento da magia.
Desejos. Uma vez por dia, um meio-gênio pode lançar uma magia que conheça sem gastar PM (ou sem esquecê-la), mas apenas se fizer isso na mesma rodada em que alguém tenha lhe pedido.
"Fazer um desejo" ao meio-gênio é uma ação livre. Em combate, isso significa que o qareen deve aguardar pela iniciativa de quem fez o pedido para poder lançar a magia (que tem tempo de execução normal).
O qareen não tem obrigação de lançar magias contra a própria vontade, mesmo que alguém peça.
Pequenos Desejos. Mesmo que não pertença a uma classe conjuradora, um meio-gênio pode conjurar todos os truques (magias arcanas de nível 0) como um feiticeiro. No entanto, ele só pode conjurar estes truques quando outra pessoa pede.
Uma vez por dia, um meio-gênio pode conjurar vôo como um feiticeiro de mesmo nível, sem gastar pontos de magia.
Conforme sua descendência, um meio-gênio tem resistência especial contra as seguintes formas de ataque.
Água: resistência a frio e ácido 5.
Ar: resistência a eletricidade e sônico 5.
Fogo: resistência a fogo 5.
Terra: redução de dano 3/cortante ou perfurante.
Luz: resistência a eletricidade 10.
Trevas: resistência a ácido e energia negativa 5. “Energia negativa” é provocada por efeitos e magias necromânticos (como infligir ferimentos).
    `,
    ],
  },
  {
    label: 'Minotauros',
    value: 'Minotauros',
    habilities: [
      { name: 'Força', value: 4 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 2 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: -2 },
    ],
    racialInfo: [
      `
    +4 Força, +2 Constituição, -2 Carisma. Minotauros são fortes e resistentes, mas também arrogantes e teimosos.
Classe de armadura +1. Minotauros têm couro rígido.
Minotaurotrpg2
Minotauro - Colorido por Fumaça

Minotauros possuem um ataque natural de chifres (1d6, crítico x2, perfurante). Um minotauro pode realizar um ataque adicional por rodada com os chifres, mas provoca uma penalidade de -4 em todos os ataques (incluindo este).
Faro. Minotauros recebem +4 em testes de Sobrevivência para rastrear usando o faro, e também detectam automaticamente a presença de criaturas a até 9m.
Lógica labiríntica: Minotauros têm excelente senso de direção, e recebem +8 em testes de Sobrevivência para não se perder.
Medo de altura. Caso tenha que subir qualquer altura superior a 3m (ou se estiver a até 3m de uma queda desta altura), um minotauro sofre penalidade de -4 em suas jogadas e testes. Ele também não pode realizar nenhuma ação que dependa de concentração, como conjurar magias.
    `,
    ],
  },
  {
    label: 'Lefou',
    value: 'Lefou',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +2 em duas habilidades à escolha do jogador (exceto Carisma). Lefou têm habilidades acima da média, mas também problemas de identidade e dificuldade em situações sociais.
Monstro. Lefou não são considerados humanos ou humanoides, sendo imunes a magias e efeitos que afetam apenas estas criaturas.
Visão no Escuro. Lefou enxergam no escuro a até 18m, mas apenas em preto e branco. Lefou ignoram camufl agem (incluindo camuflagem total) por escuridão.
2 talentos da Tormenta adicionais. Lefou não perdem pontos de Carisma por estes dois talentos (mas perdem se adquirirem outros).
Deformidade. Todo lefou tem algum defeito físico que, embora seja desagradável aos olhos, confere certa vantagem. O jogador deve escolher uma característica entre as seguintes.
Articulações flexíveis: +4 em testes de Acrobacia.

Dedos rígidos: deslocamento de escalada 4,5m.

Dentes afiados: +4 em testes de Intimidação.

Mãos membranosas: deslocamento de natação 4,5m.

Olhos vermelhos: +4 em testes de Percepção.

Pele rígida: classe de armadura +1.

Afinidade com a Tormenta. Lefou não recebem níveis negativos devido a efeitos causados pela Tormenta ou seus habitantes. Mas ainda podem receber níveis negativos de outras origens.
    `,
    ],
  },
  {
    label: 'Gnomos',
    value: 'Gnomos',
    habilities: [
      { name: 'Força', value: -2 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 2 },
      { name: 'Inteligência', value: 4 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +4 Inteligência, +2 Constituição, -2 Força. Gnomos são inteligentes, mas também fracos.
Tamanho Pequeno. Gnomos recebem classe de armadura +1, +1 nas jogadas de ataque e +4 em testes de Furtividade, mas precisam usar armas menores.
Visão na Penumbra. Um gnomo ignora camuflagem (mas não camuflagem total) por escuridão. Gnomos podem ver duas vezes mais longe que os humanos em condições de pouca iluminação, como luz das estrelas e tochas.
+4 em testes de Intuição e Ofício (alquimia). Gnomos são perspicazes e familiarizados com ilusões e poções.
Classe de armadura +4 contra adversários de tamanho Grande ou maior.
Gnomos podem ser comunicar com animais livremente. Veja a magia falar com animais.
Um gnomo com Carisma 10 ou mais pode lançar as seguintes magias livremente, sem gastar pontos de magia: globos de luz, som fantasma, prestidigitação.
    `,
    ],
  },
  {
    label: 'Meio-Elfos',
    value: 'Meio-Elfos',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 2 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +2 Destreza, +2 em outra habilidade à escolha do jogador (exceto Constituição).
Visão na Penumbra. Um meio-elfo ignora camuflagem (mas não camuflagem total) por escuridão. Meio-elfos podem ver duas vezes mais longe que os humanos em condições de pouca iluminação como luz das estrelas e tochas.
1 talento à escolha do jogador.
1 perícia treinada extra, que não precisa ser escolhida entre suas perícias de classe.
+2 em testes de Vontade contra encantamentos.
+2 em testes de Identificar Magia e Percepção.
    `,
    ],
  },
  {
    label: 'Meio-Orcs',
    value: 'Meio-Orcs',
    habilities: [
      { name: 'Força', value: 2 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +2 em Força, +2 em outra habilidade à escolha do jogador (exceto Inteligência e Carisma).
Visão no Escuro. Meio-orcs podem enxergar no escuro a até 18 metros, apenas em preto e branco. Um meio-orc ignora camuflagem (incluindo camuflagem total) por escuridão.
Meio-orcs recebem Duro de Matar como um talento adicional
+4 em testes de Intimidação. Meio-orcs são ameaçadores.
Sangue orc. Para todos os efeitos relacionados à raça, meio-orcs são considerados orcs
    `,
    ],
  },
  {
    label: 'Centauros',
    value: 'Centauros',
    habilities: [
      { name: 'Força', value: 4 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: -2 },
      { name: 'Sabedoria', value: 2 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +4 Força, +2 Sabedoria, -2 Inteligência.
Tamanho Grande, Centauros recebem classe de armadura -1, -1 nas jogadas de ataque e -4 em testes de Furtividade, mas podem usar armas e armaduras de criaturas médias.
Deslocamento 12m.
+4 em testes de sobrevivência.
Cascos. Centauros têm uma arma natural de cascos (1d6, esmagamento). Um personagem pode atacar con cascos e armas, mas sofre uma penalidade de -4 em todas as jogadas de ataque do turno.
Medo de Altura. Centauros sofrem uma penalidade de -4 em jogadas e testes se estiverem a 3m de uma queda de 3m ou mais. Ele também não pode realizar nenhuma ação que dependa de concentração, como lançar magias.
Fonte: "Bestiário de Arton", atualizado pelo "Manual das Raças",todos os direitos reservados.`,
    ],
  },
  {
    label: 'Elfos-do-Mar',
    value: 'Elfos-do-Mar',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 4 },
      { name: 'Constituição', value: 2 },
      { name: 'Inteligência', value: -2 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `+4 Destreza, +2 Constituição, -2 Inteligência. Elfos-do-mar são tão ágeis quanto elfos normais e mais saudáveis, mas culturalmente inferiores.
    Deslocamento 9m, natação 9m.
    Visão na Penumbra. Um elfo-do-mar ignora camuflagem (mas não camuflagem total) por escuridão. Elfos-do-mar podem ver duas vezes mais longe que os humanos em situações de pouca luminosidade, como luz das estrelas e tochas.
    Percepção às Cegas 12m. Um elfo-do-mar pode perceber através de um sentido de radar, apenas debaixo d’água, qualquer criatura num raio de 12m.
    Terreno Predileto. Um elfo-do-mar recebe +2 na sua classe de armadura e em testes de Acrobacia, Atletismo, Furtividade, Percepção e Sobrevivência embaixo d’água.
    Elfos-do-mar sabem usar tridente, rede e azagaia. Elfos-do-mar também recebem o talento Foco em Arma para uma destas armas (à escolha do jogador) como um talento adicional.
    Dependência de Água. Um elfo-do-mar pode ficar fora d’água por um número de horas igual ao seu valor de Constituição. Esgotado esse prazo ele começa a sufocar. O elfo-do-mar deve permanecer imerso em água durante pelo menos oito horas antes de um novo período em terra seca.`,
    ],
  },
  {
    label: 'Gnolls',
    value: 'Gnolls',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 4 },
      { name: 'Inteligência', value: -2 },
      { name: 'Sabedoria', value: 2 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +4 Constituição, +2 Sabedoria, -2 Inteligência.
Tamanho Médio.
Deslocamento 9m.
+1 na classe de armadura. Gnolls possuem pelo grosso.
Faro. recebem +4 em testes de Sobrevivência para rastrear usando o faro, e também detectam automaticamente a presença de criaturas a até 9m.
Mordida. Gnolls possuem um ataque natural de mordida (1d6, corte). Um gnoll pode atacar com a mordida e armas.
Visão na Penumbra. Um Gnoll ignora camuflagem (mas não camuflagem total) por escuridão.
`,
    ],
  },
  {
    label: 'Nagahs',
    value: 'Nagahs',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `Machos: +2 Força, +2 Destreza, +2 Constituição. Nagahs machos são superiores em atributos físicos.
    Fêmeas: +2 Inteligência, +2 Sabedoria, +2 Carisma. Nagahs fêmeas têm mentes aguçadas e brilhantes.
    Embora tenham uma metade humana, por sua estrutura poderosa, nagahs são consideradas criaturas Grandes (ataques -1, CA -1, Furtividade -4, usam armas maiores, recebem +4 em testes de manobra contra oponentes Médios).
    Cauda. Nagahs têm uma arma natural de cauda (dano 1d6, esmagamento). Uma nagah pode atacar com a cauda e armas na mesma rodada, mas sofre uma penalidade de –4 em todas as jogadas de ataque.
    Classe de armadura +2. Nagahs têm couro rígido.
    Visão na Penumbra. Uma nagah ignora camuflagem (mas não camuflagem total) por escuridão.
    +4 em testes de Fortitude contra venenos.
    +4 em testes de Enganação . Nagahs são dissimuladas.
    –2 em testes de Percepção (apenas para ouvir). Nagahs têm audição ruim.
    –4 em testes de resistência contra música de bardo ou magias lançadas por bardos. É difícil para nagahs resistir a boa música.
    Nagahs sofrem um redutor de –4 em testes de resistência contra frio e gelo.`,
    ],
  },
  {
    label: 'Sprites',
    value: 'Sprites',
    habilities: [
      { name: 'Força', value: -4 },
      { name: 'Destreza', value: 4 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 2 },
    ],
    racialInfo: [
      `+4 Destreza, +2 Carisma, -2 Constituição, -4 Força.
    Tamanho Mínimo, Sprites recebem classe de armadura +2, +2 nas jogadas de ataque e +8 em testes de Furtividade, mas precisam usar armas e armaduras minimas.
    Deslocamento 3m, vôo 12m com boa capacidade de manobra.
    Língua da Natureza. Sprites podem se comunicar com animais, como se estivessem constantemente sob efeito da magia falar com animais.
    Magias de Fada. Um sprite com Carisma 10 ou mais pode lançar globos de luz, som fantasma e prestidigitação livremente.
    Fonte: "Bestiário de Arton" ,todos os direitos reservados.`,
    ],
  },
  {
    label: 'Trogs',
    value: 'Trogs',
    habilities: [
      { name: 'Força', value: 2 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 4 },
      { name: 'Inteligência', value: -2 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +4 Constituição, +2 Força, –2 Inteligência. Trogs são fortes e resistentes, mas não muito espertos.
Tipo monstro. Um trog não é considerado humano ou humanoide, sendo imune a magias e efeitos que afetam apenas estas criaturas.
Visão no Escuro. Trogs enxergam no escuro a até 18 metros, mas apenas em preto e branco. Trogs ignoram camuflagem (incluindo camufl agem total) por escuridão.
Classe de armadura +2. Trogs têm couro rígido.
Mordida. Trogs têm uma arma natural de mordida (dano 1d6, perfuração). Um trog pode atacar com a mordida e armas na mesma rodada, mas sofre uma penalidade de –4 em todas as jogadas de ataque.
+4 em testes de Furtividade (+8 em áreas rochosas). A pele dos trogs pode mudar de cor, camuflando-se com o ambiente. Esta habilidade não funciona se o trog estiver vestindo armadura média ou pesada.
Mau cheiro. Uma vez por dia, com uma ação de movimento, um trog pode expelir uma secreção oleosa de odor nauseante. Todos os humanoides a até 9m devem ter sucesso em um teste de Fortitude (CD 10 + metade do nível + mod. Con) ou ficam enjoados durante 1d6 rodadas. Uma criatura enjoada pode executar apenas uma ação padrão ou de movimento (não ambas) por rodada. Falhando ou não, uma vítima não pode ser novamente afetada por 24 horas. O mau cheiro afeta apenas humanoides. Criaturas com habilidade de faro falham automaticamente no teste de resistência. Magias e efeitos que protegem contra veneno também protegem contra o mau cheiro.
Trogs sofrem redutor de –4 em testes de resistência contra frio e gelo.`,
    ],
  },
  {
    label: 'Hobgoblins',
    value: 'Hobgoblins',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 2 },
      { name: 'Constituição', value: 4 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: -2 },
    ],
    racialInfo: [
      `+4 Constituição, +2 Destreza, -2 Carisma. Hobgoblins são resistentes e ágeis, mas também rudes e agressivos.
    Visão no Escuro: Hobgoblins podem enxergar no escuro a até 18 metros, apenas em preto e branco. Um hobgoblin ignora camuflagem (incluindo camuflagem total) por escuridão.
    1 talento de combate à escolha do jogador.
    +4 em testes de Furtividade e Ofício (metalurgia).
    `,
    ],
  },
  {
    label: 'Herdeiros do Lobo',
    value: 'Herdeiros do Lobo',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 2 },
      { name: 'Inteligência', value: 2 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 4 },
    ],
    racialInfo: [
      `
    +4 Carisma, +2 Constituição, -2 Inteligência. Herdeiros do lobo são extremamente sociais, além de fisicamente resistente. Entretanto, não se dedica muito aos estudos
Faro. Herdeiros do lobo recebem +4 em testes de Sobrevivência para rastrear usando o faro, e também detectam automaticamente a presença de criaturas a até 9m.
Mordida. Herdeiros do lobo possuem uma arma natural de mordida (1d6, crítico x2, corte).Um herdeiro do lobo pode atacar com a mordida e armas, mas sofre uma penalidade de -4 em nas jogadas de ataque 
Espírito de Equipe. Um herdeiro do lobo recebe bonus de ataque adicional de +2 quando flanqueando (para um total de +4). Além disso, suas ações de prestar ajuda concedem um bonus adicional de +1.
Visão na Penumbra. Um herdeiro do lobo ignora camuflagem por escuridão. Herdeiros do lobo podem ver duas vezes mais longe que os humanos em condições de pouca iluminação como luz das estrelas e tochas.
Categorias:

    `,
    ],
  },
  {
    label: 'Aggelus',
    value: 'Aggelus',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 4 },
      { name: 'Carisma', value: 2 },
    ],
    racialInfo: [
      `+4 Sabedoria, +2 Carisma. Devido a sua herança celestial, aggelus são prudentes, dotados de bom senso e seguros de si.
    Tamanho Médio ou Pequeno. Aggelus nascidos em famílias humanas, élficas ou de outras raças de tamanho Médio também têm esse tamanho, sem receber bônus ou penalidades especiais. Aggelus nascidos em famílias halflings, goblins e de outras raças de tamanho Pequeno conservam esse mesmo tamanho, recebendo os mesmos bônus e penalidades (+1 na classe de armadura, +1 nas jogadas de ataque, +4 em testes de Furtividade, e precisam usar armas menores).
    Aggelus de tamanho Médio têm deslocamento 9m; aggelus Pequenos têm descolamento 6m.
    Espírito. Um aggelus não é considerado humanoide, sendo imune a efeitos que afetam apenas estas criaturas. Eles são afetados normalmente por magias e efeitos que afetam espíritos. Magias que enviam extraplanares de volta ao Plano de origem não os afetam (mas magias de banimento, que expulsam a vítima do Plano do conjurador, sim).
    Ao contrário de outros seres do tipo espírito, aggelus podem ser devolvidos à vida com magias como reviver os mortos ou ressurreição.
    Visão no Escuro. Aggelus enxergam no escuro a até 18m, mas apenas em preto e branco. Aggelus ignoram camuflagem (incluindo camuflagem total) por escuridão.
    Luz do dia. Aggelus podem lançar esta magia uma vez por dia.
    Resistência a ácido, frio e eletricidade 5. Aggelus ignoram os primeiros 5 pontos de dano provocado por estas energias`,
    ],
  },
  {
    label: 'Bugbears',
    value: 'Bugbears',
    habilities: [
      { name: 'Força', value: 4 },
      { name: 'Destreza', value: 2 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: -2 },
    ],
    racialInfo: [
      `+4 Força, +2 Destreza, –2 Carisma. O bugbear é forte, e dono de uma agilidade inesperada para uma criatura tão grande. Mas, como ser solitário, não tem qualquer aptidão social.
    Um bugbear recebe Grandão como talento adicional, sem precisar satisfazer seus pré-requisitos.
    Visão no Escuro. Bugbears enxergam no escuro a até 18 metros, mas apenas em preto e branco. Um bugbear ignora camuflagem (incluindo camuflagem total) por escuridão.
    Faro. Bugbears detectam automaticamente a presença de criaturas a até 9m e recebem +4 em testes de Sobrevivência para rastrear.
    +4 em testes de Furtividade e Intimidação. Bugbears são silenciosos e sabem como aterrorizar.
    Categorias:
    `,
    ],
  },
  {
    label: 'Elfos-do-Céu',
    value: 'Elfos-do-Céu',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 4 },
      { name: 'Constituição', value: -2 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 2 },
    ],
    racialInfo: [
      `
    +4 Destreza, +2 Carisma, –2 Constituição. Elfos-do-céu são graciosos, ágeis, alegres e confiantes, mas pouco vigorosos.
Elfos-do-céu têm deslocamento básico de 9m em terra. Eles também podem voar a uma velocidade de 18m.
Visão na Penumbra. Um elfo-do-céu ignora camuflagem (mas não camuflagem total) por escuridão.
Elfos-do-céu sabem usar espadas curtas, espadas longas, floretes e arcos (curtos, longos e compostos).
+4 em testes de Percepção. Elfos têm visão aguçada.
+4 em testes de Vontade contra encantamentos. Elfos-do-céu também são imunes à magia sono.`,
    ],
  },
  {
    label: 'Medusa',
    value: 'Medusa',
    habilities: [
      { name: 'Força', value: -2 },
      { name: 'Destreza', value: 2 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 4 },
    ],
    racialInfo: [
      `
    +4 Carisma, +2 Destreza, –2 Força. Medusas são ágeis, confiantes e exalam sensualidade, mas não chegam a ser muito fortes.
Tipo monstro. Medusas não são consideradas humanoides.
Visão no Escuro. Medusas enxergam no escuro a até 18 metros, mas apenas em preto e branco. Medusas ignoram camuflagem (incluindo camuflagem total) por escuridão.
Medusas recebem Foco em Arma (arco curto) como talento adicional. Esta é a arma tradicional da raça.
Serpentes. Os cabelos de serpentes da medusa podem ser usados como uma arma natural (dano 1d4 sem modificador de Força, perfuração). Todas as serpentes contam como um único ataque conjunto (não podem ser dirigidas contra alvos diferentes).
Veneno. Um ataque bem-sucedido da medusa com suas serpentes exige da vítima um teste de Fortitude (CD 10 + metade do nível da medusa + modificador de Constituição da medusa). Em caso de falha, a vítima sofre dano de 1d4 pontos de Força.
Olhar Atordoante. Uma vez por dia, como uma ação livre, uma medusa pode tentar atordoar uma criatura a até 9m olhando diretamente em seus olhos. A vítima deve ser bem-sucedida em um teste de Fortitude (CD 10 + metade do nível da medusa + modificador de Carisma da medusa) para evitar o efeito. Se falhar, fica atordoada (incapaz de agir e desprevenida; CA–4) durante uma rodada.
    `,
    ],
  },
  {
    label: 'Meio-Dríades',
    value: 'Meio-Dríades',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [``],
  },
  {
    label: 'Minauros',
    value: 'Minauros',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [``],
  },
  {
    label: 'Povo Trovão: Caçadoras',
    value: 'Povo Trovão: Caçadoras',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [``],
  },
  {
    label: 'Povo Trovão: Ceratops',
    value: 'Povo Trovão: Ceratops',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [``],
  },
  {
    label: 'Povo Trovão: Pteros',
    value: 'Povo Trovão: Pteros',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [``],
  },
  {
    label: 'Povo Trovão: Velocis',
    value: 'Povo Trovão: Velocis',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [``],
  },
  {
    label: 'Sulfure',
    value: 'Sulfure',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 4 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 2 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: -2 },
    ],
    racialInfo: [
      `+4 Destreza, +2 Inteligência, –2 Carisma. Sulfure herdam agilidade e astúcia dos demônios, mas têm dificuldade em ser agradáveis.
    Tamanho Médio ou Pequeno. Sulfure nascidos em famílias humanas, élficas ou de outras raças de tamanho Médio também têm esse tamanho, sem receber bônus ou redutores especiais. Sulfure nascidos em famílias halflings, goblins e outras raças de tamanho Pequeno conservam esse mesmo tamanho, recebendo os mesmos bônus e redutores (+1 na classe de armadura, +1 nas jogadas de ataque, +4 em testes de Furtividade, precisam usar armas menores).
    Sulfure de tamanho Médio têm deslocamento 9m; sulfure Pequenos têm descolamento 6m.
    Espírito. Um sulfure não é considerado humanoide, sendo imune a efeitos que afetam apenas estas criaturas. Eles são afetados normalmente por magias e efeitos que afetam espíritos. Magias que enviam extraplanares de volta ao Plano de origem não os afetam (mas magias de banimento, que expulsam a vítima do Plano do conjurador, sim).
    Ao contrário de outros seres do tipo espírito, sulfure podem ser devolvidos à vida com magias como reviver os mortos ou ressurreição.
    Visão no Escuro. Sulfure enxergam no escuro a até 18m, mas apenas em preto e branco. Sulfure ignoram camuflagem (incluindo camuflagem total) por escuridão.
    +2 em testes de Enganação e Furtividade. Sulfure são escorregadios.
    Escuridão. Sulfure podem lançar esta magia uma vez por dia.
    Resistência a fogo, frio e eletricidade 5. Sulfure sempre ignoram os primeiros 5 pontos de dano provocado por estas energias.`,
    ],
  },
  {
    label: 'Trolls Nobres / Finntroll',
    value: 'Trolls Nobres',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +4 Inteligência, +2 Constituição, –2 Força. Os Trolls Nobres são vigorosos e inteligentes, mas longos séculos empregando trabalho escravo acabaram reduzindo sua força física.
Visão no Escuro. Finntroll enxergam no escuro a até 18 metros, mas apenas em preto e branco. Um finntroll ignora camuflagem (incluindo camuflagem total) por escuridão.
Devido ao material fibroso (um tipo complexo de fungo) que forma seus corpos, finntroll são imunes a atordoamento e metamorfose. Por outro lado, finntroll são afetados por magias que afetam apenas plantas.
Respeito dos Trolls. Trolls de todos os tipos reconhecem os finntroll como seus mestres, e não os atacam em circunstâncias normais. Trolls devem ser bem-sucedidos em um teste de Vontade para atacar um finntroll (CD 10 + 1/2 do nível do finntroll + mod. Car).
Resistência a magia +4. Finntroll recebem +4 em testes de resistência contra magias.
+4 em testes de Identificar Magia e Intimidação.
Regeneração. Qualquer dano causado a um finntroll é considerado dano não letal. Apenas fogo e ácido causam dano normal a eles. Um membro decepado cresce novamente em 2d6 dias. Diferentes dos trolls comuns, os finntroll não podem “grudar” um membro decepado apenas segurando-o contra o ferimento. Sua regeneração não funciona enquanto estão expostos à luz do sol ou similar (como a magia luz do dia), permitindo que sofram qualquer dano normalmente.
Sensibilidade à Luz. Um finntroll fica ofuscado (–1 em ataques) quando exposto à luz do sol ou similar, como a magia luz do dia.
    `,
    ],
  },
  {
    label: 'Feithnari',
    value: 'Feithnari',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 2 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 4 },
      { name: 'Carisma', value: -2 },
    ],
    racialInfo: [
      `+4 Sabedoria, +2 Destreza, –2 Carisma. Feithnari são contemplativos, sábios e perceptivos. Sua agilidade também é invejável. Mas têm dificuldade em interagir com outras raças.
    Feithnari têm deslocamento básico de 6m em terra. Eles também podem voar com deslocamento de 18m. Feithnari são criaturas de tamanho Médio.
    Visão na Penumbra. Um feithnari ignora camuflagem (mas não camuflagem total) por escuridão.
    +4 em testes de Percepção. Feithnari podem enxergar muito longe.
    Resistência a fogo 5. Feithnari ignoram os primeiros 5 pontos de dano provocados por ataques flamejantes.
    Feithnari podem fazer testes de Conhecimento mesmo sem treinamento, por seus aprendizados longos e intensos sobre os detalhes de Arton e outros mundos.`,
    ],
  },
  {
    label: 'Hengeyokais',
    value: 'Hengeyokais',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +2 em duas habilidades à escolha do jogador (exceto Sabedoria). Hengeyokais são versáteis, mas sua pluralidade de formas e falta de noção têm seu preço.
Tamanho Médio ou Pequeno. O tamanho de um hengeyokai depende da forma híbrida preferida por sua família. Famílias que se passariam por humanas, élficas, nezumi ou vanara, de tamanho Médio, não recebem bônus ou penalidades. Famílias que se passariam por korobokuru, halflings ou goblins são de tamanho Pequeno, recebendo os mesmos bônus e redutores (+1 na classe de armadura, +1 nas jogadas de ataque, +4 em testes de Furtividade, precisam usar armas menores).
Hengeyokais de tamanho Médio têm deslocamento 9m; hengeyokais de tamanho Pequeno têm deslocamento 6m.
Espírito. Um hengeyokai não é considerado humanoide, sendo imune a efeitos que afetam apenas estas criaturas, mas são afetados normalmente por magias e efeitos que afetam espíritos. Eles não podem ser devolvidos à vida com magias como reviver os mortos ou ressurreição. Fora de seu mundo de origem, eles podem ser afetados por magias como banimento e outras que enviam espíritos de volta ao seu próprio Plano.
Visão no Escuro. Hengeyokais enxergam no escuro a até 18m, mas apenas em preto e branco. Hengeyokais ignoram camuflagem (incluindo camuflagem total) por escuridão.
Forma-base. Um hengeyokai deve escolher um animal para sua forma-base. A aparência da forma-base é a do animal escolhido com características fantásticas, exóticas ou assustadoras, mas sempre chamativas.
Ele pode assumir sua forma-base com uma ação padrão. Se estiver em sua forma-base, possui todas as suas estatísticas normais, mais uma habilidade da forma selvagem do druida escolhida a cada transformação. A partir do 6º nível, também pode escolher entre as habilidades de forma selvagem aprimorada; a partir do 12º nível, inclui as habilidades de forma selvagem maior.
Forma híbrida. A aparência padrão do hengeyokai é a de um humanoide com traços animais de sua forma-base. Ele pode assumir sua forma híbrida com uma ação padrão. Essa é sua forma natural para magias como desmetamorfosear ou visão da verdade .
O hengeyokai pode lançar a magia alterar-se sem gastar PM. Porém, a duração da magia muda para concentração.
Um hengeyokai pode alterar sua forma-base, mas isso exige eventos traumáticos ou de grande peso. Em termos de regras, o mestre pode aceitar a mudança em um momento apropriado, ao custo de 200 XP por nível do personagem. A critério do mestre, esse custo pode ser cancelado se o jogador aceitar uma nova tendência aleatória (duas rolagens de 1d6: 1–2 Bondoso ou Leal, 3–4 Neutro, 5–6 Maligno ou Caótico)..
Categorias:

    `,
    ],
  },
  {
    label: 'Kobolds',
    value: 'Kobolds',
    habilities: [
      { name: 'Força', value: -2 },
      { name: 'Destreza', value: 4 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +4 Destreza, –2 Força. Kobolds são fracos, mas muito ágeis devido ao seu tamanho.
Tamanho Pequeno. Por seu tamanho reduzido, kobolds recebem CA+1, +1 nas jogadas de ataque, +4 em testes de Furtividade, e devem usar armas e vestimentas menores.
Deslocamento 9m. Mesmo sendo criaturas Pequenas, kobolds são bastante ágeis, possuindo o mesmo deslocamento de criaturas Médias.
Classe de Armadura +1. Kobolds têm escamas duras sobre o corpo.
Visão no Escuro. Kobolds podem enxergar no escuro a até 18m, mas apenas em preto e branco. Um kobold ignora camuflagem (incluindo camuflagem total) por escuridão.
Potência Dracônica. Devido à potência do seu sangue dracônico, magias com os descritores ácido, eletricidade, fogo ou frio conjuradas por um kobold recebem um bônus de +1 em cada dado de dano. Um toque chocante, por exemplo, causaria 2d8+2 pontos de dano.
Horda. Quando mais de um kobold ataca o mesmo alvo ao mesmo tempo, todos eles recebem um bônus em qualquer jogada de ataque, seja corpo-a-corpo ou à distância, igual ao número de kobolds atacando — por exemplo, +5 se forem cinco kobolds. O bônus máximo que um kobold pode receber com esta habilidade é igual a metade do seu nível de personagem, arredondado para baixo (por exemplo, +3 no 6º nível).
Sensibilidade a luz. Kobolds ficam ofuscados (–1 em ataques) sob luz solar ou a magia luz do dia.
    `,
    ],
  },
  {
    label: 'Minaques',
    value: 'Minaques',
    habilities: [
      { name: 'Força', value: 4 },
      { name: 'Destreza', value: -2 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 2 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +4 Força, +2 Sabedoria, –2 Destreza. Minaques são imensamente fortes e possuem uma sensibilidade aguçada, mas são lentos.
Um minaque recebe Grandão como um talento adicional, sem precisar satisfazer seus pré-requisitos. Minaques são criaturas de tamanho Médio, com deslocamento de 9 metros.
Classe de Armadura +1. Minaques têm pêlos espessos e um couro rígido. Além disso, eles nunca precisam fazer testes de Fortitude para evitar dano por ambientes frios (mas recebem dano normal por magias e efeitos de frio).
+4 em testes de Atletismo e Sobrevivência. Desde muito cedo, minaques aprendem a escalar paredões, saltar precipícios, caçar e sobreviver nas montanhas geladas.
    `,
    ],
  },
  {
    label: 'Nimbus',
    value: 'Nimbus',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +4 em uma única habilidade, escolhida aleatoriamente. Cada nimbus é diferente. Suas habilidades refletem suas características bizarras, ou suas características bizarras refletem suas habilidades. Ou não. O jogador deve rolar 1d6 (1 – Força, 2 – Destreza, etc) para descobrir em qual habilidade ele receberá o bônus racial, antes de rolar ou selecionar seus valores de habilidades.
Tamanho Médio ou Pequeno. Nimbus nascidos em famílias humanas, élficas ou de outras raças de tamanho Médio também têm esse tamanho, sem receber bônus ou redutores especiais. Nimbus nascidos em famílias halflings, goblins e outras raças de tamanho Pequeno conservam esse mesmo tamanho, recebendo os mesmos bônus e redutores (+1 na classe de armadura, +1 nas jogadas de ataque, +4 em testes de Furtividade, precisam usar armas menores). Nimbus de tamanho Médio têm deslocamento 9m; nimbus de tamanho Pequeno têm deslocamento 6m.
Visão no Escuro. Nimbus enxergam no escuro a até 18m, mas apenas em preto e branco. Nimbus ignoram camuflagem (incluindo camuflagem total) por escuridão.
Característica Bizarra. Nimbus possuem alguns traços físicos imprevisíveis. Essas características podem ajudá-los em certas situações. Você pode selecionar duas perícias cuja habilidade- chave seja sua habilidade rolada aleatoriamente, e receber um bônus de +4 em seus testes. Essas perícias são consideradas de classe para o nimbus. As características normalmente têm relação direta com as perícias que favorecem.
Perturbação Mental. Todo nimbus deve possuir pelo menos uma perturbação mental, que é um elemento importante de sua personalidade (verificar em Insanidade). Isso os torna imunes a adquirir pontos de insanidade, a dano de Sabedoria e a efeitos de confusão. Por suas perturbações, nimbus têm dificuldade em obter a confiança dos outros, sofrendo penalidade de –2 em testes de Diplomacia.
Resistência à energia 10. Nimbus são resistentes a um tipo particular de energia, escolhido aleatoriamente. O jogador deve rolar 1d6 para descobrir sua resistência à energia (1 – ácido, 2 – eletricidade, 3 – fogo, 4 – frio, 5 – sônico, 6 – essência).
Sorte e azar. Uma vez por dia, um nimbus pode lançar sorte súbita ou azar atípico (CD 12 + mod. Carisma).
Características bizarras
Abaixo, uma relação de possíveis características bizarras e as perícias em que podem conceder bônus. O jogador pode criar suas próprias características bizarras e escolher as perícias às quais elas estarão ligadas, usando os exemplos abaixo como base. A decisão do Mestre é sempre soberana se uma característica pode ser adotada ou não.

Cabeça Enorme: Conhecimento (qualquer).

Cauda: Acrobacia.

Cheiro de Animal: Adestrar Animais, Cavalgar, Intimidação.

Dedos Alterados: Atuação (instrumentos de teclas ou cordas), Ladinagem, Ofício (qualquer ofício delicado).

Garras: Atletismo, Intimidação.

Juntas Soltas: Acrobacia, Atletismo, Atuação (dança), Ladinagem.

Língua de Prata: Atuação (oratória, canto, interpretação), Enganação, Diplomacia, Obter Informação.

Mãos de Metal: Ofício (ferreiro).

Nariz Alterado: Identificar Magia, Intuição, Percepção, Sobrevivência.

Olhos Alterados: Identificar Magia, Percepção.

Orelhas Alteradas: Percepção.

Patágio: Atletismo.

Pele Negra como a Noite: Furtividade, Intimidação.

Pés Acolchoados: Furtividade, Iniciativa.

Rosto Maleável: Atuação (instrumentos de sopro), Enganação.

Terceiro Olho: Cura, Identificar Magia.

Ventosas: Atletismo, Intimidação.

Perturbações mentais
Abaixo, uma relação de possíveis perturbações mentais e uma curta descrição de seu significado em termos de interpretação. Nenhuma perturbação mental dos nimbus causa penalidades em características de jogo.

O jogador pode criar suas próprias perturbações mentais, usando os exemplos abaixo como base. A decisão do Mestre é sempre soberana se uma perturbação pode ser adotada ou não.

Alucinações: Ocasionalmente, você vê e ouve coisas que não existem.

Ansiedade: Você tende a ficar nervoso, tenso e preocupado com eventos presentes ou futuros.

Antissocial: Você é hostil, tem dificuldades em cumprir compromissos e obrigações, e trata com descaso os sentimentos dos outros.

Compulsão: Você realiza uma atividade qualquer (limpar as mãos, ajustar a armadura) constantemente.

Depressão: Ocasionalmente, você é atacado por tristeza e desespero avassaladores.

Desorientação: Você é incapaz de se localizar espacialmente. Mesmo um mapa simples é completamente indecifrável.

Esquizoide: Você é frio e distante, e particularmente indiferente a opiniões alheias.

Múltiplas Personalidades: Você possui duas ou mais personalidades distintas. Nenhuma delas pode possuir tendência diferente da sua.

Ecopraxia: Você sempre tenta imitar as ações de outras pessoas.

Filia: Você é apegado a algo insignificante e inútil, mantendo sempre por perto o objeto de sua adoração, e temendo que alguém possa roubá-lo.

Fobia: Você possui um medo incontrolável de algo inócuo e inofensivo, ficando apavorado na presença desse objeto, criatura ou evento.

Hipocondria: Você acredita que sofre de uma ou mais doenças de gravidade variada.

Histeria: Você tem acessos em que ri ou chora descontroladamente.

Histriônico: Você é excessivamente dramático, faz “cenas” e frequentemente exige atenção alheia.

Megalomania: Você acredita ser alguém superior e destinado a grandes feitos.

Paranoia: Você acredita que está sendo constantemente perseguido, sempre encontrando novas “provas” para justificar essa crença. É desconfiado e invejoso.

Vigilância: Você tem dificuldade em se concentrar ou descansar, é irritadiço e impaciente.

`,
    ],
  },
  {
    label: 'Sklirynei',
    value: 'Sklirynei',
    habilities: [
      { name: 'Força', value: -2 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 4 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 2 },
    ],
    racialInfo: [
      `
    +4 Inteligência, +2 Carisma, –2 Força. Sklirynei são inteligentes e charmosos, mas seus ossos e musculatura são mais fracos que um humano médio.
Sklirynei tem deslocamento básico de 9m e são criaturas de tamanho Médio.
Visão na Penumbra. Um skliryne ignora camuflagem (mas não camuflagem total) por escuridão.
1 perícia treinada extra, que não precisa ser escolhida entre suas perícias de classe. Sklirynei são versáteis.
Para os sklirynei, pistolas e mosquetes são considerados armas simples, e eles não precisam ser treinados em perícias para usar armas ou armaduras tecnológicas (como o escafandro).
Sklirynei com Carisma 10 ou mais podem lançar livremente as magias globos de luz, mãos mágicas ou prestidigitação.
Por seus ossos frágeis, sklirynei sofrem um ponto de dano adicional por dado de dano de esmagamento. Por exemplo, um golpe normal de clava (dano 1d6) causa 1d6+1 pontos de dano em um skliryne. Já um tiro de tai-tai (dano 2d4) causa 2d4+2 pontos de dano.
    `,
    ],
  },
  {
    label: 'Moreau',
    value: 'Moreau',
    habilities: [
      { name: 'Força', value: 0 },
      { name: 'Destreza', value: 0 },
      { name: 'Constituição', value: 0 },
      { name: 'Inteligência', value: 0 },
      { name: 'Sabedoria', value: 0 },
      { name: 'Carisma', value: 0 },
    ],
    racialInfo: [
      `
    +2 em uma habilidade à escolha do jogador. Moreau também podem receber +2 em uma habilidade (que pode ser a mesma) conforme seu talento Moreau escolhido (veja a seguir).
2 talentos adicionais à escolha do jogador. Um deles pode ser um Talento Moreau
1 perícia treinada extra, que não precisa ser escolhida entre suas perícias de classe.


em:
Manual das Raças, Raças Oficiais
Moreau
VER CÓDIGO-FONTE
 
COMENTÁRIOS
 
COMPARTILHAR
Moreau Characters Concept 3 by FLP Lopes
Traços Raciais
+2 em uma habilidade à escolha do jogador. Moreau também podem receber +2 em uma habilidade (que pode ser a mesma) conforme seu talento Moreau escolhido (veja a seguir).
2 talentos adicionais à escolha do jogador. Um deles pode ser um Talento Moreau
1 perícia treinada extra, que não precisa ser escolhida entre suas perícias de classe.
Conteúdo[exibir]
Talentos Moreau
Membros da raça moreau podem adquirir certos talentos especiais, disponíveis apenas para eles. Esses talentos representam uma ligação maior com os Doze Animais míticos. Podem ser escolhidos apenas no 1º nível, e um mesmo personagem nunca pode escolher mais de um.

Estes talentos oferecem um bônus permanente de +2 em uma habilidade básica, ligada ao animal escolhido, além de alguns poderes menores e mudanças cosméticas.

Nem todos os moreau têm estes talentos — na verdade, apenas uma pequena parte deles os possui. Uma vez que os talentos Moreau elevam uma habilidade básica, estas pessoas especiais têm uma aptidão acima da média, sendo comum que sigam carreira como aventureiros. Mas não é raro encontrar tais talentos em pessoas comuns como plebeus, comerciantes, artesãos ou aristocratas.

Herança do Búfalo
O búfalo é seu ancestral. Você tem pele negra e pequenos chifres vestigiais.

Benefício: você recebe +2 em Força. Além disso, escolha duas habilidades entre as seguintes:

• +2 em jogadas de ataque para atropelar e empurrar.

• +4 em jogadas de ataque (em vez de +2) quando faz investidas.

• +4 em testes de Intimidação .

• Faro. Você percebe criaturas a até 9m e recebe +4 em testes de Sobrevivência para rastrear.

• Arma natural de chifres (1d6). Você tem chifres maiores e pode executar um ataque adicional por rodada com os chifres, mas sofre penalidade de –4 em todos os ataques (incluindo este).

Herança do Coelho
O coelho é seu ancestral. Você tem longas orelhas de coelho.

Benefício: você recebe +2 em Destreza. Além disso, escolha duas habilidades entre as seguintes:

• +4 em testes de Percepção .

• +4 em testes de Iniciativa.

• +4 em testes de Intuição.

• Deslocamento +3m.

• Visão na penumbra. Você ignora camuﬂagem (mas não camuﬂagem total) por escuridão.

Herança da Coruja
A coruja é sua ancestral. Você tem olhos grandes e redondos, e penas em vez de cabelos.

Benefício: você recebe +2 em Sabedoria. Além disso, escolha duas habilidades entre as seguintes:

• +2 em jogadas de ataque para agarrar.

• Margem de ameaça +2 contra alvos desprevenidos (este bônus não é dobrado por qualquer razão).

• +4 em testes de Furtividade.

• Visão no escuro. Você ignora camuﬂagem (incluindo camuﬂagem total) por escuridão.

• Arma natural de garras (1d4). Você pode executar um ataque adicional por rodada com as garras, mas sofre penalidade de –4 em todos os ataques (incluindo este).

Herança do Crocodilo
O crocodilo é seu ancestral. Você tem pele verde, com escamas nos ombros, peito e outras partes do corpo. Apenas mulheres têm cabelo.

Benefício: você recebe +2 em Constituição. Além disso, escolha duas habilidades entre as seguintes:

• Classe de armadura +1.

• +2 em jogadas de ataque para derrubar.

• +4 em testes de Furtividade.

• Deslocamento de natação 6m.

• Arma natural de mordida (1d6). Você pode executar um ataque adicional por rodada com a mordida, mas sofre penalidade de –4 em todos os ataques (incluindo este).

Herança do Gato
O gato selvagem é seu ancestral. Você tem dentes caninos salientes, orelhas e cauda de gato.

Benefício: você recebe +2 em Carisma. Além disso, escolha duas habilidades entre as seguintes:

• +2 em jogadas de ataque para agarrar.

• Margem de ameaça +2 contra alvos desprevenidos (este bônus não é dobrado por qualquer razão).

• +4 em testes de Acrobacia.

• +4 em testes de Atletismo.

• +4 em testes de Furtividade.

• Visão na penumbra. Você ignora camuﬂagem (mas não camuﬂagem total) por escuridão.

• Arma natural de garras (1d4). Você pode executar um ataque adicional por rodada com as garras, mas sofre penalidade de –4 em todos os ataques (incluindo este).

Herança da Hiena
A hiena é sua ancestral. Você tem grandes orelhas e manchas negras sobre a pele.

Benefício: você recebe +2 em Sabedoria. Além disso, escolha duas habilidades entre as seguintes:

• +2 em jogadas de ataque para derrubar.

• +4 em jogadas de ataque (em vez de +2) quando está ﬂanqueando.

• +4 em testes de Enganação para fintar.

• Faro. Você percebe criaturas a até 9m e recebe +4 em testes de Sobrevivência para rastrear.

• Arma natural de mordida (1d6). Você pode executar um ataque adicional por rodada com a mordida, mas sofre penalidade de –4 em todos os ataques (incluindo este).

Herança do Leão
O leão é seu ancestral. Você tem dentes caninos salientes, unhas negras, olhos amarelos e juba.

Benefício: você recebe +2 em Força. Além disso, escolha duas habilidades entre as seguintes:

• +2 em jogadas de ataque para agarrar.

• +4 em testes de Atletismo.

• +4 em testes de Intimidação.

• Visão na penumbra. Você ignora camuﬂagem (mas não camuﬂagem total) por escuridão.

• Arma natural de mordida (1d6). Você pode executar um ataque adicional por rodada com a mordida, mas provoca penalidade de –4 em todos os ataques (incluindo este).

• Arma natural de garras (1d4). Você pode executar um ataque adicional por rodada com as garras, mas sofre penalidade de –4 em todos os ataques (incluindo este).

Herança do Lobo
O lobo é seu ancestral. Você tem dentes caninos salientes, orelhas e cauda de lobo.

Benefício: você recebe +2 em Carisma. Além disso, escolha duas habilidades entre as seguintes:

• +2 em jogadas de ataque para derrubar.

• +4 em jogadas de ataque (em vez de +2) quando está ﬂanqueando.

• +4 em testes de Enganação para fintar.

• Faro. Você percebe criaturas a até 9m e recebe +4 em testes de Sobrevivência para rastrear.

• Arma natural de mordida (1d6). Você pode executar um ataque adicional por rodada com a mordida, mas sofre penalidade de –4 em todos os ataques (incluindo este).

Herança do Morcego
O morcego é seu ancestral. Você tem pele negra e grandes orelhas de morcego.

Benefício: você recebe +2 em Destreza. Além disso, escolha duas habilidades entre as seguintes:

• +4 em testes de Percepção.

• +4 em testes de Furtividade.

• +4 em testes de Intimidação.

• Visão no escuro. Você ignora camuﬂagem (incluindo camuﬂagem total) por escuridão.

• Patágio. Você tem uma membrana ligando seus membros. Pode planar como se estivesse sob efeito de queda suave, e percorrer uma distância horizontal igual ao dobro da altura que estiver caindo, mas apenas se não usar nenhuma armadura.

Herança da Raposa
A raposa é sua ancestral. Você tem grandes orelhas e a cauda densamente peluda de uma raposa.

Benefício: você recebe +2 em Inteligência. Além disso, escolha duas habilidades entre as seguintes:

• +4 em testes de Acrobacia.

• +4 em testes de Furtividade.

• +4 em testes de Iniciativa.

• Deslocamento +3m.

• Faro. Você percebe criaturas a até 9m e recebe +4 em testes de Sobrevivência para rastrear.

Herança da Serpente
A serpente é sua ancestral. Você tem pele de cores brilhantes (amarelo, verde, vermelho, branco e/ou preto), com padrões de serpente, e olhos com pupilas verticais.

Benefício: você recebe +2 em Inteligência. Além disso, escolha duas habilidades entre as seguintes:

• +2 em jogadas de ataque para agarrar.

• Margem de ameaça +2 contra alvos desprevenidos (este bônus não é dobrado por qualquer razão).

• Deslocamento de escalada 6m.

• +4 em testes de Furtividade.

• +4 em testes de Iniciativa.

• +4 em testes de Intimidação.

• Visão na penumbra. Você ignora camuﬂagem (mas não camuﬂagem total) por escuridão.

Herança do Urso
O urso é seu ancestral. Você tem pelagem marrom, orelhas redondas e um focinho curto.

Benefício: você recebe +2 em Constituição. Além disso, escolha duas habilidades entre as seguintes:

• +2 em jogadas de ataque para agarrar.

• +4 em testes de Intimidação.

• Faro. Você percebe criaturas a até 9m e recebe +4 em testes de Sobrevivência para rastrear.

• Arma natural de mordida (1d6). Você pode executar um ataque adicional por rodada com a mordida, mas provoca penalidade de –4 em todos os ataques (incluindo este).

• Arma natural de garras (1d4). Você pode executar um ataque adicional por rodada com as garras, mas sofre penalidade de –4 em todos os ataques (incluindo este)

    `,
    ],
  },
];
