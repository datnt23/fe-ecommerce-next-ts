"use client";

import React, {
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useState,
} from "react";
import { ActionMapType, AuthStateType, AuthUserType } from "../type";
import localStorageAvailable from "../../utils/local-storage";
import { AuthContext } from "./auth-context";
import { isValidToken, setRefreshToken, setSession } from "./utils";
import axiosInstance from "../../utils/axios";
import { API } from "@/config/api";

// ----------------------------------------------------------------------
const STORAGE_KEY = "accessToken";
const LOADING = "loading";
const AUTHENTICATED = "authenticated";
const UNAUTHENTICATED = "unauthenticated";

enum Types {
    INITIAL = "INITIAL",
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    LOGOUT = "LOGOUT",
}

type Payload = {
    [Types.INITIAL]: {
        user: AuthUserType;
    };
    [Types.LOGIN]: {
        user: AuthUserType;
    };
    [Types.REGISTER]: {
        user: AuthUserType;
    };
    [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];
// ----------------------------------------------------------------------
const initialState: AuthStateType = {
    user: null,
    loading: true,
};

const reducer = (state: AuthStateType, action: ActionsType) => {
    if (action.type === Types.INITIAL) {
        return {
            loading: false,
            user: action.payload.user,
        };
    }
    if (action.type === Types.LOGIN) {
        return {
            ...state,
            user: action.payload.user,
        };
    }
    if (action.type === Types.REGISTER) {
        return {
            ...state,
            user: action.payload.user,
        };
    }
    if (action.type === Types.LOGOUT) {
        return {
            ...state,
            user: null,
        };
    }
    return state;
};
// ----------------------------------------------------------------------
type Props = {
    children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [openDrawer, setOpenDrawer] = useState(false);

    const storageAvailable = localStorageAvailable();

    const initialize = useCallback(async () => {
        try {
            const accessToken = storageAvailable
                ? localStorage.getItem(STORAGE_KEY)
                : null;

            if (accessToken && isValidToken(accessToken)) {
                setSession(accessToken);

                const response = await axiosInstance.get(API.endpoints.auth.me);

                const { user } = response.data.data;

                dispatch({
                    type: Types.INITIAL,
                    payload: {
                        user,
                    },
                });
            } else {
                dispatch({
                    type: Types.INITIAL,
                    payload: {
                        user: null,
                    },
                });
            }
        } catch (error) {
            dispatch({
                type: Types.INITIAL,
                payload: {
                    user: null,
                },
            });
        }
    }, []);

    useEffect(() => {
        initialize();
    }, [initialize]);

    //* LOGIN
    const login = useCallback(async (email: string, password: string) => {
        const response = await axiosInstance.post(API.endpoints.auth.login, {
            email,
            password,
        });

        const { data } = response.data;

        const { user, access_token, refresh_token } = data;

        setSession(access_token);
        setRefreshToken(refresh_token);

        dispatch({
            type: Types.LOGIN,
            payload: {
                user,
            },
        });
    }, []);

    //* Register
    const register = useCallback(
        async (
            email: string,
            password: string,
            confirmPassword: string,
            firstName: string,
            lastName: string
        ) => {
            const response = await axiosInstance.post(API.endpoints.auth.register, {
                email,
                password,
                confirmPassword,
                firstName,
                lastName,
            });
            const { data } = response.data;

            const { user, access_token, refresh_token } = data;

            setSession(access_token);
            setRefreshToken(refresh_token);

            dispatch({
                type: Types.REGISTER,
                payload: {
                    user,
                },
            });
        },
        []
    );

    //* LOGOUT
    const logout = useCallback(async () => {
        setSession(null);
        setRefreshToken(null);
        dispatch({
            type: Types.LOGOUT,
        });
    }, []);

    //* Drawer
    const onToggleDrawer = useCallback(() => {
        setOpenDrawer((prev) => !prev);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []);

    const checkAuthenticated = state.user ? AUTHENTICATED : UNAUTHENTICATED;

    const status = state.loading ? LOADING : checkAuthenticated;

    const memoizedValue = useMemo(
        () => ({
            user: state.user,
            loading: status === LOADING,
            authenticated: status === AUTHENTICATED,
            unauthenticated: status === UNAUTHENTICATED,
            open: openDrawer,
            //
            login,
            register,
            logout,
            onToggle: onToggleDrawer,
            onClose: onCloseDrawer,
        }),
        [
            login,
            logout,
            register,
            onToggleDrawer,
            onCloseDrawer,
            state.user,
            status,
            openDrawer,
        ]
    );

    return (
        <AuthContext.Provider value={memoizedValue}>
            {children}
        </AuthContext.Provider>
    );
}
