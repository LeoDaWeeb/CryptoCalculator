setInterval(() => {
    if (window.innerWidth < 1000) {
        let cols = document.getElementsByClassName('col-1 color-cirlce-col')
        for (let i = 0; i < cols.length; i++) {
            cols[i].className = 'col-2 color-cirlce-col'
        }
    }
    else {
        let cols = document.getElementsByClassName('col-2 color-cirlce-col')
        for (let i = 0; i < cols.length; i++) {
            cols[i].className = 'col-1 color-cirlce-col'
        }
    }
}, 10)