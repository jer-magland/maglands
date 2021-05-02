import React, { useCallback, useReducer } from 'react'
import { FunctionComponent } from "react"
import { GroceryItem } from './GroceryItem'
import GroceryItemsBox from './GroceryItemsBox'

type Props = {
    
}

type AddGroceryItem = {
    type: 'addGroceryItem'
    item: GroceryItem
}

type GroceryItemsAction = AddGroceryItem

const groceryItemsReducer = (state: GroceryItem[], action: GroceryItemsAction) => {
    if (action.type === 'addGroceryItem') {
        return [...state, action.item]
    }
    else return state
}

const availableItems: GroceryItem[] = [
    {
        name: 'milk',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bottle_of_milk.jpg/415px-Bottle_of_milk.jpg'
    },
    {
        name: 'orange juice',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Orange_juice_1_edit1.jpg/1024px-Orange_juice_1_edit1.jpg'
    },
    {
        name: 'eggs',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Eicode_Nederland.jpg/1920px-Eicode_Nederland.jpg'
    }
]

const GroceriesPage: FunctionComponent<Props> = () => {
    const [neededItems, neededItemsDispatch] = useReducer(groceryItemsReducer, [])

    const handleAvailableItemClicked = useCallback((item: GroceryItem) => {
        neededItemsDispatch({type: 'addGroceryItem', item})
    }, [])

    return (
        <div>
            <h3>Need</h3>
            <GroceryItemsBox items={neededItems} />
            <h3>Select from</h3>
            <GroceryItemsBox items={availableItems} onItemClicked={handleAvailableItemClicked} />
        </div>
    )
}

export default GroceriesPage