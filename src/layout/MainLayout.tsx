import React from 'react'
import HeaderComp from '../component/HeaderComp'

const MainLayout: React.FC<{ children?: any }> = ({ children }) => {
    return (
        <>
            <HeaderComp></HeaderComp>
            <div className="container">{children}</div>
        </>
    )
}
export default MainLayout