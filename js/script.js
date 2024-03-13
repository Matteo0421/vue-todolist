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
    }
  },

  // si scrivono tutte le funzioni
  methods:{

    // nomefunzione(){
    //   corpo funzione
    // }
  }

}).mount('#app');