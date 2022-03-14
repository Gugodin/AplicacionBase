package floresnataren.duenios.modelo;
public class RegisterJSON {
    String nombre;
    String password;
    String rol;
    String primerNombre;
    String apellido;

    public RegisterJSON(String nombre, String password, String rol, String primerNombre, String apellido) {
        this.nombre = nombre;
        this.password = password;
        this.rol = rol;
        this.primerNombre = primerNombre;
        this.apellido = apellido;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public String getPrimerNombre() {
        return primerNombre;
    }

    public void setPrimerNombre(String primerNombre) {
        this.primerNombre = primerNombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
}
