const app = Vue.createApp({
    data (){
        return{
            task : [],
            enteredTask : "",
            isDisplay : true,
        }
    },
    methods : {
        addTask(){
            this.task.push(this.enteredTask);
        },
        displayList(){
            this.isDisplay = !this.isDisplay
        }
    }
});

app.mount('#assignment');