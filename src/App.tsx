import AuthContext, { AuthProvider } from "Context/Auth";
import ReadRecipe from "Pages/recipe/ReadRecipe";
import Login from "Pages/login/Login";
import { Routes, Route } from "react-router-dom";
import ReadBahan from "Pages/bahan/ReadBahan";
import DetailRecipe from "Pages/recipe/DetailRecipe";
import AddRecipe from "Pages/recipe/AddRecipe";
import AddBahan from "Pages/bahan/AddBahan";
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
              <Navbar isLoggedIn={false} />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Login />} />
              </Routes>
            </div>
          ) : (
            <div className="App">
              <Navbar isLoggedIn={true} />
              <Routes>
                <Route path="/dorayaki" element={<ReadRecipe />} />
                <Route path="/bahan" element={<ReadBahan />} />
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
