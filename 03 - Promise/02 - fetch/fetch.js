// Using XMLHttpRequest and Promise write your own implementation of browesrs fetch method.
// 1. It takes two parameter 'url' and type of request (GET | POST)
// 2. Returns a promise
// 3. Resolve the promise when data is fetched (onload)
// 4. Reject the promise when error occured (onerror)
function fetchData(url) {
  // your code goes here
return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
     xhr.onload  =  () => {
        return resolve(JSON.parse(xhr.response));
     };
     xhr.onabort  = () => {
      return reject(e => console.log(e))
     }
  
  xhr.send();
})
}



console.log(fetchData('https://api.github.com/users/shadab-me'));
 