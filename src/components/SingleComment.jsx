import {useState,useContext} from 'react';
import { patchComment } from '../utils/api';
import {UserContext} from '../contexts/User';

const SingleComment = ({singleComment,comment_id}) => {
    const [vote,setVote] = useState(0)
    const [messageCommentVote,setCommentVote]=useState("")

    const {user} =useContext(UserContext);
   console.log(user.username)

    const incVotes = ()=>{
        if(user.username !== "who"){
            setVote((currVote)=>{
                return currVote +1
            })
            const newVote = {inc_votes: 1}
    
            patchComment(comment_id,newVote)
            setCommentVote(`thanks! ${user.username}`)
        }else {
            setCommentVote("You need to log in first!")

        }
            
        
    }   


    return (
        <div>
        <p>Vote :{singleComment.votes + vote}</p>
        <button disabled={vote > 1} onClick={incVotes}>I like it</button>
        {vote > 1? <p>You can vote only one time.thanks!</p> : null}
        <p>{messageCommentVote}</p>
        </div>
    );
};

export default SingleComment;