import { useContext } from "react";
import modal from "./modal.module.scss";
import { modalContext } from "./yourMainComment";
function Modal(props) {
    let { deleteCommentFunction, openModalFunction } = useContext(modalContext);
    return (
        <div className={modal.container} style={{ display: props.display }}>
            <div className={modal.modal}>
                <h4>
                    <b> Delete comment </b>
                </h4>
                <h5>
                    Are you sure you want to delete this comment? This would
                    remove the comment and cant be undone
                </h5>
                <div className={modal.buttonContainer}>
                    <button
                        className={`btn btn-secondary ${modal.button}`}
                        onClick={openModalFunction}
                    >
                        NO, CANCEL
                    </button>
                    <button
                        className={`btn btn-danger ${modal.button}`}
                        onClick={deleteCommentFunction}
                    >
                        YES, DELETE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
