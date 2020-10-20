let url = 'https://api.unsplash.com/photos/random/?client_id=XwmcWkB8lripbaykgfgsAsE97GaiNf3VY9ULLTxXogc'
let xhr = new XMLHttpRequest();
// xhr.addEventListener('load', () => console.log(xhr.response));
let root = document.querySelector('.root');
let random = document.querySelector('#random')

function dataFetch(){
    xhr.open('GET', url)
    xhr.onload = function(){
        root.innerHTML = ''
        let  data = JSON.parse(xhr.response).urls
        let div  = document.createElement('div');
        let img = document.createElement('img');
         img.src = data.small;
        div.append(img);
        console.log(root)
        root.appendChild(div)
    }
    xhr.onabort = function() {

    }
    xhr.send();
} 


console.log(xhr)
dataFetch();
random.addEventListener('click', dataFetch);