import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from 'react'

const swipeRoutes = ['/', '/events', '/order', '/tickets']

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = swipeRoutes.indexOf(location.pathname);
  const isDetailedEventPage = location.pathname.startsWith('/event/')

  const [swipeDirection, setSwipeDirection] = useState(null);

  useEffect(() => {
    if(isDetailedEventPage) {
      setSwipeDirection('right');
    }
  }, [isDetailedEventPage]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if(!isDetailedEventPage && currentIndex < swipeRoutes.length - 1) {
        setSwipeDirection('left');
        navigate(swipeRoutes[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (isDetailedEventPage) {
        setSwipeDirection(null);
        navigate(- 1);
      } else if (currentIndex > 0) {
        setSwipeDirection('right');
        navigate(swipeRoutes[currentIndex - 1]);
      }
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  const getInitialX = () => {
    if (isDetailedEventPage) return '100%'; // Kommer in från höger
    return swipeDirection === 'left' ? '100%' : '-100%';
  };
  
  const getExitX = () => {
    if (isDetailedEventPage) return '100%'; // Går ut åt höger
    return swipeDirection === 'left' ? '-100%' : '100%';
  };

  if (currentIndex === -1 && !isDetailedEventPage) {
    return <Outlet />;
  }

  return (
    <section className='layout-wrapper' {...handlers} 
      style={{ 
        touchAction: 'none', 
        minHeight: '100vh', 
        overflow: 'hidden', 
        position: 'relative' 
      }}>
       <AnimatePresence>
        <motion.div
         key={location.pathname}
         initial={{
           x: getInitialX(),
           position: 'absolute',
           width: '100%',
           height: '100%',
         }}
         animate={{ x: 0 }}
         exit={{ x: getExitX() }}
         transition={{ type: 'spring', stiffness: 300, damping: 30 }}
         style={{
          position: 'absolute',
          top: 0,
          left: 0,
          overflowY: 'auto',
          height: '100%',
          width: '100%',
          zIndex: 1,
         }}
       >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Layout