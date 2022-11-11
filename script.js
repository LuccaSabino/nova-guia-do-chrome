
function show() {

    var apps = document.getElementById('menu-apps')

    if (apps.classList.contains('esconder-apps')) {

        apps.classList.add('mostrar-apps')
        apps.classList.remove('esconder-apps')

    }
    else {

        apps.classList.remove('mostrar-apps')
        apps.classList.add('esconder-apps')


    }

}


function show2() {

    var apps = document.getElementById('menu-apps')

    apps.classList.remove('mostrar-apps')
    apps.classList.add('esconder-apps')

}