import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx';

import 'antd/dist/reset.css'; // Ant Design 스타일
import './index.css'; // 전역 스타일 설정 시

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)