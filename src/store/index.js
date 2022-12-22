import { createStore } from 'vuex'
const store = createStore({
  state :{
    endDate:`jan 1 ${new Date().getFullYear()+1}`
  },
  mutations: {
   setDate(state,newDate){
    state.endDate=newDate;
   }
  },
  getters:{
   
  }
})
export default store;