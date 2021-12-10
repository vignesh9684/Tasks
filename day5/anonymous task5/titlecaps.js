let stringArray = ["girish", 'raghavan', 'is', 'very', 'dangerous']

let resultStringArray = (function (stringArray) {

    return (stringArray.map((item) => {

        return item.toUpperCase()

    }))
})(stringArray);

console.log("All upper case string in an array: " + resultStringArray)