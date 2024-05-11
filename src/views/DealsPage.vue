<template>
  <Layout title="Сборщики">
    <DealList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import DealList from '@/components/DealList/DealList.vue';

export default {
  name: 'Deals',
  components: {
    Layout,
    DealList,
  }
}
</script>
