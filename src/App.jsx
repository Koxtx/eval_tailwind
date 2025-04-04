import "./App.css";
import Header from "./contents/Header";
import Logements from "./contents/logements/Logements";

import Footer from "./contents/Footer";
import Avis from "./contents/avis/Avis";

function App() {
  return (
    <body class="flex  min-h-screen flex-col bg-gray-100 ">
      <Header />
      <main class="h-full  wh mb-10 ">
        <Logements />
        <Avis />
      </main>
      <Footer />
    </body>
  );
}

export default App;
