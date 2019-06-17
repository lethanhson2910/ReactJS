//rcc: react class component
//Đỗ dữ liệu, xử lý thì dùng rcc
import React, { Component } from 'react'
// import Modal from './Modal';

export default class Product extends Component {
    //Khai báo thuộc tính
    constructor(props){
        super(props);
        this.state = {
            status: false //Những tham số có thể thay đổi giá trị => chứa trong this.state
        }
    }
    tenSP = "Nokia";
    hienThi = (tenSP)=>{//Khai báo sự kiện
    //arrow function để nó hiểu là k phải function
        alert(tenSP)
    }
    // moTa1 = 'Mô tả điện thoại Nokia';
    // //Cách 2
    hienThiMoTa = () =>{
        if(this.state.status){
            return (<p className="card-text">Mô tả điện thoại Nokia</p>);
        }
            return '';
    }

    anHienMoTa = ()=>{
        this.status = !this.status;//Gán giá trị trong state kiểu này => render sẽ không chạy lại
        this.setState({ //setState() là phương thức gán giá trị các biến trong state, đông thời render() chạy lại
          status: !this.state.status  
        })
    }

    // Chạy sau contructor
    render() {//Phương thức
        //Khai báo biến trong phương thức render
        // let moTa= "Mô tả điện thoại Nokia";
        
        //cách 1        
        // let name = this.props.sanPham.name;
        // let desc = this.props.sanPham.desc;
        
        //cách 2
        let {name, desc, img} = this.props.sanPham;

        
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" style={{ width: 300 }}>
                        <img className="card-img-top" src={img} alt="Card_image" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{name}</h4>
                            {/* Cách 1 tương tự ngIf Angular */}
                            {/* {this.status === true? <p className="card-text">{moTa}</p>: ''} */}
                            {/* Cách 2 tương tự ngIf Angular: Xây dựng phương thức và gọi thực thi */}
                            {/* {this.hienThiMoTa()} */}
                            {/* <button href="#" className="btn btn-primary" onClick={this.hienThi}>Detail</button> */}
                            {/* Nếu hàm có tham số */}
                            <p>{desc}</p>
                            <button href="#" className="btn btn-primary" onClick={() => this.props.xemChiTiet(this.props.sanPham)} data-toggle="modal" data-target="#myModal">Detail</button> 
                            <button href="#" className="btn btn-success" onClick={this.anHienMoTa}>Show Info</button>
                            <button href="#" className="btn btn-danger">Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
