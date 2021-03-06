import React, { useEffect, useState } from "react";
import Breadcum from "../../components/Breadcum/Breadcum";
import CallApi from "../../helper/axiosClient";
import "./DetailProduct.css";
import DetailProductComponent from "../../components/DetailProduct/DetailProductComponent";
import SlideProduct from "../../components/Slider/slideproduct";
import ConfigProduct from "../../components/DetailProduct/ConfigProduct";
import Comment from "../../components/DetailProduct/Comment";
import parse from "html-react-parser";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

function DetailProduct(props) {
  const { id } = props.match.params;
  const [MoreContent, setMoreContent] = useState(false);
  const [Product, setProduct] = useState(null);
  const [ProductRecommend, setProductRecommed] = useState(null);
  const [ProductPk, setProductPk] = useState(null);
  const [Loading, SetLoading] = useState(false);
  useEffect(() => {
    async function getProduct() {
      SetLoading(true);
      var dataProduct = await CallApi({
        url: `http://localhost:8080/api/detailproducts/${id}`,
        method: "get",
      });
      var dataProductRecommend = await CallApi({
        url: `http://localhost:8080/api/products/Novel?type=1`,
        method: "get",
      });
      var dataProductPk = await CallApi({
        url: `http://localhost:8080/api/products/PK`,
        method: "get",
      });
      setProduct(dataProduct);
      setProductPk(dataProductPk);
      setProductRecommed(dataProductRecommend);
      SetLoading(false);
    }
    getProduct();
  }, [id]);
  function onShowMoreContent() {
    setMoreContent(true);
  }
  function renderNotify(notify) {}
  return (
    Product && (
      <div className="DetailProduct">
        {Loading ? (
          <Loader
            type="Circles"
            color="#f50057"
            height={100}
            width={100}
            style={{ textAlign: "center", width: "100%" }}
          />
        ) : (
          <div className="container">
            <Breadcum ListBreadcum={[Product.category]} final={Product.title} />
            <div className="row">
              <DetailProductComponent Product={Product} Notify={renderNotify} />
              <div class="col-lg-3 css-80">
                <div class="css-100">
                  <div class="css-81 css-1002">
                    <i class="fas fa-truck .css-82"></i>
                    <span class="css-83">
                      S???n ph???m ???????c mi???n ph?? giao h??ng{" "}
                    </span>
                  </div>
                  <div class="css-84">
                    <h1 class="css-85">Ch??nh s??ch b??n h??ng</h1>
                    <ul class="css-86">
                      <li class="css-87">
                        <i class="fas fa-check css-88"></i>
                        Cam k???t h??ng ch??nh h??ng 100%
                      </li>
                      <li class="css-87">
                        <i class="fas fa-truck css-88"></i>
                        Mi???n ph?? giao h??ng t??? 500K
                      </li>
                      <li class="css-87">
                        <i class="fas fa-undo-alt css-88"></i>
                        ?????i tr??? mi???n ph?? trong 10 ng??y
                      </li>
                    </ul>
                  </div>
                  <div class="css-84">
                    <h1 class="css-85">D???ch v??? kh??c</h1>
                    <ul class="css-86">
                      <li class="css-87">
                        <i class="fas fa-shield-alt css-88"></i>
                        B???o h??nh t???i nh??.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="home col-lg-12">
                <div class="header-part-2 ">
                  <div class="header-text">
                    <h1 class="header-title-1">S???n ph???m t????ng t???</h1>
                    <Link to={"/Products/Novel"} class="header-a">
                      Xem t???t c???
                    </Link>
                  </div>
                </div>
                {ProductRecommend && (
                  <SlideProduct ListProduct={ProductRecommend.listProducts} />
                )}
              </div>
            </div>
            <div className="row">
              <div className="home col-lg-12">
                <div class="header-part-2 ">
                  <div class="header-text">
                    <h1 class="header-title-1">S???n ph???m ??i k??m</h1>
                    <Link to={"/Products/PK"} class="header-a">
                      Xem t???t c???
                    </Link>
                  </div>
                </div>
                {ProductPk && (
                  <SlideProduct ListProduct={ProductPk.listProducts} />
                )}
              </div>
            </div>

            <div className="home2">
              <div
                className="product-info "
                style={MoreContent ? { height: "inherit" } : {}}
              >
                <div className="product-description col-lg-8 pr-5">
                  <h1 class="header-h1-1">M?? t??? s???n ph???m</h1>
                  <div className="product-description-wrap">
                    {parse(Product.content)}
                  </div>
                </div>
                {/* <ConfigProduct /> */}
                {!MoreContent && (
                  <div class="product-btn-1">
                    <span onClick={onShowMoreContent}>Xem th??m n???i dung</span>{" "}
                    <i class="fas fa-chevron-down"></i>
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Comment id={id} />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default DetailProduct;
