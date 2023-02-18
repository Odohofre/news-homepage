import Aside from "./Aside";
import Footer from "./Footer";
import Main from "./Main";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="md:grid md:grid-cols-3 md:grid-rows-12 gap-8 w-full mb-10">
      <NavBar />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}
