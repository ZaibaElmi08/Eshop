package com.thezaibaelmi.eshop.rest.api.service;

import com.thezaibaelmi.eshop.rest.api.entity.Category;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface CategoryService {
    List<Category> getAllCategories();
    Category getCategoryById(Long id);
    Category saveCategory(Category newCategory);
    Category updateCategory(Long id, Category updateCategory);
    void deleteCategory(Long id);
}
