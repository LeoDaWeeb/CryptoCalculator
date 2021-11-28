function getCryptolist() {
    let coincapUrl = 'https://api.coincap.io/v2/assets'
    let usdToEuroUrl = 'https://api.cryptonator.com/api/ticker/usd-eur'
    let usdToEuro = 0
    fetch(usdToEuroUrl, {method: 'GET', headers: {"Accept": "application/json"}}).then(response => response.text()).then(data => {
        usdToEuro = Number(JSON.parse(data).ticker.price)
        fetch(coincapUrl, {method: 'GET', headers: {"Accept": "application/json"}}).then(response => response.text()).then(response => {
            let jsonReponse = JSON.parse(response)
            let cryptolist = document.getElementById('cryptolist')
            cryptolist.innerHTML = ''
            jsonReponse.data.forEach(coin => {
                cryptolist.innerHTML += `
                    <div class="cryptocoin-div">
                        <div class="row">
                            <div class="col- my-auto coin-rank ml-3">#${coin.rank}</div>
                            <div class="col- my-auto coin-img">
                                <img src="https://cryptologos.cc/logos/${coin.id}-${coin.symbol.toLowerCase()}-logo.png" width="20px"
                                onerror="this.src='resources/images/coin.png'">
                            </div>
                            <div class="col- my-auto coin-name ml-1">
                                <a href="https://coinmarketcap.com/currencies/${coin.id}/" target="_blank">${coin.name}</a>
                            </div>
                            <div class="col- my-auto coin-symbol ml-1">
                                <small>${coin.symbol}</small>
                            </div>
                            <div class="col- my-auto ml-auto mr-3 coin-price">
                            ${(Number(coin.priceUsd) * usdToEuro).toLocaleString(undefined, {minimumFractionDigits: 2})}€ <span><small style="color: ${Number(coin.changePercent24Hr) >= 0 ? 'greenyellow' : 'red'};"
                            >${Number(coin.changePercent24Hr).toFixed(2)}%</small></span></div>
                        </div>
                    </div>
                `
            })
        })
    }).catch(error => {
        alert(error)
    })
}

getCryptolist()