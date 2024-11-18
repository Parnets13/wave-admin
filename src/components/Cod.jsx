import React from 'react'
import { Button } from './ui/button'
import { CirclePlus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import cleaning from './../assets/cleaning.png';
import plumbing from './../assets/plumber.png';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination"

const Cod = () => {
  return (
    <div className='px-[1vw] my-5'>
      <div className='flex lg:justify-between lg:items-center flex-col lg:flex-row '>
        <h1 className='text-2xl'>Cash On Delivery</h1>
        <div className='flex lg:gap-4 items-center gap-2 my-3 lg:my-0'>
          <Input placeholder='Search'></Input>
        </div>
      </div>
      <Separator className='my-4' />
      <div className='overflow-x-auto lg:max-w-[1000px] max-w-[380px] md:max-w-[580px] lg:h-[65vh] h-[58vh] md:h-[70vh]'>
        <Table >
          <TableHeader>
            <TableRow>
              <TableHead className='truncate'>Sl No.</TableHead>
              <TableHead className='truncate'>Customer Name</TableHead>
              <TableHead className='truncate'>Service Provider</TableHead>
              <TableHead className="truncate">Service Booked</TableHead>
              <TableHead className='truncate'>Booked on</TableHead>
              <TableHead className='truncate'>Phone No</TableHead>
              <TableHead className='truncate'>Address</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className='truncate'>Payment mode</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
              <TableHead className='truncate'>Cash Received By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1.</TableCell>
              <TableCell className="font-medium">John Doe</TableCell>
              <TableCell>J Doe</TableCell>
              <TableCell className='truncate'>Home Cleaning</TableCell>
              <TableCell className='truncate'>14-11-2024</TableCell>
              <TableCell>1234567890</TableCell>
              <TableCell>Bengaluru</TableCell>
              <TableCell className='truncate'>Rs 399/-</TableCell>
              <TableCell>COD</TableCell>
              <TableCell className='truncate  '><span className='text-blue-700 bg-blue-200 p-1 rounded-sm px-3'>Pending</span></TableCell>
              <TableCell className='truncate'>
                <select name="" id="" className='border border-gray-300 rounded-sm p-1'>
                  <option value="" key="">Select action</option>
                  <option value="pending" key="">Pending</option>
                  <option value="completed" key="">Completed</option>
                  <option value="Cancelled" key="">Cancelled</option>
                </select>
              </TableCell>
              <TableCell>-NA-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2.</TableCell>
              <TableCell className="font-medium">John Doe</TableCell>
              <TableCell>J Doe</TableCell>
              <TableCell className='truncate'>Home Cleaning</TableCell>
              <TableCell className='truncate'>14-11-2024</TableCell>
              <TableCell>1234567890</TableCell>
              <TableCell>Bengaluru</TableCell>
              <TableCell className='truncate'>Rs 399/-</TableCell>
              <TableCell>COD</TableCell>
              <TableCell className='truncate  '><span className='text-green-700 bg-green-200 p-1 rounded-sm px-3'>Completed</span></TableCell>
              <TableCell className='truncate'>
                <select name="" id="" className='border border-gray-300 rounded-sm p-1'>
                  <option value="" key="">Select action</option>
                  <option value="pending" key="">Pending</option>
                  <option value="completed" key="">Completed</option>
                  <option value="Cancelled" key="">Cancelled</option>
                </select>
              </TableCell>
              <TableCell>J Doe</TableCell>
            </TableRow>
            <TableRow>
            <TableCell>3.</TableCell>
              <TableCell className="font-medium">John Doe</TableCell>
              <TableCell>J Doe</TableCell>
              <TableCell className='truncate'>Home Cleaning</TableCell>
              <TableCell className='truncate'>14-11-2024</TableCell>
              <TableCell>1234567890</TableCell>
              <TableCell>Bengaluru</TableCell>
              <TableCell className='truncate'>Rs 399/-</TableCell>
              <TableCell>COD</TableCell>
              <TableCell className='truncate  '><span className='text-red-700 bg-red-200 p-1 rounded-sm px-3'>Cancelled</span></TableCell>
              <TableCell className='truncate'>
                <select name="" id="" className='border border-gray-300 rounded-sm p-1'>
                  <option value="" key="">Select action</option>
                  <option value="pending" key="">Pending</option>
                  <option value="completed" key="">Completed</option>
                  <option value="Cancelled" key="">Cancelled</option>
                </select>
              </TableCell>
              <TableCell>-NA-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className='bg-black rounded-md text-white'>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" >2</PaginationLink>
            </PaginationItem>
            <PaginationItem className="hidden lg:block">
              <PaginationLink href="#" >3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

    </div>
  )
}

export default Cod