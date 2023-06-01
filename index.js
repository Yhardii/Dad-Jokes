const btnEl = document.getElementById("btn")
const apikey = "Z0cUMuTV8u/uXkxtPIDx7w==Ovcnj0zMbnPxbvdf"
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    }
    
}
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const paragraph = document.getElementById("joke")



btnEl.addEventListener("click", getJoke)

async function getJoke(){
    try{
        paragraph.textContent = "Updating..."
    btnEl.disabled = true
    btnEl.textContent = "updating"
    const response = await fetch(apiUrl, options)
    const result  = await response.json()
    const joke  = result[0]['joke']
    paragraph.textContent = joke
    btnEl.disabled = false
    btnEl.textContent = 'TELL ME A JOKE'
    }
    catch(error){
        paragraph.textContent = "An error happened, come back later"
        btnEl.disabled = false
        btnEl.textContent = 'TELL ME A JOKE'
        console.log(error);
    }
    
}