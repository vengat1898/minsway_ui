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
import Channelparter from './feature/channelPartner/Channelparter'
import Readyapp from './feature/readyapp/Readyapp'
import Footer from './feature/footer/Footer'
import Ourclients from './feature/ourClients/Ourclients'
import Clientsays from './feature/clientsays/Clientsays'

 

const App = () => {
  return (
    <main>
      <Header />
      {/* <Capabilities /> */}
      <ImgSlider />
      <ProjectClient />
      < Industry/>
      <WebApplication />
      <WorkFlow />
      <Certification />
      <Details />
      <Channelparter />
      <Readyapp />
      <Ourclients />
      <Clientsays />
      <Footer />
      
      
    </main>
  )
}

export default App










