import {franc} from "franc";
import langs from "langs";
import colors from "colors";


const sentence = process.argv[2].toString();
const guess = franc(sentence, {minLength: sentence.length});

if (guess == "und"){
    console.log("\nNedokážu zjistit jazyk :(\n".red)
} else{
    try{
        const langName = langs.where("3", guess).name;
        console.log("\nNejpravděpodobněji se jedná o:", langName.green, "\n")
    }catch({err, undefined}){
        console.log("\nA jéje, zkratka".red, guess.yellow, "není v package langs známa :(\n".red)
    }
}

