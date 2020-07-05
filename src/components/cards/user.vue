<template>
  <div>
    <q-card
        square
        dark
        class="transparent card-border shadow-5 hoverable shadow-transition"
      >{{ filter }}
        <q-card-section class="column flex-center">
          <div class="text-h6 text-bold">
            <span class="text-caption text-grey-8">total</span>
            {{ users ? users.length : 0 }} | {{ sortToday(users, {field: 'createdAt', value: ''}, {}, 'current').length, }}
            <span class="text-caption text-grey-8">today</span>
            <!-- <q-icon name="fa fa-chart-line" /> -->
          </div>
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Users</div>
          </div>
        </q-card-section>

        <q-separator color="teal-10" />

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Male</div>
            <div>
              {{ sortGeneralField(users, 'gender', 'male') }} | {{ sortToday(users, {field: 'createdAt', value: ''}, {field: 'gender', value: 'male'}).length }}
            </div>
          </div>
          <div class="text-center">
            <div>Female</div>
            <div>
              {{ sortGeneralField(users, 'gender', 'female') }} | {{ sortToday(users, {field: 'createdAt', value: ''}, {field: 'gender', value: 'female'}).length }}
            </div>
          </div>
        </q-card-section>

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Active</div>
            <div>
              {{ sortGeneralField(users, 'status', 'active') }} | {{ sortToday(users, {field: 'createdAt', value: ''}, {field: 'status', value: 'active'}).length }}
            </div>
          </div>
          <div class="text-center">
            <div>Inactive</div>
            <div>
              {{ sortGeneralField(users, 'status', 'inactive') }} | {{ sortToday(users, {field: 'createdAt', value: ''}, {field: 'status', value: 'inactive'}).length }}
            </div>
          </div>
        </q-card-section>
      </q-card>
  </div>
</template>

<script>
import mixins from 'components/mixin/mixins'
export default {
  props:['filter'],

  mixins: [mixins],

  computed: {
    users() {
      return this.$store.getters['DataAuth/users'];
    },
  },

}
</script>
