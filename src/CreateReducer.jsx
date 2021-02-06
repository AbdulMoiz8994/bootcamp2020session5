const CreateReducer=(state,action) =>{
   switch (action) {
       case 'Increment':
           return state+1
       default:
           return state
   }
}
export default CreateReducer;