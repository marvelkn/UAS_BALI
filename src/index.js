import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import About from './pages/About';
import Map from './pages/Map';
import { HealthProvider } from './contexts/HealthContext';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import InputNama from "./components/inputNama";
import CandiPura from "./pages/CandiPura/CandiPura";
import CandiPura2 from "./pages/CandiPura/CandiPura2";
import Restoran from './pages/Restoran';
import QuizCandiPura from './pages/CandiPura/QuizCandiPura';
import CandiBesakih from "./pages/CandiBesakih/CandiBesakih";
import CandiBesakih2 from './pages/CandiBesakih/CandiBesakih2';
import PantaiKuta from './pages/PantaiKuta/PantaiKuta';
import PantaiKuta2 from './pages/PantaiKuta/PantaiKuta2';
import MonkeyForest from './pages/MonkeyForest/MonkeyForest';
import MonkeyForest2 from "./pages/MonkeyForest/MonkeyForest2";
import TanahLot from './pages/TanahLot/TanahLot';
import TanahLot2 from './pages/TanahLot/TanahLot2';
import Dead from "./pages/Dead";
import NusaPenida from './pages/NusaPenida/NusaPenida';
import NusaPenida2 from "./pages/NusaPenida/NusaPenida2";
import UlunDanu from './pages/UlunDanu/UlunDanu';
import UlunDanu2 from './pages/UlunDanu/UlunDanu2';
import Uluwatu from "./pages/Uluwatu/Uluwatu";
import Uluwatu2 from "./pages/Uluwatu/Uluwatu2";
import GWK from "./pages/GWK/GWK";
import GWK2 from "./pages/GWK/GWK2";
import Tegenungan from "./pages/Tegenungan/Tegenungan";
import Tegenungan2 from './pages/Tegenungan/Tegenungan2';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "map",
    element: <Map />
  },
  {
    path: "nama",
    element: <InputNama />
  },
  {
    path: "/candipura",
    element: <CandiPura />
  },
  {
    path: "/candipura2",
    element: <CandiPura2 />
  },
  {
    path: "/restoran",
    element: <Restoran />
  },
  {
    path: "/quizcandipura",
    element: <QuizCandiPura />
  },
  {
    path: "/candibesakih",
    element: <CandiBesakih />
  },
  {
    path: "/candibesakih2",
    element: <CandiBesakih2 />
  },
  {
    path: "/pantaikuta",
    element: <PantaiKuta />
  },
  {
    path: "/pantaikuta2",
    element: <PantaiKuta2 />
  },
  {
    path: "/monkeyforest",
    element: <MonkeyForest />
  },
  {
    path: "/monkeyforest2",
    element: <MonkeyForest2 />
  },
  {
    path: "/tanahlot",
    element: <TanahLot />
  },
  {
    path: "/tanahlot2",
    element: <TanahLot2 />
  },
  {
    path: "/dead",
    element: <Dead/>
  },
  {
    path: "/nusapenida",
    element: <NusaPenida/>
  },
  {
    path: "/nusapenida2",
    element: <NusaPenida2/>
  },
  {
    path: "/ulundanu",
    element: <UlunDanu/>
  },
  {
    path: "/ulundanu2",
    element: <UlunDanu2/>
  },
  {
    path: "/Uluwatu",
    element: <Uluwatu/>
  },
  {
    path: "/Uluwatu2",
    element: <Uluwatu2/>
  },
  {
    path: "/GWK",
    element: <GWK/>
  },
  {
    path: "/GWK2",
    element: <GWK2/>
  },
  {
    path: "/tegenungan",
    element: <Tegenungan/>
  },
  {
    path: "/Tegenungan2",
    element: <Tegenungan2/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HealthProvider>
    <RouterProvider router={router} />
  </HealthProvider>
);
