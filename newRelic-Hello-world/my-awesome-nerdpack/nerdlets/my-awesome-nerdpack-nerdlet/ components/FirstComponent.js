import React, { useEffect, useState } from 'react'
import { HeadingText, BarChart, AccountsQuery, Spinner } from 'nr1'

function FirstComponent (props) {
  console.log(props)
  return (
    <div>
      {props
        ? <HeadingText type={HeadingText.TYPE.HEADING_2}>Welcome to: {props.account.name}</HeadingText>
        : <Spinner inline />}

      <BarChart
        accountId={2856539}
        query='SELECT count(*) FROM `Synthetics` SINCE 1 DAY AGO TIMESERIES AUTO FACET jobType'
      />;
    </div>
  )
}

export default FirstComponent
