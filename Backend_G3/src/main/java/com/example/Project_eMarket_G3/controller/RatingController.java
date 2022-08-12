package com.example.Project_eMarket_G3.controller;

import com.example.Project_eMarket_G3.entity.Rating;
import com.example.Project_eMarket_G3.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rating")
public class RatingController {

    @Autowired
    private RatingRepository ratingRepository;

    @GetMapping
    public List<Rating> getAllRating(){
        return ratingRepository.findAll();
    }
}
