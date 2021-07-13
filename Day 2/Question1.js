//Day 2 Assignmnet
//Question 1
//Fizz Buzz problem

for (j = 1; j <= 100; j++) {
    a = j / 15
    b = j / 3
    c = j / 5
    if (Number.isInteger(a)) {
        console.log("FizzBuzz")
    } else if (Number.isInteger(b)) {
        console.log("Fizz")
    } else if (Number.isInteger(c)) {
        console.log("Buzz")
    } else {
        console.log(j)
    }
}