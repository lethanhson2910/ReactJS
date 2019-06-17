import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            // /* The Modal */ 
            < div className = "modal fade" id = "myModal" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.contenModal.name}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            {this.props.contenModal.desc}
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
