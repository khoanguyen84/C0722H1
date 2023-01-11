function renderData() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(function (res) {
    //         return res.json()
    //     })
    //     .then(function (posts) {
    //         let htmls = posts.map((post) =>
    //                             `
    //                             <tr>
    //                                 <td>${post.id}</td>
    //                                 <td>${post.title}</td>
    //                                 <td>${post.body}</td>
    //                             </tr>
    //                         `);
    //         document.querySelector('#tbPosts').innerHTML = htmls.join("");
    //     })

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(async function (res) {
            let posts = await res.json();
            let htmls = posts.map((post) =>
                `
                                <tr>
                                    <td>${post.id}</td>
                                    <td>${post.title}</td>
                                    <td>${post.body}</td>
                                </tr>
                            `);
            document.querySelector('#tbPosts').innerHTML = htmls.join("");
        })
}


function getLocations() {
    fetch('https://vapi.vnappmob.com/api/province/')
        .then(async (res) => {
            let provinces = await res.json();
            let htmls = provinces.results.map((province) => `
                <option value='${province.province_id}'>${province.province_name}</option>
            `)
            document.querySelector('#provinces').innerHTML = htmls.join("");
            return provinces.results[0].province_id
        })
        .then(async (province_id) => {
            fetch(`https://vapi.vnappmob.com/api/province/district/${province_id}`)
                .then(async (res) => {
                    let districts = await res.json();
                    console.log(districts.results);
                    return districts.results[0].district_id
                })
                .then(async (district_id) => {
                    fetch(`https://vapi.vnappmob.com/api/province/ward/${district_id}`)
                        .then(async (res) => {
                            let wards = await res.json();
                            console.log(wards.results);
                        })
                })
        })

}
// getLocations()

function getProvinces() {
    fetch('https://vapi.vnappmob.com/api/province/')
        .then(async (res) => {
            let provinces = await res.json();
            let htmls = provinces.results.map((province) => `
                <option value='${province.province_id}'>${province.province_name}</option>
            `)
            document.querySelector('#provinces').innerHTML = htmls.join("");
        })
}

function getDistricts(province_id) {
    fetch(`https://vapi.vnappmob.com/api/province/district/${province_id}`, {
        method: "GET",
        "content-type": "application/json"
    })
        .then(async (res) => {
            let districts = await res.json();
            let htmls = districts.results.map((district) => `
                <option value='${district.district_id}'>${district.district_name}</option>
            `)
            document.querySelector('#districts').innerHTML = htmls.join("");
        })
}

function changeProvince(element) {
    getDistricts(element.value)
}

getProvinces();