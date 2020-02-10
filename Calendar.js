moment = require('moment');
const fs = require("fs");
const alphabet = require("./alphabet")



class Calendar {
constructor(text, language) {
    this.text = text;
    this.language = language;
}
calendar(){
    moment.locale(this.language);
    let a = new Date();
    let weekDay = new Date().getDay()
    let startWord = 0;

    if (weekDay === 1) {
        startWord = 144;
    } else if (weekDay === 2) {
        startWord = 120;
    } else if (weekDay === 3) {
        startWord = 96;
    } else if (weekDay === 4) {
        startWord = 72;
    } else if (weekDay === 5) {
        startWord = 48;
    } else if (weekDay === 6) {
        startWord = 24;
    }

    let text = this.text
    let universWord = text.toUpperCase();
    let arr1 = universWord.split('')
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === ' ') {
            arr1[i] = 'SPACE';
        } else if (arr1[i] === '!') {
            arr1[i] = 'EXLAMARK';
        } else if (arr1[i] === '?') {
            arr1[i] = 'QUESTMARK';
        } else if (arr1[i] === '.') {
            arr1[i] = 'POINT';
        } else if (arr1[i] === '#') {
            arr1[i] = 'SPIDER';
        } else if (arr1[i] === '+') {
            arr1[i] = 'HEART';
        } else if (arr1[i] === '@') {
            arr1[i] = 'CAT';
        } else if (arr1[i] === '*') {
            arr1[i] = 'FACE';
        } else if (arr1[i] === '$') {
            arr1[i] = 'PACMAN';
        } else if (arr1[i] === '^') {
            arr1[i] = 'HOUSE';
        }
    }
    let writeText ='Hello, friend! ;-)'  + `\n\n` + 'This is your creative calendar!' + `\n` + 'Don\'t forget to work in Github these days:'+ '\n\n';

    for (let i = 0; i < arr1.length; i++) {
        for (let key in alphabet) {
            if (arr1[i] === key) {
                time(alphabet[key])
            }
        }
    }

  function time(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[0] === 'SPACE') {
                console.log('SPACE')
                console.log('-----------------')
                writeText = writeText + 'SPACE' + `\n` + '-----------------';
                startWord = startWord + 168;
                break
            }

            if (i === 0) {
                console.log(arr[i]);
                writeText = writeText + arr[i] + `\n`;
            } else if (i === arr.length - 1) {
                console.log('-----------------')
                writeText = writeText + '-----------------' + `\n`;
                startWord = startWord + arr[i] + 168;
            } else {
                let startWord1 = startWord
                startWord1 = startWord1 + arr[i];
                let m = new Date(new Date(new Date().getTime() + startWord1 * 60 * 60 * 1000));
                console.log(moment(m).format('dddd, DD MMMM YYYY'));
              writeText = writeText +  moment(m).format('dddd, DD MMMM YYYY') + `\n`;
            }
        }
    }
    writeText = writeText  + `\n` +  'Enjoy using' + `\n` + `© iGorG, 2020`;
    fs.writeFile('git-effect.txt', writeText, function () {
        console.log("Calendar recording сomplete! © iGorG");
    });
}
}
module.exports = Calendar;




