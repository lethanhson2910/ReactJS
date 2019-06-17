import React, { Component } from 'react'

export default class DanhSachSinhVien extends Component {
    renderSinhVien = () => {
        let mangSV = [
            { masv: 1, hoten: 'nguyen van a' },
            { masv: 2, hoten: 'nguyen van b' }
        ]
        let content = [];
        for (let i = 0; i < mangSV.length; i++) {
            let sv = mangSV[i];
            content.push(<p>Ma SV: {sv.masv} - hoten: {sv.hoten}</p>);
        }
        return (content);
    };

    render() {
        return (
            <div>
                Danh sách sinh viên
                {this.renderSinhVien()}
            </div>
        )
    }
}
