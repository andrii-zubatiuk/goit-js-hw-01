const credits = 23580;
const pricePerDroid = 3000;
let message;

const quantityDroid = prompt('Какое количество дроидов Вы хотите купить?');

if (quantityDroid === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else {
  const totalPrice = pricePerDroid * quantityDroid;

  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
    console.log(message);
  } else {
    const accountBalance = credits - totalPrice;
    console.log(
      `Вы купили ${quantityDroid} дроидов, на счету осталось ${accountBalance} кредитов.`,
    );
  }
}
