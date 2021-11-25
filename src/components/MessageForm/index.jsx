import React from 'react'
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux';
import {createMessage} from '../../actions';
import style from './MessageForm.module.scss';

function MessageForm(props) {
    const {createMessageAction} = props;
    const initialUserValues ={
        messageText: '',
    };

    const submitHandler = (values, formikBag) => {
        createMessageAction(values);
        formikBag.resetForm();
    }

    return (
        <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                    <Form className={style.formStyle}>
                        <Field className={style.fieldStyle} name="messageText" placeholder="Message..."/>
                        <button className={style.btnStyle} type='submit'>Send</button>
                    </Form> 
                )}}
        </Formik>
    )
}

const mapStateToProps = (state) => state.message;

const mapDispatchToProps = (dispatch) => {
    return {
        createMessageAction: messageText => {
            dispatch(createMessage(messageText));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
