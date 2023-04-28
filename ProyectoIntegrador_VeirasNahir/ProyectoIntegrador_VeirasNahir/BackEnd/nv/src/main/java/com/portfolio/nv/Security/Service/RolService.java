
package com.portfolio.nv.Security.Service;

import com.portfolio.nv.Security.Entity.Rol;
import com.portfolio.nv.Security.Enums.RolNombre;
import com.portfolio.nv.Security.Repository.iRolRepository;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RolService {
@Autowired
iRolRepository iRolRepository;


public Optional<Rol> getByRolNombre(RolNombre rolNombre) {
return iRolRepository.findByRolNombre(rolNombre);
}

public void save(Rol rol) {
    iRolRepository.save(rol);
    
}



}
