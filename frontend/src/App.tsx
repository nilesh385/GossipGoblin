import { Button } from "./components/ui/button";
import { ThemeToggle } from "./components/mode-toggle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-blue-200">
        <Routes>
          <Route path="/" element={""} />
        </Routes>
        <Button>Hello</Button>
        <Button>
          <ThemeToggle />
        </Button>
      </div>
    </>
  );
}

export default App;
