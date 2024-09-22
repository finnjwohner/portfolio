import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";

export default function App() {
  return (
    <>
      <Header />
      <div className="divider">
        <Main />
        <ProjectList />
      </div>
      <Footer />
    </>
  );
}
