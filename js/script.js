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
    }
  },

  // si scrivono tutte le funzioni
  methods:{

    rimuoviTask(indice){
      this.taskList.splice(indice,1);
    },

    addTask(){
      if(this.newTask.length >= 5){
        this.taskList.unshift({ text: this.newTask, done: false })
        this.newTask=''
        
      }

    },

  }

}).mount('#app');