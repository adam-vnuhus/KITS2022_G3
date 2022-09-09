package com.example.projectemarketg3.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OffRepository extends JpaRepository<Off, Long> {
}