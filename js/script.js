const { createApp } = Vue;

// scrivere tutto il codice dentro a createapp
createApp({

  // scrivere tutte le nostre variabili dentro Data
  data(){
    return{

      taskList:[
        {
          text:'fare la todolist',
          done:true,
        },
        {
          text:'studiare vue.js',
          done:true,
        },
        {
          text:'ripetere css',
          done:false,
        },
        {
          text:'giocare alla playstation',
          done:false,
        },
      ],

      newTask:'',
      errorMessage:''
    }
  },

  // si scrivono tutte le funzioni
  methods:{

    rimuoviTask(indice){
      if(this.taskList[indice].done){
        this.taskList.splice(indice,1);
      }else{
        this.errorMessage = 'ERRORE!!! latask deve essere eseguita per esssere eliminata'
      }
    },

    addTask(){
      this.errorMessage = ''
      if(this.newTask.length >= 5){
        this.taskList.unshift({ text: this.newTask, done: false })
        this.newTask=''
        this.errorMessage = ''
        
      }else{
        this.errorMessage = 'ERRORE!!! il testo deve essere almeno di 5 caratteri'
      }

    },

  }

}).mount('#app');