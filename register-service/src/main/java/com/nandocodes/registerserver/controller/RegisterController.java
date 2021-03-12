package com.nandocodes.registerserver.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {
    @GetMapping("nasa/register")
    public void getRegisterPage() {
        
    }
}
