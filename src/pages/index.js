import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Hero from "../components/index/hero"
import Results from "../components/index/results"
import Reviews from "../components/index/reviews"
import Pricing from "../components/index/pricing"
import Benefits from "../components/index/benefits"
import Consultation from "../components/index/consultation"
import Disclaimer from "../components/index/disclaimer"
import Proof from "../components/index/proof"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Benefits />
    <Results />
    <Disclaimer />
    <Reviews />
    <Proof />
    <Pricing />
    <Consultation />
  </Layout>
)

export default IndexPage
