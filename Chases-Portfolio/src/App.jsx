import { useState } from 'react'
import styles from './styles'
import { Hero, Prev, Contact} from "./components"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-secondary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingY} ${styles.flexStart}`}>
        <div>
          <Prev />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
