const textCapitalize = text => {
  return text.replace(/[a-zа-яё]/i, text[0].toUpperCase());
};

export { textCapitalize };
