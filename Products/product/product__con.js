    AOS.init();
      function submit() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var kt = document.getElementById('kt');
        if(email == "" || password == ""){
            kt.innerText = 'Mời bạn nhập đủ các trường';
            kt.style.color = 'red'
        }
        else{
            kt.innerText = 'Đăng nhập thành công !';
            kt.style.color = 'blue'
        }
    }
      var input_menu = document.getElementById('input_menu');
      var header = document.getElementById('header');
      var container__top = document.getElementById('container__top');
      var products__list = document.getElementById('products__list');
      var products__lists = document.getElementById('products__lists');
      var search__list = document.getElementById('search__list');
      var account__list = document.getElementById('account__list');
      var footer = document.getElementById('footer');
      var cart__2 = document.getElementById('cart__2');
      input_menu.onclick = function ()
          {
              header.style.position = 'fixed';
              container__top.style.paddingTop = '130px'
              products__list.style.top = '80px'
              products__lists.style.top = '80px'
              search__list.style.top = '80px'
              account__list.style.top = '80px'
              footer.style.top = '100px'
              cart__2.style.top = '80px'
          }
          
          var add__cart = document.querySelector('.add__cart').onclick = function () {
          document.getElementById('cart').innerHTML+= 
                  `
                      <div class="header__list__item-item-cart-group-list-scroll-item">
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img"></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p>TRUMP Pants Q09652</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 99.9</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 99.9</p></div>
                           <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                              <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                          </div>
                      </div>
                  `;
                  alert('The product has been added to cart! ')

              var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
              var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
              
              delete__cart.onclick = function () {
                  item__cart.style.display= 'none'
              }

          
          }

          // item 2
          
          var add__cart2 = document.querySelector('.add__cart2').onclick = function () {
          document.getElementById('cart').innerHTML+= 
                  `
                      <div class="header__list__item-item-cart-group-list-scroll-item">
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img2"></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p>JACKET AK66012</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 179.9</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 179.9</p></div>
                           <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete header__list__item-item-cart-group-list-scroll-item-top">
                              <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                          </div>
                      </div>
                  `;
                  alert('The product has been added to cart! ')

              var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete2')
              var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item2')

              delete__cart.onclick = function () {
                  item__cart.style.display= 'none'
              }
          
          }



          // item 3
          
          var add__cart3 = document.querySelector('.add__cart3').onclick = function () {
          document.getElementById('cart').innerHTML+= 
                  `
                      <div class="header__list__item-item-cart-group-list-scroll-item">
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img3"></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p>Golden wool cover</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 79.9</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 79.9</p></div>
                           <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                              <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                          </div>
                      </div>
                  `;
                  alert('The product has been added to cart! ')

              var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
              var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')

              delete__cart.onclick = function () {
                  item__cart.style.display= 'none'
              }
          }




          // item 4
          
          var add__cart4 = document.querySelector('.add__cart4').onclick = function () {
          document.getElementById('cart').innerHTML+= 
                  `
                      <div class="header__list__item-item-cart-group-list-scroll-item">
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img4"></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> AK09672 DAY VEST </p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 129.9</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                          <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 129.9</p></div>
                           <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                              <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                          </div>
                      </div>
                  `;
                  alert('The product has been added to cart! ')

              var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
              var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')

              delete__cart.onclick = function () {
                  item__cart.style.display= 'none'
              }
          }


          // item 5
          
          var add__cart5 = document.querySelector('.add__cart5').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img5"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DRESS WITH CODE </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 259.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 259.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
            

            // item 6
          
          var add__cart6 = document.querySelector('.add__cart6').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img6"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DRESS AK27662 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 319.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 319.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
            

            // item 7
          
          var add__cart7 = document.querySelector('.add__cart7').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img7"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> AK30802 TEXTILE </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 209.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 209.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
            

            // item 8
          
          var add__cart8 = document.querySelector('.add__cart8').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img8"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
            

             // item 9
          
          var add__cart9 = document.querySelector('.add__cart9').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img9"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
            

             // item 10
          
          var add__cart10 = document.querySelector('.add__cart10').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img10"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
  
             // item 11
          
          var add__cart11 = document.querySelector('.add__cart11').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img11"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
  
             // item 12
          
          var add__cart12 = document.querySelector('.add__cart12').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img12"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
  
             // item 13
          
          var add__cart13 = document.querySelector('.add__cart13').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img13"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
            

             // item 14
          
          var add__cart14 = document.querySelector('.add__cart14').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img14"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
            

             // item 15
          
          var add__cart15 = document.querySelector('.add__cart15').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img15"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
            

             // item 16
          
          var add__cart16 = document.querySelector('.add__cart16').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img16"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
            

             // item 17
          
          var add__cart17 = document.querySelector('.add__cart17').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img17"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
            

             // item 18
          
          var add__cart18 = document.querySelector('.add__cart18').onclick = function () {
            document.getElementById('cart').innerHTML+= 
                    `
                        <div class="header__list__item-item-cart-group-list-scroll-item">
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-img header__list__item-item-cart-group-list-scroll-item-img18"></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-text"><p> DESIGN SM26609 </p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price"><p>$ 599.9</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-quantily"><p>1</p></div>
                            <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-item-price header__list__item-item-cart-group-list-scroll-item-money"><p>$ 599.9</p></div>
                             <div class="header__list__item-item-cart-group-list-scroll-item-top header__list__item-item-cart-group-list-scroll-delete">
                                <div class="header__list__item-item-cart-group-list-scroll-delete-button"><i class="far fa-trash-alt"></i> <span>Delete</span></div>
                            </div>
                        </div>
                    `;
                    alert('The product has been added to cart! ')
  
                var delete__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-delete')
                var item__cart = document.querySelector('.header__list__item-item-cart-group-list-scroll-item')
  
                delete__cart.onclick = function () {
                    item__cart.style.display= 'none'
                }
            }
  
  
  
      // like trái tim
      var heart__red = document.querySelector('.heart__red')
          heart__red.onclick = function () {
              heart__red.style.color = 'red'
          }
      
      var heart__red2 = document.querySelector('.heart__red2')
          heart__red2.onclick = function () {
              heart__red2.style.color = 'red'
          }
      var heart__red3 = document.querySelector('.heart__red3')
          heart__red3.onclick = function () {
              heart__red3.style.color = 'red'
          }
      var heart__red4 = document.querySelector('.heart__red4')
          heart__red4.onclick = function () {
              heart__red4.style.color = 'red'
          }
          var heart__red5 = document.querySelector('.heart__red5')
          heart__red5.onclick = function () {
              heart__red5.style.color = 'red'
          }
          var heart__red6 = document.querySelector('.heart__red6')
          heart__red6.onclick = function () {
              heart__red6.style.color = 'red'
          }
          var heart__red7 = document.querySelector('.heart__red7')
          heart__red7.onclick = function () {
              heart__red7.style.color = 'red'
          }
          var heart__red8 = document.querySelector('.heart__red8')
          heart__red8.onclick = function () {
              heart__red8.style.color = 'red'
          }
          var heart__red9 = document.querySelector('.heart__red9')
          heart__red9.onclick = function () {
              heart__red9.style.color = 'red'
          }
          var heart__red10 = document.querySelector('.heart__red10')
          heart__red10.onclick = function () {
              heart__red10.style.color = 'red'
          }
          var heart__red11 = document.querySelector('.heart__red11')
          heart__red11.onclick = function () {
              heart__red11.style.color = 'red'
          }
          var heart__red12 = document.querySelector('.heart__red12')
          heart__red12.onclick = function () {
              heart__red12.style.color = 'red'
          }
          var heart__red13 = document.querySelector('.heart__red13')
          heart__red13.onclick = function () {
              heart__red13.style.color = 'red'
          }
          var heart__red14 = document.querySelector('.heart__red14')
          heart__red14.onclick = function () {
              heart__red14.style.color = 'red'
          }
          var heart__red15 = document.querySelector('.heart__red15')
          heart__red15.onclick = function () {
              heart__red15.style.color = 'red'
          }
          var heart__red16 = document.querySelector('.heart__red16')
          heart__red16.onclick = function () {
              heart__red16.style.color = 'red'
          }
          var heart__red17 = document.querySelector('.heart__red17')
          heart__red17.onclick = function () {
              heart__red17.style.color = 'red'
          }
          var heart__red18 = document.querySelector('.heart__red18')
          heart__red18.onclick = function () {
              heart__red19.style.color = 'red'
          }
          var sum__money = document.querySelector('#sum__money')

      // input_menu.ondblclick = function () {
      //     header.style.position = 'none';
      //     // header.style.margin = '60px'
      //     }
      