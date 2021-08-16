import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

export default function Login(){
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState('');
    const [password, usePassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => {};

    useEffect(() => {
        document.title = 'Login - Instagram';
    }, [])

    return(
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img 
                src="/images/iphone-with-profile.jpg" 
                alt="iphone with Instagram"
                className="max-w-full"
                />
            </div>
            <div className="flex flex-col w-2/5">
                <h1 className="flex justify-center w-full">
                    <img src="/images/logo.png" alt="Instagram" className="" />
                </h1>
                {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
            </div>
        </div>
    )
    
}