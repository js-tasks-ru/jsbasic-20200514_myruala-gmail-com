const calculator = {


  read(a, b){

    calculator.a = a;
    calculator .b = b;
  },
  sum(){
    return calculator.a + calculator.b;

  },
  mul(){
    return  calculator.a * calculator.b;

  }
};
calculator.read();
console.log( calculator.sum());
console.log( calculator.mul());




// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
