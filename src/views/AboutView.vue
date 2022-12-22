<script setup>
const open=()=>{
  window.open('https://www.dinseangmeng.xyz')
}
</script>
<template>
  <main>
    <div class="about">
      <div class="profile"></div>
      <h1>Developer: DINSEANGMENG</h1>
      <button @click="open">Portfolio</button>
    </div>

  </main>
</template>

<style lang="scss" scoped>
main{
  width: 100%;
  height: 80vh;
  // font-family: 'Sono', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .about{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .7rem;
    h1{
      font-size: 1.5rem;
    }
    button{
      padding: .7rem;
      // font-family: 'Sevillana', cursive;
      background-color: #778da9;
      color: black;
      border-radius: 2px;
      border: none;
      outline: none;
      transition: 200ms;
      font-size: 1.4rem;
      cursor: pointer;
      &:hover{
        background-color: #e0e1dd;
        color: rgb(0, 0, 0);
        
      }
    }
  }
}
.profile{
  width: 200px;
  height: 200px;
  background-image: url('../assets/images/Profile.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  // object-fit: contain;
  border-radius: 50%;
}
</style>
