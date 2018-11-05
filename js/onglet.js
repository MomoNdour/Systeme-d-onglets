// Selectionner tous les liens qui sont dans la div de classe 'onglets'
var onglets = document.querySelectorAll('.onglets a')
// parcourir les onglets
    for(var i = 0; i <= onglets.length; i++)
    {
        onglets[i].addEventListener('click', function(e){
            var li = this.parentNode //Pour remonter au li
            var div = this.parentNode.parentNode.parentNode //pour remonter à la div
            if(li.classList.contains('active')){ //Si l'onglet (li) est active
                return false
            }
            // 1) On retire la classse active de l'onglet actif
            div.querySelector('.onglets .active').classList.remove('active') //retrait de la classe active
            // j'ajoute la classe active à l'onglet actuel
            li.classList.add('active') //pour rajouetr le classe active dans la liste des classes

            // 2) On retire la classe active sur le contenu actuel
            div.querySelector('.onglet-content.active').classList.remove('active') //masquer l'onglet
            // j'ajoute la classe active sur le contenu correspondant à mon click
            div.querySelector(this.getAttribute('href')).classList.add('active')
        })
    }
