import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const ProfileCard = () => (
   <div className="p-96 max-w-m mx-auto bg-white rounded-lg shadow-md flex items-center space-x-4">
   <Image className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" alt="Jon Kingsley" filename="profile.png" />
    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/images/profile.png" alt="Woman's Face"></img>
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">
          Erin Lindford
        </p>
        <p className="text-gray-500 font-medium">
          Product Engineer
        </p>
      </div>
    </div>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-screen h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 flex items-center justify-center h-screen">
        <ProfileCard/>
    </div>

  </Layout>
)

export default IndexPage
