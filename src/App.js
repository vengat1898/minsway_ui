import React from 'react'
import Header from './feature/header/Header'
import Capabilities from './feature/Capabilities/Capabilities'
import ImgSlider from './feature/imgSlider/ImgSlider'
import ProjectClient from './feature/pro_clieant/ProjectClient'
import Industry from './feature/industry/Industry'
import WebApplication from './feature/webApplication/WebApplication'
import WorkFlow from './feature/workflow/WorkFlow'
import Certification from './feature/certifiction/Certification'
import Details from './feature/Details/Details'
 

const App = () => {
  return (
    <main>
      <Header />
      <Capabilities />
      <ImgSlider />
      <ProjectClient />
      < Industry/>
      <WebApplication />
      <WorkFlow />
      <Certification />
      <Details />
      
    </main>
  )
}

export default App










