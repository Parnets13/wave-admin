import React from 'react'
import avatar from './../assets/avatar-16.jpg';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import aadhar from './../assets/aadhar.pdf';
import pan from './../assets/pan.pdf';
import img1 from './../assets/provider-19.jpg';
import img2 from './../assets/provider-23.jpg';
import img3 from './../assets/service-48.png';
import img4 from './../assets/service-47.png';
import img5 from './../assets/service-49.png';
import { Button } from './ui/button';




const AppliedProviderDetails = () => {
    return (
        <div className='px-[1vw] my-5'>
            <h1 className='text-2xl my-3 font-medium'>Provider Verification ID - 1234567890</h1>
            <div className='flex flex-col space-y-2 '>
                <img src={avatar} alt="" className='rounded-full w-40  mx-auto lg:mx-0' />
                <fieldset className='border border-gray-300 rounded-md p-3 w-full lg:w-[60%]'>
                    <legend className='font-'>Personal Information</legend>
                    <div className='flex gap-3'>
                        <label htmlFor="" className='w-16'>Name:</label>
                        <h1 className='font-medium'>John Doe</h1>
                    </div>
                    <div className='flex gap-3'>
                        <label htmlFor="" className='w-16'>Email:</label>
                        <h1 className='font-medium'>JohnDoe@gmail.com</h1>
                    </div>
                    <div className='flex gap-3'>
                        <label htmlFor="" className='w-16'>Phone :</label>
                        <h1 className='font-medium'>1234567890</h1>
                    </div>
                    <div className='flex gap-3'>
                        <label htmlFor="" className='w-16'>Address:</label>
                        <h1 className='font-medium'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</h1>
                    </div>
                    <div className='flex gap-3'>
                        <label htmlFor="" className='w-16'>Pan No:</label>
                        <h1 className='font-medium'>PAN123456</h1>
                    </div>
                    <div className='flex gap-3'>
                        <label htmlFor="" className='w-16'>Aadhaar</label>
                        <h1 className='font-medium'>123456789012</h1>
                    </div>
                </fieldset>

                <fieldset className='border border-gray-300 rounded-md p-3 w-full lg:w-[60%] flex flex-wrap'>
                    <legend>Uploaded Documents</legend>
                    <div className='flex gap-3 lg:w-1/2 w-full'>
                        <label htmlFor="" className='w-16'>Aadhaar:</label>
                        <Dialog>
                            <DialogTrigger className='font-medium'>View</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Aadhar Card</DialogTitle>
                                    <DialogDescription>
                                        <iframe src={aadhar} width="100%" height="400px"> This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/your/pdf-file.pdf">Download PDF</a>. </iframe>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                    </div>
                    <div className='flex gap-3 lg:w-1/2 w-full'>
                        <label htmlFor="" className='lg:w-9 w-16'>PAN:</label>
                        <Dialog>
                            <DialogTrigger className='font-medium'>View</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Aadhar Card</DialogTitle>
                                    <DialogDescription>
                                        <iframe src={pan} width="100%" height="500px"> This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/your/pdf-file.pdf">Download PDF</a>. </iframe>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className='flex gap-3 lg:w-1/2 w-full'>
                        <label htmlFor="" className='w-16'>License:</label>
                        <Dialog>
                            <DialogTrigger className='font-medium'>View</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Aadhar Card</DialogTitle>
                                    <DialogDescription>
                                        <iframe src={pan} width="100%" height="500px"> This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/your/pdf-file.pdf">Download PDF</a>. </iframe>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className='flex gap-3 lg:w-1/2 w-full'>
                        <label htmlFor="" className='lg:w-9 w-16'>video:</label>
                        <Dialog>
                            <DialogTrigger className='font-medium'>View</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Aadhar Card</DialogTitle>
                                    <DialogDescription>
                                        <iframe src={aadhar} width="100%" height="500px"> This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/your/pdf-file.pdf">Download PDF</a>. </iframe>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className='flex gap-3 lg:w-1/2 w-full'>
                        <label htmlFor="" >Images from Previous Work:</label>
                        <Dialog>
                            <DialogTrigger className='font-medium'>View</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Aadhar Card</DialogTitle>
                                    <DialogDescription>
                                        <div className='flex flex-wrap gap-3 my-3'>
                                            <img src={img1} alt="" className='w-32 rounded-md' />
                                            <img src={img2} alt="" className='w-32 rounded-md' />
                                            <img src={img3} alt="" className='w-32 rounded-md' />
                                            <img src={img4} alt="" className='w-32 rounded-md' />
                                            <img src={img5} alt="" className='w-32 rounded-md' />
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </fieldset>

                <fieldset className='border border-gray-300 rounded-md p-3 w-full lg:w-[60%] space-y-2'>
                    <legend>Action</legend>
                    <div className='flex gap-3'>
                        <label htmlFor="" className='w-24 truncate'>Intial Status:</label>
                        <h1 className='font-medium'>Verify Pending</h1>
                    </div>
                    <div className='flex gap-3'>
                        <label htmlFor="" className='w-24 truncate'>Final Status:</label>
                        <Dialog>
                            <DialogTrigger>
                                <Button className='gradient'>Change Status</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Change Status</DialogTitle>
                                    <DialogDescription>
                                        <div className='flex gap-3 item-center my-3'>
                                            <label htmlFor="" className='w-24 truncate'>Final Status:</label>
                                            <select name="" id="" className='border border-gray-300 py-1 rounded-sm w-60'>
                                                <option value="" key="">Select Option</option>
                                                <option value="verified" key="">Verified</option>
                                                <option value="rejected" key="">Rejected</option>
                                            </select>
                                        </div>
                                        <div className='flex gap-3'>
                                            <label htmlFor="" className='w-24 truncate'>Remarks</label>
                                            <textarea cols="30" rows="3"  className='border border-gray-300 py-1 rounded-sm w-60'></textarea>
                                        </div>
                                       <div className='flex justify-center items-center my-5'> <Button className='px-10'>Save</Button></div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default AppliedProviderDetails