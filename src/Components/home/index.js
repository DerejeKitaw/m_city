import React from 'react'
import Featured from './featured'
import MatchHome from './matches'
import MeetPlayers from './meetPlayers'

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <MatchHome />
      <MeetPlayers />
    </div>
  )
}

export default Home
