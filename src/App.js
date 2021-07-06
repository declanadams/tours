import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const tourLength = tours.length;

  const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
  }

  const fetchTours = async () => {
      try{
        const res = await fetch(url);
        const toursData = await res.json();
        setLoading(false);
        setTours(toursData);
      }catch(e){
          setLoading(false);
          console.log(e.message);
      }
  }

  useEffect(() => {
    fetchTours();
  }, [])
  return (
    loading  === true ? <Loading/> : <Tours tours={tours} removeTour={removeTour}/>
  )
}

export default App
