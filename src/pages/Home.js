import React, { useState } from 'react'
import {Box} from '@mui/material'

import HeroBanner from '../components/HeroBanner' //textbeside of the banner 
import SearchExercises from '../components/SearchExercises'//it will shoe the searchbar
import Exercises from '../components/Exercises' //it will show the exercise SearchExercisesection
const Home = () => {

  const [bodyPart, setBodyPart] = useState('all')
  const [exercises , setExercises] =useState([]);

  console.log(bodyPart)

  return (
    <Box>
        <HeroBanner /> 
        <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
         setBodyPart={setBodyPart}   /> 
       
        <Exercises 
         exercises={exercises} 
        setExercises={setExercises}
        bodyPart={bodyPart}
        /> 
    </Box>
  )
}

export default Home