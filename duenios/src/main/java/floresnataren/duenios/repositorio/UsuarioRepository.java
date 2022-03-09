package floresnataren.duenios.repositorio;

import org.springframework.data.repository.CrudRepository;
import floresnataren.duenios.modelo.Usuario;

import java.util.List;

public interface UsuarioRepository extends CrudRepository <Usuario, Integer> {

    Usuario findByNombreAndPassword(String nombre,String password);

}
