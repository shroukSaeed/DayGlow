import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'

export default function MenuePagination(props) {


  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          props.setCurrCategory(props.value);
        }}
      >
        {props.name}
      </Button>
    </div>
  )
}
