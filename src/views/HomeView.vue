<script setup>
import timeTemplateVue from '../components/timeTemplate.vue';
import store from '../store/index'
import DateInputVue from '../components/DateInput.vue';
import { ref } from 'vue';
import FireworkVue from '../components/Firework.vue';
// const Test=ref(0)
const Hour=ref(0)
const Minute=ref(0)
const Second=ref(0)
const Day=ref(0)
const isOntime=ref(false)
const dayRotation=ref(0)
const hourRotation=ref(0)
const minuteRotation=ref(0)
const secondRotation=ref(0)
const FireworkTime=ref(1000)
const startCount=ref(false)
const LeftTime=()=>{
  
  const newYear= (new Date(store.state.endDate));
  // console.log(newYear)
  const today= (new Date());
  const dateSecond=(newYear-today)/1000;
  if(dateSecond>=0){
    Day.value=Math.floor(dateSecond/3600/24);
    Hour.value=Math.floor(dateSecond/3600) % 24;
    Minute.value=Math.floor(dateSecond/60)%60;
    Second.value=Math.floor(dateSecond%60);
    // console.log(dateSecond)
    
  if(((Day.value==0 && Hour.value==0 && Minute.value==0 && Second.value==0 )  )){
    FireworkTime.value=(6000)
    isOntime.value=true;
    clearInterval(start)
    // startCount.value=true;
  }else {
    isOntime.value=false;
  }
    secondRotation.value=360 - (Second.value * 6) ;
    minuteRotation.value=360 - (Minute.value * 6 + secondRotation.value/60) ;
    hourRotation.value=360 -  (Hour.value * 6 + Minute.value/60);
    dayRotation.value=360 - (Day.value * 6 + Hour.value/24) ;
    Day.value=Day.value<10?" 0"+Day.value:Day.value;
    Hour.value=Hour.value<10?" 0"+Hour.value:Hour.value;
    Minute.value=Minute.value<10?" 0"+Minute.value:Minute.value;
    Second.value=Second.value<10?" 0"+Second.value:Second.value;
    // console.log(secondRotation.value)

  }else{
    Day.value=" 00"
    Hour.value=" 00"
    Minute.value=" 00"
    Second.value= " 00"
  }
  // console.log(dateSecond)

};
LeftTime()
const start=setInterval(LeftTime,FireworkTime.value);


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
  <FireworkVue  v-if="isOntime"/>
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