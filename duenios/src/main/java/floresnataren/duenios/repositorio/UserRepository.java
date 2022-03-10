package floresnataren.duenios.repositorio;

import floresnataren.duenios.modelo.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Usuario,Integer> {
    Usuario save(Usuario user);
}
