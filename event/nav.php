/* scroll bar */
/* nav start */
/* .navigation-wrap{
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 1000;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.navbar-toggler:focus {
  outline: unset;
  border: unset;
  box-shadow: none;
}
.nav-link {
  font-size: 18px;
  font-weight: 600;
  color: var(--four-color);
  letter-spacing: 1.2px;
}
.navbar .navbar-nav .nav-item{
  position: relative;
}
.navbar .navbar-nav .nav-item::after{
  content: '';
  margin: 0 auto;
  transition: all .5s;
  height: 4px;
  width: 0%;
  background-color: white ;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.navbar-toggler {
  border-radius: 0 !important; 
  border: 0 !important;
  color: var(--four-color) !important;
}
.navbar .navbar-nav .nav-item:hover::after{
  width: 100%;
}
.navigation-wrap .nav-item {
  padding: 0 0.625rem;
  transition: all 200ms linear;
}
.active {
  color: var(--six-color) !important;
} */
.navigation-wrap .scroll-on {
  position: fixed;
  top: 8px;
  left: 0;
  width: 100%;
  background-color: var(--purewhite) !important;
  box-shadow: 0 0.125rem 1.75rem 0 rgb(0, 0, 0, 0.09);
  transition: all 0.15s ease-in-out 0s;
}