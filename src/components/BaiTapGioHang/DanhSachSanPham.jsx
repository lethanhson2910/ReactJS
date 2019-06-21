import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {
    renderSanPham = () =>{
        //Lấy giá trị của component cha thông qua props
        return this.props.mangSanPham.map((sanPham, index) =>{
            return (
                <div className="col-md-3" key={index}>
                    {/* this.props.muaHang là tham số callback nhận từ BaiTapGioHang component */}
                    <SanPham muaHang={this.props.muaHang} sanPham={sanPham}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className='row'>
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
