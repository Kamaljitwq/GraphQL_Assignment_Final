import React from 'react'
import { Card } from 'antd'
// import { EditOutlined } from '@ant-design/icons'

// import RemoveContact from '../components/buttons/RemoveContact'
// import UpdateContact from '../components/forms/UpdateContact'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const Contact = props => {
    const { id, firstName, lastName } = props
  const styles = getStyles()
  
  return (
      <Card style= {styles.card}>
         {firstName}{lastName}
         {/* Kamaljit  */}
         
      </Card>
  )
}
    
export default Contact
