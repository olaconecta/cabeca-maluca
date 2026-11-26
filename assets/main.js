// cabeça maluca — interações mínimas, sem dependências

// 1. Alternar entre modo calmo e modo caos (persistido no navegador)
const botaoModo = document.querySelector('.modo');
if (botaoModo) {
  const salvo = localStorage.getItem('modo');
  if (salvo === 'caos') {
    document.body.dataset.modo = 'caos';
    botaoModo.textContent = 'modo: caos ✳ / trocar';
  }
  botaoModo.addEventListener('click', () => {
    const proximo = document.body.dataset.modo === 'caos' ? 'calmo' : 'caos';
    document.body.dataset.modo = proximo;
    localStorage.setItem('modo', proximo);
    botaoModo.textContent = proximo === 'caos'
      ? 'modo: caos ✳ / trocar'
      : 'modo: calmo / trocar';
  });
}

// 2. Sortear um pensamento da caixa
const pensamentos = [
  'Toda empresa boa começa com uma pergunta chata: alguém pagaria por isso?',
  'Se o cliente não entende em 5 segundos, não é simplicidade — é confusão.',
  'Vender antes de produzir é o plano de negócios mais honesto que existe.',
  'Ferramenta que não economiza tempo é enfeite caro.',
  'Margem sem número é opinião disfarçada de estratégia.',
  'Portfólio bom não mostra o que você fez. Mostra o que mudou por causa disso.',
  'A tecnologia mais útil é a que some e deixa você pensar.'
];
const area = document.getElementById('pensamento');
const botaoSortear = document.querySelector('.sortear');
if (area && botaoSortear) {
  const sortear = () => {
    const atual = area.textContent.trim();
    let proximo = atual;
    while (pensamentos.length > 1 && proximo === atual) {
      proximo = pensamentos[Math.floor(Math.random() * pensamentos.length)];
    }
    area.textContent = proximo;
  };
  botaoSortear.addEventListener('click', sortear);
  sortear();
}

// 3. Abrir só um item da lista de ideias por vez (acordeão opcional)
const ideias = document.querySelectorAll('.ideia');
ideias.forEach((ideia) => {
  ideia.addEventListener('toggle', () => {
    if (!ideia.open) return;
    ideias.forEach((outra) => {
      if (outra !== ideia) outra.open = false;
    });
  });
});
