const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de assistir ao trailer de um filme futurista onde a Inteligência Artificial tem um papel central. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é incrível",
                afirmacao: "Você ficou animado para ver como a IA será retratada e como ela pode influenciar o enredo do filme. "
            },
            {
                texto: "Isso é preocupante",
                afirmacao: "Você ficou inquieto com a representação da IA e se perguntou se o filme pode refletir medos reais sobre a tecnologia."
            }
        ]
    },
    {
        enunciado: "Você está pesquisando filmes sobre Inteligência Artificial para um trabalho acadêmico. Qual abordagem você usa para escolher o filme?",
        alternativas: [
            {
                texto: "Procuro críticas e análises de filmes que discutem a IA de forma inovadora e realista.",
                afirmacao: "Você optou por explorar filmes que apresentam uma visão profunda e crítica da IA."
            },
            {
                texto: "Escolho filmes que foram populares e bem avaliados, independentemente de como retratam a IA.",
                afirmacao: "Você se baseou na popularidade e recepção crítica dos filmes para selecionar suas escolhas."
            }
        ]
    },
    {
        enunciado: "Após assistir a uma série de filmes sobre Inteligência Artificial, sua turma participa de um debate sobre como a IA é retratada no cinema. Qual é o seu ponto de vista?",
        alternativas: [
            {
                texto: "Acredito que os filmes mostram a IA como uma ferramenta que pode transformar positivamente a sociedade e criar novas oportunidades.",
                afirmacao: "Você vê a IA nos filmes como uma força para o bem e um catalisador de mudanças positivas."
            },
            {
                texto: "Preocupo-me com a maneira como os filmes frequentemente mostram a IA como uma ameaça que pode causar danos irreparáveis à humanidade.",
                afirmacao: "Sua preocupação com as representações negativas levou você a considerar a necessidade de abordagens mais equilibradas e realistas."
            }
        ]
    },
    {
        enunciado: "Você precisa criar um cartaz para um filme fictício sobre Inteligência Artificial. Qual ferramenta você usa para projetar o cartaz?",
        alternativas: [
            {
                texto: "Uso um software de design gráfico como Photoshop para criar uma arte detalhada e única.",
                afirmacao: "Você se dedicou a criar um cartaz visualmente impressionante e criativo usando ferramentas tradicionais"
            },
            {
                texto: "Uso uma plataforma de geração de imagens por IA para criar um cartaz rapidamente e de forma eficiente.",
                afirmacao: "Você aproveitou a tecnologia de IA para gerar uma arte visualmente atraente e economizar tempo no processo criativo."
            }
        ]
    },
    {
        enunciado: "Você e seu grupo estão criando um roteiro para um filme sobre biologia, e um membro do grupo usou IA para gerar o texto. O problema é que o roteiro gerado está muito parecido com o de outros filmes. O que você faz? ",
        alternativas: [
            {
                texto: "Acho que usar o texto gerado pela IA é aceitável, desde que esteja dentro dos prazos e requisitos do projeto.",
                afirmacao: "Você acabou confiando na IA para criar o conteúdo, mas percebeu que isso limitou a originalidade do roteiro."
            },
            {
                texto: "Reviso o texto da IA e contribuo com minhas próprias ideias para garantir que o roteiro seja único e reflita nossa visão criativa.",
                afirmacao: "Você reconheceu a importância de adicionar um toque pessoal ao roteiro e colaborou para garantir que o projeto fosse original e autêntico. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
