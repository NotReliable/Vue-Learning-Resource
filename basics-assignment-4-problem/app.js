const app = Vue.createApp({
    data(){
        return {
            userInput : "",
            user1 : false,
            user2 : false,
            hidden : false,
            userInput2 : "",
        }
    },
    methods : {
        inputValue(event){
            const value = event.target.value;
            if(value === "user1") this.user1 = true;
            else if(value === "user2") this.user2 = true;
            else{
                this.user1 = false;
                this.user2 = false;
            }
        },
        changeVisibility(){
            this.hidden = !this.hidden;
        },
        inputValue2(event){
            this.userInput2 = event.target.value;
        }
    },
    computed : {
        styleMeClasses(){
            return {user1 : this.user1, user2 : this.user2 , hidden : this.hidden};
        },
    }
});

app.mount('#assignment');