<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <CollectorForm @submit="onSubmit" :id="id"  />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/deals/selectors';
import DealForm from '@/components/DealForm/DealForm.vue';
import Layout from '@/components/Layout/Layout';

export default {
  name: 'CollectorEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    DealForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, adress,  description, cost, customer}) => id ?
          updateItem(store, { id, adress,  description, cost, customer }) :
          addItem(store, { adress,  description, cost } )
    }
  }

}
</script>

