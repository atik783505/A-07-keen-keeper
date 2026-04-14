import React, { useContext } from 'react';
import { FiArchive } from 'react-icons/fi';
import { MdOutlineDelete, MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { TbPhoneCall } from 'react-icons/tb';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../../Context/FriendContext/FriendProvider';


const FriendDetails = () => {
    const { id } = useParams()
    console.log('id is', id)
    const friends = useLoaderData()
    console.log(friends)

    const expectedFriend = friends.find(friend => friend.id === parseInt(id))
    console.log(expectedFriend)
    const handleCall = useContext(FriendContext)

    return (
        <div className='bg-[#F8FAFC]'>
            <div className='flex justify-between container items-center mx-auto py-15'>
                <div>

                    <div className='text-center space-y-1 flex flex-col mb-6 items-center w-[350px] bg-white p-2 rounded-lg'>
                        <img className='w-[90px] h-[90px] rounded-full' src={expectedFriend.picture} alt="" />
                        <h2>{expectedFriend.name}</h2>
                        <p className={`badge rounded-full p-3 text-[12px] text-white ${expectedFriend.status === "overdue" ? 'bg-red-600' : expectedFriend.status === "on-track" ? 'bg-[#244D3F]' : 'bg-[#EFAD44]'}`}>{expectedFriend.status}</p>
                        <div className='flex gap-2'>
                            {
                                expectedFriend.tags.map(tag => <span className='text-[12px] badge bg-green-300 text-green-700'>{tag}</span>)
                            }
                        </div>
                        <p className='text-[#64748B]'>"{expectedFriend.bio}"</p>
                        <p className='text-[#64748B]'>Preferred: {expectedFriend.email}</p>

                    </div>
                    <div className='space-y-3'>
                        <button className='bg-white py-[20px] btn text-center rounded-lg border border-gray-300 w-full'><RiNotificationSnoozeLine size='20px' /> Snooze 2 weeks</button>
                        <button className='bg-white py-[20px] btn text-center rounded-lg border border-gray-300 w-full'><FiArchive /> Archive</button>
                        <button className='bg-white py-[20px] btn text-center rounded-lg border border-gray-300 w-full text-red-500'><MdOutlineDelete size='20px' /> Delete</button>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-3 gap-10'>
                        <div className='text-center bg-white rounded-lg p-3'>
                            <h2 className='text-[#244D3F] text-[30px] font-semibold'>{expectedFriend.days_since_contact}</h2>
                            <p className='text-[#64748B] text=[18px]'>Days Since Contact</p>
                        </div>
                        <div className='text-center bg-white rounded-lg p-3'>
                            <h2 className='text-[#244D3F] text-[30px] font-semibold'>{expectedFriend.goal}</h2>
                            <p className='text-[#64748B] text=[18px]'>Goal (Days)</p>
                        </div>
                        <div className='text-center bg-white rounded-lg p-3'>
                            <h2 className='text-[#244D3F] text-[30px] font-semibold whitespace-nowrap'>{expectedFriend.next_due_date}</h2>
                            <p className='text-[#64748B] text=[18px]'>Next Due</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg my-6 p-2'>
                        <p className='flex justify-between items-center'><span className='20px'>Relationship Goal</span> <span className='btn text-[14px]'>Edit</span></p>
                        <h2><span className='text-[#64748B]'>Connect every</span> <span className='font font-semibold !text-[#1F2937]'>{expectedFriend.goal} Days</span></h2>
                    </div>
                    <div className='bg-white rounded-lg p-3'>
                        <h2 className='text-[#244D3F] mb-4'>Quick Check-In</h2>
                        <div className='grid grid-cols-3 gap-3'>
                            <button onClick={() => handleCall(expectedFriend)} className='flex flex-col gap-1 items-center btn h-auto py-2'>
                                <TbPhoneCall className='text-[24px]'></TbPhoneCall>
                                <span>Call</span>
                            </button>
                            <button onClick={() => handleCall(expectedFriend)} className='flex flex-col gap-1 items-center btn h-auto py-2'>
                                <MdOutlineTextsms className='text-[24px]'></MdOutlineTextsms>

                                <span>Text</span>
                            </button>
                            <button onClick={() => handleCall(expectedFriend)} className='flex flex-col gap-1 items-center btn h-auto py-2'>
                                <MdOutlineVideocam className='text-[24px]'></MdOutlineVideocam>
                                <span>Vedio</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;