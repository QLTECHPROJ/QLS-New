import React from "react"


import { graphql,Link } from "gatsby"
import Layout from "../components/Layout"
//import Layout from "../components/Layout"
//import Carousel from "../components/Carousel"


export default ({ data }) => {

  const post = data.allWpPage.edges[0].node
  console.log(post)
  return (
    <Layout>
    <>
      {/* <Carousel /> */}
      <>
      <section className="page-header">
            {/* <div className="page-header__bg" style="backgroundImage: url({../../breadcumb2.png});"> */}
			{/* <div className="page-header__bg" style={{ backgroundImage: `url(../../breadcumb2.png)` }} > */}
				
            {/* </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="page-header__wrapper">
                            <div className="page-header__content">
                                <h2>{post.title}</h2>
                                <div className="page-header__menu">
                                    <ul>title
                                        <li><Link to={"/"}>Home </Link></li>
                                        <li>{post.title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <section class="section02 pt_100 pb_100">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-6">
						<div class="about_img">
							<div class="main_img_top">
								<img src={post.featuredImage.node.sourceUrl}/>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="about_contne">
							<h2 class="pb_20">{post.title}</h2>
							<p class="pb_20" dangerouslySetInnerHTML={{ __html: post.content }}></p>

                            <p class="pb_20">With our extensive experience in developing advanced SAR systems for lunar and Mars missions, and more, our experts also provide advanced training as well as consultation for the development of SAR systems and knowledgeable talent.</p>
                          
						</div>
					</div>
				</div>
			</div>
		</section> */}

        
      </>
      </>
      </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
          
          
        }
      }
    }
  }`