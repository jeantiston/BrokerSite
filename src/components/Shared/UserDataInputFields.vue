<template>
    <div>
        <q-input
        @change="$emit('update:user', handleInput($event.target.value, 'firstname'))"
        filled
        :value="user.firstname"
        label="First Name"
      />

      <q-input
        @change="$emit('update:user', handleInput($event.target.value, 'lastname'))" 
        filled
        :value="user.lastname"
        label="Last Name"
      />

      <q-input
        @change="$emit('update:user', handleInput($event.target.value, 'mobilenumber'))"
        filled
        :value="user.mobilenumber"
        label="Cell Phone"
      />

      <q-input
        @change="$emit('update:user', handleInput($event.target.value, 'email'))"
        filled
        :value="user.email"
        label="Email"
      />


    </div>
</template>

<script>
export default {
    props: ['user'],
    methods: {
        handleInput(value, detail) {
            let user = this.user
            user[detail] = value
            return user

        }
    }

}
</script>

<style>

</style>