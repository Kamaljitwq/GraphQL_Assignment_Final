import { gql } from 'apollo-server-express'
import { find, remove } from 'lodash'

const contacts = [
  {
    id: '1',
    firstName: 'Kamaljit',
    lastName: 'Kaur'
  },
  {
    id: '2',
    firstName: 'Manjinder',
    lastName: 'Singh'
  },
  {
    id: '3',
    firstName: 'Onkarpreet',
    lastName: 'Singh'
  }
]

const cars = [
  {
    id: '1',
    year: '2019',
    make: 'Toyota',
    model: 'Corolla',
    price: '40000',
    personId: '1'
  },
  {
    id: '2',
    year: '2018',
    make: 'Lexus',
    model: 'LX 600',
    price: '13000',
    personId: '1'
  },
  {
    id: '3',
    year: '2017',
    make: 'Honda',
    model: 'Civic',
    price: '20000',
    personId: '1'
  },
  {
    id: '4',
    year: '2019',
    make: 'Acura ',
    model: 'MDX',
    price: '60000',
    personId: '2'
  },
  {
    id: '5',
    year: '2018',
    make: 'Ford',
    model: 'Focus',
    price: '35000',
    personId: '2'
  },
  {
    id: '6',
    year: '2017',
    make: 'Honda',
    model: 'Pilot',
    price: '45000',
    personId: '2'
  },
  {
    id: '7',
    year: '2019',
    make: 'Volkswagen',
    model: 'Golf',
    price: '40000',
    personId: '3'
  },
  {
    id: '8',
    year: '2018',
    make: 'Kia',
    model: 'Sorento',
    price: '45000',
    personId: '3'
  },
  {
    id: '9',
    year: '2017',
    make: 'Volvo',
    model: 'XC40',
    price: '55000',
    personId: '3'
  }
]


const typeDefs = gql`
  type Contact {
    id: String!
    firstName: String
    lastName: String
  }

  type Car {
    id: String!
    year: Int
    make: String
    model: String
    price: Float
    personId: String
  }

  type Query {
    contact(id: String!): Contact
    contacts: [Contact]
  }

  type Query {
    car(id: String!): Car
    cars: [Car]
  }

  type Mutation {
    addContact(id: String!, firstName: String!, lastName: String!): Contact
    updateContact(id: String!, firstName: String!, lastName: String!): Contact
    removeContact(id: String!): Contact
  }
  type Mutation {
    addCar(id: String!, year: Int!, make: String!, model: String!, price: Float!, personId: String!): Car
    updateCar(id: String!, year: Int!, make: String!, model: String!, price: Float!, personId: String!): Car
    removeCar(id: String!): Car
   }
`

const resolvers = {
    Query: {
    contact(parent, args, contact, info){
    return find(contacts, {id: args.id })},

    car(parent, args, car, info){
      return find(cars, { personId: args.id })
      },

     
        contacts: () => contacts,
        cars: () => cars
      },



      Mutation: {
        addContact: ( root, args) => {
          const newContact = {
            id: args.id,
            firstName: args.firstName,
            lastName: args.lastName
          }

          contacts.push(newContact)
          return newContact
    },

addCar: ( root, args) => {
      const newCar = {

  id: args.id,
  year: args.year,
  make: args.make,
  model: args.model,
  price: args.price,
  personId: args.personId
      }

      cars.push(newCar)
      return newCar
},


    




    updateContact: (root, args) => {
      const contact = find(contacts, { id: args.id })
      if (!contact) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }

      contact.firstName = args.firstName
      contact.lastName = args.lastName

      return contact
      
    },

    updateCar: (root, args) => {
      const car = find(cars, { id: args.id })
      if (!car) {
        throw new Error(`Couldn't find car with id ${args.id}`)
      }


  car.year = args.year,
  car.make = args.make,
  car.model = args.model,
  car.price - args.price,
  car.personId = args.personId

      return car
      
    },


    removeContact: (root, args) => {
      const removedContact = find(contacts, { id: args.id })
      if (!removedContact) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }

      remove(contacts, c => {
        return c.id === removedContact.id
      })

      return removedContact
  },

  removeCar: (root, args) => {
    const removedCar = find(cars, { id: args.id })
    if (!removedCar) {
      throw new Error(`Couldn't find car with id ${args.id}`)
    }

    remove(cars, cr => {
      return cr.id === removedCar.id
    })

    return removedCar
}


}
}


    export { typeDefs, resolvers }