import { header, navbar, inbrief } from "./navbar.js";

var homenavbar = document.querySelector(".navbar-container");
    homenavbar.innerHTML = navbar();




let data= [
    {head: "SIGN UP FOR ALL NEWSLETTERS", p:"I give my consent to Deccan Herald to be in touch with me via email for the purpose of event marketing and corporate communications.", topic:"business"},
    {head: "TOP NEWS OF THE DAY", p:"A round-up of the most important stories of the day. Stay informed about the news that matters to you.", topic:"business"},
    {head: "POLITICAL THEATRE", p:"A look at the political happenings of the week that shape the national conversation.",topic:"general"},
    {head: "THE DH SPORTSLETTER", p:"The letter keeps you updated on all you need to know from the world of sports. During the IPL, it will arrive in your inboxes daily throughout the length of the tournament.",topic:"sports"},
    {head: "DH VIDEO ON DEMAND", p:"Spend time with the best video storytelling from DH. Delivered on weekends.",topic:"entertainment"},
    {head: "TUNE IN TO DH RADIO", p:"A special curated look at the audio stories that deserve your attention.",topic:"health"},
    {head: "BEST OF DH OPINION", p:"Explore fresh perspectives, insightful analyses, fearless editorials and sharp arguments with this letter. We address the most pressing issues every single week.",topic:"science"},
    {head: "BEST OF DH ON WEEKENDS", p:"Take time to pause, reflect and feed your brain with our weekend letter. Our selection covers a range of topics and is sure to spark friendly debates. Your weekends will never be the same again.",topic:"technology"}
]

let append= (dat)=>{

    let box= document.getElementById('box')
dat.forEach((el,index)=>{
    console.log(index)
    let card= document.createElement('div');
    card.setAttribute('id', 'card');

    let h3tag= document.createElement('h3');
    h3tag.textContent=el.head;

    let ptag= document.createElement('p');
    ptag.textContent=el.p


    let card3= document.createElement('div');
    card3.setAttribute('id', 'card3');

    let inp=document.createElement('input');
    inp.placeholder="Entre Your Email"
    inp.setAttribute('id', 'inp')
    inp.type="email"

    let sp=document.createElement('span'); 
         
    sp.setAttribute('id', 'span')
    



    let but3=document.createElement('button');
    but3.textContent="Submit"
    but3.setAttribute('id', 'su')
    but3.addEventListener("click", emailvalidate)

    card3.append(inp,sp,but3)




    let card2= document.createElement('div');
    card2.setAttribute('id', 'card2');

    let but1=document.createElement('button');
    but1.textContent="Sign Up";
    but1.addEventListener("click", ()=>{
        signupclick(el,index)})

    
    


    let but2=document.createElement('button');
    but2.textContent="See Latest >"
    but2.addEventListener("click", ()=>{
        newsdata(el.topic)
    })
        
    

    // let inp= document.createElement('input');
    // inp.placeholder="email address"

    card2.append(but1,but2)
    card.append(h3tag,ptag,card2,card3)
    box.append(card)
})
}


append(data)

async function newsdata(topic){
    let rh= document.getElementById('rh')
    rh.scrollIntoView({behavior : "smooth"})
    
    
    // news.style.visibility ='visible'
    news.style.display="block"
    // news.innerHTML=""

    let api='38da8d3ad8574a3d89e8394ce0c67cc8'
    let url= `https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=${api}`


    try {
    let res= await fetch(url);
    let  ndata = await res.json();
    console.log(ndata.articles)    
    newsAppend(ndata.articles)

   
      
}catch (error){
    console.log(error)
}
}

let newsAppend= (nda)=>{
    let news= document.getElementById('news')
   

    
    nda.forEach(({urlToImage, title, description})=>{
        let div= document.createElement('div')
        div.setAttribute('id', 'newsdiv')

        let img= document.createElement('img')
        img.src=urlToImage
        img.setAttribute('id', 'newsimg')

        let div2= document.createElement('div')
        div2.setAttribute('id', 'ndetails')


        let h3= document.createElement('h3')
        h3.textContent=title

        let pt= document.createElement('p')
        pt.textContent=description

        div2.append(h3,pt)

        div.append(img,div2);
        news.append(div)

    })      


}

let close= document.getElementById('close')
let news= document.getElementById('news')
// news.style.visibility='hidden'
news.style.display="none"

if(close){
    close.addEventListener('click', ()=>{
        window.location.reload();
        // news.style.display="none"
        
    })
}

function signupclick(){

    let card3= document.getElementById('card3')
    let card2= document.getElementById('card2')
    card3.style.display="block"
    card2.style.display='none'    

}


let spa= document.getElementById('span')   

function emailvalidate(){
let inp=document.getElementById('inp').value;
let su=document.getElementById('su')
console.log(inp)


if(inp.length==0){
spa.innerHTML='Email is required'
spa.style.background="red"
spa.style.fontSize="16px"
spa.style.padding="5px"
spa.style.color="white"
return false;
} 

if(!inp.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
spa.innerHTML="email Invalid";
spa.style.background="red"
spa.style.fontSize="16px"
spa.style.padding="5px"
spa.style.color="white"

return false;

}

spa.innerHTML= 'successful check mail'
spa.style.background="#54e221"
spa.style.fontSize="15px"
spa.style.padding="5px"
su.style.display="none"
return true;
}