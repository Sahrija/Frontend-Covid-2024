import React from 'react'
import Section from '../shared/Section/Section'
import { formatThousand } from '../../utils/utils'
import RegionBarChart from './RegionBarChart'

const RegionSection = ({ data }) => {
    return (
        <Section
            title={'Region Situation'}
            subtitle={'Situation by Region'}
        >
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    data.regions?.map(region =>
                        <div className='p-4 space-y-2 bg-white rounded-lg shadow-md md:p-8'>
                            <h3 className='text-2xl font-bold text-center text-slate-600'>
                                {region.name}
                            </h3>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-lg font-medium text-slate-500'>Confirmed</p>
                                    <p className='text-2xl font-bold text-green-500'>
                                        {formatThousand(region.numbers.confirmed)}
                                    </p>
                                </div>
                                <div className='max-w-8'>
                                    <img className='' src="/icons/mask.svg" alt="" />
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-lg font-medium text-slate-500'>Recovered</p>
                                    <p className='text-2xl font-bold text-sky-500'>
                                        {formatThousand(region.numbers.recovered)}
                                    </p>
                                </div>
                                <div className='max-w-8'>
                                    <img className='' src="/icons/smile.svg" alt="" />
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-lg font-medium text-slate-500'>Deaths</p>
                                    <p className='text-2xl font-bold text-red-500'>
                                        {formatThousand(region.numbers.death)}
                                    </p>
                                </div>
                                <div className='max-w-8'>
                                    <img className='' src="/icons/skull.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className='relative max-w-screen-sm m-auto mt-8 overflow-x-auto sm:max-w-screen-md '>
                <p className='text-center text-emerald-500'>Chart</p>
                <div className='min-w-[500px] h-96'>
                    <RegionBarChart regionsData={data.regions}></RegionBarChart>
                </div>
            </div>
        </Section >
    )
}

export default RegionSection
