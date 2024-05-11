<template>
  <Layout title="Заказики">
    <CustomerList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import CustomerList from '@/components/CustomerList/CustomerList';

export default {
  name: 'CustomersPage',
  components: {
    Layout,
    CustomerList,
  }
}
</script>
