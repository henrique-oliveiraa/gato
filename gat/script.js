function showCatFact(photoId){
    //variaveis que contem o link com o limite de 140 caracteres
    const catFactApiUrl = "https://catfact.ninja/fact?max_length=140";

    fetch(catFactApiUrl) 
        .then(response => response.json())
        .then(data => {
            //extraimdo o fato de gato da resposta.    
            const catFact = data.fact

            document.getElementById('catFactMessage').innerText = catFact
        })
    
    .catch(error => {
        console.error(`erro ao obter a frase: ${error}`)
        document.getElementById('catFactMessage').innerText = 'erro ao obter a frase'



    });
    
    
    
    }