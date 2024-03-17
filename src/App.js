import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop from "./pages/Desktop";
import Frame2 from "./pages/Frame2";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Login1 from "./pages/Login1";
import Login from "./pages/Login";
import Account from "./pages/Account";
import OnlineApp from './AppVideo'

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/account":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/" element={<Frame />} />
      <Route path="/1" element={<Frame1 />} />
      <Route path="/2" element={<Frame2 />} />
      <Route path="/login" element={<Login1 />} />
      <Route path="/signup" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/OnlineApp" element={<OnlineApp />} />
    </Routes>
  );
}
export default App;
