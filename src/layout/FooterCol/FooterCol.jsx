import './FooterCol.scss';

function FooterCol({ obj }) {
    return (
        <div className="footer-col">
            <span className='bold' >{ obj.title }</span>

            {obj.content.map(item => 
                <span>{ item }</span>
            )}
        </div>
    )
}

export default FooterCol;