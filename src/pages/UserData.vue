<template>

    <div class="q-pa-md" style="max-width: 400px">
      <h4>User Data</h4>
      <q-btn v-if="!editUserData" @click="editUserData = !editUserData" class="q-ma-sm" color="primary" unelevated label="Edit" />
    
      <show-user-data v-if="!editUserData" :user="user" />
      <edit-user-data v-else :user="user" :id="id" @save="editUserData = false" />
        
          <!-- <span v-else > <q-input class="q-mb-sm"  filled v-model="text" :label="key" /></span> -->
    </div>
</template>

<script>
   import { mapState } from 'vuex'

    export default {
      data() {
        return {
          editUserData: false,
          text: ''
        }
      },
        props: ['id'],
        computed: {
            ...mapState('users', ['users', 'col_headers']),
            user() {
                return this.users[this.id]
            }
        },
        components: {
          'show-user-data': require('components/ShowUserData.vue').default,
          'edit-user-data': require('components/EditUserData.vue').default
        }
    }
</script>

<style>

</style>