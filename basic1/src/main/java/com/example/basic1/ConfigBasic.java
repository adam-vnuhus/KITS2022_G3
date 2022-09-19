package com.example.basic1;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class ConfigBasic extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(
                        "/home"
                ).permitAll()

                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginProcessingUrl("/login")

                .permitAll()
                .defaultSuccessUrl("/home");
    }
}
