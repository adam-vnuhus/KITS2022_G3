package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.User;
import com.example.projectemarketg3.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v2")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getCustomer(){
        return userRepository.findByRoleOrderByNameAsc();
    }

    @GetMapping("/name-user")
    public List<User> findNameUser(@RequestParam String name){
        return userRepository.findByNameStartsWith(name);
    }
}
