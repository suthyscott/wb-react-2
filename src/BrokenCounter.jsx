import { useState } from "react"

function BrokenCounter() {
    const [number, setNumber] = useState(0)

    return (
        <>
            <h3>{number}</h3>
            <button
                onClick={() => {
                    setNumber(number + 1)
                    setNumber(number + 1)
                    setNumber(number + 1)
                }}
            >
                +3
            </button>
        </>
    )
}

export default BrokenCounter