import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout";

import LandingPage from "./pages/LandingPage"
import EventsPage from "./pages/EventsPage/EventsPage";
import DetailedEventPage from "./pages/DetailedEventPage/DetailedEventPage.jsx"
import OrderPage from "./pages/OrderPage/OrderPage.jsx";
import TicketsPage from "./pages/TicketsPage/TicketsPage.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: '/events', element: <EventsPage /> },
        { path: '/event/:id', element: <DetailedEventPage /> },
        { path: '/order', element: <OrderPage /> },
        { path: '/tickets', element: <TicketsPage /> }
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
