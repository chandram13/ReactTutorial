
// React Components

Class myVehicle extends React.Component {
    render() {
        return <h2>You may drive to the destination since you have more than one passenger.</h2>;
    }
}

// Function component
function emailAddress () {
    return <h3>Want to ask any questions or message me? Email me at jsreact@gmail.com</h3>
}

const root = ReactDOM.createRoot(document.getElementById('root');
root.render(<Email />);
    }
}
// Props

function myBook(props){
    return <h3> My book is a fictional novel about a car driver named {props.name}. </h3>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<myBook name="World's Favorite Driver"/>)

// React Conditionals

function Achievement(props) {
    const isAchievement = props.isAchievement;
    if (isAchievement) {
        return <MadeAchievement/>
    }
    return <MissedAchievement/>
}
const root = REACTDOM.createRoot(document.getElementById('root'));
root.render(<Achievement isAchievement={false} />);

// Ternary Operator if statement denoted by ?

function Achievement(props) {
    const isAchievement = props.isAchievement;
    return {
        <>
            {isAchievement ? <MadeAchievement/> : <MissedAchievement/> }
        </>
    }
}
const root = REACTDOM.createRoot(document.getElementById('root');
root.render(<Achievement isAchievement={false} />);

// React Lists

function Motorcycles(props) {
    return <li> I own this: {props.brand} </li>;
}
function Supercars( {
    const supers = ['Bugatti','Aston Martin','Lamboghini'];
}
return (
    <>
        <h1> I just bought a lightly used Bugatti.</h1>
        <h1> My Aston Martin goes from 0 to 60 in under 10 seconds.</h1>
        <h1> My lamboghini is so fast on the freeway, it got everyone's attention. </h1>
        <ul>
            {supers.map((Motorcycles) => <Motorcycles brand={Motorcycles} />}
        </ul>
    </>
)
const root = REACTDOM.createRoot(document.getElementById('root'));
    root.render(<Supercars />);

// Keys, here we are assigning purchases to brands

function Motorcycles(props) {
    return <li> I own this: {props.brand} </li>
}

function Supercars() {
    const supers = [
        {purchase: 1, brand: 'Bugatti'},
        {puchase: 2, brand: 'Aston Martin'},
        {purchase: 3, brand: 'Lamborghini'}
    ];
    return (
        <h1> I just bought a lightly used Bugatti.</h1>
        <h1> My Aston Martin goes from 0 to 60 in under 10 seconds.</h1>
    <h1> My lamboghini is so fast on the freeway, it got everyone's attention.</h1>
    <ul>
        {supers.map((Motorcycles) => <Super key={{super.purchase}} brand = {super.brand} />}
    </ul>
    )
}

const root = REACTDOM.createRoot(document.getElementById('root'));
root.render(<Supercars />);

