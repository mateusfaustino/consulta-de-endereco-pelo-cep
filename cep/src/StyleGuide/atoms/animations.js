export default `
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

`
export const animation = {
  rotating:"animation-name: rotating; animation-iteration-count: infinite;animation-duration: 1s;animation-timing-function: linear;"  
}
