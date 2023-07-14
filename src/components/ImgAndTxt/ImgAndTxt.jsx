import './ImgAndTxt.scss';

function ImgAndTxt({ imgPlace, img, alt, title, text, btnTxt}) {
  return (
    <div className='component-background'>
      <div className='img-and-text component-container'>
        {imgPlace === 'left' &&
          <img src={img} alt={alt} />
        }

        <div className='text-container'>
          <h3>{ title }</h3>
          <p>{ text }</p>
          <button>{ btnTxt }</button>
        </div>

        {imgPlace === 'right' &&
          <img src={img} alt={alt} />
        }

      </div>
    </div>
  )
}

export default ImgAndTxt;