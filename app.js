
const questions = [
  {
    subject: "Língua Portuguesa",
    passage: `Leia o texto para responder às questões 1 e 2.

O passeio de Clara

No sábado pela manhã, Clara foi ao parque com seu avô. Ela levou uma garrafa de água, um caderno e lápis de cor. Enquanto o avô caminhava, Clara observou os pássaros e desenhou uma árvore cheia de flores.
Antes de ir embora, os dois recolheram o papel do lanche e colocaram no lixo.`,
    q: "Onde Clara foi com seu avô?",
    opts: ["À biblioteca.", "Ao parque.", "Ao mercado.", "À escola."],
    a: 1,
    explain: "O texto informa que Clara foi ao parque com seu avô."
  },
  {
    subject: "Língua Portuguesa",
    passage: null,
    q: "O que Clara fez enquanto o avô caminhava?",
    opts: ["Brincou de bola com os amigos.", "Comprou um lanche.", "Observou os pássaros e desenhou uma árvore.", "Leu um livro de histórias."],
    a: 2,
    explain: "Ela observou os pássaros e desenhou uma árvore cheia de flores."
  },
  {
    subject: "Língua Portuguesa",
    passage: `Leia o texto para responder às questões 3 e 4.

AVISO

Atenção, famílias!

Na próxima quarta-feira, a escola realizará uma feira de troca de livros, das 9h às 11h, no pátio.
Cada estudante poderá levar um livro em bom estado para trocar por outro.

Esperamos vocês!
Equipe escolar`,
    q: "Qual é a principal finalidade desse texto?",
    opts: ["Contar uma aventura vivida por estudantes.", "Ensinar a produzir um livro.", "Informar e convidar as famílias para um evento.", "Apresentar o resultado de uma pesquisa."],
    a: 2,
    explain: "O aviso informa data, horário, local e como participar da feira."
  },
  {
    subject: "Língua Portuguesa",
    passage: null,
    q: "De acordo com o aviso, onde acontecerá a feira de troca de livros?",
    opts: ["Na biblioteca municipal.", "No pátio da escola.", "Na sala de aula.", "Na quadra do bairro."],
    a: 1,
    explain: "O aviso informa que o evento será realizado no pátio da escola."
  },
  {
    subject: "Língua Portuguesa",
    passage: `Leia o trecho.

Quando chegou à praça, Miguel percebeu que o céu estava escuro.
Mesmo assim, decidiu esperar alguns minutos. Logo, ouviu trovões e viu as primeiras gotas caírem.
Então, guardou o brinquedo e voltou para casa.`,
    q: "A palavra “Então”, no trecho, indica ideia de",
    opts: ["oposição.", "tempo ou sequência de acontecimentos.", "comparação.", "dúvida."],
    a: 1,
    explain: "“Então” apresenta a ação que aconteceu em seguida."
  },
  {
    subject: "Língua Portuguesa",
    passage: `Leia o poema.

A chuva

Pinga, pinga no telhado,
a chuva dança no chão.
A rua fica molhada,
e a planta bebe água do céu.`,
    q: "Qual elemento da natureza é o tema principal do poema?",
    opts: ["O vento.", "O sol.", "A chuva.", "A lua."],
    a: 2,
    explain: "O poema descreve a chuva e seus efeitos."
  },
  {
    subject: "Língua Portuguesa",
    passage: null,
    q: "No verso “a chuva dança no chão”, a expressão é um exemplo de linguagem",
    opts: ["literal, pois a chuva tem pernas.", "figurada, pois atribui à chuva uma ação humana.", "científica, pois explica o ciclo da água.", "formal, pois apresenta uma ordem."],
    a: 1,
    explain: "A chuva não dança de verdade; a expressão cria uma imagem poética."
  },
  {
    subject: "Língua Portuguesa",
    passage: `Leia os textos.

Texto 1: “A prática de atividades físicas contribui para a saúde. Caminhar, brincar e andar de bicicleta são exemplos de atividades que movimentam o corpo.”

Texto 2: “Eu adoro andar de bicicleta no fim da tarde! Sinto o vento no rosto e me divirto muito.”`,
    q: "Qual é a diferença entre os dois textos?",
    opts: ["O Texto 1 apresenta uma informação geral, e o Texto 2 expressa uma opinião pessoal.", "Os dois textos são convites para uma festa.", "O Texto 1 conta uma história, e o Texto 2 ensina uma receita.", "O Texto 2 apresenta dados científicos."],
    a: 0,
    explain: "O primeiro informa sobre atividade física; o segundo apresenta a experiência e o gosto de alguém."
  },
  {
    subject: "Língua Portuguesa",
    passage: `Leia a frase.

“Os estudantes organizaram a horta. Eles plantaram alface e cebolinha.”`,
    q: "A palavra “Eles” substitui",
    opts: ["a horta.", "a alface e a cebolinha.", "os estudantes.", "as ferramentas."],
    a: 2,
    explain: "“Eles” retoma “os estudantes”, evitando repetir essa expressão."
  },
  {
    subject: "Língua Portuguesa",
    passage: `Leia o trecho.

Lia abriu a caixa com cuidado. Dentro dela havia fotografias antigas, cartas e um pequeno chaveiro.
A menina sorriu ao reconhecer a foto de sua primeira festa de aniversário.`,
    q: "O que fez Lia sorrir?",
    opts: ["Encontrar dinheiro na caixa.", "Reconhecer a foto de sua primeira festa de aniversário.", "Ler uma notícia no jornal.", "Ganhar um chaveiro novo."],
    a: 1,
    explain: "O texto afirma que Lia sorriu ao reconhecer a fotografia."
  },
  {
    subject: "Língua Portuguesa",
    passage: null,
    q: "Na frase “A menina caminhou rapidamente até a sala”, a palavra “rapidamente” indica",
    opts: ["lugar.", "tempo.", "modo.", "quantidade."],
    a: 2,
    explain: "“Rapidamente” informa como a menina caminhou."
  },
  {
    subject: "Língua Portuguesa",
    passage: `Leia o diálogo.

— Você terminou o cartaz, Pedro?
— Terminei! Agora só falta colar no mural.
— Ficou muito bonito!`,
    q: "O ponto de exclamação na fala de Pedro indica",
    opts: ["uma pergunta.", "uma expressão de entusiasmo.", "uma ordem.", "uma informação sem emoção."],
    a: 1,
    explain: "A exclamação reforça a animação na fala de Pedro."
  },
  {
    subject: "Língua Portuguesa",
    passage: `Leia o texto.

As abelhas visitam as flores para recolher néctar.
Durante esse processo, transportam grãos de pólen de uma flor para outra.
Esse trabalho ajuda muitas plantas a se reproduzirem.`,
    q: "Segundo o texto, como as abelhas ajudam as plantas?",
    opts: ["Cortando suas folhas.", "Levando água até as raízes.", "Transportando pólen entre as flores.", "Retirando todas as sementes."],
    a: 2,
    explain: "O texto explica que as abelhas transportam pólen de uma flor para outra."
  },
  {
    subject: "Língua Portuguesa",
    passage: null,
    q: "Qual frase apresenta uma opinião?",
    opts: ["A água ferve em determinada temperatura.", "O Brasil possui diferentes regiões.", "A primavera é a estação mais bonita do ano.", "Uma semana tem sete dias."],
    a: 2,
    explain: "“A mais bonita” expressa uma avaliação pessoal, não um fato verificável."
  },
  {
    subject: "Língua Portuguesa",
    passage: `Leia a frase.

“Marina queria brincar no quintal, mas começou a chover.”`,
    q: "A palavra “mas” estabelece uma relação de",
    opts: ["oposição.", "explicação.", "adição.", "conclusão."],
    a: 0,
    explain: "“Mas” apresenta uma ideia contrária à expectativa inicial."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Uma escola recebeu 248 livros pela manhã e 175 à tarde. Quantos livros recebeu ao todo?",
    opts: ["413", "423", "433", "443"],
    a: 1,
    explain: "248 + 175 = 423 livros."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Uma papelaria tinha 520 lápis e vendeu 186. Quantos lápis restaram?",
    opts: ["324", "334", "344", "354"],
    a: 1,
    explain: "520 − 186 = 334 lápis."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Uma caixa contém 24 pacotes de figurinhas. Cada pacote tem 6 figurinhas. Quantas figurinhas há na caixa?",
    opts: ["124", "134", "144", "154"],
    a: 2,
    explain: "24 × 6 = 144 figurinhas."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "A professora dividiu igualmente 96 folhas entre 8 grupos. Quantas folhas cada grupo recebeu?",
    opts: ["10", "11", "12", "13"],
    a: 2,
    explain: "96 ÷ 8 = 12 folhas."
  },
  {
    subject: "Matemática",
    passage: `Uma receita utiliza 1/2 litro de leite.
Ana preparou duas receitas iguais.`,
    q: "Quantos litros de leite Ana utilizou?",
    opts: ["1/2 litro.", "1 litro.", "1 litro e meio.", "2 litros."],
    a: 1,
    explain: "Duas metades formam um inteiro: 1/2 + 1/2 = 1 litro."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Qual das frações representa a maior parte de uma mesma unidade?",
    opts: ["1/4", "1/2", "1/3", "1/5"],
    a: 1,
    explain: "Entre essas frações unitárias, 1/2 é a maior."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Uma camiseta custa R$ 38,00. João pagou com uma nota de R$ 50,00. Quanto recebeu de troco?",
    opts: ["R$ 10,00", "R$ 11,00", "R$ 12,00", "R$ 13,00"],
    a: 2,
    explain: "50 − 38 = 12 reais."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Uma aula começou às 13h30 e terminou às 15h. Quanto tempo durou a aula?",
    opts: ["1 hora.", "1 hora e 15 minutos.", "1 hora e 30 minutos.", "2 horas."],
    a: 2,
    explain: "De 13h30 até 15h decorrem 1 hora e 30 minutos."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Um retângulo tem 8 cm de comprimento e 5 cm de largura. Qual é seu perímetro?",
    opts: ["13 cm", "26 cm", "40 cm", "45 cm"],
    a: 1,
    explain: "Perímetro = 8 + 5 + 8 + 5 = 26 cm."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Uma figura plana com quatro lados iguais e quatro ângulos retos é um",
    opts: ["triângulo.", "círculo.", "quadrado.", "pentágono."],
    a: 2,
    explain: "O quadrado possui quatro lados iguais e quatro ângulos retos."
  },
  {
    subject: "Matemática",
    passage: `Observe a tabela de livros lidos por uma turma em uma semana:

Segunda: 8 livros
Terça: 5 livros
Quarta: 7 livros
Quinta: 4 livros`,
    q: "Em qual dia a turma leu mais livros?",
    opts: ["Segunda-feira.", "Terça-feira.", "Quarta-feira.", "Quinta-feira."],
    a: 0,
    explain: "O maior número da tabela é 8, registrado na segunda-feira."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Usando os dados da tabela da questão anterior, quantos livros foram lidos ao todo?",
    opts: ["22", "23", "24", "25"],
    a: 2,
    explain: "8 + 5 + 7 + 4 = 24 livros."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "O número 3.407 pode ser decomposto como",
    opts: ["3.000 + 400 + 7.", "300 + 40 + 7.", "3.000 + 40 + 7.", "3.000 + 400 + 70."],
    a: 0,
    explain: "3.407 tem 3 unidades de milhar, 4 centenas, 0 dezenas e 7 unidades."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Uma fita tem 2 metros de comprimento. Quantos centímetros ela mede?",
    opts: ["20 cm", "200 cm", "2.000 cm", "20.000 cm"],
    a: 1,
    explain: "1 metro equivale a 100 centímetros; 2 metros equivalem a 200 centímetros."
  },
  {
    subject: "Matemática",
    passage: null,
    q: "Em uma escola há 4 turmas com 28 estudantes em cada uma. Quantos estudantes há nessas turmas ao todo?",
    opts: ["102", "108", "112", "118"],
    a: 2,
    explain: "4 × 28 = 112 estudantes."
  }
];

const letters = ["A", "B", "C", "D"];
let current = 0;
let answers = Array(questions.length).fill(null);
let student = "";
let school = "";

const $ = (id) => document.getElementById(id);

function startQuiz() {
  student = $("student").value.trim();
  school = $("school").value.trim();

  if (!student) {
    $("nameError").textContent = "Digite o nome do estudante para começar.";
    $("student").focus();
    return;
  }

  $("nameError").textContent = "";
  $("intro").classList.add("hidden");
  $("quiz").classList.remove("hidden");

  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = questions[current];

  $("subjectTag").textContent = q.subject;
  $("counter").textContent = `Questão ${current + 1} de ${questions.length}`;
  $("progressFill").style.width = `${((current + 1) / questions.length) * 100}%`;
  $("questionNumber").textContent = String(current + 1).padStart(2, "0");

  $("passage").textContent = q.passage || "";
  $("passage").classList.toggle("hidden", !q.passage);
  $("questionText").textContent = q.q;

  $("options").innerHTML = "";

  q.opts.forEach((option, i) => {
    const btn = document.createElement("button");

    btn.className = "option" + (answers[current] === i ? " selected" : "");
    btn.type = "button";
    btn.setAttribute("aria-pressed", answers[current] === i ? "true" : "false");

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.textContent = letters[i];

    const text = document.createElement("span");
    text.textContent = option;

    btn.append(letter, text);

    btn.addEventListener("click", () => {
      answers[current] = i;
      renderQuestion();
    });

    $("options").appendChild(btn);
  });

  $("prev").disabled = current === 0;
  $("next").textContent = current === questions.length - 1
    ? "Finalizar simulado"
    : "Próxima questão →";

  $("answeredCount").textContent =
    `${answers.filter(a => a !== null).length} respondidas`;
}

function nextQuestion() {
  if (current === questions.length - 1) {
    const blank = answers.filter(a => a === null).length;

    if (blank > 0) {
      const confirmed = confirm(
        `Você deixou ${blank} questão(ões) sem resposta. Deseja finalizar mesmo assim?`
      );

      if (!confirmed) return;
    }

    showResults();
    return;
  }

  current++;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function previousQuestion() {
  if (current > 0) {
    current--;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function showResults() {
  let correct = 0;

  questions.forEach((q, i) => {
    if (answers[i] === q.a) {
      correct++;
    }
  });

  $("quiz").classList.add("hidden");
  $("results").classList.remove("hidden");

  $("studentResult").textContent = student;
  $("schoolResult").textContent = school ? `Escola: ${school}` : "";

  $("score").textContent = `${correct}/${questions.length}`;
  $("percent").textContent =
    `${Math.round((correct / questions.length) * 100)}% de aproveitamento`;

  $("correctCount").textContent = correct;
  $("wrongCount").textContent = questions.length - correct;

  $("review").innerHTML = "";

  questions.forEach((q, i) => {
    const ok = answers[i] === q.a;

    const item = document.createElement("article");
    item.className = "review-item";

    const top = document.createElement("div");
    top.className = "review-top";

    const heading = document.createElement("strong");
    heading.textContent = `Questão ${i + 1} · ${q.subject}`;

    const status = document.createElement("span");
    status.className = ok ? "good" : "bad";
    status.textContent = ok ? "Acertou" : "Não acertou";

    top.append(heading, status);

    const question = document.createElement("p");
    question.textContent = q.q;

    const chosen = answers[i] === null
      ? "Não respondida"
      : `${letters[answers[i]]}) ${q.opts[answers[i]]}`;

    const yourAnswer = document.createElement("p");
    yourAnswer.className = "muted";
    yourAnswer.textContent = `Sua resposta: ${chosen}`;

    const correctAnswer = document.createElement("p");
    correctAnswer.className = "answer";
    correctAnswer.textContent =
      `Resposta correta: ${letters[q.a]}) ${q.opts[q.a]}`;

    const explanation = document.createElement("p");
    explanation.className = "explain";
    explanation.textContent = q.explain;

    item.append(top, question, yourAnswer, correctAnswer, explanation);
    $("review").appendChild(item);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restart() {
  current = 0;
  answers = Array(questions.length).fill(null);

  $("results").classList.add("hidden");
  $("intro").classList.remove("hidden");

  $("student").value = student;
  $("school").value = school;
  $("nameError").textContent = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  $("start").addEventListener("click", startQuiz);
  $("prev").addEventListener("click", previousQuestion);
  $("next").addEventListener("click", nextQuestion);
  $("restart").addEventListener("click", restart);
});
