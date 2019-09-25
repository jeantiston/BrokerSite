<template>
  <div class="q-pa-md">
      <h4>User Data</h4>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(detail, key) in user">
          <td>{{ key }}</td>  
          <td> {{ detail }} </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
   import { mapState } from 'vuex'

    export default {
        props: ['id'],
        computed: {
            ...mapState('users', ['users', 'col_headers']),
            user() {
                return this.users[this.id]
            }
        }
    }
</script>

<style>

</style>