import you from "./images/avatars/image-juliusomo.png";
import { useState, useContext } from "react";
import replyComment from "./replyComment.module.scss";
import { Context } from "./context";
import { replyCommentContext } from "./mainComment";

function ReplyComment(props) {
    // handling comment
    // context
    let { replyMainComment, setReplyMainComment } = useContext(replyCommentContext);
    let [comment, changeComment] = useState( `@${props.replyUserName} `);
    const changeCommentFunction = (event) => {
        changeComment(event.target.value);
    };
    // submitting/posting comment
    const postComment = () => {
        console.log(`the commwnt was ${comment}`);
        setReplyMainComment(replyMainComment = [...replyMainComment, comment]);
        console.log(replyMainComment);
    };
    return (
        <div className={replyComment.comment} style={{ display: props.show }}>
            <div>
                <img src={you} alt='you' />
                <textarea
                    placeholder='Add a comment...'
                    className={replyComment.inputComment}
                    onChange={changeCommentFunction}
                    value={comment}
                />
                <button className='btn btn-primary' onClick={postComment}>
                    send
                </button>
            </div>
            {/* for mobile */}
            <div className={replyComment.showOnMobile}>
                <img src={you} alt='you' />
                <button className='btn btn-primary' onClick={postComment}>
                    send
                </button>
            </div>
        </div>
    );
}

export default ReplyComment;
