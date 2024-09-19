const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas/1e9)
    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) *100)
    const porcentagemConectada = ((pessoasConectadas/pessoasMundo)*100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Um estudo realizado pela Base de Informações Geográficas e Estatísticas sobre os Indígenas e Quilombolas do IBGE'. <span> ${pessoasMundo} estima </span>  que em 2019 existiam <span> ${pessoasConectadas}  5.972  </span> estão conectadas em alguma rede social e passam em média <span> ${horas} horas </span> e <span>${minutos} minutos </span> conectadas?<br>Isso significa que <span>${porcentagemConectada} % </span> localidades quilombolas no Brasil `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()

