const btnAtualizar = document.querySelector('.btn-att')

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
        
        
        const cryptoContent2 = `<h1>${crypto.name}</h1>
        <p>Menor preço:<br> R$ ${crypto.low.slice(0, -6).replace('.', ',')}</p>
        <p>Maior preço:<br> R$ ${crypto.high.slice(0, -6).replace('.', ',')}</p>
        <p>Valor da última negociação:<br> R$ ${crypto.last.slice(0, -6).replace('.', ',')}</p>
        <p>Horário da informação: <br> ${CryptoTime} - ${Cryptodate.toLocaleDateString("pt-BR")}
        </p>`    
        
        divCrypto.innerHTML = cryptoContent2
    }

    attWindowRequest.send()
    
}) 


