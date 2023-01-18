import React, { useState, useEffect } from "react";

function Post() {
    // Logic
    const [posts, setPosts] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(async (res) => {
                let postRes = await res.json();
                setPosts(postRes);
            })
        // cleanup function
        return () => {
            console.log("Component unmounted");
        }
    }, [keyword, email])

    // UI
    return (
        <div className="container">
            <input type="email" placeholder="email" className="form-control" onInput={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="keyword" className="form-control" onInput={(e) => setKeyword(e.target.value)} />
            <h1>Post List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {console.log("render UI")}
        </div>
    )
}

export default Post;