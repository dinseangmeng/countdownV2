<script setup>
import timeTemplateVue from '../components/timeTemplate.vue';
import store from '../store/index'
import DateInputVue from '../components/DateInput.vue';
import { ref } from 'vue';
// const Test=ref(0)
const Hour=ref(0)
const Minute=ref(0)
const Second=ref(0)
const Day=ref(0)
const dayRotation=ref(0)
const hourRotation=ref(0)
const minuteRotation=ref(0)
const secondRotation=ref(0)
const LeftTime=()=>{
  
  const newYear= (new Date(store.state.endDate));
  // console.log(newYear)
  const today= (new Date());
  const dateSecond=(newYear-today)/1000;
  // console.log(dateSecond)
  Day.value=Math.floor(dateSecond/3600/24);
  Hour.value=Math.floor(dateSecond/3600) % 24;
  Minute.value=Math.floor(dateSecond/60)%60;
  Second.value=Math.floor(dateSecond%60);
  
  secondRotation.value=360 - (Second.value * 6) ;
  minuteRotation.value=360 - (Minute.value * 6 + secondRotation.value/60) ;
  hourRotation.value=360 -  (Hour.value * 6 + Minute.value/60);
  dayRotation.value=360 - (Day.value * 6 + Hour.value/24) ;
  Day.value=Day.value<10?" 0"+Day.value:Day.value;
  Hour.value=Hour.value<10?" 0"+Hour.value:Hour.value;
  Minute.value=Minute.value<10?" 0"+Minute.value:Minute.value;
  Second.value=Second.value<10?" 0"+Second.value:Second.value;
  // console.log(secondRotation.value)

};
LeftTime();
setInterval(LeftTime,1000)

</script>

<template>
  <main>
    <DateInputVue v-if="$store.state.isChangeDate" />
    <h1 class="title">Count Down</h1>
    <div class="container">
      <timeTemplateVue :Time=" Day+'D'" :Rotation="dayRotation" />
      <timeTemplateVue :Time=" Hour+'H'  "  :Rotation="hourRotation"/>
      <timeTemplateVue :Time=" Minute+'M'" :Rotation="minuteRotation" />
      <timeTemplateVue :Time=" Second+'S'" :Rotation="secondRotation" />
      
      <!-- <h1>Hello world</h1> -->
      <!-- {{ $store.state.endDate }} -->
    </div>
    <h1><b>Left</b> till {{ $store.state.endDate }}</h1>
  </main>
</template>
<style scoped lang="scss">
main{
  font-family: 'Crimson Text', serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  h1{
    // font-size: 2.5rem;
    @media only screen and (min-width: 500px){
      // flex-direction: column;
      font-size: 4rem;
    }
  }
  .container{
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width: 500px){
      // flex-direction: column;
      width: 100%;
    }
  }
}
</style>