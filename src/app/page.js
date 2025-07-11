import React from 'react'
import HeroSection from './home/heroSection/heroSection'  
import Header from '@/components/header'  
import Welcome from './home/introduction/welcome'
import IntroductionPage from './home/portFolio/introduction'
import AboutMePage from './home/aboutMe/aboutMe'
import EducationPage from './home/education/education'
import WorkExpPage from './home/workExp/workexp'
import ProjectPortfolioPage from './home/projectSection/projectsec'
import ProjectPortfolioPage2 from './home/projectSection2/projectsec2'
import ContactPage from './home/contactUs/contactus'
import Lastpage from './home/thanksPage/lastpage'  
 
const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Welcome />
      <IntroductionPage />
      <AboutMePage /> 
      <EducationPage />
      <WorkExpPage />
      <ProjectPortfolioPage />
      <ProjectPortfolioPage2 />
      <ContactPage />
      <Lastpage />
    </div>
  )
}

export default page;