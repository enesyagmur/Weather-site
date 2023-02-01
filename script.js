
    const url = "https://api.openweathermap.org/data/2.5/"
    const key = "9f3441674da2adb06b13700d6ff19b5f"
   


   document.querySelector("button").addEventListener("click",function(){


    let hava = document.querySelector(".weather")
    let derece = document.querySelector(".temp")
    let konum = document.querySelector(".location")
    let city = document.querySelector(".city").value


    let query = `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(veri=>veri.json())
    .then(result=>{
        console.log(result)
        hava.innerHTML= "Bulut %"+result.clouds.all
        derece.innerHTML=Math.round(result.main.temp)+"°C"
        konum.innerHTML=result.name + " "+ result.sys.country
        

        


    })
  
   })
