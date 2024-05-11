import Api from '@/api/index';

class Customers extends Api {

  /**
   * Вернет список всех групп
   * @returns {Promise<Response>}
   */
  customers = () => this.rest('/customers/list.json');

  /**
   * Удалит группу по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = ( id ) => this.rest('/customers/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает

  /**
   * Создаст новую запись в таблице
   * @param customer объект группы, взятый из FormGroup
   * @returns {Promise<Response>}
   */
  add = ( customer ) => this.rest('customers/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(customer),
  }).then(() => ({...customer, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает

  /**
   * Отправит измененную запись
   * @param customer объект группы, взятый из FormGroup
   * @returns {Promise<*>}
   */
  update = ( customer ) => this.rest('customers/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(customer),
  }).then(() => customer) // then - заглушка, пока метод ничего не возвращает

}

export default new Customers();
