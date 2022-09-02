import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div class="navbar bg-base-100 px-0 md:justify-between">
      <nav class="flex w-full justify-between py-5">
        <span class="text-2xl">Simon Tutors</span>
        <a class="btn btn-primary" href="#consultation">
          Get started
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
