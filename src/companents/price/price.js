import React, { Component } from 'react';
import './price.css';


class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 32,
      dollar: 730,
      count: 1,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({price: this.state.price + 32})
    this.setState({dollar: this.state.dollar + 730})
  };


  Decrement = () => {
    if(this.state.count == 0){
     this.setState({count: (this.state.count = 0)})
     this.setState({price: this.state.price = 0})
     this.setState({dollar: this.state.dollar = 0})
    }
    else{
      this.setState({count: (this.state.count - 1)})
    }
    this.setState({ price: this.state.price - 32 });
    this.setState({ dollar: this.state.dollar - 730});
  };

  render() {
    return (
      <div className='price'>
        <div className="container">
          <div className="price__box d-flex justify-content-between">
            <div className="price__imgbox">
              <div className="price__main-imgs">
                <img className='price__img-main' src="https://www.kroger.com/product/images/large/front/0001480000106" alt="img" />
              </div>
              <ul className='price__imgs p-0 d-flex align-items-center list-unstyled'>
                <li className='price__image-item'>
                  <img className='price__images' src="https://s.cornershopapp.com/product-images/1530977.jpg?versionId=i2CzmMA6laD_NPw_PkRYutgDnWn4_c2f" alt="img" />
                </li>
                <li className='price__image-item'>
                  <img className='price__images' src="https://s.cornershopapp.com/product-images/1530977.jpg?versionId=i2CzmMA6laD_NPw_PkRYutgDnWn4_c2f" alt="img" />
                </li>
                <li className='price__image-item'>
                  <img className='price__images' src="https://s.cornershopapp.com/product-images/1530977.jpg?versionId=i2CzmMA6laD_NPw_PkRYutgDnWn4_c2f" alt="img" />
                </li>
                <li className='price__image-item'>
                  <img className='price__images' src="https://s.cornershopapp.com/product-images/1530977.jpg?versionId=i2CzmMA6laD_NPw_PkRYutgDnWn4_c2f" alt="img" />
                </li>
                <li className='price__image-item'>
                  <img className='price__images' src="https://s.cornershopapp.com/product-images/1530977.jpg?versionId=i2CzmMA6laD_NPw_PkRYutgDnWn4_c2f" alt="img" />
                </li>
              </ul>
            </div>

            <div className="price__inner">
              <span className='price__name text-uppercase'>mott's</span>
              <h3 className='price__title text-capitalize'>mott's unsweetened applesauce</h3>
              <span className='price__size text-capitalize'>pack size: <span className='price__oz'>24/16.90 oz</span></span>
              <p className='price__text'>Chef Maxwell Applesauce is a delicious classic and part of a <br />healthy diet low in saturated fat width 40% Vitamin C.</p>
              <div className='d-flex align-items-center price__down'>
                <i className='bx bx-cloud-download' ></i>
                <a href="#" className='price__download text-capitalize'>download spec sheet</a>
              </div>

              <div className='price__dollar d-flex align-items-center'>
              <div className="price__price d-flex align-items-center">
                <p className='price__cost'>${this.state.price}</p>
                <span className='price__cent'>80</span>
                <span className='price__cs'>/Cs</span>
                <span className='price__num'>($0.21/oz)</span>
              </div>
                <div className='price__dollar-two d-flex align-items-center'>
                  <p className='price__cost'>${this.state.dollar}</p>
                  <span className='price__cent'>30</span>
                  <span className='price__cs'>/Pit</span>
                </div>
            </div>

            <div className='d-flex align-items-center'>
              <span className='price__approx'>Approx Lead Time:</span>
              <p className='price__day'>12 days</p>
            </div>
            <span className='price__infr'>Information about product was provided by manufacturer</span>
            <div className="price-btns">
              <div className='price-btnsOne'>
                <p className="count-input" >{this.state.count} </p>
                <div className='prises'>
                <button className="minus" onClick={() => this.increment() }><i className='bx bxs-up-arrow' ></i></button>
                <button className="plus" onClick={() => this.Decrement() }><i className='bx bxs-down-arrow' ></i></button>
                </div>
              </div>
                <div className='d-flex'>
                <button className="add-btn"><i className='bx bx-basket'></i> Add to Cart</button>
                <button className="custom-btn"><i className='bx bx-cog' ></i> Custom Pallet</button>
                </div>
              </div>
              <span className='price__infr'>Minimum pallet qunantity: 2</span>

              <div className='price__star d-flex align-items-center'>
                <i className='bx bx-star' ></i>
                <a href='#' className='price__ads'>Add to Wishlist</a>
              </div>
            </div>

            <ul className='m-0 d-flex order-list flex-wrap p-0 list-unstyled'>
            <li className='order-item'>
              <div className='order-inner'>
                <p className='order-text'>1 Pallet Delivered Price</p>
              </div>
              <div className='order-part pt-3'>
                <span className='bold-price'>$5.65/Cs</span>
                <p className='bold-price'>$565.13/Pit</p>
                <p>$0.02/oz</p>
              </div>
            </li>

            <li className='order-item'>
              <div className='order-inner'>
                <p className='order-text'>3 Pallet Delivered Price</p>
              </div>
              <div className='order-part pt-3'>
                <span className='bold-price'>$5.23/Cs</span>
                <p className='bold-price'>$523.13/Pit</p>
                <p>$0.02/oz</p>
                <p className='order-text text-danger'>(Save Up To 12%)</p>
              </div>
            </li>

            <li className='order-item'>
              <div className='order-inner'>
                <p className='order-text'>5 Pallet Delivered Price</p>
              </div>
              <div className='order-part pt-3'>
                <span  className='bold-price'>$4.97/Cs</span>
                <p className='bold-price'>$565.13/Pit</p>
                <p>$0.02/oz</p>
                <p className='order-text text-danger'>(Save Up To 16%)</p>
              </div>
            </li>

            </ul>

          </div>
        </div>
      </div>
    );
  }
};

export default Price;