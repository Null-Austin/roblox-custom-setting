function forcerick(){
    window.location.href = 'https://www.youtube.com/embed/Z2Fz9tdghAs?loop=1&playlist=Z2Fz9tdghAs&color=white&rel=0&controls=0&disablekb=1&autoplay=1'
}


async function lol() {
    await new Promise(r => setTimeout(r, 10));

    li = document.createElement('li')
    a = document.createElement('a')

    a.href='javascript:window.location.href = \'https://www.youtube.com/embed/Z2Fz9tdghAs?loop=1&playlist=Z2Fz9tdghAs&color=white&rel=0&controls=0&disablekb=1&autoplay=1\''
    a.innerText = 'google'
    li.appendChild(a)

    document.getElementById('settings-popover-menu').appendChild(li)
}

document.getElementById('nav-settings').addEventListener('click', lol);
