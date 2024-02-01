import About from "./Pages/About/About"
import Cart from "./Pages/Cart/Cart"
import Contact from "./Pages/Contact/Contact"
import Index from "./Pages/Index"
import Shop from "./Pages/Shop/Shop"

const routes = [
    { path: "/", element: <Index /> },
    { path: "/shop", element: <Shop /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/cart", element: <Cart/> },
]

export default routes