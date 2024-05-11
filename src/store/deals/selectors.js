export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch('deals/fetchItems');
};

export const selectItems = (store) => {
  const { getters } = store;
  return getters['deals/items']
}

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch('deals/removeItem', id);
}

export const addItem = (store, { adress,  description, cost, customer }) => {
  const { dispatch } = store;
  dispatch('deals/addItem', { adress,  description, cost, customer });
}

export const updateItem = (store, { id, adress,  description, cost, customer }) => {
  const { dispatch } = store;
  dispatch('deals/updateItem', { id, adress,  description, cost, customer });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['deals/itemsByKey'][id] || {};
}
