
import { ACTIONS } from "./App"
export default function DigitButton({ dispatch, digit }) {
    return <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })} className="calc__btns-1 btns"><p className="btns-text">{digit}</p></button>
}