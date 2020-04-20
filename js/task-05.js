let country;
let price;

let countryForDelivery = prompt('Введите вашу страну');

if (countryForDelivery === null) {
  console.log('Вы отменили ввод!');
} else {
  countryForDelivery = countryForDelivery.toLowerCase();

  switch (countryForDelivery) {
    case 'китай':
      country = 'китай';
      price = 100;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'чили':
      country = 'чили';
      price = 250;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'австралия':
      country = 'австралия';
      price = 170;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'индия':
      country = 'индия';
      price = 80;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case 'ямайка':
      country = 'ямайка';
      price = 120;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    default:
      alert('В вашей стране доставка недоступна');
  }
}

// countryForDelivery = countryForDelivery.toLowerCase();

// switch (countryForDelivery) {
//   case 'китай':
//     country = 'китай';
//     price = 100;
//     break;

//   case 'чили':
//     country = 'чили';
//     price = 250;
//     break;

//   case 'австралия':
//     country = 'австралия';
//     price = 170;
//     break;

//   case 'индия':
//     country = 'индия';
//     price = 80;
//     break;

//   case 'ямайка':
//     country = 'ямайка';
//     price = 120;
//     break;

//   default:
//     alert('В вашей стране доставка недоступна');
//     break;
// }

// console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
