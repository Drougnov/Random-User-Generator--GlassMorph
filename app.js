const app = Vue.createApp({
    data(){
        return{
            firstName: "Rocky",
            lastName:"Barua",
            email:"www.example@gmail.com",
            gender:"male",
            picture:'https://randomuser.me/api/portraits/men/1.jpg'
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
                this.firstName=results[0].name.first
                this.lastName=results[0].name.last
                this.email=results[0].email
                this.gender=results[0].gender
                this.picture=results[0].picture.large
        }
    }
})
app.mount('.card');

const flwBtn = document.querySelector('.follow');
const gender = document.querySelector('.more-friends');

flwBtn.addEventListener('click',()=>{
    flwBtn.parentElement.classList.toggle('active');
    if(flwBtn.parentElement.classList.contains('active')){
        flwBtn.innerHTML="Following ❤";
    }
    else{
        flwBtn.innerHTML="Follow";
    }
});
gender.addEventListener('click',()=>{
    flwBtn.innerHTML="Follow";
    flwBtn.parentElement.classList.remove('active');
})