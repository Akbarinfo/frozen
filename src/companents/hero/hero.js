import './hero.css'

//images
import logo from '../../images/logo.svg'

export default function Hero(){
  return(
    <div className='hero'>
      <div className="container">
        <div className="hero__box d-flex align-items-center justify-content-between">
          <div className="hero__inner d-flex align-items-center">
            <div className="hero__logobox">
              <a href="#">
                <img src={logo} alt="logo" className='hero__logo' />
              </a>
            </div>
            <div className="hero__search d-flex align-items-center justify-content-between">
              <div className='d-flex align-items-center'>
                <i className='bx bx-search hero__icon' ></i>
                <input type="search" name="text" placeholder='Type to search' id="search" className='hero__input' />
              </div>
              <button className='hero__cate dropdown-toggle text-decoration-none' href="#"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">All Categories </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div className="hero__wrapper">
            <ul className='list-unstyled p-0 m-0 hero__list d-flex align-items-center'>
              <li className='hero__item d-flex align-items-center'>
                <i className='bx bx-cake hero__ikons'></i>
                <a href="#" className='text-capitalize text-decoration-none hero__link'>orders</a>
              </li>
              <li className='hero__item d-flex align-items-center'>
                <i className='bx bx-basket hero__ikons'></i>
                <a href="#" className='text-capitalize text-decoration-none hero__link'>cart</a>
              </li>
              <li className='hero__item d-flex align-items-center'>
                <i className='bx bx-user hero__ikons'></i>
                <a href="#" className='text-capitalize text-decoration-none hero__link'>profile</a>
              </li>
            </ul>
          </div>
        </div>

        <ul className='hero__lists links p-0 m-0 d-flex align-items-center list-unstyled'>
          <li className='links__item'>
            <a href="#" className='text-decoration-none text-capitalize links__link'>food service</a>
          </li>
          <li className='links__item'>
            <a href="#" className='text-decoration-none text-capitalize links__link'>health & beauty</a>
          </li>
          <li className='links__item'>
            <a href="#" className='text-decoration-none text-capitalize links__link'>indutrial ingredients</a>
          </li>
          <li className='links__item'>
            <a href="#" className='text-decoration-none text-capitalize links__link'>beverages</a>
          </li>
          <li className='links__item'>
            <a href="#" className='text-decoration-none text-capitalize links__link'>pet supplies</a>
          </li>
          <li className='links__item'>
            <a href="#" className='text-decoration-none text-capitalize links__link active'>frozen</a>
          </li>
          <li className='links__item'>
            <a href="#" className='text-decoration-none text-capitalize links__link'>cleaning products</a>
          </li>
        </ul>

        <ul className='hero__frozen frozen p-0 d-flex align-items-center list-unstyled'>
          <li className='frozen__item'>
            <a href="#" className='text-decoration-none text-capitalize frozen__link'>frozen</a>
          </li>
          <li className='frozen__item'>
            <i className='bx bx-chevron-right frozen__right' ></i>
          </li>
          <li className='frozen__item'>
            <a href="#" className='text-decoration-none text-capitalize frozen__link'>juice</a>
          </li>
          <li className='frozen__item'>
            <i className='bx bx-chevron-right frozen__right' ></i>
          </li>
          <li className='frozen__item'>
            <a href="#" className='text-decoration-none text-capitalize frozen__link'>mott's unsweetened applesauce</a>
          </li>
        </ul>
        <div className='hero__undo d-flex align-items-center'>
          <i className='bx bx-subdirectory-left'></i>
          <span className='hero__back'>back</span>
        </div>
      </div>
    </div>
  )
}