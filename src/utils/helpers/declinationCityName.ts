export const declinationCityName = (text: string) => {
  const vowelsLetters = ['е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  const specificLetters = ['ь'];

  if (vowelsLetters.includes(text?.slice(-1))) {
    return text;
  }

  if (specificLetters.includes(text?.slice(-1))) {
    return text.slice(0, -1) + 'e';
  }

  return text + 'e';
};
