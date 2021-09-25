let ageBtn = document.getElementById('age-btn');

ageBtn.addEventListener('click', getApi2)

function getApi2(){
    axios.get("https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/units")
        .then(response2 => {
            console.log(response2)
            for(let x = 0; x < response2.data.units.length; x++){
                let unitContainer = document.getElementById('units');

                let nameEl = document.createElement('h2');
                let name = document.createElement('p');
                let descriptionEl = document.createElement('h2');
                let description = document.createElement('p');

                nameEl.innerText = "Unit Type: ";
                name.innerText = response2.data.units[x].name;
                descriptionEl.innerText = "Description: ";
                description.innerText = response2.data.units[x].description;

                unitContainer.appendChild(nameEl);
                unitContainer.appendChild(name);
                unitContainer.appendChild(descriptionEl);
                unitContainer.appendChild(description);
            }
        })
}