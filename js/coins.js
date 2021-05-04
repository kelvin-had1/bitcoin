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
        
        

    let contentdiv = `<div>
    <select class="btn-coins">
        <option value="USD Dólar" selected>Dólar</option>
        <option value="EUR Euro" >Euro</option>
    </select>
</div>

<p>Dólar em real: <button>R$ ${USDBRL}</button></p>
<p>Horário da informação:</p>


<div>
<button class="data-coins"> ${USDHorario} - ${USDTime.toLocaleDateString("pt-BR")}</button>
</div>

</div>`

    divCoin.innerHTML = contentdiv
}
    


request.send()
    
