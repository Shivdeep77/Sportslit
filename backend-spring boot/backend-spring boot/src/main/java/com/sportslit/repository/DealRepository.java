package com.sportslit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sportslit.model.Deal;

public interface DealRepository extends JpaRepository<Deal,Long> {

}
