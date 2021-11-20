import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from '../components/layouts/Layout'
import HomePage from "../pages/HomePage"
import AdminPage from "../pages/AdminPage"
import ContactPage from "../pages/ContactPage"
import LoginPage from "../pages/LoginPage"
import MisionPage from "../pages/MisionPage"
import NotFoundPage from "../pages/NotFoundPage"
import UserAccountPage from "../pages/UserAccountPage"
import VisionPage from "../pages/VisionPage"
import RegisterPage from "../pages/RegisterPage"
import AdviserPage from "../pages/AdviserPage"
import PrivateRoute from "./PrivateRoute"


export default function AppRouter() {
    return (
        <div>
            <Router>
                <Layout> 
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="mision" element={<MisionPage />} />
                        <Route exact path="vision" element={<VisionPage />} />
                        <Route exact path="contacto" element={<ContactPage />} />
                        <Route exact path="login" element={<LoginPage />} />
                        <Route exact path="register" element={<RegisterPage/>} />
                        <Route  
                            path="userAccount" 
                            element={ 
                            <PrivateRoute> 
                                <UserAccountPage /> 
                            </PrivateRoute> } 
                        />
                        <Route
                            path="admin" 
                            element={
                            <PrivateRoute>
                                <AdminPage/>
                            </PrivateRoute>} 
                        />
                        <Route
                            path="adviser" 
                            element={
                            <PrivateRoute>
                                <AdviserPage/>
                            </PrivateRoute>} 
                        />
                        
                        {/* excepcion */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>  
                </Layout>
            </Router>
        </div>
    )
}
