if (localStorage.getItem('colorTheme') === null) {
    localStorage.setItem('colorTheme', 'red')
}
else {
    changeColorTheme(localStorage.getItem('colorTheme'))
}