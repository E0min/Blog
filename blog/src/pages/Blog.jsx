import NavBar from "../components/NavBar"
import "./Blog.css"
const Blog = () => {
    return (
        <>
            <div className="container-row">
                <NavBar />
            </div>
            <hr/>
            <div className="page-intro">
                <h1>Blog</h1>
                <h3>기록하고 싶거나 공유하고 싶은 글을 저장합니다.</h3>
            </div>
            <hr/>
        </>



    )

}

export default Blog;