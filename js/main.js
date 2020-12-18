// Biodiversity

function toggleTheme() {
    if (document.body.className == 'th1')
        document.body.className = 'th2'
    else
        document.body.className = 'th1'
}

document.getElementById('theme').onclick = toggleTheme
