import React, { Component } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import TheCart from "./TheCart";

export default class ShoppingCart extends Component {
  state = {
    cartList: [],
    proDetail: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
  };
  handleSetProDetail = (product) => {
    this.setState({
      proDetail: product,
    });
  };

  deleteCart = (maSP) => {
    let cartList = this.state.cartList;
    const index = cartList.findIndex((cart) => cart.maSP === maSP);
    cartList.splice(index, 1);
    this.setState({ cartList });
  };

  handleQuantity = (status, maSP) => {
    let cartList = this.state.cartList;
    const index = cartList.findIndex((cart) => cart.maSP === maSP);
    if (index !== -1) {
      if (status) {
        cartList[index].soLuong += 1;
      } else {
        cartList[index].soLuong -= 1;
      }
    } else {
      alert("ko tim thay");
    }
    if (cartList[index].soLuong <= 0) {
      cartList.splice(index, 1);
    }
    this.setState({ cartList });
  };

  handleAddCart = (product) => {
    let newCartList = this.state.cartList;
    const index = newCartList.findIndex((cart) => cart.maSP === product.maSP);
    if (index !== -1) {
      // timf thayas product tang so luong
      newCartList[index].soLuong += 1;
    } else {
      //ko tim thay thi push sp vo gio hang
      const newCart = { ...product, soLuong: 1 };
      newCartList = [...newCartList, newCart];
    }

    this.setState({
      cartList: newCartList,
    });
  };

  totalCartList = () => {
    return this.state.cartList.reduce(
      (total, cart) => (total += cart.soLuong),
      0
    );
  };
  render() {
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalCartList()})
          </button>
        </div>

        <ProductList
          handleAddCart={this.handleAddCart}
          handleSetProDetail={this.handleSetProDetail}
        />

        <TheCart
          cartList={this.state.cartList}
          handleQuantity={this.handleQuantity}
          deleteCart={this.deleteCart}
        />

        <ProductDetail proDetail={this.state.proDetail} />
      </section>
    );
  }
}
