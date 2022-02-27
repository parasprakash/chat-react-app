import './App.css';
import LoginForm from './components/LoginForm'
import Chat from './components/Chat'
import UserList from './components/UserList'
import { CometChat } from '@cometchat-pro/chat'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginForm />}>
      </Route>
      {/* <Route path='/Chat' element={<Chat />}>
      </Route> */}
    </Routes>
    </BrowserRouter>
      
      <Chat />
    </>
  );
}

export default App;
