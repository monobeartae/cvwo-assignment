import { useState, useEffect, useCallback, useMemo, useRef } from 'react'

interface User {
    id: number,
    username: string
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
    if (n < 2)
        return n;
    return fib(n - 1) + fib(n - 2);
}
const myNum: number = 37;

const Hooks = () => {
    const [count, setCount] = useState<number>(0);
    const [users, setUsers] = useState<User[] | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);
    // console.log(inputRef?.current?.value);

    useEffect(() => {
        // called when users is changed (includes initialisation)

        return () => console.log('unmounting');
    }, [users])

    const addFunc = useCallback(() => setCount(prev => prev + 1), [])

    const fibResult = useMemo<number>(() => fib(myNum), [myNum]); // is not recalculated upon state change/refresh

    return (
        <>
            <button onClick={addFunc}>add</button>
            <p>{fibResult}</p>
            <input ref={inputRef} type="text" />
        </>
    )
}

export default Hooks