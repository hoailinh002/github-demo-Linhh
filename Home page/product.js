//<![CDATA[
    AOS.init();
    
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
      
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          var t = getTimeRemaining(endtime);
      
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
      
      var deadline = new Date(Date.parse(new Date()) + 19 * 24 * 60 * 60 * 1000);
      initializeClock('clockdiv', deadline);
      //]]>
        
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
      var cart__1 = document.getElementById('cart__1');
      
      input_menu.onclick = function ()
          {
              header.style.position = 'fixed';
              container__top.style.paddingTop = '130px'
              products__list.style.top = '80px'
              products__lists.style.top = '80px'
              search__list.style.top = '80px'
              account__list.style.top = '80px'
              footer.style.top = '100px';
              cart__1.style.top = '80px'
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
         
          var sum__money = document.querySelector('#sum__money')

      // input_menu.ondblclick = function () {
      //     header.style.position = 'none';
      //     // header.style.margin = '60px'
      //     }
      