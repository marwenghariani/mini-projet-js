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

}