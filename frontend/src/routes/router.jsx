import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import MainPage from '../pages/MainPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // 여기에서 App 컴포넌트 필요!
        children: [
            {
                index: true,
                element: <MainPage />,
            },
        ],
    },
])

export default router
