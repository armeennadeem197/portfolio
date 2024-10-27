import React from 'react'
import Hero from "@/app/hero/page"
import About from "@/app/about/page"
import Skill from "@/app/skill/page"
import Contact from "@/app/contact/page"
const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Contact/>
    </div>
  )
}

export default page