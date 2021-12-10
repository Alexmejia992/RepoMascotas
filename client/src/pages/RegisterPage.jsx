import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

import axios from "axios"
import ReCAPTCHA from 'react-google-recaptcha'

export default function RegisterPage({ history }) {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const RegisterHandleSubmit = async (e) =>{
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }
        if(password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("")
            }, 5000 );
            return setError("Las contraseñas no coinciden.");
        }
        try {
            const {data} = await axios.post(
                '/api/auth/register', 
                {username, email, password}, config);

            localStorage.setItem("authToken", data.token);
            history.push("/")
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    const reRef = React.createRef();

    return (
            <Container className="mt-5">
                <h2>Register</h2>
                {error && <span>{error}</span>}
                <Row>
                    <Col xs={6}>
                        <Form onSubmit={RegisterHandleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" 
                                    placeholder="Enter email" 
                                    value={ email } 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label id="inlineFormInput">
                                    User Name
                                </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    placeholder="Jane Doe"
                                    required
                                    value={ username }
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" 
                                    placeholder="Password" 
                                    required
                                    value={ password }
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" 
                                    placeholder="Password" 
                                    required
                                    value={ confirmPassword }
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Registrar
                            </Button>
                            <span> ¿Ya tienes una cuenta? <Link to="/login">Login</Link></span>
                        </Form>
                    </Col>
                </Row>
                <ReCAPTCHA 
                    sitekey='6LczRCkdAAAAAM3fxlBTqVNjKWE633lTwMDK_eRf'
                    size="normal"
                    ref={reRef}
                />
            </Container>
            
            
    )   
}


// export default function RegisterPage() {
    
//         const [user,setUser] = useState({
//             name:"",
//             email:"",
//             password: ""
//         });
    
//         const handleChange = e =>{
//         const {name,value} = e.target
//         setUser({
//         ...user,//spread operator 
//         [name]:value
    
//         })
    
//         };
    
//     //register function 
//        const egister = ()=>{
//        const {name,email,password} = this.user
//        if (name && email && password){
//         axios.post("http://localhost:6969/Register", this.user )
//         .then(res=>console.log(res))
//        }
//        else{
//            alert("invalid input")
//        }};
    
//     return (
//         <div>    
//         <h1>Hola mundo</h1>
// <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
//     <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
//         Create a new account
//     </div>
//     <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
//         Already have an account ?
//         <a href="#" target="_blank" class="text-sm text-blue-500 underline hover:text-blue-700">
//             Sign in
//         </a>
//     </span>
//     <div class="p-6 mt-8">
//         <form action="#">
//             <div class="flex flex-col mb-2">
//                 <div class=" relative ">
//                     <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" value={user.name} onChange={handleChange} placeholder="FullName"/>
//                     </div>
//                 </div>
//                 <div class="flex gap-4 mb-2">
//                     <div class=" relative ">
//                         <input type="text" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>

//                         </div>

//                         </div>
//                         <div class="flex flex-col mb-2">
//                             <div class=" relative ">
//                                 <input type="password" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onClick={handleChange}    placeholder="password"/>
//                                 </div>
//                             </div>
//                             <div class="flex w-full my-4">
//                                 <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={egister} >
//                                     Register
//                                 </button>
//                             </div>
//                         </form>


//                                                         </div>
//                                                     </div>

//         </div> 
//     )
// }
