import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    // const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook } = useFirebase();
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';



    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div>
            <Container className="mt-5">
                <h2 className="h2">Please Sign Up <span className="bg-dark p-1">to Get Access</span></h2>
                <h5>DISCOVER YOUR NEXT EXPERIENCES, AND PLACES.</h5>
                <hr />
                <div className="my-5">
                    <Button onClick={handleGoogleLogin} className="mx-1" variant="danger"><i class="fab fa-google"></i>  Sign In With Google</Button>
                    <Button onClick="" className="mx-1" variant="info"><i class="fab fa-facebook"></i>  Sign In With FaceBook</Button>
                    <Button onClick="" className="mx-1" variant="dark"><i class="fab fa-github-alt"></i>  Sign In With Github</Button>
                </div>
            </Container>

            <Container fluid className="footerImg p-0">
                <img src="https://i.ibb.co/7nYsn1T/mountain.jpg" alt="" />
            </Container>

        </div>
    );
};

export default Login;