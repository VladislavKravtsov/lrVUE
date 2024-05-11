<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <BrigadaForm
        :id="id"
        @submit="onSubmit"
    />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/customers/selectors';
import Layout from '@/components/Layout/Layout';
import CustomerForm from '@/components/CustomerForm/CustomerForm';
export default {
  name: 'CustomerEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    CustomerForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, customer }) => id ?
          updateItem(store, { id, customer}) :
          addItem(store, { customer }),
    };
  }
}
</script>

