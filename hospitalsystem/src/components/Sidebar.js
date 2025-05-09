import React, { useState } from "react";
import { ExpandMore, ExpandLess, Dashboard, Settings, Info, 
  BarChart, TableView, Engineering, Apartment, AssuredWorkload, 
  Handyman, Assignment, Devices, PendingActions, Checklist } from "@mui/icons-material";
import { List, ListItem, ListItemText, ListItemIcon, Collapse, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/styles/sidebar.css";

const menuItems = [
  {
    text: "Registros",
    icon: <TableView style={{color:"var(--color-primary)"}} />, 
    subMenu: [
      { text: "Mantenimientos", icon: <Handyman style={{color:"var(--color-secondary)"}} />, path:"/registros_mantenimientos" },
      { text: "Gestión de equipos", icon: <Devices style={{color:"var(--color-secondary)"}} />, path:"/registros_equipos" },
      { text: "Departamentos", icon: <Apartment style={{color:"var(--color-secondary)"}} />,  path:"/departamentos" },
      { text: "Áreas", icon: <AssuredWorkload style={{color:"var(--color-secondary)"}} />,  path:"/areas" },
      { text: "Personal", icon: <Engineering style={{color:"var(--color-secondary)"}} />,  path:"/registro_usuarios" },
    ],
  },
  {
    text: "Pendientes",
    icon: <PendingActions style={{color:"var(--color-primary)"}} />, 
    path: "/altas_pendientes",
  },
  {
    text: "Seguimientos",
    icon: <Checklist style={{color:"var(--color-primary)"}} />, 
    path: "/seguimientos",
  },
  {
    text: "Reportes",
    icon: <BarChart style={{color:"var(--color-primary)"}} />, 
    path: "#",
  },
  {
    text: "Desempeños",
    icon: <Assignment style={{color:"var(--color-primary)"}} />, 
    path: "/desempeños",
  },
  //{
    //text: "Menú",
    //icon: <Dashboard style={{color:"var(--color-primary)"}} />, 
    //subMenu: [
      //{ text: "Submenú", icon: <Info style={{color:"var(--color-secondary)"}} /> },
      //{ text: "Submenú", icon: <Settings style={{color:"var(--color-secondary)"}} /> },
    //],
  //},
];

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState({});

  const handleToggle = (index) => {
    setOpenMenu((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="">
    <div className="sidebar">
      <div className="tittle_seccion">
        <h5>Gestión de mantenimientos</h5>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <div key={index}>
            <ListItem button component={Link} to={item.path || "#"} onClick={() => handleToggle(index)} className="menu-item">
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {item.subMenu ? (openMenu[index] ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItem>
            {item.subMenu && (
              <Collapse in={openMenu[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className="submenu-container">
                  {item.subMenu.map((sub, subIndex) => (
                    <ListItem button component={Link} to={sub.path || "#"} key={subIndex} className="submenu-item">
                      <ListItemIcon>{sub.icon}</ListItemIcon>
                      <ListItemText primary={sub.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </div>
    </div>
  );
};

export default Sidebar;