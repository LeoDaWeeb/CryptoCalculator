function changeTabIcon(color) {
    document.querySelector("link[rel*='icon']").href = `resources/icons/icon-${color}.png`;
}

function changeColorTheme(color) {
    let root = document.querySelector(':root')
    let cssVariables = getComputedStyle(root)
    
    root.style.setProperty('--color-theme', cssVariables.getPropertyValue(`--${color}-color`))
    root.style.setProperty('--color-lighter', cssVariables.getPropertyValue(`--${color}-lighter`))
    root.style.setProperty('--font-color', cssVariables.getPropertyValue(`--${color}-font`))
    root.style.setProperty('--github-link-color', cssVariables.getPropertyValue(`--${color}-github-link`))

    localStorage.setItem('colorTheme', color)

    changeTabIcon(color)

    try {
        changeSelectedColor()
    } catch (error) {
        return
    }
}