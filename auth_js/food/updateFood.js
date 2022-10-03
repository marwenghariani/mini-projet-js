function afficheData() {
    var aliments = JSON.parse(localStorage.getItem('aliments')) || []
    var index = localStorage.getItem('modifIndex')
    var food = aliments[index]
    console.log(food);
    document.getElementById('aliments').value = food.aliment
    document.getElementById('description').value = food.description
    document.getElementById('prix').value = food.prix
    document.getElementById('quantité').value = food.quantité


}
afficheData()



function updateFood() {
        var aliments = document.getElementById('aliments')
        var description = document.getElementById('description')
        var quantité = document.getElementById('quantité')
        var prix = document.getElementById('prix')
        var photo = document.getElementById('photo')
        var formError = false
    
        if (aliments.value == '') {
            aliments.classList.add('is-invalid')
            aliments.classList.remove('is-valid')
            formError = true
        } else {
            aliments.classList.add('is-valid')
            aliments.classList.remove('is-invalid')
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
            aliment: aliments.value,
            description: description.value,
            quantité: quantité.value,
            prix: prix.value,
            photo: photo.value,
        }
    
        if (formError == true) {
            console.log('erreur');
        } else {
            var aliments = JSON.parse(localStorage.getItem('aliments')) || []
            var index =localStorage.getItem('modifIndex')
            aliments.splice(index,1,data)
            localStorage.setItem('aliments', JSON.stringify(aliments))
            window.location.href = "foodList.html"
    
        }
    }
    var creation = document.getElementById('modifier')
    creation.addEventListener('click', updateFood)
