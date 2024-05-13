import Header from "../../Headr/Headr";
import {Outlet} from "react-router-dom";
import './MainLayout.css'

const MainLayout = () => {
    return <div className={'mainLayout'}>
        <Header/>
        <div className={'container'}>
            <Outlet/>
        </div>
    </div>
}
export default MainLayout