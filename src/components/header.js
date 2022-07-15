import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div class="navbar bg-base-100 md:justify-between">
      <nav class="flex w-full justify-between py-5">
        <a class="btn btn-ghost text-xl normal-case">Simon Tutors</a>
        <a class="btn ">Get started</a>
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
