import React from 'react'
import { FunctionComponent } from "react"
import { GroceryItem } from './GroceryItem'
import GroceryItemView from './GroceryItemView'

type Props = {
    items: GroceryItem[]
    onItemClicked?: (item: GroceryItem) => void
}

const GroceryItemsBox: FunctionComponent<Props> = ({items, onItemClicked}) => {
    return (
        <div style={{background: 'lightgray', border: 'solid 1px blue', display: 'flex'}}>
            {
                items.map((item, i) => (
                    <GroceryItemView key={i} item={item} onClick={onItemClicked} />
                ))
            }
        </div>
    )
}

export default GroceryItemsBox