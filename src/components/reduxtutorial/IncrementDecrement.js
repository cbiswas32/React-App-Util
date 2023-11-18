import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement, changeByAmount } from './slices/plusminusSlies';

export default function IncrementDecrement() {
  // For getting the data from store  
  const incState = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();  
  return (
    <div className='d-flex flex-column align-items-center'  style={{marginTop:"100px"}}>
      <h2 className="dflex text-secondary mb-5">Counter: Increment Decrement</h2>
      <div className="input-group mb-3" style={{ maxWidth:'650px', minHeight:'100px'}}>
        <button className="btn btn-outline-danger py-5 px-5" type="button" style={{fontSize:'30px'}} onClick={()=>dispatch(changeByAmount({sign: 'minus', amount: 5}))}>- 5</button>
        <button className="btn btn-outline-danger py-5 px-5" style={{fontSize:'20px'}}  type="button" onClick={()=>dispatch(decrement())}>-</button>
        <input disabled='true' type="text" className="form-control" style={{ textAlign:'center', fontSize:'60px' }} value={incState} aria-label="Example text with two button addons"/>
        <button className="btn btn-outline-success py-5 px-5" style={{fontSize:'20px'}}  type="button" onClick={()=>dispatch(increment())}>+</button>
        <button className="btn btn-outline-success py-5 px-5" style={{fontSize:'30px'}} type="button" onClick={()=>dispatch(changeByAmount({sign: 'plus', amount: 5}))}>+ 5</button>
      </div>
    </div>
  );
}
