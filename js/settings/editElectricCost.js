function editDefaultElcost() {
    let elcostInput = document.getElementById('default-elcost-input')

    if (elcostInput.disabled == true) {
        elcostInput.disabled = false
        document.getElementById('edit-btn-sign').className = 'fa fa-check'
        elcostInput.focus()
    }
    else {
        if (isNaN(Number(elcostInput.value))) {
            document.getElementById('default-elcost-error-text').textContent = 'This value must be a number!'
        }
        else if (Number(elcostInput.value) < 0) {
            document.getElementById('default-elcost-error-text').textContent = 'This value cannot be a negative number!'
        }
        else if (elcostInput.value === '') {
            document.getElementById('default-elcost-error-text').textContent = 'This value cannot be empty!'
        }
        else {
            elcostInput.disabled = true
            document.getElementById('edit-btn-sign').className = 'fa fa-edit'
            document.getElementById('default-elcost-error-text').textContent = 'ㅤ'
            localStorage.setItem('defaultElcost', elcostInput.value)
        }
    }
}

document.getElementById('default-elcost-input').value = localStorage.getItem('defaultElcost')