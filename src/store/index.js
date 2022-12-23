import { createStore } from 'vuex'
const store = createStore({
  state :{
    endDate:`jan-1-${new Date().getFullYear()+1}`,
    isChangeDate:false,
  },
  mutations: {
   setDate(state,newDate){
    state.endDate=newDate;
   },
   toggle(state,value){
    state.isChangeDate=value;
   }
  },
  getters:{
   
  }
})
export default store;