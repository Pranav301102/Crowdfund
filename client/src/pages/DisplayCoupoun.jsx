// component that displays all the coupons that the user has using wallet address

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useStateContext } from '../context';
import { Loader } from '../components';
import { thirdweb } from '../assets';

const DisplayCoupoun = () => {

    const { contract, address ,getCampaigns,getDonations} = useStateContext();
    const [isLoading, setIsLoading] = useState(false);
    const [coupons, setCoupons] = useState([]);
    const navigate = useNavigate();
    
    const fetchCoupons = async () => {
        const allCampaigns = await getCampaigns();
        allCampaigns.map(async (campaign) => {
            const data = await getDonations(campaign.pId);
            console.log("in",campaign.pId)
            data.map((donator) => {
                 if(donator.donator === address) {
                    console.log("out",campaign.pId)
                    setCoupons([...coupons, {campaign, donator}])
                 }
            }
            )
    }
    )
    }
    
    useEffect(() => {
        if(contract) fetchCoupons();
    }, [contract, address])

    useEffect(() => {
        console.log(coupons)
    }, [coupons])
    
    
    return (
        <div>
        {isLoading && <Loader />}
        <div className="flex flex-col gap-[20px]">
            {coupons.map((coupon) => <CouponCard campaign={coupon.campaign} donator={coupon.donator} />)}
        </div>
        </div>
    )
}

// card to display the coupon
const CouponCard = ({ campaign, donator }) => {
    return (
        <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[#4acd8d] text-[18px] font-bold">{campaign.title}</div>
                    <div className="text-[#3a3a43] text-[14px] font-medium">{campaign.description}</div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[#3a3a43] text-[14px] font-medium">Coupon Code</div>
                    <div className="text-[#3a3a43] text-[14px] font-medium">{campaign.coupoun1}</div>
                    <div className="text-[#3a3a43] text-[14px] font-medium">CODE: HSHGKS</div>
                    <div className="text-[#3a3a43] text-[14px] font-medium">{campaign.coupoun2}</div>
                    <div className="text-[#3a3a43] text-[14px] font-medium">CODE: HSHGKS</div>
                    <div className="text-[#3a3a43] text-[14px] font-medium">{campaign.coupoun3}</div>
                    <div className="text-[#3a3a43] text-[14px] font-medium">CODE: HSHGKS</div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#3a3a43] text-[14px] font-medium">Your Donation:</div>
                <div className="text-[#3a3a43] text-[14px] font-medium">{donator.donation}</div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#3a3a43] text-[14px] font-medium">Your Address:</div>
                <div className="text-[#3a3a43] text-[14px] font-medium">{donator.donator}</div>
            </div>
        </div>
    )
}


export default DisplayCoupoun



