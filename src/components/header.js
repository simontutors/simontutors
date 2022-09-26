import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div class="navbar bg-primary px-5 md:justify-between md:px-7 lg:px-20">
      <nav class="flex w-full justify-between py-5">
        <span class="text-2xl">Simon Tutors</span>
        <a class="btn btn-accent" href="#consultation">
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
