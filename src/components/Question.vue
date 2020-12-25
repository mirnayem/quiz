<template>
    <div class="flex  px-10 py-5 w-1/2 m-auto">
       
  

    <div class="px-4">
   
       
      
       <div v-for="(section , q_index) in questions" :key="section" >

          <div class="text-2xl font-bold uppercase"> {{q_index}} </div>
        

        <div v-for="(question, sq_index) in section" :key="question" >
         
           <div class="py-5" >
               <p> {{sq_index}}: {{question.question}} </p>
                <div v-for="(option , index) in question.options" :key="option"  >

                    <input v-model="userSelect"  type="checkbox" :value="index" @click="handleUserSelect(index)">

                    <label class="pl-5" for=""> {{index}}: {{option}} </label>
                   
                </div>
              
              <span> {{userSelect}} </span>
           </div> 
          
        </div>
       </div>

    
    
    </div>

   
   
 
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props : ['answer'],
    data() {
        return {
            questions: null,
            userSelect : [],
         
        }   
    },

       methods : {

        handleUserSelect(index){
          
          console.log(index)
        
        },
 
    },

    created() {
        
             axios.get("pool.json")
             .then(response => (this.questions = response.data.quiz));
             
             
        }


 
    
}
</script>