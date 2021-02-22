import PropTypes from 'prop-types'
import "./style.css";

const Hero = ({title, instructions}) =>{
  const headingStyle = {
       color: 'White', background : "grey", text: 'center'
   }
  return(
    <hero>
      <h1>{title} </h1>
      <h2 style ={headingStyle }>{instructions}</h2>
    </hero>
  )
}
Hero.defaultProps = {
  title: 'Employee Directory',
  instructions:'Click on each heading to filter or see the search box to manage your results'
}
Hero.prototype = {
  title: PropTypes.string.isRequired
}

export default Hero