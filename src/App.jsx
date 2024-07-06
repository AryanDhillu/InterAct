import Chat from "./components/Chat/Chat"
import Detail from "./components/Detail/Detail"
import List from "./components/List/List"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"

const App = () => {

  const user = false;

  return (
    <div className='container'>
      {user ? (
          <>
            <List/>
            <Chat/>
            <Detail/>
          </>
        ):(
          <Login/>
        )}
        <Notification/>
    </div>
  )
}

export default App