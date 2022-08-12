package com.example.Project_eMarket_G3.repository;

import com.example.Project_eMarket_G3.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface StatusRepository extends JpaRepository<Status, Long> {
}