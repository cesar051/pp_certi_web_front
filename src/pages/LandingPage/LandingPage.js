import React, { useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../auth/AuthProvider";

const LandingPage = () => {
    const auth = useAuth();

    useEffect(() => {
        console.log("entreando landing")
        console.log("logueado " + auth.isAuthenticated);
        console.log("usuario " + auth.getUser());

    }, [])

    return (
        <>
            <div className="App col-color">
                <header className="App-header">
                    <div className="App">


                        <div className="title-containerLanding">
                            <SectionHeader
                                title="Bienvenido" subtitle="Al Portal de proveedores de Almacenes Máximo" />

                        </div>

                        {/* Resto de tu contenido */
                            <div className="container">
                                <div>
                                </div>

                                <div className="brand-wrapper">

                                    <p>Desde esta plataforma web accederá a la información financiera de una manera ágil, oportuna y segura , garantizando la comunicación con nuestros proveedores.</p>
                                    <p>Usted podrá consultar la siguiente información financiera:</p>
                                    <ul>
                                        <li>Certificados Tributarios (IVA, ICA y RTF).</li>
                                        <li>Noticias y Notificaciones.</li>
                                    </ul>



                                </div>
                                <div className="panel-heading">
                                    <h4 className="panel-title">Ingresar a mi cuenta</h4>

                                    <LoginForm />
                                    <div className="panel-registro">
                                        <nav>
                                            <p></p>
                                            <Link to="/changePassword">Recordar contraseña</Link> | <Link to="/signup">Registro</Link>
                                        </nav>
                                    </div>
                                </div>

                            </div>

                        }
                    </div>
                </header>
            </div>
        </>
    );
}

export default LandingPage;