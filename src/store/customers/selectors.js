export const fetchItems = ( store ) => {
  const { dispatch } = store;
  dispatch('customers/fetchItems');
};

export const selectItems = ( store ) => {
  const { getters } = store;
  return getters['customers/items']
}

export const removeItem = ( store, id ) => {
  const { dispatch } = store;
  dispatch('customers/removeItem', id);
}

export const addItem = ( store, { customer } ) => {
  const { dispatch } = store;
  dispatch('customers/addItem', { customer });
}

export const updateItem = ( store, { id, customer}) => {
  const { dispatch } = store;
  dispatch('customers/updateItem', { id, customer });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['customers/itemsByKey'][id] || {};
}
