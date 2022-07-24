
// React Forms

// Adding forms, let's try fake name generator

function requestIdentity() {
    return (
        <form>
            <label>
            <input type="first name" />
            </label>
            <label>
                <input type="last name" />
            </label>
            <label>
            <input type="age" />
        </label>
            <label>
                <input type="Place of Origin" />
            </label>
            <label>
                <input type="Social Security Number" />
            </label>
            <label>
                <input type="Email Address" />
            </label>
        </form>
    )
}
const root = REACTDOM.createRoot(document.getElementById('root'));
root.render(<requestIdentity/>);

// Handling forms
import {useState} from 'react';
import REACTDOM from 'react-dom/client'

function carForm() {
    const [ownerName, VIN] = useState("");

    return (
        <form>
            <label>Enter current owner name:
                <input type="text"
                       value={ownerName}
                       onChange={(e) => ownerName(e.target.value)}
                       />
            </label>
            <label> Enter vehicle registration number:
            <input type="text"
                   value={VIN}
                   onChange={(e) => VIN(e.target.value)}
                   />
            </label>
        </form>
    )
}
const root = REACTDOM.createRoot(document.getElementById('root'));
root.render(<carForm />);

// Submitting Forms
import {useState} from 'react';
import REACTDOM from 'react-dom/client';

function carForm() {
    const [ownerName,VIN] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The owner name you entered was: ${ownerName}')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The vehicle registration number you entered was: [0-9]{VIN}')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your owner name:
            <input
                type="text"
                value={ownerName}
                onChange={(e) => VIN(e.target.value)}
                />
            </label>
            <input type="submit" >/
        </form>
    )
}
    const root = REACTDOM.createRot(document.getElementById('root'));
    root.render(<carForm />);

// Select
    <select>
    <option value="Bugatti">Bugatti</option>
    <option value="Aston Martin">Aston Martin</option>
    <option value="Lamborghini" selected>Lamborghini</option>
    </select>

function carForm()
    {
        const [ownerName, VIN] = useState("Lamborghini"); // our value is declared here instead of declared in form

        const handleChange = (event) => {
            setMyCarform(event.target.value)
        }
        return (
            <form>
                <select value={ownerName} onChange={{handleChange}}>
                    <option value="Bugatti">Bugatti</option>
                    <option value="Aston Martin">Aston Martin</option>
                    <option value="Lamborghini">Lamborghini</option>
                </select>
            </form>
        )
    }

 