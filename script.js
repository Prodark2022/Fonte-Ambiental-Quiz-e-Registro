function perguntas() {
  //Banco das Perguntas
  const listaPerguntas = [
    {
      pergunta: "Qual atitude ajuda a reduzir o desperdício de água em casa?",
      alternativas: {
        A: "Deixar a torneira aberta ao escovar os dentes.",
        B: "Consertar vazamentos e fechar a torneira quando não estiver em uso.",
        C: "Lavar calçadas diariamente com mangueira.",
        D: "Tomar banhos mais longos.",
      },
      categoria: "Água",
      respostaCorreta: "B",
      pontos: 10,
    },
    {
      pergunta: "Qual pode ser uma consequência da poluição dos rios?",
      alternativas: {
        A: "Aumento da qualidade da água.",
        B: "Crescimento de todas as espécies aquáticas.",
        C: "Contaminação da água e prejuízos aos animais.",
        D: "Eliminação dos resíduos presentes na água.",
      },
      categoria: "Água",
      respostaCorreta: "C",
      pontos: 10,
    },
    {
      pergunta: "Por que preservar nascentes e mananciais é importante?",
      alternativas: {
        A: "Porque contribuem para o abastecimento de água e o equilíbrio dos ecossistemas.",
        B: "Porque aumentam a poluição.",
        C: "Porque impedem toda a evaporação.",
        D: "Porque substituem a necessidade de tratamento da água.",
      },
      categoria: "Água",
      respostaCorreta: "A",
      pontos: 10,
    },
    {
      pergunta: "Qual destas fontes de energia é renovável?",
      alternativas: {
        A: "Carvão mineral.",
        B: "Petróleo.",
        C: "Energia solar.",
        D: "Gasolina.",
      },
      categoria: "Energia",
      respostaCorreta: "C",
      pontos: 10,
    },
    {
      pergunta: "Qual atitude ajuda a economizar energia elétrica?",
      alternativas: {
        A: "Deixar as luzes acesas em cômodos vazios.",
        B: "Desligar aparelhos e luzes quando não forem necessários.",
        C: "Manter todos os aparelhos ligados durante a noite.",
        D: "Abrir a geladeira repetidamente sem necessidade.",
      },
      categoria: "Energia",
      respostaCorreta: "B",
      pontos: 10,
    },
    {
      pergunta:
        "Como a queima de carvão e petróleo contribui para as mudanças climáticas?",
      alternativas: {
        A: "Reduz a concentração de gases de efeito estufa.",
        B: "Elimina a poluição atmosférica.",
        C: "Libera gases que intensificam o efeito estufa.",
        D: "Impede o aquecimento dos oceanos.",
      },
      categoria: "Energia",
      respostaCorreta: "C",
      pontos: 10,
    },
    {
      pergunta: "Qual é o principal objetivo da coleta seletiva?",
      alternativas: {
        A: "Misturar todos os resíduos.",
        B: "Facilitar a separação e a destinação adequada dos materiais.",
        C: "Aumentar a quantidade de lixo nos aterros.",
        D: "Incentivar a queima de plásticos.",
      },
      categoria: "Reciclagem",
      respostaCorreta: "B",
      pontos: 10,
    },
    {
      pergunta: "O que são microplásticos?",
      alternativas: {
        A: "Pequenos fragmentos ou partículas de plástico que podem contaminar o ambiente.",
        B: "Microrganismos que decompõem todo o lixo.",
        C: "Produtos naturais usados na agricultura.",
        D: "Pequenas espécies de peixes.",
      },
      categoria: "Reciclagem",
      respostaCorreta: "A",
      pontos: 10,
    },
    {
      pergunta:
        "Qual é a maneira mais adequada de descartar pilhas e baterias usadas?",
      alternativas: {
        A: "Jogá-las em rios.",
        B: "Misturá-las com restos de alimentos.",
        C: "Encaminhá-las a pontos de coleta apropriados.",
        D: "Enterrá-las em qualquer terreno.",
      },
      categoria: "Reciclagem",
      respostaCorreta: "C",
      pontos: 10,
    },
    {
      pergunta: "O que significa praticar o consumo consciente?",
      alternativas: {
        A: "Comprar produtos sempre que estiverem em promoção.",
        B: "Escolher produtos considerando a necessidade, a durabilidade e os impactos ambientais.",
        C: "Trocar objetos sempre que surgir um modelo novo.",
        D: "Preferir produtos descartáveis em todas as situações.",
      },
      categoria: "Consumo consciente",
      respostaCorreta: "B",
      pontos: 10,
    },
    {
      pergunta:
        "Qual alternativa ajuda a reduzir o uso de plásticos descartáveis?",
      alternativas: {
        A: "Utilizar sacolas e garrafas reutilizáveis.",
        B: "Comprar mais embalagens individuais.",
        C: "Jogar embalagens no lixo comum sem necessidade.",
        D: "Utilizar copos descartáveis em todas as refeições.",
      },
      categoria: "Consumo consciente",
      respostaCorreta: "A",
      pontos: 10,
    },
    {
      pergunta: "Por que reutilizar objetos é uma prática sustentável?",
      alternativas: {
        A: "Porque aumenta a extração de recursos naturais.",
        B: "Porque elimina a necessidade de qualquer tipo de reciclagem.",
        C: "Porque pode reduzir a geração de resíduos e a necessidade de novos materiais.",
        D: "Porque todos os objetos podem ser reutilizados infinitamente.",
      },
      categoria: "Consumo consciente",
      respostaCorreta: "C",
      pontos: 10,
    },
    {
      pergunta: "Qual atitude ajuda a combater o desperdício de alimentos?",
      alternativas: {
        A: "Comprar mais do que será consumido.",
        B: "Planejar as compras e armazenar os alimentos corretamente.",
        C: "Jogar fora os alimentos próximos da data de validade sem verificar sua condição.",
        D: "Preparar porções maiores do que o necessário em todas as refeições.",
      },
      categoria: "Alimentação",
      respostaCorreta: "B",
      pontos: 10,
    },
    {
      pergunta: "Como a produção de alimentos pode afetar o meio ambiente?",
      alternativas: {
        A: "Nunca provoca impactos ambientais.",
        B: "Pode contribuir para o desmatamento, o consumo de água e as emissões de gases de efeito estufa.",
        C: "Elimina a necessidade de utilizar o solo.",
        D: "Impede a perda de biodiversidade em qualquer situação.",
      },
      categoria: "Alimentação",
      respostaCorreta: "B",
      pontos: 10,
    },
    {
      pergunta: "Qual prática pode tornar a alimentação mais sustentável?",
      alternativas: {
        A: "Desperdiçar alimentos diariamente.",
        B: "Comprar produtos sem considerar a quantidade necessária.",
        C: "Aproveitar os alimentos adequadamente e evitar desperdícios.",
        D: "Descartar restos de comida em rios.",
      },
      categoria: "Alimentação",
      respostaCorreta: "C",
      pontos: 10,
    },
    {
      pergunta: "Qual é uma das principais consequências do desmatamento?",
      alternativas: {
        A: "Aumento garantido da biodiversidade.",
        B: "Perda de habitats e ameaça à sobrevivência de espécies.",
        C: "Eliminação de todos os gases de efeito estufa.",
        D: "Recuperação imediata do solo.",
      },
      categoria: "Natureza",
      respostaCorreta: "B",
      pontos: 10,
    },
    {
      pergunta: "O que significa biodiversidade?",
      alternativas: {
        A: "A variedade de seres vivos, genes e ecossistemas.",
        B: "A quantidade de indústrias de uma região.",
        C: "A concentração de plástico nos oceanos.",
        D: "A temperatura média de uma cidade.",
      },
      categoria: "Natureza",
      respostaCorreta: "A",
      pontos: 10,
    },
    {
      pergunta: "Como as árvores contribuem para o equilíbrio ambiental?",
      alternativas: {
        A: "Impedem completamente todas as enchentes.",
        B: "Eliminam toda a poluição do planeta.",
        C: "Absorvem carbono, oferecem habitats e participam do ciclo da água.",
        D: "Evitam que ocorram mudanças climáticas em qualquer circunstância.",
      },
      categoria: "Natureza",
      respostaCorreta: "C",
      pontos: 10,
    },
    {
      pergunta: "Como uma escola pode contribuir para a preservação ambiental?",
      alternativas: {
        A: "Ignorando o descarte de resíduos.",
        B: "Promovendo campanhas de conscientização, coleta seletiva e economia de recursos.",
        C: "Incentivando o desperdício de água.",
        D: "Descartando materiais recicláveis junto com todos os outros resíduos.",
      },
      categoria: "Comunidade",
      respostaCorreta: "B",
      pontos: 10,
    },
    {
      pergunta:
        "Qual é uma forma de incentivar a participação da comunidade em ações ambientais?",
      alternativas: {
        A: "Impedir a participação dos moradores.",
        B: "Esconder informações sobre os problemas ambientais.",
        C: "Organizar mutirões de limpeza e campanhas educativas.",
        D: "Deixar toda a responsabilidade ambiental para uma única pessoa.",
      },
      categoria: "Comunidade",
      respostaCorreta: "C",
      pontos: 10,
    },
  ];

  return listaPerguntas;
}

function analisarRespostas(respostasUsuario) {
  const listaPerguntas = perguntas();
  let pontuacao = 0;
  let acertos = 0;

  for (let i = 0; i < listaPerguntas.length; i++) {
    const resposta = respostasUsuario[i]?.toUpperCase();

    if (resposta === listaPerguntas[i].respostaCorreta) {
      pontuacao += listaPerguntas[i].pontos;
      acertos++;
    }
  }

  return {
    pontuacao: pontuacao,
    acertos: acertos,
    totalPerguntas: listaPerguntas.length,
  };
}

// Define o estágio da planta pelo percentual de respostas corretas.
function obterEstagioPlanta(acertos, total) {
  const percentual = total === 0 ? 0 : (acertos / total) * 100;

  if (percentual <= 33) {
    return { nome: "Semente", imagem: "assets/semente.png" };
  }
  if (percentual <= 70) {
    return { nome: "Broto verde", imagem: "assets/broto.png" };
  }
  return { nome: "Árvore florida", imagem: "assets/arvore.png" };
}

// Reúne os resultados do quiz e a evolução da planta
function iniciarQuiz(respostasUsuario) {
  const resultado = analisarRespostas(respostasUsuario);
  const planta = obterEstagioPlanta(
    resultado.acertos,
    resultado.totalPerguntas,
  );

  return {
    ...resultado,
    planta,
  };
}

const lista = perguntas();

function inicializarQuiz() {     //Processor que incia o quiz no HTML
  const form = document.querySelector("#form");
  const resultadoEl = document.querySelector("#resultado");
  const contador = document.querySelector("#contador");
  const barra = document.querySelector("#barra");
  const botaoResultado = document.querySelector("#btn-resultado");
  const botaoRefazer = document.querySelector("#btn-refazer");
  const resultadoTitulo = document.querySelector("#resultado-titulo");
  const resultadoNota = document.querySelector("#resultado-nota");
  const resultadoTexto = document.querySelector("#resultado-texto");
  const resultadoAreas = document.querySelector("#resultado-areas");
  const resultadoDicas = document.querySelector("#resultado-dicas");

  const elementosObrigatorios = { 
    form,
    resultado: resultadoEl,
    contador,
    barra,
    "botão de resultado": botaoResultado,
    "botão refazer": botaoRefazer,
    "título do resultado": resultadoTitulo,
    "nota do resultado": resultadoNota,
    "texto do resultado": resultadoTexto,
    "áreas do resultado": resultadoAreas,
    "lista de dicas": resultadoDicas,
  };

  for (const [nome, elemento] of Object.entries(elementosObrigatorios)) {
    if (!elemento) {
      throw new Error(`Elemento obrigatório não encontrado no HTML: ${nome}.`);
    }
  }
  // Imagem da planta
  let imagemPlanta = document.querySelector("#planta-imagem");
  if (!imagemPlanta) {
    imagemPlanta = document.createElement("img");
    imagemPlanta.id = "planta-imagem";
    imagemPlanta.hidden = true;
    resultadoEl.insertBefore(imagemPlanta, resultadoEl.firstChild);
  }

  function mostrarPerguntas() {
    lista.forEach((item, indice) => {
      const grupo = document.createElement("fieldset");
      const legenda = document.createElement("legend");

      legenda.textContent = `${indice + 1}. ${item.pergunta}`;
      grupo.appendChild(legenda);

      Object.entries(item.alternativas).forEach(([letra, texto]) => {
        const rotulo = document.createElement("label");
        const opcao = document.createElement("input");

        opcao.type = "radio";
        opcao.name = `resposta-${indice}`;
        opcao.value = letra;
        opcao.required = true;

        rotulo.append(opcao, ` ${letra}) ${texto}`);
        grupo.appendChild(rotulo);
        grupo.appendChild(document.createElement("br"));
      });

      form.insertBefore(grupo, botaoResultado);
    });
  }

  function atualizarProgresso() {
    const respondidas = lista.filter((_, indice) =>
      form.querySelector(`input[name="resposta-${indice}"]:checked`),
    ).length;
    const percentual =
      lista.length === 0 ? 0 : (respondidas / lista.length) * 100;

    contador.textContent = `${respondidas} de ${lista.length} perguntas respondidas`;
    barra.style.width = `${percentual}%`;
    barra.setAttribute("role", "progressbar");
    barra.setAttribute("aria-valuemin", "0");
    barra.setAttribute("aria-valuemax", String(lista.length));
    barra.setAttribute("aria-valuenow", String(respondidas));
  }

  function mostrarDesempenhoPorArea(respostas) {
    const desempenho = new Map();

    lista.forEach((item, indice) => {
      const atual = desempenho.get(item.categoria) || { acertos: 0, total: 0 };
      atual.total++;
      if (respostas[indice]?.toUpperCase() === item.respostaCorreta) {
        atual.acertos++;
      }
      desempenho.set(item.categoria, atual);
    });

    const titulo = document.createElement("h3");
    titulo.textContent = "Desempenho por tema";
    const listaAreas = document.createElement("ul");

    desempenho.forEach((dados, categoria) => {
      const item = document.createElement("li");
      item.textContent = `${categoria}: ${dados.acertos} de ${dados.total} acertos`;
      listaAreas.appendChild(item);
    });

    resultadoAreas.replaceChildren(titulo, listaAreas);
  }

  mostrarPerguntas();
  atualizarProgresso();
  resultadoEl.hidden = true;

  form.addEventListener("change", atualizarProgresso);

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const respostas = lista.map(
      (_, indice) =>
        form.querySelector(`input[name="resposta-${indice}"]:checked`)?.value,
    );
    const dados = iniciarQuiz(respostas);

    resultadoTitulo.textContent = `Sua planta: ${dados.planta.nome}`;
    resultadoNota.textContent = `Pontuação: ${dados.pontuacao} pontos`;
    resultadoTexto.textContent = `Você acertou ${dados.acertos} de ${dados.totalPerguntas} perguntas.`;
    mostrarDesempenhoPorArea(respostas);
    mostrarDicas(respostas, lista, resultadoDicas);

    imagemPlanta.src = dados.planta.imagem;
    imagemPlanta.alt = `Ilustração: ${dados.planta.nome}`;
    imagemPlanta.hidden = false;

    resultadoEl.hidden = false;
    resultadoEl.focus();
  });

  botaoRefazer.addEventListener("click", () => {
    form.reset();
    resultadoEl.hidden = true;
    imagemPlanta.hidden = true;
    atualizarProgresso();
    form.scrollIntoView({ behavior: "smooth" });
  });

  function mostrarDicas(respostas, lista, resultadoDicas) {
    //Define a lista de dicas para as perguntas
    const dicasPergunta = [
      {
        categoria: "Água",
        dica: "Pense em hábitos cotidianos que reduzem o tempo em que a água fica correndo sem necessidade.",
      },
      {
        categoria: "Água",
        dica: "A poluição de um rio pode afetar tanto a qualidade da água quanto os seres que vivem nele.",
      },
      {
        categoria: "Água",
        dica: "Nascentes e mananciais são importantes para o abastecimento e para a vida dos ecossistemas.",
      },
      {
        categoria: "Energia",
        dica: "Uma fonte renovável é reposta naturalmente e não depende da queima de combustíveis fósseis.",
      },
      {
        categoria: "Energia",
        dica: "Verifique se luzes e aparelhos estão ligados quando ninguém precisa deles.",
      },
      {
        categoria: "Energia",
        dica: "A queima de combustíveis fósseis libera gases que retêm calor na atmosfera.",
      },
      {
        categoria: "Reciclagem",
        dica: "Separar materiais ajuda a encaminhá-los para o destino adequado.",
      },
      {
        categoria: "Reciclagem",
        dica: "“Micro” significa muito pequeno; essas partículas podem se espalhar pelo ambiente.",
      },
      {
        categoria: "Reciclagem",
        dica: "Alguns materiais precisam de pontos de coleta específicos, em vez do lixo comum.",
      },
      {
        categoria: "Consumo consciente",
        dica: "Uma compra responsável considera a necessidade, a durabilidade e os impactos do produto.",
      },
      {
        categoria: "Consumo consciente",
        dica: "Pense em objetos reutilizáveis que substituem embalagens de uso único.",
      },
      {
        categoria: "Consumo consciente",
        dica: "Reutilizar pode prolongar a vida útil de um objeto e diminuir a necessidade de novos materiais.",
      },
      {
        categoria: "Alimentação",
        dica: "Planejar o que será comprado e armazenar bem os alimentos ajuda a evitar perdas.",
      },
      {
        categoria: "Alimentação",
        dica: "Produzir alimentos pode exigir água e espaço e também gerar emissões.",
      },
      {
        categoria: "Alimentação",
        dica: "Aproveitar os alimentos com cuidado ajuda a reduzir o desperdício.",
      },
      {
        categoria: "Natureza",
        dica: "Quando uma área natural é destruída, os animais e plantas podem perder onde vivem.",
      },
      {
        categoria: "Natureza",
        dica: "Biodiversidade diz respeito à variedade da vida em diferentes níveis.",
      },
      {
        categoria: "Natureza",
        dica: "Árvores oferecem abrigo a espécies e participam de ciclos naturais, como os do carbono e da água.",
      },
      {
        categoria: "Comunidade",
        dica: "A escola pode mobilizar estudantes e funcionários para mudar hábitos coletivamente.",
      },
      {
        categoria: "Comunidade",
        dica: "A participação cresce quando as pessoas são convidadas a agir juntas em iniciativas locais.",
      },
    ];
    const itens = [];

    for (let i = 0; i < lista.length; i++) {
      const resposta = (respostas[i] || "").toUpperCase();

      if (resposta !== lista[i].respostaCorreta) {
        const item = document.createElement("li");
        item.textContent = `${dicasPergunta[i].categoria}: ${dicasPergunta[i].dica}`;
        itens.push(item);
      }
    }

    if (itens.length === 0) {
      const item = document.createElement("li");
      item.textContent = "Parabéns! Você acertou todas as questões.";
      itens.push(item);
    }

    resultadoDicas.replaceChildren(...itens);
  }

    function botaoQuiz() {
    const quizDiario = document.querySelector("#quiz-diario");
    const botaoQuiz = document.querySelector("#btn-quiz");

    botaoQuiz.addEventListener("click", () => {
      quizDiario.hidden = !quizDiario.hidden;
      botaoQuiz.setAttribute("aria-expanded", String(!quizDiario.hidden));
    });
    
}

botaoQuiz();


  return  function resetarQuiz(){
    form.reset();
    resultadoEl.hidden = true;
    imagemPlanta.hidden = true;


    resultadoDicas.replaceChildren();
    resultadoAreas.replaceChildren();
    atualizarProgresso();
  }
};

function iniciarRegistroAcoes() {
  const impactos = {
    "Separar Residuos": { tipo: "residuos", valor: 1, unidade: "unidade" },
    "Economizar Energia": { tipo: "energia", valor: 0.5, unidade: "kWh" },
    "Fechar a Torneira": { tipo: "agua", valor: 12, unidade: "L" },
  };

  const impactoTotal = {
    agua: 0,
    energia: 0,
    residuos: 0,
  };

  const textoAgua = document.querySelector("#impacto-agua");
  const textoEnergia = document.querySelector("#impacto-energia");
  const textoResiduos = document.querySelector("#impacto-residuos");

  function atualizarPainelImpacto() {
    textoAgua.textContent = `${impactoTotal.agua} L`;
    textoEnergia.textContent = `${impactoTotal.energia} kWh`;
    textoResiduos.textContent = `${impactoTotal.residuos} unidades`;
  }

  function recalcularImpacto() {          
    impactoTotal.residuos = 0;
    impactoTotal.energia = 0;
    impactoTotal.agua = 0;

    registros.forEach((registro) => {
      const impacto = impactos[registro.acao];
      if (impacto) {
        impactoTotal[impacto.tipo] += impacto.valor;
      }
    });

    atualizarPainelImpacto();
  }

  // Calculo da Meta
  const valorMeta = 500;
  const barraMeta = document.querySelector("#Meta-progress");
  const textoMeta = document.querySelector("#Meta");

  function contarMeta() {
    const quantidadeMeta = Math.min(registros.length, valorMeta);

    textoMeta.textContent = `Meta da Escola: ${quantidadeMeta} de ${valorMeta} ações sustentáveis`;

    barraMeta.max = valorMeta;
    barraMeta.value = quantidadeMeta;
  }

  const chaveRegistros = "registrosAmbientais";
  const listaHistorico = document.querySelector("#historico");
  let registros = [];

  if (!listaHistorico) {
    throw new Error('Não foi encontrada a lista com id="historico".');
  }

  try {
  const registrosSalvos = localStorage.getItem(chaveRegistros);

  if (registrosSalvos) {
    const dados = JSON.parse(registrosSalvos);

    if (!Array.isArray(dados)) {
      throw new TypeError("Os registros salvos não são uma lista.");
    }

    const registrosValidos = dados.every((registro) =>        //Regisros Salvos
      registro !== null &&
      typeof registro === "object" &&
      typeof registro.acao === "string" &&
      Object.prototype.hasOwnProperty.call(impactos, registro.acao) &&
      typeof registro.dataHora === "string" &&
      registro.dataHora.trim() !== ""
    );

    if (!registrosValidos) {
      throw new TypeError("Há registros salvos inválidos.");
    }

    registros = dados;
  }
} catch (erro) {
  console.error("Não foi possível carregar os registros salvos:", erro);
  registros = [];
};

  function atualizarHistorico() {
    listaHistorico.replaceChildren();

    registros.forEach((registroAtual) => {
      const item = document.createElement("li");
      item.textContent = `${registroAtual.acao} — ${registroAtual.dataHora}`;
      listaHistorico.appendChild(item);
    });
  }

  
    function registrarAcao(acao) {
    const impacto = impactos[acao];

    if (!impacto) {
      console.error(`Ação sem impacto configurado: ${acao}`);
      return;
    }

    const horario = Date.now();
    const janela24h = 24 * 60 * 60 * 1000;
    const limitePorAcao = 10;

    const registrosRecentes = registros
      .filter(
        (item) =>
          item.acao === acao &&
          Number.isFinite(item.registradoEm) &&
          item.registradoEm > horario - janela24h &&
          item.registradoEm <= horario
      )
      .sort((a, b) => a.registradoEm - b.registradoEm);

    if (registrosRecentes.length >= limitePorAcao) {
      const proximaLiberacao = new Date(
        registrosRecentes[0].registradoEm + janela24h
      );

      alert(
        `Você já registrou essa ação 10 vezes nas últimas 24 horas. ` +
          `Poderá registrá-la novamente após ${proximaLiberacao.toLocaleString("pt-BR")}.`
      );
      return;
    }

    registros.push({
      acao,
      dataHora: new Date(horario).toLocaleString("pt-BR"),
      registradoEm: horario,
    });

    atualizarHistorico();
    contarMeta();
    recalcularImpacto();

    try {
      localStorage.setItem(chaveRegistros, JSON.stringify(registros));
    } catch (erro) {
      console.error("Não foi possível salvar o registro:", erro);
    }
  }

  atualizarHistorico();
  contarMeta();
  recalcularImpacto();

  document.querySelectorAll(".btn-acao").forEach((botao) => {
    botao.addEventListener("click", () => {
      registrarAcao(botao.dataset.acao);
    });
  });

  return function resetarAcoes() {
    registros.length = 0;
    atualizarHistorico();
    contarMeta();
    recalcularImpacto();

    try {
      localStorage.removeItem(chaveRegistros);
    } catch (erro) {
      console.error("Não foi possível apagar os registros salvos:", erro);
    }
  };
}

function iniciarAplicacao() {
  inicializarQuiz();

  const resetarAcoes = iniciarRegistroAcoes();
  const botaoApagarRegistro = document.querySelector("#botao-apagar-registro");

  if (!botaoApagarRegistro) {
    throw new Error('Botão de apagar registro não encontrado: #botao-apagar-registro.');
  }

  botaoApagarRegistro.addEventListener("click", () => {
    if (!confirm("Deseja apagar os registros de ações sustentáveis?")) {
      return;
    }

    resetarAcoes();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarAplicacao, { once: true });
} else {
  iniciarAplicacao();
}