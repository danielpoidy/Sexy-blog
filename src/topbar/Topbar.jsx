import './topbar.css'

import React from 'react'

const Topbar = () => {
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-youtube-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItem'>Accueil</li>
          <li className='topListItem'>A propos</li>
          <li className='topListItem'>Activites</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Deconnecter</li>
        </ul>
      </div>
      <div className="topRight">
        <img className='topImg' src="https://fr.shopping.rakuten.com/photo/femmes-sexy-lingerie-puree-nuisette-corps-complet-harnais-poisson-net-bdsm-erotique-vetements-de-nuit-sexy-prono-vetements-de-nuit-transparent-femme-costume-red-1436525182_ML.jpg" alt="" />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar
