import Head from './head';
import Content from './content';

const Blog = ( props ) => {
    return <main>
        <Head heading={ props.data.heading } description={props.data.description} />
        <Content content={ props.data.content} author={ props.data.author }/>
    </main>
}

export default Blog;