export const shuffle = arr => {
    let shuffled = []

    while (arr.length !== 0) {
        let randomIndex = Math.floor(Math.random() * arr.length)
        shuffled.push(arr[randomIndex])
        arr.splice(randomIndex, 1)
    }

    return shuffled
}
