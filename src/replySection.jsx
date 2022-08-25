import { Children } from "react";
import replySection from "./replySection.module.scss";

function ReplySection(props) {
    return (
        <div className={replySection.container}>
            {/* vertical line */}
            <div className={replySection.verticalRule}></div>
            {/* your comment */}
            <div className={replySection.comments}>{props.children}</div>
        </div>
    );
}

export default ReplySection;
