import React from 'react'
import Header from './Header'

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col ">

            <Header />
            <main className="flex-1 pt-0">
                <div>
                    {children}
                </div>
            </main>

        </div>
    )
}

export default CommonLayout