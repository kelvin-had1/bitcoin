const btnAtualizar = document.querySelector('.btn-att')


//ATUALIZAR DIV CRYPTO
btnAtualizar.addEventListener('click', ()=>{
    let btnCrypto = document.querySelector('.btn-crypto').value.split(' ')

    const attWindowRequest = new XMLHttpRequest() 

    let newPath = `https://www.mercadobitcoin.net/api/${btnCrypto[0]}/ticker`
    attWindowRequest.open('GET', newPath, true)

    attWindowRequest.onreadystatechange = function(){
        let response = JSON.parse(attWindowRequest.responseText)
        let crypto = {
            name: btnCrypto[1],
            high: response['ticker']['high'],
            last: response['ticker']['last'],
            low: response['ticker']['low'],
            dateUnix: response['ticker']['date']
    
        }

        let Cryptodate = new Date(crypto.dateUnix*1000)
        let hours = Cryptodate.getHours()
        let minutes = Cryptodate.getMinutes()
        let seconds = Cryptodate.getSeconds()
        let CryptoTime = `${hours}:${minutes}:${seconds}`
        
        
        const cryptoContent2 = `
        <div>
                <select class="btn-crypto">
                    <option value="${btnCrypto[0]} ${crypto.name}" selected>${crypto.name}</option>
                    <option>---------------</option>

                    <option value="BTC Bitcoin">Bitcoin</option>
                    <option value="ETH Ethereum">Ethereum</option>
                    <option value="CHZ Chiliz">Chiliz</option>
                </select>
            </div>
        <p>Menor preço: <button>R$ ${crypto.low.slice(0, -6).replace('.', ',')}</button></p>
        <p>Maior preço: <button>R$ ${crypto.high.slice(0, -6).replace('.', ',')}</button></p>
        <p>Valor da última negociação: </p>
        
        <div>
            <button>R$ ${crypto.last.slice(0, -6).replace('.', ',')}</button>
        </div>`    

        divCrypto.innerHTML = cryptoContent2
    }

    attWindowRequest.send()
    
}) 

//ATUALIZAR DIV MOEDAS

btnAtualizar.addEventListener('click', _ => {
    const request = new XMLHttpRequest()
    let btnCoins = document.querySelector('.btn-coins').value.split(' ')
    let newPath = `https://economia.awesomeapi.com.br/last/${btnCoins[0]}-BRL`
    
    request.open('GET', newPath, true)
    request.onreadystatechange = function(){
        let response = JSON.parse(request.responseText)

        let coin = parseFloat(response[`${btnCoins[0]}BRL`]['bid']).toFixed(2).replace('.',',')
        let coinTime = new Date(response[`${btnCoins[0]}BRL`]['timestamp']*1000)
        
        let hours = coinTime.getHours()
        let minutes = coinTime.getMinutes()
        let seconds = coinTime.getSeconds()
        let coinHorario = `${hours}:${minutes}:${seconds}`
        
        let contentDivCoin = `<div>
        <select class="btn-coins">
            <option value="${btnCoins[0]} ${btnCoins[1]}" selected>${btnCoins[1]}</option>
            <option>---------------</option>
            <option value="USD Dólar">Dólar</option>
            <option value="EUR Euro">Euro</option>
        </select>
    </div>
    <p>${btnCoins[1]} em real: <button>R$ ${coin}</button></p>
    <p>Horário da informação:</p>
    <div>
    <button class="data-coins"> ${coinHorario} - ${coinTime.toLocaleDateString("pt-BR")}</button>
    </div>
    </div>`

        divCoin.innerHTML = contentDivCoin
        

    }

    request.send()
})
