import React from 'react'
import Link from 'next/link'
import  Layout from '../Components/Layout/Layout';
import { WorkoutGrid } from '../Components/Workouts/WorkoutGrid'

const workouts = () => {
  return (
    <Layout>
       <div>
        <p> Workouts </p>
        <WorkoutGrid/>
       </div>
    </Layout>
  )
}

export default workouts; 