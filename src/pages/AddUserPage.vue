<template>
  <div class="q-ma-md">
      <p>Add New User</p>
      <add-user-data />
  </div>
</template>

<script>
    export default {
        components: {
          'add-user-data': require('components/AddUserData.vue').default
        }
    }
</script>

<style>

</style>