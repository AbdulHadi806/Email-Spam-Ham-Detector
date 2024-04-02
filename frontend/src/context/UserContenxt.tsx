// UserContext.tsx
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { toast } from 'react-toastify';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    loading: boolean;
    loginUser: (data: { username: string, email: string, password: string }) => Promise<boolean>;
}

const initialUserContext: UserContextType = {
    user: null,
    loading: true,
    loginUser: async () => false,
};

const UserContext = createContext<UserContextType>(initialUserContext);

export const useUserContext = (): UserContextType => useContext(UserContext);

interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token')
            console.log(token,':ttokenoken')
            if (token) {
                const response = await fetch('http://127.0.0.1:8000/api/user/profile', {
                    method: 'GET',
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const userData: User = await response.json();
                console.log(userData, '::userData')
                setUser(userData);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        } finally {
            setLoading(false);
        }
    };

    const loginUser = async (data: { username: string, email: string, password: string }) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/user/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                return false
            }
            const resData = await response.json()
            await fetchUser()
            toast.success('User logged in!');
            localStorage.setItem('token', resData.token)
            return true
        } catch (error) {
            if (typeof error === 'string') {
                console.error(error);
            } else if (error instanceof Error) {
                console.error(error.message || "Something went wrong");
                toast.error(error.message || "Something went wrong");
            } else {
                console.error("An unknown error occurred");
                toast.error("An unknown error occurred");
            }
            return false
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, loginUser }}>
            {children}
        </UserContext.Provider>
    );
};
