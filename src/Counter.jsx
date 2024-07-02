import { useState } from "react"

function Counter() {
    const [number, setNumber] = useState(0)

    return (
        <>
            <h3>{number}</h3>
            <button
                onClick={() => {
                    setNumber(n => {
                        console.log(n)
                        return n + 1
                    })
                    setNumber(n => {
                        console.log(n)
                        return n + 1
                    })
                    setNumber(n => {
                        console.log(n)
                        return n + 1
                    })
                }}
            >
                +3
            </button>
        </>
    )
}

export default Counter

