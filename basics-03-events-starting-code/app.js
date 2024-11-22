const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      confirmedName : '',
      // fullname : "",
      lastName : "",
    };
  },
  methods : {
    outputFullName(){
      console.log('Running again...');
      if(this.name === ""){
        return;
      }
      return this.name + ' ' + 'Siow';
    },
    confirmedInput(){
      this.confirmedName = this.name;
    },
    submitForm(event){
      event.preventDefault();
      alert('Submitted!');
    },
    setName(event){
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    minus(num){
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = "";
    }
  },
  watch : {
    counter(value){
      if(value > 50){
        const obj = this;
        setTimeout(function(){
          obj.counter = 0;
        },2000);
      }
    }
  },
  computed : {
    fullname(){
      console.log('Running again...');
      if(this.name === "" || this.lastName === ""){
        return;
      }
      return this.name + ' ' + this.lastName;
    }
  }
});

app.mount('#events');
