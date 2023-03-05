
let btn = document.getElementById('btn')

const dadJokes = [
    {
        "question": "What did one pirate say to the other when he beat him at chess?",
        "answer": "Checkmatey"
    },
    {
        "question": "Why did I quit my job at the coffee shop the other day?",
        "answer": "It was just the same old grind over and over."
    },
    {
        "question": "Why should you never buy anything that has Velcro with it?",
        "answer": "It's a total rip-off."
    },
    {
        "question": "What is the most groundbreaking invention of all time?",
        "answer": "The shovel."
    },
    {
        "question": "Did you hear about the famous Italian chef that recently died?",
        "answer": "He pasta way."
    },
    {
        "question": "What kind of music do astronauts listen to?",
        "answer": "Neptunes."
    },
    {
        "question": "What do you call Santa’s little helpers?",
        "answer": "Subordinate clauses."
    },
    {
        "question": "What’s the difference between a hippo and a zippo?",
        "answer": "One is extremely big and heavy, and the other is a little lighter."
    },
    {
        "question": "Where did Captain Hook get his hook?",
        "answer": "From the second-hand store."
    },
    {
        "question": "Why did Shakespeare’s wife leave him?",
        "answer": "She got sick of all the drama."
    },
    {
        "question": "Why should you never write with a dull pencil?",
        "answer": "It's pointless."
    },
    {
        "question": "How do you get a job at the moisturizer factory?",
        "answer": "Apply daily."
    },
    {
        "question": "Why did the scarecrow win an award?",
        "answer": "Because he was outstanding in his field."
    },
    {
        "question": "Did you hear about the cheese factory that exploded in France?",
        "answer": "There was nothing left but de Brie."
    },
    {
        "question": "What do you get when you cross a snowman with a vampire?",
        "answer": "Frostbite"
    }
]

let answerBox = document.getElementById('answerBox')

const makeJoke = joke => {
    const random = Math.floor(Math.random() * dadJokes.length)
    let randomJoke = dadJokes[random]
    document.getElementById("dadJokeQuestion").innerHTML = 'Question:' + ' ' + randomJoke.question
    document.getElementById("dadJokeResult").innerHTML = 'Answer:' + ' ' + randomJoke.answer
}

const clearJoke = clearJoke => {
    document.getElementById("dadJokeQuestion").innerHTML = 'Question:'
    document.getElementById("dadJokeResult").innerHTML = 'Answer:'
}