// Array of objects containing Would You Rather questions and their answers// Array of objects containing Would You Rather questions and their answers
const questions = [
    {
        'question': 'Live in a house shaped like a triangle or a house shaped like a circle?',
        'answer1': 'Triangle house',
        'answer2': 'Circle house'
    },
    {
        'question': 'Have a cat-sized elephant or an elephant-sized cat?',
        'answer1': 'Cat-sized elephant',
        'answer2': 'Elephant-sized cat'
    },
    {
        'question': 'Be able to fly or be able to breathe underwater?',
        'answer1': 'Fly',
        'answer2': 'Breath underwater'
    },
    {
        'question': 'Play any musical instrument or speak any language?',
        'answer1': 'Play any musical instrument',
        'answer2': 'Speak any language'
    },
    {
        'question': 'Be a famous movie star or a famous scientist?',
        'answer1': 'Famous movie star',
        'answer2': 'Famous scientist'
    },
]
// Function to get a random Would You Rather question from the 'questions' array
function randomWyrQuestion() {
    // Generate a random index within the range of the 'questions' array length
    const randomIndex = Math.floor(Math.random() * questions.length)
    // Get the question object at the randomly generated index
    const randomQuestion = questions[randomIndex]
    // Return the randomly chosen question object
    return randomQuestion
}
// Export the randomWyrQuestion function so it can be used in other files
module.exports = randomWyrQuestion
