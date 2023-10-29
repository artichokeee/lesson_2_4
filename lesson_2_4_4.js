const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    //переменные a и b задекларированы, размер бонуса и суммы неизвестные
    sum > 50 ? (bonus = 50) : (bonus = sum);
    //посчитана сумма 30
    return bonus;
    //добавил и сюда комментарий, сумма меньше 50, то обонус будет равен ей
    };

console.log(calculateBonus(10,20))