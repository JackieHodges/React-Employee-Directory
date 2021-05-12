import React from "react";

function DataTable() {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark's image</td>
                        <td>Mark Cubin</td>
                        <td>728-392-1923</td>
                        <td>MarkCubin@aol.com</td>
                        <td>02-02-2020</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;