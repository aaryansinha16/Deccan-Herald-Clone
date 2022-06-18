async function getKAdata(){
    let url = `https://newsapi.org/v2/everything?q=karnataka&apiKey=8925854952cb4774aa1368bfd7a16242` ;

    let res = await fetch(url);
    let data = await res.json();
    // console.log('data:', data.articles);
    // console.log(data.articles);
    appendNews(data.articles, onlyimagenews);
    appendNews(data.articles, threenewsblock);
    appendNews(data.articles, twonewsblock2);
    appendNews(data.articles, titlesnewsblock);
    appendNews(data.articles, threenewsblock3);
    appendNews(data.articles, politicsdiv);
    

    // return data.articles;
}

getKAdata();
// let newsItemArr = JSON.parse(localStorage.getItem("newsData")) || [];

let onlyimagenews = document.getElementById("only-image-news-item");

let threenewsblock = document.querySelector("#news-block-3-rows-1");
let twonewsblock2 = document.querySelector("#news-block-3-rows-2");
let threenewsblock3 = document.querySelector("#news-block-3-rows-3");
let titlesnewsblock = document.querySelector("#news-block-free-rows");
let politicsdiv = document.querySelector("#news-container-karnataka-1");


function appendNews(data, container){

    if(container.id == 'only-image-news-item'){
        var newsimage = document.createElement("img");
        newsimage.src = data[1].urlToImage;
        container.append(newsimage);
    }
    else{
        if(container.id == 'news-block-3-rows-1'){
            var arr = [];
            for(var i = 0 ; i < 3 ; i++){
                arr.push(data[i]);
                // console.log('data:', data[i])
            }
        }

        else if(container.id == 'news-block-3-rows-2'){
            var arr = [];
            for(var i = 3 ; i < 5 ; i++){
                arr.push(data[i]);
            }
        }

        else if(container.id == 'news-block-free-rows'){
            var arr = [];
            for(var i = 5 ; i < 8 ; i++){
                arr.push(data[i]);
            }
        }

        else if(container.id == 'news-block-3-rows-3'){
            var arr = [];
            for(var i = 8 ; i < 11 ; i++){
                arr.push(data[i]);
            }
        }

        else if(container.id == 'news-container-karnataka-1'){
            var arr = [];
            for(var i = 11 ; i <= 20 ; i++){
                arr.push(data[i]);
            }
        }



        // console.log(arr);
        arr.forEach(function (ele) {
            let newscard = document.createElement("div");

            let newsItemimage = document.createElement("img");
            newsItemimage.src = ele.urlToImage;
            
            let newsItemtitle = document.createElement("h4");
            newsItemtitle.innerText = ele.title;
            newsItemtitle.setAttribute("class", "cursorp");
            newsItemtitle.addEventListener("click", function(){
                redirect(ele);
            })

            newscard.append(newsItemimage,newsItemtitle);
            container.append(newscard);
        })
    }
}




function redirect(ele){
  
    // newsItemArr.push(ele);
    localStorage.setItem("newsData", JSON.stringify(ele));
    // console.log(newsItemArr);
    window.location.href = "news.html"
}