function calculateIncomePerday(hashrate) {
    return hashrate * 0.063
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

function renderError(elementId, error) {
    document.getElementById(elementId).textContent = error
}

function deleteErrorMessages() {
    ['gpuprice', 'hashrate', 'power', 'elcost'].forEach(elementId => {
        document.getElementById(`${elementId}-error-text`).textContent = "ㅤ"
    })
}

function renderCalculatedValues(values) {
    document.getElementById('perday-income-col').textContent = values.results.perday.income.toFixed(2) + '€'
    document.getElementById('perday-elcost-col').textContent = values.results.perday.elCosts.toFixed(2) + '€'
    document.getElementById('perday-profit-col').textContent = values.results.perday.profit.toFixed(2) + '€'

    document.getElementById('perweek-income-col').textContent = values.results.perweek.income.toFixed(2) + '€'
    document.getElementById('perweek-elcost-col').textContent = values.results.perweek.elCosts.toFixed(2) + '€'
    document.getElementById('perweek-profit-col').textContent = values.results.perweek.profit.toFixed(2) + '€'

    document.getElementById('permonth-income-col').textContent = values.results.permonth.income.toFixed(2) + '€'
    document.getElementById('permonth-elcost-col').textContent = values.results.permonth.elCosts.toFixed(2) + '€'
    document.getElementById('permonth-profit-col').textContent = values.results.permonth.profit.toFixed(2) + '€'

    document.getElementById('peryear-income-col').textContent = values.results.peryear.income.toFixed(2) + '€'
    document.getElementById('peryear-elcost-col').textContent = values.results.peryear.elCosts.toFixed(2) + '€'
    document.getElementById('peryear-profit-col').textContent = values.results.peryear.profit.toFixed(2) + '€'

    document.getElementById('depreciation-label').textContent = 'Depreciation in ' + values.results.depreciation.toFixed(1) + ' Months'

    document.getElementById('result-table').style.display = 'block'

    document.getElementById('table').scrollIntoView(true, {behavior: 'smooth'})
}

function calculator() {
    let gpuPriceValue = document.getElementsByName('gpuprice')[0].value
    let hashrateValue = document.getElementsByName('hashrate')[0].value
    let powerValue = document.getElementsByName('power')[0].value
    let elCostValue = document.getElementsByName('elcost')[0].value
    
    let errorOccured = false

    if (gpuPriceValue === "") {
        renderError('gpuprice-error-text', 'GPU price cannot be empty!')
        errorOccured = true
    }
    else if (isNaN(Number(gpuPriceValue))) {
        renderError('gpuprice-error-text', 'GPU price must be a number!')
        errorOccured = true
    }
    else {
        if (Number(gpuPriceValue) < 0) {
            renderError('gpuprice-error-text', 'GPU price cannot have a negative value!')
            errorOccured = true
        }
        else {
            gpuPriceValue = Number(gpuPriceValue)
        }
    }

    if (hashrateValue === "") {
        renderError('hashrate-error-text', 'Hashrate cannot be empty!')
        errorOccured = true
    }
    else if (isNaN(Number(hashrateValue))) {
        renderError('hashrate-error-text', 'Hashrate must be a number!')
        errorOccured = true
    }
    else {
        if (Number(hashrateValue) < 0) {
            renderError('hashrate-error-text', 'Hashrate cannot have a negative value!')
            errorOccured = true
        }
        else {
            hashrateValue = Number(hashrateValue)
        }
    }

    if (powerValue === "") {
        renderError('power-error-text', 'Power consumption cannot be empty!')
        errorOccured = true
    }
    else if (isNaN(Number(powerValue))) {
        renderError('power-error-text', 'Power consumption must be a number!')
        errorOccured = true
    }
    else {
        if (Number(powerValue) < 0) {
            renderError('power-error-text', 'Power consumption cannot have a negative value!')
            errorOccured = true
        }
        else {
            powerValue = Number(powerValue)
        }
    }

    if (elCostValue === "") {
        renderError('elcost-error-text', 'Electrical cost cannot be empty!')
        errorOccured = true
    }
    else if (isNaN(Number(elCostValue))) {
        renderError('elcost-error-text', 'Electrical cost must be a number')
        errorOccured = true
    }
    else {
        if (Number(elCostValue) < 0) {
            renderError('elcost-error-text', 'Electrical cost cannot have a negative value!')
            errorOccured = true
        }
        elCostValue = Number(elCostValue)
    }

    if (errorOccured) { 
        return
    }
    else {
        deleteErrorMessages()
    }

    let values = calculateProfitability(gpuPriceValue, hashrateValue, powerValue, elCostValue)

    renderCalculatedValues(values)
}