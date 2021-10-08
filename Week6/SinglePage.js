const getChar = async(itemID) => {
    let character
    let starships
    let films
    
    try {
        character = await axios.get(`https://swapi.dev/api/people/${itemID}`)
        console.log(character)
        if(character.data.starships.length > 0){
            let starshipsData = await axios.get(character.data.starships[0])
            starships = starshipsData.data.name
            console.log(starships)
        } else {
            starships = 'Not a qualified captain'
        }
        films = await renderFilms(character.data.films)
        displayChar(character, starships, films)
    } catch (error) {
        console.log(error)
    }
}

const renderFilms = async films => {
    let filmArr = []
    // pending state
    // pushing the promises back into the array
    for(let i =0; i < films.length; i++){
        filmArr.push(axios.get(films[i]))
    }
    console.log(filmArr)
    // Promise.all() once its done loading will render the data
    // complete state
    let allFilms = await Promise.all(filmArr)
        .then(res => res)
        .catch(err => console.log(err))
        console.log(allFilms)

        return allFilms
}

function fetchChar(){
    let characId = document.getElementById('charId').value
    // console.log(characId)
    getChar(characId)
}

function displayChar(character, starships, films){
    let charContainer = document.createElement('div')
    charContainer.classList.add('char-container')

    let charName = document.createElement('h2')
    charName.innerText = character.data.name
    let spaceships = document.createElement('p')
    spaceships.innerText = starships
    console.log(starships)

    charContainer.appendChild(charName)
    charContainer.appendChild(spaceships)

    document.getElementById('container').appendChild(charContainer)

    let filmsList = document.createElement('ul')
    
    for(var i = 0; i < films.length; i++){
        let filmsEl =  document.createElement('li')
        filmsEl.innerText = `${character.data.name} was featured in ${films[i].data.title}`
        console.log(films[i])
        filmsList.appendChild(filmsEl)
        charContainer.appendChild(filmsList)
    }
}

document.getElementById('displayChar').addEventListener('click', function(e){
    e.preventDefault()

    fetchChar()
})