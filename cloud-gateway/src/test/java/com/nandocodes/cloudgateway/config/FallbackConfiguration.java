package com.nandocodes.cloudgateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.reactive.function.server.*;
import reactor.core.publisher.Mono;

@Configuration
public class FallbackConfiguration {

    @Bean
    public RouterFunction<ServerResponse> routerFunction() {
        return RouterFunctions
                .route(RequestPredicates.POST("/auth-fallback"),
                        this::handlePostFallback)
                .andRoute(RequestPredicates.GET("/images-fallback"),
                        this::handleGetFallback)
                .andRoute(RequestPredicates.POST("/images-fallback"),
                        this::handlePostFallback);
    }

    public Mono<ServerResponse> handleGetFallback(ServerRequest serverRequest) {
        return ServerResponse.ok().body(Mono.empty(), String.class);
    }

    public Mono<ServerResponse> handlePostFallback(ServerRequest serverRequest) {
        return ServerResponse.status(HttpStatus.SERVICE_UNAVAILABLE).build();
    }
}
