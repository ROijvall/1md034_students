function MenuItem(name, kcal, fact, lactose, gluten, img){
    this.name = name;
    this.calories = kcal;
    this.fact = fact;
    this.lactose = lactose;
    this.gluten = gluten;
    this.img = img;
}

function burgerArray() {
    let burgerOrginal = new MenuItem(food.index[0]);
    let burgerChicken = new MenuItem(food.index[1]);
    let burgerVegan = new MenuItem(food.index[2]);
    let bacon = new MenuItem(food.index[3]);
    let extra = new MenuItem(food.index[4]);
    let burgers = [burgerOrginal, burgerChicken, burgerVegan, bacon, extra]
    return burgers;
}

var app = new Vue({
    el:'#app',
    data: {
        picked: [],
        name: '',
        address: '',
        email: '',
        payment: 'Credit card',
        gender: 'Male',
        burgers: food,
        orderList:[]
    },
    methods: {
        markDone: function(){
            this.orderList.push(this.picked, this.name, this.address, this.email, this.payment, this.gender);
        }
    }
});