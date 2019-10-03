<template>
  
  <div class="q-pa-md">
      <h4>User Reports</h4>
      <q-btn to="/add-user" class="q-ma-sm" color="primary" unelevated label="Add User" />
    <q-markup-table>
      <thead>
        <tr>
          <th v-for="col_header in col_headers" class="text-left">{{ col_header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="goToData(key)" v-for="(user, key) in users">
          <td v-for="detail in user" class="text-left">{{ detail }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        methods: {
            goToData(id) {
                this.$router.push('/user-reports/' + id)
            }
        },
        computed: {
            ...mapState('users', ['users', 'col_headers'])
        }

    }
</script>

<style>

</style>