import { Navigate, Route } from 'react-router-dom'

export default function PrivateRoute({ children, props }) {
    const user = {id: 1, rol:'regular'};
    return user ? children : <Navigate to="/login" />
    // if(!user) return <Navigate to="/login" />
    

    // return (
    //     <Route {...props}/>
    // )
}
