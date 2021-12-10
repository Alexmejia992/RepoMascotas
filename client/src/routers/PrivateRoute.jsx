import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({  component: Component, ...rest }) {
    // const user = {id: 1, rol:'regular'};
    return(
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("authToken") ? (
                  <Component {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
        />
    );
}
