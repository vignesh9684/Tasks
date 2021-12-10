let arrayPallindrome = [111, 102, 505, 323, 612, 776, 707, 121]

console.log("Pallindrome Numbers in array are: " +
    arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false

    }))