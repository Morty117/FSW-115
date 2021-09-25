let starWars = document.getElementById('starwars');

starWars.addEventListener('click', getApi);

function getApi(){
    axios.get("https://swapi.dev/api/people")
        .then(response => {
            console.log(response.data.results)
            for(let x = 0; x < response.data.results.length; x++){
                let characterContainer = document.getElementById('characters');

                let nameEl = document.createElement('h2');
                let name = document.createElement('p');
                let heightEl = document.createElement('h2');
                let height = document.createElement('p');

                nameEl.innerText = "Character Name: ";
                name.innerText = response.data.results[x].name;
                heightEl.innerText = "Height: ";
                height.innerText = response.data.results[x].height;

                characterContainer.appendChild(nameEl);
                characterContainer.appendChild(name);
                characterContainer.appendChild(heightEl);
                characterContainer.appendChild(height);
            }
        })
}