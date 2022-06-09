import React, { useEffect } from "react";
import Slider from "react-slick";
import Slideitem from "./slideitem";
import "./slider.css";
const NextSlide = (props) => {
  const { onClick } = props;
  return (
    <span class="header-slide-btn header-slide-left" onClick={onClick}>
      <i class="fas fa-chevron-left"></i>
    </span>
  );
};
const PrevSlide = (props) => {
  const { onClick } = props;
  return (
    <span class="header-slide-btn header-slide-right" onClick={onClick}>
      <i class="fas fa-chevron-right"></i>
    </span>
  );
};
const Slide = (props) => {
  const { setting } = props;
  var listImage = [
    "https://lh3.googleusercontent.com/YixnTizqW7Z48WEt_0ExMDZoxXPFLQ-zc5Ba4O6Bk0c5wL1M8K4OVHMNjmLVTomBGMM9nJ_HwlArqAkX3xHUtC13vEgJM-UTNLlSStoWqNSw8tm5XCS4jXJBgFYiUyzMfwvVKckjTeXFmtTfzuTQa1DP91-SqqA8NC2jOhJcf6YpR0RBPaOhmaDepAMgDzFK3Ma-wuJi-M1w06ZammcFTX70Wp-e8UZs8RVPIjdYzW9BtvqrNOz3pY7jA4SCm-vBYVRYkYtNab6ZpeE2o_AE1k5tY8JxZGZylahm6PXE2unoA_ynmbLMqgbWRMBxiJ_fTOizZ-ILek_-n2xlNLkW1zUjZTummxb3hWQEHhryVnxbFPteXL2LWrFKWrtvEqmegF8sAQBtN_rLMbS3SvQzoNUkFfRtwd8lyP4liiZA-tZkfXUoys6nDlgE2KN4UxRgfgKmNhjBhtRKcI3c01ev_2-1xvn6UUeCQIVWF2nqQ2seMohsvqL4Vm_2FS3M4MticXcbYw4BtxDDy_cVgTWVS9UPuNAF5F36oE8Yd9Oq1FHzRqC3WmbsqKC3CzcKrm2hjtCrtzRQLMBWYnCMXrtHrVUnvA9xVEpHWpLwS0pEowrMYF7yCbcLdsJpaxc0VcNkBfQN7ZUw50ooJwOMM0xpqQcAgiKjdnhR1xj3ONBCqYpizWy_pVvREdCBsaiejE9S2BcSbbN49hVy9nDJ-oIFlZ9BmakKB_S4f0zaFc82KwwpDdsHAiCc33Bx54el9A=w1366-h499-no?authuser=0",
    "https://lh3.googleusercontent.com/ANxQkCfnhlYJj03-Cq23YTVTKijDI4Pc7x-fsc4PjgNM7kSIL7yJTjQTcDOBN8_9TPtDMia36vtP79EUNz-1yB4OFgl9Hy2VD8HX8sjHriDqwS-IzdmMvI0jBeorfWRiK9UbkbFcU2V1OCMLW6kqgHzYg_lis_6NIaWpHeUtyU8pc2ohlSUC1KC99Y-rEgo_OXpocuQpjGaGFDPbd24ONMrDcrIi8EnWA3IiuTWR96akdcQPJvV2pwJrDWQk0g-Lp12Pe1B90E2sPcL-fm9Gi2xo0vmnkBlP5K5UD6GRRV-a8UxQRh4gi4UnU1EyXWxPe8ZGTCSBQR2NCiwL3kyhPXK_eOo8ioIooPqj7dBLOvVNvHZGlXz6bn326VPB_R-tRG46z6aDXV3WRYfgEJfkbVT6PMEgSIG7908eh5BY7xnX0ZjAW0A3KCLOS26RY0fcxqyWQ9peSeEbnRfvRR-6OMCh8cr_rOa5e0SgHGLoCpUWMHtiadl-Lb2aDSa48ITgjOcjqvCPC5oU-jbt-lYI8WWwUqcmdSCA87J8-IL2Z2FGDgq2g7q9PS_sqzyugeS2RdcpVe63oGgBAhXpC2hBvopACyTa1XFPitXLlWIgTyjZALwZtFDI5ZVdgnK2mB6thrNjyeCzH2vfVctY04SlOIQKuFJR67Ys70ZEwarLcav02b8Rd9rpvfbav8FFxiO-kMB2LeURnKBKjuVFynHIf5h6w8Wik9u2kfypPM8WUxHMFA-YxRcxVnK1hxdZFw=w1366-h499-no?authuser=0",
  ];
  function renderSlide() {
    var result = [];
    for (var i = 0; i < listImage.length; i++) {
      result.push(<Slideitem urlImage={listImage[i]} key={i}></Slideitem>);
    }
    return result;
  }
  var settings = {
    infinite: true,
    speed: 500,
    ...setting,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <PrevSlide />,
    prevArrow: <NextSlide />,
  };
  return <Slider {...settings}>{renderSlide()}</Slider>;
};

Slide.propTypes = {};

export default Slide;
