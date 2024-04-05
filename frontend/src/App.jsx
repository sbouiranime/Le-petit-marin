import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavigationTabs } from "./components/NavigationTabs";
import SearchTermState from "./SearchTermState";

export default function App() {
  return (
    <>
    <SearchTermState>
      <Header />
      <NavigationTabs />
      <Footer />
    </SearchTermState>
      
    </>
  );
}
