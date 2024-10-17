const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()

  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML = `Os quilombos, também conhecidos como mocambos, foram comunidades formadas no Brasil durante o período colonial por africanos escravizados e/ou seus descendentes. A discriminação racial se manifesta na dificuldade de inserção dos negros no mercado de trabalho, com uma taxa de desocupação sistematicamente superior.`
  
  const container = document.getElementById('graficos-container')
  container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()