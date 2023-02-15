import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Archive = () => {
  const { allWpNews } = useStaticQuery(GET_POSTS);
  const posts = allWpNews.edges;
    console.log(posts);
  return (
    <div>
      <h1>Archive</h1>
      {/* First Loop */}
      <div>
        <h2>{posts[0].node.title}</h2>
        <p>{posts[0].node.date}</p>
        <p>{posts[0].node.excerpt}</p>
        <p>{posts[0].node.slug}</p>
      </div>

      {/* Second Loop */}
      {posts.slice(1).map(({ node }) => {
        //const { title, date } = node.title;
        //const { excerpt } = node;

        return (
          <div key={posts.title}>
            <h2>{posts.title}</h2>
            {/* <p>{date}</p> */}
            {/* <p>{excerpt}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Archive;

const GET_POSTS = graphql`
  query GetPosts {
    allWpNews{
              edges {
                node {
                  id
                  slug
                  title
                  newsSection {
                    imageArchivePage {
                      sourceUrl
                    }
                  }
                }
              }
            }
  }
`;