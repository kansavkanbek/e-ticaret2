import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <Slider {...settings}>
          <div className='!flex items-center bg-gray-100 px-6'>
            <div className=''>
                <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar</div>
                <div className='text-lg my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quaerat nam inventore modi dolorem aliquam cumque, esse facere, sed quos architecto rerum eum natus accusantium cupiditate doloribus ipsum. Ullam, perspiciatis?</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-black text-white'>İncele</div>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6gpll6zin5i8ayra255/air-monarch-4-antrenman-ayakkab%C4%B1s%C4%B1-VrTWXJJn.png" alt="" />
          </div>
          <div className='!flex items-center bg-gray-100 px-6'>
          <div className=''>
                <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar</div>
                <div className='text-lg my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quaerat nam inventore modi dolorem aliquam cumque, esse facere, sed quos architecto rerum eum natus accusantium cupiditate doloribus ipsum. Ullam, perspiciatis?</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-black text-white'>İncele</div>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f5256a3-de76-4696-89c2-e97a412c7957/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png" alt="" />
          </div>
        </Slider>
    </div>
  )
}

export default SliderComp