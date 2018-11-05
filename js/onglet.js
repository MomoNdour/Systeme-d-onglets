(function(){

    var afficherOnglet = function (a, animations) {
        if(animations === undefined){
            animations = true
        }
        var li = a.parentNode //Pour remonter au li
        var div = a.parentNode.parentNode.parentNode //pour remonter à la div
        var ongletActive = div.querySelector('.onglet-content.active') //Contenu actif
        var aAfficher = div.querySelector(a.getAttribute('href')) //Contenu a afficher
        
        if (li.classList.contains('active')) { //Si l'onglet (li) est active
            return false
        }
        // 1) On retire la classse active de l'onglet actif
        div.querySelector('.onglets .active').classList.remove('active') //retrait de la classe active
        // j'ajoute la classe active à l'onglet actuel
        li.classList.add('active') //pour rajouetr le classe active dans la liste des classes

        // 2) On retire la classe active sur le contenu actuel
        //div.querySelector('.onglet-content.active').classList.remove('active') //masquer l'onglet
        // j'ajoute la classe active sur le contenu correspondant à mon click
        //div.querySelector(a.getAttribute('href')).classList.add('active')

        //SYSTEME DE TRANSITION
        if(animations){

                ongletActive.classList.add('fade')
                ongletActive.classList.remove('in')
                transitionend = function () {
                    this.classList.remove('fade')
                    this.classList.remove('active')
                    aAfficher.classList.add('active')
                    aAfficher.classList.add('fade')
                    aAfficher.offsetWidth
                    aAfficher.classList.add('in')
                    ongletActive.removeEvenListener('transitionend', transitionend)
                }
            ongletActive.addEventListener('transitionend', transitionend)
            ongletActive.addEventListener('webkitTransitionEnd', transitionend) //pour les navigateur ancien
            ongletActive.addEventListener('oTransitionEnd', transitionend) //pour opera
        }else{
            aAfficher.classList.add('active')
            ongletActive.classList.remove('active')
        }
    }

    // Selectionner tous les liens qui sont dans la div de classe 'onglets'
    var onglets = document.querySelectorAll('.onglets a')
    // parcourir les onglets
    for (var i = 0; i <= onglets.length; i++) {
        onglets[i].addEventListener('click', function (e) {
            afficherOnglet(this)
        })
    }

    //JE RECUPERE LE HASH 
    var hashChange = function (e){
        hash = window.location.hash
        // Ajouter le classe active sur le lien href="hash"
        var a = document.querySelector('&[href = "' + hash + '"]') // variable qui permet de savoir le lien qui est passé sur la barre d'adresse
        if (a !== null && !a.classList.contains('active')) {
            afficherOnglet(a, e !== undefined)
        } 
    }

    window.addEventListener('hashchange', hashChange)
    hashChange();
})()
//Auto appeler la fonction pour avoir un scope local