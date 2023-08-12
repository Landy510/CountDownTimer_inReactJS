import { useState } from 'react'
import Timer from './components/Timer'
import './App.css'

function App() {
  const [count, setCount] = useState({ // 必須要用 物件的方式來記住要傳入 Timer 的內容，不然，用純值的方式來記住這些內容，會導致當父元件在選染的時候，來帶 Timer 也會被影響
    mediaData: {
      val: 0,
      onEnd: () => setBang(prev => !prev)
    }
  })

  const [bang, setBang] = useState(false)

  return (
    <>
      <div>
        <Timer {...count} />
        {
          bang &&
          <p>Here it is!!!</p>
        }
        <button 
          type='button'
          onClick={() => setCount(prev => ({
            ...prev,
            mediaData: {
              ...prev['mediaData'],
              val: 5
            }
          }))}
        >Click</button>
      </div>
      
    </>
  )
}

export default App
