<template>
    <div >
        <p>Edit user data</p>
        <q-btn @click="" class="q-ma-sm" color="primary" unelevated label="Save" />
<!--         
        <div v-for="(detail, key) in user">
            <q-input class="q-mb-sm"  filled v-model="text" :label="key" />
        </div> -->
    </div>
</template>

<script>
export default {
    props: ['user']

}
</script>

<style>

</style>