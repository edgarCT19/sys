import React from "react";
import { Card, CardContent, Typography, Chip, LinearProgress } from "@mui/material";
import { FaTools } from "react-icons/fa";
import { MdComputer, MdDone, MdPendingActions, MdWarning, MdCheckCircle } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/seguimientos.css";

const Seguimientos = ({ status, progress, motivoRetraso }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case "Servicio Generado": return "info";
            case "En Atención": return "primary";
            case "Retrasado": return "warning";
            case "Finalizado": return "success";
            default: return "default";
        }
    };

    return (
        <div className="right-content">
            <div className="container padding-bottom-3x mb-1">
                <div className="card mb-3">
                    <div className="p-4 text-center text-white text-lg rounded-top" style={{background:"var(--color-primary)"}}>
                        <span className="text-uppercase text-light">Seguimiento de Mantenimiento - </span>
                        <span className="text-medium">09839871</span>
                    </div>
                    <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                        <div className="w-100 text-center py-1 px-2"><span className="text-medium">Tipo de Mantenimiento:</span> Preventivo</div>
                        <div className="w-100 text-center py-1 px-2"><span className="text-medium">Equipo:</span> S/N - 9809qd83927 </div>
                        <div className="w-100 text-center py-1 px-2"><span className="text-medium">Progreso:</span> {progress}%</div>
                    </div>
                    <div className="card-body">
                        <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                            <div className={`step ${status === "Servicio Generado" || status === "En Atención" || status === "Retrasado" || status === "Finalizado" ? "completed" : ""}`}>
                                <div className="step-icon-wrap">
                                    <div className="step-icon"><MdComputer /></div>
                                </div>
                                <h4 className="step-title">Servicio Generado</h4>
                            </div>
                            <div className={`step ${status === "En Atención" || status === "Retrasado" || status === "Finalizado" ? "completed" : ""}`}>
                                <div className="step-icon-wrap">
                                    <div className="step-icon"><FaTools /></div>
                                </div>
                                <h4 className="step-title">En Atención</h4>
                            </div>
                            <div className={`step ${status === "Retrasado" ? "completed" : ""}`}>
                                <div className="step-icon-wrap">
                                    <div className="step-icon"><MdWarning /></div>
                                </div>
                                <h4 className="step-title">Retrasado</h4>
                                {status === "Retrasado" && <p className="text-warning">Motivo: {motivoRetraso}</p>}
                            </div>
                            <div className={`step ${status === "Finalizado" ? "completed" : ""}`}>
                                <div className="step-icon-wrap">
                                    <div className="step-icon"><MdCheckCircle /></div>
                                </div>
                                <h4 className="step-title">Finalizado</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seguimientos;