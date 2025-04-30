import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:'cart',
  initialState : {
    items:[]
  },
  //reducer fuctions are basically responsible for modifying the slice of store. here add items baiscally gets access to the state and the action that needs to perform
  reducers:{
    addItems: (state, action)=>{
      state.items.push(action.payload);
    },
    removeItem: (state,)=>{
      state.items.pop();
    },
    clearCart:(state, )=>{
      state.items.length = 0;
    },
    }
  })

  // here now I need to export reducers and actions
export const {addItems,removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;


//now add this cart slice to store
//bada sa store->uske reducers honge ----uss store ke slices ke bhi different reducers rahenge, So actually they are difference between this reducers..