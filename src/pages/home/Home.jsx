import React from 'react'
import HomeBuilding from './homeSection/HomeBuilding'
import WorkSection from './homeSection/WorkSection'
import HomeView from './homeSection/HomeView'
import HomeDesign from './homeSection/HomeDesign'
import HomeAbout from './homeSection/HomeAbout'
import HomeFaq from './homeSection/HomeFaq'


const Home = () => {
  
  return (
    <>
    {/* // building section start*/}
      <HomeBuilding/>
    {/* // building section end*/}

    {/* // work section start*/}
      <WorkSection/>
    {/* // work section end*/}

    {/* // view section start*/}
      <HomeView/>
    {/* // view section end*/}

    {/* // design section start*/}
      <HomeDesign/>
    {/* // design section end*/}

    {/* // about section start*/}
      <HomeAbout/>
    {/* // about section end*/}

    {/* // Faq section start*/}
      <HomeFaq/>
    {/* // Faq section end*/}

    {/* // building section start*/}
    {/* // building section end*/}
    </>
    
  )
}

export default Home