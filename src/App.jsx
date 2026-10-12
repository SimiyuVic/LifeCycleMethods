import ErrorBoundary from "./ErrorBoundary"
import Jobs from "./Jobs"
import User from "./User"



function App() {

  return (
    <div>
      <ErrorBoundary>
        <Jobs />
      </ErrorBoundary>
      <ErrorBoundary>
        <User />
      </ErrorBoundary>
      
    </div>
  )
}

export default App
