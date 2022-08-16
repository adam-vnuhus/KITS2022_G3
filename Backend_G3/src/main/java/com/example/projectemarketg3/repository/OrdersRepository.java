package com.example.projectemarketg3.repository;

import com.example.projectemarketg3.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface OrdersRepository extends JpaRepository<Orders, Long> {
    List<Orders> getByUser_IdOrderByCreateAtDesc(Long id);

}