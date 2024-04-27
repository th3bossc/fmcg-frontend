import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { Route, User, Notification } from './types';
import { usePathname, useRouter } from 'next/navigation';
import { getProfile } from './lib/auth';
import { getNotifications, getRoutes } from './lib/general';


export const AuthContext = createContext<{
    isLoggedIn: boolean,
    user: User | null,
    jwt: string | null,
    loading: boolean,
    logIn: (jwt: string) => void,
    logOut: () => void,
    routes: Route[],
    notifications: Notification[]
} | null>(null);

export const AuthContextProvider = ({
    children
}: {
    children: ReactNode
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [jwt, setJwt] = useState<string | null>(null);
    const [routes, setRoutes] = useState<Route[]>([]);
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const setAuthenticatedUser = useCallback(async (token: string): Promise<void> => {
        const currentPath = pathname.split("/")[1];

        setLoading(true);
        try {
            const currentUser = await getProfile(token);
            const routeData = await getRoutes();
            const notificationData = await getNotifications(token);
            localStorage.setItem("jwt", token);
            setJwt(token);
            setUser(currentUser);
            setIsLoggedIn(true);
            setRoutes(routeData || []);
            setNotifications(notificationData || []);

            if (currentPath === "") {
                setLoading(false);
                return;
            }
            router.push("/dashboard")
        }
        catch (err) {
            console.log(err);
            localStorage.removeItem('jwt');
            setJwt(null);
            setIsLoggedIn(false);
            setUser(null);
            router.push("/");
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
        setAuthenticatedUser(jwt);
    }

    const logOut = (): void => {
        localStorage.removeItem('jwt');
        setJwt(null);
        setUser(null);
        setIsLoggedIn(false);
        return router.push("/");
    }



    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            user,
            jwt,
            loading,
            logIn,
            logOut,
            routes,
            notifications
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