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

export const declinationCityName = (text: string) => {
  const vowelsLetters = ['е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  const specificLetters = ['ь'];

  if (vowelsLetters.includes(text.slice(-1))) {
    return text;
  }

  if (specificLetters.includes(text.slice(-1))) {
    return text.slice(0, -1) + 'e';
  }

  return text + 'e';
};

export const clearURLQueries = (path: string) => path.replace(/\?.*/gi, '');

export const getDescriptionSlice = (description: string, count: number) =>
  description.length > count ? description.slice(0, count + 1) + '...' : description;
