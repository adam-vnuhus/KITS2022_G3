package com.example.Project_eMarket_G3.controller;

import com.example.Project_eMarket_G3.entity.OrderDetail;
import com.example.Project_eMarket_G3.entity.Orders;
import com.example.Project_eMarket_G3.repository.OrderDetailRepository;
import com.example.Project_eMarket_G3.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {


    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;


    @GetMapping
    public List<Orders> getAllOrder(){
        return ordersRepository.findAll();
    }

    @GetMapping("/details")
    public List<OrderDetail> getAllDetail(){
        return orderDetailRepository.findAll();
    }

    @GetMapping("/purchases/{id}")
    public long purchasesProductById(@PathVariable Long id){
        return orderDetailRepository.countByProduct_Id(id);
    }

}
