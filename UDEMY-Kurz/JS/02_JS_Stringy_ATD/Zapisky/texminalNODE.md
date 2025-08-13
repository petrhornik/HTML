PS C:\Users\petrh> node
Welcome to Node.js v22.17.0.
Type ".help" for more information.
> let string = "hello"
undefined
> console.log(string)
hello
undefined
> let quotesTest = 'Hello my name is "NAME"'
undefined
> console.log(quotesTest)
Hello my name is "NAME"
undefined
> let text = "toto je nějaký random text"
undefined
> text[9]
'ě'
> text[22]
't'
> text.length
26
> const message = "    TASTE THE RAINBOW!  ";
undefined
> let whisper = message.trim().toLowerCase();
undefined
> whisper
'taste the rainbow!'
> let count = "Ahoj".length
undefined
> count
4
> "1" + 1
'11'
> "1" - 1
0
> "30" - 2
28
> hello.concat(whisper)
Uncaught ReferenceError: hello is not defined
> text.concat(whisper)
'toto je nějaký random texttaste the rainbow!'
> let firstName = "Petr"
undefined
> let lastName = "Horník"
undefined
> firstName + " " + lastName
'Petr Horník'
> const fullName = firstName + " " + lastName
undefined
> fullName
'Petr Horník'
> let msg = "toto je nějakej text kterej píšu skoro ve 2 ráno :DD"
undefined
> let upper = msg.toUpperCase()
undefined
> upper
'TOTO JE NĚJAKEJ TEXT KTEREJ PÍŠU SKORO VE 2 RÁNO :DD'
> let mezera = "                a                 "
undefined
> mezera
'                a                 '
> mezera.trim
[Function: trim]
> mezera.trim()
'a'
> let mezeraGone = mezera.trim()
undefined
> mezera.trim()
'a'
> mezeraGone
'a'
> mezera.trim().toUpperCase()
'A'
> text.searchFor('a')
Uncaught TypeError: text.searchFor is not a function
> text.search('a')
11
> text[11]
'a'
> text = "toto je text"
'toto je text'
> text.indexOf("j")
5
> text.indexOf("e tex")
6
> text.slice(1,6)
'oto j'
> text.replace("text", "slepice")
'toto je slepice'
> let message = "oh my god... WOW!"
Uncaught SyntaxError: Identifier 'message' has already been declared
> let messageMEME = "oh my god... WOW!"
undefined
> messageMEME.relpace("god...", "ITS TIME TO STOP!")
Uncaught TypeError: messageMEME.relpace is not a function
> messageMEME.relpace("god...", "ITS TIME TO STOP!")
> let pozdrav = "Ahoj".repeat(3)
undefined
> pozdrav
'AhojAhojAhoj'