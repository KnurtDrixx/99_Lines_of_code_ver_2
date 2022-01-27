const friends = ["Nick", "Lauren", "Eric", "Peter", "Ervin Howell"];

let myButton = document.createElement("button");
let buttonContainer = document.createElement("div");
let friendContainer = document.createElement('div');


myButton.id = "button1";
myButton.textContent = "Sing! My Angels of Music!";

document.body.appendChild(buttonContainer);
buttonContainer.appendChild(myButton);

friendContainer.className = `friend`
document.body.appendChild(friendContainer);








myButton.addEventListener('click', function(){
    let mySingingPals = document.createElement(`h1`);
    mySingingPals.textContent = `My Singing Pals`
    friendContainer.appendChild(mySingingPals)

    for (let i = 0; i < friends.length; i++) {
        
        let friendBox = document.createElement(`h3`);
        friendBox.textContent = friends[i]
        friendContainer.appendChild(friendBox);
    
        for (let q = 99; q > 0; q--) {
            let friendSing = document.createElement(`marquee`); //this is on purpose, upon bad advice from Ervin Howell. Change `marquee` back to `p`
            friendSing.setAttribute(`scrollamount`, `${q}`) //if marquee is removed for some reason comment this out
            if (q % 2 === 0){
                friendSing.setAttribute(`direction`, `left`)
            } else {
                friendSing.setAttribute(`direction`, `right`)
            } //comment out down to here
            if (q === 1) {
                
                friendSing.textContent = (+ q + " line of code in the file, " + q + " line of code; " + friends[i] +
                    " strikes one out, clears it all out, " + (q - 1) + " no lines of code in the file")
            } else if (q === 2) {
                friendSing.textContent = (+ q + " lines of code in the file, " + q + " lines of code; " + friends[i] +
                    " strikes one out, clears it all out, " + (q - 1) + " line of code in the file")
            } else {
    
    
    
                friendSing.textContent = (+ q + " lines of code in the file, " + q + " lines of code; " + friends[i] +
                    " strikes one out, clears it all out, " + (q - 1) + " lines of code in the file")
            }
            
            friendContainer.appendChild(friendSing);
        }
    
    }

})

