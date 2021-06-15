const Animations = `
  @keyframes rotating {
    from {
      transform: rotate(0deg); }
    to {
      transform: rotate(360deg); } }
  @keyframes ripple{
  0%{
    width: 0px;
    height: 0px;
    opacity: $opacity80;
  }
  100%{
    width: 500px;
    height: 500px;
    opacity: 0;
  }
}
@-webkit-keyframes scale-up {
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
}
@keyframes scale-up-ver-top {
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
}


`
export const animation = {
  scaleUp:"-webkit-animation: scale-up-ver-top 1s ;animation: scale-up-ver-top 1s ;",
  rotating:"animation-name: rotating; animation-iteration-count: infinite;animation-duration: 1s;animation-timing-function: linear;",  
  ripple:"animation-name: ripple; animation-duration: 1s;"  

}
export default Animations