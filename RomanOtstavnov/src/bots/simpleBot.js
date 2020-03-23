import Bot from "./Bot";

class SimpleBot extends Bot {
  constructor(name) {
    super(name || 'simpleBot');
    this.messages = [
      'Неплохая попытка, %name%',
      '%name%, полегче',
      'Мне кажется, что ты преувеличиваешь',
      '%name%, я тебя не понимаю',
      '%name%, я с тобой полностью согласен',
      'Неужели ты сам до этого додумался, %name%?',
    ];
  }

  async getAnswer ({ name }) {
    const randIndex = Math.floor(Math.random() * this.messages.length);
    return this.messages[randIndex].replace('%name%', name);
  }
}

export default SimpleBot;