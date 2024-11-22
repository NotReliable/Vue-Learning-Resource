const app = Vue.createApp({
    data () {
        return{
            courseGoalA : 'Finish Course!',
            courseGoalB : 'Build Amazing App!',
            vueLink : 'https://vuejs.org/',
        };
    },
    methods : {
        outputGoal () {
            const randomNum = Math.random();
            console.log(this);
            if(randomNum < 0.5){
                return this.courseGoalA;
            } else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');