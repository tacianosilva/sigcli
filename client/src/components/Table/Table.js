import React from "react";
import { handleDeleteButton } from "../../pages/Patient/Patient"; 

export default function TableCard(props){
    return <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.username}</td>
        <td>{props.cpf}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>
            <button className="card-button" onClick={() => {
                document.getElementById("id").defaultValue = props.id;
                document.getElementById("name").defaultValue = props.name;
                document.getElementById("cpf").defaultValue = props.cpf;
                document.getElementById("phone").defaultValue = props.phone;
                document.getElementById("email").defaultValue = props.email;
                document.getElementById("username").defaultValue = props.username;
                document.getElementById("password").defaultValue = props.password;
                document.getElementById("form-patient").dataset.action = "edit"
            }}>Edit</button>
            <button className="card-button" onClick={() => handleDeleteButton(props.id)}>Del</button>
        </td>
    </tr>
}