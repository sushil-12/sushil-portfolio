import React, { useCallback } from "react";

interface CounterProps {
  count: number;
  age: number;
}

const Counter = React.memo<CounterProps>(({ count, age }) => {

    const testFunction = useCallback(() => {
      return count + age;
    }, []);
  return (
    <>
      <div>Counter: {count}</div>
      <div>Age: {age}</div>
      <div>Test: {testFunction()}</div>
    </>
  );
}, (nextPropss, prevProps) => {
  return nextPropss.count === prevProps.count 
});

export default Counter;