fetch("https://restcountries.com/v2/all")
    .then(data => data.json())
    .then(data => {
        let htmls = "";
        data.forEach(item => {
            htmls +=`
            <div class="item">
                <img src="${item.flags.svg}" alt="">
                <span class="title">${item.name}</span>
            </div>
            `
        });
        document.querySelector(".container").innerHTML = htmls;
    }
    )
    const API = "https://api.ipify.org?format=json";

