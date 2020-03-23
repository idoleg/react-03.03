const generateId = () => Math.round(Math.random() * 36 ** 12).toString(36);

export { generateId };
