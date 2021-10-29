import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import InnerCard from '../../cardDesign/InnerCard'
// import Contact from '../listItems/Contact';



function LearnMore() {
    const location = useLocation()
    const { id } = location.state

    return (
        <div>

            <Link to ="/">Back to Home Page
            </Link>
           {/* <Contact /> */}
           Person ID: {id}
           <InnerCard id={id} />
 
            

            
        </div>
    );
}

export default LearnMore;