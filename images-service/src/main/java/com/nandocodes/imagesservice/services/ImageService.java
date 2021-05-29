package com.nandocodes.imagesservice.services;

import com.nandocodes.imagesservice.models.Image;
import com.nandocodes.imagesservice.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ImageService {
    @Autowired
    ImageRepository imageRepository;


    public Image save(Image image) {
        return imageRepository.save(image);
    }

    public boolean existsByUserIdAndUrl(Integer userId, String url) {
        return imageRepository.existsByUserIdAndUrl(userId,url);
    }

    public void deleteByUserIdAndUrl(Integer userId, String url) {
        imageRepository.deleteByUserIdAndUrl(userId,url);
    }
}
