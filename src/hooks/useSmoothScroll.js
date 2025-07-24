import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // Adiciona o manipulador de eventos para links âncora
    const handleClick = (e) => {
      // Verifica se o clique foi em um link âncora
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      
      // Verifica se o link é para uma seção da página
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Rola suavemente até o elemento alvo
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Atualiza a URL sem recarregar a página
          window.history.pushState(null, null, href);
        }
      }
    };

    // Adiciona o evento de clique ao documento
    document.addEventListener('click', handleClick);

    // Limpa o evento quando o componente é desmontado
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useSmoothScroll;
