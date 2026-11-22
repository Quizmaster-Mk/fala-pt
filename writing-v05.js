/* Fala PT V0.5 — exercices écrits et correction transparente, sans API */
(function (root) {
  'use strict';
  const extras = {
    ola: [
      {kind:'cloze',before:'Eu ',after:' português.',question:'Complète « Je parle portugais. »',answer:'falo',alternatives:[],tip:'« Falo » est la première personne du singulier de « falar ».'}
    ],
    cafe: [
      {kind:'cloze',before:'Queria um café, ',after:' faz favor.',question:'Complète la formule de politesse.',answer:'se',alternatives:[],tip:'Au Portugal, « se faz favor » signifie « s’il vous plaît ».'}
    ],
    familia: [
      {kind:'cloze',before:'A minha família ',after:' portuguesa.',question:'Complète « Ma famille est portugaise. »',answer:'é',alternatives:[],tip:'Au présent, le verbe « ser » se conjugue « é » à la troisième personne.'}
    ],
    devagar: [
      {kind:'cloze',before:'Pode falar mais ',after:'?',question:'Complète « Pouvez-vous parler plus lentement ? »',answer:'devagar',alternatives:[],tip:'« Devagar » signifie lentement ; c’est un mot très utile en voyage.'}
    ],
    compras: [
      {kind:'cloze',before:'Posso pagar ',after:' cartão?',question:'Complète « Puis-je payer par carte ? »',answer:'com',alternatives:[],tip:'« Pagar com cartão » est la formulation habituelle au Portugal.'}
    ],
    estacao: [
      {kind:'cloze',before:'Onde fica a ',after:'?',question:'Complète « Où se trouve la gare ? »',answer:'estação',alternatives:[],tip:'« Estação » désigne une gare ; « estação de comboios » précise la gare ferroviaire.'}
    ],
    restaurante: [
      {kind:'cloze',before:'Posso ver a ',after:'?',question:'Complète « Puis-je voir la carte ? »',answer:'ementa',alternatives:[],tip:'Au Portugal, « ementa » est courant pour la carte du restaurant.'},
      {kind:'write',prompt:'Tu arrives au restaurant : demande une table pour quatre personnes.',answer:'Tem mesa para quatro pessoas?',alternatives:['Tem uma mesa para quatro pessoas?','Há mesa para quatro pessoas?'],tip:'« Tem mesa para… ? » est direct et naturel. « Há mesa… ? » est aussi possible.'}
    ],
    telefone: [
      {kind:'cloze',before:'A ligação está ',after:'.',question:'Complète « La connexion est mauvaise. »',answer:'má',alternatives:[],tip:'« Má » est le féminin de « mau » ; il s’accorde avec « ligação ».'},
      {kind:'write',prompt:'Tu comprends mal ton interlocuteur au téléphone : demande-lui de répéter.',answer:'Pode repetir, se faz favor?',alternatives:['Pode repetir, por favor?','Pode repetir?'],tip:'« Pode repetir? » suffit souvent. « Se faz favor » rend la demande plus polie.'}
    ],
    rotina: [
      {kind:'cloze',before:'Hoje ',after:' em casa.',question:'Complète « Aujourd’hui, je travaille à la maison. »',answer:'trabalho',alternatives:[],tip:'« Trabalho » peut être à la fois un nom et la première personne de « trabalhar ».'},
      {kind:'write',prompt:'Explique en portugais : « Je rentre à la maison après le travail. »',answer:'Vou para casa depois do trabalho.',alternatives:['Depois do trabalho, vou para casa.','Regresso a casa depois do trabalho.'],tip:'« Depois de » devient « depois do » devant « o trabalho » ; « regresso » est une autre façon de dire « je rentre ».'}
    ],
    meteorologia: [
      {kind:'cloze',before:'Hoje está a ',after:'.',question:'Complète « Il pleut aujourd’hui. »',answer:'chover',alternatives:[],tip:'Au Portugal, « estar a + infinitif » exprime une action en cours.'},
      {kind:'write',prompt:'Écris : « Demain, il fera plus chaud. »',answer:'Amanhã vai estar mais quente.',alternatives:['Vai estar mais quente amanhã.','Amanhã estará mais quente.'],tip:'« Vai estar » et « estará » expriment tous deux le futur.'}
    ],
    alojamento: [
      {kind:'cloze',before:'Tenho uma ',after:'.',question:'Complète « J’ai une réservation. »',answer:'reserva',alternatives:[],tip:'À l’hôtel, « Tenho uma reserva » signifie « J’ai une réservation ».'},
      {kind:'write',prompt:'Demande à quelle heure est le petit déjeuner.',answer:'A que horas é o pequeno-almoço?',alternatives:['A que horas servem o pequeno-almoço?'],tip:'« Pequeno-almoço » est la façon de dire petit déjeuner au Portugal.'}
    ],
    passado: [
      {kind:'cloze',before:'Ontem ',after:' à praia.',question:'Complète « Hier, nous sommes allés à la plage. »',answer:'fomos',alternatives:[],tip:'« Fomos » est la forme de « ir » au passé pour « nós ».'},
      {kind:'write',prompt:'Raconte : « Hier, nous sommes allés à la plage. »',answer:'Ontem fomos à praia.',alternatives:['Fomos à praia ontem.'],tip:'« Ontem » situe l’action dans le passé et « fomos » signifie « nous sommes allés ».'}
    ],
    opiniao: [
      {kind:'cloze',before:'Apesar de ser caro, vale a ',after:'.',question:'Complète « Malgré le prix, ça en vaut la peine. »',answer:'pena',alternatives:[],tip:'« Valer a pena » est une expression fixe : « en valoir la peine ».'},
      {kind:'write',prompt:'Exprime ta réserve : « Je ne suis pas certain, cela dépend de la situation. »',answer:'Não tenho a certeza, depende da situação.',alternatives:['Não estou certo, depende da situação.','Não tenho a certeza. Depende da situação.'],tip:'« Não tenho a certeza » nuance ton avis ; « depende de » demande la préposition « de ».'},
      {kind:'paragraph',prompt:'Écris ces deux idées : « Je pense que cela en vaut la peine. Même si c’est cher, je veux essayer. »',answer:'Acho que vale a pena. Embora seja caro, quero experimentar.',alternatives:['Acho que vale a pena. Apesar de ser caro, quero experimentar.','Penso que vale a pena. Embora seja caro, quero experimentar.'],tip:'« Embora » demande souvent le subjonctif (« seja »). « Apesar de » se construit avec l’infinitif.'}
    ],
    imprevistos: [
      {kind:'cloze',before:'Há alguma ',after:' disponível?',question:'Complète « Y a-t-il une solution alternative ? »',answer:'alternativa',alternatives:[],tip:'« Alguma alternativa » sert à demander une autre solution.'},
      {kind:'write',prompt:'Demande : « Existe-t-il une autre solution disponible ? »',answer:'Há alguma alternativa disponível?',alternatives:['Existe alguma alternativa disponível?','Há outra solução disponível?'],tip:'« Há » et « existe » peuvent tous deux indiquer l’existence.'},
      {kind:'paragraph',prompt:'Écris : « Le train a été annulé. Y a-t-il une autre solution ? »',answer:'O comboio foi cancelado. Há alguma alternativa?',alternatives:['O comboio foi cancelado. Existe alguma alternativa?','O comboio foi cancelado. Há outra solução?'],tip:'« Foi cancelado » est la voix passive au passé ; « há » indique l’existence.'}
    ],
    hipoteses: [
      {kind:'cloze',before:'Se ',after:' tempo, iria contigo.',question:'Complète « Si j’avais le temps, j’irais avec toi. »',answer:'tivesse',alternatives:[],tip:'Dans cette hypothèse, « se » est suivi de l’imparfait du subjonctif.'},
      {kind:'write',prompt:'Exprime une hypothèse : « Si je pouvais, je resterais quelques jours de plus. »',answer:'Se pudesse, ficava mais uns dias.',alternatives:['Se pudesse, ficaria mais uns dias.','Se eu pudesse, ficava mais uns dias.'],tip:'« Se pudesse » introduit la condition ; « ficava » est idiomatique ici à l’oral européen.'},
      {kind:'paragraph',prompt:'Écris : « Si j’avais plus de temps, je visiterais Porto. Ensuite, j’irais à Braga. »',answer:'Se tivesse mais tempo, visitaria o Porto. Depois, iria a Braga.',alternatives:['Se tivesse mais tempo, visitava o Porto. Depois, ia a Braga.','Se eu tivesse mais tempo, visitaria o Porto. Depois, iria a Braga.'],tip:'« Se tivesse » introduit l’hypothèse ; « visitaria » et « iria » sont des conditionnels.'}
    ],
    trabalho: [
      {kind:'cloze',before:'Tenho de organizar as minhas ',after:'.',question:'Complète « Je dois organiser mes priorités. »',answer:'prioridades',alternatives:[],tip:'« Ter de + infinitif » exprime une obligation en portugais européen.'},
      {kind:'write',prompt:'Écris : « Mon horaire varie d’une semaine à l’autre. »',answer:'O meu horário varia de semana para semana.',alternatives:['O meu horário muda de semana para semana.'],tip:'« De semana para semana » exprime une variation au fil des semaines.'},
      {kind:'paragraph',prompt:'Écris : « Je dirige une équipe. J’essaie de concilier le travail et la famille. »',answer:'Sou responsável por uma equipa. Tento conciliar o trabalho com a família.',alternatives:['Coordeno uma equipa. Tento conciliar o trabalho com a família.','Sou responsável por uma equipa. Estou a tentar conciliar o trabalho com a família.'],tip:'« Ser responsável por » est utile pour décrire sa fonction ; « conciliar… com… » exprime un équilibre entre deux éléments.'}
    ],
    nuances: [
      {kind:'cloze',before:'É possível que ',after:' mais tarde.',question:'Complète « Il est possible qu’il arrive plus tard. »',answer:'chegue',alternatives:[],tip:'Après « é possível que », on utilise normalement le subjonctif.'},
      {kind:'write',prompt:'Exprime ton doute : « Cela ne me semble pas être la meilleure solution. »',answer:'Não me parece que seja a melhor solução.',alternatives:['Não acho que seja a melhor solução.','Não me parece ser a melhor solução.'],tip:'« Não me parece que » est suivi ici du subjonctif « seja ».'},
      {kind:'paragraph',prompt:'Écris : « Je préfère réfléchir avant de décider. Nous pouvons en reparler demain. »',answer:'Prefiro pensar antes de decidir. Podemos voltar a falar disso amanhã.',alternatives:['Prefiro pensar melhor antes de decidir. Podemos falar disso amanhã.','Prefiro refletir antes de decidir. Podemos voltar a falar disso amanhã.'],tip:'« Antes de + infinitif » est une structure courante ; « voltar a + infinitif » signifie faire quelque chose à nouveau.'}
    ]
  };
  function writtenTasks(lesson) { return extras[lesson.id] || []; }
  const stripDiacritics = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  function comparable(value, keepAccents=true) {
    const input=String(value==null?'':value).normalize('NFC').toLocaleLowerCase('pt-PT')
      .replace(/[‘’´\x60]/g,"'").replace(/[.,!?;:¿¡“”"()]/g,' ').replace(/\s+/g,' ').trim();
    return keepAccents?input:stripDiacritics(input);
  }
  function evaluate(input,exercise){
    const value=String(input==null?'':input).trim();
    const accepted=[exercise.answer,...(exercise.alternatives||[])].filter(Boolean);
    if(!value)return {status:'empty',accepted,canonical:exercise.answer,tip:exercise.tip||'',message:'Écris une réponse avant de vérifier.'};
    const strict=comparable(value,true),loose=comparable(value,false);
    const exact=accepted.find(x=>comparable(x,true)===strict);
    if(exact)return {status:'correct',accepted,canonical:exercise.answer,matched:exact,tip:exercise.tip||'',message:'Bravo ! Cette formulation est reconnue.'};
    const accent=accepted.find(x=>comparable(x,false)===loose);
    if(accent)return {status:'minor',accepted,canonical:exercise.answer,matched:accent,tip:exercise.tip||'',message:'La phrase est correcte dans le fond. Vérifie les accents et signes écrits.'};
    return {status:'unverified',accepted,canonical:exercise.answer,tip:exercise.tip||'',message:'Cette formulation n’est pas encore dans les réponses reconnues. Elle peut être valable : compare avec les exemples.'};
  }
  const lessonNotes = {
    ola:'« Tudo bem? » se dit pour prendre des nouvelles. « E contigo? » signifie « Et toi ? » dans un registre familier.',
    cafe:'Au Portugal, « queria » est une manière naturelle et polie de commander.',
    familia:'« De onde és? » s’utilise avec « tu » ; « de onde é? » est possible dans un registre de politesse.',
    devagar:'« Não percebi » signifie « Je n’ai pas compris ». « Pode repetir? » sert à demander une répétition.',
    compras:'« Quanto custa? » demande le prix ; « Posso pagar com cartão? » demande si le paiement par carte est possible.',
    estacao:'« Comboio » signifie train en portugais européen, et « estação » signifie gare.',
    restaurante:'« Ementa » signifie la carte du restaurant ; « a conta » signifie l’addition.',
    telefone:'« Estou a ouvir mal » signifie « Je vous entends mal » ; « ligação » peut désigner la connexion téléphonique.',
    rotina:'Pour une action en cours au Portugal, on emploie souvent « estar a + infinitif ».',
    meteorologia:'« Estar a chover » signifie « être en train de pleuvoir » ; « amanhã » veut dire demain.',
    alojamento:'« Pequeno-almoço » est le mot utilisé au Portugal pour « petit déjeuner ».',
    passado:'« Fomos » est le passé de « ir » avec « nós » ; « ontem » signifie hier.',
    opiniao:'« Apesar de » est suivi de l’infinitif ; « embora » s’emploie fréquemment avec le subjonctif.',
    imprevistos:'« Devido a » introduit une cause ; « há alguma alternativa? » demande une autre solution.',
    hipoteses:'Pour une hypothèse, la structure « se tivesse…, iria… » est courante.',
    trabalho:'« Ser responsável por » et « conciliar… com… » sont utiles pour décrire sa vie professionnelle.',
    nuances:'« Não me parece que seja… » est une façon nuancée d’exprimer un doute.'
  };
  function lessonTip(id) { return lessonNotes[id]||''; }
  const existingAlternatives = {
    'Estou bem, obrigado. E contigo?':['Estou bem, obrigada. E contigo?','Estou bem, obrigado. E tu?','Estou bem, obrigada. E tu?'],
    'Queria um café e uma água, se faz favor.':['Queria um café e uma água, por favor.','Gostaria de um café e de uma água, se faz favor.'],
    'Sou de França, mas a minha família é portuguesa.':['Sou de França, mas tenho família portuguesa.'],
    'Desculpe, estou a aprender português.':['Peço desculpa, estou a aprender português.'],
    'Queria meio quilo, se faz favor.':['Queria meio quilo, por favor.'],
    'Queria ir para o Porto, se faz favor.':['Gostaria de ir para o Porto, se faz favor.'],
    'Queria reservar uma mesa para esta noite.':['Gostaria de reservar uma mesa para esta noite.'],
    'Desculpe, a ligação está má.':['Peço desculpa, a ligação está má.'],
    'Ao fim do dia, gosto de estar com a família.':['No fim do dia, gosto de estar com a família.'],
    'Amanhã vai estar mais quente.':['Amanhã estará mais quente.'],
    'Podia dar-me outra chave, se faz favor?':['Poderia dar-me outra chave, se faz favor?','Podia dar-me outra chave, por favor?'],
    'No domingo, estive com os meus amigos.':['Estive com os meus amigos no domingo.'],
    'Embora seja difícil, quero continuar a aprender.':['Apesar de ser difícil, quero continuar a aprender.'],
    'Se houver outro horário, prefiro sair mais cedo.':['Se existir outro horário, prefiro sair mais cedo.'],
    'Se pudesse, passava mais tempo em Portugal.':['Se pudesse, passaria mais tempo em Portugal.'],
    'Estou a tentar conciliar o trabalho com a vida familiar.':['Tento conciliar o trabalho com a vida familiar.'],
    'Prefiro pensar melhor antes de tomar uma decisão.':['Prefiro refletir antes de tomar uma decisão.']
  };
  function acceptable(exercise,lessonId) {
    return {...exercise,answer:exercise.answer||exercise.text,
      tip:exercise.tip||lessonTip(lessonId),
      alternatives:[...(exercise.alternatives||[]),...(existingAlternatives[exercise.text]||[])]};
  }
  root.FalaWriting = {writtenTasks,evaluate,comparable,acceptable,lessonTip};
})(window);
