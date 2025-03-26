package com.thezaibaelmi.eshop.rest.api.service;


import com.thezaibaelmi.eshop.rest.api.entity.Role;
import com.thezaibaelmi.eshop.rest.api.payload.LoginDto;
import com.thezaibaelmi.eshop.rest.api.payload.RegisterDto;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface AuthService {
    String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    String createRole(Role role);
    String deleteRole(String name);
    List<Role> getAllRoles();
    String getRoleByName(String name);

}