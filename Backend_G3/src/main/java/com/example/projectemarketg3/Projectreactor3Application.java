package com.example.projectemarketg3;

import com.github.javafaker.Faker;
import com.github.slugify.Slugify;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Random;

@SpringBootApplication
public class Projectreactor3Application {

    public static void main(String[] args) {
        SpringApplication.run(Projectreactor3Application.class, args);
    }

    @Bean
    Slugify slugify() {
        return new Slugify();
    }

    @Bean
    Random random() {
        return new Random();
    }

    @Bean
    Faker faker() {
        return new Faker();
    }

}
