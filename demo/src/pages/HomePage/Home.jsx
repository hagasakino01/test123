import { LeftLayout } from "./components/Left/LeftLayout";
import { RightLayout } from "./components/right/RightLayout";
import './Home.css'

function Home() {
    return(
        <div className="home-page">
            <div className="home-container">
            <LeftLayout></LeftLayout>
            <RightLayout></RightLayout>
            </div>
        </div>
    )
}
export default Home;