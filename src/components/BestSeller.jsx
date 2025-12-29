import React from 'react';
import { LuCroissant } from 'react-icons/lu';

const BestSeller = () => {
    return (
        <div className='my-10 p-5 border-r-2 border-l-2 border-amber-200 shadow-lg shadow-amber-50/10'>
            <h3 className='text-4xl font-bold text-center bg-amber-950/50 p-5'>Our Best Selling Product</h3>
            <div className='flex justify-center gap-10 items-center my-5'>
                {/* product list */}
                <div className='col-span-1 flex flex-col gap-10 lg:gap-20'>
                    <div className='flex gap-5 flex-row-reverse items-center'>
                        <div className='text-5xl text-amber-600'><LuCroissant /></div>
                        <div>
                            <h1 className='text-xl font-semibold text-amber-500 text-right'>CROISSANT</h1>
                            <p className='text-amber-100 text-right'>Delicious and flaky croissant</p>
                        </div>
                    </div>
                    <div className='flex gap-5 flex-row-reverse items-center'>
                        <div className='text-5xl text-amber-600'><LuCroissant /></div>
                        <div>
                            <h1 className='text-xl font-semibold text-amber-500 text-right'>CROISSANT</h1>
                            <p className='text-amber-100 text-right'>Delicious and flaky croissant</p>
                        </div>
                    </div>
                    <div className='flex gap-5 flex-row-reverse items-center'>
                        <div className='text-5xl text-amber-600'><LuCroissant /></div>
                        <div>
                            <h1 className='text-xl font-semibold text-amber-500 text-right'>CROISSANT</h1>
                            <p className='text-amber-100 text-right'>Delicious and flaky croissant</p>
                        </div>
                    </div>
                    <div className='flex gap-5 flex-row-reverse items-center'>
                        <div className='text-5xl text-amber-600'><LuCroissant /></div>
                        <div>
                            <h1 className='text-xl font-semibold text-amber-500 text-right'>CROISSANT</h1>
                            <p className='text-amber-100 text-right'>Delicious and flaky croissant</p>
                        </div>
                    </div>
                </div>
                {/* product image */}
                <div className='col-span-1'><img src="../../src/assets/imgs/cooffee-today.png" alt="" /></div>
                {/* product list-2 */}
                <div className='col-span-1 flex flex-col gap-10 lg:gap-20'>
                    <div className='flex gap-5 items-center'>
                        <div className='text-5xl text-amber-600'><LuCroissant /></div>
                        <div>
                            <h1 className='text-xl font-semibold text-amber-500 text-left'>CROISSANT</h1>
                            <p className='text-amber-100 text-left'>Delicious and flaky croissant</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='text-5xl text-amber-600'><LuCroissant /></div>
                        <div>
                            <h1 className='text-xl font-semibold text-amber-500 text-left'>CROISSANT</h1>
                            <p className='text-amber-100 text-left'>Delicious and flaky croissant</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='text-5xl text-amber-600'><LuCroissant /></div>
                        <div>
                            <h1 className='text-xl font-semibold text-amber-500 text-left'>CROISSANT</h1>
                            <p className='text-amber-100 text-left'>Delicious and flaky croissant</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='text-5xl text-amber-600'><LuCroissant /></div>
                        <div>
                            <h1 className='text-xl font-semibold text-amber-500 text-left'>CROISSANT</h1>
                            <p className='text-amber-100 text-left'>Delicious and flaky croissant</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BestSeller;