const app = Vue.createApp({
    data(){
        return{
            name : 'Jack',
            age : '22',
            imageUrl : 'https://www.google.com/imgres?q=free%20image&imgurl=https%3A%2F%2Fi0.wp.com%2Fpicjumbo.com%2Fwp-content%2Fuploads%2Fautumn-wallpaper-free-image.jpg%3Fw%3D600%26quality%3D80&imgrefurl=https%3A%2F%2Fpicjumbo.com%2F&docid=Kzg7bmtb2MSiyM&tbnid=1k9If-UWhYD_pM&vet=12ahUKEwjsh4rZrtuJAxUB-zgGHQakB2sQM3oECBoQAA..i&w=600&h=336&hcb=2&ved=2ahUKEwjsh4rZrtuJAxUB-zgGHQakB2sQM3oECBoQAA',
        }
    },
    methods :{
        calculate5years (){
            return Number(this.age) + 5;
        },
        getFavNum(){
            return Number.parseInt(Math.random()*10);
        }
    }
});

app.mount('#assignment');