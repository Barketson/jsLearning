function HashStore() {
  this.name = name;

  var _hash = {};

  this.addValue = function (key, value, addInfo) {

    if ((+key != 0) && (+value != 0) && (+addInfo != 0) && (!(key in _hash))) {
      let _info = {
        type: value,
        recipt: addInfo,
      };
      _hash[key] = _info;
      alert('Напиток успешно добавлен =)');
    } else if (key in _hash) {
      alert('Данный напиток уже существует')
    } else {
      alert('Ошибка, не все поля заполнены!')
    }
  };

  this.deleteValue = function (key) {
    if (key in _hash) {
      delete _hash[key];
      alert('Напиток удален');
      return console.log(true);
    } else {
      alert('Такого напитка не найдено =( ');
      return console.log(false);
    }
  }

  this.getValue = function (key) {
    if (key in _hash) {
      alert(key + '\n' + 'Тип напитка: ' + (_hash[key]).type + '\nРецепт: ' + (_hash[key]).recipt);
      return console.log(_hash[key]);
    } else {
      alert('Такого напитка не найдено =( ');
      return console.log(undefined);
    };
  }

  this.getKeys = function () {
    if ((Object.keys(_hash)) != 0) {
      alert('Перечень добавленных напитков: ' + Object.keys(_hash));
      return console.log(Object.keys(_hash));
    } else {
      alert("Нет сохраненных напитков =(")
    }
  }
};

var drinkStorage = new HashStore;