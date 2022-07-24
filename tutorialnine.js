
// React Hooks

import React, { useState } from "react";
import ReactDOM from "react-dom/client"

function ExoticCars() {
    const [car, modelCar] = useState("Exotic");
}
return (
    <>
    <h1> My godfather has a great garage containing: {car}.</h1>
    <button
        type="button"
        onClick={{()} => modelCar("Lamborghini")}
        >Lamborghini</button>
        <button
            type="button"
            onClick={{()}} =>modelCar("Bugatti")}
            >Bugatti</button>
            <button
                type="button"
                onClick={{()}} =>modelCar("Aston Martin")
            >Aston Martin</button>
            <button
                type="button"
                onClick={{()}} =>modelCar("Pagani")
            >Pagani</button>
            <button
                type="button"
                onClick={{()}} =>modelCar("Phantom Ghost")
                >Phantom Ghost</button>
    </>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExoticCars />);

// useEffect Hook, Our example: wait 30 seconds before user can enter more info
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
    const [count,userDelay] = useState(0);

    useEffect(()) => {
        setTimeout(()) =>
        {
            userDelay((count))
        =>
            count + 30;
        }, 1000);
        }, []); // this empty string is used to set a limit on rendering
return <h1> The user must wait {count} before entering more of their information.</h1>
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Timer />);
}

// Effect cleanup, our example: wait 60 seconds before user can enter more info
import { useState, useEffect } from "react";
import ReactDom from "react-dom/client";

function Timer() {
    const [count, userDelay] = useState(0);

    useEffect(()) => {
        userDelay((count) => count +60);
    }, 1000);

return () => clearTimeout(timer)
}, []);

return <h1> The use must wait {count} before entering more of their information.</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

// React Context

import { useState, createContext, useContext } from "react"
import ReactDOM from "react-dom/client"

const UserContext = createContext();

function Component1() {
    const [name, setHeight] = useState("Pear Orchard","six feet");

    return (
        <UserContext.Provider value={name}>
            <h1>{`You're my favorite child ${name}!`}</h1>
            <Component2 name={name} >/
        </UserContext.Provider>
    );
}
    function Component2() {
        return (
        <>
        <h1> Component 2 </h1>
            <Component3 />
        </>
        };
}

    function Component3() {
        return (
            <>
            <h1>Component3</h1>
            <Component4 />
                </>
        );
}
function Component4() {
            return (
                <>
                <h1>Component4</h1>
                    <Component5 />
                </>
            )}
}
    function Component5() {
        const name = useContext(UserContext);
}
return (
    <>
    <h1> Component 5 </h1>
    <h2>{`Duh, who else is my favorite child ${name}!`}</h2>
    </>
    };

    const root = ReactDOM.createRoot(document.getElementById('root))
    root.render(<Component1 />);

    // useRef
    import {useState, useEffect, useRef} from "react";
    import ReactDOM from "react-dom/client";

    function Vehicleregistration{
    const [vinnumber, setInputValue] = useState("");
    const previousVinnumber = useRef("");

    useEffect(()) => {
    previousVinnumber.current = vinnumber;
    }, [vinnumber]);

        return (
            <>
                <input
                    type={"text"}
                    value={{vinnumber}}
                    onChange={(e) => setInputValue(e.target.value)}
            />
                <h2>Give me your vehicle registration, sir: {vinnumber}</h2>
                <h2>And you said your prior vehicle registration was: {setInputValue.current}</h2>
        </>
        );
}
const root = ReactDOM.createRoot(document.getElementbyId('root'))
    root.render(<Vehicleregistration />);
    
    