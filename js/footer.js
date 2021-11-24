setInterval(() => {
    let footer = document.getElementById('footer')
    
    if (document.body.scrollHeight > window.innerHeight) {
        footer.style.position = 'inherit';
    }
    else {
        footer.style.position = 'fixed';
    }
}, 10)
