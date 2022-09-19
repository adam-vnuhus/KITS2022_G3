package com.example.basic1;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerBasic {
@GetMapping("/home")
public ResponseEntity<?> home (){
    return ResponseEntity.ok("Hello World");
}

    @GetMapping("/profile")
    public ResponseEntity<?> prrofile (){
        return ResponseEntity.ok("Profile");
    }
}
