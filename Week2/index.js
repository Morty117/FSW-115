var runescapeHighRanked = [
    {
        "name": "The Power 7",
        "score": "200,000,000",
        "rank": "1"
    },
    {
        "name": "Nev",
        "score": "200,000,000",
        "rank": "2"
    },
    {
        "name": "Ldy_Emma",
        "score": "200,000,000",
        "rank": "3"
    },
    {
        "name": "Discreet Dan",
        "score": "200,000,000",
        "rank": "4"
    },
    {
        "name": "Infesmati",
        "score": "200,000,000",
        "rank": "5"
    },
    {
        "name": "Bhittersweet",
        "score": "200,000,000",
        "rank": "6"
    },
    {
        "name": "[#T6VBP1NF2]",
        "score": "200,000,000",
        "rank": "7"
    },
    {
        "name": "Athymy",
        "score": "200,000,000",
        "rank": "8"
    },
    {
        "name": "Moby-950",
        "score": "200,000,000",
        "rank": "9"
    },
    {
        "name": "AdamUK",
        "score": "200,000,000",
        "rank": "10"
    }
]

var runeList = document.createElement('ol');

for(var x = 0; x < runescapeHighRanked.length; x++){
    /* let players = document.createElement('li');
    players.textContent = runescapeHighRanked[x];
    runeList.append(players); */
    runeList.innerHTML += '<li>' + runescapeHighRanked[x].name + ',  ' + runescapeHighRanked[x].score + '</li>';
    document.body.appendChild(runeList);
}

runeList.classList.add('rune-players');

runeList.style.border = "2px black solid";
runeList.style.backgroundColor = '#CDDC39';
runeList.style.fontFamily = 'Arial';
runeList.style.fontSize = '25px';



