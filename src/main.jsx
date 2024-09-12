import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import MyFunctions from './functions/MyFunctions.jsx'
import MyPromises from './functions/MyPromises.jsx'
import MyPromisesAll from './functions/MyPromisesAll.jsx'
import MyPromisesRace from './functions/MyPromisesRace.jsx'
import MyFetchsAPIs from './functions/MyFetchs.jsx'
import MyFetchPost from './functions/MyFetchPost.jsx'
import MyFetchPut from './functions/MyFetchPut.jsx'
import MyFetchBlob from './functions/MyFetchBlob.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFetchBlob />
  </StrictMode>,
)
