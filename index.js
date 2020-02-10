const Calendar = require("./Calendar")

function gitEffect(usersText, language){
    let gitCalendar = new Calendar(usersText, language)
    gitCalendar.calendar()
}

module.exports = gitEffect;

