import api from "./api"


export const getValuesInput = () => {
   const data = {
      title: document.getElementById("title").value,
      patient_cpf: document.getElementById("patient-cpf").value,
      patient_name: document.getElementById("patient-name").value,
      doctor_crm: document.getElementById("doctor-crm").value,
      doctor_name: document.getElementById("doctor-name").value,
      description: document.getElementById("description").value
  };

  return data;
}

export const getActionForm = () => {
   const action = document.getElementById("form-exam").dataset.action;
   return action;
}

export const addExam = (data) => {

    const {title, patient_cpf, patient_name, doctor_crm, doctor_name, description} = data;

    api.post("/exam/register", {
      title: title,
      patient_cpf: patient_cpf,
      patient_name: patient_name,
      crm_doctor: doctor_crm,
      doctor_name: doctor_name,
      description: description
    });
  
}

export const getExams = async () => {
   const res = await api.get("/exam/getAll");
   const data = res.data;    
   return JSON.stringify(data);
}


export const setFields = (data) => {

   const {id, title, patient_cpf, patient_name, crm_doctor, doctor_name, description} = data;

   document.getElementById("form-exam").dataset.action = id;
   document.getElementById("title").value = title;
   document.getElementById("patient-cpf").value = patient_cpf;
   document.getElementById("patient-name").value = patient_name;
   document.getElementById("doctor-crm").value = crm_doctor;
   document.getElementById("doctor-name").value = doctor_name;
   document.getElementById("description").value = description;
}

export const updateExam = (id, data) => {

   const {title, patient_cpf, patient_name, doctor_crm, doctor_name, description} = data;

   api.put("/exam/update", {
      id: id,
      title: title,
      patient_cpf: patient_cpf,
      patient_name: patient_name,
      crm_doctor: doctor_crm,
      doctor_name: doctor_name,
      description: description

   });
}

export const deleteExam = (id) => {
   api.delete(`/exam/delete/${id}`);
}
 

