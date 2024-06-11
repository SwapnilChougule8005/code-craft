import {createBrowserRouter} from 'react-router-dom'
import { AboutPage, ContactPage, CoursesPage, HomePage, SignInPage, SignUpPage } from '../pages'

const routes = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/contact',
        element:<ContactPage/>
    },
    {
        path:'/about',
        element:<AboutPage/>
    },
    {
        path:'/signIn',
        element:<SignInPage/>
    },
    // {
    //     path:'/signOut'
    // },
    {
        path:'/signUp',
        element:<SignUpPage/>
    },
    // {
    //     path:'userDetails'
    // },
    {
        path:'/courses',
        element:<CoursesPage/>
    },
    {
        path:'/courses/:courseName',
        element:<CoursesPage/>
    }
])

export default routes;