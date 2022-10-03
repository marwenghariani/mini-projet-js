function login() {
    var email = document.getElementById('email')
    var mot_passe = document.getElementById('password')

    //console.log(user);
    formError = false
    if (email.value == '') {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        document.getElementById('feedback-email').innerHTML = 'email obligatoire'
        formError = true
    } else if (email.value != '' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        document.getElementById('feedback-email').innerHTML = 'email invalid'
        formError = true
    } else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }

    if (mot_passe.value == '') {
        mot_passe.classList.add('is-invalid')
        mot_passe.classList.remove('is-valid')
        document.getElementById('feedback-password').innerHTML = 'mot de passe obligatoire'
        formError = true
    }else if (mot_passe.value !== '' && mot_passe.value.length<6) {
        mot_passe.classList.add('is-invalid')
        mot_passe.classList.remove('is-valid')
        document.getElementById('feedback-password').innerHTML = 'mot de passe inferieure à 6 caracteres'

        formError = true
    } else {
        mot_passe.classList.add('is-valid')
        mot_passe.classList.remove('is-invalid')
    }
    if (formError === true) {
        console.log('form invalid');
    } else {
        var users = JSON.parse(localStorage.getItem('users')) || []
        var found = users.find((user) => user.email === email.value && user.mot_passe === mot_passe.value)
        if (found === undefined) {
            console.log('utilisateur introuvable');
        } else {
            window.location.href = 'dashboard.html'
        }
    }
}
var log = document.getElementById('login')
log.addEventListener('click', login)