import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile,Dashboard } from './pages';
import CreateCoupon from './pages/CreateCoupon';
import DisplayCoupoun from './pages/DisplayCoupoun';
import { Gradient } from './components/Gradient';
import { useLayoutEffect } from 'react';
import './index.css'

const App = () => {
  useLayoutEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
  }, [])
  return (
    <div className="relative sm:-8 p-4  min-h-screen flex flex-row">
      <canvas id="gradient-canvas" className="absolute top-0 left-0 w-full h-full z-[-1]" />
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/coupon" element={<DisplayCoupoun/>}/>
          <Route path="/create-coupon" element={<CreateCoupon />}/>
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App