function create() {
    var aliment = document.getElementById('aliments')
    var description = document.getElementById('description')
    var quantité = document.getElementById('quantité')
    var prix = document.getElementById('prix')
    var photo = document.getElementById('photo')
    var formError = false

    if (aliment.value == '') {
        aliment.classList.add('is-invalid')
        aliment.classList.remove('is-valid')
        formError = true
    } else {
        aliment.classList.add('is-valid')
        aliment.classList.remove('is-invalid')
    }

    if (description.value == '') {
        description.classList.add('is-invalid')
        description.classList.remove('is-valid')
        formError = true
    } else {
        description.classList.add('is-valid')
        description.classList.remove('is-invalid')
    }

    if (quantité.value == '') {
        quantité.classList.add('is-invalid')
        quantité.classList.remove('is-valid')
        formError = true
    } else {
        quantité.classList.add('is-valid')
        quantité.classList.remove('is-invalid')
    }

    if (prix.value == '') {
        prix.classList.add('is-invalid')
        prix.classList.remove('is-valid')
        formError = true
    } else {
        prix.classList.add('is-valid')
        prix.classList.remove('is-invalid')
    }

    if (photo.value == '') {
        photo.classList.add('is-invalid')
        photo.classList.remove('is-valid')
        formError = true

    } else {
        photo.classList.add('is-valid')
        photo.classList.remove('is-invalid')

    }
    var data = {
        aliment: aliment.value,
        description: description.value,
        quantité: quantité.value,
        prix: prix.value,
        photo: photo.value,
    }

    if (formError == true) {
        console.log('erreur');
    } else {
        var users = JSON.parse(localStorage.getItem('aliments')) || []
        users.push(data)
        localStorage.setItem('aliments', JSON.stringify(users))
        window.location.href = "foodList.html"

    }
}
var creation = document.getElementById('create')
creation.addEventListener('click', create)