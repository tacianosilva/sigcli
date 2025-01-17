import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerExam} from "../../components/Container/Container";
import {BoxExam} from "../../components/BoxExam/BoxExam";
import HeaderExam from "../../components/HeaderExam/HeaderExam";
import FormExam from "../../components/FormExam/FormExam";
import { addExam, deleteExam, getActionForm, getExams, getValuesInput, messageConfirm, setFields, updateExam } from "../../services/ExamServices";
import ListExam from "../../components/ListExam/ListExam";
import Swal from 'sweetalert2';


export default function Exam(){

    const [listExams, setListExams] = useState([]);

    // POST 
    const handleSaveButton = () => {

        const data = getValuesInput();

        const action = getActionForm();

        if(action === "add"){
            addExam(data);
            messageConfirm("New exam added.");
        }else {
            updateExam(action, data);
            messageConfirm("The informations about this exam were updated.")
        }

    }

    // LIST 
    // Após a renderização, retornar todos os exames 

    useEffect( () => {

        const fetchData = async () => {
            const data = await getExams();
            const exams = JSON.parse(data)
            setListExams(exams)
        }
    
        fetchData();
    }, []);
    
    // SETFIELDS  

    const handlePreparaToUpdate = (ExamID) => {

        let data = {}
        listExams.forEach(element => {
            element.id === ExamID ? data = element : data = data
        });

        setFields(data);
    
    }

    // DELETE 

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#0C6170',
            confirmButtonText: 'Yes, delete it!'
         }).then((result) => {
            if (result.isConfirmed) {
               deleteExam(id);
               document.location.reload();
            }
         })
    }


    return (
        <ContainerExam>
            <Nav />
            <BoxExam>
                <HeaderExam />
                <FormExam handleSaveButton={handleSaveButton} />
               <ListExam exams={listExams} setFields={handlePreparaToUpdate} handleDelete={handleDelete} />
            </BoxExam>
        </ContainerExam>
    )
}