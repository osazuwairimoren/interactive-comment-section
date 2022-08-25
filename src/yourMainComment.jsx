import yourMainComment from "./yourMainComment.module.scss";
import iconPlus from "./images/icon-plus.svg";
import iconMinus from "./images/icon-minus.svg";
import { useState, useRef, useContext, createContext } from "react";
import you from "./images/avatars/image-juliusomo.png";
import iconDelete from "./images/icon-delete.svg";
import iconEdit from "./images/icon-edit.svg";
import ReplySection from "./replySection";
import Modal from "./modal";

// context for global management
export const modalContext = createContext();
function YourMainComment(props) {
    // adding score or substracting
    let [score, setScore] = useState(0);
    const addScore = () => {
        setScore(score + 1);
    };
    const minusScore = () => {
        setScore(score - 1);
    };
    // handling commment and editing
    let [comment, changeComment] = useState(props.comment);
    const changeCommentFunction = (event) => {
        changeComment(event.target.value);
    };
    // editing
    let [editBoolean, setEditBoolean] = useState(false);
    let editMode = useRef();
    const editComment = () => {
        setEditBoolean(!editBoolean);
        editMode.current.disabled = editBoolean === false ? false : true;
    };
    // updating the edited comment
    const updateComment = () => {
        setEditBoolean(false);
        editMode.current.disabled = true;
    };
    // deleting comment
    let [deleteComment, setDeleteComment] = useState(false);
    const deleteCommentFunction = () => {
        setDeleteComment(true);
        openModalFunction();
    };
    // opening modal
    let [openModal, setOpenModal] = useState(false);
    const openModalFunction = () => {
        setOpenModal(!openModal);
    };
    let when = "now" || "since";
    return (
        <modalContext.Provider
            value={{ deleteCommentFunction, openModalFunction }}
        >
            <>
                {/*  comment container */}
                <div
                    className={yourMainComment.comment}
                    style={{
                        display: deleteComment === true ? "none" : "flex",
                    }}
                >
                    {/* comment score section */}
                    <div className={yourMainComment.score}>
                        <img src={iconPlus} alt='plus' onClick={addScore} />
                        <span>{score}</span>
                        <img src={iconMinus} alt='minus' onClick={minusScore} />
                    </div>
                    {/* other section in comment contaainer */}
                    <div className={yourMainComment.other}>
                        {/* first row */}
                        <div className={yourMainComment.otherfirstRow}>
                            <div
                                className={yourMainComment.otherfirstRowCollumn}
                            >
                                {/* user profile and username */}
                                <img src={you} alt='user' />
                                <span className={yourMainComment.userName}>
                                    juliusomo
                                </span>
                                <button>you</button>
                                {/* comment date */}
                                <span className={yourMainComment.time}>
                                    {when}
                                </span>
                            </div>
                            {/* reply icon */}
                            <div className={yourMainComment.manageComment}>
                                <div
                                    className={yourMainComment.deleteSection}
                                    onClick={openModalFunction}
                                >
                                    <img src={iconDelete} alt='delete' />
                                    <span className={yourMainComment.delete}>
                                        Delete
                                    </span>
                                </div>
                                <div
                                    className={yourMainComment.deleteSection}
                                    onClick={editComment}
                                >
                                    <img src={iconEdit} alt='edit' />
                                    <span>Edit</span>
                                </div>
                            </div>
                        </div>
                        {/* main reply */}
                        <div className={yourMainComment.otherSecondRow}>
                            {/* text area, disabled by default for edit mode */}
                            <textarea
                                placeholder='Add a comment...'
                                className={yourMainComment.inputComment}
                                value={comment}
                                disabled
                                ref={editMode}
                                onChange={changeCommentFunction}
                                style={{
                                    border:
                                        editBoolean === false
                                            ? "none"
                                            : "2px solid black",
                                }}
                            />
                            {/* {props.comment} */}
                        </div>
                        <button
                            className={`btn btn-primary ${yourMainComment.updateBtn}`}
                            style={{
                                display:
                                    editBoolean === false ? "none" : "block",
                            }}
                            onClick={updateComment}
                        >
                            update
                        </button>
                        {/* show this section on mobile for responsiveness */}
                        <div className={yourMainComment.showOnMobile}>
                            {/* comment score section */}
                            <div className={yourMainComment.score}>
                                <img
                                    src={iconPlus}
                                    alt='plus'
                                    onClick={addScore}
                                />
                                <span>{score}</span>
                                <img
                                    src={iconMinus}
                                    alt='minus'
                                    onClick={minusScore}
                                />
                            </div>
                            <div className={yourMainComment.manageComment}>
                                <div
                                    className={yourMainComment.deleteSection}
                                    onClick={openModalFunction}
                                >
                                    <img src={iconDelete} alt='delete' />
                                    <span className={yourMainComment.delete}>
                                        Delete
                                    </span>
                                </div>
                                <div
                                    className={yourMainComment.deleteSection}
                                    onClick={editComment}
                                >
                                    <img src={iconEdit} alt='edit' />
                                    <span>Edit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ReplySection />
                <Modal display={openModal === true ? "flex" : "none"} />
            </>
        </modalContext.Provider>
    );
}
export default YourMainComment;
// import yourComment from "./yourComment.module.scss";
// import iconPlus from "./images/icon-plus.svg";
// import iconMinus from "./images/icon-minus.svg";
// import { useRef, useState } from "react";
// import you from "./images/avatars/image-juliusomo.png";
// import iconDelete from "./images/icon-delete.svg";
// import iconEdit from "./images/icon-edit.svg";
// import Modal from "./modal";

// function YourComment(props) {
//     // adding score or substracting
//     let [score, setScore] = useState(0);
//     const addScore = () => {
//         setScore(score + 1);
//     };
//     const minusScore = () => {
//         setScore(score - 1);
//     };
//     // handling commment and editing
//     let [comment, changeComment] = useState(props.comment);
//     const changeCommentFunction = (event) => {
//         changeComment(event.target.value);
//     };
//     // editing
//     let [editBoolean, setEditBoolean] = useState(false);
//     let editMode = useRef();
//     const editComment = () => {
//         setEditBoolean(!editBoolean);
//         editMode.current.disabled = editBoolean === false ? false : true;
//     };
//     // updating the edited comment
//     const updateComment = () => {
//         setEditBoolean(false);
//         editMode.current.disabled = true;
//     };
//     // deleting comment
//     let [deleteComment, setDeleteComment] = useState(false);
//     const deleteCommentFunction = () => {
//         setDeleteComment(true);
//     };

//     return (
//         // comment container
//         <div
//             className={yourComment.comment}
//             style={{ display: deleteComment === true ? "none" : "flex" }}
//         >
//             {/* comment score section */}
//             <div className={yourComment.score}>
//                 <img src={iconPlus} alt='plus' onClick={addScore} />
//                 <span>{score}</span>
//                 <img src={iconMinus} alt='minus' onClick={minusScore} />
//             </div>
//             {/* other section in comment contaainer */}
//             <div className={yourComment.other}>
//                 {/* first row */}
//                 <div className={yourComment.otherfirstRow}>
//                     <div className={yourComment.otherfirstRowCollumn}>
//                         {/* user profile and username */}
//                         <img src={you} alt='user' />
//                         <span className={yourComment.userName}>juliusomo</span>
//                         <button>you</button>
//                         {/* comment date */}
//                         <span className={yourComment.time}>
//                             a few seconds ago
//                         </span>
//                     </div>
//                     {/* reply icon */}
//                     <div className={yourComment.manageComment}>
//                         <div
//                             className={yourComment.deleteSection}
//                             onClick={deleteCommentFunction}
//                         >
//                             <img src={iconDelete} alt='delete' />
//                             <span className={yourComment.delete}>Delete</span>
//                         </div>
//                         <div
//                             className={yourComment.deleteSection}
//                             onClick={editComment}
//                         >
//                             <img src={iconEdit} alt='edit' />
//                             <span>Edit</span>
//                         </div>
//                     </div>
//                 </div>
//                 {/* main reply */}
//                 <div className={yourComment.otherSecondRow}>
//                     {/* text area, disabled by default for edit mode */}
//                     <textarea
//                         placeholder='Add a comment...'
//                         className={yourComment.inputComment}
//                         value={comment}
//                         disabled
//                         ref={editMode}
//                         onChange={changeCommentFunction}
//                         style={{
//                             border:
//                                 editBoolean === false
//                                     ? "none"
//                                     : "2px solid black",
//                         }}
//                     />
//                 </div>
//                 <button
//                     className={`btn btn-primary ${yourComment.updateBtn}`}
//                     style={{
//                         display: editBoolean === false ? "none" : "block",
//                     }}
//                     onClick={updateComment}
//                 >
//                     update
//                 </button>
//                 {/* show this section on mobile for responsiveness */}
//                 <div className={yourComment.showOnMobile}>
//                     {/* comment score section */}
//                     <div className={yourComment.score}>
//                         <img src={iconPlus} alt='plus' onClick={addScore} />
//                         <span>{score}</span>
//                         <img src={iconMinus} alt='minus' onClick={minusScore} />
//                     </div>
//                     <div className={yourComment.manageComment}>
//                         <div
//                             className={yourComment.deleteSection}
//                             onClick={deleteCommentFunction}
//                         >
//                             <img src={iconDelete} alt='delete' />
//                             <span className={yourComment.delete}>Delete</span>
//                         </div>
//                         <div
//                             className={yourComment.deleteSection}
//                             onClick={editComment}
//                         >
//                             <img src={iconEdit} alt='edit' />
//                             <span>Edit</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <Modal display={deleteComment === false ? "none" : "flex"} /> */}
//         </div>
//     );
// }

// export default YourComment;
