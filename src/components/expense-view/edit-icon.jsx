import React, { Component } from 'react';
import EditModal from "../budget-view/modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { deleteExpense, editCategoryBudget } from '../../actions';

class EditIcons extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    } 

    deleteExpense = () => {
        const { dispatch, id, expense } = this.props;
        dispatch(deleteExpense(id));

        // delete the expenses from category balance
        dispatch(editCategoryBudget({
            id: expense.category,
            amount: expense.amount,
            isAdd: false //delete expenses to individual category
        }));
    }

    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className='col-6 mr-2' 
                            style={{color: ' #6F1AE3'}}
                            data-bs-toggle="tooltip" 
                            data-bs-placement="right" 
                            title="Edit expense"
                            onClick={this.toggleModal}>
                            <FontAwesomeIcon icon={faPen} />    
                        </div>
                        <div className="col-6" onClick={this.deleteExpense}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>
                </div>
                <EditModal 
                    isOpen={this.state.showModal} 
                    toggle={this.toggleModal}
                    expense={this.props.expense} 
                />
            </div>
        );
    }
}

const mapStateToProps = ({expenses}, {id}) => ({
    expense: expenses.find((expense) => expense.id === id)
});

export default connect(mapStateToProps)(EditIcons);