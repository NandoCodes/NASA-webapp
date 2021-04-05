package com.nandocodes.imagesservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ImagesServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImagesServiceApplication.class, args);
	}

}
