const ul = document.createElement('ul')
ul.className = 'todo'

axios.get('http://api.bryanuniversity.edu/anthonyHernandez/list')
.then(response => {
    console.log(response.data)
    for(let i = 0; i < response.data.length; i++){
        let list = document.createElement('li')
        list.textContent = response.data[i].name
        if(response.data[i].isComplete === true){
            ul.style.textDecoration = "line-through"
        }

        ul.appendChild(list)
        document.body.appendChild(ul) 
    }
})