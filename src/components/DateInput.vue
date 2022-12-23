<script setup>
import {ref} from 'vue';
import store from '../store';
// console.log(store.date)
const date = ref(store.state.endDate);
// console.log(date.value)
// cons
const save=(e)=>{
    e.preventDefault();
    store.commit('setDate',date);
    store.commit('toggle',false);
    // console.log(date)
}
</script>
<template>
    <main>
        <form @submit="save">
            <input type="text" v-model="date"  placeholder="Input Date (mm/dd/yyyy)">
            <input type="submit" value="Save">
        </form>
    </main>
</template>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
main{
    width: 100%;
    background-color: #415a77;
    padding: 1rem 0;
    form{
        text-align: center;
        width: 40%;
        input[type="text"]{
            font-family: 'Crimson Text', serif;
            font-weight: bold;
            font-size: 1.3rem;
            color: black;
            width: 100%;
            border: none;
            outline: none;
            // border-bottom: 2px solid #6c757d;
            box-shadow:0 0 20px #6c757d;
            background-color: transparent;
            &::placeholder{
                font-family: 'Crimson Text', serif;
                
            }
        }
        input[type="submit"]{
            color: black;
            padding: .5rem 1rem;
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            margin-top: .8rem;
            width: 50%;
        }
    }
}

</style>