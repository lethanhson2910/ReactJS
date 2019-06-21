import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {img, name, price} = this.props.sanPham;
        return (
            <div className="card">
                <img className="card-img-top" src={img} width={150} height={200} alt={img} />
                <div className="card-body text-center">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{price.toLocaleString()} VND</p>
                    <button className="btn btn-success" style={{ width: '100%' }} onClick={()=>this.props.muaHang(this.props.sanPham)}>Cart</button>
                </div>
            </div>

        )
    }
}
