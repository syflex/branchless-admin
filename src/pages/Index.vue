<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';

import ExampleComponent from 'components/CompositionComponent.vue';
import { Todo, Meta } from 'components/models';

export default Vue.extend({
  name: 'PageIndex',
  components: { ExampleComponent },
  data() {
    const todos: Todo[] = [
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ];
    const meta: Meta = {
      totalCount: 1200
    };
    return { todos, meta };
  },

  mounted() {
    this.getUsers()
  },

  methods: {
    // login(){
    //   // const req = await this.$axios.post('https://branchless.world/branposdev01/admin/login',
    //   //   {
    //   //     phone: '8031888217',
    //   //     pin: "123456"
    //   //   }
    //   // )

    //     // this.$q.localStorage.set('branchless-admin-token', 'value')
    // }

    async getUsers(){
      const req = await this.$axios.get(process.env.Api+'/admin/countUsers')
    }
  },
});
</script>
