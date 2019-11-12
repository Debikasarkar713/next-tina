import React from 'react';
import Link from 'next/link';
import Layout from '../components/MyLayout';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title='Hello Post' />
        <PostLink title='Hello Learn' />
        <PostLink title='Hello Deploy' />
      </ul>
    </Layout>
  );
}
