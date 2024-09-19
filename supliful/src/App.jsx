import "./App.css";
import Hero from "./components/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./components/Start";
import HowItWorks from "./components/HowItWorks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/start",
    element: <Start/>
  },{
    path: "/howitworks",
    element: <HowItWorks/>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
