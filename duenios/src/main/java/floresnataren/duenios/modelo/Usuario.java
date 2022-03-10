package floresnataren.duenios.modelo;


import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nombre")
    private String nombre;
    @Column(name = "password")
    private int  password;
    @Column(name = "rol")
    private String rol;
    @Column(name = "primerNombre")
    private String primerNombre;
    @Column(name = "apellido")
    private String apellido;

    public Usuario(){}

    public Usuario(int id, String nombre, int password, String rol, String primerNombre, String apellido) {
        this.id = id;
        this.nombre = nombre;
        this.password = password;
        this.rol = rol;
        this.primerNombre = primerNombre;
        this.apellido = apellido;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
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
