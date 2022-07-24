
// Classes

class House {
    constructor(rooms){
        this.carpet = rooms;
    }
}

present() {
    return 'My whole house has these' + this.carpet + 'rooms.'
}
}

const myhouse = new House("Marble");
myhouse.present();

// Class Inheritance
class House {
    constructor(rooms){
        this.carpet = rooms;
    }

    present() {
        return 'My whole house has these' + this.carpet + 'rooms.'
    }
}

const myhouse = new House("Marble");
myhouse.present();

class House extends Garage {
    constructor(house,pai){
        super(house);
        this.painting = pai;
    }
    show() {
        return this.present() + ', Our garage has a great ' + this.Garage
    }
}
const myhouse = new Garage("Realtor","Craftsman Storage System");
myhouse.show();

// Functions

tools = function(screwdriver,drill,ladder){
    screwdriver = "Phillips"
    drill = "Craftsman"
    ladder = "Werner"
    document.getElemenByID("demo").innerHTML = "Here are the tools I use the most: " + screwdriver + drill + ladder;
}

class Garage {
    constructor() {
        this.car = "sedan";
    }
    changeCar = function() {
        document.getElementById("demo").innerHTML = += car;
    }
}

const myGarage = new Garage(); // make earlier defined a class into a variable

window.addEventListener("compact",myGarage.changeCar);

document.getElementById("btn").addEventListener("click",myGarage.changeCar);

// Array Methods, using map to create lists
// Generate a list of items from the array: myTools
const myTools = ['ladder','screwdriver','drill'];
const myList = myTools.map((item)) => <p>{item}</p>)

// Destructuring

const icecream =['vanilla ice cream','chocolate syrup','ice cream cone'];
const[creamBase,topping,container] = icecream;

// calling just base ice cream and topping
const[creamBase,topping,] = icecream;

// return destructured array
document.getElementbyId("demo").innerHTML = iceCream;

// Destructuring with Boyle's law
function Boyle(p1 * v1 * p2 * v2) {
    int p1 = inital pressure;
    int v1 = initial gas volume;
    int p2 = final pressure;
    int v2 = final volume;
    return [p1,v1,p2,v2]
}
const [p1,v1,p2,v2] = Boyle(p1 * v1 == p2 * v2);

const Regal = {
    movie: "My Movie",
    quality: "IMAX 3D",
    rating: "G, for everyone",
    Year: 2022,
    seating: "reserved"
}

myMovie(Regal);

function myMovie({movie,quality,rating,year,seating}) {
    const movieCharacteristics = "Title" + movie + "Seen in:" + quality + "The assigned rating is: " + rating + "Year released in" + Year + "Exclusively in" + Seating + ".";
}

// nested objects in destructuring

const Regal = {
    movie: "My Movie",
    quality: "IMAX 3D",
    rating: "G, for everyone",
    Year: 2022,
    seating: "reserved",
    profit {
        seatsSold = 100,
        concessions = 800,
        showtimes = 4,
        employees = 32,
    }
    myTheater(Regal,seating);

    function myTheater({movie,profit}: {concessions} }) {
        const movieData = movie + "has sold drinks and snacks in total of:" + concessions + "dollars."
}

