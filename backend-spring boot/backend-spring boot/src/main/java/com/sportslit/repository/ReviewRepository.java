package com.sportslit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sportslit.model.Product;
import com.sportslit.model.Review;
import com.sportslit.model.User;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review,Long> {
    List<Review> findReviewsByUserId(Long userId);
    List<Review> findReviewsByProductId(Long productId);
}
