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

var socket = io();

var app = new Vue({
    el: '#app',
    data: {
        picked: [],
        name: '',
        email: '',
        payment: 'Credit card',
        gender: 'Male',
        count: 0,
        burgers: food,
        orderItems: [],
        orders: {}
        },
    methods: {
        getNext: function () {
            var lastOrder = this.count;
            this.count +=1;
            return lastOrder + 1;
        },

        addOrder: function (event) {
            socket.emit("addOrder", {   orderId: this.getNext(),
                                        details: this.orders[0].details,
                                        customerInfo: [this.name, this.email, this.payment, this.gender], 
                                        orderItems: this.picked,
                                    });
        },
        displayOrder: function (event) {
            var offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };
            Vue.set(this.orders, 0, {details: {
                x: event.clientX - 10 - offset.x,
                y: event.clientY - 10 - offset.y
            }});
        }
    }
});