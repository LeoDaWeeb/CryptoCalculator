function calculateIncomePerday(hashrate) {
    return hashrate * 0.062
}

function calculateElectricalCostPerday(powerConsumption, costPerKwh) {
    let usageTimeInHoursPerday = 24
    let powerConsumedPerdayInKwh = (usageTimeInHoursPerday * powerConsumption) / 1000
    return powerConsumedPerdayInKwh * costPerKwh
}

function calculateDepreciation(gpuPrice, incomePerday, electricalCostPerday) {
    return ((gpuPrice / (incomePerday - electricalCostPerday)) / 30.0)
}

function calculateProfitability(gpuPrice, hashrate, powerConsumption, costPerKwh) {
    let electricalCostPerday = calculateElectricalCostPerday(powerConsumption, costPerKwh)
    let incomePerday = calculateIncomePerday(hashrate)
    return {
        results: {
            perday: {
                income: incomePerday,
                elCosts: electricalCostPerday,
                profit: incomePerday - electricalCostPerday
            },
            perweek: {
                income: incomePerday * 7,
                elCosts: electricalCostPerday * 7,
                profit: (incomePerday - electricalCostPerday) * 7
                
            },
            permonth: {
                income: incomePerday * 30,
                elCosts: electricalCostPerday * 30,
                profit: (incomePerday - electricalCostPerday) * 30
                
            },
            peryear: {
                income: incomePerday * 365,
                elCosts: electricalCostPerday * 365,
                profit: (incomePerday - electricalCostPerday) * 365
                
            },
            depreciation: calculateDepreciation(gpuPrice, incomePerday, electricalCostPerday)
        }
    }
}

function renderError(error) {
    
}

function renderCalculatedValues(values) {

}

function calculator() {
    let gpuPriceValue = document.getElementsByName('gpuprice')[0].value
    let hashrateValue = document.getElementsByName('hashrate')[0].value
    let powerValue = document.getElementsByName('power')[0].value
    let elCostValue = document.getElementsByName('elcost')[0].value
    
    let errorOccured = false
    
    if (isNaN(Number(gpuPriceValue))) {
        renderError('gpuprice')
        errorOccured = true
    }
    else {
        gpuPriceValue = Number(gpuPriceValue)
    }
    if (isNaN(Number(hashrateValue))) {
        renderError('hashrate')
        errorOccured = true
    }
    else {
        hashrateValue = Number(hashrateValue)
    }
    if (isNaN(Number(powerValue))) {
        renderError('hashrate')
        errorOccured = true
    }
    else {
        powerValue = Number(powerValue)
    }
    if (isNaN(Number(elCostValue))) {
        renderError('elcost')
        errorOccured = true
    }
    else {
        elCostValue = Number(elCostValue)
    }

    if (errorOccured) { alert(400); return }

    let values = calculateProfitability(gpuPriceValue, hashrateValue, powerValue, elCostValue)
    console.log(values)
}