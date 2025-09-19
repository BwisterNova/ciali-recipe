import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi"; // Import an icon for the button

import "./App.css";
import Header from "./componets/Header";
import Receipes from "./componets/Recipes";
import Footer from "./componets/Footer";

import DinnerNav from "./componets/DinnerNav";
import Lunch from "./componets/Lunch";
import Desserts from "./componets/Desserts";
import AboutPage from "./componets/AboutPage";
import ContactPage from "./componets/ContactPage";
import ChristmasTurkey from "./componets/ComponetsPages/FirstPage/ChristmasTurkey";
import Uncategorized from "./componets/UncategorizedComponent/Uncategorized";
import PizzaMargherita from "./componets/ComponetsPages/FirstPage/PizzaMargherita";
import ClementineTart from "./componets/ComponetsPages/FirstPage/ClementineTart";
import CremeCaramel from "./componets/ComponetsPages/FirstPage/CremeCaramel";
import FrozenRaspberry from "./componets/ComponetsPages/FirstPage/FrozenRaspberry";
import IndianChicken from "./componets/ComponetsPages/FirstPage/IndianChicken";
import RaspberryM from "./componets/ComponetsPages/FirstPage/RaspberryM";
import TunaPasta from "./componets/ComponetsPages/FirstPage/TunaPasta";
import GreenCabbage from "./componets/ComponetsPages/FirstPage/GreenCabbage";
import HomemadeChicken from "./componets/ComponetsPages/SecondPage/HomadeChicken";
import MushroomLasagna from "./componets/ComponetsPages/SecondPage/MushroomLasagna";
import Salmon from "./componets/ComponetsPages/SecondPage/Salmon";
import CheapCake from "./componets/ComponetsPages/SecondPage/CheapCake";
import ChickenMarbella from "./componets/ComponetsPages/SecondPage/ChickenMarbella";
import SmokedSalmon from "./componets/ComponetsPages/SecondPage/SmokedSalmon";
import RaspberrySpeculoos from "./componets/ComponetsPages/SecondPage/RaspberrySpeculoos";
import LightChocolate from "./componets/ComponetsPages/SecondPage/LightChocolate";
import RaspberryPistachio from "./componets/ComponetsPages/SecondPage/RaspberryPistachio";
import AlsatianChristmas from "./componets/ComponetsPages/SeventhPage/AlsatianChristmas";
import SoftPumpkinCake from "./componets/ComponetsPages/SeventhPage/SoftPumpkinCake";
import QuickTunaTart from "./componets/ComponetsPages/ThirdPage/QuickTunaTart";
import AppleMascarpone from "./componets/ComponetsPages/ThirdPage/AppleMascarpone";
import PotatoC from "./componets/ComponetsPages/ThirdPage/PotatoC";
import AvocadoS from "./componets/ComponetsPages/ThirdPage/AvocadoS";
import MushroomS from "./componets/ComponetsPages/ThirdPage/MushroomS";
import PotatoTortilla from "./componets/ComponetsPages/ThirdPage/PotatoTortilla";
import SamosasW from "./componets/ComponetsPages/ThirdPage/SamosasW";
import SpringRolls from "./componets/ComponetsPages/ThirdPage/SpringRolls";
import CakeW from "./componets/ComponetsPages/ThirdPage/CakeW";
import RevistesBlins from "./componets/ComponetsPages/SeventhPage/RevistedBlins";
import SpicyChicken from "./componets/ComponetsPages/FourthPage/SpicyChicken";
import Crustless from "./componets/ComponetsPages/FourthPage/Crustless";
import AppleStrudel from "./componets/ComponetsPages/FourthPage/AppleStrudel";
import SalmonBlanqutte from "./componets/ComponetsPages/FourthPage/SalmonBlanqutte";
import BakedRice from "./componets/ComponetsPages/FourthPage/BakedRice";
import ChristmasCake from "./componets/ComponetsPages/FourthPage/ChristmasCake";
import EasyMascarpone from "./componets/ComponetsPages/FourthPage/EasyMascarpone";
import PorkStirFry from "./componets/ComponetsPages/FourthPage/PorkStirFry";
import Knodel from "./componets/ComponetsPages/FourthPage/Knodel";
import LasagnaSoup from "./componets/ComponetsPages/SeventhPage/LasagnaSoup";
import EasyLasagna from "./componets/ComponetsPages/FifthPage/EasyLasagna";
import TartifletteRecipe from "./componets/ComponetsPages/FifthPage/TartifletteRecipe";
import WhiteChocolate from "./componets/ComponetsPages/FifthPage/WhiteChocolate";
import TraditionalVegetable from "./componets/ComponetsPages/FifthPage/TraditionalVegetable";
import StuffedVegetable from "./componets/ComponetsPages/FifthPage/StuffedVegetables";
import ButternutSquash from "./componets/ComponetsPages/FifthPage/ButternutSquash";
import BakedButternut from "./componets/ComponetsPages/FifthPage/BakedButternut";
import CaponStuffed from "./componets/ComponetsPages/FifthPage/CaponStuffed";
import PorkTenderlion from "./componets/ComponetsPages/FifthPage/PorkTenderlion";
import ShrimpPizza from "./componets/ComponetsPages/SeventhPage/ShrimpPizza";
import EasyIceCream from "./componets/ComponetsPages/SixthPage/EasyIceCream";
import PumpkinStuffed from "./componets/ComponetsPages/SixthPage/PumpkinStuffed";
import WinterVegetable from "./componets/ComponetsPages/SixthPage/WInterVegetable";
import CaponSupreme from "./componets/ComponetsPages/SixthPage/CaponSupreme";
import HolePancake from "./componets/ComponetsPages/SixthPage/HolePancakes";
import LightStrawberry from "./componets/ComponetsPages/SixthPage/LightStrawberry";
import PumpkinCake from "./componets/ComponetsPages/SixthPage/PumpkinCake";
import EasyPancakes from "./componets/ComponetsPages/SixthPage/EasyPancakes";
import HolidayPaella from "./componets/ComponetsPages/SixthPage/HoildayPaella";
import ItalianPasta from "./componets/ComponetsPages/SeventhPage/ItalianPasta";
import EggWithHam from "./componets/ComponetsPages/SeventhPage/EggWithHam";
import ChickenRisotto from "./componets/ComponetsPages/SeventhPage/ChickenRisotto";
import Recipes from "./componets/Recipes";
import NoPage from "./componets/PageNotFound/NoPage";

//import NoPage from "./componets/PageNotFound/NoPage";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Show the button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dynamically set basename for Router
  const routerBasename =
    import.meta.env.DEPLOY_TARGET === "GH" ? "/ciali-recipe" : undefined;
  return (
    <>
      <Router basename={routerBasename}>
        <Header />
        <Routes>
          <Route path="/" element={<Receipes />} />
          <Route path="/category/dinner" element={<DinnerNav />} />
          <Route path="/category/lunch" element={<Lunch />} />
          <Route path="/category/desserts" element={<Desserts />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/uncategorized" element={<Uncategorized />} />
          {/*For first page in the paginations */}
          <Route
            path="/preparing-your-christmas-turkey-in-advance"
            element={<ChristmasTurkey />}
          />
          <Route path="/pizza-margherita" element={<PizzaMargherita />} />
          <Route path="/clementine-tart" element={<ClementineTart />} />
          <Route path="/creme-caramel" element={<CremeCaramel />} />
          <Route
            path="/frozen-raspberry-coulis"
            element={<FrozenRaspberry />}
          />
          <Route
            path="/indian-chicken-with-tomato-and-rice"
            element={<IndianChicken />}
          />
          <Route
            path="/raspberry-mascarpone-sponge-cake"
            element={<RaspberryM />}
          />
          <Route path="/tuna-pasta-salad-recipe" element={<TunaPasta />} />
          <Route path="/green-cabbage-stew" element={<GreenCabbage />} />
          {/*for second page in the pagnnation*/}
          <Route
            path="/homemade-chicken-cordon-bleu"
            element={<HomemadeChicken />}
          />
          <Route path="/mushroom-lasagna" element={<MushroomLasagna />} />
          <Route path="/salmon-and-spinach-lasagna" element={<Salmon />} />
          <Route path="/cheap-soft-apple-cake" element={<CheapCake />} />
          <Route
            path="/chef-annas-chicken-marbella"
            element={<ChickenMarbella />}
          />
          <Route
            path="/smoked-salmon-millefeuille-with-lime-sorbet"
            element={<SmokedSalmon />}
          />
          <Route
            path="/raspberry-and-speculoos-verrines"
            element={<RaspberrySpeculoos />}
          />
          <Route path="/light-chocolate-mousse" element={<LightChocolate />} />
          <Route
            path="/raspberry-and-pistachio-yule-log"
            element={<RaspberryPistachio />}
          />
          <Route
            path="/pork-tenderloin-in-puff-pastry"
            element={<PorkTenderlion />}
          />
          {/*for third page in the pagnnation*/}
          <Route
            path="/quick-tuna-tart-with-shortcrust-pastry"
            element={<QuickTunaTart />}
          />
          <Route path="/apple-mascarpone-cake" element={<AppleMascarpone />} />
          <Route path="/potato-croquettes-with-raw-ham" element={<PotatoC />} />
          <Route
            path="/avocado-shrimp-and-cream-cheese-verrines"
            element={<AvocadoS />}
          />
          <Route
            path="/mushrooms-stuffed-with-cream-cheese"
            element={<MushroomS />}
          />
          <Route path="potato-tortilla" element={<PotatoTortilla />} />
          <Route path="/samosas-with-minced-meat" element={<SamosasW />} />
          <Route
            path="/spring-rolls-with-crab-chinese-cabbage-and-bamboo-shoots"
            element={<SpringRolls />}
          />
          <Route
            path="/cake-with-sun-dried-vegetables-and-mozzarella"
            element={<CakeW />}
          />
          {/*for Fourth page in the pagnnation*/}
          <Route
            path="/spicy-chicken-spring-rolls"
            element={<SpicyChicken />}
          />
          <Route
            path="/crustless-and-gluten-free-quiche"
            element={<Crustless />}
          />
          <Route
            path="/apple-strudel-a-classic-dessert-with-a-warm-spiced-filling"
            element={<AppleStrudel />}
          />
          <Route
            path="/salmon-blanquette-with-vegetables-and-poulette-sauce"
            element={<SalmonBlanqutte />}
          />
          <Route
            path="/baked-rice-pudding-a-creamy-comforting-dessert"
            element={<BakedRice />}
          />
          <Route
            path="/easy-mascarpone-and-raspberry-christmas-yule-log"
            element={<EasyMascarpone />}
          />
          <Route
            path="/christmas-cake-with-pear-speculoos-and-salted-butter-caramel"
            element={<ChristmasCake />}
          />
          <Route
            path="/pork-stir-fry-in-the-cookeo"
            element={<PorkStirFry />}
          />
          {/*for fifth page in the pagnnation*/}
          <Route
            path="/prepare-easy-lasagna-bolognese"
            element={<EasyLasagna />}
          />
          <Route
            path="/easy-and-quick-tartiflette-recipe"
            element={<TartifletteRecipe />}
          />
          <Route
            path="/traditional-vegetable-couscous"
            element={<TraditionalVegetable />}
          />
          <Route
            path="/white-chocolate-raspberry-layer-cake"
            element={<WhiteChocolate />}
          />
          <Route
            path="/my-grandmothers-stuffed-vegetables"
            element={<StuffedVegetable />}
          />
          <Route
            path="/butternut-squash-and-ham-quiche"
            element={<ButternutSquash />}
          />
          <Route
            path="/baked-butternut-squash-gratin-with-comte-and-thyme"
            element={<BakedButternut />}
          />
          <Route
            path="/capon-stuffed-with-chestnuts-and-mushrooms"
            element={<CaponStuffed />}
          />
          {/*for sixth page in the pagnnation*/}
          <Route
            path="/easy-ice-cream-log-for-christmas"
            element={<EasyIceCream />}
          />
          <Route
            path="/pumpkin-stuffed-with-mushrooms-onions-and-bacon"
            element={<PumpkinStuffed />}
          />
          <Route path="/winter-vegetable-flan" element={<WinterVegetable />} />
          <Route path="/capon-supreme-with-morels" element={<CaponSupreme />} />
          <Route
            path="/light-strawberry-roll-cake"
            element={<LightStrawberry />}
          />
          <Route
            path="/easy-thousand-hole-pancakes-beghrir-express-algerian-recipe"
            element={<HolePancake />}
          />
          <Route
            path="how-to-prepare-easy-pancakes"
            element={<EasyPancakes />}
          />
          <Route path="/my-holiday-paella" element={<HolidayPaella />} />
          <Route path="/pumpkin-apple-cake" element={<PumpkinCake />} />

          {/*for seventh page in the pagnnation*/}
          <Route
            path="/alsatian-christmas-stollen"
            element={<AlsatianChristmas />}
          />
          <Route path="/soft-pumpkin-cake" element={<SoftPumpkinCake />} />
          <Route
            path="/revisited-blinis-with-buckwheat-and-smoked-salmon"
            element={<RevistesBlins />}
          />
          <Route
            path="/knodel-austrian-savory-bread-dumplings"
            element={<Knodel />}
          />
          <Route
            path="/how-to-prepare-lasagna-soup"
            element={<LasagnaSoup />}
          />
          <Route
            path="/how-to-prepare-shrimp-pizza"
            element={<ShrimpPizza />}
          />
          <Route
            path="/italian-carbonara-pasta-without-cream"
            element={<ItalianPasta />}
          />
          <Route
            path="/eggs-with-ham-a-simple-and-delicious-classic"
            element={<EggWithHam />}
          />
          <Route
            path="/chicken-risotto-the-best-recipe"
            element={<ChickenRisotto />}
          />

          {/*For the URL based Pagination */}
          <Route path="/" element={<Navigate to="/page/1" />} />
          <Route path="/page/:pageNumber" element={<Recipes />} />

          {/* The URL based Pagination for Dinner Category */}
          <Route
            path="/category/dinner"
            element={<Navigate to="/category/dinner/page/1" />}
          />
          <Route
            path="/category/dinner/page/:pageNumber"
            element={<DinnerNav />}
          />

          {/* The URL based Pagination for lunch Category */}
          <Route
            path="/category/lunch"
            element={<Navigate to="/category/lunch/page/1" />}
          />
          <Route path="/category/lunch/page/:pageNumber" element={<Lunch />} />

          {/* The URL based Pagination for lunch Category */}
          <Route
            path="/category/desserts"
            element={<Navigate to="/category/desserts/page/1" />}
          />
          <Route
            path="/category/desserts/page/:pageNumber"
            element={<Desserts />}
          />

          {/*For No page found*/}
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />

        {/* Back to Top Button */}
        {showScroll && (
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: "1000",
              cursor: "pointer",
              background: "rgba(0, 0, 0, 0.2)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              transition: "background 0.3s ease",
            }}
            onClick={scrollToTop}
          >
            <FiArrowUp size={24} />
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
