package com.nandocodes.imagesservice.repository;

import com.nandocodes.imagesservice.models.Image;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ImageRepository extends PagingAndSortingRepository<Image,Integer> {

    boolean existsByUserIdAndUrl(Integer userId, String url);

    void deleteByUserIdAndUrl(Integer userId, String url);

    Optional<List<Image>> findAllByUserId(Integer userId);
}
