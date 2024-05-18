// //Initial Refrences
// const letterContainer = document.getElementById("letter-container");
// const optionsContainer = document.getElementById("options-container");
// const userInputSection = document.getElementById("user-input-section");
// const newGameContainer = document.getElementById("new-game-container");
// const newGameButton = document.getElementById("new-game-button");
// const canvas = document.getElementById("canvas");
// const resultText = document.getElementById("result-text");

// //Options
// let options = {
//     fruits: [
//         "Apple",
//         "Blueberry",
//         "Mandarin",
//         "Pineapple",
//         "Pomegranate",
//         "Watermelon",
//     ], 
//     animals: ["Hedgehog", "Rhino", "Squirrel", "Dog", "Cat", "Bailey"],
//     countries: [
//         "India",
//         "America",
//         "Greece",
//         "Mexico",
//         "Sweden",
//         "Zimbabwe",
//     ],
// };

// //count
// let winCount = 0;
// let count = 0;

// let chosenWord = "";

// //Display options buttons
// const displayOptions = () => {
//     optionsContainer.innerHTML += '<h3>Please Select An Option</h3>';
//     let buttonCon = document.createElement("div");
//     for (let value in options) {
//         buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
//     }
//     optionsContainer.appendChild(buttonCon);
// };

// //Block all the Buttons
// const blocker = () => {
//     let optionsButtons = document.querySelectorAll(".options");
//     let letterButtons = document.querySelectorAll(".letters");
//     //disable all options
//     optionsButtons.forEach((button) => {
//         button.disabled = true;
//     });

//     //disable all letters
//     letterButtons.forEach((button) => {
//         button.disabled = true;
//     });
//     newGameContainer.classList.remove("hide");
// };

// //Word Generator
// const generateWord = (optionValue) => {
//     let optionsButtons = document.querySelectorAll(".options");
//     //If optionValue matches the button innerText then highlight the button
//     optionsButtons.forEach((button) => {
//         if(button.innerText.toLowerCase() === optionValue) {
//             button.classList.add("active");
//         }
//         button.disabled = true;
//     });

//     //initially hide Letters, clear previous word
//     letterContainer.classList.remove("hide");
//     userInputSection.innerText = "";

//     let optionArray = options[optionValue];
//     //choose random word
//     chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
//     chosenWord = chosenWord.toUpperCase();

//     //replace every letter with span containing dash
//     let displayItem = chosenWord.replace(/./g, '<span class = "dashes">_</span>');

//     //Display each element as span
//     userInputSection.innerHTML = displayItem;
// };

// //Initial Function  (Called when page loads/user presses new game)
// const initializer = () => {
//     winCount = 0;
//     count = 0;

//     //Initially erase all content and hide letters and new game button
//     userInputSection.innerHTML = "";
//     optionsContainer.innerHTML = "";
//     letterContainer.classList.add("hide");
//     newGameContainer.classList.add("hide");

//     //For creating letter buttons
//     for (let i = 65; i < 91; i++){
//         let button = document.createElement("button");
//         button.classList.add("letters");
//         //Number to ASCII(A-Z)\
//         button.innerText = String.fromCharCode(i);
//         //character button click
//         button.addEventListener("click", () => {
//             let charArray = chosenWord.split("");
//             let dashes = document.getElementsByClassName("dashes");
//             //if array contains clicked value replace the matched dash with letter else dram on canvas
//             if (charArray.includes(button.innerText)){
//                 charArray.forEach((char, index) => {
//                 //if character in array is same as clicked button
//                 if(char == button.innerText){
//                     //replace dash with letter
//                     dashes[index].innerText = char;
//                     //increment counter
//                     winCount += 1;
//                     //if winCount equals word length
//                     if(winCount == charArray.length){
//                         resultText.innerHTML = "<h2 class='win-msg'>You Win!</h2><p>The word was <span>${chosenWord}</span></p>";
//                         //block all buttons
//                         blocker();
//                     }
//                   }
//                 });
//             } else {
//                 //Lose count
//                 count += 1;
//                 //for drawing the man
//                 drawMan(count);
//                 //Count == 6 for head, body, left arm, right arm, left leg, right leg
//                 if(count == 6){
//                     resultText.innerHTML = "<h2 class='lose-msg'>Game Over!</h2><p>The word was <span>${chosenWord}</span><p>";
//                     blocker();
//                 }
//             }
//             // disable clicked button
//             button.disabled = true;
//         });
//         letterContainer.append(button);
//     }

//     displayOptions();
//     //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
//     let{initialDrawing} = canvasCreator();
//     //initialDrawing would draw the frame
//     initialDrawing();
// };

// //Canvas
// const canvasCreator = () => {
//     let context = canvas.getContext("2d");
//     context.beginPath();
//     context.strokeStyle = "#000";
//     context.lineWidth = 2;

//     //For drawing lines
//     const drawLine = (fromX, fromY, toX, toY) => {
//         context.moveTo(fromX, fromY);
//         context.lineTo(toX, toY);
//         context.stroke();
//     };

//     const head = () => {
//         context.beginPath();
//         context.arc(70, 30, 10, 0, Math.PI * 2, true);
//         context.stroke();
//     };

//     const body = () => {
//         drawLine(70, 40, 70, 80);
//     };

//     const leftArm = () => {
//         drawLine(70, 50, 50, 70);
//     };

//     const rightArm = () => {
//         drawLine(70, 50, 90, 70);
//     };

//     const leftLeg = () => {
//         drawLine(70, 80, 50, 110);
//     };

//     const rightLeg = () => {
//         drawLine(70, 80, 90, 110);
//     };

//     //initial frame
//     const initialDrawing = () => {
//         //clear canvas 
//         context.clearReact(0,0, context.canvas.width, context.canvas.height);
//         //bottom line
//         drawLine(10, 130, 130, 130);
//         //left line
//         drawLine(10, 10, 10, 131);
//         //top line
//         drawLine(10, 10, 70, 10);
//         //small top line
//         drawLine(70, 10, 70, 20);
//     };

//     return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
// }; 

// //draw the man
// const drawMan = (count) => {
//     let {head, body, leftArm, rightArm, leftLeg, rightLeg} = canvasCreator();
//     switch (count){
//         case 1:
//             head();
//             break;
//         case 2:
//             body();
//             break;
//         case 3:
//             leftArm
//             break;
//         case 4:
//             rightArm
//             break;
//         case 5:
//             leftLeg();
//             break;
//         case 6:
//             rightLeg();
//             break;
//         default:
//             break;
//     }
// };

// //New Game
// newGameButton.addEventListener("click", initializer);
// window.onload = initializer;

// //Initial References
// const letterContainer = document.getElementById("letter-container");
// const optionsContainer = document.getElementById("options-container");
// const userInputSection = document.getElementById("user-input-selection");
// const newGameContainer = document.getElementById("new-game-container");
// const newGameButton = document.getElementById("new-game-button");
// const canvas = document.getElementById("canvas");
// const resultText = document.getElementById("result-text");

// //Options
// let options = {
//     Brainrot: [ "Skibidi", "Rizz", "Gyat", "Edge", "Sigma", "Ohio", "TikTok", "Sus", "Mewing", "Glizzy"], 
//     animals: ["Dog", "Cat", "Squirrel", "Moose", "Bird", "Dolphin", "Shark", "Whale", "Deer", "Fox"],
//     countries: [ "India", "America", "Greece", "Mexico", "Sweden", "Ireland", "Italy", "Finland", "Germany" ],
//     colors: [ "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Black", "White" ],
// };

// //count
// let winCount = 0;
// let count = 0;

// let chosenWord = "";

// //Display options buttons
// const displayOptions = () => {
//     optionsContainer.innerHTML += '<h3>Please Select An Option</h3>';
//     let buttonCon = document.createElement("div");
//     for (let value in options) {
//         buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
//     }
//     optionsContainer.appendChild(buttonCon);
// };

// //Block all the Buttons
// const blocker = () => {
//     let optionsButtons = document.querySelectorAll(".options");
//     let letterButtons = document.querySelectorAll(".letters");
//     //disable all options
//     optionsButtons.forEach((button) => {
//         button.disabled = true;
//     });

//     //disable all letters
//     letterButtons.forEach((button) => {
//         button.disabled = true;
//     });
//     newGameContainer.classList.remove("hide");
// };

// //Word Generator
// const generateWord = (optionValue) => {
//     let optionsButtons = document.querySelectorAll(".options");
//     //If optionValue matches the button innerText then highlight the button
//     optionsButtons.forEach((button) => {
//         if(button.innerText.toLowerCase() === optionValue) {
//             button.classList.add("active");
//         }
//         button.disabled = true;
//     });

//     //initially hide Letters, clear previous word
//     letterContainer.classList.remove("hide");
//     userInputSection.innerText = "";

//     let optionArray = options[optionValue];
//     //choose random word
//     chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
//     chosenWord = chosenWord.toUpperCase();

//     //replace every letter with span containing dash
//     let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

//     //Display each element as span
//     userInputSection.innerHTML = displayItem;
// };

// //Initial Function  (Called when page loads/user presses new game)
// const initializer = () => {
//     winCount = 0;
//     count = 0;

//     //Initially erase all content and hide letters and new game button
//     userInputSection.innerHTML = "";
//     optionsContainer.innerHTML = "";
//     letterContainer.innerHTML = "";
//     letterContainer.classList.add("hide");
//     newGameContainer.classList.add("hide");

//     //For creating letter buttons (A - Z)
//     for (let i = 65; i < 91; i++){
//         let button = document.createElement("button");
//         button.classList.add("letters");
//         //Number to ASCII(A-Z)\
//         button.innerText = String.fromCharCode(i);
//         //character button click
//         button.addEventListener("click", () => {
//             let charArray = chosenWord.split("");
//             let dashes = document.getElementsByClassName("dashes");
//             //if array contains clicked value replace the matched dash with letter else draw on canvas
//             if (charArray.includes(button.innerText)){
//                 charArray.forEach((char, index) => {
//                 //if character in array is same as clicked button
//                 if(char == button.innerText){
//                     //replace dash with letter
//                     dashes[index].innerText = char;
//                     //increment counter
//                     winCount += 1;
//                     //if winCount equals word length
//                     if(winCount == charArray.length){
//                         resultText.innerHTML = `<h2 class='win-msg'>You Win!</h2><p>The word was <span>${chosenWord}</span></p>`;
//                         //block all buttons
//                         blocker();
//                     }
//                   }
//                 });
//             } else {
//                 //Lose count
//                 count += 1;
//                 //for drawing the man
//                 drawMan(count);
//                 //Count == 6 for head, body, left arm, right arm, left leg, right leg
//                 if(count == 6){
//                     resultText.innerHTML = `<h2 class='lose-msg'>Game Over!</h2><p>The word was <span>${chosenWord}</span><p>`;
//                     blocker();
//                 }
//             }
//             // disable clicked button
//             button.disabled = true;
//         });
//         letterContainer.append(button);
//     }

//     displayOptions();
//     //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
//     let {initialDrawing} = canvasCreator();
//     //initialDrawing would draw the frame
//     initialDrawing();
// };

// //Canvas
// const canvasCreator = () => {
//     let context = canvas.getContext("2d");
//     context.beginPath();
//     context.strokeStyle = "#000";
//     context.lineWidth = 2;

//     //For drawing lines
//     const drawLine = (fromX, fromY, toX, toY) => {
//         context.moveTo(fromX, fromY);
//         context.lineTo(toX, toY);
//         context.stroke();
//     };

//     const head = () => {
//         context.beginPath();
//         context.arc(70, 30, 10, 0, Math.PI * 2, true);
//         context.stroke();
//     };

//     const body = () => {
//         drawLine(70, 40, 70, 80);
//     };

//     const leftArm = () => {
//         drawLine(70, 50, 50, 70);
//     };

//     const rightArm = () => {
//         drawLine(70, 50, 90, 70);
//     };

//     const leftLeg = () => {
//         drawLine(70, 80, 50, 110);
//     };

//     const rightLeg = () => {
//         drawLine(70, 80, 90, 110);
//     };

//     //initial frame
//     const initialDrawing = () => {
//         //clear canvas 
//         context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//         //bottom line
//         drawLine(10, 130, 130, 130);
//         //left line
//         drawLine(10, 10, 10, 131);
//         //top line
//         drawLine(10, 10, 70, 10);
//         //small top line
//         drawLine(70, 10, 70, 20);
//     };

//     return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
// }; 

// //draw the man
// const drawMan = (count) => {
//     let {head, body, leftArm, rightArm, leftLeg, rightLeg} = canvasCreator();
//     switch (count){
//         case 1:
//             head();
//             break;
//         case 2:
//             body();
//             break;
//         case 3:
//             leftArm();
//             break;
//         case 4:
//             rightArm();
//             break;
//         case 5:
//             leftLeg();
//             break;
//         case 6:
//             rightLeg();
//             break;
//         default:
//             break;
//     }
// };

// //New Game
// newGameButton.addEventListener("click", initializer);
// window.onload = initializer;

document.addEventListener("DOMContentLoaded", () => {
    // Initial References
    const letterContainer = document.getElementById("letter-container");
    const optionsContainer = document.getElementById("options-container");
    const userInputSection = document.getElementById("user-input-selection");
    const newGameContainer = document.getElementById("new-game-container");
    const newGameButton = document.getElementById("new-game-button");
    const canvas = document.getElementById("canvas");
    const resultText = document.getElementById("result-text");

    // Options
    const options = {
        Brainrot: ["Skibidi", "Rizz", "Gyat", "Edge", "Sigma", "Ohio", "TikTok", "Sus", "Mewing", "Glizzy"], 
        animals: ["Dog", "Cat", "Squirrel", "Moose", "Bird", "Dolphin", "Shark", "Whale", "Deer", "Fox", "Monarch"],
        countries: ["India", "America", "Greece", "Mexico", "Sweden", "Ireland", "Italy", "Finland", "Germany"],
        colors: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Black", "White"],
    };

    let winCount = 0;
    let count = 0;
    let chosenWord = "";

    // Display options buttons
    const displayOptions = () => {
        optionsContainer.innerHTML = '<h3>Please Select An Option</h3>';
        const buttonCon = document.createElement("div");
        for (const category in options) {
            const button = document.createElement("button");
            button.classList.add("options");
            button.textContent = category;
            button.addEventListener("click", () => generateWord(category));
            buttonCon.appendChild(button);
        }
        optionsContainer.appendChild(buttonCon);
    };

    // Block all buttons
    const blocker = () => {
        document.querySelectorAll(".options, .letters").forEach(button => button.disabled = true);
        newGameContainer.classList.remove("hide");
    };

    // Word generator
    const generateWord = (category) => {
        document.querySelectorAll(".options").forEach(button => {
            if (button.textContent.toLowerCase() === category) {
                button.classList.add("active");
            }
            button.disabled = true;
        });

        letterContainer.classList.remove("hide");
        userInputSection.innerText = "";

        const optionArray = options[category];
        chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)].toUpperCase();

        userInputSection.innerHTML = chosenWord.replace(/./g, '<span class="dashes">_</span>');
    };

    // Initializer function
    const initializer = () => {
        winCount = 0;
        count = 0;

        userInputSection.innerHTML = "";
        optionsContainer.innerHTML = "";
        letterContainer.innerHTML = "";
        letterContainer.classList.add("hide");
        newGameContainer.classList.add("hide");

        for (let i = 65; i <= 90; i++) {
            const button = document.createElement("button");
            button.classList.add("letters");
            button.textContent = String.fromCharCode(i);
            button.addEventListener("click", () => handleLetterClick(button));
            letterContainer.appendChild(button);
        }

        displayOptions();
        canvasCreator().initialDrawing();
    };

    // Handle letter click
    const handleLetterClick = (button) => {
        const charArray = chosenWord.split("");
        const dashes = document.getElementsByClassName("dashes");

        if (charArray.includes(button.textContent)) {
            charArray.forEach((char, index) => {
                if (char === button.textContent) {
                    dashes[index].textContent = char;
                    winCount++;
                }
            });

            if (winCount === charArray.length) {
                resultText.innerHTML = `<h2 class='win-msg'>You Win!</h2><p>The word was <span>${chosenWord}</span></p>`;
                blocker();
            }
        } else {
            count++;
            drawMan(count);
            if (count === 6) {
                resultText.innerHTML = `<h2 class='lose-msg'>Game Over!</h2><p>The word was <span>${chosenWord}</span></p>`;
                blocker();
            }
        }

        button.disabled = true;
    };

    // Canvas Creator
    const canvasCreator = () => {
        const context = canvas.getContext("2d");
        context.strokeStyle = "#000";
        context.lineWidth = 2;

        const drawLine = (fromX, fromY, toX, toY) => {
            context.beginPath();
            context.moveTo(fromX, fromY);
            context.lineTo(toX, toY);
            context.stroke();
        };

        const initialDrawing = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawLine(10, 130, 130, 130);
            drawLine(10, 10, 10, 131);
            drawLine(10, 10, 70, 10);
            drawLine(70, 10, 70, 20);
        };

        const head = () => {
            context.beginPath();
            context.arc(70, 30, 10, 0, Math.PI * 2, true);
            context.stroke();
        };
        const body = () => drawLine(70, 40, 70, 80);
        const leftArm = () => drawLine(70, 50, 50, 70);
        const rightArm = () => drawLine(70, 50, 90, 70);
        const leftLeg = () => drawLine(70, 80, 50, 110);
        const rightLeg = () => drawLine(70, 80, 90, 110);

        return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
    };

    // Draw the man
    const drawMan = (count) => {
        const parts = ["head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];
        const { [parts[count - 1]]: drawPart } = canvasCreator();
        drawPart();
    };

    // Handle keyboard input
    const handleKeyboardInput = (event) => {
        const key = event.key.toUpperCase();
        if (key >= 'A' && key <= 'Z') {
            const button = Array.from(document.querySelectorAll(".letters")).find(btn => btn.textContent === key);
            if (button && !button.disabled) {
                handleLetterClick(button);
            }
        }
    };

    // Add keyboard event listener
    window.addEventListener("keydown", handleKeyboardInput);

    newGameButton.addEventListener("click", initializer);
    initializer();
});

