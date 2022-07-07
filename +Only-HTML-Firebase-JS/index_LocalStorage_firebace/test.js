function Test() {
  for (i = 0; i < 100; i++) {
    maxinn = 999999999999;
    mininn = 1000000000;
    maxPrice = 8000;
    minPrice = 10;

    const words = [
      "Кошка",
      "Собака",
      "Трактор",
      "Компьютер",
      "Стеллаж",
      "Ручка",
      "Нож",
      "Автомат",
      "Танк",
      "Дверь",
      "Телефон",
      "Монитор",
      "Сайт",
      "USB провод",
      "Коробка",
      "Автомобиль",
      "Наушники",
      "Кружка",
      "Обруч",
      "Гиря",
      "Книга",
      "Ноутбук"
    ];

    const word = words[Math.floor(Math.random() * (words.length + 1))];

    if (checkEAN(i) == 0) {
      // WScript.Echo(i, " no ean ", checkEAN(i));
    } else {
      // WScript.Echo(i, " ean!!! ", checkEAN(i));
      J = {
        EAN: i,
        INN: Math.floor(Math.random() * (maxinn - mininn + 1)) + mininn,
        Price:
          Math.floor(Math.random() * (maxPrice - minPrice + 10)) + minPrice,
        Name: word,
        Date: Date.now()
        // Date2: new Date()
      };
    }

    localStorage.setItem(Date.now() + localStorage.length, JSON.stringify(J));
  }
}

function checkEAN(value) {
  var eanCode = String(value);
  var up = 0;
  var down = 0;

  if (eanCode.length % 2 == 0) {
    eanCode = "0" + eanCode;
  }

  for (var i = eanCode.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
      up = up + Number(eanCode.charAt(i));
    } else {
      down = down + Number(eanCode.charAt(i));
    }
  }
  var sum = down * 3 + up;
  return sum % 10 === 0;
}
