package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.Category;
import com.example.projectemarketg3.entity.OrderDetail;
import com.example.projectemarketg3.entity.Orders;
import com.example.projectemarketg3.entity.Product;
import com.example.projectemarketg3.exception.NotFoundException;
import com.example.projectemarketg3.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private StatusRepository statusRepository;
    @Autowired
    private UserRepository userRepository;


//=========================== CATEGORY ===============================================

    // create a new category rest api
    @PostMapping("/category")
    public Category createCategory(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

    // update category rest api
    @PutMapping("category/{id}")
    public ResponseEntity<Category> updatedCategory(@PathVariable Long id, @RequestBody Category categoryDetails) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("category not exist with id :" + id));

        category.setName(categoryDetails.getName());
        return ResponseEntity.ok(categoryRepository.save(category));
    }

    //    delete by id
    @DeleteMapping("category/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("category not exist with id :" + id));
        categoryRepository.delete(category);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

//================================= ORDER =====================================

// update order rest api
@PutMapping("/api/admin/orders/{id}")
public ResponseEntity<Orders> updateOrder(@PathVariable Long id, @RequestBody Orders orderDetails) {
    Orders order = ordersRepository.findById(id)
            .orElseThrow(() -> new NotFoundException
                    ("order not found with id :" + id));

    order.setNote(orderDetails.getNote());
    order.setTotalPrice(orderDetails.getTotalPrice());
    order.setOrderDetails(orderDetails.getOrderDetails());
    order.setStatus(orderDetails.getStatus());
    order.setUser(orderDetails.getUser());

    ordersRepository.save(order);
    return ResponseEntity.ok(order);
}

    // delete order rest api
    @DeleteMapping("/api/admin/orders/{id}")
    public Orders deleteOrder(@PathVariable Long id) {
        Orders order = ordersRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("order not exist with id :" + id));
        ordersRepository.delete(order);
        return order;
    }

//======================= DETAILS ORDER ============================

    // delete order detail rest api
    @DeleteMapping("/api/admin/orders/details/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteOrderDetails(@PathVariable Long id) {
        OrderDetail orderdetails = orderDetailRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("orderdetails not exist with id :" + id));
        orderDetailRepository.delete(orderdetails);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

//    ============================== PRODUCT ===============================

// create a new product rest api
@PostMapping("/api/admin/products")
public Product createProduct(@RequestBody Product product) {
    return productRepository.save(product);
}

    // delete product rest api
    @DeleteMapping("/api/admin/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("product not exist with id :" + id));
        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
