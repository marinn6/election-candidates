import "../index.css";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import Card from "/components/Card/Card";

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <UserProfile />
        <Card />
        <List />
      </main>
    </div>
  )
}

export default App;
