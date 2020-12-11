function vowels(letter) {
    letter = letter.toLowerCase()
    const vowel = 'аяоёуюэеыиАЯОЁЭЕУЮЫИ'
    let result = 0
    for(let i = 0; i < letter.length; i++) {
        for(let x = 0; x < vowel.length; x++) {
            if(letter[i] === vowel[x]) {
                result++
            }
        }
    }
    return result
}