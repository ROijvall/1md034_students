function MenuItem(name, kcal, fact, allergens){
    this.name = name;
    this.calories = kcal;
    this.fact = fact;
    this.allergens = allergens;
}

function burgerArray() {
    let burgerOrginal = new MenuItem('Bastu burger orginal', '7000', '100% beef goodness', 'contains ALL allergens', "https://cdn-rdb.arla.com/Files/arla-se/2409428905/01a6ac3d-4676-4781-8643-5cbf4387d9dd.jpeg?mode=crop&w=1680&h=750&scale=both&ak=f525e733&hm=e6b63260");
    let burgerChicken = new MenuItem('Bastu kyckling', '70', 'hot n ready', 'may contain peanuts',"https://cdn-rdb.arla.com/Files/arla-se/2409428905/01a6ac3d-4676-4781-8643-5cbf4387d9dd.jpeg?mode=crop&w=1680&h=750&scale=both&ak=f525e733&hm=e6b63260");
    let burgerVegan = new MenuItem('Bastu vegan', '700', '100% not beef', 'may contain soy',"https://cdn-rdb.arla.com/Files/arla-se/2409428905/01a6ac3d-4676-4781-8643-5cbf4387d9dd.jpeg?mode=crop&w=1680&h=750&scale=both&ak=f525e733&hm=e6b63260");
    let bacon = new MenuItem('Bastu bacon', '5000', '200% RDI for sodium', 'contains gluten',"https://cdn-rdb.arla.com/Files/arla-se/2409428905/01a6ac3d-4676-4781-8643-5cbf4387d9dd.jpeg?mode=crop&w=1680&h=750&scale=both&ak=f525e733&hm=e6b63260");
    let extra = new MenuItem('Bastu random', '?', 'only available at end of day', 'random allergen',"https://cdn-rdb.arla.com/Files/arla-se/2409428905/01a6ac3d-4676-4781-8643-5cbf4387d9dd.jpeg?mode=crop&w=1680&h=750&scale=both&ak=f525e733&hm=e6b63260");
    let burgers = [burgerOrginal, burgerChicken, burgerVegan, bacon, extra]
    return burgers;
}


    function forLoop() {
        var myElement = document.getElementById("burgers");
        for (burger in burgers){
        var listItem = document.createElement("li");
        var listValue = document.createTextNode(burger.name);
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);
        }
}
