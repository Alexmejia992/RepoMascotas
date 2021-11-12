import Navigation from "../Navigation.jsx";

export default function Layout({ children }) {
    return (
        <>
           <Navigation /> 
            {children}
        </>
    )
}
