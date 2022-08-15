package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.Product;
import com.example.projectemarketg3.entity.Rating;
import com.example.projectemarketg3.exception.NotFoundException;
import com.example.projectemarketg3.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/rating")
public class RatingController {

    @Autowired
    private RatingRepository ratingRepository;


    // get all rating rest api
    @GetMapping
    public List<Rating> getAllRating(){
        return ratingRepository.findAll();
    }


    // delete rating rest api
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteRating(@PathVariable Long id){
        Rating rating = ratingRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("rating not exist with id :" + id));
        ratingRepository.delete(rating);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
