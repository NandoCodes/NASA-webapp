package com.nandocodes.imagesservice.controllers;

import com.nandocodes.imagesservice.DTO.ImageDto;
import com.nandocodes.imagesservice.models.Image;
import com.nandocodes.imagesservice.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/saveImage")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity saveImage(@Valid @RequestBody ImageDto imageDto) {
        Integer userId = getUserId();
        Image image = new Image(imageDto.getTitle(),
                imageDto.getExplanation(),
                imageDto.getUrl(), userId);

        LocalDate imageDate = imageDto.getDate();
        image.setDate(imageDate);

        imageService.save(image);
        return new ResponseEntity(HttpStatus.CREATED);

    }

    @PostMapping("/deleteImage")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity deleteImage(@Valid @RequestBody ImageDto imageDto) {
        Integer userId = getUserId();
        imageService.deleteByUserIdAndUrl(userId, imageDto.getUrl());
        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping("/checkExists")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity checkImageExists(@Valid @RequestBody ImageDto imageDto) {
        Integer userId = getUserId();
        if (userId != null && imageService.existsByUserIdAndUrl(userId, imageDto.getUrl())) {
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


    @GetMapping("/getImages")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<List<Image>> getImages(@Param("sortField") String sortField,
                                                 @Param("keyword") String keyword) {
        Integer userId = getUserId();
        if (userId == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        Optional<List<Image>> images = imageService.findAllByUserIdAndExplanationContains(userId,sortField,keyword);
        if (images.isPresent())
            return new ResponseEntity<List<Image>>(images.get(), HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    private Integer getUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if ((authentication instanceof UsernamePasswordAuthenticationToken)) {
            Integer userId = (Integer) authentication.getCredentials();
            return userId;
        } else
            return null;
    }

}
