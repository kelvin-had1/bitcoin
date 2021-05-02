const APICrypto = 'https://www.mercadobitcoin.net/api/BTC/ticker'
const divCrypto = document.querySelector('.crypto')
let bitcoin = {}

let requestCrypto = new XMLHttpRequest()
requestCrypto.open('GET', APICrypto, true)


requestCrypto.onreadystatechange = function(){
    let BTC = JSON.parse(requestCrypto.responseText)
    bitcoin.high = BTC['ticker']['high'].slice(0, -6).replace('.', ',')
    bitcoin.low = BTC['ticker']['low'].slice(0, -6).replace('.', ',')
    bitcoin.last = BTC['ticker']['last'].slice(0, -6).replace('.', ',')
    bitcoin.dateUnix = BTC['ticker']['date']


    let BTCdate = new Date(bitcoin.dateUnix*1000)
    let hours = BTCdate.getHours()
    let minutes = BTCdate.getMinutes()
    let seconds = BTCdate.getSeconds()
    let BTCTime = `${hours}:${minutes}:${seconds}`
    
    
    const cryptoContent = `<h1>Bitcoin</h1>
    <p>Menor preço:<br> R$ ${bitcoin.low}</p>
    <p>Maior preço:<br> R$ ${bitcoin.high}</p>
    <p>Valor da última negociação:<br> R$ ${bitcoin.last}</p>
    <p>Horário da informação: <br> ${BTCTime} - ${BTCdate.toLocaleDateString("pt-BR")}
    </p>`
   

    divCrypto.innerHTML = cryptoContent

    
}
requestCrypto.send()


