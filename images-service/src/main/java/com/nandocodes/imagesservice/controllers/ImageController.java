package com.nandocodes.imagesservice.controllers;

import com.nandocodes.imagesservice.DTO.ImageDto;
import com.nandocodes.imagesservice.models.Image;
import com.nandocodes.imagesservice.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDate;

@Controller
@RequestMapping("/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/saveImage")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity saveImage(@RequestBody ImageDto imageDto) {
        if (imageService.existsByUrl(imageDto.getUrl())) {
            return new ResponseEntity(HttpStatus.FOUND);
        }

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if ((authentication instanceof UsernamePasswordAuthenticationToken)) {
            Long userId = (Long) authentication.getCredentials();

            Image image = new Image(imageDto.getTitle(),
                    imageDto.getExplanation(),
                    imageDto.getUrl(), userId);

            LocalDate imageDate = imageDto.getDate();
            image.setDate(imageDate);

            imageService.save(image);
            return new ResponseEntity(HttpStatus.CREATED);
        } else
            return new ResponseEntity(HttpStatus.CONFLICT);
    }


}
