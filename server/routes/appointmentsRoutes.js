import { Router } from "express";
import {
    registerAppointment,
    listAppointment,
    updateAppointment,
    deleteAppointment
} from "../controllers/appointmentController.js"

export const appointmentRoutes = Router();

// /appointment/register
appointmentRoutes.post("/register", registerAppointment);

appointmentRoutes.get("/getAll", listAppointment);

appointmentRoutes.put("/update", updateAppointment);

appointmentRoutes.delete("/delete/:id", deleteAppointment);