import { useState } from "react"
import req from "../lib/req";
import { toast } from "../components/Toaster";
import { useNavigate } from "react-router-dom";

export default function useAuthentication() {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    function register(data) {
        req({ method: "POST", uri: '/user/register', data })
            .then(() => {
                navigate('/login');
                toast('An email verification link sent to your email.');
            })
            .catch(err => console.log(err))
    }

    return {
        register,
    }
}