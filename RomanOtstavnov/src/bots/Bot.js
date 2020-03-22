class Bot {
  constructor(name) {
    this.name = name || 'Bot';
  }

  async getAnswer() {
    return 'hello, i`m Bot';
  }
}

export default Bot;