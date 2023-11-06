const words = [
   
    

]

function getWord(word, dir) {
    let index = Math.ceil(Math.random() * (words.length - 1))
    if (word) {
        const wordIndex = words.findIndex(item => item.word === word)
        index = wordIndex + dir
        if (index < 0) {
            index = words.length - 1
        }
        if (index >= words.length) {
            index = 0
        }
    }

    return words[index]
}