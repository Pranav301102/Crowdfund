import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getUserCampaigns,getCoupounsByOwner } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) {
      fetchCampaigns();
    }
  }, [address, contract]);

  return (
    <div>
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
    <DisplayCoupons />
    </div>
  )
}

const DisplayCoupons = () => {
  const [load, setLoad] = useState(false);
  const [coupouns, setCoupouns] = useState([]);

  const { address, contract, getUserCampaigns,getCoupounsByOwner } = useStateContext();


  const fetchCoupouns = async () => {
    const data = await getCoupounsByOwner();
    setCoupouns(data);
  }

  useEffect(() => {
    if(contract){
      setLoad(true);
      fetchCoupouns();
      console.log("here",coupouns)
      setLoad(false);
    }
  }, [load,contract,address]);
  
  if(coupouns.length === 0){
    return <h1>no coupouns</h1>
  }
  else{
    return (
      <div>
        <h1 className='text-white'>Your Coupons</h1>
        {coupouns.map((coupoun) => <CouponCard coupoun={coupoun} key={coupoun.pId}/>)}
      </div>
    )
    }
  }

 const CouponCard = ({coupoun}) => {
    return (
        <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[#4acd8d] text-[18px] font-bold">{coupoun.name}</div>
                    <div className="text-[#3a3a43] text-[14px] font-medium">{coupoun.description}</div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[#3a3a43] text-[14px] font-medium">Coupon ID: {coupoun.id.toNumber()}</div>
                </div>
            </div>
        </div>
    )
}


export default Profile