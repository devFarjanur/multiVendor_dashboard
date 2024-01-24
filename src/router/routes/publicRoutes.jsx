import React, { lazy, Suspense } from "react";

const Login = lazy(() => import('../../views/auth/Login'))
const Register = lazy(() => import('../../views/auth/Register'))
const AdminLogin = lazy(() => import('../../views/auth/AdminLogin'))

const publicRoutes = [
    {
        path: '/login',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Login></Login>
            </Suspense>
        )
    },
    {
        path: '/register',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Register></Register>
            </Suspense>
        )
    },
    {
        path: '/admin/login',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <AdminLogin></AdminLogin>
            </Suspense>
        )
    }
]

export default publicRoutes;
