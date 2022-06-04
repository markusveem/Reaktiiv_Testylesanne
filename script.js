

const picture = document.querySelector(".picture");

const heading = document.querySelector(".heading");
const year = document.querySelector(".year");
const url = document.querySelector(".url");

const container =  document.querySelector(".container")
const row = document.querySelector(".row")

let colummns = 0;





let localJson = "projectData.json";
$.getJSON(localJson, function(data) {
    changeColumns(data);
});

function changeColumns(data){


    for (let i = 0; i < data.length; i++) {
        let imgSource = data[i].image
        let title = data[i].title
        let urlSource = data[i].url
        let yearSource = data[i].year
        console.log(i);
        colummns = (colummns + 1);
        console.log(colummns, "columneid");
        

        
        row.innerHTML +=`
        <div class="col-4 background">
            <div class="picture"><img src="${imgSource}"></div>
            <div class="heading"><h2>${title}</h2></div>
            <div class="year"><p>aasta: ${yearSource}</div>
            <div class="url"><a href="${urlSource}">vaata lähemalt</a></div>
        </div>
    `
    
       
    }
}


/*let imgSource = data[i].image
        picture.innerHTML = `<img src="${imgSource}">`;

        let title = data[i].title
        heading.innerHTML = `<h2>${title}</h2>`;

        let urlSource = data[i].url
        url.innerHTML = `<a href="${urlSource}">vaata lähemalt</a>`;

        let yearSource = data[i].year
        year.innerHTML = `<p>aasta: ${yearSource}</p>`;
*/ 
 

