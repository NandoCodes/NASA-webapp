package com.nandocodes.imagesservice.repository;

import com.nandocodes.imagesservice.models.Image;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends PagingAndSortingRepository<Image,Integer> {

    boolean existsByUserIdAndUrl(Integer userId, String url);

    void deleteByUserIdAndUrl(Integer userId, String url);
}
