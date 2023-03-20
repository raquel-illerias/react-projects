//import routes
import { Routes,Route } from "react-router-dom";
//import pages
import Homepage from "../Homepage";
import ProfileResults from "../ProfileResults";
//import Components
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"

export default function Layout() {
    return (
        <>
            <Header></Header>
            {<Routes>
                <Route path="/" element={<Homepage  />} />
                <Route path="/profileResults" element={<ProfileResults  />} />
            </Routes>
            }
            <Footer></Footer>
        </>
    )
}