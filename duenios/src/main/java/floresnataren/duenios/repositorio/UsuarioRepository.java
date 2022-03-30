package floresnataren.duenios.repositorio;

import floresnataren.duenios.modelo.Duenio;
import org.springframework.data.repository.CrudRepository;
import floresnataren.duenios.modelo.Usuario;

import java.util.List;

public interface UsuarioRepository extends CrudRepository <Usuario, Integer> {

    Usuario findByNombreAndPassword(String nombre, String password);
    List<Usuario> findAll();
    Usuario save(Usuario user);

    @Override
    void deleteById(Integer integer);
}
