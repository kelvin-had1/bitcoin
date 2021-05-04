const url = "https://economia.awesomeapi.com.br/last/USD-BRL"
let request = new XMLHttpRequest()

const divCoin = document.querySelector('.coin')

request.open('GET', url, true)
request.onreadystatechange = function(){
    let response = JSON.parse(request.responseText)
    let USDBRL = parseFloat(response['USDBRL']['bid']).toFixed(2).replace('.',',')
        
    let USDTime = new Date(response['USDBRL']['timestamp']*1000)
    let hours = USDTime.getHours()
    let minutes = USDTime.getMinutes()
    let seconds = USDTime.getSeconds()
    let USDHorario = `${hours}:${minutes}:${seconds}`
        
        

    let contentdiv = `<h1>Dólar</h1>
    <p>Dólar em real: <br> R$ ${USDBRL}</p>
    <p>Horário da informação: <br> ${USDHorario} - ${USDTime.toLocaleDateString("pt-BR")}</p>`

    divCoin.innerHTML = contentdiv
}



request.send()
    
