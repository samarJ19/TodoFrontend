import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/signup"
import './App.css'
import { Signin } from "./pages/signin"
import { Todos } from "./pages/Todos"
import { CreateTodo } from "./pages/CreateTodos"
import { RecoilRoot } from "recoil"
import { Updatetodo } from "./pages/Updatetodos"
import { LandingPage } from "./pages/LandingPage"


function App() {
  return (
    <>
      <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/todos" element={<Todos/>}></Route>
        <Route path="/createtodo" element={<CreateTodo/>}></Route>
        <Route path="/updatetodo/:id" element={<Updatetodo/>} />
        <Route path="/" element={<LandingPage/>} />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
