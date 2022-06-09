import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import transferPrice from "../../helper/TransferPrice";
import * as actions from "./../../actions/index";
import ModalPic from "./ModalPic";

function DetailProductComponent(props) {
  const { Product } = props;
  const [dismodal, setdismodal] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  function onClickBuy() {
    dispatch(actions.addToCart(Product));
    history.push("/cart");
  }

  function QuitModal() {
    setdismodal(null);
  }

  function ChangeModal(data) {
    var lengthPic = Product.listImage.length;
    setdismodal({
      item: Product.listImage[dismodal.stt + data],
      stt: dismodal.stt + data,
    });
    if (data == -1 && dismodal.stt == 0)
      setdismodal({
        item: Product.listImage[lengthPic + data],
        stt: lengthPic + data,
      });
    if (data == 1 && dismodal.stt == lengthPic - 1)
      setdismodal({ item: Product.listImage[0], stt: 0 });
  }

  function renderListImage(listimage) {
    var temp = [];
    if (listimage) {
      temp = listimage.map((item, stt) => (
        <li className="css-4">
          <img
            src={item}
            onClick={() => setdismodal({ item: item, stt: stt })}
            alt=""
            className="css-5"
          />
        </li>
      ));
    }
    return temp;
  }
  return (
    Product && (
      <div className="col-lg-9 css-11">
        {dismodal ? (
          <ModalPic
            src={dismodal}
            QuitModal={QuitModal}
            ChangeModal={ChangeModal}
          ></ModalPic>
        ) : (
          ""
        )}
        <div className="css-90">
          <div className="css-14">
            <div className="css-1 css-1002">
              <div className="css-0">
                <img src={Product.image} alt="" className="css-2" />
              </div>
              <ul className="css-3">{renderListImage(Product.listImage)}</ul>
              <div className="model">
                <div className="css-60">
                  <div className="slide">
                    <div className="header-slide">
                      <div className="owl-carousel header-slide-main owl-theme">
                        <div className="item">
                          <img
                            src="./img/banner13.jpg"
                            alt=""
                            className="header-slide-img"
                          />
                        </div>
                        <div className="item">
                          <img
                            src="./img/banner13.jpg"
                            alt=""
                            className="header-slide-img"
                          />
                        </div>
                        <div className="item">
                          <img
                            src="./img/banner13.jpg"
                            alt=""
                            className="header-slide-img"
                          />
                        </div>
                        <div className="item">
                          <img
                            src="./img/banner13.jpg"
                            alt=""
                            className="header-slide-img"
                          />
                        </div>
                        <div className="item">
                          <img
                            src="./img/banner13.jpg"
                            alt=""
                            className="header-slide-img"
                          />
                        </div>
                        <div className="item">
                          <img
                            src="./img/banner13.jpg"
                            alt=""
                            className="header-slide-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label for="input__check" className="css-110"></label>
                </div>
              </div>
            </div>
            <div className="css-70">
              <div className="css-71">
                - Mã Hàng: 8936071673381 <br></br>- Tên Nhà Cung Cấp : Đông A{" "}
                <br></br>- Tác giả: Mario Puzo
                <br></br>-NXB: NXB Dân Trí
                <br></br>- Năm XB : 09-2016 <br></br>- Số trang: 642
                <br></br>- Hình thức: Bìa Mềm <br></br>- Khối lượng: 0.2 kg
              </div>
            </div>
          </div>
          <div className="css-15">
            <div className="detail-product">
              <div className="css-6 css-1002">
                <h1 className="css-7">{Product.title}</h1>
                <h6 className="css-8">
                  Thương hiệu <span className="css-12">BookShop</span>{" "}
                  <span className="css-1001"></span> {`SKU:${Product._id}`}{" "}
                </h6>
                <h1 className="css-10">{transferPrice(Product.oldprice)}đ</h1>
              </div>
              <div className="css-30 css-1002">
                <div className="css-31">
                  Chọn thêm 1 trong những khuyến mãi sau
                </div>
                <div className="css-32">
                  <div className="css-33">
                    Giá: <span>{transferPrice(Product.newprice)}đ</span>{" "}
                  </div>
                  <div className="css-34">
                    Đã giảm thêm{" "}
                    <span>
                      {transferPrice(Product.oldprice - Product.newprice)}
                    </span>{" "}
                  </div>
                </div>
                <div className="css-35">
                  <div className="css-36">
                    {" "}
                    <div onClick={onClickBuy} className="css-39">
                      Mua ngay
                    </div>{" "}
                  </div>
                  <div className="css-37">
                    {" "}
                    <div
                      className="css-39 css-40"
                      onClick={() => {
                        toast.success("Thêm giỏ hàng thành công");
                        dispatch(actions.addToCart(Product));
                      }}
                    >
                      Thêm vào giỏ hàng
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-20">
                <div className="css-24">Khuyến mãi liên quan</div>
                <ul className="css-23">
                  <li className="css-24">
                    Nhập mã BookStore200 giảm thêm 5% tối đa 20.000đ khi thanh
                    toán qua VNPAY-QR{" "}
                    <span className="css-1003">Xem chi tiết!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default DetailProductComponent;
