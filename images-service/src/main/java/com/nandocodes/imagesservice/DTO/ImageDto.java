package com.nandocodes.imagesservice.DTO;


import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

public class ImageDto {
    @NotBlank
    private String title;
    @NotBlank
    @Column(length = 3500)
    String explanation;
    @NotBlank
    String url;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
