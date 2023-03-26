// component that displays all the coupons that the user has using wallet address

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useStateContext } from '../context';
import { Loader } from '../components';
import { thirdweb } from '../assets';

const DisplayCoupoun = () => {

    const { contract, address ,getCoupounById, getUserCoupouns} = useStateContext();
    const [isLoading, setIsLoading] = useState(false);
    const [coupons, setCoupons] = useState([]);
    const [couponsdata, setCouponData] = useState([]);
    const [data , setData] = useState([]);
    const navigate = useNavigate();
    
    // const fetchCoupons = async () => {
    //     const allCampaigns = await getCampaigns();
    //     allCampaigns.map(async (campaign) => {
    //         const data = await getDonations(campaign.pId);
    //         console.log("in",campaign.pId)
    //         data.map((donator) => {
    //              if(donator.donator === address) {
    //                 console.log("out",campaign.pId)
    //                 setCoupons([...coupons, {campaign, donator}])
    //              }
    //         }
    //         )
    // }
    // )
    // }
    const fetchCoupons = async () => {
        try{
        setIsLoading(true);
        const data = await getUserCoupouns();
        setCoupons(data);
        setIsLoading(false);
        }
        catch(err){
            console.log(err);
        }

    }

    const getCoupoun= async () => {
        setIsLoading(true);
        for (let i = 0; i < coupons.length; i++) {
            const coupon = await getCoupounById(coupons[i].aId.toNumber());
            setCouponData((prevState)=>[...prevState, coupon]);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if(coupons.length > 0) {
            getCoupoun();  
        }
    },[coupons])

    useEffect(() => {
        try{
          console.log(couponsdata)  
    }
        catch(err){
            console.log(err);
        }
    },[couponsdata])

    
    useEffect(() => {
        if(contract) {
            fetchCoupons();
        }
    }, [contract, address])

    useEffect(() => {
        console.log("here",coupons)
    }, [coupons])
    
    
    return (
        <div>
        {isLoading && <Loader />}
        <div className="flex flex-col gap-[20px]">
            {coupons.map((coupon) => <CouponCard coupon={coupon} key={coupon.pId} data={couponsdata}/> ) }
        </div>
        </div>
    )
}

// card to display the coupon
 const CouponCard = ( {coupon ,data} ) => {
    //console.log(coupon,couponsdata[coupon.pId].name,couponsdata[coupon.pId].description)
    // console.log("here",coupon ,data[coupon.pId])
    try{
    const {name , description} = data[coupon.pId];
    return (
        <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[#4acd8d] text-[18px] font-bold">{name}</div>
                    <div className="text-[#3a3a43] text-[14px] font-medium">{description}</div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[#3a3a43] text-[14px] font-medium">Coupon Code</div>
                    <div className="text-[#3a3a43] text-[14px] font-medium">{coupon.code}</div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#3a3a43] text-[14px] font-medium">ID:</div>
                <div className="text-[#3a3a43] text-[14px] font-medium">{coupon.aId.toNumber()}</div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#3a3a43] text-[14px] font-medium">Your Address:</div>
                <div className="text-[#3a3a43] text-[14px] font-medium">{coupon.owner}</div>
            </div>
        </div>
    )
    }
    catch(err){
        return(
            <h1>Loading</h1>
        )
    }
    
}


export default DisplayCoupoun



