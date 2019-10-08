<template>
    <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="submitForm" 
      class="q-gutter-md"
    >
        <q-btn label="Save" type="submit" color="primary"/>
        <user-data-input-fields 
            :user.sync="updatedUser" />
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
        updatedUser: {},
      accept: false
    }
  },
    methods: {
        ...mapActions('users', ['updateUser']),
        submitForm() {
            //form validation
            this.submitUpdateUser()
        },
        submitUpdateUser() {
            this.updateUser({
                id: this.id,
                updates: this.updatedUser
            })
            this.$emit('save')
        }
    },
    props: ['user','id'],
    mounted() {
        this.updatedUser = Object.assign({}, this.user)
    }
    

}
</script>

<style>

</style>