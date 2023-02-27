const { createApp } = Vue

  createApp({
    data() {
      return {
        
        emails: []
      }
    },

    methods: {

        fetchEmail: function(){

            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.emails.push(res.data.response)
            })
        }
    },

    mounted(){
        for(let i = 0; i < 10; i++){
            this.fetchEmail()
        }
    }
  }).mount('#app')