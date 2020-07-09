<template>
  <div>
    <q-card
        square
        dark
        class="transparent card-border shadow-5 hoverable shadow-transition"
      >
        <q-card-section class="column flex-center">
           <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Users</div>
          </div>
          <div class="text-h6 text-bold">
            <span class="text-caption text-grey-8">total</span>
            {{ leftFunc(users, {field: 'createdAt', value: ''}, {}, filter) }} | {{ rightFunc(users, {field: 'createdAt', value: ''}, {}, filter) }}
            <span class="text-caption text-grey-8">today</span>
          </div>
          <div>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35px" fill="#FFF"><path d="M117.65 277.65c6.25 6.25 16.38 6.25 22.63 0L192 225.94l84.69 84.69c6.25 6.25 16.38 6.25 22.63 0L409.54 200.4l29.49 29.5c15.12 15.12 40.97 4.41 40.97-16.97V112c0-8.84-7.16-16-16-16H363.07c-21.38 0-32.09 25.85-16.97 40.97l29.5 29.49-87.6 87.6-84.69-84.69c-6.25-6.25-16.38-6.25-22.63 0l-74.34 74.34c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"/></svg>
             <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35px" fill="#FFF"><path d="M180.69 246.62c6.25 6.25 16.38 6.25 22.63 0L288 161.94l87.6 87.6-29.5 29.49c-15.12 15.12-4.41 40.97 16.97 40.97H464c8.84 0 16-7.16 16-16V203.07c0-21.38-25.85-32.09-40.97-16.97l-29.49 29.5-110.23-110.22c-6.25-6.25-16.38-6.25-22.63 0L192 190.06l-51.72-51.72c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l74.35 74.34zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z"/></svg> -->
          </div>

        </q-card-section>

        <q-separator color="teal-10" />

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Male</div>
            <div>
              {{ leftFunc(users, {field: 'gender', value: 'male'}, {}, filter) }} | {{ rightFunc(users, {field: 'createdAt', value: ''}, {field: 'gender', value: 'male'}, filter) }}
            </div>
          </div>
          <div class="text-center">
            <div>Female</div>
            <div>
              {{ leftFunc(users, {field: 'gender', value: 'female'}, {}, filter) }} | {{ rightFunc(users, {field: 'createdAt', value: ''}, {field: 'gender', value: 'female'}, filter ) }}
            </div>
          </div>
        </q-card-section>

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Active</div>
            <div>
              {{ leftFunc(users, {field: 'status', value: 'active'}, {}, filter) }} | {{ rightFunc(users, {field: 'createdAt', value: ''}, {field: 'status', value: 'active'}, filter ) }}
            </div>
          </div>
          <div class="text-center">
            <div>Inactive</div>
            <div>
              {{ leftFunc(users, {field: 'status', value: 'inactive'}) }} | {{ rightFunc(users, {field: 'createdAt', value: ''}, {field: 'status', value: 'inactive'}, filter) }}
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

  methods: {
    leftFunc(data, query1, query2, filter){
      if(filter && filter.value == 'day' && filter.type == 'base'){
        return this.sortToday(data, query1, query2, 'previous').length
      }else if(filter && filter.value == 'week' && filter.type == 'base'){
        return this.sortWeek(data, query1, query2, 'previous').length
      }else if(filter && filter.value == 'month' && filter.type == 'base'){
        return this.sortMonth(data, query1, query2, 'previous').length
      }else{
        return this.sortGeneralField(data, {}).length
      }
    },

    rightFunc(data, query1, query2, filter){
      if(filter && filter.value == 'day' && filter.type == 'base'){
        return this.sortToday(data, query1, query2, 'current').length
      }else if(filter && filter.value == 'week' && filter.type == 'base'){
        return this.sortWeek(data, query1, query2, 'current').length
      }else if(filter && filter.value == 'month' && filter.type == 'base'){
        return this.sortMonth(data, query1, query2, 'current').length
      }else{
        return this.sortToday(data, query1, query2, 'current').length
      }
    }

  },

}
</script>
