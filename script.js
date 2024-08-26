const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assinale a alternativa que NÃO apresenta um problema ambiental:",
        alternativas: [
            {
                texto: "A) Caça de diversos animais silvestres.",
                afirmacao: "Certo"
            },
            {
                texto: "B) Retirada da vegetação nativa local.",
                afirmacao: "Errado"            
            },
            {
                texto: "C) Emissão de poluentes atmosféricos   ",
                afirmacao: "Errado"
            }
            
        ]
    },
    {
        enunciado: "Como preservar árvores e florestas ",
        alternativas: [
             {
                texto: "A) Construindo uma casa na árvore",
                afirmacao: "Errado"
            },
            {
                texto: "B)Reciclando papéis, jornais e revistas",
                afirmacao: "Certo"            
            },
            {
                texto: "C) Apoiar a causa LGBTQIA+",
                afirmacao: "Errado"
            },
            
        ]
    },
    {
        enunciado: "O que é Ecologia",
        alternativas: [
            {
            
                texto: "A)ciência que estuda a vida e os organismos vivos",
                afirmacao: "Errado"
            },
            {
                texto: "B)é a ciência que estuda as relações dos seres vivos entre si e com o seu ambiente.",
                afirmacao: "Certo"            
            },
            {
                texto: "C)é uma das ciências humanas que estuda a sociedade",
                afirmacao: "Errado"
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
