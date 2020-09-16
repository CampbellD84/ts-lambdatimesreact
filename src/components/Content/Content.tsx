import React, { useState } from 'react'

import Tabs from './Tabs'
import Cards from './Cards'

import { tabData, cardData } from '../../data'

const Content = () => {
    const [tabs, setTabs] = useState(tabData)
    const [cards, setCards] = useState(cardData)
    const [selected, setSelected] = useState<String>("")

    const changeSelected = (tab: String) => {
        setSelected(tab)
    }

    const filterCards = () => {
        if (selected === 'all') {
            return cards
        } else {
            return cards.filter(card => card.tab !== selected)
        }
    }

    return (
        <div className="content-container">
            <Tabs tabs={tabs} selectedTab={selected} selectTabHandler={changeSelected} />
            <Cards cards={filterCards()} />
        </div>
    )
}

export default Content