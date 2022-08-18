package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.User;
import com.example.projectemarketg3.repository.UserRepository;
import com.example.projectemarketg3.request.UserRequest;
import com.example.projectemarketg3.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getCustomer(@RequestParam Optional<String> name){
        if (name.isPresent()){
            List<User> getCustomer = userRepository.findByNameStartsWithIgnoreCaseOrderByNameAsc(name.get());
            return getCustomer.stream().filter(s->!s.getRole().contains("ADMIN")).collect(Collectors.toList());
        }else {
        return userRepository.findAll();}
    }

    @GetMapping("/user/{email}")
    public UserRequest infoUser(@PathVariable String email){
        return userService.infoUserByEmail(email);
    }

    @GetMapping("/users/search")
    public List<User> findNameUser(@RequestParam String name){
        return userRepository.findByNameStartsWithIgnoreCaseOrderByNameAsc(name);
    }

//    USER ADD NEW ADDRESS


}
