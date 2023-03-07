
let btn = document.getElementById('btn')

const dadJokes = [
    {
        question: "What did one pirate say to the other when he beat him at chess?",
        answer: "Checkmatey"
    },
    {
        question: "Why did I quit my job at the coffee shop the other day?",
        answer: "It was just the same old grind over and over"
    },
    {
        question: "Why should you never buy anything that has Velcro with it?",
        answer: "It's a total rip-off"
    },
    {
        question: "What is the most groundbreaking invention of all time?",
        answer: "The shovel"
    },
    {
        question: "Did you hear about the famous Italian chef that recently died?",
        answer: "He pasta way"
    },
    {
        question: "What kind of music do astronauts listen to?",
        answer: "Neptunes"
    },
    {
        question: "What do you call Santa’s little helpers?",
        answer: "Subordinate clauses"
    },
    {
        question: "What’s the difference between a hippo and a zippo?",
        answer: "Ones a little lighter"
    },
    {
        question: "Where did Captain Hook get his hook?",
        answer: "From the second-hand store"
    },
    {
        question: "Why did Shakespeare’s wife leave him?",
        answer: "She got sick of all the drama"
    },
    {
        question: "Why should you never write with a dull pencil?",
        answer: "It's pointless"
    },
    {
        question: "How do you get a job at the moisturizer factory?",
        answer: "Apply daily"
    },
    {
        question: "Why did the scarecrow win an award?",
        answer: "Because he was outstanding in his field"
    },
    {
        question: "Did you hear about the cheese factory that exploded in France?",
        answer: "There was nothing left but de Brie"
    },
    {
        question: "What do you get when you cross a snowman with a vampire?",
        answer: "Frostbite"
    },
    {
        question: "Why did the tomato turn red?",
        answer: "Because it saw the salad dressing!"
    },
    {
        question: "Why do chicken coops only have two doors?",
        answer: "Because if they had four, they would be a chicken sedan!"
    },
    {
        question: "Why don't scientists trust atoms?",
        answer: "Because they make up everything!"
    },
    {
        question: "Why couldn't the bicycle stand up by itself?",
        answer: "Because it was two-tired!"
    },
    {
        question: "What do you call a fake noodle?",
        answer: "An impasta!"
    },
    {
        question: "What do you call a can opener that doesn't work?",
        answer: "A can't opener!"
    },
    {
        question: "Why don't oysters share their pearls?",
        answer: "Because they're shellfish!"
    },
    {
        question: "Why did the math book look sad?",
        answer: "Because it had too many problems!"
    },
    {
        question: "What did the janitor say when he jumped out of the closet?",
        answer: "Supplies!"
    },
    {
        question: "Why did the chicken go to the seance?",
        answer: "To talk to the other side!"
    }
];


const responses = [
    "Come on! Take a guess next time,",
    "Why didn't you have a go?",
    "Don't be shy, take a guess next time!",
    "It's okay to be wrong, but it's better to take a guess!",
    "You miss 100% of the shots you don't take.",
    "There's no harm in guessing!",
    "You never know, your guess could be right!"
];

let answerBox = document.getElementById('answerBox')
let answer = ''
let points = 0

const makeJoke = joke => {
    const random = Math.floor(Math.random() * dadJokes.length)
    let randomJoke = dadJokes[random]
    document.getElementById("dadJokeQuestion").innerHTML = 'Question:' + ' ' + randomJoke.question
    answer = randomJoke.answer
    answerBox.value = ''
}

const checkJoke = checkJoke => {
    let userGuess = answerBox.value
    if (answer.toLowerCase() === userGuess.toLowerCase()) {
        document.getElementById("dadJokeResult").innerHTML = 'Good work you got it!'


    } else if (userGuess === '') {
        let randomResponse = Math.floor(Math.random() * responses.length)
        document.getElementById("dadJokeResult").innerHTML = responses[randomResponse] + "<br>" + 'The answer was: ' + answer


    } else document.getElementById("dadJokeResult").innerHTML = 'You need to brush up on your dad jokes' + "<br>" + 'The answer was:' + ' ' + answer

}

const clearJoke = clearJoke => {
    document.getElementById("dadJokeQuestion").innerHTML = 'Question:'
    document.getElementById("dadJokeResult").innerHTML = 'Answer:'
    answerBox.value = ''
}