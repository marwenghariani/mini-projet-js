function list() {
    var alimentsListe = JSON.parse(localStorage.getItem('aliments')) || []
//    console.log(alimentsListe);
    var tab = document.getElementById('tab')
    alimentsListe.map((element,index)=>{  //N.B:map() méthode de l'objet tab pour parcourir le tableau //
        tab.innerHTML+= `                 
        <tr>
            <th scope="row">${index+1}</th>
            <td>${element.aliment}</td>
            <td>${element.description}</td>
            <td>${element.quantité}</td>
            <td>${element.prix}</td>
            <td>${element.photo} </td>
            <td> 
                <button class='btn btn-success me-3' onclick='modifier(${index})'>modifier</button>
                <button class='btn btn-danger' onclick='supprimer(${index})'>supprimer</button> 
            </td>
        </tr>
        `
    })   

    // for (let i = 0; i < alimentsListe.length; i++) {
    //    tab.innerHTML += `
    //    <tr>
    //          <th scope="row">${i+1}</th>
    //          <td>${alimentsListe[i].aliment}</td>
    //          <td>${alimentsListe[i].description}</td>
    //          <td>${alimentsListe[i].quantité}</td>
    //          <td>${alimentsListe[i].prix}</td>
    //         <td>${alimentsListe[i].photo} </td>
    //          <td> <button class='btn btn-success me-3' >modifier</button><button class='btn btn-danger' >supprimer</button> </td>
    //      </tr>
    //     `    
    // }
} 
list()


function supprimer(i) {
    var data = JSON.parse(localStorage.getItem('aliments')) || [] ;//N.B: stocker les donnés de localStorage "aliments" dans la variable data //
    data.splice(i,1);  //supprimer un élement de tableau data//
    localStorage.setItem('aliments', JSON.stringify(data)) //stocker le nouveau tableau users dans le localStorage avec le key "users"//
    window.location.reload() // recharger la page actuelle //
}

function modifier(i) {
    localStorage.setItem('modifIndex',i) //enregistrer l'indice de l'element à modifier
    window.location.href="updateFood.html"
}