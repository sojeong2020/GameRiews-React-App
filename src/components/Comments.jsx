import {useState, useEffect} from 'react';
import { getCommentsByReview} from '../utils/api';
import { useParams } from 'react-router-dom';
import Delete from './Delete';
import SingleComment from './SingleComment';
import {Link} from 'react-router-dom';



const Comments = () => {
    const [comments,setComments] = useState([])
    const {review_id} =useParams();

    useEffect(()=>{
        getCommentsByReview(review_id).then((commentsFromAPi)=>{
            console.log(commentsFromAPi)
            setComments(commentsFromAPi)
        })
    },[review_id]) 



    return (
        <main>
            <h2>{comments.length === 0? "no comments": "comments"}</h2>
        {console.log(review_id)}
            
            <ul className="Comments_list">
                {comments.map((comment,idx)=>{
                    return (
                        
                        <li key={idx}>
                            <p>Author : {comment.author}</p>
                            <p>{comment.created_at}</p>
                            <p>{comment.body}</p>
                            {/* <p>Vote :{comment.votes + vote}</p> */}
                        <SingleComment singleComment={comment}
                                       comment_id={comment.comment_id}/>

                        <Delete  commentId={comment.comment_id}
                                     commentAuthor={comment.author}
                                     setComments={setComments}
                                     comments={comments}
                        />
                        </li>
                    )
                    
                })}
            </ul>
            <Link to={`/reviews/${review_id}`}>
            <p>previous page</p>

            </Link>
            
        </main>
    );
};

export default Comments;