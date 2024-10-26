import React from 'react'
import { Children, lazy, Suspense } from 'react'
import Layout from '../components/Layout/Layout';
import TeamMembers from '../pages/TeamMembers/TeamMembers';
const Home = lazy(() => import('../pages/Home'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Login = lazy(() => import('../pages/Login/Login'));
const ForgotPwd = lazy(() => import('../pages/ForgotPassword/ForgotPwd'));
const ResetPwd = lazy(() => import ('../pages/ResetPassword/ResetPwd'))
const Routes = [
    {
        path:'/',
        element:<Layout />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SignUp />
                        </Suspense>
                )
            },
            {
                path: "/login",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Login />
                        </Suspense>
                )
            },
            {
                path: "/forgotPwd",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ForgotPwd />
                        </Suspense>
                )
            },
            {
            path: "/resetPwd",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <ResetPwd />
                    </Suspense>
            )
        },
        {
            path: "/team-members",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <TeamMembers />
                    </Suspense>
            )
        },
        ]
    },
    {
        path:'*',
        element:<h1>404 - page not found</h1>,
    },
    
    ];
    export default Routes;
