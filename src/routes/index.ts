import {createBrowserRouter} from "react-router-dom";
import {Routing} from "./routing";

const router = createBrowserRouter(Routing, {basename: '/catalog-react-project'});
export default router;