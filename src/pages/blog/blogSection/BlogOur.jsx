import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from '../../../components/Image'
import Peragraph from '../../../components/peragraph/Peragraph'
import Button from '../../../components/button/Button'
import BlogImg1 from '../../../assets/images/blog/blog1.png'
import BlogImg2 from '../../../assets/images/blog/blog2.png'
import BlogImg3 from '../../../assets/images/blog/blog3.png'
import BlogImg4 from '../../../assets/images/blog/blog4.png'
import BlogImg5 from '../../../assets/images/blog/blog5.png'
import BlogImg6 from '../../../assets/images/blog/blog6.png'

const BlogOur = () => {
    let heading6 ="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
    let pera1 = "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
  return (
    <div>
        <div className="w-container my-0 mx-auto">
            <div className="head mb-16">
                <h2 className='heading2 text-center mx-auto'>Our blog</h2>
            </div>
            <div className="main_items flex flex-wrap gap-[32px] items-center justify-between">
                <div className="item_box w-[405px] h-auto">
                    <div className="img w-full h-72  mb-10 overflow-hidden bg-green-700">
                        <Image source={BlogImg1} alt='not found' className='h-full w-full object-cover bg-no-repeat'/>
                    </div>
                    <div className="content flex flex-col gap-5">
                        <Peragraph className='label2' text='19 Jan 2022'/>
                        <h6 className='heading6 w-full'>{heading6}</h6>
                        <Peragraph className='pera' text={pera1}/>
                        <div>
                            <Button className='Label1 text-black flex items-center justify-center gap-5 capitalize' text='read more' Children={<FaArrowRightLong />}/>
                        </div>
                    </div>
                </div>
                <div className="item_box w-[405px] h-auto">
                    <div className="img w-full h-72  mb-10 overflow-hidden bg-green-700">
                        <Image source={BlogImg2} alt='not found' className='h-full w-full object-cover bg-no-repeat'/>
                    </div>
                    <div className="content flex flex-col gap-5">
                        <Peragraph className='label2' text='19 Jan 2022'/>
                        <h6 className='heading6 w-full'>{heading6}</h6>
                        <Peragraph className='pera' text={pera1}/>
                        <div>
                            <Button className='Label1 text-black flex items-center justify-center gap-5 capitalize' text='read more' Children={<FaArrowRightLong />}/>
                        </div>
                    </div>
                </div>
                <div className="item_box w-[405px] h-auto">
                    <div className="img w-full h-72  mb-10 overflow-hidden bg-green-700">
                        <Image source={BlogImg3} alt='not found' className='h-full w-full object-cover bg-no-repeat'/>
                    </div>
                    <div className="content flex flex-col gap-5">
                        <Peragraph className='label2' text='19 Jan 2022'/>
                        <h6 className='heading6 w-full'>{heading6}</h6>
                        <Peragraph className='pera' text={pera1}/>
                        <div>
                            <Button className='Label1 text-black flex items-center justify-center gap-5 capitalize' text='read more' Children={<FaArrowRightLong />}/>
                        </div>
                    </div>
                </div>
                <div className="item_box w-[405px] h-auto">
                    <div className="img w-full h-72  mb-10 overflow-hidden bg-green-700">
                        <Image source={BlogImg4} alt='not found' className='h-full w-full object-cover bg-no-repeat'/>
                    </div>
                    <div className="content flex flex-col gap-5">
                        <Peragraph className='label2' text='19 Jan 2022'/>
                        <h6 className='heading6 w-full'>{heading6}</h6>
                        <Peragraph className='pera' text={pera1}/>
                        <div>
                            <Button className='Label1 text-black flex items-center justify-center gap-5 capitalize' text='read more' Children={<FaArrowRightLong />}/>
                        </div>
                    </div>
                </div>
                <div className="item_box w-[405px] h-auto">
                    <div className="img w-full h-72  mb-10 overflow-hidden bg-green-700">
                        <Image source={BlogImg5} alt='not found' className='h-full w-full object-cover bg-no-repeat'/>
                    </div>
                    <div className="content flex flex-col gap-5">
                        <Peragraph className='label2' text='19 Jan 2022'/>
                        <h6 className='heading6 w-full'>{heading6}</h6>
                        <Peragraph className='pera' text={pera1}/>
                        <div>
                            <Button className='Label1 text-black flex items-center justify-center gap-5 capitalize' text='read more' Children={<FaArrowRightLong />}/>
                        </div>
                    </div>
                </div>
                <div className="item_box w-[405px] h-auto">
                    <div className="img w-full h-72  mb-10 overflow-hidden bg-green-700">
                        <Image source={BlogImg6} alt='not found' className='h-full w-full object-cover bg-no-repeat'/>
                    </div>
                    <div className="content flex flex-col gap-5">
                        <Peragraph className='label2' text='19 Jan 2022'/>
                        <h6 className='heading6 w-full'>{heading6}</h6>
                        <Peragraph className='pera' text={pera1}/>
                        <div>
                            <Button className='Label1 text-black flex items-center justify-center gap-5 capitalize' text='read more' Children={<FaArrowRightLong />}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogOur