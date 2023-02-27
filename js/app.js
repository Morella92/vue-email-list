const { createApp } = Vue

  createApp({
    data() {
      return {
        
        emails: [],

        allEmails: false
      }
    },

    methods: {

        fetchEmail: function(){

            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.emails.push(res.data.response)

                if(this.emails.length === 10){
                    this.allEmails = true
                }
            })
        }
    },

    mounted(){
        for(let i = 0; i < 10; i++){
            this.fetchEmail()
        }
    }
  }).mount('#app')