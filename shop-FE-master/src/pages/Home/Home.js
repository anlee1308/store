import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/slider";
import { Link } from "react-router-dom";
import "./home.css";
import Product_PK from "../../components/Product_PK/Product_PK";
import Banner from "../../components/Banner/Banner";
import SlideProduct from "../../components/Slider/slideproduct";
import axiosClient from "../../helper/axiosClient";

const Home = () => {
  const [ListProductKM, setListProductKM] = useState(null);
  const [ListProductHot, setListProductHot] = useState(null);
  const [ListProductBC, setListProductBC] = useState(null);
  const [ListProductPK, setListProductPK] = useState(null);
  useEffect(() => {
    async function getListProduct(category, page, type) {
      var Data = await axiosClient({
        url: `http://localhost:8080/api/products/${category}?page=${page}&type=${type}`,
        method: "get",
      });
      if (category == "Novel") {
        switch (type) {
          case 1:
            setListProductKM(Data.listProducts);
            break;
          case 2:
            setListProductHot(Data.listProducts);
            break;
          case 3:
            setListProductBC(Data.listProducts);
            break;
          default:
            break;
        }
      } else setListProductPK(Data.listProducts);
    }
    getListProduct("Novel", 1, 1)
      .then(() => getListProduct("Novel", 1, 2))
      .then(() => getListProduct("Novel", 1, 3))
      .then(() => getListProduct("PK", 1, 1));
  }, []);
  return (
    <div className="main">
      <div className="slide-home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <Slider></Slider>
            </div>
          </div>
        </div>
      </div>

      <Banner
        listBanner={[
          "https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/062022bigsale-deal_310x210.jpg",
          "https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/062022bigsale-deal_310x210.jpg",
          "https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/062022bigsale-deal_310x210.jpg",
          "https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/062022bigsale-deal_310x210.jpg",
        ]}
      ></Banner>
      <div className="product-deal-hot">
        <div class="container">
          <div class="product-deal-hot-wrap">
            <div class="product-hot-intro">
              <h3 class="product-deal-hot-title">
                S??ch Khuy???n M??i Trong Th??ng
              </h3>
              <Link to="/Products/Novel?type=2" class="product-hot-btn">
                Xem t???t c??? <i class="fas fa-chevron-right"></i>
              </Link>
            </div>
            <div class="row mx-4">
              <div className="col-12">
                <SlideProduct ListProduct={ListProductKM}></SlideProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner
        listBanner={[
          "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/DoChoi/Thang5/TTN_tag4.jpg",
        ]}
      />
      <div className="product-deal-hot">
        <div class="container">
          <div class="product-deal-hot-wrap">
            <div class="product-hot-intro">
              <h3 class="product-deal-hot-title">S??ch B??n Ch???y Trong Th??ng</h3>
              <Link to="/Products/Novel?type=3" class="product-hot-btn">
                Xem t???t c??? <i class="fas fa-chevron-right"></i>
              </Link>
            </div>
            <div class="row mx-4">
              <div className="col-12">
                <SlideProduct ListProduct={ListProductBC}></SlideProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner
        listBanner={[
          "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/DoChoi/Thang5/TTN_sku1.3.jpg",
          "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/DoChoi/Thang5/TTN_sku1.3.jpg",
          "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/DoChoi/Thang5/TTN_sku1.3.jpg",
        ]}
      />
      <div className="product-deal-hot">
        <div class="container">
          <div class="product-deal-hot-wrap">
            <div class="product-hot-intro">
              <h3 class="product-deal-hot-title">S??ch M???i Nh???t Trong Th??ng</h3>
              <Link to="/Products/Novel" class="product-hot-btn">
                Xem t???t c??? <i class="fas fa-chevron-right"></i>
              </Link>
            </div>
            <div class="row mx-4">
              <div className="col-12">
                <SlideProduct ListProduct={ListProductHot}></SlideProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="product-brand">
        <div class="container">
          <div class="product-brand-wrap">
            <h3 class="product-brand-title">Th????ng hi???u n???i b???t</h3>
            <div class="row px-4 mt-2">
              <div class="col-lg-3 p-0">
                <div class="product-brand-item">
                  <div class="brand-img-wrap">
                    <img src={ImageBanner9} alt="" class="product-brand-img" />
                  </div>
                  <div class="product-band-desc">
                    <p class="product-brand-name">MSI</p>
                    <p class="product-brand-content">
                      Made for Gamers and Creator
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 p-0">
                <div class="product-brand-item">
                  <div class="brand-img-wrap">
                    <img src={ImageBanner10} alt="" class="product-brand-img" />
                  </div>
                  <div class="product-band-desc">
                    <p class="product-brand-name">HP</p>
                    <p class="product-brand-content">
                      L??? h???i m??y t??nh HP - ??u ????i c???c ph??
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 p-0">
                <div class="product-brand-item">
                  <div class="brand-img-wrap">
                    <img src={ImageBanner11} alt="" class="product-brand-img" />
                  </div>{" "}
                  <div class="product-band-desc">
                    <p class="product-brand-name">LG</p>
                    <p class="product-brand-content">Th??ng LG qu?? m?? ly</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 p-0">
                <div class="product-brand-item">
                  <div class="brand-img-wrap">
                    <img src={ImageBanner12} alt="" class="product-brand-img" />
                  </div>{" "}
                  <div class="product-band-desc">
                    <p class="product-brand-name">Lenovo</p>
                    <p class="product-brand-content">
                      Laptop ch??i game th???c th???
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Product_PK ListProduct={ListProductPK} />
    </div>
  );
};

export default Home;
