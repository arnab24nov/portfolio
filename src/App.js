import "./App.css";
import Greet from "./components/Greet";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toggleTheme } from "./utils/themeSlice";
import AnimatedCursor from "react-animated-cursor";
import NoMatchRoute from "./components/NoMatchRoute";

function App() {
  const selector = useSelector((store) => store.theme.darkMode);
  const dispatch = useDispatch();
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkMode) {
      dispatch(toggleTheme(true));
    } else {
      dispatch(toggleTheme(false));
    }
    setIsSmallDevice(window.innerWidth <= 768);
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
        {
          path: "*",
          element: <NoMatchRoute />,
        },
      ],
    },
  ]);

  return (
    <div
      className={`fixed top-0 left-0 w-[100%] h-full overflow-y-auto overflow-x-hidden lg:overflow-hidden ${
        selector ? " bg-gray-900 text-blue-500" : "bg-slate-200 text-slate-600"
      }`}
    >
      {!isSmallDevice && (
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          color="193, 11, 111"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
              options: {
                innerSize: 12,
                outerSize: 12,
                color: "255, 255, 255",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
      )}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
