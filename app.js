const API_KEY = "3bcd2290c7698d4332dc548cd3cdb51b";

let API_URL = `api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=${API_KEY}`



inputBtn.addEventListener('click', ()=>{

    
    fetch(`https://islomapi.uz/api/present/week?region=${viloyatInput.value}`) 
    .then(res => res.json())
        .then(data =>{

          
         

            console.log(data);

            data.forEach((el)=> {

                // let cloneTemplate = weekTemplate.cloneNode(true);

                // console.log(cloneTemplate);

                // cloneTemplate.document.querySelector('tong_saharlik').innerHTML = `Vaqti: ${el.date}`
                
                // resualtWeek.appendChild(cloneTemplate)
                


                date.textContent = `Vaqti: ${el.date}`
                tongSaharlik.textContent = `Tong saharlik: ${el.times.tong_saharlik}`
                quyosh.textContent = `Quyosh: ${el.times.quyosh}`
                peshin.textContent = `Peshin: ${el.times.peshin}`
                asr.textContent = `Asr: ${el.times.asr}`
                shomIftor.textContent = `Shom Iftor: ${el.times.shom_iftor}`
                hufton.textContent = `Hufton: ${el.times.hufton}`
                region.textContent = `Viloyat: ${el.region}`
                kun.textContent = `Xafta kuni: ${el.weekday}`

            });


            console.log("salom");
            // console.log(kunInput.value);



})
})