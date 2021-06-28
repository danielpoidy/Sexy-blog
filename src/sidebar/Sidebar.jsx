import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">A PROPOS</span>
        <img className='sidebarImg' src="https://images.pexels.com/photos/7433162/pexels-photo-7433162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique incidunt quibusdam iure voluptates.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Celibataires</li>
          <li className="sidebarListItem">Maries</li>
          <li className="sidebarListItem">Seductions</li>
          <li className="sidebarListItem">Temoignages</li>
          <li className="sidebarListItem">Confiance</li>
          <li className="sidebarListItem">Sexualite</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">NOUS REJOINDRE</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-youtube-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
