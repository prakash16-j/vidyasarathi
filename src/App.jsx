import AdminLogin from "./components/AdminLogin"
import Landing from "./components/Landing"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Landing/>
     <AdminLogin/>
    </>
  )
}

export default App
