import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <canvas class="webgl"></canvas>
      <main className="section">
        <div className="content">
          <h1>未到達の次元へ。</h1>
          <p>ありふれたエンジニアで終わらせない。<br />人々を感動させる技術を身につける。<br />あなたが求めるスキルが、今ここに。</p>
          <button>私の作品へ</button>
        </div>
      </main>
    </>
  )
}

export default App
