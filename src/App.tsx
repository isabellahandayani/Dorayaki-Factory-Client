import AuthContext, { AuthProvider } from "Context/Auth";
import { Routes, Route } from "react-router-dom";
import Login from "Pages/login/Login";
import Register from "Pages/register/Register";
import ReadRecipe from "Pages/recipe/ReadRecipe";
import ReadBahan from "Pages/bahan/ReadBahan";
import DetailRecipe from "Pages/recipe/DetailRecipe";
import AddRecipe from "Pages/recipe/AddRecipe";
import AddBahan from "Pages/bahan/AddBahan";
import Request from "Pages/request/Request";
import Navbar from "Components/Navbar";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {({ authState }) => {
          const { isLoggedIn } = authState;
          return !isLoggedIn ? (
            <div className="App">
              <Navbar authState={authState} />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Login />} />
              </Routes>
            </div>
          ) : (
            <div className="App">
              <Navbar authState={authState} />
              <Routes>
                <Route path="/dorayaki" element={<ReadRecipe />} />
                <Route path="/bahan" element={<ReadBahan />} />
                <Route path="/request" element={<Request />} />
                <Route path="/bahan/create" element={<AddBahan />} />
                <Route path="/dorayaki/:id" element={<DetailRecipe />} />
                <Route path="/dorayaki/resep/create" element={<AddRecipe />} />
                <Route path="*" element={<ReadRecipe />} />
              </Routes>
            </div>
          );
        }}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
