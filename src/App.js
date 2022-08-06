import { createContext, useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Footer from "./component/Shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./component/Shared/Header/Header";
import Login from "./component/Authentication/Login/Login";
import Register from "./component/Authentication/Register/Register";
import Profile from "./Dashboard/Profile/Profile";
import { clear } from "@testing-library/user-event/dist/clear";
import PostArticle from "./Dashboard/PostArticle/PostArticle";
import ArticleDetails from "./component/ArticleDetails/ArticleDetails";
import auth from "./firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import AllArticle from "./component/Article/AllArticle/AllArticle";
import Contact from "./component/Contact/Contact";
import { Toaster } from "react-hot-toast";
import About from "./component/About/About";

import ScrollToTop from "./hooks/ScrollToTop";

import { useSelector, useDispatch } from "react-redux";
import getAllArticles from "./source/actions/articlesAction";

import Dashboard from "./Dashboard/AdminDashboard/Dashboard";

const articleDataContext = createContext();
function App() {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [users, setUsers] = useState([]);
  const [signedInUser, setSignedInUser] = useState(null);
  const [authUser] = useAuthState(auth);

  const articlesData = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  // console.log(articlesData);
  useEffect(() => {
    dispatch(getAllArticles());
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  // making theme dark
  const [dark, setDark] = useState(false);
  // localStorage.setItem('theme', dark);
  useEffect(() => {
    fetch("https://floating-ocean-13139.herokuapp.com/theme")
      .then((res) => res.json())
      .then((data) => {
        setDark(data[0].theme);
      });
  }, []);

  const setTheme = () => {
    fetch(
      "https://floating-ocean-13139.herokuapp.com/theme/62d829c706b5a80f8247a020",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          theme: !dark,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setDark(!dark);
      });
  };

  // fetching all articles
  useEffect(() => {
    fetch("https://floating-ocean-13139.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  // fetching all users
  useEffect(() => {
    fetch("https://floating-ocean-13139.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const valueObj = {
    articles,
    searchValue,
    setArticles,
    setSearchValue,
    users,
    signedInUser,
    setSignedInUser,
    dark
  };


  const userss = users.map(user => {
    return user.userInfo.role
  })
  // console.log(userss)

  const compareUser = useMemo(() => {
    return users?.find((user) => user?.userInfo?.email === authUser?.email);
  }, [authUser, users]);

  // console.log(compareUser)
  useEffect(() => {
<<<<<<< HEAD
    setSignedInUser(compareUser);
  }, [compareUser]);
=======
    setSignedInUser(compareUser)
  }, [compareUser])

  // console.log(compareUser?.userInfo.role);
>>>>>>> 45af8e99dab647f12ede1d3b3e3c51ca857f8851

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <ScrollToTop />
      <articleDataContext.Provider value={valueObj}>
        <Header setDark={setDark} dark={dark} setTheme={setTheme}></Header>
        <Routes preserverScrollPosition={false}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/post-article" element={<PostArticle />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/all-article" element={<AllArticle />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path="/hudai" element={<Hudai />}></Route> */}
          <Route path="/article/:articleId" element={<ArticleDetails />}></Route>

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="post-Article" element={<PostArticle />} />
          </Route>
        </Routes>
        <Footer />
      </articleDataContext.Provider>
      <Toaster />
    </div>
  );
}

export default App;
export { articleDataContext };
