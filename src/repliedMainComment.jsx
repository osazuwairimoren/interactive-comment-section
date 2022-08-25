import mainComment from "./mainComment.module.scss";
import iconPlus from "./images/icon-plus.svg";
import iconMinus from "./images/icon-minus.svg";
import { useContext, useRef, useState } from "react";
import iconReply from "./images/icon-reply.svg";
import ReplyComment from "./replyComment";
import { Context } from "./context";


function RepliedMainComment(props) {
    let [score, setScore] = useState(props.score);
    const addScore = () => {
        setScore(score + 1);
    };
    const minusScore = () => {
        setScore(score - 1);
    };

    let [reply, setReply] = useState(false);
    const setReplyFunction = () => {
        setReply(!reply);
    };
    return (
        <>
            {/* comment container */}
            <div className={mainComment.comment}>
                {/* comment score section */}
                <div className={mainComment.score}>
                    <img src={iconPlus} alt='plus' onClick={addScore} />
                    <span>{score}</span>
                    <img src={iconMinus} alt='minus' onClick={minusScore} />
                </div>
                {/* other section in comment contaainer */}
                <div className={mainComment.other}>
                    {/* first row */}
                    <div className={mainComment.otherfirstRow}>
                        <div className={mainComment.otherfirstRowCollumn}>
                            {/* user profile and username */}
                            <img src={props.image} alt='user' />
                            <span className={mainComment.userName}>
                                {props.userName}
                            </span>
                            {/* comment date */}
                            <span className={mainComment.time}>
                                {props.time}
                            </span>
                        </div>
                        {/* reply icon */}
                        <div
                            className={mainComment.replySection}
                            onClick={setReplyFunction}
                        >
                            <img src={iconReply} alt='reply' />
                            <span>reply</span>
                        </div>
                    </div>
                    {/* main reply */}
                    <div className={mainComment.otherSecondRow}>
                        {props.comment}
                    </div>
                    {/* show this section on mobile for responsiveness */}
                    <div className={mainComment.showOnMobile}>
                        {/* comment score section */}
                        <div className={mainComment.score}>
                            <img src={iconPlus} alt='plus' onClick={addScore} />
                            <span>{score}</span>
                            <img
                                src={iconMinus}
                                alt='minus'
                                onClick={minusScore}
                            />
                        </div>
                        <div
                            className={mainComment.replySection}
                            onClick={setReplyFunction}
                        >
                            <img src={iconReply} alt='reply' />
                            <span>reply</span>
                        </div>
                    </div>
                </div>
            </div>
            <ReplyComment
                show={reply === false ? "none" : "flex"}
                replyUserName={props.userName}
            />
        </>
    );
}

export default RepliedMainComment;
