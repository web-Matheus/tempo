var des = document.getElementById('des')
var temperatura = document.getElementById('temp')
var nascer = document.getElementById('manha')
var img = document.getElementById('img')
var por = document.getElementById('noite')

var dia1 = document.getElementById("oned")
 fetch('https://api.hgbrasil.com/weather?format=json-cors&key={}&city_name=Jeremoabo,BA')
 .then(function(response){
     return response.json()
 }).then(function(data){
    // console.log(data.results)
    const descrip = (data.results.description)
    const graus = (data.results.temp)
    const nsol = (data.results.sunrise)
    const psol = (data.results.sunset)


    /*escrever na tela*/
    nascer.innerText = nsol
    por.innerText = psol
    des.innerText = descrip
    temperatura.innerText = `${graus}°`

    /*condicionais*/
    if(descrip =="Ensolarado"){
        document.body.style.background='#e2cd9f'
        img.src ='limpo.png'
    }else if(descrip =="Tempo nublado"){
        document.body.style.background='#515154'
        img.src ='nublado.png'
    }
   
    
        
})
  