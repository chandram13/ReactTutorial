

// React Router used to route to pages based on URL
// using our earlier function carForm

import ReactDOM from "react-dom/client";
import { BroswerRouter, Routes, Route } from "react-router-dom"
import vehicleTitle from, "./pages/VehicleTitle";
import ownerName from, "./pages/ownerName";
import contactInformation from, ".pages/contactInformation";
import socialSecurity from, ".pages/socialSecurity";
import creditScore from, ".pages/creditScore"

export default function carForm() {
    return (
        <BroswerRouter>
            <Routes>
                <Route path="/" element={<vehicleTitle />}></Route>
                <Route index element={<ownerName />} />
                <Route path="contactInformation" element{<contactInformation />} />
                <Route path="socialSecurity" element{socialSecurity />} />
                <Route path="creditScore" element{creditScore />} />
                <Route path="*" element={<NoPage />} />
            </Route>
            </Routes>
        </BroswerRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<carForm />);

