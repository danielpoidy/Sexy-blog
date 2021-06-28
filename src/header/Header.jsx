import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">Actualites</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src="https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="headerImg" />
    </div>
  )
}

export default Header
