import ReadRecipe from "Pages/ReadRecipe";
import { Routes, Route } from "react-router-dom";
import ReadBahan from "Pages/ReadBahan";
import DetailRecipe from "Pages/DetailRecipe";
import AddRecipe from "Pages/AddRecipe";
import AddBahan from "Pages/AddBahan";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dorayaki" element={<ReadRecipe />} />
        <Route path="/bahan" element={<ReadBahan />} />
        <Route path="/bahan/create" element={<AddBahan />} />
        <Route path="/dorayaki/:id" element={<DetailRecipe />} />
        <Route path="/dorayaki/resep/create" element={<AddRecipe></AddRecipe>}></Route>
      </Routes>
    </div>
  );
}

export default App;
