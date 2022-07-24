
// useReducer Hook

import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const driverLicense = [
    {
        name: "Pear Orchard",
        weight: 210,
        height: "six feet",
        complete: false
    },
    {
        name: "Raspberry Jam",
        weight: 300,
        height: "five foot ten",
        complete: false
    },
];

const reducer = (state,action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((license)) => {
                if (license.name === action.name) {
                    return (...license,complete: !license.complete );
                }else {
                    return license;
                }
        }
    });
default:
    return state;
};

function Licenses() {
    const[licenses,dispatch] = useReducer(reducer,driverLicense);

    const handleComplete = (license) => {
        dispatch({type: "COMPLETE",id: license.name})
    }
};

return (
    <>
        {licenses.map(license) => (
            <div key={license.name>
            <label>
            <input
            type="checkbox"
            checked={license.complete}
            onChange={() => handleComplete(license)}
    />
        {license.weight}
            </label>
            </div>
))}
    </>
            );
        }

        const root = ReactDOM.createRoot(document.getElementbyId('root'))
        root.render(<Licenses />);

        // useCallback

        import { useState, useCallback} from "react";
        import ReactDOM from "react-dom/client"
        import Licenses from "./Licenses";

        const driverLicenses = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState([]);

    const increment = () => {
        setHeight((h)) => h + 1);
    };
    const addWeight = useCallback(() => {
        setWeight((w)) => [...w, "New Weight"];
    } [weights]);
    }

    return (
        <>
        <Weights weights={{weights}} addWeight ={addWeight} />
            <hr />
            <div>
                Height: {height}
                <button onClick={increment}+</button>
            </div>
        </>
);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<driverLicenses />);

// Todos.js

import { memo } from "react";

const Licenses = ({licenses, addLicense}) => {
    console.log("child render");
    return (
        <>
        <h2> My licenses</h2>
            {licenses.map(license, index) => {
            return <p key={index}>{license}</p>;
            })}
            <button onClick={{addLicense}>Add license</button>
        </>
    );
};
            export default memo(licenses)

            // useMemo Hook returns a memoized value, useCallback returns a memoized function



