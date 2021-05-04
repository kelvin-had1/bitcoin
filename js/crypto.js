const APICrypto = 'https://www.mercadobitcoin.net/api/BTC/ticker'
const divCrypto = document.querySelector('.crypto')
const newDivCrypto = document.querySelector('.crypto-container')
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
      
    const cryptoContent = `<div>
    <select class="btn-crypto">
        <option value="BTC Bitcoin" selected>Bitcoin</option>
        <option value="ETH Ethereum">Ethereum</option>
        <option value="CHZ Chiliz">Chiliz</option>
    </select>
</div>
            <p>Menor preço: <button>R$ ${bitcoin.low}</button></p>
            <p>Maior preço: <button>R$ ${bitcoin.high}</button></p>
            <p>Valor da última negociação: </p>
            
            <div>
                <button>R$ ${bitcoin.last}</button>
            </div>`

    divCrypto.innerHTML = cryptoContent

}
requestCrypto.send()


