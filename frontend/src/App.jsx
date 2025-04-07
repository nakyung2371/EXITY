import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'antd';

function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Hello Ant Design 👋</h1>
            <Button type="primary">Antd 버튼 클릭!</Button>
        </div>
    );
}

export default App;
