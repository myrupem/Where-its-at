import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const swipeRoutes = ['/', '/events', '/order', '/tickets'];

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isDetailedPage = pathname.startsWith('/event/');
  const currentIndex = swipeRoutes.indexOf(pathname);

  const [swipeDirection, setSwipeDirection] = useState(null);
  const [isNavigatingToDetail, setIsNavigatingToDetail] = useState(false);

  useEffect(() => {
    // Reset swipeDirection efter navigation
    setSwipeDirection(null);
    setIsNavigatingToDetail(isDetailedPage);
  }, [pathname]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (!isDetailedPage && currentIndex < swipeRoutes.length - 1) {
        setSwipeDirection('left');
        navigate(swipeRoutes[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (isDetailedPage) {
        setSwipeDirection('right');
        navigate(-1);
      } else if (currentIndex > 0) {
        setSwipeDirection('right');
        navigate(swipeRoutes[currentIndex - 1]);
      }
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  const getInitialX = () => {
    if (isDetailedPage && isNavigatingToDetail) return '100%'; // In från höger
    return swipeDirection === 'left' ? '100%' : swipeDirection === 'right' ? '-100%' : 0;
  };

  const getExitX = () => {
    if (isDetailedPage) return '100%'; // Ut åt höger
    return swipeDirection === 'left' ? '-100%' : swipeDirection === 'right' ? '100%' : 0;
  };

  return (
    <section
      {...handlers}
      style={{
        touchAction: 'none',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ x: getInitialX() }}
          animate={{ x: 0 }}
          exit={{ x: getExitX() }}
          transition={{ type: 'tween', duration: 0.3 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Layout;
