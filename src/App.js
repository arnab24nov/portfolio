import "./App.css";
import Greet from "./components/Greet";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleTheme } from "./utils/themeSlice";

function App() {
  const selector = useSelector((store) => store.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkMode) {
      dispatch(toggleTheme(true));
    } else {
      dispatch(toggleTheme(false));
    }
  }, []);
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Greet />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/skill",
          element: <Skills />,
        },
        {
          path: "/project",
          element: <Projects />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <div
      className={`h-screen ${
        selector ? " bg-gray-900 text-blue-500" : "bg-slate-200 text-slate-600"
      }`}
    >
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
