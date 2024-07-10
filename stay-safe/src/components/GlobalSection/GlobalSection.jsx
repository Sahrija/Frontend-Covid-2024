import React from 'react';
import Section from '../shared/Section/Section';
import DataCard from '../DataCard/DataCard';

const GlobalSection = ({ data }) => {
    return (
        <Section title={'Global Situation'} subtitle={'Situation by global'}>
            <div className='flex sm:flex-row flex-col flex-wrap gap-8 m-auto'>
                {
                    data.global &&

                    data.global.map((record, index) =>
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
