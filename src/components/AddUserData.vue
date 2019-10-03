<template>
    <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="submitForm" 
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="newUser.firstname"
        label="First Name"
      />

      <q-input
        filled
        v-model="newUser.lastname"
        label="Last Name"
      />

      <q-input
        filled
        v-model="newUser.mobilenumber"
        label="Cell Phone"
      />

      <q-input
        filled
        v-model="newUser.email"
        label="Email"
      />



      <div>
        <q-btn label="Add User" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
      data () {
    return {

      accept: false,
      newUser: {
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
            console.log(this.newUser)
            this.addNewUser(this.newUser)
            this.$router.push('/user-reports')
        }
    }

}
</script>

<style>

</style>