const questions = {
    geography: [
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "Which river runs through Egypt?", answer: "Nile" },
        { question: "What is the largest desert in the world?", answer: "Sahara" },
        { question: "Which country has the most islands?", answer: "Sweden" },
        { question: "What is the smallest country in the world?", answer: "Vatican City" },
        { question: "Which continent is the largest?", answer: "Asia" },
        { question: "What is the longest river in the world?", answer: "Amazon" },
        { question: "Which country is known as the Land of the Rising Sun?", answer: "Japan" },
        { question: "What is the highest mountain in the world?", answer: "Everest" },
        { question: "Which ocean is the largest?", answer: "Pacific" }
    ],
    history: [
        { question: "Who was the first President of the United States?", answer: "George Washington" },
        { question: "In which year did World War II end?", answer: "1945" },
        { question: "Who discovered America?", answer: "Christopher Columbus" },
        { question: "Which ancient civilization built the pyramids?", answer: "Egyptians" },
        { question: "Who was known as the Maid of Orléans?", answer: "Joan of Arc" },
        { question: "Which war was fought between the North and South regions in the United States?", answer: "Civil War" },
        { question: "Who was the first man to walk on the moon?", answer: "Neil Armstrong" },
        { question: "Which empire was ruled by Julius Caesar?", answer: "Roman Empire" },
        { question: "Who was the British Prime Minister during World War II?", answer: "Winston Churchill" },
        { question: "In which year did the Titanic sink?", answer: "1912" }
    ],
    biology: [
        { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
        { question: "What is the process by which plants make their food?", answer: "Photosynthesis" },
        { question: "What is the largest organ in the human body?", answer: "Skin" },
        { question: "Which blood cells fight infections?", answer: "White blood cells" },
        { question: "What is the basic unit of life?", answer: "Cell" },
        { question: "Which organ is responsible for pumping blood?", answer: "Heart" },
        { question: "What is the human body's largest bone?", answer: "Femur" },
        { question: "Which part of the plant conducts photosynthesis?", answer: "Leaf" },
        { question: "What is the genetic material in cells?", answer: "DNA" },
        { question: "Which animal is known for its long neck?", answer: "Giraffe" }
    ],
    music: [
        { question: "Who is known as the King of Pop?", answer: "Michael Jackson" },
        { question: "Which band released the album 'Abbey Road'?", answer: "The Beatles" },
        { question: "Who is the lead singer of the band Queen?", answer: "Freddie Mercury" },
        { question: "Which singer is known as the 'Material Girl'?", answer: "Madonna" },
        { question: "What is the title of the song that begins with 'Is this the real life? Is this just fantasy?'?", answer: "Bohemian Rhapsody" },
        { question: "Which artist released the hit song 'Rolling in the Deep'?", answer: "Adele" },
        { question: "Who is the composer of the 'Four Seasons'?", answer: "Vivaldi" },
        { question: "Which band is known for the song 'Stairway to Heaven'?", answer: "Led Zeppelin" },
        { question: "Who is the lead singer of the band U2?", answer: "Bono" },
        { question: "Which artist is known for the album 'Thriller'?", answer: "Michael Jackson" }
    ]
};

let currentQuestion;

// Initialize the score variable
let score = 0;

// Event listener for the "Go" button to start the first question
document.getElementById("start").addEventListener("click", () => {
    const topic = document.getElementById("topic").value;
    const chatbox = document.getElementById("messages");
    currentQuestion = questions[topic][Math.floor(Math.random() * questions[topic].length)];

    // Display the first question
    chatbox.innerHTML = `<div>Question: ${currentQuestion.question}</div>`;
});

// Event listener for the "Send" button to check the user's answer
document.getElementById("send").addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value.trim();
    const chatbox = document.getElementById("messages");

    // Display the user's answer
    chatbox.innerHTML += `<div>Your Answer: ${userInput}</div>`;

    // Check if the answer is correct
    if (userInput.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        chatbox.innerHTML += `<div>Response: Success!</div>`;
        score++; // Increment the score if the answer is correct
    } else {
        chatbox.innerHTML += `<div>Response: Try again!</div>`;
    }

    // Update the score display
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("userInput").value = ""; // Clear the input field
});
