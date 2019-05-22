var user = {};

function userProfile() {
var userSurname,
    userName,
    userLastname,
    userAge,
    userGender,
    isUserRetired;

  do {
    userSurname = prompt('Ваша фамилия?', '');
  } while (+userSurname == 0);

  do {
    userName = prompt('Ваше имя?', '');
  } while (+userName == 0);

  do {
    userLastname = prompt('Ваше отчество?', '');
  } while (+userLastname == 0);

  do {
    userAge = +prompt('Ваш возраст?', '');
  } while (isNaN(userAge) || (userAge == 0));

  userGender = confirm('Ваш пол - женский?') ? 'Женский' : 'Мужской';

  switch (userGender) {
    case ('Женский'):
      isUserRetired = (userAge < 60) ? 'нет' : 'да';
      break;
    case ('Мужской'):
      isUserRetired = (userAge < 65) ? 'нет' : 'да';
  }

  alert('Ваша ФИО : ' + ' ' + userSurname + ' ' + userName + ' ' + userLastname +
    '\nваш возраст в годах: ' + userAge +
    '\nваш возраст в днях: ' + (userAge * 365) +
    '\nчерез 5 лет вам будет: ' + (userAge + 5) +
    '\nваш пол - ' + userGender +
    '\nвы на пенсии: ' + isUserRetired);

  user.name = userName;
  user.surname = userSurname;
  user.lastName = userLastname;
  user.age = userAge;
  user.gender = userGender;
  user.Retired = isUserRetired;
  return user;

}

userProfile();
