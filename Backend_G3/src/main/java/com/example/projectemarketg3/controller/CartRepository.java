package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.CartItem;
import com.example.projectemarketg3.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class CartRepository {

    @Autowired
    private CartItemRepository cartItemRepository;

//    @GetMapping("/cart")
//    public List<CartItem> getCartItemUserById(@RequestParam("userId") Long id){
//        return cartItemRepository.getCartItemBy_UserId(id);
//    }
    @GetMapping("/cart")
    public List<CartItem> getCartItemByUserId(@RequestParam("userId") Long id){
        return cartItemRepository.findCartItemByUser(id);
    }
}
