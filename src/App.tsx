import { BrowserRouter, Routes, Route } from "react-router-dom"

//UsersApp
import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"

//Homeworks
import Homework29 from "homeworks/Homework29/Homework29"
import Homework31 from "homeworks/Homework31/Homework31"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
      {/* <Homework29 /> */}
      {/* <Homework31 /> */}
    </BrowserRouter>
  )
}

export default App
