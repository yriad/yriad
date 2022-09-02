
console.log("pos")


let count = document.getElementById('value').innerText
//document.getElementById('value').innerText = 44
async function fetchText() {
    let response = await fetch('http://localhost:3000/api/views');
    if (response.status === 200) {
        let data = await response.json();
        let myvalue = data.count
       document.getElementById('value').innerText = myvalue

        console.log("myvalue! "+myvalue); // OK
    }
}

fetchText();

