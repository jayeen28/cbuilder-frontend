import { useEffect, useState } from "react"
import req from "../lib/req";
import { toast } from "../components/Toaster";
import { useNavigate } from "react-router-dom";

export default function useAuthentication() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [toggleSession, setToggleSession] = useState(false);
    const navigate = useNavigate();

    function register(data) {
        setLoading(true);
        req({ method: "POST", uri: '/user/register', data })
            .then(() => {
                navigate('/login');
                toast('An email verification link sent to your email.');
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }

    function login(data) {
        setLoading(true);
        req({ method: "POST", uri: '/user/login', data })
            .then(() => {
                setToggleSession((prev) => !prev);
                navigate('/updateprofile');
            })
            .catch(() => toast('Something went wrong !', 'error'))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        setLoading(true);
        req({ method: 'GET', uri: '/user/me' })
            .then(({ data }) => setUser(data))
            .catch(() => navigate('/login'))
            .finally(() => setLoading(false));
    }, [toggleSession, navigate]);

    return {
        register,
        login,
        user,
        loading
    }
}