import React, { useCallback } from 'react'
import { FunctionComponent } from "react"
import { GroceryItem } from './GroceryItem'

type Props = {
    item: GroceryItem
    onClick?: (item: GroceryItem) => void
}

const GroceryItemView: FunctionComponent<Props> = ({item, onClick}) => {
    const handleClick = useCallback(() => {
        onClick && onClick(item)
    }, [onClick, item])
    return <div onClick={handleClick} style={{padding: 10}} title={item.name}><img alt={item.name} src={item.iconUrl} height={60} /></div>
}

export default GroceryItemView