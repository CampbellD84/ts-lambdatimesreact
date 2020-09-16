import React from 'react'

const Tab = (props: any) => {
    return (
        <div
            className={props.selectedTab === props.tab ? `tab active-tab` : `tab`}
            onClick={() => props.selectTabHandler(props.tab)}
        >
            {props.tab.toUpperCase()}
        </div>
    )
}

export default Tab