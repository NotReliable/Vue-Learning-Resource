const app = Vue.createApp({
    data (){
        return{
            counter : 0,
            isDisable : false,
        }
    },
    methods : {
        add(num){
            this.counter += num;
        },
    },
    computed : {
        result(){
            if(this.counter === 37){
                return this.counter 
            } else if ( this.counter > 37){
                return 'Too Much!';
            } else if(this.counter < 37){
                return "Not Ther Yet!";
            }
        }
    },
    watch : {
        result(){
            console.log("Watcher executing...");
            const that = this;
            this.isDisable = true;
            setTimeout(function(){
                that.counter = 0;
            },5000);
        }
    }
});

app.mount('#assignment');