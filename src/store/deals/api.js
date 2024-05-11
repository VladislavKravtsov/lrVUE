import Api from '@/api/index';

class Deals extends Api {

  /**
   * Вернет список всех студентов
   * @returns {Promise<Response>}
   */
  deals = () => this.rest('/deals/list.json');

  /**
   * Удалит студента по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = ( id ) => this.rest('/deals/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает

  /**
   * Создаст новую запись в таблице
   * @param deals объект студента, взятый из FormStudent
   * @returns {Promise<Response>}
   */
  add = ( deals ) => this.rest('/deals/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(deals),
  }).then(() => ({...deals, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает

  /**
   * Отправит измененную запись
   * @param deals объект студента, взятый из FormStudent
   * @returns {Promise<*>}
   */
  update = ( deals ) => this.rest('/deals/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(deals),
  }).then(() => deals) // then - заглушка, пока метод ничего не возвращает

}

export default new Deals();
