import React from 'react'
import { Children, lazy, Suspense } from 'react'
import Layout from '../components/Layout/Layout';
import TeamMembers from '../pages/TeamMembers/TeamMembers';
import routes from '../utils/routesObj';
import AddMemberStyles from '../components/AddMembers/AddMembersStyles';
import AddMembers from '../components/AddMembers/AddMembers';
import Profile from '../pages/Profile/Profile';
import Notification from '../pages/Notification/Notification';
import Feedback from '../pages/Feedback/Feedback';
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Login = lazy(() => import('../pages/Login/Login'));
const ForgotPwd = lazy(() => import('../pages/ForgotPassword/ForgotPwd'));
const ResetPwd = lazy(() => import ('../pages/ResetPassword/ResetPwd'));
const Teams = lazy(() => import ( "../pages/Teams/Teams"));
const Filters = lazy(() => import ("../components/Filters/Filters"))
const EditMembers = lazy (() => import ('../components/EditMembers/EditMembers'))
const Routes = [
    {
        path:routes.home,
        element:<Layout />,
        children: [
            {
                path: routes.signUp,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SignUp />
                        </Suspense>
                )
            },
            {
                path: routes.login,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Login />
                        </Suspense>
                )
            },
            {
                path: routes.forgotPassword,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ForgotPwd />
                        </Suspense>
                )
            },
            {
            path: routes.resetPassword,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <ResetPwd />
                    </Suspense>
            )
        },
        {
            path: routes.teamMembers,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <TeamMembers />
                    </Suspense>
            )
        },
        {
            path: routes.profile,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Profile />
                    </Suspense>
            )
        },
        {
            path: routes.teams,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Teams />
                    </Suspense>
            )
        },
        {
            path: routes.filters,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Filters />
                    </Suspense>
            )
        },
        {
            path: routes.editMembers,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <EditMembers />
                    </Suspense>
            )
        },
        {
            path: routes.addMembers,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <AddMembers />
                    </Suspense>
            )
        },
        {
            path: routes.feedback,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Feedback />
                    </Suspense>
            )
        },
        {
            path: routes.notification,
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Notification />
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
