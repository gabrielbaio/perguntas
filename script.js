const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "perguntas?",
        alternativas: [
            {
                texto: "resposta 1",
                afirmacao: "afirmacao"
            },
            {
                texto: "resposta 2",
                afirmacao: "afirmacao"            
            },
            {
                texto: "resposta 3",
                afirmacao: "afirmacao"
            }
            
        ]
    },
    {
        enunciado: "pergunta 2?",
        alternativas: [
             {
                texto: "resposta 1",
                afirmacao: "afirmacao"
            },
            {
                texto: "resposta 2",
                afirmacao: "afirmacao"            
            },
            {
                texto: "resposta 3",
                afirmacao: "afirmacao"
            },
            
        ]
    },
    {
        enunciado: "pergunta 3",
        alternativas: [
            {
            
                texto: "resposta 1",
                afirmacao: "afirmacao"
            },
            {
                texto: "resposta 2",
                afirmacao: "afirmacao"            
            },
            {
                texto: "resposta 3",
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
