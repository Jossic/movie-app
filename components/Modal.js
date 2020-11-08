import React from 'react'

class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.closeButton = null
    }

    closeModal() {
        this.closeButton.click()
    }

    submitModal = () => {
        alert('Envoi des données')
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-dark mt-4" data-toggle="modal" data-target="#exampleModal">
                    Créer un film
            </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajouter un film</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}

                            </div>
                            <div className="modal-footer">
                                <button ref={(element) => this.closeButton = element} type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                {this.props.hasSubmit &&
                                    <button onClick={this.submitModal} type="button" className="btn btn-primary">Valider</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
