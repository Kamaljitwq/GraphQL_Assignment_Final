import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'

import { Form, Input, Button } from 'antd'

import { v4 as uuidv4 } from 'uuid'

import { ADD_CAR, GET_CARS } from '../../queries'

const CarForm = () => {
const [id] = useState(uuidv4())
const [form] = Form.useForm()
const [ ,forceUpdate] = useState()
const [addCar] = useMutation(ADD_CAR)

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = values => {
    const { year, make, model, price, personId } = values
 console.log(typeof(year));
    addCar({
      variables: {
        id,
        year, 
        make, 
        model, 
        price, 
        personId
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addCar: {
          __typename: 'Car',
          id,
          year, 
          make, 
          model, 
          price, 
          personId
        }
      },
      update: (cache, { data: { addCar } }) => {
        const data = cache.readQuery({ query: GET_CARS })
        console.log(data)
        cache.writeQuery({
          query: GET_CARS,
          data: {
            ...data,
            cars: [...data.cars, addCar]
          }
        })
      }
    })
  }

  return (
    <Form
      form={form}
      name='add-car-form'
      layout='inline'
      onFinish={onFinish}
      size='large'
      style={{ marginBottom: '40px' }}
    >
      <Form.Item
        name='year'
        rules={[{ required: true, message: 'Please input year! ' }]}
      >
        <Input placeholder='i.e. 1999' />
      </Form.Item>
      <Form.Item
        name='make'
        rules={[{ required: true, message: 'Please input car make! ' }]}
      >
        <Input placeholder='i.e. Volvo' />
      </Form.Item>

      <Form.Item
        name='model'
        rules={[{ required: true, message: 'Please input car model! ' }]}
      >
        <Input placeholder='i.e. XYVO4' />
      </Form.Item>

      <Form.Item
        name='price'
        rules={[{ required: true, message: 'Please input car price! ' }]}
      >
        <Input placeholder='i.e. 99999999' />
      </Form.Item>


{/* Dropdown can come here********************* */}
      <Form.Item
        name='personId'
        rules={[{ required: true, message: 'Please input personId! ' }]}
      >
        <Input placeholder='i.e. 1' />
      </Form.Item>
{/* ******************************************** */}

      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add Car
          </Button>
        )}
      </Form.Item>
      
    </Form>
  )
}

export default CarForm
