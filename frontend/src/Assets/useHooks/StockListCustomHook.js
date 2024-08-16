import {useState,useCallback,useRef,useEffect} from 'react';

export const StockListCustomHook = () => {
    
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const box = useRef()

    const showFormBox = useCallback(() => {   
      setIsBoxVisible(pre => !pre)
    },[])
    
    useEffect(() => {
      if(box.current){
        box.current.style.display= isBoxVisible? 'block':'none'
      }
    },[isBoxVisible])

    return {showFormBox,box}
}