import React, { useState, useEffect } from "react";

const menus = [
    {
        "name": "Post Manager",
        "uri": "posts"
    },
    {
        "name": "Comments Manager",
        "uri": "comments"
    },
    {
        "name": "Photos Manager",
        "uri": "photos"
    },
]
function DataManager() {
    const [selectMenu, setSelectMenu] = useState(menus[0]);
    const [state, setState] = useState({
        loading: false,
        data: []
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${selectMenu.uri}`)
            .then(async (res) => {
                setState({ ...state, loading: true })
                let resData = await res.json();
                setState({
                    ...state,
                    loading: false,
                    data: resData
                });
            })
    }, [selectMenu])

    const { loading, data } = state;
    return (
        <div className="container">
            <div className="d-flex">
                {
                    menus.map((item) => (
                        <button className={`${item == selectMenu ? "btn-danger" : "btn-primary"} "btn btn-sm  me-1" `}
                            key={item.uri}
                            onClick={() => setSelectMenu(item)}
                        >{item.name}</button>
                    ))
                }
            </div>
            <div className="row">
                {
                    loading ? <p className="text-danger">Loading ...</p> : (
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
                                    data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            {
                                                item.url ? (
                                                    <td>
                                                        <img className="w-25" src={item.url} alt="" />
                                                    </td>
                                                ) :
                                                    (
                                                        <td>
                                                            {item.title || item.email}
                                                        </td>
                                                    )
                                            }
                                            <td>{item.body || item.title}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    )
}

export default DataManager;