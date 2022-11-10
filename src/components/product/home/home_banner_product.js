import React from "react";
import Slider from "react-slick";
import "./home_banner_product.css";

const Home_Banner_Product = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="shop">
      <div className="shop-2">
        <div className="shop-img">
          <img
            src="https://citycomputer.mn/wp-content/uploads/2021/10/245166987_397598101864996_7610874419585783863_n.png
              "
            alt="/"
          />
        </div>
        <div className="shop-3">
          <div className="shop-3-img">
            <Slider {...settings}>
              <div className="card1">
                <div className="card1-img">
                  <div className="pos">
                    <div className="pos-h">
                      <h1 className="roboto">Хямдрал</h1>
                    </div>
                  </div>
                  <img
                    src="https://citycomputer.mn/wp-content/uploads/2021/09/24-281-095-S03-247x296.jpg"
                    className=""
                    alt="/"
                  />
                </div>
                <div className="content">
                  <p className="roboto">ASUS TUF Gaming 28” Monitor – 4K</p>
                </div>
              </div>
              <div className="card1">
                <div className="card1-img">
                  <div className="pos">
                    <div className="pos-h">
                      <h1 className="roboto">Хямдрал</h1>
                    </div>
                  </div>
                  <img
                    src="https://citycomputer.mn/wp-content/uploads/2021/09/11-1-247x296.jpg"
                    className=""
                    alt="/"
                  />
                </div>
                <div className="content">
                  <p className="roboto">Dell 22"Full HD LCD Monitor E2216</p>
                </div>
              </div>
              <div className="card1">
                <div className="card1">
                  <div className="card1-img">
                    <div className="pos">
                      <div className="pos-h">
                        <h1 className="roboto">Хямдрал</h1>
                      </div>
                    </div>
                    <img
                      src="https://citycomputer.mn/wp-content/uploads/2021/09/16-247x296.jpg"
                      className=""
                      alt="/"
                    />
                  </div>
                  <div className="content">
                    <p className="roboto">
                      ASUS TUF Gaming 27 Curved 165Hz VG27V
                    </p>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="card1">
                  <div className="card1-img">
                    <div className="pos">
                      <div className="pos-h">
                        <h1 className="roboto">Хямдрал</h1>
                      </div>
                    </div>
                    <img
                      src="https://citycomputer.mn/wp-content/uploads/2021/08/4-247x296.jpg"
                      className=""
                      alt="/"
                    />
                  </div>
                  <div className="content">
                    <p className="roboto">AULA N-301 Gaming Speaker</p>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="card1-img">
                  <div className="pos">
                    <div className="pos-h">
                      <h1 className="roboto">Хямдрал</h1>
                    </div>
                  </div>
                  <img
                    src="https://citycomputer.mn/wp-content/uploads/2021/09/24-281-095-S03-247x296.jpg"
                    className=""
                    alt="/"
                  />
                </div>
                <div className="content">
                  <p className="roboto">ASUS TUF Gaming 28” Monitor – 4K</p>
                </div>
              </div>
              <div className="card1">
                <div className="card1-img">
                  <div className="pos">
                    <div className="pos-h">
                      <h1 className="roboto">Хямдрал</h1>
                    </div>
                  </div>
                  <img
                    src="https://citycomputer.mn/wp-content/uploads/2021/09/11-1-247x296.jpg"
                    className=""
                    alt="/"
                  />
                </div>
                <div className="content">
                  <p className="roboto">Dell 22"Full HD LCD Monitor E2216</p>
                </div>
              </div>
              <div className="card1">
                <div className="card1">
                  <div className="card1-img">
                    <div className="pos">
                      <div className="pos-h">
                        <h1 className="roboto">Хямдрал</h1>
                      </div>
                    </div>
                    <img
                      src="https://citycomputer.mn/wp-content/uploads/2021/09/16-247x296.jpg"
                      className=""
                      alt="/"
                    />
                  </div>
                  <div className="content">
                    <p className="roboto">
                      ASUS TUF Gaming 27 Curved 165Hz VG27V
                    </p>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="card1">
                  <div className="card1-img">
                    <div className="pos">
                      <div className="pos-h">
                        <h1 className="roboto">Хямдрал</h1>
                      </div>
                    </div>
                    <img
                      src="https://citycomputer.mn/wp-content/uploads/2021/08/4-247x296.jpg"
                      className=""
                      alt="/"
                    />
                  </div>
                  <div className="content">
                    <p className="roboto">AULA N-301 Gaming Speaker</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Banner_Product;
