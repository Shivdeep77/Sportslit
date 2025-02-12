package com.sportslit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sportslit.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
