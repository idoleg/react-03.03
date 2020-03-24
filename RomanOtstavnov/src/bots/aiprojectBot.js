import Bot from './Bot.js';
// https://aiproject.ru/?api
// Пример запроса: query = {"ask":"Привет","userid":"654321","key":""}

class AiprojectBot extends Bot{
  constructor(name) {
    super(name || 'ms.Bot');
    this.api = '/aiproject/api/';
  }

  async getAnswer ({ name, message }, onSuccess, onError) {
    const query = {
      ask: message,
        key: '',
        userid: 648964318,
    };

    const formData = new FormData();
    formData.append('query', JSON.stringify(query));

    let answer = await fetch(this.api, {
      method: 'POST',
      body: formData,
    });
    answer = await answer.json();

    if(answer.status === 1 && answer.aiml) {
      return answer.aiml;
    } else {
      return answer.description;
    }
  }
}

export default AiprojectBot;