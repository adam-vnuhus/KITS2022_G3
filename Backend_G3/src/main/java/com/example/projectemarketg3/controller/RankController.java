package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.Ranking;
import com.example.projectemarketg3.entity.User;
import com.example.projectemarketg3.repository.RankingRepository;
import com.example.projectemarketg3.repository.UserRepository;
import com.example.projectemarketg3.request.UserRequest;
import com.example.projectemarketg3.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/rank")
public class RankController {

    @Autowired
    private RankingRepository rankingRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @GetMapping
    public List<Ranking> getAllRank(){
        return rankingRepository.findAll();
    }

    @PostMapping
    public Ranking createNewRanking(@RequestBody Ranking ranking){
       return rankingRepository.save(ranking);
    }

    @PutMapping(value = "/{id}",produces = "application/json")
    public Ranking updateRankingById(@PathVariable Long id,@RequestBody Integer discount){
        Optional<Ranking> rankingOptional = rankingRepository.findById(id);
        if(rankingOptional.isEmpty()) throw new RuntimeException("not found Ranking id = " + id);

        Ranking rankingNew = rankingOptional.get();
        rankingNew.setDiscount(discount);

        rankingRepository.save(rankingNew);
        return rankingNew;
    }

    @GetMapping("/users/{name}")
    public List<UserRequest> getAllUserByRank(@PathVariable String name){
        return userService.findDistinctByRanking_NameOrderByRank_dateDesc(name);
    }
}
