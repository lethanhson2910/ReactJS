import React, { Component } from 'react'
import Product from './components/Product';
import Modal from './components/Modal';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Productlist from './components/Productlist';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contenModal:{}
    }
  }

  mangDienThoai = [
    { id: 'sp_1', name: 'iphoneX', price: 30000000, screen: 'screen_1', backCamera:
    'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },
    { id: 'sp_2', name: 'Note 7', price: 20000000, screen: 'screen_2', backCamera: 'backCamera_2',
    frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason' },
    { id: 'sp_3', name: 'Vivo', price: 10000000, screen: 'screen_3', backCamera: 'backCamera_3',
    frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality' },
    { id: 'sp_4', name: 'Blacberry', price: 15000000, screen: 'screen_4', backCamera:
    'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed' } 
  ];
    
  mangLapTop = [
    { id: 'sp_1', name: 'Macbook', price: 30000000, img: './img/lt_macbook.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },
    { id: 'sp_2', name: 'Asus Rog', price: 20000000, img: './img/lt_rog.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason' },
    { id: 'sp_3', name: 'HP Book', price: 10000000, img: './img/lt_hp.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality' },
    { id: 'sp_4', name: 'Lenovo Thinkpad', price: 15000000, img: './img/lt_lenovo.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed' }
  ];

  tieuDe = 'FontEnd 19';

  xemChiTiet = (sanPham) => {
    this.setState({
      contenModal: sanPham
    });
  }

  render() {
    
    //callback: hiển thị thông tin
    //dữ liệu cần lấy ở component sẽ đặt callback function tại component đó
    
  
    return (
      <div className="App">
        <div className="bg-dark">  
          <Header title={this.tieuDe}></Header>
          <Carousel></Carousel>
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <Productlist xemChiTiet={this.xemChiTiet} mangSanPham={this.mangDienThoai}></Productlist>
          <h1 className="text-white text-center">BEST LAPTOP</h1>        
          <Productlist xemChiTiet={this.xemChiTiet} mangSanPham={this.mangLapTop}></Productlist>
          <Footer></Footer>
          <Modal contenModal={this.state.contenModal}></Modal>
        </div>
        {/* <DanhSachSinhVien></DanhSachSinhVien> */}
      </div>
    );
  }
}

