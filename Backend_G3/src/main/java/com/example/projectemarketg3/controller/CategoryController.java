package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.Category;
import com.example.projectemarketg3.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;



    @GetMapping
    public List<Category> getAllCategory(){
        return categoryRepository.findAll();
    }

}
