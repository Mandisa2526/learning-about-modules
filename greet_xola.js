import chalk from 'chalk';
import figlet from 'figlet';
import greet from './greet.js'


const greetXolaFiglet = greet('Xola');
figlet(greetXolaFiglet,function(err,asciiArt){
    if(err){
        console("error generating asciiArt:",err);
        return; 
    }


const styledMessage = chalk.bgGreen.black(greet(asciiArt));
console.log(styledMessage);

});


