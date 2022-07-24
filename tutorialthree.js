
// The Spread Operator

const listOne = [8,9,10];
const listTwo = [11,12,13];
const listsCombined = [...listOne, ...listTwo];

// Deconstructing
const listOne = [8,9,10];
const [eight,nine, ...rest] = listOne;

const myTheater ={
    movie: "My Movie",
    concessions: "Popcorn and milk duds",
    seating: "reserved"
}

const yourTheater ={
    employees: 50,
    security: "pat downs and bag checks",
    movieDoors: 12
}

const ourTheaters = {...myTheater, ...yourTheater};

// Modules

const ticketSales = 1,000,000
const movie = "STH"

export {ticketSales, movie}

// default export
export default const ticketSales;

// importing
import {ticketSales, movie}
import ticketSales

// Ternary operator: simplified if/else statment
if (month >= 3) {
    document.getElementById("demo").innerHTML = "Welcome to sunny California!"
} else if { (month > 9)
    document.getElementbyId("demo").innerHTML = "Welcome to the fall season."
    else:
    document.getElementbyId("demo").innerHTML = "It is currently winter."
}
// using a tenary operator
month >= 3 document.getElementById("demo").innerHTML = "Welcome to sunny California!" : else if month > 9 document.getElementbyId("demo").innerHTML = "Welcome to the fall season." ? document.getElementById("demo").innerHTML = "It is currently winter.";

// React Render HTML
ReactDOM.render(<p>Welcome to my website.</p>, document.getElementById('root'));
<body>
<div id="website"></div>
</body>

const myMission = <h2>"I plan on pursuing a career."</h2>
ReactDom.render(myMission, document.getElementById('root'));

// Root Node
<body>
<header id="myMission"></header>
</body>

ReactDOM.render(<p> This is my lifelong goal.</p>, document.getElementById('myMission'));

