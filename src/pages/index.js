import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProfileImg from "../images/profile.png"

// <a className="pr-4 no-underline hover:underline" href="https://www.backstage.com/u/jonathan-kingsley/">Backstage</a>

const ProfileCard = () => (
   <div className="p-10 max-w-m mx-auto bg-white rounded-lg shadow-md flex items-center space-x-4">
    <div className="flex flex-col"> 
      <div className="pb-4">
      <img className="block mx-auto h-80 rounded sm:mx-0 sm:flex-shrink-0" src={ProfileImg} alt="Jonathan's Face"></img>
      <div className="text-center space-y-2 sm:text-left pt-8 pb-4 text-2xl">
        <div className="space-y-0.5">
          <p className="text-4xl text-black font-semibold">
            Jon Kingsley
          </p>
          <p className="text-gray-500 font-medium">
            Software Engineer
          </p>
        </div>
      </div>

      <div className="space-y-0.5 font-medium text-lg">
        <p>
        Jon Kingsley <span className="italic">FRSA</span> is a software engineer and actor from Manchester, UK.
        </p>

        <p data-ty=""><span role="img" aria-label="Briefcase">💼</span> Currently works at <a className="underline font-semibold" href="https://mirrorweb.com">MirrorWeb</a></p>
        <p data-ty=""><span role="img" aria-label="Globe">🌎</span> Been to 15 different countries</p>
        <p data-ty=""><span role="img" aria-label="Ticket">🎟</span> Runs a <a className="underline font-semibold" href="https://hack.productions">live production company</a> for hackathons and tech conferences</p>
        <p data-ty=""><span role="img" aria-label="Rabbit">🐰</span> Is a proud bunny dad</p>
      </div>
    </div>

    <div className="flex flex-row font-bold text-2xl">
      <a className="pr-4 no-underline hover:underline" href="https://twitter.com/jfkingsley">Twitter</a>
      <a className="pr-4 no-underline hover:underline" href="https://twitch.tv/jfkingsley">Twitch</a>
      <a className="pr-4 no-underline hover:underline" href="https://github.com/jfkingsley">GitHub</a>
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
