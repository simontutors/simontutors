import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div class="navbar fixed z-50 my-0 min-h-0 border-b-2 border-white/20 bg-black/70 px-5 py-3 text-primary-content backdrop-blur-lg md:justify-between md:px-7 lg:px-20">
      <nav class="grid w-full grid-cols-3 ">
        <a
          class="btn btn-outline btn-info btn-sm justify-self-start text-white outline-gray-100"
          href="#consultation"
        >
          SHSAT Blog
        </a>
        <span class="justify-self-center text-2xl">Simon Tutors</span>

        <a
          class="btn-white btn btn-outline btn-sm justify-self-end "
          href="#consultation"
        >
          Get Tutoring
        </a>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
