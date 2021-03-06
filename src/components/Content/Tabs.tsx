import React from 'react'
import Tab from './Tab'

const Tabs = (props: any) => {
    return (
        <div className="tabs">
            <div className="topics">
                <span className="title">TRENDING TOPICS</span>
                {props.tabs.map((tab: any) => (
                    <Tab selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} />
                ))}
            </div>
        </div>
    )
}

export default Tabs