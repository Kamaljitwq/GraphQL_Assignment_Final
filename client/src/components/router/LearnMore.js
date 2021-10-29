import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


function LearnMore() {
    const location = useLocation()
    const { id } = location.state

    return (
        <div>

            <Link to ="/">Back to Home Page
            </Link>

            {id}
           
            

            
        </div>
    );
}

export default LearnMore;