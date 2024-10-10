const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()

  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML = `Os quilombos, também conhecidos como mocambos, foram comunidades formadas no Brasil durante o período colonial por africanos escravizados e/ou seus descendentes..`
  
  const container = document.getElementById('graficos-container')
  container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()