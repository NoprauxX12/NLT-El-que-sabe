import React from "react";

const Footer=()=>{
    return(
        <>
        <footer className="bg-primary text-light py-4 custom-footer">
            <div className="container ">
                <div className="row ">
                <div className="col-md-4 ">
                    <h5>El Que Sabe</h5>
                    <p>El Que Sabe es un producto único, diseñado para usuarios que necesitan ofrecer o tomar servicios para abordar necesidades específicas, a menudo difíciles de descubrir en línea.Síguenos:</p>
                    <img src="/images/iconFacebook.jpg" alt="Facebook icon" className="icons"/>
                    <img src="/images/instagramLogo.png" alt="Instagram icon" className="icons"/>
                </div>
                <div className="col-md-4">
                    <h5>Buscador</h5>
                    <p><a href="#search" style={{ color: "#000" }}>Nav Bar</a></p>
                    <p><a href="#explore" style={{color: "#000" }}>Todos los freelancers</a></p>
                    <p><a href="#botones_ingreso" style={{color: "#000" }}>Registro</a></p>
                    <p><a href="#descubre" style={{color: "#000" }}>Descubre y conecta</a></p>
                </div>

                <div className="col-md-4">
                    <h5>Suscripción</h5>
                    <form>
                    <div className="input-group mb-3">
                        <p>Únete a nuestra lista de correos para mantenerte informado sobre nuestros lanzamientos de funciones más recientes, nuevos freelancers u ofertas, consejos y trucos para navegar por El Que Sabe.</p>
                        <input type="email" className="form-control" placeholder="Ingresa tu correo electrónico" aria-label="Ingresa tu correo electrónico" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                        <button className="btn btn-light" type="button" id="button-addon2">Suscribirse</button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            <div className="col" style={{display: "block"}}>
                <p className="text-center">Copyright © 2024 El Que Sabe</p>
            </div>
            <div className="row" style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
            <p className="text-center" style={{width:"auto", marginTop:"10px", fontWeight:"bold"}}>Powered by </p> 
            <img src="/images/logo-magneto.png" alt="Magneto" style={{width:"10%"}}/>
            </div>
            </footer>
        </>
    );
}

export default Footer;