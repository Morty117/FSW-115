const getItems = () => {
    console.log('ran')

    axios.get("http://api.bryanuniversity.edu/anthonyHernandez/list")
        .then(res => {
            console.log(res)
            displayTodo(res.data)
        })
        .catch(err => console.log(err))
}
getItems()

const displayTodo = (todos) => {
    const todoContainer = document.getElementById("todoContainer")
    todoContainer.innerHTML = ''

    todos.forEach(todo => {
        console.log(todo)
        let todoCard = document.createElement('div')
        todoCard.classList.add('todo-card')

        let nameHeader = document.createElement('h2')
        nameHeader.textContent = todo.name

        let description = document.createElement('p')
        description.textContent = todo.description

        let price = document.createElement('p')
        price.textContent = todo.price

        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'Delete'
        deleteBtn.id = todo._id
        deleteBtn.addEventListener('click', deleteTodo)

        let taskComplete = document.createElement('button')
        taskComplete.textContent = ''
        todo.isComplete ? taskComplete.textContent = 'Task Incomplete' : taskComplete.textContent = 'Task Complete'

        taskComplete.id = todo._id
        taskComplete.value = todo.isComplete
        taskComplete.addEventListener('click', updateTodo)

        todoCard.appendChild(nameHeader)
        todoCard.appendChild(description)
        todoCard.appendChild(price)
        todoCard.appendChild(deleteBtn)
        todoCard.appendChild(taskComplete)
        todoContainer.appendChild(todoCard)
    });
}

let todoForm = document.todoform

const postTodo = e => {
    e.preventDefault()

    let nameData = todoForm.title.value
    let descriptionData = todoForm.description.value
    let priceData = todoForm.price.value
    let isCompleteData = todoForm.todoComplete.checked

    let data = {
        name: nameData,
        description: descriptionData,
        price: priceData,
        isComplete: isCompleteData,
    }

    axios.post('http://api.bryanuniversity.edu/anthonyHernandez/list', data)
        .then(res => getItems())
        .catch(err => console.error(err))
}


todoForm.addEventListener('submit', postTodo)



const deleteTodo = e => {
    let id = e.target.id

    axios.delete(`http://api.bryanuniversity.edu/ericl/list/${id}`)
        .then(res => getItems())
        .catch(err => console.error(err))
}

const updateTodo = e => {
    let id = e.target.id
    let value = e.target.value

    if(value === 'true'){
        value = false
    } else {
        value = true
    }

    let data = {
        isComplete: value
    }

    axios.put(`http://api.bryanuniversity.edu/ericl/list/${id}`, data)
        .then(res => getItems())
        .catch(err => console.error(err))
}