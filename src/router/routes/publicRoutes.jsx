import React, { lazy, Suspense } from "react";

const Login = lazy(() => import('../../views/auth/Login'))
const Register = lazy(() => import('../../views/auth/Register'))

const publicRoutes = [
    {
        path: '/login',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Login />
            </Suspense>
        )
    },
    {
        path: '/register',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Register />
            </Suspense>
        )
    }
]

export default publicRoutes;
