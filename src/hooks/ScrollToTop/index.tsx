import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Role a página para o topo sempre que a rota muda
  }, [pathname]);

  return null; // Este componente não renderiza nada no DOM
}

export default ScrollToTop;