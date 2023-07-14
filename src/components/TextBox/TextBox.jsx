import './TextBox.scss';

function TextBox({text, buttonTxt}){
    return (
        <div className='component-background'>
            <div className='text-box component-container text-container'>
                <p>{ text }</p>
                <button>{ buttonTxt }</button>
            </div>
        </div>
    )
}

export default TextBox;