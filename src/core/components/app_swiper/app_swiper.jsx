import { useRef, useEffect } from "react";

export const AppSwiper = ({children}) => {
  const swiperElRef = useRef(null);

  //   useEffect(() => {
  //     // listen for Swiper events using addEventListener
  //     swiperElRef.current.addEventListener('swiperprogress', (e) => {
  //       const [swiper, progress] = e.detail;
  //       console.log(progress);
  //     });

  //     swiperElRef.current.addEventListener('swiperslidechange', (e) => {
  //       console.log('slide changed');
  //     });

  //     return () => {
  //         swiperElRef.current.removeEventListener('swiperprogress');
  //         swiperElRef.current.removeEventListener('swiperslidechange');
  //     }
  //   }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      loop
      slides-per-view="3"
      navigation="true"
      //   pagination="true"
    >
       {children} 
    </swiper-container>
  );
};
