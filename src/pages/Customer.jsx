import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Headers } from '../components'

const Customer = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Headers title="Customers" category="Page" />
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={['Delete']}
                editSettings={{
                    allowDeleting: true,
                    allowAdding: true,
                    allowEditing: true
                }}
                width="auto"
            //editSettings={editing}

            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div>
    )
}

export default Customer