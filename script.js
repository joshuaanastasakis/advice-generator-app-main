function updateAdviceID(newID) {
    let id = document.getElementById("advice-id");
    id.innerHTML = "ADVICE #"+newID;
}

function updateAdviceText(newText) {
    let text = document.getElementById("advice-text");
    text.innerHTML = "\"" + newText + "\"";
}

function updateAdvice() {
    console.log("in updateAdvice function")
    const rand = Math.floor(Math.random() * 224);
    let response = fetch(`https://api.adviceslip.com/advice/${rand}`)
        .then(res => res.json())
        .then(data => {
            const slip = data.slip;
            console.log(slip);
            updateAdviceID(slip.id);
            updateAdviceText(slip.advice);
        })
        .catch(e => {
            console.log(e);
        });
    return {id: 0, advice: "advice text"}
}

// 224 advices found

updateAdvice();

let button = document.querySelector(".dice-container");
button.addEventListener('click', e => {
    updateAdvice();
})