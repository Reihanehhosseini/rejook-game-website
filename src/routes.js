
import Home from "./Pages/Home/Home";
import Action from "./Pages/Action/Action";
import GamesPage from "./Component/GamesPage/GamesPage";
import OldGames from "./Pages/OldGames/OldGames";
import PlayGame from "./Component/PlayGame/PlayGame";
import GameCanvas from "./Component/PlayGame/PlayGame";
import Tournaments from "./Pages/Tournaments/Tournaments"
import ProTips from "./Pages/ProTips/ProTips";


let routes = [
    {path:"/" , element: <Home/>},
    {path:"/Home" , element: <Home/>},
    {path:"/Game" , element: <Action/>},
    {path:"/Action" , element: <Action/>},
    {path:"/Puzzle" , element: <Action/>},
    {path:"/Sport" , element: <Action/>},
    {path:"/Card" , element: <Action/>},
    {path:"/Kids" , element: <Action/>},
    {path:"/Brain" , element: <Action/>},
    {path:"/Action/:id" , element: <GamesPage/>},
    {path:"/Puzzle/:id" , element: <GamesPage/>},
    {path:"/Sport/:id" , element: <GamesPage/>},
    {path:"/Card/:id" , element: <GamesPage/>},
    {path:"/Kids/:id" , element: <GamesPage/>},
    {path:"/Brain/:id" , element: <GamesPage/>},
    {path:"/OldGames" , element: <OldGames/>},
    {path:"/OldGames/:id" , element: <PlayGame/>},
    {path:"/Tournaments" , element: <Tournaments/>},
    {path:"/ProTips" , element: <ProTips/>},

    

]
export default routes