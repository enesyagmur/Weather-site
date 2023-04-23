const url = "https://api.openweathermap.org/data/2.5/";
const key = "9f3441674da2adb06b13700d6ff19b5f";

//inputumuzun tuşa basılma özelliğine fonksiyon veriyoruz
document.querySelector(".city").addEventListener("keypress", function (e) {
  //basılan tuşun değerine göre işlem
  if (e.keyCode == 13) {
    let hava = document.querySelector(".weather");
    let ruzgar = document.querySelector(".wind");
    let derece = document.querySelector(".temp");
    let konum = document.querySelector(".location");
    let city = document.querySelector(".city").value;

    //link oluşturup içerisine verilerimizi ekliyoruz
    let query = `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`;

    //fetch get ve ekrana yazdırma işlemleri
    fetch(query)
      .then((veri) => veri.json())
      .then((result) => {
        console.log(result);
        hava.innerHTML = result.weather[0].description;
        derece.innerHTML = Math.round(result.main.temp) + "°C";
        konum.innerHTML = result.name + " " + result.sys.country;
        document.querySelector(".city").value = " ";
        ruzgar.innerHTML = result.wind.speed + " ~ ";
      });
  }
});
