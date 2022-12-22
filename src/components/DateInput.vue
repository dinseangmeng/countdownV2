<script setup>
import {ref} from 'vue';
import store from '../store';
// console.log(store.date)
// const date = ref(`${new Date().getFullYear()+1}-01-01 `);
// console.log(date.value)
</script>
<template>
    <main>
        <form >
            <input type="date" v-bind:value="date" >
        </form>
    </main>
</template>
<style scoped lang="scss">
main{
    width: 100%;
    background-color: #415a77;
    padding: 1rem 0;
    form{
        width: 40%;
        input{
            font-family: 'Crimson Text', serif;
            font-weight: bold;
            font-size: 1.3rem;
            color: black;
            width: 100%;
        }
    }
}

</style>