module.exports.favoriteFoods = [

    "pickles",
    "grapefruit",
    "olives",
    "lemon",
    "cheese",
    "cherries"
]
module.exports.favoriteFoodsLoop = () => {
    for (i = 0; i < this.favoriteFoods.length; i++){
        console.log(this.favoriteFoods[i]);
    }
}
