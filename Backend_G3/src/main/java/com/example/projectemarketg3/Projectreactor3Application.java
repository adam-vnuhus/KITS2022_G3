package com.example.projectemarketg3;

import com.github.javafaker.Faker;
import com.github.slugify.Slugify;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.Random;

@SpringBootApplication
@EnableScheduling
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

    @Bean
    public OpenAPI openApi() {
        return new OpenAPI()
                .info(new Info()
                        .title("List API G3Mart")
                        .description("Danh sách các API G3Mart")
                        .version("v1.0")
                        .contact(new Contact()
                                .name("Thu Hang")
                                .email("14thuhang@gmail.com"))
                );
    }

//    @Bean
//    public CommonsMultipartResolver multipartResolver() {
//        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
//        resolver.setDefaultEncoding("UFT-8");
//
//        return resolver;
//    }
//
//    @Bean
//    public Cloudinary cloudinary(){
//        //bam
//        return new Cloudinary(ObjectUtils.asMap(
//                "cloud_name","ddyozlbyd",
//                "api_key","839698234848697",
//                "api_secret","k4ayjlOLzsp-LtxgQEKt27oXUmo",
//                "secure",true
//        ));
//    }

}
