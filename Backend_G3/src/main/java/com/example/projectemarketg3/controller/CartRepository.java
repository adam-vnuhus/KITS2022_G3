package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.CartItem;
import com.example.projectemarketg3.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class CartRepository {

    @Autowired
    private CartItemRepository cartItemRepository;

    @GetMapping("/{id}/cart")
    public List<CartItem> getCartItemUserById(@PathVariable Long id){
        return cartItemRepository.getCartItemBy_UserId(id);
    }
}
