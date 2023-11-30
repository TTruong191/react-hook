import { useState, useEffect } from "react";

const Countdown = (props) => {

    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count === 0){
            props.onTimesup();
            return;
        }

        let Timer = setInterval (() => {
            setCount(count -1)
        }, 1000)
        return () => {
            clearInterval(Timer)
        }
    }, [count]);

    return (
        <p>{count}</p>

    )
}

export default Countdown;