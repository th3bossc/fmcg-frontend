"use client";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import Notification from '@/components/Notification';
import Route from '@/components/Route';
import Comment from '@/components/Comment';
import Link from '@/components/Link';
import { distributorCommentData, retailerCommentData, linkData, teamData } from '@/dummyData';
import Team from '@/components/Team';
import dayjs from 'dayjs';
import { useAuthContext } from '@/AuthContext';
import { Product, User } from '@/types';
import { useEffect, useState } from 'react';
import { getAcceptedOrders } from '@/lib/retailer';
import OrderStatus from '@/components/OrderStatus';

export default function Home() {
  const { user, routes, notifications, jwt } = useAuthContext();
  const [acceptedOrders, setAcceptedOrders] = useState<{
    id: string,
    product: Product,
    retailer: User,
    accepted: boolean,
    expectedDeliveryTime: Date,
  }[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const orders = await getAcceptedOrders(jwt);
      setAcceptedOrders(orders || []);
    }

    user?.role === 'RETAILER' && fetchData();

  }, [user?.role, jwt])



  return (
    <main className="grid grid-cols-3 grid-rows-6 p-4 w-full h-screen gap-2">
      <div className="rounded-sm row-start-1 row-span-1 col-start-1 col-span-3 w-full flex items-center justify-between p-4">
        <div className="flex flex-col gap-2 w-full">
          <span className="text-4xl font-bold">Welcome, {user?.name}!</span>
          <span> Here is your inventory overview </span>
        </div>
        <input type="text" placeholder="Search products" className="w-full bg-transparent border border-neutral-200 px-4 py-2 rounded-lg" />
      </div>
      <div className="rounded-sm row-start-2 row-span-2 col-start-1 col-span-1 bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker defaultValue={dayjs(new Date())} />
        </LocalizationProvider>
      </div>
      <div className="rounded-sm row-start-2 row-span-2 col-start-2 col-span-2 bg-neutral-900 hover:bg-neutral-800 p-4 flex flex-col">
        <h2 className='font-semibold text-lg'>Notifications</h2>
        <div className='divide-y flex flex-col gap-2 mt-2 h-full overflow-y-scroll overflow-x-hidden'>
          {
            notifications.map((notification, index) => (
              <Notification key={index} {...notification} />
            ))
          }
        </div>
      </div>
      <div className="rounded-sm row-start-4 row-span-3 col-start-1 col-span-1 bg-neutral-900 hover:bg-neutral-800 p-4 flex flex-col">
        <div className='w-full flex items-center justify-between'>
          <h2 className='font-semibold text-lg'>{user?.role === "DISTRIBUTOR" ? "Routes" : "Accepted orders"}</h2>
          {/* <button className="hover:underline"> View all </button> */}
        </div>
        <div className='flex flex-col gap-2 mt-2 h-full overflow-y-scroll overflow-x-hidden'>
          {
            user?.role === "DISTRIBUTOR"
              ? routes.map((route, index) => (
                <Route key={index} {...route} />
              ))
              : acceptedOrders.map((order, index) => (
                <OrderStatus
                  key={index}
                  product={order.product}
                  deliveryDate={order.expectedDeliveryTime.toString().slice(0, 10)}
                />
              ))
          }
        </div>
      </div>
      <div className="rounded-sm row-start-4 row-span-2 col-start-2 col-span-1 bg-neutral-900 hover:bg-neutral-800 p-4 flex flex-col">
        <h2 className='font-semibold text-lg'>Comments</h2>
        <div className='flex flex-col gap-2 p-2 mt-2 h-full overflow-y-scroll overflow-x-hidden'>
          {
            user?.role === 'DISTRIBUTOR'
              ? distributorCommentData.map((comment, index) => (
                <Comment key={index} {...comment} />
              ))
              : retailerCommentData.map((comment, index) => (
                <Comment key={index} {...comment} />
              ))
          }
        </div>
      </div>
      <div className="rounded-sm row-start-6 row-span-1 col-start-2 col-span-1 bg-neutral-900 hover:bg-neutral-800 p-4 flex items-center justify-center gap-2">
        {
          linkData.map((link, index) => (
            <Link key={index} title={link.title} />
          ))
        }
      </div>
      <div className="rounded-sm row-start-4 row-span-3 col-start-3 col-span-1 h-full overflow-hidden bg-neutral-900 hover:bg-neutral-800 p-4 flex flex-col">
        <h2 className="font-semibold text-lg"> Team Directory </h2>
        <div className='grid grid-cols-2 grid-rows-2 gap-2 mt-2 h-full'>
          {
            teamData.map((team, index) => (
              <Team key={index} {...team} />
            ))
          }
        </div>
      </div>
    </main>
  );
}
