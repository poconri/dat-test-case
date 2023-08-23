import { useStore } from "effector-react";
import $store from '../../store'

export const Warning = () => {
    const store = useStore($store);
    return(<div
        className="warning"
    >{store.error ?? '<200e>'}</div>)
}