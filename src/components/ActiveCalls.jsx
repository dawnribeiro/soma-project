import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ActiveCalls() {
  const [calls, setCalls] = useState({})

  useEffect(() => {
    axios
      .get('https://dev.somahub.io/api/1/calls', {
        headers: {
          Authorization: 'Basic am9zaEBzb21hZ2xvYmFsLmNvbTpwYXNzd29yZA==',
          'Content-Type': 'application/json',
        },
      })
      .then(resp => {
        setCalls(resp.data)
        console.log(resp.data)
      })
  })
  return <p>HELLO</p>
}
