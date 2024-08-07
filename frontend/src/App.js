import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchStockRequest} from './Assets/redux/features/stockSlice'

function App() {
  const dispatch = useDispatch()
  const {stock} = useSelector(state => state.stock)

  useEffect(()=>{
    dispatch(fetchStockRequest())
  },[dispatch])

  return (
    <div className="App">
        {stock && stock.map(e => (
          <div key={e._id}>{e.name}</div>
        ))}
    </div>
  );
}

export default App;
