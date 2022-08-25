import { createContext, useState } from "react";
import NewComment from "./newComment";
import MainComment from "./mainComment";
import YourMainComment from "./yourMainComment";
import avatar1 from "./images/avatars/image-amyrobson.png";
import maxBlagun from "./images/avatars/image-maxblagun.png";
import RepliedMainComment from "./repliedMainComment";
import ramsesMiron from "./images/avatars/image-ramsesmiron.png";

export const Context = createContext();
function ContextProvider() {
    let [yourComment, postYourComment] = useState([]);
    return (
        <Context.Provider value={{ yourComment, postYourComment }}>
            {/* first comment */}
            <MainComment
                image={avatar1}
                score={12}
                time='1 month ago'
                userName='amyrobson'
                comment="Impressive! Though it seems the drag feature could be
                    improved. But overall it looks incredible. You've nailed the
                    design and the responsiveness at various breakpoints works
                    really well."
            />
            <MainComment
                image={maxBlagun}
                score={5}
                time='2 weeks ago'
                userName='maxblagun'
                comment="Woah, your project looks awesome! How long have you been coding for? 
            I'm still new, but think I want to dive into React as well soon. 
            Perhaps you can give me an insight on where I can learn React? Thanks!"
                // replies
                children={
                    <>
                        <RepliedMainComment
                            comment=" @maxbalgun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and 
                JS before considering React.
                 It's very tempting to jump ahead but lay a solid foundation first."
                            image={ramsesMiron}
                            score={5}
                            time='1 week ago'
                            userName='ramsesmiron'
                        />
                        <YourMainComment
                            comment="I couldn't agree more with this. 
                        Everything moves so fast and it always seems like everyone knows the newest library/framework.
                         But the fundamentals are what stay constant."
                        />
                    </>
                }
            />
            <YourMainComment comment='Hello world' />
            {/* automatically render replies */}
            {yourComment.map((value, index) => {
                return <YourMainComment key={index} comment={value}/>;
            })}
            {/* create new comment */}
            <NewComment />
        </Context.Provider>
    );
}
export default ContextProvider;
