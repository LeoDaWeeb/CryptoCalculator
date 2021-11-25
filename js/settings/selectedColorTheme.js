function changeSelectedColor() {
    let colorTheme = localStorage.getItem('colorTheme')
    let colors = ['red', 'green', 'blue', 'orange', 'purple', 'cyan']
    colors.forEach(color => {
        document.getElementById(`${color}-circle`).style.boxShadow = 'none'
        document.getElementById(`${color}-circle`).style.borderColor = 'rgb(109, 109, 109)';
    })
    document.getElementById(`${colorTheme}-circle`).style.boxShadow = `0px 0px 15px 3px ${colorTheme}`
    document.getElementById(`${colorTheme}-circle`).style.borderColor = getComputedStyle(document.querySelector(':root')).getPropertyValue(`--${colorTheme}-lighter`)
}

changeSelectedColor()