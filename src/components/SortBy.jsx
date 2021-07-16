import {useEffect, useState} from 'react';
import { getReviewsBySortBy } from '../utils/api';


const SortBy = ({reviews}) => {
    console.log(reviews)
    const [filterReviews,setFilterReview] = useState([]);
    console.log(filterReviews)

    const handleChange=(event)=>{
        setFilterReview({value:event.target.value})
    }
    const handleSubmit=(event)=>{
         event.preventDefault();
     }

    useEffect(()=>{
        getReviewsBySortBy(filterReviews).then((sortedReviewsFromApi)=>{
           console.log(sortedReviewsFromApi);
           setFilterReview(sortedReviewsFromApi)
        })

    },[filterReviews])


    return (
        <div>
             <form onSubmit={handleSubmit}>
                 <label>
                     filter
                 <select onChange={handleChange}>
                    <option value="owner">owner</option>
                    <option value="title">title</option>
                    <option value="created_at">created_at</option>
                    <option value="votes">votes</option>
                 </select>  
                 </label>
                 <input type="submit" value="submit" />
             </form>

             <ul>
                 {
                     reviews.map((review)=>{
                         if()
                         return(
                             <li></li>
                         )
                     })

                 }
             </ul>
                
                
            
            
        </div>
    );
};

export default SortBy;

