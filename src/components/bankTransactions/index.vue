<template>
  <div>

    <q-table square
      title="Users"
      :data="users"
      :columns="columns"
      row-key="name"
    />

  </div>
</template>

<script>
import { date } from 'quasar'
export default {
  // name: 'ComponentName',
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Full Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'phone', align: 'center', label: 'Phone', field: 'phone', sortable: true },
        { name: 'email', label: 'Email', field: 'email', sortable: true },
        { name: 'location', label: 'Location', field: 'location', sortable: true },
        { name: 'gender', label: 'Gender', field: 'gender' },
        { name: 'verified', label: 'Verified', field: 'verified' },
        { name: 'status', label: 'Status', field: 'status', sortable: true },
        { name: 'agent', label: 'Agent', field: 'agent', sortable: true },
        // { name: 'subscribed', label: 'Subscribed', field: 'subscribed', sortable: true },
        { name: 'createdAt', label: 'Join Date', field: 'createdAt', sortable: true, format: val => `${date.formatDate(val, 'YYYY-MM-DD')}` },
        { name: 'date_of_birth', label: 'Birth Date', field: 'date_of_birth', format: val => `${date.formatDate(val, 'YYYY-MM-DD')}`, }
      ]
    }
  },

  computed: {
    users() {
      return this.$store.getters['DataAuth/users'];
    },
  },
}
</script>
