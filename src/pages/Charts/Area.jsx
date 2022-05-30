import React from 'react'
import { SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, ChartComponent, AreaSeries, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'
import { Headers } from '../../components'

const Area = () => {

    const { currentMode } = useStateContext()

    return (
        <div>
            <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
                <Headers category="Area" title="Inflation Rate in Percentage" />
            </div>
            <ChartComponent
                id='area-chart'
                height='420px'
                primaryXAxis={areaPrimaryXAxis}
                primaryYAxis={areaPrimaryYAxis}
                chartArea={{
                    border: {
                        width: 0
                    }
                }}
                tooltip={{
                    enable: true
                }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                legendSettings={{ background: 'white' }}
            >
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Area