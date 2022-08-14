package com.example.projectemarketg3.repository;

import com.example.projectemarketg3.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RatingRepository extends JpaRepository<Rating, Long> {
}