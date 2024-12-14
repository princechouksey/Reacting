import React from 'react'
import Card from './Components/Card'

const App = () => {
npm
  const users = [
    {
      "name": "Amit Kumar",
      "skills": ["Java", "Python", "SQL"],
      "age": 28,
      "city": "Mumbai",
      "job_description": "Develops and maintains scalable web applications and database systems.",
      "image": "https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "isAvailable":true
    },
    {
      "name": "Priya Sharma",
      "skills": ["AIML ", "Developer ", "Python"],
      "age": 32,
      "city": "Bangalore",
      "job_description": "Analyzes data trends and implements machine learning models for insights.",
      "image": "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "isAvailable":true
    },
    {
      "name": "Ravi Singh",
      "skills": ["Analyst", "Agile", "Scrum"],
      "age": 35,
      "city": "Delhi",
      "job_description": "Leads teams to deliver projects efficiently using Agile methodology.",
      "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "isAvailable":false
    },
    {
      "name": "Neha Reddy",
      "skills": ["Marketing", "SEO", "Analytics"],
      "age": 27,
      "city": "Hyderabad",
      "job_description": "Designs marketing strategies and analyzes SEO and social media trends.",
      "image": "https://images.unsplash.com/photo-1609436132311-e4b0c9370469?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "isAvailable":false
    },
    {
      "name": "Vikram Patel",
      "skills": ["Finance", "Accounting", "Reporting"],
      "age": 40,
      "city": "Chennai",
      "job_description": "Manages financial reporting, risk analysis, and accounting operations.",
      "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "isAvailable":true
    }
  ]
  
  return (
    <div className=' w-screen h-screen flex  flex-wrap items-center justify-center  gap-5 p-10 '>
     
    {users.map(function(elem, index){
      return <Card  key ={index}   user = {elem} />
    })} 

    </div>
  )
}

export default App
