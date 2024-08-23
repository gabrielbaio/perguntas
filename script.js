const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com qual frequência você separa seu lixo?",
        alternativas: [
            {
                texto: "Frequentemente",
                afirmacao: "afirmacao"
            },
            {
                texto: "ás vezes",
                afirmacao: "afirmacao"            
            },
            {
                texto: "Raramente",
                afirmacao: "afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Qual das seguintes práticas, é considerada sustentável?",
        alternativas: [
             {
                texto: "Desmatamento para expansão agrícola",
                afirmacao: "afirmacao"
            },
            {
                texto: "Uso de sacolas plásticas descartaveis",
                afirmacao: "afirmacao"            
            },
            {
                texto:  "Reutilização de reciclagem de materias",
                afirmacao: "afirmacao"
            },
             {
                texto:  "Consumo excessivo de água potável",
                afirmacao: "afirmacao"            
            },
            
        ]
    },
    {
        enunciado: "Qual o principal benefício ambiental da reciclagem?",
        alternativas: [
            {
                texto:  "Redução do consumo de energia",
                afirmacao: "afirmacao"
            },
            {
                texto: "Diminuição da poluição sonora.",
                afirmacao: "afirmacao"            
            },
            {
                texto:   "Aumento da erosão do solo",
                afirmacao: "afirmacao"
            },
             {
                texto:    "Aumento do desmatamento",
                afirmacao: "afirmacao"            
            },
            
        ]
    },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049 ...";
    textoResultado.textContext = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
