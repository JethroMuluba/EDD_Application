import React from 'react'
import TopExpensiveTimelineElements from './TopExpensiveTimelineElements';
import TableExpensiveTimeline from './TableExpensiveTimeline';

function ExpensiveTimeLine() {
  return (
<div className='w-2/3  shadow-md rounded-[10px] p-[24px]'>
    <TopExpensiveTimelineElements/>
    <TableExpensiveTimeline/>
</div>
  )
}

export default ExpensiveTimeLine;