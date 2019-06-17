import React, { Component } from 'react'
import Product from './Product';

export default class Productlist extends Component {
    //this.props: Thuộc tính có sẵn của component 
        //Dùng nhận dữ liệu từ component cha

    renderSanPham = () =>{
        return this.props.mangSanPham.map((sanPham, index) =>{
            return (
                <Product xemChiTiet={this.props.xemChiTiet} sanPham={sanPham} key={index}/>
            )
        });

        //Cách 1
        // for(let i=0; i < this.props.mangSanPham.length;i++){
        //     let sanPham = this.props.mangSanPham[i];
        //     content.push(
        //         // <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3" key={i}>
        //         //     <div className="container">
        //         //         <div className="card bg-light" style={{ width: 300 }}>
        //         //             <img className="card-img-top" src={sanPham.img}  alt="Card_image" style={{ maxWidth: '100%', height: 250 }} />
        //         //             <div className="card-body text-center">
        //         //                 <h4 className="card-title text-center">{sanPham.name}</h4>
        //         //                 <p>{sanPham.desc}</p>
        //         //                 <button href="#" className="btn btn-primary" >Detail</button> 
        //         //                 <button href="#" className="btn btn-success" >Show Info</button>
        //         //                 <button href="#" className="btn btn-danger">Cart</button>
        //         //             </div>
        //         //         </div>
        //         //     </div>
        //         // </div>

        //         //Truyền callback xemChiTiet từ app => product
        //         <Product xemChiTiet={this.props.xemChiTiet} sanPham={sanPham} key={i}></Product>
        //     );
        //     // console.log(content);     
        // }
        // return content;
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

