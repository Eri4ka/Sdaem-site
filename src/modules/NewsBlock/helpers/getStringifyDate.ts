export const getStringifyDate = (date: string) => {
  const newData = new Date(date);
  const day = newData.getDate();
  const month = newData.getMonth();
  let stringMonth = '';

  switch (month) {
    case 0:
      stringMonth = 'Январь';
      break;
    case 1:
      stringMonth = 'Февраль';
      break;
    case 2:
      stringMonth = 'Март';
      break;
    case 3:
      stringMonth = 'Апрель';
      break;
    case 4:
      stringMonth = 'Май';
      break;
    case 5:
      stringMonth = 'Июнь';
      break;
    case 6:
      stringMonth = 'Июль';
      break;
    case 7:
      stringMonth = 'Август';
      break;
    case 8:
      stringMonth = 'Сентябрь';
      break;
    case 9:
      stringMonth = 'Октябрь';
      break;
    case 10:
      stringMonth = 'Ноябрь';
      break;
    case 11:
      stringMonth = 'Декабрь';
      break;
    default:
      break;
  }

  return `${day} ${stringMonth}`;
};
