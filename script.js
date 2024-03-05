let title = document.querySelector(".title")
const dom = document.getElementById("container").innerHTML
let titlelength = title.innerHTML.length

function makecard(gettitle , getviews , getdata , getimg){
    if(getviews >= 1000 && getviews < 1000000){
        getviews = getviews/1000 + "K"
    }
    else if(getviews >= 1000000 && getviews < 1000000000){
        getviews = getviews/1000000 + "M"
    }
    else if(getviews >= 1000000000 && getviews < 1000000000000){
        getviews = getviews/1000000000 + "B"
    }

    if(getdata <= 12 && getdata > 0){
        getdata = getdata + " months ago"
    }
    else if(getdata > 12){
        getdata = getdata/12 + " years ago"
    }
    else{
        getdata = "Not Sure"
    }
    html = `
    <div class="minicontainer flex">
    <div><img class="image" src=${getimg}
                alt=""></div>
        <div class="data">
            <h3 class="title">${gettitle}.</h3>
            <div class="times flex">
                <p class="views">${getviews} views</p>
                <p>${getdata}</p>
            </div>
            <div class="chhanalname">CodeWithHarry</div>
        </div>
        </div>
    `
    document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + html  

}
makecard("Code With Harry bright out a beautiful web development course" , 999000 , 12 , "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg")
makecard("Code With Harry bright out a beautiful web development course this is the 55th episods in my playlist" , 1100000000 , -24 , "https://media.istockphoto.com/id/1322194536/photo/sabarmati-riverfront-aerial-view-ahmedabad.jpg?s=612x612&w=0&k=20&c=G8qSUp_FeJzB4Tq1vd02NGGSvUC-pI_PSb_z7ELdXAI=")
makecard("Code With Harry bright out a beautiful web development course" , 1000000 , 15 , "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=")