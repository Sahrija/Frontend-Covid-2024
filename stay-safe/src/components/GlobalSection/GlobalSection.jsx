import React, { useContext } from 'react';
import Section from '../shared/Section/Section';
import DataCard from '../DataCard/DataCard';
import { GlobalDataContext } from '../../context/GlobalDataContext';

const GlobalSection = () => {
    const data = useContext(GlobalDataContext)

    return (
        <Section title={'Global Situation'} subtitle={'Situation by global'} className='bg-slate-100'>
            <div className='flex sm:flex-row flex-col flex-wrap gap-8 m-auto'>
                {
                    data?.global.map((record, index) =>
                        <DataCard
                            key={index}
                            record={record}
                            index={index}
                        />
                    )
                }
            </div>
        </Section >
    )
}

export default GlobalSection
