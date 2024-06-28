let gameBoard = document.querySelector('.board');
let resetButton = document.querySelector('.button');
let gameCharacters = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
let selectedValues = [];
let totalPair = gameCharacters.length / 2;
let matchedPair = 0;
let values = gameCharacters.sort(() => Math.random() - 0.5);
values.forEach((item, index) => {
    let card = document.createElement('div');
    card.className = 'card';
    card.textContent = item;
    gameBoard.append(card);

    card.addEventListener("click", flip);

});

function flip() {
    this.classList.toggle('flip');   //it will add flip class if there is not one and remove if there is already present.
    // console.log(this);
    selectedValues.push(this);
    if (selectedValues.length == 2) {
        //   checkForMatch();
        setTimeout(checkForMatch, 500);
    }
}


function checkForMatch() {
    if (selectedValues[0].textContent === selectedValues[1].textContent) {

        matchedPair++;
        if (matchedPair == totalPair) {
            alert("YOU WON MF.");
        }


        selectedValues[0].removeEventListener("click", flip);
        selectedValues[1].removeEventListener("click", flip);
    }
    else {
        selectedValues[0].classList.remove('flip');
        selectedValues[1].classList.remove('flip');
    }
    selectedValues = [];
}

resetButton.addEventListener('click', function () {
    window.location.reload();
});