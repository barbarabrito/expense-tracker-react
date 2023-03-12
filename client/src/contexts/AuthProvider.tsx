import { useState } from "react";
import userService from "../services/user.service";
import { User } from "../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {
        const response = await userService.login(email, password);

        if (response.data.user && response.data.token) {

            setUser(response.data.user);
            console.log(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            // setToken(data.token);
            return true;
        }
        return false;
    }


    // const setToken = (token: string) => {
    //     localStorage.setItem('authToken', token);
    //     // console.log(localStorage)
    // }

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
}