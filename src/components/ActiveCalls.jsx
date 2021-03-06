import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'

export default function ActiveCalls() {
  const [calls, setCalls] = useState([])
  const [callTypes, setCallTypes] = useState([])

  useEffect(() => {
    axios
      .get('/api/1/calls', {
        headers: {
          Authorization: 'Basic am9zaEBzb21hZ2xvYmFsLmNvbTpwYXNzd29yZA==',
          'Content-Type': 'application/json',
        },
      })
      .then(resp => {
        setCalls(resp.data)
        console.log('calls', resp.data)
      })
    axios.get('/api/1/callTypes').then(resp => {
      setCallTypes(resp.data)
      console.log('call types', resp.data)
    })
  }, [])

  return (
    <section>
      <div>
        <ul className="list">
          {calls.map(call => {
            {
              let myCallType = callTypes.filter(
                types => types.Key === call.CallType
              )
              let callTypeResult = myCallType[0]
              return (
                <li key={call.Id} className="card">
                  <div className="first">
                    <p className="title">
                      {callTypeResult ? callTypeResult.Name : 'Unknown'}
                    </p>

                    <p className="address">
                      {call.Location.AddNum} {call.Location.StPreDir}{' '}
                      {call.Location.StName} {call.Location.StType}{' '}
                      {call.Location.StDir}, {call.Location.City},{' '}
                      {call.Location.Region}, {call.Location.Postal}
                    </p>
                  </div>
                  <div className="bottom-group">
                    <div className="second">
                      <p>{call.Status}</p>
                      <Moment fromNow>{call.CreatedAt}</Moment>
                    </div>
                    <div className="third">
                      <p>#{call.CallNumber.slice(-4)}</p>
                      <p>Priority: {call.Priority}</p>
                    </div>
                  </div>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </section>
  )
}
