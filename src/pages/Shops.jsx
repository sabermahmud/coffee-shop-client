import React from 'react';
import { CiHeadphones } from 'react-icons/ci';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { GrMapLocation } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';

const Shops = () => {

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const bookingDetails = Object.fromEntries(formData);

        console.log(bookingDetails);



    }

    return (
        <div className=' bg-[#6E3C19]/50'>
            <div className='container mx-auto px-5 py-10'>
                <div className='mb-4 flex flex-col gap-2'>
                    <h2 className='text-5xl text-[#F5F1ED] font-extrabold text-center '>Find US</h2>
                    <p className='text-base text-[#CFC6BD] text-center'>visit our shops to get better experience</p>
                </div>
                {/* contact info */}
                <div className='flex flex-col lg:flex-row justify-between w-full mx-auto gap-5 mb-5'>
                    <div className='bg-[#230F08] p-5 rounded-2xl w-full text-center flex flex-col justify-center items-center'>
                        <p className='text-5xl'><FaClockRotateLeft /></p>
                        <p className='text-2xl font-extrabold text-orange-900 mt-2'>
                            24 /7 Open
                        </p>
                    </div>
                    <div className='bg-[#230F08] p-5 rounded-2xl w-full text-center flex flex-col justify-center items-center'>
                        <p className='text-5xl'><CiHeadphones /></p>
                        <h3 className='text-xl text-orange-900'>
                            Contact
                        </h3>
                        <p>
                            +966 55 555 5555
                        </p>
                    </div>
                    <div className='bg-[#230F08] p-5 rounded-2xl w-full text-center flex flex-col justify-center items-center'>
                        <p className='text-5xl'><MdOutlineEmail /></p>
                        <h3 className='text-xl text-orange-900'>
                            Email
                        </h3>
                        <p>
                            coffeeeveryware@gmail.com
                        </p>
                    </div>
                    <div className='bg-[#230F08] p-5 rounded-2xl w-full text-center flex flex-col justify-center items-center'>
                        <p className='text-5xl'><GrMapLocation /></p>
                        <h3 className='text-xl text-orange-900'>
                            Location
                        </h3>
                        <p>
                            Souq, Al Hanakiyah, Medina, Saudia Arabia
                        </p>
                    </div>
                </div>
                {/* map and booking form */}
                <div className=' flex flex-col lg:flex-row justify-between gap-5 w-full'>
                    {/* google map */}
                    <div className='w-full lg:w-4/3 rounded-2xl'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.866665302715!2d40.493760779431106!3d24.868403108192982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15979b60e5fbfaa3%3A0x2ebec0e6b8c29401!2sBLACK%20COFFEE!5e0!3m2!1sen!2sbd!4v1766998688160!5m2!1sen!2sbd" 
                        className='w-full h-full border-2 rounded-2xl'
                        allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    {/* booking form */}
                    <div className='w-full p-5 bg-[#E1D4C2]/20 backdrop-blur-lg rounded-2xl'>
                        <h3 className='text-center text-3xl font-semibold text-[#291C0E]'>Book A Table</h3>
                        <form onSubmit={handleBooking} className='flex flex-col'>
                            <input type="email" className='text-gray-800 bg-gray-50 my-5 block text-center w-full p-2' name='email' placeholder='Enter Your Email' />
                            <input type="number" className='text-gray-800 bg-gray-50 my-5 block text-center w-full p-2' name='phoneNumber' placeholder='Enter Your Mobile Number' />
                            <input type="number" className='text-gray-800 bg-gray-50 my-5 block text-center w-full p-2' name='numberOfSits' placeholder='Enter the number of sits you want' />
                            <input type="date" className='text-gray-800 bg-gray-50 my-5 block text-center w-full p-2' name='date' placeholder='select the date' />
                            <input type="time" className='text-gray-800 bg-gray-50 my-5 block text-center w-full p-2' name='time' placeholder='select the time' />
                            <textarea type="text" className='text-gray-800 bg-gray-50 my-5 block text-center w-full p-2' name='occasion' placeholder='describe your occasion' />
                            <button className='btn bg-[#6F4E37] w-full' type='submit'>Book Now</button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shops;
