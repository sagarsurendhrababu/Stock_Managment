import { StockListCustomHook } from '../useHooks/StockListCustomHook'
import AddStockForm from '../components/Stock/AddStockForm'
import StockTable from '../components/Stock/StockTable'
import StockSearchBar from '../components/Stock/StockSearchBar'

export default function StockList() {
  const {showFormBox,box} = StockListCustomHook();
  return (
    <>
      <StockSearchBar showFormBox={showFormBox}/>
      <AddStockForm box={box}/>
      <StockTable/>
    </>
  )
}
