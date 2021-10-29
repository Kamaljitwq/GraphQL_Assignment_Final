import { Card } from 'antd';
import { Link } from 'react-router-dom';
const InnerCard = (props) =>(
  <Card>
    <Card type="inner" title="Person" extra={<Link to = {{
      pathname : "/LearnMore", state : {id:props.id}
    }}>More</Link>}>
      {props.firstName} {props.lastName}
  
    </Card>
    {/* <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Cars Owned"
       >
      {props.year} {props.make} {props.model} {props.price} {props.personId}
    </Card> */}

  </Card>

)


export default InnerCard;
