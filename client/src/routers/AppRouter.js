import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from '../components/layouts/Layout'
import Navigation from '../components/Navigation'

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
import ResetPage from "../pages/ResetPage"
import ForgotPage from "../pages/ForgotPage"
import PetMembershipPage from "../pages/PetMembershipPage"


export default function AppRouter() {
    return (
        <div>
            <Router>
                <Layout>
                    <Switch> 
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/mision" component={MisionPage} />
                        <Route exact path="/vision" component={VisionPage} />
                        <Route exact path="/contacto" component={ContactPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/register" component={RegisterPage} />
                        <Route exact path="/recuperarcontraseña" component={ForgotPage} />
                        <Route exact path="/resetPassword/:resetToken" component={ResetPage} />
                        <PrivateRoute  
                            exact
                            path="/userAccount" 
                            component={ 
                                UserAccountPage 
                            } 
                        />
                        
                        <PrivateRoute  
                            exact
                            path="/petMembership" 
                            component={ 
                                PetMembershipPage
                            } 
                        />
                        <PrivateRoute
                            exact
                            path="/admin" 
                            component={
                                AdminPage
                            }
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
                    </Switch>
                </Layout>
            </Router>
        </div>
    )
}
