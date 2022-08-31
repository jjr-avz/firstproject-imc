function calcImc(event){

    //Previnir que a pagina seja recarregada
    event.preventDefault()

    const resultado = document.getElementById('result')
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    let imc

    if(peso === '' || altura === ''){
        alert('Você precisa preencher o peso e a altura')
        return 0
    }else{
        imc = peso / (altura * altura)
    }

    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
    
    if(imc < 18.5){
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}<br/><strong>Cuidado!</strong> Você está abaixo do peso.`
        let image = document.createElement('img')
        image.setAttribute('src', './img/puro_osso.gif')
        document.getElementById('result').appendChild(image)
    }else if(imc >= 18.5 && imc < 25){
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}<br/><strong>Parabéns!</strong> Você está no peso ideal.`
        let image = document.createElement('img')
        image.setAttribute('src', './img/johnny_bravo.png')
        document.getElementById('result').appendChild(image)
    }else if(imc >= 25 && imc < 30){
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}<br/><strong>Atenção!</strong> Você está acima do peso desejado.`
        let image = document.createElement('img')
        image.setAttribute('src', './img/Homer_Simpson.png')
        document.getElementById('result').appendChild(image)
    }else if(imc >= 30){
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}<br/><strong>Cuidado!</strong> Você está na obesidade.`
        let image = document.createElement('img')
        image.setAttribute('src', './img/boo.png')
        document.getElementById('result').appendChild(image)
    }
}