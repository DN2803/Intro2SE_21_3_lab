import React from "react";
import Slider from 'react-slick'

const AboutUs = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
    return (
        <>
        <section className="AboutUs">
            <h1>Về chúng tôi</h1>
            <p>Phòng khám mắt Teyvat tự hào có đội ngũ chuyên gia, y bác sĩ giỏi và giàu kinh nghiệm về nhãn khoa và khúc xạ nhãn khoa. Hơn thế nữa, trong những năm hoạt động, Phòng khám Mắt Teyvat đã khám và điều trị cho hàng nghìn lượt bệnh nhân, tạo dựng được niềm tin của hàng triệu người khi khám bệnh về mắt. Chính vì vậy Phòng Khám Mắt Teyvat là sự lựa chọn hàng đầu cho bạn và gia đình bạn!</p>
        </section>
        <section className="our__doctors">
            <h2>Đội ngũ bác sĩ</h2>
            <div>

           
            <Slider {...settings}>
                {/* <div className="w-3/4 m-auto">
                    <div className="mt-20">
                        {data.map((d)=> (
                            <div>
                                <div>
                                    <img src={d.img} alt=""/>
                                </div>
                                <div>
                                    <p>{d.name}</p>
                                    <p>{d.review}</p>
                                </div>
                            </div>
                            
                        )
                            
                        )}
                    </div>
                </div> */}
                 <div>
                    <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
          </div>
            </Slider>
            </div>
        </section>
        <section className="our_devices">

        </section>
        </>
    )
}
export default AboutUs


const data = [{
    img:1234,
    name: 'doctor1',
    review: 'lorem'
}];