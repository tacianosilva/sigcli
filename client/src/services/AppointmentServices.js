import api from "./api"
import Swal from 'sweetalert2';


export const getValuesInput = () => {
    const data = {
       title: document.getElementById("title").value,
       patient_cpf: document.getElementById("patient-cpf").value,
       patient_name: document.getElementById("patient-name").value,
       doctor_crm: document.getElementById("doctor-crm").value,
       doctor_name: document.getElementById("doctor-name").value,
       data_appointment: document.getElementById("data-appointment").value,
       description: document.getElementById("description").value
   };
 
   return data;
 }
 
 export const getActionForm = () => {
    const action = document.getElementById("form-appointment").dataset.action;
    return action;
 }
 
 export const addAppointment = (data) => {
 
     const {title, patient_cpf, patient_name, doctor_crm, doctor_name, data_appointment, description} = data;

    api.post("/appointment/register", {
        title: title,
        patient_cpf: patient_cpf,
        patient_name: patient_name,
        crm_doctor: doctor_crm,
        doctor_name: doctor_name,
        data_appointment: data_appointment,
        description: description
    });
    
    Swal.fire({
      title: 'Success',
      text: 'New Appointment added.',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#0C6170',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        document.location.reload();
      }
    });


}

export const getAppointments = async () => {
    const res = await api.get("/appointment/getAll");
    const data = res.data;    
    return JSON.stringify(data);
 }


 export const setFields = (data) => {

    const {id, title, patient_cpf, patient_name, crm_doctor, doctor_name, data_appointment, description} = data;
 
    document.getElementById("form-appointment").dataset.action = id;
    document.getElementById("title").value = title;
    document.getElementById("patient-cpf").value = patient_cpf;
    document.getElementById("patient-name").value = patient_name;
    document.getElementById("doctor-crm").value = crm_doctor;
    document.getElementById("doctor-name").value = doctor_name;
    document.getElementById("data-appointment").value = data_appointment;
    document.getElementById("description").value = description;
 }
 
 export const updateAppointment = (id, data) => {
 
    const {title, patient_cpf, patient_name, doctor_crm, doctor_name, data_appointment, description} = data;
 
    api.put("/appointment/update", {
       id: id,
       title: title,
       patient_cpf: patient_cpf,
       patient_name: patient_name,
       crm_doctor: doctor_crm,
       doctor_name: doctor_name,
       data_appointment: data_appointment,
       description: description
 
    });

    Swal.fire({
      title: 'Success',
      text: 'The informations about this Appointment were updated.',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#0C6170',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        document.location.reload();
      }
    });
   

}

export const deleteAppointment = (id) => {
   api.delete(`/appointment/delete/${id}`);
}
 
 