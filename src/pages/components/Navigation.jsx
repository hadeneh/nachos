import { Link } from "react-router-dom"

export const HomeNavigation = () => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >

            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>Nachos</a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li><a href='#page-top' className='page-scroll'></a></li>
            <li><Link to="/coding">&lt; Start Coding &gt;</Link></li>
            <li><Link to="/">Docs</Link></li>
            <li><Link to="/">Help</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}