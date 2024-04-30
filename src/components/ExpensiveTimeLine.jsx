import React from 'react'
import TopExpensiveTimelineElements from './TopExpensiveTimelineElements';
import TableExpensiveTimeline from './TableExpensiveTimeline';

function ExpensiveTimeLine() {
  return (
<div className= 'flex flex-col w-full md:w-2/3  mx-auto shadow-md rounded-lg p-6'>
    <TopExpensiveTimelineElements/>
    <TableExpensiveTimeline/>
</div>
  )
}

export default ExpensiveTimeLine;