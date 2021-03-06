import React from 'react';
import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { open_modal,close_modal} from '../redux/diff';

const Modalcomp = ({children,title}) => {


    const dispatch = useDispatch();
    const { togglemodal } = useSelector((state) => state.diff);

    const handleOk = e => {
        console.log(e);
        dispatch(close_modal());
    }

    return (
        <Modal title={title} visible={togglemodal} onOk={handleOk} onCancel={handleOk}>
       

{children}

      </Modal>
    );
}

export default Modalcomp;
