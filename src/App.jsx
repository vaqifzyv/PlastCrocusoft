// import "./App.css";
// import { Main, WeBuy, InfoSection, Devices, Info } from "./pages";
// import Navbar from "./components/Navbar/Navbar";
// import FooterSection from "./components/FooterSection/FooterSection";

// import { Itest, RenderIf } from "./components";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//   },
//   {
//     path: "/main",
//     element: <WeBuy />,
//   },
//   {
//     path: "/maourproductsin",
//     element: <InfoSection />,
//   },
//   {
//     path: "/devices",
//     element: <Devices />,
//   },
//   {
//     path: "/info",
//     element: <InfoSection />,
//   },
//   {
//     path: "/contact",
//     element: <Info />,
//   },
// ]);

// function App() {
//   return (
//     <>
//       <Navbar />
//       <RouterProvider router={router}></RouterProvider>
//       <FooterSection />
//     </>
//   );
// }

// export default App;

// App.js
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";

// import {
//   Main,
//   WeBuy,
//   InfoSection,
//   Devices,
//   ContactSection,
//   OurProducts,
// } from "./pages";

// import Navbar from "./components/Navbar/Navbar";
// import { RenderIf, WhiteFooter, FooterSection } from "./components";

// import "./App.css";

// const App = () => {
//   const location = useLocation();

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {" "}
//         <Route path="/" element={<Main />} />
//         <Route path="/main" element={<WeBuy />} />
//         <Route path="/ourproducts" element={<OurProducts />} />
//         <Route path="/devices" element={<Devices />} />
//         <Route path="/info" element={<InfoSection />} />
//         <Route path="/contact" element={<ContactSection />} />{" "}
//       </Routes>
//       <RenderIf
//         condition={location.pathname === "/"}
//         renderElse={<WhiteFooter />}
//       >
//         <FooterSection />
//       </RenderIf>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  Main,
  WeBuy,
  InfoSection,
  Devices,
  ContactSection,
  OurProducts,
  Search,
} from "./pages";

import Navbar from "./components/Navbar/Navbar";
import { WhiteFooter, FooterSection } from "./components";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<WeBuy />} />
        <Route path="/ourproducts" element={<OurProducts />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/info" element={<InfoSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const Footer = () => {
  const location = useLocation();
  return location.pathname === "/" ? <FooterSection /> : <WhiteFooter />;
};

export default App;
