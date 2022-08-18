package com.example.projectemarketg3.repository;

import com.example.projectemarketg3.dto.RatingDto;
import com.example.projectemarketg3.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface RatingRepository extends JpaRepository<Rating, Long> {
    List<Rating> getByStarOrderByCreateAtDesc(Integer star);

//    @Query("select new com.example.projectemarketg3.dto.RatingDto(r.createAt,r.note,r.image,r.star,r.checking,r.user.id,r.product.id) " +
//            "from Rating r order by r.createAt DESC")
//    List<RatingDto> getByOrderByCreateAtDesc();


}