import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import DarkVeil from './ui/DarkVeil'

export default function Footer() {
  return (
    <div className='flex flex-col max-h-[] justify-center md:h-[50vh] h-[80vh] items-center border-t border-[#AE00FF] rounded-t-[50px] relative overflow-hidden px-2'>
        <DarkVeil className='w-full h-full' />
        <div className='w-full flex flex-col absolute top-0 left-0'>
            <div className='w-full flex justify-center px-10 py-20'>
                <Image className='w-full md:w-1/4' src={'/zynex-text.svg'} alt='logo-text' width={100} height={100} />
            </div>
            <div className='flex flex-col md:flex-row w-full justify-around orbitron-400 px-10 gap-5'>
                <div className='flex flex-col justify-start items-start gap-1 md:gap-5'>
                    <Link href={'/'}>Privacy Policy</Link>
                    <Link href={'/'}>Terms & Conditions</Link>
                </div>
                <div className='flex flex-col justify-start md:items-center  gap-1 md:gap-5'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Projects</Link>
                    <Link href={'/'}>Contact</Link>
                </div>
                <div className='flex flex-col justify-start md:items-end gap-1 md:gap-5'>
                    <Link href={'/'} mailto='info@zynexdev.com'>info@zynexdev.com</Link>
                    <Link href={'/'} tel='+94783458889'>+94 78 345 8889</Link>
                </div>
            </div>
            <div className='w-full flex justify-center px-10 text-xs md:text-sm py-10 opacity-50'>Designed & Developed by ZYNEX DEVELOPMENTS | Copyrights Reserved | 2025</div>
        </div>
    </div>
  )
}
