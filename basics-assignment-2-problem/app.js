const app =Vue.createApp({
    data(){
        return{
            alertMessage : "Submitted!",
            userInput : "",
            userInputConfirmed : "",
        }
    },
    methods :{
        btnClick() {
            alert(this.alertMessage);
        },
        showUserInput(event){
            this.userInput = event.target.value;
        },
        showConfirmedUserInput(event){
            this.userInputConfirmed = event.target.value;
        }
    }
})

app.mount('#assignment');