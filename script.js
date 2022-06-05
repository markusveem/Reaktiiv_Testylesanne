const row = document.querySelector(".row")

let localJson = "https://reaktiiv.com/projects.json";
//let localJson = "projectData.json";



$.getJSON(localJson,function(data) {
    displayData(data);
});

function displayData(data){

    for (let i = 0; i < data.length; i++) {
        let imgSource = data[i].image
        let titleSource = data[i].title
        let urlSource = data[i].url
        let yearSource = data[i].year
        
        row.innerHTML +=`
        <div class="col-md-4 background">
            <div class="picture"><img src="${imgSource}""></div>
            <div class="heading"><h2>${titleSource}</h2></div>
            <div class="year"><p>aasta: ${yearSource}</div>
            <div class="url"><a class="url" href="${urlSource}" target=”_blank”>vaata lähemalt</a></div>
        </div>
    `
    }
}



