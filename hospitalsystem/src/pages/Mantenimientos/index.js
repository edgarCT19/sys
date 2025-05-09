import React, { useState } from "react";
import { Tabs, Tab, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Table_Preventivo from "./table_preventivo";
import Table_Correctivo from "./table_correctivo";
import Table_Pendientes from "./table_pendientes";

const Mantenimientos = () => {
    const [tabValue, setTabValue] = useState(0);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);

    const handleOpenDeleteDialog = (itemId) => {
        setDeleteItemId(itemId);
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
        setDeleteItemId(null);
    };

    const handleDelete = () => {
        console.log(`Elemento con ID: ${deleteItemId} eliminado.`);
        handleCloseDeleteDialog();
    };

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className="w-100 right-content">
            <div className="card">
                <Tabs value={tabValue} onChange={handleChangeTab} indicatorColor="secondary" textColor="secondary" centered>
                    <Tab label="Mantenimientos preventivos" />
                    <Tab label="Mantenimientos correctivos" />
                    <Tab label="Mantenimientos pendientes" />
                </Tabs>
            </div>

            {tabValue === 0 && <Table_Preventivo />}
            {tabValue === 1 && <Table_Correctivo />}
            {tabValue === 2 && <Table_Pendientes />}

            <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
                <DialogTitle>Eliminar Registro</DialogTitle>
                <DialogContent>
                    <p>¿Estás seguro de que deseas eliminar este registro?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteDialog} color="primary">Cancelar</Button>
                    <Button onClick={handleDelete} color="error">Eliminar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Mantenimientos;