let api_key='AIzaSyBCvLOj-34rlKTYwqJrCuP8rSvHxSMUelg'

 
let search = async () =>
    {   

let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCef1-8eOpJgud7szVPlZQAQ&channelType=channelTypeUnspecified&eventType=none&maxResults=30&order=searchSortUnspecified&type=video&videoType=videoTypeUnspecified&key=${api_key}` 
     let res= await fetch(url);
        let data=await res.json();
        //console.log(data.items)
        append(data.items) 
        append1(data.items)
        append2(data.items)
        append3(data.items)
        append4(data.items)
    }
    search()
   
  
    let append = (data) => {
          let arr=[];
          for(let i=0;i<9;i++)
          {
            arr.push(data[i]);
          }
          console.log(arr)
    
        // console.log(data.length)
     let container= document.querySelector("#container");
     
     arr.forEach(({id: {videoId },snippet:{description,title} }) => {
 
         let div = document.createElement("div")
 
          let iframe = document.createElement("iframe") ;
 
 // this link we get from youtube in embeded this is use to show video
         iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay1` ;
         iframe.setAttribute("allow","autoplay")
        iframe.setAttribute("class","border")
   

       let h3=document.createElement("h4");
        h3.innerText=title;
 
 //by onclicking what kind of material we required that is title and videoid so we put all in these in an array
        let video =
        {
            description,
            videoId,
            title
        }
 
         div.append(iframe,h3);
         
          //so by onclicking we just go to the next page by the below function
         div.onclick = () => {
                playVideo(video);
         }
 
         container.append(div)
     })
 }

 let playVideo = (video) =>{
     
     //console.log(video)
         localStorage.setItem("video",JSON.stringify(video))
         window.location.href="video.html";
     
     }

 // for bengaluru side---------------------------------------------------------------------------------------------------------------------------->
 let append1 = (data) => {
          let arr1=[];
          for(let i=9;i<12;i++)
          {
            arr1.push(data[i]);
          }
          console.log(arr1)
    
        // console.log(data.length)
     let container2= document.querySelector("#container2");
     
     arr1.forEach(({id: {videoId },snippet:{description,title} }) => {
 
         let div = document.createElement("div")
         //div.setAttribute("class","box")
 
          let iframe = document.createElement("iframe") ;
 
 // this link we get from youtube in embeded this is use to show video
         iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay1` ;
         iframe.setAttribute("allow","autoplay")
          
   

       let h3=document.createElement("h4");
        h3.innerText=title;
 
 //by onclicking what kind of material we required that is title and videoid so we put all in these in an array
        let video =
        {   
            title,
            description ,
            videoId
        }
 
         div.append(iframe,h3);
         
          //so by onclicking we just go to the next page by the below function
         div.onclick = () => {
                playVideo(video);
         }
 
         container2.append(div)
     })
 }
 
  playVideo = (video) =>{
     
     //console.log(video)
         localStorage.setItem("video",JSON.stringify(video))
         window.location.href="video.html";
     
     }


 // for Karnataka side--------------------------------------------------------------------------------------------------------------------------------->

 let append2 = (data) => {
          let arr2=[];
          for(let i=12;i<15;i++)
          {
            arr2.push(data[i]);
          }
          console.log(arr2)
    
        // console.log(data.length)
     let container3= document.querySelector("#container3");
     
     arr2.forEach(({id: {videoId },snippet:{description,title} }) => {
 
         let div = document.createElement("div")
 
          let iframe = document.createElement("iframe") ;
 
 // this link we get from youtube in embeded this is use to show video
         iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay1` ;
         iframe.setAttribute("allow","autoplay")
          
   

       let h3=document.createElement("h4");
        h3.innerText=title;
 
 //by onclicking what kind of material we required that is title and videoid so we put all in these in an array
        let video =
        {
            description ,
            videoId,
            title
        }
 
         div.append(iframe,h3);
         
          //so by onclicking we just go to the next page by the below function
         div.onclick = () => {
                playVideo(video);
         }
 
         container3.append(div)
     })
 }
  playVideo = (video) =>{
     
     //console.log(video)
         localStorage.setItem("video",JSON.stringify(video))
         window.location.href="video.html";
     
     }

 //for people----------------------------------------------------------------------------------------------------------------------------------------------->

 let append3 = (data) => {
          let arr3=[];
          for(let i=15;i<18;i++)
          {
            arr3.push(data[i]);
          }
          console.log(arr3)
    
        // console.log(data.length)
     let container4= document.querySelector("#container4");
     
     arr3.forEach(({id: {videoId },snippet:{description,title} }) => {
 
         let div = document.createElement("div")
 
          let iframe = document.createElement("iframe") ;
 
 // this link we get from youtube in embeded this is use to show video
         iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay1` ;
         iframe.setAttribute("allow","autoplay")
          
   

       let h3=document.createElement("h4");
        h3.innerText=title;
 
 //by onclicking what kind of material we required that is title and videoid so we put all in these in an array
        let video =
        {
            description ,
            videoId,
            title
        }
 
         div.append(iframe,h3);
         
          //so by onclicking we just go to the next page by the below function
         div.onclick = () => {
                playVideo(video);
         }
 
         container4.append(div)
     })
 }

  playVideo = (video) =>{
     
     //console.log(video)
         localStorage.setItem("video",JSON.stringify(video))
         window.location.href="video.html";
     
     }

//You may like-------------------------------------------------------------------------------------------------------------------------------------->

let append4 = (data) => {
          let arr4=[];
          for(let i=18;i<26;i++)
          {
            arr4.push(data[i]);
          }
          console.log(arr4)
    
        // console.log(data.length)
     let container5= document.querySelector("#container5");
     
     arr4.forEach(({id: {videoId },snippet:{description,title} }) => {
 
         let div = document.createElement("div")
 
          let iframe = document.createElement("iframe") ;
 
 // this link we get from youtube in embeded this is use to show video
         iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay1` ;
         iframe.setAttribute("allow","autoplay")
          
   

       let h3=document.createElement("h4");
        h3.innerText=title;
 
 //by onclicking what kind of material we required that is title and videoid so we put all in these in an array
        let video =
        {
            description ,
            videoId,
            title
        }
 
         div.append(iframe,h3);
         
          //so by onclicking we just go to the next page by the below function
         div.onclick = () => {
                playVideo(video);
         }
 
         container5.append(div)
     })
 }
  playVideo = (video) =>{
     
     //console.log(video)
         localStorage.setItem("video",JSON.stringify(video))
         window.location.href="video.html";
     
     }