import React, { Component } from 'react'
import SanPham from './SanPham';

export default class GioHang extends Component {
    //lấy dữ liueej state.gioHang từ BaiTapGioHangComponent thông qua props.gioHang
    renderGioHang = () =>{
        return this.props.gioHang.map((sanPham, index) =>{
            return (
                <tr key={index}>
                    <td><img src={sanPham.HinhAnh} width={50} height={50} alt={sanPham.HinhAnh}/></td>
                    <td>{sanPham.TenSP}</td>
                    <td>{sanPham.Gia.toLocaleString()}</td>
                    <td>
                        <button onClick={()=>this.props.tangGiamSoLuong(sanPham.MaSP, true)} className="btn btn-primary">+</button>
                        {sanPham.SoLuong}
                        <button onClick={()=>this.props.tangGiamSoLuong(sanPham.MaSP, false)} className="btn btn-primary">-</button>
                    </td>
                    <td>{(sanPham.SoLuong * sanPham.Gia).toLocaleString()}</td>
                    <td>
                        <button className="btn btn-danger" onClick={()=> this.props.xoaGioHang(sanPham.MaSP)}>x</button>
                    </td>
                </tr>
            )
        })
    }
    
    render() {
        return (
            <div className="container">
                <h3 className="text-left">Giỏ hàng</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Sản phẩm</th> 
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
