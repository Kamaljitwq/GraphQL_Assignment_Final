import React from 'react';
import CarForm from '../forms/CarForm';
import Cars from '../lists/Cars'
import PeopleForm from '../forms/PeopleForm';
import Title from '../layout/Title'
import Contacts from '../lists/Contacts'

function Home() {
    return (
        <div>
      <Title />
      <PeopleForm />
      <CarForm />
      <Contacts />
      <Cars />
            
        </div>
    );
}

export default Home;