<template>
    <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="submitForm" 
      class="q-gutter-md"
    >
    <user-data-input-fields 
      :user.sync="user" />



        <q-btn label="Add User" type="submit" color="primary"/>

    </q-form>


  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {
			'user-data-input-fields': require('components/Shared/UserDataInputFields.vue').default
    },
      data () {
    return {

      accept: false,
      user: {
            firstname: '',
            lastname: '',
            mobilenumber: '',
            email: '',
            status: 'Active'

        }
    }
  },
    methods: {
        ...mapActions('users', ['addNewUser']),
        submitForm() {
            //form validation
            this.submitNewUser()
        },
        submitNewUser() {
            this.addNewUser(this.user)
            this.$router.push('/user-reports')
        }
    }
    

}
</script>

<style>

</style>