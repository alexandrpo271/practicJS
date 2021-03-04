const age = prompt ('Укажите ваш возаст');
const gender = confirm ('Если ваш пол мужской, нажмите "ОК"');


if ( age > 60 && gender === true ) {
    console.log('Вы дедушка')
}
else if ( age > 19 && gender === true ) {
    console.log('Вы мужчина')
}
else if ( age > 11 && gender === true ) {
    console.log('Вы юноша')
}
else if ( age <=11 && gender === true ) {
    console.log('Вы мальчик')
}
if ( age > 60 && gender === false ) {
    console.log('Вы бабушка')
}
else if ( age > 19 && gender === false ) {
    console.log('Вы женщина')
}
else if ( age > 11 && gender === false ) {
    console.log('Вы девушка')
}
else if ( age <=11 && gender === false ) {
    console.log('Вы девочка')
}