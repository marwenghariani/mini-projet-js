function enregister() {
    var nom = document.getElementById('nom')
    var prenom = document.getElementById('prenom')
    var email = document.getElementById('email')
    var mot_passe = document.getElementById('password')
    var confirmation = document.getElementById('confirm')
    var formError = false
    if (nom.value == '') {
        nom.classList.add('is-invalid')
        nom.classList.remove('is-valid')
        formError = true
    } else {
        nom.classList.add('is-valid')
        nom.classList.remove('is-invalid')
    }

    if (prenom.value == '') {
        prenom.classList.add('is-invalid')
        prenom.classList.remove('is-valid')
        formError = true
    } else {
        prenom.classList.add('is-valid')
        prenom.classList.remove('is-invalid')
    }

    if (email.value == '') {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        formError = true
    } else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }

    if (mot_passe.value == '') {
        mot_passe.classList.add('is-invalid')
        mot_passe.classList.remove('is-valid')
        formError = true

    } else {
        mot_passe.classList.add('is-valid')
        mot_passe.classList.remove('is-invalid')
    }

    if (confirmation.value == '') {
        confirmation.classList.add('is-invalid')
        confirmation.classList.remove('is-valid')
        formError = true

    } else {
        confirmation.classList.add('is-valid')
        confirmation.classList.remove('is-invalid')
    }
    if (confirmation.value !== mot_passe.value) {
        alert('mot de passe et confirmation sont différents')
    }
    var data = {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        mot_passe: mot_passe.value,
        confirmation: confirmation.value
    }
    console.log(data);

    if (formError == true) {
        alert('verifié les champs!')
    } else {
        var users = JSON.parse(localStorage.getItem('users')) || []  //N.B: stocker les donnés de localStorage "users" dans la variable users //
        users.push(data)  //remplir le tableau users avec un nauveau utilisateur //
        localStorage.setItem('users', JSON.stringify(users)) //stocker le nouveau tableau users dans le localStorage avec le key "users"//
        window.location.href = "login.html"
    }
}
var enregistrement = document.getElementById('enregister')
enregistrement.addEventListener('click', enregister)

