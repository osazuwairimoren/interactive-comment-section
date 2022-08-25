import newComment from "./newComment.module.scss";
import you from "./images/avatars/image-juliusomo.png";
import { useContext, useState } from "react";
import { Context } from "./context";
import YourMainComment from "./yourMainComment";

function NewComment() {
    // handling comment
    let [comment, changeComment] = useState("");
    let { yourComment, postYourComment } = useContext(Context);
    const changeCommentFunction = (event) => {
        changeComment(event.target.value);
    };
    // submitting/posting comment
    const postComment = () => {
        console.log(`the comment was ${comment}`);
        postYourComment((yourComment = [...yourComment, comment]));
        console.log(yourComment);
    };
    return (
        <div className={newComment.comment}>
            <div>
                <img src={you} alt='you' />
                <textarea
                    placeholder='Add a comment...'
                    className={newComment.inputComment}
                    onChange={changeCommentFunction}
                    value={comment}
                />
                <button className='btn btn-primary' onClick={postComment}>
                    send
                </button>
            </div>
            {/* for mobile */}
            <div className={newComment.showOnMobile}>
                <img src={you} alt='you' />
                <button className='btn btn-primary' onClick={postComment}>
                    send
                </button>
            </div>
        </div>
    );
}
export default NewComment;
