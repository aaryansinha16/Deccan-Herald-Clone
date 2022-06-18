let video = JSON.parse(localStorage.getItem("video"));

display(video)

function display(data)
{  
    console.log(data)

document.querySelector("#showVideo").innerHTML=null;

let div = document.createElement("div")

let iframe = document.createElement("iframe") ;

// this link we get from youtube in embeded this is use to show video
iframe.src = `https://www.youtube.com/embed/${data.videoId}?autoplay=1` ;

iframe.setAttribute("allow","autoplay")

let h2=document.createElement("h2");
h2.innerText=data.title;

let h3=document.createElement("p");
h3.innerText=data.description;

div.append(iframe);
document.querySelector("#info").append(h2);
document.querySelector("#showVideo").append(div);
document.querySelector("#details").append(h3)

}

