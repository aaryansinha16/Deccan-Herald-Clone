let getData = () => {
    return data
}

let append = (data, container) => {
    // console.log(data)

    if(container.id == 'container-1' || container.id == 'container-18'){

        container.style.backgroundImage = `url(${data[0].urlToImage})`;
        container.style.backgroundBlendMode = 'lighten'
        container.style.backgroundColor = 'rgba(255,255,255, 0.1)'

        let titlePara = document.createElement("p")
        let title = document.createElement("a")
        title.innerText = data[0].title
        title.href = '#'

        titlePara.append(title)
        container.append( titlePara)
        container.addEventListener("click", function(){
            fstNewsFun(data[0])
        })

        function fstNewsFun(el){
            localStorage.setItem('newsData', JSON.stringify(data[0]))
            window.location.href = 'news.html'
        }
    }
    else if(container.id == 'container-3' ){ 
        let img = document.createElement("img")
        img.src = 'https://etimg.etb2bimg.com/photo/78762613.cms'

        container.append(img)
    }
    else{
        if(container.id == 'container-2' || container.id == 'container-19'){
            var arr = []
            for(var i = 2; i<5;i++){
                arr.push(data[i])
            }
        }
        else if(container.id == 'container-4' || container.id == 'container-21'){
            var arr = []
            for(var i = 5; i<7; i++){
                arr.push(data[i])
            }
        }
        else if(container.id == 'container-5' || container.id == 'container-22'){
            var arr = []
            for(var i = 7; i<10; i++){
                arr.push(data[i])
            }
        }
        else if(container.id == 'container-6' || container.id == 'container-23'){
            var arr = []
            for(var i = 12; i<15; i++){
                arr.push(data[i])
            }
        }
        else if(container.id == 'container-7' || container.id == 'container-16'){
            var arr = []
            for(var i = 15; i<17; i++){
                arr.push(data[i])
            }
        }
        else if(container.id == 'container-8' || container.id == 'container-17'){
            var arr = []
            for(var i = 17; i<20; i++){
                arr.push(data[i])
            }
        }
        else if(container.id == 'bigNews'){
            var arr = []
            for(var i = 20; i<21; i++){
                arr.push(data[i])
            }
        }
        else if(container.id == 'smallNews1'){
            var arr = []
            for(var i = 21; i<22; i++){
                arr.push(data[i])
            }
        }
        else if(container.id == 'smallNews2'){
            var arr = []
            for(var i = 22; i<23; i++){
                arr.push(data[i])
            }
        }
        else if(container.id == 'smallNews3'){
            var arr = []
            for(var i = 24; i<25; i++){
                arr.push(data[i])
            }
        }
        else if( container.id == 'container-14' ){
            arr = []
            for(var i = 27; i<28; i++){
                arr.push(data[i])
            }
        }
        else if(container.id == 'container-15'){
            arr = []
            for(var i = 28; i<29; i++){
                arr.push(data[i])
            }
        }
        else{
            var arr = []
            for(var i = 20; i<23; i++){
                arr.push(data[i])
            }
        }
    
        arr.forEach(function(elem){
            let box = document.createElement("div")
            box.setAttribute("class", 'newsDiv')
    
            var img = document.createElement("img")
            img.addEventListener('click', function(){
                newsFun(elem)
            })
            if(elem.urlToImage == null){
                img.src == `https://demofree.sirv.com/nope-not-here.jpg`
            }
            else{
                img.src = elem.urlToImage
            }
    
            let textBox = document.createElement("div")
            textBox.setAttribute("class", 'textBox')
            let titlePara = document.createElement("p")
            let title = document.createElement("a")
            title.innerText = elem.title

            titlePara.addEventListener("click", function(){
                newsFun(elem)
            })
            title.style.cursor = 'pointer'
    
            titlePara.append(title)
    
            textBox.append(titlePara)
    
            box.append(img, textBox)
            container.append(box)
        })

        function newsFun(el){
            localStorage.setItem("newsData", JSON.stringify(el))
            window.location.href = 'news.html'
        }

    }
    
}

export {getData, append}