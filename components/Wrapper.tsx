import { FC } from "react"


const Wrapper:FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className="max-w-full mx-3">
            {children}
        </div>
    )
}

export default Wrapper