// Проверка ИНН юрлиц, физлиц и ИП
// @param {string} value - строка для проверки
// @return boolean
export function checkINN(value) {
  //первая цифра ИНН может быть нулём, поэтому он не может быть числом
  if (typeof value !== "string") return false; // ИНН должен быть строкой
  //ИНН юрлиц - 10 символов, ИП - 12 символов
  if (value.length !== 10 && value.length !== 12) return false;
  const arNumbers = value.split(""); //преобразуем строку в массив цифр
  if (arNumbers.length === 0) return false; //Не удалось разобрать строку
  //проверим что в массиве только цифры
  for (let i = 0; i < arNumbers.length; i++)
    if (isNaN(Number(arNumbers[i]))) return false; //Некорректный символ
  //формула для юрлиц и ИП отличается
  if (arNumbers.length === 10) {
    //переменная для итоговой суммы
    //каждую цифру мы умножаем на свой коэффициент
    //а потом получаем остаток от деления на 11 и на 10
    let checkSum =
      ((2 * arNumbers[0] +
        4 * arNumbers[1] +
        10 * arNumbers[2] +
        3 * arNumbers[3] +
        5 * arNumbers[4] +
        9 * arNumbers[5] +
        4 * arNumbers[6] +
        6 * arNumbers[7] +
        8 * arNumbers[8]) %
        11) %
      10;

    //проверяем что десятый символ ИНН совпадает с контрольной суммой
    return checkSum === Number(arNumbers[9]);
    //Контрольная сумма не совпала с десятым символом
  }
  //код для ИП
  if (arNumbers.length === 12) {
    //в этом случае будет две контрольные суммы
    let checkSumOne =
      ((7 * arNumbers[0] +
        2 * arNumbers[1] +
        4 * arNumbers[2] +
        10 * arNumbers[3] +
        3 * arNumbers[4] +
        5 * arNumbers[5] +
        9 * arNumbers[6] +
        4 * arNumbers[7] +
        6 * arNumbers[8] +
        8 * arNumbers[9]) %
        11) %
      10;

    let checkSumTwo =
      ((3 * arNumbers[0] +
        7 * arNumbers[1] +
        2 * arNumbers[2] +
        4 * arNumbers[3] +
        10 * arNumbers[4] +
        3 * arNumbers[5] +
        5 * arNumbers[6] +
        9 * arNumbers[7] +
        4 * arNumbers[8] +
        6 * arNumbers[9] +
        8 * arNumbers[10]) %
        11) %
      10;

    //в этом случае мы проверяем 11 и 12 символы
    if (
      checkSumOne != Number(arNumbers[10]) ||
      checkSumTwo != Number(arNumbers[11])
    )
      return false;
    //Вторая контрольная сумма не совпала с двенадцатым символом
    return true;
  }
  return false;
}
