let loadingImg = document.createElement('img')
loadingImg.id = 'loaderImg'
loadingImg.src = 'https://media1.tenor.com/images/0fbef8275647727db9cbe3245c749782/tenor.gif?itemid=9214680'
document.body.appendChild(loadingImg)


const getBUApi = () => {
    axios.get('http://api.bryanuniversity.edu/anthonyHernandez/list')
    .then(res => {
        console.log(res)
        displayFavCards(res.data)
    })
    .catch(err => console.log(err))
}

const displayFavCards = (cards) => {
    document.getElementById('favorites').innerHTML = ''

   for(let i = 0; i < cards.length; i++){
    let cardsContainer = document.createElement('div')
    let cardName = document.createElement('h2')
    let cardAtk = document.createElement('p')
    let cardImg = document.createElement('img')
    let deleteCard = document.createElement('button')

    cardName.innerHTML = cards[i].name
    cardAtk.innerHTML = cards[i].price
    cardImg.src = cards[i].description
    deleteCard.innerHTML = 'Delete From Deck'
    deleteCard.id = cards[i]._id

    deleteCard.addEventListener('click', deleteCards)

    cardsContainer.appendChild(cardName)
    cardsContainer.appendChild(cardAtk)
    cardsContainer.appendChild(cardImg)
    cardsContainer.appendChild(deleteCard)

    // set the container to a variable and append the cards container to the variable
    document.getElementById('favorites').appendChild(cardsContainer)
   }
}

const deleteCards = (e) => {
    axios.delete(`http://api.bryanuniversity.edu/anthonyHernandez/list/${e.target.id}`)
        .then(res => {
            getBUApi()
        })
        .catch(err => console.log(err))
}

const getYugiApi = () => {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(response => {
        removeLoad()
        console.log(response.data.data)

        // Do I build the post inside of here to the BU API or the displayCard?

        let cards = response.data.data
        displayCard(cards)
    })
    .catch(err => console.log(err))
}

const removeLoad = () => {
    document.getElementById('loaderImg').remove()
}

const displayCard = card => {
    
    // When I run the for loop, it doesn't understand the .length property
    for(let i = 0; i < card.length; i++){
       
        let cardsContainer = document.createElement('div')
        let cardName = document.createElement('h2')
        let cardArcheType = document.createElement('p')
        let cardAtk = document.createElement('p')
        let cardImg = document.createElement('img')

        cardName.innerHTML = card[i].name
        cardArcheType.innerHTML = card[i].archetype
        if(card[i].atk){
            cardAtk.innerHTML = card[i].atk
        } else {
            cardAtk.innerHTML = 'Does not have attack power'
        }
        if(card[i].card_images){
            cardImg.src = card[i].card_images[0].image_url_small
        } else {
            console.log(card[i])
            cardImg.src = 'https://assets.dicebreaker.com/yu-gi-oh-tcg-yugi-art.png/BROK/resize/1920%3E/format/jpg/quality/80/yu-gi-oh-tcg-yugi-art.png'
        }

        cardsContainer.appendChild(cardName)
        cardsContainer.appendChild(cardArcheType)
        cardsContainer.appendChild(cardAtk)
        cardsContainer.appendChild(cardImg)
        
        let addToDeck = document.createElement('button')
        addToDeck.innerHTML = 'Add to Deck'

        addToDeck.addEventListener('click', postToDeck)
        addToDeck.id = card[i].id
        cardsContainer.appendChild(addToDeck)

        document.getElementById('card-container').appendChild(cardsContainer)
    }
}

const postToDeck = (e) => {
    axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${e.target.id}`)
        .then(res => {
            let cards = res.data.data
            let card = {}
            console.log(res)
            card.name = cards[0].name
            if(cards[0].atk){
                card.price = cards[0].atk
            } else {
                card.price= 0
            }
            if(cards[0].card_images){
                card.description = cards[0].card_images[0].image_url
            } else {
                card.description = 'https://assets.dicebreaker.com/yu-gi-oh-tcg-yugi-art.png/BROK/resize/1920%3E/format/jpg/quality/80/yu-gi-oh-tcg-yugi-art.png'
            }
            console.log(card)
            axios.post('http://api.bryanuniversity.edu/anthonyHernandez/list', card)
                .then(response => {
                    console.log(response)
                    getBUApi()
                })
                .catch(error => console.log(error))
        })
        .catch(err => console.log(err))
}

const putDeck = () => {
    axios.put('http://api.bryanuniversity.edu/anthonyHernandez/list')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
}