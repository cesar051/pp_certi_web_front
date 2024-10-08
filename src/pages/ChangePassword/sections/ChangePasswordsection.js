import React from "react";
import './Changepassword.css';

const ChangePasswordsection = (props) => {

    return (
        <>
            <div className="form-group1">
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>

                    <input type="password" className="form-control"
                        id="password" placeholder="Contraseña" name="password" value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordValidation">Repita Su Contraseña</label>
                    <input type="password" className="form-control"
                        id="passwordValidation" placeholder="Repita su contraseña" name="passwordValidation" value={props.passwordValidation} onChange={(e) => props.setPasswordValidation(e.target.value)} />
                </div>
                <div className="form-group form-group-margin"> {/* Create a dedicated margin class */}
                    <button type="submit" className="btn btn-primary" onClick={() => props.requestPasswordChange()}>
                        Cambiar
                    </button>
                </div>
            </div>
        </>
    );
}

export default ChangePasswordsection;