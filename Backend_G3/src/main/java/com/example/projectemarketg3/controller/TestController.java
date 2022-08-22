package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.OrderDetail;
import com.example.projectemarketg3.repository.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {
    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @GetMapping("/order")
    public OrderDetail findByProduct_IdAndUser_Id(){
        return orderDetailRepository.findByProduct_IdAndUser_Id(4L,22L);
    }
}
