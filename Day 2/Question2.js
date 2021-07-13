// Day 2 Assignment
//Question 2
//Find palindrome words in a given string.

  
let str = " radar is on its peak level "
let str1 = "",
    str2 = ""
for (t of str) {
    if (t != " ") {
        str2 = str2 + t
        str1 = t + str1
    } else {
        if (str1 == str2) console.log(str1)
        str1 = ""
        str2 = ""
    }
}