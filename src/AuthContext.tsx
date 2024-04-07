import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { User } from './types';
import { usePathname, useRouter } from 'next/navigation';
import { getProfile } from './lib/auth';


export const AuthContext = createContext<{
    isLoggedIn: boolean,
    user: User | null,
    jwt: string | null,
    loading: boolean,
    logIn: (jwt: string) => void,
    logOut: () => void
} | null>(null);

export const AuthContextProvider = ({
    children
}: {
    children: ReactNode
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [jwt, setJwt] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const setAuthenticatedUser = useCallback(async (token: string): Promise<void> => {
        const currentPath = pathname.split("/")[1];

        setLoading(true);
        try {
            const currentUser = await getProfile(token);
            localStorage.setItem("jwt", token);
            setJwt(token);
            setUser(currentUser);

            if (currentPath === "") {
                setLoading(false);
                return;
            }
            router.push("/dashboard")
        }
        catch (err) {
            localStorage.removeItem('jwt');
            setJwt(null);
            setUser(null);
            router.push("/login");
        }
        setLoading(false);
    }, [router, pathname]);

    useEffect(() => {
        let jwt = localStorage.getItem("jwt");
        if (jwt)
            setAuthenticatedUser(jwt);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logIn = (jwt: string): void => {
        setIsLoggedIn(true);
        setAuthenticatedUser(jwt);
    }

    const logOut = (): void => {
        localStorage.removeItem('jwt');
        setJwt(null);
        setUser(null);
        router.push("/login");
    }



    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            user,
            jwt,
            loading,
            logIn,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )

}


export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }
    return context;
}