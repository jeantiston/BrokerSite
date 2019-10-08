<template>
    <div class="q-pa-md" style="max-width: 400px">
    <div v-for="(detail, key) in user">
          <span>{{ key }}:</span>
          <span> {{ detail }} </span>
    </div>

    </div>
</template>

<script>
export default {
    props: ['user']

}
</script>

<style>

</style>