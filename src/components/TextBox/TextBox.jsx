import './TextBox.scss';

function TextBox({text, buttonTxt}){
    return (
        <div className='text-box-background'>
            <div className='text-box'>
                <p>{ text }</p>
                <button>{ buttonTxt }</button>
            </div>
        </div>
    )
}

export default TextBox;