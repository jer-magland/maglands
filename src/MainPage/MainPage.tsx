import { Button } from '@material-ui/core'
import React, { useCallback } from 'react'
import { FunctionComponent } from "react"
import { useHistory, useLocation } from 'react-router'

type Props = {
    
}

const MainPage: FunctionComponent<Props> = () => {
    const location = useLocation()
    const history = useHistory()
    const handleGroceries = useCallback(() => {
        const l = {...location, pathname: '/groceries'}
        history.push(l)
    }, [history, location])
    return (
        <div>
            <Button onClick={handleGroceries}>Groceries</Button>
            <Button>Photos</Button>
        </div>
    )
}

export default MainPage