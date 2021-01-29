import React, { Component } from "react";
import PropTypes from "prop-types";
import SimpleModal from "../SimpleModal/SimpleModal";

class SimpleModalLauncher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    handleToggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        const { imgURL, children } = this.props;
        const { showModal } = this.state;

        return (
            <div>
                <button
                    onClick={() => this.handleToggleModal()}
                    style={{ padding: '0', border: '0' }}
                ><img className='img-rounded img-responsive' src={imgURL}></img>
                </button>

                {showModal && (
                    <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
                        {children}
                    </SimpleModal>
                )}
            </div>
        );
    }
}

SimpleModalLauncher.propTypes = {
    imgURL: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    sheet: PropTypes.object,
    classes: PropTypes.object
};

export default SimpleModalLauncher;
