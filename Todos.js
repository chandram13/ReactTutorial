
import { useState } from "react";
import ReactDOM from "react-dom/client";

const Todos = ({todos}) => {
    console.log("child render");
    return (
        <>
            <h2> My Todos</h2>
            {todos.map((todo,index) => {
            return <p key={index}>{todo}</p>;
            }}
        </>
    )
};

export default Todos;

// Solution use memo
import { memo } from "react";

const Todos = ({todos}) => {
    console.log("child render");
}
return (
    <>
    <h2> My Todos</h2>
        {todos.map(todo,index) => {
        return <p key={index}>{todo}</p>;
        }}
    </>
)
};

export default memo(Todos);

// Inline Styling
const Header = () => {
    return (
        <>
        <h1 style={{colorName= "orange"}}This is my style.</h1>
        <p> Here's some information about my style.</p>
        </>
    );
}

// JS Object
const Header = () => {
    const websiteStyle = {
        color: "red",
        backgroundColor: "AngelsRed",
        padding: "20px",
        fontFamily: "Georgia"
    };
    return (
        <>
        <h1 style={{colorName= "orange"}}This is my style.</h1>
        <p> Here's some information about my style.</p>
        </>
    );
}

// CSS Modules
// Pretend this is a CSS file called: car-style.module.css
.bigGallardo {
    color: LimeGreen;
    padding: 60px;
    font-family: Times New Roman;
    text-align: center;
}
// now we import
import styles from './car-style.module.css'

const myVehicle = () => {
    return <h1 className={styles.bigGallardo}Look at my new Lamborghini Gallardo!</h1>;
}
export default myVehicle;