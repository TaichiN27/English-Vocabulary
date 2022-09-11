import React from 'react'

export const List = ({ list, setList }) => {

    //let d = new Date(Date.parse(list.created));

    console.log(list);
    //let f = d.getMonth() + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();


    return (
        <div className="list bg-white my-5">
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col-2">No.</th>
                        <th scope="col-4">English</th>
                        <th scope="col-6">Japanese</th>
                        <th scope="col-8">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, key) =>
                        <tr key={key}>
                            <th scope="row">{key + 1}</th>
                            <td>{value.eng}</td>
                            <td>{value.jap}</td>
                            <td>{value.created.getMonth() + 1 + "/" + value.created.getDate() + " " + value.created.getHours() + ":" + value.created.getMinutes()}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
