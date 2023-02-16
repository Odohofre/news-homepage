import Aside from "./Aside";
import Footer from "./Footer";
import Main from "./Main";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Main />
      <Aside />
      <Footer />
    </>
  );
}
