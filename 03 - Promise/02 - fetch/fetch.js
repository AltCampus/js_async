// Using XMLHttpRequest and Promise write your own implementation of browesrs fetch method.
// 1. It takes two parameter 'url' and type of request (GET | POST)
// 2. Returns a promise
// 3. Resolve the promise when data is fetched (onload)
// 4. Reject the promise when error occured (onerror)
function fetchData(url) {
  // your code goes here
return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
     xhr.onload  = resolve();
     xhr.onabort = reject(e = console.log(e))
  
  xhr.open('GET', url)
  xhr.send();
})
}



fetchData('https://api.github.com/users/shadab-me');
console.log(fetchData())