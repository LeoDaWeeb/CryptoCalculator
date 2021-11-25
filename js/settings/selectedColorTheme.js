function changeSelectedColor() {
    let colorTheme = localStorage.getItem('colorTheme')
    let colors = ['red', 'green', 'blue', 'orange', 'purple', 'cyan']
    colors.forEach(color => {
        document.getElementById(`${color}-circle`).style.boxShadow = 'none'
    })
    document.getElementById(`${colorTheme}-circle`).style.boxShadow = `0px 0px 15px 3px ${colorTheme}`
}

changeSelectedColor()