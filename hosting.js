//due to hosting function decleration will be call first as it
//is gets memory assigned in memory creation phase whereas var will undefined
greetings()
var greeting = function(){
    console.log('First Greetings')
}
//at this point var greetings has overwritten the previous greetings because it has the same name so first greeting will be printed
greetings()
function greetings (){
    console.log('second Greettings')
}
greetings()