
import { ACTIONS } from "./App"
export default function OperationButton({ dispatch, operation }) {
    return <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })} className="calc__btns-1 btns"><p className="btns-text">{operation}</p></button>
}