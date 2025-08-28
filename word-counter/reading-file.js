const fs = require("fs")

const data = fs.readFileSync("profile.txt", "utf8");

const lines = data.split("\n")
const words = data.split(" ")
const chars = data.split("")

totalLines = 0
totalWords = 0
totalChars = 0

function fileCounter(){
    for (line of lines){
        totalLines += 1
    };

    for (word of words){
        totalWords += 1
    };

    for (char of chars){
        totalChars += 1 
    }
    console.log(`The total number of lines in this file is ${totalLines}`)
    console.log(`The total number of words in this file is ${totalWords}`)
    console.log(`The total number of characters in this file is ${totalChars}`)
}

fileCounter()