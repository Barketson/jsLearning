function anketa() {
    do {
    var surname = prompt('Ваша фамилия?','');
    } while (+surname == 0);
    do {
    var named = prompt('Ваше имя?','');
    } while (+named == 0);
    do {
    var patr = prompt('Ваше отчество?','');
    } while (+patr == 0);
    do {
    var age = prompt('Ваш возраст?','');
    } while (isNaN(+age) || (+age == 0));
    var gen = confirm('Ваш пол - женский?');
    (gen == true) ? gen = 'Женский' : gen = 'Мужской' ;
    var pension;
    switch (gen) {
        case ('Женский') :
            (age < 60) ? pension = 'нет' : pension = 'да';
            break;
        case ('Мужской') :
            (age < 65) ? pension = 'нет' : pension = 'да';
    }
    alert('Ваша ФИО : ' + ' ' + surname + ' ' + named + ' ' + patr + '\nваш возраст в годах: ' + age + '\nваш возраст в днях: ' + (age*365) + '\nчерез 5 лет вам будет: ' + (+age + 5) + '\nваш пол - ' + gen + '\nвы на пенсии: ' + pension);
}
anketa();