package com.nandocodes.loginservice.services;


import com.nandocodes.loginservice.models.ERole;
import com.nandocodes.loginservice.models.Role;
import com.nandocodes.loginservice.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public Optional<Role> findByName(ERole roleUser) {
        return roleRepository.findByName(roleUser);
    }
}
