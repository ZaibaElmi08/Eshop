package com.thezaibaelmi.eshop.rest.api.repository;

import com.thezaibaelmi.eshop.rest.api.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}