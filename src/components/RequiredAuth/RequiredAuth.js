import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const RequiredAuth = ({ child }) => {

    // Logout if token.exp is in the past (expired)
    const payload = getTokenPayload();

    const navigate = useNavigate();

    if (payload && payload.exp && payload.exp <= Date.now() / 1000) {
        applyToken(null);
        navigate("/login");
        return null;
    }

    if (!getToken()) {
        return navigate('/login');
    } else {
        return child;
    }
};

const applyToken = (token) => {

    if (token) {

        localStorage.setItem("access_token", token);
        axios.interceptors.request.use(
            (config) => {
                config.headers["Authorization"] = `Bearer ${token}`;
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

    } else {
        localStorage.removeItem("access_token");
        delete axios.defaults.headers.common.Authorization;
    }
};

const getTokenPayload = () => {
    const token = getToken();
    if (!token) return null;

    return jwtDecode(token);
};

const getToken = () => {
    return localStorage.getItem("access_token");
};