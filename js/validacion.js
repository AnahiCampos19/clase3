document.addEventListener("DOMContentLoaded", () => {
    // Obtener los elementos del formulario
    const formLogin = document.getElementById("formLogin");
    const formRegistro = document.getElementById("formRegistro");

    const nombre = document.getElementById("nombre");
    const emailLogin = document.getElementById("emailLogin");
    const passwordLogin = document.getElementById("passwordLogin");
    const terminosLogin = document.getElementById("terminosLogin");
    const btnEnviarLogin = document.getElementById("btnEnviarLogin");

    const emailRegistro = document.getElementById("emailRegistro");
    const usuario = document.getElementById("usuario");
    const passwordRegistro = document.getElementById("passwordRegistro");
    const terminosRegistro = document.getElementById("terminosRegistro");
    const btnEnviarRegistro = document.getElementById("btnEnviarRegistro");

    // Errores predeterminados
    const errores = {
        nombre: "El nombre no puede estar vacío.",
        email: "El email debe ser válido (incluye '@' y '.').",
        password: "La contraseña debe tener al menos 6 caracteres.",
        usuario: "El usuario no puede estar vacío."
    };

    // Función para validar un campo
    const validarCampo = (campo, errorId, condicion, mensaje) => {
        const error = document.getElementById(errorId);
        if (condicion) {
            error.innerText = mensaje;
            return false;
        } else {
            error.innerText = "";
            return true;
        }
    };

    // Validar el formulario de inicio de sesión
    const validarFormularioLogin = () => {
        const emailValido = validarCampo(
            emailLogin,
            "erroremailLogin",
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLogin.value),
            errores.email
        );

        const passwordValido = validarCampo(
            passwordLogin,
            "errorpasswordLogin",
            passwordLogin.value.length < 6,
            errores.password
        );

        const formularioValido = emailValido && passwordValido && terminosLogin.checked;

        btnEnviarLogin.disabled = !formularioValido;

        if (formularioValido) {
            btnEnviarLogin.classList.add("active");
        } else {
            btnEnviarLogin.classList.remove("active");
        }
    };

    // Validar el formulario de registro
    const validarFormularioRegistro = () => {
        const nombreValido = validarCampo(
            nombre,
            "errorNombre",
            nombre.value.trim() === "",
            errores.nombre
        );

        const emailValido = validarCampo(
            emailRegistro,
            "erroremailRegistro",
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRegistro.value),
            errores.email
        );

        const usuarioValido = validarCampo(
            usuario,
            "errorUsuario",
            usuario.value.trim() === "",
            errores.usuario
        );

        const passwordValido = validarCampo(
            passwordRegistro,
            "errorPasswordRegistro",
            passwordRegistro.value.length < 6,
            errores.password
        );

        const formularioValido = nombreValido && emailValido && usuarioValido && passwordValido && terminosRegistro.checked;

        btnEnviarRegistro.disabled = !formularioValido;

        if (formularioValido) {
            btnEnviarRegistro.classList.add("active");
        } else {
            btnEnviarRegistro.classList.remove("active");
        }
    };

    // Escuchar cambios en los campos de los formularios
    formLogin.addEventListener("input", validarFormularioLogin);
    formRegistro.addEventListener("input", validarFormularioRegistro);

    // Escuchar cambios en los checkboxes
    terminosLogin.addEventListener("change", validarFormularioLogin);
    terminosRegistro.addEventListener("change", validarFormularioRegistro);

    // Controlar el envío del formulario de login
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Formulario de inicio de sesión enviado con éxito!");
    });

    // Controlar el envío del formulario de registro
    formRegistro.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Formulario de registro enviado con éxito!");
    });
});
