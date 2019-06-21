import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham';
import GioHang from './GioHang';

export default class BaiTapGioHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gioHang: []
        }
    }
    
    mangDienThoai = [
        {
            id: 'sp_1', name: 'iphoneX', price: 30000000, screen: 'screen_1', backCamera:
                'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password'
        },
        {
            id: 'sp_2', name: 'Note 7', price: 20000000, screen: 'screen_2', backCamera: 'backCamera_2',
            frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'
        },
        {
            id: 'sp_3', name: 'Vivo', price: 10000000, screen: 'screen_3', backCamera: 'backCamera_3',
            frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality'
        },
        {
            id: 'sp_4', name: 'Blacberry', price: 15000000, screen: 'screen_4', backCamera:
                'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed'
        }
    ];

    //Lấy dữ liệu sản phẩm từ nút mua hàng => (component SanPham)
    muaHang = (sanPham) =>{  //Giá trị cần nhận là sanPham
        //tạo đối tượng (dữ liệu giỏ hàng) từ sanPham được chọn
        const spGioHang = {
            MaSP: sanPham.id,
            TenSP: sanPham.name,
            HinhAnh: sanPham.img,
            Gia: sanPham.price,
            SoLuong: 1,
        }
        const gioHangCapNhat = [...this.state.gioHang];
        
        //b1: kiểm tra spGioHang đã chứa trong this.state.gioHang chưa
        let index = gioHangCapNhat.findIndex(spGH=> spGH.MaSP === spGioHang.MaSP);
        //index trả về -1 => sản phẩm k có trong giỏ hàng
        if(index===-1){
            //this.state.gioHang không cho push trực tiếp => tạo đối tượng copy từ this.state.gioHang
            gioHangCapNhat.push(spGioHang);
        }
        else{
            //index trả về !-1 => sp có tồn tại trong giỏ hàng
            //Lấy ra vị trị sản phẩm => tăng số lượng
            gioHangCapNhat[index].SoLuong +=1;
        }
        this.setState({
            gioHang:gioHangCapNhat
        })
    }

    //xoaGioHang
    xoaGioHang = (MaSP)=>{ //Mã SP lấy từ sự kiện click Xóa
        //tìm sp tồn tại có trong giỏ hàng không
        let index = this.state.gioHang.findIndex(spGH=> spGH.MaSP === MaSP);
        if(index !== -1){
            this.state.gioHang.splice(index,1);
        }
        this.setState({
            gioHang: this.state.gioHang
        })
    }

    //tangGiamSoLuong
    tangGiamSoLuong = (MaSP,tangGiam)=>{
        //Tìm sp trong giỏ hàng => tăng hoặc giảm
        let index = this.state.gioHang.findIndex(spGH=> spGH.MaSP === MaSP);
        if(index !== -1){
            if(tangGiam){
                this.state.gioHang[index].SoLuong +=1;
            }
            else{
                if(this.state.gioHang[index].SoLuong <=1){
                    alert("Số lượng 1 không thể giảm");
                }
                else{
                    this.state.gioHang[index].SoLuong -=1;
                }
            }
        }
        this.setState({
            gioHang: this.state.gioHang
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Mua hàng Online</h1>
                <DanhSachSanPham muaHang={this.muaHang} mangSanPham={this.mangDienThoai}/>
                <GioHang tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <div className="text-right">Tổng tiền: &nbsp;
                    {
                        (this.state.gioHang.reduce((tongTien, spGioHang, index)=>{
                            return tongTien +=spGioHang.SoLuong * spGioHang.Gia;
                        },0)).toLocaleString()
                    }
                    &nbsp; VND
                </div>
            </div>
        )
    }
}
