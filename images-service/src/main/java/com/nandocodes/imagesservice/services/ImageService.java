package com.nandocodes.imagesservice.services;

import com.nandocodes.imagesservice.models.Image;
import com.nandocodes.imagesservice.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    @Autowired
    ImageRepository imageRepository;

    public boolean existsByUrl(String url) {
      return imageRepository.existsByUrl(url);
    }

    public Image save(Image image) {
        return imageRepository.save(image);
    }
}
