function speak(line){
    console.log("The " + this.type + " rabbit says '" + line + "'");
}

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ear and whiskers, " + "how late it's getting!")
fatRabbit.speak("I could sure use a carrot right now");